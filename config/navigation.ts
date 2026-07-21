// export type UserRole = 'vendeur' | 'acheteur';

// export type NavItem = {
//   label: string;
//   href: string;
// };

// export const navigationByRole: Record<
//   UserRole,
//   NavItem[]
// > = {
//   vendeur: [
//     {
//       label: 'Dashboard',
//       href: '/dashboard',
//     },
//     {
//       label: 'Profile',
//       href: '/profile',
//     },
//     {
//       label: 'Products',
//       href: '/products',
//     },
//     {
//       label: 'Orders',
//       href: '/orders',
//     },
//   ],

//   acheteur: [
//     {
//       label: 'Essayage',
//       href: '/essayage',
//     },
//     {
//       label: 'Catalogue',
//       href: '/catalogue',
//     },
//     {
//       label: 'Contact',
//       href: '/contact',
//     },
//     {
//       label: 'Profile',
//       href: '/profile',
//     },
//   ],
// };
export type UserRole = 'vendeur' | 'acheteur';

export type NavItem = {
  label: string;
  href: string;
  megaVariant?: string;
  external?: boolean;
};

export const guestNavigation: NavItem[] = [
  { label: 'header.nav.home', href: '/' },
  { label: 'header.nav.essayage', href: '/essayage', megaVariant: 'essayage' },
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'header.nav.support', href: '/contact' },
];

export const navigationByRole: Record<UserRole, NavItem[]> = {
  vendeur: [
    { label: 'Dashboard', href: '/vendeur/dashboard' },
    { label: 'Products', href: '/vendeur/dashboard/products' },
    { label: 'Orders', href: '/vendeur/dashboard/orders' },
    { label: 'Profile', href: '/profile' },
  ],
  acheteur: [
    { label: 'header.nav.essayage', href: '/essayage', megaVariant: 'essayage' },
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'header.nav.support', href: '/contact' },
    { label: 'Profile', href: '/profile' },
  ],
};

export function resolveNavigation(isAuthenticated: boolean, role: UserRole | null): NavItem[] {
  if (!isAuthenticated) return guestNavigation;
  return navigationByRole[role ?? 'acheteur'] ?? navigationByRole.acheteur;
}