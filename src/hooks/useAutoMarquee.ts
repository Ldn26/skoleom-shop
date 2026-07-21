import { useEffect, useLayoutEffect, useRef, type RefObject } from 'react';

/**
 * Hook de défilement horizontal automatique pour conteneurs « marquee ».
 * Suppose que le contenu de la div référencée a été dupliqué (×2) pour boucler.
 * Le défilement se met en pause au survol/touch/wheel et respecte
 * la préférence utilisateur `prefers-reduced-motion`.
 */

interface UseAutoMarqueeOptions {
  /** Vitesse de défilement en pixels par frame (≈ 60 fps). */
  speedPxPerFrame?: number;
  /** Durée en ms de la pause après une interaction (wheel / pointer). */
  interactionPauseMs?: number;
  /** Active le défilement (passez `false` pour désactiver complètement). */
  enabled?: boolean;
  /** Dépendances additionnelles qui doivent réinitialiser le hook si elles changent. */
  resetKey?: unknown;
  /**
   * Défilement inversé (contenu qui semble glisser vers la droite).
   * Le contenu doit toujours être dupliqué (×2) : repositionnement initial sur la moitié.
   */
  reverse?: boolean;
  /**
   * Scroll manuel gauche/droite sur contenu dupliqué (×4 recommandé).
   * Position initiale au centre + rebouclage discret aux extrémités.
   */
  bidirectionalScroll?: boolean;
}

/** Détermine si l'utilisateur préfère réduire les mouvements (a11y). */
const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export type AutoMarqueeControls = {
  pause: () => void;
  resume: () => void;
};

export function useAutoMarquee<T extends HTMLElement>(
  ref: RefObject<T | null>,
  {
    speedPxPerFrame = 0.55,
    interactionPauseMs = 0,
    enabled = true,
    resetKey,
    reverse = false,
    bidirectionalScroll = false,
  }: UseAutoMarqueeOptions = {},
): AutoMarqueeControls {
  const controlsRef = useRef<AutoMarqueeControls>({
    pause: () => {},
    resume: () => {},
  });

  const controls: AutoMarqueeControls = {
    pause: () => controlsRef.current.pause(),
    resume: () => controlsRef.current.resume(),
  };
  /** Position initiale pour une boucle sans à-coup (avant la première peinture si possible). */
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (!enabled && !bidirectionalScroll) return;

    const half = el.scrollWidth / 2;
    if (half <= 0) return;

    if (bidirectionalScroll) {
      el.scrollLeft = half / 2;
    } else if (reverse) {
      el.scrollLeft = half;
    } else {
      el.scrollLeft = 0;
    }
  }, [ref, enabled, reverse, bidirectionalScroll, resetKey]);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;
    if (!enabled && !bidirectionalScroll) return undefined;

    let rafId = 0;
    let normalizeRafId = 0;
    let paused = false;
    let pauseUntil = 0;

    const normalizeBidirectionalScroll = () => {
      if (!bidirectionalScroll) return;

      const segment = el.scrollWidth / 4;
      if (segment <= 0) return;

      const buffer = 48;
      if (el.scrollLeft < buffer) {
        el.scrollLeft += segment * 2;
      } else if (el.scrollLeft > segment * 3 + buffer) {
        el.scrollLeft -= segment * 2;
      }
    };

    const scheduleNormalize = (event?: Event) => {
      if (event && !event.isTrusted) return;
      cancelAnimationFrame(normalizeRafId);
      normalizeRafId = requestAnimationFrame(normalizeBidirectionalScroll);
    };

    /** Boucle d'animation : décale `scrollLeft` puis « reboucle » à mi-parcours. */
    const tick = () => {
      const half = el.scrollWidth / 2;
      const canScroll = half > el.clientWidth + 24;
      const respectPause = Date.now() >= pauseUntil;

      if (enabled && !paused && respectPause && canScroll) {
        if (reverse) {
          el.scrollLeft -= speedPxPerFrame;
          if (el.scrollLeft <= 2) {
            el.scrollLeft += half;
          }
        } else {
          el.scrollLeft += speedPxPerFrame;
          if (el.scrollLeft >= half - 2) {
            el.scrollLeft -= half;
          }
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
    const pauseMs = bidirectionalScroll ? Math.max(interactionPauseMs, 2800) : interactionPauseMs;

    const handleInteraction = (event: Event) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a, button')) {
        if (pauseMs > 0) {
          pauseUntil = Math.max(pauseUntil, Date.now() + pauseMs);
        } else {
          pause();
        }
        return;
      }
      if (pauseMs > 0) {
        pauseUntil = Math.max(pauseUntil, Date.now() + pauseMs);
      } else {
        pause();
      }
    };

    controlsRef.current.pause = pause;
    controlsRef.current.resume = resume;

    if (bidirectionalScroll) {
      el.addEventListener('scroll', scheduleNormalize as EventListener, { passive: true });
    } else {
      el.addEventListener('mouseenter', pause);
      el.addEventListener('mouseleave', resume);
    }

    const handleTouchEnd = () => {
      scheduleNormalize();
      if (!bidirectionalScroll) resume();
    };

    el.addEventListener('touchstart', handleInteraction, { passive: true });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });
    el.addEventListener('wheel', handleInteraction, { passive: true });
    el.addEventListener('pointerdown', handleInteraction);

    if (enabled) {
      rafId = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(normalizeRafId);
      if (bidirectionalScroll) {
        el.removeEventListener('scroll', scheduleNormalize);
      } else {
        el.removeEventListener('mouseenter', pause);
        el.removeEventListener('mouseleave', resume);
      }
      el.removeEventListener('touchstart', handleInteraction);
      el.removeEventListener('touchend', handleTouchEnd);
      el.removeEventListener('wheel', handleInteraction);
      el.removeEventListener('pointerdown', handleInteraction);
    };
  }, [ref, speedPxPerFrame, interactionPauseMs, enabled, resetKey, reverse, bidirectionalScroll]);

  return controls;
}
