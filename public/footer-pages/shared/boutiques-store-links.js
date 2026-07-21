/**
 * Liens des boutiques officielles — URL réelle si connue, sinon page en construction.
 * Partagé par boutiques.html et hub-boutique-carousel.js.
 */
(function (root) {
  const UNDER_CONSTRUCTION = '/en-construction';

  /** id / openId → URL publique officielle */
  const REAL_URLS = {
    sesports: 'https://sesports.skoleom.com/',
    watch: 'https://watchon.skoleom.com/',
    publishing: 'https://page.skoleom.com/',
  };

  function resolve(id, fallbackHref) {
    const key = String(id || '').toLowerCase();
    const href =
      REAL_URLS[key] || (fallbackHref && /^https?:\/\//i.test(fallbackHref) ? fallbackHref : null);
    if (href) return { href, external: true };
    return { href: UNDER_CONSTRUCTION, external: false };
  }

  function topWindow() {
    try {
      return window.top && window.top !== window ? window.top : window;
    } catch (_e) {
      return window;
    }
  }

  function navigate(id, fallbackHref) {
    const link = resolve(id, fallbackHref);
    const top = topWindow();
    if (link.external) {
      top.open(link.href, '_blank', 'noopener,noreferrer');
      return;
    }
    top.location.href = link.href;
  }

  root.SkBoutiqueStoreLinks = {
    UNDER_CONSTRUCTION,
    REAL_URLS,
    resolve,
    navigate,
  };
})(typeof window !== 'undefined' ? window : globalThis);
