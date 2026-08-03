// import { NextResponse } from 'next/server';
// import crypto from 'node:crypto';
// import { Avatar } from '@/server/db';
// import {
//   analyzePhoto,
//   avatarCache,
//   destroyFromCloudinary,
//   generateTwinImage,
//   normalizeMeasurements,
//   parseDataUrl,
//   toDataUrl,
//   uploadToCloudinary,
// } from '@/server/services/avatarService';

// export const runtime = 'nodejs';
// export const dynamic = 'force-dynamic';

// export async function POST(request: Request) {
//   try {
//     const { userId, photoBase64, measurements } = (await request.json().catch(() => ({}))) as any;

//     if (!userId) return NextResponse.json({ error: 'userId est requis' }, { status: 400 });
//     if (!photoBase64 || typeof photoBase64 !== 'string')
//       return NextResponse.json({ error: 'photoBase64 est requis' }, { status: 400 });
//     const parsed = parseDataUrl(photoBase64);
//     if (!parsed) return NextResponse.json({ error: 'Format invalide : data URL attendue' }, { status: 400 });
//     if (!measurements || measurements.chest == null)
//       return NextResponse.json({ error: 'measurements.chest est requis' }, { status: 400 });

//     let analysis: any = { usableForTryOn: null };
//     try {
//       analysis = await analyzePhoto(parsed);
//     } catch (e: any) {
//       console.warn('[analyzePhoto] ignoré:', e.message);
//       analysis = { usableForTryOn: null, note: 'analyse indisponible' };
//     }

//     const existing = await Avatar.findOne({ where: { id_user: userId } });
//     if (existing) {
//       await destroyFromCloudinary(existing.original_public_id);
//       await destroyFromCloudinary(existing.avatar_public_id);
//     }

//     const original = await uploadToCloudinary(photoBase64, { tag: `user_${userId}_original` });

//     let avatarUrl = original.url;
//     let avatarPublicId: string | null = null;
//     const twin = await generateTwinImage(parsed, measurements);
//     if (twin) {
//       const uploaded = await uploadToCloudinary(toDataUrl(twin), { tag: `user_${userId}_twin` });
//       avatarUrl = uploaded.url;
//       avatarPublicId = uploaded.publicId;
//     }

//     const avatarUuid = existing?.avatar_uuid || crypto.randomUUID();
//     const payload = {
//       id_user: userId,
//       user_id: userId,
//       avatar_uuid: avatarUuid,
//       original_url: original.url,
//       original_public_id: original.publicId,
//       avatar_url: avatarUrl,
//       avatar_public_id: avatarPublicId,
//       avatar_image: avatarUrl,
//       measurements: normalizeMeasurements(measurements),
//       analysis,
//       usable: analysis.usableForTryOn === true,
//     };

//     const row = existing ? await existing.update(payload) : await Avatar.create(payload);

//     avatarCache.set(avatarUuid, {
//       photo: parsed,
//       measurements: normalizeMeasurements(measurements),
//       analysis,
//     });

//     return NextResponse.json(
//       {
//         data: {
//           avatarId: avatarUuid,
//           dbId: row.id_avatar,
//           originalUrl: original.url,
//           avatarUrl,
//           twinGenerated: !!twin,
//           analysis,
//           usable: analysis.usableForTryOn === true,
//         },
//       },
//       { status: 201 },
//     );
//   } catch (err: any) {
//     console.error('[POST /avatar]', err.message);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import crypto from 'node:crypto';
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

interface MeasurementsInput {
  chest?: number | null;
  height?: number;
  weight?: number;
  waist?: number;
  [key: string]: unknown;
}

interface RequestBody {
  userId?: number | string;
  photoBase64?: string;
  measurements?: MeasurementsInput;
}

interface PhotoAnalysis {
  usableForTryOn?: boolean | null;
  note?: string;
  [key: string]: unknown;
}

export async function POST(request: Request) {
  try {
    const { userId, photoBase64, measurements } = (await request
      .json()
      .catch(() => ({}))) as RequestBody;

    if (!userId) return NextResponse.json({ error: 'userId est requis' }, { status: 400 });

    const numericUserId = Number(userId);
    if (Number.isNaN(numericUserId)) {
      return NextResponse.json({ error: 'userId invalide' }, { status: 400 });
    }

    if (!photoBase64 || typeof photoBase64 !== 'string')
      return NextResponse.json({ error: 'photoBase64 est requis' }, { status: 400 });

    const parsed = parseDataUrl(photoBase64);
    if (!parsed)
      return NextResponse.json({ error: 'Format invalide : data URL attendue' }, { status: 400 });

    if (!measurements || measurements.chest === null || measurements.chest === undefined)
      return NextResponse.json({ error: 'measurements.chest est requis' }, { status: 400 });

    let analysis: PhotoAnalysis = { usableForTryOn: null };
    try {
      analysis = (await analyzePhoto(parsed)) as PhotoAnalysis;
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : String(e);
      console.warn('[analyzePhoto] ignoré:', message);
      analysis = { usableForTryOn: null, note: 'analyse indisponible' };
    }

    const existing = await Avatar.findOne({ where: { id_user: numericUserId } });
    if (existing) {
      await destroyFromCloudinary(existing.original_public_id);
      await destroyFromCloudinary(existing.avatar_public_id);
    }

    const original = await uploadToCloudinary(photoBase64, {
      tag: `user_${numericUserId}_original`,
    });

    let avatarUrl = original.url;
    let avatarPublicId: string | null = null;
    const twin = await generateTwinImage(parsed, measurements);
    if (twin) {
      const uploaded = await uploadToCloudinary(toDataUrl(twin), {
        tag: `user_${numericUserId}_twin`,
      });
      avatarUrl = uploaded.url;
      avatarPublicId = uploaded.publicId;
    }

    const avatarUuid = existing?.avatar_uuid || crypto.randomUUID();
    const payload = {
      id_user: numericUserId,
      user_id: numericUserId,
      avatar_uuid: avatarUuid,
      original_url: original.url,
      original_public_id: original.publicId,
      avatar_url: avatarUrl,
      avatar_public_id: avatarPublicId,
      avatar_image: avatarUrl,
      measurements: normalizeMeasurements(measurements),
      analysis,
      usable: analysis.usableForTryOn === true,
    };

    const row = existing ? await existing.update(payload) : await Avatar.create(payload);

    avatarCache.set(avatarUuid, {
      id: row.id_avatar,
      uuid: avatarUuid,
      avatarUrl,
      originalUrl: original.url,
      twin,
      photo: parsed,
      measurements: normalizeMeasurements(measurements),
      analysis,
    });

    return NextResponse.json(
      {
        data: {
          avatarId: avatarUuid,
          dbId: row.id_avatar,
          originalUrl: original.url,
          avatarUrl,
          twinGenerated: !!twin,
          analysis,
          usable: analysis.usableForTryOn === true,
        },
      },
      { status: 201 },
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[POST /avatar]', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
