import { useMemo, useRef, type ReactNode } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAutoMarquee } from '../../hooks/useAutoMarquee';

const LOOP_COPIES = 4;

/** Carte « affiche » du carrousel — front partagé (accueil + pages hub). */
export interface PosterCardItem {
  key: string;
  poster: string;
  icon?: string;
  label: string;
  summary: string;
  description: string;
  href?: string;
  /** Si présent : affiche un bouton (ex. « Explorer ») au lieu du synopsis. */
  ctaLabel?: string;
}

/** Carte « boutique » — même front que l'accueil, le nom remplace le logo + bouton Explorer. */
function BoutiqueCard({ item }: { item: PosterCardItem }) {
  return (
    <div className="group block w-full">
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_18px_50px_-28px_rgba(0,0,0,0.85)]">
        <img
          src={item.poster}
          alt=""
          className="absolute inset-0 size-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.85) 26%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.12) 78%, transparent 100%)',
          }}
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start gap-3 p-4 sm:p-5">
          <p className="font-display text-lg uppercase leading-[1.02] tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] sm:text-xl md:text-2xl">
            {item.summary}
          </p>
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-univ-lime px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:gap-3 hover:brightness-110"
              aria-label={`Explorer ${item.label}`}
            >
              {item.ctaLabel} <ArrowRight size={14} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
              {item.ctaLabel} <ArrowRight size={14} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/** Carte — front IDENTIQUE à celui de l'accueil (affiche + résumé/synopsis au hover). */
function PosterCard({ item }: { item: PosterCardItem }) {
  if (item.ctaLabel) return <BoutiqueCard item={item} />;
  const inner: ReactNode = (
    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_18px_50px_-28px_rgba(0,0,0,0.85)]">
      <img
        src={item.poster}
        alt=""
        className="absolute inset-0 size-full object-cover object-center"
      />
      {item.icon && (
        <img
          src={item.icon}
          alt={item.label}
          className="absolute left-4 top-4 z-20 h-auto max-h-11 w-auto max-w-[120px] origin-top-left scale-100 object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:group-hover:scale-100"
        />
      )}

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-x-0 bottom-0 top-[42%] z-0 rounded-b-2xl rounded-t-2xl opacity-0 transition-opacity duration-500 ease-out motion-reduce:opacity-100 group-hover:opacity-100 group-focus-visible:opacity-100"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.88) 28%, rgba(0,0,0,0.62) 48%, rgba(0,0,0,0.28) 70%, rgba(0,0,0,0.06) 88%, transparent 100%)',
          }}
          aria-hidden
        />

        <div className="relative z-10 px-4 pb-4 pt-24">
          <div className="flex translate-y-11 flex-col gap-2 opacity-0 transition-[opacity,transform] duration-500 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 group-hover:-translate-y-7 group-hover:opacity-100 group-focus-visible:-translate-y-7 group-focus-visible:opacity-100">
            <div className="flex min-h-[2.4em] items-end">
              <p className="font-sans text-xs font-bold uppercase leading-[1.05] tracking-[0.14em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] sm:text-sm sm:tracking-[0.18em] md:text-[15px] lg:text-base">
                {item.summary}
              </p>
            </div>
            <p className="nouveautes-card-desc max-h-0 overflow-hidden overscroll-contain font-sans text-[12px] font-normal leading-relaxed text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.92)] opacity-0 translate-y-3 transition-[opacity,transform,max-height] duration-500 ease-out motion-reduce:max-h-[11rem] motion-reduce:opacity-100 motion-reduce:translate-y-0 [-webkit-overflow-scrolling:touch] group-hover:max-h-[11rem] group-hover:overflow-y-auto group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:max-h-[11rem] group-focus-visible:overflow-y-auto group-focus-visible:opacity-100 group-focus-visible:translate-y-0 sm:text-[13px] md:text-sm lg:max-h-0 lg:group-hover:max-h-[13rem] lg:group-focus-visible:max-h-[13rem] lg:text-[15px] lg:leading-snug">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className="group block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label={`${item.summary} — ${item.label}`}
      >
        {inner}
      </a>
    );
  }
  return (
    <div className="group block w-full" aria-label={`${item.summary} — ${item.label}`}>
      {inner}
    </div>
  );
}

/**
 * Carrousel d'affiches — défilement automatique lent + boucle infinie, pause au survol,
 * flèches précédent/suivant. Front et système identiques au carrousel de l'accueil.
 */
export default function PosterCarousel({ items }: { items: readonly PosterCardItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollByDir = (dir: number) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  const loopItems = useMemo(() => {
    if (items.length === 0) return [];
    return Array.from({ length: LOOP_COPIES }, (_, copy) =>
      items.map((item) => ({ ...item, trackKey: `${item.key}-${copy}` })),
    ).flat();
  }, [items]);

  useAutoMarquee(trackRef, {
    speedPxPerFrame: 0.35,
    bidirectionalScroll: true,
    interactionPauseMs: 2800,
    resetKey: items.map((item) => item.key).join(','),
    enabled: items.length > 0,
  });

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollByDir(-1)}
        aria-label="Précédent"
        className="absolute -left-3 top-1/2 z-30 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 p-2 text-white backdrop-blur transition hover:bg-black md:flex"
      >
        <ChevronLeft size={22} />
      </button>

      <div
        ref={trackRef}
        className="marquee-x-scroll x-scroll-subtle -mx-6 cursor-grab overflow-x-auto overflow-y-hidden overscroll-x-contain px-6 pb-2 [touch-action:pan-x] active:cursor-grabbing md:mx-0 md:px-0"
      >
        <div className="flex w-max flex-nowrap gap-4 md:gap-6">
          {loopItems.map((item, i) => (
            <div
              key={item.trackKey}
              className="w-[min(72vw,240px)] shrink-0 sm:w-[min(52vw,320px)] md:w-[calc((100%-3rem)/3)]"
              aria-hidden={i >= items.length ? true : undefined}
            >
              <PosterCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollByDir(1)}
        aria-label="Suivant"
        className="absolute -right-3 top-1/2 z-30 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 p-2 text-white backdrop-blur transition hover:bg-black md:flex"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
