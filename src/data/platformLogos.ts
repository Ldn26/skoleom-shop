/**
 * Chemins des logos de plateformes (SVG officiels).
 * Clés = logoKey normalisé (lettres a-z uniquement).
 *
 * IMDb, Google Images et Site officiel : SVG inline PlatformSvg.
 */

const P = '/logo/platforms';

/** logoKey normalisés : icônes marque inline (viewBox 256, fond de marque). */
export const PLATFORM_LOGO_USE_INLINE_BRANDED = new Set([
  'imdb',
  'googleimages',
  'globe',
  'officialsite',
]);

export const PLATFORM_LOGO_SRC: Readonly<Record<string, string>> = {
  youtube: `${P}/youtube.svg`,
  netflix: `${P}/netflix.svg`,
  facebook: `${P}/facebook.svg`,
  instagram: `${P}/instagram.svg`,
  tiktok: `${P}/tiktok.svg`,
  spotify: `${P}/spotify.svg`,
  applemusic: `${P}/apple-music.svg`,
  twitter: `${P}/x.svg`,
  x: `${P}/x.svg`,
  wikipedia: `${P}/wikipedia.svg`,
  soundcloud: `${P}/soundcloud.svg`,
  deezer: `${P}/deezer.svg`,
  amazon: `${P}/amazon.svg`,
  pinterest: `${P}/pinterest.svg`,
  twitch: `${P}/twitch.svg`,
  linkedin: `${P}/linkedin.svg`,
  threads: `${P}/threads.svg`,
  genius: `${P}/genius.svg`,
};

export function normalizePlatformLogoKey(platform: string): string {
  return platform.toLowerCase().replace(/[^a-z]/g, '');
}

export function getPlatformLogoSrc(platform: string): string | undefined {
  const key = normalizePlatformLogoKey(platform);
  if (PLATFORM_LOGO_USE_INLINE_BRANDED.has(key)) return undefined;
  return PLATFORM_LOGO_SRC[key];
}
