import { languageOptions, type LanguageCode } from '../locales/types';

/** Identifiants de zone géographique (affichage + détection IP). */
export const LANGUAGE_ZONE_IDS = [
  'international',
  'europe',
  'americas',
  'mena',
  'asiaPacific',
  'africa',
] as const;

export type LanguageZoneId = (typeof LANGUAGE_ZONE_IDS)[number];

/** Pays ISO → langue, regroupés par zone. */
export const COUNTRIES_BY_ZONE: Record<LanguageZoneId, Record<string, LanguageCode>> = {
  international: {
    US: 'en',
    CA: 'en',
    GB: 'en',
    IE: 'en',
    AU: 'en',
    NZ: 'en',
    ZA: 'en',
    NG: 'en',
    PH: 'en',
    MY: 'en',
    SG: 'en',
    SE: 'en',
    NO: 'en',
    DK: 'en',
    FI: 'en',
    IS: 'en',
    PL: 'en',
    CZ: 'en',
    SK: 'en',
    HU: 'en',
    RO: 'en',
    BG: 'en',
    HR: 'en',
    SI: 'en',
    EE: 'en',
    LV: 'en',
    LT: 'en',
    GR: 'en',
    CY: 'en',
    MT: 'en',
  },
  europe: {
    FR: 'fr',
    MC: 'fr',
    LU: 'fr',
    CH: 'fr',
    BE: 'nl',
    NL: 'nl',
    DE: 'de',
    AT: 'de',
    LI: 'de',
    IT: 'it',
    SM: 'it',
    VA: 'it',
    ES: 'es',
    PT: 'pt',
    RU: 'ru',
    BY: 'ru',
    KZ: 'ru',
    KG: 'ru',
    UA: 'ru',
    AD: 'es',
    GI: 'en',
  },
  americas: {
    MX: 'es',
    AR: 'es',
    CO: 'es',
    PE: 'es',
    VE: 'es',
    CL: 'es',
    EC: 'es',
    GT: 'es',
    CU: 'es',
    BO: 'es',
    DO: 'es',
    HN: 'es',
    PY: 'es',
    SV: 'es',
    NI: 'es',
    CR: 'es',
    UY: 'es',
    PA: 'es',
    GQ: 'es',
    PR: 'es',
    BR: 'pt',
    TL: 'pt',
  },
  mena: {
    SA: 'ar',
    AE: 'ar',
    EG: 'ar',
    DZ: 'ar',
    MA: 'ar',
    SD: 'ar',
    IQ: 'ar',
    YE: 'ar',
    SY: 'ar',
    TN: 'ar',
    JO: 'ar',
    LY: 'ar',
    LB: 'ar',
    OM: 'ar',
    KW: 'ar',
    QA: 'ar',
    BH: 'ar',
    MR: 'ar',
    PS: 'ar',
    IL: 'en',
    TR: 'en',
  },
  asiaPacific: {
    IN: 'hi',
    CN: 'zh',
    TW: 'zh',
    HK: 'zh',
    ID: 'id',
    JP: 'en',
    KR: 'en',
    TH: 'en',
    VN: 'en',
    PK: 'en',
    BD: 'en',
    LK: 'en',
    NP: 'en',
  },
  africa: {
    KE: 'sw',
    TZ: 'sw',
    UG: 'sw',
    AO: 'pt',
    MZ: 'pt',
    CV: 'pt',
    GW: 'pt',
    SN: 'fr',
    CI: 'fr',
    ML: 'fr',
    BF: 'fr',
    NE: 'fr',
    TG: 'fr',
    BJ: 'fr',
    CM: 'fr',
    CD: 'fr',
    MG: 'fr',
    RW: 'fr',
    BI: 'fr',
    GA: 'fr',
    CG: 'fr',
    DJ: 'fr',
    KM: 'fr',
    SC: 'fr',
    MU: 'fr',
    ET: 'en',
    GH: 'en',
  },
};

/** Fusion plate pour la détection IP (priorité : zone déclarée plus bas dans l’objet si doublon — ordre des zones). */
const countryToLanguageMap: Record<string, LanguageCode> = {};
for (const zoneId of LANGUAGE_ZONE_IDS) {
  Object.assign(countryToLanguageMap, COUNTRIES_BY_ZONE[zoneId]);
}

export function mapCountryToLanguage(countryCode: string): LanguageCode {
  const code = countryCode.toUpperCase();
  return countryToLanguageMap[code] ?? 'en';
}

export function getZoneForCountry(countryCode: string): LanguageZoneId | null {
  const code = countryCode.toUpperCase();
  for (const zoneId of LANGUAGE_ZONE_IDS) {
    if (code in COUNTRIES_BY_ZONE[zoneId]) return zoneId;
  }
  return null;
}

/** Langues affichées dans chaque zone du sélecteur (sans doublon entre zones). */
export const LANGUAGE_CODES_BY_ZONE: Record<LanguageZoneId, readonly LanguageCode[]> = {
  international: ['en'],
  europe: ['fr', 'de', 'it', 'nl', 'ru'],
  americas: ['es', 'pt'],
  mena: ['ar'],
  asiaPacific: ['zh', 'hi', 'id'],
  africa: ['sw'],
};

const optionByCode = new Map(languageOptions.map((o) => [o.code, o]));

export type LanguageOption = (typeof languageOptions)[number];

export type LanguageZoneGroup = {
  id: LanguageZoneId;
  languages: LanguageOption[];
};

/** Groupes pour le menu langue (header). */
export function getLanguageZoneGroups(): LanguageZoneGroup[] {
  return LANGUAGE_ZONE_IDS.map((id) => ({
    id,
    languages: LANGUAGE_CODES_BY_ZONE[id]
      .map((code) => optionByCode.get(code))
      .filter((o): o is (typeof languageOptions)[number] => Boolean(o)),
  })).filter((group) => group.languages.length > 0);
}
