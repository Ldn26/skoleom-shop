import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Filter, Loader2, Search, Sparkles, X } from 'lucide-react';
import {
  SKOLEOM_PAGE_LOGO_SRC,
  SKOLEOM_PAGE_PLATFORMS,
  type SkoleomPagePlatform,
} from '../../data/skoleomPagePlatforms';
import ModernPlatformLogo from './ModernPlatformLogo';
import PlatformLogoBadge from './PlatformLogoBadge';
import { useTranslation } from 'react-i18next';

/**
 * Skoleom Page — port UI skoleom-page-v2 (dark cinematic + glass).
 */

const ALL_PLATFORM_IDS = SKOLEOM_PAGE_PLATFORMS.map((p) => p.id);

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function PlatformResultCard({ platform, query }: { platform: SkoleomPagePlatform; query: string }) {
  const label = query.trim();
  const href = platform.getLink(label);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      variants={itemVariants}
      className="group h-full"
    >
      <div className="univ-page-glass-panel univ-page-result-card group relative flex h-full flex-col items-center overflow-hidden rounded-3xl p-5 transition duration-300">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#0164f8]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="mb-3 flex h-16 w-16 items-center justify-center md:h-20 md:w-20">
          <PlatformLogoBadge platform={platform} />
        </div>
        <p className="text-center text-sm font-medium leading-tight text-white">
          {label} on {platform.name}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-3 text-sm font-semibold text-[#0164f8] hover:underline focus-visible:underline"
          aria-label={`Ouvrir ${label} sur ${platform.name}`}
        >
          Ouvrir →
        </a>
      </div>
    </motion.article>
  );
}

export default function SkoleomPageExplorer() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [displayQuery, setDisplayQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedPlatformIds, setSelectedPlatformIds] = useState<string[]>([...ALL_PLATFORM_IDS]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const visiblePlatforms = SKOLEOM_PAGE_PLATFORMS.filter(
    (platform) => selectedPlatformIds.length === 0 || selectedPlatformIds.includes(platform.id),
  );

  const togglePlatform = useCallback((platformId: string) => {
    setSelectedPlatformIds((prev) =>
      prev.includes(platformId) ? prev.filter((id) => id !== platformId) : [...prev, platformId],
    );
  }, []);

  const selectAllPlatforms = useCallback(() => {
    setSelectedPlatformIds([...ALL_PLATFORM_IDS]);
  }, []);

  const clearPlatformSelections = useCallback(() => {
    setSelectedPlatformIds([]);
  }, []);

  const resetSearch = useCallback(() => {
    setQuery('');
    setDisplayQuery('');
    setHasSearched(false);
    setIsLoading(false);
  }, []);

  const handleSearch = async (e?: FormEvent) => {
    e?.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    setIsLoading(true);
    setHasSearched(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setDisplayQuery(trimmed);
    setIsLoading(false);
  };

  const handleLogoKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      resetSearch();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };

    if (isFilterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isFilterOpen]);

  const filterActive =
    selectedPlatformIds.length > 0 && selectedPlatformIds.length < ALL_PLATFORM_IDS.length;

  return (
    <>
      <header className="flex flex-col items-center text-center">
        <div
          role="button"
          tabIndex={0}
          onClick={resetSearch}
          onKeyDown={handleLogoKeyDown}
          className="cursor-pointer select-none transition-opacity hover:opacity-90"
          aria-label={t('skoleomPage.explorer.searchReset')}
        >
          <img
            src={SKOLEOM_PAGE_LOGO_SRC}
            alt={t('skoleomPage.explorer.logoAlt')}
            className="mx-auto block h-auto w-[min(100%,240px)] object-contain drop-shadow-[0_8px_32px_rgba(1,100,248,0.25)]"
            width={1339}
            height={538}
            decoding="async"
          />
        </div>

        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-white/50">
          <Sparkles className="h-3 w-3 text-[#0164f8]" aria-hidden />
          <span>{t('skoleomPage.explorer.poweredBy')}</span>
        </div>

        <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          {t('skoleomPage.explorer.heroBefore')}
          <span className="univ-page-text-gradient">{t('skoleomPage.explorer.heroHighlight')}</span>
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
          {t('skoleomPage.explorer.heroSubtitle')}
        </p>
      </header>

      <form
        onSubmit={handleSearch}
        className="univ-page-glass-strong univ-page-focus-ring mx-auto mt-10 flex w-full max-w-2xl items-center gap-2 rounded-full py-2 pl-6 pr-2 transition-shadow"
        role="search"
      >
        <Search className="h-5 w-5 shrink-0 text-white/40" aria-hidden />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border-0 bg-transparent text-base text-white placeholder:text-white/40 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none"
          autoComplete="off"
          enterKeyHint="search"
          placeholder={t('skoleomPage.explorer.searchPlaceholder')}
          aria-label={t('skoleomPage.explorer.searchAria')}
          disabled={isLoading}
        />
        <button
          type="submit"
          className="univ-page-bg-gradient univ-page-shadow-gold inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full px-5 text-sm font-semibold text-black transition hover:opacity-90 disabled:opacity-60"
          aria-label={t('skoleomPage.explorer.searchSubmit')}
          disabled={isLoading || !query.trim()}
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
          ) : (
            <>
              {t('skoleomPage.explorer.exploreCta')}
              <Search className="h-4 w-4" aria-hidden />
            </>
          )}
        </button>
      </form>

      <AnimatePresence mode="wait">
        {!hasSearched && (
          <motion.div
            key="preview-chips"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {SKOLEOM_PAGE_PLATFORMS.slice(0, 10).map((platform) => (
              <div
                key={platform.id}
                className="univ-page-glass-panel flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:border-white/20"
                title={platform.name}
              >
                <ModernPlatformLogo platform={platform.logoKey} size={18} />
                <span className="text-xs text-white/70">{platform.name}</span>
              </div>
            ))}
            <div className="univ-page-glass-panel rounded-full px-3 py-1.5 text-xs text-white/50">
              +{SKOLEOM_PAGE_PLATFORMS.length - 10}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {hasSearched && !isLoading && (
        <div className="relative z-10 mt-10 flex w-full flex-col gap-3 overflow-visible sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/80">
            {t('skoleomPage.explorer.resultsFor')}{' '}
            <span className="font-semibold text-white">&quot;{displayQuery}&quot;</span>
            {filterActive && (
              <span className="text-white/60">
                {' '}
                {t(
                  selectedPlatformIds.length > 1
                    ? 'skoleomPage.explorer.resultsOnPlatforms_other'
                    : 'skoleomPage.explorer.resultsOnPlatforms_one',
                  { count: selectedPlatformIds.length },
                )}
              </span>
            )}
          </p>

          <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
            {filterActive && (
              <div className="hidden max-w-[320px] flex-wrap gap-1 md:flex">
                {selectedPlatformIds.slice(0, 3).map((platformId) => {
                  const platform = SKOLEOM_PAGE_PLATFORMS.find((p) => p.id === platformId);
                  if (!platform) return null;
                  return (
                    <span
                      key={platformId}
                      className="univ-page-glass-panel inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-1 text-xs text-white/80"
                    >
                      <ModernPlatformLogo platform={platform.logoKey} size={14} />
                      {platform.name}
                    </span>
                  );
                })}
                {selectedPlatformIds.length > 3 && (
                  <span className="univ-page-glass-panel rounded-full border border-white/10 px-2 py-1 text-xs text-white/80">
                    +{selectedPlatformIds.length - 3}
                  </span>
                )}
              </div>
            )}

            <div className="relative" ref={filterRef}>
              <button
                type="button"
                onClick={() => setIsFilterOpen((open) => !open)}
                className="univ-page-glass-panel inline-flex items-center gap-1 rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                aria-expanded={isFilterOpen}
                aria-haspopup="listbox"
              >
                <Filter className="h-4 w-4" aria-hidden />
                {t('skoleomPage.explorer.filter')}
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 z-50 mt-2 w-[min(15rem,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-[#111]/95 p-2 shadow-[0_16px_48px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                  <p className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/50">
                    {t('skoleomPage.explorer.platforms')}
                  </p>
                  <div
                    className="max-h-[min(50dvh,18rem)] space-y-0.5 overflow-y-auto"
                    role="listbox"
                    aria-label={t('skoleomPage.explorer.filterPlatformsAria')}
                  >
                    {SKOLEOM_PAGE_PLATFORMS.map((platform) => {
                      const checked = selectedPlatformIds.includes(platform.id);
                      return (
                        <label
                          key={platform.id}
                          className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 text-sm text-white/90 transition hover:bg-white/10"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => togglePlatform(platform.id)}
                            className="h-4 w-4 rounded border-white/20 bg-transparent accent-[#0164f8]"
                          />
                          <span className="flex min-w-0 flex-1 items-center gap-2">
                            <ModernPlatformLogo platform={platform.logoKey} size={16} />
                            {platform.name}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  <div className="mt-2 flex gap-2 p-2">
                    <button
                      type="button"
                      onClick={selectAllPlatforms}
                      className="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white transition hover:bg-white/10"
                    >
                      <Check className="h-3 w-3" aria-hidden />
                      {t('skoleomPage.explorer.selectAll')}
                    </button>
                    <button
                      type="button"
                      onClick={clearPlatformSelections}
                      className="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white transition hover:bg-white/10"
                    >
                      <X className="h-3 w-3" aria-hidden />
                      {t('skoleomPage.explorer.selectNone')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {hasSearched && isLoading && (
        <div className="mt-16 flex flex-col items-center text-white/60">
          <Loader2 className="h-8 w-8 animate-spin text-[#0164f8]" aria-hidden />
          <p className="mt-3 text-sm">{t('skoleomPage.explorer.loading')}</p>
        </div>
      )}

      {hasSearched && !isLoading && visiblePlatforms.length > 0 && (
        <motion.div
          className="mt-6 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {visiblePlatforms.map((platform) => (
            <PlatformResultCard key={platform.id} platform={platform} query={displayQuery} />
          ))}
        </motion.div>
      )}

      {hasSearched && !isLoading && visiblePlatforms.length === 0 && (
        <div className="mt-16 text-center text-white/60">
          <p>{t('skoleomPage.explorer.noResults')}</p>
        </div>
      )}
    </>
  );
}
