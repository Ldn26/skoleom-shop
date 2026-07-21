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
  return {
    mimeType: headers['content-type'] || 'image/jpeg',
    base64: Buffer.from(data).toString('base64'),
  };
}

export async function uploadToCloudinary(dataUrl: string): Promise<{ url: string; publicId: string }> {
  const res = await cloudinary.uploader.upload(dataUrl, {
    folder: CLOUDINARY_FOLDER,
    resource_type: 'image',
    format: 'webp',
    transformation: [{ width: 1024, height: 1536, crop: 'limit', quality: 'auto:good', fetch_format: 'auto' }],
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

export async function renderTryOnImage(
  personImg: ImageData,
  garmentImg: ImageData,
  product: any,
): Promise<ImageData | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY manquant');
  if (!personImg?.base64 || !garmentImg?.base64) return null;

  const prompt = [
    'TASK: Virtual try-on. Dress the person from IMAGE 1 in the garment shown in IMAGE 2.',
    '',
    'STRICTLY PRESERVE FROM IMAGE 1, DO NOT CHANGE:',
    '- the exact same face, hairstyle, skin tone, body shape and proportions',
    '- the same pose, camera angle, framing, distance and background',
    '- the same lighting direction and overall color temperature',
    '',
    'APPLY THE GARMENT FROM IMAGE 2 FAITHFULLY:',
    `- item: "${product.name}" | category: ${product.type || 'clothing'} | fabric: ${product.fabric || 'unknown'}`,
    '- keep the exact color, pattern, print, logos, collar, sleeves, buttons and length from IMAGE 2',
    '- fit it to the body with realistic drape, folds, seams, wrinkles and soft contact shadows',
    '- respect occlusion: the garment sits over the torso and limbs like real clothing',
    '- never let it float, stretch, warp or change proportions; keep it physically plausible',
    '',
    'OUTPUT: a single photorealistic full-body photo of the SAME person now wearing the garment.',
    'No 3D or cartoon look, no additional people, no text, no watermark, no border. Return ONLY the image.',
  ].join('\n');

  try {
    const { data } = await http.post(
      `${GEMINI_BASE}/${GEMINI_IMAGE_MODEL}:generateContent`,
      {
        contents: [
          {
            role: 'user',
            parts: [
              { inline_data: { mime_type: personImg.mimeType, data: personImg.base64 } },
              { inline_data: { mime_type: garmentImg.mimeType, data: garmentImg.base64 } },
              { text: prompt },
            ],
          },
        ],
        generationConfig: { responseModalities: ['IMAGE', 'TEXT'], temperature: 0.2 },
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
