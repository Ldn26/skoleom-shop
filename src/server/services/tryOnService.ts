// import axios from 'axios';
// import { v2 as cloudinary } from 'cloudinary';

// if (process.env.CLOUDINARY_CLOUD_NAME) {
//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   });
// }

// const GEMINI_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
// const GEMINI_TEXT_MODEL = process.env.GEMINI_TEXT_MODEL || 'gemini-2.5-flash';
// const GEMINI_IMAGE_MODEL = process.env.GEMINI_IMAGE_MODEL || 'gemini-2.5-flash-image';
// const CLOUDINARY_FOLDER = 'skoleom/tryons';

// const http = axios.create();

// export type ImageData = { mimeType: string; base64: string };

// export function toDataUrl({ mimeType, base64 }: ImageData): string {
//   return `data:${mimeType};base64,${base64}`;
// }

// export async function fetchImageAsBase64(url: string): Promise<ImageData> {
//   const { data, headers } = await http.get(url, { responseType: 'arraybuffer', timeout: 20000 });
//   return {
//     mimeType: headers['content-type'] || 'image/jpeg',
//     base64: Buffer.from(data).toString('base64'),
//   };
// }

// export async function uploadToCloudinary(dataUrl: string): Promise<{ url: string; publicId: string }> {
//   const res = await cloudinary.uploader.upload(dataUrl, {
//     folder: CLOUDINARY_FOLDER,
//     resource_type: 'image',
//     format: 'webp',
//     transformation: [{ width: 1024, height: 1536, crop: 'limit', quality: 'auto:good', fetch_format: 'auto' }],
//   });
//   return { url: res.secure_url, publicId: res.public_id };
// }

// export async function destroyCloudinary(publicId?: string | null): Promise<void> {
//   if (!publicId) return;
//   try {
//     await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
//   } catch (e: any) {
//     console.warn('[cloudinary destroy]', e.message);
//   }
// }

// export async function renderTryOnImage(
//   personImg: ImageData,
//   garmentImg: ImageData,
//   product: any,
// ): Promise<ImageData | null> {
//   const apiKey = process.env.GEMINI_API_KEY;
//   if (!apiKey) throw new Error('GEMINI_API_KEY manquant');
//   if (!personImg?.base64 || !garmentImg?.base64) return null;

//   const prompt = [
//     'TASK: Virtual try-on. Dress the person from IMAGE 1 in the garment shown in IMAGE 2.',
//     '',
//     'STRICTLY PRESERVE FROM IMAGE 1, DO NOT CHANGE:',
//     '- the exact same face, hairstyle, skin tone, body shape and proportions',
//     '- the same pose, camera angle, framing, distance and background',
//     '- the same lighting direction and overall color temperature',
//     '',
//     'APPLY THE GARMENT FROM IMAGE 2 FAITHFULLY:',
//     `- item: "${product.name}" | category: ${product.type || 'clothing'} | fabric: ${product.fabric || 'unknown'}`,
//     '- keep the exact color, pattern, print, logos, collar, sleeves, buttons and length from IMAGE 2',
//     '- fit it to the body with realistic drape, folds, seams, wrinkles and soft contact shadows',
//     '- respect occlusion: the garment sits over the torso and limbs like real clothing',
//     '- never let it float, stretch, warp or change proportions; keep it physically plausible',
//     '',
//     'OUTPUT: a single photorealistic full-body photo of the SAME person now wearing the garment.',
//     'No 3D or cartoon look, no additional people, no text, no watermark, no border. Return ONLY the image.',
//   ].join('\n');

//   try {
//     const { data } = await http.post(
//       `${GEMINI_BASE}/${GEMINI_IMAGE_MODEL}:generateContent`,
//       {
//         contents: [
//           {
//             role: 'user',
//             parts: [
//               { inline_data: { mime_type: personImg.mimeType, data: personImg.base64 } },
//               { inline_data: { mime_type: garmentImg.mimeType, data: garmentImg.base64 } },
//               { text: prompt },
//             ],
//           },
//         ],
//         generationConfig: { responseModalities: ['IMAGE', 'TEXT'], temperature: 0.2 },
//       },
//       { params: { key: apiKey }, headers: { 'Content-Type': 'application/json' }, timeout: 60000 },
//     );
//     const parts = data.candidates?.[0]?.content?.parts ?? [];
//     const imgPart = parts.find((p: any) => p.inlineData || p.inline_data);
//     const inline = imgPart?.inlineData || imgPart?.inline_data;
//     if (!inline?.data) return null;
//     return { mimeType: inline.mimeType || inline.mime_type || 'image/png', base64: inline.data };
//   } catch (err: any) {
//     console.warn('[tryon render]', err.response?.status || '', err.message);
//     return null;
//   }
// }

// export async function analyzeFit(measurements: any, product: any): Promise<any> {
//   const apiKey = process.env.GEMINI_API_KEY;
//   if (!apiKey) throw new Error('GEMINI_API_KEY manquant');

//   const system = `Tu es un conseiller taille pour une boutique de mode.
// À partir des mensurations et des infos vêtement, tu estimes l'ajustement.
// Réponds STRICTEMENT en JSON valide, sans texte ni markdown.`;

//   const prompt = `Mensurations (cm/kg) : ${JSON.stringify(measurements)}
// Vêtement : nom="${product.name}", type="${product.type ?? '?'}", matière="${product.fabric ?? '?'}", taille conseillée par la marque="${product.recommendedSize ?? '?'}".
// Renvoie EXACTEMENT :
// {
//   "fitScore": 0-100,
//   "recommendedSize": "XS|S|M|L|XL|XXL",
//   "comment": "une phrase courte en français sur le tombé/l'ajustement"
// }`;

//   try {
//     const { data } = await http.post(
//       `${GEMINI_BASE}/${GEMINI_TEXT_MODEL}:generateContent`,
//       {
//         systemInstruction: { parts: [{ text: system }] },
//         contents: [{ role: 'user', parts: [{ text: prompt }] }],
//         generationConfig: { responseMimeType: 'application/json', temperature: 0.3 },
//       },
//       { params: { key: apiKey }, headers: { 'Content-Type': 'application/json' }, timeout: 30000 },
//     );
//     const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '{}';
//     return JSON.parse(String(raw).replace(/```json|```/g, '').trim());
//   } catch (err: any) {
//     console.warn('[tryon fit]', err.message);
//     return { fitScore: 75, recommendedSize: product.recommendedSize ?? 'M', comment: 'Estimation indisponible.' };
//   }
// }



import axios from 'axios';
import { v2 as cloudinary } from 'cloudinary';

if (process.env.CLOUDINARY_CLOUD_NAME) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

const GEMINI_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
const GEMINI_TEXT_MODEL = process.env.GEMINI_TEXT_MODEL || 'gemini-2.5-flash';
const GEMINI_IMAGE_MODEL = process.env.GEMINI_IMAGE_MODEL || 'gemini-2.5-flash-image';
const CLOUDINARY_FOLDER = 'skoleom/tryons';

const http = axios.create();

export type ImageData = { mimeType: string; base64: string };

export function toDataUrl({ mimeType, base64 }: ImageData): string {
  return `data:${mimeType};base64,${base64}`;
}

export async function fetchImageAsBase64(url: string): Promise<ImageData> {
  const { data, headers } = await http.get(url, { responseType: 'arraybuffer', timeout: 20000 });
  const contentType = headers['content-type'];
  return {
    mimeType: typeof contentType === 'string' ? contentType : 'image/jpeg',
    base64: Buffer.from(data).toString('base64'),
  };
}

// ── Deterministic output size + centering ──────────────────────────────────
// Gemini's image output is not dimension-locked, so we normalize here:
// every result becomes exactly 1024x1536 with the subject centered.
export async function uploadToCloudinary(dataUrl: string): Promise<{ url: string; publicId: string }> {
  const res = await cloudinary.uploader.upload(dataUrl, {
    folder: CLOUDINARY_FOLDER,
    resource_type: 'image',
    format: 'webp',
    transformation: [
      {
        width: 1024,
        height: 1536,
        crop: 'pad',
        gravity: 'center',
        background: 'auto',
        quality: 'auto:good',
        fetch_format: 'auto',
      },
    ],
  });
  return { url: res.secure_url, publicId: res.public_id };
}

export async function destroyCloudinary(publicId?: string | null): Promise<void> {
  if (!publicId) return;
  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
  } catch (e: any) {
    console.warn('[cloudinary destroy]', e.message);
  }
}

// ── Category-aware placement ────────────────────────────────────────────────
// Maps a product to WHERE it belongs on the body + HOW to treat it.
function placementFor(product: any): { zone: string; rules: string } {
  const hay = `${product?.type ?? ''} ${product?.name ?? ''} ${product?.category ?? ''}`.toLowerCase();
  const has = (...k: string[]) => k.some((w) => hay.includes(w));

  if (has('lunette', 'glasses', 'sunglass', 'eyewear', 'optical'))
    return {
      zone: 'over the eyes, resting on the nose bridge and ears',
      rules: 'Match temple width to the head; keep both lenses symmetric; do not resize or alter the face.',
    };
  if (has('cap', 'casquette', 'hat', 'chapeau', 'beanie', 'bonnet'))
    return {
      zone: 'on top of the head',
      rules: 'Sit it naturally on the hair/head with correct depth and brim direction; keep the face fully visible.',
    };
  if (has('watch', 'montre', 'bracelet', 'bangle'))
    return {
      zone: 'on the wrist',
      rules: 'Wrap it around the wrist with correct scale and perspective; keep the hand and fingers intact.',
    };
  if (has('collier', 'necklace', 'chain', 'pendant'))
    return {
      zone: 'around the neck',
      rules: 'Rest it on the collarbone/chest following the neckline; keep clasp and length realistic.',
    };
  if (has('boucle', 'earring'))
    return {
      zone: 'on the earlobes',
      rules: 'Place a symmetric matching piece on each visible ear; keep the ears and face unchanged.',
    };
  if (has('sac', 'bag', 'handbag', 'backpack'))
    return {
      zone: 'carried on the shoulder or held in the hand',
      rules: 'Add the strap/handle with correct contact and shadow; do not distort the arm or hand.',
    };
  if (has('chaussure', 'shoe', 'sneaker', 'basket', 'boot', 'botte', 'sandal'))
    return {
      zone: 'on both feet',
      rules: 'Fit a matching pair to both feet with correct perspective and ground contact shadow.',
    };
  if (has('pantalon', 'pants', 'jean', 'trouser', 'short', 'jupe', 'skirt', 'legging'))
    return {
      zone: 'on the lower body, from the waist down the legs',
      rules: 'Fit at the waist with realistic drape over the legs; keep the shoes/feet unchanged.',
    };
  if (has('ceinture', 'belt'))
    return {
      zone: 'around the waist',
      rules: 'Place at the waistline over existing clothing; keep the buckle sharp and centered.',
    };

  // Default: upper-body garment (t-shirt, hoodie, jacket, dress, top, shirt…)
  return {
    zone: 'on the upper body (torso and arms)',
    rules: 'Fit over the torso with realistic drape, folds and soft contact shadows; respect occlusion over the body.',
  };
}

export async function renderTryOnImage(
  personImg: ImageData,
  garmentImg: ImageData,
  product: any,
): Promise<ImageData | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY manquant');
  if (!personImg?.base64 || !garmentImg?.base64) return null;

  const place = placementFor(product);

  const prompt = [
    'TASK: Virtual try-on / product placement.',
    'You are given TWO images:',
    '  • IMAGE 1 = THE PERSON. This is the only real person. Keep them exactly.',
    '  • IMAGE 2 = THE PRODUCT reference. Use it ONLY to copy the item.',
    '',
    'CRITICAL — IDENTITY LOCK (from IMAGE 1 only):',
    '- Keep the SAME face, hairstyle, skin tone, body shape, proportions and pose.',
    '- Keep the SAME camera angle, framing, distance, background and lighting direction.',
    '- The output person MUST be the IMAGE 1 person — never anyone else.',
    '',
    'CRITICAL — IGNORE ANY MODEL IN IMAGE 2:',
    '- IMAGE 2 may show a model or mannequin wearing or holding the product.',
    '- COMPLETELY IGNORE that person: do NOT copy their face, body, pose, hands or background.',
    '- Extract ONLY the product itself: its shape, exact color, pattern, print, logos, material and details.',
    '',
    'PLACE THE PRODUCT CORRECTLY:',
    `- Product: "${product.name}" | category: ${product.type || product.category || 'accessory'} | material: ${product.fabric || 'unknown'}.`,
    `- Position: ${place.zone}.`,
    `- ${place.rules}`,
    '- Keep the exact color, pattern, logos and proportions from IMAGE 2.',
    '- Realistic scale, perspective, contact shadows and occlusion.',
    '- Do NOT add, remove or restyle any other clothing or accessory already on the person.',
    '- Never let the item float, stretch, warp, duplicate or change the body proportions.',
    '',
    'OUTPUT FRAMING (follow exactly):',
    '- ONE photorealistic image of the SAME person now wearing/using the product.',
    '- Full body, head-to-toe, the person perfectly CENTERED horizontally and vertically.',
    '- Portrait orientation, 2:3 aspect ratio (e.g. 1024x1536), with even margins around the subject.',
    '- Clean, uncluttered studio-style result.',
    '- No 3D or cartoon look, no additional people, no text, no watermark, no logo overlay, no border, no collage.',
    'Return ONLY the final image.',
  ].join('\n');

  try {
    const { data } = await http.post(
      `${GEMINI_BASE}/${GEMINI_IMAGE_MODEL}:generateContent`,
      {
        contents: [
          {
            role: 'user',
            parts: [
              { text: 'IMAGE 1 — THE PERSON (keep this identity):' },
              { inline_data: { mime_type: personImg.mimeType, data: personImg.base64 } },
              { text: 'IMAGE 2 — THE PRODUCT (copy only the item, ignore any model):' },
              { inline_data: { mime_type: garmentImg.mimeType, data: garmentImg.base64 } },
              { text: prompt },
            ],
          },
        ],
        generationConfig: { responseModalities: ['IMAGE', 'TEXT'], temperature: 0.15 },
      },
      { params: { key: apiKey }, headers: { 'Content-Type': 'application/json' }, timeout: 60000 },
    );
    const parts = data.candidates?.[0]?.content?.parts ?? [];
    const imgPart = parts.find((p: any) => p.inlineData || p.inline_data);
    const inline = imgPart?.inlineData || imgPart?.inline_data;
    if (!inline?.data) return null;
    return { mimeType: inline.mimeType || inline.mime_type || 'image/png', base64: inline.data };
  } catch (err: any) {
    console.warn('[tryon render]', err.response?.status || '', err.message);
    return null;
  }
}

export async function analyzeFit(measurements: any, product: any): Promise<any> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY manquant');

  const system = `Tu es un conseiller taille pour une boutique de mode.
À partir des mensurations et des infos vêtement, tu estimes l'ajustement.
Réponds STRICTEMENT en JSON valide, sans texte ni markdown.`;

  const prompt = `Mensurations (cm/kg) : ${JSON.stringify(measurements)}
Vêtement : nom="${product.name}", type="${product.type ?? '?'}", matière="${product.fabric ?? '?'}", taille conseillée par la marque="${product.recommendedSize ?? '?'}".
Renvoie EXACTEMENT :
{
  "fitScore": 0-100,
  "recommendedSize": "XS|S|M|L|XL|XXL",
  "comment": "une phrase courte en français sur le tombé/l'ajustement"
}`;

  try {
    const { data } = await http.post(
      `${GEMINI_BASE}/${GEMINI_TEXT_MODEL}:generateContent`,
      {
        systemInstruction: { parts: [{ text: system }] },
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: 'application/json', temperature: 0.3 },
      },
      { params: { key: apiKey }, headers: { 'Content-Type': 'application/json' }, timeout: 30000 },
    );
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '{}';
    return JSON.parse(String(raw).replace(/```json|```/g, '').trim());
  } catch (err: any) {
    console.warn('[tryon fit]', err.message);
    return { fitScore: 75, recommendedSize: product.recommendedSize ?? 'M', comment: 'Estimation indisponible.' };
  }
}
