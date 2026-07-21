/** AUTO-GENERATED — source: footer-pages/src/ — npm run footer:build */
(() => {
  // footer-pages/src/hub-header.ts
  window.HubHeader = {
    universeUrl: '/',
    hubBase: '/footer-pages',
    hubPage(file) {
      if (!file || file === '/') return '/';
      if (file.startsWith('/')) return file;
      const q = file.indexOf('?');
      const path = q === -1 ? file : file.slice(0, q);
      const query = q === -1 ? '' : file.slice(q);
      return `${this.hubBase}/${path}${query}`;
    },
    /** Mêmes items que la nav du site principal (Header.tsx — NAV_ITEMS). */
    MAIN: [
      { id: 'home', label: 'Accueil', href: '/' },
      { id: 'boutiques', label: 'Boutiques audiovisuelles', href: '/footer-pages/boutiques.html' },
      { id: 'public', label: 'Pour tous', href: '/footer-pages/pour-tous.html' },
      { id: 'pros', label: 'Pour les Pros', href: '/footer-pages/pour-les-pros.html' },
      { id: 'news', label: 'Actualit\xE9s', href: '/en-construction/actualites' },
      { id: 'events', label: '\xC9v\xE9nements', href: '/en-construction/events' },
      { id: 'group', label: 'Groupe', href: '/footer-pages/groupe.html' },
      { id: 'search', label: 'Recherche', href: '/search' },
      { id: 'support', label: 'Assistance', href: '/footer-pages/assistance.html' },
    ],
    detectActive() {
      const path = (location.pathname.split('/').pop() || '').toLowerCase();
      const page = new URLSearchParams(location.search).get('page');
      if (!path || path === 'pour-les-pros.html' || path === 'index.html') return 'pros';
      if (
        path.startsWith('a-propos') ||
        [
          'mission.html',
          'technologie.html',
          'brevets.html',
          'ecosysteme.html',
          'ecosystem.html',
          'financement.html',
          'a-propos-de-skoleom.html',
        ].includes(path)
      )
        return 'about';
      if (
        ['boutiques.html', 'univers.html', 'categorie.html'].includes(path) ||
        path.startsWith('categorie-')
      )
        return 'boutiques';
      if (
        [
          'pour-tous.html',
          'comment-ca-marche.html',
          'regarder-acheter.html',
          'cashback.html',
          'wallet.html',
          'securite.html',
        ].includes(path)
      )
        return 'public';
      if (
        [
          'groupe.html',
          'actualites.html',
          'carrieres.html',
          'investisseurs.html',
          'contact.html',
        ].includes(path)
      )
        return 'group';
      if (page) return 'pros';
      return '';
    },
    pillLink(item, active) {
      const cls = ['hub-pill-link', item.id === active ? 'active' : ''].filter(Boolean).join(' ');
      return `<a class="${cls}" href="${item.href}" data-hub-nav="${item.id}">${item.label}</a>`;
    },
    menuSvg(size, color) {
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="${color}" stroke-width="1.5"/></svg>`;
    },
    logoHtml(brand, height = 32) {
      const src =
        brand === 'business' ? '/logo/skoleom-business.webp' : '/logo/logo-skoleom-brand.webp';
      const alt = brand === 'business' ? 'Skoleom Business' : 'Skoleom';
      return `<img src="${src}" alt="${alt}" class="sk-brand-img sk-brand-img--${brand}" height="${height}" loading="eager" decoding="async"/>`;
    },
    render(opts) {
      const active = opts.active || this.detectActive();
      const logoBrand = opts.logoBrand || 'universe';
      const logoHref = opts.logoHref || '/';
      const logoOnclick =
        opts.logoBrand === 'business'
          ? ` onclick="if(typeof showPage==='function'){showPage('home');return false;}"`
          : '';
      const pills = this.MAIN.map((item) => this.pillLink(item, active)).join('');
      return `<header class="hub-shell" id="hub-header">
  <div class="hub-top">
    <div class="hub-top-inner">
    <div class="hub-top-brand">
      <a href="${logoHref}" class="hub-logo" aria-label="Skoleom"${logoOnclick}>
        ${this.logoHtml(logoBrand, 32)}
      </a>
    </div>
    <div class="hub-top-actions">
      <div class="hub-top-lang"><div class="hub-lang" data-hub-lang data-hub-lang-placement="header"></div></div>
      <button type="button" class="hub-mbtn" id="hub-mbtn" aria-label="Menu navigation" aria-expanded="false">
        ${this.menuSvg(22, '#F2F2F2')}
      </button>
    </div>
    </div>
  </div>
  <div class="hub-pill-wrap">
    <nav class="hub-pill-nav" role="navigation" aria-label="Navigation principale">${pills}</nav>
  </div>
  <nav class="hub-mobile-nav" id="hub-mobile-nav" aria-label="Navigation mobile" hidden></nav>
</header>`;
    },
    fillMobileNav() {
      const pillNav = document.querySelector('.hub-pill-nav');
      const panel = document.getElementById('hub-mobile-nav');
      if (!pillNav || !panel || panel.dataset.hubFilled === '1') return;
      panel.innerHTML = pillNav.innerHTML;
      panel.dataset.hubFilled = '1';
    },
    normalizeHubLinks(root = document) {
      root.querySelectorAll('a[href]').forEach((anchor) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '/' || href.startsWith('/footer-pages/') || /^https?:\/\//.test(href))
          return;
        if (href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('shared/'))
          return;
        if (href.includes('.html')) anchor.setAttribute('href', this.hubPage(href));
      });
      const mount = document.getElementById('hub-header-mount');
      if (mount?.dataset.hubLogoHref) {
        mount.dataset.hubLogoHref = this.hubPage(mount.dataset.hubLogoHref);
      }
    },
    bindMobile() {
      this.fillMobileNav();
      const btn = document.getElementById('hub-mbtn');
      const panel = document.getElementById('hub-mobile-nav');
      if (!btn || !panel || btn.dataset.hubMobileBound === '1') return;
      btn.dataset.hubMobileBound = '1';
      const toggleMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const open = !panel.classList.contains('open');
        panel.classList.toggle('open', open);
        panel.hidden = !open;
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      };
      btn.addEventListener('click', toggleMenu);
      panel.querySelectorAll('a').forEach((el) => {
        if (el.dataset.hubMobileLinkBound === '1') return;
        el.dataset.hubMobileLinkBound = '1';
        el.addEventListener('click', () => {
          panel.classList.remove('open');
          panel.hidden = true;
          btn.setAttribute('aria-expanded', 'false');
        });
      });
    },
    bindAll() {
      this.normalizeHubLinks();
      if (document.body.dataset.hubHeaderBound !== '1') {
        document.body.dataset.hubHeaderBound = '1';
        this.bindMobile();
        if (window.HubLang) HubLang.init();
      }
    },
    mount(target, opts = {}) {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (!el) return;
      el.outerHTML = this.render(opts);
      document.body.classList.add('hub-has-nav');
      if (window.SkLogos) SkLogos.injectAll();
      if (window.SkIcons) SkIcons.injectAll();
      this.bindAll();
    },
    mountFromDataAttributes() {
      if (document.getElementById('hub-header')) {
        document.body.classList.add('hub-has-nav');
        this.bindAll();
        return;
      }
      const el = document.getElementById('hub-header-mount');
      if (!el) return;
      this.mount(el, {
        active: el.dataset.hubActive || void 0,
        logoBrand: el.dataset.hubLogo || 'universe',
        logoHref: el.dataset.hubLogoHref || '/',
      });
    },
    bindEmbedNav() {
      if (document.body.dataset.hubEmbedNavBound === '1') return;
      document.body.dataset.hubEmbedNavBound = '1';
      const toTopUrl = (u) => {
        if (u.origin !== location.origin) return u.href;
        if (u.pathname.startsWith('/footer-pages/') && u.pathname.endsWith('.html')) {
          const slug = u.pathname.slice('/footer-pages/'.length).replace(/\.html$/, '');
          const params = new URLSearchParams(u.search);
          params.delete('embed');
          const qs = params.toString();
          return `/hub/${slug}${qs ? `?${qs}` : ''}${u.hash || ''}`;
        }
        return u.pathname + u.search + u.hash;
      };
      document.addEventListener('click', (e) => {
        if (
          e.defaultPrevented ||
          e.button !== 0 ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey
        )
          return;
        const target = e.target;
        const anchor = target && target.closest ? target.closest('a[href]') : null;
        if (!anchor) return;
        if (
          anchor.target === '_blank' ||
          anchor.hasAttribute('download') ||
          anchor.hasAttribute('onclick')
        )
          return;
        const href = anchor.getAttribute('href');
        if (!href || href.startsWith('#') || /^(mailto:|tel:|javascript:)/i.test(href)) return;
        let url;
        try {
          url = new URL(href, location.href);
        } catch {
          return;
        }
        e.preventDefault();
        const top = window.top || window;
        top.location.href = toTopUrl(url);
      });
    },
    init() {
      if (document.body.dataset.hubHeaderInit === '1') return;
      document.body.dataset.hubHeaderInit = '1';
      const params = new URLSearchParams(location.search);
      const isEmbed = params.get('embed') === '1';
      if (isEmbed) {
        document.getElementById('hub-header')?.remove();
        document.querySelector('footer.sk-footer')?.remove();
        document.getElementById('sk-footer-mount')?.remove();
        document.body.classList.remove('hub-has-nav');
        document.body.classList.add('hub-embed');
        this.bindEmbedNav();
        return;
      }
      const nested = location.pathname.match(/\/footer-pages\/(.+?)\.html$/i);
      const page = (
        nested ? nested[1] : (location.pathname.split('/').pop() || '').replace(/\.html$/, '')
      ).toLowerCase();
      if (page && page !== 'index') {
        const qs = params.toString();
        const target = `/hub/${page}${qs ? `?${qs}` : ''}${location.hash || ''}`;
        try {
          if (window.top && window.top !== window.self) {
            window.top.location.replace(target);
            return;
          }
        } catch {}
        location.replace(target);
        return;
      }
      this.mountFromDataAttributes();
    },
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => HubHeader.init());
  } else {
    HubHeader.init();
  }
})();
