import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface NotFoundConstructionPanelProps {
  /** Progression affichée (0–100). */
  progress?: number;
  className?: string;
}

/** Panneau « En construction » avec barre de progression lime (404 unifiée). */
export default function NotFoundConstructionPanel({
  progress = 52,
  className = '',
}: NotFoundConstructionPanelProps) {
  const { t } = useTranslation();
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className={`relative overflow-hidden rounded-3xl border border-white/[0.08] bg-black/50 p-5 backdrop-blur-md shadow-[0_12px_40px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.06)] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-univ-lime/[0.08] via-transparent to-transparent"
      />

      <div className="relative z-[1]">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-univ-lime">
          {t('public.notFound.building')}
        </p>

        <div
          className="mb-3 h-2.5 w-full overflow-hidden rounded-full bg-[#1c1c1c] ring-1 ring-white/[0.06]"
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={t('public.notFound.progress')}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${clamped}%` }}
            transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
            className="h-full rounded-full bg-univ-lime shadow-[0_0_14px_rgba(182,255,60,0.75),0_0_4px_rgba(182,255,60,0.9)]"
          />
        </div>

        <p className="text-sm leading-relaxed text-white/75">{t('public.notFound.buildingDesc')}</p>
      </div>
    </motion.div>
  );
}
