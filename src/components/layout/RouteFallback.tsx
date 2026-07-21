export default function RouteFallback() {
  return (
    <div
      className="flex min-h-[40vh] items-center justify-center pt-28"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-univ-lime border-t-transparent" />
    </div>
  );
}
