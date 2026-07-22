// import { NextResponse } from 'next/server';
// import bcrypt from 'bcrypt';
// import { User, Buyer, Seller } from '@/server/db';
// import { wpService } from '@/server/wooRoute';

// export const runtime = 'nodejs';
// export const dynamic = 'force-dynamic';

// export async function POST(request: Request) {
//   try {
//     const { name, email, password, role = 'acheteur' } = await request.json().catch(() => ({}));

//     if (!name || !email || !password) {
//       return NextResponse.json({ success: false, error: 'Invalid input' }, { status: 400 });
//     }
//     if (password.length < 4) {
//       return NextResponse.json(
//         { success: false, error: 'Password must be at least 4 characters long' },
//         { status: 400 },
//       );
//     }
//     if (!['acheteur', 'vendeur', 'admin'].includes(role)) {
//       return NextResponse.json({ success: false, error: 'Invalid role' }, { status: 400 });
//     }

//     const existing = await User.findOne({ where: { email: email.toLowerCase() } });
//     if (existing) {
//       return NextResponse.json({ success: false, error: 'Email already exists' }, { status: 409 });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email: email.toLowerCase(), password: hashedPassword, role });

//     if (role === 'acheteur') {
//       try {
//          await Buyer.create({ userId: user.id }); 
        
          
        
//         } catch {

//        }
//     }
//     if (role === 'vendeur') {
//       try { await Seller.create({ userId: user.id });
      
//         wpService.createUser({ username: name, email, password, role: 'seller' });
        
//     } catch { }
//     }

//     return NextResponse.json(
//       { success: true, data: { id: user.id, name: user.name, email: user.email, role: user.role } },
//       { status: 201 },
//     );
//   } catch {
//     return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
// NOTE: export `sequelize` from '@/server/db' for the transaction,
// or use `User.sequelize!.transaction(...)` instead.
import { sequelize, User, Buyer, Seller } from '@/server/db';
import { wpService } from '@/server/wooRoute';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ success: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const { name, email, password, role = 'acheteur' } = body;

  if (!name || !email || !password) {
    return NextResponse.json({ success: false, error: 'Invalid input' }, { status: 400 });
  }
  if (password.length < 4) {
    return NextResponse.json(
      { success: false, error: 'Password must be at least 4 characters long' },
      { status: 400 },
    );
  }
  if (!['acheteur', 'vendeur', 'admin'].includes(role)) {
    return NextResponse.json({ success: false, error: 'Invalid role' }, { status: 400 });
  }

  const normalizedEmail = email.toLowerCase();

  // Set only once a WP account exists, so the catch block can clean it up.
  let createdWpUserId: number | string | null = null;

  try {
    const existing = await User.findOne({ where: { email: normalizedEmail } });
    if (existing) {
      return NextResponse.json({ success: false, error: 'Email already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Atomic: if WP creation fails, the local user/seller rows roll back,
    // so the two systems never drift apart.
    const user = await sequelize.transaction(async (tx) => {
      const createdUser = await User.create(
        { name, email: normalizedEmail, password: hashedPassword, role },
        { transaction: tx },
      );

      if (role === 'acheteur') {
        await Buyer.create({ userId: createdUser.id }, { transaction: tx });
      }

      if (role === 'vendeur') {
        const seller = await Seller.create({ userId: createdUser.id }, { transaction: tx });
        console.log('seller created:', seller);
        const wpUser = await wpService.createUser({
          username: name,
          email: normalizedEmail,
          password,
          // role: 'seller',
        });
        console.log('Created WP user:', wpUser);
        
        if (!wpUser?.id) {
          throw new Error('WordPress did not return a user id');
        }
        createdWpUserId = wpUser.id;

        await seller.update({ wpUserId: wpUser.id }, { transaction: tx });
      }

      return createdUser;
    });

    return NextResponse.json(
      {
        success: true,
        data: { id: user.id, name: user.name, email: user.email, role: user.role },
      },
      { status: 201 },
    );
  } catch (err) {
    // Rare residual case: WP user created, then the local commit failed.
    // Best-effort cleanup; if it fails, log for manual reconciliation.
    if (createdWpUserId != null) {
      void wpService
        .deleteUser?.(createdWpUserId)
        .catch((e: unknown) =>
          console.error(`Orphan WP user ${createdWpUserId} needs manual cleanup:`, e),
        );
    }
    console.error('Registration failed:', err);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}