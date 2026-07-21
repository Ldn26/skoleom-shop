import { getEnLocale, getLocaleSync, loadLocale, type LanguageCode } from '../locales';
import { getA11yFallback } from '../locales/a11yFallback';
import { getCookieFallback } from '../locales/cookieFallback';
import {
  getSearch2TranslationsSync,
  getSesyncPageTranslationsSync,
  getSesyncTutorialTranslationsSync,
  loadSearch2Translations,
  loadSesyncTranslations,
} from '../locales/lazyBundles';
import { mergeResource } from '../locales/mergeResource';
import type { LocaleResource } from '../locales/types';
import { I18N_DEFAULT_LANGUAGE } from './config';
import { BILINGUAL_LANGS, BILINGUAL_SECONDARY_LANG, formatBilingualLabel } from './bilingual';
import { bumpLanguageVersion } from './languageEvents';

type TranslateOptions = Record<string, string | number>;

/** i18next ResourceKey → objet fusionnable par mergeResource. */
const toMergeRecord = (resource: LocaleResource): Record<string, unknown> =>
  resource as Record<string, unknown>;

let activeLanguage: LanguageCode = I18N_DEFAULT_LANGUAGE;

function withFallbackResources(base: LocaleResource, code: LanguageCode): LocaleResource {
  const enBase = getEnLocale();
  const mergedBase = mergeResource(toMergeRecord(enBase), toMergeRecord(base)) as LocaleResource;
  return mergeResource(toMergeRecord(mergedBase), {
    a11y: getA11yFallback(code),
    cookies: getCookieFallback(code),
  }) as LocaleResource;
}

const BILINGUAL_KEY_PREFIXES = [
  'public.notFound.heroLine',
  'public.notFound.unavailable',
  'public.notFound.discover',
  'public.notFound.building',
  'header.nav.',
  'home.hero.title',
] as const;

function getMergedResourceForLang(code: LanguageCode): LocaleResource {
  const base = getLocaleSync(code) ?? getEnLocale();
  const overlay = overlayCache.get(code) ?? {};
  return withFallbackResources(
    mergeResource(toMergeRecord(base), toMergeRecord(overlay as LocaleResource)) as LocaleResource,
    code,
  );
}

function resolveLocalizedString(key: string, resource: LocaleResource): string | undefined {
  const value = resolvePath(resource as Record<string, unknown>, key);
  return typeof value === 'string' ? value : undefined;
}

let activeResource: LocaleResource = withFallbackResources(getEnLocale(), I18N_DEFAULT_LANGUAGE);

const overlayCache = new Map<LanguageCode, Partial<LocaleResource>>();

const resolvePath = (source: Record<string, unknown>, path: string): unknown => {
  return path.split('.').reduce<unknown>((current, segment) => {
    if (current && typeof current === 'object' && segment in current) {
      return (current as Record<string, unknown>)[segment];
    }
    return undefined;
  }, source);
};

const applyInterpolation = (template: string, options?: TranslateOptions) => {
  if (!options) return template;
  return Object.entries(options).reduce(
    (result, [key, value]) => result.replace(new RegExp(`{{\\s*${key}\\s*}}`, 'g'), String(value)),
    template,
  );
};

async function loadOverlay(code: LanguageCode): Promise<Partial<LocaleResource>> {
  if (overlayCache.has(code)) return overlayCache.get(code)!;
  try {
    const mod = await import(`../locales/overlays/${code}.ts`);
    const overlay = (mod.overlay ??
      mod[`overlay${code.charAt(0).toUpperCase()}${code.slice(1)}`]) as Partial<LocaleResource>;
    overlayCache.set(code, overlay);
    return overlay;
  } catch {
    overlayCache.set(code, {});
    return {};
  }
}

function ensureSesyncLoaded(): void {
  if (getSesyncPageTranslationsSync()) return;
  void loadSesyncTranslations().then(() => bumpLanguageVersion());
}

function ensureSearch2Loaded(): void {
  if (getSearch2TranslationsSync()) return;
  void loadSearch2Translations().then(() => bumpLanguageVersion());
}

export function setActiveLanguage(code: LanguageCode, resource?: LocaleResource) {
  activeLanguage = code;
  const base = resource ?? getLocaleSync(code) ?? getEnLocale();
  const overlay = overlayCache.get(code) ?? {};
  activeResource = withFallbackResources(
    mergeResource(toMergeRecord(base), toMergeRecord(overlay as LocaleResource)) as LocaleResource,
    code,
  );
}

export async function hydrateLanguage(code: LanguageCode) {
  const [overlay, base] = await Promise.all([loadOverlay(code), loadLocale(code)]);
  activeLanguage = code;
  activeResource = withFallbackResources(
    mergeResource(toMergeRecord(base), toMergeRecord(overlay as LocaleResource)) as LocaleResource,
    code,
  );
}

export function getActiveLanguage(): LanguageCode {
  return activeLanguage;
}

export function translate(key: string, options?: TranslateOptions): string {
  let value = resolveLocalizedString(key, activeResource);
  if (!value) {
    value = resolveLocalizedString(key, getMergedResourceForLang(I18N_DEFAULT_LANGUAGE));
  }

  if (value) {
    if (
      BILINGUAL_LANGS.has(activeLanguage) &&
      BILINGUAL_KEY_PREFIXES.some((prefix) => key.startsWith(prefix))
    ) {
      const secondaryCode = BILINGUAL_SECONDARY_LANG[activeLanguage] ?? I18N_DEFAULT_LANGUAGE;
      const secondary = resolveLocalizedString(key, getMergedResourceForLang(secondaryCode));
      if (secondary) {
        return applyInterpolation(formatBilingualLabel(value, secondary), options);
      }
    }
    return applyInterpolation(value, options);
  }

  const legacy = resolvePath(activeResource as Record<string, unknown>, key);
  if (typeof legacy === 'string') return applyInterpolation(legacy, options);

  if (key.startsWith('a11y.')) {
    const fallback = getA11yFallback(activeLanguage);
    const fallbackValue = resolvePath(fallback as Record<string, unknown>, key.slice(5));
    if (typeof fallbackValue === 'string') return applyInterpolation(fallbackValue, options);
  }

  if (key.startsWith('cookies.')) {
    const fallback = getCookieFallback(activeLanguage);
    const fallbackValue = resolvePath(fallback as Record<string, unknown>, key.slice(8));
    if (typeof fallbackValue === 'string') return applyInterpolation(fallbackValue, options);
  }

  if (key.startsWith('public.search2.')) {
    ensureSearch2Loaded();
    const search2Translations = getSearch2TranslationsSync();
    if (search2Translations) {
      const lang = getActiveLanguage();
      const translationSource = search2Translations[lang] || search2Translations.en;
      const fallbackValue = resolvePath(
        translationSource as Record<string, unknown>,
        key.slice('public.search2.'.length),
      );
      if (typeof fallbackValue === 'string') return applyInterpolation(fallbackValue, options);
    }
  }

  if (key.startsWith('public.sesync.')) {
    ensureSesyncLoaded();
    const path = key.slice('public.sesync.'.length);
    const value = resolveSesyncString(getActiveLanguage(), path);
    if (value) return applyInterpolation(value, options);
  }

  return key;
}

function resolveSesyncString(lang: LanguageCode, path: string): string | undefined {
  const sesyncPageTranslations = getSesyncPageTranslationsSync();
  if (!sesyncPageTranslations) return undefined;

  const bundle = sesyncPageTranslations[lang] ?? sesyncPageTranslations.en;
  let value = resolvePath(bundle as Record<string, unknown>, path);
  if (typeof value !== 'string' && lang !== 'en') {
    value = resolvePath(sesyncPageTranslations.en as Record<string, unknown>, path);
  }
  if (typeof value === 'string') return value;

  if (path.startsWith('mockup.tutorial.')) {
    const sesyncTutorialTranslations = getSesyncTutorialTranslationsSync();
    if (!sesyncTutorialTranslations) return undefined;

    const tutorialPath = path.slice('mockup.tutorial.'.length);
    const tutorial = sesyncTutorialTranslations[lang] ?? sesyncTutorialTranslations.en;
    const tutorialValue = resolvePath(tutorial as Record<string, unknown>, tutorialPath);
    if (typeof tutorialValue === 'string') return tutorialValue;
    const enTutorial = sesyncTutorialTranslations.en;
    const enValue = resolvePath(enTutorial as Record<string, unknown>, tutorialPath);
    if (typeof enValue === 'string') return enValue;
  }

  return undefined;
}
