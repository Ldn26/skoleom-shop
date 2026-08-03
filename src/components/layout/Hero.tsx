
'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Store, LayoutDashboard, Sparkles } from 'lucide-react';
import { useLocalizedPath } from '@/i18n/useLocalizedPath';

export default function Hero() {
  const navigate = useNavigate();
  const localizePath = useLocalizedPath();
  const [activeRole, setActiveRole] = useState<'acheteur' | 'vendeur'>('acheteur');
  const isBuyer = activeRole === 'acheteur';

  return (
    <section className="sk-hero relative flex min-h-[100svh]  mt-8  w-full items-center overflow-hidden">
      <style>{`
        .sk-hero [data-reveal]{opacity:0;transform:translateY(18px);animation:sk-hero-rise .8s cubic-bezier(.16,.84,.28,1) forwards;}
        @keyframes sk-hero-rise{to{opacity:1;transform:none;}}
        @media (prefers-reduced-motion: reduce){.sk-hero [data-reveal]{animation:none!important;opacity:1!important;transform:none!important;}}
      `}</style>

      <img
        src="/shop/landig/bg2).webp"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full  hidden  md:block   w-full object-cover object-[70%_center] sm:object-right"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex max-w-xl flex-col justify-center py-24 text-left lg:max-w-2xl">

          <div data-reveal style={{ animationDelay: '0.02s' }} className="mb-6 flex">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-zinc-950/70 p-1.5 shadow-2xl backdrop-blur-xl">
              <button
                type="button"
                onClick={() => setActiveRole('acheteur')}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                  isBuyer ? 'bg-[#a8ff35] text-zinc-950 shadow-[0_4px_20px_rgba(168,255,53,0.4)]' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <ShoppingBag className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span>Acheteur</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveRole('vendeur')}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                  !isBuyer ? 'bg-[#a8ff35] text-zinc-950 shadow-[0_4px_20px_rgba(168,255,53,0.4)]' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Store className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span>Vendeur</span>
              </button>
            </div>
          </div>

          <div data-reveal style={{ animationDelay: '0.08s' }} className="mb-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a8ff35]/40 bg-[#a8ff35]/10 px-3.5 py-1.5 shadow-inner backdrop-blur-md sm:px-4">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#a8ff35]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#a8ff35] sm:text-xs sm:tracking-[0.25em]">
                Marketplace IA — Watch • Touch • Buy
              </span>
            </div>
          </div>

          <h1
            data-reveal
            style={{ animationDelay: '0.16s' }}
            className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {isBuyer ? (
              <>Essayez <span className="text-[#a8ff35]">tout</span> avant d'acheter.</>
            ) : (
              <><span className="text-[#a8ff35]">Boostez</span> vos conversions.</>
            )}
          </h1>

          <p
            data-reveal
            style={{ animationDelay: '0.24s' }}
            className="mt-5 max-w-lg text-sm font-light leading-relaxed tracking-wide text-zinc-300 sm:mt-6 sm:text-base md:text-lg"
          >
            {isBuyer
              ? "La marketplace nouvelle génération propulsée par l'IA. Cabine d'essayage virtuelle, taille intelligente par marque et achat instantané depuis n'importe quelle vidéo."
              : "Offrez à vos clients une cabine d'essayage virtuelle immersive sur votre boutique. Réduisez drastiquement vos retours et augmentez vos taux de transformation."}
          </p>

          <div
            data-reveal
            style={{ animationDelay: '0.32s' }}
            className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center"
          >
            {isBuyer ? (
              <>
                <button
                  type="button"
                  onClick={() => navigate(localizePath('/essayage'))}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#a8ff35] px-7 py-4 text-sm font-bold text-black shadow-[0_10px_35px_-10px_rgba(168,255,53,0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b8ff4d] sm:px-8"
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
                  onClick={() => navigate(localizePath('/dashboard/vendeur'))}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#a8ff35] px-7 py-4 text-sm font-bold text-black shadow-[0_10px_35px_-10px_rgba(168,255,53,0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b8ff4d] sm:px-8"
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
      </div>
    </section>
  );
}