/** URL réelle si la boutique est en ligne, sinon page « en construction ». */
export const UNDER_CONSTRUCTION_PATH = '/en-construction';

const BOUTIQUE_REAL_URLS: Record<string, string> = {
  sesports: 'https://sesports.skoleom.com/',
  watch: 'https://watchon.skoleom.com/',
  publishing: 'https://page.skoleom.com/',
};

export interface ResolvedBoutiqueLink {
  href: string;
  external?: boolean;
}

export function resolveBoutiqueStoreHref(id: string, fallbackHref?: string): ResolvedBoutiqueLink {
  const key = id.toLowerCase();
  const known = BOUTIQUE_REAL_URLS[key];
  if (known) return { href: known, external: true };
  if (fallbackHref && /^https?:\/\//i.test(fallbackHref)) {
    return { href: fallbackHref, external: true };
  }
  return { href: UNDER_CONSTRUCTION_PATH };
}
