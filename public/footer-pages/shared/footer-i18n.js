/** AUTO-GENERATED — source: footer-pages/src/ — npm run footer:build */
(() => {
  // footer-pages/src/footer-i18n.ts
  (function () {
    const STORAGE_KEY = 'skoleom-language';
    function lang() {
      try {
        const l = localStorage.getItem(STORAGE_KEY) || 'fr';
        return l === 'fr' ? 'fr' : 'en';
      } catch {
        return 'fr';
      }
    }
    function dict() {
      if (lang() !== 'en') return null;
      const page = window.FOOTER_I18N_EN || {};
      const locales = window.FOOTER_LOCALES_EN || {};
      if (!Object.keys(page).length && !locales.footer) return null;
      return {
        ...page,
        footer: locales.footer || page.footer,
      };
    }
    function prosDict() {
      if (lang() !== 'en') return null;
      return window.FOOTER_I18N_EN?.pros || null;
    }
    function t(path, fallback) {
      const d = dict();
      if (!d) return fallback || '';
      const parts = path.split('.');
      let cur = d;
      for (const p of parts) {
        if (!cur || typeof cur !== 'object') return fallback || '';
        cur = cur[p];
      }
      return cur ?? (fallback || '');
    }
    function setText(sel, text) {
      if (!text) return;
      document.querySelectorAll(sel).forEach((el) => {
        el.textContent = text;
      });
    }
    function applyNav() {
      const d = dict();
      if (!d?.nav) return;
      Object.entries(d.nav).forEach(([id, label]) => {
        document.querySelectorAll(`[data-hub-nav="${id}"]`).forEach((el) => {
          el.textContent = label;
        });
      });
      const pillNav = document.querySelector('.hub-pill-nav');
      if (pillNav && d.navAria) pillNav.setAttribute('aria-label', d.navAria);
    }
    function applyFooter() {
      const d = dict();
      if (!d?.footer) return;
      const f = d.footer;
      const brandDesc = f.brand?.description || f.brandDesc;
      if (brandDesc) {
        document
          .querySelectorAll('[data-footer-brand-desc], .sk-footer-brand > p')
          .forEach((el) => {
            el.textContent = brandDesc;
          });
      }
      if (f.socials?.label) {
        document.querySelectorAll('[data-footer-socials], .sk-footer-socials').forEach((el) => {
          el.setAttribute('aria-label', f.socials.label);
        });
      }
      if (f.copyright) {
        const year = /* @__PURE__ */ new Date().getFullYear();
        const line = `\xA9 ${year} .skoleom \u2014 ${f.copyright}`;
        document
          .querySelectorAll('[data-footer-copyright], .sk-footer-bottom small')
          .forEach((el) => {
            el.textContent = line;
          });
      }
      const columns = f.columns || {};
      Object.entries(columns).forEach(([id, title]) => {
        if (typeof title !== 'string') return;
        document.querySelectorAll(`[data-footer-column-id="${id}"]`).forEach((col) => {
          const h3 = col.querySelector('h3');
          if (h3) h3.textContent = title;
          const nav = col.querySelector('nav');
          if (nav) nav.setAttribute('aria-label', title);
        });
      });
      Object.entries(f.links || {}).forEach(([id, text]) => {
        document.querySelectorAll(`[data-footer-link-id="${id}"]`).forEach((a) => {
          a.textContent = text;
        });
      });
      const legal = f.legalLinks || f.legal || {};
      Object.entries(legal).forEach(([id, text]) => {
        document.querySelectorAll(`[data-footer-legal-id="${id}"]`).forEach((a) => {
          a.textContent = text;
        });
      });
    }
    function collapseWs(s) {
      return String(s).replace(/\s+/g, ' ').trim();
    }
    function replaceInString(txt, sorted) {
      const collapsed = txt.replace(/\s+/g, ' ');
      let work = collapsed;
      sorted.forEach(([fr, en]) => {
        const nfr = fr.replace(/\s+/g, ' ');
        if (work.includes(nfr)) work = work.split(nfr).join(en);
      });
      if (work !== collapsed) return work;
      let out = txt;
      sorted.forEach(([fr, en]) => {
        if (out.includes(fr)) out = out.split(fr).join(en);
      });
      return out;
    }
    function replaceInHtml(html, sorted) {
      let work = html.replace(/\s+/g, ' ');
      sorted.forEach(([fr, en]) => {
        const nfr = fr.replace(/\s+/g, ' ');
        if (work.includes(nfr)) work = work.split(nfr).join(en);
      });
      return work;
    }
    function applyReplacements(pairs, root) {
      if (!pairs?.length) return;
      const sorted = [...pairs].sort((a, b) => b[0].length - a[0].length);
      const scope = root || document.body;
      const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const p = node.parentElement;
          if (!p || p.closest('script, style, noscript')) return NodeFilter.FILTER_REJECT;
          if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        },
      });
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach((node) => {
        const txt = replaceInString(node.textContent, sorted);
        if (txt !== node.textContent) node.textContent = txt;
      });
    }
    function applyAttributeReplacements(pairs, root) {
      if (!pairs?.length) return;
      const sorted = [...pairs].sort((a, b) => b[0].length - a[0].length);
      const scope = root || document.body;
      ['aria-label', 'title', 'placeholder', 'alt'].forEach((attr) => {
        scope.querySelectorAll(`[${attr}]`).forEach((el) => {
          const val = el.getAttribute(attr);
          if (!val) return;
          const next = replaceInString(val, sorted);
          if (next !== val) el.setAttribute(attr, next);
        });
      });
    }
    const HTML_REPLACE_SEL =
      'p, h1, h2, h3, h4, h5, h6, li, td, th, dt, dd, label, blockquote, figcaption, .heyeb, .hsub, .hh1, .ph1, .pdesc, .pros-apl-eyebrow, .pros-apl-h2, .pros-sol-link, .ptag, .stag, .eyeb, .slabel, .sh2, .sdesc';
    function applyHtmlReplacements(pairs, root) {
      if (!pairs?.length) return;
      const sorted = [...pairs].sort((a, b) => b[0].length - a[0].length);
      const scope = root || document.body;
      scope.querySelectorAll(HTML_REPLACE_SEL).forEach((el) => {
        if (el.closest('script, style, noscript')) return;
        if (el.querySelector('img, svg, [data-sk-brand], [data-sk-solution], [data-sk-logo]'))
          return;
        const html = el.innerHTML;
        const next = replaceInHtml(html, sorted);
        if (next !== html.replace(/\s+/g, ' ')) el.innerHTML = next;
      });
    }
    function setButtonLabel(btn, label) {
      if (!btn || !label) return;
      const icon = btn.querySelector('[data-sk-icon]');
      btn.textContent = '';
      btn.appendChild(document.createTextNode(label));
      if (icon) {
        btn.appendChild(document.createTextNode(' '));
        btn.appendChild(icon);
      }
    }
    function applyProsHero(hero) {
      if (!hero) return;
      const home = document.getElementById('page-home');
      if (!home) return;
      if (hero.eyebrow) {
        const ey = home.querySelector('.heyeb');
        if (ey) ey.textContent = hero.eyebrow;
      }
      if (hero.h1?.length) {
        home.querySelectorAll('.hh1 span').forEach((span, i) => {
          if (hero.h1[i]) span.textContent = hero.h1[i];
        });
      }
      const sub = home.querySelector('.hsub');
      if (sub) {
        if (hero.subHtml) sub.innerHTML = hero.subHtml;
        else if (hero.sub) sub.textContent = hero.sub;
      }
      const btns = home.querySelectorAll('.hctas button');
      if (btns[0] && hero.cta1) setButtonLabel(btns[0], hero.cta1);
      if (btns[1] && hero.cta2) btns[1].textContent = hero.cta2;
    }
    function applyBoutiques() {
      const d = dict();
      if (!d?.boutiques) return;
      const b = d.boutiques;
      if (b.title) document.title = b.title;
      if (b.hero) {
        const h1 = document.querySelector('.hero-h1');
        if (h1 && b.hero.lines) {
          const spans = h1.querySelectorAll('span');
          b.hero.lines.forEach((line, i) => {
            if (spans[i]) spans[i].textContent = line;
          });
        }
        setText('.hero-sub', b.hero.sub);
        const ctas = document.querySelectorAll('.hero-ctas button');
        if (ctas[0] && b.hero.cta1) ctas[0].childNodes[0].textContent = `${b.hero.cta1} `;
        if (ctas[1] && b.hero.cta2) ctas[1].textContent = b.hero.cta2;
        const stats = document.querySelectorAll('.hero-stats .hstat-l');
        (b.hero.stats || []).forEach((lbl, i) => {
          if (stats[i]) stats[i].textContent = lbl;
        });
      }
      if (b.featured) {
        setText('#stores-section .section-label', b.featured.label);
        setText('#stores-section .section-h2', b.featured.h2);
        const seeAll = document.querySelector('#stores-section .see-all');
        if (seeAll && b.featured.seeAll) {
          seeAll.childNodes[0].textContent = `${b.featured.seeAll} `;
        }
      }
      if (b.universe) {
        setText('#universe-section .section-label', b.universe.label);
        setText('#universe-section .section-h2', b.universe.h2);
        const seeAll = document.querySelector('#universe-section .see-all');
        if (seeAll && b.universe.seeAll) seeAll.childNodes[0].textContent = `${b.universe.seeAll} `;
      }
      Object.entries(b.stores || {}).forEach(([key, data]) => {
        const card =
          document.querySelector(`[onclick*="${key}"]`) ||
          document.querySelector(`[onclick*="'${key}'"]`);
        if (!card) return;
        const desc = card.querySelector('.sc-desc, .uc-desc');
        if (desc && data.desc) desc.textContent = data.desc;
        card.querySelectorAll('.sc-meta span, .uc-stat-l').forEach((el, i) => {
          const labels = data.statLabels || b.commonStatLabels;
          if (labels?.[i]) el.textContent = labels[i];
        });
        const buyBtn = card.querySelector('.sc-buy-btn');
        if (buyBtn && data.cta) {
          const icon = buyBtn.querySelector('[data-sk-icon]');
          buyBtn.textContent = '';
          if (icon) buyBtn.appendChild(icon.cloneNode(true));
          buyBtn.appendChild(document.createTextNode(` ${data.cta} `));
        }
        card.querySelectorAll('.uc-cta').forEach((cta) => {
          if (data.discover && cta.textContent.includes('univers')) {
            cta.childNodes[0].textContent = `${data.discover} `;
          }
          if (
            data.explore &&
            cta.classList.contains('uc-overlay') === false &&
            cta.textContent.trim() === 'Explorer'
          ) {
            cta.textContent = data.explore;
          }
        });
        card.querySelectorAll('.uc-overlay .uc-cta, .uc-cta').forEach((cta) => {
          if (data.explore && cta.textContent.trim() === 'Explorer') cta.textContent = data.explore;
        });
      });
      document.querySelectorAll('.univ-card .uc-desc').forEach((el, i) => {
        const keys = b.univOrder || [];
        const data = b.univ?.[keys[i]];
        if (data?.desc) el.textContent = data.desc;
      });
      document.querySelectorAll('.univ-card .uc-stat-l').forEach((el, i) => {
        const idx = i % 3;
        const labels = b.commonStatLabels || ['stores', 'views/mo', 'active products'];
        if (labels[idx]) el.textContent = labels[idx];
      });
      document.querySelectorAll('.univ-card .uc-cta').forEach((cta) => {
        if (b.discoverUniverse) cta.childNodes[0].textContent = `${b.discoverUniverse} `;
      });
      if (b.hiw) {
        setText('.hiw .section-label', b.hiw.label);
        setText('.hiw .section-h2', b.hiw.h2);
        document.querySelectorAll('.hiw-step .step-content p').forEach((p, i) => {
          if (b.hiw.steps?.[i]) p.textContent = b.hiw.steps[i];
        });
        setText('.phone-caps-label', b.hiw.capsLabel);
      }
      if (b.statsBanner) {
        document.querySelectorAll('.stats-banner .stat-l').forEach((el, i) => {
          if (b.statsBanner[i]) el.textContent = b.statsBanner[i];
        });
      }
      if (b.launch) {
        setText('.launch .section-label', b.launch.label);
        const launchH2 = document.querySelector('.launch-grad');
        if (launchH2 && b.launch.h2) launchH2.innerHTML = b.launch.h2;
        setText('.launch p', b.launch.p);
        const launchBtns = document.querySelectorAll('.launch-ctas button');
        if (launchBtns[0] && b.launch.cta1)
          launchBtns[0].childNodes[0].textContent = `${b.launch.cta1} `;
        if (launchBtns[1] && b.launch.cta2) launchBtns[1].textContent = b.launch.cta2;
      }
      if (b.replacements) applyReplacements(b.replacements);
    }
    function applyUnivers() {
      const d = dict();
      if (!d?.univers) return;
      const u = d.univers;
      if (u.title) document.title = u.title;
      if (u.hero) {
        setText('.phero .peyeb', u.hero.eyebrow);
        setText('.phero .ph1', u.hero.h1);
        setText('.phero .pdesc', u.hero.desc);
      }
      if (u.section) {
        setText('.section .slabel', u.section.label);
        setText('.section .sh2', u.section.h2);
        setText('.section .sdesc', u.section.desc);
      }
      document.querySelectorAll('.grid3 .card').forEach((card, i) => {
        const keys = ['sport', 'music', 'mode', 'films', 'gaming', 'tech'];
        const cat = u.categories?.[keys[i]];
        if (!cat) return;
        const h3 = card.querySelector('h3');
        if (h3 && cat.name) h3.textContent = cat.name;
        const p = card.querySelector('p');
        if (p && cat.desc) p.textContent = cat.desc;
      });
      if (u.cta) {
        setText('.cta-box h2 span', u.cta.h2);
        setText('.cta-box p', u.cta.p);
        const links = document.querySelectorAll('.cta-box .cta-row a');
        if (links[0] && u.cta.btn1) links[0].textContent = u.cta.btn1;
        if (links[1] && u.cta.btn2) links[1].textContent = u.cta.btn2;
      }
    }
    function applyLancer() {
      const d = dict();
      if (!d?.lancer) return;
      const l = d.lancer;
      if (l.title) document.title = l.title;
      if (l.replacements) applyReplacements(l.replacements);
    }
    function categoryLabels() {
      const d = dict();
      const L = d?.categories?.labels;
      if (L) return L;
      return {
        stores: 'boutiques',
        views: 'vues/mois',
        products: 'produits actifs',
        featured: 'BOUTIQUE PHARE',
        eyebrowPrefix: 'Univers ',
        explore: 'Explorer les boutiques',
        launch: 'Lancer une boutique',
        featuredDesc:
          'Boutique audiovisuelle skol\xE9omis\xE9e \u2014 achetez les produits directement dans les contenus {cat}.',
      };
    }
    function getCategoryDict() {
      if (lang() === 'en' && window.SK_CATEGORIES_EN) return window.SK_CATEGORIES_EN;
      return window.SK_CATEGORIES || {};
    }
    function renderCategoryPage() {
      const params = new URLSearchParams(location.search);
      const id = document.body.dataset.catId || params.get('id') || 'sport';
      document.body.dataset.catId = id;
      const cat = getCategoryDict()[id];
      if (!cat || !window.SkLogos) return;
      const L = categoryLabels();
      document.title = `${cat.name} \u2014 Skoleom Universe`;
      const eyeb = document.getElementById('cat-eyeb');
      if (eyeb) {
        eyeb.style.color = cat.color;
        eyeb.innerHTML = `${SkLogos.renderCategory(cat.logo || cat.id, 20)} ${L.eyebrowPrefix}${cat.short}`;
      }
      const title = document.getElementById('cat-title');
      if (title) title.innerHTML = cat.short;
      const desc = document.getElementById('cat-desc');
      if (desc) desc.textContent = cat.desc;
      const stats = document.getElementById('cat-stats');
      if (stats) {
        stats.innerHTML = `
    <div class="pstat"><div class="pstat-n" style="color:${cat.color}">${cat.stores}</div><div class="pstat-l">${L.stores}</div></div>
    <div class="pstat"><div class="pstat-n" style="color:${cat.color}">${cat.views}</div><div class="pstat-l">${L.views}</div></div>
    <div class="pstat"><div class="pstat-n" style="color:${cat.color}">${cat.products}</div><div class="pstat-l">${L.products}</div></div>`;
      }
      const label = document.getElementById('cat-label');
      if (label) {
        label.style.color = cat.color;
        label.textContent = L.featured;
      }
      const featTitle = document.getElementById('cat-featured-title');
      if (featTitle) featTitle.textContent = cat.featured;
      const featured = document.getElementById('cat-featured');
      if (featured) {
        featured.style.setProperty('--ac', cat.color);
        const featDesc = (L.featuredDesc || '').replace('{cat}', cat.short.toLowerCase());
        featured.innerHTML = `<div class="card-top">${SkLogos.renderCategory(cat.logo || cat.id, 48)}<h3>${cat.featured}</h3></div><p>${featDesc}</p>`;
      }
      document.querySelectorAll('#cat-hero .cta-row a').forEach((a, i) => {
        if (i === 0) a.textContent = L.explore;
        if (i === 1) a.textContent = L.launch;
      });
    }
    function applyCategories() {
      renderCategoryPage();
      const d = dict();
      if (d?.categories?.replacements) applyReplacements(d.categories.replacements);
    }
    function applyPros() {
      const p = prosDict();
      if (!p) return;
      if (p.title) document.title = p.title;
      applyProsHero(p.hero);
      if (p.replacements) {
        applyHtmlReplacements(p.replacements);
        applyReplacements(p.replacements);
        applyAttributeReplacements(p.replacements);
        document.querySelectorAll('button, .btn, .pcta, a.btn').forEach((btn) => {
          if (btn.closest('script, style')) return;
          const label = collapseWs(btn.textContent);
          const next = replaceInString(
            label,
            [...p.replacements].sort((a, b) => b[0].length - a[0].length),
          );
          if (next !== label) {
            if (btn.querySelector('[data-sk-icon]')) setButtonLabel(btn, next);
            else btn.textContent = next;
          }
        });
      }
      const sticky = document.querySelector('.sticky-cta button, .hub-sticky-cta button');
      if (sticky && p.stickyCta) sticky.textContent = p.stickyCta;
    }
    function patchProsSpa() {
      if ((document.body.dataset.footerPage || detectPage()) !== 'pros') return;
      if (typeof window.showPage === 'function' && !window.showPage._footerI18n) {
        const orig = window.showPage;
        window.showPage = function (id) {
          orig(id);
          if (lang() === 'en') applyPros();
        };
        window.showPage._footerI18n = true;
      }
      if (typeof window.switchTab === 'function' && !window.switchTab._footerI18n) {
        const orig = window.switchTab;
        window.switchTab = function (group, id) {
          orig(group, id);
          if (lang() === 'en') applyPros();
        };
        window.switchTab._footerI18n = true;
      }
    }
    function detectPage() {
      const path = (location.pathname.split('/').pop() || '').toLowerCase();
      if (path === 'boutiques.html') return 'boutiques';
      if (path === 'univers.html') return 'univers';
      if (path.startsWith('categorie')) return 'categorie';
      if (path === 'pour-les-pros.html') return 'pros';
      if (path === 'pour-tous.html') return 'public';
      if (path === 'groupe.html') return 'group';
      return '';
    }
    function init() {
      const page = document.body.dataset.footerPage || detectPage();
      if (page === 'categorie') renderCategoryPage();
      if (lang() !== 'en') return;
      document.documentElement.lang = 'en';
      applyNav();
      applyFooter();
      if (page === 'boutiques') applyBoutiques();
      if (page === 'univers') applyUnivers();
      if (page === 'categorie') applyCategories();
      patchProsSpa();
      if (page === 'pros') applyPros();
    }
    window.FooterI18n = {
      lang,
      t,
      dict,
      init,
      applyNav,
      applyFooter,
      applyPros,
      applyReplacements,
      applyAttributeReplacements,
      renderCategoryPage,
    };
    function boot() {
      init();
      window.addEventListener('load', () => {
        patchProsSpa();
        if ((document.body.dataset.footerPage || detectPage()) === 'pros' && lang() === 'en') {
          applyPros();
        }
      });
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', boot);
    } else {
      boot();
    }
  })();
})();
