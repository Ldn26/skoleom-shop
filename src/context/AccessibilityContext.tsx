import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { applyAccessibilityToDocument } from '../a11y/applyAccessibility';
import { getMainReadableText, getSelectedText } from '../a11y/speech';
import {
  getVocalReaderStatus,
  listPreferredVoiceChoicesForLang,
  pauseVocalReading,
  resumeVocalReading,
  startVocalReading,
  stopVocalReading,
  type VocalReaderVoiceChoice,
  type VocalReaderProgress,
  type VocalReaderStatus,
} from '../a11y/vocalReader';
import {
  DEFAULT_A11Y_SETTINGS,
  type AccessibilitySettings,
  type ColorVisionMode,
  type ContrastTheme,
  type FontProfile,
  type TextScale,
} from '../a11y/types';
import { STORAGE_KEYS } from '../constants/app';

interface AccessibilityContextValue {
  settings: AccessibilitySettings;
  panelOpen: boolean;
  readerStatus: VocalReaderStatus;
  readerProgress: VocalReaderProgress;
  openPanel: () => void;
  closePanel: () => void;
  togglePanel: () => void;
  updateSettings: (patch: Partial<AccessibilitySettings>) => void;
  resetSettings: () => void;
  announce: (message: string) => void;
  /** Lit à voix haute la sélection utilisateur. */
  readSelectionAloud: (uiLang: string) => Promise<boolean>;
  /** Lit à voix haute le contenu principal (#main-content). */
  readPageAloud: (uiLang: string) => Promise<boolean>;
  pauseReading: () => void;
  resumeReading: () => void;
  stopReading: () => void;
  getVoices: (uiLang: string) => VocalReaderVoiceChoice[];
}

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

const IDLE_PROGRESS: VocalReaderProgress = { currentChunk: 0, totalChunks: 0 };

function loadSettings(): AccessibilitySettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.a11y);
    if (!raw) return DEFAULT_A11Y_SETTINGS;
    return { ...DEFAULT_A11Y_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_A11Y_SETTINGS;
  }
}

/** Code BCP 47 pour la synthèse vocale selon la langue UI. */
export function speechLangFromUi(uiLang: string): string {
  const code = uiLang.split('-')[0].toLowerCase();
  const map: Record<string, string> = {
    fr: 'fr-FR',
    en: 'en-US',
    es: 'es-ES',
    pt: 'pt-BR',
    ar: 'ar-SA',
    hi: 'hi-IN',
    zh: 'zh-CN',
    id: 'id-ID',
    ru: 'ru-RU',
    sw: 'sw-KE',
  };
  return map[code] ?? 'en-US';
}

export function useAccessibility(): AccessibilityContextValue {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) {
    throw new Error('useAccessibility doit être utilisé dans <AccessibilityProvider>');
  }
  return ctx;
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(loadSettings);
  const [panelOpen, setPanelOpen] = useState(false);
  const [readerStatus, setReaderStatus] = useState<VocalReaderStatus>('idle');
  const [readerProgress, setReaderProgress] = useState<VocalReaderProgress>(IDLE_PROGRESS);
  const liveRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    applyAccessibilityToDocument(settings);
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.a11y, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return undefined;
    const warmVoices = () => window.speechSynthesis.getVoices();
    warmVoices();
    window.speechSynthesis.addEventListener('voiceschanged', warmVoices);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', warmVoices);
  }, []);

  const announce = useCallback((message: string) => {
    if (!liveRef.current) return;
    liveRef.current.textContent = '';
    window.requestAnimationFrame(() => {
      if (liveRef.current) liveRef.current.textContent = message;
    });
  }, []);

  const updateSettings = useCallback((patch: Partial<AccessibilitySettings>) => {
    setSettings((prev) => ({ ...prev, ...patch }));
  }, []);

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_A11Y_SETTINGS);
    stopVocalReading();
    setReaderStatus('idle');
    setReaderProgress(IDLE_PROGRESS);
  }, []);

  const speakText = useCallback(
    async (text: string, uiLang: string) => {
      const lang = speechLangFromUi(uiLang);
      const ok = await startVocalReading(text, {
        lang,
        rate: settings.ttsRate,
        pitch: settings.ttsPitch,
        voiceURI: settings.ttsVoiceURI || undefined,
        onStatus: setReaderStatus,
        onProgress: setReaderProgress,
      });
      if (!ok) {
        announce(''); // caller may pass message
      }
      return ok;
    },
    [settings.ttsRate, settings.ttsPitch, settings.ttsVoiceURI, announce],
  );

  const readSelectionAloud = useCallback(
    async (uiLang: string) => {
      const text = getSelectedText();
      if (!text) return false;
      return speakText(text, uiLang);
    },
    [speakText],
  );

  const readPageAloud = useCallback(
    async (uiLang: string) => {
      const text = getMainReadableText();
      if (!text) return false;
      return speakText(text, uiLang);
    },
    [speakText],
  );

  const getVoices = useCallback((uiLang: string) => {
    return listPreferredVoiceChoicesForLang(speechLangFromUi(uiLang));
  }, []);

  const value = useMemo<AccessibilityContextValue>(
    () => ({
      settings,
      panelOpen,
      readerStatus,
      readerProgress,
      openPanel: () => setPanelOpen(true),
      closePanel: () => setPanelOpen(false),
      togglePanel: () => setPanelOpen((o) => !o),
      updateSettings,
      resetSettings,
      announce,
      readSelectionAloud,
      readPageAloud,
      pauseReading: pauseVocalReading,
      resumeReading: resumeVocalReading,
      stopReading: () => {
        stopVocalReading();
        setReaderStatus(getVocalReaderStatus());
      },
      getVoices,
    }),
    [
      settings,
      panelOpen,
      readerStatus,
      readerProgress,
      updateSettings,
      resetSettings,
      announce,
      readSelectionAloud,
      readPageAloud,
      getVoices,
    ],
  );

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
      <div ref={liveRef} role="status" aria-live="polite" aria-atomic="true" className="sr-only" />
    </AccessibilityContext.Provider>
  );
}

export type { AccessibilitySettings, ColorVisionMode, ContrastTheme, FontProfile, TextScale };
