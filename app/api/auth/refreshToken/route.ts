


import { NextResponse } from 'next/server';
import {
  signAccessToken,
  signRefreshToken,
  verifyRefresh,
  readCookie,
  accessCookie,
  refreshCookie,
} from '@/server/auth';

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
    const refreshToken = signRefreshToken({ id: payload.id, role: payload.role });

    // Cookie-only: no JWT in the body. The client just needs to know it worked.
    const response = NextResponse.json({ success: true });

    // Re-issue BOTH cookies (rolling session) so the refresh token stays fresh.
    response.cookies.set('accessToken', accessToken, accessCookie);
    response.cookies.set('refreshToken', refreshToken, refreshCookie);
    return response;
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid or expired refresh token' },
      { status: 401 },
    );
  }
}