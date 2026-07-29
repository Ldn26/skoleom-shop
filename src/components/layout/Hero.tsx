// // 'use client';

// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { ArrowRight, ShoppingBag, Store, LayoutDashboard } from 'lucide-react';
// // import { useLocalizedPath } from '@/i18n/useLocalizedPath';
// // import {useTranslation} from 'react-i18next';
// // const FIGURES_BUYER = [
// //   { v: '98,4 %', l: 'Précision taille IA' },
// //   { v: '< 5 %', l: 'Taux de retour cible' },
// //   { v: '3,2×', l: 'Conversion après essayage' },
// //   { v: '2 138', l: 'Plateformes OTT' },
// // ];

// // const FIGURES_SELLER = [
// //   { v: '+140%', l: 'Taux de conversion moyen' },
// //   { v: '-80%', l: 'Retours produits évités' },
// //   { v: '24/7', l: 'Boutique IA automatisée' },
// //   { v: '0€', l: 'Frais d’installation' },
// // ];

// // export default function Hero() {
// //   const navigate = useNavigate();
// //   const localizePath = useLocalizedPath();
// //   const { t } = useTranslation();

// //   const [activeRole, setActiveRole] = useState<'acheteur' | 'vendeur'>('acheteur');

// //   const isBuyer = activeRole === 'acheteur';
// //   const figures = isBuyer ? FIGURES_BUYER : FIGURES_SELLER;

// //   return (
// //     <section className="sk-hero relative flex min-h-[100dvh] w-full items-center justify-center  text-white px-4 sm:px-6 md:px-8 py-16 sm:py-24">
// //       <style>{`
// //         .sk-hero [data-reveal] { opacity: 0; transform: translateY(18px); animation: sk-hero-rise .8s cubic-bezier(.16,.84,.28,1) forwards; }
// //         @keyframes sk-hero-rise { to { opacity: 1; transform: none; } }
// //         @media (prefers-reduced-motion: reduce) {
// //           .sk-hero [data-reveal] { animation: none !important; opacity: 1 !important; transform: none !important; }
// //         }
// //       `}</style>

// //       <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        
// //         <div data-reveal style={{ animationDelay: '0.02s' }} className="mb-8 flex w-full justify-center">
// //           <div className="inline-flex w-full max-w-sm sm:w-auto p-1 rounded-xl bg-zinc-900 border border-zinc-800">
// //             <button
// //               type="button"
// //               onClick={() => setActiveRole('acheteur')}
// //               className={`flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
// //                 isBuyer
// //                   ? 'bg-zinc-100 text-zinc-950 shadow-sm'
// //                   : 'text-zinc-400 hover:text-zinc-200'
// //               }`}
// //             >
// //               <ShoppingBag className="h-4 w-4 shrink-0" />
// //               <span>Je suis Acheteur</span>
// //             </button>
// //             <button
// //               type="button"
// //               onClick={() => setActiveRole('vendeur')}
// //               className={`flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
// //                 !isBuyer
// //                   ? 'bg-zinc-100 text-zinc-950 shadow-sm'
// //                   : 'text-zinc-400 hover:text-zinc-200'
// //               }`}
// //             >
// //               <Store className="h-4 w-4 shrink-0" />
// //               <span>Je suis Vendeur</span>
// //             </button>
// //           </div>
// //         </div>

// //         <div data-reveal style={{ animationDelay: '0.08s' }}>
// //           <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#a8ff35]">
// //             Marketplace IA — Watch. Touch. Buy<span className="align-super text-[0.6em]">®</span>
// //           </span>
// //         </div>

// //         <h1 data-reveal style={{ animationDelay: '0.16s' }} className="mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.08] max-w-4xl">
// //           {isBuyer ? (
// //             <>
// //               Essayez <span className="text-[#a8ff35]">tout</span> avant d’acheter.
// //             </>
// //           ) : (
// //             <>
// //               Vendez avec <span className="text-[#a8ff35]">l’IA</span> boostez vos conversions.
// //             </>
// //           )}
// //         </h1>

// //         <p data-reveal style={{ animationDelay: '0.24s' }} className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-zinc-400 font-normal leading-relaxed">
// //           {isBuyer ? (
// //             <>
// //               La marketplace nouvelle génération propulsée par l’IA. Cabine d’essayage virtuelle,
// //               taille intelligente par marque et achat instantané depuis n’importe quelle vidéo.
// //             </>
// //           ) : (
// //             <>
// //               Offrez à vos clients une cabine d’essayage virtuelle immersive sur votre boutique.
// //               Réduisez drastiquement vos retours et augmentez vos taux de transformation.
// //             </>
// //           )}
// //         </p>

// //         <div data-reveal style={{ animationDelay: '0.32s' }} className="mt-8 flex w-full max-w-md sm:max-w-none flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
// //           {isBuyer ? (
// //             <>
// //               <button
// //                 type="button"
// //                 onClick={() => navigate(localizePath('/essayage'))}
// //                 className="group flex items-center justify-center gap-2.5 rounded-xl bg-[#a8ff35] px-7 py-3.5 text-sm font-semibold text-zinc-950 transition duration-200 hover:bg-[#b5ff4d]"
// //               >
// //                 <span>Créer mon avatar IA</span>
// //                 <ArrowRight className="h-4 w-4 shrink-0 transition duration-200 group-hover:translate-x-0.5" />
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={() => navigate(localizePath('/catalogue'))}
// //                 className="flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 px-7 py-3.5 text-sm font-medium text-zinc-200 transition duration-200 hover:bg-zinc-800 hover:text-white"
// //               >
// //                 <span>Explorer le catalogue</span>
// //               </button>
// //             </>
// //           ) : (
// //             <>
// //               <button
// //                 type="button"
// //                 onClick={() => navigate(localizePath('/dashboard/vendeur'))}
// //                 className="group flex items-center justify-center gap-2.5 rounded-xl bg-[#a8ff35] px-7 py-3.5 text-sm font-semibold text-zinc-950 transition duration-200 hover:bg-[#b5ff4d]"
// //               >
// //                 <LayoutDashboard className="h-4 w-4 shrink-0" />
// //                 <span>Accéder au Dashboard Vendeur</span>
// //                 <ArrowRight className="h-4 w-4 shrink-0 transition duration-200 group-hover:translate-x-0.5" />
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={() => navigate(localizePath('/connection'))}
// //                 className="flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 px-7 py-3.5 text-sm font-medium text-zinc-200 transition duration-200 hover:bg-zinc-800 hover:text-white"
// //               >
// //                 <span>Ouvrir ma boutique</span>
// //               </button>
// //             </>
// //           )}
// //         </div>

// //         <div data-reveal style={{ animationDelay: '0.42s' }} className="mt-12 sm:mt-16 w-full max-w-4xl grid grid-cols-2 gap-6 sm:gap-8 border-t border-zinc-800/80 pt-8 md:grid-cols-4">
// //           {figures.map((f) => (
// //             <div key={f.l} className="flex flex-col items-center">
// //               <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
// //                 {f.v}
// //               </span>
// //               <span className="mt-1 text-xs sm:text-sm text-zinc-400 font-normal">
// //                 {f.l}
// //               </span>
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }




// 'use client';

// import { useNavigate } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import { useLocalizedPath } from '@/i18n/useLocalizedPath';

// const FIGURES = [
//   { v: '98,4 %', l: 'Précision taille IA' },
//   { v: '2 138', l: 'Plateformes OTT' },
//   { v: '< 5 %', l: 'Taux de retour cible' },
//   { v: '3,2×', l: 'Conversion après essayage' },
// ];

// export default function Hero() {
//   const navigate = useNavigate();
//   const localizePath = useLocalizedPath();

//   return (
//     <section className="sk-hero relative flex min-h-screen items-center overflow-hidden">
//       <style>{`
//         .sk-hero [data-reveal] { opacity: 0; transform: translateY(22px); animation: sk-hero-rise .9s cubic-bezier(.16,.84,.28,1) forwards; }
//         @keyframes sk-hero-rise { to { opacity: 1; transform: none; } }
//         @keyframes sk-hero-underline { from { transform: scaleX(0); } to { transform: scaleX(1); } }
//         .sk-hero .underline-accent { transform-origin: left; animation: sk-hero-underline .7s .7s cubic-bezier(.16,.84,.28,1) both; }
//         @media (prefers-reduced-motion: reduce) {
//           .sk-hero [data-reveal], .sk-hero .underline-accent { animation: none !important; opacity: 1 !important; transform: none !important; }
//         }
//       `}</style>

//       {/* Background banner — subject sits on the right, kept clean */}
//       <img
//         src="/banner.webp"
//         alt=""
//         aria-hidden
//         className="absolute inset-0 h-full w-full object-cover object-right"
//         onError={(e) => {
//           e.currentTarget.style.display = 'none';
//         }}
//       />
//       {/* Left-weighted scrim: dark on the left for the text, transparent on the right */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

//       {/* Content — locked to the left column */}
//       <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 sm:px-10">
//         <div className="max-w-xl">
//           <p data-reveal style={{ animationDelay: '0.05s' }} className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#a8ff35]">
//             Marketplace IA — Watch. Touch. Buy.<span className="align-super text-[.6em]">®</span>
//           </p>

//           <h1 data-reveal style={{ animationDelay: '0.15s' }} className="display-text mt-7 text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[0.95] text-white">
//             Essayez{' '}
//             <span className="relative text-[#a8ff35]">
//               tout
//               <span className="underline-accent absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#a8ff35]" />
//             </span>
//             <br />
//             avant d’acheter
//           </h1>

//           <p data-reveal style={{ animationDelay: '0.28s' }} className="mt-7 max-w-md text-base font-light leading-8 text-zinc-300 sm:text-lg">
//             La marketplace nouvelle génération propulsée par l’IA. Cabine d’essayage virtuelle,
//             taille intelligente par marque et achat instantané depuis n’importe quelle vidéo.
//           </p>

//           <div data-reveal style={{ animationDelay: '0.4s' }} className="mt-9 flex flex-wrap gap-4">
//             <button
//               type="button"
//               onClick={() => navigate(localizePath('/essayage'))}
//               className="group inline-flex items-center gap-2 rounded-full bg-[#a8ff35] px-7 py-4 font-semibold text-black shadow-[0_10px_40px_-12px_rgba(168,255,53,0.7)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-14px_rgba(168,255,53,0.85)]"
//             >
//               Créer mon avatar IA
//               <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
//             </button>
//             <button
//               type="button"
//               onClick={() => navigate(localizePath('/catalogue'))}
//               className="rounded-full border border-white/20 bg-white/[0.03] px-7 py-4 font-medium text-white/90 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.06]"
//             >
//               Explorer le catalogue
//             </button>
//           </div>

//           <div data-reveal style={{ animationDelay: '0.55s' }} className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8">
//             {FIGURES.map((f) => (
//               <div key={f.l}>
//                 <div className="display-text text-3xl text-[#a8ff35] sm:text-4xl">{f.v}</div>
//                 <div className="mt-1.5 text-sm text-zinc-400">{f.l}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

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

  return (
    <section className="sk-hero relative flex min-h-screen items-center overflow-hidden">
      <style>{`
        .sk-hero [data-reveal] { opacity: 0; transform: translateY(22px); animation: sk-hero-rise .9s cubic-bezier(.16,.84,.28,1) forwards; }
        @keyframes sk-hero-rise { to { opacity: 1; transform: none; } }
        @keyframes sk-hero-underline { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .sk-hero .underline-accent { transform-origin: left; animation: sk-hero-underline .7s .7s cubic-bezier(.16,.84,.28,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .sk-hero [data-reveal], .sk-hero .underline-accent { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      {/* Background banner — subject sits on the right, kept clean */}
      <img
        src="/banner.webp"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-right"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      {/* Left-weighted scrim: dark on the left for the text, transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Content — locked to the left column */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 sm:px-10">
        <div className="max-w-xl">
          <p data-reveal style={{ animationDelay: '0.05s' }} className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#a8ff35]">
            Marketplace IA — Watch. Touch. Buy.<span className="align-super text-[.6em]">®</span>
          </p>

          <h1 data-reveal style={{ animationDelay: '0.15s' }} className="display-text mt-7 text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[0.95] text-white">
            Essayez{' '}
            <span className="relative text-[#a8ff35]">
              tout
              <span className="underline-accent absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#a8ff35]" />
            </span>
            <br />
            avant d’acheter
          </h1>

          <p data-reveal style={{ animationDelay: '0.28s' }} className="mt-7 max-w-md text-base font-light leading-8 text-zinc-300 sm:text-lg">
            La marketplace nouvelle génération propulsée par l’IA. Cabine d’essayage virtuelle,
            taille intelligente par marque et achat instantané depuis n’importe quelle vidéo.
          </p>

          <div data-reveal style={{ animationDelay: '0.4s' }} className="mt-9 flex flex-wrap gap-4">
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

          <div data-reveal style={{ animationDelay: '0.55s' }} className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8">
            {FIGURES.map((f) => (
              <div key={f.l}>
                <div className="display-text text-3xl text-[#a8ff35] sm:text-4xl">{f.v}</div>
                <div className="mt-1.5 text-sm text-zinc-400">{f.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}