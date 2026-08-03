// import { NextResponse } from 'next/server';
// import { getAuth } from '@/server/auth';
// import { TryOn } from '@/server/db';
// import { getAvatar } from '@/server/services/avatarService';

// export const runtime = 'nodejs';
// export const dynamic = 'force-dynamic';

// export async function POST(request: Request) {
//   const auth = getAuth(request);
//   if (!auth) return NextResponse.json({ error: 'Utilisateur non authentifié' }, { status: 401 });

//   try {
//     const b = (await request.json().catch(() => ({}))) as any;
//     const { avatarId, product, measurements, overlayUrl } = b;
//     if (!avatarId) return NextResponse.json({ error: 'avatarId est requis' }, { status: 400 });
//     if (!overlayUrl) return NextResponse.json({ error: 'overlayUrl est requis' }, { status: 400 });
//     if (!product || !product.name) return NextResponse.json({ error: 'product est requis' }, { status: 400 });

//     const av = await getAvatar(avatarId);

//     const saved = await TryOn.create({
//       id_user: auth.id,
//       id_avatar: av?.id ?? av?.id_avatar ?? null,
//       avatar_uuid: avatarId,
//       product_id: product.id || product.product_id || null,
//       product_name: product.name,
//       product_brand: product.brand || null,
//       product_type: product.type || null,
//       garment_url: b.garmentUrl || product.image || null,
//       garment_public_id: null,
//       avatar_url: b.avatarUrl || av?.avatarUrl || av?.originalUrl || '',
//       result_url: overlayUrl,
//       result_public_id: b.resultPublicId || null,
//       fit_score: b.fitScore ?? null,
//       recommended_size: b.recommendedSize ?? null,
//       comment: b.comment ?? null,
//       measurements: measurements || {},
//       analysis: { fitScore: b.fitScore ?? null, recommendedSize: b.recommendedSize ?? null, comment: b.comment ?? null },
//       status: 'completed',
//     });

//     return NextResponse.json({ data: { tryOnId: saved.id_tryon } }, { status: 201 });
//   } catch (err: any) {
//     console.error('[POST /tryon/save]', err);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import { getAuth } from '@/server/auth';
import { TryOn } from '@/server/db';
import { getAvatar } from '@/server/services/avatarService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface ProductInput {
  id?: number | string;
  product_id?: number | string;
  name: string;
  brand?: string;
  type?: string;
  image?: string;
  [key: string]: unknown;
}

interface SaveRequestBody {
  avatarId?: string;
  product?: ProductInput;
  measurements?: Record<string, unknown>;
  overlayUrl?: string;
  garmentUrl?: string;
  avatarUrl?: string;
  resultPublicId?: string;
  fitScore?: number;
  recommendedSize?: string;
  comment?: string;
  [key: string]: unknown;
}

export async function POST(request: Request) {
  const auth = getAuth(request);
  if (!auth) return NextResponse.json({ error: 'Utilisateur non authentifié' }, { status: 401 });

  try {
    const b = (await request.json().catch(() => ({}))) as SaveRequestBody;
    const { avatarId, product, measurements, overlayUrl } = b;
    if (!avatarId) return NextResponse.json({ error: 'avatarId est requis' }, { status: 400 });
    if (!overlayUrl) return NextResponse.json({ error: 'overlayUrl est requis' }, { status: 400 });
    if (!product || !product.name) return NextResponse.json({ error: 'product est requis' }, { status: 400 });

    const av = await getAvatar(avatarId);

    const saved = await TryOn.create({
      id_user: Number(auth.id),
      id_avatar: av?.id ?? av?.id_avatar ?? 0,
      avatar_uuid: avatarId,
      product_id: Number(product.id || product.product_id || 0),
      product_name: product.name,
      product_brand: product.brand || null,
      product_type: product.type || null,
      garment_url: b.garmentUrl || product.image || null,
      garment_public_id: null,
      avatar_url: b.avatarUrl || av?.avatarUrl || av?.originalUrl || '',
      result_url: overlayUrl,
      result_public_id: b.resultPublicId || null,
      fit_score: b.fitScore ?? null,
      recommended_size: b.recommendedSize ?? null,
      comment: b.comment ?? null,
      measurements: measurements || {},
      analysis: { fitScore: b.fitScore ?? null, recommendedSize: b.recommendedSize ?? null, comment: b.comment ?? null },
      status: 'completed',
    });

    return NextResponse.json({ data: { tryOnId: saved.id_tryon } }, { status: 201 });
  } catch (err: unknown) {
    console.error('[POST /tryon/save]', err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}