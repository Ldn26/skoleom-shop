import { useRef } from 'react';
import {
  Apple,
  Download,
  Eye,
  Gamepad2,
  Gift,
  Globe,
  Headphones,
  Laptop,
  Play,
  ShoppingBag,
  Smartphone,
  Tv,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAutoMarquee } from '../../hooks/useAutoMarquee';

const CARD_CONFIG = [
  { id: 'mobile', icon: Smartphone, buttons: ['Apple Store', 'Google Play'] },
  { id: 'tv', icon: Tv, buttons: ['Apple TV', 'Android TV'] },
  { id: 'rewards', icon: ShoppingBag, buttons: ['Découvrir', 'Offres'] },
  { id: 'extension', icon: Download, buttons: ['Chrome', 'Safari'] },
  { id: 'audio', icon: Headphones, buttons: ['Spotify', 'Apple Music'] },
  { id: 'gaming', icon: Gamepad2, buttons: ['Console', 'PC'] },
] as const;

function ActionCardButton({ label }: { label: string }) {
  const Icon = label.includes('Apple')
    ? Apple
    : label === 'Google Play' || label === 'Spotify'
      ? Play
      : label === 'Chrome' || label === 'Safari'
        ? Globe
        : label === 'Découvrir'
          ? Eye
          : label === 'Offres'
            ? Gift
            : label === 'Console'
              ? Gamepad2
              : label === 'PC'
                ? Laptop
                : label.includes('TV')
                  ? Tv
                  : Globe;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      {label}
    </span>
  );
}

/** Carrousel « Découvrez l'univers Skoleom » — port v2. */
export default function SkoleomPageActionCards() {
  const { t } = useTranslation();
  const scrollerRef = useRef<HTMLDivElement>(null);
  useAutoMarquee(scrollerRef, { speedPxPerFrame: 0.35 });

  const track = [...CARD_CONFIG, ...CARD_CONFIG];

  return (
    <section className="relative my-8 w-full">
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-white">
        {t('skoleomPage.actionCards.sectionBefore')}
        <span className="univ-page-text-gradient">
          {t('skoleomPage.actionCards.sectionHighlight')}
        </span>
      </h2>

      <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden">
        <div
          ref={scrollerRef}
          className="x-scroll-subtle overflow-x-auto pb-2 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max gap-4 px-4 py-2 sm:px-6 lg:px-10">
            {track.map((card, index) => {
              const Icon = card.icon;
              const title = t(`skoleomPage.actionCards.${card.id}.title`);
              const description = t(`skoleomPage.actionCards.${card.id}.description`);
              return (
                <article
                  key={`${card.id}-${index}`}
                  className="univ-page-glass-panel w-[min(82vw,280px)] shrink-0 rounded-2xl p-4 transition duration-300 hover:border-[#0164f8]/30 hover:shadow-[0_10px_40px_-10px_rgba(1,100,248,0.4)] sm:w-[260px]"
                >
                  <div className="mb-2 flex items-center">
                    <div className="mr-3 flex shrink-0 rounded-full bg-[#0164f8]/10 p-2 ring-1 ring-[#0164f8]/20">
                      <Icon className="h-6 w-6 text-[#0164f8]" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
                  </div>
                  <p className="mb-3 text-sm leading-snug text-white/60">{description}</p>
                  <div className="flex flex-col gap-2">
                    {card.buttons.map((label) => (
                      <ActionCardButton key={label} label={label} />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
