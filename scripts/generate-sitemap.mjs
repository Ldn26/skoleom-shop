import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const SITE_URL = 'https://universe.skoleom.com';
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
  '/about-technology',
  '/mission',
  '/legal',
  '/terms',
  '/privacy',
];

function localizedRoute(route, lang) {
  if (lang === 'en') return route;
  if (route === '/') return `/${lang}`;
  return `/${lang}${route}`;
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

const urls = [];
for (const route of CORE_ROUTES) {
  for (const lang of SUPPORTED_LANGS) {
    urls.push(`${SITE_URL}${localizedRoute(route, lang)}`);
  }
}

const lastmod = new Date().toISOString().slice(0, 10);
const body = urls
  .map(
    (loc) =>
      `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${loc.endsWith('/') && !loc.includes('/', 8) ? '1.0' : '0.8'}</priority>\n  </url>`,
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

const outPath = resolve(process.cwd(), 'public/sitemap.xml');
writeFileSync(outPath, xml, 'utf8');
console.log(`Sitemap generated with ${urls.length} URLs at ${outPath}`);
