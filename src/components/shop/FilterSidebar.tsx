'use client';

import { useMemo, useState } from 'react';
import { Check, ChevronDown, Layers, Loader2, Search, X } from 'lucide-react';
import PriceRangeSlider from './PriceRangeSlider';
import { useCategories } from '../../api/product';
import { useFilterStore } from '../../store/filterStore';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/[0.07] pt-5 first:border-t-0 first:pt-0">
      <p className="mb-3 px-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">{title}</p>
      {children}
    </div>
  );
}

function CheckRow({
  label,
  count,
  checked,
  onChange,
  indent = false,
}: {
  label: string;
  count?: number;
  checked: boolean;
  onChange: () => void;
  indent?: boolean;
}) {
  return (
    <button
      onClick={onChange}
      className={`group flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-150 ${
        checked ? 'text-lime-400' : 'text-zinc-300 hover:bg-white/[0.05]'
      } ${indent ? 'py-2 text-sm' : ''}`}
    >
      <span className="flex items-center gap-3">
        <span
          className={`grid h-[18px] w-[18px] place-items-center rounded-[6px] border transition-all duration-150 ${
            checked
              ? 'border-lime-400 bg-lime-400 text-black'
              : 'border-white/20 bg-transparent group-hover:border-white/40'
          }`}
        >
          {checked && <Check className="h-3 w-3" strokeWidth={3.5} />}
        </span>
        <span className="text-sm font-medium">{label}</span>
      </span>
      {count != null && (
        <span className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-zinc-500">{count}</span>
      )}
    </button>
  );
}

export default function FilterSidebar({ facetsPriceMax = 2000 }: { facetsPriceMax?: number }) {
  const selectedCategory = useFilterStore((s) => s.selectedCategory);
  const setCategory = useFilterStore((s) => s.setCategory);
  const clearCategory = useFilterStore((s) => s.clearCategory);
  const minPrice = useFilterStore((s) => s.minPrice);
  const maxPrice = useFilterStore((s) => s.maxPrice);
  const setPriceRange = useFilterStore((s) => s.setPriceRange);
  const inStockOnly = useFilterStore((s) => s.inStockOnly);
  const onSaleOnly = useFilterStore((s) => s.onSaleOnly);
  const toggleInStock = useFilterStore((s) => s.toggleInStock);
  const toggleOnSale = useFilterStore((s) => s.toggleOnSale);
  const priceTouched = useFilterStore((s) => s.priceTouched);
  const reset = useFilterStore((s) => s.reset);

  const [openId, setOpenId] = useState<number | null>(null);
  const [catQuery, setCatQuery] = useState('');
  const { data: mainCategories = [], isLoading } = useCategories();
  const { data: subCategories = [], isFetching: subLoading } = useCategories(openId ?? 0, openId != null);

  const activeCount =
    (selectedCategory ? 1 : 0) + (inStockOnly ? 1 : 0) + (onSaleOnly ? 1 : 0) + (priceTouched ? 1 : 0);

  const filteredCats = useMemo(() => {
    const q = catQuery.trim().toLowerCase();
    if (!q) return mainCategories;
    return mainCategories.filter((c: any) => c.name.toLowerCase().includes(q));
  }, [mainCategories, catQuery]);

  const toggleMain = (id: number, slug: string) => {
    const active = selectedCategory === slug;
    setOpenId((prev) => (prev === id ? null : id));
    if (active) clearCategory();
    else setCategory(slug);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">Filtres</h2>
        {activeCount > 0 && (
          <button
            onClick={() => {
              reset();
              setOpenId(null);
              setCatQuery('');
            }}
            className="flex items-center gap-1 text-[11px] font-semibold text-lime-400 transition-colors hover:text-lime-300"
          >
            <X className="h-3 w-3" /> Réinitialiser ({activeCount})
          </button>
        )}
      </div>

      <Section title="Disponibilité">
        <div className="space-y-1">
          <CheckRow label="En stock" checked={inStockOnly} onChange={toggleInStock} />
          <CheckRow label="En promotion" checked={onSaleOnly} onChange={toggleOnSale} />
        </div>
      </Section>

      <Section title="Budget">
        <PriceRangeSlider
          minValue={minPrice}
          maxValue={maxPrice}
          min={0}
          max={facetsPriceMax}
          onChange={(mn, mx) => setPriceRange(mn, mx)}
        />
      </Section>

      <Section title="Catégories">
        <div className="relative mb-3">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" />
          <input
            value={catQuery}
            onChange={(e) => setCatQuery(e.target.value)}
            placeholder="Rechercher une catégorie"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-lime-400/50"
          />
        </div>

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
            Toutes les catégories
          </button>

          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-11 animate-pulse rounded-xl bg-white/[0.04]" />
            ))
          ) : filteredCats.length === 0 ? (
            <p className="px-3 py-3 text-xs text-zinc-600">Aucune catégorie trouvée</p>
          ) : (
            filteredCats.map((cat: any) => {
              const isOpen = openId === cat.id;
              const isActive = selectedCategory === cat.slug;
              return (
                <div key={cat.id}>
                  <div className="flex items-center">
                    <div className="flex-1">
                      <CheckRow
                        label={cat.name}
                        count={cat.count}
                        checked={isActive}
                        onChange={() => toggleMain(cat.id, cat.slug)}
                      />
                    </div>
                    <button
                      onClick={() => setOpenId((prev) => (prev === cat.id ? null : cat.id))}
                      className="ml-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg text-zinc-500 transition-colors hover:bg-white/[0.05] hover:text-zinc-300"
                      aria-label="Sous-catégories"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="ml-4 mt-1 space-y-0.5 border-l border-white/10 pl-2">
                        {isOpen && subLoading && (
                          <div className="flex items-center gap-2 px-3 py-2 text-xs text-zinc-500">
                            <Loader2 className="h-3.5 w-3.5 animate-spin" /> Chargement...
                          </div>
                        )}
                        {isOpen && !subLoading && subCategories.length === 0 && (
                          <p className="px-3 py-2 text-xs text-zinc-600">Aucune sous-catégorie</p>
                        )}
                        {isOpen &&
                          !subLoading &&
                          subCategories.map((sub: any) => (
                            <CheckRow
                              key={sub.id}
                              label={sub.name}
                              count={sub.count}
                              checked={selectedCategory === sub.slug}
                              indent
                              onChange={() =>
                                selectedCategory === sub.slug ? clearCategory() : setCategory(sub.slug)
                              }
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Section>
    </div>
  );
}
