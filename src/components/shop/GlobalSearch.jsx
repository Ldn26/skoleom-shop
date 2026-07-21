import { useState, useEffect, useRef, useMemo  , useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';
import { STORE_LINKS } from '../../constants/storeLinks';
import { AlignJustify, ChevronDown, LogOut, Menu, Search, User, X } from 'lucide-react';

import {
  useProductSearch,
  useCategories,
  useBrands,
} from '../../api/product';

// Petit hook de debounce
function useDebounced(value, delay = 250) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return v;
}

function Section({ title, children }) {
  return (
    <div className="py-2">
      <p className="px-4 pb-1 text-[10px] uppercase tracking-widest text-zinc-500">{title}</p>
      {children}
    </div>
  );
}

function Row({ onClick, children }) {
  return (
    <button
      onMouseDown={(e) => e.preventDefault()} // évite le blur avant le click
      onClick={onClick}
      className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/5"
    >
      {children}
    </button>
  );
}

export default function GlobalSearch({ 
   className = '',
  placeholder = 'Rechercher un produit, une marque…' }) {
  const [term, setTerm] = useState('');
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);


const normalizeSearchText = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

  const q = useDebounced(term.trim(), 250);

  const { data: products = [], isLoading } = useProductSearch(q);
  const { data: categories = [] } = useCategories();
  const { data: brands = [] } = useBrands();

  // Filtre catégories / marques côté client sur le terme
  const matchedCats = useMemo(() => {
    if (q.length < 2) return [];
    const n = q.toLowerCase();
    return categories.filter((c) => c.name.toLowerCase().includes(n)).slice(0, 4);
  }, [categories, q]);

  const matchedBrands = useMemo(() => {
    if (q.length < 2) return [];
    const n = q.toLowerCase();
    return brands.filter((b) => b.name.toLowerCase().includes(n)).slice(0, 4);
  }, [brands, q]);

  const topProducts = products.slice(0, 6);
  const hasResults =
    topProducts.length > 0 || matchedCats.length > 0 || matchedBrands.length > 0;

  // Fermer au clic extérieur
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
    navigate(path);
  };

  const submitSearch = () => {
    if (!term.trim()) return;
    go(`/catalogue?q=${encodeURIComponent(term.trim())}`);
  };
  




// for 

 const { t } = useTranslation();
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const localizePath = useLocalizedPath();
  const [value, setValue] = useState('');
  const [contentResults, setContentResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const staticResults = useMemo(
    () => [
      {
        id: 'home',
        title: t('header.nav.home'),
        description: t('header.navLabel'),
        href: '/',
      },
      {
        id: 'stores',
        title: t('header.nav.stores'),
        description: t('public.stores.carousel.subtitle', {
          defaultValue: 'Découvrez toutes les boutiques disponibles dans lécosystème Skoleom.',
        }),
        href: '/stores',
      },
      {
        id: 'content',
        title: t('public.content.titleHighlight', { defaultValue: 'Contenu shoppable' }),
        description: t('public.content.subtitle', {
          defaultValue: 'Films · Séries · Lifestyle · Tous shoppables grâce à SeSync.',
        }),
        href: '/content',
      },
      {
        id: 'how-it-works',
        title: t('header.nav.everyone'),
        description: t('public.howItWorks.hero.subtitle', {
          defaultValue: 'Dans la vidéo. Au même moment. Sans friction.',
        }),
        href: '/how-it-works',
      },
      {
        id: 'touch',
        title: 'Watch. Touch. Buy.',
        description: t('public.skoleomTouch.introSubtitle', {
          defaultValue:
            'Repérez les produits cachés dans la vidéo et débloquez une récompense exclusive.',
        }),
        href: '/touch',
      },
      {
        id: 'ecosystem',
        title: t('header.nav.group'),
        description: t('footer.links.103', { defaultValue: "L'écosystème Skoleom" }),
        href: '/ecosystem',
      },
      {
        id: 'technology',
        title: t('footer.links.102', { defaultValue: 'Notre technologie' }),
        description: t('public.technology.studio.titleLine1', {
          defaultValue: "L'outil de monétisation",
        }),
        href: '/technology',
      },
      ...STORE_LINKS.filter((store) => store.external || store.to === '/stores').map((store) => ({
        id: `store-${store.label}`,
        title: store.label,
        description: t('header.nav.stores'),
        href: store.to,
        external: store.external,
      })),
    ],
    [t],
  );

  const query = normalizeSearchText(value);

  const matchedResults = useMemo(() => {
    if (query.length < 2) return [];

    const matches = staticResults.filter((item) =>
      normalizeSearchText(`${item.title} ${item.description}`).includes(query),
    );

    return [...matches, ...contentResults]
      .filter(
        (item, index, list) =>
          list.findIndex((candidate) => candidate.href === item.href) === index,
      )
      .slice(0, 8);
  }, [contentResults, query, staticResults]);

  const navigateToResult = useCallback(
    (result) => {
      setOpen(false);
      setValue('');
      // onNavigate?.();
      scrollAppToTop();

      if (result.external) {
        window.open(result.href, '_blank', 'noopener,noreferrer');
        return;
      }

      navigate(localizePath(result.href));
    },
    [localizePath, navigate],
  );

  useEffect(() => {
    const cleanValue = value.trim();

    if (cleanValue.length < 2) {
      setContentResults([]);
      setLoading(false);
      return undefined;
    }

    let cancelled = false;
    setLoading(true);

    const timer = window.setTimeout(() => {
      contentAPI
        .list({ search: cleanValue, limit: 5 })
        .then((data) => {
          if (cancelled) return;

          const items = Array.isArray(data?.items) ? data.items : [];
          const nextResults = items
            .filter(isRecord)
            .map((item) => {
              const id = asString(item.id);
              const title = asString(item.title);
              if (!id || !title) return null;

              return {
                id: `content-${id}`,
                title,
                description:
                  asString(item.description) ||
                  asString(item.category) ||
                  t('public.content.titleHighlight', { defaultValue: 'Contenu shoppable' }),
                href: `/watch/${id}`,
              };
            })
            .filter((item) => item !== null);

          setContentResults(nextResults);
        })
        .catch(() => {
          if (!cancelled) setContentResults([]);
        })
        .finally(() => {
          if (!cancelled) setLoading(false);
        });
    }, 160);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [t, value]);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
      return;
    }

    if (event.key === 'Enter' && matchedResults[0]) {
      event.preventDefault();
      navigateToResult(matchedResults[0]);
    }
  };






  return (
    <div ref={boxRef} className="relative w-full max-w-xl">  



      <div className="relative w-full min-w-0 max-w-[420px]">
        <input
  ref={inputRef}
          type="text"
          value={term}
          placeholder={t('header.searchPlaceholder')}
          aria-label={t('header.searchAria')}
          onChange={(event) => {
            setTerm(event.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            if (term.trim().length >= 2) setOpen(true);
          }}
          onBlur={() => {
            window.setTimeout(() => setOpen(false), 140);
          }}
          onKeyDown={handleKeyDown}
          className="h-9 w-full rounded-[50px] border border-white/[0.06] bg-[#282828] py-[8px] pl-[15px] pr-10 text-xs text-white placeholder:text-[#B5B5B5] shadow-inner shadow-black/40 transition duration-300 focus:outline-none focus:ring-1 focus:ring-zinc-600"
          autoComplete="off"
        />
        <button
          type="button"
          aria-label={t('header.searchAria')}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => {
            if (matchedResults[0]) navigateToResult(matchedResults[0]);
            else inputRef.current?.focus();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/55 hover:text-white transition"
        >
          <Search size={14} />
        </button>
  
      {open && q.length >= 2 && (
        <div className="absolute z-[99] mt-2 max-h-[70vh] w-full overflow-y-auto rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
          {isLoading && !hasResults ? (
            <p className="px-4 py-6 text-center text-sm text-zinc-500">Recherche…</p>
          ) : !hasResults ? (
            <p className="px-4 py-6 text-center text-sm text-zinc-500">
              Aucun résultat pour « {q} »
            </p>
          ) : (
            <>
              {matchedCats.length > 0 && (
                <Section title="Catégories">
                  {matchedCats.map((c) => (
                    <Row key={`c-${c.id}`} onClick={() => go(`/catalogue?category=${c.slug}`)}>
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-lime-400">
                        #
                      </span>
                      <span className="flex-1">{c.name}</span>
                      {c.count > 0 && <span className="text-xs text-zinc-500">{c.count}</span>}
                    </Row>
                  ))}
                </Section>
              )}

              {matchedBrands.length > 0 && (
                <Section title="Marques">
                  {matchedBrands.map((b) => (
                    <Row key={`b-${b.id}`} onClick={() => go(`/catalogue?brand=${b.slug}`)}>
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-lime-400">
                        ⬡
                      </span>
                      <span className="flex-1">{b.name}</span>
                      {b.count > 0 && <span className="text-xs text-zinc-500">{b.count}</span>}
                    </Row>
                  ))}
                </Section>
              )}

              {topProducts.length > 0 && (
                <Section title="Produits">
                  {topProducts.map((p) => (
                    <Row key={`p-${p.id}`} onClick={() => go(`/produit/${p.id}`)}>
                      <img
                        src={p.photos?.[0] || `https://picsum.photos/60/60?random=${p.id}`}
                        alt={p.name}
                        className="h-9 w-9 rounded-lg object-cover"
                      />
                      <span className="flex-1 truncate">{p.name}</span>
                      <span className="text-xs font-semibold text-lime-400">
                        {Number(p.price || 0).toFixed(2)} €
                      </span>
                    </Row>
                  ))}
                </Section>
              )}

              <button
                onMouseDown={(e) => e.preventDefault()}
                onClick={submitSearch}
                className="w-full border-t border-white/10 px-4 py-3 text-center text-sm font-semibold text-lime-400 transition hover:bg-lime-400/10"
              >
                Voir tous les résultats pour « {q} »
              </button>
            </>
          )}
        </div>
      )}
      </div>




  
    </div>
  );
}