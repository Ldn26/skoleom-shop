import { LOGO_DIR, LOGOS } from './logos';
import { resolveBoutiqueStoreHref } from './boutiqueStoreLinks';

/** Fonds du carrousel boutiques home (`public/carrousel-boutique/`). */
export const CARROUSEL_BOUTIQUE_DIR = '/carrousel-boutique';

const BOUTIQUE_LOGO_DIR = '/logo/boutique';

export const BOUTIQUE_CAROUSEL_BACKGROUNDS: readonly string[] = [
  `${CARROUSEL_BOUTIQUE_DIR}/jaune.webp`,
  `${CARROUSEL_BOUTIQUE_DIR}/vert.webp`,
  `${CARROUSEL_BOUTIQUE_DIR}/bleu.webp`,
  `${CARROUSEL_BOUTIQUE_DIR}/beige.webp`,
  `${CARROUSEL_BOUTIQUE_DIR}/givre.webp`,
  `${CARROUSEL_BOUTIQUE_DIR}/orange.webp`,
  `${CARROUSEL_BOUTIQUE_DIR}/rose.webp`,
  `${CARROUSEL_BOUTIQUE_DIR}/rouge.webp`,
  `${CARROUSEL_BOUTIQUE_DIR}/vert-fonce.webp`,
];

export interface BoutiqueCarouselItem {
  id: string;
  label: string;
  keywords: string[];
  href: string;
  external?: boolean; // ← AJOUTÉ
  bgSrc: string;
  /** Logo de marque. Absent → le nom de la boutique est affiché à la place. */
  logoSrc?: string;
  /** Classes du conteneur logo (position + cadre fixe en haut de carte). */
  logoSlotClassName?: string;
  /** Classes de l’image à l’intérieur du cadre (ex. scale pour Invest). */
  logoImgClassName?: string;
  carouselKey: string;
}

/**
 * Logos carrousel home — uniquement les fichiers explicites dans `public/logo/boutique/`.
 * Les autres cartes conservent le logo SeSports.
 */
export const BOUTIQUE_CAROUSEL_BRAND_LOGOS: Readonly<Partial<Record<string, string>>> = {
  cares: `${BOUTIQUE_LOGO_DIR}/Skoleom%20Cares%20Blue.webp`,
  games: `${BOUTIQUE_LOGO_DIR}/Skoleom%20Game%20Orange.svg`,
  invest: `${LOGO_DIR}/SkoleomInvest.webp`,
  travel: `${BOUTIQUE_LOGO_DIR}/Skoleom%20Travel%20Red.webp`,
  music: `${BOUTIQUE_LOGO_DIR}/Skoleom%20Music%20Blue.webp`,
  'real-estate': `${LOGO_DIR}/Skoleom%20Real%20Estate.webp`,
  services: `${BOUTIQUE_LOGO_DIR}/Skoleom%20Services%20Text.webp`,
  'food-beverage': `${BOUTIQUE_LOGO_DIR}/Skoleom%20Food%20Beverage%20Orange.webp`,
};

/** Cadre logo commun — hauteur fixe pour aligner tous les logos sur la même ligne. */
export const BOUTIQUE_CAROUSEL_LOGO_SLOT_CLASS =
  'h-[4rem] w-[min(78%,220px)] sm:h-[4.25rem] sm:w-[min(72%,200px)] md:h-[5rem]';

/** Cadres logo plus grands (fichiers sources plus petits visuellement). */
const BOUTIQUE_CAROUSEL_LOGO_SLOT_CLASSES: Readonly<Partial<Record<string, string>>> = {
  invest: 'h-[3rem] w-[min(70%,190px)] sm:h-[3.25rem] sm:w-[min(66%,180px)] md:h-[3.5rem]',
  services: 'h-[6.75rem] w-[min(78%,230px)] sm:h-[7.25rem]',
  'food-beverage': 'h-[4.5rem] w-[min(62%,170px)] sm:h-[5rem]',
  'real-estate': 'h-[6.5rem] w-[min(88%,270px)] sm:h-[7.5rem] sm:w-[min(86%,260px)] md:h-[8.25rem]',
};

/** Cadre logo collé au coin haut-gauche (logos avec marge transparente dans le fichier). */
export const CAROUSEL_LOGO_TIGHT_SLOT = '!left-0 !top-0 sm:!left-0 sm:!top-0 md:!left-0 md:!top-0';

export const CAROUSEL_LOGO_TIGHT_SLOT_LARGE = `${CAROUSEL_LOGO_TIGHT_SLOT} !h-[6rem] !w-[min(92%,340px)] sm:!h-[7rem] sm:!w-[min(88%,360px)] md:!h-[8rem] md:!w-[min(86%,380px)]`;

/** Cadre Invest réduit, ancré coin haut-gauche. */
export const CAROUSEL_LOGO_TIGHT_SLOT_INVEST = `${CAROUSEL_LOGO_TIGHT_SLOT} !h-[3rem] !w-[min(70%,190px)] sm:!h-[3.25rem] sm:!w-[min(66%,180px)] md:!h-[3.5rem]`;

/** Ajustements visuels — scale + translate pour coller le glyphe au coin. */
export const CAROUSEL_LOGO_TIGHT_IMG = {
  platform:
    'origin-top-left scale-[1.85] sm:scale-[1.92] md:scale-[2] -translate-x-[20%] -translate-y-[26%]',
  nexus:
    'origin-top-left scale-[1.9] sm:scale-[1.98] md:scale-[2.05] -translate-x-[30%] -translate-y-[36%]',
  rights: 'origin-top-left scale-[1.18] -translate-x-[6%] -translate-y-[18%]',
} as const;

/** Ajustement visuel dans le cadre (ancré en haut à gauche). */
const BOUTIQUE_CAROUSEL_LOGO_IMG_CLASSES: Readonly<Partial<Record<string, string>>> = {
  'real-estate': 'origin-top-left scale-[1.12] sm:scale-[1.18] md:scale-[1.22]',
};

/** Classes logo pour une boutique du carrousel (ids fnb / realestate inclus). */
export function boutiqueCarouselLogoExtras(
  boutiqueId: string,
): Pick<BoutiqueCarouselItem, 'logoSlotClassName' | 'logoImgClassName'> {
  const key =
    boutiqueId === 'fnb'
      ? 'food-beverage'
      : boutiqueId === 'realestate'
        ? 'real-estate'
        : boutiqueId;
  return {
    logoSlotClassName: BOUTIQUE_CAROUSEL_LOGO_SLOT_CLASSES[key],
    logoImgClassName: BOUTIQUE_CAROUSEL_LOGO_IMG_CLASSES[key],
  };
}

/** Boutiques affichées dans le carrousel (ordre footer AV, sans Publishing). */
const CAROUSEL_BOUTIQUE_DEFS: readonly Omit<
  BoutiqueCarouselItem,
  'bgSrc' | 'logoSrc' | 'carouselKey'
>[] = [
  'cares',
  'sesports',
  'games',
  'invest',
  'services',
  'food-beverage',
  'travel',
  'music',
  'real-estate',
].map((id) => {
  const labels: Record<string, { label: string; keywords: string[] }> = {
    cares: { label: 'Skoleom Cares', keywords: ['cares', 'impact', 'social'] },
    sesports: { label: 'Skoleom SeSports', keywords: ['sport', 'sesports', 'sesport'] },
    games: { label: 'Skoleom Games', keywords: ['games', 'jeux', 'gaming'] },
    invest: { label: 'Skoleom Invest', keywords: ['invest', 'investissement', 'finance'] },
    services: { label: 'Skoleom Services', keywords: ['services', 'accompagnement'] },
    'food-beverage': {
      label: 'Skoleom Food & Beverage',
      keywords: ['food', 'beverage', 'fnb', 'restaurant'],
    },
    travel: { label: 'Skoleom Travel', keywords: ['travel', 'voyage', 'mobilité'] },
    music: { label: 'Skoleom Music', keywords: ['music', 'musique', 'label'] },
    'real-estate': {
      label: 'Skoleom Real Estate',
      keywords: ['real estate', 'immobilier', 'property'],
    },
  };
  const meta = labels[id];
  const link = resolveBoutiqueStoreHref(id);
  return {
    id,
    label: meta.label,
    keywords: meta.keywords,
    href: link.href,
    ...(link.external ? { external: true as const } : {}),
  };
});

/** Cartes carrousel : 1 fond coloré + 1 boutique + logo dédié ou SeSports par défaut. */
export const BOUTIQUE_CAROUSEL_ITEMS: readonly BoutiqueCarouselItem[] =
  BOUTIQUE_CAROUSEL_BACKGROUNDS.map((bgSrc, index) => {
    const boutique = CAROUSEL_BOUTIQUE_DEFS[index];
    return {
      ...boutique,
      bgSrc,
      logoSrc: BOUTIQUE_CAROUSEL_BRAND_LOGOS[boutique.id] ?? LOGOS.sesports,
      logoSlotClassName: BOUTIQUE_CAROUSEL_LOGO_SLOT_CLASSES[boutique.id],
      logoImgClassName: BOUTIQUE_CAROUSEL_LOGO_IMG_CLASSES[boutique.id],
      carouselKey: `${boutique.id}-${index}`,
    };
  });

/** Items pour la recherche typeahead du carrousel home. */
export const BOUTIQUE_CAROUSEL_SEARCH_ITEMS = BOUTIQUE_CAROUSEL_ITEMS.map(
  ({ id, label, keywords, href, external }) => ({ id, label, keywords, href, external }),
);
