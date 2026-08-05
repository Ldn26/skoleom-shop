import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react';
import { useSignOut, useMe } from '../../api/user';
import { resolveNavigation, type NavItem } from '../../../config/navigation';
import { createPortal } from 'react-dom';
import { useUserStore } from '../../store/userStore';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AlignJustify, ChevronDown, LogOut, Menu, Search, User, X } from 'lucide-react';
import { I18N_DEFAULT_LANGUAGE, I18N_TRANSLATION_ENABLED } from '../../i18n/config';
import {
  buildLocalizedPath,
  isRtlLanguage,
  isSupportedLanguage,
  stripLanguagePrefix,
} from '../../i18n/urlLanguage';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';
import { getLanguageZoneGroups, languageOptions } from '../../locales';
import type { LanguageZoneId } from '../../i18n/languageZones';
import Navbar, { type MegaMenuVariantKey } from './Navbar';
import UniverseMegaMenu from './UniverseMegaMenu';
import { MobileAccordionItem, MobileMegaMenuPanel, MobileUniversePanel } from './MobileNavMenus';
import AccessibilityTrigger from '../accessibility/AccessibilityTrigger';
import { useAccessibility } from '../../context/AccessibilityContext';
import { scrollAppToTop } from './ScrollToTop';
import { setStorageItem } from '../../utils/browserStorage';
import { isHubStaticPath } from '../../constants/hubLinks';
import GlobalSearch from '../../components/shop/GlobalSearch';

const MEGA_CLOSE_DELAY_MS = 180;
const SCROLL_OPAQUE_THRESHOLD = 20;
const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

export default function Header() {
  const { data: me, isError: meError } = useMe();
  const storeUser = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);
  const role = useUserStore((state) => state.role);
  const hasHydrated = useUserStore((state) => state.hasHydrated);

  // Keep the store in sync with the server's answer.
  useEffect(() => {
    if (me) setUser(me, me.role);
    else if (meError) clearUser();
  }, [me, meError, setUser, clearUser]);

  // Instant display from the store; corrected by the server once useMe resolves.
  const user = me ?? storeUser;
  const navigation = useMemo(
    () => resolveNavigation(hasHydrated && !!user, me?.role ?? role ?? null),
    [hasHydrated, user, me, role],
  );

  const triggerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const headerShellRef = useRef<HTMLDivElement | null>(null);
  const megaCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const universeCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [megaVariant, setMegaVariant] = useState<MegaMenuVariantKey>('stores');
  const [megaTopPx, setMegaTopPx] = useState(0);
  const [universeOpen, setUniverseOpen] = useState(false);
  const [universeTopPx, setUniverseTopPx] = useState(0);

  const navigate = useNavigate();
  const localizePath = useLocalizedPath();
  const { t } = useTranslation();

  const updateMegaTopFromTrigger = useCallback((variantKey: string) => {
    const el = triggerRefs.current[variantKey];
    if (el) setMegaTopPx(el.getBoundingClientRect().bottom);
  }, []);

  const updateUniverseTopFromHeader = useCallback(() => {
    const el = headerShellRef.current;
    if (el) setUniverseTopPx(el.getBoundingClientRect().bottom);
  }, []);

  const openMega = useCallback(
    (variantKey: MegaMenuVariantKey) => {
      setUniverseOpen(false);
      if (universeCloseTimerRef.current) {
        clearTimeout(universeCloseTimerRef.current);
        universeCloseTimerRef.current = null;
      }
      if (megaCloseTimerRef.current) {
        clearTimeout(megaCloseTimerRef.current);
        megaCloseTimerRef.current = null;
      }
      setMegaVariant(variantKey);
      updateMegaTopFromTrigger(variantKey);
      setMegaOpen(true);
    },
    [updateMegaTopFromTrigger],
  );

  const openUniverse = useCallback(() => {
    if (universeCloseTimerRef.current) {
      clearTimeout(universeCloseTimerRef.current);
      universeCloseTimerRef.current = null;
    }
    setMegaOpen(false);
    if (megaCloseTimerRef.current) {
      clearTimeout(megaCloseTimerRef.current);
      megaCloseTimerRef.current = null;
    }
    updateUniverseTopFromHeader();
    setUniverseOpen(true);
  }, [updateUniverseTopFromHeader]);

  const scheduleCloseUniverse = useCallback(() => {
    if (universeCloseTimerRef.current) clearTimeout(universeCloseTimerRef.current);
    universeCloseTimerRef.current = setTimeout(() => {
      setUniverseOpen(false);
      universeCloseTimerRef.current = null;
    }, MEGA_CLOSE_DELAY_MS);
  }, []);

  const keepUniverseOpen = useCallback(() => {
    if (universeCloseTimerRef.current) {
      clearTimeout(universeCloseTimerRef.current);
      universeCloseTimerRef.current = null;
    }
    setUniverseOpen(true);
  }, []);

  const scheduleCloseMega = useCallback(() => {
    if (megaCloseTimerRef.current) clearTimeout(megaCloseTimerRef.current);
    megaCloseTimerRef.current = setTimeout(() => {
      setMegaOpen(false);
      megaCloseTimerRef.current = null;
    }, MEGA_CLOSE_DELAY_MS);
  }, []);

  const keepMegaOpen = useCallback(() => {
    if (megaCloseTimerRef.current) {
      clearTimeout(megaCloseTimerRef.current);
      megaCloseTimerRef.current = null;
    }
    setMegaOpen(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_OPAQUE_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!megaOpen) return undefined;
    const syncTop = () => updateMegaTopFromTrigger(megaVariant);
    syncTop();
    window.addEventListener('scroll', syncTop, true);
    window.addEventListener('resize', syncTop);
    return () => {
      window.removeEventListener('scroll', syncTop, true);
      window.removeEventListener('resize', syncTop);
    };
  }, [megaOpen, megaVariant, updateMegaTopFromTrigger]);

  useEffect(() => {
    if (!universeOpen) return undefined;
    updateUniverseTopFromHeader();
    window.addEventListener('scroll', updateUniverseTopFromHeader, true);
    window.addEventListener('resize', updateUniverseTopFromHeader);
    return () => {
      window.removeEventListener('scroll', updateUniverseTopFromHeader, true);
      window.removeEventListener('resize', updateUniverseTopFromHeader);
    };
  }, [universeOpen, updateUniverseTopFromHeader]);

  useEffect(() => {
    if (!universeOpen) return undefined;
    const onEsc = (e: globalThis.KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (universeCloseTimerRef.current) {
        clearTimeout(universeCloseTimerRef.current);
        universeCloseTimerRef.current = null;
      }
      setUniverseOpen(false);
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [universeOpen]);

  useEffect(
    () => () => {
      if (megaCloseTimerRef.current) clearTimeout(megaCloseTimerRef.current);
      if (universeCloseTimerRef.current) clearTimeout(universeCloseTimerRef.current);
    },
    [],
  );

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 overflow-visible bg-transparent">
        <div ref={headerShellRef}>
          <div
            className={cn(
              'border-b px-3 py-0 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out sm:px-4 md:px-[60px]',
              scrolled
                ? 'border-white/[0.08] bg-[#050505]/95 shadow-[0_10px_35px_rgba(0,0,0,0.45)] backdrop-blur-xl'
                : 'border-transparent bg-transparent shadow-none',
            )}
          >
            <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between gap-2 sm:gap-3 md:h-[71px]">
              <div className="flex shrink-0 items-center gap-4 sm:gap-5 md:gap-6">
                <BrandLogo />
                <UniverseButton
                  open={universeOpen}
                  onMouseEnter={openUniverse}
                  onMouseLeave={scheduleCloseUniverse}
                  onClick={() => setUniverseOpen((open) => !open)}
                />
              </div>

              <div className="hidden min-w-0 flex-1 items-center justify-center px-2 md:flex lg:px-4">
                <GlobalSearch className="block w-full max-w-[420px]" />
              </div>

              <HeaderActions
                headerShellRef={headerShellRef}
                onSearchClick={() => {
                  if (window.innerWidth < 1024) {
                    setMobileOpen(true);
                    scrollAppToTop();
                  }
                }}
                onMobileMenuOpen={() => setMobileOpen((open) => !open)}
              />
            </div>
          </div>

          <NavLinks
            items={navigation}
            ariaLabel={t('header.navLabel')}
            onOpenMega={openMega}
            onScheduleCloseMega={scheduleCloseMega}
            registerTriggerRef={(variantKey, el) => {
              if (el) triggerRefs.current[variantKey] = el;
            }}
          />
        </div>
      </header>

      {typeof document !== 'undefined' &&
        createPortal(
          <Navbar
            open={megaOpen}
            variant={megaVariant}
            topPx={megaTopPx}
            onMouseEnter={keepMegaOpen}
            onMouseLeave={scheduleCloseMega}
          />,
          document.body,
        )}
      {typeof document !== 'undefined' &&
        createPortal(
          <UniverseMegaMenu
            open={universeOpen}
            topPx={universeTopPx || 104}
            onClose={() => setUniverseOpen(false)}
            onMouseEnter={keepUniverseOpen}
            onMouseLeave={scheduleCloseUniverse}
          />,
          document.body,
        )}

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} items={navigation} />
    </>
  );
}

function BrandLogo() {
  const { t } = useTranslation();
  const localizePath = useLocalizedPath();

  return (
    <Link
      to={localizePath('/')}
      className="group inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime focus-visible:rounded"
      aria-label={t('header.brandHome')}
    >
      <div className="flex items-center">
        <img src="/logo/logo-white.webp" alt="Skoleom" className="h-48 w-auto" />
      </div>
    </Link>
  );
}

interface UniverseButtonProps {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

function UniverseButton({ open, onMouseEnter, onMouseLeave, onClick }: UniverseButtonProps) {
  const { t } = useTranslation();

  return (
    <div
      className="relative hidden md:block"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        type="button"
        onClick={onClick}
        aria-label={t('header.universe')}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="univ-mega-panel"
        className={cn(
          'inline-flex cursor-pointer select-none items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-medium text-white/90 transition duration-300 hover:text-univ-lime sm:text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime focus-visible:ring-offset-2 focus-visible:ring-offset-black',
          open && 'text-univ-lime',
        )}
      >
        <span>{t('header.universe')}</span>
        <AlignJustify size={13} className="text-white/80" aria-hidden />
      </button>
    </div>
  );
}

function ProfileMenu() {
  const user = useUserStore((state) => state.user);
  const hasHydrated = useUserStore((state) => state.hasHydrated);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const localizePath = useLocalizedPath();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const signOut = useSignOut();

  useEffect(() => {
    if (!open) return undefined;
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (rootRef.current?.contains(target)) return;
      setOpen(false);
    };
    window.addEventListener('mousedown', handlePointerDown);
    return () => window.removeEventListener('mousedown', handlePointerDown);
  }, [open]);

  // Authenticated = we have a user in the store (cookie-only safe; token may be null).
  if (!hasHydrated || !user) return null;

  const initials = (user.name || 'U')
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const handleLogout = () => {
    setOpen(false);
    signOut.mutate(undefined, {
      onSettled: () => {
        useUserStore.getState().clearUser();
        navigate(localizePath('/'));
      },
    });
  };

  return (
    <div className="relative" ref={rootRef}>


    <button
      type="button"
        onClick={() => setOpen((v) => !v)}
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/85 shadow-sm transition duration-300 hover:border-univ-lime/50 hover:bg-white/10 hover:text-univ-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime focus-visible:ring-offset-2 focus-visible:ring-offset-black `}
      aria-haspopup="dialog"
      aria-expanded={open}
        aria-label={t('header.profile.open', { defaultValue: 'Mon compte' })}
    >
      <User size={16} strokeWidth={2.25} aria-hidden="true" />
    </button>


      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute right-0 top-[calc(100%+0.6rem)] z-[70] w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/97 p-1.5 shadow-2xl backdrop-blur-xl"
            role="menu"
          >
            <div className="flex items-center gap-3 border-b border-white/[0.07] px-3 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-univ-lime text-xs font-black text-black">
                {initials}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-white">{user.name}</span>
                <span className="block truncate text-xs text-white/45">{user.email}</span>
              </span>
            </div>

            <button
              type="button"
              role="menuitem"
              onClick={() => {
                navigate(localizePath('/compte'));
                setOpen(false);
              }}
              className="mt-1 flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-white/85 transition hover:bg-white/10"
            >
              <User size={15} />
              {t('header.profile.profile', { defaultValue: 'Mon compte' })}
            </button>

            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              disabled={signOut.isPending}
              className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-red-400 transition hover:bg-red-400/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <LogOut size={15} />
              {signOut.isPending
                ? t('common.states.loading', { defaultValue: 'Déconnexion...' })
                : t('header.profile.logout', { defaultValue: 'Déconnexion' })}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LanguageButton({ headerShellRef }: { headerShellRef: RefObject<HTMLDivElement | null> }) {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [menuPos, setMenuPos] = useState<{ top: number; left: number; width: number } | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const updateMenuPosition = useCallback(() => {
    const header = headerShellRef.current;
    const trigger = rootRef.current;
    if (!header || !trigger) return;

    const headerRect = header.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const gap = 12;
    const width = Math.min(320, window.innerWidth - 16);
    const isNarrow = window.innerWidth < 768;

    setMenuPos({
      top: headerRect.bottom + gap,
      left: isNarrow ? 8 : Math.max(8, triggerRect.right - width),
      width: isNarrow ? window.innerWidth - 16 : width,
    });
  }, [headerShellRef]);

  const frenchOption =
    languageOptions.find((option) => option.code === I18N_DEFAULT_LANGUAGE) || languageOptions[1];

  const currentLanguage = I18N_TRANSLATION_ENABLED
    ? (i18n.resolvedLanguage || i18n.language || I18N_DEFAULT_LANGUAGE).split('-')[0]
    : I18N_DEFAULT_LANGUAGE;

  const currentOption =
    languageOptions.find((option) => option.code === currentLanguage) || frenchOption;

  const languageZoneGroups = useMemo(() => getLanguageZoneGroups(), []);

  const zoneLabel = (zoneId: LanguageZoneId) => t(`header.language.zones.${zoneId}`);

  const handleLanguageChange = (languageCode: string) => {
    if (!I18N_TRANSLATION_ENABLED) {
      setOpen(false);
      return;
    }
    if (!isSupportedLanguage(languageCode)) {
      setOpen(false);
      return;
    }
    i18n.changeLanguage(languageCode);
    if (typeof window !== 'undefined') {
      setStorageItem('skoleom-language', languageCode);
      document.documentElement.lang = languageCode;
      document.documentElement.dir = isRtlLanguage(languageCode) ? 'rtl' : 'ltr';
      const localizedPath = buildLocalizedPath(
        stripLanguagePrefix(location.pathname),
        languageCode,
      );
      const target = `${localizedPath}${location.search}${location.hash}`;
      window.location.replace(target);
    }
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return undefined;
    updateMenuPosition();
    window.addEventListener('resize', updateMenuPosition);
    window.addEventListener('scroll', updateMenuPosition, { passive: true });
    return () => {
      window.removeEventListener('resize', updateMenuPosition);
      window.removeEventListener('scroll', updateMenuPosition);
    };
  }, [open, updateMenuPosition]);

  useEffect(() => {
    if (!open) return undefined;
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (rootRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      setOpen(false);
    };
    const handleEsc = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('keydown', handleEsc);
    };
  }, [open]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-9 shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 text-[10px] font-semibold uppercase leading-none tracking-wide text-white/90 transition duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:gap-1.5 sm:px-2.5"
        aria-label={t('header.language.change')}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <img
          src={currentOption.flagImg}
          alt=""
          aria-hidden
          className="h-3.5 w-5 rounded-[2px] object-cover"
        />
        {currentOption.code.toUpperCase()}
        <ChevronDown
          size={10}
          className={cn('transition duration-300', open && 'rotate-180')}
          aria-hidden
        />
      </button>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {open && menuPos && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                style={{ top: menuPos.top, left: menuPos.left, width: menuPos.width }}
                className="fixed z-[70] max-h-[min(60dvh,30rem)] overflow-y-auto rounded-3xl border border-white/10 bg-[#111111]/95 p-2 shadow-2xl backdrop-blur-xl"
                role="listbox"
                aria-label={t('header.language.change')}
              >
                {languageZoneGroups.map((group, groupIndex) => (
                  <div
                    key={group.id}
                    className={cn(groupIndex > 0 && 'mt-2 pt-2')}
                    role="group"
                    aria-label={zoneLabel(group.id)}
                  >
                    <p className="px-3 pb-1 pt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                      {zoneLabel(group.id)}
                    </p>
                    {group.languages.map((option) => {
                      const active = option.code === currentOption.code;
                      const disabled =
                        !I18N_TRANSLATION_ENABLED && option.code !== I18N_DEFAULT_LANGUAGE;

                      return (
                        <button
                          key={option.code}
                          type="button"
                          disabled={disabled}
                          onClick={() => handleLanguageChange(option.code)}
                          className={cn(
                            'flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime',
                            disabled ? 'cursor-default opacity-40' : 'hover:bg-white/10',
                            active && 'bg-white/[0.08] text-white',
                          )}
                          role="option"
                          aria-selected={active}
                          aria-disabled={disabled || undefined}
                          lang={option.code}
                        >
                          <img
                            src={option.flagImg}
                            alt=""
                            aria-hidden
                            className="h-4 w-6 rounded-[2px] object-cover"
                          />
                          <span className="min-w-0 flex-1 text-lg font-medium text-[#D0D0D0]">
                            {option.nativeName}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                            {option.code}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}

interface IconButtonProps {
  label: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

function IconButton({ label, children, className, onClick }: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/85 transition duration-300 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        className,
      )}
      aria-label={label}
    >
      {children}
    </button>
  );
}

interface HeaderActionsProps {
  headerShellRef: RefObject<HTMLDivElement | null>;
  onSearchClick: () => void;
  onMobileMenuOpen: () => void;
}

function HeaderActions({ headerShellRef, onSearchClick, onMobileMenuOpen }: HeaderActionsProps) {
  const { t } = useTranslation();

  return (
    <div className="flex shrink-0 items-center justify-end gap-1.5 text-white/85 sm:gap-2">
      <IconButton label={t('header.searchAria')} onClick={onSearchClick} className="lg:hidden">
        <Search size={15} />
      </IconButton>

      <div className="hidden lg:block">
        <LanguageButton headerShellRef={headerShellRef} />
      </div>

      <AccessibilityTrigger className="hidden lg:inline-flex" />

      <div className="hidden lg:block">
        <ProfileMenu />
      </div>

      <IconButton
        label={t('header.actions.openMenu')}
        onClick={onMobileMenuOpen}
        className="lg:hidden"
      >
        <Menu size={17} />
      </IconButton>
    </div>
  );
}

interface NavLinksProps {
  items: NavItem[];
  ariaLabel: string;
  onOpenMega: (variant: MegaMenuVariantKey) => void;
  onScheduleCloseMega: () => void;
  registerTriggerRef: (variantKey: string, el: HTMLDivElement | null) => void;
}

function NavLinks({
  items,
  ariaLabel,
  onOpenMega,
  onScheduleCloseMega,
  registerTriggerRef,
}: NavLinksProps) {
  return (
    <div
      role="navigation"
      aria-label={ariaLabel}
      className="mx-auto mt-1 hidden h-[38px] min-h-[38px] w-fit max-w-[min(calc(100vw-3rem),1600px)] flex-wrap items-center justify-center gap-1 rounded-full border border-white/[0.18] bg-black/82 px-2 py-1 font-sans shadow-[0_0_0_1px_rgba(255,255,255,0.10),inset_0_1px_0_0_rgba(255,255,255,0.07),0_12px_34px_-8px_rgba(0,0,0,0.82),0_0_44px_rgba(0,0,0,0.42)] ring-1 ring-inset ring-black/45 backdrop-blur-xl backdrop-saturate-150 lg:flex"
    >
      {items.map((item) => (
        <NavPillItem
          key={item.href}
          item={item}
          onOpenMega={onOpenMega}
          onScheduleCloseMega={onScheduleCloseMega}
          registerTriggerRef={registerTriggerRef}
        />
      ))}
    </div>
  );
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
}



interface NavPillItemProps {
  item: NavItem;
  onOpenMega: (variant: MegaMenuVariantKey) => void;
  onScheduleCloseMega: () => void;
  registerTriggerRef: (variantKey: string, el: HTMLDivElement | null) => void;
}

function NavPillItem({
  item,
  onOpenMega,
  onScheduleCloseMega,
  registerTriggerRef,
}: NavPillItemProps) {
  const { t } = useTranslation();
  const localizePath = useLocalizedPath();

  const baseLinkClass =
    'inline-flex h-[30px] items-center justify-center rounded-full px-3 text-center font-sans text-xs font-semibold tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.85)] transition duration-300 xl:px-3.5';

  const innerLink = (): ReactNode => {
    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseLinkClass, 'text-white/78 hover:bg-white/[0.10] hover:text-univ-lime')}
          onClick={scrollAppToTop}
        >
          {t(item.label)}
        </a>
      );
    }   

    

    if (isHubStaticPath(item.href)) {
      return (
        <a
          href={item.href}
          className={cn(baseLinkClass, 'text-white/78 hover:bg-white/[0.10] hover:text-univ-lime')}
          onClick={scrollAppToTop}
        >
          {t(item.label)}
        </a>
      );
    }  


     if (item.href.includes('#')) {
  return (
    <a
      href={item.href}
      className={cn(
        baseLinkClass,
        'text-white/78 hover:bg-white/[0.10] hover:text-univ-lime',
      )}
      onClick={scrollAppToTop}
    >
      {t(item.label)}
    </a>
  );
} 


    return (
      <NavLink
        to={localizePath(item.href)}
        end={item.href === '/'}
        className={({ isActive }) =>
          cn(
            baseLinkClass,
            isActive
              ? 'text-univ-lime bg-white/[0.10]'
              : 'text-white/78 hover:bg-white/[0.10] hover:text-univ-lime',
          )
        }
        onClick={scrollAppToTop}
      >
        {t(item.label)}
      </NavLink>
    );
  };

  if (!item.megaVariant) {
    return innerLink();
  }

  const variant = item.megaVariant as MegaMenuVariantKey;

  return (
    <div
      ref={(el) => registerTriggerRef(variant, el)}
      className="relative"
      onMouseEnter={() => onOpenMega(variant)}
      onMouseLeave={onScheduleCloseMega}
    >
      {innerLink()}
    </div>
  );
}





// ─────────────────────────────────────────────────────────────────────────────
// FULL-SCREEN mobile menu — drop-in replacement for the `MobileMenu` function
// in Header.tsx.
//
// • Covers the whole viewport (fixed inset-0), logo pinned at the top.
// • Big, bold rows with hairline dividers — matches your screenshot exactly.
// • Locks background scroll while open; respects notch / home-bar safe areas.
// • Uses ONLY imports already present at the top of Header.tsx:
//     motion, AnimatePresence, useTranslation, useAccessibility, useLocation,
//     useLocalizedPath, useState, useEffect, useMemo, Link, AlignJustify,
//     ChevronDown, X, BrandLogo, MobileMegaMenuPanel, MobileUniversePanel, cn,
//     scrollAppToTop, the i18n helpers, NavItem, MegaMenuVariantKey, LanguageZoneId.
//   → `MobileAccordionItem` is no longer used here. If your tsconfig flags
//     unused imports, drop it from the `./MobileNavMenus` import line.
//
// • Routes, hrefs, language logic and the logo are all untouched.
// • FIX kept from before: the `href.includes('#')` branch now renders a real
//   row and closes the menu.
// ─────────────────────────────────────────────────────────────────────────────

const MOBILE_ROW =
  'flex w-full items-center justify-between border-b border-white/[0.06] py-[18px] text-left text-xl font-bold tracking-tight transition-colors duration-200 focus-visible:outline-none';
const MOBILE_ROW_IDLE = 'text-white/90 hover:text-univ-lime';

function MobileMenu({ open, onClose, items }: MobileMenuProps) {
  const { t, i18n } = useTranslation();
  const { openPanel } = useAccessibility();
  const location = useLocation();
  const localizePath = useLocalizedPath();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection((current) => (current === sectionId ? null : sectionId));
  };

  useEffect(() => {
    if (!open) {
      setExpandedSection(null);
      setLangMenuOpen(false);
    }
  }, [open]);

  // Lock the page behind the full-screen menu so it can't scroll through.
  useEffect(() => {
    if (!open || typeof document === 'undefined') return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onEsc = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [open, onClose]);

  const currentLanguage = I18N_TRANSLATION_ENABLED
    ? (i18n.resolvedLanguage || i18n.language || I18N_DEFAULT_LANGUAGE).split('-')[0]
    : I18N_DEFAULT_LANGUAGE;

  const languageZoneGroups = useMemo(() => getLanguageZoneGroups(), []);
  const zoneLabel = (zoneId: LanguageZoneId) => t(`header.language.zones.${zoneId}`);

  const handleLanguageChange = (languageCode: string) => {
    if (!I18N_TRANSLATION_ENABLED) {
      onClose();
      return;
    }
    if (!isSupportedLanguage(languageCode)) {
      onClose();
      return;
    }
    i18n.changeLanguage(languageCode);
    if (typeof window !== 'undefined') {
      setStorageItem('skoleom-language', languageCode);
      document.documentElement.lang = languageCode;
      document.documentElement.dir = isRtlLanguage(languageCode) ? 'rtl' : 'ltr';
      const localizedPath = buildLocalizedPath(
        stripLanguagePrefix(location.pathname),
        languageCode,
      );
      const target = `${localizedPath}${location.search}${location.hash}`;
      window.location.replace(target);
    }
    onClose();
  };

  // Inline expandable row (Universe + any mega-variant nav item).
  const renderAccordion = (id: string, label: string, accent: boolean, panel: ReactNode) => {
    const expanded = expandedSection === id;
    return (
      <div className="border-b border-white/[0.06]">
        <button
          type="button"
          onClick={() => toggleSection(id)}
          aria-expanded={expanded}
          className={cn(
            'flex w-full items-center justify-between py-[18px] text-left text-xl font-bold tracking-tight transition-colors duration-200 focus-visible:outline-none',
            accent ? 'text-univ-lime' : 'text-white/90 hover:text-univ-lime',
          )}
        >
          <span>{label}</span>
          {accent ? (
            <AlignJustify size={20} className="shrink-0 text-univ-lime/80" aria-hidden />
          ) : (
            <ChevronDown
              size={20}
              className={cn('shrink-0 text-white/50 transition-transform duration-200', expanded && 'rotate-180')}
              aria-hidden
            />
          )}
        </button>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pb-5 pt-1">{panel}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const renderNavEntry = (item: NavItem) => {
    if (item.megaVariant) {
      const variant = item.megaVariant as MegaMenuVariantKey;
      return (
        <div key={item.href}>
          {renderAccordion(
            variant,
            t(item.label),
            false,
            <MobileMegaMenuPanel variant={variant} onNavigate={onClose} />,
          )}
        </div>
      );
    }

    if (item.external) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            scrollAppToTop();
            onClose();
          }}
          className={cn(MOBILE_ROW, MOBILE_ROW_IDLE)}
        >
          {t(item.label)}
        </a>
      );
    }

    // FIX: hash / anchor links render like every other row and close the menu.
    if (item.href.includes('#')) {
      return (
        <a
          key={item.href}
          href={item.href}
          onClick={() => {
            scrollAppToTop();
            onClose();
          }}
          className={cn(MOBILE_ROW, MOBILE_ROW_IDLE)}
        >
          {t(item.label)}
        </a>
      );
    }

    return (
      <Link
        key={item.href}
        to={localizePath(item.href)}
        onClick={() => {
          scrollAppToTop();
          onClose();
        }}
        className={cn(MOBILE_ROW, MOBILE_ROW_IDLE)}
      >
        {t(item.label)}
      </Link>
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed inset-0 z-[70] flex flex-col bg-[#060606] text-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={t('header.navLabel')}
        >
          {/* Top bar — logo pinned, close on the right */}
          <div className="flex shrink-0 items-center justify-between border-b border-white/[0.07] px-5 pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
            <BrandLogo />
            <button
              type="button"
              onClick={onClose}
              className="grid size-10 place-items-center rounded-full text-white/70 transition duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label={t('header.actions.closeMenu')}
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable body */}
          <motion.div
            initial={{ y: 8 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="custom-scrollbar flex-1 overflow-y-auto overscroll-contain px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
          >
            {/* Primary navigation */}
            <nav className="pt-2">
              {renderAccordion(
                'universe',
                t('header.universe'),
                true,
                <MobileUniversePanel onNavigate={onClose} />,
              )}
              {items.map(renderNavEntry)}
            </nav>

            {/* Accessibility */}
            <button
              type="button"
              onClick={() => {
                openPanel();
                onClose();
              }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-univ-lime/35 bg-univ-lime/[0.08] px-4 py-3.5 text-sm font-semibold text-univ-lime transition duration-200 hover:bg-univ-lime/[0.16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime"
            >
              {t('a11y.panel.open')}
            </button>

            {/* Language */}
            <div className="mt-3">
              <button
                type="button"
                onClick={() => setLangMenuOpen((prev) => !prev)}
                aria-expanded={langMenuOpen}
                className="flex w-full items-center justify-between rounded-2xl bg-white/[0.03] px-4 py-3.5 text-left transition duration-200 hover:bg-white/[0.06] focus-visible:outline-none"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  {t('header.language.change')}
                </span>
                <ChevronDown
                  size={16}
                  className={cn(
                    'text-white/45 transition duration-200',
                    langMenuOpen && 'rotate-180 text-white/75',
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {langMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 px-1 pt-4">
                      {languageZoneGroups.map((group) => (
                        <div key={group.id}>
                          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                            {zoneLabel(group.id)}
                          </p>
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {group.languages.map((option) => {
                              const active = option.code === currentLanguage;
                              const disabled =
                                !I18N_TRANSLATION_ENABLED &&
                                option.code !== I18N_DEFAULT_LANGUAGE;

                              return (
                                <button
                                  key={option.code}
                                  type="button"
                                  disabled={disabled}
                                  onClick={() => handleLanguageChange(option.code)}
                                  className={cn(
                                    'flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm transition duration-200',
                                    disabled
                                      ? 'cursor-default border-white/5 opacity-40'
                                      : 'hover:bg-white/10',
                                    active
                                      ? 'border-univ-lime/60 bg-univ-lime/10 font-semibold text-univ-lime'
                                      : 'border-white/5 bg-white/[0.02] text-white/80',
                                  )}
                                >
                                  <img
                                    src={option.flagImg}
                                    alt=""
                                    className="h-3.5 w-5 rounded-[1px] object-cover"
                                  />
                                  <span className="truncate">{option.nativeName}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}