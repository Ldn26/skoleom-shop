import { I18N_DEFAULT_LANGUAGE } from './config';

export const SUPPORTED_I18N_LANGS = [
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
] as const;

export type SupportedI18nLang = (typeof SUPPORTED_I18N_LANGS)[number];

const SUPPORTED_SET = new Set<string>(SUPPORTED_I18N_LANGS);

export function isSupportedLanguage(value: string | null | undefined): value is SupportedI18nLang {
  return Boolean(value && SUPPORTED_SET.has(value));
}

export function detectPathLanguage(pathname: string): SupportedI18nLang | null {
  const first = pathname.split('/').filter(Boolean)[0];
  return isSupportedLanguage(first) ? first : null;
}

export function stripLanguagePrefix(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return '/';
  if (isSupportedLanguage(segments[0])) {
    const rest = segments.slice(1);
    return rest.length ? `/${rest.join('/')}` : '/';
  }
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

export function buildLocalizedPath(pathname: string, language: SupportedI18nLang): string {
  const basePath = stripLanguagePrefix(pathname);
  if (language === I18N_DEFAULT_LANGUAGE) return basePath;
  if (basePath === '/') return `/${language}`;
  return `/${language}${basePath}`;
}

export function isRtlLanguage(language: string | null | undefined): boolean {
  return language === 'ar';
}

/** Segments réservés — ne doivent pas être interprétés comme un code langue dans /:lang. */
export const RESERVED_PATH_SEGMENTS = new Set(['hub', 'footer-pages', 'not-found', '404']);

/** Pattern pour Route path="/:lang(...)" — limite le param lang aux langues supportées. */
export const I18N_LANG_ROUTE_PARAM = SUPPORTED_I18N_LANGS.join('|');
