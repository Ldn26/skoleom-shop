import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const DIST_DIR = resolve(process.cwd(), 'dist');
const INDEX_PATH = resolve(DIST_DIR, 'index.html');
const SUPPORTED_LANGS = [
  'en',
  'fr',
  'es',
  'ar',
  'pt',
  'hi',
  'zh',
  'id',
  'ru',
  'sw',
  'de',
  'it',
  'nl',
];
const SITE_URL = 'https://universe.skoleom.com';
const SITE_NAME = 'Skoleom Universe';
const DEFAULT_IMAGE = `${SITE_URL}/og/skoleom-hero.jpg`;
const DEFAULT_DESCRIPTION =
  "Each video becomes an immersive store. The world's first Retail Media & Transmedia ecosystem.";

const CORE_ROUTES = [
  '/',
  '/stores',
  '/how-it-works',
  '/skoleom-page',
  '/skoleom-page/trends',
  '/technology',
  '/touch',
  '/ecosystem',
  '/content',
  '/business/',
  '/retail-media-platform',
  '/interactive-video-commerce',
  '/news',
  '/contact',
];

function getSeoMeta(pathname) {
  if (pathname === '/') {
    return {
      title: `Skoleom Universe — Watch. Touch. Buy.`,
      description:
        'Skoleom helps brands and media turn video into shoppable experiences with a global retail media and transmedia commerce platform.',
      noindex: false,
    };
  }
  if (pathname === '/stores') {
    return {
      title: `Shoppable Video Stores & Interactive Commerce | ${SITE_NAME}`,
      description:
        'Browse interactive audiovisual stores where viewers discover products inside media content and buy instantly.',
      noindex: false,
    };
  }
  if (pathname === '/how-it-works') {
    return {
      title: `How Shoppable Video Works for Retail Media | ${SITE_NAME}`,
      description:
        'See how Watch. Touch. Buy detects products in video, displays contextual capsules, and drives instant conversions.',
      noindex: false,
    };
  }
  if (pathname === '/skoleom-page') {
    return {
      title: `Skoleom Page | ${SITE_NAME}`,
      description:
        'Search across video, music, media and shopping with Skoleom Page, the transmedia explorer powered by SeSync.',
      noindex: false,
    };
  }
  if (pathname === '/skoleom-page/trends') {
    return {
      title: `Trends | Skoleom Page | ${SITE_NAME}`,
      description:
        'Explore trending topics, artists and products across the Skoleom Page transmedia search experience.',
      noindex: false,
    };
  }
  if (pathname === '/technology') {
    return {
      title: `SeSync Technology for Interactive Video Commerce | ${SITE_NAME}`,
      description:
        'Discover SeSync: realtime product recognition, contextual overlays, and seamless checkout for interactive video commerce.',
      noindex: false,
    };
  }
  if (pathname === '/touch') {
    return {
      title: `Skoleom Touch | ${SITE_NAME}`,
      description:
        'Experience Skoleom Touch: interactive media exploration with instant product discovery and conversion.',
      noindex: false,
    };
  }
  if (pathname === '/ecosystem') {
    return {
      title: `Ecosystem | ${SITE_NAME}`,
      description:
        'Explore the Skoleom Group ecosystem across OTT platforms, retail media, creators, brands, and technology.',
      noindex: false,
    };
  }
  if (pathname === '/content') {
    return {
      title: `Shoppable Media Content & Experiences | ${SITE_NAME}`,
      description:
        'Discover media content enhanced with contextual commerce journeys, interactive discovery, and direct purchase actions.',
      noindex: false,
    };
  }
  if (pathname === '/business') {
    return {
      title: `Retail Media Solutions for Brands & Media | ${SITE_NAME}`,
      description:
        'Explore B2B retail media solutions for brands, media owners, and retailers using immersive shoppable video experiences.',
      noindex: false,
    };
  }
  if (pathname === '/retail-media-platform') {
    return {
      title: `Retail Media Platform for Shoppable Video | ${SITE_NAME}`,
      description:
        'Discover Skoleom retail media capabilities for interactive video commerce, realtime activation, and measurable conversion.',
      noindex: false,
    };
  }
  if (pathname === '/interactive-video-commerce') {
    return {
      title: `Interactive Video Commerce Platform | ${SITE_NAME}`,
      description:
        'Scale interactive video commerce with contextual overlays, conversion tracking, and cross-platform orchestration.',
      noindex: false,
    };
  }
  if (pathname === '/news') {
    return {
      title: `News | ${SITE_NAME}`,
      description:
        'Read the latest Skoleom updates, product announcements, and ecosystem highlights.',
      noindex: false,
    };
  }
  if (pathname === '/contact') {
    return {
      title: `Contact | ${SITE_NAME}`,
      description: 'Contact Skoleom for partnerships, support, and business inquiries.',
      noindex: false,
    };
  }
  return {
    title: `${SITE_NAME} — Watch. Touch. Buy.`,
    description: DEFAULT_DESCRIPTION,
    noindex: false,
  };
}

function localizedRoute(route, lang) {
  if (lang === 'en') return route;
  if (route === '/') return `/${lang}`;
  return `/${lang}${route}`;
}

function routeToIndexPath(route) {
  if (route === '/') return resolve(DIST_DIR, 'index.html');
  const clean = route.replace(/^\/+/, '');
  return resolve(DIST_DIR, clean, 'index.html');
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function withOrInsertTag(html, regex, tag) {
  if (regex.test(html)) return html.replace(regex, tag);
  return html.replace('</head>', `  ${tag}\n  </head>`);
}

function renderSeoHtml(baseHtml, route, lang) {
  const seo = getSeoMeta(route);
  const path = localizedRoute(route, lang);
  const canonical = `${SITE_URL}${path}`;
  const htmlLang = lang;
  const locale = lang === 'en' ? 'en_US' : `${lang}_${lang.toUpperCase()}`;
  const robots = seo.noindex
    ? 'noindex, nofollow, noarchive'
    : 'index, follow, max-image-preview:large';

  let html = baseHtml;
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${htmlLang}">`);
  html = withOrInsertTag(
    html,
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(seo.title)}</title>`,
  );
  html = withOrInsertTag(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
  );
  html = withOrInsertTag(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`,
  );
  html = withOrInsertTag(
    html,
    /<meta name="robots" content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${robots}" />`,
  );
  html = withOrInsertTag(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
  );
  html = withOrInsertTag(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
  );
  html = withOrInsertTag(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonical}" />`,
  );
  html = withOrInsertTag(
    html,
    /<meta property="og:locale" content="[^"]*"\s*\/?>/,
    `<meta property="og:locale" content="${locale}" />`,
  );
  html = withOrInsertTag(
    html,
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${DEFAULT_IMAGE}" />`,
  );
  html = withOrInsertTag(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
  );
  html = withOrInsertTag(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
  );
  html = withOrInsertTag(
    html,
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${DEFAULT_IMAGE}" />`,
  );
  return html;
}

const indexHtml = readFileSync(INDEX_PATH, 'utf8');
const routes = new Set();

for (const route of CORE_ROUTES) {
  for (const lang of SUPPORTED_LANGS) {
    routes.add(`${route}@@${lang}`);
  }
}

for (const tuple of routes) {
  const [route, lang] = tuple.split('@@');
  const localized = localizedRoute(route, lang);
  const target = routeToIndexPath(localized);
  const html = renderSeoHtml(indexHtml, route, lang);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html, 'utf8');
}

console.log(`Prerender SEO shells generated for ${routes.size} localized routes.`);
