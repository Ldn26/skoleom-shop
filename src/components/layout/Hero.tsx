'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Store, LayoutDashboard } from 'lucide-react';
import { useLocalizedPath } from '@/i18n/useLocalizedPath';

const FIGURES_BUYER = [
  { v: '98,4 %', l: 'Précision taille IA' },
  { v: '< 5 %', l: 'Taux de retour cible' },
  { v: '3,2×', l: 'Conversion après essayage' },
  { v: '2 138', l: 'Plateformes OTT' },
];

const FIGURES_SELLER = [
  { v: '+140%', l: 'Taux de conversion moyen' },
  { v: '-80%', l: 'Retours produits évités' },
  { v: '24/7', l: 'Boutique IA automatisée' },
  { v: '0€', l: 'Frais d’installation' },
];

export default function Hero() {
  const navigate = useNavigate();
  const localizePath = useLocalizedPath();

  // Role state: 'acheteur' | 'vendeur'
  const [activeRole, setActiveRole] = useState<'acheteur' | 'vendeur'>('acheteur');

  const isBuyer = activeRole === 'acheteur';
  const figures = isBuyer ? FIGURES_BUYER : FIGURES_SELLER;

  return (
    <section className="sk-hero relative flex min-h-screen items-center overflow-hidden  text-white">
      <style>{`
        .sk-hero [data-reveal] { opacity: 0; transform: translateY(22px); animation: sk-hero-rise .9s cubic-bezier(.16,.84,.28,1) forwards; }
        @keyframes sk-hero-rise { to { opacity: 1; transform: none; } }
        @keyframes sk-hero-underline { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .sk-hero .underline-accent { transform-origin: left; animation: sk-hero-underline .7s .7s cubic-bezier(.16,.84,.28,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .sk-hero [data-reveal], .sk-hero .underline-accent { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-16">
        
        {/* Role Switcher Pills */}
        <div data-reveal style={{ animationDelay: '0.02s' }} className="mb-6 flex items-center gap-2">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveRole('acheteur')}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                isBuyer
                  ? 'bg-[#a8ff35] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              Je suis Acheteur
            </button>
            <button
              type="button"
              onClick={() => setActiveRole('vendeur')}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                !isBuyer
                  ? 'bg-[#a8ff35] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Store className="h-3.5 w-3.5" />
              Je suis Vendeur / Marque
            </button>
          </div>
        </div>

        {/* Tagline */}
        <p data-reveal style={{ animationDelay: '0.05s' }} className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a8ff35]">
          Marketplace IA — Watch. Touch. Buy.<span className="align-super text-[.6em]">®</span>
        </p>

        {/* Dynamic Heading */}
        <h1 data-reveal style={{ animationDelay: '0.15s' }} className="display-text mt-7 text-[clamp(2.8rem,8vw,6.5rem)] font-extrabold leading-none tracking-tight">
          {isBuyer ? (
            <>
              Essayez <span className="relative text-[#a8ff35]">tout</span>,<br />
              avant d’acheter
            </>
          ) : (
            <>
              Vendez avec <span className="relative text-[#a8ff35]">l’IA</span>,<br />
              boostez vos conversions
            </>
          )}
        </h1>

        {/* Dynamic Description */}
        <p data-reveal style={{ animationDelay: '0.28s' }} className="mt-8 max-w-xl text-lg font-light leading-8 text-zinc-300">
          {isBuyer ? (
            <>
              La marketplace nouvelle génération propulsée par l’IA. Cabine d’essayage virtuelle,
              taille intelligente par marque et achat instantané depuis n’importe quelle vidéo.
            </>
          ) : (
            <>
              Offrez à vos clients une cabine d’essayage virtuelle immersive sur votre boutique.
              Réduisez drastiquement vos retours et augmentez vos taux de transformation.
            </>
          )}
        </p>

        {/* Dynamic Action Buttons */}
        <div data-reveal style={{ animationDelay: '0.4s' }} className="mt-10 flex flex-wrap gap-4">
          {isBuyer ? (
            <>
              <button
                type="button"
                onClick={() => navigate(localizePath('/essayage'))}
                className="group inline-flex items-center gap-2 rounded-full bg-[#a8ff35] px-7 py-4 font-semibold text-black shadow-[0_10px_40px_-12px_rgba(168,255,53,0.7)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-14px_rgba(168,255,53,0.85)]"
              >
                Créer mon avatar IA
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => navigate(localizePath('/catalogue'))}
                className="rounded-full border border-white/20 bg-white/[0.03] px-7 py-4 font-medium text-white/90 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.06]"
              >
                Explorer le catalogue
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => navigate(localizePath('/dashboard/vendeur'))}
                className="group inline-flex items-center gap-2 rounded-full bg-[#a8ff35] px-7 py-4 font-semibold text-black shadow-[0_10px_40px_-12px_rgba(168,255,53,0.7)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-14px_rgba(168,255,53,0.85)]"
              >
                <LayoutDashboard className="h-4 w-4" />
                Accéder au Dashboard Vendeur
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => navigate(localizePath('/connection'))}
                className="rounded-full border border-white/20 bg-white/[0.03] px-7 py-4 font-medium text-white/90 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.06]"
              >
                Ouvrir ma boutique
              </button>
            </>
          )}
        </div>

        {/* Dynamic Key Metrics */}
        <div data-reveal style={{ animationDelay: '0.55s' }} className="mt-16 grid max-w-4xl grid-cols-2 gap-y-8 border-t border-white/10 pt-8 md:grid-cols-4">
          {figures.map((f) => (
            <div key={f.l}>
              <div className="display-text text-3xl font-bold text-[#a8ff35] md:text-4xl">{f.v}</div>
              <div className="mt-2 text-xs font-medium text-zinc-400 md:text-sm">{f.l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}