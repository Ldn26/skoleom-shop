import { type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Cloud, CreditCard, Megaphone, Plug } from 'lucide-react';
import {
  BOUTIQUE_IMAGES,
  BOUTIQUE_SECTIONS,
  type BoutiqueFlatSection,
} from '../../data/ecosystemBoutiques';
import AccordionShowcase, { type ShowcaseItem } from '../../components/group/AccordionShowcase';
import BoutiqueCarousel from '../../components/group/BoutiqueCarousel';
import PrivacySettingsButton from '../../components/privacy/PrivacySettingsButton';
import {
  STATIC_PAGE_DOCUMENTS,
  type StaticPageDocument,
  type StaticPageDocumentKey,
} from '../../locales/staticPages';
import { useLanguageContext } from '../../i18n/LanguageProvider';

type LegalDocument = StaticPageDocument;
type StaticPagesResourceLike = {
  staticPages?: {
    documents?: Partial<Record<StaticPageDocumentKey, LegalDocument>>;
  };
};

function LegalStaticPage({ action, document }: { action?: ReactNode; document: LegalDocument }) {
  return (
    <main className="bg-black px-6 pb-24 pt-32 text-white lg:px-10 lg:pt-40">
      <article className="mx-auto w-full max-w-4xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-univ-lime">
          {document.eyebrow}
        </p>
        <h1 className="font-display text-4xl font-normal leading-tight tracking-normal text-white md:text-6xl">
          {document.title}
        </h1>
        {document.meta ? <p className="mt-5 text-sm text-white/45">{document.meta}</p> : null}
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
          {document.intro}
        </p>
        {action ? <div className="mt-8">{action}</div> : null}

        <div className="mt-14 divide-y divide-white/10">
          {document.sections.map((section) => (
            <section key={section.title} className="py-9 md:py-11">
              <h2 className="text-xl font-bold text-white md:text-2xl">{section.title}</h2>
              {section.paragraphs ? (
                <div className="mt-5 space-y-4 text-base leading-relaxed text-white/68">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {section.items ? (
                <ul className="mt-5 space-y-3 text-base leading-relaxed text-white/68">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-univ-lime" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}

function StaticDocumentPage({
  action,
  documentKey,
}: {
  action?: ReactNode;
  documentKey: StaticPageDocumentKey;
}) {
  const { resource } = useLanguageContext();
  const documents = (resource as StaticPagesResourceLike).staticPages?.documents;
  const document =
    (documents?.[documentKey] as LegalDocument | undefined) ??
    STATIC_PAGE_DOCUMENTS.en.documents[documentKey];

  if (!document || !Array.isArray(document.sections)) {
    return (
      <LegalStaticPage
        document={{
          eyebrow: 'Skoleom',
          title: 'Page indisponible',
          intro: 'Le contenu de cette page est momentanément indisponible dans cette langue.',
          sections: [],
        }}
      />
    );
  }

  return <LegalStaticPage action={action} document={document} />;
}

export function LegalNoticePage() {
  return <StaticDocumentPage documentKey="legal" />;
}

export function MissionPage() {
  return <StaticDocumentPage documentKey="mission" />;
}

export function TermsPage() {
  return <StaticDocumentPage documentKey="terms" />;
}

export function PrivacyPage() {
  return <StaticDocumentPage documentKey="privacy" />;
}

export function AffiliateDisclosurePage() {
  return <StaticDocumentPage documentKey="affiliates" />;
}

export function CookiePreferencesPage() {
  const { resource } = useLanguageContext();
  const documents = (resource as StaticPagesResourceLike).staticPages?.documents;
  const document =
    (documents?.cookies as LegalDocument | undefined) ?? STATIC_PAGE_DOCUMENTS.en.documents.cookies;

  return (
    <StaticDocumentPage
      documentKey="cookies"
      action={
        <PrivacySettingsButton className="privacy-panel__button primary">
          {document.actionLabel ?? 'Modifier mes préférences cookies'}
        </PrivacySettingsButton>
      }
    />
  );
}

export function AboutTechnologyPage() {
  return <StaticDocumentPage documentKey="technology" />;
}

export function FundingProgramPage() {
  return <StaticDocumentPage documentKey="funding" />;
}

export function PatentsPage() {
  return <StaticDocumentPage documentKey="patents" />;
}

/* Business */
/* ------------------------------------------------------------------------- */

const BUSINESS_OFFER_KEYS = ['brands', 'creators', 'platforms'] as const;

/** Items mis en avant dans l'accordéon business (placeholders d'images). */
const BUSINESS_SHOWCASE_ITEMS: readonly ShowcaseItem[] = [
  {
    id: 'pro-monetizer',
    title: 'Monetizer Studio',
    icon: <Cloud size={18} aria-hidden />,
    desc: 'ERP/DCM SaaS dédié à la gestion, monétisation et analyse des contenus vidéos interactifs. Connecté à plus de 300 API.',
    slides: [{ src: BOUTIQUE_IMAGES['pro-monetizer'], alt: 'Monetizer Studio' }],
  },
  {
    id: 'pro-pay',
    title: 'Skoleom Pay',
    icon: <CreditCard size={18} aria-hidden />,
    desc: 'Paiement intégré et wallets souverains. Solution de checkout in-content sans friction, conforme RGPD.',
    slides: [{ src: BOUTIQUE_IMAGES['pro-pay'], alt: 'Skoleom Pay' }],
  },
  {
    id: 'pro-ads',
    title: 'Skoleom Ads',
    icon: <Megaphone size={18} aria-hidden />,
    desc: 'Publicité interactive in-content : formats natifs, ciblage temps réel et reporting unifié pour les annonceurs et les régies.',
    slides: [{ src: BOUTIQUE_IMAGES['pro-ads'], alt: 'Skoleom Ads' }],
  },
  {
    id: 'pro-sve-api',
    title: 'SVE API',
    icon: <Plug size={18} aria-hidden />,
    desc: "API et SDK pour intégrer Skoleom Universe Engine à n'importe quelle plateforme OTT ou site web.",
    slides: [{ src: BOUTIQUE_IMAGES['pro-sve-api'], alt: 'SVE API' }],
  },
];

/** Section data de Pour les Pros (importée depuis le fichier de données). */
const PROS_SECTION = BOUTIQUE_SECTIONS.find(
  (section) => section.id === 'boutiques-pour-les-pros',
) as BoutiqueFlatSection | undefined;

/** Présentation de l'offre B2B (marques, créateurs, plateformes). */
export function BusinessPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 px-6 lg:px-10 max-w-[1600px] mx-auto pb-20">
      <p className="text-univ-orange uppercase tracking-widest font-bold text-xs mb-4">
        {t('public.business.kicker')}
      </p>
      <h1 className="display-text text-5xl md:text-7xl mb-8">
        <span className="text-gradient">{t('public.business.titleLine1')}</span>{' '}
        {t('public.business.titleLine2')}
        <br />
        <span className="text-gradient-warm">{t('public.business.titleHighlight')}</span>
      </h1>
      <p className="text-xl text-white/70 max-w-3xl mb-12">{t('public.business.subtitle')}</p>

      {/* 3 offres B2B */}
      <div className="grid md:grid-cols-3 gap-6">
        {BUSINESS_OFFER_KEYS.map((key) => (
          <div key={key} className="glass rounded-2xl p-8 card-hover">
            <h3 className="text-2xl font-bold mb-3">{t(`public.business.offers.${key}.title`)}</h3>
            <p className="text-white/60 mb-6">{t(`public.business.offers.${key}.desc`)}</p>
            <button className="btn-ghost text-sm">{t(`public.business.offers.${key}.cta`)}</button>
          </div>
        ))}
      </div>

      {/* Showcase accordéon : outils B2B phares */}
      <AccordionShowcase
        sectionId="boutiques-pros-showcase"
        kicker={t('public.business.showcase.kicker')}
        title={t('public.business.showcase.title')}
        subtitle={t('public.business.showcase.subtitle')}
        items={BUSINESS_SHOWCASE_ITEMS}
        kickerColor="orange"
      />

      {/* Carrousel complet : toutes les boutiques B2B */}
      {PROS_SECTION && (
        <BoutiqueCarousel
          sectionId="boutiques-pros-carousel"
          kicker={t('public.business.carousel.kicker')}
          title={t('public.business.carousel.title')}
          subtitle={t('public.business.carousel.subtitle')}
          items={PROS_SECTION.items}
          imageMap={BOUTIQUE_IMAGES}
          searchable
          searchPlaceholder={t('public.business.carousel.searchPlaceholder')}
          idPrefix="pros-card"
          ariaLabel={t('public.business.carousel.ariaLabel')}
        />
      )}
    </div>
  );
}
