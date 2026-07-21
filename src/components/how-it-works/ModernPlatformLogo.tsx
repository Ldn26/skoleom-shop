import { getPlatformLogoSrc } from '../../data/platformLogos';
import { PlatformIcon } from './PlatformSvg';

interface ModernPlatformLogoProps {
  platform: string;
  size?: number;
  className?: string;
}

/** Logo plateforme : Simple Icons (`/logo/platforms`) ou SVG marque inline (grand format). */
export default function ModernPlatformLogo({
  platform = '',
  size = 40,
  className = '',
}: ModernPlatformLogoProps) {
  const src = getPlatformLogoSrc(platform);

  return (
    <span
      className={`grid shrink-0 place-items-center ${className}`}
      style={{ width: size, height: size, lineHeight: 0 }}
      aria-hidden
    >
      {src ? (
        <img
          src={src}
          alt=""
          width={size}
          height={size}
          className="h-full w-full object-contain"
          decoding="async"
          draggable={false}
        />
      ) : (
        <PlatformIcon platform={platform} size={size} />
      )}
    </span>
  );
}
