import { useMemo, useState, type CSSProperties } from 'react';
import { LOGOS } from '../../constants/logos';
import type { PosterCardItem } from '../common/PosterCarousel';


const MAGAZINE_LOGO = LOGOS.magazineBlack;

const NEWSLETTER_COPY = {
  kicker: 'Newsletter',
  title: 'Skoleom Group',
  body: "Retrouvez chaque semaine les dernières annonces, avancées technologiques et projets stratégiques du groupe. Une vision globale de l'écosystème Skoleom en temps réel. L'innovation et la croissance au cœur de chaque publication.",
} as const;

const LIFT_UP_PX = 72;
/** Écart créé sous la carte survolée pour ne pas recouvrir les éléments en dessous. */
const CLEARANCE_BELOW_POSTER_PX = 108;
const CLEARANCE_BELOW_NEWSLETTER_PX = 88;
/** 1ʳᵉ carte : repousse le reste de la pile vers le bas. */
const PUSH_DOWN_FIRST_HOVER_PX = 80;
interface AssistanceNewsSidebarProps {
  className?: string;
}

function clearanceBelowHovered( hoveredIndex: number): number {
  if ( hoveredIndex === 0) return CLEARANCE_BELOW_NEWSLETTER_PX;
  return CLEARANCE_BELOW_POSTER_PX;
}

/** z-index de la carte survolée : doit dépasser tout `baseZ` quel que soit le
 * nombre de cartes (sinon les cartes suivantes, à baseZ plus élevé, passent
 * par-dessus la carte active et la « coupent »). */
const ACTIVE_Z = 1000;

function getStackItemMotion(
  stackIndex: number,
  hoveredIndex: number | null,
): Pick<CSSProperties, 'transform' | 'zIndex'> {
  const baseZ = 10 + stackIndex * 10;

  if (hoveredIndex === null) {
    return { transform: 'translateY(0)', zIndex: baseZ };
  }

  if (hoveredIndex === 0) {
    if (stackIndex === 0) {
      return { transform: 'translateY(0)', zIndex: ACTIVE_Z };
    }
    return { transform: `translateY(${PUSH_DOWN_FIRST_HOVER_PX}px)`, zIndex: baseZ };
  }

  if (stackIndex < hoveredIndex) {
    return { transform: `translateY(-${LIFT_UP_PX}px)`, zIndex: baseZ };
  }

  if (stackIndex === hoveredIndex) {
    return { transform: `translateY(-${LIFT_UP_PX}px)`, zIndex: ACTIVE_Z };
  }

  return {
    transform: `translateY(${clearanceBelowHovered( hoveredIndex)}px)`,
    zIndex: baseZ,
  };
}

interface StackedPosterCardProps {
  item: PosterCardItem;
  isActive: boolean;
}

function StackedPosterCard({ item, isActive }: StackedPosterCardProps) {
  const href = item.href ?? '#';
  const external = Boolean(item.href);

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      aria-label={`${item.summary} — ${item.label}`}
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)]">
        <img
          src={item.poster}
          alt=""
          className="absolute inset-0 size-full object-cover object-center"
        />
        {item.icon ? (
          <img
            src={item.icon}
            alt={item.label}
            className="absolute left-4 top-4 z-20 h-auto max-h-11 w-auto max-w-[120px] object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          />
        ) : null}

        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end overflow-hidden">
          <div
            className={`absolute inset-x-0 bottom-0 top-[42%] z-0 rounded-b-2xl transition-opacity duration-500 ease-out motion-reduce:transition-none ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 motion-reduce:opacity-100'}`}
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.88) 28%, rgba(0,0,0,0.62) 48%, rgba(0,0,0,0.28) 70%, transparent 100%)',
            }}
            aria-hidden
          />
          <div className="relative z-10 max-h-[58%] overflow-hidden px-4 pb-4 pt-16">
            <div
              className={`flex flex-col gap-2 transition-transform duration-500 ease-out motion-reduce:translate-y-0 ${isActive ? '-translate-y-2' : 'translate-y-6 group-hover:-translate-y-2'}`}
            >
              <p className="font-sans text-sm font-bold uppercase leading-[1.05] tracking-[0.18em] text-white">
                {item.summary}
              </p>
              <p
                className={`overflow-hidden font-sans text-[13px] leading-relaxed text-white/90 transition-[max-height,opacity] duration-500 motion-reduce:max-h-none motion-reduce:opacity-100 ${isActive ? 'max-h-[7.5rem] opacity-100' : 'max-h-0 opacity-0 group-hover:max-h-[7.5rem] group-hover:opacity-100'}`}
              >
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

/** Colonne Nouveautés — tous les films accueil + newsletter, étape 1 Assistance. */
export default function AssistanceNewsSidebar({ className = '' }: AssistanceNewsSidebarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <aside
      className={`flex min-h-0 flex-col ${className}`.trim()}
      aria-label="Nouveautés films et séries"
    >
      <div className="mb-3 flex h-10 shrink-0 items-center justify-center gap-2.5 rounded-full bg-univ-lime px-4 shadow-[0_8px_28px_-8px_rgba(168,255,53,0.55)]">
        <img
          src={MAGAZINE_LOGO}
          alt=""
          className="h-10 w-auto max-w-[110px] object-contain object-left sm:h-11"
        />
        <span className="font-sans text-sm font-bold tracking-wide text-black">Nouveautés</span>
      </div>

 
    </aside>
  );
}
