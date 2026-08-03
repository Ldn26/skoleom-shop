// import { ArrowUpRight } from 'lucide-react';

// const FALLBACK_IMAGE =
//   'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop';

// /**
//  * CategoryGallery — remplacement direct de CircularGallery, sans WebGL/OGL.
//  *
//  * Props identiques :
//  *   items       : [{ image, text, category }]
//  *   onItemClick : (item) => void
//  *
//  * Rien d'autre n'est requis (bend, textColor, font... sont ignorés).
//  */
// export default function CategoryGallery({ items = [], onItemClick }) {
//   if (!items.length) {
//     return (
//       <div className="flex h-full w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02]">
//         <p className="font-light text-zinc-500">Chargement des univers...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid h-full w-full auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
//       {items.map((item, i) => (
//         <button
//           key={item.category ?? item.text ?? i}
//           type="button"
//           onClick={() => onItemClick?.(item)}
//           className="group relative flex min-h-[160px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-[#131315] text-left transition duration-500 hover:border-[#a8ff35]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a8ff35]"
//         >
//           {/* Image de fond */}
//           <img
//             src={item.image || FALLBACK_IMAGE}
//             alt={item.text || 'Catégorie'}
//             loading="lazy"
//             onError={(e) => {
//               if (e.currentTarget.src !== FALLBACK_IMAGE) e.currentTarget.src = FALLBACK_IMAGE;
//             }}
//             className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//           />

//           {/* Dégradé pour la lisibilité du texte */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

//           {/* Contenu */}
//           <div className="relative z-10 flex items-end justify-between p-4 sm:p-5">
//             <h3 className="text-base font-semibold leading-tight text-white sm:text-lg">
//               {item.text}
//             </h3>
//             <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/70 transition duration-500 group-hover:border-[#a8ff35] group-hover:text-[#a8ff35]">
//               <ArrowUpRight className="h-4 w-4" />
//             </span>
//           </div>
//         </button>
//       ))}
//     </div>
//   );
// }

import { ArrowUpRight } from 'lucide-react';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop';

interface CategoryItem {
  image?: string;
  text?: string;
  category?: string | number;
}

interface CategoryGalleryProps {
  items?: CategoryItem[];
  onItemClick?: (item: CategoryItem) => void;
}

/**
 * CategoryGallery — remplacement direct de CircularGallery, sans WebGL/OGL.
 *
 * Props identiques :
 *   items       : [{ image, text, category }]
 *   onItemClick : (item) => void
 */
export default function CategoryGallery({ items = [], onItemClick }: CategoryGalleryProps) {
  if (!items.length) {
    return (
      <div className="flex min-h-[220px] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02]">
        <p className="font-light text-zinc-500">Chargement des univers...</p>
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5 xl:gap-6">
      {items.map((item, i) => (
        <button
          key={item.category ?? item.text ?? i}
          type="button"
          onClick={() => onItemClick?.(item)}
          className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-xl border border-white/10 bg-[#131315] text-left transition-all duration-500 hover:border-[#a8ff35]/45 hover:shadow-[0_28px_60px_-40px_rgba(168,255,53,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a8ff35] sm:aspect-[4/5] sm:rounded-2xl"
        >
          {/* Image de fond */}
          <img
            src={item.image || FALLBACK_IMAGE}
            alt={item.text || 'Catégorie'}
            loading="lazy"
            draggable={false}
            onError={(e) => {
              if (e.currentTarget.src !== FALLBACK_IMAGE) e.currentTarget.src = FALLBACK_IMAGE;
            }}
            className="absolute inset-0 h-full w-full object-cover brightness-[0.82] saturate-[0.9] transition-all duration-[900ms] ease-out group-hover:scale-[1.09] group-hover:brightness-95 group-hover:saturate-100"
          />

          {/* Dégradé pour la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/95" />

          {/* Index éditorial */}
          <span className="absolute left-3 top-3 text-[10px] font-medium tracking-[0.28em] text-white/55 sm:left-4 sm:top-4 sm:text-xs">
            {String(i + 1).padStart(2, '0')}
          </span>

          {/* Pastille flèche (apparaît au survol) */}
          <span className="absolute right-3 top-3 flex h-7 w-7 translate-y-[-6px] scale-90 items-center justify-center rounded-full bg-[#a8ff35] text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 sm:right-4 sm:top-4 sm:h-8 sm:w-8">
            <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </span>

          {/* Contenu */}
          <div className="relative z-10 p-3 sm:p-4 lg:p-5">
            <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#a8ff35] sm:mb-2 sm:text-[10px]">
              Univers
            </p>
            <h3 className="text-sm font-semibold uppercase leading-tight tracking-wide text-white sm:text-base lg:text-lg">
              {item.text}
            </h3>
            <div className="mt-2.5 h-px w-6 bg-[#a8ff35] transition-all duration-500 group-hover:w-14 sm:mt-3.5" />
          </div>
        </button>
      ))}
    </div>
  );
}
