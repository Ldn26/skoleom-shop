export default function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 animate-pulse">
      <div className="h-64 w-full bg-white/[0.06]" />
      <div className="p-5 space-y-3">
        <div className="h-2.5 w-16 rounded-full bg-white/[0.06]" />
        <div className="h-4 w-3/4 rounded-full bg-white/[0.08]" />
        <div className="flex items-center justify-between pt-2">
          <div className="h-5 w-20 rounded-full bg-white/[0.08]" />
          <div className="h-5 w-16 rounded-full bg-white/[0.05]" />
        </div>
        <div className="h-10 w-full rounded-xl bg-white/[0.06]" />
      </div>
    </div>
  );
}