import { NextResponse } from 'next/server';
import { getAuth } from '@/server/auth';
import wooModule from '@/server/services/wooService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const { wooService } = wooModule;

function requireVendeur(request: Request) {
  const auth = getAuth(request);
  if (!auth) return { error: NextResponse.json({ error: 'Utilisateur non authentifié' }, { status: 401 }) };
  if (auth.role !== 'vendeur' && auth.role !== 'admin') {
    return { error: NextResponse.json({ error: 'Accès réservé aux vendeurs' }, { status: 403 }) };
  }
  return { auth };
}

function injectUserMeta(body: any, userId: number | string) {
  if (!userId) return body;
  const existing = Array.isArray(body.meta_data)
    ? body.meta_data.filter((m: any) => m.key !== '_monetizer_user_id')
    : [];
  return { ...body, meta_data: [...existing, { key: '_monetizer_user_id', value: String(userId) }] };
}

export async function GET(request: Request) {
  const guard = requireVendeur(request);
  if (guard.error) return guard.error;
  try {
    const params = Object.fromEntries(new URL(request.url).searchParams.entries());
    const data = await wooService.getProducts(params);
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: err.response?.status || 500 });
  }
}

export async function POST(request: Request) {
  const guard = requireVendeur(request);
  if (guard.error) return guard.error;
  try {
    const body = await request.json().catch(() => ({}));
    const data = await wooService.createProduct(injectUserMeta(body, guard.auth!.id));
    return NextResponse.json(data, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: err.response?.status || 500 });
  }
}
