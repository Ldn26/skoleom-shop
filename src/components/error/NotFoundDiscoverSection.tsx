import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from './ProductCard';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';
import {
  NOT_FOUND_PRODUCT_HREFS,
  NOT_FOUND_PRODUCT_ICONS,
  NOT_FOUND_PRODUCT_IDS,
  NOT_FOUND_PRODUCT_TONES,
} from '../../data/notFoundProducts';

/** Grille des produits Skoleom (section « En attendant, découvrez »). */
export default function NotFoundDiscoverSection() {
  const { t } = useTranslation();
  const localizePath = useLocalizedPath();

  const products = useMemo(
    () =>
      NOT_FOUND_PRODUCT_IDS.map((id) => ({
        id,
        title: t(`public.notFound.products.${id}.title`),
        description: t(`public.notFound.products.${id}.description`),
        href: localizePath(NOT_FOUND_PRODUCT_HREFS[id]),
        icon: NOT_FOUND_PRODUCT_ICONS[id],
        tone: NOT_FOUND_PRODUCT_TONES[id],
      })),
    [localizePath, t],
  );

  return (
    <section aria-labelledby="products-title" className="relative mx-auto max-w-7xl px-6 pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-black via-black/80 to-transparent"
      />

      <div className="relative mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.35em] text-univ-lime/80">
            Skoleom Universe
          </p>
          <h2
            id="products-title"
            className="text-xl font-bold uppercase tracking-wide text-white md:text-2xl"
          >
            {t('public.notFound.discover')}
          </h2>
        </div>
        <p className="max-w-md text-sm text-white/50">{t('public.notFound.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} featured />
        ))}
      </div>
    </section>
  );
}
