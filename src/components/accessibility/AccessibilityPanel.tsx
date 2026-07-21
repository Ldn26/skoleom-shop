import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen,
  Eye,
  Focus,
  RotateCcw,
  Type,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAccessibility } from '../../context/AccessibilityContext';
import type { VocalReaderVoiceChoice } from '../../a11y/vocalReader';
import type { ColorVisionMode, FontProfile, TextScale } from '../../a11y/types';

const COLOR_VISION_OPTIONS: readonly ColorVisionMode[] = [
  'none',
  'deuteranopia',
  'protanopia',
  'tritanopia',
  'achromatopsia',
];

const FONT_OPTIONS: readonly FontProfile[] = ['default', 'dyslexia'];

const TEXT_SCALES: readonly TextScale[] = [100, 110, 125, 150, 175];
const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-4 last:border-0">
      <h3 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-univ-lime">
        {title}
      </h3>
      {children}
    </section>
  );
}

function OptionButton({
  active,
  onClick,
  label,
  description,
  preview,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  description?: string;
  preview?: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition ${
        active ? 'a11y-option-active' : 'border-white/12 bg-white/5 hover:bg-white/10'
      }`}
      aria-pressed={active}
    >
      {preview}
      <span className="min-w-0 flex-1">
        <span className="block font-sans text-sm font-semibold text-white">{label}</span>
        {description ? (
          <span className="mt-0.5 block font-sans text-xs text-white/55">{description}</span>
        ) : null}
      </span>
    </button>
  );
}

export default function AccessibilityPanel() {
  const { t, i18n } = useTranslation();
  const titleId = useId();
  const subtitleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const {
    settings,
    panelOpen,
    closePanel,
    updateSettings,
    resetSettings,
    announce,
    readSelectionAloud,
    readPageAloud,
    pauseReading,
    resumeReading,
    stopReading,
    readerStatus,
    getVoices,
  } = useAccessibility();

  const uiLang = i18n.resolvedLanguage || i18n.language || 'en';
  const [voices, setVoices] = useState<VocalReaderVoiceChoice[]>([]);

  useEffect(() => {
    if (!panelOpen) return undefined;
    const refresh = () => setVoices(getVoices(uiLang));
    refresh();
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.addEventListener('voiceschanged', refresh);
      return () => window.speechSynthesis.removeEventListener('voiceschanged', refresh);
    }
    return undefined;
  }, [panelOpen, uiLang, getVoices]);

  const handleReadSelection = async () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      announce(t('a11y.reader.unsupported'));
      return;
    }
    const ok = await readSelectionAloud(uiLang);
    if (!ok) announce(t('a11y.reader.noSelection'));
    else announce(t('a11y.reader.started'));
  };

  const handleReadPage = async () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      announce(t('a11y.reader.unsupported'));
      return;
    }
    const ok = await readPageAloud(uiLang);
    if (!ok) announce(t('a11y.reader.noContent'));
    else announce(t('a11y.reader.started'));
  };

  useEffect(() => {
    if (!panelOpen) return undefined;
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const appRoot = document.getElementById('root');
    appRoot?.setAttribute('aria-hidden', 'true');
    appRoot?.setAttribute('inert', '');

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePanel();
        return;
      }
      if (e.key !== 'Tab') return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusables = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (!focusables.length) {
        e.preventDefault();
        panel.focus();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    window.requestAnimationFrame(() => {
      const panel = panelRef.current;
      if (!panel) return;
      const firstFocusable = panel.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
      (firstFocusable ?? panel).focus();
    });

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      appRoot?.removeAttribute('aria-hidden');
      appRoot?.removeAttribute('inert');
      previousFocusRef.current?.focus();
    };
  }, [panelOpen, closePanel]);

  const swatchClass = (mode: ColorVisionMode) => {
    if (mode === 'none') return 'a11y-swatch a11y-swatch-regular';
    return `a11y-swatch a11y-swatch-${mode}`;
  };

  return createPortal(
    <AnimatePresence>
      {panelOpen ? (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
            aria-label={t('a11y.panel.close')}
            onClick={closePanel}
          />

          <motion.div
            id="accessibility-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={subtitleId}
            tabIndex={-1}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[91] flex w-full max-w-md flex-col border-l border-white/12 bg-[#0a0a0a] shadow-2xl outline-none sm:max-w-lg"
          >
            <header className="flex shrink-0 items-center justify-between gap-3 px-5 py-4">
              <div>
                <h2 id={titleId} className="font-sans text-lg font-bold text-white">
                  {t('a11y.panel.title')}
                </h2>
                <p id={subtitleId} className="mt-1 font-sans text-xs text-white/55">
                  {t('a11y.panel.subtitle')}
                </p>
              </div>
              <button
                type="button"
                onClick={closePanel}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:bg-white/10"
                aria-label={t('a11y.panel.close')}
              >
                <X size={18} aria-hidden />
              </button>
            </header>

            <div className="a11y-panel-scroll flex-1 overflow-y-auto px-5">
              <Section title={t('a11y.sections.vision')}>
                <p className="mb-3 font-sans text-xs text-white/50">{t('a11y.vision.hint')}</p>
                <label className="mb-4 block font-sans text-sm text-white/80">
                  <span className="mb-2 block">{t('a11y.vision.textSize')}</span>
                  <input
                    type="range"
                    min={0}
                    max={TEXT_SCALES.length - 1}
                    step={1}
                    value={TEXT_SCALES.indexOf(settings.textScale)}
                    onChange={(e) => {
                      const scale = TEXT_SCALES[Number(e.target.value)] ?? 100;
                      updateSettings({ textScale: scale });
                      announce(t('a11y.announce.textSize', { value: scale }));
                    }}
                    className="w-full accent-univ-lime"
                  />
                  <span className="mt-1 block text-right text-xs text-univ-lime">
                    {settings.textScale}%
                  </span>
                </label>
                <div className="flex flex-col gap-2">
                  <OptionButton
                    active={settings.increasedSpacing}
                    onClick={() => {
                      updateSettings({ increasedSpacing: !settings.increasedSpacing });
                      announce(t('a11y.announce.spacing'));
                    }}
                    label={t('a11y.vision.spacing')}
                    description={t('a11y.vision.spacingDesc')}
                  />
                  <OptionButton
                    active={settings.readingMode}
                    onClick={() => {
                      updateSettings({ readingMode: !settings.readingMode });
                      announce(t('a11y.announce.readingMode'));
                    }}
                    label={t('a11y.vision.readingMode')}
                    description={t('a11y.vision.readingModeDesc')}
                    preview={<BookOpen size={18} className="shrink-0 text-univ-lime" aria-hidden />}
                  />
                  <OptionButton
                    active={settings.enhancedFocus}
                    onClick={() => {
                      updateSettings({ enhancedFocus: !settings.enhancedFocus });
                      announce(t('a11y.announce.focus'));
                    }}
                    label={t('a11y.vision.enhancedFocus')}
                    description={t('a11y.vision.enhancedFocusDesc')}
                    preview={<Focus size={18} className="shrink-0 text-univ-lime" aria-hidden />}
                  />
                </div>
              </Section>

              <Section title={t('a11y.sections.colorVision')}>
                <p className="mb-3 font-sans text-xs text-white/50">{t('a11y.colorVision.hint')}</p>
                <div className="flex flex-col gap-2">
                  {COLOR_VISION_OPTIONS.map((mode) => (
                    <OptionButton
                      key={mode}
                      active={settings.colorVision === mode}
                      onClick={() => {
                        updateSettings({ colorVision: mode });
                        announce(t(`a11y.colorVision.${mode}`));
                      }}
                      label={t(`a11y.colorVision.${mode}`)}
                      description={mode !== 'none' ? t(`a11y.colorVision.${mode}Desc`) : undefined}
                      preview={<span className={swatchClass(mode)} aria-hidden />}
                    />
                  ))}
                </div>
              </Section>

              <Section title={t('a11y.sections.typography')}>
                <div className="flex flex-col gap-2">
                  {FONT_OPTIONS.map((font) => (
                    <OptionButton
                      key={font}
                      active={settings.fontProfile === font}
                      onClick={() => {
                        updateSettings({ fontProfile: font });
                        announce(t(`a11y.typography.${font}`));
                      }}
                      label={t(`a11y.typography.${font}`)}
                      description={
                        font === 'dyslexia' ? t('a11y.typography.dyslexiaDesc') : undefined
                      }
                      preview={<Type size={18} className="shrink-0 text-univ-lime" aria-hidden />}
                    />
                  ))}
                </div>
              </Section>

              <Section title={t('a11y.sections.reader')}>
                <p className="mb-3 font-sans text-xs text-white/50">{t('a11y.reader.hint')}</p>
                {voices.length > 0 ? (
                  <label className="mb-4 block font-sans text-sm text-white/80">
                    <span className="mb-2 block">{t('a11y.reader.voice')}</span>
                    <select
                      value={settings.ttsVoiceURI}
                      onChange={(e) => updateSettings({ ttsVoiceURI: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-univ-lime/50"
                    >
                      <option value="">{t('a11y.reader.voiceDefault')}</option>
                      {voices.map((v) => (
                        <option key={v.voiceURI} value={v.voiceURI}>
                          {v.id === 'female'
                            ? t('a11y.reader.voiceFemale')
                            : t('a11y.reader.voiceMale')}
                        </option>
                      ))}
                    </select>
                  </label>
                ) : null}
                <label className="mb-4 block font-sans text-sm text-white/80">
                  <span className="mb-2 block">{t('a11y.reader.speed')}</span>
                  <input
                    type="range"
                    min={0.5}
                    max={1.5}
                    step={0.1}
                    value={settings.ttsRate}
                    onChange={(e) => updateSettings({ ttsRate: Number(e.target.value) })}
                    className="w-full accent-univ-lime"
                  />
                </label>
                <label className="mb-4 block font-sans text-sm text-white/80">
                  <span className="mb-2 block">{t('a11y.reader.pitch')}</span>
                  <input
                    type="range"
                    min={0.5}
                    max={1.5}
                    step={0.1}
                    value={settings.ttsPitch}
                    onChange={(e) => updateSettings({ ttsPitch: Number(e.target.value) })}
                    className="w-full accent-univ-lime"
                  />
                </label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => void handleReadSelection()}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-univ-lime/40 bg-univ-lime/10 px-3 py-2.5 font-sans text-sm font-semibold text-univ-lime transition hover:bg-univ-lime/20"
                  >
                    <Volume2 size={16} aria-hidden />
                    {t('a11y.reader.readSelection')}
                  </button>
                  <button
                    type="button"
                    onClick={() => void handleReadPage()}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 font-sans text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <Volume2 size={16} aria-hidden />
                    {t('a11y.reader.readPage')}
                  </button>
                </div>
                {readerStatus !== 'idle' ? (
                  <div className="mt-2 flex gap-2">
                    {readerStatus === 'playing' ? (
                      <button
                        type="button"
                        onClick={pauseReading}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 font-sans text-sm text-white transition hover:bg-white/10"
                      >
                        <Pause size={16} aria-hidden />
                        {t('a11y.reader.pause')}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={resumeReading}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-univ-lime/40 bg-univ-lime/10 px-3 py-2 font-sans text-sm font-semibold text-univ-lime transition hover:bg-univ-lime/20"
                      >
                        <Play size={16} fill="currentColor" aria-hidden />
                        {t('a11y.reader.resume')}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={stopReading}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-2 font-sans text-sm text-white/70 transition hover:bg-white/5"
                    >
                      <VolumeX size={16} aria-hidden />
                      {t('a11y.reader.stop')}
                    </button>
                  </div>
                ) : null}
              </Section>

              <Section title={t('a11y.sections.motion')}>
                <OptionButton
                  active={settings.reduceMotion}
                  onClick={() => {
                    updateSettings({ reduceMotion: !settings.reduceMotion });
                    announce(t('a11y.announce.motion'));
                  }}
                  label={t('a11y.motion.reduce')}
                  description={t('a11y.motion.reduceDesc')}
                  preview={<Eye size={18} className="shrink-0 text-univ-lime" aria-hidden />}
                />
              </Section>
            </div>

            <footer className="shrink-0 p-5">
              <button
                type="button"
                onClick={() => {
                  resetSettings();
                  announce(t('a11y.announce.reset'));
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 py-3 font-sans text-sm font-semibold text-white/85 transition hover:bg-white/10"
              >
                <RotateCcw size={16} aria-hidden />
                {t('a11y.panel.reset')}
              </button>
            </footer>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
