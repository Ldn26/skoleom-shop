/** Couleurs graphiques alignées sur les tokens CSS (thèmes adaptatifs daltonisme). */

const FALLBACK_CHART_COLORS = [
  '#a8ff35',
  '#ff6b35',
  '#ffd600',
  '#0033ff',
  '#ec4899',
  '#a855f7',
] as const;

function readCssVar(name: string, fallback: string): string {
  if (typeof document === 'undefined') return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

/** Palette principale pour graphiques (Recharts, etc.). */
export function getSkoleomChartColors(): string[] {
  return [
    readCssVar('--univ-lime', FALLBACK_CHART_COLORS[0]),
    readCssVar('--univ-orange', FALLBACK_CHART_COLORS[1]),
    readCssVar('--univ-yellow', FALLBACK_CHART_COLORS[2]),
    readCssVar('--univ-blue', FALLBACK_CHART_COLORS[3]),
    readCssVar('--univ-coral', '#ec4899'),
    readCssVar('--univ-blue-light', '#a855f7'),
  ];
}

export function getSkoleomPrimaryChartColor(): string {
  return readCssVar('--univ-lime', FALLBACK_CHART_COLORS[0]);
}

export function getSkoleomSecondaryChartColor(): string {
  return readCssVar('--univ-orange', FALLBACK_CHART_COLORS[1]);
}
