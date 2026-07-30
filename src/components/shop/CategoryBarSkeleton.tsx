export default function CategoryBarSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="relative mx-auto w-full max-w-[1600px] px-4">
      <div className="overflow-hidden">
        <div className="flex w-max items-start gap-6 px-2 py-3">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="flex w-24 shrink-0 flex-col items-center gap-2.5 sm:w-28">
              <div className="h-24 w-24 animate-pulse rounded-full bg-white/[0.06] ring-2 ring-white/10 sm:h-28 sm:w-28" />
              <div className="h-3 w-16 animate-pulse rounded-full bg-white/[0.06]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}