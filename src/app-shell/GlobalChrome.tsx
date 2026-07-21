'use client';

import type { ReactNode } from 'react';
import ScrollToTop from '../components/layout/ScrollToTop';
import PrivacyNoticePanel from '../components/privacy/PrivacyNoticePanel';
import OptionalServicesGate from '../components/privacy/OptionalServicesGate';
import AccessibilityPanel from '../components/accessibility/AccessibilityPanel';
import ColorVisionFilters from '../components/accessibility/ColorVisionFilters';
import VocalReaderBar from '../components/accessibility/VocalReaderBar';
import I18nDomBridge from '../components/i18n/I18nDomBridge';
import RouteSeo from '../seo/RouteSeo';

export default function GlobalChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-x-hidden">
      <RouteSeo />
      <I18nDomBridge />
      <ScrollToTop />
      <OptionalServicesGate />
      {children}
      <ColorVisionFilters />
      <AccessibilityPanel />
      <VocalReaderBar />
      <PrivacyNoticePanel />
    </div>
  );
}
