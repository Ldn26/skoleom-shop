import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { matchPath, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { pushPageView } from '../analytics/gtm';
import {
  SUPPORTED_I18N_LANGS,
  buildLocalizedPath,
  detectPathLanguage,
  isSupportedLanguage,
  stripLanguagePrefix,
} from '../i18n/urlLanguage';
import { LOGOS } from '../constants/logos';

import { resolveRouteSeoMeta } from './resolveRouteTitle';

const SITE_NAME = 'Skoleom Universe';
const SITE_URL = 'https://universe.skoleom.com';
const DEFAULT_IMAGE = `${SITE_URL}/og/skoleom-hero.jpg`;
const IMAGE_WIDTH = '1200';
const IMAGE_HEIGHT = '1200';

function normalizeCanonicalPath(pathname: string): string {
  const pathWithoutLocale = stripLanguagePrefix(pathname);
  if (pathWithoutLocale === '/sesync') return '/technology';
  if (pathWithoutLocale === '/shop') return '/stores';
  if (pathWithoutLocale.length > 1 && pathWithoutLocale.endsWith('/')) {
    return pathWithoutLocale.slice(0, -1);
  }
  return pathWithoutLocale;
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const base: BreadcrumbItem[] = [{ name: 'Home', path: '/' }];

  if (pathname === '/') return base;
  if (pathname === '/stores') return [...base, { name: 'Audiovisual Stores', path: '/stores' }];
  if (pathname === '/how-it-works')
    return [...base, { name: 'How It Works', path: '/how-it-works' }];
  if (pathname === '/ecosystem') return [...base, { name: 'Ecosystem', path: '/ecosystem' }];
  if (pathname === '/technology') {
    return [...base, { name: 'Technology', path: '/technology' }];
  }
  if (pathname === '/contact') return [...base, { name: 'Contact', path: '/contact' }];
  if (pathname === '/business') return [...base, { name: 'For Professionals', path: '/business' }];
  if (pathname === '/content') return [...base, { name: 'Content', path: '/content' }];
  if (pathname === '/retail-media-platform') {
    return [...base, { name: 'Retail Media Platform', path: '/retail-media-platform' }];
  }
  if (pathname === '/interactive-video-commerce') {
    return [...base, { name: 'Interactive Video Commerce', path: '/interactive-video-commerce' }];
  }
  if (pathname === '/touch') return [...base, { name: 'Skoleom Touch', path: '/touch' }];
  if (pathname === '/search') return [...base, { name: 'Search', path: '/search' }];

  if (pathname === '/skoleom-page') {
    return [...base, { name: 'Skoleom Page', path: '/skoleom-page' }];
  }
  if (pathname === '/skoleom-page/trends') {
    return [
      ...base,
      { name: 'Skoleom Page', path: '/skoleom-page' },
      { name: 'Trends', path: '/skoleom-page/trends' },
    ];
  }
  if (pathname === '/skoleom-page/create') {
    return [
      ...base,
      { name: 'Skoleom Page', path: '/skoleom-page' },
      { name: 'Create', path: '/skoleom-page/create' },
    ];
  }
  if (pathname === '/skoleom-page/profile') {
    return [
      ...base,
      { name: 'Skoleom Page', path: '/skoleom-page' },
      { name: 'Profile', path: '/skoleom-page/profile' },
    ];
  }
  if (matchPath('/skoleom-page/artist/:name', pathname)) {
    return [
      ...base,
      { name: 'Skoleom Page', path: '/skoleom-page' },
      { name: 'Artist', path: pathname },
    ];
  }

  if (matchPath('/watch/:id', pathname)) {
    return [...base, { name: 'Watch Experience', path: pathname }];
  }

  return base;
}

function getFaqJsonLd(pathname: string) {
  if (pathname !== '/how-it-works' && pathname !== '/technology') return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does Watch. Touch. Buy work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Skoleom detects products in media content and displays contextual capsules so users can discover and purchase instantly.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is SeSync technology?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SeSync is the technology layer that powers recognition, context mapping, and commerce actions across audiovisual streams.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who can use the platform?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The ecosystem is designed for brands, media owners, creators, retailers, and end users looking for immersive shopping experiences.',
        },
      },
    ],
  };
}

function getVideoJsonLd(pathname: string, canonical: string) {
  if (!matchPath('/watch/:id', pathname)) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Watch Experience',
    description:
      'Interactive watch experience with contextual capsules and one-click purchase during video playback.',
    thumbnailUrl: [DEFAULT_IMAGE],
    embedUrl: canonical,
    contentUrl: canonical,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}${LOGOS.skoleom}`,
      },
    },
  };
}

function getOfferJsonLd(pathname: string) {
  if (pathname !== '/business') return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Skoleom Retail Media Platform',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    serviceType: 'Retail Media & Transmedia Commerce Platform',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      category: 'B2B',
      url: `${SITE_URL}/business`,
    },
  };
}

export default function RouteSeo() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const pathLanguage = detectPathLanguage(pathname);
  const canonicalPath = normalizeCanonicalPath(pathname);
  const routePath = stripLanguagePrefix(pathname);
  const i18nLang = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0];
  const currentLang = pathLanguage ?? (isSupportedLanguage(i18nLang) ? i18nLang : 'en');
  const seo = resolveRouteSeoMeta(canonicalPath, currentLang);
  const canonical = `${SITE_URL}${canonicalPath}`;
  const locale = currentLang === 'en' ? 'en_US' : `${currentLang}_${currentLang.toUpperCase()}`;
  const faqJsonLd = getFaqJsonLd(canonicalPath);
  const videoJsonLd = getVideoJsonLd(canonicalPath, canonical);
  const offerJsonLd = getOfferJsonLd(canonicalPath);
  const breadcrumbs = getBreadcrumbs(canonicalPath);
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${LOGOS.skoleom}`,
    image: DEFAULT_IMAGE,
    sameAs: [
      'https://www.linkedin.com/company/skoleom',
      'https://www.instagram.com/skoleom',
      'https://x.com/skoleom',
    ],
  };
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0],
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
  const alternateOgLocales = SUPPORTED_I18N_LANGS.filter((lang) => lang !== currentLang).map(
    (lang) => (lang === 'en' ? 'en_US' : `${lang}_${lang.toUpperCase()}`),
  );

  // SPA virtual page view — fires on every route change for GTM triggers
  useEffect(() => {
    pushPageView(canonicalPath, seo.title);
  }, [canonicalPath, seo.title]);

  return (
    <Helmet prioritizeSeoTags>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />

      <link rel="canonical" href={canonical} />
      {!seo.noindex
        ? SUPPORTED_I18N_LANGS.map((lang) => (
            <link
              key={lang}
              rel="alternate"
              hrefLang={lang}
              href={`${SITE_URL}${buildLocalizedPath(canonicalPath, lang)}`}
            />
          ))
        : null}
      {!seo.noindex ? (
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${canonicalPath}`} />
      ) : null}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={locale} />
      {alternateOgLocales.map((value) => (
        <meta key={value} property="og:locale:alternate" content={value} />
      ))}
      <meta property="og:type" content={seo.ogType ?? 'website'} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content={IMAGE_WIDTH} />
      <meta property="og:image:height" content={IMAGE_HEIGHT} />
      <meta property="og:image:alt" content="Skoleom Universe — Watch. Touch. Buy." />

      <link rel="icon" href="/favicon.ico" sizes="48x48" />
      <link rel="icon" type="image/png" href="/favicon-48.png" sizes="48x48" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@skoleom" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      <meta name="twitter:image:alt" content="Skoleom Universe — Watch. Touch. Buy." />
      {seo.noindex ? (
        <meta name="robots" content="noindex, nofollow, noarchive" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}
      {routePath === '/' ? (
        <link rel="preload" as="image" href="/maquette/banniere.webp" fetchPriority="high" />
      ) : null}
      {routePath === '/sesync' ? (
        <link rel="preload" as="image" href="/sesync-f1.webp" fetchPriority="high" />
      ) : null}

      <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      {faqJsonLd ? <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script> : null}
      {videoJsonLd ? (
        <script type="application/ld+json">{JSON.stringify(videoJsonLd)}</script>
      ) : null}
      {offerJsonLd ? (
        <script type="application/ld+json">{JSON.stringify(offerJsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
