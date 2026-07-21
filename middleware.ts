
import { NextResponse, type NextRequest } from 'next/server';

const SUPPORTED_LANGS = [
  'en', 'fr', 'es', 'ar', 'pt', 'hi', 'zh', 'id', 'ru', 'sw', 'de', 'it', 'nl',
];

const DEFAULT_LANG = 'fr';
const ACCESS_COOKIE = 'accessToken';

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
  const { lang, rest } = stripLang(pathname);

  const requiredRole = getRequiredRole(rest);
  const requiresAuth = requiredRole !== null || requiresAuthentication(rest);

  if (requiresAuth) {
    const token = req.cookies.get(ACCESS_COOKIE)?.value;
    const claims = token ? decodeJwt(token) : null;
    const expired = !claims?.exp || claims.exp * 1000 < Date.now();
    const roleIsValid = !requiredRole || claims?.role === requiredRole;

    if (!token || !claims || expired || !roleIsValid) {
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
  matcher: ['/((?!api|serp|_next/static|_next/image|footer-pages|.*\\..*).*)'],
};