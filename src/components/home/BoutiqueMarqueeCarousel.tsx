import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  BOUTIQUE_CAROUSEL_ITEMS,
  BOUTIQUE_CAROUSEL_LOGO_SLOT_CLASS,
  type BoutiqueCarouselItem,
} from '../../constants/carrouselBoutique';
import { useAutoMarquee } from '../../hooks/useAutoMarquee';

const LOOP_COPIES = 4;
/** Largeur carte : 1 visible sur mobile, 2 sur sm, 3 à partir de md. */
const CARD_WIDTH_CLASS =
  'w-[calc(100vw-2rem)] sm:w-[calc((100vw-2.5rem)/2)] md:w-[calc((100vw-3rem)/3)]';

interface BoutiqueMarqueeCarouselProps {
  items?: readonly BoutiqueCarouselItem[];
  animated?: boolean;
  /** Classe du cadre logo (taille/position). Par défaut : taille « accueil ». */
  logoSlotClass?: string;
}

/**
 * Carrousel boutiques — 3 cartes verticales visibles en pleine largeur (100vw),
 * défilement horizontal continu. Chaque carte est un lien vers /store/:id
 * (comportement aligné sur universe.skoleom.com).
 */
export default function BoutiqueMarqueeCarousel({
  items = BOUTIQUE_CAROUSEL_ITEMS,
  animated = true,
  logoSlotClass = BOUTIQUE_CAROUSEL_LOGO_SLOT_CLASS,
}: BoutiqueMarqueeCarouselProps) {
  const { t } = useTranslation();
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  useAutoMarquee(scrollerRef, {
    speedPxPerFrame: 0.55,
    bidirectionalScroll: true,
    interactionPauseMs: 2800,
    enabled: animated,
  });

  const exploreLabel = t('common.actions.explore');

  const track = Array.from({ length: LOOP_COPIES }, (_, copy) =>
    items.map((site) => ({ ...site, trackKey: `${site.carouselKey}-${copy}` })),
  ).flat();

  const scrollerClassName =
    'marquee-x-scroll w-screen max-w-[100vw] cursor-grab overflow-x-auto overflow-y-hidden overscroll-x-contain [-webkit-overflow-scrolling:touch] [touch-action:pan-x] active:cursor-grabbing';

  const trackContent = (
    <div className="flex w-max flex-nowrap gap-3 px-2 py-1 sm:gap-4">
      {track.map((site) => (
        <Link
          key={site.trackKey}
          to={site.href}
          onPointerDown={(event) => event.stopPropagation()}
          className={`group relative flex shrink-0 flex-col overflow-hidden rounded-2xl bg-black transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-univ-lime sm:rounded-3xl ${CARD_WIDTH_CLASS} aspect-[3/4] min-h-[min(85vw,520px)] sm:min-h-[min(72vw,420px)] sm:aspect-[2/3] md:aspect-[3/4] md:min-h-0`}
          aria-label={`Skoleom — ${site.label}`}
        >
          <div className="relative min-h-0 flex-1 overflow-hidden">
            <img
              src={site.bgSrc}
              alt=""
              aria-hidden
              className="absolute left-1/2 top-[46%] h-[118%] w-[118%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover opacity-90 transition-[transform,opacity] duration-500 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-95"
              style={{
                background: `
                linear-gradient(to top, rgb(0 0 0 / 0.92) 0%, rgb(0 0 0 / 0.55) 42%, transparent 72%),
                radial-gradient(ellipse 120% 90% at 100% 100%, rgb(0 0 0 / 0.55) 0%, transparent 62%)
              `,
              }}
              aria-hidden
            />

            <div
              className={`pointer-events-none absolute z-10 flex items-start justify-start overflow-visible ${
                site.logoSlotClassName?.includes('!left-0') ? '' : 'left-3 top-3 sm:left-4 sm:top-4'
              } ${logoSlotClass}${site.logoSlotClassName ? ` ${site.logoSlotClassName}` : ''}`}
            >
              {site.logoSrc ? (
                <img
                  src={site.logoSrc}
                  alt={site.label}
                  className={`block h-full w-auto max-w-full object-contain object-left-top origin-top-left drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]${site.logoImgClassName ? ` ${site.logoImgClassName}` : ''}`}
                  loading="lazy"
                />
              ) : (
                <span className="block max-w-full font-sans text-lg font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] sm:text-xl md:text-2xl">
                  {site.label}
                </span>
              )}
            </div>
          </div>

          <div className="relative z-10 flex shrink-0 items-center justify-center px-3 pb-4 pt-2 sm:px-4 sm:pb-5 sm:pt-3">
            <span className="pointer-events-none inline-flex min-w-[7.5rem] max-w-[11rem] items-center justify-center rounded-full bg-univ-yellow px-6 py-2.5 text-center font-sans text-xs font-bold text-black shadow-[0_12px_36px_-8px_rgba(0,0,0,0.65)] sm:min-w-[8rem] sm:max-w-[9.5rem] sm:px-7 sm:py-3 sm:text-sm">
              {exploreLabel}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );

  if (!animated) {
    return (
      <div ref={scrollerRef} className={scrollerClassName}>
        {trackContent}
      </div>
    );
  }

  return (
    <motion.div
      ref={scrollerRef}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={scrollerClassName}
    >
      {trackContent}
    </motion.div>
  );
}
