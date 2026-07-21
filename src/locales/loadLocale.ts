import en from './en';
import { overlay as overlayEn } from './overlays/en';
import type { LanguageCode, LocaleResource } from './types';

function mergeDeep(
  base: Record<string, unknown>,
  overlay: Record<string, unknown>,
): Record<string, unknown> {
  const result = { ...base };
  for (const key of Object.keys(overlay)) {
    if (
      key in result &&
      typeof result[key] === 'object' &&
      result[key] !== null &&
      !Array.isArray(result[key]) &&
      typeof overlay[key] === 'object' &&
      overlay[key] !== null &&
      !Array.isArray(overlay[key])
    ) {
      result[key] = mergeDeep(
        result[key] as Record<string, unknown>,
        overlay[key] as Record<string, unknown>,
      );
    } else {
      result[key] = overlay[key];
    }
  }
  return result;
}

const enMerged = mergeDeep(
  en as unknown as Record<string, unknown>,
  overlayEn as unknown as Record<string, unknown>,
) as LocaleResource;

const localeImporters: Record<LanguageCode, () => Promise<{ default: LocaleResource }>> = {
  en: async () => ({ default: enMerged }),
  fr: async () => {
    const [base, ov] = await Promise.all([import('./fr'), import('./overlays/fr')]);
    return {
      default: mergeDeep(
        base.default as unknown as Record<string, unknown>,
        ov.overlay as unknown as Record<string, unknown>,
      ) as LocaleResource,
    };
  },
  es: async () => {
    const [base, ov] = await Promise.all([import('./es'), import('./overlays/es')]);
    return {
      default: mergeDeep(
        base.default as unknown as Record<string, unknown>,
        ov.overlay as unknown as Record<string, unknown>,
      ) as LocaleResource,
    };
  },
  ar: async () => {
    const [base, ov] = await Promise.all([import('./ar'), import('./overlays/ar')]);
    return {
      default: mergeDeep(
        base.default as unknown as Record<string, unknown>,
        ov.overlay as unknown as Record<string, unknown>,
      ) as LocaleResource,
    };
  },
  pt: async () => {
    const [base, ov] = await Promise.all([import('./pt'), import('./overlays/pt')]);
    return {
      default: mergeDeep(
        base.default as unknown as Record<string, unknown>,
        ov.overlay as unknown as Record<string, unknown>,
      ) as LocaleResource,
    };
  },
  hi: async () => {
    const [base, ov] = await Promise.all([import('./hi'), import('./overlays/hi')]);
    return {
      default: mergeDeep(
        base.default as unknown as Record<string, unknown>,
        ov.overlay as unknown as Record<string, unknown>,
      ) as LocaleResource,
    };
  },
  zh: async () => {
    const [base, ov] = await Promise.all([import('./zh'), import('./overlays/zh')]);
    return {
      default: mergeDeep(
        base.default as unknown as Record<string, unknown>,
        ov.overlay as unknown as Record<string, unknown>,
      ) as LocaleResource,
    };
  },
  id: async () => {
    const [base, ov] = await Promise.all([import('./id'), import('./overlays/id')]);
    return {
      default: mergeDeep(
        base.default as unknown as Record<string, unknown>,
        ov.overlay as unknown as Record<string, unknown>,
      ) as LocaleResource,
    };
  },
  ru: async () => {
    const [base, ov] = await Promise.all([import('./ru'), import('./overlays/ru')]);
    return {
      default: mergeDeep(
        base.default as unknown as Record<string, unknown>,
        ov.overlay as unknown as Record<string, unknown>,
      ) as LocaleResource,
    };
  },
  sw: async () => {
    const [base, ov] = await Promise.all([import('./sw'), import('./overlays/sw')]);
    return {
      default: mergeDeep(
        base.default as unknown as Record<string, unknown>,
        ov.overlay as unknown as Record<string, unknown>,
      ) as LocaleResource,
    };
  },
  de: async () => {
    const [base, ov] = await Promise.all([import('./de'), import('./overlays/de')]);
    return {
      default: mergeDeep(
        base.default as unknown as Record<string, unknown>,
        ov.overlay as unknown as Record<string, unknown>,
      ) as LocaleResource,
    };
  },
  it: async () => {
    const [base, ov] = await Promise.all([import('./it'), import('./overlays/it')]);
    return {
      default: mergeDeep(
        base.default as unknown as Record<string, unknown>,
        ov.overlay as unknown as Record<string, unknown>,
      ) as LocaleResource,
    };
  },
  nl: async () => {
    const [base, ov] = await Promise.all([import('./nl'), import('./overlays/nl')]);
    return {
      default: mergeDeep(
        base.default as unknown as Record<string, unknown>,
        ov.overlay as unknown as Record<string, unknown>,
      ) as LocaleResource,
    };
  },
};

const cache = new Map<LanguageCode, LocaleResource>([['en', enMerged]]);

export const SUPPORTED_LANGUAGE_CODES = new Set<LanguageCode>(
  Object.keys(localeImporters) as LanguageCode[],
);

export function getEnLocale(): LocaleResource {
  return enMerged;
}

export function getLocaleSync(code: LanguageCode): LocaleResource | undefined {
  return cache.get(code);
}

export function isLocaleLoaded(code: LanguageCode): boolean {
  return cache.has(code);
}

export async function loadLocale(code: LanguageCode): Promise<LocaleResource> {
  const cached = cache.get(code);
  if (cached) return cached;
  const mod = await localeImporters[code]();
  cache.set(code, mod.default);
  return mod.default;
}
