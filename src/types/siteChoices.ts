export type PreferenceCategory = 'necessary' | 'analytics' | 'marketing' | 'personalization';

export type OptionalPreferenceCategory = Exclude<PreferenceCategory, 'necessary'>;

export type PreferenceStatus = 'pending' | 'accepted' | 'rejected' | 'customized';

export interface SitePreferences {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

export interface StoredSiteChoices {
  version: number;
  status: PreferenceStatus;
  preferences: SitePreferences;
  updatedAt: string;
}

export interface SiteChoicesContextValue {
  consent: StoredSiteChoices;
  isBannerVisible: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (preferences: SitePreferences) => void;
  hasConsentFor: (category: OptionalPreferenceCategory) => boolean;
}
