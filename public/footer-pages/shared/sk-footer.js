/** AUTO-GENERATED — source: footer-pages/src/ — npm run footer:build */
(() => {
  // footer-pages/src/sk-footer.ts
  (function () {
    const MQ = window.matchMedia('(max-width: 991px)');
    function setPanelState(col, open) {
      const btn = col.querySelector('.sk-footer-column__toggle');
      const panel = col.querySelector('.sk-footer-column__panel');
      const chevron = col.querySelector('.sk-footer-column__chevron');
      if (!btn || !panel) return;
      panel.hidden = !open;
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (chevron) chevron.classList.toggle('is-open', open);
    }
    function bindColumn(col) {
      if (col.dataset.skFooterBound === '1') return;
      col.dataset.skFooterBound = '1';
      const btn = col.querySelector('.sk-footer-column__toggle');
      if (!btn) return;
      btn.addEventListener('click', () => {
        if (!MQ.matches) return;
        const panel = col.querySelector('.sk-footer-column__panel');
        if (!panel) return;
        setPanelState(col, panel.hidden);
      });
    }
    function syncAll() {
      document.querySelectorAll('[data-footer-column]').forEach((col) => {
        bindColumn(col);
        setPanelState(col, !MQ.matches);
      });
    }
    function init() {
      syncAll();
      if (MQ.addEventListener) MQ.addEventListener('change', syncAll);
      else MQ.addListener(syncAll);
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();
})();
