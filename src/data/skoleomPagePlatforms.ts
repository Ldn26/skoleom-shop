/**
 * Plateformes Skoleom Page — alignées sur skoleom-page-v2 (20 plateformes).
 */

import { LOGOS } from '../constants/logos';

export const SKOLEOM_PAGE_LOGO_SRC = `${LOGOS.skoleomPage}?v=2`;

export const SKOLEOM_PAGE_DEFAULT_QUERY = 'beyoncé';

export interface SkoleomPagePlatform {
  readonly id: string;
  readonly name: string;
  readonly logoKey: string;
  readonly getLink: (query: string) => string;
}

export const SKOLEOM_PAGE_PLATFORMS: readonly SkoleomPagePlatform[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    logoKey: 'youtube',
    getLink: (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`,
  },
  {
    id: 'netflix',
    name: 'Netflix',
    logoKey: 'netflix',
    getLink: (q) => `https://www.netflix.com/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    logoKey: 'facebook',
    getLink: (q) => `https://www.facebook.com/search/top?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    logoKey: 'instagram',
    getLink: (q) =>
      `https://www.instagram.com/${encodeURIComponent(q.toLowerCase().replace(/ /g, ''))}`,
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    logoKey: 'tiktok',
    getLink: (q) => `https://www.tiktok.com/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'spotify',
    name: 'Spotify',
    logoKey: 'spotify',
    getLink: (q) => `https://open.spotify.com/search/${encodeURIComponent(q)}`,
  },
  {
    id: 'apple-music',
    name: 'Apple Music',
    logoKey: 'applemusic',
    getLink: (q) => `https://music.apple.com/search?term=${encodeURIComponent(q)}`,
  },
  {
    id: 'twitter',
    name: 'Twitter/X',
    logoKey: 'twitter',
    getLink: (q) => `https://x.com/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'wikipedia',
    name: 'Wikipedia',
    logoKey: 'wikipedia',
    getLink: (q) => `https://en.wikipedia.org/wiki/${encodeURIComponent(q.replace(/ /g, '_'))}`,
  },
  {
    id: 'imdb',
    name: 'IMDb',
    logoKey: 'imdb',
    getLink: (q) => `https://www.imdb.com/find?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'soundcloud',
    name: 'SoundCloud',
    logoKey: 'soundcloud',
    getLink: (q) => `https://soundcloud.com/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'deezer',
    name: 'Deezer',
    logoKey: 'deezer',
    getLink: (q) => `https://www.deezer.com/search/${encodeURIComponent(q)}`,
  },
  {
    id: 'amazon',
    name: 'Amazon',
    logoKey: 'amazon',
    getLink: (q) => `https://www.amazon.com/s?k=${encodeURIComponent(q)}`,
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    logoKey: 'pinterest',
    getLink: (q) => `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'twitch',
    name: 'Twitch',
    logoKey: 'twitch',
    getLink: (q) => `https://www.twitch.tv/search?term=${encodeURIComponent(q)}`,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    logoKey: 'linkedin',
    getLink: (q) =>
      `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(q)}`,
  },
  {
    id: 'threads',
    name: 'Threads',
    logoKey: 'threads',
    getLink: (q) => `https://www.threads.net/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'google-images',
    name: 'Google Images',
    logoKey: 'googleimages',
    getLink: (q) => `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(q)}`,
  },
  {
    id: 'genius',
    name: 'Genius',
    logoKey: 'genius',
    getLink: (q) => `https://genius.com/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'official-site',
    name: 'Official Site',
    logoKey: 'globe',
    getLink: (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}+official+website`,
  },
] as const;
