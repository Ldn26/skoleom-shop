import { useCallback, useMemo, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { BoutiqueItem } from '../../data/ecosystemBoutiques';
import { useAutoMarquee } from '../../hooks/useAutoMarquee';

const LOOP_COPIES = 4;

/**
 * Carrousel horizontal de cartes boutiques.
 * Optionnellement équipé d'une recherche typeahead qui filtre la liste
 * et fait défiler vers la carte sélectionnée.
 */

interface BoutiqueCarouselProps {
  /** Sur-titre court (ex: « Groupe »). */
  kicker?: string;
  /** Titre principal h2. */
  title: string;
  /** Sous-titre optionnel sous le titre. */
  subtitle?: string;
  /** Items affichés dans le carrousel. */
  items: readonly BoutiqueItem[];
  /** Map id boutique → image. Sinon, fallback halo coloré (item.color). */
  imageMap?: Readonly<Record<string, string | undefined>>;
  /** Map id boutique → logo de marque (remplace le titre texte sur la carte). */
  logoMap?: Readonly<Partial<Record<string, string>>>;
  /** Ajustements visuels ponctuels pour compenser les marges internes de certains fichiers logo. */
  logoClassMap?: Readonly<Partial<Record<string, string>>>;
  /** Affiche les cartes comme des capsules logo seul. */
  logoOnly?: boolean;
  /** Active la barre de recherche typeahead au-dessus du carrousel. */
  searchable?: boolean;
  /** Placeholder du champ de recherche. */
  searchPlaceholder?: string;
  /** Id HTML de la section. */
  sectionId?: string;
  /** Préfixe utilisé pour les ids DOM des cartes (scrollIntoView). */
  idPrefix?: string;
  /** Libellé ARIA du carrousel. */
  ariaLabel?: string;
}

/** Délai (ms) entre blur du champ et fermeture du dropdown — laisse cliquer. */
const SEARCH_BLUR_CLOSE_DELAY_MS = 120;

/* ------------------------------------------------------------------------- */
/* Sous-composant : carte boutique unitaire */
/* ------------------------------------------------------------------------- */

export interface BoutiqueCardProps {
  item: BoutiqueItem;
  imageSrc?: string | null;
  logoSrc?: string | null;
  logoClassName?: string;
  logoOnly?: boolean;
  /** Classes du conteneur (ex. taille fixe carrousel Groupe). */
  className?: string;
}

/** Carte verticale d'une boutique du carrousel. */
export function BoutiqueCard({
  item,
  imageSrc,
  logoSrc,
  logoClassName = '',
  logoOnly = false,
  className,
}: BoutiqueCardProps) {
  const logoSlotClass =
    'pointer-events-none absolute left-0 top-0 z-10 flex items-start justify-start overflow-visible h-[4rem] w-[min(78%,220px)] sm:h-[4.25rem] sm:w-[min(72%,200px)] md:h-[5rem]';

  return (
    <div
      className={
        className ??
        'group relative flex h-[440px] w-[min(85vw,340px)] shrink-0 snap-start flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.35)] sm:h-[480px] sm:w-[360px] md:h-[500px] md:w-[400px] md:rounded-[2rem]'
      }
    >
      {imageSrc ? (
        <>
          <img
            src={imageSrc}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
            draggable={false}
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/15 pointer-events-none"
            aria-hidden
          />
        </>
      ) : (
        <div
          className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-30 blur-3xl"
          style={{ background: item.color }}
          aria-hidden
        />
      )}

      {logoOnly ? (
        logoSrc ? (
          <div className={logoSlotClass}>
            <img
              src={logoSrc}
              alt={item.name}
              className={`block h-full w-auto max-w-full object-contain object-left-top origin-top-left drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] ${logoClassName}`}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        ) : (
          <div className={`${logoSlotClass} items-end`}>
            <h3 className="font-sans text-xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm sm:text-2xl md:text-[26px]">
              {item.name}
            </h3>
          </div>
        )
      ) : (
        <div className="relative z-10 flex h-full flex-col p-6 sm:p-7 md:p-8">
          {logoSrc ? (
            <div className="flex h-16 w-full items-start justify-start overflow-hidden sm:h-[72px] md:h-20">
              <img
                src={logoSrc}
                alt={item.name}
                className={`block h-full max-h-full w-auto max-w-[min(100%,300px)] object-contain object-left-top origin-top-left drop-shadow-sm ${logoClassName}`}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
          ) : (
            <h3 className="font-sans text-xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm sm:text-2xl md:text-[26px]">
              {item.name}
            </h3>
          )}
          <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-white/70 drop-shadow-sm sm:text-[15px]">
            {item.description}
          </p>

          <div className="mt-auto pt-5 flex items-center gap-1 text-xs text-white/55 transition group-hover:text-univ-lime drop-shadow-sm">
            Explorer <ArrowRight size={12} />
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* Composant principal : section carrousel */
/* ------------------------------------------------------------------------- */

export default function BoutiqueCarousel({
  kicker,
  title,
  subtitle,
  items,
  imageMap,
  logoMap,
  logoClassMap,
  logoOnly = false,
  searchable = false,
  searchPlaceholder = 'Rechercher',
  sectionId,
  idPrefix = 'boutique-card',
  ariaLabel,
}: BoutiqueCarouselProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  /** Vérifie si un item matche la requête (nom, description, tagline, id). */
  const matches = useCallback((item: BoutiqueItem, q: string) => {
    if (!q) return true;
    const fields = [item.name, item.description ?? '', item.tagline ?? '', item.id ?? ''];
    return fields.some((field) => String(field).toLowerCase().includes(q));
  }, []);

  /** Items effectivement visibles (filtrés si recherche active). */
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => matches(item, q));
  }, [items, query, matches]);

  const loopItems = useMemo(() => {
    if (filtered.length === 0) return [];
    return Array.from({ length: LOOP_COPIES }, (_, copy) =>
      filtered.map((item) => ({ ...item, trackKey: `${item.id}-${copy}` })),
    ).flat();
  }, [filtered]);

  useAutoMarquee(scrollerRef, {
    speedPxPerFrame: 0.55,
    bidirectionalScroll: true,
    interactionPauseMs: 2800,
    resetKey: filtered.map((item) => item.id).join(','),
    enabled: filtered.length > 1,
  });

  /** Suggestions du dropdown (limité à 8). */
  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return items.filter((item) => matches(item, q)).slice(0, 8);
  }, [items, query, matches]);

  /** Sélection d'une suggestion : remplit le champ et scroll vers la carte. */
  const handleSelect = useCallback(
    (item: BoutiqueItem) => {
      setQuery(item.name);
      setOpen(false);
      window.requestAnimationFrame(() => {
        document.getElementById(`${idPrefix}-${item.id}`)?.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      });
    },
    [idPrefix],
  );

  return (
    <section id={sectionId} className="py-16 md:py-20 lg:py-24">
      {/* En-tête de section */}
      <div className="relative mb-8 px-2 md:mb-12">
        <div className="max-w-3xl">
          {kicker && <p className="text-white/60 font-sans text-sm mb-2">{kicker}</p>}
          <h2 className="font-sans font-extrabold text-2xl tracking-tight sm:text-3xl md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/65 mt-3 text-sm sm:text-[15px] md:text-base">{subtitle}</p>
          )}
        </div>

        {/* Champ de recherche optionnel + dropdown */}
        {searchable && (
          <div className="mx-auto mt-6 max-w-3xl md:mt-10">
            <div className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpen(true);
                }}
                onFocus={() => {
                  if (query.trim()) setOpen(true);
                }}
                onBlur={() => {
                  window.setTimeout(() => setOpen(false), SEARCH_BLUR_CLOSE_DELAY_MS);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setOpen(false);
                }}
                placeholder={searchPlaceholder}
                className="w-full rounded-full border border-white/14 bg-univ-gray-800/80 px-5 py-3 pr-12 font-sans text-sm text-white placeholder:text-white/35 shadow-[0_18px_60px_-32px_rgba(0,0,0,0.9)] outline-none backdrop-blur-md focus:border-univ-lime/60 focus:ring-1 focus:ring-univ-lime/30 sm:px-6 sm:py-4 sm:pr-14 sm:text-base md:text-lg"
                autoComplete="off"
                aria-label={searchPlaceholder}
              />
              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/40 sm:right-6">
                ⌕
              </span>

              {open && suggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-[calc(100%+0.75rem)] z-20 overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur-xl">
                  {suggestions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="block w-full rounded-xl px-4 py-3 text-left font-sans text-sm font-semibold text-white/90 transition hover:bg-white/10"
                      onMouseDown={(ev) => ev.preventDefault()}
                      onClick={() => handleSelect(item)}
                    >
                      {item.name}
                      <span className="ml-2 text-xs font-medium text-white/45">{item.tagline}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Rangée de cartes horizontalement scrollable — hauteur adaptative selon breakpoint */}
      {items.length ? (
        filtered.length ? (
          <div
            ref={scrollerRef}
            className="marquee-x-scroll x-scroll-subtle -mx-6 h-[460px] max-h-[460px] cursor-grab overflow-x-auto overflow-y-hidden overscroll-x-contain px-6 pb-2 [touch-action:pan-x] active:cursor-grabbing sm:h-[500px] sm:max-h-[500px] md:mx-0 md:px-0"
            role="region"
            aria-label={ariaLabel ?? `${title} — carrousel`}
          >
            <div className="flex h-full w-max flex-nowrap gap-4 sm:gap-5 md:gap-6">
              {loopItems.map((item, index) => (
                <div
                  key={item.trackKey}
                  id={index < filtered.length ? `${idPrefix}-${item.id}` : undefined}
                  className="shrink-0"
                  aria-hidden={index >= filtered.length ? true : undefined}
                >
                  <BoutiqueCard
                    item={item}
                    imageSrc={imageMap?.[item.id]}
                    logoSrc={logoMap?.[item.id]}
                    logoClassName={logoClassMap?.[item.id]}
                    logoOnly={logoOnly}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-white/50">
            Aucun résultat pour «&nbsp;{query.trim()}&nbsp;».
          </p>
        )
      ) : null}
    </section>
  );
}
