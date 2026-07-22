


import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCategories } from '../../api/product';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';

function CategoryBar({ parentId = 232 }: { parentId?: number }) {
  const { data: categories = [] } = useCategories(parentId);
  const navigate = useNavigate();
  const localizePath = useLocalizedPath();
  const [searchParams] = useSearchParams();
  const activeSlug = searchParams.get('category');

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLButtonElement | null>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows, categories.length]);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [activeSlug]);

  const scrollBy = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.7, 240);
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  if (!categories.length) return null;

  return (
    <div className="relative mx-auto w-full max-w-[1600px] px-4">
      <style>{`
        .cat-slider {
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        .cat-slider::-webkit-scrollbar { display: none; }
      `}</style>

      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent transition-opacity duration-300 ${
          canLeft ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent transition-opacity duration-300 ${
          canRight ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <button
        type="button"
        onClick={() => scrollBy('left')}
        aria-label="Précédent"
        className={`absolute left-2 top-[52px] z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/70 text-white/85 shadow-lg backdrop-blur transition duration-300 hover:border-univ-lime/40 hover:text-univ-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime ${
          canLeft ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={() => scrollBy('right')}
        aria-label="Suivant"
        className={`absolute right-2 top-[52px] z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/70 text-white/85 shadow-lg backdrop-blur transition duration-300 hover:border-univ-lime/40 hover:text-univ-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime ${
          canRight ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ChevronRight size={18} />
      </button>

      <div ref={scrollRef} className="cat-slider">
        <div className="flex w-max items-start gap-6 px-2 py-3">
          {categories.map((category) => {
            const isActive = activeSlug === category.slug;
            return (
              <button
                key={category.slug}
                ref={isActive ? activeRef : undefined}
                onClick={() => navigate(`${localizePath('/produits')}?category=${category.slug}`)}
                aria-current={isActive ? 'true' : undefined}
                className="group flex w-24 shrink-0 flex-col items-center gap-2.5 focus-visible:outline-none sm:w-28"
              >
                <span
                  className={`relative grid h-24 w-24 place-items-center overflow-hidden rounded-full bg-white/[0.04] ring-2 transition duration-300 group-hover:-translate-y-0.5 group-hover:ring-univ-lime/50 sm:h-28 sm:w-28 ${
                    isActive ? 'ring-univ-lime' : 'ring-white/10'
                  }`}
                >
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-white/50">
                      {category.name?.charAt(0)?.toUpperCase()}
                    </span>
                  )}
                </span>
                <span
                  className={`line-clamp-2 text-center text-xs font-semibold leading-tight transition-colors duration-300 sm:text-sm ${
                    isActive ? 'text-univ-lime' : 'text-white/80 group-hover:text-univ-lime'
                  }`}
                >
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;