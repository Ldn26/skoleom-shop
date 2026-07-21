import { NextResponse } from 'next/server';
import { getAuth } from '@/server/auth';
import wooModule from '@/server/services/wooService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const { wooService } = wooModule;

export async function GET(request: Request) {
  const auth = getAuth(request);
  if (!auth) return NextResponse.json({ error: 'Utilisateur non authentifié' }, { status: 401 });
  if (auth.role !== 'vendeur' && auth.role !== 'admin') {
    return NextResponse.json({ error: 'Accès réservé aux vendeurs' }, { status: 403 });
  }


  try {
    const params = Object.fromEntries(new URL(request.url).searchParams.entries());
    console.log(auth.id, 'auth.id');
    // if (userId) {
    //   params.meta_key = '_monetizer_user_id';
    //   params.meta_value = String(userId);
    // }
    const data = await wooService.getOrders({ per_page: 20, ...params, customer: auth.id });
    // const data = await wooService.getOrders({ per_page: 20, ...params   });
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: err.response?.status || 500 });
  }
}
