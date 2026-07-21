import type { LanguageCode } from './types';

type TranslationBundle = Record<string, unknown>;

let sesyncPageCache: Record<LanguageCode, TranslationBundle> | null = null;
let sesyncTutorialCache: Record<LanguageCode, TranslationBundle> | null = null;
let search2Cache: Record<LanguageCode, TranslationBundle> | null = null;

export function getSesyncPageTranslationsSync(): Record<LanguageCode, TranslationBundle> | null {
  return sesyncPageCache;
}

export function getSesyncTutorialTranslationsSync(): Record<
  LanguageCode,
  TranslationBundle
> | null {
  return sesyncTutorialCache;
}

export function getSearch2TranslationsSync(): Record<LanguageCode, TranslationBundle> | null {
  return search2Cache;
}

export async function loadSesyncTranslations(): Promise<void> {
  if (sesyncPageCache && sesyncTutorialCache) return;
  const [pageMod, tutorialMod] = await Promise.all([
    sesyncPageCache ? Promise.resolve(null) : import('./sesyncPage.translations'),
    sesyncTutorialCache ? Promise.resolve(null) : import('./sesyncTutorial.translations'),
  ]);
  if (pageMod) sesyncPageCache = pageMod.sesyncPageTranslations;
  if (tutorialMod) sesyncTutorialCache = tutorialMod.sesyncTutorialTranslations;
}

export async function loadSearch2Translations(): Promise<void> {
  if (search2Cache) return;
  const mod = await import('./search2.translations');
  search2Cache = mod.search2Translations;
}
