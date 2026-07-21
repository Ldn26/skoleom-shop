/**
 * Boutiques par catégorie (Pour tous / Pour les Pros / Groupe).
 * Sert aux carrousels (même front que l'accueil) des pages hub.
 * `img`  : visuel dans public/shop.
 * `desc` : synopsis court affiché au survol.
 * `href` : lien externe officiel quand il existe (sinon carte non cliquable).
 */
export interface CategoryBoutique {
  name: string;
  desc: string;
  img?: string;
  href?: string;
}

/** Placeholder affiché si aucune image n'est disponible. */
export const BOUTIQUE_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='600'%3E%3Crect width='400' height='600' fill='%2316161a'/%3E%3Ctext x='50%25' y='50%25' fill='%23a8ff35' font-family='Arial,sans-serif' font-size='180' font-weight='bold' text-anchor='middle' dominant-baseline='central'%3ES%3C/text%3E%3C/svg%3E";

export const POUR_TOUS_BOUTIQUES: readonly CategoryBoutique[] = [
  {
    name: 'Skoleom Page',
    desc: "Le point d'entrée Skoleom : découverte et accès à tout l'univers.",
    img: '/shop/pour%20tous/page.webp',
    href: 'https://page.skoleom.com/',
  },
  {
    name: 'SeSync',
    desc: "L'achat in-vidéo en un tap, sans quitter le contenu.",
    img: '/shop/pour%20tous/sesync.webp',
  },
  {
    name: "SkoleToon's",
    desc: 'Univers de personnages, animation et merchandising.',
    img: '/shop/pour%20tous/skoletoons.webp',
  },
  {
    name: 'The25x',
    desc: "La gamme distributeur et l'expérience nouvelle génération.",
    img: '/shop/pour%20tous/the25x.webp',
    href: 'https://the25x.com/',
  },
  {
    name: 'Skoleom Shop',
    desc: "La marketplace des produits et dérivés de l'écosystème.",
    img: '/shop/pour%20tous/shop.webp',
  },
  {
    name: 'SeContent Creation',
    desc: 'Création de capsules interactives et de formats vidéo.',
    img: '/shop/studio.webp',
  },
  {
    name: 'Skoleom Magazine',
    desc: 'Actus, tendances et formats média interactifs.',
    img: '/shop/pour%20tous/magazine.webp',
  },
  {
    name: 'Watch on Skoleom',
    desc: 'OTT, chaînes et expérience box sur Skoleom.',
    img: '/shop/boutiques/watchon.webp',
  },
  {
    name: 'Skoleom Music',
    desc: 'Label, artistes et produits dérivés musicaux.',
    img: '/shop/boutiques/Music.webp',
  },
  {
    name: 'Skoleom Travel',
    desc: 'Mobilité, hospitality et contenus voyage.',
    img: '/shop/boutiques/travel.webp',
  },
];

export const POUR_LES_PROS_BOUTIQUES: readonly CategoryBoutique[] = [
  {
    name: 'Monetizer Studio',
    desc: 'ERP/DCM & monétisation de vos contenus.',
    img: '/shop/studio.webp',
    href: 'https://monetizerstudio.com/',
  },
  {
    name: 'Skoleom Pay',
    desc: 'Paiement intégré et wallets pour vos ventes.',
    img: '/shop/boutiques/invest.webp',
  },
  {
    name: 'Skoleom Ads',
    desc: 'Publicité interactive directement dans le contenu.',
    img: '/shop/pour%20tous/magazine.webp',
  },
  {
    name: 'Skoleom Real Estate',
    desc: "Offres pro pour l'immobilier et les lieux.",
    img: '/shop/boutiques/realestate.webp',
  },
  {
    name: 'Skoleom Pro+',
    desc: 'Analytics avancées et reporting de performance.',
    img: '/shop/right%20management.webp',
  },
  {
    name: 'SVE API',
    desc: "API et intégrations à tout l'écosystème Skoleom.",
    img: '/shop/lab.webp',
  },
  {
    name: 'OTT Skoleom Technology Integration',
    desc: 'Distribution et intégration OTT clé en main.',
    img: '/shop/studio.webp',
  },
  {
    name: 'Skoleom Cloud',
    desc: 'Infrastructure et hébergement haute performance.',
    img: '/shop/lab.webp',
  },
];

export const GROUPE_BOUTIQUES: readonly CategoryBoutique[] = [
  {
    name: 'SeContent Agency',
    desc: "Agence de création de contenus de l'écosystème.",
    img: '/shop/studio.webp',
  },
  {
    name: 'Skoleom Factory',
    desc: "L'usine à produits et innovations Skoleom.",
    img: '/shop/business.webp',
  },
  {
    name: 'Skoleom Lab',
    desc: 'R&D, IA et technologies de reconnaissance.',
    img: '/shop/lab.webp',
  },
  {
    name: 'Skoleom Business',
    desc: 'Développement et opérations B2B du groupe.',
    img: '/shop/business.webp',
  },
  {
    name: 'Skoleom Invest',
    desc: 'Levées de fonds, véhicules et structuration.',
    img: '/shop/boutiques/invest.webp',
  },
  {
    name: 'Skoleom Rights Management',
    desc: 'Gestion des droits et du patrimoine IA.',
    img: '/shop/right%20management.webp',
  },
  {
    name: 'Skoleom Retailers',
    desc: 'Réseau de retailers et distribution physique.',
    img: '/shop/boutiques/foodAndbeverage.webp',
  },
  {
    name: 'Skoleom Events',
    desc: 'Événements, salons et expériences live.',
    img: '/shop/groupe/event.webp',
  },
  {
    name: 'Monetizer Studio x The Awards',
    desc: 'Les récompenses des meilleurs créateurs.',
    img: '/shop/pour%20tous/magazine.webp',
  },
  {
    name: 'Skoleom Studios',
    desc: 'Production TV, cinéma et digital.',
    img: '/shop/studio.webp',
  },
  {
    name: 'Skoleom Academy',
    desc: 'Formation et certification des talents.',
    img: '/shop/school.webp',
  },
  {
    name: 'Skoleom Governance',
    desc: 'Gouvernance et structure du groupe Skoleom.',
    img: '/shop/groupe/nexusPark.webp',
  },
];

/** Boutiques audiovisuelles par catégorie (page Boutiques). */
export const AUDIOVISUAL_BOUTIQUES: readonly CategoryBoutique[] = [
  { name: 'Skoleom SeSports', desc: 'Sport & retail média.', img: '/shop/boutiques/SeSports.webp' },
  {
    name: 'Skoleom Cares',
    desc: 'Impact social & programmes dédiés.',
    img: '/shop/boutiques/cares.webp',
  },
  {
    name: 'Skoleom Games',
    desc: 'Jeux, IP & monétisation in-game.',
    img: '/shop/boutiques/games.webp',
  },
  {
    name: 'Skoleom Invest',
    desc: 'Levées, véhicules & structuration.',
    img: '/shop/boutiques/invest.webp',
  },
  {
    name: 'Skoleom Services',
    desc: 'Services & accompagnement groupe.',
    img: '/shop/boutiques/services.webp',
  },
  {
    name: 'Skoleom Food & Beverage',
    desc: 'F&B, marques & expériences.',
    img: '/shop/boutiques/foodAndbeverage.webp',
  },
  {
    name: 'Skoleom Travel',
    desc: 'Mobilité, hospitality & contenus.',
    img: '/shop/boutiques/travel.webp',
  },
  {
    name: 'Skoleom Music',
    desc: 'Label, artistes & produits dérivés.',
    img: '/shop/boutiques/Music.webp',
  },
  {
    name: 'Watch on Skoleom',
    desc: 'OTT, chaînes & expérience box.',
    img: '/shop/boutiques/watchon.webp',
  },
  {
    name: 'Skoleom Real Estate',
    desc: 'Promotions, lieux & retail centers.',
    img: '/shop/boutiques/realestate.webp',
  },
  {
    name: 'Skoleom Publishing',
    desc: 'Édition transmédia & catalogues.',
    img: '/shop/boutiques/publishing.webp',
  },
];

/** Liste des boutiques par clé de colonne hub. */
export const BOUTIQUES_BY_COLUMN: Record<string, readonly CategoryBoutique[]> = {
  public: POUR_TOUS_BOUTIQUES,
  group: GROUPE_BOUTIQUES,
  pros: POUR_LES_PROS_BOUTIQUES,
  boutiques: AUDIOVISUAL_BOUTIQUES,
};
