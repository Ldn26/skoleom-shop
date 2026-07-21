import { Link } from 'react-router-dom';

export interface NewsPosterCardProps {
  posterSrc: string;
  platformIconSrc: string;
  platformLabel: string;
  programSummary: string;
  programDescription: string;
  to?: string;
  className?: string;
}

/** Carte affiche type nouveautés : zoom image + infos au survol (comme la home). */
export default function NewsPosterCard({
  posterSrc,
  platformIconSrc,
  platformLabel,
  programSummary,
  programDescription,
  to = '/content',
  className = '',
}: NewsPosterCardProps) {
  return (
    <Link
      to={to}
      className={`group block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${className}`.trim()}
      aria-label={`${programSummary} — ${platformLabel}`}
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
        <img
          src={posterSrc}
          alt=""
          className="absolute inset-0 size-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
        />
        <img
          src={platformIconSrc}
          alt={platformLabel}
          className="absolute left-4 top-4 z-20 h-auto max-h-11 w-auto max-w-[120px] origin-top-left scale-100 object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:group-hover:scale-100"
        />

        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end">
          <div
            className="absolute inset-x-0 bottom-0 top-[42%] z-0 rounded-b-2xl rounded-t-2xl opacity-0 transition-opacity duration-500 ease-out motion-reduce:transition-none group-hover:opacity-100 motion-reduce:opacity-100"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.88) 28%, rgba(0,0,0,0.62) 48%, rgba(0,0,0,0.28) 70%, rgba(0,0,0,0.06) 88%, transparent 100%)',
            }}
            aria-hidden
          />

          <div className="relative z-10 px-4 pb-4 pt-24">
            <div className="flex translate-y-11 flex-col gap-2 transition-transform duration-500 ease-out motion-reduce:translate-y-0 group-hover:-translate-y-7">
              <div className="flex min-h-[2.4em] items-end">
                <p className="font-sans text-sm font-bold uppercase leading-[1.05] tracking-[0.18em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                  {programSummary}
                </p>
              </div>
              <p className="nouveautes-card-desc max-h-0 overflow-hidden overscroll-contain font-sans text-[13px] font-normal leading-relaxed text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.92)] opacity-0 translate-y-3 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 [-webkit-overflow-scrolling:touch] group-hover:max-h-[11rem] group-hover:overflow-y-auto group-hover:opacity-100 group-hover:translate-y-0">
                {programDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
