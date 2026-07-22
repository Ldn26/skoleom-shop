'use client';

import { useEffect, useRef, useState } from 'react';
import LiquidEther from '../LiquidEther';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLocalizedPath } from '@/i18n/useLocalizedPath';

const FIGURES = [
  { v: '98,4 %', l: 'Précision taille IA' },
  { v: '2 138', l: 'Plateformes OTT' },
  { v: '< 5 %', l: 'Taux de retour cible' },
  { v: '3,2×', l: 'Conversion après essayage' },
];

export default function Hero() {
  const navigate = useNavigate();
  const localizePath = useLocalizedPath();

  const sectionRef = useRef<HTMLElement | null>(null);
  const [capable, setCapable] = useState(false);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.matchMedia('(max-width: 767px)').matches;
    const cores = navigator.hardwareConcurrency ?? 8;
    setCapable(!reduced && !small && cores >= 4);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.04,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const runAurora = capable && inView;

  return (
    <section
      ref={sectionRef}
      className="sk-hero relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0B]"
    >
      <style>{`
        .sk-hero .static-aurora::before,
        .sk-hero .static-aurora::after {
          content: ''; position: absolute; border-radius: 9999px;
          filter: blur(90px); will-change: transform; pointer-events: none;
        }
        .sk-hero .static-aurora::before {
          width: 55vw; height: 55vw; left: 8%; top: -18%;
          background: radial-gradient(circle, rgba(168,255,53,0.55), transparent 62%);
          animation: sk-drift-a 18s ease-in-out infinite alternate;
        }
        .sk-hero .static-aurora::after {
          width: 48vw; height: 48vw; right: 2%; top: 22%;
          background: radial-gradient(circle, rgba(0,224,255,0.32), transparent 62%);
          animation: sk-drift-b 22s ease-in-out infinite alternate;
        }
        @keyframes sk-drift-a { from { transform: translate3d(-4%,-3%,0) scale(1); } to { transform: translate3d(6%,4%,0) scale(1.12); } }
        @keyframes sk-drift-b { from { transform: translate3d(4%,2%,0) scale(1.05); } to { transform: translate3d(-6%,-4%,0) scale(0.95); } }
        .sk-hero .aurora-gl { animation: sk-hero-fade 1.2s ease-out both; }
        .sk-hero [data-reveal] { opacity: 0; transform: translateY(22px); animation: sk-hero-rise .9s cubic-bezier(.16,.84,.28,1) forwards; }
        @keyframes sk-hero-rise { to { opacity: 1; transform: none; } }
        @keyframes sk-hero-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes sk-hero-underline { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .sk-hero .underline-accent { transform-origin: left; animation: sk-hero-underline .7s .7s cubic-bezier(.16,.84,.28,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .sk-hero .static-aurora::before, .sk-hero .static-aurora::after,
          .sk-hero .aurora-gl, .sk-hero [data-reveal], .sk-hero .underline-accent {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
        }
      `}</style>

      {/* Cheap CSS aurora — always present (base + fallback for weak devices / off-screen) */}
      <div className="static-aurora absolute inset-0" aria-hidden />

      {/* WebGL aurora — only while capable AND on screen */}
      {runAurora && (
        <div className="aurora-gl absolute inset-0">
          <LiquidEther
            colors={['#a8ff35', '#6fe600', '#00e0ff']}
            mouseForce={16}
            cursorSize={90}
            isViscous={false}
            iterationsViscous={12}
            iterationsPoisson={16}
            resolution={0.35}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={1.8}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
      )}

      {/* Legibility scrims */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/35 via-[#0A0A0B]/55 to-[#0A0A0B]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A0A0B]/85 via-[#0A0A0B]/35 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28">
        <p
          data-reveal
          style={{ animationDelay: '0.05s' }}
          className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a8ff35]"
        >
          Marketplace IA — Watch. Touch. Buy.<span className="align-super text-[.6em]">®</span>
        </p>

        <h1
          data-reveal
          style={{ animationDelay: '0.15s' }}
          className="display-text mt-7 text-[clamp(3rem,9vw,7rem)] text-white"
        >
          Essayez{' '}
          <span className="relative text-[#a8ff35]">
            tout
            <span className="underline-accent absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#a8ff35]" />
          </span>
          <br />
          avant d’acheter
        </h1>

        <p
          data-reveal
          style={{ animationDelay: '0.28s' }}
          className="mt-8 max-w-xl text-lg font-light leading-8 text-zinc-300"
        >
          La marketplace nouvelle génération propulsée par l’IA. Cabine d’essayage virtuelle,
          taille intelligente par marque et achat instantané depuis n’importe quelle vidéo.
        </p>

        <div data-reveal style={{ animationDelay: '0.4s' }} className="mt-10 flex flex-wrap gap-4">
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
        </div>

        <div
          data-reveal
          style={{ animationDelay: '0.55s' }}
          className="mt-20 grid max-w-4xl grid-cols-2 gap-y-8 border-t border-white/10 pt-8 md:grid-cols-4"
        >
          {FIGURES.map((f) => (
            <div key={f.l}>
              <div className="display-text text-4xl text-[#a8ff35]">{f.v}</div>
              <div className="mt-2 text-sm text-zinc-500">{f.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}