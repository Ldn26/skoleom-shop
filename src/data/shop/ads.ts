export interface AdSlide {
  id: number;
  image: string; // banner image (public path like '/ads/x.webp' or full URL)
  eyebrow?: string; // small lime label
  title: string; // big headline
  subtitle?: string; // one line under the title
  badge?: string; // optional pill, e.g. '-50%'
  cta: string; // button label
  href: string; // route to navigate to
  align?: 'left' | 'center'; // content alignment (default 'left')
  tint?: string; // overlay tailwind gradient (for legibility / mood)
}

// ── EDIT ME ──────────────────────────────────────────────────────────────────
// Replace `image` with your own banners in /public/ads/… (recommended ~1600×640).
export const adsData: AdSlide[] = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/ads-flash/1600/640',
    eyebrow: 'Ventes Flash',
    title: "Jusqu'à −50%",
    subtitle: 'Sélection limitée, pendant 48 h seulement.',
    badge: '-50%',
    cta: 'En profiter',
    href: '/produits',
    align: 'left',
    tint: 'from-black/80 via-black/40 to-transparent',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/ads-collection/1600/640',
    eyebrow: 'Nouvelle collection 2026',
    title: 'La mode, réinventée',
    subtitle: 'Découvrez les pièces essentielles de la saison.',
    cta: 'Découvrir',
    href: '/catalogue',
    align: 'left',
    tint: 'from-black/75 via-black/35 to-transparent',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/ads-tryon/1600/640',
    eyebrow: 'Essayage IA',
    title: 'Essayez avant d’acheter',
    subtitle: 'Votre avatar porte chaque article, à la bonne taille.',
    cta: 'Créer mon avatar',
    href: '/essayage',
    align: 'center',
    tint: 'from-black/70 via-black/45 to-black/70',
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/ads-sport/1600/640',
    eyebrow: 'Sport & style',
    title: 'Bougez avec allure',
    subtitle: 'Maillots, sneakers et accessoires performance.',
    cta: 'Voir la sélection',
    href: '/produits',
    align: 'left',
    tint: 'from-black/80 via-black/40 to-transparent',
  },
  {
    id: 5,
    image: 'https://picsum.photos/seed/ads-beauty/1600/640',
    eyebrow: 'Beauté & soins',
    title: 'Votre routine parfaite',
    subtitle: 'Parfums, skincare et essentiels beauté.',
    cta: 'Explorer',
    href: '/produits',
    align: 'center',
    tint: 'from-black/70 via-black/40 to-black/70',
  },
];
