'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '../context/ThemeContext';
import { AccessibilityProvider } from '../context/AccessibilityContext';
import { SiteChoicesProvider } from '../context/SiteChoicesContext';
import { LanguageProvider } from '../i18n/LanguageProvider';
import { bootstrapI18n } from '../i18n/setup';
import { initDeferredAssets, initDeferredGtm } from '../utils/deferredAssets';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    void bootstrapI18n().then(() => {
      if (!active) return;
      setReady(true);
      initDeferredGtm('GTM-NLR9HKFH');
      initDeferredAssets();
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AccessibilityProvider>
            <SiteChoicesProvider>
              <LanguageProvider>
                {ready ? children : <div className="min-h-screen w-full bg-univ-gray-950" />}
              </LanguageProvider>
            </SiteChoicesProvider>
          </AccessibilityProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
