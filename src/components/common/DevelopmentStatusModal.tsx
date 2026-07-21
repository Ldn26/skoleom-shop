import { useEffect, type CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface DevelopmentStatusModalProps {
  open: boolean;
  kicker: string;
  title: string;
  body: string;
  closeLabel: string;
  titleId?: string;
  zIndexClassName?: string;
  /** Plein écran (défaut) ou ancré au centre du sélecteur d’extension. */
  presentation?: 'fullscreen' | 'anchored' | 'card';
  anchorStyle?: CSSProperties;
  compact?: boolean;
  onClose: () => void;
}

function ModalCard({
  kicker,
  title,
  body,
  closeLabel,
  titleId,
  compact = false,
  onClose,
}: Pick<
  DevelopmentStatusModalProps,
  'kicker' | 'title' | 'body' | 'closeLabel' | 'titleId' | 'compact' | 'onClose'
>) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`relative w-full rounded-[1.75rem] border border-white/10 bg-[#080808] text-white shadow-[0_28px_90px_-32px_rgba(168,255,53,0.45)] ${
        compact ? 'max-w-none p-5 sm:p-6' : 'max-w-md p-7'
      }`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-white/20 hover:text-white"
        aria-label={closeLabel}
      >
        <X size={17} aria-hidden />
      </button>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-univ-lime">{kicker}</p>
      <h2
        id={titleId}
        className={`font-display font-normal leading-tight text-white ${
          compact ? 'text-2xl sm:text-[1.65rem]' : 'text-3xl sm:text-4xl'
        }`}
      >
        {title}
      </h2>
      <p className="mt-5 text-base leading-relaxed text-white/68">{body}</p>
      <button
        type="button"
        onClick={onClose}
        className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-univ-lime"
      >
        {closeLabel}
      </button>
    </motion.div>
  );
}

export default function DevelopmentStatusModal({
  open,
  kicker,
  title,
  body,
  closeLabel,
  titleId = 'development-status-modal-title',
  zIndexClassName = 'z-[90]',
  presentation = 'fullscreen',
  anchorStyle,
  compact = false,
  onClose,
}: DevelopmentStatusModalProps) {
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const card = (
    <ModalCard
      kicker={kicker}
      title={title}
      body={body}
      closeLabel={closeLabel}
      titleId={titleId}
      compact={compact}
      onClose={onClose}
    />
  );

  if (presentation === 'card') return card;

  if (presentation === 'anchored') {
    if (anchorStyle) {
      return (
        <div
          className={`pointer-events-none fixed ${zIndexClassName} w-[min(100vw-3rem,28rem)] max-w-md px-4`}
          style={anchorStyle}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="pointer-events-auto">{card}</div>
        </div>
      );
    }

    return (
      <div
        className="pointer-events-none absolute inset-0 z-[80] flex items-center justify-center p-3"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="pointer-events-auto w-[min(92%,17.5rem)] max-w-[17.5rem]">{card}</div>
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 ${zIndexClassName} flex items-center justify-center bg-black/78 px-6 backdrop-blur-md`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      {card}
    </div>
  );
}
