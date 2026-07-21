import { SKOLEOM_PAGE_LOGO_SRC } from '../../data/skoleomPagePlatforms';

/** En-tête marque Skoleom Page (logo + SeSync) — sous-pages. */
export default function SkoleomPageBrandHeader({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-col items-center text-center ${compact ? 'mb-4' : 'mb-6 md:mb-8'}`}>
      <img
        src={SKOLEOM_PAGE_LOGO_SRC}
        alt="Skoleom Page"
        className="mx-auto block h-auto w-[min(100%,220px)] object-contain drop-shadow-[0_8px_32px_rgba(1,100,248,0.2)]"
        width={1339}
        height={538}
        decoding="async"
      />
      <p className="mt-1 text-xs text-white/60">powered by SeSync</p>
    </div>
  );
}
