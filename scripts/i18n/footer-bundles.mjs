/**
 * Bundles footer (colonnes + liens) pour overlays et locales de base.
 */
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { pickString } from './mega-translations.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '../..');
const footerJson = JSON.parse(
  readFileSync(join(root, 'src/components/layout/footer.json'), 'utf8'),
);

/** @returns {Record<string, string>} */
export function buildFooterColumns(lang) {
  const out = {};
  for (const col of footerJson.colomn ?? []) {
    out[String(col.id)] = lang === 'fr' ? col.Title : pickString(col.Title, lang);
  }
  return out;
}

/** @returns {Record<string, string>} */
export function buildFooterLinks(lang) {
  const out = {};
  for (const col of footerJson.colomn ?? []) {
    for (const link of col.Links ?? []) {
      out[String(link.id)] = lang === 'fr' ? link.text : pickString(link.text, lang);
      for (const sub of link.subLinks ?? []) {
        out[String(sub.id)] = lang === 'fr' ? sub.text : pickString(sub.text, lang);
      }
    }
  }
  return out;
}
