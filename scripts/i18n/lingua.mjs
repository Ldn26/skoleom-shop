/** Langues européennes ajoutées (Flamand/NL, DE, IT). */
export const EU_LANGS = ['de', 'it', 'nl'];

export const ALL_SITE_LANGS = [
  'fr',
  'en',
  'es',
  'ar',
  'pt',
  'hi',
  'zh',
  'id',
  'ru',
  'sw',
  ...EU_LANGS,
];

/**
 * Choisit la chaîne pour une langue avec repli EN puis FR.
 * @param {string} lang
 * @param {{ fr?: string, en: string, de?: string, it?: string, nl?: string, es?: string }} strings
 */
export function L(lang, strings) {
  if (lang === 'fr' && strings.fr) return strings.fr;
  if (strings[lang]) return strings[lang];
  return strings.en ?? strings.fr ?? '';
}
