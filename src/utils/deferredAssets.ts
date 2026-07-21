const SECONDARY_FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&family=Lexend:wght@400;500;600;700&display=swap';

let deferredAssetsStarted = false;

function injectStylesheet(href: string, id: string): void {
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

function injectScript(src: string, id: string): void {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.src = src;
  script.defer = true;
  document.body.appendChild(script);
}

function loadDeferredAssets(): void {
  if (deferredAssetsStarted) return;
  deferredAssetsStarted = true;
  injectStylesheet(SECONDARY_FONTS_HREF, 'skoleom-secondary-fonts');
}

/** Charge fonts secondaires, content.css et content.js après le premier rendu. */
export function initDeferredAssets(): void {
  if (typeof window === 'undefined') return;

  const run = () => loadDeferredAssets();
  const idle = window.requestIdleCallback;

  if (typeof idle === 'function') {
    idle(run, { timeout: 2500 });
    return;
  }

  window.addEventListener('load', run, { once: true });
}

/** Charge GTM après consent mode (snippet minimal reste dans index.html). */
export function initDeferredGtm(gtmId: string): void {
  if (typeof window === 'undefined' || document.getElementById('skoleom-gtm')) return;

  const load = () => {
    if (document.getElementById('skoleom-gtm')) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    const script = document.createElement('script');
    script.id = 'skoleom-gtm';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);
  };

  const idle = window.requestIdleCallback;

  if (typeof idle === 'function') {
    idle(load, { timeout: 3000 });
    return;
  }

  window.addEventListener('load', load, { once: true });
}
