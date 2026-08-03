

// import jwt from 'jsonwebtoken';

// const isProd = process.env.NODE_ENV === 'production';

// export type TokenPayload = {
//   id: number | string;
//   role?: string;
//   wpUserId?: number | string | null;
// };

// // 1. Fixed: Reduced Access Token lifespan to 15 minutes for security
// export function signAccessToken(payload: TokenPayload): string {
//   return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '15m' });
// }

// export function signRefreshToken(payload: TokenPayload): string {
//   return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string, { expiresIn: '7d' });
// }

// // 2. Fixed: Use 'lax' by default to block CSRF attacks
// export const accessCookie = {
//   httpOnly: true,
//   secure: isProd,
//   sameSite: 'lax' as const,
//   path: '/',
//   // maxAge: 10
//     maxAge: 60 * 60 * 15,

//   // maxAge: 60 * 15, // 15 minutes (in seconds)
// };

// export const refreshCookie = {
//   httpOnly: true,
//   secure: isProd,
//   sameSite: 'lax' as const,
//   path: '/',
//   // maxAge: 60  * 4
//   maxAge: 60 * 60 * 24 * 7, // 7 days (in seconds)
// };

// export function readCookie(request: Request, name: string): string | null {
//   const header = request.headers.get('cookie') ?? '';
//   const match = header.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
//   return match ? decodeURIComponent(match[1]) : null;
// }


// export function getAuth(request: Request): TokenPayload | null {

  
//   const token = readCookie(request, 'accessToken'); // ONLY read cookie
  
//   if (!token) {
//     // console.log('❌ No cookie found!');
//     return null;
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;
//     // console.log(' Cookie verified successfully!');
    
//     return { id: decoded.id, role: decoded.role, wpUserId: decoded.wpUserId ?? null };
//   }  catch (err: any) {
//     console.log(' Cookie verification failed:', err.message); // Will log "jwt expired"
//     return null;
//   }
// }

// export function verifyRefresh(token: string): TokenPayload {
//   return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET as string) as TokenPayload;
// }

import jwt from 'jsonwebtoken';
import { env } from './config/env';

const isProd = env.NODE_ENV === 'production';

export type TokenPayload = {
  id: number | string;
  role?: string;
  wpUserId?: number | string | null;
};

export function signAccessToken(payload: TokenPayload): string {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: '15m' });
}

export function signRefreshToken(payload: TokenPayload): string {
  return jwt.sign(payload, env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
}

export const accessCookie = {
  httpOnly: true,
  secure: isProd,
  sameSite: 'lax' as const,
  path: '/',
  maxAge: 60 * 15, // 15 minutes (in seconds)
};

export const refreshCookie = {
  httpOnly: true,
  secure: isProd,
  sameSite: 'lax' as const,
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 7 days (in seconds)
};

export function readCookie(request: Request, name: string): string | null {
  const header = request.headers.get('cookie') ?? '';
  const match = header.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function getAuth(request: Request): TokenPayload | null {
  const token = readCookie(request, 'accessToken');

  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as TokenPayload;
    return { id: decoded.id, role: decoded.role, wpUserId: decoded.wpUserId ?? null };
  } catch  {
    // const message = err instanceof Error ? err.message : 'Unknown verification error';
    // console.log('Cookie verification failed:', message);
    return null;
  }
}

export function verifyRefresh(token: string): TokenPayload {
  return jwt.verify(token, env.REFRESH_TOKEN_SECRET) as TokenPayload;
}