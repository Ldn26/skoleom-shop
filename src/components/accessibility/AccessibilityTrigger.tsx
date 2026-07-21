import { Accessibility } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAccessibility } from '../../context/AccessibilityContext';

interface AccessibilityTriggerProps {
  className?: string;
}

/** Bouton d’ouverture du panneau accessibilité (header). */
export default function AccessibilityTrigger({ className = '' }: AccessibilityTriggerProps) {
  const { t } = useTranslation();
  const { togglePanel, panelOpen } = useAccessibility();

  return (
    <button
      type="button"
      onClick={togglePanel}
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/85 shadow-sm transition duration-300 hover:border-univ-lime/50 hover:bg-white/10 hover:text-univ-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-univ-lime focus-visible:ring-offset-2 focus-visible:ring-offset-black ${className}`}
      aria-haspopup="dialog"
      aria-expanded={panelOpen}
      aria-controls="accessibility-panel"
      aria-label={t('a11y.panel.open')}
    >
      <Accessibility size={16} strokeWidth={2.25} aria-hidden />
    </button>
  );
}
