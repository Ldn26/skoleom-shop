/**
 * Pages HTML standalone (dossier footer-pages → public/footer-pages).
 * Chaque lien footer pointe vers une page descriptive dédiée.
 */
import { stripLanguagePrefix } from '../i18n/urlLanguage';
export const HUB_BASE = '/footer-pages';

/** Chemins servis en HTML statique — pas de routage React ni préfixe i18n. */
export function isHubStaticPath(url?: string): boolean {
  if (!url) return false;
  return url.startsWith(`${HUB_BASE}/`);
}

export const HUB_REACT_PREFIX = '/hub';

/** Route React (/hub/boutiques) → page HTML embarquée avec chrome masqué. */
export function hubStaticPathToReactPath(hubPath: string): string {
  const raw = hubPath.startsWith('/') ? hubPath : `/${hubPath}`;
  if (!isHubStaticPath(raw)) return raw;
  const url = new URL(raw, 'https://universe.skoleom.com');
  const file = url.pathname.slice(`${HUB_BASE}/`.length).replace(/\.html$/, '');
  return `${HUB_REACT_PREFIX}/${file}${url.search}${url.hash}`;
}

/** Routes hub React alignées sur les titres de colonnes du footer. */
export const FOOTER_MAIN_HUB_PATHS = {
  about: hubStaticPathToReactPath(`${HUB_BASE}/a-propos-de-skoleom.html`),
  stores: hubStaticPathToReactPath(`${HUB_BASE}/boutiques.html`),
  everyone: hubStaticPathToReactPath(`${HUB_BASE}/pour-tous.html`),
  pros: hubStaticPathToReactPath(`${HUB_BASE}/pour-les-pros.html`),
  group: hubStaticPathToReactPath(`${HUB_BASE}/groupe.html`),
  /** Page dédiée à venir — pas encore le hub embed actualites.html */
  news: '/en-construction/actualites',
} as const;

export function reactHubPathToEmbedSrc(
  pathname: string,
  search: string,
  hash: string,
): string | null {
  const normalized = stripLanguagePrefix(pathname);
  // Capture le slug complet, y compris les sous-dossiers (ex. pour-les-pros/creer-boutique).
  const match = normalized.match(/^\/hub\/(.+?)(?:[?#]|$)/);
  if (!match) return null;
  const params = new URLSearchParams(search);
  params.set('embed', '1');
  const qs = params.toString();
  return `${HUB_BASE}/${match[1]}.html?${qs}${hash}`;
}
