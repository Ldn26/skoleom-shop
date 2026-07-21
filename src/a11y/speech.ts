/** Extraction de texte pour la liseuse vocale. */

export function getSelectedText(): string {
  if (typeof window === 'undefined') return '';
  return window.getSelection()?.toString().trim() ?? '';
}

/** Contenu principal lisible (zone #main-content, texte visible). */
export function getMainReadableText(): string {
  const main = document.getElementById('main-content');
  if (!main) return '';

  const clone = main.cloneNode(true) as HTMLElement;
  clone.querySelectorAll('script, style, [aria-hidden="true"]').forEach((el) => el.remove());

  return clone.innerText.replace(/\s+/g, ' ').trim();
}
