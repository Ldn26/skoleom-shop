/** Logos navigateurs / plateformes (SVG officiels dans public/icons/browsers). */

export type BrowserBrandIconId =
  | 'chrome'
  | 'firefox'
  | 'edge'
  | 'brave'
  | 'opera'
  | 'safari'
  | 'ios'
  | 'android'
  | 'token';

const BRAND_SRC: Record<Exclude<BrowserBrandIconId, 'token'>, string> = {
  chrome: '/icons/browsers/chrome.svg',
  firefox: '/icons/browsers/firefox.svg',
  edge: '/icons/browsers/edge.svg',
  brave: '/icons/browsers/brave.svg',
  opera: '/icons/browsers/opera.svg',
  safari: '/icons/browsers/safari.svg',
  ios: '/icons/browsers/apple.svg',
  android: '/icons/browsers/android.svg',
};

interface BrowserBrandIconProps {
  icon: BrowserBrandIconId;
  className?: string;
}

export function BrowserBrandIcon({ icon, className = 'h-5 w-5 shrink-0' }: BrowserBrandIconProps) {
  if (icon === 'token') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="#FF6B35"
          fillOpacity="0.25"
          stroke="#FF6B35"
          strokeWidth="1.5"
        />
        <path d="M12 7v10M9 10h6M9 14h6" stroke="#FF6B35" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <img
      src={BRAND_SRC[icon]}
      alt=""
      width={20}
      height={20}
      className={className}
      decoding="async"
      draggable={false}
    />
  );
}
