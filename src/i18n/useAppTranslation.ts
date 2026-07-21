import { useCallback, useMemo, useSyncExternalStore } from 'react';
import type { LanguageCode } from '../locales';
import { translate, hydrateLanguage } from './translate';
import { useLanguageContext } from './LanguageProvider';
import { bumpLanguageVersion, getLanguageVersion, subscribeLanguage } from './languageEvents';

export async function initLanguage(code: LanguageCode) {
  await hydrateLanguage(code);
  bumpLanguageVersion();
}

export function useTranslation() {
  const ctx = useLanguageContext();
  const version = useSyncExternalStore(subscribeLanguage, getLanguageVersion, getLanguageVersion);

  const t = useCallback(
    (key: string, options?: Record<string, string | number>) => translate(key, options),
    [ctx.language, version],
  );

  const i18n = useMemo(
    () => ({
      language: ctx.language,
      resolvedLanguage: ctx.resolvedLanguage,
      changeLanguage: async (code: string) => {
        await ctx.changeLanguage(code as LanguageCode);
        bumpLanguageVersion();
        return i18n;
      },
    }),
    [ctx],
  );

  return useMemo(() => ({ t, i18n }), [t, i18n]);
}
