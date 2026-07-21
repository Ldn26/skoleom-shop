/**
 * Registre des plateformes de streaming.
 * - id : identifiant TMDB « watch provider » (région FR) — sert au discover.
 * - bg / fg : couleurs du badge (marque).
 * - homepage : site officiel (cible de la redirection).
 */
export interface StreamingPlatform {
  key: string;
  tmdbId: number;
  label: string;
  bg: string;
  fg: string;
  homepage: string;
}

export const STREAMING_PLATFORMS: StreamingPlatform[] = [
  {
    key: 'netflix',
    tmdbId: 8,
    label: 'Netflix',
    bg: '#E50914',
    fg: '#ffffff',
    homepage: 'https://www.netflix.com',
  },
  {
    key: 'prime',
    tmdbId: 119,
    label: 'Prime Video',
    bg: '#1399FF',
    fg: '#ffffff',
    homepage: 'https://www.primevideo.com',
  },
  {
    key: 'disney',
    tmdbId: 337,
    label: 'Disney+',
    bg: '#0E2A8C',
    fg: '#ffffff',
    homepage: 'https://www.disneyplus.com',
  },
  {
    key: 'appletv',
    tmdbId: 350,
    label: 'Apple TV+',
    bg: '#000000',
    fg: '#ffffff',
    homepage: 'https://tv.apple.com',
  },
  {
    key: 'max',
    tmdbId: 1899,
    label: 'Max',
    bg: '#0019FF',
    fg: '#ffffff',
    homepage: 'https://www.max.com',
  },
  {
    key: 'paramount',
    tmdbId: 531,
    label: 'Paramount+',
    bg: '#0064FF',
    fg: '#ffffff',
    homepage: 'https://www.paramountplus.com',
  },
  {
    key: 'canal',
    tmdbId: 381,
    label: 'Canal+',
    bg: '#111111',
    fg: '#ffffff',
    homepage: 'https://www.canalplus.com',
  },
  {
    key: 'crunchyroll',
    tmdbId: 283,
    label: 'Crunchyroll',
    bg: '#F47521',
    fg: '#000000',
    homepage: 'https://www.crunchyroll.com',
  },
];

export const PLATFORM_BY_KEY: Record<string, StreamingPlatform> = STREAMING_PLATFORMS.reduce(
  (acc, p) => ({ ...acc, [p.key]: p }),
  {} as Record<string, StreamingPlatform>,
);
