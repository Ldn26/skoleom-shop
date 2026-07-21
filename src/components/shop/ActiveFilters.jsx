function Chip({ label, onRemove }) {
  return (
    <button
      onClick={onRemove}
      className="group flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-lime-400/50 hover:text-lime-300"
    >
      {label}
      <span className="text-zinc-500 transition group-hover:text-lime-400">✕</span>
    </button>
  );
}

export default function ActiveFilters({ chips, onClearAll }) {
  if (!chips.length) return null;

  return (
    <div className="mb-5 flex flex-wrap items-center gap-2">
      {chips.map((c) => (
        <Chip key={c.key} label={c.label} onRemove={c.onRemove} />
      ))}
      <button
        onClick={onClearAll}
        className="ml-1 text-xs font-semibold text-zinc-500 underline-offset-4 transition hover:text-lime-400 hover:underline"
      >
        Tout effacer
      </button>
    </div>
  );
}