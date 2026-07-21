/**
 * Constantes globales de l'application.
 * Centralisées ici pour éviter la duplication et faciliter les ajustements.
 */

/** Taux de conversion EUR -> USD utilisé pour l'affichage des prix. */
export const EUR_TO_USD = 1.1761;

/** Clés localStorage (préfixe `skoleom_`). */
export const STORAGE_KEYS = {
  access: 'skoleom_token',
  refresh: 'skoleom_refresh',
  theme: 'skoleom_theme',
  a11y: 'skoleom_a11y',
} as const;

/** Route de l'expérience interactive Skoleom Touch (CTA « Découvrez la magie »). */
export const SKOLEOM_TOUCH_PATH = '/touch' as const;

/** Site Skoleom Studio (CTA section Studio sur la home). */
export const SKOLEOM_STUDIO_URL = 'https://skoleomstudio.com/' as const;

/** Base des routes Skoleom Page (intégrées à Skoleom Universe). */
export const SKOLEOM_PAGE_BASE = '/skoleom-page' as const;

/** Route principale Skoleom Page. */
export const SKOLEOM_PAGE_PATH = SKOLEOM_PAGE_BASE;

export const SKOLEOM_PAGE_NAV_LINKS = {
  home: SKOLEOM_PAGE_BASE,
  trend: `${SKOLEOM_PAGE_BASE}/trends`,
  post: `${SKOLEOM_PAGE_BASE}/create`,
  profil: `${SKOLEOM_PAGE_BASE}/profile`,
} as const;

/** Slug URL pour une fiche artiste / entité. */
export function skoleomPageArtistPath(name: string): string {
  const slug = name.trim().toLowerCase().replace(/\s+/g, '-');
  return `${SKOLEOM_PAGE_BASE}/artist/${encodeURIComponent(slug)}`;
}
