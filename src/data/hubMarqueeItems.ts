/**
 * Jeux d'items pour le carrousel boutiques (style « accueil »,
 * BoutiqueMarqueeCarousel) sur les pages hub Pour tous / Pour les Pros / Groupe.
 * Même structure & style que l'accueil, mais avec les VRAIES images de boutiques
 * (couvertures `BOUTIQUE_IMAGES`) en fond et les logos dédiés de chaque page.
 */
import {
  boutiqueCarouselLogoExtras,
  CAROUSEL_LOGO_TIGHT_IMG,
  CAROUSEL_LOGO_TIGHT_SLOT,
  CAROUSEL_LOGO_TIGHT_SLOT_INVEST,
  CAROUSEL_LOGO_TIGHT_SLOT_LARGE,
  type BoutiqueCarouselItem,
} from '../constants/carrouselBoutique';
import { LOGOS } from '../constants/logos';
import { BOUTIQUE_IMAGES } from './ecosystemBoutiques';
import { SK_SHOP_COVERS, SK_STORES } from '../components/hub-native/skLogos';

const UNDER_CONSTRUCTION = '/en-construction';

type Def = Omit<BoutiqueCarouselItem, 'carouselKey'>;

const withKeys = (defs: readonly Def[]): BoutiqueCarouselItem[] =>
  defs.map((d, i) => ({ ...d, carouselKey: `${d.id}-${i}` }));

/** Pour tous — boutiques grand public (image couverture + logo dédié). */
export const TOUS_CAROUSEL_ITEMS: BoutiqueCarouselItem[] = withKeys([
  {
    id: 'tous-page',
    label: 'Skoleom Page',
    keywords: ['page'],
    href: 'https://page.skoleom.com/',
    external: true,
    bgSrc: BOUTIQUE_IMAGES['tous-page'],
    logoSrc: LOGOS.skoleomPage,
    logoImgClassName: 'origin-top-left',
  },
  {
    id: 'tous-sesync',
    label: 'SeSync',
    keywords: ['sesync'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['tous-sesync'],
    logoSrc: LOGOS.sesync,
    logoImgClassName: 'origin-top-left',
  },
  {
    id: 'tous-skoletoons',
    label: "SkoleToon's",
    keywords: ['skoletoons'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['tous-skoletoons'],
    logoSrc: LOGOS.skoletoons,
    logoImgClassName: 'origin-top-left',
  },
  {
    id: 'tous-25x',
    label: 'The25x',
    keywords: ['25x'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['tous-25x'],
    logoSrc: LOGOS.the25x,
    logoImgClassName: 'origin-top-left scale-[1.35]',
  },
  {
    id: 'tous-shop',
    label: 'Skoleom Shop',
    keywords: ['shop'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['tous-shop'],
    logoSrc: LOGOS.skoleomShop,
    logoImgClassName: 'origin-top-left scale-[1.55]',
  },
  {
    id: 'tous-magazine',
    label: 'Skoleom Magazine',
    keywords: ['magazine'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['tous-magazine'],
    logoSrc: LOGOS.magazineLight,
    logoImgClassName: 'origin-top-left scale-[1.12]',
  },
]);

/** Pour les pros — solutions B2B (image couverture ; pas de logo dédié → nom affiché). */
export const PROS_CAROUSEL_ITEMS: BoutiqueCarouselItem[] = withKeys([
  {
    id: 'pro-monetizer',
    label: 'Monetizer Studio',
    keywords: ['monetizer'],
    href: 'https://www.monetizerstudio.com/',
    external: true,
    bgSrc: BOUTIQUE_IMAGES['pro-monetizer'],
  },
  {
    id: 'pro-pay',
    label: 'Skoleom Pay',
    keywords: ['pay'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['pro-pay'],
  },
  {
    id: 'pro-ads',
    label: 'Skoleom Ads',
    keywords: ['ads'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['pro-ads'],
  },
  {
    id: 'pro-realestate',
    label: 'Skoleom Real Estate',
    keywords: ['real estate'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['pro-realestate'],
  },
  {
    id: 'pro-plus',
    label: 'Skoleom Pro+',
    keywords: ['pro+'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['pro-plus'],
  },
  {
    id: 'pro-sve-api',
    label: 'SVE API',
    keywords: ['api'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['pro-sve-api'],
  },
  {
    id: 'pro-ott',
    label: 'OTT Integration',
    keywords: ['ott'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['pro-ott'],
  },
  {
    id: 'pro-cloud',
    label: 'Skoleom Cloud',
    keywords: ['cloud'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['pro-cloud'],
  },
]);

/** Groupe — entités du groupe (image couverture + logo dédié). */
export const GROUPE_CAROUSEL_ITEMS: BoutiqueCarouselItem[] = withKeys([
  {
    id: 'grp-nexus',
    label: 'Skoleom Nexus Park',
    keywords: ['nexus', 'park'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['skoleom-governance'],
    logoSrc: '/logo/Skoleom%20Nexus%20Park%20Black.png',
    logoSlotClassName: CAROUSEL_LOGO_TIGHT_SLOT_LARGE,
    logoImgClassName: CAROUSEL_LOGO_TIGHT_IMG.nexus,
  },
  {
    id: 'grp-rights',
    label: 'Skoleom Rights Management',
    keywords: ['rights', 'management'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['skoleom-rights-management'],
    logoSrc: '/logo/LOGO_right_management.png',
    logoSlotClassName: CAROUSEL_LOGO_TIGHT_SLOT,
    logoImgClassName: CAROUSEL_LOGO_TIGHT_IMG.rights,
  },
  {
    id: 'grp-invest',
    label: 'Skoleom Invest',
    keywords: ['invest'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['skoleom-invest'],
    logoSrc: '/logo/SkoleomInvest.webp',
    logoSlotClassName: CAROUSEL_LOGO_TIGHT_SLOT_INVEST,
    logoImgClassName: 'origin-top-left',
  },
  {
    id: 'grp-platform',
    label: 'Skoleom Platform',
    keywords: ['platform'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['skoleom-business'],
    logoSrc: '/logo/Skoleom%20Platform%20Dark.png',
    logoSlotClassName: CAROUSEL_LOGO_TIGHT_SLOT_LARGE,
    logoImgClassName: CAROUSEL_LOGO_TIGHT_IMG.platform,
  },
  {
    id: 'grp-retailers',
    label: 'Skoleom Retailers',
    keywords: ['retailers'],
    href: UNDER_CONSTRUCTION,
    bgSrc: BOUTIQUE_IMAGES['skoleom-retailers'],
    logoSrc: '/logo/Skoleom%20Retailers%20Light.png',
    logoImgClassName: 'origin-top-left',
  },
  {
    id: 'grp-studio',
    label: 'Skoleom Studio',
    keywords: ['studio'],
    href: 'https://skoleomstudio.com/',
    external: true,
    bgSrc: BOUTIQUE_IMAGES['skoleom-studios'],
    logoSrc: '/logo/Skoleom%20Studio%20White%20Turq.webp',
    logoImgClassName: 'origin-top-left',
  },
]);

/** Boutiques audiovisuelles — mêmes images & logos que la vue « blocs » (grille). */
const AV_DEFS: readonly [string, string, string, boolean?][] = [
  ['sesports', 'Skoleom SeSports', 'https://sesports.skoleom.com/', true],
  ['cares', 'Skoleom Cares', '/store/cares'],
  ['games', 'Skoleom Games', '/store/games'],
  ['invest', 'Skoleom Invest', '/store/invest'],
  ['services', 'Skoleom Services', '/store/services'],
  ['fnb', 'Skoleom Food & Beverage', '/stores'],
  ['travel', 'Skoleom Travel', '/store/travel'],
  ['music', 'Skoleom Music', '/store/music'],
  ['watch', 'Watch on Skoleom', '/store/watch'],
  ['realestate', 'Skoleom Real Estate', '/store/real-estate'],
  ['publishing', 'Skoleom Publishing', '/store/publishing'],
];
export const BOUTIQUES_CAROUSEL_ITEMS: BoutiqueCarouselItem[] = withKeys(
  AV_DEFS.map(([id, label, href, external]) => ({
    id,
    label,
    keywords: [id],
    href,
    ...(external ? { external: true as const } : {}),
    bgSrc: SK_SHOP_COVERS[id],
    logoSrc: SK_STORES[id],
    ...boutiqueCarouselLogoExtras(id),
  })),
);
