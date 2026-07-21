/** Clé i18n pour `columnKey` (les points cassent la résolution par chemin). */
export function columnI18nKey(columnKey: string): string {
  return columnKey.replace(/\./g, '_');
}

/** Clé stable pour les libellés français source (aligné sur scripts/generate-i18n-overlays.mjs). */
export function keySafe(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

/** Retourne la traduction ou le libellé source si la clé est absente. */
export function tOr(t: (key: string) => string, key: string, fallback: string): string {
  const value = t(key);
  return value === key ? fallback : value;
}
