import { Pause, Play, Square, Volume2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAccessibility } from '../../context/AccessibilityContext';

/** Barre flottante pendant une lecture vocale active. */
export default function VocalReaderBar() {
  const { t } = useTranslation();
  const { readerStatus, readerProgress, pauseReading, resumeReading, stopReading } =
    useAccessibility();

  if (readerStatus === 'idle') return null;

  const { currentChunk, totalChunks } = readerProgress;
  const progressLabel =
    totalChunks > 0
      ? t('a11y.reader.progress', { current: currentChunk, total: totalChunks })
      : t('a11y.reader.playing');

  return (
    <div
      className="fixed bottom-4 left-1/2 z-[92] flex w-[min(100%,22rem)] -translate-x-1/2 items-center gap-2 rounded-2xl border border-univ-lime/40 bg-black/95 px-3 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.65)] backdrop-blur-md sm:w-auto sm:min-w-[20rem]"
      role="region"
      aria-label={t('a11y.reader.regionLabel')}
    >
      <Volume2 size={18} className="shrink-0 text-univ-lime" aria-hidden />
      <p className="min-w-0 flex-1 truncate font-sans text-xs font-medium text-white/90">
        {readerStatus === 'paused' ? t('a11y.reader.paused') : progressLabel}
      </p>
      {readerStatus === 'playing' ? (
        <button
          type="button"
          onClick={pauseReading}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
          aria-label={t('a11y.reader.pause')}
        >
          <Pause size={16} aria-hidden />
        </button>
      ) : (
        <button
          type="button"
          onClick={resumeReading}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-univ-lime/40 bg-univ-lime/15 text-univ-lime transition hover:bg-univ-lime/25"
          aria-label={t('a11y.reader.resume')}
        >
          <Play size={16} fill="currentColor" aria-hidden />
        </button>
      )}
      <button
        type="button"
        onClick={stopReading}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:bg-white/10"
        aria-label={t('a11y.reader.stop')}
      >
        <Square size={14} fill="currentColor" aria-hidden />
      </button>
    </div>
  );
}
