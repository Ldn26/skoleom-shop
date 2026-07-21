import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import SiteChrome from '../../src/app-shell/SiteChrome';
import { SUPPORTED_I18N_LANGS } from '../../src/i18n/urlLanguage';

export function generateStaticParams() {
  return SUPPORTED_I18N_LANGS.map((lang) => ({ lang }));
}

export const dynamicParams = true;

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!SUPPORTED_I18N_LANGS.includes(lang as (typeof SUPPORTED_I18N_LANGS)[number])) {
    notFound();
  }
  return <SiteChrome>{children}</SiteChrome>;
}
