import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useSiteChoices } from '../../context/SiteChoicesContext';

interface PrivacySettingsButtonProps {
  children?: ReactNode;
  className?: string;
}

export default function PrivacySettingsButton({ children, className }: PrivacySettingsButtonProps) {
  const { t } = useTranslation();
  const { openPreferences } = useSiteChoices();

  return (
    <button
      type="button"
      className={className || 'privacy-settings-button'}
      onClick={openPreferences}
    >
      {children ?? t('cookies.preferencesTitle')}
    </button>
  );
}
