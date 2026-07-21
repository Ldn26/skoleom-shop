/**
 * Liens des boutiques officielles.
 * Partagés entre la page d'accueil et le méga-menu du header.
 */
import { resolveBoutiqueStoreHref } from './boutiqueStoreLinks';

export interface StoreLink {
  label: string;
  to: string;
  external?: boolean;
  highlight?: boolean;
}

const STORE_LINK_DEFS: readonly { label: string; id: string; highlight?: boolean }[] = [
  { label: 'Skoleom SeSport', id: 'sesports', highlight: true },
  { label: 'Skoleom Cares', id: 'cares' },
  { label: 'Skoleom Games', id: 'games' },
  { label: 'Skoleom Invest', id: 'invest' },
  { label: 'Skoleom Services', id: 'services' },
  { label: 'Skoleom Food & Beverage', id: 'food-beverage' },
  { label: 'Skoleom Travel', id: 'travel' },
  { label: 'Skoleom Music', id: 'music' },
  { label: 'Watch on Skoleom', id: 'watch' },
  { label: 'Skoleom Real Estate', id: 'realestate' },
  { label: 'Skoleom Publishing', id: 'publishing' },
];

export const STORE_LINKS: readonly StoreLink[] = STORE_LINK_DEFS.map(({ label, id, highlight }) => {
  const link = resolveBoutiqueStoreHref(id);
  return {
    label,
    to: link.href,
    ...(link.external ? { external: true } : {}),
    ...(highlight ? { highlight: true } : {}),
  };
});
