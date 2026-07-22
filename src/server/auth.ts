import jwt from 'jsonwebtoken';

const isProd = process.env.NODE_ENV === 'production';

type TokenPayload = { id: number | string; role?: string  , wpUserId?: number | string };

export function signAccessToken(payload: TokenPayload): string {
  return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '15h' });
}

export function signRefreshToken(payload: TokenPayload): string {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string, { expiresIn: '7d' });
}

export const accessCookie = {
  httpOnly: true,
  secure: isProd,
  sameSite: (isProd ? 'none' : 'lax') as 'none' | 'lax',
  path: '/',
  maxAge: 60 * 60 * 15,
};

export const refreshCookie = {
  httpOnly: true,
  secure: isProd,
  sameSite: (isProd ? 'none' : 'lax') as 'none' | 'lax',
  path: '/',
  maxAge: 60 * 60 * 24 * 7,
};

export function readCookie(request: Request, name: string): string | null {
  const header = request.headers.get('cookie') ?? '';
  const match = header.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function getAuth(request: Request): TokenPayload | null {
  const authHeader = request.headers.get('authorization') ?? '';
  const bearer = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  const token = bearer ?? readCookie(request, 'accessToken');
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;
    console.log('decoded', decoded);
    return { id: decoded.id, role: decoded.role, wpUserId: decoded.wpUserId };
  } catch {
    return null;
  }
}

export function verifyRefresh(token: string): TokenPayload {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET as string) as TokenPayload;
}
