/**
 * Chemins des logos statiques (dossier public/logo).
 */

export const LOGO_DIR = '/logo';

export const LOGOS = {
  skoleom: `${LOGO_DIR}/logo-skoleom.webp`,
  skoleomBrand: `${LOGO_DIR}/logo-skoleom-brand.webp`,
  watchTouchBuy: `${LOGO_DIR}/logo-watch-touch-buy.webp`,
  /** Watch on Skoleom — variante claire pour fonds sombres (404, carrousel). */
  watchOnSkoleomWhite: `${LOGO_DIR}/boutique/Watch%20on%20Skoleom%20White.webp`,
  skoleomStudioWhiteTurq: `${LOGO_DIR}/Skoleom%20Studio%20White%20Turq.webp`,
  skoleomStudioLogoTurq: `${LOGO_DIR}/Skoleom%20Studio%20Logo%20Turq.webp`,
  audiovisualStore: `${LOGO_DIR}/logo-audiovisual-store.webp`,
  sesync: `${LOGO_DIR}/sesync.webp`,
  sesports: `${LOGO_DIR}/sesports.webp`,
  magazineLight: `${LOGO_DIR}/Skoleom%20Magazine%20Light.webp`,
  magazineBlack: `${LOGO_DIR}/skoleom-magazine-black.webp`,
  skoleomPage: `${LOGO_DIR}/skoleom-page-logo.webp`,
  skoleomPageBlack: `${LOGO_DIR}/skoleom-page-logo.webp`,
  skoletoons: `${LOGO_DIR}/skoletoons.webp`,
  the25x: `${LOGO_DIR}/the25x.webp`,
  skoleomShop: `${LOGO_DIR}/Skoleom%20Shop.webp`,
  skoleomPulse: `${LOGO_DIR}/skoleom-pulse.webp`,
  skoleomInvest: `${LOGO_DIR}/SkoleomInvest.webp`,
  /** Logo Invest du carrousel / déroulant home (`public/logo/boutique/`). */
  skoleomInvestBoutique: `${LOGO_DIR}/boutique/Skoleom%20Invest.webp`,
  skoleomWatch: `${LOGO_DIR}/logo-watch-touch-buy.webp`,
  services: `${LOGO_DIR}/boutique/Skoleom%20Services%20Text.webp`,
  foodBeverage: `${LOGO_DIR}/boutique/Skoleom%20Food%20Beverage%20Orange.webp`,
} as const;

export const PLATFORM_BRAND_LOGOS = {
  netflix: `${LOGO_DIR}/platforms/netflix.webp`,
  appleTv: `${LOGO_DIR}/platforms/apple-tv.webp`,
  disneyPlus: `${LOGO_DIR}/platforms/disney-plus.webp`,
} as const;

/**
 * Logos de marque par id boutique — uniquement lorsque le fichier correspond
 * explicitement au nom de la boutique (pas de mapping approximatif).
 */
export const BOUTIQUE_BRAND_LOGOS: Readonly<Partial<Record<string, string>>> = {
  'av-sesports': LOGOS.sesports,
  'av-invest': `${LOGO_DIR}/SkoleomInvest.webp`,
  'av-travel': `${LOGO_DIR}/skoleom-travel.webp`,
  'av-music': `${LOGO_DIR}/skoleom-music-dark.webp`,
  'av-realestate': `${LOGO_DIR}/SkoleomRealEstate.webp`,
  'av-services': LOGOS.services,
  'av-fnb': LOGOS.foodBeverage,
  'tous-page': LOGOS.skoleomPage,
  'tous-sesync': LOGOS.sesync,
  'tous-skoletoons': LOGOS.skoletoons,
  'tous-25x': LOGOS.the25x,
  'tous-shop': LOGOS.skoleomShop,
  'tous-magazine': LOGOS.magazineLight,
  'skoleom-business': `${LOGO_DIR}/skoleom-business.webp`,
  'skoleom-events': `${LOGO_DIR}/skoleom-events.webp`,
  'skoleom-invest': `${LOGO_DIR}/SkoleomInvest.webp`,
  'skoleom-retailers': `${LOGO_DIR}/skoleom-retailers-dark.webp`,
  'skoleom-studios': `${LOGO_DIR}/skoleom-studio.webp`,
};
