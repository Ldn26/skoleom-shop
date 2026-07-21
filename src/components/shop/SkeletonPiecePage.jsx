export default function SkeletonPiecePage() {
  return (
    <main className="sk-shell pt-24 pb-28">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        {/* Back link */}
        <div className="mb-8 h-4 w-24 rounded-full bg-white/[0.06] animate-pulse" />

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          {/* ── LEFT: gallery ── */}
          <div>
            {/* Main image */}
            <div
              className="relative overflow-hidden rounded-2xl bg-white/[0.04]"
              style={{ aspectRatio: '3/4' }}
            >
              {/* Shimmer sweep */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.6s infinite linear',
                }}
              />
            </div>

            {/* Thumbnails */}
            <div className="mt-3 flex gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-14 w-14 shrink-0 rounded-xl bg-white/[0.04] animate-pulse"
                  style={{ animationDelay: `${i * 80}ms` }}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: info panel ── */}
          <div className="flex flex-col gap-5 pt-2">
            {/* Eyebrow */}
            <div className="h-2.5 w-20 rounded-full bg-white/[0.06] animate-pulse" />

            {/* Title */}
            <div className="space-y-2">
              <div className="h-9 w-4/5 rounded-lg bg-white/[0.07] animate-pulse" />
              <div className="h-9 w-3/5 rounded-lg bg-white/[0.05] animate-pulse" />
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.05]" />

            {/* Description lines */}
            <div className="space-y-2.5">
              <div className="h-3 w-full rounded bg-white/[0.05] animate-pulse" />
              <div className="h-3 w-11/12 rounded bg-white/[0.05] animate-pulse" />
              <div className="h-3 w-4/5 rounded bg-white/[0.05] animate-pulse" />
              <div className="h-3 w-2/3 rounded bg-white/[0.04] animate-pulse" />
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.05]" />

            {/* Price */}
            <div className="space-y-1.5">
              <div className="h-2.5 w-10 rounded-full bg-white/[0.05] animate-pulse" />
              <div className="h-12 w-32 rounded-lg bg-white/[0.07] animate-pulse" />
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.05]" />

            {/* Attribute label */}
            <div className="h-2.5 w-14 rounded-full bg-white/[0.05] animate-pulse" />

            {/* Size options */}
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-9 w-12 rounded-[9px] bg-white/[0.05] animate-pulse"
                  style={{ animationDelay: `${i * 60}ms` }}
                />
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-4 flex flex-col gap-2.5">
              <div className="h-12 w-full rounded-full bg-white/[0.08] animate-pulse" />
              <div className="h-12 w-full rounded-full bg-white/[0.04] animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
      `}</style>
    </main>
  );
}