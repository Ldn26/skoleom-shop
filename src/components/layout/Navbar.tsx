import { useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { keySafe, tOr } from '../../i18n/keySafe';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';
import { FOOTER_MAIN_HUB_PATHS } from '../../constants/hubLinks';
import { STORE_LINKS } from '../../constants/storeLinks';
import { scrollAppToTop } from './ScrollToTop';
import DevelopmentStatusModal from '../common/DevelopmentStatusModal';

/**
 * Navbar : panneau méga-menu déroulant sous la barre principale (header).
 * Selon la variante, affiche titre, liens de navigation et statistiques.
 */

interface MegaMenuLink {
  label: string;
  to: string;
  external?: boolean;
  modal?: boolean;
  highlight?: boolean;
}

interface MegaMenuStat {
  num: string;
  label: string;
}

interface MegaMenuVariant {
  ariaLabel: string;
  kicker: string;
  title: string;
  ctaTo: string;
  ctaExternal?: boolean;
  ctaText: string;
  linksTitle: string;
  /** Liens construits dynamiquement pour permettre la réutilisation de STORE_LINKS. */
  links: () => readonly MegaMenuLink[];
  stats: readonly MegaMenuStat[];
}

export type MegaMenuVariantKey =
  | 'stores'
  | 'everyone'
  | 'pros'
  | 'news'
  | 'events'
  | 'group'
  | 'search'
  | 'essayage';

/** Contenu textuel de chaque variante du méga-menu (partagé desktop + mobile). */
export const MEGA_MENU_VARIANTS: Readonly<Record<MegaMenuVariantKey, MegaMenuVariant>> = {
  stores: {
    ariaLabel: 'Boutiques',
    kicker: 'Boutiques audiovisuelles',
    title: 'Découvrez toutes nos boutiques audiovisuelles',
    ctaTo: FOOTER_MAIN_HUB_PATHS.stores,
    ctaText:
      'Accédez à l’ensemble des boutiques et explorez les univers interactifs (sport, mode, entertainment…).',
    linksTitle: 'Explorez',
    links: () => STORE_LINKS,
    stats: [
      { num: '+100', label: 'pages Audiovisual Store par boutique' },
      { num: '+25K', label: 'contenus par mois provenant des plus grandes plateformes' },
      { num: '+625K', label: 'produits et services intégrés par mois dans les vidéos' },
      {
        num: '+50',
        label: 'applications web et boutiques audiovisuelles dans l’écosystème Skoleom',
      },
    ],
  },
  everyone: {
    ariaLabel: 'Pour tous',
    kicker: 'Pour tous',
    title: 'Découvrez des plateformes pour toutes vos envies ',
    ctaTo: FOOTER_MAIN_HUB_PATHS.everyone,
    ctaText: ' Accédez à une bibliothèque de solutions incroyable.',
    linksTitle: 'Aller vers',
    links: () => [
      { label: 'Skoleom Page', to: '/skoleom-page', highlight: true },
      { label: 'SeSync', to: '/sesync' },
      { label: "SkoleToon's", to: '/en-construction' },
      { label: 'The25x', to: '/en-construction' },
      { label: 'Skoleom Shop', to: '/en-construction' },
    ],
    stats: [
      { num: '1 tap', label: 'sans redirection' },
      { num: 'TEMPS RÉEL', label: 'capsules interactives' },
      { num: '+2 000', label: 'plateformes OTT' },
      { num: '+1 Md de sites web', label: 'sites web partenaires' },
    ],
  },
  pros: {
    ariaLabel: 'Pour les Pros',
    kicker: 'Pour les Pros',
    title: 'Rendez vos contenus instantanément achetables',
    ctaTo: FOOTER_MAIN_HUB_PATHS.pros,
    ctaText:
      'Téléchargez l’outil idéal pour rendre vos contenus interactifs et permettre l’achat directement dans vos contenus.',
    linksTitle: 'Solutions',
    links: () => [
      {
        label: 'Monetizer Studio',
        to: 'https://www.monetizerstudio.com/',
        external: true,
        highlight: true,
      },
      {
        label: 'Audiovisual Store Page',
        to: '/hub/pour-les-pros/audiovisual-store-page',
      },
      {
        label: 'Créer votre boutique audiovisuelle',
        to: '/hub/pour-les-pros/creer-boutique',
      },
      { label: 'Création de logiciel', to: '/404', modal: true },
      { label: 'Distribution OTT & Skoleom GPT', to: '/404' },
      { label: 'SMS, e-mails & SEO', to: '/404' },
      {
        label: 'Production TV, cinéma & digital',
        to: 'https://skoleomstudio.com/',
        external: true,
      },
      { label: 'Campagnes social & IA', to: '/404' },
      { label: 'Skoleom Ads', to: '/404' },
      { label: 'Gestion du patrimoine IA', to: '/404' },
      { label: 'Sponsoring & partenariats', to: '/404' },
      { label: 'Programme affilié', to: '/404' },
      { label: "Distribution The25x & SkoleToon's", to: '/404' },
      { label: 'Stratégie média', to: '/404' },
      { label: 'Événements professionnels', to: '/404' },
      { label: 'Immobilier & promotion', to: '/404' },
    ],
    stats: [
      { num: 'API', label: 'intégration rapide' },
      { num: 'SDK', label: 'expérience sur-mesure' },
      { num: 'ROI', label: 'suivi & performance' },
      { num: '44x', label: 'monétisation vs plateformes traditionnelles' },
    ],
  },
  news: {
    ariaLabel: 'Actualités',
    kicker: 'Actualités',
    title: 'Nouveautés, sorties et tendances',
    ctaTo: FOOTER_MAIN_HUB_PATHS.news,
    ctaText:
      'Suivez les dernières annonces Skoleom, les actus plateformes et les nouveautés du moment.',
    linksTitle: 'Découvrir',
    links: () => [
      { label: 'Dernières actus', to: FOOTER_MAIN_HUB_PATHS.news, highlight: true },
      { label: 'Boutiques', to: FOOTER_MAIN_HUB_PATHS.stores },
      { label: 'Événements', to: '/en-construction/events' },
    ],
    stats: [
      { num: 'LIVE', label: 'annonces' },
      { num: 'SORTIES', label: 'nouveaux contenus' },
      { num: 'TENDANCES', label: 'tendances' },
      { num: '24/7', label: 'flux actus & sorties plateformes' },
    ],
  },
  events: {
    ariaLabel: 'Événements',
    kicker: 'Événements',
    title: 'Rencontrez Skoleom en live',
    ctaTo: '/en-construction',
    ctaText:
      'Conférences, lancements, démonstrations et partenariats — suivez nos prochains rendez-vous.',
    linksTitle: 'Accès rapide',
    links: () => [
      { label: 'Agenda', to: '/en-construction', highlight: true },
      { label: 'Pour les Pros', to: FOOTER_MAIN_HUB_PATHS.pros },
      { label: 'Groupe', to: FOOTER_MAIN_HUB_PATHS.group },
    ],
    stats: [
      { num: 'IRL', label: 'démos' },
      { num: 'B2B', label: 'partenariats' },
      { num: 'Media', label: 'showcases' },
      { num: 'MONDE', label: 'tour & rendez-vous internationaux' },
    ],
  },
  group: {
    ariaLabel: 'Groupe',
    kicker: 'Groupe',
    title: 'Explorez l’écosystème Skoleom',
    ctaTo: FOOTER_MAIN_HUB_PATHS.group,
    ctaText:
      'Découvrez nos unités, nos technologies et les possibilités offertes par Skoleom Universe.',
    linksTitle: 'Explorer',
    links: () => [
      { label: 'L’écosystème', to: '/en-construction', highlight: true },
      { label: 'Nos sociétés', to: '/en-construction' },
      { label: 'Les collaborateurs & partenaires', to: '/en-construction' },
      { label: 'La relation investisseur', to: '/en-construction' },
    ],
    stats: [
      { num: 'UNIVERS', label: 'produits & unités' },
      { num: 'IA', label: 'reconnaissance' },
      { num: 'Commerce', label: 'in-content' },
      { num: '+10', label: 'sociétés satellites du groupe Skoleom' },
    ],
  },
  search: {
    ariaLabel: 'Recherche',
    kicker: 'Recherche',
    title: 'Que cherchez-vous ?',
    ctaTo: '/en-construction',
    ctaText: 'Recherchez des boutiques, produits, actualités ou événements dans tout Skoleom.',
    linksTitle: 'Recherches populaires',
    links: () => [
      { label: 'Rechercher une marque', to: '/search?mode=auto', highlight: true },
      { label: 'Rechercher un produit', to: '/search?mode=auto' },
      { label: 'Rechercher une vidéo', to: '/search?mode=video' },
      { label: 'Réserver une expérience', to: '/search?mode=booking' },
      { label: 'Explorer le catalogue produits', to: '/search?mode=shop' },
      { label: 'Skoleom Studio IA', to: '/search?mode=create' },
    ],
    stats: [
      { num: '+50', label: 'boutiques et univers disponibles' },
      { num: '3', label: 'sources de résultats en temps réel' },
      { num: '100%', label: 'produits achetables depuis la recherche' },
      { num: '200', label: 'pays couverts par Skoleom' },
    ],
  },
  essayage: {
    ariaLabel: 'Essayage',
    kicker: 'Essayage',
    title: 'Essayez nos produits',
    ctaTo: '/en-construction/essayage',
    ctaText: "Découvrez nos options d'essayage et trouvez le produit qui vous convient.",
    linksTitle: "Produits disponibles pour l'essayage",
    links: () => [
      { label: 'Produits en stock', to: '/en-construction/essayage' },
      { label: 'Produits sur commande', to: '/en-construction/essayage' },
    ],
    stats: [
      { num: '+100', label: "produits disponibles pour l'essayage" },
      { num: '24h', label: 'délai de livraison standard' },
      { num: '100%', label: 'satisfaction client' },
      { num: '5*', label: 'note moyenne des avis clients' },
    ],
  },
};

interface NavbarProps {
  open: boolean;
  topPx: number;
  variant: MegaMenuVariantKey | string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

/** Filet vertical décoratif du panneau stats (variable CSS gradient). */
const STATS_DIVIDER_BACKGROUND =
  'linear-gradient(180deg, var(--univ-gradient-display-a), var(--univ-gradient-display-b), var(--univ-gradient-display-c))';

export default function Navbar({ open, topPx, variant, onMouseEnter, onMouseLeave }: NavbarProps) {
  const { t } = useTranslation();
  const localizePath = useLocalizedPath();
  const [developmentModalOpen, setDevelopmentModalOpen] = useState(false);
  const variantKey =
    (variant as MegaMenuVariantKey) in MEGA_MENU_VARIANTS
      ? (variant as MegaMenuVariantKey)
      : 'stores';
  const config = MEGA_MENU_VARIANTS[variantKey];
  const links = config.links();
  const variantPrefix = `mega.navbar.variants.${variantKey}`;

  const megaChromeStyle = {
    top: topPx,
    ['--mega-links-max-height' as string]: `min(55vh, min(500px, calc(100dvh - ${topPx}px - 9rem)))`,
  } as CSSProperties;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed left-0 right-0 z-[49] box-border w-full min-w-0 bg-black shadow-[0_32px_80px_rgba(0,0,0,0.85)]"
            style={megaChromeStyle}
            role="region"
            aria-label={tOr(t, `${variantPrefix}.ariaLabel`, config.ariaLabel)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="mx-auto grid w-full max-w-[1600px] min-h-0 max-h-[min(65vh,calc(100vh-7rem))] supports-[height:100dvh]:max-h-[min(65vh,calc(100dvh-7rem))] gap-8 overflow-hidden px-6 py-8 lg:grid-cols-12 lg:grid-rows-1 lg:gap-x-12 lg:gap-y-8 lg:px-10 lg:py-10 xl:gap-x-14 xl:py-12">
              {/* Colonne gauche : kicker + grand titre + CTA texte */}
              <div className="min-h-0 lg:col-span-5 lg:overflow-y-auto lg:overscroll-contain lg:pr-2">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  {tOr(t, `${variantPrefix}.kicker`, config.kicker)}
                </p>
                <h2 className="mb-7 font-display text-[clamp(3.35rem,5.2vw,6.35rem)] uppercase leading-[0.92]">
                  {config.ctaExternal ? (
                    <a
                      href={config.ctaTo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={scrollAppToTop}
                      className="text-gradient-vertical transition-opacity hover:opacity-80"
                    >
                      {tOr(t, `${variantPrefix}.title`, config.title)}
                    </a>
                  ) : (
                    <Link
                      to={localizePath(config.ctaTo)}
                      onClick={scrollAppToTop}
                      className="text-gradient-vertical transition-opacity hover:opacity-80"
                    >
                      {tOr(t, `${variantPrefix}.title`, config.title)}
                    </Link>
                  )}
                </h2>
                {config.ctaExternal ? (
                  <a
                    href={config.ctaTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={scrollAppToTop}
                    className="group inline-block max-w-xl text-[13px] font-medium leading-relaxed text-univ-blue-light underline-offset-4 hover:underline md:text-sm"
                  >
                    <span>
                      {tOr(t, `${variantPrefix}.ctaText`, config.ctaText)}
                      <ArrowRight
                        size={16}
                        className="inline-block align-middle -mt-px ml-1.5 shrink-0 transition translate-y-[1px] group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </a>
                ) : (
                  <Link
                    to={localizePath(config.ctaTo)}
                    onClick={scrollAppToTop}
                    className="group inline-block max-w-xl text-[13px] font-medium leading-relaxed text-univ-blue-light underline-offset-4 hover:underline md:text-sm"
                  >
                    <span>
                      {tOr(t, `${variantPrefix}.ctaText`, config.ctaText)}
                      <ArrowRight
                        size={16}
                        className="inline-block align-middle -mt-px ml-1.5 shrink-0 transition translate-y-[1px] group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                )}
              </div>

              {/* Colonne centre : liste de raccourcis */}
              <div className="flex min-h-0 flex-col border-l border-transparent lg:col-span-3 lg:border-white/10 lg:pl-8">
                <span className="mb-3 block shrink-0 text-xs font-bold uppercase tracking-widest text-univ-lime">
                  {tOr(t, `${variantPrefix}.linksTitle`, config.linksTitle)}
                </span>
                <nav className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overscroll-contain pr-2 max-h-[min(52vh,420px)] lg:max-h-[var(--mega-links-max-height)] lg:gap-4">
                  {links.map(({ label, to, external, modal }) =>
                    modal ? (
                      <button
                        key={`${to}-${label}`}
                        type="button"
                        onClick={() => setDevelopmentModalOpen(true)}
                        className="block w-full text-left text-2xl font-semibold text-white transition-colors hover:text-univ-lime md:text-[1.75rem]"
                      >
                        {tOr(t, `mega.navbar.links.${keySafe(label)}`, label)}
                      </button>
                    ) : external ? (
                      <a
                        key={`${to}-${label}`}
                        href={to}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={scrollAppToTop}
                        className="block text-left text-2xl font-semibold text-white transition-colors hover:text-univ-lime md:text-[1.75rem]"
                      >
                        {tOr(t, `mega.navbar.links.${keySafe(label)}`, label)}
                      </a>
                    ) : (
                      <Link
                        key={`${to}-${label}`}
                        to={localizePath(to)}
                        onClick={scrollAppToTop}
                        className="block text-left text-2xl font-semibold text-white transition-colors hover:text-univ-lime md:text-[1.75rem]"
                      >
                        {tOr(t, `mega.navbar.links.${keySafe(label)}`, label)}
                      </Link>
                    ),
                  )}
                </nav>
              </div>

              {/* Colonne droite : indicateurs clés */}
              <div className="relative flex min-h-0 max-h-[min(52vh,520px)] flex-col gap-8 overflow-y-auto overscroll-contain pr-2 lg:col-span-4 lg:max-h-[var(--mega-links-max-height)] lg:pl-4 lg:pr-0">
                <div
                  className="absolute right-0 top-2 hidden h-[calc(100%-1rem)] w-px lg:block"
                  style={{ background: STATS_DIVIDER_BACKGROUND }}
                  aria-hidden
                />
                {config.stats.map((stat) => (
                  <div key={stat.num}>
                    <div className="font-display text-6xl text-white md:text-7xl lg:text-8xl">
                      {stat.num}
                    </div>
                    <p className="mt-2 max-w-xs text-sm text-white/55 md:text-[15px]">
                      {tOr(t, `mega.navbar.stats.${keySafe(stat.label)}`, stat.label)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
        titleId="navbar-development-modal-title"
        onClose={() => setDevelopmentModalOpen(false)}
      />
    </>
  );
}
