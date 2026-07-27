'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';
import { adsData, type AdSlide } from '../../data/shop/ads';

const INTERVAL = 3000;

export default function Ads({ slides = adsData }: { slides?: AdSlide[] }) {
  const navigate = useNavigate();
  const localizePath = useLocalizedPath();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = slides.length;

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (paused || count <= 1) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => setIndex((v) => (v + 1) % count), INTERVAL);
    return () => clearInterval(id);
  }, [paused, count]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  return (
    <section
      className="group/ads relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0B]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(.16,.84,.28,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => {
          const centered = s.align === 'center';
          return (
            <div key={s.id} className="relative min-w-full">
              <div className="relative h-[180px] w-full overflow-hidden sm:h-[280px] lg:h-[300px]">
                <img
                  src={s.image}
                  alt={s.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
                    i === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${s.tint ?? 'from-black/80 via-black/40 to-transparent'}`}
                />
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#a8ff35]/15 blur-[110px]" />

                <div
                  className={`relative z-10 flex h-full max-w-2xl flex-col justify-center px-8 sm:px-14 ${
                    centered ? 'mx-auto items-center text-center' : 'items-start text-left'
                  }`}
                >
                  {s.badge && (
                    <span className="mb-3 inline-block rounded-full bg-[#a8ff35] px-3 py-1 text-xs font-extrabold text-black">
                      {s.badge}
                    </span>
                  )}
                  {s.eyebrow && (
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#a8ff35]">
                      {s.eyebrow}
                    </p>
                  )}
                  <h2 className="display-text mt-3 text-4xl leading-none text-white sm:text-5xl lg:text-6xl">
                    {s.title}
                  </h2>
                  {s.subtitle && (
                    <p
                      className={`mt-3 max-w-md text-sm font-light text-zinc-200 sm:text-base ${centered ? 'mx-auto' : ''}`}
                    >
                      {s.subtitle}
                    </p>
                  )}
                  <button
                    onClick={() => navigate(localizePath(s.href))}
                    className="group/cta mt-6 inline-flex items-center gap-2 rounded-full bg-[#a8ff35] px-6 py-3 text-sm font-bold text-black transition hover:brightness-105"
                  >
                    {s.cta}
                    <ArrowRight className="h-4 w-4 transition group-hover/cta:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {count > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Précédent"
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/40 text-white/80 opacity-0 backdrop-blur-md transition hover:bg-black/70 hover:text-white group-hover/ads:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Suivant"
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/40 text-white/80 opacity-0 backdrop-blur-md transition hover:bg-black/70 hover:text-white group-hover/ads:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Diapositive ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-7 bg-[#a8ff35]' : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
