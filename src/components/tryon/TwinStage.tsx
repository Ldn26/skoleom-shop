
// // import type { WooProduct } from '../../api/product';
// // import type { AvatarData, MeasurementValues } from '../../types/tryon';
// // import { fitColor } from '../../utils/producthelper';
// // import { ScanOverlay } from './ui';

// // export function TwinStage({
// //   avatar,
// //   garment,
// //   fitScore,
// //   scanning,
// //   measurements,
// //   tryOnImage,
// // }: {
// //   avatar: AvatarData | null;
// //   garment: WooProduct | null;
// //   fitScore: number | null;
// //   scanning: boolean;
// //   measurements: MeasurementValues;
// //   tryOnImage?: string | null;
// // }) {
// //   const color = fitColor(fitScore);

// //   return (
// //     <div
// //       className="relative border border-white/10 rounded-[22px] overflow-hidden min-h-[560px] grid place-items-center"
// //       style={{
// //         background: 'linear-gradient(180deg, #0a0c14 0%, #070810 100%)',
// //         backgroundImage: [
// //           'repeating-linear-gradient(90deg, transparent 0 32px, rgba(163,230,53,.04) 32px 33px)',
// //           'repeating-linear-gradient(0deg,  transparent 0 32px, rgba(163,230,53,.04) 32px 33px)',
// //         ].join(', '),
// //       }}
// //     >
// //       {/* Floor glow */}
// //       <div
// //         className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-6 blur-[10px]"
// //         style={{ background: 'radial-gradient(ellipse, rgba(163,230,53,.22), transparent 70%)' }}
// //       />

// //       {/* Live measurements badge */}
// //       <div className="absolute top-4 left-4 bg-[rgba(7,8,12,0.88)] border border-white/10 rounded-[10px] px-3 py-2.5 text-[10px] z-10">
// //         {[
// //           ['H',  `${measurements.height} cm`],
// //           ['P',  `${measurements.chest} cm`],
// //           ['W',  `${measurements.waist} cm`],
// //           ['KG', `${measurements.weight} kg`],
// //         ].map(([k, v]) => (
// //           <div key={k} className="flex justify-between gap-3 text-[#8a93a8] mb-0.5 last:mb-0">
// //             <span>{k}</span>
// //             <b className="text-[rgb(163,230,53)]">{v}</b>
// //           </div>
// //         ))}
// //       </div>

 

// //       {/* ─── Avatar zone ─────────────────────────────────────── */}
// //       <div className="relative z-[3] flex items-center justify-center" style={{ height: 460, width: 300 }}>
// //         {avatar ? (
// //           <div className="relative w-full h-full">
// //             {/* Cadre à taille fixe et raisonnable */}
// //             <div
// //               className="relative w-[260px] h-[440px] mx-auto rounded-[18px] overflow-hidden bg-[#0a0c14]"
// //               style={{ boxShadow: '0 0 30px rgba(163,230,53,0.12)' }}
// //             >
// //               {scanning ? (
// //                 /* Pendant l'analyse : uniquement le loader, aucune image */
// //                 <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0a0c14] z-10">
// //                   <ScanOverlay running />
// //                   <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-[rgb(163,230,53)] animate-spin" />
// //                   <p className="text-[11px] text-[#8a93a8] animate-pulse">Analyse en cours…</p>
// //                 </div>
// //               ) : (
// //                 <img
// //                   src={tryOnImage ?? avatar.photoPreview}
// //                   alt="Votre jumeau"
// //                   className="w-full h-full object-cover object-top"
// //                 />
// //               )}
// //             </div>

// //             <div
// //               className="absolute inset-0 pointer-events-none"
// //               style={{
// //                 boxShadow: fitScore ? `inset 0 0 40px ${fitColor(fitScore)}22` : undefined,
// //                 borderRadius: 18,
// //                 transition: 'box-shadow 0.6s ease',
// //               }}
// //             />
// //           </div>
// //         ) : (
// //           /* Placeholder SVG silhouette (no photo yet) */
// //           <div className="flex flex-col items-center gap-4">
// //             <svg
// //               viewBox="0 0 140 300"
// //               fill="none"
// //               stroke="rgba(163,230,53,.4)"
// //               strokeWidth="1.3"
// //               className="w-[180px] h-[360px]"
// //               style={{ filter: 'drop-shadow(0 0 20px rgba(163,230,53,.12))' }}
// //             >
// //               <ellipse cx="70" cy="32" rx="19" ry="23" />
// //               <path d="M62 53 L62 64 Q70 68 78 64 L78 53" />
// //               <path
// //                 d="M30 70 Q70 60 110 70 L115 125 Q108 175 112 220 L100 295 L82 295 L78 230 L62 230 L58 295 L40 295 L28 220 Q32 175 25 125 Z"
// //                 fill="rgba(163,230,53,.03)"
// //               />
// //               <path d="M30 72 L18 140 L12 200" />
// //               <path d="M110 72 L122 140 L128 200" />
// //             </svg>
// //             <p className="text-[11px] text-[#8a93a8] text-center max-w-[160px]">
// //               Ajoutez votre photo pour créer votre jumeau numérique
// //             </p>
// //           </div>
// //         )}
// //       </div>

// //       {/* Scan line (ambient) */}
// //       <div
// //         className="absolute left-0 right-0 h-[2px] z-[4] pointer-events-none"
// //         style={{
// //           background: 'linear-gradient(90deg, transparent, rgba(163,230,53,0.5), transparent)',
// //           boxShadow: '0 0 10px rgba(163,230,53,0.3)',
// //           animation: 'scanline 4s ease-in-out infinite',
// //         }}
// //       />

// //       {/* Fit score panel */}
// //       <div className="absolute bottom-4 right-4 bg-[rgba(7,8,12,0.9)] border border-white/10 rounded-xl px-4 py-3 z-10 min-w-[180px]">
// //         <div className="text-[9px] text-[#8a93a8] uppercase tracking-[0.12em] mb-1.5">Indice d'ajustement IA</div>
// //         {scanning ? (
// //           <div className="text-[12px] text-[#8a93a8] animate-pulse">Analyse en cours…</div>
// //         ) : fitScore ? (
// //           <>
// //             <div className="text-[24px] font-bold flex items-center gap-2" style={{ color }}>
// //               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4">
// //                 <path d="M5 12l5 5L20 7" />
// //               </svg>
// //               {fitScore} %
// //             </div>
// //             <div className="text-[10px] mt-0.5 font-semibold" style={{ color }}>
// //               Taille recommandée : {garment?.recommendedSize ?? '—'}
// //             </div>
// //           </>
// //         ) : (
// //           <div className="text-[11px] text-[#8a93a8]">
// //             {avatar ? 'Choisissez un article →' : 'Ajoutez votre photo →'}
// //           </div>
// //         )}
// //       </div>

// //       <style>{`
// //         @keyframes scanline { 0%,100%{top:5%} 50%{top:93%} }
// //         @keyframes scanY    { 0%,100%{top:0%} 50%{top:100%} }
// //       `}</style>
// //     </div>
// //   );
// // } 

// import { useEffect, useState } from 'react';
// import type { WooProduct } from '../../api/product';
// import type { AvatarData, MeasurementValues } from '../../types/tryon';
// import { fitColor } from '../../utils/producthelper';
// import { ScanOverlay } from './ui';

// export function TwinStage({
//   avatar,
//   garment,
//   fitScore,
//   scanning,
//   measurements,
//   tryOnImage,
//   onSaveResult,
//   onDiscardResult,
//   resultSaved,
//   savePending,
// }: {
//   avatar: AvatarData | null;
//   garment: WooProduct | null;
//   fitScore: number | null;
//   scanning: boolean;
//   measurements: MeasurementValues;
//   tryOnImage?: string | null;
//   onSaveResult?: () => void;
//   onDiscardResult?: () => void;
//   resultSaved?: boolean;
//   savePending?: boolean;
// }) {
//   const color = fitColor(fitScore);
//   const hasResult = !scanning && !!tryOnImage;
//   const waitingForProduct = !!avatar && !scanning && !tryOnImage;




//   const [imgLoaded, setImgLoaded] = useState(false);
//   useEffect(() => { setImgLoaded(false); }, [tryOnImage]);


//   return (
//     <div
//       className="relative border border-white/10 rounded-[22px] overflow-hidden min-h-[560px] grid place-items-center"
//       style={{
//         background: 'linear-gradient(180deg, #0a0c14 0%, #070810 100%)',
//         backgroundImage: [
//           'repeating-linear-gradient(90deg, transparent 0 32px, rgba(163,230,53,.04) 32px 33px)',
//           'repeating-linear-gradient(0deg,  transparent 0 32px, rgba(163,230,53,.04) 32px 33px)',
//         ].join(', '),
//       }}
//     >
//       <div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-6 blur-[10px]"
//         style={{ background: 'radial-gradient(ellipse, rgba(163,230,53,.22), transparent 70%)' }}
//       />

//       <div className="absolute top-4 left-4 bg-[rgba(7,8,12,0.88)] border border-white/10 rounded-[10px] px-3 py-2.5 text-[10px] z-10">
//         {[
//           ['H', `${measurements.height} cm`],
//           ['P', `${measurements.chest} cm`],
//           ['W', `${measurements.waist} cm`],
//           ['KG', `${measurements.weight} kg`],
//         ].map(([k, v]) => (
//           <div key={k} className="flex justify-between gap-3 text-[#8a93a8] mb-0.5 last:mb-0">
//             <span>{k}</span>
//             <b className="text-[rgb(163,230,53)]">{v}</b>
//           </div>
//         ))}
//       </div>

//       <div className="relative z-[3] flex items-center justify-center" style={{ height: 460, width: 300 }}>
//         {avatar ? (
//           <div className="relative w-full h-full">
//             <div
//               className="relative w-[260px] h-[440px] mx-auto rounded-[18px] overflow-hidden bg-[#0a0c14]"
//               style={{ boxShadow: '0 0 30px rgba(163,230,53,0.12)' }}
//             >
//               {scanning && (
//                 <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0a0c14] z-10">
//                   <ScanOverlay running />
//                   <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-[rgb(163,230,53)] animate-spin" />
//                   <p className="text-[11px] text-[#8a93a8] animate-pulse">Analyse en cours…</p>
//                 </div>
//               )}

//               {hasResult && (
//                 <>
//                   <img
//                     src={tryOnImage!}
//                     alt="Résultat de l'essayage"
//                     className="w-full h-full object-cover object-top"
//                   />
//                   <div className="absolute inset-x-0 bottom-0 p-3 flex gap-2 bg-gradient-to-t from-black/80 to-transparent">
//                     {resultSaved ? (
//                       <div className="flex-1 py-2 rounded-full text-[11px] font-semibold text-center bg-[rgba(163,230,53,0.15)] text-[rgb(163_230_53)] border border-[rgba(163,230,53,0.3)]">
//                         ✓ Enregistré
//                       </div>
//                     ) : (
//                       <>
//                         <button
//                           onClick={onSaveResult}
//                           disabled={savePending}
//                           className="flex-1 py-2 rounded-full text-[11px] font-semibold bg-[rgb(163_230_53)] text-[#07080c] hover:-translate-y-0.5 transition-transform disabled:opacity-50"
//                         >
//                           {savePending ? '…' : 'Garder'}
//                         </button>
//                         <button
//                           onClick={onDiscardResult}
//                           disabled={savePending}
//                           className="flex-1 py-2 rounded-full text-[11px] font-semibold bg-white/10 text-white/70 hover:bg-white/20 transition-colors disabled:opacity-50"
//                         >
//                           Retirer
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </>
//               )}

//               {waitingForProduct && (
//                 <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="rgb(163 230 53)" strokeWidth="1.5" className="w-10 h-10 opacity-70">
//                     <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
//                   </svg>
//                   <p className="text-[12px] text-[#8a93a8] leading-snug">
//                     Jumeau prêt — choisissez un article dans la garde-robe pour l'essayer.
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div
//               className="absolute inset-0 pointer-events-none"
//               style={{
//                 boxShadow: fitScore ? `inset 0 0 40px ${fitColor(fitScore)}22` : undefined,
//                 borderRadius: 18,
//                 transition: 'box-shadow 0.6s ease',
//               }}
//             />
//           </div>
//         ) : (
//           <div className="flex flex-col items-center gap-4">
//             <svg
//               viewBox="0 0 140 300"
//               fill="none"
//               stroke="rgba(163,230,53,.4)"
//               strokeWidth="1.3"
//               className="w-[180px] h-[360px]"
//               style={{ filter: 'drop-shadow(0 0 20px rgba(163,230,53,.12))' }}
//             >
//               <ellipse cx="70" cy="32" rx="19" ry="23" />
//               <path d="M62 53 L62 64 Q70 68 78 64 L78 53" />
//               <path
//                 d="M30 70 Q70 60 110 70 L115 125 Q108 175 112 220 L100 295 L82 295 L78 230 L62 230 L58 295 L40 295 L28 220 Q32 175 25 125 Z"
//                 fill="rgba(163,230,53,.03)"
//               />
//               <path d="M30 72 L18 140 L12 200" />
//               <path d="M110 72 L122 140 L128 200" />
//             </svg>
//             <p className="text-[11px] text-[#8a93a8] text-center max-w-[160px]">
//               Ajoutez votre photo pour créer votre jumeau numérique
//             </p>
//           </div>
//         )}
//       </div>

//       <div
//         className="absolute left-0 right-0 h-[2px] z-[4] pointer-events-none"
//         style={{
//           background: 'linear-gradient(90deg, transparent, rgba(163,230,53,0.5), transparent)',
//           boxShadow: '0 0 10px rgba(163,230,53,0.3)',
//           animation: 'scanline 4s ease-in-out infinite',
//         }}
//       />

//       <div className="absolute bottom-4 right-4 bg-[rgba(7,8,12,0.9)] border border-white/10 rounded-xl px-4 py-3 z-10 min-w-[180px]">
//         <div className="text-[9px] text-[#8a93a8] uppercase tracking-[0.12em] mb-1.5">Indice d'ajustement IA</div>
//         {scanning ? (
//           <div className="text-[12px] text-[#8a93a8] animate-pulse">Analyse en cours…</div>
//         ) : fitScore ? (
//           <>
//             <div className="text-[24px] font-bold flex items-center gap-2" style={{ color }}>
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4">
//                 <path d="M5 12l5 5L20 7" />
//               </svg>
//               {fitScore} %
//             </div>
//             <div className="text-[10px] mt-0.5 font-semibold" style={{ color }}>
//               Taille recommandée : {garment?.recommendedSize ?? '—'}
//             </div>
//           </>
//         ) : (
//           <div className="text-[11px] text-[#8a93a8]">
//             {avatar ? 'Choisissez un article →' : 'Ajoutez votre photo →'}
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes scanline { 0%,100%{top:5%} 50%{top:93%} }
//         @keyframes scanY    { 0%,100%{top:0%} 50%{top:100%} }
//       `}</style>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import type { WooProduct } from '../../api/product';
import type { AvatarData, MeasurementValues } from '../../types/tryon';
import { fitColor } from '../../utils/producthelper';
import { ScanOverlay } from './ui';

export function TwinStage({
  avatar,
  garment,
  fitScore,
  scanning,
  measurements,
  tryOnImage,
  onSaveResult,
  onDiscardResult,
  resultSaved,
  savePending,
}: {
  avatar: AvatarData | null;
  garment: WooProduct | null;
  fitScore: number | null;
  scanning: boolean;
  measurements: MeasurementValues;
  tryOnImage?: string | null;
  onSaveResult?: () => void;
  onDiscardResult?: () => void;
  resultSaved?: boolean;
  savePending?: boolean;
}) {
  const color = fitColor(fitScore);
  const hasResult = !scanning && !!tryOnImage;
  const waitingForProduct = !!avatar && !scanning && !tryOnImage;

  const [imgLoaded, setImgLoaded] = useState(false);
  useEffect(() => {
    setImgLoaded(false);
  }, [tryOnImage]);

  return (
    <div
      className="relative border border-white/10 rounded-[22px] overflow-hidden min-h-[560px] grid place-items-center"
      style={{
        background: 'linear-gradient(180deg, #0a0c14 0%, #070810 100%)',
        backgroundImage: [
          'repeating-linear-gradient(90deg, transparent 0 32px, rgba(163,230,53,.04) 32px 33px)',
          'repeating-linear-gradient(0deg,  transparent 0 32px, rgba(163,230,53,.04) 32px 33px)',
        ].join(', '),
      }}
    >
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-6 blur-[10px]"
        style={{ background: 'radial-gradient(ellipse, rgba(163,230,53,.22), transparent 70%)' }}
      />

      <div className="absolute top-4 left-4 bg-[rgba(7,8,12,0.88)] border border-white/10 rounded-[10px] px-3 py-2.5 text-[10px] z-10">
        {[
          ['H', `${measurements.height} cm`],
          ['P', `${measurements.chest} cm`],
          ['W', `${measurements.waist} cm`],
          ['KG', `${measurements.weight} kg`],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-3 text-[#8a93a8] mb-0.5 last:mb-0">
            <span>{k}</span>
            <b className="text-[rgb(163,230,53)]">{v}</b>
          </div>
        ))}
      </div>

      <div className="relative z-[3] flex items-center justify-center" style={{ height: 460, width: 300 }}>
        {avatar ? (
          <div className="relative w-full h-full">
            <div
              className="relative w-[260px] h-[440px] mx-auto rounded-[18px] overflow-hidden bg-[#0a0c14]"
              style={{ boxShadow: '0 0 30px rgba(163,230,53,0.12)' }}
            >
              {scanning && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0a0c14] z-10">
                  <ScanOverlay running />
                  <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-[rgb(163,230,53)] animate-spin" />
                  <p className="text-[11px] text-[#8a93a8] animate-pulse">Analyse en cours…</p>
                </div>
              )}

              {hasResult && (
                <>
                  {!imgLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0c14] z-[5]">
                      <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-[rgb(163,230,53)] animate-spin" />
                    </div>
                  )}
                  <img
                    src={tryOnImage!}
                    alt="Résultat de l'essayage"
                    onLoad={() => setImgLoaded(true)}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 flex gap-2 bg-gradient-to-t from-black/80 to-transparent z-[6]">
                    {resultSaved ? (
                      <div className="flex-1 py-2 rounded-full text-[11px] font-semibold text-center bg-[rgba(163,230,53,0.15)] text-[rgb(163_230_53)] border border-[rgba(163,230,53,0.3)]">
                        ✓ Enregistré
                      </div>
                    ) : (
                      <>
                        <button
                          onClick={onSaveResult}
                          disabled={savePending}
                          className="flex-1 py-2 rounded-full text-[11px] font-semibold bg-[rgb(163_230_53)] text-[#07080c] hover:-translate-y-0.5 transition-transform disabled:opacity-50"
                        >
                          {savePending ? '…' : 'Garder'}
                        </button>
                        <button
                          onClick={onDiscardResult}
                          disabled={savePending}
                          className="flex-1 py-2 rounded-full text-[11px] font-semibold bg-white/10 text-white/70 hover:bg-white/20 transition-colors disabled:opacity-50"
                        >
                          Retirer
                        </button>
                      </>
                    )}
                  </div>
                </>
              )}

              {waitingForProduct && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgb(163 230 53)" strokeWidth="1.5" className="w-10 h-10 opacity-70">
                    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                  </svg>
                  <p className="text-[12px] text-[#8a93a8] leading-snug">
                    Jumeau prêt — choisissez un article dans la garde-robe pour l'essayer.
                  </p>
                </div>
              )}
            </div>

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: fitScore ? `inset 0 0 40px ${fitColor(fitScore)}22` : undefined,
                borderRadius: 18,
                transition: 'box-shadow 0.6s ease',
              }}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <svg
              viewBox="0 0 140 300"
              fill="none"
              stroke="rgba(163,230,53,.4)"
              strokeWidth="1.3"
              className="w-[180px] h-[360px]"
              style={{ filter: 'drop-shadow(0 0 20px rgba(163,230,53,.12))' }}
            >
              <ellipse cx="70" cy="32" rx="19" ry="23" />
              <path d="M62 53 L62 64 Q70 68 78 64 L78 53" />
              <path
                d="M30 70 Q70 60 110 70 L115 125 Q108 175 112 220 L100 295 L82 295 L78 230 L62 230 L58 295 L40 295 L28 220 Q32 175 25 125 Z"
                fill="rgba(163,230,53,.03)"
              />
              <path d="M30 72 L18 140 L12 200" />
              <path d="M110 72 L122 140 L128 200" />
            </svg>
            <p className="text-[11px] text-[#8a93a8] text-center max-w-[160px]">
              Ajoutez votre photo pour créer votre jumeau numérique
            </p>
          </div>
        )}
      </div>

      <div
        className="absolute left-0 right-0 h-[2px] z-[4] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(163,230,53,0.5), transparent)',
          boxShadow: '0 0 10px rgba(163,230,53,0.3)',
          animation: 'scanline 4s ease-in-out infinite',
        }}
      />

      <div className="absolute bottom-4 right-4 bg-[rgba(7,8,12,0.9)] border border-white/10 rounded-xl px-4 py-3 z-10 min-w-[180px]">
        <div className="text-[9px] text-[#8a93a8] uppercase tracking-[0.12em] mb-1.5">Indice d'ajustement IA</div>
        {scanning ? (
          <div className="text-[12px] text-[#8a93a8] animate-pulse">Analyse en cours…</div>
        ) : fitScore ? (
          <>
            <div className="text-[24px] font-bold flex items-center gap-2" style={{ color }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4">
                <path d="M5 12l5 5L20 7" />
              </svg>
              {fitScore} %
            </div>
            <div className="text-[10px] mt-0.5 font-semibold" style={{ color }}>
              Taille recommandée : {garment?.recommendedSize ?? '—'}
            </div>
          </>
        ) : (
          <div className="text-[11px] text-[#8a93a8]">{avatar ? 'Choisissez un article →' : 'Ajoutez votre photo →'}</div>
        )}
      </div>

      <style>{`
        @keyframes scanline { 0%,100%{top:5%} 50%{top:93%} }
        @keyframes scanY    { 0%,100%{top:0%} 50%{top:100%} }
      `}</style>
    </div>
  );
}