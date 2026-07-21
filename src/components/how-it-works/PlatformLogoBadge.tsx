import type { SkoleomPagePlatform } from '../../data/skoleomPagePlatforms';
import ModernPlatformLogo from './ModernPlatformLogo';

interface PlatformLogoBadgeProps {
  platform: SkoleomPagePlatform;
  compact?: boolean;
}

/** Logo plateforme pour cartes et filtres Skoleom Page. */
export default function PlatformLogoBadge({ platform, compact = false }: PlatformLogoBadgeProps) {
  const size = compact ? 18 : 72;

  return (
    <div
      className="relative mx-auto flex shrink-0 items-center justify-center"
      style={{ width: compact ? 24 : 88, height: compact ? 24 : 88 }}
    >
      <ModernPlatformLogo platform={platform.logoKey} size={size} />
    </div>
  );
}
