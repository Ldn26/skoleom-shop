#!/usr/bin/env node
/**
 * Scope un fichier CSS « footer-pages » sous une classe parente (.hub-native)
 * pour le réutiliser dans l'app React SANS fuite de styles.
 *
 *  - :root                       → .hub-native (les variables cascadent aux enfants)
 *  - *                           → .hub-native *
 *  - html / body                 → .hub-native (le wrapper joue le rôle de page)
 *  - body.hub-embed X / body.hub-has-nav X → .hub-native X
 *  - tout autre sélecteur         → .hub-native <sélecteur>
 *  - @media / @supports          → contenu re-scopé récursivement
 *  - @keyframes / @font-face     → laissés intacts
 *
 * Usage : node scripts/scope-css.mjs <input.css> <.scope> > output.css
 */
import { readFileSync } from 'node:fs';

const SCOPE = process.argv[3] || '.hub-native';

function splitTopLevel(css) {
  // Découpe en « morceaux » : chaque morceau est soit une at-rule à bloc,
  // soit une règle « sélecteur { déclarations } ».
  const out = [];
  let i = 0;
  const n = css.length;
  while (i < n) {
    // saute les espaces
    while (i < n && /\s/.test(css[i])) i++;
    if (i >= n) break;
    // commentaire
    if (css[i] === '/' && css[i + 1] === '*') {
      const end = css.indexOf('*/', i + 2);
      i = end === -1 ? n : end + 2;
      continue;
    }
    // lit le « prélude » jusqu'à { ou ; (at-rule sans bloc)
    let j = i;
    let depthFind = 0;
    while (j < n) {
      const c = css[j];
      if (c === '{') break;
      if (c === ';' && depthFind === 0) break;
      j++;
    }
    const prelude = css.slice(i, j).trim();
    if (css[j] === ';' || j >= n) {
      // at-rule sans bloc (ex. @import, @charset)
      out.push({ type: 'statement', text: prelude });
      i = j + 1;
      continue;
    }
    // bloc { ... } équilibré
    let depth = 0;
    let k = j;
    for (; k < n; k++) {
      if (css[k] === '{') depth++;
      else if (css[k] === '}') {
        depth--;
        if (depth === 0) {
          k++;
          break;
        }
      }
    }
    const body = css.slice(j + 1, k - 1);
    out.push({ type: 'rule', prelude, body });
    i = k;
  }
  return out;
}

function scopeSelector(sel) {
  const s = sel.trim();
  if (!s) return s;
  // Les pages React reproduisent le mode « embed » (le header/footer sont fournis
  // par l'app). Les règles « body.hub-has-nav … » concernent la page autonome
  // avec son propre header : elles ne s'appliquent JAMAIS ici et entrent en
  // conflit avec les règles embed → on les supprime (retourne null).
  if (/^body\.hub-has-nav\b/i.test(s)) return null;
  if (s === ':root' || s === 'html' || s === 'body') return SCOPE;
  if (s === '*') return `${SCOPE} *`;
  // body.hub-embed / body.hub-has-nav → on retire « body.<état> », on garde le reste
  // tel quel (l'espace ou l'attachement éventuel du reste est préservé : un
  // descendant « .phero » garde son espace, un pseudo « ::after » reste collé).
  let m = s.match(/^body\.(?:hub-embed|hub-has-nav)\b/i);
  if (m) {
    const rest = s.slice(m[0].length);
    return rest ? `${SCOPE}${rest}` : SCOPE;
  }
  // html / body en tête → remplacés par le scope, en PRÉSERVANT l'attachement
  // du reste : « body::before » → « .hub-native::before » (collé, pas d'espace),
  // « body .x » → « .hub-native .x » (descendant, espace conservé).
  m = s.match(/^(?:html|body)\b/i);
  if (m) {
    const rest = s.slice(m[0].length);
    return rest ? `${SCOPE}${rest}` : SCOPE;
  }
  return `${SCOPE} ${s}`;
}

function scopePrelude(prelude) {
  return prelude
    .split(',')
    .map(scopeSelector)
    .filter((s) => s != null && s !== '')
    .join(',\n');
}

function render(chunks) {
  const lines = [];
  for (const ch of chunks) {
    if (ch.type === 'statement') {
      lines.push(`${ch.text};`);
      continue;
    }
    const p = ch.prelude.trim();
    if (/^@(media|supports|container)/i.test(p)) {
      // re-scope le contenu interne
      const inner = splitTopLevel(ch.body);
      lines.push(`${p} {`);
      lines.push(render(inner));
      lines.push(`}`);
    } else if (/^@(keyframes|-webkit-keyframes|font-face|page|property)/i.test(p)) {
      lines.push(`${p} {${ch.body}}`);
    } else {
      const scoped = scopePrelude(p);
      if (scoped) lines.push(`${scoped} {${ch.body}}`);
    }
  }
  return lines.join('\n');
}

const input = readFileSync(process.argv[2], 'utf8');
process.stdout.write(render(splitTopLevel(input)));
