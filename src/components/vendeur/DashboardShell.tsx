'use client';

import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, PlusCircle, ShoppingBag, Star } from 'lucide-react';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';

const NAV = [
  { to: '/vendeur/dashboard', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/vendeur/dashboard/products', label: 'Products', icon: Package, end: false },
  { to: '/vendeur/dashboard/products/new', label: 'Add product', icon: PlusCircle, end: false },
  { to: '/vendeur/dashboard/orders', label: 'Orders', icon: ShoppingBag, end: false },
  { to: '/vendeur/dashboard/comments', label: 'Reviews', icon: Star, end: false },
];

export default function DashboardShell({ children }: { children: ReactNode }) {
  const localizePath = useLocalizedPath();

  return (
    <div className="min-h-[calc(100vh-71px)] bg-[#0A0A0B] px-3 pb-16 pt-[88px] text-[#EDECE8] sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 lg:flex-row">
        <aside className="lg:w-60 lg:shrink-0">
          <div className="sticky top-[88px] rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">
            <p className="px-3 pb-3 pt-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/35">
              Espace vendeur
            </p>
            <nav className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
              {NAV.map(({ to, label, icon: Icon, end }) => (
                <NavLink
                  key={to}
                  to={localizePath(to)}
                  end={end}
                  className={({ isActive }) =>
                    [
                      'flex shrink-0 items-center gap-3 rounded-2xl px-3.5 py-2.5 text-sm font-semibold transition duration-200',
                      isActive
                        ? 'bg-[#a8ff35] text-black'
                        : 'text-white/70 hover:bg-white/[0.06] hover:text-white',
                    ].join(' ')
                  }
                >
                  <Icon size={17} aria-hidden />
                  <span>{label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
