import { NextResponse } from 'next/server';
import { getAuth } from '@/server/auth';
import { TryOn } from '@/server/db';
import avatarController from '@/server/controllers/avatarController';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request, ctx: { params: Promise<{ avatarId: string }> }) {
  try {
    const { avatarId } = await ctx.params;
    const auth = getAuth(request);
    if (!avatarId) return NextResponse.json({ error: 'avatarId est requis' }, { status: 400 });
    if (!auth) return NextResponse.json({ error: 'Utilisateur non authentifié' }, { status: 401 });

    const avatar = await avatarController.getAvatar(avatarId);
    if (!avatar) return NextResponse.json({ error: 'Avatar introuvable' }, { status: 404 });

    const rows = await TryOn.findAll({
      where: { id_user: auth.id },
      order: [['createdAt', 'DESC']],
    });
    return NextResponse.json({ data: rows });
  } catch (err: any) {
    console.error('[GET /tryon/history/:avatarId]', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
