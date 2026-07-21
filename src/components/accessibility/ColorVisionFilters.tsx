import { createPortal } from 'react-dom';

/**
 * Définitions SVG pour filtres daltonisme sur médias (img / video / iframe).
 * Rendu hors #root pour éviter les invalidations en cascade.
 */
export default function ColorVisionFilters() {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <svg
      className="pointer-events-none fixed h-0 w-0 overflow-hidden"
      aria-hidden
      focusable="false"
    >
      <defs>
        <filter id="a11y-deuteranopia" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.625 0.375 0 0 0  0.7 0.3 0 0 0  0 0.3 0.7 0 0  0 0 0 1 0"
          />
        </filter>
        <filter id="a11y-protanopia" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.567 0.433 0 0 0  0.558 0.442 0 0 0  0 0.242 0.758 0 0  0 0 0 1 0"
          />
        </filter>
        <filter id="a11y-tritanopia" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.95 0.05 0 0 0  0 0.433 0.567 0 0  0 0.475 0.525 0 0  0 0 0 1 0"
          />
        </filter>
      </defs>
    </svg>,
    document.body,
  );
}
