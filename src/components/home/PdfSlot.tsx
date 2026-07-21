import type { ReactNode } from 'react';

/**
 * Emplacement visuel réservé (placeholder) calé sur les dimensions de la maquette PDF.
 * Affiche un cadre vide accessible aux lecteurs d'écran via aria-label.
 */

interface PdfSlotProps {
  className?: string;
  label?: string;
  children?: ReactNode;
}

export function PdfSlot({ className = '', label = 'Emplacement visuel', children }: PdfSlotProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex shrink-0 items-center justify-center border border-dashed border-white/25 bg-white/[0.04] ${className}`}
    >
      {children}
    </div>
  );
}
