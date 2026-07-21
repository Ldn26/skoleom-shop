import type { AccessibilitySettings } from './types';

/** Applique les préférences sur `<html>` (attributs data + classes). */
export function applyAccessibilityToDocument(settings: AccessibilitySettings): void {
  const html = document.documentElement;

  html.dataset.a11yColorVision = settings.colorVision;
  html.dataset.a11yTheme = settings.contrastTheme;
  html.dataset.a11yFont = settings.fontProfile;
  html.dataset.a11yTextScale = String(settings.textScale);
  html.toggleAttribute('data-a11y-spacing', settings.increasedSpacing);
  html.toggleAttribute('data-a11y-reading-mode', settings.readingMode);
  html.toggleAttribute('data-a11y-reduce-motion', settings.reduceMotion);
  html.toggleAttribute('data-a11y-enhanced-focus', settings.enhancedFocus);

  html.classList.remove('light', 'a11y-high-contrast', 'a11y-soft');
  if (settings.contrastTheme === 'light') html.classList.add('light');
  if (settings.contrastTheme === 'high-contrast') html.classList.add('a11y-high-contrast');
  if (settings.contrastTheme === 'soft') html.classList.add('a11y-soft');

  html.style.setProperty('--a11y-text-scale', String(settings.textScale / 100));
}
