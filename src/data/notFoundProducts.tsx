import type { ReactNode } from 'react';
import { LOGOS } from '../constants/logos';

export const NOT_FOUND_PRODUCT_IDS = ['sesync', 'stores', 'watch', 'invest', 'pulse'] as const;

export type NotFoundProductId = (typeof NOT_FOUND_PRODUCT_IDS)[number];

export type NotFoundProductTone = 'purple' | 'green' | 'red' | 'blue' | 'lime';

export const NOT_FOUND_PRODUCT_HREFS: Record<NotFoundProductId, string> = {
  sesync: '/sesync',
  stores: '/stores',
  watch: '/watch',
  invest: '/invest',
  pulse: '/pulse',
};

export const NOT_FOUND_PRODUCT_TONES: Record<NotFoundProductId, NotFoundProductTone> = {
  sesync: 'purple',
  stores: 'green',
  watch: 'red',
  invest: 'blue',
  pulse: 'lime',
};

function ProductLogo({ src, className }: { src: string; className: string }) {
  return <img src={src} alt="" className={className} decoding="async" draggable={false} />;
}

/** Tailles harmonisées dans le slot logo 404 (centré verticalement dans ProductCard). */
const LOGO_BASE = 'w-auto object-contain';
const LOGO_DEFAULT = `${LOGO_BASE} max-h-[5.5rem] max-w-[min(100%,260px)] sm:max-h-24 sm:max-w-[280px] md:max-h-[6.5rem] md:max-w-[300px]`;
const LOGO_WIDE = `${LOGO_BASE} max-h-[5.5rem] max-w-[min(100%,320px)] sm:max-h-24 sm:max-w-[360px] md:max-h-[6.5rem] md:max-w-[400px]`;
const LOGO_WATCH = `${LOGO_BASE} max-h-24 max-w-[min(100%,400px)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] sm:max-h-28 sm:max-w-[440px] md:max-h-[7rem] md:max-w-[480px]`;
const LOGO_INVEST = `${LOGO_BASE} max-h-16 max-w-[min(100%,260px)] sm:max-h-[4.25rem] sm:max-w-[280px] md:max-h-20 md:max-w-[320px]`;

export const NOT_FOUND_PRODUCT_ICONS: Record<NotFoundProductId, ReactNode> = {
  sesync: <ProductLogo src={LOGOS.sesync} className={LOGO_DEFAULT} />,
  stores: <ProductLogo src={LOGOS.audiovisualStore} className={LOGO_WIDE} />,
  watch: <ProductLogo src={LOGOS.watchOnSkoleomWhite} className={LOGO_WATCH} />,
  invest: <ProductLogo src={LOGOS.skoleomInvestBoutique} className={LOGO_INVEST} />,
  pulse: <ProductLogo src={LOGOS.skoleomPulse} className={LOGO_DEFAULT} />,
};
