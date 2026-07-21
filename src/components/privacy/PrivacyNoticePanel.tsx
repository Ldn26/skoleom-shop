import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSiteChoices } from '../../context/SiteChoicesContext';
import type { SitePreferences, OptionalPreferenceCategory } from '../../types/siteChoices';

type ConsentView = 'banner' | 'preferences';

const OPTIONAL_CATEGORY_IDS: OptionalPreferenceCategory[] = [
  'analytics',
  'personalization',
  'marketing',
];

const normalizeFrenchCookieAction = (label: string) =>
  label
    .replace(/\bTout accepte(?:ur)?\b/i, 'Tout accepter')
    .replace(/\bTout refuse\b/i, 'Tout refuser');

export default function PrivacyNoticePanel() {
  const { t, i18n } = useTranslation();
  const { consent, isBannerVisible, acceptAll, rejectAll, savePreferences, closePreferences } =
    useSiteChoices();
  const [view, setView] = useState<ConsentView>('banner');
  const [preferences, setPreferences] = useState<SitePreferences>(consent.preferences);
  const isFrench = i18n.language?.startsWith('fr');
  const acceptAllLabel = isFrench
    ? normalizeFrenchCookieAction(t('cookies.acceptAll'))
    : t('cookies.acceptAll');
  const rejectAllLabel = isFrench
    ? normalizeFrenchCookieAction(t('cookies.rejectAll'))
    : t('cookies.rejectAll');

  const optionalCategories = useMemo(
    () =>
      OPTIONAL_CATEGORY_IDS.map((id) => ({
        id,
        title: t(`cookies.categories.${id}.title`),
        description: t(`cookies.categories.${id}.description`),
      })),
    [t],
  );

  useEffect(() => {
    if (!isBannerVisible) return;

    setPreferences(consent.preferences);
    setView(consent.status === 'pending' ? 'banner' : 'preferences');
  }, [consent.preferences, consent.status, isBannerVisible]);

  if (!isBannerVisible) return null;

  const canClose = consent.status !== 'pending';

  const updatePreference = (category: OptionalPreferenceCategory, enabled: boolean) => {
    setPreferences((current) => ({
      ...current,
      necessary: true,
      [category]: enabled,
    }));
  };

  return (
    <div className="privacy-panel" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
      <div className="privacy-panel__panel">
        {canClose ? (
          <button
            type="button"
            className="privacy-panel__close"
            onClick={closePreferences}
            aria-label={t('cookies.closeAria')}
          >
            ×
          </button>
        ) : null}

        {view === 'banner' ? (
          <>
            <p className="privacy-panel__eyebrow">{t('cookies.eyebrow')}</p>
            <h2 id="privacy-title" className="privacy-panel__title">
              {t('cookies.title')}
            </h2>
            <p className="privacy-panel__text">{t('cookies.bannerText')}</p>

            <div className="privacy-panel__actions">
              <button type="button" className="privacy-panel__button secondary" onClick={rejectAll}>
                {rejectAllLabel}
              </button>
              <button
                type="button"
                className="privacy-panel__button ghost"
                onClick={() => setView('preferences')}
              >
                {t('cookies.customize')}
              </button>
              <button type="button" className="privacy-panel__button primary" onClick={acceptAll}>
                {acceptAllLabel}
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="privacy-panel__eyebrow">{t('cookies.preferencesCenter')}</p>
            <h2 id="privacy-title" className="privacy-panel__title">
              {t('cookies.chooseTitle')}
            </h2>
            <p className="privacy-panel__text">{t('cookies.preferencesHint')}</p>

            <div className="privacy-panel__categories">
              <div className="privacy-panel__category">
                <div>
                  <h3>{t('cookies.necessaryStrictTitle')}</h3>
                  <p>{t('cookies.necessaryStrictDesc')}</p>
                </div>
                <span className="privacy-panel__required">{t('cookies.requiredLabel')}</span>
              </div>

              {optionalCategories.map((category) => (
                <label className="privacy-panel__category" key={category.id}>
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences[category.id]}
                    onChange={(event) => updatePreference(category.id, event.target.checked)}
                  />
                </label>
              ))}
            </div>

            <div className="privacy-panel__actions">
              <button type="button" className="privacy-panel__button secondary" onClick={rejectAll}>
                {rejectAllLabel}
              </button>
              <button
                type="button"
                className="privacy-panel__button ghost"
                onClick={() => savePreferences(preferences)}
              >
                {t('cookies.save')}
              </button>
              <button type="button" className="privacy-panel__button primary" onClick={acceptAll}>
                {acceptAllLabel}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
