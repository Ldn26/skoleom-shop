import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, Search, Tag, Layers, X } from 'lucide-react';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';
import { useProductSearch, useCategories, useBrands } from '../../api/product';

function useDebounced(value, delay = 250) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return v;
}

const eur = (n) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Number(n) || 0);

export default function GlobalSearch({
  className = '',
  placeholder = 'Rechercher un produit, une marque…',
  autoFocus = false,
}) {
  const navigate = useNavigate();
  const localizePath = useLocalizedPath();

  const [term, setTerm] = useState('');
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);
  const inputRef = useRef(null);

  const q = useDebounced(term.trim(), 250);

  const { data: products = [], isLoading } = useProductSearch(q);
  const { data: categories = [] } = useCategories();
  const { data: brands = [] } = useBrands();

  const matchedCats = useMemo(() => {
    if (q.length < 2) return [];
    const n = q.toLowerCase();
    return categories.filter((c) => c.name?.toLowerCase().includes(n)).slice(0, 4);
  }, [categories, q]);

  const matchedBrands = useMemo(() => {
    if (q.length < 2) return [];
    const n = q.toLowerCase();
    return brands.filter((b) => b.name?.toLowerCase().includes(n)).slice(0, 4);
  }, [brands, q]);

  const topProducts = products.slice(0, 6);
  const hasResults = topProducts.length > 0 || matchedCats.length > 0 || matchedBrands.length > 0;

  useEffect(() => {
    const onClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const go = (path) => {
    setOpen(false);
    setTerm('');
    navigate(localizePath(path));
  };

  const submitSearch = () => {
    if (!term.trim()) return;
    go(`/produits?search=${encodeURIComponent(term.trim())}`);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') submitSearch();
    if (e.key === 'Escape') setOpen(false);
  };

  return (
    <div ref={boxRef} className={`relative ${className}`}>
      <style>{`
        input.sk-search-input:focus,
        input.sk-search-input:focus-visible,
        html.a11y-high-contrast input.sk-search-input:focus-visible,
        html[data-a11y-enhanced-focus] input.sk-search-input:focus-visible {
          outline: none !important;
          box-shadow: none !important;
          border: none !important;
        }
      `}</style>
      <div
        className={`flex items-center gap-2 rounded-full border bg-white/5 px-4 transition-colors ${
          open ? 'border-[#a8ff35]/40' : 'border-white/12'
        }`}
      >
        <Search className="h-4 w-4 shrink-0 text-zinc-500" />
        <input
          ref={inputRef}
          value={term}
          autoFocus={autoFocus}
          onChange={(e) => {
            setTerm(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className="sk-search-input w-full border-0 bg-transparent py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none"
          style={{ boxShadow: 'none', outline: 'none' }}
        />
        {term && (
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              setTerm('');
              inputRef.current?.focus();
            }}
            className="shrink-0 text-zinc-500 transition hover:text-white"
            aria-label="Effacer"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {open && q.length >= 2 && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 max-h-[70vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#050506] p-2 shadow-2xl shadow-black/70">
          {isLoading && !hasResults ? (
            <div className="flex items-center gap-2 px-4 py-6 text-sm text-zinc-400">
              <Loader2 className="h-4 w-4 animate-spin" /> Recherche…
            </div>
          ) : !hasResults ? (
            <div className="px-4 py-6 text-center text-sm text-zinc-500">
              Aucun résultat pour « {q} »
            </div>
          ) : (
            <>
              {matchedCats.length > 0 && (
                <Section title="Catégories">
                  {matchedCats.map((c) => (
                    <Row key={`c-${c.id}`} onClick={() => go(`/produits?category=${c.slug}`)}>
                      <Layers className="h-4 w-4 text-zinc-500" />
                      <span className="capitalize">{c.name}</span>
                    </Row>
                  ))}
                </Section>
              )}

              {matchedBrands.length > 0 && (
                <Section title="Marques">
                  {matchedBrands.map((b) => (
                    <Row key={`b-${b.id}`} onClick={() => go(`/produits?brand=${b.slug}`)}>
                      <Tag className="h-4 w-4 text-zinc-500" />
                      <span className="capitalize">{b.name}</span>
                    </Row>
                  ))}
                </Section>
              )}

              {topProducts.length > 0 && (
                <Section title="Produits">
                  {topProducts.map((p) => (
                    <Row key={`p-${p.id}`} onClick={() => go(`/produit/${p.id}`)}>
                      <span className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white/5">
                        {p.photos?.[0] ? (
                          <img src={p.photos[0]} alt={p.name} className="h-full w-full object-cover" />
                        ) : null}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-white">{p.name}</span>
                        <span className="text-xs text-[#a8ff35]">{eur(p.price)}</span>
                      </span>
                    </Row>
                  ))}
                </Section>
              )}

              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={submitSearch}
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-2.5 text-sm font-semibold text-[#a8ff35] transition hover:bg-white/10"
              >
                <Search className="h-4 w-4" /> Voir tous les résultats pour « {q} »
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="py-1.5">
      <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">{title}</p>
      {children}
    </div>
  );
}

function Row({ onClick, children }) {
  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/5"
    >
      {children}
    </button>
  );
}