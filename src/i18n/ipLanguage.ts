import type { LanguageCode } from '../locales/types';
import { mapCountryToLanguage } from './languageZones';

export { mapCountryToLanguage, getZoneForCountry } from './languageZones';

export async function detectLanguageByIp(): Promise<LanguageCode | null> {
  try {
    const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
    if (res.ok) {
      const text = await res.text();
      for (const line of text.split('\n')) {
        if (line.startsWith('loc=')) {
          const countryCode = line.slice(4).trim();
          if (countryCode && countryCode !== 'XX') {
            return mapCountryToLanguage(countryCode);
          }
        }
      }
    }
  } catch {
    // fallback APIs
  }

  try {
    const res = await fetch('https://freeipapi.com/api/json');
    if (res.ok) {
      const data = await res.json();
      if (data?.countryCode) {
        return mapCountryToLanguage(data.countryCode);
      }
    }
  } catch {
    // fallback
  }

  try {
    const res = await fetch('https://ipapi.co/json/');
    if (res.ok) {
      const data = await res.json();
      if (data?.country_code) {
        return mapCountryToLanguage(data.country_code);
      }
    }
  } catch (err) {
    console.error('Failed to detect language by IP:', err);
  }

  return null;
}
