import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { getEnLocale, loadLocale, SUPPORTED_LANGUAGE_CODES, type LanguageCode } from '../locales';
import { mergeResource } from '../locales/mergeResource';
import type { LocaleResource } from '../locales/types';
import { getA11yFallback } from '../locales/a11yFallback';
import { getCookieFallback } from '../locales/cookieFallback';
import { detectLanguageByIp } from './ipLanguage';
import { I18N_DEFAULT_LANGUAGE } from './config';
import { bumpLanguageVersion } from './languageEvents';
import { setActiveLanguage } from './translate';
import {
  buildLocalizedPath,
  detectPathLanguage,
  isRtlLanguage,
  stripLanguagePrefix,
} from './urlLanguage';

const STORAGE_KEY = 'skoleom-language';

type LanguageContextValue = {
  language: LanguageCode;
  resolvedLanguage: LanguageCode;
  changeLanguage: (code: LanguageCode) => Promise<LanguageContextValue>;
  resource: LocaleResource;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLanguage(): LanguageCode {
  if (typeof window === 'undefined') return I18N_DEFAULT_LANGUAGE;
  const fromPath = detectPathLanguage(window.location.pathname);
  if (fromPath) return fromPath;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGUAGE_CODES.has(stored as LanguageCode)) {
    return stored as LanguageCode;
  }
  return I18N_DEFAULT_LANGUAGE;
}

function applyDocumentLanguage(code: LanguageCode) {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = code;
  document.documentElement.dir = isRtlLanguage(code) ? 'rtl' : 'ltr';
}

async function loadOverlay(code: LanguageCode): Promise<Partial<LocaleResource>> {
  try {
    const mod = await import(`../locales/overlays/${code}.ts`);
    return (mod.overlay ??
      mod[`overlay${code.charAt(0).toUpperCase()}${code.slice(1)}`]) as Partial<LocaleResource>;
  } catch {
    return {};
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>(readStoredLanguage);
  const [base, setBase] = useState<LocaleResource>(getEnLocale);
  const [overlay, setOverlay] = useState<Partial<LocaleResource>>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const fromPath = detectPathLanguage(window.location.pathname);
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (!fromPath && !stored) {
      void detectLanguageByIp().then((detectedCode) => {
        if (!detectedCode) return;
        setLanguage((prev) => {
          if (detectedCode !== prev) {
            window.localStorage.setItem(STORAGE_KEY, detectedCode);
            return detectedCode;
          }
          return prev;
        });
        const path = stripLanguagePrefix(window.location.pathname);
        const localized = buildLocalizedPath(path, detectedCode);
        const target = `${localized}${window.location.search}${window.location.hash}`;
        const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
        if (target !== current) {
          window.history.replaceState({}, '', target);
        }
      });
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    void loadLocale(language).then((loaded) => {
      if (!cancelled) setBase(loaded);
    });
    return () => {
      cancelled = true;
    };
  }, [language]);

  useEffect(() => {
    let cancelled = false;
    void loadOverlay(language).then((next) => {
      if (!cancelled) setOverlay(next);
    });
    return () => {
      cancelled = true;
    };
  }, [language]);

  useEffect(() => {
    applyDocumentLanguage(language);
  }, [language]);

  const resource = useMemo(() => {
    const baseRec = base as Record<string, unknown>;
    const overlayRec = overlay as Record<string, unknown>;
    const fallbackRec = {
      a11y: getA11yFallback(language),
      cookies: getCookieFallback(language),
    } as Record<string, unknown>;

    const merged1 = mergeResource(baseRec, overlayRec);
    return mergeResource(merged1, fallbackRec) as LocaleResource;
  }, [base, overlay, language]);

  const changeLanguage = useCallback(async (code: LanguageCode) => {
    setLanguage(code);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, code);
    }
    applyDocumentLanguage(code);
    const [nextOverlay, nextBase] = await Promise.all([loadOverlay(code), loadLocale(code)]);
    setOverlay(nextOverlay);
    setBase(nextBase);
    const nextResource = mergeResource(
      mergeResource(nextBase as Record<string, unknown>, nextOverlay as Record<string, unknown>),
      {
        a11y: getA11yFallback(code),
        cookies: getCookieFallback(code),
      } as Record<string, unknown>,
    ) as LocaleResource;
    return { language: code, resolvedLanguage: code, changeLanguage, resource: nextResource };
  }, []);

  useEffect(() => {
    setActiveLanguage(language, resource);
    bumpLanguageVersion();
  }, [language, resource]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      resolvedLanguage: language,
      changeLanguage,
      resource,
    }),
    [language, changeLanguage, resource],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguageContext(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguageContext must be used within LanguageProvider');
  }
  return ctx;
}
