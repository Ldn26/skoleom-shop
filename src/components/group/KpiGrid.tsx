import { memo } from 'react';
import { motion } from 'framer-motion';

/**
 * Grille d'indicateurs clés (KPI) utilisée sur les pages écosystème / groupe.
 * Anime l'apparition de chaque carte au scroll.
 */

interface Kpi {
  value: string;
  label: string;
}

type KpiCardProps = Kpi;

/** Carte unitaire affichant un chiffre marquant et son libellé. */
function KpiCardBase({ value, label }: KpiCardProps) {
  return (
    <div className="glass h-full min-h-[12.5rem] md:min-h-[13.25rem] rounded-2xl p-6 md:p-7 flex flex-col">
      <div className="font-sans text-[clamp(1.85rem,3.2vw,2.6rem)] font-extrabold text-gradient leading-[1.08] whitespace-nowrap pb-1">
        {value}
      </div>
      <p className="mt-3 min-h-[4.8em] font-sans text-[clamp(0.75rem,1.15vw,0.95rem)] text-white/65 leading-[1.2] break-words">
        {label}
      </p>
    </div>
  );
}

export const KpiCard = memo(KpiCardBase);

interface KpiGridProps {
  items: Kpi[];
}

/** Grille responsive (2 → 3 → 5 colonnes) des KPI animés. */
export default function KpiGrid({ items }: KpiGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
      {items.map((kpi, index) => (
        <motion.div
          key={`${kpi.value}-${kpi.label}`}
          className="h-full"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.04 }}
        >
          <KpiCard value={kpi.value} label={kpi.label} />
        </motion.div>
      ))}
    </div>
  );
}
