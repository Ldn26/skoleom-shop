export default function EmptyState({ title, message, actionLabel, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 py-24 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04]">
        <svg className="h-7 w-7 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      </div>
      <p className="text-lg font-semibold text-white">{title}</p>
      {message && <p className="mt-1 max-w-sm text-sm text-zinc-400">{message}</p>}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-6 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold text-black transition hover:opacity-90"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}