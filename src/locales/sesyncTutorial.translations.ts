import type { LanguageCode } from './types';
export type SesyncTutorialBundle = {
  stepLabel: string;
  stepTitle: string;
  start: string;
  next: string;
  launchHint: string;
  launchCta: string;
  steps: {
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
    step6: string;
    step7: string;
    step8: string;
    step9: string;
    step10: string;
    step11: string;
  };
};
const sesyncTutorialFr: SesyncTutorialBundle = {
  stepLabel: 'ÉTAPE {{step}}/{{total}}',
  stepTitle: 'Étape {{step}}',
  start: '▶ Démarrer',
  next: 'Suivant →',
  launchHint: 'Lancez la démo interactive si vous le souhaitez',
  launchCta: 'Lancer la démo',
  steps: {
    step1: 'Le bouton Skoleom apparaît automatiquement sur toutes vos vidéos',
    step2: 'En 1 tap, la fiche produit apparaît sans quitter Netflix',
    step3: 'Découvrez des produits similaires détectés en temps réel',
    step4: 'Sauvegardez vos coups de cœur en 1 tap',
    step5: 'Consultez la fiche détaillée du produit',
    step6: 'Achetez directement sans quitter la vidéo',
    step7: 'SeSync identifie la musique en temps réel',
    step8: "Réservez la destination que vous voyez à l'écran",
    step9: 'Accédez au contenu éditorial lié à ce que vous regardez',
    step10: 'Personnalisez votre expérience SeSync',
    step11: 'Gérez votre compte et vos préférences Skoleom',
  },
};
const sesyncTutorialEn: SesyncTutorialBundle = {
  stepLabel: 'STEP {{step}}/{{total}}',
  stepTitle: 'Step {{step}}',
  start: '▶ Start',
  next: 'Next →',
  launchHint: 'Launch the interactive demo if you wish',
  launchCta: 'Launch demo',
  steps: {
    step1: 'The Skoleom button appears automatically on all your videos',
    step2: 'One tap opens the product card without leaving Netflix',
    step3: 'Discover similar products detected in real time',
    step4: 'Save your favorites with one tap',
    step5: 'View the detailed product page',
    step6: 'Buy directly without leaving the video',
    step7: 'SeSync identifies music in real time',
    step8: 'Book the destination you see on screen',
    step9: "Access editorial content related to what you're watching",
    step10: 'Customize your SeSync experience',
    step11: 'Manage your account and Skoleom preferences',
  },
};
export const sesyncTutorialTranslations: Record<LanguageCode, SesyncTutorialBundle> = {
  fr: sesyncTutorialFr,
  en: sesyncTutorialEn,
  es: sesyncTutorialEn,
  de: sesyncTutorialEn,
  it: sesyncTutorialEn,
  nl: sesyncTutorialEn,
  pt: sesyncTutorialEn,
  ar: sesyncTutorialEn,
  hi: sesyncTutorialEn,
  zh: sesyncTutorialEn,
  id: sesyncTutorialEn,
  ru: sesyncTutorialEn,
  sw: sesyncTutorialEn,
};
