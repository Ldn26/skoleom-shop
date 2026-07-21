// import { NextResponse, type NextRequest } from 'next/server';

// const SUPPORTED_LANGS = [
//   'en',
//   'fr',
//   'es',
//   'ar',
//   'pt',
//   'hi',
//   'zh',
//   'id',
//   'ru',
//   'sw',
//   'de',
//   'it',
//   'nl',
// ];

// const DEFAULT_LANG = 'fr';
// const ACCESS_COOKIE = 'accessToken';

// const PROTECT_ROUTES = true;


// function firstSegment(pathname: string): string {
//   return pathname.split('/').filter(Boolean)[0] ?? '';
// }


// function stripLang(pathname: string): {
//   lang: string | null;
//   rest: string;
// } {
//   const segment = firstSegment(pathname);

//   if (SUPPORTED_LANGS.includes(segment)) {
//     const rest = pathname.slice(segment.length + 1) || '/';

//     return {
//       lang: segment,
//       rest: rest.startsWith('/') ? rest : `/${rest}`,
//     };
//   }

//   return {
//     lang: null,
//     rest: pathname,
//   };
// }

// /**
//  * Decode JWT
//  *
//  * This only reads the JWT payload.
//  * It does not verify the JWT signature.
//  */
// function decodeJwt(token: string): {
//   exp?: number;
//   role?: string;
//   roles?: string[];
//   [key: string]: unknown;
// } | null {
//   try {
//     const payload = token.split('.')[1];

//     if (!payload) {
//       return null;
//     }

//     const normalized = payload
//       .replace(/-/g, '+')
//       .replace(/_/g, '/');

//     const paddedPayload = normalized.padEnd(
//       normalized.length +
//         ((4 - (normalized.length % 4)) % 4),
//       '='
//     );

//     const json = atob(paddedPayload);

//     return JSON.parse(json);
//   } catch {
//     return null;
//   }
// }


// function needsAuth(rest: string): {
//   required: boolean;
//   roles?: string[];
// } {
//   /**
//    * ADMIN
//    *
//    * Only VENDEUR can access.
//    *
//    * /admin
//    * /admin/*
//    */
//   if (
//     rest === '/admin' ||
//     rest.startsWith('/admin/')
//   ) {
//     return {
//       required: true,
//       roles: ['vendeur'],
//     };
//   }

//   /**
//    * VENDEUR DASHBOARD
//    *
//    * Only VENDEUR can access.
//    *
//    * /vendeur/dashboard
//    * /vendeur/dashboard/*
//    */
//   if (
//     rest === '/vendeur/dashboard' ||
//     rest.startsWith('/vendeur/dashboard/')
//   ) {
//     return {
//       required: true,
//       roles: ['vendeur'],
//     };
//   }

//   /**
//    * ESSAYAGE
//    *
//    * Only ACHETEUR can access.
//    *
//    * /essayage
//    * /essayage/*
//    */
//   if (
//     rest === '/essayage' ||
//     rest.startsWith('/essayage/')
//   ) {
//     return {
//       required: true,
//       roles: ['acheteur'],
//     };
//   }

//   /**
//    * ACCOUNT
//    *
//    * Any authenticated user can access.
//    *
//    * /compte
//    * /compte/*
//    */
//   if (
//     rest === '/compte' ||
//     rest.startsWith('/compte/')
//   ) {
//     return {
//       required: true,
//     };
//   }

//   /**
//    * Public route
//    */
//   return {
//     required: false,
//   };
// }

// /**
//  * Get the roles of the current user
//  *
//  * Supports:
//  *
//  * {
//  *   "role": "acheteur"
//  * }
//  *
//  * OR:
//  *
//  * {
//  *   "roles": ["acheteur"]
//  * }
//  */
// function getUserRoles(
//   claims: {
//     role?: string;
//     roles?: string[];
//   } | null
// ): string[] {
//   if (!claims) {
//     return [];
//   }

//   /**
//    * JWT:
//    *
//    * roles: ["acheteur"]
//    */
//   if (Array.isArray(claims.roles)) {
//     return claims.roles;
//   }

//   /**
//    * JWT:
//    *
//    * role: "acheteur"
//    */
//   if (claims.role) {
//     return [claims.role];
//   }

//   return [];
// }

// /**
//  * Middleware
//  */
// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   /**
//    * Extract language
//    *
//    * /fr/essayage
//    *
//    * lang = fr
//    * rest = /essayage
//    */
//   const {
//     lang,
//     rest,
//   } = stripLang(pathname);


//   const
//    guard = needsAuth(rest);if (
//     PROTECT_ROUTES &&
//     guard.required
//   ) {
//     /**
//      * Get access token from cookie
//      */
//     const token = req.cookies.get(
//       ACCESS_COOKIE
//     )?.value;

//     /**
//      * Decode token
//      */
//     const claims = token
//       ? decodeJwt(token)
//       : null;

//     /**
//      * Check expiration
//      */
//     const expired =
//       !claims?.exp ||
//       claims.exp * 1000 < Date.now();

//     /**
//      * Get user roles
//      */
//     const userRoles = getUserRoles(claims);

//     /**
//      * Check required role
//      *
//      * Essayage:
//      *
//      * required role = acheteur
//      *
//      * User role:
//      *
//      * vendeur
//      *
//      * Result:
//      *
//      * ❌ Access denied
//      */
//     const roleOk =
//       !guard.roles ||
//       guard.roles.some(
//         (requiredRole) =>
//           userRoles.includes(requiredRole)
//       );

//     /**
//      * Redirect if:
//      *
//      * - no token
//      * - invalid token
//      * - expired token
//      * - wrong role
//      */
//     if (
//       !token ||
//       !claims ||
//       expired ||
//       !roleOk
//     ) {
//       const loginPath = lang
//         ? `/${lang}/connection`
//         : `/${DEFAULT_LANG}/connection`;

//       const url = req.nextUrl.clone();

//       url.pathname = loginPath;
//       url.search = '';

//       return NextResponse.redirect(url);
//     }
//   }

//   /**
//    * Add default language
//    *
//    * /essayage
//    *
//    * becomes internally:
//    *
//    * /fr/essayage
//    */
//   if (!lang) {
//     const url = req.nextUrl.clone();

//     url.pathname =
//       pathname === '/'
//         ? `/${DEFAULT_LANG}`
//         : `/${DEFAULT_LANG}${pathname}`;

//     return NextResponse.rewrite(url);
//   }

//   /**
//    * Allow request
//    */
//   return NextResponse.next();
// }

// /**
//  * Middleware matcher
//  */
// export const config = {
//   matcher: [
//     '/((?!api|serp|_next/static|_next/image|footer-pages|.*\\..*).*)',
//   ],
// };

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

function firstSegment(pathname: string): string {
  return pathname.split('/').filter(Boolean)[0] ?? '';
}

function stripLang(pathname: string): {
  lang: string | null;
  rest: string;
} {
  const segment = firstSegment(pathname);

  if (SUPPORTED_LANGS.includes(segment)) {
    const rest = pathname.slice(segment.length + 1) || '/';

    return {
      lang: segment,
      rest: rest.startsWith('/') ? rest : `/${rest}`,
    };
  }

  return {
    lang: null,
    rest: pathname,
  };
}

type JwtClaims = {
  id?: number;
  role?: string;
  exp?: number;
  iat?: number;
  [key: string]: unknown;
};

function decodeJwt(token: string): JwtClaims | null {
  try {
    const payload = token.split('.')[1];

    if (!payload) {
      return null;
    }

    const normalized = payload
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const paddedPayload = normalized.padEnd(
      normalized.length +
        ((4 - (normalized.length % 4)) % 4),
      '='
    );

    return JSON.parse(atob(paddedPayload));
  } catch {
    return null;
  }
}

/**
 * Define the role required for each route
 */
function getRequiredRole(rest: string): string | null {
  /**
   * VENDEUR ROUTES
   */

  if (
    rest === '/dashboard' ||
    rest.startsWith('/dashboard/')
  ) {
    return 'vendeur';
  }

  if (
    rest === '/products' ||
    rest.startsWith('/products/')
  ) {
    return 'vendeur';
  }

  if (
    rest === '/orders' ||
    rest.startsWith('/orders/')
  ) {
    return 'vendeur';
  }

  /**
   * ACHETEUR ROUTES
   */

  if (
    rest === '/essayage' ||
    rest.startsWith('/essayage/')
  ) {
    return 'acheteur';
  }

  /**
   * Public routes
   */

  return null;
}

/**
 * Routes requiring any authenticated user
 */
function requiresAuthentication(rest: string): boolean {
  return (
    rest === '/profile' ||
    rest.startsWith('/profile/')
  );
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const {
    lang,
    rest,
  } = stripLang(pathname);

  /**
   * Get the required role for this route
   */
  const requiredRole = getRequiredRole(rest);

  /**
   * Check if route requires any logged-in user
   */
  const requiresAuth =
    requiredRole !== null ||
    requiresAuthentication(rest);

  if (requiresAuth) {
    const token = req.cookies.get(
      ACCESS_COOKIE
    )?.value;

    const claims = token
      ? decodeJwt(token)
      : null;

    const expired =
      !claims?.exp ||
      claims.exp * 1000 < Date.now();

    /**
     * If the route requires a specific role
     */
    const roleIsValid =
      !requiredRole ||
      claims?.role === requiredRole;

    /**
     * Redirect if:
     *
     * - no token
     * - invalid token
     * - expired token
     * - wrong role
     */
    if (
      !token ||
      !claims ||
      expired ||
      !roleIsValid
    ) {
      const loginPath = lang
        ? `/${lang}/connection`
        : `/${DEFAULT_LANG}/connection`;

      const url = req.nextUrl.clone();

      url.pathname = loginPath;
      url.search = '';

      return NextResponse.redirect(url);
    }
  }

  /**
   * Add default language
   */
  if (!lang) {
    const url = req.nextUrl.clone();

    url.pathname =
      pathname === '/'
        ? `/${DEFAULT_LANG}`
        : `/${DEFAULT_LANG}${pathname}`;

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|serp|_next/static|_next/image|footer-pages|.*\\..*).*)',
  ],
};