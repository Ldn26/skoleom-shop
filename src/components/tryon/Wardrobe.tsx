

import { useMemo, useState } from 'react';
import type { WooProduct } from '../../api/product';
import { ProductCard } from './ProductCard';
import { getProductCategories } from '../../utils/producthelper';
import GlobalSearch from '../../components/shop/GlobalSearch';

export function Wardrobe({
  products,
  isLoading,
  isError,
  hasNextPage,
  isFetchingNextPage,
  onFetchNextPage,
  active,
  avatarReady,
  fitScore,
  fitComment,
  tryOnPending,
  recommendedSize,
  onSelect,
  onRunTryOn, // <-- New handler passed to trigger try-on manually
  onAddToCart,
}: {
  products: WooProduct[];
  isLoading: boolean;
  isError: boolean;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  onFetchNextPage: () => void;
  active: WooProduct | null;
  avatarReady: boolean;
  fitScore: number | null;
  fitComment: string | null;
  tryOnPending: boolean;
  recommendedSize?: string;
  onSelect: (product: WooProduct) => void;
  onRunTryOn: (product: WooProduct) => void; // <-- Added prop type
  onAddToCart: () => void;
}) {
  /* ── Filter state ─────────────────────────────────────────── */
  const [search, setSearch]     = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand]       = useState(''); 

  const visible = useMemo(() => {
    let list = products;
    if (category) list = list.filter(p => getProductCategories(p).includes(category));
    const q = search.trim().toLowerCase();
    if (q) list = list.filter(p => p.name.toLowerCase().includes(q));
    if (brand) list = list.filter(p => (p.brand ?? '') === brand);

    return list;
  }, [products, category, search, brand]);

  const hasProducts   = !isLoading && products.length > 0;
  const isFiltering   = !!search.trim() || !!brand || !!category;
  const noFilterMatch = hasProducts && visible.length === 0;

  const resetFilters = () => { setSearch(''); setBrand(''); setCategory(''); };

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col gap-4">

      {!avatarReady && (
        <div className="flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-[10px] px-3 py-2">
          <svg className="w-4 h-4 text-[#8a93a8] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <p className="text-[10.5px] text-[#8a93a8] leading-snug">
            Créez votre jumeau pour activer l'essayage IA
          </p>
        </div>
      )}

      {/* Global Search updates the active selection without running try-on */}
      <GlobalSearch onSelectProduct={(p) => onSelect(p)} />

      {/* NEW: Confirm / Launch Try-On Button */}
      <button
        type="button"
        onClick={() => active && onRunTryOn(active)}
        disabled={!active || !avatarReady || tryOnPending}
        className={`w-full py-3 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2
          ${active && avatarReady && !tryOnPending
            ? 'bg-lime-400 text-black hover:bg-lime-300 shadow-[0_4px_20px_rgba(163,230,53,0.25)]'
            : 'bg-white/5 text-white/40 cursor-not-allowed border border-white/10'
          }`}
      >
        {tryOnPending ? (
          <>
            <div className="w-3.5 h-3.5 rounded-full border-2 border-black/30 border-t-black animate-spin" />
            <span>Analyse de l'essayage en cours…</span>
          </>
        ) : active ? (
          <>
            <span>essayer </span>
            <span className="truncate max-w-[140px] font-bold">{active.name}</span>
          </>
        ) : (
          <span>Sélectionnez un vêtement pour l'essayer</span>
        )}
      </button>

      {isLoading &&
        Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex gap-3 p-[9px] border border-white/10 rounded-[13px] animate-pulse">
            <div className="w-[46px] h-[54px] rounded-[9px] bg-white/10 flex-shrink-0" />
            <div className="flex-1 space-y-2 py-1">
              <div className="h-2.5 bg-white/10 rounded w-3/4" />
              <div className="h-2 bg-white/10 rounded w-1/2" />
            </div>
          </div>
        ))}

      {isError && (
        <p className="text-[11px] text-red-400 text-center py-4">
          Impossible de charger les produits — réessayez.
        </p>
      )}

      {/* Empty state (nothing from the API) */}
      {!isLoading && !isError && products.length === 0 && (
        <p className="text-[11px] text-[#8a93a8] text-center py-4">
          Aucun produit disponible pour le moment.
        </p>
      )}

      {/* No results for the current filters */}
      {noFilterMatch && (
        <div className="text-center py-6">
          <p className="text-[11px] text-[#8a93a8]">Aucun article ne correspond à votre recherche.</p>
          <button onClick={resetFilters} className="mt-2 text-[11px] text-[rgb(163_230_53)] hover:underline">
            Réinitialiser les filtres
          </button>
        </div>
      )}

      {hasProducts && visible.length > 0 && (
        <div className="flex flex-col gap-2 max-h-[360px] overflow-y-auto [scrollbar-width:thin]">
          {visible.map((p , i) => (
            <ProductCard
              key={i}
              product={p}
              isActive={active?.id === p.id}
              fitScore={fitScore}
              showScore={!tryOnPending}
              dimmed={!avatarReady}
              onSelect={onSelect} // <-- Selecting only sets active product state
            />
          ))}

          {hasNextPage && !isFiltering && (
            <button
              onClick={onFetchNextPage}
              disabled={isFetchingNextPage}
              className="w-full py-2.5 text-[11px] text-[#8a93a8] border border-white/10 rounded-[10px] hover:border-white/20 transition-colors disabled:opacity-40"
            >
              {isFetchingNextPage ? 'Chargement…' : 'Voir plus'}
            </button>
          )}
        </div>
      )}

      {/* Fit comment */}
      {fitComment && fitScore && (
        <div className="bg-[rgba(163,230,53,0.06)] border border-[rgba(163,230,53,0.2)] rounded-xl p-3">
          <p className="text-[11px] text-[#eef1f6] leading-[1.5]">{fitComment}</p>
        </div>
      )}

      <button
        onClick={onAddToCart}
        disabled={!active || !fitScore}
        className="w-full flex items-center justify-center gap-2 py-[14px] rounded-full font-semibold text-sm transition-all mt-auto
          enabled:bg-[rgb(163_230_53)] enabled:text-[#07080c] enabled:hover:-translate-y-0.5 enabled:hover:shadow-[0_12px_36px_rgba(163,230,53,0.35)]
          disabled:bg-white/10 disabled:text-white/30 disabled:cursor-not-allowed"
      >
        {active && fitScore ? `Ajouter au panier — taille ${recommendedSize}` : 'Ajouter au panier'}
      </button>
    </div>
  );
}