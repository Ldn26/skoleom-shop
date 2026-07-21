/**
 * Réplique React de `shared/sk-icons.js` (window.SkIcons.wrap).
 * Même markup SVG, mêmes chemins — rendu identique aux pages statiques.
 * Remplace l'hydratation `data-sk-icon` côté React (pas de script global).
 */
import type { CSSProperties } from 'react';

type IconName =
  | 'sport'
  | 'music'
  | 'fashion'
  | 'film'
  | 'gaming'
  | 'tech'
  | 'food'
  | 'health'
  | 'travel'
  | 'home'
  | 'monetize'
  | 'boutique'
  | 'sponsor'
  | 'distrib'
  | 'ads'
  | 'api'
  | 'tarifs'
  | 'contact'
  | 'shop'
  | 'eye'
  | 'play'
  | 'close'
  | 'menu'
  | 'check'
  | 'cross'
  | 'rocket'
  | 'megaphone'
  | 'trophy'
  | 'calc'
  | 'bot'
  | 'pin'
  | 'spark'
  | 'flame'
  | 'live'
  | 'arrow'
  | 'chev'
  | 'sneaker'
  | 'cap'
  | 'shorts'
  | 'nutrition'
  | 'run'
  | 'pill'
  | 'guitar'
  | 'mic'
  | 'headset'
  | 'mouse'
  | 'keyboard'
  | 'phone'
  | 'laptop'
  | 'watch'
  | 'actor'
  | 'stadium'
  | 'event'
  | 'bolt'
  | 'warn'
  | 'chat'
  | 'chart'
  | 'target'
  | 'handshake'
  | 'dot'
  | 'chevLeft'
  | 'chevDown';

/** Corps SVG (viewBox 0 0 24 24), identiques à sk-icons.js. */
const ICONS: Record<string, (c: string) => string> = {
  sport: (c) =>
    `<circle cx="12" cy="12" r="10" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" stroke="${c}" stroke-width="1.5"/>`,
  music: (c) =>
    `<path d="M9 18V5l12-2v13" stroke="${c}" stroke-width="1.5" fill="none"/><circle cx="6" cy="18" r="3" stroke="${c}" stroke-width="1.5" fill="none"/><circle cx="18" cy="16" r="3" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  fashion: (c) =>
    `<path d="M7 7l5-4 5 4v3H7V7zM5 10h14v2l-2 10H7L5 12v-2z" stroke="${c}" stroke-width="1.5" fill="none" stroke-linejoin="round"/>`,
  film: (c) =>
    `<rect x="3" y="5" width="18" height="14" rx="2" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M7 5v14M11 5v14M15 5v14M19 5v14" stroke="${c}" stroke-width="1.5"/>`,
  gaming: (c) =>
    `<rect x="2" y="8" width="20" height="10" rx="4" stroke="${c}" stroke-width="1.5" fill="none"/><circle cx="8" cy="13" r="2" fill="${c}"/><path d="M14 11v4M12 13h4" stroke="${c}" stroke-width="1.5"/>`,
  tech: (c) =>
    `<path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.2 6L12 22l-3.8-7C6.3 13.7 5 11.5 5 9a7 7 0 017-7z" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  food: (c) =>
    `<path d="M12 2C8 6 6 9 6 13a6 6 0 1012 0c0-4-2-7-6-11z" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M12 22v-4" stroke="${c}" stroke-width="1.5"/>`,
  health: (c) =>
    `<path d="M12 21s-7-4.5-7-10a4 4 0 017-2 4 4 0 017 2c0 5.5-7 10-7 10z" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  travel: (c) =>
    `<path d="M3 10l19-7-7 19-3-8-9-4z" stroke="${c}" stroke-width="1.5" fill="none" stroke-linejoin="round"/>`,
  home: (c) =>
    `<path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  monetize: (c) =>
    `<circle cx="12" cy="12" r="9" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M12 7v10M9 10h4.5a2 2 0 010 4H9" stroke="${c}" stroke-width="1.5"/>`,
  boutique: (c) =>
    `<rect x="3" y="7" width="18" height="14" rx="2" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M3 11h18M8 7V5M16 7V5" stroke="${c}" stroke-width="1.5"/>`,
  sponsor: (c) =>
    `<path d="M12 2l2.9 6.9H22l-5.5 4.1 2.1 6.5L12 17.8 5.4 19.5l2.1-6.5L2 8.9h7.1L12 2z" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  distrib: (c) =>
    `<circle cx="12" cy="12" r="9" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M2 12h20M12 2a14 14 0 010 20M12 2a14 14 0 000 20" stroke="${c}" stroke-width="1.5"/>`,
  ads: (c) =>
    `<path d="M4 8h16v8H4z" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M9 12h6M12 9v6" stroke="${c}" stroke-width="1.5"/><path d="M20 10l2 2-2 2" stroke="${c}" stroke-width="1.5"/>`,
  api: (c) =>
    `<path d="M8 4l-4 4 4 4M16 20l4-4-4-4M14 4l-6 16" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  tarifs: (c) =>
    `<path d="M12 2l2.4 5.6H20l-4.6 3.4 1.8 5.6L12 15.6 6.8 16.6l1.8-5.6L4 7.6h5.6L12 2z" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  contact: (c) =>
    `<path d="M4 6h16v12H4z" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M4 7l8 6 8-6" stroke="${c}" stroke-width="1.5"/>`,
  shop: (c) =>
    `<path d="M6 6h15l-1.5 9H7.5L6 6zM9 6V4a3 3 0 016 0v2" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  eye: (c) =>
    `<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" stroke="${c}" stroke-width="1.5" fill="none"/><circle cx="12" cy="12" r="3" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  play: (c) => `<polygon points="10,7 17,12 10,17" fill="${c}"/>`,
  close: (c) => `<path d="M6 6l12 12M18 6L6 18" stroke="${c}" stroke-width="1.5"/>`,
  menu: (c) => `<path d="M4 7h16M4 12h16M4 17h16" stroke="${c}" stroke-width="1.5"/>`,
  check: (c) => `<path d="M5 12l5 5L20 7" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  cross: (c) => `<path d="M8 8l8 8M16 8l-8 8" stroke="${c}" stroke-width="1.5"/>`,
  rocket: (c) =>
    `<path d="M12 2c4 4 6 8 6 13a6 6 0 01-6 6 6 6 0 01-6-6c0-5 2-9 6-13z" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M9 18l-2 4 4-2M15 18l2 4-4-2" stroke="${c}" stroke-width="1.5"/>`,
  megaphone: (c) =>
    `<path d="M4 10v4h4l7 4V6L8 10H4z" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M18 9a3 3 0 010 6" stroke="${c}" stroke-width="1.5"/>`,
  trophy: (c) =>
    `<path d="M8 4h8v3a4 4 0 01-8 0V4zM6 4H4v2a2 2 0 002 2M18 4h2v2a2 2 0 01-2 2M12 11v3M9 20h6M10 14h4v6" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  calc: (c) =>
    `<rect x="4" y="3" width="16" height="18" rx="2" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M16 15h0" stroke="${c}" stroke-width="1.5"/>`,
  bot: (c) =>
    `<rect x="5" y="8" width="14" height="11" rx="3" stroke="${c}" stroke-width="1.5" fill="none"/><circle cx="9" cy="13" r="1" fill="${c}"/><circle cx="15" cy="13" r="1" fill="${c}"/><path d="M12 4v4" stroke="${c}" stroke-width="1.5"/><circle cx="12" cy="3" r="1" fill="${c}"/>`,
  pin: (c) =>
    `<path d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" stroke="${c}" stroke-width="1.5" fill="none"/><circle cx="12" cy="11" r="2" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  spark: (c) =>
    `<path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  flame: (c) =>
    `<path d="M12 22c4-3 6-6 6-10a6 6 0 00-12 0c0 4 2 7 6 10z" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M12 22c-2-2-3-4-3-6a3 3 0 016 0c0 2-1 4-3 6z" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  live: (c) => `<circle cx="12" cy="12" r="4" fill="${c}"/>`,
  arrow: (c) => `<path d="M5 12h14M13 6l6 6-6 6" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  chev: (c) => `<path d="M9 6l6 6-6 6" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  sneaker: (c) =>
    `<path d="M4 16c0-2 2-4 5-4.5l2-5h6l2.5 5c3 .5 4.5 2.5 4.5 4.5v1H4v-1z" stroke="${c}" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M8 11.5h8M6.5 16h11" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="16.5" r="1" fill="${c}"/><circle cx="16" cy="16.5" r="1" fill="${c}"/>`,
  cap: (c) =>
    `<path d="M4 14c0-1 3.5-2 8-2s8 1 8 2" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M7 14V11c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5v3" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M12 6.5V4" stroke="${c}" stroke-width="1.5"/>`,
  shorts: (c) =>
    `<path d="M8 7h8v2l-1.2 11h-2.8l-.8-7-.8 7H9.2L8 9V7z" stroke="${c}" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M8 9h8" stroke="${c}" stroke-width="1.5"/>`,
  nutrition: (c) =>
    `<path d="M10 3h4v2.5M9 7h6l-1 12H10L9 7z" stroke="${c}" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M9 10h6M10 13h4" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/>`,
  run: (c) =>
    `<circle cx="14" cy="6" r="2" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M10 22l2-8 4 2 2-6" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  pill: (c) =>
    `<rect x="6" y="9" width="12" height="6" rx="3" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M12 9v6" stroke="${c}" stroke-width="1.5"/>`,
  guitar: (c) =>
    `<path d="M9 4l6 14M15 4L9 18" stroke="${c}" stroke-width="1.5"/><circle cx="9" cy="18" r="2" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  mic: (c) =>
    `<rect x="10" y="3" width="4" height="8" rx="2" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M8 11a4 4 0 008 0M12 15v4M9 19h6" stroke="${c}" stroke-width="1.5"/>`,
  headset: (c) =>
    `<path d="M4 12v4a2 2 0 002 2h1v-8H6a2 2 0 00-2 2zM20 12v4a2 2 0 01-2 2h-1v-8h1a2 2 0 012 2z" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  mouse: (c) =>
    `<rect x="8" y="4" width="8" height="14" rx="4" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M12 7v3" stroke="${c}" stroke-width="1.5"/>`,
  keyboard: (c) =>
    `<rect x="3" y="8" width="18" height="10" rx="2" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M6 11h2M10 11h2M14 11h2M18 11h0M6 14h12" stroke="${c}" stroke-width="1.5"/>`,
  phone: (c) =>
    `<rect x="7" y="3" width="10" height="18" rx="2" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M10 18h4" stroke="${c}" stroke-width="1.5"/>`,
  laptop: (c) =>
    `<rect x="3" y="6" width="18" height="11" rx="2" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M2 20h20" stroke="${c}" stroke-width="1.5"/>`,
  watch: (c) =>
    `<rect x="7" y="6" width="10" height="12" rx="3" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M9 6V4M15 6V4M9 18v2M15 18v2" stroke="${c}" stroke-width="1.5"/>`,
  actor: (c) =>
    `<circle cx="12" cy="8" r="3" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  stadium: (c) =>
    `<ellipse cx="12" cy="14" rx="9" ry="5" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M5 14v-4c0-3 3-5 7-5s7 2 7 5v4" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  event: (c) =>
    `<path d="M4 6h16v14H4z" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M8 3v3M16 3v3M4 10h16" stroke="${c}" stroke-width="1.5"/>`,
  bolt: (c) =>
    `<path d="M13 2L5 14h6l-1 8 8-12h-6l1-8z" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  warn: (c) =>
    `<path d="M12 3L3 20h18L12 3z" stroke="${c}" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M12 9v5M12 17h.01" stroke="${c}" stroke-width="1.5"/>`,
  chat: (c) =>
    `<path d="M4 5h16v11H8l-4 4V5z" stroke="${c}" stroke-width="1.5" fill="none" stroke-linejoin="round"/>`,
  chart: (c) =>
    `<path d="M4 19V5M4 19h16M8 15v-4M12 15V9M16 15v-2" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  target: (c) =>
    `<circle cx="12" cy="12" r="8" stroke="${c}" stroke-width="1.5" fill="none"/><circle cx="12" cy="12" r="3" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="${c}" stroke-width="1.5"/>`,
  handshake: (c) =>
    `<path d="M8 11l2 2 4-4 4 4v5a2 2 0 01-2 2H8a2 2 0 01-2-2v-5l2-2z" stroke="${c}" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M6 11V8a2 2 0 012-2h1M18 11V8a2 2 0 00-2-2h-1" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  dot: (c) => `<circle cx="12" cy="12" r="3" fill="${c}"/>`,
  chevLeft: (c) => `<path d="M15 6l-6 6 6 6" stroke="${c}" stroke-width="1.5" fill="none"/>`,
  chevDown: (c) => `<path d="M6 9l6 6 6-6" stroke="${c}" stroke-width="1.5" fill="none"/>`,
};

interface SkIconProps {
  name: IconName | string;
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

/** Équivalent de `<span data-sk-icon="name" data-sk-size data-sk-color>`. */
export default function SkIcon({
  name,
  size = 20,
  color = 'currentColor',
  className,
  style,
}: SkIconProps) {
  const body = (ICONS[name] || ICONS.spark)(color);
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        flexShrink: 0,
        verticalAlign: 'middle',
        lineHeight: 0,
        ...style,
      }}
      dangerouslySetInnerHTML={{
        __html: `<svg class="sk-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true">${body}</svg>`,
      }}
    />
  );
}
