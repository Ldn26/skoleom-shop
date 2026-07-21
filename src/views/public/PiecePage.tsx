
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingBag, X, ChevronLeft, ChevronRight, ArrowLeftRight } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { useFavorites } from '../../hooks/useFavorites';
import { useProduct, useProductVariations } from '../../api/product';
import SkeletonPiecePage from '../../components/shop/SkeletonPiecePage';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';
type PieceView = { key: string; label: string; media: string };
type VariationAttribute = { name: string; slug: string; option: string };
type Variation = {
  id: number;
  price: string;
  stock_quantity: number | null;
  stock_status: 'instock' | 'outofstock';
  attributes: VariationAttribute[];
};
type Piece = {
  id: string;
  productId: string;
  title: string;
  subtitle: string;
  price: string;
  rawPrice: number;
  description: string;
  images: { src: string; alt: string }[];
  sku: string;
  externalUrl: string | undefined;
  brandSlug: string | undefined;
  shortDescription: string | undefined;
  views: PieceView[];
};
const PARTNER_DIRECT_SLUGS = new Set(['gulf', 'lemans', 'mind-cbd']);
const TITLE_THRESHOLD = 55;
const DESC_THRESHOLD = 200;

  


function htmlToPlainText(html?: string): string {
  if (!html) return '';

  if (typeof window !== 'undefined') {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const text = doc.body?.textContent ?? '';
    return text.replace(/\s+/g, ' ').trim();
  }

  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncateAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const sliced = text.slice(0, max).trimEnd();
  const lastSpace = sliced.lastIndexOf(' ');
  if (lastSpace < Math.floor(max * 0.6)) return `${sliced}…`;
  return `${sliced.slice(0, lastSpace).trimEnd()}…`;
}

export default function PiecePage() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const localizedPath = useLocalizedPath();
  const navigate = useNavigate();
  const { data: rawProduct, isLoading: productLoading } = useProduct(id);
  const { data: rawVariations } = useProductVariations(id);
  const [view, setView] = useState<string>('face');
 const [quantity, setQuantity] = useState(1);
  const [feedback, setFeedback] = useState('');
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);
  const [titleExpanded, setTitleExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const asideRef = useRef<HTMLDivElement>(null);
  const handleTest = useCallback(() => {
    if (!id) return;
    // navigate({ pathname: localizedPath('/essayage'), search: `?product=${id}` });
     navigate(localizedPath(`/essayage?product=${id}`));
  }, [id, navigate, localizedPath]);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 40);
    return () => clearTimeout(t);
  }, []);

  const piece = useMemo<Piece | null>(() => {
    if (!rawProduct) return null;

    const views: PieceView[] = rawProduct.images?.length
      ? rawProduct.images.map((img: { src: string; alt: string }, i: number) => ({
          key: i === 0 ? 'face' : `view-${i}`,
          label: img.alt || '',
          media: img.src,
        }))
      : [{ key: 'face', label: '', media: '/assets/images/Cinematique.webp' }];

    const plainDescription = htmlToPlainText(rawProduct.description);
    const plainShortDescription = htmlToPlainText(rawProduct.short_description);

    return {
      id: String(rawProduct.id),
      productId: String(rawProduct.id),
      title: rawProduct.name || '',
      subtitle: rawProduct.brands?.[0]?.name ?? '',
      price: rawProduct.price ? `€${rawProduct.price}` : '',
      rawPrice: Number(rawProduct.price ?? 0),
      description: plainDescription || plainShortDescription || '',
      images: rawProduct.images ?? [],
      sku: rawProduct.sku ?? '',
      externalUrl: rawProduct.external_url,
      brandSlug: rawProduct.brands?.[0]?.slug,
      shortDescription: rawProduct.short_description,
      views,
    };
  }, [rawProduct]);

  const { isFavorite, toggleFavorite } = useFavorites({
    id: Number(rawProduct?.id ?? 0),
    image: rawProduct?.images?.[0]?.src ?? '',
    title: rawProduct?.name ?? '',
    price: Number(rawProduct?.price ?? 0),
  });

  const variation = useMemo<Variation[]>(
    () => (Array.isArray(rawVariations) ? rawVariations : []),
    [rawVariations],
  );

  const attributes = useMemo(() => {
    if (variation.length === 0) return [];
    const attrsMap = new Map<string, { name: string; options: Set<string> }>();
    variation.forEach((v) => {
      v.attributes.forEach((attr) => {
        if (!attrsMap.has(attr.slug))
          attrsMap.set(attr.slug, { name: attr.name, options: new Set() });
        attrsMap.get(attr.slug)!.options.add(attr.option);
      });
    });
    return Array.from(attrsMap.entries()).map(([slug, { name, options }]) => ({
      slug,
      name,
      options: Array.from(options),
    }));
  }, [variation]);

  useEffect(() => {
    if (attributes.length === 0) return;
    const initial: Record<string, string> = {};
    attributes.forEach((attr, i) => {
      initial[attr.slug] = i === 0 && attributes.length > 1 ? attr.options[0] : '';
    });
    setSelectedOptions(initial);
  }, [attributes]);

  const handleOptionSelect = useCallback(
    (slug: string, option: string) => {
      setSelectedOptions((prev) => {
        const next = { ...prev, [slug]: option };
        const attrIndex = attributes.findIndex((a) => a.slug === slug);
        if (attrIndex === 0 && attributes.length > 1) next[attributes[1].slug] = '';
        return next;
      });
    },
    [attributes],
  );

  const getAvailableOptions = useCallback(
    (attributeSlug: string): string[] => {
      const primary = attributes[0];
      if (!primary || attributeSlug === primary.slug)
        return attributes.find((a) => a.slug === attributeSlug)?.options ?? [];
      const primaryOption = selectedOptions[primary.slug];
      if (!primaryOption) return [];
      const opts = new Set<string>();
      variation
        .filter((v) =>
          v.attributes.some((a) => a.slug === primary.slug && a.option === primaryOption),
        )
        .forEach((v) => {
          const m = v.attributes.find((a) => a.slug === attributeSlug);
          if (m) opts.add(m.option);
        });
      return Array.from(opts);
    },
    [attributes, selectedOptions, variation],
  );

  const isOptionOutOfStock = useCallback(
    (attributeSlug: string, option: string): boolean => {
      if (variation.length === 0) return false;
      if (attributes.length === 1) {
        const v = variation.find((v) =>
          v.attributes.some((a) => a.slug === attributeSlug && a.option === option),
        );
        return v?.stock_status === 'outofstock';
      }
      const primary = attributes[0];
      if (attributeSlug === primary.slug) return false;
      const primaryOption = selectedOptions[primary.slug];
      const v = variation.find((v) =>
        v.attributes.every(
          (a) =>
            (a.slug === primary.slug && a.option === primaryOption) ||
            (a.slug === attributeSlug && a.option === option),
        ),
      );
      return v?.stock_status === 'outofstock';
    },
    [attributes, selectedOptions, variation],
  );

  const isVariationSelected = useMemo(
    () => Object.values(selectedOptions).every(Boolean),
    [selectedOptions],
  );

  const selectedVariation = useMemo<Variation | null>(() => {
    if (!isVariationSelected || variation.length === 0) return null;
    return (
      variation.find((v) =>
        v.attributes.every((attr) => selectedOptions[attr.slug] === attr.option),
      ) ?? null
    );
  }, [selectedOptions, variation, isVariationSelected]);

  const allVariationsOutOfStock = useMemo(
    () => variation.length > 0 && variation.every((v) => v.stock_status === 'outofstock'),
    [variation],
  );

  const currentView = useMemo<PieceView | null>(() => {
    if (!piece) return null;
    return piece.views.find((item) => item.key === view) ?? piece.views[0] ?? null;
  }, [piece, view]);

  const currentViewIndex = useMemo(() => {
    if (!piece) return 0;
    return piece.views.findIndex((item) => item.key === view);
  }, [piece, view]);

  const isAffiliate = useMemo(
    () => Boolean(piece?.sku?.startsWith('AMZ-') || piece?.externalUrl),
    [piece],
  );
  const isPartnerDirect = useMemo(
    () => (piece?.brandSlug ? PARTNER_DIRECT_SLUGS.has(piece.brandSlug) : false),
    [piece],
  );

  // ── Cart ──────────────────────────────────────────────────────────────────

  const getCartPayload = useCallback(
    (): { productId: number; variationId?: number } => ({
      productId: Number(piece?.productId ?? 0),
      ...(selectedVariation ? { variationId: selectedVariation.id } : {}),
    }),
    [selectedVariation, piece],
  );

  const handleAffiliateCart = useCallback(() => {
    if (!piece) return;
    const isAmazon = piece.sku?.startsWith('AMZ-');
    const asin = isAmazon ? piece.sku.replace('AMZ-', '') : `EXT-${piece.productId}`;
    window.dispatchEvent(
      new CustomEvent('skoleom:add-amazon', {
        detail: {
          asin,
          title: piece.title,
          price: String(piece.rawPrice),
          image: piece.images?.[0]?.src ?? '',
          url: piece.externalUrl ?? '',
          source: isAmazon ? 'amazon' : 'external',
        },
      }),
    );
  }, [piece]);

  const addToCartWithFeedback = useCallback(async () => {
    setFeedback('');
    if (!piece) return;
    if (!isPartnerDirect && isAffiliate) {
      handleAffiliateCart();
      return;
    }
    if (variation.length > 0 && !isVariationSelected) {
      return;
    }
    setLoadingAdd(true);
    try {
      const { productId, variationId } = getCartPayload();
      await addToCart(productId, quantity);
    } catch {
      setFeedback("Impossible d'ajouter au panier");
    } finally {
      setLoadingAdd(false);
    }
  }, [
    piece,
    isPartnerDirect,
    isAffiliate,
    variation.length,
    isVariationSelected,
    handleAffiliateCart,
    addToCart,
    getCartPayload,
    quantity,
  ]);

  const handleFavorite = useCallback(() => {
    toggleFavorite();
  }, [toggleFavorite]);

  const navigateView = useCallback(
    (dir: 1 | -1) => {
      if (!piece) return;
      const next = (currentViewIndex + dir + piece.views.length) % piece.views.length;
      setView(piece.views[next].key);
    },
    [piece, currentViewIndex],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') navigateView(-1);
      if (e.key === 'ArrowRight') navigateView(1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen, navigateView]);

  if (productLoading || !piece || !currentView) return <SkeletonPiecePage />;

  const isDescLong = piece.description.length > DESC_THRESHOLD;
  const shortDesc = isDescLong
    ? truncateAtWord(piece.description, DESC_THRESHOLD)
    : piece.description;
  const isTitleLong = piece.title.length > TITLE_THRESHOLD;
  const shortTitle = isTitleLong ? truncateAtWord(piece.title, TITLE_THRESHOLD) : piece.title;

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        @keyframes _fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes _scaleIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes _shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .pp-in-0 { animation: _fadeUp .5s cubic-bezier(.22,1,.36,1) both; }
        .pp-in-1 { animation: _fadeUp .52s .04s cubic-bezier(.22,1,.36,1) both; }
        .pp-in-2 { animation: _fadeUp .54s .09s cubic-bezier(.22,1,.36,1) both; }
        .pp-img-enter { animation: _scaleIn .45s cubic-bezier(.22,1,.36,1) both; }
        .pp-back { transition: color .15s; }
        .pp-back:hover { color: rgba(255,255,255,.85); }
        .pp-thumb { transition: none; }
        .pp-thumb:hover { opacity: .85 !important; }
        .pp-opt { transition: none; }
        .pp-cta { transition: none; }
        .pp-fav { transition: none; }
        .pp-qty { transition: none; }
        .pp-arrow { transition: none; }
        .pp-desc { transition: none; }
        .pp-static button {
          transform: none !important;
          transition-property: background-color, border-color, color, opacity !important;
        }
        .pp-static button:hover:not(:disabled),
        .pp-static button:active:not(:disabled) {
          transform: none !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .pp-in-0,.pp-in-1,.pp-in-2,.pp-img-enter { animation: none !important; }
          .pp-back,.pp-thumb,.pp-opt,.pp-cta,.pp-fav,.pp-qty,.pp-arrow { transition: none !important; }
        }
      `}</style>

      <main className="piece-page pp-static sk-shell bg-black pb-28 pt-28 text-white lg:pt-32">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          {/* ── Back ── */}
          <div className={revealed ? 'pp-in-0 mb-8' : 'opacity-0 mb-8'}>
            <Link
              to={localizedPath('/catalogue')}
              className="piece-page-muted pp-back inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/45 hover:text-white/85"
            >
              <ArrowLeft size={12} strokeWidth={2.5} />
              Collection
            </Link>
          </div>

          {/* ── Two-column layout ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
            {/* ── LEFT: gallery ── */}
            <div
              className={`${revealed ? 'pp-in-1' : 'opacity-0'} mx-auto w-full max-w-[600px] md:mx-0 md:max-w-none xl:max-w-[460px]`}
            >
              <div
                className="piece-page-surface group relative mx-auto w-full max-w-[520px] overflow-hidden rounded-2xl  cursor-zoom-in select-none"
                style={{ aspectRatio: '3 / 4', maxHeight: '75vh' }}
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  key={currentView.key}
                  src={currentView.media}
                  alt={`${piece.title} — ${currentView.label}`}
                  width={900}
                  height={1200}
                  loading="eager"
                  decoding="async"
                  className="pp-img-enter h-full w-full object-cover"
                />

                {/* Bottom fade */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,.5) 0%, transparent 45%)',
                  }}
                />

                {/* Prev / Next */}
                {piece.views.length > 1 && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
                    <button
                      type="button"
                      aria-label="Précédent"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateView(-1);
                      }}
                      className="pp-arrow pointer-events-auto absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white/70 opacity-100 backdrop-blur-sm hover:bg-black/70 hover:text-white"
                    >
                      <ChevronLeft size={15} />
                    </button>
                    <button
                      type="button"
                      aria-label="Suivant"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateView(1);
                      }}
                      className="pp-arrow pointer-events-auto absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white/70 opacity-100 backdrop-blur-sm hover:bg-black/70 hover:text-white"
                    >
                      <ChevronRight size={15} />
                    </button>
                  </div>
                )}

                {/* Dot track */}
                {piece.views.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                    {piece.views.map((item) => (
                      <span
                        key={item.key}
                        className="block rounded-full"
                        style={{
                          width: item.key === view ? 20 : 5,
                          height: 5,
                          background:
                            item.key === view
                              ? 'var(--skoleom-lime,#b4ff00)'
                              : 'rgba(255,255,255,.28)',
                          transition: 'width .28s cubic-bezier(.22,1,.36,1), background .2s',
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Amazon badge */}
                {isAffiliate && (
                  <div className="absolute left-3 top-3 rounded-full bg-amber-500/20 border border-amber-500/35 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-amber-400">
                    Amazon
                  </div>
                )}

                {/* OOS overlay */}
                {allVariationsOutOfStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/55 backdrop-blur-[2px]">
                    <span className="rounded-full bg-black/60 border border-white/15 px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-white/50">
                      Rupture de stock
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {piece.views.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {piece.views.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      aria-label={item.label || item.key}
                      onClick={() => setView(item.key)}
                      className={`pp-thumb shrink-0 overflow-hidden rounded-xl border transition-all duration-200 ${
                        item.key === view
                          ? 'border-skoleom-lime bg-[#1b1b1b]'
                          : 'border-white/10 bg-[#111] hover:border-white/30'
                      }`}
                      style={{
                        width: 56,
                        height: 56,
                        opacity: item.key === view ? 1 : 0.6,
                      }}
                    >
                      <img
                        src={item.media}
                        alt=""
                        className="h-full w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div
              ref={asideRef}
              className={`${revealed ? 'pp-in-2' : 'opacity-0'} xl:sticky xl:top-[7.75rem]`}
            >
              <div className="piece-page-panel flex flex-col gap-0 rounded-2xl border border-white/10 bg-black p-5 text-white shadow-[0_16px_36px_rgba(0,0,0,0.28)] sm:p-7">
                {/* Eyebrow */}
                <p className="text-[10px] font-bold uppercase tracking-[.28em] text-skoleom-lime/75">
                  {piece.subtitle || 'Détail'}
                </p>

                {/* Title */}
                <h1 className="piece-page-strong mt-3 text-[clamp(1.95rem,3vw,2.4rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
                  {titleExpanded ? piece.title : shortTitle}
                </h1>
                {isTitleLong && (
                  <button
                    type="button"
                    onClick={() => setTitleExpanded((v) => !v)}
                    className="piece-page-muted mt-2 self-start text-[10px] font-semibold text-white/45 hover:text-white/80"
                    style={{ transition: 'color .15s' }}
                  >
                    {titleExpanded ? 'Moins ↑' : 'Plus ↓'}
                  </button>
                )}

                {/* Divider */}
                <div className="my-5 h-px bg-white/[.06]" />

                {/* Description */}
                <p className="piece-page-muted pp-desc max-w-[62ch] text-[14px] leading-[1.75] text-white/62">
                  {descExpanded ? piece.description : shortDesc}
                </p>
                {isDescLong && (
                  <button
                    type="button"
                    onClick={() => setDescExpanded((v) => !v)}
                    className="piece-page-muted mt-2 self-start text-[10px] font-semibold text-white/45 hover:text-white/80"
                    style={{ transition: 'color .15s' }}
                  >
                    {descExpanded ? 'Lire moins ↑' : 'Lire plus ↓'}
                  </button>
                )}

                {/* Star rating */}
                {isAffiliate && piece.shortDescription && (
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const match = piece.shortDescription?.match(/([0-9],[0-9]|[0-9]\.[0-9])/);
                        const rating = match ? parseFloat(match[1].replace(',', '.')) : 0;
                        return (
                          <svg
                            key={star}
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill={star <= Math.round(rating) ? '#f59e0b' : '#222'}
                            stroke="none"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        );
                      })}
                    </div>
                    <span
                      className="piece-page-muted text-[11px] text-white/28"
                      dangerouslySetInnerHTML={{ __html: piece.shortDescription }}
                    />
                  </div>
                )}

                {/* Divider */}
                <div className="my-5 h-px bg-white/[.06]" />

                {/* Price */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="piece-page-muted text-[9px] font-bold uppercase tracking-[.25em] text-white/28">
                      Prix
                    </p>
                    <p className="piece-page-strong mt-1 text-[2.4rem] font-black leading-none tracking-tight text-white">
                      {piece.price}
                    </p>
                  </div>
                  {selectedVariation && (
                    <p
                      className="mb-1 text-[11px] font-bold uppercase tracking-wide"
                      style={{
                        color: selectedVariation.stock_status === 'instock' ? '#34d399' : '#f87171',
                        transition: 'color .2s',
                      }}
                    >
                      {selectedVariation.stock_status === 'instock'
                        ? '✓ En stock'
                        : '✗ Rupture'}
                    </p>
                  )}
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-white/[.06]" />

                {/* Variation attributes */}
                {attributes.map((attr, index) => {
                  const availableOptions =
                    index > 0 ? getAvailableOptions(attr.slug) : attr.options;
                  if (availableOptions.length === 0 && index > 0) return null;
                  return (
                    <div key={attr.slug} className="mb-3">
                      <p className="piece-page-muted mb-2 text-[9px] font-bold uppercase tracking-[.25em] text-white/30">
                        {attr.name}
                        {selectedOptions[attr.slug] && (
                          <span className="piece-page-muted ml-2 normal-case font-semibold tracking-normal text-white/55">
                            — {selectedOptions[attr.slug]}
                          </span>
                        )}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {availableOptions.map((option) => {
                          const oos = isOptionOutOfStock(attr.slug, option);
                          const selected = selectedOptions[attr.slug] === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              aria-label={`${attr.name}: ${option}`}
                              disabled={oos}
                              onClick={() => handleOptionSelect(attr.slug, option)}
                              className="pp-opt relative min-w-[2.6rem] rounded-[10px] border px-3.5 py-1.5 text-[12px] font-semibold"
                              style={{
                                borderColor: selected
                                  ? 'var(--skoleom-lime,#b4ff00)'
                                  : oos
                                    ? 'var(--piece-option-oos-border)'
                                    : 'var(--piece-option-border)',
                                background: selected
                                  ? 'var(--skoleom-lime,#b4ff00)'
                                  : 'transparent',
                                color: selected
                                  ? '#000'
                                  : oos
                                    ? 'var(--piece-option-oos-text)'
                                    : 'var(--piece-option-text)',
                                cursor: oos ? 'not-allowed' : 'pointer',
                                boxShadow: selected ? '0 0 16px rgba(180,255,0,.22)' : 'none',
                              }}
                            >
                              {oos && (
                                <span className="pointer-events-none absolute inset-0">
                                  <span
                                    className="absolute w-full h-px top-1/2 rotate-[-20deg]"
                                    style={{ background: 'var(--piece-option-slash)' }}
                                  />
                                </span>
                              )}
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                {/* Size + Quantity (no variations) */}
                {/* {variation.length === 0 && (
                  <div className="mb-5 grid grid-cols-2 gap-4">
                    <div>
                      <p className="piece-page-muted mb-2 text-[9px] font-bold uppercase tracking-[.25em] text-white/30">
                        Taille
                      </p>
                      <select
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="piece-page-input w-full rounded-xl bg-white/[.04] border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none"
                        style={{ transition: 'border-color .15s' }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'var(--skoleom-lime,#b4ff00)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)';
                        }}
                      >
                        {(['XS', 'S', 'M', 'L', 'XL'] as const).map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <p className="piece-page-muted mb-2 text-[9px] font-bold uppercase tracking-[.25em] text-white/30">
                        Quantité
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                          className="piece-page-ghost pp-qty flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[.04] border border-white/10 text-white/55 hover:text-white text-lg font-light"
                        >
                          −
                        </button>
                        <span
                          key={quantity}
                          className="piece-page-strong flex-1 text-center text-sm font-bold text-white tabular-nums"
                          style={{ animation: 'none' }}
                        >
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                          className="piece-page-ghost pp-qty flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[.04] border border-white/10 text-white/55 hover:text-white text-lg font-light"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )} */}

                {/* CTAs */}
                <div className="flex flex-col gap-2.5">
                  {/* Add to cart */}
                  {(() => {
                    let label = 'Ajouter au panier';
                    if (loadingAdd) label = 'Ajout…';
                    else if (allVariationsOutOfStock) label = 'Rupture de stock';
                    else if (variation.length > 0 && !isVariationSelected)
                      label = 'Choisir une option';
                    return (
                      <button
                        type="button"
                        onClick={addToCartWithFeedback}
                        disabled={(variation.length > 0 && allVariationsOutOfStock) || loadingAdd}
                        aria-label={label}
                        className="pp-cta bg-skoleom-lime inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-3.5 text-[11px] font-black uppercase tracking-widest text-black shadow-[0_8px_18px_rgba(180,255,0,0.28)] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <ShoppingBag size={13} strokeWidth={2.5} />
                        {label}
                      </button>
                    );
                  })()}

                  <button
                    type="button"
                    onClick={handleFavorite}
                    className={`pp-fav inline-flex items-center justify-center gap-2.5 rounded-full border px-5 py-3.5 text-[11px] font-bold uppercase tracking-widest ${
                      isFavorite
                        ? 'border-[#e94560]/50 bg-[#e94560]/8 text-[#e94560]'
                        : 'border-white/12 bg-white/[0.015] text-white/58 hover:border-white/24 hover:text-white/84'
                    }`}
                  >
                    <Heart
                      size={13}
                      strokeWidth={2.5}
                      fill={isFavorite ? 'currentColor' : 'none'}
                      style={{ transition: 'fill .18s' }}
                    />
                    {isFavorite ? 'Enregistré' : 'Enregistrer'}
                  </button>

                  <button
                    type="button"
                    onClick={handleTest}
                    className="pp-fav inline-flex items-center justify-center gap-2.5 rounded-full border px-5 py-3.5 text-[11px] font-bold uppercase tracking-widest border-white/12 bg-white/[0.015] text-white/58 hover:border-white/24 hover:text-white/84"
                  > 
                  <ArrowLeftRight size={13} strokeWidth={2.5} />
                  

                    TESTER LE PRODUIT
                  </button>

                  {feedback && (
                    <p
                      className="text-center text-[11px] font-semibold text-skoleom-lime"
                      style={{ animation: '_fadeUp .3s cubic-bezier(.22,1,.36,1)' }}
                    >
                      {feedback}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── Lightbox ── */}
      {lightboxOpen && currentView && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
          style={{
            background: 'rgba(0,0,0,.93)',
            animation: '_fadeUp .22s cubic-bezier(.22,1,.36,1)',
          }}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/55 hover:text-white"
            style={{ transition: 'background .15s, color .15s' }}
          >
            <X size={16} />
          </button>

          {piece.views.length > 1 && (
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-between px-5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Précédent"
                onClick={() => navigateView(-1)}
                className="pp-arrow pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white/55 hover:bg-white/14 hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Suivant"
                onClick={() => navigateView(1)}
                className="pp-arrow pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white/55 hover:bg-white/14 hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          <img
            key={currentView.key}
            src={currentView.media}
            alt={piece.title}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
            style={{ animation: '_scaleIn .28s cubic-bezier(.22,1,.36,1)' }}
            onClick={(e) => e.stopPropagation()}
          />

          {piece.views.length > 1 && (
            <div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {piece.views.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setView(item.key)}
                  className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                    item.key === view
                      ? 'border-skoleom-lime bg-[#1b1b1b]'
                      : 'border-white/20 bg-[#111] hover:border-white/40'
                  }`}
                  style={{
                    width: 44,
                    height: 44,
                    opacity: item.key === view ? 1 : 0.55,
                    transition: 'opacity .18s',
                  }}
                >
                  <img
                    src={item.media}
                    alt=""
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Service unavailable modal ── */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          style={{ background: 'rgba(0,0,0,.75)' }}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl bg-[#111] p-8"
            style={{ animation: '_scaleIn .28s cubic-bezier(.22,1,.36,1)' }}
          >
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/40 hover:text-white"
              style={{ transition: 'color .15s' }}
            >
              <X size={14} />
            </button>
            <p className="mb-1 text-sm font-black uppercase tracking-tight text-white">
              Service indisponible
            </p>
            <p className="text-[13px] text-white/38 leading-relaxed">
              Ce service est momentanément indisponible.
            </p>
          </div>
        </div>
      )}
    </>
  );
}