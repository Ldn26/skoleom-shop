import { motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useTranslation } from 'react-i18next';

const skyLogo = '/images/assistance/sky-logo.svg';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Clock,
  Building2,
  Check,
  Cloud,
  CreditCard,
  Headphones,
  HelpCircle,
  Image as ImageIcon,
  LucideIcon,
  Mail,
  Megaphone,
  MessageCircle,
  Phone,
  Plug,
  RotateCcw,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  User,
  Wrench,
} from 'lucide-react';
import {
  BOUTIQUE_IMAGES,
  BOUTIQUE_SECTIONS,
  type BoutiqueFlatSection,
} from '../../data/ecosystemBoutiques';
import AccordionShowcase, { type ShowcaseItem } from '../../components/group/AccordionShowcase';
import BoutiqueCarousel from '../../components/group/BoutiqueCarousel';
import AssistanceNewsSidebar from '../../components/assistance/AssistanceNewsSidebar';
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

/* ------------------------------------------------------------------------- */
/* Contact / Assistance */
/* ------------------------------------------------------------------------- */

/** Pills assistance contact — une seule ligne desktop. */
const BTN_GHOST_DESKTOP_ROW_CLASS =
  'inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/12 bg-univ-gray-800 px-3 py-2 text-[11px] font-semibold leading-tight text-white/95 shadow-sm transition hover:border-white/18 hover:bg-univ-gray-700 hover:text-white active:scale-[0.98] xl:px-4 xl:py-2.5 xl:text-xs';

const CATEGORY_ICONS = {
  users: { Icon: ShoppingBag, bg: 'bg-blue-500/15', fg: 'text-blue-400' },
  solutions: { Icon: RotateCcw, bg: 'bg-emerald-500/15', fg: 'text-emerald-400' },
  business: { Icon: Building2, bg: 'bg-violet-500/15', fg: 'text-violet-400' },
  support: { Icon: HelpCircle, bg: 'bg-amber-500/15', fg: 'text-amber-400' },
  chat: { Icon: Sparkles, bg: 'bg-lime-500/15', fg: 'text-lime-400' },
} satisfies Record<string, { Icon: LucideIcon; bg: string; fg: string }>;

type AssistanceSuggestedQuestion =
  | 'Comment suivre votre commande Skoleom ?'
  | 'Modifier vos moyens de paiement enregistrés'
  | 'Activer la double authentification sur votre compte';

interface AssistanceArticle {
  key: string;
  meta: string;
  title: string;
  paragraphs: readonly string[];
  useful: number;
  notUseful: number;
}

type AssistanceContactChannel = 'chat' | 'ticket' | 'rappel';

const ASSISTANCE_ARTICLES: Readonly<Record<AssistanceSuggestedQuestion, AssistanceArticle>> = {
  'Comment suivre votre commande Skoleom ?': {
    key: 'trackOrder',
    meta: 'Article · Lecture 2 min · Mis à jour le 18 mai 2026',
    title: 'Suivre votre commande Skoleom en temps réel',
    paragraphs: [
      'Connectez-vous à votre espace personnel, ouvrez la section « Vos commandes », puis cliquez sur le numéro de suivi associé à votre achat. Vous recevez également un email à chaque étape clé de la livraison : préparation, expédition, mise en livraison et remise.',
      'Pour les commandes professionnelles, le suivi est centralisé dans votre tableau de bord Skoleom Pro avec exports CSV et notifications API.',
    ],
    useful: 412,
    notUseful: 8,
  },
  'Modifier vos moyens de paiement enregistrés': {
    key: 'payment',
    meta: 'Article · Lecture 3 min · Mis à jour le 15 mai 2026',
    title: 'Modifier vos moyens de paiement enregistrés',
    paragraphs: [
      'Rendez-vous dans Réglages → Paiements et sécurité, puis « Moyens de paiement ». Vous pouvez ajouter une carte, définir une carte par défaut ou supprimer un moyen obsolète. Les modifications sont sécurisées par authentification forte.',
      "Pour les comptes Skoleom Pro, les cartes d'entreprise et SEPA sont gérées par votre administrateur de facturation.",
    ],
    useful: 287,
    notUseful: 5,
  },
  'Activer la double authentification sur votre compte': {
    key: 'twoFactor',
    meta: 'Article · Lecture 2 min · Mis à jour le 10 mai 2026',
    title: 'Activer la double authentification sur votre compte',
    paragraphs: [
      "Activez la 2FA depuis Réglages → Sécurité → Authentification à deux facteurs. Choisissez une application d'authentification (TOTP) ou les SMS. Conservez vos codes de secours dans un endroit sûr.",
      "En cas de perte d'accès, le support peut vous accompagner après vérification d'identité.",
    ],
    useful: 356,
    notUseful: 4,
  },
};

function getAssistanceArticle(question: AssistanceSuggestedQuestion | null): AssistanceArticle {
  if (question && question in ASSISTANCE_ARTICLES) {
    return ASSISTANCE_ARTICLES[question];
  }
  return ASSISTANCE_ARTICLES['Comment suivre votre commande Skoleom ?'];
}

const ASSISTANCE_CHANNEL_PANELS: Readonly<
  Record<Exclude<AssistanceContactChannel, 'chat'>, AssistanceArticle>
> = {
  ticket: {
    key: 'ticket',
    meta: 'Support · Ticket · Délai moyen 4 h',
    title: 'Envoyer un ticket à notre équipe',
    paragraphs: [
      "Décrivez votre demande avec le maximum de détails : numéro de commande, captures d'écran, navigateur utilisé et message d'erreur éventuel. Un conseiller qualifié vous répond par email sous quatre heures ouvrées.",
      "Les comptes Pro et Entreprise bénéficient d'une file prioritaire et d'un suivi centralisé dans le tableau de bord Skoleom.",
    ],
    useful: 198,
    notUseful: 6,
  },
  rappel: {
    key: 'callback',
    meta: 'Support · Rappel · Délai moyen 30 min',
    title: 'Demander un rappel téléphonique',
    paragraphs: [
      "Indiquez votre numéro, votre créneau de disponibilité et le sujet de l'échange. Un membre de l'équipe Skoleom vous rappelle en général sous trente minutes pendant les heures de support.",
      "Pour les urgences techniques sur une boutique audiovisuelle officielle, précisez l'identifiant de votre espace vendeur afin d'accélérer la prise en charge.",
    ],
    useful: 164,
    notUseful: 4,
  },
};

function getStep4PanelContent(
  channel: AssistanceContactChannel,
  article: AssistanceArticle | null,
  question: AssistanceSuggestedQuestion | null = null,
): AssistanceArticle {
  if (channel === 'ticket') return ASSISTANCE_CHANNEL_PANELS.ticket;
  if (channel === 'rappel') return ASSISTANCE_CHANNEL_PANELS.rappel;
  if (article) return article;
  return getAssistanceArticle(question);
}

/* ── FAQ par profil visiteur ─────────────────────────────────────────────── */

interface ProfileFAQItem {
  question: string;
  article: AssistanceArticle;
}

const PROFILE_FAQ_DATA: Record<
  'particulier' | 'pro-boutique' | 'entreprise' | 'partenaire-presse',
  { topics: readonly string[]; items: readonly ProfileFAQItem[] }
> = {
  particulier: {
    topics: [
      'Commande & livraison',
      'Paiement & facturation',
      'Compte & sécurité',
      'Boutique audiovisuelle',
      'Abonnement',
      'Problème technique',
    ],
    items: [
      {
        question: 'Comment suivre votre commande Skoleom ?',
        article: ASSISTANCE_ARTICLES['Comment suivre votre commande Skoleom ?'],
      },
      {
        question: 'Modifier vos moyens de paiement enregistrés',
        article: ASSISTANCE_ARTICLES['Modifier vos moyens de paiement enregistrés'],
      },
      {
        question: 'Activer la double authentification sur votre compte',
        article: ASSISTANCE_ARTICLES['Activer la double authentification sur votre compte'],
      },
    ],
  },
  'pro-boutique': {
    topics: [
      'Gestion de catalogue',
      'Facturation vendeur',
      'Intégration API',
      'Commissions & paiements',
      'Support prioritaire',
      'Compte Pro',
    ],
    items: [
      {
        question: 'Comment ajouter un produit à votre catalogue ?',
        article: {
          key: 'catalogAddProduct',
          meta: 'Article · Lecture 3 min · Mis à jour le 18 mai 2026',
          title: 'Ajouter et gérer vos produits dans le catalogue Skoleom',
          paragraphs: [
            'Depuis votre tableau de bord Pro, accédez à « Catalogue » puis « Nouveau produit ». Renseignez le titre, la description, les visuels et le prix. Chaque produit est soumis à validation automatique sous 2 h avant publication.',
            "Pour les imports massifs, utilisez le template CSV disponible dans Réglages → Imports. Jusqu'à 5 000 références peuvent être importées en une seule fois.",
          ],
          useful: 342,
          notUseful: 7,
        },
      },
      {
        question: 'Suivre et encaisser vos revenus vendeur',
        article: {
          key: 'sellerRevenue',
          meta: 'Article · Lecture 2 min · Mis à jour le 15 mai 2026',
          title: 'Suivre et encaisser vos revenus vendeur',
          paragraphs: [
            "Dans votre tableau de bord, la section « Finances » affiche vos revenus en temps réel, le solde disponible et l'historique des virements. Les paiements sont déclenchés automatiquement chaque lundi si votre solde dépasse 50 €.",
            "Vous pouvez également configurer un virement immédiat sur demande depuis l'onglet « Payout ». Le délai de traitement bancaire est de 1 à 3 jours ouvrés.",
          ],
          useful: 218,
          notUseful: 3,
        },
      },
      {
        question: 'Configurer les notifications de commandes',
        article: {
          key: 'orderNotifications',
          meta: 'Article · Lecture 2 min · Mis à jour le 12 mai 2026',
          title: 'Configurer les notifications de nouvelles commandes',
          paragraphs: [
            'Rendez-vous dans Réglages → Notifications. Vous pouvez activer des alertes email, SMS ou webhook à chaque nouvelle commande, modification de statut ou retour produit.',
            "Pour les flux importants, activez le mode digest (résumé toutes les 4 h) afin d'éviter la saturation de votre messagerie.",
          ],
          useful: 187,
          notUseful: 2,
        },
      },
    ],
  },
  entreprise: {
    topics: [
      'Contrats & licences',
      "Gestion d'équipes",
      'Intégrations B2B',
      'Facturation entreprise',
      'API & SDK',
      'Conformité RGPD',
    ],
    items: [
      {
        question: 'Gérer les accès et rôles de votre équipe',
        article: {
          key: 'teamAccess',
          meta: 'Article · Lecture 3 min · Mis à jour le 16 mai 2026',
          title: 'Gérer les accès et rôles au sein de votre organisation',
          paragraphs: [
            "L'administrateur principal peut inviter des collaborateurs depuis Réglages → Équipe → Inviter un membre. Chaque membre reçoit un rôle parmi Administrateur, Gestionnaire ou Lecteur, avec des permissions granulaires par module.",
            "Les comptes Entreprise Premium bénéficient d'une intégration SSO (SAML 2.0 / OIDC) et d'une synchronisation d'annuaire Active Directory ou LDAP.",
          ],
          useful: 289,
          notUseful: 5,
        },
      },
      {
        question: 'Télécharger vos factures B2B',
        article: {
          key: 'b2bInvoices',
          meta: 'Article · Lecture 1 min · Mis à jour le 14 mai 2026',
          title: 'Accéder à vos factures et justificatifs comptables',
          paragraphs: [
            'Toutes vos factures sont disponibles dans Facturation → Historique. Elles sont téléchargeables en PDF et conformes aux exigences comptables françaises (numéro TVA intracommunautaire, mentions légales).',
            "Pour les exports automatisés, activez l'API de facturation qui pousse les documents dans votre ERP à chaque émission.",
          ],
          useful: 156,
          notUseful: 1,
        },
      },
      {
        question: "Connecter votre système via l'API Skoleom",
        article: {
          key: 'apiIntegration',
          meta: 'Article · Lecture 4 min · Mis à jour le 17 mai 2026',
          title: "Intégrer vos systèmes via l'API Skoleom",
          paragraphs: [
            "La documentation complète de l'API REST et GraphQL est disponible dans votre espace développeur. Vos clés API (production et sandbox) sont générées depuis Réglages → API & Intégrations.",
            'Skoleom propose des webhooks pour les événements clés (commandes, statuts, contenus). Des SDK officiels sont disponibles pour Node.js, Python et PHP.',
          ],
          useful: 412,
          notUseful: 9,
        },
      },
    ],
  },
  'partenaire-presse': {
    topics: [
      'Kit média',
      'Relations presse',
      'Partenariats',
      'Événements',
      'Assets visuels',
      'Contact officiel',
    ],
    items: [
      {
        question: 'Accéder au kit média officiel Skoleom',
        article: {
          key: 'mediaKit',
          meta: 'Article · Lecture 1 min · Mis à jour le 18 mai 2026',
          title: 'Télécharger le kit média officiel Skoleom',
          paragraphs: [
            "Le kit média contient logos haute résolution (SVG, PNG, fond blanc et fond noir), charte graphique, photos d'équipe autorisées et éléments de communication officiels. Disponible en téléchargement depuis votre espace partenaire.",
            'Toute utilisation des assets Skoleom doit respecter la charte graphique. En cas de doute, contactez presse@skoleom.com avant publication.',
          ],
          useful: 98,
          notUseful: 1,
        },
      },
      {
        question: 'Soumettre une demande de partenariat',
        article: {
          key: 'partnershipRequest',
          meta: 'Article · Lecture 2 min · Mis à jour le 10 mai 2026',
          title: 'Proposer un partenariat avec Skoleom',
          paragraphs: [
            "Toutes les demandes de partenariat sont traitées par l'équipe Business Development. Remplissez le formulaire en précisant votre organisation, votre audience et la nature du partenariat envisagé.",
            'Nos équipes reviennent vers vous sous 5 jours ouvrés. Pour les partenariats stratégiques, un appel de découverte est organisé avec un directeur de compte.',
          ],
          useful: 74,
          notUseful: 3,
        },
      },
      {
        question: "Contacter l'équipe presse et événements",
        article: {
          key: 'pressContact',
          meta: 'Article · Lecture 1 min · Mis à jour le 8 mai 2026',
          title: "Joindre l'équipe presse et événements Skoleom",
          paragraphs: [
            "Pour toute demande d'interview, accréditation presse ou participation à un événement Skoleom, écrivez à presse@skoleom.com. Mentionnez votre média et la nature de votre demande.",
            "Skoleom participe à plusieurs événements tech et audiovisuels par an. Notre calendrier est mis à jour chaque trimestre dans l'espace presse.",
          ],
          useful: 61,
          notUseful: 0,
        },
      },
    ],
  },
};

/* ── Assistant IA Sky (OpenAI) ───────────────────────────────────────────── */

const SESYNC_URL = process.env.NEXT_PUBLIC_SESYNC_URL || 'https://sesync.skoleom.com';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

interface AssistanceProductItem {
  id: string;
  productId: number;
  productTitle: string;
  productPrice: number;
  productImages: string[];
  external_url: string;
}

interface AssistanceWooProduct {
  id: number;
  title?: string;
  name?: string;
  price?: string;
  featured_image?: string;
  images?: string[];
  external_url?: string;
}

interface AssistanceWooApiResponse {
  data?: AssistanceWooProduct[];
}

interface SkyVideoHit {
  id?: string;
  video_id: string;
  title?: string;
  duration?: string;
  video_thumbnail_url?: string;
  info_profile?: { title?: string };
}

interface SkyVideoApiResponse {
  data?: SkyVideoHit | SkyVideoHit[];
}

type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string };

async function askSkyAI(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY as string | undefined;
  if (!apiKey) throw new Error('Clé API manquante (VITE_OPENAI_API_KEY)');
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ model: 'gpt-4o-mini', messages, max_tokens: 450, temperature: 0.7 }),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}`);
  const data = (await res.json()) as { choices: [{ message: { content: string } }] };
  return data.choices[0]?.message?.content?.trim() ?? "Je n'ai pas pu répondre.";
}

const ASSISTANCE_TOTAL_STEPS = 5;

type VisitorProfileId = 'particulier' | 'pro-boutique' | 'entreprise' | 'partenaire-presse';

interface QualificationOption {
  id: VisitorProfileId;
  title: string;
  desc: string;
  Icon: LucideIcon;
  iconClassName: string;
}

const QUALIFICATION_OPTIONS: readonly QualificationOption[] = [
  {
    id: 'particulier',
    title: 'Particulier',
    desc: 'Compte, achats, abonnements personnels et utilisation quotidienne.',
    Icon: User,
    iconClassName: 'text-sky-500',
  },
  {
    id: 'pro-boutique',
    title: 'Pro / Boutique',
    desc: 'Vendeur audiovisuel officiel Skoleom, gestion de catalogue.',
    Icon: Store,
    iconClassName: 'text-black',
  },
  {
    id: 'entreprise',
    title: 'Entreprise',
    desc: "Contrats, intégrations, gestion d'équipes et solutions B2B.",
    Icon: Building2,
    iconClassName: 'text-neutral-500',
  },
  {
    id: 'partenaire-presse',
    title: 'Partenaire / Presse',
    desc: 'Groupe Skoleom, événements, relations presse et partenariats.',
    Icon: Headphones,
    iconClassName: 'text-black',
  },
];

/** Bouton de retour en bas du bloc d'étape (parcours Assistance, étapes 2 → 5). */
function AssistancePreviousStepButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-8 flex items-center gap-2 text-left text-sm font-medium text-white/55 transition hover:text-white"
      aria-label={label}
    >
      <ArrowLeft size={16} className="shrink-0" aria-hidden />
      <span className="min-w-0 break-words">{label}</span>
    </button>
  );
}

/* ── Type étendu pour les messages du chat local ─────────────────────────── */
type LocalChatMsg = { role: 'assistant' | 'user'; text: string; kind?: 'products' | 'greeting' };

/* ── Regex : questions de support/aide (ne doivent PAS déclencher une recherche produit) */
const SUPPORT_QUERY_RE =
  /\b(problèm|problem|aide|help|commande|livraison|rembours|retour|annul|facture|compte|connexion|mot\s*de\s*passe|paiement|erreur|bug|assistance|support|contacter|contact|réclamation|reclamation|délai|tracking|suivi|expédition|expedition|litig|récupér|récuperer|récupérer|bloqu)/i;

/* ── Regex : questions spécifiques sur les OFFRES Skoleom (tarifs, licences…) */
const SKOLEOM_OFFER_RE =
  /\b(tarif|licen[sc]e|audiovisual\s*store|boutique\s*audiovisuelle|abonnement|souscrire|vos?\s+offres?|vous\s+(vendez|proposez|faites)|qu.est.ce.que\s+vous|skoleom\s+gpt|distribution|commission)\b/i;

/* ── Regex : demande de vidéos dans le chat */
const VIDEO_REQUEST_RE =
  /\b(vid[eé]o[s]?|montre.?(moi|nous).*(vid[eé]o|film)|affiche.*(vid[eé]o|film)|voir.*(vid[eé]o|film)|film[s]?|regarder)\b/i;

/* ── Regex : intention d'achat ou d'intérêt produit (fallback quand GPT ne donne pas de KEYWORDS) */
const PRODUCT_QUERY_RE =
  /\b(cherche|trouv|achet|command|produit[s]?|article[s]?|voudr|aimerai|intéress|interest|recommand|suggèr|suggere|similaire|alternative|prix|coût|pas\s*cher|moins\s*cher|promo|solde|pens[e]?\s+[aà]|réfléchi|reflechi|hésit|hesit|envie\s+d[e']|ça\s+m.intéress|ca\s+m.interest|curieux|curious|compar|découvr|discover|explorer?|looking\s+for|want\s+to\s+(buy|get|find)|i.?d\s+like|find\s+me|buy|shop|considering|thinking\s+(about|of))/i;

/* ── Carte produits inline dans le chat ──────────────────────────────────── */
function ProductCatalogCard() {
  return (
    <div className="w-full space-y-3 text-sm">
      <p className="font-semibold text-white">Voici ce que propose Skoleom&nbsp;:</p>

      {/* Skoleom GPT */}
      <div className="rounded-xl border border-univ-lime/25 bg-white/5 p-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-univ-lime">
          Skoleom GPT · Distribution
        </p>
        <ul className="space-y-1 text-white/80">
          <li>
            • Mise en place distribution :{' '}
            <span className="font-semibold text-white">250 000 € HT</span>
          </li>
          <li>
            • Prix moyen produit de marque :{' '}
            <span className="font-semibold text-white">50 € HT</span>
          </li>
          <li>
            • Commission Skoleom : <span className="font-semibold text-white">20 %</span> (soit 10 €
            HT/vente)
          </li>
        </ul>
      </div>

      {/* Audiovisual Store Page */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-univ-lime">
          Audiovisual Store Page
        </p>
        <div className="space-y-2">
          {[
            {
              tier: 'Start-up',
              license: '50 K€',
              install: '75 K€',
              maintenance: '5 K€/mois',
              sub: '4 000 €/mois',
            },
            {
              tier: 'PME / ETI',
              license: '250 K€',
              install: '180 K€',
              maintenance: '10 K€/mois',
              sub: '8 000 €/mois',
            },
            {
              tier: 'Grands Comptes',
              license: '1,5 M€',
              install: '600 K€',
              maintenance: '25 K€/mois',
              sub: '15 000 €/mois',
            },
          ].map(({ tier, license, install, maintenance, sub }) => (
            <div key={tier} className="rounded-lg border border-white/8 bg-black/30 px-3 py-2.5">
              <p className="mb-1.5 font-semibold text-white">{tier}</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-xs text-white/60">
                <span>
                  Licence annuelle <span className="text-white/90">{license}</span>
                </span>
                <span>
                  Installation <span className="text-white/90">{install}</span>
                </span>
                <span>
                  Maintenance <span className="text-white/90">{maintenance}</span>
                </span>
                <span>
                  Abonnement <span className="text-white/90">{sub}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-white/40">
          Redistribution : 20 % commission globale, dont 30 % reversés au propriétaire de page.
        </p>
      </div>

      <p className="text-xs text-white/50">
        Une question sur une offre ? Écrivez-moi ou contactez{' '}
        <a
          href="mailto:assistance@skoleom.com"
          className="text-univ-lime underline underline-offset-2 hover:no-underline"
        >
          assistance@skoleom.com
        </a>
      </p>
    </div>
  );
}

const SESPORTS_BASE = 'https://sesports.skoleom.com/boutique/product';

function AssistanceProductCard({ product }: { product: AssistanceProductItem }) {
  const img = product.productImages?.[0];
  return (
    <a
      href={`${SESPORTS_BASE}/${product.productId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-white/8 bg-[#111] transition hover:border-univ-lime/40"
    >
      <div className="aspect-[3/4] overflow-hidden bg-white/5">
        {img ? (
          <img
            src={img}
            alt={product.productTitle}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-white/20">
            No image
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="mb-1 line-clamp-2 text-sm font-medium text-white/90">
          {product.productTitle}
        </p>
        {product.productPrice > 0 && (
          <p className="text-sm font-bold text-univ-lime">{product.productPrice.toFixed(2)} €</p>
        )}
      </div>
    </a>
  );
}

function renderInline(text: string): React.ReactNode {
  const TOKEN_RE =
    /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const parts = text.split(TOKEN_RE);
  return parts.map((part, i) => {
    if (/^\*\*[^*]+\*\*$/.test(part))
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    if (/^\*[^*]+\*$/.test(part))
      return (
        <em key={i} className="text-white/80">
          {part.slice(1, -1)}
        </em>
      );
    if (/^`[^`]+`$/.test(part))
      return (
        <code key={i} className="rounded bg-white/10 px-1 py-0.5 text-xs font-mono text-univ-lime">
          {part.slice(1, -1)}
        </code>
      );
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part))
      return (
        <a
          key={i}
          href={`mailto:${part}`}
          className="text-univ-lime underline underline-offset-2 hover:no-underline"
        >
          {part}
        </a>
      );
    return part;
  });
}

function renderChatText(text: string): React.ReactNode {
  const lines = text.split('\n');
  const blocks: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let listType: 'ul' | 'ol' = 'ul';

  const flushList = () => {
    if (!listItems.length) return;
    const Tag = listType;
    blocks.push(
      <Tag
        key={`list-${blocks.length}`}
        className={`my-1 space-y-1 ${listType === 'ol' ? 'list-none' : ''}`}
      >
        {listItems}
      </Tag>,
    );
    listItems = [];
  };

  lines.forEach((raw, idx) => {
    const line = raw.trimEnd();

    if (!line.trim()) {
      flushList();
      return;
    }

    const bulletMatch = line.match(/^[\s]*[-•]\s+(.+)/);
    const numberedMatch = line.match(/^[\s]*(\d+)[.)]\s+(.+)/);
    const h2Match = line.match(/^#{1,2}\s+(.+)/);
    const h3Match = line.match(/^###\s+(.+)/);

    if (h2Match) {
      flushList();
      blocks.push(
        <p
          key={idx}
          className="mt-3 mb-1 text-[13px] font-bold uppercase tracking-widest text-white/50"
        >
          {renderInline(h2Match[1])}
        </p>,
      );
    } else if (h3Match) {
      flushList();
      blocks.push(
        <p key={idx} className="mt-2 font-semibold text-white">
          {renderInline(h3Match[1])}
        </p>,
      );
    } else if (bulletMatch) {
      listType = 'ul';
      listItems.push(
        <li key={idx} className="flex items-start gap-2 text-white/90">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-univ-lime" aria-hidden />
          <span>{renderInline(bulletMatch[1])}</span>
        </li>,
      );
    } else if (numberedMatch) {
      listType = 'ol';
      listItems.push(
        <li key={idx} className="flex items-start gap-2 text-white/90">
          <span className="shrink-0 font-semibold text-univ-lime">{numberedMatch[1]}.</span>
          <span>{renderInline(numberedMatch[2])}</span>
        </li>,
      );
    } else {
      flushList();
      blocks.push(
        <p key={idx} className="text-white/90 leading-relaxed">
          {renderInline(line)}
        </p>,
      );
    }
  });

  flushList();
  return <div className="space-y-1.5">{blocks}</div>;
}

function fmtElapsed(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  if (m === 0) return `${sec} s`;
  return `${m} min ${sec < 10 ? '0' : ''}${sec} s`;
}

const cleanQueryFallback = (text: string): string =>
  text
    .replace(
      /^(j['']?aimerai[st]?\s+(m[''])?achet[e]?r?|je\s+(cherche|pense\s+[aà](\s+achet[e]?r?)?|réfléchi[st]?\s+[aà]|hésite\s+(entre|sur)|voudrais?\s*(achet[e]?r?)?|veux\s*(achet[e]?r?)?|veux|voudrais?|m['']intéress[e]?\s+[aà]|compar[e]?)|montre.?moi|affiche|donne.?moi|i\s+(want|need|would\s+like)(\s+to\s+(buy|get|find))?|i.?m\s+(looking\s+for|thinking\s+about|considering|interested\s+in|curious\s+about)|looking\s+for|thinking\s+about|considering|i.?d\s+like(\s+to\s+(buy|get))?)\s*/gi,
      '',
    )
    .replace(/\bm['']achet[e]?r?\s+/gi, '')
    .replace(/\b(un|une|des|le|la|les|du|de|d[e'])\s+/gi, '')
    .replace(/\bproduit[s]?\s*/gi, '')
    .trim() || text.trim();






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
