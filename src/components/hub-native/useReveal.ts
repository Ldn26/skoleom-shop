import { useEffect, type RefObject } from 'react';

/**
 * Animations d'apparition au scroll — équivalent React de
 * `shared/reveal-animations.js` (mode embed). Ajoute la classe `is-visible`
 * aux blocs `.sk-reveal` / `.sk-reveal-stagger` quand ils entrent dans le
 * viewport (avec décalage en cascade pour les grilles via `--sk-reveal-i`).
 *
 * - sections de premier niveau → fondu/translation (`.sk-reveal`) ;
 * - grilles connues → cascade (`.sk-reveal-stagger` + enfants `.sk-reveal-item`) ;
 * - les blocs déjà visibles au montage apparaissent immédiatement (sans clignoter).
 */
const SECTION_SELECTOR = [
  ':scope > section',
  ':scope > main > section',
  ':scope > main > .cb-sec',
  ':scope > main > .cb-hero',
  ':scope > main > .cb-final',
  ':scope > .stats-banner',
  ':scope > main > .stats-banner',
].join(', ');

const STAGGER_GRIDS = ['.stores-hero', '.univ-grid', '.hero-stats', '.stats-grid'];

export function useReveal(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Sections de premier niveau → .sk-reveal (si pas déjà un bloc reveal).
    root.querySelectorAll<HTMLElement>(SECTION_SELECTOR).forEach((el) => {
      if (!el.classList.contains('sk-reveal') && !el.classList.contains('sk-reveal-stagger')) {
        el.classList.add('sk-reveal');
      }
    });

    // 2. Grilles connues → cascade.
    STAGGER_GRIDS.forEach((sel) => {
      root.querySelectorAll<HTMLElement>(sel).forEach((grid) => {
        grid.classList.add('sk-reveal-stagger');
        let i = 0;
        Array.from(grid.children).forEach((child) => {
          const c = child as HTMLElement;
          c.classList.add('sk-reveal-item');
          if (!c.style.getPropertyValue('--sk-reveal-i')) {
            c.style.setProperty('--sk-reveal-i', String(i));
          }
          i += 1;
        });
      });
    });

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>('.sk-reveal, .sk-reveal-stagger'),
    );

    if (reduce) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const vh = window.innerHeight || document.documentElement.clientHeight;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -4% 0px', threshold: 0.08 },
    );

    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        targets.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < vh * 0.95 && rect.bottom > 0) {
            el.classList.add('is-visible');
          } else {
            io.observe(el);
          }
        });
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      io.disconnect();
    };
  }, [rootRef]);
}
