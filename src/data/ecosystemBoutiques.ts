/**
 * Cartographie des boutiques / offres Skoleom (UI page Groupe).
 * Les visuels ne sont branchés que sur la section « Groupe » (public/shop).
 */

export interface BoutiqueItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon?: string;
  color: string;
  mission?: string;
}

export interface BoutiqueCluster {
  title: string;
  subtitle: string;
  items: BoutiqueItem[];
}

export interface BoutiqueFlatSection {
  id: string;
  title: string;
  subtitle: string;
  layout: 'flat';
  items: BoutiqueItem[];
}

export interface BoutiqueGroupSection {
  id: string;
  title: string;
  subtitle: string;
  layout: 'groupe';
  clusters: BoutiqueCluster[];
}

export type BoutiqueSection = BoutiqueFlatSection | BoutiqueGroupSection;

/** Préfixes assets boutiques (`public/shop/`). */
const SHOP = '/shop';
const SHOP_BOUTIQUES = `${SHOP}/boutiques`;
const SHOP_GROUPE = `${SHOP}/groupe`;
const SHOP_POUR_TOUS = `${SHOP}/pour%20tous`;

/**
 * Mapping id boutique → visuel dans `public/shop/` (boutiques, groupe, pour tous).
 */
export const BOUTIQUE_IMAGES: Readonly<Record<string, string>> = {
  // — Groupe (Skoleom Group cluster) —
  'secontent-agency': `${SHOP}/studio.webp`,
  'skoleom-factory': `${SHOP}/business.webp`,
  'skoleom-lab': `${SHOP}/lab.webp`,
  'skoleom-business': `${SHOP}/business.webp`,
  'skoleom-invest': `${SHOP_BOUTIQUES}/invest.webp`,
  'skoleom-rights-management': `${SHOP}/right%20management.webp`,
  'skoleom-retailers': `${SHOP_BOUTIQUES}/foodAndbeverage.webp`,
  'skoleom-events': `${SHOP_GROUPE}/event.webp`,
  'monetizer-studio-the-awards': `${SHOP_POUR_TOUS}/magazine.webp`,
  'skoleom-studios': `${SHOP}/studio.webp`,
  'skoleom-academy': `${SHOP}/school.webp`,
  'skoleom-governance': `${SHOP_GROUPE}/nexusPark.webp`,

  // — Boutiques audiovisuelles —
  'av-sesports': `${SHOP_BOUTIQUES}/SeSports.webp`,
  'av-cares': `${SHOP_BOUTIQUES}/cares.webp`,
  'av-games': `${SHOP_BOUTIQUES}/games.webp`,
  'av-invest': `${SHOP_BOUTIQUES}/invest.webp`,
  'av-services': `${SHOP_BOUTIQUES}/services.webp`,
  'av-fnb': `${SHOP_BOUTIQUES}/foodAndbeverage.webp`,
  'av-travel': `${SHOP_BOUTIQUES}/travel.webp`,
  'av-music': `${SHOP_BOUTIQUES}/Music.webp`,
  'av-watch': `${SHOP_BOUTIQUES}/watchon.webp`,
  'av-realestate': `${SHOP_BOUTIQUES}/realestate.webp`,
  'av-publishing': `${SHOP_BOUTIQUES}/publishing.webp`,

  // — Pour Tous —
  'tous-page': `${SHOP_POUR_TOUS}/page.webp`,
  'tous-sesync': `${SHOP_POUR_TOUS}/sesync.webp`,
  'tous-skoletoons': `${SHOP_POUR_TOUS}/skoletoons.webp`,
  'tous-25x': `${SHOP_POUR_TOUS}/the25x.webp`,
  'tous-shop': `${SHOP_POUR_TOUS}/shop.webp`,
  'tous-secontent': `${SHOP}/studio.webp`,
  'tous-magazine': `${SHOP_POUR_TOUS}/magazine.webp`,

  // — Pour les Pros —
  'pro-monetizer': `${SHOP_BOUTIQUES}/realestate.webp`,
  'pro-pay': `${SHOP_BOUTIQUES}/invest.webp`,
  'pro-ads': `${SHOP_POUR_TOUS}/magazine.webp`,
  'pro-realestate': `${SHOP_BOUTIQUES}/realestate.webp`,
  'pro-plus': `${SHOP}/right%20management.webp`,
  'pro-sve-api': `${SHOP}/lab.webp`,
  'pro-ott': `${SHOP}/studio.webp`,
  'pro-cloud': `${SHOP}/lab.webp`,
};

/** Alias rétro-compatible — préférer `BOUTIQUE_IMAGES` dans tout nouveau code. */
export const GROUP_SHOP_IMAGE = BOUTIQUE_IMAGES;

/**
 * Sociétés du carrousel Groupe (ordre footer.json — colonne « Groupe »).
 * Aligné sur les sous-liens : Skoleom Group, Platform Inc., Nexus Park.
 */
export const GROUPE_CAROUSEL_ITEM_IDS: readonly string[] = [
  'secontent-agency',
  'skoleom-factory',
  'skoleom-lab',
  'skoleom-business',
  'skoleom-invest',
  'skoleom-rights-management',
  'skoleom-retailers',
  'skoleom-events',
  'monetizer-studio-the-awards',
  'skoleom-studios',
];

/** Données structurées des boutiques affichées sur la page Écosystème. */
export const BOUTIQUE_SECTIONS: readonly BoutiqueSection[] = [
  {
    id: 'boutiques-av-officielles',
    title: 'Boutiques audiovisuelles',
    subtitle: 'Emplacements réservés — visuels à venir.',
    layout: 'flat',
    items: [
      {
        id: 'av-sesports',
        name: 'Skoleom SeSports',
        tagline: 'Boutique officielle',
        description: 'Univers sport & retail média.',
        icon: '🏟️',
        color: '#00B894',
      },
      {
        id: 'av-cares',
        name: 'Skoleom Cares',
        tagline: 'Boutique officielle',
        description: 'Impact social & programmes dédiés.',
        icon: '💚',
        color: '#10B981',
      },
      {
        id: 'av-games',
        name: 'Skoleom Games',
        tagline: 'Boutique officielle',
        description: 'Jeux, IP & monétisation in-game.',
        icon: '🎮',
        color: '#A855F7',
      },
      {
        id: 'av-invest',
        name: 'Skoleom Invest',
        tagline: 'Boutique officielle',
        description: 'Levées, véhicules & structuration.',
        icon: '💼',
        color: '#FF8A00',
      },
      {
        id: 'av-services',
        name: 'Skoleom Services',
        tagline: 'Boutique officielle',
        description: 'Services & accompagnement groupe.',
        icon: '🛠️',
        color: '#0033FF',
      },
      {
        id: 'av-fnb',
        name: 'Skoleom Food & Beverage',
        tagline: 'Boutique officielle',
        description: 'F&B, marques & expériences.',
        icon: '🍽️',
        color: '#F59E0B',
      },
      {
        id: 'av-travel',
        name: 'Skoleom Travel',
        tagline: 'Boutique officielle',
        description: 'Mobilité, hospitality & contenus.',
        icon: '✈️',
        color: '#0891B2',
      },
      {
        id: 'av-music',
        name: 'Skoleom Music',
        tagline: 'Boutique officielle',
        description: 'Label, artistes & produits dérivés.',
        icon: '🎵',
        color: '#EC4899',
      },
      {
        id: 'av-watch',
        name: 'Watch on Skoleom',
        tagline: 'Boutique officielle',
        description: 'OTT, chaînes & expérience box.',
        icon: '📺',
        color: '#EF4444',
      },
      {
        id: 'av-realestate',
        name: 'Skoleom Real Estate',
        tagline: 'Boutique officielle',
        description: 'Promotions, lieux & retail centers.',
        icon: '🏙️',
        color: '#0891B2',
      },
      {
        id: 'av-publishing',
        name: 'Skoleom Publishing',
        tagline: 'Boutique officielle',
        description: 'Édition transmédia & catalogues.',
        icon: '📚',
        color: '#6366F1',
      },
    ],
  },
  {
    id: 'boutiques-pour-tous',
    title: 'Pour tous',
    subtitle: 'Emplacements réservés — visuels à venir.',
    layout: 'flat',
    items: [
      {
        id: 'tous-page',
        name: 'Skoleom Page',
        tagline: 'Grand public',
        description: 'Point d’entrée & découverte Skoleom.',
        icon: '📄',
        color: '#8B5CF6',
      },
      {
        id: 'tous-sesync',
        name: 'SeSync',
        tagline: 'Grand public',
        description: 'Achat in-page & distribution.',
        icon: '🔥',
        color: '#FF6B35',
      },
      {
        id: 'tous-skoletoons',
        name: "SkoleToon's",
        tagline: 'Grand public',
        description: 'Univers personnages & merchandising.',
        icon: '🎨',
        color: '#F43F5E',
      },
      {
        id: 'tous-25x',
        name: 'The25x',
        tagline: 'Grand public',
        description: 'Gamme distributeur & expérience.',
        icon: '2️⃣',
        color: '#84CC16',
      },
      {
        id: 'tous-shop',
        name: 'Skoleom Shop',
        tagline: 'Grand public',
        description: 'Marketplace produits & dérivés.',
        icon: '🛍️',
        color: '#F43F5E',
      },
      {
        id: 'tous-secontent',
        name: 'SeContent Creation',
        tagline: 'Grand public',
        description: 'Création de capsules & formats.',
        icon: '✨',
        color: '#8B5CF6',
      },
      {
        id: 'tous-magazine',
        name: 'Skoleom Magazine',
        tagline: 'Grand public',
        description: 'Média, actu & formats interactifs.',
        icon: '📰',
        color: '#3B82F6',
      },
    ],
  },
  {
    id: 'boutiques-pour-les-pros',
    title: 'Pour les pros',
    subtitle: 'Emplacements réservés — visuels à venir.',
    layout: 'flat',
    items: [
      {
        id: 'pro-monetizer',
        name: 'Monetizer Studio',
        tagline: 'B2B',
        description: 'ERP/DCM & monétisation contenus.',
        icon: '☁️',
        color: '#0033FF',
      },
      {
        id: 'pro-pay',
        name: 'Skoleom Pay',
        tagline: 'B2B',
        description: 'Paiement intégré & wallets.',
        icon: '💳',
        color: '#10B981',
      },
      {
        id: 'pro-ads',
        name: 'Skoleom Ads',
        tagline: 'B2B',
        description: 'Publicité interactive in-content.',
        icon: '📢',
        color: '#F59E0B',
      },
      {
        id: 'pro-realestate',
        name: 'Skoleom Real Estate',
        tagline: 'B2B',
        description: 'Offres pro immobilier & lieux.',
        icon: '🏙️',
        color: '#0891B2',
      },
      {
        id: 'pro-plus',
        name: 'Skoleom Pro+',
        tagline: 'B2B',
        description: 'Analytics avancées & reporting.',
        icon: '📈',
        color: '#84CC16',
      },
      {
        id: 'pro-sve-api',
        name: 'SVE API',
        tagline: 'B2B',
        description: 'API & intégrations écosystème.',
        icon: '🔌',
        color: '#14B8A6',
      },
      {
        id: 'pro-ott',
        name: 'OTT Skoleom Technology Integration',
        tagline: 'B2B',
        description: 'Intégration OTT & connecteurs.',
        icon: '📡',
        color: '#0EA5E9',
      },
      {
        id: 'pro-cloud',
        name: 'Skoleom Cloud',
        tagline: 'B2B',
        description: 'Infrastructure & services cloud.',
        icon: '☁️',
        color: '#0EA5E9',
      },
    ],
  },
  {
    id: 'boutiques-groupe',
    title: 'Groupe',
    subtitle: 'Organisation des filiales & pôles — visuels actifs sur cette section.',
    layout: 'groupe',
    clusters: [
      {
        title: 'Skoleom Group',
        subtitle: 'Sociétés satellites & fonctions centrales du groupe.',
        items: [
          {
            id: 'secontent-agency',
            name: 'SeContent Agency',
            tagline: 'Satellite',
            description: 'Agence transmédiatique & production créative.',
            mission: 'Donner vie à chaque produit via des contenus monétisables.',
            icon: '🎬',
            color: '#FF3366',
          },
          {
            id: 'skoleom-factory',
            name: 'Skoleom Factory',
            tagline: 'Satellite',
            description: 'Planification centrale & orchestration des campagnes.',
            mission: 'Exécuter la feuille de route transmédiatique.',
            icon: '🏭',
            color: '#FFD600',
          },
          {
            id: 'skoleom-lab',
            name: 'Skoleom Lab',
            tagline: 'Satellite',
            description: 'R&D, IA souveraine, blockchain & retail immersif.',
            mission: 'Innover et anticiper les technologies du retail media.',
            icon: '🔬',
            color: '#00D8B0',
          },
          {
            id: 'skoleom-business',
            name: 'Skoleom Business',
            tagline: 'Satellite',
            description: 'Force de vente, partenaires & CRM groupe.',
            mission: 'Piloter les ventes mondiales du groupe.',
            icon: '📊',
            color: '#0033FF',
          },
          {
            id: 'skoleom-invest',
            name: 'Skoleom Invest',
            tagline: 'Satellite',
            description: 'Levées, acquisitions & relations investisseurs.',
            mission: 'Financer et valoriser les projets stratégiques.',
            icon: '💼',
            color: '#FF8A00',
          },
          {
            id: 'skoleom-rights-management',
            name: 'Skoleom Rights Management',
            tagline: 'Satellite',
            description: 'PI, licences, conformité & protection des actifs.',
            mission: 'Protéger et structurer les droits du groupe.',
            icon: '⚖️',
            color: '#7B5CFF',
          },
        ],
      },
      {
        title: 'Skoleom Platform Inc.',
        subtitle: 'Retail Media & technologies de plateforme.',
        items: [
          {
            id: 'skoleom-retailers',
            name: 'Skoleom Retailers',
            tagline: 'Import-export',
            description: 'Gammes distributeurs, marques maison & distribution.',
            icon: '🛒',
            color: '#00B894',
          },
        ],
      },
      {
        title: 'Skoleom Nexus Park',
        subtitle: 'Transmédia, lieux & expériences physiques.',
        items: [
          {
            id: 'skoleom-events',
            name: 'Skoleom Events',
            tagline: 'Nexus Park',
            description: 'Événements internationaux, e-sport & conventions.',
            icon: '🎪',
            color: '#7C3AED',
          },
          {
            id: 'monetizer-studio-the-awards',
            name: 'Monetizer Studio × The Awards',
            tagline: 'Nexus Park',
            description: 'Cérémonies, formats live & monétisation awards.',
            icon: '🏆',
            color: '#F59E0B',
          },
          {
            id: 'skoleom-studios',
            name: 'Skoleom Studios',
            tagline: 'Nexus Park',
            description: 'Studios production, XR, tournages & capsules.',
            icon: '🎥',
            color: '#DC2626',
          },
          {
            id: 'skoleom-academy',
            name: 'Skoleom Academy',
            tagline: 'Nexus Park',
            description: 'Formation supérieure & campus du futur.',
            icon: '🎓',
            color: '#059669',
          },
          {
            id: 'skoleom-governance',
            name: 'Skoleom Governance',
            tagline: 'Nexus Park',
            description: 'Gouvernance, ESG & cadre de pilotage groupe.',
            icon: '🏛️',
            color: '#2563EB',
          },
        ],
      },
    ],
  },
];
