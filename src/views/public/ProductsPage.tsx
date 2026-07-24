
import { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  useProducts,
  flattenProducts,
  applyClientFilters,
  deriveFacets,
  useCategories,
  useBrands,
} from '../../api/product';
import Breadcrumb from '../../components/shop/Breadcrumb';
import FilterSidebar from '../../components/shop/FilterSidebar';
import ProductGrid from '../../components/shop/ProductGrid';
import SortSelect from '../../components/shop/SortSelect';
import ActiveFilters from '../../components/shop/ActiveFilters';
import EmptyState from '../../components/shop/EmptyState';
import { useFilterStore, type SortOption } from '../../store/filterStore';
import CategoryBar from '../../components/shop/CategoryBar';
export default function ProductsPage() {
  const [sp, setSp] = useSearchParams();
  const [sideOpen, setSideOpen] = useState(false);
  const selectedCategory = useFilterStore((s) => s.selectedCategory);
  const brands = useFilterStore((s) => s.brands);
  const search = useFilterStore((s) => s.search);
  const sort = useFilterStore((s) => s.sort);
  const maxPrice = useFilterStore((s) => s.maxPrice);
  const parent = useFilterStore((s) => s.parent);
  const inStockOnly = useFilterStore((s) => s.inStockOnly);
  const onSaleOnly = useFilterStore((s) => s.onSaleOnly);
  const priceTouched = useFilterStore((s) => s.priceTouched);
  const setCategory = useFilterStore((s) => s.setCategory);
  const setSearch = useFilterStore((s) => s.setSearch);
  const setSort = useFilterStore((s) => s.setSort);
  const toggleBrand = useFilterStore((s) => s.toggleBrand);
  const toggleInStock = useFilterStore((s) => s.toggleInStock);
  const toggleOnSale = useFilterStore((s) => s.toggleOnSale);
  const patch = useFilterStore((s) => s.patch);
  const reset = useFilterStore((s) => s.reset);




  useEffect(() => {
    const category = sp.get('category');
    const q = sp.get('q');
    const sortParam = sp.get('sort');
    if (category) setCategory(category);
    if (q) setSearch(q);
    if (sortParam) setSort(sortParam as SortOption);
  }, [sp, setCategory, setSearch, setSort]);

  const query = useProducts({
    search,
    category: selectedCategory || 'all',
    brand: brands[0] || 'all',
  });
  const all = flattenProducts(query.data);
  const { data: serverCategories = [] } = useCategories();
  const { data: serverBrands = [] } = useBrands();
  


  const derived = useMemo(() => deriveFacets(all), [all]);
  const facets = useMemo(() => {
    const cats =
      serverCategories.length > 0
        ? serverCategories.map((c) => ({ slug: c.slug, label: c.name }))
        : derived.categories;
    const brs =
      serverBrands.length > 0
        ? serverBrands.map((b) => ({ slug: b.slug, label: b.name }))
        : derived.brands;
    return { categories: cats, brands: brs, priceMax: derived.priceMax };
  }, [serverCategories, serverBrands, derived]);

  useEffect(() => {
    if (!priceTouched && facets.priceMax) patch({ maxPrice: facets.priceMax });
  }, [facets.priceMax, priceTouched, patch]);

  const list = useMemo(
    () => applyClientFilters(all, { maxPrice, inStockOnly, onSaleOnly, sort }),
    [all, maxPrice, inStockOnly, onSaleOnly, sort],
  );

  const resetAll = () => {
    reset();
    setSp({});
  };

  const chips = [];
  if (selectedCategory) {
    chips.push({
      key: 'cat',
      label: facets.categories.find((c) => c.slug === selectedCategory)?.label || selectedCategory,
      onRemove: () => setCategory(''),
    });
  }
  brands.forEach((slug) => {
    chips.push({
      key: `brand-${slug}`,
      label: facets.brands.find((b) => b.slug === slug)?.label || slug,
      onRemove: () => toggleBrand(slug),
    });
  });
  if (search) {
    chips.push({ key: 'q', label: `« ${search} »`, onRemove: () => setSearch('') });
  }
  if (inStockOnly) {
    chips.push({ key: 'stock', label: 'En stock', onRemove: toggleInStock });
  }
  if (onSaleOnly) {
    chips.push({ key: 'sale', label: 'En promo', onRemove: toggleOnSale });
  }
  if (priceTouched && facets.priceMax && maxPrice < facets.priceMax) {
    chips.push({
      key: 'price',
      label: ` <  ${maxPrice} €`,
      onRemove: () => patch({ maxPrice: facets.priceMax, priceTouched: false }),
    });
  }

  const pageLabel = selectedCategory
    ? facets.categories.find((c) => c.slug === selectedCategory)?.label || selectedCategory
    : 'Tous les produits';

  const isInitialLoading = query.isLoading && all.length === 0;

  const sentinelRef = useRef(null);
  const { hasNextPage, isFetchingNextPage, fetchNextPage } = query;

  const onIntersect = useCallback(
    (entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage],
  );

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(onIntersect, { rootMargin: '600px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, [onIntersect]);
  
  return (
    <div className="min-h-screen mt-14 bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6">
        <Breadcrumb items={[{ label: 'Accueil', to: '/' }, { label: pageLabel }]} />


        <div className="flex gap-8">
          <div className="hidden w-72 shrink-0 lg:block">
            <div className="fixed top-[160px] h-[calc(100vh-7rem)] w-72 overflow-y-auto rounded-2xl border border-white/10 p-5 shadow-2xl shadow-black/40 backdrop-blur">
              <FilterSidebar facetsPriceMax={facets.priceMax} />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-4 flex items-center justify-between gap-4">
              {/* <div>jsp je mis quoi haha  </div> */}
                      <CategoryBar    />

              <SortSelect value={sort} onChange={setSort} />
            </div>

            <ActiveFilters chips={chips} onClearAll={resetAll} />

            {query.isError ? (
              <EmptyState
                title="Impossible de charger le catalogue"
                message="Verifie ta connexion puis reessaie."
                actionLabel="Reessayer"
                onAction={() => query.refetch()}
              />
            ) : isInitialLoading ? (
              <ProductGrid loading skeletonCount={8} products={[]} />
            ) : list.length ? (
              <>
                <ProductGrid products={list} />

                <div ref={sentinelRef} className="h-1 w-full" />

                {isFetchingNextPage && (
                  <div className="mt-8 flex justify-center">
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-lime-400" />
                  </div>
                )}

                {!hasNextPage && (
                  <p className="mt-8 text-center text-sm text-zinc-600">
                    Tu as vu tout le catalogue.
                  </p>
                )}
              </>
            ) : (
              <EmptyState
                title="Aucun produit ne correspond"
                message="Essaie d'elargir ton budget ou de retirer quelques filtres."
                actionLabel="Reinitialiser les filtres"
                onAction={resetAll}
              />
            )}
          </div>
        </div>
      </div>

      {sideOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/70 lg:hidden"
            onClick={() => setSideOpen(false)}
          />
          <div className="fixed bottom-0 left-0 top-0 z-50 w-72 overflow-y-auto bg-zinc-900 p-5 shadow-2xl lg:hidden">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-lg font-bold">Filtres</span>
              <button
                onClick={() => setSideOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-zinc-300 hover:bg-white/10"
              >
                X
              </button>
            </div>
            <FilterSidebar facetsPriceMax={facets.priceMax} />
          </div>
        </>
      )}
    </div>
  );
}