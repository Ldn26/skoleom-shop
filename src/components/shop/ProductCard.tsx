
import { FC, useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import { Heart, ShoppingBag, Check, Loader2, Eye } from 'lucide-react';
import { useFavorites } from '../../hooks/useFavorites';
import { useCart } from '../../hooks/useCart';
// import { useLanguage } from '@/components/i18n/LanguageProvider';
// import { VariantDrawer } from '@/components/VariantDrawer/VariantDrawer';
import { useTranslation } from '../../i18n/react-i18next-shim';
// import { trackEvent } from '@/lib/analytics';
// import { pushAddToCart } from '@/lib/analytics/gtm';
// import { decodeHtmlEntities } from '@/lib/utils';

interface ProductCardProps {
  id: number | string;
  title: string;
  image?: string | null;
  category?: string | null;
  price: number;
  regularPrice?: number | null;
  onSale?: boolean;
  idYtb?: string | null;
  sku?: string | null;
  external_url?: string | null;
  inStock?: boolean | null;
  isPartnerDirect?: boolean;
}


function shortenAffiliateTitle(raw: string): string {
  if (!raw) return raw;
  let s = raw.trim();
  if (s.length <= 35) return s;

  const candidates = [
    s.search(/[,;|]/),
    s.search(/\s[-–]\s/),
    s.toLowerCase().indexOf(' pour '),
    s.toLowerCase().indexOf(' avec '),
    s.toLowerCase().indexOf(' chaussures '),
    s.toLowerCase().indexOf(' chaussure '),
  ].filter((i) => i > 8);

  if (candidates.length) {
    s = s.slice(0, Math.min(...candidates)).trim();
  }

  const words = s.split(/\s+/);
  if (words.length > 6) s = words.slice(0, 6).join(' ');

  return s;
}

 const ProductCard: FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  regularPrice,
  onSale = false,
  category,
  sku,
  external_url,
  isPartnerDirect = false,
  inStock,
}) => {

  const isAmazonAffiliate = sku?.startsWith('AMZ-') || false;
  const isAffiliate = !isPartnerDirect && (isAmazonAffiliate || Boolean(external_url));
  // const cleanTitle = decodeHtmlEntities(title);
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const pendingRef = useRef<any>(null);
  const { isFavorite, toggleFavorite } = useFavorites({
    id: id,
    image: image ?? '',
    title: '',
    price,
  });

  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('sr-visible');
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('sr-visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // pushAddToCart(
    //   {
    //     item_id: id,
    //     item_name: title,
    //     item_category: category ?? undefined,
    //     price,
    //   },
    //   price,
    // );

    if (isAffiliate) {
      // ASIN si Amazon, sinon identifiant stable "EXT-<id>" pour les autres marchands.
      // L'extension v2 lit localStorage["skoleom:amazon-cart"] via le bridge.
      const asin = isAmazonAffiliate ? sku!.replace('AMZ-', '') : 'EXT-' + id;
      const source: 'amazon' | 'external' = isAmazonAffiliate ? 'amazon' : 'external';

      // 1) L'extension écoute 'skoleom:add-amazon' et ajoute l'item dans son
      //    store partenaires (synchrone — visible instantanément).
      window.dispatchEvent(
        new CustomEvent('skoleom:add-amazon', {
          detail: {
            asin,
            title: title,
            price: String(price),
            image: image || '',
            url: external_url || '',
            source,
          },
        }),
      );

      // 2) Ouvre la sidebar panier — l'item est déjà dans le store de l'extension.
      window.dispatchEvent(
        new CustomEvent('skoleom:open-sidepage', { detail: { page: 'basket' } }),
      );

      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 1500);
    } else {
      // Produit Skoleom WooCommerce — laisser l'extension faire l'appel API
      setIsChecking(true);
      // try {
      //   const res = await fetch(
      //     process.env.NEXT_PUBLIC_SESYNC_URL + '/api/products/' + id + '/variations',
      //   );
      //   const variations = await res.json();

      //   if (Array.isArray(variations) && variations.length > 0) {
      //     setDrawerOpen(true);
      //   } else {
      //     addToCart(id, 1);
      //     setAddedToCart(true);
      //     setTimeout(() => setAddedToCart(false), 1500);
      //   }
      // } catch {
      //   addToCart(id, 1);
      //   setAddedToCart(true);
      //   setTimeout(() => setAddedToCart(false), 1500);
      // } finally {
      //   setIsChecking(false);
      // }
    }
  };


  // const trackSelectItem = () =>
    // trackEvent('select_item', {
    //   item_id: id,
    //   item_name: title,
    //   item_category: category ?? undefined,
    //   price,
    //   affiliate: isAffiliate,
    // });

  // const handleToggleFavorite = () => {
  //   trackEvent(isFavorite ? 'remove_from_wishlist' : 'add_to_wishlist', {
  //     item_id: id,
  //     item_name: title,
  //     price,
  //   });
  //   toggleFavorite();
  // };

  const discount =
    onSale && regularPrice && regularPrice > price
      ? Math.round(((regularPrice - price) / regularPrice) * 100)
      : 0;

  const cartBtnClass = addedToCart
    ? 'bg-[#a8ff35] border-[#a8ff35] scale-110'
    : isChecking
      ? 'bg-[#a8ff35]/20 border-[#a8ff35]/40 scale-110'
      : 'bg-black/40 border-white/10 backdrop-blur-sm hover:bg-[#a8ff35] hover:border-[#a8ff35] hover:scale-110';

  const favBtnClass = isFavorite
    ? 'bg-red-500/80 border-red-400/40'
    : 'bg-black/40 border-white/10 hover:bg-red-500/60 hover:border-red-400/40';

  return (
    <div ref={cardRef} className="itemCardProduct group">
      <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/[0.08] transition-all duration-300 ease-out group-hover:border-[#a8ff35]/30 group-hover:shadow-[0_0_30px_-5px_rgba(168,255,53,0.12)]">
        <div
          className={
            'absolute top-3 left-3 z-10 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border ' +
            cartBtnClass
          }
          onClick={handleAddToCart}
        >
          {addedToCart ? (
            <Check size={16} color="#000" strokeWidth={3} />
          ) : isChecking ? (
            <Loader2 size={16} color="#a8ff35" className="animate-spin" />
          ) : (
            <ShoppingBag size={16} className="text-white" />
          )}
        </div>

        <div
          className={
            'absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border backdrop-blur-sm ' +
            favBtnClass
          }
          // onClick={handleToggleFavorite}
        >
          <Heart size={16} color="#fff" fill={isFavorite ? '#fff' : 'none'} />
        </div>

        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5">
          {category && (
            <span className="bg-black/50 backdrop-blur-xl border border-white/[0.12] rounded-full px-3 py-1.5 text-[11px] font-medium text-white/90 tracking-wide">
              {category}
            </span>
          )}
          {inStock === false && (
            <span className="inline-flex items-center gap-1.5 shrink-0 whitespace-nowrap rounded-full bg-red-500/15 px-2.5 py-1 text-[11px] font-semibold text-red-400 ring-1 ring-inset ring-red-500/40 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              {/* {t('product.outOfStock')} */}
              Rupture de stock
            </span>
          )}
        </div>

        {discount > 0 && (
          <span className="absolute bottom-3 right-3 z-10 rounded-full bg-[#a8ff35] px-2.5 py-1 text-[11px] font-black text-black">
            -{discount}%
          </span>
        )}

        <div className={'h-full w-full ' + (isAffiliate ? 'bg-white' : 'bg-[#0a0a0a]')}>
          {image && (
            // <img> natif : on évite le proxy /_next/image (fetch upstream + Sharp).
            // Les hôtes externes (WooCommerce, Amazon, partenaires) servent déjà
            // des tailles raisonnables — la grille reste fluide même sans transform.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              // alt={cleanTitle}
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
              className={
                (isAffiliate ? 'object-contain p-4' : 'object-cover') +
                ' w-full h-full transition-transform duration-500 ease-out group-hover:scale-110'
              }
            />
          )}
        </div>

        <Link
          to={"/produit/" + id}
          // prefetch={false}
          // onClick={trackSelectItem}
          className="absolute inset-0 z-[5] flex items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/25 text-white text-sm font-semibold shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_8px_24px_-8px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-white/20 hover:border-white/40 translate-y-3 group-hover:translate-y-0"
            style={{
              WebkitBackdropFilter: 'blur(20px) saturate(160%)',
              backdropFilter: 'blur(20px) saturate(160%)',
            }}
          >
            <Eye size={16} />
            {/* {t('product.view')} */}
            Voir le produit
          </div>
        </Link>
      </div>

      <div className="mt-3.5 px-0.5">
        <Link to={"/produit/" + id}
          // onClick={trackSelectItem}
          >
          <p
            className="text-sm font-semibold text-white/90 leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-white"
            title={title}
          >
            {isAffiliate ? shortenAffiliateTitle(title) : title}
          </p>
        </Link>
        {price > 0 && (
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[15px] font-bold text-white tracking-tight">
              {'\u20AC'}
              {price}
            </span>
            {discount > 0 && (
              <span className="text-[13px] text-white/40 line-through">
                {'\u20AC'}
                {regularPrice}
              </span>
            )}
          </div>
        )}
      </div>

      {/* <VariantDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        productId={id}
        productName={title}
        productImage={image}
        productPrice={price}
      /> */}
    </div>
  );
}



export default ProductCard;