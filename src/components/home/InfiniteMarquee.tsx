import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface InfiniteMarqueeProps {
  children: ReactNode;
  /** Vitesse en pixels par seconde. */
  speedPxPerSec?: number;
  reverse?: boolean;
  className?: string;
  stripClassName?: string;
  /** Espacement entre chaque logo et entre les copies du bandeau (évite le collage à la boucle). */
  gapClassName?: string;
  /** Nombre de copies du contenu (≥ 2). Plus de copies = bandeau plus dense sur grands écrans. */
  copies?: number;
  /** Bandes noires dégradées (évite mask-image, fragile sur Chrome). */
  fadeEdges?: boolean;
  /** Mettre en pause au survol (désactivé par défaut pour le bandeau OTT). */
  pauseOnHover?: boolean;
  ariaLabel?: string;
  ariaHidden?: boolean;
}

/**
 * Marquee infini via Framer Motion + translateX mesuré (Chrome, Firefox, Safari).
 * Duplique automatiquement les enfants ; ne pas les dupliquer dans le parent.
 */
export function InfiniteMarquee({
  children,
  speedPxPerSec = 28,
  reverse = false,
  className = '',
  stripClassName = '',
  gapClassName = 'gap-14 md:gap-20',
  copies = 2,
  fadeEdges = false,
  pauseOnHover = false,
  ariaLabel,
  ariaHidden,
}: InfiniteMarqueeProps) {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [loopWidth, setLoopWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const copyCount = Math.max(2, Math.floor(copies));

  useLayoutEffect(() => {
    const el = stripRef.current;
    if (!el) return undefined;

    const measure = () => {
      const strip2 = el.nextElementSibling;
      if (strip2 instanceof HTMLElement) {
        const loop = strip2.offsetLeft - el.offsetLeft;
        if (loop > 0) {
          setLoopWidth(loop);
          return;
        }
      }
      const w = el.scrollWidth;
      if (w > 0) setLoopWidth(w);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    const track = trackRef.current;
    if (track) {
      for (const node of track.children) {
        if (node instanceof HTMLElement) ro.observe(node);
      }
    }

    const fonts = document.fonts;
    if (fonts?.ready) {
      fonts.ready.then(measure).catch(() => {});
    }

    window.addEventListener('load', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('load', measure);
    };
  }, [children, copyCount]);

  const duration = loopWidth > 0 ? loopWidth / speedPxPerSec : 0;
  const canAnimate = loopWidth > 0 && duration > 0 && !reduceMotion && !(pauseOnHover && paused);

  const xFrom = reverse ? -loopWidth : 0;
  const xTo = reverse ? 0 : -loopWidth;

  return (
    <motion.div
      className={`relative w-full max-w-full overflow-hidden ${className}`}
      style={{ isolation: 'isolate', minHeight: '2.75rem' }}
      onMouseEnter={pauseOnHover ? () => setPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setPaused(false) : undefined}
    >
      {fadeEdges ? (
        <>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[min(12%,72px)] bg-gradient-to-r from-black via-black/80 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[min(12%,72px)] bg-gradient-to-l from-black via-black/80 to-transparent"
            aria-hidden
          />
        </>
      ) : null}

      <motion.div
        ref={trackRef}
        className={`flex w-max flex-nowrap will-change-transform ${gapClassName}`}
        aria-label={ariaHidden ? undefined : ariaLabel}
        aria-hidden={ariaHidden || undefined}
        role={ariaHidden ? undefined : 'region'}
        initial={false}
        animate={canAnimate ? { x: [xFrom, xTo] } : { x: reverse ? -loopWidth : 0 }}
        transition={
          canAnimate
            ? {
                x: {
                  duration,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'loop',
                  repeatDelay: 0,
                },
              }
            : { duration: 0 }
        }
      >
        {Array.from({ length: copyCount }, (_, index) => (
          <div
            key={index}
            ref={index === 0 ? stripRef : undefined}
            className={`flex shrink-0 flex-nowrap ${stripClassName}`}
            aria-hidden={index > 0 ? true : undefined}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

/** Conversion depuis l’ancienne vitesse useAutoMarquee (px / frame @ ~60 fps). */
export function marqueeSpeedFromPxPerFrame(
  speedPxPerFrame: number,
  referencePxPerSec = 25.2,
): number {
  return referencePxPerSec * (speedPxPerFrame / 0.42);
}

/** @deprecated Utiliser marqueeSpeedFromPxPerFrame */
export function marqueeDurationFromPxPerFrame(
  speedPxPerFrame: number,
  referenceSec = 95,
  referenceSpeed = 0.42,
): number {
  return referenceSec * (referenceSpeed / speedPxPerFrame);
}
