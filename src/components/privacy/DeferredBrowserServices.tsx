import { useEffect } from 'react';
import { useSiteChoices } from '../../context/SiteChoicesContext';

type MetaPixelFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  loaded?: boolean;
  push?: MetaPixelFunction;
  queue?: unknown[][];
  version?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: MetaPixelFunction;
    _fbq?: MetaPixelFunction;
    SortlistRadar?: unknown[];
  }
}

const GA_MEASUREMENT_ID = 'G-G2BT836Y1R';

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID as string | undefined;
const SORTLIST_RADAR_PROFILE_ID = process.env.NEXT_PUBLIC_SORTLIST_RADAR_PROFILE_ID as
  | string
  | undefined;
const SORTLIST_RADAR_CDN =
  (process.env.NEXT_PUBLIC_SORTLIST_RADAR_CDN as string | undefined) || 'collector.sortlist.com';
const SORTLIST_RADAR_API_ENDPOINT =
  (process.env.NEXT_PUBLIC_SORTLIST_RADAR_API_ENDPOINT as string | undefined) || 'radar.sortlist.com';

export default function DeferredBrowserServices() {
  const { hasConsentFor } = useSiteChoices();
  const analyticsAllowed = hasConsentFor('analytics');
  const marketingAllowed = hasConsentFor('marketing');

  useEffect(() => {
    updateGoogleConsent(analyticsAllowed, marketingAllowed);

    if (analyticsAllowed) {
      loadGoogleAnalytics();
      loadSortlistRadar();
    }

    if (marketingAllowed) {
      loadMetaPixel();
    } else if (window.fbq) {
      window.fbq('consent', 'revoke');
    }
  }, [analyticsAllowed, marketingAllowed]);

  return null;
}

function updateGoogleConsent(analyticsAllowed: boolean, marketingAllowed: boolean) {
  // gtag is initialised in index.html before GTM; this guard handles edge cases
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  if (!window.gtag) return;

  window.gtag('consent', 'update', {
    analytics_storage: analyticsAllowed ? 'granted' : 'denied',
    personalization_storage: analyticsAllowed ? 'granted' : 'denied',
    ad_storage: marketingAllowed ? 'granted' : 'denied',
    ad_user_data: marketingAllowed ? 'granted' : 'denied',
    ad_personalization: marketingAllowed ? 'granted' : 'denied',
  });
}

function loadGoogleAnalytics() {
  if (document.getElementById('skoleom-ga4')) return;

  injectScriptOnce({
    id: 'skoleom-ga4',
    src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
    onLoad: () => {
      window.gtag?.('js', new Date());
      window.gtag?.('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
    },
  });
}

function loadMetaPixel() {
  if (!META_PIXEL_ID) return;

  if (!window.fbq) {
    const fbq = function fbq(...args: unknown[]) {
      const currentFbq = window.fbq;

      if (currentFbq?.callMethod) {
        currentFbq.callMethod(...args);
        return;
      }

      currentFbq?.queue?.push(args);
    } as MetaPixelFunction;

    fbq.loaded = true;
    fbq.push = fbq;
    fbq.queue = [];
    fbq.version = '2.0';
    window.fbq = fbq;
    window._fbq = fbq;
    window.fbq('consent', 'revoke');
    window.fbq('init', META_PIXEL_ID);
  }

  window.fbq('consent', 'grant');
  window.fbq('track', 'PageView');

  injectScriptOnce({
    id: 'skoleom-meta-pixel',
    src: 'https://connect.facebook.net/en_US/fbevents.js',
  });
}

function loadSortlistRadar() {
  if (!SORTLIST_RADAR_PROFILE_ID || document.getElementById('__radar__')) return;

  const namespace = 'SortlistRadar';
  const queue = (window[namespace] as unknown[] | undefined) || [];
  window[namespace] = queue;

  injectScriptOnce({
    id: '__radar__',
    src: `https://${SORTLIST_RADAR_CDN}/releases/latest/radar.min.js`,
    dataset: {
      settings: JSON.stringify({
        cdn: SORTLIST_RADAR_CDN,
        apiEndpoint: SORTLIST_RADAR_API_ENDPOINT,
        profileId: SORTLIST_RADAR_PROFILE_ID,
        namespace,
        features: {
          sessionTracking: true,
          formTracking: true,
          clickTracking: true,
          downloadTracking: true,
        },
      }),
    },
  });
}

interface InjectScriptOptions {
  id: string;
  src: string;
  dataset?: Record<string, string>;
  onLoad?: () => void;
}

function injectScriptOnce({ id, src, dataset, onLoad }: InjectScriptOptions) {
  if (document.getElementById(id)) return;

  const script = document.createElement('script');
  script.id = id;
  script.src = src;
  script.async = true;

  if (dataset) {
    Object.entries(dataset).forEach(([key, value]) => {
      script.dataset[key] = value;
    });
  }

  if (onLoad) {
    script.addEventListener('load', onLoad, { once: true });
  }

  document.head.appendChild(script);
}
