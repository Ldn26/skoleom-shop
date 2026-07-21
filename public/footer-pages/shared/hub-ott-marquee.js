/** AUTO-GENERATED — source: footer-pages/src/ — npm run footer:build */
(() => {
  // footer-pages/src/hub-ott-marquee.ts
  (function () {
    const COPIES = 3;
    const ITEMS = [
      { type: 'img', src: '/logo/platforms/netflix.svg', alt: 'Netflix', h: 28 },
      { type: 'img', src: '/maquette/ott-prime-video.svg', alt: 'Prime Video', h: 24 },
      { type: 'img', src: '/maquette/ott-youtube.svg', alt: 'YouTube', h: 36, maxW: 34 },
      { type: 'img', src: '/logo/platforms/amazon.svg', alt: 'Amazon', h: 24 },
      { type: 'img', src: '/maquette/ott-dazn.svg', alt: 'DAZN', h: 20 },
      { type: 'img', src: '/maquette/ott-tiktok.svg', alt: 'TikTok', h: 24 },
      { type: 'img', src: '/maquette/ott-twitch.svg', alt: 'Twitch', h: 36, maxW: 28 },
      { type: 'text', label: '+2 000 OTT' },
    ];
    function itemHtml(item) {
      if (item.type === 'text') {
        return `<span class="hub-ott-marquee__text">${item.label}</span>`;
      }
      const max = item.maxW ? ` max-width:${item.maxW}px;` : '';
      return `<img src="${item.src}" alt="${item.alt}" class="hub-ott-marquee__logo" style="height:${item.h}px;${max}" loading="eager" decoding="async"/>`;
    }
    function stripHtml() {
      return `<div class="hub-ott-marquee__strip">${ITEMS.map(itemHtml).join('')}</div>`;
    }
    function mount(root) {
      if (!root || root.dataset.hubOttMounted === '1') return;
      root.dataset.hubOttMounted = '1';
      const strips = Array.from({ length: COPIES }, () => stripHtml()).join('');
      root.innerHTML = `<div class="hub-ott-marquee__viewport"><div class="hub-ott-marquee__track">${strips}</div></div>`;
    }
    function init() {
      document.querySelectorAll('[data-hub-ott-marquee]').forEach(mount);
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();
})();
