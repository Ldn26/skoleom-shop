import { loadLocale, type LanguageCode } from '../locales';
import { I18N_DEFAULT_LANGUAGE } from './config';
import { setActiveLanguage } from './translate';
import { initLanguage } from './useAppTranslation';
import { detectPathLanguage, isRtlLanguage, isSupportedLanguage } from './urlLanguage';

const STORAGE_KEY = 'skoleom-language';

export async function bootstrapI18n(): Promise<void> {
  if (typeof window === 'undefined') return;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  const url = new URL(window.location.href);
  const fromPath = detectPathLanguage(url.pathname);
  const fromQuery = url.searchParams.get('lang');
  const queryCode = isSupportedLanguage(fromQuery) ? fromQuery : null;
  const code =
    fromPath ?? queryCode ?? (isSupportedLanguage(stored) ? stored : I18N_DEFAULT_LANGUAGE);

  document.documentElement.lang = code;
  document.documentElement.dir = isRtlLanguage(code) ? 'rtl' : 'ltr';

  if (queryCode) {
    window.localStorage.setItem(STORAGE_KEY, queryCode);
    url.searchParams.delete('lang');
    const cleanUrl = `${url.pathname}${url.search}${url.hash}`;
    window.history.replaceState({}, '', cleanUrl);
  }

  const lang = code as LanguageCode;
  const resource = await loadLocale(lang);
  setActiveLanguage(lang, resource);
  await initLanguage(lang);
}
