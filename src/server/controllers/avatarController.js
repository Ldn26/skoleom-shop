/**
 * avatarController.js — Skoleom™
 *
 * Endpoints (voir avatarRoutes.js) :
 *   POST   /api/ai/avatar          -> createAvatar   (crée le jumeau numérique)
 *   GET    /api/ai/avatar/user/:id -> listUserAvatars
 *   GET    /api/ai/avatar/:uuid    -> getAvatarById
 *   PUT    /api/ai/avatar/:uuid    -> updateAvatar
 *   DELETE /api/ai/avatar/:uuid    -> deleteAvatar
 *
 * FLUX createAvatar :
 *   1. Valide la photo (Gemini vision — contrôle qualité)
 *   2. Upload de la photo d'origine sur Cloudinary        -> original_url
 *   3. Génère le "jumeau numérique" (Gemini image)         -> upload Cloudinary -> avatar_url
 *      (si la génération échoue, on retombe sur la photo d'origine)
 *   4. Persiste TOUT en base (URLs Cloudinary, PAS de base64)
 *   5. getAvatar(uuid) est exporté pour /tryon (recharge l'image depuis Cloudinary)
 */

const crypto     = require('crypto');
const axios      = require('axios');
const cloudinary = require('cloudinary').v2;
const Avatar     = require('../sequelize/schemas/avatar');

/* ────────────────────────────────────────────────────────────
   CONFIG
   ──────────────────────────────────────────────────────────── */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure:     true,
});

const GEMINI_BASE        = 'https://generativelanguage.googleapis.com/v1beta/models';
const GEMINI_VISION      = 'gemini-2.5-flash';        // contrôle qualité
const GEMINI_IMAGE       = 'gemini-2.5-flash-image';  // génération du jumeau ("Nano Banana")
const CLOUDINARY_FOLDER  = 'skoleom/avatars';

/* Cache mémoire pour /tryon (évite de re-télécharger Cloudinary à chaque appel).
   Se vide au redémarrage -> getAvatar() recharge depuis la base au besoin. */
const avatarCache = new Map();

/* ────────────────────────────────────────────────────────────
   HELPERS
   ──────────────────────────────────────────────────────────── */
function parseDataUrl(dataUrl) {
  const match = /^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/.exec(dataUrl || '');
  if (!match) return null;
  return { mimeType: match[1], base64: match[2] };
}

function toDataUrl({ mimeType, base64 }) {
  return `data:${mimeType};base64,${base64}`;
}

function normalizeMeasurements(m = {}) {
  return {
    height: m.height != null ? Number(m.height) : null,
    weight: m.weight != null ? Number(m.weight) : null,
    chest:  m.chest  != null ? Number(m.chest)  : null,
    waist:  m.waist  != null ? Number(m.waist)  : null,
  };
}

/** Upload une image (data URL ou base64) vers Cloudinary. */
async function uploadToCloudinary(dataUrl, { tag } = {}) {
  const res = await cloudinary.uploader.upload(dataUrl, {
    folder: CLOUDINARY_FOLDER,
    resource_type: 'image',
    // transformation légère : on borne la taille pour maîtriser le poids/coût
    transformation: [{ width: 1024, height: 1536, crop: 'limit', quality: 'auto' }],
    context: tag ? { tag } : undefined,
  });
  return { url: res.secure_url, publicId: res.public_id };
}

/** Supprime un asset Cloudinary (silencieux si déjà absent). */
async function destroyFromCloudinary(publicId) {
  if (!publicId) return;
  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
  } catch (err) {
    console.warn('[cloudinary destroy]', publicId, err.message);
  }
}

/** Télécharge une image Cloudinary et la renvoie en { mimeType, base64 } (pour /tryon). */
async function fetchImageAsBase64(url) {
  const { data, headers } = await axios.get(url, { responseType: 'arraybuffer', timeout: 30000 });
  return {
    mimeType: headers['content-type'] || 'image/jpeg',
    base64:   Buffer.from(data).toString('base64'),
  };
}

/* ────────────────────────────────────────────────────────────
   GEMINI — 1) Contrôle qualité de la photo
   ──────────────────────────────────────────────────────────── */
async function analyzePhoto({ mimeType, base64 }) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY manquant');

  const system = `Tu es un contrôleur qualité de photos pour une cabine d'essayage virtuelle.
Tu évalues UNIQUEMENT si la photo permet de fabriquer un avatar corps entier fiable.
Réponds STRICTEMENT en JSON valide, sans texte ni markdown.`;

  const prompt = `Analyse la photo et renvoie exactement ce JSON :
{
  "personDetected": true|false,
  "fullBodyVisible": true|false,
  "framing": "plein-pied|buste|portrait|gros-plan|inconnu",
  "pose": "face|profil|dos|inconnu",
  "lighting": "bonne|moyenne|faible",
  "background": "uni|charge|inconnu",
  "quality": "bonne|moyenne|faible",
  "usableForTryOn": true|false,
  "issues": ["problèmes courts et concrets"],
  "advice": "un conseil si la photo n'est pas idéale, sinon ''"
}`;

  try {
    const { data } = await axios.post(
      `${GEMINI_BASE}/${GEMINI_VISION}:generateContent`,
      {
        systemInstruction: { parts: [{ text: system }] },
        contents: [{
          role: 'user',
          parts: [
            { inline_data: { mime_type: mimeType, data: base64 } },
            { text: prompt },
          ],
        }],
        generationConfig: { responseMimeType: 'application/json', temperature: 0.2 },
      },
      { params: { key: apiKey }, headers: { 'Content-Type': 'application/json' }, timeout: 30000 }
    );
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '{}';
    return JSON.parse(String(raw).replace(/```json|```/g, '').trim());
  } catch (err) {
    const status = err.response?.status;
    const detail = err.response?.data ? JSON.stringify(err.response.data) : err.message;
    throw new Error(`Gemini vision${status ? ` ${status}` : ''}: ${detail}`);
  }
}


async function generateTwinImage({ mimeType, base64 }, measurements) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY manquant');

  const m = normalizeMeasurements(measurements);
  const prompt = `PHOTOGRAPHIE RÉELLE d'un être humain réel — PAS un avatar, PAS un rendu 3D, PAS un personnage de jeu.

Objectif : à partir de la photo fournie, produire une image qui ressemble à une VRAIE PHOTO de studio de cette même personne, indiscernable d'un cliché pris au reflex.

IDENTITÉ (préserver à l'identique) :
- même visage, mêmes traits, même carnation exacte, même coiffure et couleur de cheveux
- même morphologie, même carrure, mêmes proportions que la personne réelle

RÉALISME (essentiel) :
- peau réaliste avec texture naturelle (pores, grain, micro-imperfections), JAMAIS lisse/plastique
- cheveux détaillés, yeux naturels, ombres douces cohérentes
- rendu type appareil photo 50mm, éclairage softbox, légère profondeur de champ
- INTERDIT : aspect 3D, CGI, jeu vidéo, cartoon, illustration, figurine, mannequin en plastique

CORPS ENTIER :
- personne DEBOUT, corps entier de la tête aux pieds, centrée, pose neutre de face, bras légèrement écartés
- si la photo ne montre qu'un buste/portrait, reconstruis le reste du corps de façon crédible

MENSURATIONS CIBLES : taille ${m.height ?? '?'} cm · poids ${m.weight ?? '?'} kg · poitrine ${m.chest ?? '?'} cm · tour de taille ${m.waist ?? '?'} cm

TENUE PAR DÉFAUT (IMPORTANT — tenue PUDIQUE et COUVRANTE) :
- vêtements décontractés simples et MODESTES : un t-shirt uni à manches courtes/longues + un pantalon long uni
- coupe CONFORTABLE et DÉCONTRACTÉE, PAS moulante, PAS près du corps, PAS de tenue révélatrice ou serrée
- corps entièrement couvert (épaules, torse, jambes) ; aucune peau dénudée hormis visage, cou, mains
- couleurs neutres et sobres (gris, beige, blanc cassé, bleu marine)
- tenue nette et soignée, adaptée à la superposition ultérieure de vêtements

DÉCOR :
- fond studio uni gris très clair, éclairage homogène, sans ombre dure

RENDU FINAL : photoréaliste, net, haute résolution, cadrage vertical plein-pied, une seule personne, aucun texte ni filigrane.
Ne renvoie QUE l'image.`;

  try {
    const { data } = await axios.post(
      `${GEMINI_BASE}/${GEMINI_IMAGE}:generateContent`,
      {
        contents: [{
          role: 'user',
          parts: [
            { inline_data: { mime_type: mimeType, data: base64 } },
            { text: prompt },
          ],
        }],
        generationConfig: { responseModalities: ['IMAGE', 'TEXT'] },
      },
      { params: { key: apiKey }, headers: { 'Content-Type': 'application/json' }, timeout: 60000 }
    );

    const parts = data.candidates?.[0]?.content?.parts ?? [];
    const imgPart = parts.find(p => p.inlineData || p.inline_data);
    const inline  = imgPart?.inlineData || imgPart?.inline_data;
    if (!inline?.data) return null;

    return { mimeType: inline.mimeType || inline.mime_type || 'image/png', base64: inline.data };
  } catch (err) {
    // On ne bloque pas la création : on log et on retombe sur la photo d'origine.
    console.warn('[gemini twin]', err.response?.status || '', err.message);
    return null;
  }
}


const createAvatar = async (req, res) => {
  try {
    const { userId, photoBase64, measurements } = req.body || {};

    if (!userId)                                    return res.status(400).json({ error: 'userId est requis' });
    if (!photoBase64 || typeof photoBase64 !== 'string')
                                                    return res.status(400).json({ error: 'photoBase64 est requis' });
    const parsed = parseDataUrl(photoBase64);
    if (!parsed)                                    return res.status(400).json({ error: 'Format invalide : data URL attendue' });
    if (!measurements || measurements.chest == null)
                                                    return res.status(400).json({ error: 'measurements.chest est requis' });

      let analysis = { usableForTryOn: null };
      try {
        analysis = await analyzePhoto(parsed);
      } catch (e) {
        console.warn('[analyzePhoto] ignoré:', e.message);
        analysis = { usableForTryOn: null, note: 'analyse indisponible' };
      }

   


    // ── 1 seul avatar par utilisateur : on récupère l'existant s'il y en a un ──
    const existing = await Avatar.findOne({ where: { id_user: userId } });
    // On purge ses anciens assets Cloudinary avant d'en recréer
    if (existing) {
      await destroyFromCloudinary(existing.original_public_id);
      await destroyFromCloudinary(existing.avatar_public_id);
    }

    // 2) Upload de la photo d'origine sur Cloudinary
    const original = await uploadToCloudinary(photoBase64, { tag: `user_${userId}_original` });

    // 3) Génération du jumeau numérique -> Cloudinary (fallback = photo d'origine)
    let avatarUrl      = original.url;
    let avatarPublicId = null; // null => on réutilise l'original, rien à supprimer en plus
    const twin = await generateTwinImage(parsed, measurements);
    if (twin) {
      const uploaded = await uploadToCloudinary(toDataUrl(twin), { tag: `user_${userId}_twin` });
      avatarUrl      = uploaded.url;
      avatarPublicId = uploaded.publicId;
    }

    // 4) Persistance (URLs uniquement, jamais de base64)
    //    - on garde le même avatar_uuid si l'avatar existait (les refs front restent valides)
    const avatarUuid = existing?.avatar_uuid || crypto.randomUUID();
    const payload = {
      id_user:            userId,
      user_id:            userId, // FK vers users
      avatar_uuid:        avatarUuid,
      original_url:       original.url,
      original_public_id: original.publicId,
      avatar_url:         avatarUrl,
      avatar_public_id:   avatarPublicId,
      avatar_image:       avatarUrl,   // compat : ancienne colonne = URL du jumeau
      measurements:       normalizeMeasurements(measurements),
      analysis,
      usable:             analysis.usableForTryOn === true,
    };

    // create OU update selon l'existant
    const row = existing
      ? await existing.update(payload)
      : await Avatar.create(payload);

    // Cache mémoire pour /tryon (image originale en base64)
    avatarCache.set(avatarUuid, {
      photo: parsed,
      measurements: normalizeMeasurements(measurements),
      analysis,
    });

    return res.status(201).json({
      data: {
        avatarId:     avatarUuid,   // <- c'est ce que le front garde pour /tryon
        dbId:         row.id_avatar,
        originalUrl:  original.url,
        avatarUrl,                  // <- "la vraie image" du jumeau à afficher
        twinGenerated: !!twin,
        analysis,
        usable: analysis.usableForTryOn === true,
      },
    });
  } catch (err) {
    console.error('[POST /ai/avatar]', err.message);
    return res.status(500).json({ error: err.message });
  }
};

/* ── GET l'avatar d'un utilisateur (un seul) ────────────────── */
const getUserAvatar = async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    if (!userId) return res.status(400).json({ error: 'userId invalide' });

    const r = await Avatar.findOne({ where: { id_user: userId } });
    if (!r) return res.status(404).json({ error: 'Aucun avatar pour cet utilisateur' });

    return res.json({
      data: {
        avatarId:    r.avatar_uuid,
        dbId:        r.id_avatar,
        originalUrl: r.original_url,
        avatarUrl:   r.avatar_url,
        measurements: r.measurements,
        usable:      r.usable,
      },
    });
  } catch (err) {
    console.error('[GET /ai/avatar/user]', err.message);
    return res.status(500).json({ error: err.message });
  }
};

/* ── GET (un avatar) ────────────────────────────────────────── */
const getAvatarById = async (req, res) => {
  try {
    const row = await Avatar.findOne({ where: { avatar_uuid: req.params.uuid } });
    if (!row) return res.status(404).json({ error: 'Avatar introuvable' });

    return res.json({
      data: {
        avatarId:    row.avatar_uuid,
        dbId:        row.id_avatar,
        originalUrl: row.original_url,
        avatarUrl:   row.avatar_url,
        measurements: row.measurements,
        analysis:    row.analysis,
        usable:      row.usable,
      },
    });
  } catch (err) {
    console.error('[GET /ai/avatar/:uuid]', err.message);
    return res.status(500).json({ error: err.message });
  }
};

const updateAvatar = async (req, res) => {
  try {
    const row = await Avatar.findOne({ where: { avatar_uuid: req.params.uuid } });
    if (!row) return res.status(404).json({ error: 'Avatar introuvable' });

    const { measurements, photoBase64 } = req.body || {};
    const patch = {};

    const nextMeasurements = measurements
      ? normalizeMeasurements(measurements)
      : row.measurements;
    if (measurements) patch.measurements = nextMeasurements;

    if (photoBase64) {
      const parsed = parseDataUrl(photoBase64);
      if (!parsed) return res.status(400).json({ error: 'Format invalide : data URL attendue' });

      const analysis = await analyzePhoto(parsed);
      if (analysis.usableForTryOn === false) {
        return res.status(422).json({ error: 'Photo inutilisable pour l’essayage', analysis });
      }

      // Purge des anciens assets Cloudinary
      await destroyFromCloudinary(row.original_public_id);
      await destroyFromCloudinary(row.avatar_public_id);

      const original = await uploadToCloudinary(photoBase64, { tag: `user_${row.id_user}_original` });

      let avatarUrl = original.url;
      let avatarPublicId = null;
      const twin = await generateTwinImage(parsed, nextMeasurements);
      if (twin) {
        const uploaded = await uploadToCloudinary(toDataUrl(twin), { tag: `user_${row.id_user}_twin` });
        avatarUrl = uploaded.url;
        avatarPublicId = uploaded.publicId;
      }

      Object.assign(patch, {
        original_url:       original.url,
        original_public_id: original.publicId,
        avatar_url:         avatarUrl,
        avatar_public_id:   avatarPublicId,
        avatar_image:       avatarUrl,
        analysis,
        usable:             analysis.usableForTryOn === true,
      });

      avatarCache.set(row.avatar_uuid, { photo: parsed, measurements: nextMeasurements, analysis });
    }

    await row.update(patch);

    return res.json({
      data: {
        avatarId:    row.avatar_uuid,
        dbId:        row.id_avatar,
        originalUrl: row.original_url,
        avatarUrl:   row.avatar_url,
        measurements: row.measurements,
        usable:      row.usable,
      },
    });
  } catch (err) {
    console.error('[PUT /ai/avatar/:uuid]', err.message);
    return res.status(500).json({ error: err.message });
  }
};

const deleteAvatar = async (req, res) => {
  try {
    const row = await Avatar.findOne({ where: { avatar_uuid: req.params.uuid } });
    if (!row) return res.status(404).json({ error: 'Avatar introuvable' });
    await destroyFromCloudinary(row.original_public_id);
    await destroyFromCloudinary(row.avatar_public_id);
    avatarCache.delete(row.avatar_uuid);
    await row.destroy();

    return res.json({ data: { deleted: true, avatarId: req.params.uuid } });
  } catch (err) {
    console.error('[DELETE /ai/avatar/:uuid]', err.message);
    return res.status(500).json({ error: err.message });
  }
};


// async function getTwinImage(avatarUuid) {
async function getTwinImage(avatarUuid) {
    const avatar = await Avatar.findOne({
        where: { avatar_uuid: avatarUuid }
    });

    if (!avatar) return null;

    return await fetchImageAsBase64(avatar.avatar_url);
}


// async function getAvatar(avatarUuid) {
//   const cached = avatarCache.get(avatarUuid);
//   if (cached && cached.twin) return cached;

//   const row = await Avatar.findOne({ where: { avatar_uuid: avatarUuid } });
//   if (!row) return null;

//   let twin = null;
//   try { twin = await fetchImageAsBase64(row.avatar_url); }
//   catch (e) { console.warn('[getAvatar twin]', e.message); }

//   let photo = null;
//   try { photo = await fetchImageAsBase64(row.original_url); }
//   catch (e) { console.warn('[getAvatar original]', e.message); }

//   const record = { photo, twin: twin || photo, measurements: row.measurements, analysis: row.analysis };
//   avatarCache.set(avatarUuid, record);
//   return record;
// }

async function getAvatar(avatarUuid) {
  const cached = avatarCache.get(avatarUuid);
  // only trust cache if it's a COMPLETE record (has both render image + db ids)
  if (cached && cached.twin && cached.id != null) return cached;

  const row = await Avatar.findOne({ where: { avatar_uuid: avatarUuid } });
  if (!row) return null;

  let twin = null;
  try { twin = await fetchImageAsBase64(row.avatar_url); }
  catch (e) { console.warn('[getAvatar twin]', e.message); }

  let photo = null;
  try { photo = await fetchImageAsBase64(row.original_url); }
  catch (e) { console.warn('[getAvatar original]', e.message); }

  const record = {
    id:          row.id_avatar,     // INTEGER  -> tryon.id_avatar
    uuid:        row.avatar_uuid,   // STRING   -> tryon.avatar_uuid
    avatarUrl:   row.avatar_url,    
    originalUrl: row.original_url,  // STRING
    photo,                         
    twin: twin || photo,            
    measurements: row.measurements,
    analysis: row.analysis,
  };

  avatarCache.set(avatarUuid, record);
  return record;
}





module.exports = {
  createAvatar,
  getUserAvatar,
  getAvatarById,
  updateAvatar,
  deleteAvatar,
  getAvatar, 
};