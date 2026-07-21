import { NextResponse } from 'next/server';
import { Avatar } from '@/server/db';
import {
  analyzePhoto,
  avatarCache,
  destroyFromCloudinary,
  generateTwinImage,
  normalizeMeasurements,
  parseDataUrl,
  toDataUrl,
  uploadToCloudinary,
} from '@/server/services/avatarService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(_request: Request, ctx: { params: Promise<{ uuid: string }> }) {
  try {
    const { uuid } = await ctx.params;
    const row = await Avatar.findOne({ where: { avatar_uuid: uuid } });
    if (!row) return NextResponse.json({ error: 'Avatar introuvable' }, { status: 404 });

    return NextResponse.json({
      data: {
        avatarId: row.avatar_uuid,
        dbId: row.id_avatar,
        originalUrl: row.original_url,
        avatarUrl: row.avatar_url,
        measurements: row.measurements,
        analysis: row.analysis,
        usable: row.usable,
      },
    });
  } catch (err: any) {
    console.error('[GET /avatar/:uuid]', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(request: Request, ctx: { params: Promise<{ uuid: string }> }) {
  try {
    const { uuid } = await ctx.params;
    const row = await Avatar.findOne({ where: { avatar_uuid: uuid } });
    if (!row) return NextResponse.json({ error: 'Avatar introuvable' }, { status: 404 });

    const { measurements, photoBase64 } = (await request.json().catch(() => ({}))) as any;
    const patch: any = {};

    const nextMeasurements = measurements ? normalizeMeasurements(measurements) : row.measurements;
    if (measurements) patch.measurements = nextMeasurements;

    if (photoBase64) {
      const parsed = parseDataUrl(photoBase64);
      if (!parsed) return NextResponse.json({ error: 'Format invalide : data URL attendue' }, { status: 400 });

      const analysis = await analyzePhoto(parsed);
      if (analysis.usableForTryOn === false) {
        return NextResponse.json({ error: 'Photo inutilisable pour l’essayage', analysis }, { status: 422 });
      }

      await destroyFromCloudinary(row.original_public_id);
      await destroyFromCloudinary(row.avatar_public_id);

      const original = await uploadToCloudinary(photoBase64, { tag: `user_${row.id_user}_original` });

      let avatarUrl = original.url;
      let avatarPublicId: string | null = null;
      const twin = await generateTwinImage(parsed, nextMeasurements);
      if (twin) {
        const uploaded = await uploadToCloudinary(toDataUrl(twin), { tag: `user_${row.id_user}_twin` });
        avatarUrl = uploaded.url;
        avatarPublicId = uploaded.publicId;
      }

      Object.assign(patch, {
        original_url: original.url,
        original_public_id: original.publicId,
        avatar_url: avatarUrl,
        avatar_public_id: avatarPublicId,
        avatar_image: avatarUrl,
        analysis,
        usable: analysis.usableForTryOn === true,
      });

      avatarCache.set(row.avatar_uuid, { photo: parsed, measurements: nextMeasurements, analysis });
    }

    await row.update(patch);

    return NextResponse.json({
      data: {
        avatarId: row.avatar_uuid,
        dbId: row.id_avatar,
        originalUrl: row.original_url,
        avatarUrl: row.avatar_url,
        measurements: row.measurements,
        usable: row.usable,
      },
    });
  } catch (err: any) {
    console.error('[PUT /avatar/:uuid]', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(_request: Request, ctx: { params: Promise<{ uuid: string }> }) {
  try {
    const { uuid } = await ctx.params;
    const row = await Avatar.findOne({ where: { avatar_uuid: uuid } });
    if (!row) return NextResponse.json({ error: 'Avatar introuvable' }, { status: 404 });

    await destroyFromCloudinary(row.original_public_id);
    await destroyFromCloudinary(row.avatar_public_id);
    avatarCache.delete(row.avatar_uuid);
    await row.destroy();

    return NextResponse.json({ data: { deleted: true, avatarId: uuid } });
  } catch (err: any) {
    console.error('[DELETE /avatar/:uuid]', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
