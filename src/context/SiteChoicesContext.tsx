import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type {
  OptionalPreferenceCategory,
  SiteChoicesContextValue,
  SitePreferences,
  StoredSiteChoices,
} from '../types/siteChoices';
import {
  createAcceptedChoices,
  createDefaultChoices,
  createRejectedChoices,
  createStoredChoices,
  readStoredChoices,
  writeStoredChoices,
} from '../utils/siteChoicesStorage';

const SiteChoicesContext = createContext<SiteChoicesContextValue | undefined>(undefined);

interface SiteChoicesProviderProps {
  children: ReactNode;
}

export function SiteChoicesProvider({ children }: SiteChoicesProviderProps) {
  const [consent, setConsent] = useState<StoredSiteChoices>(() => createDefaultChoices());
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const storedConsent = readStoredChoices();
    setConsent(storedConsent);
    const showBanner = () => {
      if (storedConsent.status === 'pending') {
        setIsBannerVisible(true);
      }
    };
    const idle = window.requestIdleCallback;
    if (typeof idle === 'function') {
      idle(showBanner, { timeout: 2500 });
      return undefined;
    }
    window.addEventListener('load', showBanner, { once: true });
    return () => window.removeEventListener('load', showBanner);
  }, []);

  const persistConsent = useCallback((nextConsent: StoredSiteChoices) => {
    writeStoredChoices(nextConsent);
    setConsent(nextConsent);
    setIsBannerVisible(false);
    window.dispatchEvent(new CustomEvent('skoleom:privacy-choice', { detail: nextConsent }));
  }, []);

  const openPreferences = useCallback(() => {
    setIsBannerVisible(true);
  }, []);

  const closePreferences = useCallback(() => {
    setIsBannerVisible(false);
  }, []);

  const acceptAll = useCallback(() => {
    persistConsent(createAcceptedChoices());
  }, [persistConsent]);

  const rejectAll = useCallback(() => {
    persistConsent(createRejectedChoices());
  }, [persistConsent]);

  const savePreferences = useCallback(
    (preferences: SitePreferences) => {
      const optionalValues = [
        preferences.analytics,
        preferences.marketing,
        preferences.personalization,
      ];
      const status = optionalValues.every(Boolean)
        ? 'accepted'
        : optionalValues.every((value) => !value)
          ? 'rejected'
          : 'customized';

      persistConsent(createStoredChoices(status, preferences));
    },
    [persistConsent],
  );

  const hasConsentFor = useCallback(
    (category: OptionalPreferenceCategory) => consent.preferences[category] === true,
    [consent.preferences],
  );

  const value = useMemo<SiteChoicesContextValue>(
    () => ({
      consent,
      isBannerVisible,
      openPreferences,
      closePreferences,
      acceptAll,
      rejectAll,
      savePreferences,
      hasConsentFor,
    }),
    [
      acceptAll,
      closePreferences,
      consent,
      hasConsentFor,
      isBannerVisible,
      openPreferences,
      rejectAll,
      savePreferences,
    ],
  );

  return <SiteChoicesContext.Provider value={value}>{children}</SiteChoicesContext.Provider>;
}

export function useSiteChoices() {
  const context = useContext(SiteChoicesContext);

  if (!context) {
    throw new Error('useSiteChoices must be used inside SiteChoicesProvider');
  }

  return context;
}
