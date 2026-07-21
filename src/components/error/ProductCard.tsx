import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import type { NotFoundProductTone } from '../../data/notFoundProducts';

interface ProductCardProps {
  product: {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly href: string;
    readonly icon: ReactNode;
    readonly tone: NotFoundProductTone;
  };
  index: number;
  /** Carte large pour la section 404. */
  featured?: boolean;
}

const TONE_STYLES: Record<
  NotFoundProductTone,
  {
    glow: string;
    borderHover: string;
    gradient: string;
  }
> = {
  purple: {
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.65)]',
    borderHover: 'group-hover:border-purple-400/40',
    gradient: 'from-purple-500/10 via-transparent to-transparent',
  },
  green: {
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(52,211,153,0.6)]',
    borderHover: 'group-hover:border-emerald-400/40',
    gradient: 'from-emerald-500/10 via-transparent to-transparent',
  },
  red: {
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(248,113,113,0.6)]',
    borderHover: 'group-hover:border-red-400/40',
    gradient: 'from-red-500/10 via-transparent to-transparent',
  },
  blue: {
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(56,189,248,0.6)]',
    borderHover: 'group-hover:border-sky-400/40',
    gradient: 'from-sky-500/10 via-transparent to-transparent',
  },
  lime: {
    glow: 'group-hover:shadow-[0_0_44px_-6px_rgba(182,255,60,0.65)]',
    borderHover: 'group-hover:border-univ-lime/50',
    gradient: 'from-univ-lime/12 via-transparent to-transparent',
  },
};

export default function ProductCard({ product, index, featured = false }: ProductCardProps) {
  const { t } = useTranslation();
  const tone = TONE_STYLES[product.tone];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        to={product.href}
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-white/[0.07] to-white/[0.02] transition-all duration-300 hover:-translate-y-1.5 hover:from-white/[0.09] hover:to-white/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${tone.glow} ${tone.borderHover} ${featured ? 'min-h-[320px] p-7 text-center md:min-h-[340px] md:p-8' : 'min-h-[148px] p-5'}`}
        aria-label={t('public.notFound.productCardAria', { title: product.title })}
      >
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone.gradient}`}
        />

        <div
          className={`relative mb-6 flex shrink-0 transition-transform duration-300 group-hover:scale-[1.03] ${featured ? 'w-full min-h-[9rem] items-center justify-center sm:min-h-[10rem] md:min-h-[11rem]' : 'items-center justify-start'}`}
        >
          <div className={featured ? 'flex w-full items-center justify-center px-1' : undefined}>
            {product.icon}
          </div>
        </div>

        <div className={`relative flex flex-1 flex-col gap-2 ${featured ? 'items-center' : ''}`}>
          <h3
            className={`font-bold leading-tight text-white ${featured ? 'text-lg md:text-xl' : 'text-sm'}`}
          >
            {product.title}
          </h3>
          <p
            className={`leading-relaxed text-white/60 ${featured ? 'text-sm md:text-base' : 'text-xs'}`}
          >
            {product.description}
          </p>
        </div>

        <div
          className={`relative mt-6 flex items-center ${featured ? 'justify-center gap-4 pt-5' : 'justify-between pt-3'}`}
        >
          <span
            className={`font-semibold uppercase tracking-wider text-white/45 transition-colors group-hover:text-univ-lime ${featured ? 'text-xs md:text-sm' : 'text-[11px]'}`}
          >
            {t('public.notFound.explore')}
          </span>
          <span
            className={`flex items-center justify-center rounded-full bg-white/[0.06] transition-all duration-300 group-hover:bg-univ-lime/20 ${featured ? 'h-10 w-10' : 'h-8 w-8'}`}
          >
            <ArrowRight
              className={`text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-univ-lime ${featured ? 'h-5 w-5' : 'h-4 w-4'}`}
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
