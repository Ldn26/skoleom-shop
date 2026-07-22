


import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { Seller, User } from '@/server/db';
import { signAccessToken, signRefreshToken, accessCookie, refreshCookie } from '@/server/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json().catch(() => ({}));

    if (!email || !password) {
      return NextResponse.json({ success: false, error: 'Invalid login or password' }, { status: 400 });
    }

    const user = await User.findOne({
      where: { email: email.toLowerCase() },
      attributes: ['id', 'name', 'email', 'password', 'role'],
      include: [{ model: Seller, as: 'seller', attributes: ['wpUserId'] }],
    });

    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 400 });
    }

    await user.update({ lastLogin: new Date() });

    // wpUserId is on the Seller row (alias 'seller'), NOT on user.
    const wpUserId = (user as any).seller?.wpUserId ?? null;

    const accessPayload =
      user.role === 'vendeur'
        ? { id: user.id, role: user.role, wpUserId }
        : { id: user.id, role: user.role };

    const accessToken = signAccessToken(accessPayload);
    const refreshToken = signRefreshToken({ id: user.id, role: user.role });

    const response = NextResponse.json({
      success: true,
      data: {
        jwt: accessToken,
        user: { id: user.id, name: user.name, email: user.email, role: user.role },
      },
    });
    response.cookies.set('accessToken', accessToken, accessCookie);
    response.cookies.set('refreshToken', refreshToken, refreshCookie);
    return response;
  } catch (err) {
    console.error('Signin failed:', err);
    return NextResponse.json({ success: false, error: 'Server error during login' }, { status: 500 });
  }
}