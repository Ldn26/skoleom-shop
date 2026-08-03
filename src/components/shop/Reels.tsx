'use client';

import { useEffect, useState } from 'react';
import { Play, X } from 'lucide-react';

export interface Reel {
  id: string; // YouTube video id
  title: string;
  channel: string;
}

// 25 real YouTube video ids
const REELS: Reel[] = [
  { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up', channel: 'Rick Astley' },
  { id: '9bZkp7q19f0', title: 'Gangnam Style', channel: 'PSY' },
  { id: 'kJQP7kiw5Fk', title: 'Despacito', channel: 'Luis Fonsi' },
  { id: 'JGwWNGJdvx8', title: 'Shape of You', channel: 'Ed Sheeran' },
  { id: 'OPf0YbXqDm0', title: 'Uptown Funk', channel: 'Mark Ronson' },
  { id: 'fJ9rUzIMcZQ', title: 'Bohemian Rhapsody', channel: 'Queen' },
  { id: 'RgKAFK5djSk', title: 'See You Again', channel: 'Wiz Khalifa' },
  { id: 'CevxZvSJLk8', title: 'Roar', channel: 'Katy Perry' },
  { id: 'hT_nvWreIhg', title: 'Counting Stars', channel: 'OneRepublic' },
  { id: 'YQHsXMglC9A', title: 'Hello', channel: 'Adele' },
  { id: '09R8_2nJtjg', title: 'Sugar', channel: 'Maroon 5' },
  { id: 'e-ORhEE9VVg', title: 'Blank Space', channel: 'Taylor Swift' },
  { id: 'lp-EO5I60KA', title: 'Thinking Out Loud', channel: 'Ed Sheeran' },
  { id: '2Vv-BfVoq4g', title: 'Perfect', channel: 'Ed Sheeran' },
  { id: 'kffacxfA7G4', title: 'Baby', channel: 'Justin Bieber' },
  { id: 'pRpeEdMmmQ0', title: 'Shakira - Waka Waka', channel: 'Shakira' },
  { id: 'nfWlot6h_JM', title: 'Shake It Off', channel: 'Taylor Swift' },
  { id: 'PT2_F-1esPk', title: 'Closer', channel: 'The Chainsmokers' },
  { id: 'JRfuAukYTKg', title: 'Titanium', channel: 'David Guetta' },
  { id: 'ktvTqknDobU', title: 'Radioactive', channel: 'Imagine Dragons' },
  { id: 'papuvlVeZg8', title: 'Girls Like You', channel: 'Maroon 5' },
  { id: 'iywaBOMvYLI', title: 'That’s What I Like', channel: 'Bruno Mars' },
  { id: 'QcIy9NiNbmo', title: 'Bad Blood', channel: 'Taylor Swift' },
  { id: 'uelHwf8o7_U', title: 'Love The Way You Lie', channel: 'Eminem' },
  { id: '60ItHLz5WEA', title: 'Faded', channel: 'Alan Walker' },
];

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export default function Reels({ reels = REELS, speed = 55 }: { reels?: Reel[]; speed?: number }) {
  const [active, setActive] = useState<Reel | null>(null);
  const loop = [...reels, ...reels];

  return (
    <section className="relative">
      <style>{`
        @keyframes reels-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .reels-track { animation: reels-marquee ${speed}s linear infinite; will-change: transform; }
        .reels-viewport:hover .reels-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce){ .reels-track{ animation: none; } }
      `}</style>

      <div className="mb-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#a8ff35]">
          Skoleom Reels
        </p>
        <h2 className="display-text mt-1 text-3xl text-white sm:text-4xl">À NE PAS MANQUER</h2>
      </div>

      <div className="reels-viewport relative -mx-4 overflow-hidden px-4 sm:mx-0 sm:px-0 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div className="reels-track flex w-max gap-3 sm:gap-4">
          {loop.map((reel, i) => (
            <ReelCard key={`${reel.id}-${i}`} reel={reel} onOpen={() => setActive(reel)} />
          ))}
        </div>
      </div>

      {active && <ReelModal reel={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function ReelCard({ reel, onOpen }: { reel: Reel; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group relative w-[160px] shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:w-[190px] md:w-[210px]"
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-white/[0.03]">
        <img
          src={thumb(reel.id)}
          alt={reel.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />
        <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-[#a8ff35] group-hover:text-black">
          <Play className="h-5 w-5 translate-x-[1px] fill-current" />
        </span>
        <div className="absolute inset-x-0 bottom-0 p-3 text-left">
          <p className="truncate text-sm font-bold text-white">{reel.title}</p>
          <p className="truncate text-[11px] text-white/60">{reel.channel}</p>
        </div>
      </div>
    </button>
  );
}

function ReelModal({ reel, onClose }: { reel: Reel; onClose: () => void }) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/15 hover:text-white"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative aspect-[9/16] w-full max-w-[420px] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
      >
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${reel.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={reel.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
