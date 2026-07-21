import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { User, Buyer, Seller } from '@/server/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { name, email, password, role = 'acheteur' } = await request.json().catch(() => ({}));

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

    const existing = await User.findOne({ where: { email: email.toLowerCase() } });
    if (existing) {
      return NextResponse.json({ success: false, error: 'Email already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email: email.toLowerCase(), password: hashedPassword, role });

    if (role === 'acheteur') {
      try { await Buyer.create({ userId: user.id }); } catch { }
    }
    if (role === 'vendeur') {
      try { await Seller.create({ userId: user.id }); } catch { }
    }

    return NextResponse.json(
      { success: true, data: { id: user.id, name: user.name, email: user.email, role: user.role } },
      { status: 201 },
    );
  } catch {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
