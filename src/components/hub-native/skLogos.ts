/**
 * Réplique React des maps/rendus de `shared/sk-logos.js`.
 * Mêmes chemins d'images, mêmes classes → rendu identique aux pages statiques.
 * Utilisé par les composants SkStoreName / SkShopCover / SkBrand.
 */
export const SK_BRAND: Record<string, string> = {
  universe: '/logo/logo-skoleom-brand.webp',
  business: '/logo/skoleom-business.webp',
  mark: '/logo/logo-skoleom.webp',
  audiovisual: '/logo/logo-audiovisual-store.webp',
  sesync: '/logo/sesync.webp',
  watchTouchBuy: '/logo/logo-watch-touch-buy.webp',
  the25x: '/logo/the25x.webp',
  shop: '/logo/Skoleom%20Shop.webp',
  magazine: '/logo/Skoleom%20Magazine%20Light.webp',
  invest: '/logo/LOGO%20SKOLEOM%20INVEST%20.png',
  studio: '/logo/skoleom-studio.webp',
  sky: '/logo/sky-avatar.png',
};

export const SK_STORES: Record<string, string> = {
  'sport-elite': '/logo/sesports.webp',
  sesports: '/logo/sesports.webp',
  cares: '/logo/boutique/Skoleom%20Cares%20Blue.webp',
  'music-wave': '/logo/boutique/Skoleom%20Music%20Blue.webp',
  music: '/logo/boutique/Skoleom%20Music%20Blue.webp',
  'fashion-av': '/logo/Skoleom%20Shop.webp',
  gaming: '/logo/boutique/Skoleom%20Game%20Orange.svg',
  games: '/logo/boutique/Skoleom%20Game%20Orange.svg',
  films: '/logo/boutique/Watch%20on%20Skoleom%20White.webp',
  watch: '/logo/boutique/Watch%20on%20Skoleom%20White.webp',
  tech: '/logo/sesync.webp',
  services: '/logo/boutique/Skoleom%20Services%20Text.webp',
  food: '/logo/boutique/Skoleom%20Food%20Beverage%20Orange.webp',
  fnb: '/logo/boutique/Skoleom%20Food%20Beverage%20Orange.webp',
  invest: '/logo/LOGO%20SKOLEOM%20INVEST%20.png',
  travel: '/logo/skoleom-travel.webp',
  realestate: '/logo/Skoleom%20Real%20Estate%20WhiteC.png',
  publishing: '/logo/Skoleom%20Magazine%20Light.webp',
};

export const SK_CATEGORIES: Record<string, string> = {
  sport: '/logo/sesports.webp',
  music: '/logo/boutique/Skoleom%20Music%20Blue.webp',
  mode: '/logo/Skoleom%20Shop.webp',
  films: '/logo/boutique/Watch%20on%20Skoleom%20White.webp',
  gaming: '/logo/boutique/Skoleom%20Game%20Orange.svg',
  tech: '/logo/sesync.webp',
  food: '/logo/boutique/Skoleom%20Food%20Beverage%20Orange.webp',
  health: '/logo/boutique/Skoleom%20Cares%20Blue.webp',
  travel: '/logo/skoleom-travel.webp',
  home: '/logo/SkoleomRealEstate.webp',
};

export const SK_SHOP_COVERS: Record<string, string> = {
  'sport-elite': '/shop/boutiques/SeSports.webp',
  sport: '/shop/boutiques/SeSports.webp',
  sesports: '/shop/boutiques/SeSports.webp',
  cares: '/shop/boutiques/cares.webp',
  'music-wave': '/shop/boutiques/Music.webp',
  music: '/shop/boutiques/Music.webp',
  'fashion-av': '/shop/pour%20tous/shop.webp',
  mode: '/shop/pour%20tous/shop.webp',
  gaming: '/shop/boutiques/games.webp',
  games: '/shop/boutiques/games.webp',
  films: '/shop/boutiques/watchon.webp',
  watch: '/shop/boutiques/watchon.webp',
  tech: '/shop/boutiques/services.webp',
  services: '/shop/boutiques/services.webp',
  food: '/shop/boutiques/foodAndbeverage.webp',
  fnb: '/shop/boutiques/foodAndbeverage.webp',
  invest: '/shop/boutiques/invest.webp',
  travel: '/shop/boutiques/travel.webp',
  realestate: '/shop/boutiques/realestate.webp',
  publishing: '/shop/boutiques/publishing.webp',
};

export const SK_UNDER_CONSTRUCTION = '/en-construction';
export const SK_REAL_URLS: Record<string, string> = {
  sesports: 'https://sesports.skoleom.com/',
  watch: 'https://watchon.skoleom.com/',
  publishing: 'https://page.skoleom.com/',
};

/** Identique à SkBoutiqueStoreLinks.resolve. */
export function resolveBoutique(
  id: string,
  fallbackHref?: string,
): { href: string; external: boolean } {
  const key = String(id || '').toLowerCase();
  const real = SK_REAL_URLS[key];
  if (real) return { href: real, external: true };
  if (fallbackHref && /^https?:\/\//i.test(fallbackHref))
    return { href: fallbackHref, external: true };
  return { href: SK_UNDER_CONSTRUCTION, external: false };
}
