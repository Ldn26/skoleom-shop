import { useCallback, useRef, type CSSProperties, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { columnI18nKey, keySafe, tOr } from '../../i18n/keySafe';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';
import {
  type LucideIcon,
  BarChart3,
  Bell,
  BookMarked,
  BookOpen,
  Bot,
  Brain,
  Building2,
  Calendar,
  ClipboardList,
  Cloud,
  Coins,
  Cpu,
  CreditCard,
  Dumbbell,
  FileScan,
  FileSpreadsheet,
  FileText,
  Film,
  Gamepad2,
  GraduationCap,
  HardDrive,
  History,
  Heart,
  Hotel,
  KeyRound,
  Landmark,
  LayoutGrid,
  Layers,
  Library,
  Mail,
  Megaphone,
  MessageSquare,
  Mic,
  Music,
  Newspaper,
  Package,
  Palette,
  Plane,
  Presentation,
  QrCode,
  Radio,
  Receipt,
  Server,
  Settings2,
  Share2,
  Shield,
  Shirt,
  ShoppingCart,
  Sparkles,
  Store,
  TrendingUp,
  Tv,
  Umbrella,
  User,
  UserPlus,
  Users,
  Video,
  Wallet2,
  Wrench,
  X,
} from 'lucide-react';

/**
 * Panneau « Skoleom Universe » : grille d’outils par univers (maquette produit).
 * Au clic depuis le header ; liens vers des routes existantes ou hubs (404 sinon gérée par l’app).
 */

const ICON_MAP = {
  user: User,
  wallet2: Wallet2,
  receipt: Receipt,
  settings2: Settings2,
  shield: Shield,
  history: History,
  heart: Heart,
  layers: Layers,
  palette: Palette,
  cpu: Cpu,
  sparkles: Sparkles,
  brain: Brain,
  bot: Bot,
  megaphone: Megaphone,
  messageSquare: MessageSquare,
  mail: Mail,
  video: Video,
  tv: Tv,
  share2: Share2,
  radio: Radio,
  store: Store,
  shirt: Shirt,
  dumbbell: Dumbbell,
  music: Music,
  film: Film,
  gamepad2: Gamepad2,
  laptop: Cpu,
  home: Layers,
  shoppingCart: ShoppingCart,
  users2: Users,
  package: Package,
  barChart3: BarChart3,
  building2: Building2,
  userPlus: UserPlus,
  fileText: FileText,
  creditCard: CreditCard,
  hardDrive: HardDrive,
  fileSpreadsheet: FileSpreadsheet,
  presentation: Presentation,
  clipboardList: ClipboardList,
  calendar: Calendar,
  bookMarked: BookMarked,
  trendingUp: TrendingUp,
  landmark: Landmark,
  coins: Coins,
  umbrella: Umbrella,
  cloud: Cloud,
  gradCap: GraduationCap,
  bookOpen: BookOpen,
  library: Library,
  kids: Sparkles,
  plane: Plane,
  hotel: Hotel,
  mic: Mic,
  newspaper: Newspaper,
  server: Server,
  fileScan: FileScan,
  qrCode: QrCode,
  keyRound: KeyRound,
  wrench: Wrench,
  bell: Bell,
  users: Users,
} satisfies Record<string, LucideIcon>;

type IconKey = keyof typeof ICON_MAP;

interface UniverseLinkItem {
  label: string;
  to: string;
  iconKey: IconKey;
  external?: boolean;
}

const MONETIZER_STUDIO_URL = 'https://www.monetizerstudio.com/';

interface UniverseColumn {
  columnKey: string;
  title: string;
  /** Dégradé des pastilles d’icônes (colonne). */
  tileClass: string;
  links: readonly UniverseLinkItem[];
}

/**
 * Grille maquette : 12 catégories = 2 rangées × 6 colonnes.
 * Libellés alignés sur la capture produit.
 */
export const UNIVERSE_MENU_COLUMNS: readonly UniverseColumn[] = [
  {
    columnKey: 'mon.univers',
    title: 'MON UNIVERS',
    tileClass: 'from-amber-300/95 to-amber-600/90',
    links: [
      { label: 'Votre compte', to: '/dashboard', iconKey: 'user' },
      { label: 'Skoleom Wallet', to: '/dashboard', iconKey: 'wallet2' },
      { label: 'Abonnements', to: '/ecosystem', iconKey: 'receipt' },
      { label: 'Préférences', to: '/dashboard', iconKey: 'settings2' },
      { label: 'Sécurité', to: '/dashboard', iconKey: 'shield' },
      { label: 'Historique', to: '/dashboard', iconKey: 'history' },
      { label: 'Favoris', to: '/favorites', iconKey: 'heart' },
      { label: 'Collections', to: '/dashboard', iconKey: 'layers' },
    ],
  },
  {
    columnKey: 'creation.ia',
    title: 'CRÉATION & IA',
    tileClass: 'from-violet-400/95 to-fuchsia-600/90',
    links: [
      { label: 'Monetizer Studio', to: MONETIZER_STUDIO_URL, iconKey: 'palette' },
      { label: 'SeSync', to: '/sesync', iconKey: 'sparkles' },
      { label: 'Skoleom Pulse', to: '/technology', iconKey: 'cpu' },
      { label: 'Studio IA', to: '/technology', iconKey: 'brain' },
      { label: 'Skoleom GPT', to: '/how-it-works', iconKey: 'bot' },
      { label: 'Studio image IA', to: '/technology', iconKey: 'palette' },
      { label: 'Studio vidéo IA', to: '/technology', iconKey: 'video' },
      { label: 'Studio vocal IA', to: '/technology', iconKey: 'mic' },
      { label: 'Studio musique IA', to: '/technology', iconKey: 'music' },
    ],
  },
  {
    columnKey: 'communication.reseaux',
    title: 'COMMUNICATION & RÉSEAUX',
    tileClass: 'from-emerald-400/95 to-teal-600/90',
    links: [
      { label: 'Skoleom Chat', to: '/ecosystem', iconKey: 'messageSquare' },
      { label: 'Skoleom Mail', to: '/contact', iconKey: 'mail' },
      { label: 'Skoleom Meet', to: '/technology', iconKey: 'video' },
      { label: 'Skoleom Spaces', to: '/ecosystem', iconKey: 'users' },
      { label: 'Skoleom Connect', to: '/ecosystem', iconKey: 'share2' },
      { label: 'Skoleom Live', to: '/technology', iconKey: 'radio' },
      { label: 'Skoleom Broadcast', to: '/technology', iconKey: 'tv' },
      { label: 'Skoleom Social Hub', to: '/en-construction', iconKey: 'megaphone' },
    ],
  },
  {
    columnKey: 'boutiques.audiovisuelles',
    title: 'BOUTIQUES AUDIOVISUELLES',
    tileClass: 'from-orange-400/95 to-red-600/85',
    links: [
      { label: 'Toutes les boutiques', to: '/stores', iconKey: 'store' },
      { label: 'Mode & Style', to: '/stores', iconKey: 'shirt' },
      { label: 'Sport', to: '/stores', iconKey: 'dumbbell' },
      { label: 'Musique', to: '/stores', iconKey: 'music' },
      { label: 'Films & Séries', to: '/stores', iconKey: 'film' },
      { label: 'Jeux Vidéo', to: '/stores', iconKey: 'gamepad2' },
      { label: 'Technologie', to: '/stores', iconKey: 'laptop' },
      { label: 'Maison & Living', to: '/stores', iconKey: 'home' },
      { label: 'Voir toutes les boutiques', to: '/stores', iconKey: 'store' },
    ],
  },
  {
    columnKey: 'business.monetisation',
    title: 'BUSINESS & MONÉTISATION',
    tileClass: 'from-sky-400/95 to-blue-700/90',
    links: [
      {
        label: 'Monétiser vos contenus',
        to: MONETIZER_STUDIO_URL,
        iconKey: 'wallet2',
      },
      { label: 'Skoleom Shop', to: '/stores', iconKey: 'shoppingCart' },
      { label: 'Skoleom Ads', to: '/business', iconKey: 'megaphone' },
      { label: 'Skoleom Affiliate', to: '/business', iconKey: 'userPlus' },
      { label: 'Skoleom Dropship', to: '/business', iconKey: 'package' },
      { label: 'Skoleom Analytics', to: '/business', iconKey: 'barChart3' },
      { label: 'Skoleom CRM', to: '/business', iconKey: 'building2' },
      { label: 'Skoleom Leads', to: '/business', iconKey: 'users2' },
      { label: 'Skoleom Invoicing', to: '/business', iconKey: 'fileText' },
      { label: 'Skoleom Subscriptions', to: '/business', iconKey: 'creditCard' },
    ],
  },
  {
    columnKey: 'productivite',
    title: 'PRODUCTIVITÉ',
    tileClass: 'from-cyan-400/95 to-indigo-600/90',
    links: [
      { label: 'Skoleom Drive', to: '/technology', iconKey: 'hardDrive' },
      { label: 'Skoleom Docs', to: '/technology', iconKey: 'fileText' },
      { label: 'Skoleom Sheets', to: '/technology', iconKey: 'fileSpreadsheet' },
      { label: 'Skoleom Slides', to: '/technology', iconKey: 'presentation' },
      { label: 'Skoleom Notes', to: '/technology', iconKey: 'bookMarked' },
      { label: 'Skoleom Tasks', to: '/technology', iconKey: 'clipboardList' },
      { label: 'Skoleom Calendar', to: '/technology', iconKey: 'calendar' },
      { label: 'Skoleom Keep', to: '/technology', iconKey: 'sparkles' },
    ],
  },
  {
    columnKey: 'finance.investissement',
    title: 'FINANCE & INVESTISSEMENT',
    tileClass: 'from-lime-300/90 to-univ-lime/95',
    links: [
      { label: 'Skoleom Invest', to: '/business', iconKey: 'trendingUp' },
      { label: 'Skoleom Banking', to: '/business', iconKey: 'landmark' },
      { label: 'Skoleom Pay', to: '/business', iconKey: 'wallet2' },
      { label: 'Skoleom Cards', to: '/business', iconKey: 'creditCard' },
      { label: 'Skoleom Crypto', to: '/business', iconKey: 'coins' },
      { label: 'Assurance Skoleom', to: '/business', iconKey: 'umbrella' },
      { label: 'Skoleom Crowdfunding', to: '/business', iconKey: 'megaphone' },
    ],
  },
  {
    columnKey: 'formation.education',
    title: 'FORMATION & ÉDUCATION',
    tileClass: 'from-pink-400/95 to-rose-700/85',
    links: [
      { label: 'Skoleom Learn', to: '/how-it-works', iconKey: 'gradCap' },
      { label: 'Skoleom Academy', to: '/how-it-works', iconKey: 'bookOpen' },
      { label: 'Skoleom Courses', to: '/how-it-works', iconKey: 'library' },
      { label: 'Skoleom Certify', to: '/how-it-works', iconKey: 'shield' },
      { label: 'Skoleom Library', to: '/how-it-works', iconKey: 'bookMarked' },
      { label: 'Skoleom Tutor', to: '/contact', iconKey: 'users' },
      { label: 'Skoleom Kids', to: '/how-it-works', iconKey: 'kids' },
    ],
  },
  {
    columnKey: 'voyage.experiences',
    title: 'VOYAGE & EXPÉRIENCES',
    tileClass: 'from-amber-200/95 to-orange-600/90',
    links: [
      { label: 'Skoleom Travel', to: '/ecosystem', iconKey: 'plane' },
      { label: 'Skoleom Hotels', to: '/ecosystem', iconKey: 'hotel' },
      { label: 'Skoleom Flights', to: '/ecosystem', iconKey: 'plane' },
      { label: 'Skoleom Events', to: '/technology', iconKey: 'calendar' },
      { label: 'Skoleom Guide', to: '/ecosystem', iconKey: 'bookOpen' },
      { label: 'Skoleom Experiences', to: '/technology', iconKey: 'sparkles' },
      { label: 'Skoleom Booking', to: '/contact', iconKey: 'calendar' },
    ],
  },
  {
    columnKey: 'contenus.divertissement',
    title: 'CONTENUS & DIVERTISSEMENT',
    tileClass: 'from-purple-400/95 to-violet-800/85',
    links: [
      { label: 'Skoleom Watch', to: '/watch/content-paris-cafe', iconKey: 'tv' },
      { label: 'Skoleom Music', to: '/stores', iconKey: 'music' },
      { label: 'Skoleom Podcast', to: '/en-construction', iconKey: 'mic' },
      { label: 'Skoleom Book', to: '/en-construction', iconKey: 'bookOpen' },
      { label: 'Skoleom Games', to: '/stores', iconKey: 'gamepad2' },
      { label: 'Skoleom News', to: '/en-construction', iconKey: 'newspaper' },
      { label: 'Skoleom Radio', to: '/en-construction', iconKey: 'radio' },
    ],
  },
  {
    columnKey: 'outils.utilitaires',
    title: 'OUTILS & UTILITAIRES',
    tileClass: 'from-slate-400/90 to-slate-700/90',
    links: [
      { label: 'Skoleom Cloud', to: '/technology', iconKey: 'cloud' },
      { label: 'Skoleom Transfer', to: '/technology', iconKey: 'server' },
      { label: 'Skoleom Scan', to: '/technology', iconKey: 'fileScan' },
      { label: 'Skoleom QR', to: '/technology', iconKey: 'qrCode' },
      { label: 'Skoleom Password', to: '/technology', iconKey: 'keyRound' },
      { label: 'Skoleom VPN', to: '/technology', iconKey: 'shield' },
      { label: 'Skoleom Backup', to: '/technology', iconKey: 'hardDrive' },
    ],
  },
  {
    columnKey: 'support.communaute',
    title: 'SUPPORT & COMMUNAUTÉ',
    tileClass: 'from-green-400/95 to-emerald-800/90',
    links: [
      { label: "Centre d'aide Skoleom", to: '/contact', iconKey: 'bookOpen' },
      { label: 'Assistance Skoleom', to: '/contact', iconKey: 'messageSquare' },
      { label: 'Vos retours Skoleom', to: '/contact', iconKey: 'bell' },
      { label: 'Communauté Skoleom', to: '/ecosystem', iconKey: 'users' },
      { label: 'Ambassadeurs Skoleom', to: '/ecosystem', iconKey: 'sparkles' },
      { label: 'Actualités Skoleom', to: '/en-construction', iconKey: 'newspaper' },
      { label: 'Statut des services Skoleom', to: '/technology', iconKey: 'wrench' },
    ],
  },
];

const ROW_A = UNIVERSE_MENU_COLUMNS.slice(0, 6);
const ROW_B = UNIVERSE_MENU_COLUMNS.slice(6, 12);

interface UniverseMegaMenuProps {
  open: boolean;
  topPx: number;
  /** Fermé après navigation, Échap, etc. */
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function ColumnBlock({ column, onNavigate }: { column: UniverseColumn; onNavigate: () => void }) {
  const { t } = useTranslation();
  const localizePath = useLocalizedPath();

  return (
    <div className="min-w-0">
      <h3 className="mb-1.5 break-words text-[8px] font-bold uppercase leading-tight tracking-[0.12em] text-white/90 md:mb-2.5 md:text-[10px] md:tracking-[0.14em] lg:mb-3 lg:text-[11px] lg:tracking-[0.16em]">
        {tOr(t, `mega.universe.columns.${columnI18nKey(column.columnKey)}.title`, column.title)}
      </h3>
      <ul className="flex flex-col gap-y-px md:gap-y-0.5 lg:gap-y-1">
        {column.links.map((item) => {
          const Icon = ICON_MAP[item.iconKey] ?? Sparkles;
          const label = tOr(t, `mega.universe.links.${keySafe(item.label)}`, item.label);
          const linkClassName =
            'group flex items-start gap-1.5 rounded-md py-px text-left transition-colors md:items-center md:gap-2.5 md:py-0.5 lg:gap-3 lg:py-1';
          const iconTile = (
            <span
              className={`flex size-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br shadow-inner shadow-black/25 ring-[0.5px] ring-white/12 md:size-8 md:rounded-[10px] lg:size-9 lg:rounded-[11px] ${column.tileClass}`}
            >
              <Icon
                className="size-[12px] text-black opacity-95 drop-shadow-sm md:size-[14px] lg:size-4"
                aria-hidden
                strokeWidth={2}
              />
            </span>
          );
          const isExternal = item.external || /^https?:\/\//.test(item.to);

          return (
            <li key={`${column.title}-${item.label}`}>
              {isExternal ? (
                <a
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onNavigate}
                  className={linkClassName}
                >
                  {iconTile}
                  <span className="min-w-0 flex-1 text-[9px] font-semibold leading-[1.18] text-white transition-colors group-hover:text-univ-lime md:text-[12px] md:leading-snug lg:text-[13px]">
                    {label}
                  </span>
                </a>
              ) : (
                <Link to={localizePath(item.to)} onClick={onNavigate} className={linkClassName}>
                  {iconTile}
                  <span className="min-w-0 flex-1 text-[9px] font-semibold leading-[1.18] text-white transition-colors group-hover:text-univ-lime md:text-[12px] md:leading-snug lg:text-[13px]">
                    {label}
                  </span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function GridRow({
  columns,
  onNavigate,
  className,
}: {
  columns: readonly UniverseColumn[];
  onNavigate: () => void;
  /** Ex. rangée desktop : grille scrollable dans la moitié de hauteur allouée */
  className?: string;
}) {
  const base =
    'grid min-h-0 min-w-0 grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-3 sm:gap-y-7 md:min-h-0 md:grid-cols-6 md:gap-x-3 md:gap-y-6 md:overscroll-contain lg:gap-x-4 xl:gap-x-5 [&>*]:min-w-0';

  return (
    <div className={[base, className].filter(Boolean).join(' ')}>
      {columns.map((col) => (
        <ColumnBlock key={col.columnKey} column={col} onNavigate={onNavigate} />
      ))}
    </div>
  );
}

export default function UniverseMegaMenu({
  open,
  topPx,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: UniverseMegaMenuProps) {
  const { t } = useTranslation();
  const localizePath = useLocalizedPath();
  const panelCardRef = useRef<HTMLDivElement>(null);

  /** Ferme si la souris quitte la zone contenu sans entrer dans le pied de page du panneau. */
  const handleContentMouseLeave = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const next = e.relatedTarget as Node | null;
      if (next && panelCardRef.current?.contains(next)) return;
      onMouseLeave?.();
    },
    [onMouseLeave],
  );

  const layerStyle: CSSProperties = {
    top: topPx,
    height: `calc(100dvh - ${topPx}px)`,
    maxHeight: `calc(100dvh - ${topPx}px)`,
  };

  const scrollCap = `max(260px,calc(100dvh - ${topPx}px - 1rem))`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="universe-layer"
          role="presentation"
          className="pointer-events-none fixed inset-x-0 bottom-0 z-[48] flex flex-col"
          style={layerStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
        >
          <button
            type="button"
            tabIndex={-1}
            aria-label={t('header.actions.closeMenu')}
            className="absolute inset-0 z-0 cursor-default bg-black/55 backdrop-blur-[1px] pointer-events-auto"
            onClick={onClose}
          />

          <motion.div
            id="univ-mega-panel"
            role="dialog"
            aria-modal="true"
            aria-label={t('header.universe')}
            className="pointer-events-auto relative z-10 mx-auto mt-1 box-border flex h-full min-h-0 w-full max-w-[min(100%,1600px)] flex-1 flex-col px-3 pb-3 sm:px-4 sm:pb-4 md:mt-2 md:px-6 md:pb-5 lg:px-8 lg:pb-6"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div
              ref={panelCardRef}
              className="flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-zinc-950/98 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.92)] supports-[backdrop-filter]:backdrop-blur-xl md:rounded-[1.35rem] lg:rounded-[1.5rem]"
            >
              <div className="flex shrink-0 items-center justify-end px-4 py-2.5 md:hidden">
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t('header.actions.closeMenu')}
                  className="inline-flex size-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/90 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <X size={16} aria-hidden />
                </button>
              </div>
              <div
                className="min-h-0 flex-1 px-4 py-4 max-[767px]:max-h-[var(--um-scroll-cap)] max-[767px]:overflow-y-auto max-[767px]:overscroll-contain md:flex md:h-full md:min-h-0 md:flex-1 md:flex-col md:overflow-hidden md:px-6 md:py-6 lg:px-9 lg:py-7"
                style={{ ['--um-scroll-cap' as string]: scrollCap }}
                onMouseLeave={handleContentMouseLeave}
              >
                {/* Desktop : deux rangées séparées (50 % / 50 %), grille scrollante par zone si trop de liens. */}
                <div className="flex min-h-0 flex-col gap-5 [@media(max-height:720px)]:gap-3 md:min-h-0 md:flex-1 md:gap-2">
                  <div className="md:flex md:min-h-0 md:flex-1 md:flex-col md:overflow-hidden">
                    <GridRow
                      columns={ROW_A}
                      onNavigate={onClose}
                      className="md:min-h-0 md:flex-1 md:overflow-x-hidden md:overflow-y-auto"
                    />
                  </div>
                  <div className="h-px w-full shrink-0 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  <div className="md:flex md:min-h-0 md:flex-1 md:flex-col md:overflow-hidden">
                    <GridRow
                      columns={ROW_B}
                      onNavigate={onClose}
                      className="md:min-h-0 md:flex-1 md:overflow-x-hidden md:overflow-y-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="shrink-0 bg-black/20 px-4 py-2.5 sm:px-5 md:py-3.5 md:px-7 lg:px-9 lg:py-4">
                <div className="flex justify-center">
                  <Link
                    to={localizePath('/404')}
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[11px] font-semibold text-white transition hover:border-univ-lime/40 hover:bg-white/10 hover:text-univ-lime md:gap-2 md:px-6 md:py-2.5 md:text-[13px] lg:py-3 lg:text-sm"
                  >
                    <LayoutGrid
                      className="size-[15px] shrink-0 text-univ-lime md:size-[17px] lg:size-[18px]"
                      aria-hidden
                      strokeWidth={2}
                    />
                    {tOr(t, 'mega.universe.allTools', 'Voir tous les +50 outils Skoleom')}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
