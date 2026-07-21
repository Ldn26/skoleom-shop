import { lazy, type ComponentType } from 'react';
import { loadSesyncTranslations } from '../locales/lazyBundles';

function lazyNamed<T extends Record<string, ComponentType<object>>, K extends keyof T>(
  factory: () => Promise<T>,
  exportName: K,
) {
  return lazy(() => factory().then((module) => ({ default: module[exportName] })));
}




export const SkyAssistant = lazy(() => import('../views/SkyAssistant'));

export const AdminConsole = lazy(() => import('../views/vendeur/AdminConsole'));
const staticPages = () => import('../views/public/StaticPages');

export const AffiliateDisclosurePage = lazyNamed(staticPages, 'AffiliateDisclosurePage');
export const AboutTechnologyPage = lazyNamed(staticPages, 'AboutTechnologyPage');
export const BusinessPage = lazyNamed(staticPages, 'BusinessPage');
export const ContactPage = lazyNamed(staticPages, 'ContactPage');
export const CookiePreferencesPage = lazyNamed(staticPages, 'CookiePreferencesPage');
export const FundingProgramPage = lazyNamed(staticPages, 'FundingProgramPage');
export const LegalNoticePage = lazyNamed(staticPages, 'LegalNoticePage');
export const MissionPage = lazyNamed(staticPages, 'MissionPage');
export const PatentsPage = lazyNamed(staticPages, 'PatentsPage');
export const PrivacyPage = lazyNamed(staticPages, 'PrivacyPage');
export const TermsPage = lazyNamed(staticPages, 'TermsPage');
