import axios from 'axios';
import { v2 as cloudinary } from 'cloudinary';
import { Avatar } from '@/server/db';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const GEMINI_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
const GEMINI_VISION = 'gemini-2.5-flash';
const GEMINI_IMAGE = 'gemini-2.5-flash-image';
const CLOUDINARY_FOLDER = 'skoleom/avatars';

export const avatarCache = new Map<string, any>();

export function parseDataUrl(dataUrl: string): { mimeType: string; base64: string } | null {
  const match = /^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/.exec(dataUrl || '');
  if (!match) return null;
  return { mimeType: match[1], base64: match[2] };
}

export function toDataUrl({ mimeType, base64 }: { mimeType: string; base64: string }): string {
  return `data:${mimeType};base64,${base64}`;
}

export function normalizeMeasurements(m: any = {}) {
  return {
    height: m.height != null ? Number(m.height) : null,
    weight: m.weight != null ? Number(m.weight) : null,
    chest: m.chest != null ? Number(m.chest) : null,
    waist: m.waist != null ? Number(m.waist) : null,
  };
}

export async function uploadToCloudinary(dataUrl: string, opts: { tag?: string } = {}) {
  const res = await cloudinary.uploader.upload(dataUrl, {
    folder: CLOUDINARY_FOLDER,
    resource_type: 'image',
    transformation: [{ width: 1024, height: 1536, crop: 'limit', quality: 'auto' }],
    context: opts.tag ? { tag: opts.tag } : undefined,
  });
  return { url: res.secure_url, publicId: res.public_id };
}

export async function destroyFromCloudinary(publicId?: string | null) {
  if (!publicId) return;
  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
  } catch (err: any) {
    console.warn('[cloudinary destroy]', publicId, err.message);
  }
}
export async function fetchImageAsBase64(url: string) {
  const { data, headers } = await axios.get(url, { responseType: 'arraybuffer', timeout: 30000 });
  return {
    mimeType: headers['content-type'] || 'image/jpeg',
    base64: Buffer.from(data).toString('base64'),
  };
}

export async function analyzePhoto({ mimeType, base64 }: { mimeType: string; base64: string }): Promise<any> {
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
        contents: [
          {
            role: 'user',
            parts: [{ inline_data: { mime_type: mimeType, data: base64 } }, { text: prompt }],
          },
        ],
        generationConfig: { responseMimeType: 'application/json', temperature: 0.2 },
      },
      { params: { key: apiKey }, headers: { 'Content-Type': 'application/json' }, timeout: 30000 },
    );
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '{}';
    return JSON.parse(String(raw).replace(/```json|```/g, '').trim());
  } catch (err: any) {
    const status = err.response?.status;
    const detail = err.response?.data ? JSON.stringify(err.response.data) : err.message;
    throw new Error(`Gemini vision${status ? ` ${status}` : ''}: ${detail}`);
  }
}

export async function generateTwinImage(
  { mimeType, base64 }: { mimeType: string; base64: string },
  measurements: any,
): Promise<{ mimeType: string; base64: string } | null> {
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
        contents: [
          {
            role: 'user',
            parts: [{ inline_data: { mime_type: mimeType, data: base64 } }, { text: prompt }],
          },
        ],
        generationConfig: { responseModalities: ['IMAGE', 'TEXT'] },
      },
      { params: { key: apiKey }, headers: { 'Content-Type': 'application/json' }, timeout: 60000 },
    );

    const parts = data.candidates?.[0]?.content?.parts ?? [];
    const imgPart = parts.find((p: any) => p.inlineData || p.inline_data);
    const inline = imgPart?.inlineData || imgPart?.inline_data;
    if (!inline?.data) return null;
    return { mimeType: inline.mimeType || inline.mime_type || 'image/png', base64: inline.data };
  } catch (err: any) {
    console.warn('[gemini twin]', err.response?.status || '', err.message);
    return null;
  }
}

export async function getTwinImage(avatarUuid: string) {
  const avatar = await Avatar.findOne({ where: { avatar_uuid: avatarUuid } });
  if (!avatar) return null;
  return fetchImageAsBase64(avatar.avatar_url);
}

export async function getAvatar(avatarUuid: string): Promise<any> {
  const cached = avatarCache.get(avatarUuid);
  if (cached && cached.twin && cached.id != null) return cached;

  const row = await Avatar.findOne({ where: { avatar_uuid: avatarUuid } });
  if (!row) return null;

  let twin = null;
  try {
    twin = await fetchImageAsBase64(row.avatar_url);
  } catch (e: any) {
    console.warn('[getAvatar twin]', e.message);
  }

  let photo = null;
  try {
    photo = await fetchImageAsBase64(row.original_url);
  } catch (e: any) {
    console.warn('[getAvatar original]', e.message);
  }

  const record = {
    id: row.id_avatar,
    uuid: row.avatar_uuid,
    avatarUrl: row.avatar_url,
    originalUrl: row.original_url,
    photo,
    twin: twin || photo,
    measurements: row.measurements,
    analysis: row.analysis,
  };

  avatarCache.set(avatarUuid, record);
  return record;
}
