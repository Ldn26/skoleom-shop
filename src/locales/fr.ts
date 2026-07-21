import type { LocaleResource } from './types';
import { STATIC_PAGE_DOCUMENTS } from './staticPages';
const resource = {
  staticPages: STATIC_PAGE_DOCUMENTS.fr,
  common: {
    loading: 'Chargement...',
    actions: {
      close: 'Fermer le menu',
      search: 'Rechercher',
      backHome: "Retour à l'accueil",
      login: 'Connexion',
      register: 'Créer un compte',
      explore: 'Explorer',
    },
    states: {
      noResults: 'Aucun résultat',
      noResultsFor: 'Aucun résultat pour « {{query}} ».',
    },
  },
  app: {
    skipToContent: 'Aller au contenu principal',
    loading: 'Chargement...',
    notFound: {
      message: "Cette page n'existe pas dans l'univers Skoleom.",
      cta: "Retour à l'accueil",
    },
    skyAssistant: {
      badge: 'SKY · ASSISTANT IA',
      title: 'Sky arrive bientôt !',
      description:
        'Notre assistant intelligent est en pleine préparation pour vous offrir une expérience unique. Restez connectés, Sky décolle très bientôt !',
      backHome: "Retour à l'accueil",
      sendTicket: 'Envoyer un ticket · Réponse sous 4h',
      requestCallback: 'Demander un rappel · Sous 30 min',
    },
  },
  header: {
    brandHome: 'Accueil',
    universe: 'Universe',
    navLabel: 'Navigation principale',
    searchPlaceholder: 'Rechercher',
    searchAria: 'Rechercher',
    profile: {
      profile : 'Mon profil',
      logout: 'Déconnexion',
    },
    language: {
      change: 'Changer la langue',
      zones: {
        international: 'International',
        europe: 'Europe',
        americas: 'Amériques',
        mena: 'Moyen-Orient & Maghreb',
        asiaPacific: 'Asie-Pacifique',
        africa: 'Afrique',
      },
    },
    actions: {
      settings: 'Paramètres',
      favorites: 'Favoris',
      cart: 'Panier',
      account: 'Compte utilisateur',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
    },
    account: {
      dashboard: 'Votre espace',
      orders: 'Vos commandes',
      favorites: 'Favoris',
      admin: 'Admin Console',
      adminBadge: 'Admin',
      logout: 'Déconnexion',
    },
    nav: {
      home: 'Accueil',
      essayage: 'Essayage virtuel',
      cabine: 'Cabine d’essayage',
      stores: 'Boutiques audiovisuelles',
      everyone: 'Pour tous',
      pros: 'Pour les Pros',
      news: 'Actualités',
      events: 'Événements',
      group: 'Groupe',
      search: 'Recherche',
      support: 'Assistance',
    },
  },
  cart: {
    title: 'Votre panier',
    itemCount: '{{count}} article(s)',
    empty: {
      title: 'Votre panier est vu',
      subtitle: 'Découvrez nos contenus shoppables',
    },
    summary: {
      subtotal: 'Sous-total',
      shipping: 'Livraison',
      free: 'Offerte',
      total: 'Total',
    },
    checkout: {
      cta: 'Payer avec Skoleom Pay',
      security: 'Paiement souverain et sécurisé · conforme RGPD',
    },
    aria: {
      decrease: 'Diminuer la quantité',
      increase: 'Augmenter la quantité',
      remove: 'Retirer cet article',
      close: 'Fermer le panier',
    },
  },
  skoleomPage: {
    nav: {
      ariaLabel: 'Navigation Skoleom Page',
      home: 'Accueil',
      homeMobile: 'Accueil',
      trends: 'Tendances',
      trendsMobile: 'Tendances',
      create: 'Créez votre SeContent',
      createMobile: 'Créer',
      profile: 'Profil',
      profileMobile: 'Profil',
      modalTitle: 'Service non disponible',
      modalBody: "Ce service n'est pas disponible dans votre région.",
      modalClose: 'Fermer',
    },
    explorer: {
      poweredBy: 'Propulsé par SeSync',
      heroBefore: 'Regardez. Touchez. ',
      heroHighlight: 'Découvrez.',
      heroSubtitle:
        "Une seule recherche, tout l'écosystème Skoleom Universe — vidéos, musique, médias, shopping. Chaque résultat devient une porte d'entrée immersive.",
      logoAlt: 'Skoleom Page',
      searchPlaceholder: 'Recherche un artiste, un film, une marque…',
      searchAria: 'Terme de recherche',
      searchSubmit: 'Lancer la recherche',
      searchReset: 'Réinitialiser la recherche',
      exploreCta: 'Explorer',
      resultsFor: 'Résultats pour',
      resultsOnPlatforms_one: 'sur {{count}} plateforme',
      resultsOnPlatforms_other: 'sur {{count}} plateformes',
      filter: 'Filtrer',
      platforms: 'Plateformes',
      filterPlatformsAria: 'Filtrer les plateformes',
      selectAll: 'Tout',
      selectNone: 'Aucun',
      loading: "Connexion à l'univers Skoleom…",
      noResults:
        'Aucun résultat ne correspond à vos filtres actuels. Sélectionnez plus de plateformes.',
    },
    actionCards: {
      sectionBefore: "Découvrez l'",
      sectionHighlight: 'univers Skoleom',
      mobile: {
        title: 'Mobile',
        description: 'Disponible sur iOS et Android.',
      },
      tv: {
        title: 'TV',
        description: 'Regardez sur votre TV connectée.',
      },
      rewards: {
        title: 'Récompenses',
        description: 'Cashback sur vos achats premium.',
      },
      extension: {
        title: 'Extension',
        description: 'Accédez à toutes les fonctionnalités.',
      },
      audio: {
        title: 'Audio',
        description: 'Écoutez sur tous vos appareils.',
      },
      gaming: {
        title: 'Gaming',
        description: 'Découvrez nos apps de jeux.',
      },
    },
  },
  footer: {
    brand: {
      description:
        "L'écosystème Skoleom réunit les boutiques audiovisuelles, les outils créateurs et les solutions business pour rendre les contenus interactifs et actionnables.",
    },
    socials: {
      label: 'Réseaux sociaux Skoleom',
    },
    shopPrompt: {
      prefix: 'Vous pouvez aussi faire vos achats dans',
      link: 'la boutique en ligne Skoleom',
    },
    copyright: 'Tous droits réservés.',
    modal: {
      close: 'Fermer le menu',
      title: 'Service non disponible',
      body: "Ce service n'est pas disponible dans votre région.",
    },
    columns: {
      about: 'À propos de Skoleom',
      stores: 'Boutiques audiovisuelles',
      everyone: 'Pour tous',
      pros: 'Pour les Pros',
      group: 'Groupe',
      '1': 'À propos de Skoleom',
      '2': 'Boutiques audiovisuelles',
      '3': 'Pour tous',
      '4': 'Pour les Pros',
      '5': 'Groupe',
    },
    links: {
      '101': 'Notre mission',
      '102': 'Notre technologie',
      '103': "L'écosystème Skoleom",
      '104': 'Programmes de financement',
      '105': 'Brevet Skoleom',
    },
    legalLinks: {
      '901': 'Mentions légales',
      '902': 'CGU & CUV',
      '903': 'Confidentialité',
      '904': 'Divulgation des affiliés',
      '905': 'Préférences cookies',
    },
  },
  auth: {
    login: {
      title: 'Connexion',
      submit: 'Connexion',
    },
    register: {
      title: 'Créer un compte',
      submit: 'Créer un compte',
    },
  },
  dashboard: {
    user: {
      orders: 'Vos commandes',
    },
    admin: {
      title: 'Admin Console',
    },
  },
  home: {
    hero: {
      downloadPickerHintAndroid: 'Disponible sur Google Play',
      downloadPickerHintIOS: "Disponible sur l'App Store",
      downloadPickerHintDefault: 'Choisissez votre plateforme',
      extensionRegionModal: {
        kicker: 'Extension Skoleom',
        title: 'Extension non disponible',
        body: "Cette extension n'est pas encore disponible dans votre région.",
        close: 'Fermer',
      },
      title: "Découvrez l'écosystème mondial de Skoleom Group",
      description: {
        intro: 'Skoleom Group révolutionne ',
        economy: "l'économie digitale",
        mid: " en permettant l'achat instantané au cœur des contenus audiovisuels. Connectée à plus de ",
        ott: '2 000 plateformes OTT',
        join: ' et à ',
        web: 'des milliards de sites web',
        outro: ', notre technologie transforme chaque écran en point de vente interactif.',
      },
      download: 'Télécharger',
      application: "l'application",
      extension: "l'extension",
      watchVideo: 'Lire la vidéo',
      ottMarqueeLabel: 'Plateformes de streaming et OTT',
      logoWtbAlt: 'Watch. Touch. Buy.',
      videoAria: 'Vidéo Skoleom',
      studioAria: 'Skoleom Studio',
      tagline1: 'CHAQUE VIDÉO DEVIENT UN VÉRITABLE MAGASIN IMMERSIF :',
      tagline2:
        "UNE EXPÉRIENCE FLUIDE, ÉLÉGANTE ET INTERACTIVE, OÙ L'ON DÉCOUVRE, TOUCHE ET ACHÈTE INSTANTANÉMENT CE QUE L'ON VOIT.",
    },
    skoletoonsHero: {
      kicker: 'Mode, beauté et lifestyle shoppable',
      title: "SkoleToon's",
      subtitle:
        'Une boutique audiovisuelle pensée pour transformer chaque inspiration mode en expérience interactive.',
      body: 'Découvrez un univers premium où les looks, les produits et les moments deviennent accessibles au bon instant.',
      discover: 'Découvrir',
      videoTitle: "Vidéo SkoleToon's",
      modalTitle: 'Boutique en cours de développement',
      modalBody:
        "La boutique SkoleToon's est encore en cours de développement. Elle sera disponible prochainement dans l'écosystème Skoleom.",
      modalClose: 'Fermer',
    },
    actions: {
      discoverMagic: 'Découvrez la magie',
    },
    welcome: {
      part1: 'Bienvenue dans le ',
      part2: 'futur du ',
      part3: 'retail media',
      part4: 'et du ',
      part5: 'transmédia',
    },
    page: {
      heroClose: 'Fermer',
      interactiveKicker: 'Une expérience interactive',
      interactiveSubtitle:
        "Du plateau à l'écran,\nSkoleom Studio donne vie à vos créations.\nL'immersion continue.",
      ecosystemKicker: 'Un univers. Des possibilités multiples.',
      ecosystemTitle: "L'écosystème\nSkoleom",
      ecosystemIntro:
        "Plus de 2 000 plateformes, des milliards d'écrans : l'écosystème Skoleom relie créateurs, marques et audiences dans une expérience immersive où chaque contenu devient boutique.",
      ecosystemStats: {
        products: 'de produits et services rendus shoppables en un seul toucher.',
        countries: "Pays connectés à l'écosystème.",
        detection: 'Pour détecter et activer ce que vous regardez.',
        alwaysOpen: 'Boutiques audiovisuelles toujours ouvertes.',
      },
      partnersTitle: 'Marques partenaires',
      boutiquesCta: 'Découvrez nos',
      boutiquesTitle: 'Boutiques Audiovisuelles',
      boutiquesSubtitle:
        'Un écosystème immersif. Plus de 50 applications web. Une seule limite : vos envies.',
      partnersSearchPlaceholder: 'Rechercher une marque (ex: Decathlon, Netflix, Intersport...)',
      partnersSearchAria: 'Rechercher une marque partenaire',
    },
    news: {
      badge: 'Nouveautés',
    },
    boutiques: {
      title: 'Découvrez nos Boutiques Audiovisuelles',
      searchPlaceholder: 'Rechercher un site Skoleom (ex: market, sport, ott...)',
    },
    sections: {
      welcome: 'Bienvenue dans le futur du retail media et du transmedia',
      how: 'Comment fonctionne Skoleom',
      moment: 'Chaque moment. Devient. Une opportunité.',
      interactive: 'Une expérience interactive',
      universe: 'Un univers. Plusieurs possibilités.',
      ecosystem: "L'écosystème Skoleom",
      partners: 'Marques partenaires',
    },
    descriptions: {
      detect:
        "Dès que vous regardez, Skoleom reconnaît ce qui défile à l'écran et le transforme en acte d'achat — en un toucher, sans quitter le contenu.",
    },
    stats: {
      storePages: 'pages Audiovisual Store par boutique.',
    },
  },
  public: {
    retailMediaPlatform: {
      kicker: 'Retail Media',
      titlePrefix: 'La plateforme de retail media qui transforme',
      titleHighlight: 'la vidéo en commerce',
      description:
        "Skoleom réunit la vidéo shoppable, la mesure et la distribution cross-plateforme dans une seule plateforme de retail media — touchez vos audiences à l'intérieur des contenus qu'elles regardent déjà.",
      ctaBusiness: 'Solutions business',
      ctaTechnology: 'Notre technologie',
      pillars: {
        videoCommerce: {
          title: 'Video commerce',
          description:
            "Transformez chaque vidéo en boutique shoppable. Chaque produit à l'écran devient achetable en un tap, sans redirection.",
        },
        unifiedMeasurement: {
          title: 'Mesure unifiée',
          description:
            'Suivez chaque impression, clic et conversion sur toutes les plateformes en temps réel — un seul tableau de bord, attribution complète.',
        },
        crossPlatform: {
          title: 'Portée cross-plateforme',
          description:
            'Diffusez vos campagnes sur 2 000+ plateformes OTT, les réseaux sociaux et le web ouvert depuis une seule intégration.',
        },
      },
    },
    interactiveVideoCommerce: {
      kicker: 'Commerce vidéo interactif',
      titlePrefix: 'Rendez chaque vidéo',
      titleHighlight: 'instantanément achetable',
      description:
        "Skoleom intègre des points d'achat interactifs directement dans vos vidéos. Les spectateurs achètent ce qu'ils voient — instantanément, sans jamais quitter le contenu.",
      ctaTalk: 'Parler à un expert',
      ctaOverview: "Voir la vue d'ensemble",
      benefits: {
        conversion: 'Conversion accrue — l’achat se fait au moment du désir.',
        reporting: 'Reporting en temps réel — chaque interaction mesurée et attribuée.',
        friction:
          'Zéro friction — pas de redirection, pas de changement d’app, pas d’abandon de panier.',
      },
    },
    skoleomTouch: {
      introSubtitle:
        'Repérez les produits cachés dans la vidéo et débloquez une récompense exclusive.',
      startCta: "Lancer l'expérience",
      productsToFind: 'Produits à trouver',
      exclusiveReward: 'Récompense exclusive',
      gameModalTitle: 'Expérience en cours de développement',
      gameModalBody:
        "L'expérience interactive Skoleom Touch est encore en cours de développement. Elle sera bientôt disponible.",
      gameModalClose: 'Fermer',
      hint: 'Touchez les produits cachés dans la vidéo',
      productsFound: 'produits trouvés',
      openCart: 'Ouvrir le panier',
      buy: 'Ajouter',
      inStock: 'En stock',
      cartTitle: 'Votre panier',
      emptyCartTitle: 'Votre panier est vide',
      emptyCartSubtitle: 'Touchez les produits cachés dans la vidéo pour les ajouter.',
      subtotal: 'Sous-total',
      cashback: 'Cashback',
      checkout: 'Passer la commande',
      clearCart: 'Vider le panier',
      confirmClearCart: 'Vider le panier ?',
      total: 'Total',
      alertSuccess: 'Commande validée !',
      victoryTitle: 'Félicitations !',
      victorySubtitle: 'Vous avez trouvé les {{count}} produits cachés.',
      time: 'Temps',
      score: 'Score',
      rewardUnlocked: 'Récompense débloquée',
      rewardSubtitle: 'Utilisez ce code lors de votre prochain achat sur Skoleom.',
      finalizeOrder: 'Finaliser la commande',
      toasts: {
        oops: 'Oups',
        emptyCart: 'Panier vide',
      },
    },
    stores: {
      hero: {
        titleLine1: 'Découvrez nos',
        titleLine2: 'Boutiques audiovisuelles',
        subtitle:
          'Un écosystème immersif. Plus de 50 applications web. Une seule limite : votre imagination.',
      },
      search: {
        placeholder: 'Rechercher une boutique ou une marque',
        aria: 'Rechercher une boutique ou une marque',
      },
      sections: {
        official: 'Boutiques officielles',
        brands: 'Marques disponibles',
      },
      showcase: {
        kicker: 'Boutiques à la une',
        title: 'Univers phares',
        subtitle:
          'Sport, OTT, musique et gaming — un aperçu des boutiques audiovisuelles emblématiques.',
      },
      carousel: {
        kicker: 'Toutes les boutiques',
        title: 'Boutiques audiovisuelles',
        subtitle: 'Découvrez toutes les boutiques disponibles dans l’écosystème Skoleom.',
        searchPlaceholder: 'Rechercher une boutique (ex : sport, music, games...)',
        ariaLabel: 'Carrousel des boutiques audiovisuelles',
      },
    },
    howItWorks: {
      hero: {
        kicker: 'Comment ça marche',
        subtitle: 'Dans la vidéo. Au même moment. Sans friction.',
      },
      steps: {
        '01': {
          title: 'RECONNAISSANCE IA',
          desc: 'Notre IA identifie les produits, objets et moments dans n’importe quel contenu.',
        },
        '02': {
          title: 'CAPSULES INTELLIGENTES',
          desc: 'Des capsules interactives apparaissent en temps réel, en toute fluidité.',
        },
        '03': {
          title: 'UN SEUL CLIC',
          desc: 'Vous cliquez. Pas de redirection. Pas de friction. Juste une action instantanée.',
        },
        '04': {
          title: 'ACHAT EN CONTEXTE',
          desc: 'Finalisez votre achat sans quitter le contenu que vous aimez.',
        },
      },
      demo: {
        titlePrefix: 'Découvrez la',
        titleHighlight: 'magie',
        cta: 'Lancer la démo interactive',
      },
      showcase: {
        kicker: 'Univers grand public',
        title: 'Boutiques à la une',
        subtitle:
          'Découvrez des expériences interactives accessibles à tous, intégrées à vos contenus favoris.',
      },
      carousel: {
        kicker: 'Toutes les boutiques',
        title: 'Pour tous',
        subtitle: 'Toutes les boutiques grand public de l’écosystème Skoleom.',
        searchPlaceholder: 'Rechercher (ex : page, shop, magazine...)',
        ariaLabel: 'Carrousel des boutiques Pour tous',
      },
    },
    hub: {
      groupCarousel: {
        kicker: 'Toutes les entités',
        title: 'Groupe',
        subtitle: 'Les sociétés satellites et pôles du groupe Skoleom.',
        searchPlaceholder: 'Rechercher (ex : studio, invest, lab...)',
        ariaLabel: 'Carrousel des entités du Groupe',
      },
    },
    technology: {
      hero: {
        kicker: 'SeSync · La technologie',
        titlePrefix: 'Connecté à plus de',
        titleMiddle: 'et',
      },
      features: {
        seamless: "Une expérience d'achat transparente directement dans les vidéos",
        compatible: 'Compatible avec vos marques et créateurs préférés',
        secure: 'Sécurisé et conforme au RGPD',
      },
      download: "Télécharger l'extension",
      studio: {
        titleLine1: "L'outil de monétisation",
        titleLine2Prefix: 'le plus',
        titleLine2Highlight: 'puissant au monde',
        description:
          'ERP/DCM SaaS dédié à la gestion, la monétisation et l’analyse des contenus vidéo interactifs. Connecté à plus de 300 APIs. Contrôle total : ventes, audiences, campagnes, retargeting et performance produit.',
      },
    },
  },
  data: {
    showcase: {
      'av-sesports': {
        title: 'Skoleom SeSports',
        desc: 'Interactive sports universe: video-to-commerce, retail media and fan engagement. The group official audiovisual store for sports brands and federations.',
      },
      'av-watch': {
        title: 'Watch on Skoleom',
        desc: 'Skoleom shoppable OTT experience: movies, series and live streams where every visible product becomes accessible in one tap.',
      },
      'av-music': {
        title: 'Skoleom Music',
        desc: 'Label, artists and merchandising. The audiovisual store dedicated to music with direct purchase capsules in clips and concerts.',
      },
      'av-games': {
        title: 'Skoleom Games',
        desc: 'Gaming universe and in-game monetization. Proprietary IP, studio partnerships and interactive capsules embedded in content.',
      },
      'tous-sesync': {
        title: 'SeSync',
        desc: 'Skoleom synchronization engine: in-page purchasing and real-time multi-platform distribution.',
      },
      'tous-shop': {
        title: 'Skoleom Shop',
        desc: 'The group official marketplace: products, merchandise and limited editions available directly from your favorite content.',
      },
      'tous-secontent': {
        title: 'SeContent Creation',
        desc: 'Creation and orchestration of interactive capsules. Intuitive tools to turn any content into a shoppable experience.',
      },
      'tous-magazine': {
        title: 'Skoleom Magazine',
        desc: 'Media and interactive formats: news, features and reports enriched with inline shopping capsules.',
      },
    },
    boutiques: {
      'av-sesports': {
        name: 'Skoleom SeSports',
        description: 'Sports universe and retail media.',
      },
      'av-cares': {
        name: 'Skoleom Cares',
        description: 'Social impact and dedicated programs.',
      },
      'av-games': {
        name: 'Skoleom Games',
        description: 'Games, IP and in-game monetization.',
      },
      'av-watch': {
        name: 'Watch on Skoleom',
        description: 'Shoppable OTT content and live experiences.',
      },
      'av-music': {
        name: 'Skoleom Music',
        description: 'Music, artists and direct merchandising.',
      },
      'tous-page': {
        name: 'Skoleom Page',
        description: 'Skoleom entry point and discovery.',
      },
      'tous-sesync': {
        name: 'SeSync',
        description: 'In-page purchasing and distribution.',
      },
      'tous-shop': {
        name: 'Skoleom Shop',
        description: 'Official marketplace for the ecosystem.',
      },
      'tous-secontent': {
        name: 'SeContent Creation',
        description: 'Create and orchestrate interactive capsules.',
      },
      'tous-magazine': {
        name: 'Skoleom Magazine',
        description: 'Interactive media, news and reports.',
      },
    },
  },
} satisfies LocaleResource;
export default resource;
