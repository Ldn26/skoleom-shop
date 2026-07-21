import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Section « showcase » présentée sous forme d'accordéon façon Apple.
 * Un seul item est ouvert à la fois ; l'image latérale change en synchronisation
 * avec l'élément actif. Si un item contient plusieurs slides, elles défilent
 * automatiquement (avec respect de `prefers-reduced-motion`).
 *
 * Sur mobile / tablette, l'image apparaît inline dans l'item ouvert.
 * Sur desktop, elle vit dans une colonne dédiée à droite.
 */

export interface ShowcaseSlide {
  src: string;
  alt: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  icon: ReactNode;
  desc: string;
  /** Une ou plusieurs images. Plusieurs déclenche la rotation automatique. */
  slides: readonly ShowcaseSlide[];
}

interface AccordionShowcaseProps {
  /** Sur-titre uppercase coloré (ex: « Pôles stratégiques »). */
  kicker: string;
  /** Titre principal de la section (h2). */
  title: string;
  /** Sous-titre optionnel placé à droite du titre. */
  subtitle?: string;
  /** Items affichés dans l'accordéon. Le premier est ouvert par défaut. */
  items: readonly ShowcaseItem[];
  /** Couleur du kicker (défaut : lime). */
  kickerColor?: 'lime' | 'orange' | 'yellow' | 'blue';
  /** Id HTML de la section (utile pour les ancres). */
  sectionId?: string;
  /** Item ouvert (mode contrôlé). */
  activeId?: string;
  /** Callback quand l'item actif change (mode contrôlé). */
  onActiveIdChange?: (id: string) => void;
}

/** Intervalle (ms) entre deux slides quand un item contient plusieurs images. */
const SLIDESHOW_INTERVAL_MS = 4500;

/** Détermine si l'utilisateur préfère réduire les mouvements (a11y). */
const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Mapping kickerColor → classe Tailwind. */
const KICKER_COLOR_CLASS: Record<NonNullable<AccordionShowcaseProps['kickerColor']>, string> = {
  lime: 'text-univ-lime',
  orange: 'text-univ-orange',
  yellow: 'text-univ-yellow',
  blue: 'text-univ-blue-light',
};

export default function AccordionShowcase({
  kicker,
  title,
  subtitle,
  items,
  kickerColor = 'lime',
  sectionId,
  activeId: activeIdProp,
  onActiveIdChange,
}: AccordionShowcaseProps) {
  const [internalActiveId, setInternalActiveId] = useState<string>(items[0]?.id ?? '');
  const isControlled = activeIdProp !== undefined;
  const activeId = isControlled ? activeIdProp : internalActiveId;

  const setActiveId = useCallback(
    (next: string | ((current: string) => string)) => {
      const resolved = typeof next === 'function' ? next(activeId) : next;
      if (!isControlled) setInternalActiveId(resolved);
      onActiveIdChange?.(resolved);
    },
    [activeId, isControlled, onActiveIdChange],
  );
  const [slideIndex, setSlideIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /** Ouvre l'item s'il est fermé, le ferme s'il est déjà ouvert. */
  const toggle = useCallback((id: string) => {
    setActiveId((current) => (current === id ? '' : id));
  }, []);

  const activeItem = useMemo(
    () => items.find((item) => item.id === activeId) ?? items[0],
    [items, activeId],
  );
  const slides = useMemo(() => activeItem?.slides ?? [], [activeItem]);
  const currentSlide = slides[slideIndex] ?? slides[0];

  // Reset slide index quand on change d'item actif
  useEffect(() => {
    setSlideIndex(0);
  }, [activeId]);

  // Rotation automatique des slides pour les items multi-images
  useEffect(() => {
    if (slides.length <= 1 || prefersReducedMotion()) return undefined;
    timerRef.current = setInterval(() => {
      setSlideIndex((index) => (index + 1) % slides.length);
    }, SLIDESHOW_INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides]);

  return (
    <section id={sectionId} className="py-16 md:py-20 lg:py-24">
      {/* En-tête de section */}
      <div className="flex items-end justify-between gap-6 flex-wrap mb-8 md:mb-12 md:gap-8">
        <div>
          <p
            className={`${KICKER_COLOR_CLASS[kickerColor]} uppercase tracking-widest font-bold text-xs mb-3`}
          >
            {kicker}
          </p>
          <h2 className="font-sans font-extrabold text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h2>
        </div>
        {subtitle && <p className="max-w-2xl text-white/60 text-sm md:text-base">{subtitle}</p>}
      </div>

      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        {/* Colonne gauche : accordéon */}
        <div className="lg:col-span-5">
          <ul className="">
            {items.map((item) => {
              const isOpen = activeId === item.id;
              return (
                <li key={item.id} className="">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`acc-panel-${item.id}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-univ-lime focus:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime/40 sm:gap-6 sm:py-6"
                  >
                    <span className="flex items-center gap-3 min-w-0">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen ? 'bg-univ-lime/15 text-univ-lime' : 'bg-white/5 text-white/70'
                        }`}
                        aria-hidden
                      >
                        {item.icon}
                      </span>
                      <span className="font-sans text-base font-bold text-white sm:text-lg md:text-xl lg:text-2xl">
                        {item.title}
                      </span>
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-white/60 transition-transform duration-300 ${
                        isOpen ? '-rotate-180 text-univ-lime' : 'rotate-0'
                      }`}
                      aria-hidden
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`acc-panel-${item.id}`}
                        role="region"
                        aria-label={item.title}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pl-3 pr-2 text-sm leading-relaxed text-white/70 sm:pb-6 sm:pl-12 sm:pr-4 sm:text-[15px] md:text-base">
                          {item.desc}
                        </p>

                        {/* Image inline (mobile/tablette) — masquée sur desktop */}
                        <div className="relative mb-5 ml-0 mr-0 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.85)] sm:mb-6 sm:ml-12 sm:mr-4 lg:hidden">
                          <AnimatePresence mode="wait">
                            {currentSlide && (
                              <motion.img
                                key={`${item.id}-${slideIndex}`}
                                src={currentSlide.src}
                                alt={currentSlide.alt}
                                loading="lazy"
                                decoding="async"
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.45, ease: 'easeOut' }}
                                className="absolute inset-0 h-full w-full object-cover"
                              />
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Colonne droite : image illustrative synchronisée (desktop) */}
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_30px_90px_-38px_rgba(0,0,0,0.85)] lg:col-span-7 lg:block">
          <AnimatePresence mode="wait">
            {activeItem && currentSlide && (
              <motion.img
                key={`${activeItem.id}-${slideIndex}`}
                src={currentSlide.src}
                alt={currentSlide.alt}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            )}
          </AnimatePresence>
          {/* Voile sombre pour homogénéiser avec le thème */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
