import type { ReactElement, SVGProps } from 'react';

/**
 * Skoleom Universe — Official Platform Logos (SVG, inline)
 * Vector logos avec couleurs officielles de chaque marque.
 * Chaque icône accepte `size` (px) et `className`.
 */

type IconProps = {
  size?: number;
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, 'size'>;

const base = (size: number) => ({
  width: size,
  height: size,
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': 'true' as const,
  focusable: 'false' as const,
});

export const YouTubeIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 180" {...base(size)} className={className} {...rest}>
    <path
      fill="#FF0000"
      d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.821-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
    />
    <path fill="#FFF" d="m102.421 128.06 66.328-38.418-66.328-38.418z" />
  </svg>
);

export const NetflixIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <rect width="256" height="256" rx="48" fill="#000" />
    <path
      fill="#E50914"
      d="M105.062 233.591V22.41h35.875L171.4 156.97V22.41h28.7v211.18l-31.293-2.04L138.95 89.27v144.32z"
    />
  </svg>
);

export const FacebookIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <path
      fill="#1877F2"
      d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.557 108-126.445"
    />
    <path
      fill="#FFF"
      d="m177.825 165 5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.348 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
    />
  </svg>
);

export const InstagramIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <defs>
      <radialGradient id="ig-grad" cx="0.3" cy="1.1" r="1.4">
        <stop offset="0" stopColor="#fdf497" />
        <stop offset="0.1" stopColor="#fdf497" />
        <stop offset="0.3" stopColor="#fd5949" />
        <stop offset="0.55" stopColor="#d6249f" />
        <stop offset="1" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="256" height="256" rx="60" fill="url(#ig-grad)" />
    <rect
      x="56"
      y="56"
      width="144"
      height="144"
      rx="40"
      fill="none"
      stroke="#fff"
      strokeWidth="14"
    />
    <circle cx="128" cy="128" r="34" fill="none" stroke="#fff" strokeWidth="14" />
    <circle cx="180" cy="76" r="8" fill="#fff" />
  </svg>
);

export const TikTokIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <rect width="256" height="256" rx="48" fill="#000" />
    {/* Cyan offset shadow */}
    <path
      fill="#25F4EE"
      d="M186 88.4c-14.3-3.1-25.6-13.4-30.7-26.9h-19.6v97.4c0 12.4-10.1 22.5-22.5 22.5s-22.5-10.1-22.5-22.5 10.1-22.5 22.5-22.5c2.3 0 4.5.3 6.6 1V117c-2.2-.3-4.4-.5-6.6-.5-23.7 0-43 19.3-43 43s19.3 43 43 43 43-19.3 43-43V108.9c8.6 5.9 18.9 9.5 30 9.5z"
    />
    {/* Pink offset shadow */}
    <path
      fill="#FE2C55"
      d="M193 81.4c-14.3-3.1-25.6-13.4-30.7-26.9h-19.6v97.4c0 12.4-10.1 22.5-22.5 22.5s-22.5-10.1-22.5-22.5 10.1-22.5 22.5-22.5c2.3 0 4.5.3 6.6 1V110c-2.2-.3-4.4-.5-6.6-.5-23.7 0-43 19.3-43 43s19.3 43 43 43 43-19.3 43-43V101.9c8.6 5.9 18.9 9.5 30 9.5z"
    />
    {/* Main white note */}
    <path
      fill="#FFF"
      d="M189.5 84.9c-14.3-3.1-25.6-13.4-30.7-26.9h-19.6v97.4c0 12.4-10.1 22.5-22.5 22.5s-22.5-10.1-22.5-22.5 10.1-22.5 22.5-22.5c2.3 0 4.5.3 6.6 1v-20.4c-2.2-.3-4.4-.5-6.6-.5-23.7 0-43 19.3-43 43s19.3 43 43 43 43-19.3 43-43v-50.6c8.6 5.9 18.9 9.5 30 9.5z"
    />
  </svg>
);

export const SpotifyIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <circle cx="128" cy="128" r="128" fill="#1ED760" />
    <path
      fill="#000"
      d="M186.6 174c-2.3 3.7-7.2 4.9-11 2.6-30-18.4-67.9-22.6-112.5-12.4-4.3 1-8.5-1.7-9.5-6-1-4.3 1.7-8.5 6-9.5 48.7-11.1 90.6-6.3 124.3 14.3 3.8 2.3 5 7.3 2.7 11M201.6 144c-2.9 4.7-9 6.1-13.6 3.2-34.4-21.2-86.8-27.3-127.4-15-5.2 1.6-10.6-1.4-12.2-6.5s1.4-10.6 6.5-12.2c46.5-14.1 104.3-7.3 143.7 16.8 4.7 2.9 6.1 9.1 3 13.7M203 113c-41.2-24.5-109.2-26.7-148.5-14.8-6.2 1.9-12.7-1.6-14.6-7.8-1.9-6.2 1.6-12.7 7.8-14.6 45.1-13.7 120.2-11 167.5 17 5.6 3.3 7.4 10.6 4.1 16.2-3.3 5.6-10.6 7.4-16.2 4.1z"
    />
  </svg>
);

export const AppleMusicIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <defs>
      <linearGradient id="am-grad" x1="128" y1="0" x2="128" y2="256" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FA233B" />
        <stop offset="1" stopColor="#FB5C74" />
      </linearGradient>
    </defs>
    <rect width="256" height="256" rx="56" fill="url(#am-grad)" />
    <path
      fill="#FFF"
      d="M178 65.7c0-3.2-.4-6.4-3.3-8.6-2.8-2.2-6.3-2-9.5-1.3-26 5.4-52 11-78 16.5-3.7.8-6.3 3.6-6.3 7.6v89.3c0 4.5-1 6.2-5.5 7.4-3.8 1-7.6 1.7-11.4 2.7-7 1.8-11.7 6-13.1 13.2-1.3 6.8 1.1 13.4 6.4 17.6 5.1 4 11 4.5 17.2 2.6 7.1-2.2 13-6.1 17.5-12 4.9-6.4 5.7-13.7 5.7-21.4V108c0-4.8 1-6.3 5.7-7.3 14.7-3.1 29.5-6.2 44.2-9.2 5.9-1.2 7.4 0 7.4 5.9v52.4c0 4.4-.9 5.9-5.1 7-3.8 1-7.7 1.7-11.5 2.7-7.5 2-12.2 6.7-13.2 14.4-1 7.4 2 13.8 8 17.5 6.1 3.8 12.6 3.6 18.9.6 8.7-4.1 13.6-11.4 14.6-20.9.4-3.7.4-7.5.4-11.2z"
    />
  </svg>
);

export const TwitterIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <rect width="256" height="256" rx="48" fill="#000" />
    <path
      fill="#FFF"
      d="M163.5 70h21.6l-47.2 54 55.6 73.5h-43.5l-34.1-44.6L77 197.5H55.4l50.5-57.8L52.5 70h44.6l30.8 40.7zm-7.6 114.6h12L93.2 82.4H80.3z"
    />
  </svg>
);

export const WikipediaIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <rect width="256" height="256" rx="48" fill="#FFF" />
    <path
      fill="#000"
      d="M223 74.2v6.4c-3.5.4-6.4 1.6-8.7 3.7-2.3 2.1-4.4 5.6-6.3 10.5L172 187h-7.4l-24.4-58-25.9 58H107L66.6 92.7c-1.8-4.3-3.7-7.2-5.7-8.7-2-1.5-5-2.5-9-3v-6.8h53.5v6.8c-5.7.3-9.5 1.1-11.4 2.4-1.9 1.3-2.9 3.1-2.9 5.4 0 1.5.5 3.5 1.5 5.9l28.3 70.6 21.4-47-3.1-7.4-9-21-2.2-5.2c-1.9-4.6-3.8-7.6-5.7-9.1-1.9-1.4-4.7-2.4-8.4-2.8v-6.6h53.3v6.8c-5.4.2-9 .8-10.8 1.9-1.8 1.1-2.8 2.9-2.8 5.4 0 1.6.5 3.7 1.5 6.2l29.6 70.7 18.4-50.1c1.6-4.2 2.4-7.5 2.4-9.8 0-7.6-5.4-12-16.2-13.2v-6.6z"
    />
  </svg>
);

export const ImdbIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 130" {...base(size)} className={className} {...rest}>
    <rect width="256" height="130" rx="14" fill="#F5C518" />
    <path
      fill="#000"
      d="M30 30h16v70H30zM55 30h22l5 40 5-40h22v70H92V51L82 100h-7L65 51v49H55zM118 30h28c8 0 12 4 12 12v46c0 8-4 12-12 12h-28zm14 12v46h6c2 0 3-1 3-3V45c0-2-1-3-3-3zM165 30h14v22c2-2 5-3 9-3 6 0 10 4 10 12v27c0 8-4 12-10 12-4 0-7-1-9-4v3h-14zm14 24v37c0 2 1 3 3 3s3-1 3-3V54c0-2-1-3-3-3s-3 1-3 3"
    />
  </svg>
);

export const SoundCloudIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <rect width="256" height="256" rx="48" fill="#FF5500" />
    {/* Waveform bars — centered group */}
    <g fill="#FFF">
      <rect x="40" y="128" width="6" height="48" rx="3" />
      <rect x="54" y="120" width="6" height="56" rx="3" />
      <rect x="68" y="108" width="6" height="68" rx="3" />
      <rect x="82" y="100" width="6" height="76" rx="3" />
      <rect x="96" y="92" width="6" height="84" rx="3" />
      <rect x="110" y="100" width="6" height="76" rx="3" />
      <rect x="124" y="88" width="6" height="88" rx="3" />
      <rect x="138" y="96" width="6" height="80" rx="3" />
    </g>
    {/* Cloud body */}
    <path
      fill="#FFF"
      d="M158 104c-3 0-6 1-9 2v70h57c14 0 25-11 25-25s-11-25-25-25c-3 0-6 .6-9 1.7-2-13.2-13.5-23.7-27-23.7-4.8 0-9.4 1.4-13 3.7v-3.7z"
    />
  </svg>
);

const DEEZER_HEART_PATH =
  'M41.0955 7.32313C41.5396 4.74914 42.1912 3.13054 42.913 3.12744H42.9146C44.2606 3.13208 45.3517 8.7454 45.3517 15.6759C45.3517 22.6063 44.259 28.2243 42.9115 28.2243C42.3591 28.2243 41.8494 27.2704 41.4389 25.6719C40.7903 31.5233 39.4443 35.5459 37.8862 35.5459C36.6806 35.5459 35.5986 33.1296 34.8722 29.3188C34.3762 36.5662 33.1279 41.708 31.6689 41.708C30.7533 41.708 29.9185 39.6705 29.3005 36.3529C28.5573 43.2014 26.8405 48 24.8382 48C22.836 48 21.1162 43.2029 20.376 36.3529C19.7625 39.6705 18.9278 41.708 18.0075 41.708C16.5486 41.708 15.3033 36.5662 14.8043 29.3188C14.0779 33.1296 12.999 35.5459 11.7903 35.5459C10.2337 35.5459 8.88621 31.5249 8.23763 25.6719C7.83017 27.2751 7.31741 28.2243 6.76497 28.2243C5.41745 28.2243 4.32478 22.6063 4.32478 15.6759C4.32478 8.7454 5.41745 3.12744 6.76497 3.12744C7.48833 3.12744 8.13538 4.75068 8.58405 7.32313C9.30283 2.88473 10.4703 0 11.7903 0C13.3576 0 14.7158 4.07975 15.3583 10.0038C15.987 5.69216 16.9408 2.94348 18.0091 2.94348C19.5061 2.94348 20.7789 8.34964 21.2505 15.8908C22.1371 12.0243 23.4205 9.59876 24.8413 9.59876C26.2621 9.59876 27.5455 12.0259 28.4306 15.8908C28.9037 8.34964 30.1749 2.94348 31.672 2.94348C32.7387 2.94348 33.691 5.69216 34.3228 10.0038C34.9637 4.07975 36.3219 0 37.8892 0C39.2047 0 40.3767 2.88628 41.0955 7.32313ZM0.837891 14.4417C0.837891 11.3436 1.45748 8.83142 2.22204 8.83142C2.9866 8.83142 3.60619 11.3436 3.60619 14.4417C3.60619 17.5397 2.9866 20.0519 2.22204 20.0519C1.45748 20.0519 0.837891 17.5397 0.837891 14.4417ZM46.0693 14.4417C46.0693 11.3436 46.6888 8.83142 47.4534 8.83142C48.218 8.83142 48.8376 11.3436 48.8376 14.4417C48.8376 17.5397 48.218 20.0519 47.4534 20.0519C46.6888 20.0519 46.0693 17.5397 46.0693 14.4417Z';

const DEEZER_WORDMARK_PATH =
  'M98.1467 30.6529H82.5411V11.6997H98.1467V16.8195H89.9008V19.0102H97.6544V23.1947H89.9008V25.5331H98.1467V30.6529ZM115.524 30.6529H99.9189V11.6997H115.524V16.8195H107.279V19.0102H115.032V23.1947H107.279V25.5331H115.524V30.6529ZM172.162 30.6529C171.099 27.7548 169.612 24.6624 167.611 21.1962C169.951 20.51 171.35 19.0348 171.35 16.7703C171.35 13.3243 168.175 11.6997 163.154 11.6997H152.815V30.6529H160.2V22.8129C161.84 25.5761 163.049 28.1835 163.843 30.6529H172.162ZM160.2 20.1671V16.8195H162.76C163.843 16.8195 164.458 17.4103 164.458 18.4933C164.458 19.5763 163.843 20.1671 162.76 20.1671H160.2ZM151.043 30.6529H135.438V11.6997H151.043V16.8195H142.797V19.0102H150.551V23.1947H142.797V25.5331H151.043V30.6529ZM117.297 16.8195H124.916C121.755 19.406 119.153 22.3356 117.149 25.5331V30.6529H133.912V25.5331H125.533C127.453 22.7398 130.136 19.9584 133.912 16.8195V11.6997H117.297V16.8195ZM61.8652 11.6999H71.3664C77.2493 11.6999 81.4091 15.6136 81.4091 21.1764C81.4091 26.7393 77.2493 30.653 71.3664 30.653H61.8652V11.6999ZM69.2496 25.5332H70.9726C72.8187 25.5332 73.8033 24.3025 73.8033 21.1764C73.8033 18.0504 72.8187 16.8197 70.9726 16.8197H69.2496V25.5332Z';

export const DeezerIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <rect width="256" height="256" rx="48" fill="#A238FF" />
    <g transform="translate(63 40) scale(2.7)" fill="#000">
      <path fillRule="evenodd" clipRule="evenodd" d={DEEZER_HEART_PATH} />
    </g>
    <g transform="translate(128 200) scale(1.38) translate(-117 -21)" fill="#000">
      <path fillRule="evenodd" clipRule="evenodd" d={DEEZER_WORDMARK_PATH} />
    </g>
  </svg>
);

export const AmazonIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <rect width="256" height="256" rx="48" fill="#232F3E" />
    {/* "amazon" wordmark — white */}
    <text
      x="128"
      y="120"
      textAnchor="middle"
      fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
      fontSize="56"
      fontWeight="700"
      fill="#FFF"
      letterSpacing="-2"
    >
      amazon
    </text>
    {/* Orange smile arrow */}
    <path
      d="M60 150 Q128 200 196 150"
      stroke="#FF9900"
      strokeWidth="9"
      fill="none"
      strokeLinecap="round"
    />
    {/* Arrow tip */}
    <path
      d="M186 142 L200 152 L189 162"
      stroke="#FF9900"
      strokeWidth="9"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PinterestIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <circle cx="128" cy="128" r="128" fill="#E60023" />
    <path
      fill="#FFF"
      d="M128 28c-55 0-100 45-100 100 0 42 26 78 63 92-1-8-2-20 0-29l13-54s-3-7-3-16c0-15 9-26 20-26 9 0 14 7 14 15 0 9-6 23-9 36-2 11 5 19 16 19 19 0 34-20 34-50 0-26-19-44-46-44-31 0-50 24-50 48 0 10 4 20 9 25 1 1 1 2 1 3l-3 12c-1 2-2 3-4 2-15-7-25-30-25-48 0-39 28-74 81-74 43 0 76 31 76 71 0 42-27 76-64 76-12 0-24-7-28-14l-8 29c-3 11-10 24-14 32 11 3 22 5 34 5 55 0 100-45 100-100S183 28 128 28"
    />
  </svg>
);

export const TwitchIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <rect width="256" height="256" rx="48" fill="#9146FF" />
    <path
      fill="#FFF"
      d="M60 56 48 86v128h40v24h24l24-24h32l48-48V56zm132 96-24 24h-40l-24 24v-24H72V72h120zM168 92h-16v48h16zM128 92h-16v48h16z"
    />
  </svg>
);

export const LinkedInIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <rect width="256" height="256" rx="40" fill="#0A66C2" />
    <path
      fill="#FFF"
      d="M82 100h32v104H82zM98 56a18 18 0 1 1 0 36 18 18 0 0 1 0-36M132 100h31v14h1c4-8 15-17 31-17 33 0 39 22 39 50v57h-32v-50c0-12 0-27-16-27s-19 13-19 26v51h-32V100z"
    />
  </svg>
);

const THREADS_GLYPH_PATH =
  'M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z';

export const ThreadsIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <rect width="256" height="256" rx="48" fill="#000" />
    <g transform="translate(32 32)">
      <path fill="#FFF" d={THREADS_GLYPH_PATH} />
    </g>
  </svg>
);

export const GoogleImagesIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <rect width="256" height="256" rx="48" fill="#FFF" />
    <path
      fill="#4285F4"
      d="M225 131c0-7-1-14-2-20H128v38h54c-2 13-9 23-20 30l32 25c19-17 30-43 30-73"
    />
    <path
      fill="#34A853"
      d="M128 230c27 0 49-9 65-24l-32-25c-9 6-20 9-33 9-25 0-46-17-54-40H42v25c16 32 49 55 86 55"
    />
    <path fill="#FBBC04" d="M74 150c-2-6-3-13-3-20s1-14 3-20v-25H42a102 102 0 0 0 0 90l32-25" />
    <path
      fill="#EA4335"
      d="M128 70c14 0 27 5 37 14l27-27C176 41 154 32 128 32c-37 0-70 22-86 55l32 25c8-23 29-42 54-42"
    />
  </svg>
);

export const GeniusIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <rect width="256" height="256" rx="48" fill="#FFFF64" />
    <g transform="translate(44 44) scale(7)">
      <path
        fill="#000"
        d="M0 6.827c0 2.164.79 4.133 2.167 5.51.393.393.786.59 1.18.983h.195c.197 0 .196-.196.196-.196-.393-.787-.588-1.77-.588-2.754 0-2.164.982-4.329 2.36-5.706V1.518c0-.197-.197-.196-.197-.196h-2.95C.789 2.896 0 4.664 0 6.827zm2.559 12.59c2.36 2.164 5.31 3.343 8.851 3.343 7.082 0 12.59-5.702 12.59-12.586 0-3.344-1.378-6.492-3.542-8.656h-.196c0-.197-.196 0-.196 0 .59 1.574.983 3.147.983 4.918 0 7.278-5.902 13.373-13.377 13.373-1.77 0-3.344-.393-4.917-.983-.197 0-.196.199-.196.395zm5.9-11.998c0 .59.395 1.178.788 1.571h.392c3.54 1.18 4.722-.193 4.722-1.767V5.056c0-.196.196-.196.196-.196h.787c.197 0 .196-.196.196-.196-.196-1.18-.784-2.358-1.571-3.342h-2.363c0-.197-.196 0-.196.196v2.95c0 1.574-1.18 2.754-2.754 2.951 0-.197-.196 0-.196 0z"
      />
    </g>
  </svg>
);

export const GlobeIcon = ({ size = 48, className = '', ...rest }: IconProps) => (
  <svg viewBox="0 0 256 256" {...base(size)} className={className} {...rest}>
    <rect width="256" height="256" rx="48" fill="#1a1a1a" />
    <circle cx="128" cy="128" r="68" fill="none" stroke="#0164f8" strokeWidth="6" />
    <path
      d="M128 60c20 18 30 42 30 68s-10 50-30 68c-20-18-30-42-30-68s10-50 30-68M62 128h132M70 95h116M70 161h116"
      fill="none"
      stroke="#0164f8"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

const ICON_MAP: Record<string, (p: IconProps) => ReactElement> = {
  youtube: YouTubeIcon,
  netflix: NetflixIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  spotify: SpotifyIcon,
  applemusic: AppleMusicIcon,
  twitter: TwitterIcon,
  wikipedia: WikipediaIcon,
  imdb: ImdbIcon,
  soundcloud: SoundCloudIcon,
  deezer: DeezerIcon,
  amazon: AmazonIcon,
  pinterest: PinterestIcon,
  twitch: TwitchIcon,
  linkedin: LinkedInIcon,
  threads: ThreadsIcon,
  googleimages: GoogleImagesIcon,
  genius: GeniusIcon,
  globe: GlobeIcon,
};

interface PlatformIconProps {
  platform: string;
  size?: number;
  className?: string;
}

/**
 * Composant unifié rendant le SVG officiel de la plateforme demandée.
 * Fallback vers GlobeIcon si plateforme inconnue.
 */
export function PlatformIcon({ platform = '', size = 48, className = '' }: PlatformIconProps) {
  const key = platform.toLowerCase().replace(/[^a-z]/g, '');
  const Icon = ICON_MAP[key] ?? GlobeIcon;
  return <Icon size={size} className={className} aria-label={`${platform} logo`} />;
}
