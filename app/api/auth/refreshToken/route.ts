import { NextResponse } from 'next/server';
import { signAccessToken, verifyRefresh, readCookie, accessCookie } from '@/server/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const token = readCookie(request, 'refreshToken');
    if (!token) {
      return NextResponse.json({ success: false, error: 'Refresh token not found' }, { status: 401 });
    }

    const payload = verifyRefresh(token);
    const accessToken = signAccessToken({ id: payload.id, role: payload.role });

    const response = NextResponse.json({ success: true, data: { jwt: accessToken } });
    response.cookies.set('accessToken', accessToken, accessCookie);
    return response;
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid or expired refresh token' },
      { status: 401 },
    );
  }
}
