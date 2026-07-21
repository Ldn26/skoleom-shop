/**
 * Génère src/locales/overlays/en.ts et fr.ts (mega menu, boutiques, pages statiques, écosystème).
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import {
  getAssistance,
  getBusiness,
  getEcosystem,
  getNews,
  getNotFound,
} from './i18n/overlay-i18n.mjs';
import { getAuthForLang, getWatchForLang } from './i18n/overlay-translations.mjs';
import { NAVBAR_PROS_LINKS_EN } from './i18n/locale-extras.mjs';
import { buildFooterColumns, buildFooterLinks } from './i18n/footer-bundles.mjs';
import {
  getAllToolsLabel,
  getMegaLinks,
  getMegaVariants,
  getNavbarProsLinks,
  getNavbarStats,
  translateUniverse,
} from './i18n/mega-translations.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ecosystemSrc = readFileSync(join(root, 'src/data/ecosystemBoutiques.ts'), 'utf8');
const universeSrc = readFileSync(join(root, 'src/components/layout/UniverseMegaMenu.tsx'), 'utf8');
const navbarSrc = readFileSync(join(root, 'src/components/layout/Navbar.tsx'), 'utf8');

const keySafe = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');

/** @returns {{ columns: { columnKey: string, title: string, links: string[] }[] }} */
function parseUniverseColumns() {
  const block = universeSrc.match(/const UNIVERSE_COLUMNS[\s\S]*?\n\];/)?.[0] ?? '';
  const columns = [];
  const colBlocks = block.split(/\{\s*\n\s*columnKey:/).slice(1);
  for (const chunk of colBlocks) {
    const columnKeyMatch = chunk.match(/^ '([^']+)'/);
    const titleMatch = chunk.match(/\n\s*title:\s*'((?:\\'|[^'])*)'/);
    if (!columnKeyMatch || !titleMatch) continue;
    const columnKey = columnKeyMatch[1];
    const title = titleMatch[1].replace(/\\'/g, "'");
    const links = [];
    const labelRe = /label:\s*'((?:\\'|[^'])*)'/g;
    let lm;
    while ((lm = labelRe.exec(chunk)) !== null) {
      links.push(lm[1].replace(/\\'/g, "'"));
    }
    columns.push({ columnKey, title, links });
  }
  return { columns };
}

/** Libellés pros longs (Navbar) */
function parseNavbarProsLinks() {
  const prosBlock =
    navbarSrc.match(/pros:\s*\{[\s\S]*?links:\s*\(\)\s*=>\s*\[([\s\S]*?)\]\s*,\s*stats:/)?.[1] ??
    '';
  const labels = [];
  const labelRe = /label:\s*(?:'((?:\\'|[^'])*)'|"((?:\\"|[^"])*)")/g;
  let m;
  while ((m = labelRe.exec(prosBlock)) !== null) {
    labels.push((m[1] ?? m[2] ?? '').replace(/\\'/g, "'"));
  }
  return labels;
}

function columnI18nKey(columnKey) {
  return columnKey.replace(/\./g, '_');
}

function buildUniverseMega(lang) {
  const { columns } = parseUniverseColumns();
  const colOut = {};
  const linkOut = {};
  for (const col of columns) {
    colOut[columnI18nKey(col.columnKey)] = { title: translateUniverse(col.title, lang) };
    for (const label of col.links) {
      linkOut[keySafe(label)] = translateUniverse(label, lang);
    }
  }
  return {
    columns: colOut,
    links: linkOut,
    allTools: getAllToolsLabel(lang),
  };
}

function buildNavbarProsLinks(lang) {
  return getNavbarProsLinks(NAVBAR_PROS_LINKS_EN, parseNavbarProsLinks(), lang);
}

/** @type {Record<string, { name: string; description: string; tagline?: string }>} */
const boutiquesFr = {};
const itemRe =
  /id:\s*'([^']+)'[\s\S]*?name:\s*'((?:\\'|[^'])*)'[\s\S]*?tagline:\s*'((?:\\'|[^'])*)'[\s\S]*?description:\s*'((?:\\'|[^'])*)'/g;
let m;
while ((m = itemRe.exec(ecosystemSrc)) !== null) {
  const [, id, name, tagline, description] = m;
  if (!boutiquesFr[id]) {
    boutiquesFr[id] = {
      name: name.replace(/\\'/g, "'"),
      tagline: tagline.replace(/\\'/g, "'"),
      description: description.replace(/\\'/g, "'"),
    };
  }
}

/** Traductions EN des boutiques (depuis le français source). */
const boutiquesEnMap = {
  'av-sesports': { name: 'Skoleom SeSports', description: 'Sports universe and retail media.' },
  'av-cares': { name: 'Skoleom Cares', description: 'Social impact and dedicated programs.' },
  'av-games': { name: 'Skoleom Games', description: 'Games, IP and in-game monetization.' },
  'av-invest': { name: 'Skoleom Invest', description: 'Fundraising, vehicles and structuring.' },
  'av-services': { name: 'Skoleom Services', description: 'Group services and support.' },
  'av-fnb': { name: 'Skoleom Food & Beverage', description: 'F&B, brands and experiences.' },
  'av-travel': { name: 'Skoleom Travel', description: 'Mobility, hospitality and content.' },
  'av-music': { name: 'Skoleom Music', description: 'Label, artists and merchandising.' },
  'av-watch': { name: 'Watch on Skoleom', description: 'OTT, channels and box experience.' },
  'av-realestate': {
    name: 'Skoleom Real Estate',
    description: 'Developments, venues and retail centers.',
  },
  'av-publishing': {
    name: 'Skoleom Publishing',
    description: 'Transmedia publishing and catalogs.',
  },
  'tous-page': { name: 'Skoleom Page', description: 'Skoleom entry point and discovery.' },
  'tous-sesync': { name: 'SeSync', description: 'In-page purchasing and distribution.' },
  'tous-skoletoons': { name: "SkoleToon's", description: 'Character universe and merchandising.' },
  'tous-25x': { name: 'The25x', description: 'Distributor range and experience.' },
  'tous-shop': { name: 'Skoleom Shop', description: 'Products and merchandise marketplace.' },
  'tous-secontent': { name: 'SeContent Creation', description: 'Capsule and format creation.' },
  'tous-magazine': {
    name: 'Skoleom Magazine',
    description: 'Media, news and interactive formats.',
  },
  'pro-monetizer': { name: 'Monetizer Studio', description: 'ERP/DCM and content monetization.' },
  'pro-pay': { name: 'Skoleom Pay', description: 'Integrated payment and wallets.' },
  'pro-ads': { name: 'Skoleom Ads', description: 'Interactive in-content advertising.' },
  'pro-realestate': { name: 'Skoleom Real Estate', description: 'Pro real estate and venues.' },
  'pro-plus': { name: 'Skoleom Pro+', description: 'Advanced analytics and reporting.' },
  'pro-sve-api': { name: 'SVE API', description: 'API and ecosystem integrations.' },
  'pro-ott': {
    name: 'OTT Skoleom Technology Integration',
    description: 'OTT integration and connectors.',
  },
  'pro-cloud': { name: 'Skoleom Cloud', description: 'Infrastructure and cloud services.' },
  'secontent-agency': {
    name: 'SeContent Agency',
    description: 'Transmedia agency and creative production.',
  },
  'skoleom-factory': {
    name: 'Skoleom Factory',
    description: 'Central planning and campaign orchestration.',
  },
  'skoleom-lab': {
    name: 'Skoleom Lab',
    description: 'R&D, sovereign AI, blockchain and immersive retail.',
  },
  'skoleom-business': {
    name: 'Skoleom Business',
    description: 'Sales force, partners and group CRM.',
  },
  'skoleom-invest': {
    name: 'Skoleom Invest',
    description: 'Fundraising, M&A and investor relations.',
  },
  'skoleom-rights-management': {
    name: 'Skoleom Rights Management',
    description: 'IP, licenses, compliance and asset protection.',
  },
  'skoleom-retailers': {
    name: 'Skoleom Retailers',
    description: 'Distributor ranges, house brands and distribution.',
  },
  'skoleom-events': {
    name: 'Skoleom Events',
    description: 'International events, e-sport and conventions.',
  },
  'monetizer-studio-the-awards': {
    name: 'Monetizer Studio × The Awards',
    description: 'Ceremonies, live formats and awards monetization.',
  },
  'skoleom-studios': {
    name: 'Skoleom Studios',
    description: 'Production studios, XR, shoots and capsules.',
  },
  'skoleom-academy': {
    name: 'Skoleom Academy',
    description: 'Higher education and campus of the future.',
  },
  'skoleom-governance': {
    name: 'Skoleom Governance',
    description: 'Governance, ESG and group steering.',
  },
};

const boutiquesEn = {};
for (const [id, fr] of Object.entries(boutiquesFr)) {
  boutiquesEn[id] = boutiquesEnMap[id] ?? { name: fr.name, description: fr.description };
}

const megaVariantsFr = {
  stores: {
    ariaLabel: 'Boutiques audiovisuelles',
    kicker: 'Boutiques audiovisuelles',
    title: 'Découvrez toutes nos boutiques audiovisuelles',
    ctaText:
      'Accédez à l’ensemble des boutiques et explorez les univers interactifs (sport, mode, entertainment…).',
    linksTitle: 'Explorez',
    stats: {
      'pages.audiovisual.store.par.boutique': 'pages Audiovisual Store par boutique',
      'contenus.par.mois.provenant.des.plus.grandes.plateformes':
        'contenus par mois provenant des plus grandes plateformes',
      'produits.et.services.integres.par.mois.dans.les.videos':
        'produits et services intégrés par mois dans les vidéos',
    },
  },
  everyone: {
    ariaLabel: 'Pour tous',
    kicker: 'Pour tous',
    title: 'Découvrez des plateformes pour toutes vos envies',
    ctaText: 'Accédez à une bibliothèque de solutions incroyable.',
    linksTitle: 'Aller vers',
    stats: {
      'sans.redirection': 'sans redirection',
      'capsules.interactives': 'capsules interactives',
      'plateformes.ott': 'plateformes OTT',
      'sites.web.partenaires': 'sites web partenaires',
    },
  },
  pros: {
    ariaLabel: 'Pour les pros',
    kicker: 'Pour les pros',
    title: 'Rendez vos contenus instantanément achetables',
    ctaText:
      'Téléchargez l’outil idéal pour rendre vos contenus interactifs et permettre l’achat directement dans vos contenus.',
    linksTitle: 'Solutions',
    stats: {
      'integration.rapide': 'intégration rapide',
      'experience.sur.mesure': 'expérience sur-mesure',
      'suivi.performance': 'suivi & performance',
    },
  },
  news: {
    ariaLabel: 'Actualités',
    kicker: 'Actualités',
    title: 'Nouveautés, sorties et tendances',
    ctaText:
      'Suivez les dernières annonces Skoleom, les actus plateformes et les nouveautés du moment.',
    linksTitle: 'Découvrir',
    stats: {
      annonces: 'annonces',
      'nouveaux.contenus': 'nouveaux contenus',
      tendances: 'tendances',
    },
  },
  events: {
    ariaLabel: 'Événements',
    kicker: 'Événements',
    title: 'Rencontrez Skoleom en live',
    ctaText:
      'Conférences, lancements, démonstrations et partenariats — suivez nos prochains rendez-vous.',
    linksTitle: 'Accès rapide',
    stats: { demos: 'démos', partenariats: 'partenariats', showcases: 'showcases' },
  },
  group: {
    ariaLabel: 'Groupe',
    kicker: 'Groupe',
    title: 'Explorez l’écosystème Skoleom',
    ctaText:
      'Découvrez nos unités, nos technologies et les possibilités offertes par Skoleom Universe.',
    linksTitle: 'Explorer',
    stats: {
      'produits.unites': 'produits & unités',
      'reconnaissance.ia': 'reconnaissance',
      'commerce.in.content': 'in-content',
    },
  },
};

const megaVariantsEn = {
  stores: {
    ariaLabel: 'Audiovisual stores',
    kicker: 'Audiovisual stores',
    title: 'Discover all our audiovisual stores',
    ctaText:
      'Access every store and explore interactive universes (sport, fashion, entertainment…).',
    linksTitle: 'Explore',
    stats: {
      'pages.audiovisual.store.par.boutique': 'Audiovisual Store pages per shop',
      'contenus.par.mois.provenant.des.plus.grandes.plateformes':
        'content items per month from top platforms',
      'produits.et.services.integres.par.mois.dans.les.videos':
        'products and services integrated monthly in videos',
    },
  },
  everyone: {
    ariaLabel: 'For everyone',
    kicker: 'For everyone',
    title: 'Discover platforms for everything you want',
    ctaText: 'Access an incredible library of solutions.',
    linksTitle: 'Go to',
    stats: {
      'sans.redirection': 'no redirect',
      'capsules.interactives': 'interactive capsules',
      'plateformes.ott': 'OTT platforms',
      'plateformes.ott.sites': 'websites',
    },
  },
  pros: {
    ariaLabel: 'For professionals',
    kicker: 'For professionals',
    title: 'Make your content instantly shoppable',
    ctaText: 'Download the ideal tool for interactive content and in-stream purchasing.',
    linksTitle: 'Solutions',
    stats: {
      'integration.rapide': 'fast integration',
      'experience.sur.mesure': 'tailored experience',
      'suivi.performance': 'tracking & performance',
    },
  },
  news: {
    ariaLabel: 'News',
    kicker: 'News',
    title: 'Releases, launches and trends',
    ctaText: 'Follow the latest Skoleom announcements and platform news.',
    linksTitle: 'Discover',
    stats: { annonces: 'announcements', 'nouveaux.contenus': 'new content', tendances: 'trends' },
  },
  events: {
    ariaLabel: 'Events',
    kicker: 'Events',
    title: 'Meet Skoleom live',
    ctaText: 'Conferences, launches, demos and partnerships — see upcoming dates.',
    linksTitle: 'Quick access',
    stats: { demos: 'demos', partenariats: 'partnerships', showcases: 'showcases' },
  },
  group: {
    ariaLabel: 'Group',
    kicker: 'Group',
    title: 'Explore the Skoleom ecosystem',
    ctaText: 'Discover our units, technologies and Skoleom Universe possibilities.',
    linksTitle: 'Explore',
    stats: {
      'produits.unites': 'products & units',
      'reconnaissance.ia': 'AI recognition',
      'commerce.in.content': 'in-content commerce',
    },
  },
};

const megaLinksFr = {
  skoleom_sesports: 'Skoleom SeSports',
  skoleom_cares: 'Skoleom Cares',
  skoleom_games: 'Skoleom Games',
  skoleom_page: 'Skoleom Page',
  skoleom_sesync: 'Skoleom SeSync',
  skoletoon_s: "SkoleToon's",
  the25x: 'The25x',
  skoleom_shop: 'Skoleom Shop',
  secontent_creation: 'SeContent Creation',
  skoleom_magazine: 'Skoleom Magazine',
  offres_integrations: 'Offres & intégrations',
  technologie: 'Technologie',
  evenements: 'Événements',
  dernieres_actus: 'Dernières actus',
  boutiques: 'Boutiques',
  groupe: 'Groupe',
  agenda: 'Agenda',
  pour_les_pros: 'Pour les Pros',
  l_ecosysteme: 'L’écosystème',
  les_societes_du_groupe: 'Les sociétés du groupe',
  les_collaborateurs_partenaires: 'Les collaborateurs & partenaires',
  la_relation_investisseur: 'La relation investisseur',
  rechercher_une_marque: 'Rechercher une marque',
  rechercher_un_produit: 'Rechercher un produit',
  rechercher_une_video: 'Rechercher une vidéo',
  reserver_une_experience: 'Réserver une expérience',
  explorer_le_catalogue_produits: 'Explorer le catalogue produits',
  skoleom_studio_ia: 'Skoleom Studio IA',
};

const megaLinksEn = {
  ...megaLinksFr,
  offres_integrations: 'Offers & integrations',
  technologie: 'Technology',
  evenements: 'Events',
  dernieres_actus: 'Latest news',
  boutiques: 'Stores',
  groupe: 'Group',
  agenda: 'Agenda',
  pour_les_pros: 'For professionals',
  l_ecosysteme: 'The ecosystem',
  les_societes_du_groupe: 'Group companies',
  les_collaborateurs_partenaires: 'Collaborators & partners',
  la_relation_investisseur: 'Investor relations',
  rechercher_une_marque: 'Search a brand',
  rechercher_un_produit: 'Search a product',
  rechercher_une_video: 'Search a video',
  reserver_une_experience: 'Book an experience',
  explorer_le_catalogue_produits: 'Explore the product catalog',
  skoleom_studio_ia: 'Skoleom Studio AI',
};

function buildOverlay(lang) {
  const isFr = lang === 'fr';
  const megaVariants = getMegaVariants(megaVariantsFr, megaVariantsEn, lang);
  const megaLinks = getMegaLinks(megaLinksFr, megaLinksEn, lang);

  return {
    auth: getAuthForLang(lang),
    mega: {
      navbar: {
        variants: megaVariants,
        links: { ...megaLinks, ...buildNavbarProsLinks(lang) },
        stats: getNavbarStats(lang),
      },
      universe: buildUniverseMega(lang),
    },
    footer: {
      columns: buildFooterColumns(lang),
      links: buildFooterLinks(lang),
    },
    data: {
      boutiques: isFr
        ? Object.fromEntries(
            Object.entries(boutiquesFr).map(([id, v]) => [
              id,
              { name: v.name, description: v.description },
            ]),
          )
        : boutiquesEn,
      sections: isFr
        ? {
            'boutiques-av-officielles': {
              title: 'Boutiques audiovisuelles',
              subtitle: 'Emplacements réservés — visuels à venir.',
            },
            'boutiques-pour-tous': {
              title: 'Pour tous',
              subtitle: 'Emplacements réservés — visuels à venir.',
            },
            'boutiques-pour-les-pros': {
              title: 'Pour les pros',
              subtitle: 'Emplacements réservés — visuels à venir.',
            },
            'boutiques-groupe': {
              title: 'Groupe',
              subtitle: 'Organisation des filiales & pôles — visuels actifs sur cette section.',
            },
          }
        : {
            'boutiques-av-officielles': {
              title: 'Audiovisual stores',
              subtitle: 'Reserved slots — visuals coming soon.',
            },
            'boutiques-pour-tous': {
              title: 'For everyone',
              subtitle: 'Reserved slots — visuals coming soon.',
            },
            'boutiques-pour-les-pros': {
              title: 'For professionals',
              subtitle: 'Reserved slots — visuals coming soon.',
            },
            'boutiques-groupe': {
              title: 'Group',
              subtitle: 'Subsidiaries and divisions — visuals active on this section.',
            },
          },
    },
    public: {
      assistance: getAssistance(lang),
      ecosystem: getEcosystem(lang),
      news: getNews(lang),
      business: getBusiness(lang),
      notFound: getNotFound(lang),
      watch: getWatchForLang(lang),
    },
    components: {
      downloadPicker: {
        title: isFr ? 'Choisissez votre plateforme' : 'Choose your platform',
        token: 'Skoleom Token',
      },
    },
  };
}

const outDir = join(root, 'src/locales/overlays');
mkdirSync(outDir, { recursive: true });

const ALL_LANGS = ['en', 'fr', 'es', 'ar', 'pt', 'hi', 'zh', 'id', 'ru', 'sw', 'de', 'it', 'nl'];

for (const lang of ALL_LANGS) {
  const overlay = buildOverlay(lang);
  const exportName = `overlay${lang.charAt(0).toUpperCase()}${lang.slice(1)}`;
  const body = `import type { LocaleResource } from '../types';

/** Traductions complémentaires générées — mega menu, boutiques, écosystème, etc. */
export const ${exportName} = ${JSON.stringify(overlay, null, 2)} as const satisfies Partial<LocaleResource>;
export const overlay = ${exportName};
`;
  writeFileSync(join(outDir, `${lang}.ts`), body);
  process.stdout.write(`Wrote overlays/${lang}.ts\n`);
}
