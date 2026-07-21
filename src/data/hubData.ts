/**
 * Données des pages « hub » (footer-pages) pour le rendu React NATIF.
 * Bloc HUB_PAGES / HUB_COLUMNS : auto-généré depuis footer-pages/shared/hub-pages.js.
 * Le reste (images, méta showcase, liens canoniques) est curé à la main.
 *
 * Seuls les slugs listés dans MIGRATED_HUB_SLUGS sont rendus nativement ;
 * les pages sur-mesure (boutiques, pour-les-pros, créer-boutique, store-page,
 * univers, catégories…) restent servies par l'iframe (HubEmbedPage).
 */

export interface HubSection {
  title: string;
  paragraphs: string[] | null;
  items: string[] | null;
}
export interface HubPage {
  id: string;
  slug: string;
  column: string;
  eyebrow: string;
  color: string;
  logo: string;
  title: string;
  intro: string;
  sections: HubSection[];
  cta: { label: string; href: string } | null;
}
export interface HubColumn {
  key: string;
  title: string;
  hub: string;
  pages: string[];
}

export const HUB_PAGES: Record<string, HubPage> = {
  mission: {
    id: 'mission',
    slug: 'mission',
    column: 'about',
    eyebrow: 'À propos de Skoleom',
    color: '#C8FF3B',
    logo: '/logo/logo-skoleom-brand.webp',
    title: 'Notre mission',
    intro:
      "Rendre chaque vidéo achetable, partout dans le monde, sans rupture entre l'envie et l'achat.",
    sections: [
      {
        title: "Notre raison d'être",
        paragraphs: [
          "Chaque jour, des milliards d'heures de vidéo sont regardées — streaming, réseaux sociaux, TV connectée. Entre le désir d'un produit vu à l'écran et l'achat, il existe une rupture. Skoleom la fait disparaître.",
        ],
        items: null,
      },
      {
        title: 'Watch. Touch. Buy.®',
        paragraphs: null,
        items: [
          'Watch — Regarder sans interruption.',
          'Touch — Interagir avec ce que vous voyez.',
          'Buy — Acheter dans le contenu, sans redirection.',
        ],
      },
      {
        title: 'Nos valeurs',
        paragraphs: null,
        items: [
          'Innovation brevetée',
          'Immersion contenu-commerce',
          'Souveraineté technologique',
          'Mesure en temps réel',
        ],
      },
    ],
    cta: {
      label: 'Découvrir la technologie',
      href: 'technologie',
    },
  },
  technologie: {
    id: 'technologie',
    slug: 'technologie',
    column: 'about',
    eyebrow: 'À propos de Skoleom',
    color: '#00D4FF',
    logo: '/logo/sesync.webp',
    title: 'Notre technologie',
    intro:
      "Un moteur audiovisuel shoppable qui reconnaît ce que l'on regarde et rend achetable tout ce que l'on voit.",
    sections: [
      {
        title: 'Le moteur shoppable',
        paragraphs: [
          "Analyse du contenu, identification des produits en temps réel, points d'achat interactifs sans rompre l'expérience. Connecté à 2 000+ plateformes OTT et des milliards de sites.",
        ],
        items: null,
      },
      {
        title: '4 piliers',
        paragraphs: null,
        items: [
          'AI Recognition — identification temps réel',
          'Smart Capsules — interactives in-vidéo',
          'One Tap — zéro redirection',
          'Buy in Context — achat sans quitter le flux',
        ],
      },
      {
        title: 'Briques propriétaires',
        paragraphs: null,
        items: [
          'SeContent® · The25x® · SeSync® · Capsules®',
          'Monetizer Studio® · Token Marque · OTT Integration',
        ],
      },
    ],
    cta: {
      label: 'Voir les brevets',
      href: 'brevets',
    },
  },
  brevets: {
    id: 'brevets',
    slug: 'brevets',
    column: 'about',
    eyebrow: 'À propos de Skoleom',
    color: '#7B2FFF',
    logo: '/logo/logo-skoleom.webp',
    title: 'Brevet Skoleom',
    intro:
      "Technologie propriétaire protégée par trois familles de brevets, déposées et étendues à l'international.",
    sections: [
      {
        title: 'Brevet SKM1',
        paragraphs: null,
        items: [
          'Accès aux ressources distantes depuis un contenu audiovisuel',
          'FR2201013A / EP4473738 / WO2023148295A1',
          'Dépôt : 4 février 2022',
        ],
      },
      {
        title: 'Brevet SKM2',
        paragraphs: null,
        items: [
          "Enrichissement d'un contenu audiovisuel",
          'FR2201014A / EP4473422 / WO2023148296A1',
          'Dépôt : 4 février 2022',
        ],
      },
      {
        title: 'Brevet SKM3',
        paragraphs: null,
        items: [
          'Accès depuis un équipement de télévision connectée',
          'FR2309179 / WO2025046115A1',
          'Dépôt : 1er septembre 2023',
        ],
      },
      {
        title: 'Marques déposées',
        paragraphs: [
          "Skoleom®, SeContent®, The25x®, SkoleToon's®, Monetizer Studio® — protection dans plus de 50 pays.",
        ],
        items: null,
      },
    ],
    cta: {
      label: "L'écosystème",
      href: 'ecosysteme',
    },
  },
  ecosystem: {
    id: 'ecosystem',
    slug: 'ecosysteme',
    column: 'about',
    eyebrow: 'À propos de Skoleom',
    color: '#FF6B35',
    logo: '/logo/logo-audiovisual-store.webp',
    title: "L'écosystème Skoleom",
    intro:
      'Boutiques audiovisuelles, services grand public, solutions pro et entités du Groupe — un écosystème complet.',
    sections: [
      {
        title: 'Boutiques audiovisuelles',
        paragraphs: null,
        items: ["The25x® · SeSports · Cares · SkoleToon's"],
      },
      {
        title: 'Pour tous',
        paragraphs: null,
        items: ['Skoleom Page · SeSync · Skoleom Shop · Magazine'],
      },
      {
        title: 'Pour les Pros',
        paragraphs: null,
        items: ['Monetizer Studio · Skoleom Ads · Skoleom Pay · SVE API'],
      },
      {
        title: 'Le Groupe',
        paragraphs: null,
        items: ['Skoleom Group · Platform Inc. · Nexus Park · Skoleom Invest'],
      },
    ],
    cta: {
      label: 'Explorer les boutiques',
      href: 'boutiques',
    },
  },
  financement: {
    id: 'financement',
    slug: 'financement',
    column: 'about',
    eyebrow: 'À propos de Skoleom',
    color: '#FFD000',
    logo: '/logo/LOGO%20SKOLEOM%20INVEST%20.png',
    title: 'Programmes de financement',
    intro: "Skoleom Invest — espace d'information dédié au financement du groupe Skoleom.",
    sections: [
      {
        title: 'Avertissement',
        paragraphs: [
          'Contenu informatif uniquement. Ne constitue pas une offre au public ni un conseil en investissement. Risque de perte en capital.',
        ],
        items: null,
      },
      {
        title: 'Skoleom Invest',
        paragraphs: [
          "Informations centralisées sur invest.skoleom.com pour les investisseurs souhaitant comprendre l'écosystème et sa trajectoire.",
        ],
        items: null,
      },
      {
        title: 'Capital',
        paragraphs: null,
        items: ['Skoleom Platform Inc. — 194M€ de capital social'],
      },
    ],
    cta: {
      label: 'Contact investisseurs',
      href: 'investisseurs',
    },
  },
  'comment-ca-marche': {
    id: 'comment-ca-marche',
    slug: 'comment-ca-marche',
    column: 'public',
    eyebrow: 'Pour tous',
    color: '#C8FF3B',
    logo: '/logo/logo-watch-touch-buy.webp',
    title: 'Comment ça marche',
    intro:
      'Watch. Touch. Buy.® — la skoléomisation en quatre étapes : regarder un contenu, toucher un produit, acheter sans quitter la vidéo, cumuler du cashback.',
    sections: [
      {
        title: 'Le principe',
        paragraphs: [
          "Skoleom repose sur SeSync®, technologie brevetée internationale. Elle permet l'achat directement à l'intérieur de tout contenu audiovisuel, sans aucune redirection. Plus besoin de chercher un produit vu à l'écran : il devient achetable au moment où vous le voyez, sur +2 000 plateformes OTT et des milliards de sites.",
        ],
        items: null,
      },
      {
        title: "01 — WATCH · Regardez n'importe quel contenu",
        paragraphs: [
          "Regardez un live, un replay, une story, un film, une série ou un extrait TV sur n'importe quelle plateforme connectée à Skoleom : Netflix, Disney+, Amazon Prime, YouTube, TikTok, Instagram et bien d'autres.",
        ],
        items: ['+2 000 plateformes OTT · +1 milliard de sites · 190 pays'],
      },
      {
        title: "02 — TOUCH · L'IA détecte, vous touchez",
        paragraphs: [
          "L'intelligence artificielle Skoleom reconnaît automatiquement les produits dans la vidéo et affiche une capsule interactive à votre demande : un tap, un toucher ou une commande vocale. Ajout au panier intégré, sans pause du flux vidéo.",
        ],
        items: ['IA de reconnaissance · Capsule interactive · Zéro pause'],
      },
      {
        title: '03 — BUY · Payez sans quitter la vidéo',
        paragraphs: [
          'SeSync® et Skoleom Pay exécutent le paiement directement dans la vidéo. Vous reprenez le contenu au même timecode — la transaction se fait en arrière-plan, de manière totalement invisible. Aucune redirection, jamais.',
        ],
        items: ['Skoleom Pay · Paiement sécurisé · Carte & Wallet'],
      },
      {
        title: '04 — EARN · Cumulez du cashback automatiquement',
        paragraphs: [
          "Chaque achat effectué via Skoleom génère du cashback crédité directement sur votre Skoleom Wallet. Plus vous achetez, plus votre niveau augmente — Bronze, Argent, Or, Platine — et plus vos avantages s'améliorent.",
        ],
        items: ['Cashback automatique · 4 niveaux de fidélité · Wallet intégré'],
      },
    ],
    cta: {
      label: 'Regarder et acheter',
      href: 'regarder-acheter',
    },
  },
  'regarder-acheter': {
    id: 'regarder-acheter',
    slug: 'regarder-acheter',
    column: 'public',
    eyebrow: 'Pour tous',
    color: '#00D4FF',
    logo: '/logo/logo-watch-touch-buy.webp',
    title: 'Regarder et acheter',
    intro:
      "Tout contenu devient une boutique. Peu importe où vous regardez — Skoleom transforme chaque visionnage en opportunité d'achat, naturellement.",
    sections: [
      {
        title: 'Comment ça fonctionne pour vous',
        paragraphs: [
          "Pendant que vous regardez, Skoleom détecte les produits visibles à l'écran et les rend disponibles via des capsules interactives. Un simple toucher suffit pour voir le prix, les options et commander — grâce au mimétisme comportemental, vous achetez naturellement ce que vous voyez.",
        ],
        items: null,
      },
      {
        title: 'Live Sport',
        paragraphs: [
          'Regardez un match en direct et achetez le maillot officiel, les chaussures ou l’équipement de vos joueurs préférés — directement pendant le live, sans interruption. Capsules actives en temps réel.',
        ],
        items: null,
      },
      {
        title: 'Films & Séries',
        paragraphs: [
          'Compatible Netflix, Disney+, Amazon Prime et +2 000 plateformes OTT. Achetez la veste de votre héros, la déco aperçue dans votre série ou les gadgets vus à l’écran.',
        ],
        items: null,
      },
      {
        title: 'Clips & Concerts',
        paragraphs: [
          "Pendant un clip musical ou un live de concert, achetez le merchandising officiel, les instruments ou la tenue de l'artiste d'un simple toucher — sans jamais quitter la musique. Artistes partenaires Skoleom Music.",
        ],
        items: null,
      },
      {
        title: 'Réseaux sociaux',
        paragraphs: [
          'Instagram, TikTok, YouTube Shorts — les capsules Skoleom s’intègrent dans les vidéos des créateurs. Achetez les produits testés par vos influenceurs préférés instantanément.',
        ],
        items: null,
      },
      {
        title: 'Tous vos écrans, zéro friction',
        paragraphs: null,
        items: [
          'TV connectée — télécommande ou mobile comme seconde manette',
          'Smartphone et tablette — achat en un toucher',
          'Ordinateur — navigation fluide sur le web',
          "Le paiement s'exécute dans le flux — vous reprenez la vidéo où vous l'aviez laissée",
        ],
      },
    ],
    cta: {
      label: 'Explorer les boutiques',
      href: 'boutiques',
    },
  },
  cashback: {
    id: 'cashback',
    slug: 'cashback',
    column: 'public',
    eyebrow: 'Pour tous',
    color: '#FF3CAC',
    logo: '/logo/the25x.webp',
    title: 'Cashback & récompenses',
    intro:
      'Plus vous achetez, plus vous gagnez. Le programme de fidélité Skoleom récompense chaque achat — cashback automatique, instantané et utilisable directement dans votre Wallet.',
    sections: [
      {
        title: 'Le fonctionnement',
        paragraphs: [
          "Chaque achat effectué via une capsule Skoleom génère automatiquement du cashback — de 2 à 10% selon votre niveau. Aucune action requise : il est crédité instantanément sur votre Wallet et utilisable dès 1€ sur n'importe quelle boutique Skoleom.",
        ],
        items: null,
      },
      {
        title: 'Cashback automatique — 2 à 10%',
        paragraphs: [
          'Chaque achat effectué via une capsule Skoleom génère automatiquement du cashback selon votre niveau de fidélité. Crédité instantanément sur votre Wallet, sans aucune action de votre part.',
        ],
        items: null,
      },
      {
        title: 'Points de fidélité — Skoleom Stars',
        paragraphs: [
          'En plus du cashback, accumulez des points Skoleom Stars à chaque achat — points ×2 sur les boutiques partenaires. Ces points débloquent des avantages exclusifs, des produits gratuits et des accès prioritaires.',
        ],
        items: null,
      },
      {
        title: 'Offres exclusives — jusqu’à -15%',
        paragraphs: [
          'Accédez à des ventes privées, des réductions exclusives et des produits en avant-première réservés aux membres Skoleom selon votre niveau de fidélité.',
        ],
        items: null,
      },
      {
        title: '4 niveaux de fidélité',
        paragraphs: null,
        items: [
          "Bronze — dès l'inscription : 2% de cashback, capsules standard, Wallet Skoleom",
          "Argent — dès 500€ d'achats : 4% de cashback, offres exclusives mensuelles, support prioritaire",
          "Or — dès 2 000€ d'achats : 7% de cashback, ventes privées, livraison prioritaire, points ×2 partenaires",
          "Platine — dès 10 000€ d'achats : 10% de cashback, accès avant-première, concierge Skoleom, invitations événements",
        ],
      },
      {
        title: 'Suivi transparent',
        paragraphs: [
          "Consultez vos gains, l'historique des transactions et le statut de vos récompenses en temps réel depuis Skoleom Wallet — sans frais cachés.",
        ],
        items: null,
      },
    ],
    cta: {
      label: 'Skoleom Wallet',
      href: 'wallet',
    },
  },
  wallet: {
    id: 'wallet',
    slug: 'wallet',
    column: 'public',
    eyebrow: 'Pour tous',
    color: '#C8FF3B',
    logo: '/logo/Skoleom%20Shop.webp',
    title: 'Skoleom Wallet',
    intro:
      'Votre argent, partout avec vous. Le Skoleom Wallet centralise vos cashbacks, vos paiements et vos avantages en un seul endroit — rechargez, payez, encaissez, en temps réel.',
    sections: [
      {
        title: 'À quoi sert Skoleom Wallet',
        paragraphs: [
          "Skoleom Wallet centralise tout ce qui touche à vos achats in-content : paiement, historique, cashback, statut de livraison et préférences. Il s'active automatiquement lors de votre premier achat via une capsule Skoleom.",
          '+194M€ de capital social · 190 pays disponibles · virement max garanti 48h · 0€ de frais de tenue de compte',
        ],
        items: null,
      },
      {
        title: 'Paiement in-content',
        paragraphs: [
          'Payez directement dans les vidéos via votre Wallet Skoleom, sans saisir vos coordonnées bancaires à chaque achat. Carte bancaire (Visa, Mastercard, moyens locaux), Skoleom Pay ou solde Wallet.',
        ],
        items: null,
      },
      {
        title: 'Cashback instantané',
        paragraphs: [
          "Chaque achat crédite automatiquement votre Wallet en cashback. Utilisable dès 1€ sur n'importe quelle boutique Skoleom — pour de nouveaux achats ou à consulter à tout moment.",
        ],
        items: null,
      },
      {
        title: 'Virement vers votre banque',
        paragraphs: [
          'Transférez votre solde Wallet vers votre compte bancaire sous 48h. Virement SEPA gratuit dès 10€.',
        ],
        items: null,
      },
      {
        title: 'Multi-devises',
        paragraphs: [
          'Achetez dans 190 pays. Le Wallet gère automatiquement les conversions au meilleur taux de marché.',
        ],
        items: null,
      },
      {
        title: 'Suivi des commandes',
        paragraphs: null,
        items: [
          'Historique complet des achats in-content',
          'Notifications de confirmation et de livraison',
          'Accès aux factures et au service après-vente',
        ],
      },
    ],
    cta: {
      label: 'Sécurité & confidentialité',
      href: 'securite',
    },
  },
  securite: {
    id: 'securite',
    slug: 'securite',
    column: 'public',
    eyebrow: 'Pour tous',
    color: '#7B2FFF',
    logo: '/logo/sesync.webp',
    title: 'Sécurité & confidentialité',
    intro:
      'Votre confiance, notre priorité absolue. Une infrastructure de sécurité de niveau bancaire — IA, blockchain et chiffrement de bout en bout protègent chaque transaction et chaque donnée.',
    sections: [
      {
        title: 'Une sécurité de niveau bancaire',
        paragraphs: [
          'Skoleom repose sur une infrastructure de sécurité combinant IA, blockchain et chiffrement de bout en bout. Partenaires et certifications : Oracle Cloud (infrastructure sécurisée), Nvidia (traitement IA), INPI / EUIPO (brevets protégés), RGPD, PCI DSS et Union des Marques.',
        ],
        items: null,
      },
      {
        title: 'Chiffrement de bout en bout',
        paragraphs: [
          'Toutes vos données personnelles et financières sont chiffrées avec un protocole AES-256. Ni Skoleom, ni aucun tiers ne peut accéder à vos informations bancaires.',
        ],
        items: null,
      },
      {
        title: 'Blockchain & traçabilité',
        paragraphs: [
          "Chaque transaction est enregistrée sur la blockchain Skoleom. Immutable, transparente et vérifiable — votre historique d'achat est certifié et infalsifiable.",
        ],
        items: null,
      },
      {
        title: 'Authentification avancée',
        paragraphs: [
          'Double authentification (2FA), biométrie (Face ID / empreinte) et tokens de session à durée limitée protègent votre compte contre tout accès non autorisé.',
        ],
        items: null,
      },
      {
        title: 'Données personnelles RGPD',
        paragraphs: [
          'Skoleom est 100% conforme au RGPD européen. Vous contrôlez totalement vos données : consultation, export, modification et suppression à tout moment. Vos données ne sont jamais revendues à des tiers.',
        ],
        items: null,
      },
      {
        title: 'IA anti-fraude temps réel',
        paragraphs: [
          'Notre IA analyse chaque transaction en temps réel pour détecter les comportements suspects. Remboursement garanti en cas de fraude avérée sous 72h.',
        ],
        items: null,
      },
      {
        title: 'Infrastructure Oracle & Nvidia',
        paragraphs: [
          "Skoleom s'appuie sur l'infrastructure cloud sécurisée d'Oracle et les GPU Nvidia pour garantir 99,99% de disponibilité et une latence inférieure à 200ms.",
        ],
        items: null,
      },
    ],
    cta: {
      label: 'Assistance',
      href: 'assistance',
    },
  },
  actualites: {
    id: 'actualites',
    slug: 'actualites',
    column: 'group',
    eyebrow: 'Groupe',
    color: '#FF6B35',
    logo: '/logo/Skoleom%20Magazine%20Light.webp',
    title: 'Actualités',
    intro:
      'Suivez toutes les avancées technologiques, partenariats stratégiques et actualités du groupe Skoleom à travers le monde.',
    sections: [
      {
        title: '10 milliards de vidéos skoléomisées par jour — un record mondial',
        paragraphs: [
          'La technologie SeSync® de Skoleom franchit le cap symbolique des 10 milliards de vidéos traitées quotidiennement, confirmant la position du groupe comme leader mondial du retail media interactif. Plus de 5,5 milliards de personnes sont désormais exposées chaque jour à des contenus transformables en actes d’achat.',
          'Technologie · 15 novembre 2025',
        ],
        items: null,
      },
      {
        title: 'Accord stratégique majeur avec Oracle Cloud',
        paragraphs: [
          'Infrastructure mondiale sur Oracle pour garantir 99,99% de disponibilité et une latence inférieure à 200ms dans 190 pays.',
          'Partenariat · 28 octobre 2025',
        ],
        items: null,
      },
      {
        title: '«Meilleure Innovation Retail Media 2025» au Cannes Lions',
        paragraphs: [
          'Le jury international récompense SeSync® pour sa capacité à révolutionner le commerce interactif mondial.',
          'Award · 12 octobre 2025',
        ],
        items: null,
      },
      {
        title: 'Ouverture des bureaux de Dubai, New York et Tokyo',
        paragraphs: [
          "Expansion internationale accélérée : 3 nouveaux marchés stratégiques pour atteindre l'objectif 2030.",
          'Expansion · 5 octobre 2025',
        ],
        items: null,
      },
    ],
    cta: {
      label: 'Espace presse',
      href: 'presse',
    },
  },
  carrieres: {
    id: 'carrieres',
    slug: 'carrieres',
    column: 'group',
    eyebrow: 'Groupe',
    color: '#00D4FF',
    logo: '/logo/skoleom-studio.webp',
    title: 'Carrières',
    intro:
      "Rejoignez l'aventure mondiale. Construisez avec nous le futur du commerce interactif — Skoleom est une méritocratie pure : vos performances définissent votre évolution. Liberté, responsabilité, excellence.",
    sections: [
      {
        title: 'Pourquoi nous rejoindre',
        paragraphs: [
          "Rejoindre Skoleom, c'est participer à la construction du futur Amazon + Netflix + Apple combinés, mais en mieux. Vos revenus sont proportionnels à votre énergie et votre ambition. Vous serez fiers d'appartenir à Skoleom Group.",
        ],
        items: null,
      },
      {
        title: 'Nos valeurs',
        paragraphs: null,
        items: [
          'Excellence — exigence de qualité dans chaque présentation, chaque relation client, chaque ligne de code',
          'Liberté + Responsabilité — autonomie totale dans l’organisation, accountability complète sur les résultats',
          'Transparence — accès en temps réel aux données de ventes, commissions et classements internes',
          'Évolution rapide — les meilleurs accèdent rapidement aux rôles de Sales Directors nationaux ou régionaux',
        ],
      },
      {
        title: 'Postes ouverts',
        paragraphs: null,
        items: [
          'Sales Director — Marques & Agences · CDI · Paris / Remote · Commission illimitée',
          'Lead Engineer — IA & Machine Learning · CDI · Paris · Senior',
          'Business Developer — OTT & Plateformes · CDI · International · Bonus exceptionnel',
          'Product Manager — Skoleom Wallet & Pay · CDI · Paris · FinTech',
          "Apporteur d'Affaires — Tous secteurs · Freelance · 20 pays · 2–10% de commission",
        ],
      },
      {
        title: 'Processus de candidature',
        paragraphs: [
          'Envoyez CV et lettre de motivation à sellers@skoleom.com. Précisez le poste visé et votre motivation pour le commerce audiovisuel. Nous répondons à chaque candidature.',
        ],
        items: null,
      },
    ],
    cta: {
      label: 'Nous contacter',
      href: 'contact',
    },
  },
  investisseurs: {
    id: 'investisseurs',
    slug: 'investisseurs',
    column: 'group',
    eyebrow: 'Groupe',
    color: '#FFD000',
    logo: '/logo/LOGO%20SKOLEOM%20INVEST%20.png',
    title: 'Investisseurs',
    intro:
      "532 milliards € d'opportunité. Skoleom s'attaque à un marché de 6 500 milliards $ avec une technologie brevetée couvrant 99%+ du marché du live shopping interactif mondial.",
    sections: [
      {
        title: 'Une trajectoire comparable aux géants de la tech',
        paragraphs: [
          '« À horizon 2030, Skoleom pèsera près de 532 milliards € annuels, comparable aux géants mondiaux de la tech. »',
          "Le marché global du commerce digital représente 6 500 milliards $ en 2025. Skoleom se positionne comme la couche technologique universelle permettant à n'importe quel contenu vidéo de devenir un canal de vente. Nos partenaires stratégiques (Oracle, Nvidia, Union des Marques) confirment la validité du modèle.",
        ],
        items: null,
      },
      {
        title: 'Chiffres clés',
        paragraphs: null,
        items: [
          '20B€+ — valorisation actuelle de Skoleom Platform Inc.',
          '82B€ — revenus technologie projetés en 2030',
          '450B€ — revenus distribution marques projetés en 2030',
          '532B€ — chiffre d’affaires cumulé projeté en 2030',
          '194M€ de capital social · 400+ briques technologiques propriétaires',
        ],
      },
      {
        title: 'Projections technologie 2026–2030',
        paragraphs: null,
        items: [
          '2026 — 7 292 M€ (OTT 1 100 · SVE API 1 071 · Monetizer 5 121)',
          '2027 — 16 059 M€',
          '2028 — 31 032 M€',
          '2029 — 57 721 M€',
          '2030 — 82 156 M€',
          'Source : Skoleom Financial Projections Report 2025–2030 — estimations basées sur les contrats signés et le pipeline validé.',
        ],
      },
      {
        title: 'Contact investisseurs',
        paragraphs: [
          'Dossier investisseurs complet, demandes institutionnelles, due diligence et rendez-vous IR : sellers@skoleom.com.',
        ],
        items: null,
      },
    ],
    cta: {
      label: 'Programmes de financement',
      href: 'financement',
    },
  },
  presse: {
    id: 'presse',
    slug: 'presse',
    column: 'group',
    eyebrow: 'Groupe',
    color: '#C8FF3B',
    logo: '/logo/Skoleom%20Magazine%20Light.webp',
    title: 'Presse',
    intro:
      'Skoleom dans les médias — retrouvez tous les communiqués de presse, dossiers médias et visuels officiels Skoleom. Contact presse : presse@skoleom.com.',
    sections: [
      {
        title: 'Ils parlent de nous',
        paragraphs: [
          "Le Monde · Les Échos · BFM Business · Forbes France · Le Figaro · TechCrunch · Frenchweb · L'Usine Digitale · Le Journal du Net.",
        ],
        items: null,
      },
      {
        title: 'Communiqués de presse',
        paragraphs: null,
        items: [
          '27/05/2026 — Skoleom dévoile SeSync : la télévision devient une boutique',
          '15/11/2025 — Skoleom franchit 10 milliards de vidéos skoléomisées quotidiennes',
          '28/10/2025 — Skoleom et Oracle signent un partenariat stratégique mondial',
          '12/10/2025 — Skoleom remporte le prix «Innovation Retail Media 2025» au Cannes Lions',
          '05/10/2025 — Ouverture de bureaux à Dubai, New York et Tokyo — accélération internationale',
        ],
      },
      {
        title: 'Ressources médias',
        paragraphs: null,
        items: [
          'Press room SeSync — communiqué interactif, visuels HD',
          'Logos officiels Skoleom, SeSync®, The25x®, Monetizer Studio®',
          'Photos équipe, bureaux et événements',
          'Vidéos de démonstration Watch. Touch. Buy.®',
          'Fiches produit et chiffres clés vérifiés',
        ],
      },
      {
        title: 'Contact presse',
        paragraphs: [
          'Journalistes et rédactions : presse@skoleom.com — réponse sous 24h ouvrées. Précisez votre média et votre deadline. Kit média complet disponible sur demande.',
        ],
        items: null,
      },
    ],
    cta: null,
  },
  contact: {
    id: 'contact',
    slug: 'contact',
    column: 'group',
    eyebrow: 'Groupe',
    color: '#C8FF3B',
    logo: '/logo/sky-avatar.png',
    title: 'Contact & Assistance',
    intro:
      'Nous sommes là pour vous. Que vous soyez consommateur, marque, créateur, investisseur ou journaliste — notre équipe répond sous 24h.',
    sections: [
      {
        title: 'Un service humain, avant tout',
        paragraphs: [
          'Nous croyons que le meilleur service est un service humain. Skoleom Group — sellers@skoleom.com · www.skoleom.com.',
        ],
        items: null,
      },
      {
        title: 'Assistant Skoleom',
        paragraphs: [
          'Notre IA répond instantanément à toutes vos questions et vous oriente vers le bon interlocuteur humain. Réponse immédiate, disponible 24h/24 et 7j/7.',
        ],
        items: null,
      },
      {
        title: 'Email général',
        paragraphs: [
          'Pour toute demande, partenariat ou information : sellers@skoleom.com. Notre équipe traite chaque email avec soin et répond sous 24 heures ouvrées.',
        ],
        items: null,
      },
      {
        title: 'Commercial B2B',
        paragraphs: [
          'Marques, plateformes OTT, PME — parlez directement à notre équipe commerciale pour construire votre offre sur mesure.',
        ],
        items: null,
      },
      {
        title: 'Questions fréquentes',
        paragraphs: null,
        items: [
          'Créer un compte — inscription gratuite en moins de 30 secondes sur skoleom.com : Wallet et accès aux boutiques audiovisuelles immédiats',
          'Cashback — 2 à 10% selon votre niveau, crédité instantanément sur votre Wallet et utilisable dès 1€',
          'Sécurité — chiffrement AES-256, infrastructure Oracle Cloud, transactions certifiées blockchain, conformité PCI DSS et RGPD',
          'Marques — offres B2B et stratégie sur mesure via la page Pour les Pros, réponse commerciale sous 24h',
          'Disponibilité — 190 pays via +2 000 plateformes OTT, sur ordinateur, mobile et TV connectée',
        ],
      },
    ],
    cta: {
      label: 'Assistance',
      href: 'assistance',
    },
  },
  assistance: {
    id: 'assistance',
    slug: 'assistance',
    column: 'group',
    eyebrow: 'Groupe',
    color: '#00D4FF',
    logo: '/logo/sky-avatar.png',
    title: 'Assistance',
    intro:
      "Support technique, aide utilisateur et résolution d'incidents — notre équipe vous accompagne pour profiter pleinement de l'écosystème Skoleom.",
    sections: [
      {
        title: "Comment obtenir de l'aide",
        paragraphs: [
          "Décrivez votre problème avec le maximum de détails : plateforme utilisée (TV, mobile, web), contenu regardé, type d'achat et message d'erreur éventuel. Notre équipe traite chaque demande sous 48h ouvrées.",
        ],
        items: null,
      },
      {
        title: 'Assistance utilisateur',
        paragraphs: null,
        items: [
          'Achat in-content — capsule non affichée ou paiement bloqué',
          'Skoleom Wallet — solde, historique, récompenses',
          'Cashback — crédit non reçu ou montant incorrect',
          'Compte & confidentialité — accès, suppression, cookies',
        ],
      },
      {
        title: 'Assistance technique',
        paragraphs: null,
        items: [
          'Compatibilité TV connectée et applications OTT',
          'Problèmes de reconnaissance produit dans un contenu',
          'Livraison et suivi de commande in-content',
          'Signalement de contenu ou de produit non conforme',
        ],
      },
      {
        title: 'Partenaires & professionnels',
        paragraphs: [
          "Marques, créateurs et plateformes OTT : pour l'intégration technique, l'API ou Monetizer Studio, consultez la page Pour les Pros ou écrivez à sellers@skoleom.com en précisant « Support B2B ».",
        ],
        items: null,
      },
      {
        title: 'Nous écrire',
        paragraphs: [
          "Email : sellers@skoleom.com — objet « Assistance » + description du problème. Joignez une capture d'écran si possible.",
        ],
        items: null,
      },
    ],
    cta: {
      label: 'Contact général',
      href: 'contact',
    },
  },
};

export const HUB_COLUMNS: Record<string, HubColumn> = {
  about: {
    key: 'about',
    title: 'À propos de Skoleom',
    hub: 'a-propos-de-skoleom',
    pages: ['mission', 'technologie', 'brevets', 'ecosystem', 'financement'],
  },
  public: {
    key: 'public',
    title: 'Pour tous',
    hub: 'pour-tous',
    pages: ['comment-ca-marche', 'regarder-acheter', 'cashback', 'wallet', 'securite'],
  },
  group: {
    key: 'group',
    title: 'Groupe',
    hub: 'groupe',
    pages: ['actualites', 'carrieres', 'investisseurs', 'presse', 'contact', 'assistance'],
  },
  pros: {
    key: 'pros',
    title: 'Pour les Pros',
    hub: 'pour-les-pros',
    pages: [],
  },
};

/** Images d'illustration des blocs « showcase » (Pour tous / Groupe). */
export const TOPIC_IMG: Record<string, string> = {
  'comment-ca-marche': '/shop/pour%20tous/sesync.webp',
  'regarder-acheter': '/shop/boutiques/watchon.webp',
  cashback: '/shop/pour%20tous/the25x.webp',
  wallet: '/shop/pour%20tous/shop.webp',
  securite: '/shop/pour%20tous/page.webp',
  actualites: '/shop/groupe/event.webp',
  carrieres: '/shop/studio.webp',
  investisseurs: '/shop/boutiques/invest.webp',
  presse: '/shop/pour%20tous/magazine.webp',
  contact: '/shop/groupe/nexusPark.webp',
  assistance: '/shop/school.webp',
};

/** Intro des pages d'accueil « showcase ». */
export const SHOWCASE_INTRO: Record<string, string> = {
  public:
    "Achetez tout ce que vous voyez. Skoleom transforme chaque vidéo en expérience d'achat — zéro redirection. Payez sans quitter le contenu, cumulez du cashback et gérez tout depuis votre Wallet.",
  group:
    "Skoleom Group est le premier groupe mondial de Retail Media & Transmédia. Basé à Paris, nous développons les technologies qui permettent à chaque individu d'acheter directement à l'intérieur d'un contenu audiovisuel.",
  pros: 'Monetizer Studio, Skoleom Pay, Skoleom Ads et SVE API — les briques techniques au cœur de votre monétisation B2B.',
};

export interface Perk {
  icon: string;
  title: string;
  text: string;
}
export const GROUP_PERKS: Perk[] = [
  {
    icon: 'spark',
    title: '194M€ de capital social.',
    text: 'Skoleom Platform Inc. et 400+ briques technologiques propriétaires (brevets INPI, EUIPO, USPTO, OMPI).',
  },
  {
    icon: 'distrib',
    title: 'Technologie et distribution mondiale.',
    text: "Retail media transmédia — technologie propriétaire et distribution de marques à l'échelle internationale.",
  },
  {
    icon: 'bolt',
    title: 'Un impact quotidien mondial.',
    text: '10B+ vidéos skoléomisées par jour, 5,5B+ personnes exposées, 2 000+ plateformes OTT dans 190 pays.',
  },
];

export const GROUP_CTA = {
  contactTitle: 'Contactez-nous.',
  contactText:
    'Partenariats, presse, investisseurs ou demande générale — notre équipe vous répond sous 24h ouvrées. sellers@skoleom.com.',
  contactBtn: 'Nous contacter',
  contactHref: 'mailto:sellers@skoleom.com',
  helpTitle: 'Assistance.',
  helpText:
    "Assistant Skoleom disponible 24/7 — support technique et aide utilisateur pour profiter pleinement de l'écosystème.",
  helpBtn: "Obtenir de l'aide",
  helpHref: '/contact',
};

/** Sujets repliés dans le bloc CTA en bas de la page Groupe. */
export const GROUP_HIDDEN = ['presse', 'contact', 'assistance'];

/** Liens canoniques (clé = slug). Sinon → /hub/<slug>. */
export const LINK_OVERRIDE: Record<string, string> = {
  'comment-ca-marche': '/skoleom-page',
  'regarder-acheter': '/hub/regarder-acheter',
  mission: '/hub/mission',
  technologie: '/technology',
  brevets: '/patents',
  ecosysteme: '/ecosystem',
  financement: '/funding',
  investisseurs: '/hub/pour-les-pros',
};

export function hubLink(slug: string): string {
  return LINK_OVERRIDE[slug] || `/hub/${slug}`;
}

export type HubViewMode = 'column' | 'showcase' | 'page';
export interface HubView {
  mode: HubViewMode;
  colKey?: string;
  pageId?: string;
}

const SLUG_TO_PAGE: Record<string, string> = Object.values(HUB_PAGES).reduce(
  (acc, p) => ({ ...acc, [p.slug]: p.id }),
  {} as Record<string, string>,
);

export function resolveHubSlug(slug: string): HubView | null {
  for (const key of Object.keys(HUB_COLUMNS)) {
    const col = HUB_COLUMNS[key];
    if (col.hub === slug) {
      return { mode: key === 'about' ? 'column' : 'showcase', colKey: key };
    }
  }
  if (SLUG_TO_PAGE[slug]) return { mode: 'page', pageId: SLUG_TO_PAGE[slug] };
  return null;
}

/** Slugs servis nativement (toutes les pages pilotées par les données). */
export const MIGRATED_HUB_SLUGS = new Set<string>([
  ...Object.values(HUB_COLUMNS).map((c) => c.hub),
  ...Object.values(HUB_PAGES).map((p) => p.slug),
]);

/* ------------------------------------------------------------------ */
/* « À propos de Skoleom » — version éditoriale (sans cartes, même     */
/* mise en page que les pages Skoleom Universe). Textes condensés en   */
/* gardant l'essentiel ; un lien « En savoir plus » par section.       */
/* ------------------------------------------------------------------ */
export interface AboutSection {
  title: string;
  text: string;
  points?: string[];
  href: string;
  logo: string;
  color: string;
  /** Agrandissement visuel du logo (sans changer la taille de la case). */
  logoScale?: number;
}
export const ABOUT_PAGE: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: AboutSection[];
} = {
  eyebrow: 'Skoleom Universe',
  title: 'À propos de Skoleom',
  intro:
    'Mission, technologie, brevets, écosystème et financement : les fondations de Skoleom Universe.',
  sections: [
    {
      title: 'Notre mission',
      logo: '/logo/logo-skoleom-brand.webp',
      color: '#C8FF3B',
      text: "Rendre chaque vidéo achetable, partout dans le monde, sans rupture entre l'envie et l'achat. C'est la promesse Watch. Touch. Buy.® : regarder sans interruption, interagir avec ce que l'on voit, puis acheter directement dans le contenu — sans aucune redirection.",
      href: '/hub/mission',
    },
    {
      title: 'Notre technologie',
      logo: '/logo/sesync.webp',
      color: '#00D4FF',
      text: "Un moteur audiovisuel shoppable, SeSync®, reconnaît les produits à l'écran en temps réel et les rend achetables sans quitter la vidéo, sur plus de 2 000 plateformes OTT.",
      points: [
        'Reconnaissance par IA et capsules interactives in-vidéo',
        'Paiement « One Tap » intégré, zéro redirection',
        'Briques propriétaires : SeContent®, The25x®, Monetizer Studio®, OTT Integration',
      ],
      href: '/hub/technologie',
    },
    {
      title: 'Brevet Skoleom',
      logo: '/logo/logo-skoleom.webp',
      color: '#7B2FFF',
      text: "Une technologie propriétaire protégée par trois familles de brevets, déposées et étendues à l'international auprès de l'INPI, l'EUIPO, l'USPTO et l'OMPI. Les marques Skoleom®, SeContent®, The25x® ou Monetizer Studio® sont protégées dans plus de 50 pays.",
      points: [
        'SKM1 — accès aux ressources distantes depuis un contenu audiovisuel',
        "SKM2 — enrichissement d'un contenu audiovisuel",
        'SKM3 — accès depuis un équipement de télévision connectée',
      ],
      href: '/hub/brevets',
    },
    {
      title: "L'écosystème Skoleom",
      logo: '/logo/logo-audiovisual-store.webp',
      color: '#FF6B35',
      text: 'Un ensemble intégré, du contenu au commerce : boutiques audiovisuelles, services grand public, solutions professionnelles et entités du Groupe.',
      points: [
        "Boutiques : The25x®, SeSports, Cares, SkoleToon's",
        'Grand public : Skoleom Page, SeSync, Shop, Magazine',
        'Pros : Monetizer Studio, Skoleom Ads, Skoleom Pay, SVE API',
      ],
      href: '/hub/ecosysteme',
    },
    {
      title: 'Programmes de financement',
      logo: '/logo/LOGO%20SKOLEOM%20INVEST%20.png',
      color: '#FFD000',
      logoScale: 1.7,
      text: "Skoleom Invest centralise l'information dédiée au financement du groupe (capital social de 194 M€, Skoleom Platform Inc.). Contenu informatif uniquement : ce n'est ni une offre au public ni un conseil en investissement, et tout investissement comporte un risque de perte en capital.",
      href: '/hub/financement',
    },
  ],
};
