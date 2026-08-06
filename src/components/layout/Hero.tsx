

'use client';

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  ShoppingBag,
  Sparkles,
  Store,
} from 'lucide-react';
import { useLocalizedPath } from '@/i18n/useLocalizedPath';

const HERO_SLIDES = ['/shop/landig/bg2).webp', '/shop/landig/login.webp'];
const HERO_SLIDE_INTERVAL = 6000;

export default function Hero() {
  const navigate = useNavigate();
  const localizePath = useLocalizedPath();
  const [activeRole, setActiveRole] = useState<'acheteur' | 'vendeur'>('acheteur');
  const isBuyer = activeRole === 'acheteur';

  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (paused || reduceMotionRef.current || HERO_SLIDES.length < 2) return;
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, HERO_SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  const goToSlide = (index: number) => {
    setSlide(((index % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="sk-hero relative mt-8 flex min-h-[100svh] w-full items-center justify-center overflow-hidden text-center">
      <style>{`
        .sk-hero [data-reveal]{opacity:0;transform:translateY(18px);animation:sk-hero-rise .8s cubic-bezier(.16,.84,.28,1) forwards;}
        @keyframes sk-hero-rise{to{opacity:1;transform:none;}}
        @keyframes sk-hero-bounce{0%,100%{transform:translateY(0);}50%{transform:translateY(6px);}}
        .sk-hero [data-bounce]{animation:sk-hero-bounce 2.2s ease-in-out infinite;}
        @media (prefers-reduced-motion: reduce){.sk-hero [data-reveal]{animation:none!important;opacity:1!important;transform:none!important;}.sk-hero [data-bounce]{animation:none!important;}}
      `}</style>

      <div
        className="absolute inset-0 hidden md:block"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {HERO_SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1500ms] ease-in-out ${
              i === slide ? 'opacity-100' : 'opacity-0'
            }`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0)_55%)]" />

      {HERO_SLIDES.length > 1 && (
        <div className="absolute inset-x-0 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-between px-4 md:flex lg:px-8">
          <button
            type="button"
            onClick={() => goToSlide(slide - 1)}
            aria-label="Image précédente"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/80 backdrop-blur-md transition duration-300 hover:border-white/40 hover:bg-black/60 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goToSlide(slide + 1)}
            aria-label="Image suivante"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/80 backdrop-blur-md transition duration-300 hover:border-white/40 hover:bg-black/60 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 py-28 sm:px-8 lg:px-12">
          {/* Role switch */}
          <div data-reveal style={{ animationDelay: '0.02s' }} className="mb-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-zinc-950/70 p-1.5 shadow-2xl backdrop-blur-xl">
              <button
                type="button"
                onClick={() => setActiveRole('acheteur')}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                  isBuyer
                    ? 'bg-skoleom-lime text-zinc-950 shadow-[0_4px_20px_rgba(168,255,53,0.4)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <ShoppingBag className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span>Acheteur</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveRole('vendeur')}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                  !isBuyer
                    ? 'bg-skoleom-lime text-zinc-950 shadow-[0_4px_20px_rgba(168,255,53,0.4)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Store className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span>Vendeur</span>
              </button>
            </div>
          </div>

          {/* Eyebrow */}
          <div data-reveal style={{ animationDelay: '0.08s' }} className="mb-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-skoleom-lime/40 bg-skoleom-lime/10 px-3.5 py-1.5 shadow-inner backdrop-blur-md sm:px-4">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-skoleom-lime" />
              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-skoleom-lime sm:text-xs sm:tracking-[0.25em]">
                Watch • Touch • Buy
              </span>
            </div>
          </div>

          {/* Headline — Anton via font-display */}
          <h1
            data-reveal
            style={{ animationDelay: '0.16s' }}
            className="font-display max-w-3xl text-center text-4xl uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {isBuyer ? (
              <>
                Essayez <span className="text-skoleom-lime">tout</span> avant d'acheter.
              </>
            ) : (
              <>
                <span className="text-skoleom-lime">Boostez</span> vos conversions.
              </>
            )}
          </h1>

          {/* Subcopy */}
          <p
            data-reveal
            style={{ animationDelay: '0.24s' }}
            className="mx-auto mt-5 max-w-lg text-center text-sm font-light leading-relaxed tracking-wide text-zinc-300 sm:mt-6 sm:text-base md:text-lg"
          >
            {isBuyer
              ? "La marketplace nouvelle génération propulsée par l'IA. Cabine d'essayage virtuelle, taille intelligente par marque et achat instantané depuis n'importe quelle vidéo."
              : "Offrez à vos clients une cabine d'essayage virtuelle immersive sur votre boutique. Réduisez drastiquement vos retours et augmentez vos taux de transformation."}
          </p>

          {/* CTAs */}
          <div
            data-reveal
            style={{ animationDelay: '0.32s' }}
            className="mt-8 flex w-full flex-col items-center gap-3.5 sm:w-auto sm:flex-row sm:justify-center"
          >
            {isBuyer ? (
              <>
                <button
                  type="button"
                  onClick={() => navigate(localizePath('/essayage'))}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-skoleom-lime px-7 py-4 text-sm font-bold text-black shadow-[0_10px_35px_-10px_rgba(168,255,53,0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b8ff4d] sm:px-8"
                >
                  <span>Créer mon avatar IA</span>
                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate(localizePath('/catalogue'))}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08] sm:px-8"
                >
                  <span>Explorer le catalogue</span>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => navigate(localizePath('vendeur/dashboard'))}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-skoleom-lime px-7 py-4 text-sm font-bold text-black shadow-[0_10px_35px_-10px_rgba(168,255,53,0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b8ff4d] sm:px-8"
                >
                  <LayoutDashboard className="h-4 w-4 shrink-0" />
                  <span>Dashboard Vendeur</span>
                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  
                  onClick={() => navigate(localizePath('/connection'))}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08] sm:px-8"
                >
                  <span>Ouvrir ma boutique</span>
                </button>
              </>
            )}
          </div>
      </div>

      {HERO_SLIDES.length > 1 && (
        <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 md:flex">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Voir l'image ${i + 1}`}
              aria-current={i === slide}
              onClick={() => goToSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === slide ? 'w-8 bg-skoleom-lime' : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}

      <div data-bounce aria-hidden className="absolute bottom-6 right-6 z-20 hidden text-white/50 md:flex">
        <ChevronDown className="h-5 w-5" />
      </div>
    </section>
  );
}