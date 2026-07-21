// import { NextResponse } from 'next/server';
// import { getAuth } from '@/server/auth';
// import wooModule from '@/server/services/wooService';
// export const runtime = 'nodejs';
// export const dynamic = 'force-dynamic';
// const { wooService } = wooModule;
// function requireVendeur(request: Request) {
//   const auth = getAuth(request);
//   if (!auth) return { error: NextResponse.json({ error: 'Utilisateur non authentifié' }, { status: 401 }) };
//   if (auth.role !== 'vendeur' && auth.role !== 'admin') {
//     return { error: NextResponse.json({ error: 'Accès réservé aux vendeurs' }, { status: 403 }) };
//   }
//   return { auth };
// }

// function injectUserMeta(body: any, userId: number | string) {
//   if (!userId) return body;
//   const existing = Array.isArray(body.meta_data)
//     ? body.meta_data.filter((m: any) => m.key !== '_monetizer_user_id')
//     : [];
//   return { ...body, meta_data: [...existing, { key: '_monetizer_user_id', value: String(userId) }] };
// }

// export async function GET(request: Request) {
//   const guard = requireVendeur(request);
//   if (guard.error) return guard.error;
//   try {
//     const params = Object.fromEntries(new URL(request.url).searchParams.entries());
//     const data = await wooService.getProducts(params);
//     return NextResponse.json(data);
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: err.response?.status || 500 });
//   }
// }

// export async function POST(request: Request) {
//   const guard = requireVendeur(request);
//   if (guard.error) return guard.error;
//   try {
//     const body = await request.json().catch(() => ({}));
//     const data = await wooService.createProduct(injectUserMeta(body, guard.auth!.id));
//     return NextResponse.json(data, { status: 201 });
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: err.response?.status || 500 });
//   }
// }

import { NextResponse } from 'next/server';
import { getAuth } from '@/server/auth';
import wooModule from '@/server/services/wooService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const { wooService } = wooModule;

export async function GET(request: Request) {
  const auth = getAuth(request);
  if (!auth) return NextResponse.json({ error: 'Utilisateur non authentifié' }, { status: 401 });
  // if (auth.role !== 'vendeur' && auth.role !== 'admin') {
  //   return NextResponse.json({ error: 'Accès réservé aux vendeurs' }, { status: 403 });
  // }

  const url = new URL(request.url);
  const page = Math.max(1, Number(url.searchParams.get('page')) || 1);
  const perPage = Math.max(1, Number(url.searchParams.get('per_page')) || 20);
  const mine = String(auth.id);

  try {
    const raw = await wooService.getProductsRaw({ per_page: 100, status: 'any', _fields: 'id,name,slug,status,price,stock_status,images,meta_data' });
    const list = Array.isArray(raw) ? raw : [];

    const owned = list.filter((p: any) =>
      (p.meta_data ?? []).some((m: any) => m.key === '_monetizer_user_id' && String(m.value) === mine),
    );

    const start = (page - 1) * perPage;
    const data = owned.slice(start, start + perPage).map(({ meta_data, ...rest }: any) => rest);

    return NextResponse.json({
      data,
      meta: { total: owned.length, page, per_page: perPage, total_pages: Math.max(1, Math.ceil(owned.length / perPage)) },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: err.response?.status || 500 });
  }
}