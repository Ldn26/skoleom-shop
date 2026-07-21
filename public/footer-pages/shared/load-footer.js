/** AUTO-GENERATED — source: footer-pages/src/ — npm run footer:build */
(() => {
  // footer-pages/src/load-footer.ts
  async function skLoadFooter(targetId, fragment) {
    const mount = document.getElementById(targetId);
    if (!mount) return;
    try {
      const res = await fetch(fragment);
      mount.innerHTML = await res.text();
      if (window.SkIcons) window.SkIcons.injectAll();
    } catch {}
  }
  window.skLoadFooter = skLoadFooter;
})();
