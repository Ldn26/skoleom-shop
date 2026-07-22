import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';
import '@fontsource/anton/400.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/400-italic.css';
import '../src/styles/index.css';
import '../src/styles/accessibility.css';
import '../src/styles/privacy.css';
import '../src/components/layout/footer.scss';

import Providers from '../src/app-shell/Providers';
import GlobalChrome from '../src/app-shell/GlobalChrome';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'SKOLEOM SHOP',
  description:
    'Skoleom Group - The global leader in Retail Media & Transmedia. Watch. Touch. Buy. Each video becomes an immersive store.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/logo/logo-white.png', type: 'image/png', sizes: '48x48' },
      { url: '/logo/logo-white.webp', type: 'image/webp' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Skoleom Shop',
    description:
      "Each video becomes an immersive store. The world's first Retail Media & Transmedia ecosystem.",
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

const consentScript = `
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500,
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', false);
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="preload" as="image" href="/maquette/banniere.webp" fetchPriority="high" />
        <link rel="stylesheet" href="https://ext.skoleom.com/content.css" />
      </head>
      <body className="bg-univ-gray-950 text-white antialiased">
        <Script id="gtag-consent-default" strategy="beforeInteractive">
          {consentScript}
        </Script>
        <Script src="https://ext.skoleom.com/content.js" strategy="afterInteractive" />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NLR9HKFH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Providers>
          <GlobalChrome>{children}</GlobalChrome>
        </Providers>
      </body>
    </html>
  );
}
