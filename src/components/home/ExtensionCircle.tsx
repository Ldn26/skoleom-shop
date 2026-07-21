import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type CSSProperties,
  type RefObject,
} from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { BrowserBrandIcon, type BrowserBrandIconId } from './BrowserBrandIcon';
import DevelopmentStatusModal from '../common/DevelopmentStatusModal';

// Police Poppins injectée une seule fois
if (typeof document !== 'undefined' && !document.head.querySelector('[data-poppins-picker]')) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap';
  link.setAttribute('data-poppins-picker', 'true');
  document.head.appendChild(link);
}

/* ------------------------------------------------------------------------- */
/* Types & Configuration                                                      */
/* ------------------------------------------------------------------------- */

interface DownloadOption {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly angle: number;
  readonly icon: BrowserBrandIconId;
  readonly external?: boolean;
  readonly internal?: boolean;
  readonly unavailable?: boolean;
  readonly accent?: boolean;
}

const EXTENSION_OPTIONS: readonly DownloadOption[] = [
  {
    id: 'chrome',
    label: 'Chrome',
    icon: 'chrome',
    angle: -10,
    href: 'https://chromewebstore.google.com/detail/aoacfogdijgapcjffcgcfnmkgaicdidj?utm_source=item-share-cb',
    external: true,
  },
  {
    id: 'firefox',
    label: 'Firefox',
    icon: 'firefox',
    angle: 45,
    href: 'https://addons.mozilla.org/fr/firefox/addon/skoleom-sesync/',
    external: true,
  },
  { id: 'edge', label: 'Edge', icon: 'edge', angle: 90, href: '#' },
  { id: 'brave', label: 'Brave', icon: 'brave', angle: 135, href: '#' },
  { id: 'opera', label: 'Opera', icon: 'opera', angle: 170, href: '#' },
  { id: 'safari', label: 'Safari', icon: 'safari', angle: 210, href: '#' },
  {
    id: 'token',
    label: 'Skoleom Token',
    icon: 'token',
    angle: 270,
    href: '/skoleom-token',
    accent: true,
    internal: true,
    unavailable: true,
  },
];

const APP_OPTIONS: readonly DownloadOption[] = [
  { id: 'ios', label: 'iOS', icon: 'ios', angle: 45, href: '#' },
  { id: 'android', label: 'Android', icon: 'android', angle: 135, href: '#' },
  {
    id: 'token',
    label: 'Skoleom Token',
    icon: 'token',
    angle: 270,
    href: '/skoleom-token',
    accent: true,
    internal: true,
    unavailable: true,
  },
];

/* ------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* ------------------------------------------------------------------------- */

const angleToOffset = (deg: number, radius: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
};

const polarToCartesian = (cx: number, cy: number, r: number, deg: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

/* ------------------------------------------------------------------------- */
/* Composant principal                                                        */
/* ------------------------------------------------------------------------- */

interface ExtensionCircleProps {
  open: boolean;
  onClose: () => void;
  anchorRef?: RefObject<HTMLElement | null>;
}

export default function ExtensionCircle({ open, onClose, anchorRef }: ExtensionCircleProps) {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [regionModalOpen, setRegionModalOpen] = useState(false);
  const [anchorPoint, setAnchorPoint] = useState<{ x: number; y: number } | null>(null);

  const isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
  const isIOS = typeof navigator !== 'undefined' && /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const options = useMemo(() => {
    if (isDesktop) return EXTENSION_OPTIONS;

    return APP_OPTIONS.filter((opt) => {
      if (opt.id === 'token') return true;
      if (isAndroid) return opt.id === 'android';
      if (isIOS) return opt.id === 'ios';
      return opt.id === 'ios' || opt.id === 'android'; // Default: show both ios and android
    });
  }, [isDesktop, isAndroid, isIOS]);

  const ringSize = 323;
  const radius = 204;

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open || isDesktop) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open, isDesktop]);

  useLayoutEffect(() => {
    if (!open || !isDesktop || !anchorRef?.current) {
      setAnchorPoint(null);
      return undefined;
    }

    const update = () => {
      const rect = anchorRef.current?.getBoundingClientRect();
      if (!rect) return;
      setAnchorPoint({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    };

    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, true);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update, true);
    };
  }, [open, isDesktop, anchorRef]);

  useEffect(() => {
    if (!open) setRegionModalOpen(false);
  }, [open]);

  const dialogLabel = t('home.hero.downloadPickerAria', {
    defaultValue: 'Choose your download platform',
  });

  const showRegionModal = () => {
    setRegionModalOpen(true);
  };

  const closeRegionModal = () => setRegionModalOpen(false);

  const regionModalProps = {
    open: true as const,
    kicker: t('home.hero.extensionRegionModal.kicker', { defaultValue: 'Extension' }),
    title: t('home.hero.extensionRegionModal.title', {
      defaultValue: 'Extension non disponible',
    }),
    body: t('home.hero.extensionRegionModal.body', {
      defaultValue: "Cette extension n'est pas disponible dans votre région.",
    }),
    closeLabel: t('home.hero.extensionRegionModal.close', { defaultValue: 'Fermer' }),
    titleId: 'extension-region-modal-title',
    onClose: closeRegionModal,
  };

  const viewportCenterStyle: CSSProperties = {
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const desktopPickerStyle: CSSProperties | undefined =
    anchorPoint !== null
      ? {
          left: anchorPoint.x,
          top: anchorPoint.y - 150,
          transform: 'translate(-50%, -50%)',
        }
      : {
          left: '50%',
          top: '42%',
          transform: 'translate(-50%, -50%)',
        };

  const overlay = (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 backdrop-blur-sm ${isDesktop ? 'z-[78]' : 'z-[84]'}`}
            style={{
              background: isDesktop
                ? 'radial-gradient(circle at center, rgba(168,255,53,0.05) 0%, rgba(0,0,0,0.65) 60%)'
                : 'rgba(0,0,0,0.82)',
            }}
            onClick={onClose}
            aria-hidden
          />

          {isDesktop ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none fixed z-[79]"
              style={{
                ...desktopPickerStyle,
                width: ringSize,
                height: ringSize,
              }}
              role="dialog"
              aria-modal="true"
              aria-label={dialogLabel}
            >
              <CircularArrow ringSize={ringSize} />
              {options.map((opt, index) => (
                <PickerOption
                  key={opt.id}
                  option={opt}
                  radius={radius}
                  index={index}
                  onSelect={onClose}
                  onUnavailableSelect={showRegionModal}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[85] flex items-end justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:items-center"
              role="dialog"
              aria-modal="true"
              aria-label={dialogLabel}
              onClick={onClose}
            >
              <div
                className="pointer-events-auto relative w-full max-w-md rounded-3xl border border-white/12 bg-[#0a0a0a]/95 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.75)] backdrop-blur-xl"
                onClick={(e) => e.stopPropagation()}
              >
                {regionModalOpen ? (
                  <DevelopmentStatusModal {...regionModalProps} presentation="card" />
                ) : (
                  <>
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-sans text-base font-bold text-white">
                          {t('home.hero.download')}&nbsp;{t('home.hero.application')}
                        </p>
                        <p className="mt-1 font-sans text-sm text-white/55">
                          {t(
                            isAndroid
                              ? 'home.hero.downloadPickerHintAndroid'
                              : isIOS
                                ? 'home.hero.downloadPickerHintIOS'
                                : 'home.hero.downloadPickerHintDefault',
                            {
                              defaultValue: isAndroid
                                ? 'Available for your Android device'
                                : isIOS
                                  ? 'Available for your iOS device'
                                  : 'Choose your platform',
                            },
                          )}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10"
                        aria-label={t('home.hero.extensionRegionModal.close', {
                          defaultValue: 'Fermer',
                        })}
                      >
                        <X size={18} aria-hidden />
                      </button>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      {options.map((opt, index) => (
                        <MobilePickerOption
                          key={opt.id}
                          option={opt}
                          index={index}
                          onSelect={onClose}
                          onUnavailableSelect={showRegionModal}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {regionModalOpen && isDesktop ? (
            <DevelopmentStatusModal
              {...regionModalProps}
              presentation="anchored"
              anchorStyle={viewportCenterStyle}
              zIndexClassName="z-[80]"
            />
          ) : null}
        </>
      )}
    </AnimatePresence>
  );

  return typeof document !== 'undefined' ? createPortal(overlay, document.body) : null;
}

/* ------------------------------------------------------------------------- */
/* Arc circulaire moderne                                                     */
/* ------------------------------------------------------------------------- */

interface CircularArrowProps {
  ringSize: number;
}

function CircularArrow({ ringSize }: CircularArrowProps) {
  const strokeWidth = ringSize > 320 ? 14 : 11;
  const r = (ringSize - strokeWidth * 2) / 2;
  const cx = ringSize / 2;
  const cy = ringSize / 2;

  const startAngle = -55;
  const endAngle = 253;

  const startPt = polarToCartesian(cx, cy, r, startAngle);
  const endPt = polarToCartesian(cx, cy, r, endAngle);

  const sweep = endAngle - startAngle;
  const largeArcFlag = sweep > 180 ? 1 : 0;
  const arcPath = `M ${startPt.x} ${startPt.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${endPt.x} ${endPt.y}`;

  const arrowAngle = endAngle + 90;

  return (
    <div style={{ width: ringSize, height: ringSize }} aria-hidden>
      <svg
        width={ringSize}
        height={ringSize}
        viewBox={`0 0 ${ringSize} ${ringSize}`}
        overflow="visible"
      >
        <defs>
          <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c8ff6b" />
            <stop offset="50%" stopColor="#a8ff35" />
            <stop offset="100%" stopColor="#88dd1a" />
          </linearGradient>

          <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8C42" />
            <stop offset="100%" stopColor="#FF6B35" />
          </linearGradient>

          <filter id="limeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="orangeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="centerOrb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(168,255,53,0.25)" />
            <stop offset="40%" stopColor="rgba(168,255,53,0.08)" />
            <stop offset="100%" stopColor="rgba(168,255,53,0)" />
          </radialGradient>
        </defs>

        <circle cx={cx} cy={cy} r={r * 0.6} fill="url(#centerOrb)" />

        <path
          d={arcPath}
          stroke="rgba(168,255,53,0.06)"
          strokeWidth={strokeWidth + 8}
          fill="none"
          strokeLinecap="round"
        />

        <motion.path
          d={arcPath}
          stroke="url(#limeGrad)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          filter="url(#limeGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.path
          d={arcPath}
          stroke="#ffffff"
          strokeWidth={strokeWidth * 0.25}
          fill="none"
          strokeLinecap="round"
          opacity={0.7}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <circle r={strokeWidth * 0.4} fill="#ffffff" filter="url(#limeGlow)" opacity="0">
          <animate attributeName="opacity" from="0" to="1" begin="1.4s" dur="0.2s" fill="freeze" />
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.4s" path={arcPath} />
        </circle>

        <g transform={`translate(${endPt.x}, ${endPt.y}) rotate(${arrowAngle})`}>
          <motion.circle
            cx={0}
            cy={-strokeWidth * 0.3}
            r={strokeWidth * 2.2}
            fill="#FF6B35"
            opacity={0.25}
            filter="url(#orangeGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />

          <motion.path
            d={`M 0 ${-strokeWidth * 1.8} L ${strokeWidth * 1.6} ${strokeWidth * 0.7} L ${strokeWidth * 0.4} ${strokeWidth * 0.4} L 0 ${strokeWidth * 1.1} L ${-strokeWidth * 0.4} ${strokeWidth * 0.4} L ${-strokeWidth * 1.6} ${strokeWidth * 0.7} Z`}
            fill="url(#orangeGrad)"
            stroke="#FFAA70"
            strokeWidth={1}
            strokeLinejoin="round"
            filter="url(#orangeGlow)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.15, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />

          <motion.path
            d={`M 0 ${-strokeWidth * 1.3} L ${strokeWidth * 0.3} ${strokeWidth * 0.2} L ${-strokeWidth * 0.3} ${strokeWidth * 0.2} Z`}
            fill="#FFD9B8"
            opacity={0.6}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.3, duration: 0.3 }}
          />
        </g>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* Chip d'option                                                              */
/* ------------------------------------------------------------------------- */

interface PickerOptionProps {
  option: DownloadOption;
  radius: number;
  index: number;
  onSelect: () => void;
  onUnavailableSelect: () => void;
}

interface MobilePickerOptionProps {
  option: DownloadOption;
  index: number;
  onSelect: () => void;
  onUnavailableSelect: () => void;
}

function MobilePickerOption({
  option,
  index,
  onSelect,
  onUnavailableSelect,
}: MobilePickerOptionProps) {
  const chipBase =
    'flex w-full items-center justify-between gap-3 rounded-2xl border font-semibold backdrop-blur-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black';

  const chipStyle = option.accent
    ? 'border-univ-orange/50 bg-univ-orange/12 px-4 py-3.5 text-univ-lime hover:bg-univ-orange/20 focus-visible:ring-univ-orange'
    : 'border-univ-lime/35 bg-univ-lime/8 px-4 py-3.5 text-univ-lime hover:bg-univ-lime/14 focus-visible:ring-univ-lime';

  const isUnavailable = option.href === '#' || option.unavailable;

  const handleClick = () => {
    if (isUnavailable) {
      onUnavailableSelect();
      return;
    }
    window.setTimeout(onSelect, 80);
  };

  const inner = (
    <motion.span
      className="flex w-full items-center justify-between gap-3"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 + index * 0.06, duration: 0.3 }}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <span className="flex items-center gap-3">
        <BrowserBrandIcon icon={option.icon} />
        <span className="text-base">{option.label}</span>
      </span>
      {option.accent ? (
        <span className="rounded-full bg-univ-orange px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
          NFT
        </span>
      ) : null}
    </motion.span>
  );

  if (isUnavailable) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`${chipBase} ${chipStyle}`}
        aria-label={`${option.label} indisponible dans votre région`}
      >
        {inner}
      </button>
    );
  }

  if (option.internal) {
    return (
      <Link
        to={option.href}
        onClick={handleClick}
        className={`${chipBase} ${chipStyle}`}
        aria-label={`Accéder à ${option.label}`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={option.href}
      target={option.external ? '_blank' : undefined}
      rel={option.external ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
      className={`${chipBase} ${chipStyle}`}
      aria-label={`Télécharger pour ${option.label}${option.external ? ' (nouvel onglet)' : ''}`}
    >
      {inner}
    </a>
  );
}

function PickerOption({ option, radius, index, onSelect, onUnavailableSelect }: PickerOptionProps) {
  const effectiveRadius = option.accent ? radius * 1.18 : radius * 1.05;
  const { x, y } = angleToOffset(option.angle, effectiveRadius);

  const style: CSSProperties = {
    left: '50%',
    top: '50%',
    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
    fontFamily: "'Poppins', sans-serif",
  };

  const chipBase =
    'pointer-events-auto absolute flex items-center gap-2 rounded-full font-semibold backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black';

  const chipStyle = option.accent
    ? 'border border-univ-orange/60 bg-univ-orange/15 text-univ-lime text-xs md:text-sm px-3 py-1.5 shadow-[0_0_24px_rgba(255,107,53,0.4)] hover:bg-univ-orange/25 hover:text-univ-orange hover:border-univ-orange hover:shadow-[0_0_32px_rgba(255,107,53,0.7)] hover:scale-110 focus-visible:ring-univ-orange'
    : 'border border-univ-lime/40 bg-univ-lime/10 text-univ-lime text-sm md:text-base px-4 py-2 shadow-[0_0_16px_rgba(168,255,53,0.25)] hover:bg-univ-lime/20 hover:text-univ-orange hover:border-univ-orange/60 hover:shadow-[0_0_28px_rgba(255,107,53,0.45)] hover:scale-110 focus-visible:ring-univ-lime';

  const className = `${chipBase} ${chipStyle}`;

  const isUnavailable = option.href === '#' || option.unavailable;

  const handleClick = () => {
    if (isUnavailable) {
      onUnavailableSelect();
      return;
    }
    window.setTimeout(onSelect, 80);
  };

  const inner = (
    <motion.span
      className="flex items-center gap-2"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.6 + index * 0.08,
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      <BrowserBrandIcon icon={option.icon} />
      <span>{option.label}</span>
      {option.accent && (
        <span className="ml-1 rounded-full bg-univ-orange px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
          NFT
        </span>
      )}
    </motion.span>
  );

  if (isUnavailable) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={className}
        style={style}
        aria-label={`${option.label} indisponible dans votre région`}
      >
        {inner}
      </button>
    );
  }

  if (option.internal) {
    return (
      <Link
        to={option.href}
        onClick={handleClick}
        className={className}
        style={style}
        aria-label={`Accéder à ${option.label}`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={option.href}
      target={option.external ? '_blank' : undefined}
      rel={option.external ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
      className={className}
      style={style}
      aria-label={`Télécharger pour ${option.label}${option.external ? ' (nouvel onglet)' : ''}`}
    >
      {inner}
    </a>
  );
}
