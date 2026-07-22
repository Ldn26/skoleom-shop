


'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  ShoppingCart,
  BarChart3,
  Settings,
  LogOut,
  Boxes,
  Menu,
  X,
} from 'lucide-react';

const C = {
  bg: '#060606',
  panel: 'rgba(255,255,255,0.035)',
  panelSoft: 'rgba(255,255,255,0.02)',
  border: 'rgba(255,255,255,0.09)',
  borderSoft: 'rgba(255,255,255,0.05)',
  lime: '#a8ff35',
  limeDim: 'rgba(168,255,53,0.12)',
  red: '#f87171',
  w90: 'rgba(255,255,255,0.9)',
  w70: 'rgba(255,255,255,0.7)',
  w40: 'rgba(255,255,255,0.4)',
};

const NAV = [
  { href: '/vendeur/dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
  { href: '/vendeur/dashboard/products', label: 'Mes produits', icon: Package },
  { href: '/vendeur/dashboard/products/new', label: 'Ajouter un produit', icon: PlusCircle },
  { href: '/vendeur/dashboard/orders', label: 'Commandes', icon: ShoppingCart },
  { href: '/vendeur/dashboard/stats', label: 'Statistiques', icon: BarChart3 },
  { href: '/vendeur/dashboard/settings', label: 'Paramètres', icon: Settings },
];

interface DashboardShellProps {
  children: React.ReactNode;
  vendorName?: string;
  vendorEmail?: string;
}

export default function DashboardShell({
  children,
  vendorName = 'Youcef Merabet',
  vendorEmail = 'v2@gmail.com',
}: DashboardShellProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const initials = vendorName
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  // Close mobile navigation drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div style={{ background: C.bg, color: C.w90, minHeight: '100vh' }} className="relative py-24 font-sans">
      <style>{`
        .dash-scroll::-webkit-scrollbar { width: 6px; }
        .dash-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,.08); border-radius: 8px; }
      `}</style>

      {/* Mobile Header Bar */}
      <div
        className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 border-b lg:hidden backdrop-blur-xl"
        style={{ background: 'rgba(10,10,10,0.85)', borderColor: C.borderSoft }}
      >
        <div className="flex items-center gap-2.5">
          <div className="grid place-items-center rounded-xl" style={{ width: 30, height: 30, background: C.lime }}>
            <Boxes size={16} color="#000" />
          </div>
          <span className="font-extrabold tracking-tight text-sm">SKOLEOM</span>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-xl transition-colors"
          style={{ background: C.panel, color: C.w90 }}
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Backdrop for Mobile Menu */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar (Fixed Desktop + Off-canvas Mobile) */}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          width: 260,
          background: 'rgba(10,10,10,0.92)',
          borderRight: `1px solid ${C.border}`,
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Brand */}
        <div className="flex items-center gap-2.5 px-6 shrink-0" style={{ height: 78, borderBottom: `1px solid ${C.borderSoft}` }}>
          <div className="grid place-items-center rounded-xl" style={{ width: 34, height: 34, background: C.lime }}>
            <Boxes size={19} color="#000" />
          </div>
          <div className="leading-tight">
            <p className="font-extrabold tracking-tight" style={{ fontSize: 15 }}>SKOLEOM</p>
            <p style={{ fontSize: 10, color: C.w40, letterSpacing: '0.18em' }}>ESPACE VENDEUR</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5 dash-scroll">
          <p className="px-3 pb-2 font-bold uppercase" style={{ fontSize: 10, letterSpacing: '0.2em', color: C.w40 }}>
            Menu
          </p>
          {NAV.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-all duration-200"
                style={{
                  background: isActive ? C.limeDim : 'transparent',
                  color: isActive ? C.lime : C.w70,
                  fontWeight: isActive ? 700 : 500,
                  fontSize: 13.5,
                  boxShadow: isActive ? `inset 0 0 0 1px rgba(168,255,53,0.25)` : 'none',
                }}
              >
                <Icon size={17} />
                <span>{item.label}</span>
                {isActive && <span className="ml-auto rounded-full shrink-0" style={{ width: 6, height: 6, background: C.lime }} />}
              </Link>
            );
          })}
        </nav>

        {/* Profile + Logout Footer */}
        <div className="px-3 pb-4 pt-3 shrink-0" style={{ borderTop: `1px solid ${C.borderSoft}` }}>
          <div className="flex items-center gap-3 rounded-2xl px-3 py-2.5" style={{ background: C.panel }}>
            <div
              className="grid shrink-0 place-items-center rounded-full font-bold"
              style={{ width: 38, height: 38, background: C.lime, color: '#000', fontSize: 13 }}
            >
              {initials}
            </div>
            <div className="min-w-0 leading-tight">
              <p className="truncate font-semibold" style={{ fontSize: 13 }}>{vendorName}</p>
              <p className="truncate" style={{ fontSize: 11, color: C.w40 }}>{vendorEmail}</p>
            </div>
          </div>

          <button
            onClick={() => {
              /* Handle logout action */
            }}
            className="mt-2 flex w-full items-center gap-2.5 rounded-2xl px-3 py-2.5 text-left transition-colors duration-200"
            style={{ color: C.red, fontWeight: 600, fontSize: 13 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(248,113,113,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            <LogOut size={16} />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      <main className="relative z-10 flex-1 ">
        <div className="mx-auto  p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}