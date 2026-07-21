import { NextResponse } from 'next/server';
import { Avatar } from '@/server/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(_request: Request, ctx: { params: Promise<{ userId: string }> }) {
  try {
    const { userId: raw } = await ctx.params;
    const userId = Number(raw);
    if (!userId) return NextResponse.json({ error: 'userId invalide' }, { status: 400 });

    const r = await Avatar.findOne({ where: { id_user: userId } });
    if (!r) return NextResponse.json({ error: 'Aucun avatar pour cet utilisateur' }, { status: 404 });

    return NextResponse.json({
      data: {
        avatarId: r.avatar_uuid,
        dbId: r.id_avatar,
        originalUrl: r.original_url,
        avatarUrl: r.avatar_url,
        measurements: r.measurements,
        usable: r.usable,
      },
    });
  } catch (err: any) {
    console.error('[GET /avatar/user]', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
