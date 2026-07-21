/**
 * Injecte home.sections, home.descriptions.detect, home.stats.storePages et public.* dans src/locales/*.ts
 */
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { appStrings, publicBundles } from './i18n/public-bundles.mjs';
import { buildHomeBundle } from './i18n/home-bundles.mjs';
import { cartAriaStrings, commonStrings } from './i18n/locale-extras.mjs';
import { skoleomPageBundles } from './i18n/skoleom-page-bundles.mjs';
import { buildFooterColumns, buildFooterLinks } from './i18n/footer-bundles.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const langs = ['fr', 'en', 'es', 'ar', 'pt', 'hi', 'zh', 'id', 'ru', 'sw', 'de', 'it', 'nl'];

function serializeObject(obj, indent = 4) {
  const pad = ' '.repeat(indent);
  const lines = ['{'];
  for (const [key, value] of Object.entries(obj)) {
    const k = /^[a-zA-Z_][\w]*$/.test(key) && !key.includes("'") ? key : JSON.stringify(key);
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      lines.push(`${pad}${k}: ${serializeObject(value, indent + 2)},`);
    } else {
      lines.push(`${pad}${k}: ${JSON.stringify(value)},`);
    }
  }
  lines.push(`${' '.repeat(indent - 2)}}`);
  return lines.join('\n');
}

function patchHomeFull(content, lang) {
  const homeBlock = `  home: ${serializeObject(buildHomeBundle(lang), 4)}`;
  if (/^\s*home:\s*\{/m.test(content)) {
    return content.replace(
      /^\s*home:\s*\{[\s\S]*?\n\s*\},\s*\n\s*public:/m,
      `${homeBlock},\n  public:`,
    );
  }
  // Fichier sans bloc home : insérer avant le footer racine (après skoleomPage / cart)
  if (/^\s*home:\s*\{/m.test(content) === false) {
    return content.replace(/(\n)(  footer: \{\n    brand:)/, `$1${homeBlock},$1$2`);
  }
  return content;
}

function patchPublic(content, lang) {
  const bundle = publicBundles[lang];
  if (!bundle) return content;
  return content.replace(/public: \{[\s\S]*?\},\s*\n\s*data: \{/, () => {
    return `public: ${serializeObject(bundle, 4)},
  data: {`;
  });
}

function patchApp(content, lang) {
  const app = appStrings[lang];
  if (!app) return content;
  return content.replace(
    /app: \{\s*\n\s*loading:/,
    `app: {\n    skipToContent: ${JSON.stringify(app.skipToContent)},\n    loading:`,
  );
}

function patchCommon(content, lang) {
  const states = commonStrings[lang]?.states ?? commonStrings.en.states;
  return content.replace(
    /states: \{[\s\S]*?noResultsFor:[^,]+,\s*\}/,
    `states: ${serializeObject(states, 6)}`,
  );
}

function patchCartAria(content, lang) {
  const aria = cartAriaStrings[lang] ?? cartAriaStrings.en;
  return content.replace(/aria: \{[\s\S]*?close:[^,]+,\s*\}/, `aria: ${serializeObject(aria, 6)}`);
}

function patchSkoleomPage(content, lang) {
  const bundle = skoleomPageBundles[lang] ?? skoleomPageBundles.en;
  if (/skoleomPage:\s*\{/.test(content)) {
    return content.replace(
      /skoleomPage: \{[\s\S]*?\},\s*\n\s*footer:/,
      `skoleomPage: ${serializeObject(bundle, 4)},
  footer:`,
    );
  }
  return content.replace(
    /(\n\s*)footer: \{/,
    `$1skoleomPage: ${serializeObject(bundle, 4)},$1footer: {`,
  );
}

function patchFooter(content, lang) {
  if (
    !/footer:\s*\{/.test(content) ||
    !/columns:\s*\{/.test(content) ||
    !/links:\s*\{/.test(content)
  ) {
    return content;
  }
  const columns = buildFooterColumns(lang);
  const links = buildFooterLinks(lang);
  return content.replace(
    /columns:\s*\{[\s\S]*?\},\s*\n\s*links:\s*\{[\s\S]*?\},/,
    `columns: ${serializeObject(columns, 6)},\n    links: ${serializeObject(links, 6)},`,
  );
}

for (const lang of langs) {
  const path = join(root, 'src/locales', `${lang}.ts`);
  let content = readFileSync(path, 'utf8');
  content = patchApp(content, lang);
  content = patchHomeFull(content, lang);
  content = patchCommon(content, lang);
  content = patchCartAria(content, lang);
  content = patchSkoleomPage(content, lang);
  content = patchPublic(content, lang);
  content = patchFooter(content, lang);
  writeFileSync(path, content);
  process.stdout.write(`Patched ${lang}.ts\n`);
}
