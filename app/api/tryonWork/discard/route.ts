import { NextResponse } from 'next/server';
import { getAuth } from '@/server/auth';
import { destroyCloudinary } from '@/server/services/tryOnService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const auth = getAuth(request);
  if (!auth) return NextResponse.json({ error: 'Utilisateur non authentifié' }, { status: 401 });

  try {
    const { resultPublicId } = (await request.json().catch(() => ({}))) as any;
    await destroyCloudinary(resultPublicId);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('[POST /tryon/discard]', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
