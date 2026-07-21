/** AUTO-GENERATED — source: footer-pages/src/ — npm run footer:build */
(() => {
  // footer-pages/src/reveal-animations.ts
  (function () {
    const SECTION_SELECTOR = [
      'main > section',
      '#hub-root main > section',
      '.page.show > section',
      'body.hub-has-nav > section',
      'section.phero',
      'section.hero',
      'section.featured',
      'section.universe',
      'section.hiw',
      'section.launch',
      'section.section',
      'section.pros-apl-sec',
      'section.cta-box',
      '.stats-banner',
    ].join(', ');
    const STAGGER_SELECTOR = [
      '.fgrid',
      '.grid3',
      '.hub-content',
      '.hiw-inner',
      '.hiw-steps',
      '.steps',
      '.pcards',
      '.pros-grid-4',
      '.pros-sol-grid',
      '.pros-stats-grid',
      '.pstats',
      '.roi-res',
      '.univ-grid',
      '.stores-hero',
      '.stats-grid',
      '.hero-stats',
    ].join(', ');
    const SOLO_GRID_SELECTOR = '.apl-shell';
    const SOLO_ITEM_SELECTOR =
      ':scope > .apl-feature, :scope .apl-grid > .apl-card, :scope .apl-perks > .apl-perk, :scope .apl-duo > .apl-cta-card';
    const ITEM_SELECTOR = [
      ':scope > .fcard',
      ':scope > .pros-sol-card',
      ':scope > .pros-stat-card',
      ':scope > .card',
      ':scope > .hub-card',
      ':scope > .hub-block',
      ':scope > .sk-reveal-item',
      ':scope > .step',
      ':scope > .pcard',
      ':scope > .sc',
      ':scope > .rcard',
      ':scope > .pstat',
      ':scope > .univ-card',
      ':scope > .store-card',
      ':scope > .stat-item',
      ':scope > .hstat',
      ':scope > .hiw-step',
    ].join(', ');
    const MQ_TABLET = window.matchMedia('(max-width: 1024px)');
    const MQ_MOBILE = window.matchMedia('(max-width: 640px)');
    const MQ_PHONE = window.matchMedia('(max-width: 430px)');
    let observer = null;
    let flushScheduled = false;
    function prefersReducedMotion() {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    function afterPaint(cb) {
      requestAnimationFrame(() => {
        requestAnimationFrame(cb);
      });
    }
    function isRevealable(el) {
      if (!el || el.closest('.sk-footer, .hub-shell, header')) return false;
      const page = el.closest('.page');
      if (page && !page.classList.contains('show')) return false;
      return true;
    }
    function isEmbed() {
      return document.body && document.body.classList.contains('hub-embed');
    }
    function topViewport() {
      // En mode embed, la page est dans une iframe dimensionnée à la hauteur du
      // contenu : son viewport interne « voit » tout le contenu d'un coup. On
      // calcule donc la visibilité par rapport à la fenêtre PARENTE (même origine)
      // pour que chaque bloc n'apparaisse qu'en arrivant à son niveau au scroll.
      try {
        if (window.top && window.top !== window.self && window.frameElement) {
          return {
            offset: window.frameElement.getBoundingClientRect().top,
            vh: window.top.innerHeight || 0,
          };
        }
      } catch (e) {}
      return null;
    }
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      const tv = topViewport();
      if (tv) {
        const top = rect.top + tv.offset;
        const bottom = rect.bottom + tv.offset;
        return top < tv.vh * 0.88 && bottom > tv.vh * 0.04;
      }
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < vh * 0.92 && rect.bottom > vh * 0.06;
    }
    function observerOptions() {
      if (MQ_PHONE.matches) {
        return { root: null, rootMargin: '0px 0px 12% 0px', threshold: 0.05 };
      }
      if (MQ_MOBILE.matches) {
        return { root: null, rootMargin: '0px 0px 10% 0px', threshold: 0.05 };
      }
      if (MQ_TABLET.matches) {
        return { root: null, rootMargin: '0px 0px 8% 0px', threshold: 0.05 };
      }
      return { root: null, rootMargin: '0px 0px 2% 0px', threshold: 0.14 };
    }
    function revealNow(el) {
      el.classList.add('sk-reveal', 'is-visible');
      activateStaggersIn(el, true);
    }
    function isProsSeqGrid(grid) {
      return (
        grid?.classList?.contains('pros-sol-grid') || grid?.classList?.contains('pros-stats-grid')
      );
    }
    function isHeroStatsGrid(grid) {
      return grid?.classList?.contains('hero-stats') ?? false;
    }
    function isSeqGrid(grid) {
      return isProsSeqGrid(grid) || isHeroStatsGrid(grid);
    }
    function seqGridItems(grid) {
      if (isProsSeqGrid(grid)) {
        return grid.querySelectorAll(':scope > .pros-sol-card, :scope > .pros-stat-card');
      }
      if (isHeroStatsGrid(grid)) {
        return grid.querySelectorAll(':scope > .hstat');
      }
      return [];
    }
    function revealSeqGrid(grid, instant) {
      if (!grid || grid.dataset.skSeqRevealed === '1' || !isRevealable(grid)) return;
      grid.dataset.skSeqRevealed = '1';
      grid.classList.add('is-visible');
      const items = [...seqGridItems(grid)];
      const step =
        parseInt(grid.style.getPropertyValue('--sk-reveal-stagger-step'), 10) ||
        staggerStepMs(items.length);
      if (instant || prefersReducedMotion()) {
        items.forEach((item) => item.classList.add('is-visible'));
        return;
      }
      items.forEach((item, i) => {
        window.setTimeout(() => {
          if (item.isConnected) item.classList.add('is-visible');
        }, i * step);
      });
    }
    function revealStaggerGrid(grid, instant) {
      if (!grid || !isRevealable(grid)) return;
      if (isSeqGrid(grid)) {
        revealSeqGrid(grid, instant);
        return;
      }
      if (grid.classList.contains('is-visible')) return;
      const itemCount = grid.querySelectorAll(ITEM_SELECTOR).length;
      const leadMs = itemCount >= 6 ? 90 : itemCount >= 4 ? 70 : 50;
      const apply = () => {
        if (!grid.isConnected) return;
        grid.classList.add('is-visible');
      };
      if (instant) {
        apply();
        return;
      }
      afterPaint(() => {
        window.setTimeout(apply, leadMs);
      });
    }
    function activateStaggersIn(root, instant) {
      const scope = root && root.querySelectorAll ? root : document;
      scope.querySelectorAll('.sk-reveal-stagger').forEach((grid) => {
        if (isSeqGrid(grid)) {
          if (grid.dataset.skSeqRevealed !== '1') revealStaggerGrid(grid, instant);
          return;
        }
        if (!grid.classList.contains('is-visible')) revealStaggerGrid(grid, instant);
      });
    }
    function staggerStepMs(count) {
      if (count >= 8) return 80;
      if (count >= 6) return 75;
      if (count >= 4) return 65;
      return 55;
    }
    function bindStaggerGrids() {
      document.querySelectorAll(STAGGER_SELECTOR).forEach((grid) => {
        if (!isRevealable(grid) || grid.dataset.skStaggerBound === '1') return;
        grid.dataset.skStaggerBound = '1';
        grid.classList.remove('sk-reveal-stagger--fast', 'is-visible');
        grid.classList.add('sk-reveal-stagger');
        const items = isSeqGrid(grid) ? seqGridItems(grid) : grid.querySelectorAll(ITEM_SELECTOR);
        const step = staggerStepMs(items.length);
        grid.style.setProperty('--sk-reveal-stagger-step', `${step}ms`);
        items.forEach((item, i) => {
          item.classList.remove('is-visible');
          item.classList.add('sk-reveal-item');
          item.style.setProperty('--sk-reveal-i', String(i));
        });
        if (prefersReducedMotion()) {
          if (isSeqGrid(grid)) revealSeqGrid(grid, true);
          else grid.classList.add('is-visible');
        }
      });
    }
    function bindSoloGrids() {
      document.querySelectorAll(SOLO_GRID_SELECTOR).forEach((grid) => {
        if (!isRevealable(grid) || grid.dataset.skSoloBound === '1') return;
        grid.dataset.skSoloBound = '1';
        grid.querySelectorAll(SOLO_ITEM_SELECTOR).forEach((item) => {
          item.classList.add('sk-reveal');
          if (prefersReducedMotion()) {
            item.classList.add('is-visible');
          }
        });
      });
    }
    function isProsStaggerSection(section) {
      return (
        section?.classList?.contains('pros-apl-sec') &&
        !!section.querySelector('.sk-reveal-stagger')
      );
    }
    function isAplHero(section) {
      return section?.classList?.contains('apl-hero') ?? false;
    }
    function revealProsSection(section, instant) {
      const head = section.querySelector('.pros-apl-head');
      if (head && !head.classList.contains('is-visible')) {
        head.classList.add('sk-reveal');
        if (instant || prefersReducedMotion()) {
          head.classList.add('is-visible');
        } else {
          afterPaint(() => head.classList.add('is-visible'));
        }
      }
      activateStaggersIn(section, instant);
    }
    function onSectionVisible(section, instant) {
      if (!section || !isRevealable(section)) return;
      if (observer) observer.unobserve(section);
      if (isProsStaggerSection(section)) {
        if (section.dataset.skProsRevealed === '1') {
          activateStaggersIn(section, instant);
          return;
        }
        section.dataset.skProsRevealed = '1';
        revealProsSection(section, instant);
        return;
      }
      if (section.classList.contains('is-visible')) {
        activateStaggersIn(section, instant);
        return;
      }
      const reveal = () => {
        if (!section.isConnected) return;
        section.classList.add('is-visible');
        activateStaggersIn(section, instant);
      };
      if (instant || prefersReducedMotion()) {
        reveal();
        return;
      }
      afterPaint(reveal);
    }
    function bindSection(el, index) {
      if (el.dataset.skRevealBound !== '1') {
        el.dataset.skRevealBound = '1';
        if (isProsStaggerSection(el)) {
          el.classList.remove('sk-reveal', 'is-visible');
          const head = el.querySelector('.pros-apl-head');
          if (head) {
            head.classList.remove('is-visible');
            head.classList.add('sk-reveal');
          }
        } else if (isAplHero(el)) {
          el.classList.add('sk-reveal');
          el.classList.remove('is-visible');
        } else {
          el.classList.remove('is-visible');
          el.classList.add('sk-reveal');
        }
      }
      if (prefersReducedMotion()) {
        revealNow(el);
        return;
      }
      if (index === 0 || isAplHero(el)) {
        afterPaint(() => onSectionVisible(el));
        return;
      }
      if (el.classList.contains('is-visible')) return;
      // En embed, l'IntersectionObserver verrait tout le contenu comme visible
      // (viewport iframe = hauteur du contenu) → on s'appuie sur le scroll parent.
      if (!isEmbed() && observer) observer.observe(el);
    }
    function createObserver() {
      if (observer) observer.disconnect();
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          onSectionVisible(entry.target);
        });
      }, observerOptions());
    }
    function flushPendingReveals() {
      if (prefersReducedMotion()) return;
      document.querySelectorAll('section.pros-apl-sec').forEach((section) => {
        if (
          section.dataset.skProsRevealed === '1' ||
          !isRevealable(section) ||
          !isInViewport(section)
        )
          return;
        onSectionVisible(section);
      });
      document.querySelectorAll('.sk-reveal:not(.is-visible)').forEach((el) => {
        if (!isRevealable(el) || !isInViewport(el)) return;
        onSectionVisible(el);
      });
      document.querySelectorAll('.sk-reveal-stagger').forEach((grid) => {
        if (!isRevealable(grid) || !isInViewport(grid)) return;
        if (isSeqGrid(grid)) {
          if (grid.dataset.skSeqRevealed !== '1') revealStaggerGrid(grid);
          return;
        }
        if (!grid.classList.contains('is-visible')) revealStaggerGrid(grid);
      });
    }
    function scheduleFlush() {
      if (flushScheduled) return;
      flushScheduled = true;
      requestAnimationFrame(() => {
        flushScheduled = false;
        flushPendingReveals();
      });
    }
    function bindScrollSafety() {
      window.addEventListener('scroll', scheduleFlush, { passive: true });
      window.addEventListener('wheel', scheduleFlush, { passive: true });
      window.addEventListener('touchend', scheduleFlush, { passive: true });
      window.addEventListener('touchcancel', scheduleFlush, { passive: true });
      window.addEventListener('resize', scheduleFlush, { passive: true });
      if ('onscrollend' in window) {
        window.addEventListener('scrollend', flushPendingReveals, { passive: true });
      }
      // Mode embed : c'est la fenêtre PARENTE qui scrolle (l'iframe ne scrolle pas).
      // On écoute donc son scroll/resize pour révéler les blocs au bon moment.
      try {
        const top = window.top;
        if (top && top !== window.self) {
          // L'iframe se recharge à chaque navigation mais window.top persiste :
          // on retire l'écouteur de la page précédente pour éviter toute fuite.
          if (top.__skRevealOnScroll) {
            top.removeEventListener('scroll', top.__skRevealOnScroll);
            top.removeEventListener('resize', top.__skRevealOnScroll);
          }
          const handler = () => {
            if (!document.body || !document.body.isConnected) return;
            scheduleFlush();
          };
          top.__skRevealOnScroll = handler;
          top.addEventListener('scroll', handler, { passive: true });
          top.addEventListener('resize', handler, { passive: true });
        }
      } catch (e) {}
    }
    function reobservePending() {
      if (!observer || prefersReducedMotion() || isEmbed()) return;
      document.querySelectorAll('.sk-reveal:not(.is-visible)').forEach((el) => {
        if (!isRevealable(el)) return;
        observer.observe(el);
      });
    }
    function collectSections() {
      const seen = /* @__PURE__ */ new Set();
      const list = [];
      document.querySelectorAll(SECTION_SELECTOR).forEach((el) => {
        if (!isRevealable(el) || seen.has(el)) return;
        seen.add(el);
        list.push(el);
      });
      return list;
    }
    function refresh() {
      bindStaggerGrids();
      bindSoloGrids();
      if (prefersReducedMotion()) {
        collectSections().forEach((el) => {
          if (isProsStaggerSection(el)) revealProsSection(el, true);
          else revealNow(el);
        });
        document
          .querySelectorAll('.sk-reveal-stagger')
          .forEach((g) => g.classList.add('is-visible'));
        return;
      }
      createObserver();
      collectSections().forEach((el, index) => bindSection(el, index));
      afterPaint(() => {
        if (isEmbed()) {
          // Révèle uniquement ce qui est déjà au niveau du viewport parent ;
          // le reste apparaîtra au scroll de la fenêtre parente.
          flushPendingReveals();
          return;
        }
        reobservePending();
        document.querySelectorAll('.sk-reveal:not(.is-visible)').forEach((el) => {
          if (!isRevealable(el) || !observer) return;
          observer.observe(el);
        });
      });
    }
    window.SkReveal = { refresh, flush: flushPendingReveals };
    function onViewportChange() {
      if (prefersReducedMotion()) return;
      createObserver();
      reobservePending();
      flushPendingReveals();
    }
    function init() {
      refresh();
      bindScrollSafety();
      const hubRoot = document.getElementById('hub-root');
      if (hubRoot && typeof MutationObserver !== 'undefined') {
        let hubRefreshTimer;
        const mo = new MutationObserver(() => {
          clearTimeout(hubRefreshTimer);
          hubRefreshTimer = setTimeout(() => refresh(), 48);
        });
        mo.observe(hubRoot, { childList: true, subtree: true });
      }
      [MQ_TABLET, MQ_MOBILE, MQ_PHONE].forEach((mq) => {
        if (mq.addEventListener) mq.addEventListener('change', onViewportChange);
        else mq.addListener(onViewportChange);
      });
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();
})();
