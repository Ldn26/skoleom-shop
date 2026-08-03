import { NextResponse, type NextRequest } from 'next/server';

const SUPPORTED_LANGS = [
  'en',
  'fr',
  'es',
  'ar',
  'pt',
  'hi',
  'zh',
  'id',
  'ru',
  'sw',
  'de',
  'it',
  'nl',
];

const DEFAULT_LANG = 'fr';
const ACCESS_COOKIE = 'accessToken';

// Comma-separated list in .env: ALLOWED_ORIGIN=https://a.com,https://b.com,http://localhost:5173
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGIN ?? '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

function corsHeaders(origin: string | null): Record<string, string> {
  // Allow if the origin is in the list, OR (dev convenience) if no list is configured.
  const allow = !!origin && (ALLOWED_ORIGINS.length === 0 || ALLOWED_ORIGINS.includes(origin));
  if (!allow || !origin) return {};
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

type JwtClaims = {
  id?: number;
  role?: string;
  exp?: number;
  iat?: number;
  [key: string]: unknown;
};

function firstSegment(pathname: string): string {
  return pathname.split('/').filter(Boolean)[0] ?? '';
}

function stripLang(pathname: string): { lang: string | null; rest: string } {
  const segment = firstSegment(pathname);
  if (SUPPORTED_LANGS.includes(segment)) {
    const rest = pathname.slice(segment.length + 1) || '/';
    return { lang: segment, rest: rest.startsWith('/') ? rest : `/${rest}` };
  }
  return { lang: null, rest: pathname };
}

function decodeJwt(token: string): JwtClaims | null {
  try {
    const payload = token.split('.')[1];
    if (!payload) return null;
    const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
    const padded = normalized.padEnd(normalized.length + ((4 - (normalized.length % 4)) % 4), '=');
    return JSON.parse(atob(padded));
  } catch {
    return null;
  }
}

function getRequiredRole(rest: string): string | null {
  if (rest === '/vendeur' || rest.startsWith('/vendeur/')) return 'vendeur';
  if (rest === '/essayage' || rest.startsWith('/essayage/')) return 'acheteur';
  return null;
}

function requiresAuthentication(rest: string): boolean {
  return (
    rest === '/profile' ||
    rest.startsWith('/profile/') ||
    rest === '/compte' ||
    rest.startsWith('/compte/')
  );
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ── CORS for the API (handles preflight + adds headers to every /api response) ──
  if (pathname.startsWith('/api')) {
    const cors = corsHeaders(req.headers.get('origin'));
    if (req.method === 'OPTIONS') {
      return new NextResponse(null, { status: 204, headers: cors });
    }
    const res = NextResponse.next();
    for (const [k, v] of Object.entries(cors)) res.headers.set(k, v);
    return res;
  }

  // ── Language + auth guard (pages only) ──
  const { lang, rest } = stripLang(pathname);
  const requiredRole = getRequiredRole(rest);
  const requiresAuth = requiredRole !== null || requiresAuthentication(rest);

  if (requiresAuth) {
    const access = req.cookies.get(ACCESS_COOKIE)?.value;
    const refresh = req.cookies.get('refreshToken')?.value;

    // Read identity/role from whichever token is present (payload only, no verify).
    // The access cookie can expire (short-lived) while the refresh cookie (long-lived)
    // is still valid — in that case the client refresh flow will mint a new access
    // token, so we must NOT kick the user just because `accessToken` is missing.
    const claims = access ? decodeJwt(access) : refresh ? decodeJwt(refresh) : null;
    const roleIsValid = !requiredRole || claims?.role === requiredRole;

    // Logged out only if BOTH cookies are missing, the token is unreadable,
    // or the role doesn't match the route.
    if ((!access && !refresh) || !claims || !roleIsValid) {
      const loginPath = lang ? `/${lang}/connection` : `/${DEFAULT_LANG}/connection`;
      const url = req.nextUrl.clone();
      url.pathname = loginPath;
      url.search = '';
      return NextResponse.redirect(url);
    }
  }

  if (!lang) {
    const url = req.nextUrl.clone();
    url.pathname = pathname === '/' ? `/${DEFAULT_LANG}` : `/${DEFAULT_LANG}${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!serp|_next/static|_next/image|footer-pages|.*\\..*).*)'],
};
