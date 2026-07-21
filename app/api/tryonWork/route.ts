import { NextResponse } from 'next/server';
import { getAuth } from '@/server/auth';
import { TryOn } from '@/server/db';
import avatarController from '@/server/controllers/avatarController';
import {
  analyzeFit,
  fetchImageAsBase64,
  renderTryOnImage,
  toDataUrl,
  uploadToCloudinary,
} from '@/server/services/tryOnService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const startTime = Date.now();
  const auth = getAuth(request);
  if (!auth) return NextResponse.json({ error: 'Utilisateur non authentifié' }, { status: 401 });

  try {
    const { avatarId, product, measurements } = await request.json().catch(() => ({}));
    if (!avatarId) return NextResponse.json({ error: 'avatarId est requis' }, { status: 400 });
    if (!product || !product.name) return NextResponse.json({ error: 'product est requis' }, { status: 400 });

    const av = await avatarController.getAvatar(avatarId);
    if (!av) return NextResponse.json({ error: 'Avatar introuvable' }, { status: 404 });

    const fitMeasurements = measurements || av.measurements || {};
    const productId = product.id || product.product_id || null;

    if (productId != null) {
      const existing = await TryOn.findOne({
        where: { avatar_uuid: avatarId, product_id: productId, status: 'completed' },
        order: [['createdAt', 'DESC']],
      });
      if (existing && existing.result_url) {
        return NextResponse.json({
          data: {
            tryOnId: existing.id_tryon,
            fitScore: existing.fit_score ?? null,
            recommendedSize: existing.recommended_size ?? product.recommendedSize ?? 'M',
            comment: existing.comment ?? '',
            overlayUrl: existing.result_url,
            resultPublicId: existing.result_public_id ?? null,
            avatarUrl: existing.avatar_url ?? null,
            garmentUrl: existing.garment_url ?? null,
            cached: true,
            saved: true,
          },
        });
      }
    }

    const personImg = av.twin || av.photo;
    const fitPromise = analyzeFit(fitMeasurements, product);

    let overlayUrl: string | null = null;
    let resultPublicId: string | null = null;

    if (product.image && personImg?.base64) {
      try {
        const garmentImg = await fetchImageAsBase64(product.image);
        const rendered = await renderTryOnImage(personImg, garmentImg, product);
        if (rendered) {
          const uploaded = await uploadToCloudinary(toDataUrl(rendered));
          overlayUrl = uploaded.url;
          resultPublicId = uploaded.publicId;
        }
      } catch (e: any) {
        console.warn('[tryon image]', e.message);
      }
    }

    const fit = await fitPromise;

    return NextResponse.json({
      data: {
        tryOnId: null,
        fitScore: fit.fitScore ?? null,
        recommendedSize: fit.recommendedSize ?? product.recommendedSize ?? 'M',
        comment: fit.comment ?? '',
        overlayUrl,
        resultPublicId,
        avatarUrl: av.avatarUrl || av.originalUrl || null,
        garmentUrl: product.image || null,
        cached: false,
        saved: false,
        generationTimeMs: Date.now() - startTime,
      },
    });
  } catch (err: any) {
    console.error('[POST /tryon]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
