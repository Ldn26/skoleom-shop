/** AUTO-GENERATED — source: footer-pages/src/ — npm run footer:build */
(() => {
  // footer-pages/src/sk-logos.ts
  window.SkLogos = {
    brand: {
      universe: '/logo/logo-skoleom-brand.webp',
      business: '/logo/skoleom-business.webp',
      mark: '/logo/logo-skoleom.webp',
      audiovisual: '/logo/logo-audiovisual-store.webp',
      sesync: '/logo/sesync.webp',
      watchTouchBuy: '/logo/logo-watch-touch-buy.webp',
      the25x: '/logo/the25x.webp',
      shop: '/logo/Skoleom%20Shop.webp',
      magazine: '/logo/Skoleom%20Magazine%20Light.webp',
      invest: '/logo/LOGO%20SKOLEOM%20INVEST%20.png',
      studio: '/logo/skoleom-studio.webp',
      sky: '/logo/sky-avatar.png',
    },
    stores: {
      'sport-elite': '/logo/sesports.webp',
      sesports: '/logo/sesports.webp',
      cares: '/logo/boutique/Skoleom%20Cares%20Blue.webp',
      'music-wave': '/logo/boutique/Skoleom%20Music%20Blue.webp',
      music: '/logo/boutique/Skoleom%20Music%20Blue.webp',
      'fashion-av': '/logo/Skoleom%20Shop.webp',
      gaming: '/logo/boutique/Skoleom%20Game%20Orange.svg',
      games: '/logo/boutique/Skoleom%20Game%20Orange.svg',
      films: '/logo/boutique/Watch%20on%20Skoleom%20White.webp',
      watch: '/logo/boutique/Watch%20on%20Skoleom%20White.webp',
      tech: '/logo/sesync.webp',
      services: '/logo/boutique/Skoleom%20Services%20Text.webp',
      food: '/logo/boutique/Skoleom%20Food%20Beverage%20Orange.webp',
      fnb: '/logo/boutique/Skoleom%20Food%20Beverage%20Orange.webp',
      invest: '/logo/LOGO%20SKOLEOM%20INVEST%20.png',
      travel: '/logo/skoleom-travel.webp',
      realestate: '/logo/Skoleom%20Real%20Estate%20WhiteC.png',
      publishing: '/logo/Skoleom%20Magazine%20Light.webp',
    },
    categories: {
      sport: '/logo/sesports.webp',
      music: '/logo/boutique/Skoleom%20Music%20Blue.webp',
      mode: '/logo/Skoleom%20Shop.webp',
      films: '/logo/boutique/Watch%20on%20Skoleom%20White.webp',
      gaming: '/logo/boutique/Skoleom%20Game%20Orange.svg',
      tech: '/logo/sesync.webp',
      food: '/logo/boutique/Skoleom%20Food%20Beverage%20Orange.webp',
      health: '/logo/boutique/Skoleom%20Cares%20Blue.webp',
      travel: '/logo/skoleom-travel.webp',
      home: '/logo/SkoleomRealEstate.webp',
    },
    solutions: {
      monetiser: '/logo/sesync.webp',
      boutique: '/logo/logo-audiovisual-store.webp',
      sponsor: '/logo/skoleom-events.webp',
      distribuer: '/logo/Skoleom%20Retailers%20Light.png',
      ads: '/logo/skoleom-pulse.webp',
      api: '/logo/skoleom-studio.webp',
      tarifs: '/logo/SkoleomInvest.webp',
      contact: '/logo/sky-avatar.png',
    },
    platforms: {
      netflix: '/logo/platforms/netflix.svg',
      disney: '/logo/platforms/disney-plus.webp',
      amazon: '/logo/platforms/amazon.svg',
      youtube: '/logo/platforms/youtube.svg',
      tiktok: '/logo/platforms/tiktok.svg',
      spotify: '/logo/platforms/spotify.svg',
      twitch: '/logo/platforms/twitch.svg',
    },
    /** Visuels boutiques (`public/shop/boutiques/` + compléments pour tous). */
    shopCovers: {
      'sport-elite': '/shop/boutiques/SeSports.webp',
      sport: '/shop/boutiques/SeSports.webp',
      sesports: '/shop/boutiques/SeSports.webp',
      cares: '/shop/boutiques/cares.webp',
      'music-wave': '/shop/boutiques/Music.webp',
      music: '/shop/boutiques/Music.webp',
      'fashion-av': '/shop/pour%20tous/shop.webp',
      mode: '/shop/pour%20tous/shop.webp',
      gaming: '/shop/boutiques/games.webp',
      games: '/shop/boutiques/games.webp',
      films: '/shop/boutiques/watchon.webp',
      watch: '/shop/boutiques/watchon.webp',
      tech: '/shop/boutiques/services.webp',
      services: '/shop/boutiques/services.webp',
      food: '/shop/boutiques/foodAndbeverage.webp',
      fnb: '/shop/boutiques/foodAndbeverage.webp',
      invest: '/shop/boutiques/invest.webp',
      travel: '/shop/boutiques/travel.webp',
      realestate: '/shop/boutiques/realestate.webp',
      publishing: '/shop/boutiques/publishing.webp',
    },
    img(src, height, alt, extraClass, fixedSize = false) {
      if (!src) return '';
      const cls = ['sk-brand-img', extraClass].filter(Boolean).join(' ');
      const sizeAttr = fixedSize ? '' : ` height="${height}"`;
      return `<img src="${src}" alt="${alt || 'Skoleom'}" class="${cls}"${sizeAttr} loading="lazy" decoding="async"/>`;
    },
    renderBrand(key, height = 32) {
      const src = this.brand[key] || this.brand.universe;
      const alt = key === 'business' ? 'Skoleom Business' : 'Skoleom Universe';
      return this.img(src, height, alt, `sk-brand-img--${key}`);
    },
    renderStore(key, height = 48, watermark = false, fixedSize = false) {
      const src = this.stores[key] || this.categories[key] || this.brand.audiovisual;
      const extra = [
        'sk-brand-img--store',
        watermark ? 'sk-brand-img--watermark' : '',
        fixedSize ? 'sk-brand-img--fixed' : '',
      ]
        .filter(Boolean)
        .join(' ');
      const imgHtml = this.img(src, height, 'Skoleom', extra, fixedSize);
      return watermark
        ? `<span class="sk-shop-watermark" aria-hidden="true">${imgHtml}</span>`
        : imgHtml;
    },
    renderCategory(key, height = 48, watermark = false) {
      const src = this.categories[key] || this.brand.audiovisual;
      const extra = watermark
        ? 'sk-brand-img--category sk-brand-img--watermark'
        : 'sk-brand-img--category';
      const imgHtml = this.img(src, height, 'Skoleom', extra);
      return watermark
        ? `<span class="sk-shop-watermark" aria-hidden="true">${imgHtml}</span>`
        : imgHtml;
    },
    renderSolution(key, height = 40) {
      const src = this.solutions[key] || this.brand.sesync;
      return this.img(src, height, 'Skoleom', 'sk-brand-img--solution');
    },
    renderPlatform(key, height = 18) {
      const src = this.platforms[key];
      if (!src) return '';
      return this.img(src, height, key, 'sk-brand-img--platform');
    },
    renderShopCover(key, alt) {
      const src =
        this.shopCovers[key] || this.shopCovers['sport-elite'] || '/shop/boutiques/SeSports.webp';
      return `<img src="${src}" alt="${alt || 'Skoleom boutique'}" class="sk-shop-cover" loading="lazy" decoding="async"/>`;
    },
    injectAll() {
      document.querySelectorAll('[data-sk-brand]').forEach((el) => {
        const key = el.getAttribute('data-sk-brand');
        const height = +(el.getAttribute('data-sk-height') || 32);
        el.innerHTML = this.renderBrand(key, height);
      });
      document.querySelectorAll('[data-sk-store]').forEach((el) => {
        const key = el.getAttribute('data-sk-store');
        const height = +(el.getAttribute('data-sk-height') || 48);
        const watermark = el.hasAttribute('data-sk-watermark');
        const fixedSize =
          el.classList.contains('sc-name') ||
          el.classList.contains('sm-name') ||
          el.classList.contains('uc-name');
        el.innerHTML = this.renderStore(key, height, watermark, fixedSize);
      });
      document.querySelectorAll('[data-sk-category-logo]').forEach((el) => {
        const key = el.getAttribute('data-sk-category-logo');
        const height = +(el.getAttribute('data-sk-height') || 48);
        const watermark = el.hasAttribute('data-sk-watermark');
        el.innerHTML = this.renderCategory(key, height, watermark);
      });
      document.querySelectorAll('[data-sk-solution]').forEach((el) => {
        const key = el.getAttribute('data-sk-solution');
        const height = +(el.getAttribute('data-sk-height') || 40);
        el.innerHTML = this.renderSolution(key, height);
      });
      document.querySelectorAll('[data-sk-platform]').forEach((el) => {
        const key = el.getAttribute('data-sk-platform');
        const height = +(el.getAttribute('data-sk-height') || 18);
        el.innerHTML = this.renderPlatform(key, height);
      });
      document.querySelectorAll('[data-sk-shop-cover]').forEach((el) => {
        const key = el.getAttribute('data-sk-shop-cover');
        el.innerHTML = this.renderShopCover(key);
      });
    },
  };
  document.addEventListener('DOMContentLoaded', () => {
    if (window.SkLogos) SkLogos.injectAll();
    if (window.SkIcons) SkIcons.injectAll();
  });
})();
