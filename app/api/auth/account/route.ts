// import { NextResponse } from 'next/server';
// import { Seller, User } from '@/server/db';
// import { getAuth, verifyRefresh, readCookie } from '@/server/auth';

// export const runtime = 'nodejs';
// export const dynamic = 'force-dynamic';

// export async function GET(request: Request) {
//   try {
//     // 1) access cookie via getAuth ; 2) sinon refresh cookie en secours
//     let userId = getAuth(request)?.id ?? null;

//     if (!userId) {
//       const refreshToken = readCookie(request, 'refreshToken');
//       if (refreshToken) {
//         try {
//           userId = verifyRefresh(refreshToken).id;
//         } catch {
//           userId = null;
//         }
//       }
//     }

//     if (!userId) {
//       return NextResponse.json({ success: false, error: 'Non authentifié' }, { status: 401 });
//     }

//     const user = await User.findOne({
//       where: { id: userId },
//       attributes: { exclude: ['password'] },
//       include: [{ model: Seller, as: 'seller' }],
//     });

//     if (!user) {
//       return NextResponse.json({ success: false, error: 'Utilisateur introuvable' }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, data: user.toJSON() }, { status: 200 });
//   } catch (err) {
//     console.error('Account retrieval failed:', err);
//     return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import { Seller, User } from '@/server/db';
import { getAuth, verifyRefresh, readCookie } from '@/server/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    // 1) cookie access via getAuth ; 2) sinon refresh en secours
    let userId = getAuth(request)?.id ?? null;
    if (!userId) {
      const rt = readCookie(request, 'refreshToken');
      if (rt) {
        try {
          userId = verifyRefresh(rt).id;
        } catch {
          userId = null;
        }
      }
    }

    if (!userId) {
      return NextResponse.json({ success: false, error: 'Non authentifié' }, { status: 401 });
    }

    const user = await User.findOne({
      where: { id: userId },
      attributes: { exclude: ['password'] },
      include: [{ model: Seller, as: 'seller', attributes: ['wpUserId'] }],
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Utilisateur introuvable' },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: user.toJSON() }, { status: 200 });
  } catch (err) {
    console.error('Account retrieval failed:', err);
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}
