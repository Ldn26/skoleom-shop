import type { PreferenceStatus, SitePreferences, StoredSiteChoices } from '../types/siteChoices';

export const SITE_CHOICES_NAME = 'skoleom_privacy_choices';
export const SITE_CHOICES_VERSION = 1;
export const SITE_CHOICES_MAX_AGE_SECONDS = 60 * 60 * 24 * 395;

export const defaultSitePreferences: SitePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  personalization: false,
};

export const allAcceptedSitePreferences: SitePreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
  personalization: true,
};

export function createStoredChoices(
  status: PreferenceStatus,
  preferences: SitePreferences,
): StoredSiteChoices {
  return {
    version: SITE_CHOICES_VERSION,
    status,
    preferences: normalizePreferences(preferences),
    updatedAt: new Date().toISOString(),
  };
}

export function createDefaultChoices(): StoredSiteChoices {
  return createStoredChoices('pending', defaultSitePreferences);
}

export function createRejectedChoices(): StoredSiteChoices {
  return createStoredChoices('rejected', defaultSitePreferences);
}

export function createAcceptedChoices(): StoredSiteChoices {
  return createStoredChoices('accepted', allAcceptedSitePreferences);
}

export function readStoredChoices(): StoredSiteChoices {
  if (typeof document === 'undefined') {
    return createDefaultChoices();
  }

  const rawValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${SITE_CHOICES_NAME}=`))
    ?.split('=')
    .slice(1)
    .join('=');

  if (!rawValue) {
    return createDefaultChoices();
  }

  try {
    const parsed = JSON.parse(decodeURIComponent(rawValue)) as Partial<StoredSiteChoices>;

    if (!isValidStoredChoices(parsed)) {
      return createDefaultChoices();
    }

    return {
      version: SITE_CHOICES_VERSION,
      status: parsed.status,
      preferences: normalizePreferences(parsed.preferences),
      updatedAt: parsed.updatedAt,
    };
  } catch {
    return createDefaultChoices();
  }
}

export function writeStoredChoices(consent: StoredSiteChoices) {
  if (typeof document === 'undefined') return;

  const value = encodeURIComponent(JSON.stringify(consent));
  document.cookie = [
    `${SITE_CHOICES_NAME}=${value}`,
    'Path=/',
    `Max-Age=${SITE_CHOICES_MAX_AGE_SECONDS}`,
    'SameSite=Lax',
  ].join('; ');
}

function normalizePreferences(preferences: Partial<SitePreferences> | undefined): SitePreferences {
  return {
    necessary: true,
    analytics: Boolean(preferences?.analytics),
    marketing: Boolean(preferences?.marketing),
    personalization: Boolean(preferences?.personalization),
  };
}

function isValidStoredChoices(value: Partial<StoredSiteChoices>): value is StoredSiteChoices {
  return (
    value.version === SITE_CHOICES_VERSION &&
    typeof value.updatedAt === 'string' &&
    ['pending', 'accepted', 'rejected', 'customized'].includes(String(value.status)) &&
    typeof value.preferences === 'object' &&
    value.preferences !== null
  );
}
