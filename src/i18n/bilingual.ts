import type { LanguageCode } from '../locales/types';

/** Langues avec affichage bilingue obligatoire (primaire · secondaire). */
export const BILINGUAL_LANGS = new Set<LanguageCode>([]);

/** Langue secondaire affichée après « · » pour le couple bilingue. */
export const BILINGUAL_SECONDARY_LANG: Partial<Record<LanguageCode, LanguageCode>> = {
  nl: 'fr',
  de: 'en',
  it: 'en',
};

export function formatBilingualLabel(primary: string, secondary: string): string {
  const p = primary.trim();
  const s = secondary.trim();
  if (!s || p === s) return p;
  return `${p} · ${s}`;
}
