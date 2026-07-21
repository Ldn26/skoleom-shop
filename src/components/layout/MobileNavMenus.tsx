import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { columnI18nKey, keySafe, tOr } from '../../i18n/keySafe';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';
import { scrollAppToTop } from './ScrollToTop';
import DevelopmentStatusModal from '../common/DevelopmentStatusModal';
import { MEGA_MENU_VARIANTS, type MegaMenuVariantKey } from './Navbar';
import { UNIVERSE_MENU_COLUMNS } from './UniverseMegaMenu';

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

interface MobileAccordionItemProps {
  id: string;
  label: string;
  expanded: boolean;
  onToggle: () => void;
  highlight?: boolean;
  children: ReactNode;
}

export function MobileAccordionItem({
  id,
  label,
  expanded,
  onToggle,
  highlight,
  children,
}: MobileAccordionItemProps) {
  return (
    <div>
      <button
        type="button"
        id={`mobile-nav-${id}`}
        aria-expanded={expanded}
        aria-controls={`mobile-nav-panel-${id}`}
        onClick={onToggle}
        className={cn(
          'flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm font-semibold transition duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime',
          highlight ? 'text-univ-lime' : 'text-[#B5B5B5] hover:text-white',
        )}
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          aria-hidden
          className={cn('shrink-0 text-white/40 transition duration-300', expanded && 'rotate-180')}
        />
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`mobile-nav-panel-${id}`}
            role="region"
            aria-labelledby={`mobile-nav-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="ml-3 border-l border-white/10 py-2 pl-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface MobileNavLinkProps {
  to: string;
  external?: boolean;
  onNavigate: () => void;
  className?: string;
  children: ReactNode;
}

function MobileNavLink({ to, external, onNavigate, className, children }: MobileNavLinkProps) {
  const localizePath = useLocalizedPath();
  const baseClass =
    className ??
    'block rounded-xl px-2 py-2 text-[13px] font-medium leading-snug text-white/75 transition hover:bg-white/10 hover:text-univ-lime';

  const handleClick = () => {
    scrollAppToTop();
    onNavigate();
  };

  if (external || /^https?:\/\//.test(to)) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={baseClass}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={localizePath(to)} onClick={handleClick} className={baseClass}>
      {children}
    </Link>
  );
}

interface MobileMegaMenuPanelProps {
  variant: MegaMenuVariantKey;
  onNavigate: () => void;
}

export function MobileMegaMenuPanel({ variant, onNavigate }: MobileMegaMenuPanelProps) {
  const { t } = useTranslation();
  const localizePath = useLocalizedPath();
  const [developmentModalOpen, setDevelopmentModalOpen] = useState(false);
  const config = MEGA_MENU_VARIANTS[variant];
  const links = config.links();
  const variantPrefix = `mega.navbar.variants.${variant}`;

  return (
    <>
      <div className="space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
          {tOr(t, `${variantPrefix}.kicker`, config.kicker)}
        </p>
        <p className="text-sm font-semibold leading-snug text-white/90">
          {tOr(t, `${variantPrefix}.title`, config.title)}
        </p>

        {config.ctaExternal ? (
          <a
            href={config.ctaTo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              scrollAppToTop();
              onNavigate();
            }}
            className="group inline-flex items-start gap-1 text-xs font-medium leading-relaxed text-univ-blue-light underline-offset-4 hover:underline"
          >
            {tOr(t, `${variantPrefix}.ctaText`, config.ctaText)}
            <ArrowRight size={14} className="mt-0.5 shrink-0" aria-hidden />
          </a>
        ) : (
          <Link
            to={localizePath(config.ctaTo)}
            onClick={() => {
              scrollAppToTop();
              onNavigate();
            }}
            className="group inline-flex items-start gap-1 text-xs font-medium leading-relaxed text-univ-blue-light underline-offset-4 hover:underline"
          >
            {tOr(t, `${variantPrefix}.ctaText`, config.ctaText)}
            <ArrowRight size={14} className="mt-0.5 shrink-0" aria-hidden />
          </Link>
        )}

        <p className="pt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-univ-lime/90">
          {tOr(t, `${variantPrefix}.linksTitle`, config.linksTitle)}
        </p>
        <nav className="flex flex-col gap-0.5">
          {links.map(({ label, to, external, modal }) =>
            modal ? (
              <button
                key={`${to}-${label}`}
                type="button"
                onClick={() => setDevelopmentModalOpen(true)}
                className="block w-full rounded-xl px-2 py-2 text-left text-[13px] font-medium leading-snug text-white/75 transition hover:bg-white/10 hover:text-univ-lime"
              >
                {tOr(t, `mega.navbar.links.${keySafe(label)}`, label)}
              </button>
            ) : (
              <MobileNavLink
                key={`${to}-${label}`}
                to={to}
                external={external}
                onNavigate={onNavigate}
              >
                {tOr(t, `mega.navbar.links.${keySafe(label)}`, label)}
              </MobileNavLink>
            ),
          )}
        </nav>

        <div className="grid grid-cols-2 gap-3 pt-3">
          {config.stats.map((stat) => (
            <div key={stat.num}>
              <div className="font-display text-2xl text-white">{stat.num}</div>
              <p className="mt-0.5 text-[11px] leading-snug text-white/50">
                {tOr(t, `mega.navbar.stats.${keySafe(stat.label)}`, stat.label)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <DevelopmentStatusModal
        open={developmentModalOpen}
        kicker={tOr(t, 'mega.navbar.developmentModal.kicker', 'Pour les pros')}
        title={tOr(t, 'mega.navbar.developmentModal.title', 'Solution en cours de développement')}
        body={tOr(
          t,
          'mega.navbar.developmentModal.body',
          'Cette solution est encore en cours de développement. Elle sera disponible prochainement dans l’écosystème Skoleom.',
        )}
        closeLabel={tOr(t, 'mega.navbar.developmentModal.close', 'Fermer')}
        titleId="mobile-navbar-development-modal-title"
        onClose={() => setDevelopmentModalOpen(false)}
      />
    </>
  );
}

interface MobileUniversePanelProps {
  onNavigate: () => void;
}

export function MobileUniversePanel({ onNavigate }: MobileUniversePanelProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      {UNIVERSE_MENU_COLUMNS.map((column) => (
        <div key={column.columnKey}>
          <h4 className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
            {tOr(t, `mega.universe.columns.${columnI18nKey(column.columnKey)}.title`, column.title)}
          </h4>
          <ul className="flex flex-col gap-0.5">
            {column.links.map((item) => {
              const label = tOr(t, `mega.universe.links.${keySafe(item.label)}`, item.label);
              const isExternal = item.external || /^https?:\/\//.test(item.to);

              return (
                <li key={`${column.columnKey}-${item.label}`}>
                  <MobileNavLink to={item.to} external={isExternal} onNavigate={onNavigate}>
                    {label}
                  </MobileNavLink>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
