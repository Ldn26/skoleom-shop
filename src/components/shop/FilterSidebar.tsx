import { useState } from 'react';
import { ChevronDown, Layers, Loader2 } from 'lucide-react';
import PriceRangeSlider from './PriceRangeSlider';
import { useCategories } from '../../api/product';
import { useFilterStore } from '../../store/filterStore';

function Section({ title, children }) {
  return (
    <div className="border-t border-white/[0.07] pt-4 first:border-t-0 first:pt-0">
      <p className="mb-3 px-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
        {title}
      </p>
      {children}
    </div>
  );
}



export default function FilterSidebar({ facetsPriceMax = 2000 }: { facetsPriceMax?: number }) {
  const selectedCategory = useFilterStore((s) => s.selectedCategory);
  const setCategory = useFilterStore((s) => s.setCategory);
  const clearCategory = useFilterStore((s) => s.clearCategory);
  const maxPrice = useFilterStore((s) => s.maxPrice);
  const inStockOnly = useFilterStore((s) => s.inStockOnly);
  const onSaleOnly = useFilterStore((s) => s.onSaleOnly);
  const setMaxPrice = useFilterStore((s) => s.setMaxPrice);
  const reset = useFilterStore((s) => s.reset);

  const [openId, setOpenId] = useState<number | null>(null);
  const { data: mainCategories = [], isLoading } = useCategories();
  const { data: subCategories = [], isFetching: subLoading } = useCategories(
    openId ?? 0,
    openId != null,
  );

  const activeCount = (selectedCategory ? 1 : 0) + (inStockOnly ? 1 : 0) + (onSaleOnly ? 1 : 0);

  const selectMain = (id: number, slug: string) => {
    setOpenId((prev) => (prev === id ? null : id));
    setCategory(slug);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">Filtres</h2>
        {activeCount > 0 && (
          <button
            onClick={() => {
              reset();
              setOpenId(null);
            }}
            className="text-[11px] font-semibold text-lime-400 transition-colors hover:text-lime-300"
          >
            Reinitialiser ({activeCount})
          </button>
        )}
      </div>

<Section title="Budget">
        <PriceRangeSlider value={maxPrice} min={0} max={facetsPriceMax} onChange={(v) => setMaxPrice(v)} />
      </Section>

      <Section title="Categories">
        <div className="space-y-1">
          <button
            onClick={() => {
              clearCategory();
              setOpenId(null);
            }}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-150 ${
              selectedCategory ? 'text-zinc-300 hover:bg-white/[0.05]' : 'bg-lime-400/10 text-lime-400'
            }`}
          >
            <Layers className="h-4 w-4" />
            Toutes les categories
          </button>

          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-11 animate-pulse rounded-xl bg-white/[0.04]" />
              ))
            : mainCategories.map((cat) => {
                const isOpen = openId === cat.id;
                const isActive = selectedCategory === cat.slug;
                return (
                  <div key={cat.id}>
                    <button
                      onClick={() => selectMain(cat.id, cat.slug)}
                      className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-150 ${
                        isActive ? 'bg-lime-400/10 text-lime-400' : 'text-zinc-300 hover:bg-white/[0.05]'
                      }`}
                    >
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <span
                          className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                            isActive ? 'bg-lime-400' : 'bg-zinc-600'
                          }`}
                        />
                        {cat.name}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-zinc-500">
                          {cat.count}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-zinc-500 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-4 mt-1 space-y-0.5 border-l border-white/10 pl-3">
                          {isOpen && subLoading && (
                            <div className="flex items-center gap-2 px-3 py-2 text-xs text-zinc-500">
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              Chargement...
                            </div>
                          )}
                          {isOpen && !subLoading && subCategories.length === 0 && (
                            <p className="px-3 py-2 text-xs text-zinc-600">Aucune sous-categorie</p>
                          )}
                          {isOpen &&
                            !subLoading &&
                            subCategories.map((sub) => {
                              const subActive = selectedCategory === sub.slug;
                              return (
                                <button
                                  key={sub.id}
                                  onClick={() => setCategory(sub.slug)}
                                  className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-150 ${
                                    subActive
                                      ? 'text-lime-400'
                                      : 'text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
                                  }`}
                                >
                                  <span>{sub.name}</span>
                                  <span className="text-[11px] font-semibold text-zinc-600">
                                    {sub.count}
                                  </span>
                                </button>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </Section>



      
    </div>
  );
}