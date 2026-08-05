export type UserRole = 'vendeur' | 'acheteur';

export type NavItem = {
  label: string;
  href: string;
  megaVariant?: string;
  external?: boolean;
};





export const guestNavigation: NavItem[] = [
  { label: 'header.nav.home', href: '/' },
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'Abonnement', href: '/#tarifs' },
  {
    label: 'header.nav.support',
    href: 'https://skoleom.com/contact',
    external: true,
  },
];

export const navigationByRole: Record<UserRole, NavItem[]> = {
  vendeur: [
    { label: 'Dashboard', href: '/vendeur/dashboard' },
    { label: 'Products', href: '/vendeur/products' },
    { label: 'Orders', href: '/vendeur/orders' },
    { label: 'Profile', href: '/vendeur/compte' },
    {
      label: 'header.nav.support',
      href: 'https://skoleom.com/contact',
      external: true,
    },
  ],

  acheteur: [
    { label: 'header.nav.essayage', href: '/acheteur/essayage', megaVariant: 'essayage' },
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'Profile', href: '/acheteur/compte' },
    {
      label: 'header.nav.support',
      href: 'https://skoleom.com/contact',
      external: true,
    },
  ],
};

export function resolveNavigation(isAuthenticated: boolean, role: UserRole | null): NavItem[] {
  if (!isAuthenticated) return guestNavigation;
  return navigationByRole[role ?? 'acheteur'] ?? navigationByRole.acheteur;
}
