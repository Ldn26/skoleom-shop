'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { stripLanguagePrefix } from '../i18n/urlLanguage';

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() || '/';
  const path = stripLanguagePrefix(pathname);
  const isImmersivePage = path.startsWith('/watch/') || path === '/touch';
  const topMargin = !path.startsWith('/vendeur/dashboard');

  const mainClass = isImmersivePage
    ? 'min-w-0 overflow-x-hidden focus:outline-none'
    : `min-w-0 flex-1 overflow-x-hidden focus:outline-none${topMargin ? ' mt-12' : ''}`;

  return (
    <>
      {!isImmersivePage && <Header  role="acheteur" lang="fr"    />}
      <main id="main-content" tabIndex={-1} className={mainClass}>
        {children}
      </main>
      {!isImmersivePage && <Footer />}
    </>
  );
}
