/**
 * Composants d'hydratation des logos/boutiques (réplique de sk-logos.js).
 *  - <SkStoreName k="sesports"/>   → data-sk-store (logo boutique)
 *  - <SkShopCover k="sesports"/>   → data-sk-shop-cover (visuel boutique)
 *  - <SkBrand k="universe"/>       → data-sk-brand (logo marque)
 *  - useOpenBoutique()             → openBoutique(id, fallback)
 */
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SK_BRAND, SK_STORES, SK_CATEGORIES, SK_SHOP_COVERS, resolveBoutique } from './skLogos';

function img(src: string, height: number | undefined, alt: string, cls: string, fixed: boolean) {
  return (
    <img
      src={src}
      alt={alt || 'Skoleom'}
      className={cls}
      {...(fixed ? {} : { height })}
      loading="lazy"
      decoding="async"
    />
  );
}

/** renderStore : stores[key] || categories[key] || brand.audiovisual. */
export function SkStoreName({
  k,
  height = 48,
  fixed = false,
}: {
  k: string;
  height?: number;
  fixed?: boolean;
}) {
  const src = SK_STORES[k] || SK_CATEGORIES[k] || SK_BRAND.audiovisual;
  const cls = ['sk-brand-img', 'sk-brand-img--store', fixed ? 'sk-brand-img--fixed' : '']
    .filter(Boolean)
    .join(' ');
  return img(src, height, 'Skoleom', cls, fixed);
}

export function SkShopCover({ k, alt }: { k: string; alt?: string }) {
  const src = SK_SHOP_COVERS[k] || SK_SHOP_COVERS['sport-elite'] || '/shop/boutiques/SeSports.webp';
  return (
    <img
      src={src}
      alt={alt || 'Skoleom boutique'}
      className="sk-shop-cover"
      loading="lazy"
      decoding="async"
    />
  );
}

export function SkBrand({ k = 'universe', height = 32 }: { k?: string; height?: number }) {
  const src = SK_BRAND[k] || SK_BRAND.universe;
  const alt = k === 'business' ? 'Skoleom Business' : 'Skoleom Universe';
  return img(src, height, alt, `sk-brand-img sk-brand-img--${k}`, false);
}

/** Hook : ouvre une boutique (nouvel onglet si externe, sinon route interne). */
export function useOpenBoutique() {
  const navigate = useNavigate();
  return useCallback(
    (id: string, fallbackHref?: string) => {
      const link = resolveBoutique(id, fallbackHref);
      if (link.external) {
        window.open(link.href, '_blank', 'noopener,noreferrer');
        return;
      }
      navigate(link.href);
    },
    [navigate],
  );
}
