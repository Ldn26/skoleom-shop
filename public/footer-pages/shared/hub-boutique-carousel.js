/**
 * Carrousel boutiques hub — port vanilla de BoutiqueMarqueeCarousel (accueil).
 * Défilement auto bidirectionnel, 4× boucle, mêmes visuels carrousel-boutique + logos.
 */
(() => {
  const LOOP_COPIES = 4;
  const SPEED_PX_PER_FRAME = 0.55;
  const INTERACTION_PAUSE_MS = 2800;

  const CAROUSEL_BACKGROUNDS = [
    '/carrousel-boutique/jaune.webp',
    '/carrousel-boutique/vert.webp',
    '/carrousel-boutique/bleu.webp',
    '/carrousel-boutique/beige.webp',
    '/carrousel-boutique/givre.webp',
    '/carrousel-boutique/orange.webp',
    '/carrousel-boutique/rose.webp',
    '/carrousel-boutique/rouge.webp',
    '/carrousel-boutique/vert-fonce.webp',
    '/carrousel-boutique/violet.webp',
  ];

  const LOGO_DIR = '/logo/boutique';
  const DEFAULT_LOGO = '/logo/sesports.webp';

  const BRAND_LOGOS = {
    cares: `${LOGO_DIR}/Skoleom%20Cares%20Blue.webp`,
    games: `${LOGO_DIR}/Skoleom%20Game%20Orange.svg`,
    invest: '/logo/SkoleomInvest.webp',
    travel: `${LOGO_DIR}/Skoleom%20Travel%20Red.webp`,
    music: `${LOGO_DIR}/Skoleom%20Music%20Blue.webp`,
    'real-estate': '/logo/Skoleom%20Real%20Estate.webp',
    services: `${LOGO_DIR}/Skoleom%20Services%20Text.webp`,
    'food-beverage': `${LOGO_DIR}/Skoleom%20Food%20Beverage%20Orange.webp`,
    watch: `${LOGO_DIR}/Watch%20on%20Skoleom%20White.webp`,
    publishing: '/logo/Skoleom%20Magazine%20Light.webp',
    sesports: DEFAULT_LOGO,
  };

  const LOGO_SLOT_MODIFIERS = {
    invest: 'invest',
    services: 'services',
    'food-beverage': 'food-beverage',
    'real-estate': 'real-estate',
  };

  const LOGO_IMG_MODIFIERS = {
    'real-estate': 'real-estate',
  };

  /** Clés openId → modificateurs logo (aligné sk-logos / page boutiques). */
  const OPEN_ID_MODIFIER_KEY = {
    fnb: 'food-beverage',
    realestate: 'real-estate',
  };

  /** Repli si SkLogos n'est pas encore chargé (même chemins que sk-logos.js). */
  const SHOP_COVERS_FALLBACK = {
    sesports: '/shop/boutiques/SeSports.webp',
    cares: '/shop/boutiques/cares.webp',
    games: '/shop/boutiques/games.webp',
    invest: '/shop/boutiques/invest.webp',
    services: '/shop/boutiques/services.webp',
    fnb: '/shop/boutiques/foodAndbeverage.webp',
    travel: '/shop/boutiques/travel.webp',
    music: '/shop/boutiques/Music.webp',
    watch: '/shop/boutiques/watchon.webp',
    realestate: '/shop/boutiques/realestate.webp',
    publishing: '/shop/boutiques/publishing.webp',
  };

  const STORE_LOGOS_FALLBACK = {
    sesports: '/logo/sesports.webp',
    cares: '/logo/boutique/Skoleom%20Cares%20Blue.webp',
    games: '/logo/boutique/Skoleom%20Game%20Orange.svg',
    invest: '/logo/SkoleomInvest.webp',
    services: '/logo/boutique/Skoleom%20Services%20Text.webp',
    fnb: '/logo/boutique/Skoleom%20Food%20Beverage%20Orange.webp',
    travel: '/logo/skoleom-travel.webp',
    music: '/logo/boutique/Skoleom%20Music%20Blue.webp',
    watch: '/logo/boutique/Watch%20on%20Skoleom%20White.webp',
    realestate: '/logo/Skoleom%20Real%20Estate%20WhiteC.png',
    publishing: '/logo/Skoleom%20Magazine%20Light.webp',
  };

  function modifierKey(item) {
    const openKey = item.openId || item.id;
    return OPEN_ID_MODIFIER_KEY[openKey] || item.id;
  }

  function resolveShopAssets(item) {
    const key = item.openId || item.id;
    const logos = window.SkLogos;
    const modKey = modifierKey(item);
    return {
      bgSrc:
        logos?.shopCovers?.[key] || SHOP_COVERS_FALLBACK[key] || '/shop/boutiques/SeSports.webp',
      logoSrc:
        logos?.stores?.[key] ||
        STORE_LOGOS_FALLBACK[key] ||
        logos?.brand?.audiovisual ||
        '/logo/logo-audiovisual-store.webp',
      logoSlot: LOGO_SLOT_MODIFIERS[modKey] || '',
      logoImg: LOGO_IMG_MODIFIERS[modKey] || '',
    };
  }

  /** Jeu « accueil » — 9 boutiques AV (carrouselBoutique.ts). */
  const HOME_ITEMS = [
    {
      id: 'cares',
      label: 'Skoleom Cares',
      href: '/store/cares',
      openId: 'cares',
    },
    {
      id: 'sesports',
      label: 'Skoleom SeSports',
      href: 'https://sesports.skoleom.com/',
      external: true,
      openId: 'sesports',
    },
    {
      id: 'games',
      label: 'Skoleom Games',
      href: '/store/games',
      openId: 'games',
    },
    {
      id: 'invest',
      label: 'Skoleom Invest',
      href: '/store/invest',
      openId: 'invest',
    },
    {
      id: 'services',
      label: 'Skoleom Services',
      href: '/store/services',
      openId: 'services',
    },
    {
      id: 'food-beverage',
      label: 'Skoleom Food & Beverage',
      href: '/store/food-beverage',
      openId: 'fnb',
    },
    {
      id: 'travel',
      label: 'Skoleom Travel',
      href: '/store/travel',
      openId: 'travel',
    },
    {
      id: 'music',
      label: 'Skoleom Music',
      href: '/store/music',
      openId: 'music',
    },
    {
      id: 'real-estate',
      label: 'Skoleom Real Estate',
      href: '/store/real-estate',
      openId: 'realestate',
    },
  ];

  /** Toutes les boutiques officielles (page boutiques.html). */
  const AV_OFFICIAL_ITEMS = [
    {
      id: 'sesports',
      label: 'Skoleom SeSports',
      href: 'https://sesports.skoleom.com/',
      external: true,
      openId: 'sesports',
    },
    {
      id: 'cares',
      label: 'Skoleom Cares',
      href: '/store/cares',
      openId: 'cares',
    },
    {
      id: 'games',
      label: 'Skoleom Games',
      href: '/store/games',
      openId: 'games',
    },
    {
      id: 'invest',
      label: 'Skoleom Invest',
      href: '/store/invest',
      openId: 'invest',
    },
    {
      id: 'services',
      label: 'Skoleom Services',
      href: '/store/services',
      openId: 'services',
    },
    {
      id: 'food-beverage',
      label: 'Skoleom Food & Beverage',
      href: '/stores',
      openId: 'fnb',
    },
    {
      id: 'travel',
      label: 'Skoleom Travel',
      href: '/store/travel',
      openId: 'travel',
    },
    {
      id: 'music',
      label: 'Skoleom Music',
      href: '/store/music',
      openId: 'music',
    },
    {
      id: 'watch',
      label: 'Watch on Skoleom',
      href: '/store/watch',
      openId: 'watch',
    },
    {
      id: 'real-estate',
      label: 'Skoleom Real Estate',
      href: '/store/real-estate',
      openId: 'realestate',
    },
    {
      id: 'publishing',
      label: 'Skoleom Publishing',
      href: '/store/publishing',
      openId: 'publishing',
    },
  ];

  const DATASETS = {
    home: HOME_ITEMS,
    'av-official': AV_OFFICIAL_ITEMS,
  };

  function prefersReducedMotion() {
    return (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }

  function applyStoreLinks(items) {
    const resolver = window.SkBoutiqueStoreLinks;
    if (!resolver) return items;
    return items.map((item) => {
      const resolved = resolver.resolve(item.openId || item.id, item.href);
      return {
        ...item,
        href: resolved.href,
        external: Boolean(resolved.external),
      };
    });
  }

  function withAssets(items, visual = 'home') {
    return items.map((item, index) => {
      if (visual === 'shop') {
        return {
          ...item,
          ...resolveShopAssets(item),
          visual: 'shop',
          carouselKey: `${item.id}-${index}`,
        };
      }
      return {
        ...item,
        bgSrc: CAROUSEL_BACKGROUNDS[index % CAROUSEL_BACKGROUNDS.length],
        logoSrc: BRAND_LOGOS[item.id] || DEFAULT_LOGO,
        logoSlot: LOGO_SLOT_MODIFIERS[item.id] || '',
        logoImg: LOGO_IMG_MODIFIERS[item.id] || '',
        visual: 'home',
        carouselKey: `${item.id}-${index}`,
      };
    });
  }

  function createCard(item, exploreLabel, onItemClick) {
    const card = document.createElement('a');
    card.className =
      item.visual === 'shop' ? 'sk-hub-bq-card sk-hub-bq-card--shop' : 'sk-hub-bq-card';
    card.href = item.href;
    if (item.external) {
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
    } else {
      card.target = '_top';
    }
    card.setAttribute('aria-label', `Skoleom — ${item.label}`);

    const slotClass = item.logoSlot ? ` sk-hub-bq-card__logo-slot--${item.logoSlot}` : '';
    const imgClass = item.logoImg ? ` sk-hub-bq-card__logo--${item.logoImg}` : '';

    card.innerHTML =
      '<div class="sk-hub-bq-card__media">' +
      `<img class="sk-hub-bq-card__bg" src="${item.bgSrc}" alt="" aria-hidden="true" loading="lazy" decoding="async" />` +
      '<div class="sk-hub-bq-card__shade" aria-hidden="true"></div>' +
      `<div class="sk-hub-bq-card__logo-slot${slotClass}">` +
      `<img class="sk-hub-bq-card__logo${imgClass}" src="${item.logoSrc}" alt="${item.label}" loading="lazy" decoding="async" />` +
      '</div></div>' +
      '<div class="sk-hub-bq-card__cta-wrap">' +
      `<span class="sk-hub-bq-card__cta">${exploreLabel}</span>` +
      '</div>';

    if (typeof onItemClick === 'function') {
      card.addEventListener('click', (event) => {
        event.preventDefault();
        onItemClick(item);
      });
    }

    return card;
  }

  function initAutoMarquee(scroller, { enabled = true } = {}) {
    let rafId = 0;
    let normalizeRafId = 0;
    let paused = false;
    let pauseUntil = 0;
    let destroyed = false;

    const normalizeBidirectionalScroll = () => {
      const segment = scroller.scrollWidth / 4;
      if (segment <= 0) return;
      const buffer = 48;
      if (scroller.scrollLeft < buffer) {
        scroller.scrollLeft += segment * 2;
      } else if (scroller.scrollLeft > segment * 3 + buffer) {
        scroller.scrollLeft -= segment * 2;
      }
    };

    const scheduleNormalize = (event) => {
      if (event && !event.isTrusted) return;
      cancelAnimationFrame(normalizeRafId);
      normalizeRafId = requestAnimationFrame(normalizeBidirectionalScroll);
    };

    const tick = () => {
      if (destroyed) return;
      const half = scroller.scrollWidth / 2;
      const canScroll = half > scroller.clientWidth + 24;
      const respectPause = Date.now() >= pauseUntil;

      if (enabled && !paused && respectPause && canScroll) {
        scroller.scrollLeft += SPEED_PX_PER_FRAME;
        if (scroller.scrollLeft >= half - 2) {
          scroller.scrollLeft -= half;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    const handleInteraction = (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a, button')) {
        pauseUntil = Math.max(pauseUntil, Date.now() + INTERACTION_PAUSE_MS);
        return;
      }
      pauseUntil = Math.max(pauseUntil, Date.now() + INTERACTION_PAUSE_MS);
    };

    if (!prefersReducedMotion()) {
      const half = scroller.scrollWidth / 2;
      if (half > 0) {
        scroller.scrollLeft = half / 2;
      }
      scroller.addEventListener('scroll', scheduleNormalize, { passive: true });
      scroller.addEventListener('touchstart', handleInteraction, { passive: true });
      scroller.addEventListener('touchend', scheduleNormalize, { passive: true });
      scroller.addEventListener('wheel', handleInteraction, { passive: true });
      scroller.addEventListener('pointerdown', handleInteraction);
      if (enabled) {
        rafId = requestAnimationFrame(tick);
      }
    }

    return {
      pause,
      resume,
      destroy() {
        destroyed = true;
        cancelAnimationFrame(rafId);
        cancelAnimationFrame(normalizeRafId);
        scroller.removeEventListener('scroll', scheduleNormalize);
        scroller.removeEventListener('touchstart', handleInteraction);
        scroller.removeEventListener('touchend', scheduleNormalize);
        scroller.removeEventListener('wheel', handleInteraction);
        scroller.removeEventListener('pointerdown', handleInteraction);
      },
    };
  }

  function mount(root, options = {}) {
    if (!root) return null;

    const datasetKey = options.dataset || 'home';
    const rawItems = options.items || DATASETS[datasetKey] || DATASETS.home;
    const visual = options.visual || (datasetKey === 'av-official' ? 'shop' : 'home');
    const items = withAssets(applyStoreLinks(rawItems), visual);
    const exploreLabel = options.exploreLabel || 'Explorer';
    const onItemClick = options.onItemClick;

    root.innerHTML = '';
    root.classList.add('sk-hub-bq-root');

    const scroller = document.createElement('div');
    scroller.className = 'sk-hub-bq-marquee marquee-x-scroll';
    scroller.setAttribute('role', 'region');
    scroller.setAttribute(
      'aria-label',
      options.ariaLabel || 'Carrousel des boutiques audiovisuelles',
    );

    const track = document.createElement('div');
    track.className = 'sk-hub-bq-track';

    for (let copy = 0; copy < LOOP_COPIES; copy += 1) {
      items.forEach((item) => {
        track.appendChild(createCard(item, exploreLabel, onItemClick));
      });
    }

    scroller.appendChild(track);
    root.appendChild(scroller);

    let realControls = null;
    const controls = {
      pause() {
        realControls?.pause();
      },
      resume() {
        if (!realControls) return;
        realControls.resume();
        if (!prefersReducedMotion()) {
          const half = scroller.scrollWidth / 2;
          if (half > 0 && scroller.scrollLeft < 8) {
            scroller.scrollLeft = half / 2;
          }
        }
      },
      destroy() {
        realControls?.destroy();
        root.innerHTML = '';
        root.classList.remove('sk-hub-bq-root');
      },
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!prefersReducedMotion()) {
          const half = scroller.scrollWidth / 2;
          if (half > 0) {
            scroller.scrollLeft = half / 2;
          }
        }
        realControls = initAutoMarquee(scroller, { enabled: options.autoPlay !== false });
      });
    });

    return {
      scroller,
      pause: () => controls.pause(),
      resume: () => controls.resume(),
      destroy: () => controls.destroy(),
    };
  }

  window.SkHubBoutiqueCarousel = {
    mount,
    DATASETS,
    withAssets,
  };
})();
