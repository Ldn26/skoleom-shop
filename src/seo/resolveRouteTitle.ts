import { HUB_COLUMNS, HUB_PAGES } from '../data/hubData';

const SITE_NAME = 'Skoleom Universe';

const DEFAULT_DESCRIPTION_EN =
  "Each video becomes an immersive store. The world's first Retail Media & Transmedia ecosystem.";
const DEFAULT_DESCRIPTION_FR =
  'Chaque vidéo devient une boutique immersive. Le premier écosystème mondial de Retail Media & Transmédia.';

export interface RouteSeoMeta {
  title: string;
  description: string;
  ogType?: 'website' | 'article' | 'video.other';
  noindex?: boolean;
}

type Localized = { fr: string; en: string };

function isFrench(lang: string): boolean {
  return lang.toLowerCase().startsWith('fr');
}

function pick(loc: Localized, lang: string): string {
  return isFrench(lang) ? loc.fr : loc.en;
}

function pageTitle(label: string): string {
  return `${label} | ${SITE_NAME}`;
}

function defaultDescription(lang: string): string {
  return isFrench(lang) ? DEFAULT_DESCRIPTION_FR : DEFAULT_DESCRIPTION_EN;
}

/** Pages hub servies en iframe — titres alignés sur les balises <title> HTML. */
const HUB_EMBED_TITLES: Record<string, Localized> = {
  boutiques: {
    fr: 'Boutiques audiovisuelles',
    en: 'Audiovisual Stores',
  },
  'pour-les-pros': {
    fr: 'Pour les Pros',
    en: 'For Professionals',
  },
  'pour-les-pros/creer-boutique': {
    fr: 'Créez votre boutique audiovisuelle skoléomisée',
    en: 'Create your shoppable audiovisual store',
  },
  'pour-les-pros/audiovisual-store-page': {
    fr: 'Créez une Audiovisual Store Page',
    en: 'Create an Audiovisual Store Page',
  },
  univers: {
    fr: 'Univers par catégorie',
    en: 'Universe by category',
  },
};

/** Sous-routes /en-construction/* — nom d’onglet = nom de la future page. */
const CONSTRUCTION_TITLES: Record<string, Localized> = {
  actualites: { fr: 'Actualités', en: 'News' },
  events: { fr: 'Événements', en: 'Events' },
  podcast: { fr: 'Skoleom Podcast', en: 'Skoleom Podcast' },
  book: { fr: 'Skoleom Book', en: 'Skoleom Book' },
  radio: { fr: 'Skoleom Radio', en: 'Skoleom Radio' },
  news: { fr: 'Skoleom News', en: 'Skoleom News' },
  'social-hub': { fr: 'Skoleom Social Hub', en: 'Skoleom Social Hub' },
  shop: { fr: 'Skoleom Shop', en: 'Skoleom Shop' },
  the25x: { fr: 'The25x', en: 'The25x' },
  skoletoons: { fr: "SkoleToon's", en: "SkoleToon's" },
  agenda: { fr: 'Agenda', en: 'Agenda' },
  ecosysteme: { fr: "L'écosystème", en: 'The ecosystem' },
  societes: { fr: 'Les sociétés du groupe', en: 'Group companies' },
  collaborateurs: {
    fr: 'Les collaborateurs & partenaires',
    en: 'Collaborators & partners',
  },
  investisseurs: { fr: 'La relation investisseur', en: 'Investor relations' },
};

const STATIC_ROUTES: Record<string, Localized & { description?: Localized; noindex?: boolean }> = {
  '/': {
    fr: `${SITE_NAME} — Watch. Touch. Buy.`,
    en: `${SITE_NAME} — Watch. Touch. Buy.`,
    description: {
      fr: "Skoleom transforme la vidéo en expérience d'achat immersive grâce au retail media et au commerce transmédia.",
      en: 'Skoleom helps brands and media turn video into shoppable experiences with a global retail media and transmedia commerce platform.',
    },
  },
  '/stores': {
    fr: 'Boutiques audiovisuelles',
    en: 'Shoppable Video Stores & Interactive Commerce',
    description: {
      fr: 'Parcourez des boutiques audiovisuelles interactives où chaque contenu devient achetable.',
      en: 'Browse interactive audiovisual stores where viewers discover products inside media content and buy instantly.',
    },
  },
  '/how-it-works': {
    fr: 'Comment ça marche',
    en: 'How Shoppable Video Works for Retail Media',
    description: {
      fr: 'Découvrez Watch. Touch. Buy. : reconnaissance produit, capsules contextuelles et achat instantané.',
      en: 'See how Watch. Touch. Buy detects products in video, displays contextual capsules, and drives instant conversions.',
    },
  },
  '/ecosystem': {
    fr: 'Écosystème',
    en: 'Ecosystem',
    description: {
      fr: "Explorez l'écosystème Skoleom Group : OTT, retail media, créateurs, marques et technologie.",
      en: 'Explore the Skoleom Group ecosystem across OTT platforms, retail media, creators, brands, and technology.',
    },
  },
  '/ecosystem-full': {
    fr: 'Écosystème',
    en: 'Ecosystem',
    description: {
      fr: "Vue complète de l'écosystème Skoleom Group.",
      en: 'Full view of the Skoleom Group ecosystem.',
    },
  },
  '/technology': {
    fr: 'Technologie SeSync',
    en: 'SeSync Technology for Interactive Video Commerce',
    description: {
      fr: 'SeSync : reconnaissance produit en temps réel, overlays contextuels et paiement in-vidéo.',
      en: 'Discover SeSync: realtime product recognition, contextual overlays, and seamless checkout for interactive video commerce.',
    },
  },
  '/sesync': {
    fr: 'Technologie SeSync',
    en: 'SeSync Technology for Interactive Video Commerce',
    description: {
      fr: 'SeSync : reconnaissance produit en temps réel, overlays contextuels et paiement in-vidéo.',
      en: 'Discover SeSync: realtime product recognition, contextual overlays, and seamless checkout for interactive video commerce.',
    },
  },
  '/about-technology': {
    fr: 'Technologie',
    en: 'Technology',
  },
  '/contact': {
    fr: 'Contact',
    en: 'Contact',
    description: {
      fr: 'Contactez Skoleom pour les partenariats, le support et les demandes commerciales.',
      en: 'Contact Skoleom for partnerships, support, and business inquiries.',
    },
  },
  '/business': {
    fr: 'Pour les Pros',
    en: 'For Professionals',
    description: {
      fr: 'Solutions B2B retail media pour marques, médias et distributeurs.',
      en: 'Explore B2B retail media solutions for brands, media owners, and retailers using immersive shoppable video experiences.',
    },
  },
  '/retail-media-platform': {
    fr: 'Plateforme Retail Media',
    en: 'Retail Media Platform for Shoppable Video',
  },
  '/interactive-video-commerce': {
    fr: 'Commerce vidéo interactif',
    en: 'Interactive Video Commerce Platform',
  },
  '/content': {
    fr: 'Contenus & expériences',
    en: 'Shoppable Media Content & Experiences',
  },
  '/touch': {
    fr: 'Skoleom Touch',
    en: 'Skoleom Touch',
    description: {
      fr: 'Explorez les médias de façon interactive avec découverte produit instantanée.',
      en: 'Experience Skoleom Touch: interactive media exploration with instant product discovery and conversion.',
    },
  },
  '/search': {
    fr: 'Recherche',
    en: 'Search',
    description: {
      fr: 'Recherchez et naviguez dans l’univers Skoleom.',
      en: 'Search and navigate content in the Skoleom universe.',
    },
    noindex: true,
  },
  '/skoleom-page': {
    fr: 'Skoleom Page',
    en: 'Skoleom Page',
    description: {
      fr: 'Explorateur transmédia propulsé par SeSync — vidéo, musique, médias et shopping.',
      en: 'Search across video, music, media and shopping with Skoleom Page, the transmedia explorer powered by SeSync.',
    },
  },
  '/skoleom-page/trends': {
    fr: 'Tendances — Skoleom Page',
    en: 'Trends — Skoleom Page',
    noindex: true,
  },
  '/skoleom-page/create': {
    fr: 'Créer — Skoleom Page',
    en: 'Create — Skoleom Page',
    noindex: true,
  },
  '/skoleom-page/profile': {
    fr: 'Profil — Skoleom Page',
    en: 'Profile — Skoleom Page',
    noindex: true,
  },
  '/login': {
    fr: 'Connexion',
    en: 'Login',
    noindex: true,
  },
  '/register': {
    fr: 'Créer un compte',
    en: 'Create Account',
    noindex: true,
  },
  '/dashboard': {
    fr: 'Mon espace',
    en: 'My Dashboard',
    noindex: true,
  },
  '/orders': {
    fr: 'Mes commandes',
    en: 'My Orders',
    noindex: true,
  },
  '/favorites': {
    fr: 'Favoris',
    en: 'Favorites',
    noindex: true,
  },
  '/mission': {
    fr: 'Notre mission',
    en: 'Our mission',
    description: {
      fr: "Rendre chaque vidéo achetable, partout dans le monde, sans rupture entre l'envie et l'achat.",
      en: 'Make every video shoppable worldwide, without breaking the link between desire and purchase.',
    },
  },
  '/funding': {
    fr: 'Programmes de financement',
    en: 'Funding programs',
    description: {
      fr: 'Informations sur le financement et Skoleom Invest.',
      en: 'Information about Skoleom Group funding and Skoleom Invest.',
    },
  },
  '/patents': {
    fr: 'Brevet Skoleom',
    en: 'Skoleom Patents',
  },
  '/legal': {
    fr: 'Mentions légales',
    en: 'Legal notice',
    noindex: true,
  },
  '/terms': {
    fr: 'Conditions générales',
    en: 'Terms of service',
    noindex: true,
  },
  '/privacy': {
    fr: 'Confidentialité',
    en: 'Privacy policy',
    noindex: true,
  },
  '/affiliates': {
    fr: 'Affiliation',
    en: 'Affiliate disclosure',
    noindex: true,
  },
  '/cookies': {
    fr: 'Préférences cookies',
    en: 'Cookie preferences',
    noindex: true,
  },
  '/sky': {
    fr: 'Skoleom Sky',
    en: 'Skoleom Sky',
    noindex: true,
  },
  '/not-found': {
    fr: 'Page introuvable',
    en: 'Page Not Found',
    noindex: true,
  },
  '/404': {
    fr: 'Page introuvable',
    en: 'Page Not Found',
    noindex: true,
  },
};

function resolveHubMeta(hubPath: string, lang: string): RouteSeoMeta | null {
  const slug = hubPath.replace(/\/+$/, '').toLowerCase();
  if (!slug) return null;

  const embed = HUB_EMBED_TITLES[slug];
  if (embed) {
    return {
      title: pageTitle(pick(embed, lang)),
      description: defaultDescription(lang),
    };
  }

  const lastSegment = slug.split('/').pop() ?? slug;

  const hubPage =
    HUB_PAGES[lastSegment] ??
    Object.values(HUB_PAGES).find((p) => p.slug === slug || p.slug === lastSegment);
  if (hubPage) {
    return {
      title: pageTitle(hubPage.title),
      description: hubPage.intro || defaultDescription(lang),
    };
  }

  const column = Object.values(HUB_COLUMNS).find((c) => c.hub === slug || c.hub === lastSegment);
  if (column) {
    const brandTitle = HUB_EMBED_TITLES[column.hub];
    return {
      title: pageTitle(brandTitle ? pick(brandTitle, lang) : column.title),
      description: defaultDescription(lang),
    };
  }

  const humanized = lastSegment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return {
    title: pageTitle(humanized),
    description: defaultDescription(lang),
  };
}

function resolveConstructionMeta(subpath: string, lang: string): RouteSeoMeta {
  const key = subpath.toLowerCase();
  const label = key
    ? pick(
        CONSTRUCTION_TITLES[key] ?? {
          fr: key
            .split('-')
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' '),
          en: key
            .split('-')
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' '),
        },
        lang,
      )
    : isFrench(lang)
      ? 'En construction'
      : 'Coming soon';

  return {
    title: pageTitle(label),
    description: isFrench(lang)
      ? 'Cette page arrive bientôt dans l’univers Skoleom.'
      : 'This page is coming soon to the Skoleom universe.',
    noindex: true,
  };
}

function resolveStaticMeta(pathname: string, lang: string): RouteSeoMeta | null {
  const route = STATIC_ROUTES[pathname];
  if (!route) return null;

  const label = pick(route, lang);
  const title = pathname === '/' ? label : pageTitle(label);
  const description = route.description ? pick(route.description, lang) : defaultDescription(lang);

  return {
    title,
    description,
    noindex: route.noindex,
  };
}

export function resolveRouteSeoMeta(pathname: string, lang: string): RouteSeoMeta {
  if (pathname.startsWith('/hub/')) {
    const hubPath = pathname.slice('/hub/'.length);
    return (
      resolveHubMeta(hubPath, lang) ?? {
        title: pageTitle(isFrench(lang) ? 'Hub' : 'Hub'),
        description: defaultDescription(lang),
      }
    );
  }

  if (pathname === '/en-construction' || pathname.startsWith('/en-construction/')) {
    const subpath = pathname.slice('/en-construction'.length).replace(/^\//, '');
    return resolveConstructionMeta(subpath, lang);
  }

  const watchMatch = pathname.match(/^\/watch\/[^/]+$/);
  if (watchMatch) {
    return {
      title: pageTitle(isFrench(lang) ? 'Expérience Watch' : 'Watch Experience'),
      description: isFrench(lang)
        ? 'Expérience interactive avec capsules contextuelles et achat en un clic.'
        : 'Interactive watch experience with contextual capsules and one-click purchase during video playback.',
      ogType: 'video.other',
    };
  }

  const artistMatch = pathname.match(/^\/skoleom-page\/artist\/[^/]+$/);
  if (artistMatch) {
    return {
      title: pageTitle(isFrench(lang) ? 'Artiste — Skoleom Page' : 'Artist — Skoleom Page'),
      description: defaultDescription(lang),
      noindex: true,
    };
  }

  if (pathname.startsWith('/admin')) {
    return {
      title: pageTitle(isFrench(lang) ? 'Console Admin' : 'Admin Console'),
      description: defaultDescription(lang),
      noindex: true,
    };
  }

  const staticMeta = resolveStaticMeta(pathname, lang);
  if (staticMeta) return staticMeta;

  return {
    title: pageTitle(isFrench(lang) ? 'Page introuvable' : 'Page Not Found'),
    description: defaultDescription(lang),
    noindex: true,
  };
}
