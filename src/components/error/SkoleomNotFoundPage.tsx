import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import NotFoundConstructionPanel from './NotFoundConstructionPanel';
import NotFoundDiscoverSection from './NotFoundDiscoverSection';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';

const SKOLEOM_LOGO_3D = '/logo/logo_skoleom_3D.webp';

/**
 * Page 404 unifiée Skoleom — utilisée pour toutes les routes introuvables (/not-found, *, /404).
 */
export default function SkoleomNotFoundPage() {
  const { t } = useTranslation();
  const localizePath = useLocalizedPath();

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
      aria-labelledby="error-title"
    >
      <section className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pb-20 pt-32 lg:flex-row lg:items-center lg:gap-10 lg:pb-32 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-univ-lime">
            {t('public.notFound.unavailable')}
          </p>

          <h1
            id="error-title"
            className="mb-6 text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="block text-white">{t('public.notFound.heroLine1')}</span>
            <span className="block text-white">{t('public.notFound.heroLine2')}</span>
            <span className="block text-univ-lime">{t('public.notFound.heroLine3')}</span>
          </h1>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {t('public.notFound.subtitle')}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start">
            <Link
              to={localizePath('/')}
              className="group inline-flex items-center gap-3 rounded-full bg-univ-lime px-6 py-3 text-sm font-bold text-black shadow-[0_0_24px_rgba(168,255,53,0.4)] transition-all duration-300 hover:scale-105 hover:bg-univ-lime/90 hover:shadow-[0_0_36px_rgba(168,255,53,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime focus-visible:ring-offset-2 focus-visible:ring-offset-black md:text-base"
              aria-label={t('public.notFound.cta')}
            >
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
              {t('public.notFound.cta')}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative flex flex-1 items-center justify-center"
        >
          <div className="relative aspect-square w-full max-w-[500px]">
            <img
              src={SKOLEOM_LOGO_3D}
              alt="Logo Skoleom 3D"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[42%] bg-gradient-to-l from-black/75 via-black/30 to-transparent"
            />

            <div className="absolute inset-x-4 bottom-0 z-[2] sm:inset-x-6">
              <NotFoundConstructionPanel className="w-full max-w-[320px] mx-auto" />
            </div>
          </div>
        </motion.div>
      </section>

      <NotFoundDiscoverSection />

      <footer className="relative py-8 text-center">
        <p className="text-xs text-white/40 md:text-sm">
          Copyright © 2026 Skoleom. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
