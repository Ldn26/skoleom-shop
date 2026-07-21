import type { LanguageCode } from './types';

const sesyncFr = {
  page: {
    hero: {
      pill: 'Disponible sur les 6 navigateurs majeurs · Gratuit',
      line1: 'Chaque vidéo',
      line2Before: 'est une ',
      line2Highlight: 'boutique',
      line3: 'en direct.',
      description:
        "SeSync est l'extension qui transforme n'importe quelle vidéo — sur Netflix, YouTube, Prime Video, Disney+ et 2 000+ plateformes — en expérience d'achat. Touchez l'écran. Achetez. Sans redirection.",
      installCta: 'Installer SeSync',
      howCta: 'Voir comment ça marche',
    },
    stats: {
      sectionTitle: 'SeSync en chiffres',
      ott: { n: '2 000+', l: 'Plateformes OTT' },
      sites: { n: '1 Md+', l: 'Sites couverts' },
      browsers: { n: '6', l: 'Navigateurs' },
      noRedirect: { n: '0', l: 'Redirection' },
    },
    marquee: {
      ariaLabel: 'Plateformes OTT compatibles SeSync',
      moreOtt: '+2000 OTT',
    },
    how: {
      eyebrow: 'Le principe',
      titleBefore: 'Trois ',
      titleHighlight: 'gestes',
      titleAfter: '. Une expérience inédite.',
      description:
        "Aucun apprentissage requis. SeSync s'active dès qu'une vidéo se lance, identifie les objets en temps réel et propose l'achat directement à l'intérieur du player.",
    },
    steps: {
      step1: {
        title: 'Installez SeSync gratuitement.',
        text: "Téléchargez l'extension depuis le store officiel de votre navigateur. Un seul clic, 30 secondes. L'icône SeSync apparaît immédiatement dans votre barre d'outils.",
      },
      step2: {
        title: "Lancez n'importe quelle vidéo.",
        text: "Netflix, YouTube, Prime Video, Twitch, ou n'importe quelle plateforme OTT. SeSync se réveille automatiquement et identifie les produits visibles à l'écran, sans ralentir le player.",
      },
      step3: {
        title: "Touchez. Achetez. C'est tout.",
        text: 'Passez votre doigt ou votre souris sur un objet. La fiche produit apparaît. Ajoutez au panier en un clic. La vidéo continue à jouer en arrière-plan. Aucune redirection.',
      },
    },
    mockup: {
      eyebrow: 'Magic Touch',
      titleBefore: 'Voilà ce qui se ',
      titleHighlight: 'passe',
      titleAfter: '.',
      description:
        "L'utilisateur passe son doigt sur la basket. SeSync identifie la Gulf Runner Sky Edition. Prix, tailles, livraison, ajout au panier — tout est là, sans quitter Netflix.",
    },
    universes: {
      eyebrow: 'Les 8 univers',
      titleBefore: 'Une ',
      titleHighlight: 'barre',
      titleAfter: '. Huit possibilités.',
      description:
        "À droite de chaque vidéo, une barre d'icônes ouvre un univers dédié — produits, musique, voyage, jeux, assistant IA. Tous contextuels, tous synchronisés.",
      music: {
        title: 'Musique',
        desc: 'Identifie la bande-son et ouvre Spotify, Apple Music ou Deezer en un clic.',
      },
      travel: {
        title: 'Voyage',
        desc: "Réservez vol et hôtel de la destination affichée à l'écran.",
      },
      sport: {
        title: 'Sport',
        desc: "Baskets, maillots, accessoires sportifs — l'équipement vu dans la vidéo.",
      },
      gaming: {
        title: 'Gaming',
        desc: 'Mini-jeux, cashback, codes promo à débloquer en jouant.',
      },
      fashion: {
        title: 'Mode',
        desc: 'Vêtements détectés par IA visuelle — match exact ou similaires.',
      },
      magazine: {
        title: 'Magazine',
        desc: 'Articles, lookbooks et histoires de marques liés au contenu.',
      },
      cart: {
        title: 'Panier universel',
        desc: 'Un seul panier pour toutes vos vidéos, plateformes et onglets.',
      },
      gpt: {
        title: 'Skoleom GPT',
        desc: "Votre assistant shopping IA — posez n'importe quelle question.",
      },
    },
    why: {
      eyebrow: 'Pourquoi SeSync',
      titleBefore: 'Une ',
      titleHighlight: 'technologie',
      titleAfter: " qui n'existe nulle part ailleurs.",
    },
    pillars: {
      patent: {
        title: 'Brevetée dans le monde entier.',
        text: "Notre technologie d'identification d'objets en temps réel dans un flux vidéo est protégée par trois brevets internationaux (FR2201013A, EP4473738, WO2023148295A1). C'est ce qui rend SeSync inégalable.",
      },
      performance: {
        title: 'Zéro impact sur vos vidéos.',
        text: "SeSync utilise l'accélération GPU et fonctionne dans une frame isolée. Vos vidéos 4K et HDR ne ralentissent jamais. La détection est instantanée, invisible, naturelle.",
      },
      privacy: {
        title: 'RGPD-first. Souveraineté européenne.',
        text: 'Vos données restent sur Skoleom Cloud, infrastructure souveraine en Europe. Aucune revente à des tiers, paiements chiffrés, conformes PCI-DSS niveau 1.',
      },
      free: {
        title: 'Gratuit. Pour toujours.',
        text: "SeSync est et restera gratuit. Pas d'abonnement, pas de publicité, pas de récolte de données revendues. Notre modèle : une commission sur les ventes des marques partenaires.",
      },
    },
    browsers: {
      eyebrow: 'Compatibilité',
      titleBefore: 'Disponible ',
      titleHighlight: 'partout',
      titleAfter: '.',
      description:
        'SeSync est compatible avec les 6 navigateurs majeurs qui couvrent plus de 99 % du marché mondial. Une seule installation, partout.',
      available: 'Disponible',
      soon: 'Bientôt disponible',
    },
    faq: {
      eyebrow: 'Questions',
      titleBefore: 'Les ',
      titleHighlight: 'réponses',
      titleAfter: ' qui comptent.',
      free: {
        q: 'SeSync est-il vraiment gratuit ?',
        a: "Oui, gratuit pour toujours, sans abonnement caché. Notre revenu provient uniquement des commissions sur les ventes réalisées via l'extension, payées par les marques partenaires.",
      },
      security: {
        q: 'Mes données sont-elles en sécurité ?',
        a: 'SeSync est RGPD-first. Vos données sont hébergées en Europe sur Skoleom Cloud, jamais revendues à des tiers. Les paiements sont chiffrés et conformes PCI-DSS niveau 1.',
      },
      platforms: {
        q: 'Sur quelles plateformes fonctionne SeSync ?',
        a: "SeSync détecte automatiquement plus de 2 000 plateformes OTT (Netflix, YouTube, Prime Video, Disney+, HBO, Twitch, etc.) et plus d'un milliard de sites internet partenaires.",
      },
      performance: {
        q: 'Cela ralentit-il mes vidéos ?',
        a: "Non. SeSync est conçu pour avoir un impact nul sur les performances de lecture, même en 4K HDR. Notre détection utilise l'accélération GPU dans une frame isolée.",
      },
      account: {
        q: 'Faut-il créer un compte ?',
        a: 'Pour découvrir les capsules : non. Pour acheter, enregistrer des favoris ou utiliser le panier universel : oui, un compte Skoleom gratuit suffit.',
      },
      mobile: {
        q: 'SeSync fonctionne-t-il sur mobile ?',
        a: "Pour le navigateur, l'extension fonctionne sur desktop. Pour mobile, l'application Skoleom iOS et Android offre la même expérience, en arrière-plan.",
      },
    },
    cta: {
      titleBefore: 'Regardez. Touchez. ',
      titleHighlight: 'Achetez.',
      description:
        'Rejoignez la révolution du Retail Media. Installez SeSync gratuitement, et faites de chaque vidéo une boutique en direct.',
      install: 'Installer SeSync — Gratuit',
    },
  },
  mockup: {
    sidebar: {
      params: 'Paramètres',
      favoris: 'Favoris',
      panier: 'Panier',
      compte: 'Compte',
      magazine: 'Magazine',
      musique: 'Musique',
      travel: 'Voyage',
    },
    episode: 'Drive to Survive · S6E2',
    capsule: 'Capsule',
  },
  capsule: {
    brand: 'Nike',
    videoTitle: 'Nike Free Run Rouge | Unboxing & Review',
    productName: 'Nike Free Run Rouge',
    price: '89.99€',
    freeShipping: 'Livraison GRATUITE',
    description:
      "Nike Free Run Rouge — Profitez d'un amorti naturel et d'une flexibilité maximale avec cette chaussure de running légère. Mesh respirant, semelle caoutchouc durable.",
    buy: 'Acheter',
    added: '✓ Ajouté',
    tabInfos: 'Infos',
    tabSimilaires: 'Similaires',
    infoCards: {
      card1: 'Nike Free Run — Collection printemps 2026',
      card2: 'Nike Free Run Rouge | Unboxing & Review',
    },
    similaires: {
      item1: { name: 'Nike Air Max 270', price: '129€' },
      item2: { name: 'Adidas Ultra Boost 22', price: '159€' },
      item3: { name: 'Puma RS-X Street', price: '99€' },
    },
  },
  sidepages: {
    bottomNav: {
      favoris: 'Favoris',
      panier: 'Panier',
      compte: 'Compte',
      magazine: 'Magazine',
    },
    params: {
      title: 'Paramètres',
      language: 'Langue',
      languageHint: "Choisissez la langue de l'extension",
      english: '🇬🇧 English',
      french: '🇫🇷 Français',
      display: 'Affichage',
      displayOptions: {
        button: { label: 'Button', desc: 'Affichage de la capsule sous forme bouton' },
        timeline: { label: 'Timeline', desc: 'Affichage des capsules sur la timeline' },
        magictouch: { label: 'Magic Touch', desc: 'Ajout des produits directement au hover' },
      },
      buttonShape: 'Forme du bouton',
      pillLabel: '· Capsule',
      pillDesc: 'Bouton avec texte',
      logoDesc: 'Icône ronde discrète',
    },
    favoris: {
      title: 'Favoris',
      add: 'Ajouter',
      items: {
        item1: { name: 'Air Max Plus PSG Shoes', price: '312.00€' },
        item2: { name: "Men's Michael Jordan Black Chicago Bulls", price: '360€' },
        item3: { name: 'The 25X Sneakers - BB2 For Man', price: '310€' },
      },
    },
    panier: {
      title: 'Mon panier',
      options: 'Options',
      coupon: 'Coupon de réduction',
      promoPlaceholder: 'CODE PROMO',
      apply: 'Appliquer',
      subtotal: 'Sous-total',
      discount: 'Réduction',
      shipping: 'Expédition',
      shippingNote: "Calculée à l'étape suivante",
      total: 'Total',
      vatNote: "TVA incluse · Livraison calculée à l'étape suivante",
      validate: 'Valider mon panier',
      amazon: 'Commander sur Amazon',
      items: {
        item1: { name: 'The 25X Pants For Man', price: '105.00 €' },
        item2: { name: 'The 25X T-shirt For Man', price: '54.00 €' },
        item3: { name: 'The 25X Pants For Man', price: '150.00 €' },
      },
      subtotalValue: '473.33 €',
      discountValue: '-56.80 €',
      totalValue: '511.20 €',
    },
    produit: {
      title: 'Produit',
      name: 'Nike Free Run Rouge',
      price: '89.99€',
      color: 'Rouge',
      size: '42',
      material:
        "Composition du matériau Tige : mesh respirant ; doublure et semelle intérieure : matériaux synthétiques ; semelle extérieure : caoutchouc. Matériau de la semelle Caoutchouc. Hauteur de la tige basse. Matériau extérieur Mesh. Pays d'origine Vietnam.",
      about:
        'À propos de cet article — Amorti Nike Free pour une flexibilité naturelle. Semelle intercalaire en mousse légère pour un amorti doux. Conception légère idéale pour la course et le quotidien.',
      addToCart: 'Ajouter au panier',
      removeFromFavorites: 'Retirer des favoris',
    },
    compte: {
      title: 'Mon Compte',
      member: '· Membre Skoleom',
      menu: {
        orders: { label: 'Commandes', desc: 'Suivi et historique' },
        addresses: { label: 'Adresses', desc: 'Livraison et facturation' },
        details: { label: 'Détails du compte', desc: 'Nom, email, téléphone' },
        security: { label: 'Sécurité', desc: 'Mot de passe' },
      },
      logout: 'Déconnexion',
    },
    magazine: {
      title: 'Magazine',
      sesport: 'SeSport',
      gaming: 'Gaming',
      sesportArticles: {
        item1: {
          title: 'Mercato : Cet entraîneur de Ligue 1 qui pourrait...',
          date: '12 mai 2026',
        },
        item2: {
          title: 'Ligue 1 : pour le PSG, le titre de la résilience apr...',
          date: '11 mai 2026',
        },
        item3: {
          title: 'Champions League : le choc des titans en demi-finale...',
          date: '10 mai 2026',
        },
      },
      gamingArticles: {
        item1: { title: 'Valorant Champions 2026 : Retour sur un...', date: '12 mai 2026' },
        item2: { title: 'Xbox Game Pass : les derniers jeux de janvier...', date: '11 mai 2026' },
        item3: { title: "PS5 Pro : tout ce qu'on sait sur la prochaine...", date: '10 mai 2026' },
      },
    },
    musique: {
      title: 'Skoleom Music',
      recognizing: 'Reconnaissance en cours',
      listening: 'Vous écoutez :',
      song: 'WHERE SHE GOES — Bad Bunny',
    },
    travel: {
      title: 'Skoleom Travel',
      destination: 'Destination :',
      flights: 'Réservation de vols',
      hotels: "Réservation d'hôtels",
      cities: {
        tokyo: 'Tokyo',
        santorin: 'Santorin',
        newYork: 'New York',
        paris: 'Paris',
      },
      vols: {
        af: { name: 'Air France', price: '896 €' },
        jl: { name: 'Japan Airlines', price: '920 €' },
        ek: { name: 'Emirates', price: '995 €' },
        qr: { name: 'Qatar Airw.', price: '847 €' },
      },
      hotelsList: {
        imperial: { name: 'Imperial Med', price: '132 €/nuit' },
        shine: { name: 'Shine', price: '205 €/nuit' },
        greco: { name: 'El Greco Resort', price: '203 €/nuit' },
        karterado: { name: 'Hotel Karterado', price: '247 €/nuit' },
      },
    },
    banner: {
      watchNow: 'Regarder maintenant',
    },
  },
} as const;

const sesyncEn = {
  page: {
    hero: {
      pill: 'Available on all 6 major browsers · Free',
      line1: 'Every video',
      line2Before: 'is a ',
      line2Highlight: 'live storefront',
      line3: '.',
      description:
        'SeSync is the browser extension that transforms any video—on Netflix, YouTube, Prime Video, Disney+, and 2,000+ other platforms—into an instant shopping experience. Tap the screen. Buy. No redirects.',
      installCta: 'Install SeSync',
      howCta: 'See how it works',
    },
    stats: {
      sectionTitle: 'SeSync in numbers',
      ott: { n: '2,000+', l: 'OTT Platforms' },
      sites: { n: '1B+', l: 'Supported Sites' },
      browsers: { n: '6', l: 'Major Browsers' },
      noRedirect: { n: '0', l: 'Redirect' },
    },
    marquee: {
      ariaLabel: 'SeSync compatible OTT platforms',
      moreOtt: '+2000 OTT',
    },
    how: {
      eyebrow: 'The Concept',
      titleBefore: 'Three simple ',
      titleHighlight: 'gestures',
      titleAfter: '. A completely new experience.',
      description:
        'Zero learning curve. SeSync activates automatically when a video starts, identifying products in real time and letting you shop directly inside the player.',
    },
    steps: {
      step1: {
        title: 'Install SeSync for free',
        text: 'Get the extension from your browser’s official store in just one click. It takes 30 seconds, and the SeSync icon will appear instantly in your toolbar.',
      },
      step2: {
        title: 'Play any video',
        text: 'Whether it’s Netflix, YouTube, Prime Video, or Twitch, SeSync activates automatically to identify products on screen without ever slowing down playback.',
      },
      step3: {
        title: 'Tap. Buy. Done.',
        text: 'Simply hover or tap on any item to view its product card. Add it to your cart in a single click while your video keeps playing seamlessly in the background. Zero redirects.',
      },
    },
    mockup: {
      eyebrow: 'Magic Touch',
      titleBefore: 'See the magic in ',
      titleHighlight: 'action',
      titleAfter: '.',
      description:
        'Hover or tap on a sneaker, and SeSync instantly identifies the Gulf Runner Sky Edition. Check prices, select sizes, view delivery options, and add to your cart—all without leaving Netflix.',
    },
    universes: {
      eyebrow: 'The 8 Universes',
      titleBefore: 'One ',
      titleHighlight: 'toolbar',
      titleAfter: '. Eight endless possibilities.',
      description:
        'A sleek sidebar appears on the right of any video, unlocking dedicated universes—shopping, music, travel, gaming, and an AI assistant. Everything is fully contextual and perfectly synchronized.',
      music: {
        title: 'Music',
        desc: 'Instantly identify any soundtrack and open it in Spotify, Apple Music, or Deezer.',
      },
      travel: {
        title: 'Travel',
        desc: 'Book flights and hotels for the exact destination shown on screen.',
      },
      sport: {
        title: 'Sports',
        desc: 'Find the exact sneakers, jerseys, and sports gear featured in the video.',
      },
      gaming: {
        title: 'Gaming',
        desc: 'Unlock mini-games, exclusive cashback, and promo codes as you watch.',
      },
      fashion: {
        title: 'Fashion',
        desc: 'AI-powered visual search detects apparel to find exact matches or similar styles.',
      },
      magazine: {
        title: 'Magazine',
        desc: 'Explore curated articles, lookbooks, and brand stories behind the content.',
      },
      cart: {
        title: 'Universal Cart',
        desc: 'A single, unified cart across all your videos, streaming platforms, and tabs.',
      },
      gpt: {
        title: 'Skoleom GPT',
        desc: 'Your personal AI shopping assistant—ask questions and get instant answers.',
      },
    },
    why: {
      eyebrow: 'Why SeSync',
      titleBefore: 'A breakthrough ',
      titleHighlight: 'technology',
      titleAfter: ' like no other.',
    },
    pillars: {
      patent: {
        title: 'Globally Patented',
        text: 'Our real-time object detection technology in video streams is protected by three international patents (FR2201013A, EP4473738, WO2023148295A1), making SeSync truly one of a kind.',
      },
      performance: {
        title: 'Zero Playback Impact',
        text: 'Powered by GPU acceleration in an isolated sandbox, SeSync never slows down your 4K or HDR streams. Detection is instant, seamless, and lightweight.',
      },
      privacy: {
        title: 'GDPR-First & Secure',
        text: 'Your data remains hosted on Skoleom Cloud, a sovereign European infrastructure. We never sell data to third parties. Payments are fully encrypted and PCI-DSS Level 1 compliant.',
      },
      free: {
        title: '100% Free, Forever',
        text: 'SeSync is and always will be free. No subscriptions, no ads, and no data harvesting. We earn a small commission from partner brands on the purchases you make.',
      },
    },
    browsers: {
      eyebrow: 'Compatibility',
      titleBefore: 'Available ',
      titleHighlight: 'everywhere',
      titleAfter: '.',
      description:
        'SeSync is fully compatible with the 6 major browsers, covering over 99% of global internet users. Install once, use everywhere.',
      available: 'Available',
      soon: 'Coming soon',
    },
    faq: {
      eyebrow: 'FAQ',
      titleBefore: 'The ',
      titleHighlight: 'answers',
      titleAfter: ' you need.',
      free: {
        q: 'Is SeSync actually free?',
        a: 'Yes, SeSync is completely free forever, with no hidden fees or subscriptions. We only earn a commission paid by our partner brands when you make a purchase.',
      },
      security: {
        q: 'Is my personal data safe?',
        a: 'Absolutely. SeSync is built with a GDPR-first approach. Your data is securely hosted in Europe on Skoleom Cloud and is never sold to third parties. All transactions are fully encrypted and PCI-DSS Level 1 compliant.',
      },
      platforms: {
        q: 'Which streaming platforms are supported?',
        a: 'SeSync automatically works on over 2,000 OTT platforms—including Netflix, YouTube, Prime Video, Disney+, HBO, and Twitch—as well as over a billion partner websites.',
      },
      performance: {
        q: 'Will it slow down my video playback?',
        a: 'Not at all. SeSync is engineered to have zero impact on streaming performance, even when watching in 4K HDR. Our detection runs in an isolated frame using GPU acceleration.',
      },
      account: {
        q: 'Do I need to create an account?',
        a: 'No account is needed to browse products. However, to make purchases, save favorites, or use the universal cart, you will need a free Skoleom account.',
      },
      mobile: {
        q: 'Does SeSync work on mobile devices?',
        a: 'The browser extension is designed for desktop. For mobile devices, the Skoleom app for iOS and Android offers the exact same interactive experience.',
      },
    },
    cta: {
      titleBefore: 'Watch. Tap. ',
      titleHighlight: 'Shop.',
      description:
        'Join the Retail Media revolution. Install SeSync for free today and turn any video into your personal live storefront.',
      install: 'Install SeSync — It’s Free',
    },
  },
  mockup: {
    sidebar: {
      params: 'Settings',
      favoris: 'Favorites',
      panier: 'Cart',
      compte: 'Account',
      magazine: 'Magazine',
      musique: 'Music',
      travel: 'Travel',
    },
    episode: 'Drive to Survive · S6E2',
    capsule: 'Capsule',
  },
  capsule: {
    brand: 'Nike',
    videoTitle: 'Nike Free Run Rouge | Unboxing & Review',
    productName: 'Nike Free Run Rouge',
    price: '89.99€',
    freeShipping: 'Free Shipping',
    description:
      'Nike Free Run Red — Experience natural cushioning and maximum flexibility with this lightweight running shoe. Features breathable mesh and a durable rubber sole.',
    buy: 'Buy Now',
    added: '✓ Added',
    tabInfos: 'Details',
    tabSimilaires: 'Similar',
    infoCards: {
      card1: 'Nike Free Run — Spring 2026 Collection',
      card2: 'Nike Free Run Red | Unboxing & Review',
    },
    similaires: {
      item1: { name: 'Nike Air Max 270', price: '€129' },
      item2: { name: 'Adidas Ultra Boost 22', price: '€159' },
      item3: { name: 'Puma RS-X Street', price: '€99' },
    },
  },
  sidepages: {
    bottomNav: {
      favoris: 'Favorites',
      panier: 'Cart',
      compte: 'Account',
      magazine: 'Magazine',
    },
    params: {
      title: 'Settings',
      language: 'Language',
      languageHint: 'Select your preferred language',
      english: '🇬🇧 English',
      french: '🇫🇷 Français',
      display: 'Display Mode',
      displayOptions: {
        button: { label: 'Floating Button', desc: 'Display the capsule as a floating button' },
        timeline: {
          label: 'Timeline Markers',
          desc: 'Show interactive capsules on the video timeline',
        },
        magictouch: { label: 'Magic Touch', desc: 'Reveal product details instantly on hover' },
      },
      buttonShape: 'Button Style',
      pillLabel: '· Capsule',
      pillDesc: 'Button with text label',
      logoDesc: 'Discreet circular icon',
    },
    favoris: {
      title: 'Favorites',
      add: 'Add to Favorites',
      items: {
        item1: { name: 'Air Max Plus PSG Shoes', price: '€312.00' },
        item2: { name: "Men's Michael Jordan Black Chicago Bulls Jersey", price: '€360' },
        item3: { name: 'The 25X Sneakers - BB2 For Men', price: '€310' },
      },
    },
    panier: {
      title: 'My Cart',
      options: 'Options',
      coupon: 'Promo Code',
      promoPlaceholder: 'ENTER CODE',
      apply: 'Apply',
      subtotal: 'Subtotal',
      discount: 'Discount',
      shipping: 'Shipping',
      shippingNote: 'Calculated at next step',
      total: 'Total',
      vatNote: 'VAT included · Shipping calculated at next step',
      validate: 'Proceed to Checkout',
      amazon: 'Order on Amazon',
      items: {
        item1: { name: 'The 25X Pants For Men', price: '€105.00' },
        item2: { name: 'The 25X T-Shirt For Men', price: '€54.00' },
        item3: { name: 'The 25X Pants For Men', price: '€150.00' },
      },
      subtotalValue: '€473.33',
      discountValue: '-€56.80',
      totalValue: '€511.20',
    },
    produit: {
      title: 'Product Details',
      name: 'Nike Free Run Red',
      price: '€89.99',
      color: 'Red',
      size: '42',
      material:
        'Material & Care — Upper: breathable mesh; lining and insole: premium synthetics; outsole: durable rubber. Low-top silhouette. Country of origin: Vietnam.',
      about:
        'About this item — Nike Free technology provides barefoot-like flexibility. Lightweight foam midsole delivers plush cushioning. Sleek, lightweight design perfect for running and everyday wear.',
      addToCart: 'Add to Cart',
      removeFromFavorites: 'Remove from Favorites',
    },
    compte: {
      title: 'My Account',
      member: '· Skoleom Member',
      menu: {
        orders: { label: 'Orders', desc: 'Track and view history' },
        addresses: { label: 'Addresses', desc: 'Manage shipping & billing' },
        details: { label: 'Account Details', desc: 'Update name, email & phone' },
        security: { label: 'Security', desc: 'Change password & settings' },
      },
      logout: 'Log Out',
    },
    magazine: {
      title: 'Magazine',
      sesport: 'SeSport',
      gaming: 'Gaming',
      sesportArticles: {
        item1: { title: 'Transfer Window: The Ligue 1 coach who could...', date: 'May 12, 2026' },
        item2: { title: 'Ligue 1: For PSG, a title of resilience after...', date: 'May 11, 2026' },
        item3: {
          title: 'Champions League: Clash of titans in the semi-finals...',
          date: 'May 10, 2026',
        },
      },
      gamingArticles: {
        item1: { title: 'Valorant Champions 2026: A look back at...', date: 'May 12, 2026' },
        item2: {
          title: 'Xbox Game Pass: The latest games added in January...',
          date: 'May 11, 2026',
        },
        item3: { title: 'PS5 Pro: Everything we know about the next...', date: 'May 10, 2026' },
      },
    },
    musique: {
      title: 'Skoleom Music',
      recognizing: 'Identifying song...',
      listening: 'Now Playing:',
      song: 'WHERE SHE GOES — Bad Bunny',
    },
    travel: {
      title: 'Skoleom Travel',
      destination: 'Destination:',
      flights: 'Book Flights',
      hotels: 'Book Hotels',
      cities: {
        tokyo: 'Tokyo',
        santorin: 'Santorini',
        newYork: 'New York',
        paris: 'Paris',
      },
      vols: {
        af: { name: 'Air France', price: '€896' },
        jl: { name: 'Japan Airlines', price: '€920' },
        ek: { name: 'Emirates', price: '€995' },
        qr: { name: 'Qatar Airways', price: '€847' },
      },
      hotelsList: {
        imperial: { name: 'Imperial Med', price: '€132/night' },
        shine: { name: 'Shine', price: '€205/night' },
        greco: { name: 'El Greco Resort', price: '€203/night' },
        karterado: { name: 'Hotel Karterado', price: '€247/night' },
      },
    },
    banner: {
      watchNow: 'Watch Now',
    },
  },
};

export type SesyncTranslations = typeof sesyncEn;

const sesyncEs: SesyncTranslations = {
  page: {
    hero: {
      pill: 'Disponible en los 6 navegadores principales · Gratis',
      line1: 'Cada vídeo',
      line2Before: 'es una ',
      line2Highlight: 'tienda',
      line3: 'en directo.',
      description:
        'SeSync es la extensión que transforma cualquier vídeo — en Netflix, YouTube, Prime Video, Disney+ y más de 2.000 plataformas — en una experiencia de compra. Toca la pantalla. Compra. Sin redirección.',
      installCta: 'Instalar SeSync',
      howCta: 'Ver cómo funciona',
    },
    stats: {
      ott: {
        n: '2.000+',
        l: 'Plataformas OTT',
      },
      sites: {
        n: '1.000 M+',
        l: 'Sitios cubiertos',
      },
      browsers: {
        n: '6',
        l: 'Navegadores',
      },
      noRedirect: {
        n: '0',
        l: 'Redirección',
      },
    },
    marquee: {
      ariaLabel: 'Plataformas OTT compatibles con SeSync',
      moreOtt: '+2000 OTT',
    },
    how: {
      eyebrow: 'El principio',
      titleBefore: 'Tres ',
      titleHighlight: 'gestos',
      titleAfter: '. Una experiencia inédita.',
      description:
        'Sin curva de aprendizaje. SeSync se activa en cuanto empieza un vídeo, identifica los objetos en tiempo real y ofrece la compra directamente dentro del reproductor.',
    },
    steps: {
      step1: {
        title: 'Instala SeSync gratis.',
        text: 'Descarga la extensión desde la tienda oficial de tu navegador. Un solo clic, 30 segundos. El icono de SeSync aparece al instante en tu barra de herramientas.',
      },
      step2: {
        title: 'Reproduce cualquier vídeo.',
        text: 'Netflix, YouTube, Prime Video, Twitch o cualquier plataforma OTT. SeSync se activa automáticamente e identifica los productos visibles en pantalla sin ralentizar el reproductor.',
      },
      step3: {
        title: 'Toca. Compra. Listo.',
        text: 'Pasa el dedo o el ratón sobre un objeto. Aparece la ficha del producto. Añádelo al carrito con un clic. El vídeo sigue reproduciéndose en segundo plano. Sin redirección.',
      },
    },
    mockup: {
      eyebrow: 'Magic Touch',
      titleBefore: 'Esto es lo que ',
      titleHighlight: 'ocurre',
      titleAfter: '.',
      description:
        'El usuario pasa el dedo sobre la zapatilla. SeSync identifica la Gulf Runner Sky Edition. Precio, tallas, envío, añadir al carrito — todo ahí, sin salir de Netflix.',
    },
    universes: {
      eyebrow: 'Los 8 universos',
      titleBefore: 'Una ',
      titleHighlight: 'barra',
      titleAfter: '. Ocho posibilidades.',
      description:
        'A la derecha de cada vídeo, una barra de iconos abre un universo dedicado — productos, música, viajes, juegos, asistente IA. Todo contextual, todo sincronizado.',
      music: {
        title: 'Música',
        desc: 'Identifica la banda sonora y abre Spotify, Apple Music o Deezer con un clic.',
      },
      travel: {
        title: 'Viajes',
        desc: 'Reserva vuelos y hoteles del destino mostrado en pantalla.',
      },
      sport: {
        title: 'Deporte',
        desc: 'Zapatillas, camisetas, accesorios deportivos — el equipamiento visto en el vídeo.',
      },
      gaming: {
        title: 'Gaming',
        desc: 'Minijuegos, cashback y códigos promocionales que desbloquear jugando.',
      },
      fashion: {
        title: 'Moda',
        desc: 'Prendas detectadas por IA visual — coincidencia exacta o similares.',
      },
      magazine: {
        title: 'Magazine',
        desc: 'Artículos, lookbooks e historias de marcas vinculados al contenido.',
      },
      cart: {
        title: 'Carrito universal',
        desc: 'Un solo carrito para todos tus vídeos, plataformas y pestañas.',
      },
      gpt: {
        title: 'Skoleom GPT',
        desc: 'Tu asistente de compras con IA — haz cualquier pregunta.',
      },
    },
    why: {
      eyebrow: 'Por qué SeSync',
      titleBefore: 'Una ',
      titleHighlight: 'tecnología',
      titleAfter: ' que no existe en ningún otro lugar.',
    },
    pillars: {
      patent: {
        title: 'Patentada en todo el mundo.',
        text: 'Nuestra tecnología de identificación de objetos en tiempo real en flujos de vídeo está protegida por tres patentes internacionales (FR2201013A, EP4473738, WO2023148295A1). Eso hace que SeSync sea inigualable.',
      },
      performance: {
        title: 'Cero impacto en tus vídeos.',
        text: 'SeSync utiliza aceleración GPU y funciona en un frame aislado. Tus vídeos 4K y HDR nunca se ralentizan. La detección es instantánea, invisible y natural.',
      },
      privacy: {
        title: 'RGPD primero. Soberanía europea.',
        text: 'Tus datos permanecen en Skoleom Cloud, infraestructura soberana en Europa. Sin reventa a terceros, pagos cifrados, conformes con PCI-DSS nivel 1.',
      },
      free: {
        title: 'Gratis. Para siempre.',
        text: 'SeSync es y seguirá siendo gratuito. Sin suscripción, sin publicidad, sin recopilación de datos revendidos. Nuestro modelo: una comisión sobre las ventas de las marcas asociadas.',
      },
    },
    browsers: {
      eyebrow: 'Compatibilidad',
      titleBefore: 'Disponible ',
      titleHighlight: 'en todas partes',
      titleAfter: '.',
      description:
        'SeSync es compatible con los 6 navegadores principales que cubren más del 99 % del mercado mundial. Una sola instalación, en todas partes.',
      available: 'Disponible',
      soon: 'Próximamente',
    },
    faq: {
      eyebrow: 'Preguntas',
      titleBefore: 'Las ',
      titleHighlight: 'respuestas',
      titleAfter: ' que importan.',
      free: {
        q: '¿SeSync es realmente gratis?',
        a: 'Sí, gratis para siempre, sin suscripción oculta. Nuestros ingresos provienen únicamente de las comisiones sobre las ventas realizadas a través de la extensión, pagadas por las marcas asociadas.',
      },
      security: {
        q: '¿Mis datos están seguros?',
        a: 'SeSync es RGPD-first. Tus datos se alojan en Europa en Skoleom Cloud, nunca se revenden a terceros. Los pagos están cifrados y son conformes con PCI-DSS nivel 1.',
      },
      platforms: {
        q: '¿En qué plataformas funciona SeSync?',
        a: 'SeSync detecta automáticamente más de 2.000 plataformas OTT (Netflix, YouTube, Prime Video, Disney+, HBO, Twitch, etc.) y más de mil millones de sitios web asociados.',
      },
      performance: {
        q: '¿Ralentiza mis vídeos?',
        a: 'No. SeSync está diseñado para tener un impacto nulo en el rendimiento de reproducción, incluso en 4K HDR. Nuestra detección utiliza aceleración GPU en un frame aislado.',
      },
      account: {
        q: '¿Necesito crear una cuenta?',
        a: 'Para descubrir las cápsulas: no. Para comprar, guardar favoritos o usar el carrito universal: sí, basta con una cuenta Skoleom gratuita.',
      },
      mobile: {
        q: '¿Funciona SeSync en móvil?',
        a: 'Para el navegador, la extensión funciona en escritorio. Para móvil, la app Skoleom para iOS y Android ofrece la misma experiencia en segundo plano.',
      },
    },
    cta: {
      titleBefore: 'Mira. Toca. ',
      titleHighlight: 'Compra.',
      description:
        'Únete a la revolución del Retail Media. Instala SeSync gratis y convierte cada vídeo en una tienda en directo.',
      install: 'Instalar SeSync — Gratis',
    },
  },
  mockup: {
    sidebar: {
      params: 'Ajustes',
      favoris: 'Favoritos',
      panier: 'Carrito',
      compte: 'Cuenta',
      magazine: 'Magazine',
      musique: 'Música',
      travel: 'Viajes',
    },
    episode: 'Drive to Survive · S6E2',
    capsule: 'Cápsula',
  },
  capsule: {
    brand: 'Nike',
    videoTitle: 'Nike Free Run Rouge | Unboxing & Review',
    productName: 'Nike Free Run Rouge',
    price: '89.99€',
    freeShipping: 'Envío GRATIS',
    description:
      'Nike Free Run Rouge — Disfruta de una amortiguación natural y máxima flexibilidad con esta zapatilla de running ligera. Malla transpirable, suela de goma duradera.',
    buy: 'Comprar',
    added: '✓ Añadido',
    tabInfos: 'Info',
    tabSimilaires: 'Similares',
    infoCards: {
      card1: 'Nike Free Run — Colección primavera 2026',
      card2: 'Nike Free Run Rouge | Unboxing & Review',
    },
    similaires: {
      item1: {
        name: 'Nike Air Max 270',
        price: '129€',
      },
      item2: {
        name: 'Adidas Ultra Boost 22',
        price: '159€',
      },
      item3: {
        name: 'Puma RS-X Street',
        price: '99€',
      },
    },
  },
  sidepages: {
    bottomNav: {
      favoris: 'Favoritos',
      panier: 'Carrito',
      compte: 'Cuenta',
      magazine: 'Magazine',
    },
    params: {
      title: 'Ajustes',
      language: 'Idioma',
      languageHint: 'Elige el idioma de la extensión',
      english: '🇬🇧 English',
      french: '🇫🇷 Français',
      display: 'Visualización',
      displayOptions: {
        button: {
          label: 'Button',
          desc: 'Mostrar la cápsula como botón',
        },
        timeline: {
          label: 'Timeline',
          desc: 'Mostrar cápsulas en la línea de tiempo',
        },
        magictouch: {
          label: 'Magic Touch',
          desc: 'Añadir productos directamente al pasar el cursor',
        },
      },
      buttonShape: 'Forma del botón',
      pillLabel: '· Capsule',
      pillDesc: 'Botón con texto',
      logoDesc: 'Icono redondo discreto',
    },
    favoris: {
      title: 'Favoritos',
      add: 'Añadir',
      items: {
        item1: {
          name: 'Air Max Plus PSG Shoes',
          price: '312.00€',
        },
        item2: {
          name: "Men's Michael Jordan Black Chicago Bulls",
          price: '360€',
        },
        item3: {
          name: 'The 25X Sneakers - BB2 For Man',
          price: '310€',
        },
      },
    },
    panier: {
      title: 'Mi carrito',
      options: 'Options',
      coupon: 'Cupón de descuento',
      promoPlaceholder: 'CÓDIGO PROMO',
      apply: 'Aplicar',
      subtotal: 'Subtotal',
      discount: 'Descuento',
      shipping: 'Envío',
      shippingNote: 'Calculado en el siguiente paso',
      total: 'Total',
      vatNote: 'IVA incluido · Envío calculado en el siguiente paso',
      validate: 'Validar mi carrito',
      amazon: 'Pedir en Amazon',
      items: {
        item1: {
          name: 'The 25X Pants For Man',
          price: '105.00 €',
        },
        item2: {
          name: 'The 25X T-shirt For Man',
          price: '54.00 €',
        },
        item3: {
          name: 'The 25X Pants For Man',
          price: '150.00 €',
        },
      },
      subtotalValue: '473.33 €',
      discountValue: '-56.80 €',
      totalValue: '511.20 €',
    },
    produit: {
      title: 'Producto',
      name: 'Nike Free Run Rouge',
      price: '89.99€',
      color: 'Rojo',
      size: '42',
      material:
        'Composición del material Empeine: malla transpirable; forro y plantilla: materiales sintéticos; suela exterior: goma. Material de la suela Goma. Altura del corte baja. Material exterior Malla. País de origen Vietnam.',
      about:
        'Sobre este artículo — Amortiguación Nike Free para flexibilidad natural. Entresuela de espuma ligera para una amortiguación suave. Diseño ligero ideal para correr y el día a día.',
      addToCart: 'Añadir al carrito',
      removeFromFavorites: 'Quitar de favoritos',
    },
    compte: {
      title: 'Mi cuenta',
      member: '· Miembro Skoleom',
      menu: {
        orders: {
          label: 'Pedidos',
          desc: 'Seguimiento e historial',
        },
        addresses: {
          label: 'Direcciones',
          desc: 'Envío y facturación',
        },
        details: {
          label: 'Detalles de la cuenta',
          desc: 'Nombre, email, teléfono',
        },
        security: {
          label: 'Seguridad',
          desc: 'Contraseña',
        },
      },
      logout: 'Cerrar sesión',
    },
    magazine: {
      title: 'Magazine',
      sesport: 'SeSport',
      gaming: 'Gaming',
      sesportArticles: {
        item1: {
          title: 'Fichajes: Este entrenador de la Ligue 1 que podría...',
          date: '12 de mayo de 2026',
        },
        item2: {
          title: 'Ligue 1: para el PSG, el título de la resiliencia tras...',
          date: '11 de mayo de 2026',
        },
        item3: {
          title: 'Champions League: el choque de titanes en semifinales...',
          date: '10 de mayo de 2026',
        },
      },
      gamingArticles: {
        item1: {
          title: 'Valorant Champions 2026: Repaso de...',
          date: '12 de mayo de 2026',
        },
        item2: {
          title: 'Xbox Game Pass: los últimos juegos de enero...',
          date: '11 de mayo de 2026',
        },
        item3: {
          title: 'PS5 Pro: todo lo que sabemos sobre la próxima...',
          date: '10 de mayo de 2026',
        },
      },
    },
    musique: {
      title: 'Skoleom Music',
      recognizing: 'Reconocimiento en curso',
      listening: 'Estás escuchando:',
      song: 'WHERE SHE GOES — Bad Bunny',
    },
    travel: {
      title: 'Skoleom Travel',
      destination: 'Destino:',
      flights: 'Reserva de vuelos',
      hotels: 'Reserva de hoteles',
      cities: {
        tokyo: 'Tokyo',
        santorin: 'Santorin',
        newYork: 'New York',
        paris: 'Paris',
      },
      vols: {
        af: {
          name: 'Air France',
          price: '896 €',
        },
        jl: {
          name: 'Japan Airlines',
          price: '920 €',
        },
        ek: {
          name: 'Emirates',
          price: '995 €',
        },
        qr: {
          name: 'Qatar Airw.',
          price: '847 €',
        },
      },
      hotelsList: {
        imperial: {
          name: 'Imperial Med',
          price: '132 €/noche',
        },
        shine: {
          name: 'Shine',
          price: '205 €/noche',
        },
        greco: {
          name: 'El Greco Resort',
          price: '203 €/noche',
        },
        karterado: {
          name: 'Hotel Karterado',
          price: '247 €/noche',
        },
      },
    },
    banner: {
      watchNow: 'Ver ahora',
    },
  },
};

const sesyncDe: SesyncTranslations = {
  page: {
    hero: {
      pill: 'Verfügbar in allen 6 gängigen Browsern · Kostenlos',
      line1: 'Jedes Video',
      line2Before: 'ist ein',
      line2Highlight: 'Geschäft',
      line3: 'live.',
      description:
        'SeSync ist die Erweiterung, die jedes Video – auf Netflix, YouTube, Prime Video, Disney+ und über 2.000 Plattformen – in ein Einkaufserlebnis verwandelt. Berühren Sie den Bildschirm. Kaufen. Ohne Umleitung.',
      installCta: 'Installieren Sie SeSync',
      howCta: 'Sehen Sie, wie es funktioniert',
    },
    stats: {
      ott: {
        n: '2.000+',
        l: 'OTT-Plattformen',
      },
      sites: {
        n: '1 Milliarde+',
        l: 'Abgedeckte Websites',
      },
      browsers: {
        n: '6',
        l: 'Browser',
      },
      noRedirect: {
        n: '0',
        l: 'Umleiten',
      },
    },
    marquee: {
      ariaLabel: 'SeSync-fähige OTT-Plattformen',
      moreOtt: '+2000 OTT',
    },
    how: {
      eyebrow: 'Das Prinzip',
      titleBefore: 'Drei ',
      titleHighlight: 'Gesten',
      titleAfter: '. Ein einzigartiges Erlebnis.',
      description:
        'Kein Lernen erforderlich. SeSync wird aktiviert, sobald ein Video startet, identifiziert Objekte in Echtzeit und bietet den Kauf direkt im Player an.',
    },
    steps: {
      step1: {
        title: 'Installieren Sie SeSync kostenlos.',
        text: 'Laden Sie die Erweiterung aus dem offiziellen Store Ihres Browsers herunter. Ein Klick, 30 Sekunden. Das SeSync-Symbol erscheint sofort in Ihrer Symbolleiste.',
      },
      step2: {
        title: 'Spielen Sie ein beliebiges Video ab.',
        text: 'Netflix, YouTube, Prime Video, Twitch oder jede OTT-Plattform. SeSync wacht automatisch auf und identifiziert die auf dem Bildschirm sichtbaren Produkte, ohne den Player zu verlangsamen.',
      },
      step3: {
        title: 'Berühren. Kaufen. Das ist alles.',
        text: 'Streichen Sie mit dem Finger oder der Maus über ein Objekt. Das Produktblatt erscheint. Mit einem Klick in den Warenkorb legen. Das Video läuft im Hintergrund weiter. Keine Weiterleitungen.',
      },
    },
    mockup: {
      eyebrow: 'Magic Touch',
      titleBefore: 'So ',
      titleHighlight: 'passiert',
      titleAfter: '.',
      description:
        'Der Benutzer fährt mit dem Finger über den Sneaker. SeSync identifiziert die Gulf Runner Sky Edition. Preise, Größen, Lieferung, In den Warenkorb legen – alles ist verfügbar, ohne Netflix zu verlassen.',
    },
    universes: {
      eyebrow: 'Die 8 Universen',
      titleBefore: 'Eine ',
      titleHighlight: 'Leiste',
      titleAfter: '. Acht Möglichkeiten.',
      description:
        'Rechts neben jedem Video öffnet eine Symbolleiste ein eigenes Universum – Produkte, Musik, Reisen, Spiele, KI-Assistent. Alles kontextbezogen, alles synchronisiert.',
      music: {
        title: 'Musik',
        desc: 'Identifizieren Sie den Soundtrack und öffnen Sie Spotify, Apple Music oder Deezer mit einem Klick.',
      },
      travel: {
        title: 'Reise',
        desc: 'Buchen Sie Flug und Hotel ab dem auf dem Bildschirm angezeigten Ziel.',
      },
      sport: {
        title: 'Sport',
        desc: 'Turnschuhe, Trikots, Sportzubehör – die Ausrüstung, die im Video zu sehen ist.',
      },
      gaming: {
        title: 'Gaming',
        desc: 'Minispiele, Cashback, Promo-Codes zum Freischalten während des Spielens.',
      },
      fashion: {
        title: 'Mode',
        desc: 'Durch visuelle KI erkannte Kleidung – exakte Übereinstimmung oder ähnliches.',
      },
      magazine: {
        title: 'Magazine',
        desc: 'Inhaltsbezogene Artikel, Lookbooks und Markengeschichten.',
      },
      cart: {
        title: 'Universeller Korb',
        desc: 'Ein einziger Korb für alle Ihre Videos, Plattformen und Tabs.',
      },
      gpt: {
        title: 'Skoleom GPT',
        desc: 'Ihr KI-Einkaufsassistent – ​​stellen Sie jede Frage.',
      },
    },
    why: {
      eyebrow: 'Warum SeSync',
      titleBefore: 'Eine ',
      titleHighlight: 'Technologie',
      titleAfter: 'was es sonst nirgends gibt.',
    },
    pillars: {
      patent: {
        title: 'Weltweit patentiert.',
        text: 'Unsere Echtzeit-Objekterkennungstechnologie in einem Videostream ist durch drei internationale Patente geschützt (FR2201013A, EP4473738, WO2023148295A1). Das macht SeSync unschlagbar.',
      },
      performance: {
        title: 'Keine Auswirkungen auf Ihre Videos.',
        text: 'SeSync nutzt GPU-Beschleunigung und arbeitet in einem isolierten Frame. Ihre 4K- und HDR-Videos werden nie langsamer. Die Erkennung erfolgt sofort, unsichtbar und natürlich.',
      },
      privacy: {
        title: 'DSGVO-first. Europäische Souveränität.',
        text: 'Ihre Daten verbleiben in der Skoleom Cloud, der souveränen Infrastruktur in Europa. Kein Weiterverkauf an Dritte, verschlüsselte Zahlungen, PCI-DSS Level 1 konform.',
      },
      free: {
        title: 'Frei. Für immer.',
        text: 'SeSync ist und bleibt kostenlos. Kein Abonnement, keine Werbung, keine Sammlung weiterverkaufter Daten. Unser Modell: eine Provision auf Verkäufe von Partnermarken.',
      },
    },
    browsers: {
      eyebrow: 'Kompatibilität',
      titleBefore: 'Verfügbar',
      titleHighlight: 'überall',
      titleAfter: '.',
      description:
        'SeSync ist mit den 6 wichtigsten Browsern kompatibel, die mehr als 99 % des Weltmarktes abdecken. Eine Installation, überall.',
      available: 'Verfügbar',
      soon: 'Demnächst verfügbar',
    },
    faq: {
      eyebrow: 'Fragen',
      titleBefore: 'Die ',
      titleHighlight: 'Antworten',
      titleAfter: ', die zählen.',
      free: {
        q: 'Ist SeSync wirklich kostenlos?',
        a: 'Ja, für immer kostenlos, ohne versteckte Abonnements. Unsere Einnahmen stammen ausschließlich aus Provisionen für Verkäufe, die über die Erweiterung getätigt werden und von Partnermarken gezahlt werden.',
      },
      security: {
        q: 'Sind meine Daten sicher?',
        a: 'SeSync ist DSGVO-konform. Ihre Daten werden in Europa in der Skoleom Cloud gehostet und niemals an Dritte weiterverkauft. Zahlungen erfolgen verschlüsselt und PCI-DSS Level 1-konform.',
      },
      platforms: {
        q: 'Auf welchen Plattformen funktioniert SeSync?',
        a: 'SeSync erkennt automatisch mehr als 2.000 OTT-Plattformen (Netflix, YouTube, Prime Video, Disney+, HBO, Twitch usw.) und mehr als eine Milliarde Partner-Websites.',
      },
      performance: {
        q: 'Verlangsamt das meine Videos?',
        a: 'Nein. SeSync ist so konzipiert, dass es keinerlei Auswirkungen auf die Wiedergabeleistung hat, selbst in 4K HDR. Unsere Erkennung nutzt die GPU-Beschleunigung in einem isolierten Frame.',
      },
      account: {
        q: 'Brauche ich ein Konto?',
        a: 'Um die Kapseln zu entdecken: Nein. Kaufen, Favoriten speichern oder den universellen Warenkorb nutzen: Ja, ein kostenloses Skoleom-Konto reicht aus.',
      },
      mobile: {
        q: 'Funktioniert SeSync auf Mobilgeräten?',
        a: 'Für den Browser funktioniert die Erweiterung auf dem Desktop. Für Mobilgeräte bietet die Skoleom iOS- und Android-App das gleiche Erlebnis im Hintergrund.',
      },
    },
    cta: {
      titleBefore: 'Sehen. Berühren.',
      titleHighlight: 'Kaufen.',
      description:
        'Werden Sie Teil der Retail-Media-Revolution. Installieren Sie SeSync kostenlos und machen Sie jedes Video zu einem Live-Shop.',
      install: 'Installieren Sie SeSync – kostenlos',
    },
  },
  mockup: {
    sidebar: {
      params: 'Einstellungen',
      favoris: 'Favoriten',
      panier: 'Korb',
      compte: 'Konto',
      magazine: 'Magazine',
      musique: 'Musik',
      travel: 'Reise',
    },
    episode: 'Drive to Survive · S6E2',
    capsule: 'Kapsel',
  },
  capsule: {
    brand: 'Nike',
    videoTitle: 'Nike Free Run Rouge | Unboxing & Review',
    productName: 'Nike Free Run Rouge',
    price: '89.99€',
    freeShipping: 'KOSTENLOSE Lieferung',
    description:
      'Nike Free Run Red – Genießen Sie natürliche Dämpfung und maximale Flexibilität mit diesem leichten Laufschuh. Atmungsaktives Mesh, strapazierfähige Gummisohle.',
    buy: 'Kaufen',
    added: '✓ Hinzugefügt',
    tabInfos: 'Infos',
    tabSimilaires: 'Ähnlich',
    infoCards: {
      card1: 'Nike Free Run – Frühjahrskollektion 2026',
      card2: 'Nike Free Run Rouge | Unboxing & Review',
    },
    similaires: {
      item1: {
        name: 'Nike Air Max 270',
        price: '129€',
      },
      item2: {
        name: 'Adidas Ultra Boost 22',
        price: '159€',
      },
      item3: {
        name: 'Puma RS-X Street',
        price: '99€',
      },
    },
  },
  sidepages: {
    bottomNav: {
      favoris: 'Favoriten',
      panier: 'Korb',
      compte: 'Konto',
      magazine: 'Magazine',
    },
    params: {
      title: 'Einstellungen',
      language: 'Sprache',
      languageHint: 'Wählen Sie die Erweiterungssprache',
      english: '🇬🇧 English',
      french: '🇫🇷 Français',
      display: 'Anzeige',
      displayOptions: {
        button: {
          label: 'Button',
          desc: 'Darstellung der Kapsel in Knopfform',
        },
        timeline: {
          label: 'Timeline',
          desc: 'Kapseln auf der Timeline anzeigen',
        },
        magictouch: {
          label: 'Magic Touch',
          desc: 'Produkte direkt zum Hover hinzufügen',
        },
      },
      buttonShape: 'Knopfform',
      pillLabel: '· Capsule',
      pillDesc: 'Schaltfläche mit Text',
      logoDesc: 'Diskretes rundes Symbol',
    },
    favoris: {
      title: 'Favoriten',
      add: 'Hinzufügen',
      items: {
        item1: {
          name: 'Air Max Plus PSG Shoes',
          price: '312.00€',
        },
        item2: {
          name: "Men's Michael Jordan Black Chicago Bulls",
          price: '360€',
        },
        item3: {
          name: 'The 25X Sneakers - BB2 For Man',
          price: '310€',
        },
      },
    },
    panier: {
      title: 'Mein Korb',
      options: 'Options',
      coupon: 'Rabattgutschein',
      promoPlaceholder: 'AKTIONSCODE',
      apply: 'Anwenden',
      subtotal: 'Zwischensumme',
      discount: 'Reduktion',
      shipping: 'Versand',
      shippingNote: 'Wird im nächsten Schritt berechnet',
      total: 'Total',
      vatNote: 'Inklusive MwSt. · Lieferung wird im nächsten Schritt berechnet',
      validate: 'Bestätige meinen Warenkorb',
      amazon: 'Bei Amazon bestellen',
      items: {
        item1: {
          name: 'The 25X Pants For Man',
          price: '105.00 €',
        },
        item2: {
          name: 'The 25X T-shirt For Man',
          price: '54.00 €',
        },
        item3: {
          name: 'The 25X Pants For Man',
          price: '150.00 €',
        },
      },
      subtotalValue: '473.33 €',
      discountValue: '-56.80 €',
      totalValue: '511.20 €',
    },
    produit: {
      title: 'Produkt',
      name: 'Nike Free Run Rouge',
      price: '89.99€',
      color: 'Rot',
      size: '42',
      material:
        'Materialzusammensetzung Obermaterial: atmungsaktives Mesh; Futter und Decksohle: synthetische Materialien; Außensohle: Gummi. Sohlenmaterial Gummi. Niedrige Stielhöhe. Mesh-Außenmaterial. Herkunftsland Vietnam.',
      about:
        'Über diesen Artikel – Nike Free-Dämpfung für natürliche Flexibilität. Leichte Schaumstoff-Zwischensohle für weiche Dämpfung. Leichtes Design, ideal zum Laufen und für den täglichen Gebrauch.',
      addToCart: 'In den Warenkorb legen',
      removeFromFavorites: 'Aus Favoriten entfernen',
    },
    compte: {
      title: 'Mein Konto',
      member: '· Mitglied Skoleom',
      menu: {
        orders: {
          label: 'Bestellungen',
          desc: 'Tracking und Verlauf',
        },
        addresses: {
          label: 'Adressen',
          desc: 'Lieferung und Rechnungsstellung',
        },
        details: {
          label: 'Kontodaten',
          desc: 'Name, E-Mail, Telefon',
        },
        security: {
          label: 'Sicherheit',
          desc: 'Passwort',
        },
      },
      logout: 'Trennen',
    },
    magazine: {
      title: 'Magazine',
      sesport: 'SeSport',
      gaming: 'Gaming',
      sesportArticles: {
        item1: {
          title: 'Mercato: Dieser Ligue-1-Trainer, der...',
          date: '12. Mai 2026',
        },
        item2: {
          title: 'Ligue 1: Für PSG der Titel der Widerstandsfähigkeit nach...',
          date: '11. Mai 2026',
        },
        item3: {
          title: 'Champions League: Das Aufeinandertreffen der Titanen im Halbfinale...',
          date: '10. Mai 2026',
        },
      },
      gamingArticles: {
        item1: {
          title: 'Valorant Champions 2026: Ein Rückblick auf...',
          date: '12. Mai 2026',
        },
        item2: {
          title: 'Xbox Game Pass: Die neuesten Spiele für Januar ...',
          date: '11. Mai 2026',
        },
        item3: {
          title: 'PS5 Pro: Alles, was wir über die nächste wissen...',
          date: '10. Mai 2026',
        },
      },
    },
    musique: {
      title: 'Skoleom Music',
      recognizing: 'Anerkennung läuft',
      listening: 'Sie hören:',
      song: 'WHERE SHE GOES — Bad Bunny',
    },
    travel: {
      title: 'Skoleom Travel',
      destination: 'Ziel :',
      flights: 'Flugbuchung',
      hotels: 'Hotelreservierung',
      cities: {
        tokyo: 'Tokyo',
        santorin: 'Santorin',
        newYork: 'New York',
        paris: 'Paris',
      },
      vols: {
        af: {
          name: 'Air France',
          price: '896 €',
        },
        jl: {
          name: 'Japan Airlines',
          price: '920 €',
        },
        ek: {
          name: 'Emirates',
          price: '995 €',
        },
        qr: {
          name: 'Qatar Airw.',
          price: '847 €',
        },
      },
      hotelsList: {
        imperial: {
          name: 'Imperial Med',
          price: '132 €/Nacht',
        },
        shine: {
          name: 'Shine',
          price: '205 €/Nacht',
        },
        greco: {
          name: 'El Greco Resort',
          price: '203 €/Nacht',
        },
        karterado: {
          name: 'Hotel Karterado',
          price: '247 €/Nacht',
        },
      },
    },
    banner: {
      watchNow: 'Jetzt ansehen',
    },
  },
};

const sesyncIt: SesyncTranslations = {
  page: {
    hero: {
      pill: 'Disponibile su tutti e 6 i principali browser · Gratuito',
      line1: 'Ogni video',
      line2Before: 'è un',
      line2Highlight: 'negozio',
      line3: 'vivere.',
      description:
        "SeSync è l'estensione che trasforma qualsiasi video, su Netflix, YouTube, Prime Video, Disney+ e oltre 2.000 piattaforme, in un'esperienza di acquisto. Tocca lo schermo. Acquistare. Senza reindirizzamento.",
      installCta: 'Installa SeSync',
      howCta: 'Guarda come funziona',
    },
    stats: {
      ott: {
        n: '2.000+',
        l: 'Piattaforme OTT',
      },
      sites: {
        n: '1 miliardo+',
        l: 'Siti coperti',
      },
      browsers: {
        n: '6',
        l: 'Browser',
      },
      noRedirect: {
        n: '0',
        l: 'Reindirizzamento',
      },
    },
    marquee: {
      ariaLabel: 'Piattaforme OTT abilitate per SeSync',
      moreOtt: '+2000 OTT',
    },
    how: {
      eyebrow: 'Il principio',
      titleBefore: 'Tre ',
      titleHighlight: 'gesti',
      titleAfter: ". Un'esperienza unica.",
      description:
        "Nessun apprendimento richiesto. SeSync si attiva non appena parte un video, identifica gli oggetti in tempo reale e propone l'acquisto direttamente all'interno del player.",
    },
    steps: {
      step1: {
        title: 'Installa SeSync gratuitamente.',
        text: "Scarica l'estensione dallo store ufficiale del tuo browser. Un clic, 30 secondi. L'icona SeSync appare immediatamente nella barra degli strumenti.",
      },
      step2: {
        title: 'Riproduci qualsiasi video.',
        text: 'Netflix, YouTube, Prime Video, Twitch o qualsiasi piattaforma OTT. SeSync si attiva automaticamente e identifica i prodotti visibili sullo schermo, senza rallentare il lettore.',
      },
      step3: {
        title: 'Tocco. Acquistare. Questo è tutto.',
        text: 'Scorri il dito o il mouse su un oggetto. Appare la scheda prodotto. Aggiungi al carrello con un clic. Il video continua a essere riprodotto in sottofondo. Nessun reindirizzamento.',
      },
    },
    mockup: {
      eyebrow: 'Magic Touch',
      titleBefore: 'Ecco cosa ',
      titleHighlight: 'succede',
      titleAfter: '.',
      description:
        "L'utente passa il dito sulla scarpa da ginnastica. SeSync identifica il Gulf Runner Sky Edition. Prezzi, taglie, consegna, aggiungi al carrello: è tutto lì, senza uscire da Netflix.",
    },
    universes: {
      eyebrow: 'Gli 8 universi',
      titleBefore: 'Una ',
      titleHighlight: 'barra',
      titleAfter: '. Otto possibilità.',
      description:
        'A destra di ogni video, una barra delle icone apre un universo dedicato: prodotti, musica, viaggi, giochi, assistente AI. Tutto contestuale, tutto sincronizzato.',
      music: {
        title: 'Musica',
        desc: 'Identifica la colonna sonora e apri Spotify, Apple Music o Deezer con un clic.',
      },
      travel: {
        title: 'Viaggio',
        desc: 'Prenota volo e hotel dalla destinazione visualizzata sullo schermo.',
      },
      sport: {
        title: 'Sport',
        desc: "Scarpe da ginnastica, maglie, accessori sportivi: l'attrezzatura vista nel video.",
      },
      gaming: {
        title: 'Gaming',
        desc: 'Minigiochi, cashback, codici promozionali da sbloccare mentre giochi.',
      },
      fashion: {
        title: 'Moda',
        desc: "Abbigliamento rilevato dall'intelligenza artificiale visiva: corrispondenza esatta o simile.",
      },
      magazine: {
        title: 'Magazine',
        desc: 'Articoli relativi ai contenuti, lookbook e storie del marchio.',
      },
      cart: {
        title: 'Cestino universale',
        desc: 'Un unico carrello per tutti i tuoi video, piattaforme e schede.',
      },
      gpt: {
        title: 'Skoleom GPT',
        desc: 'Il tuo assistente allo shopping AI: fai qualsiasi domanda.',
      },
    },
    why: {
      eyebrow: 'Perché SeSync',
      titleBefore: 'Una ',
      titleHighlight: 'tecnologia',
      titleAfter: "che non esiste da nessun'altra parte.",
    },
    pillars: {
      patent: {
        title: 'Brevettato in tutto il mondo.',
        text: 'La nostra tecnologia di identificazione degli oggetti in tempo reale in un flusso video è protetta da tre brevetti internazionali (FR2201013A, EP4473738, WO2023148295A1). Questo è ciò che rende SeSync imbattibile.',
      },
      performance: {
        title: 'Impatto zero sui tuoi video.',
        text: "SeSync utilizza l'accelerazione GPU e funziona in un frame isolato. I tuoi video 4K e HDR non rallentano mai. La rilevazione è istantanea, invisibile, naturale.",
      },
      privacy: {
        title: 'GDPR-prima. La sovranità europea.',
        text: "I tuoi dati rimangono su Skoleom Cloud, l'infrastruttura sovrana in Europa. Nessuna rivendita a terzi, pagamenti crittografati, conforme PCI-DSS livello 1.",
      },
      free: {
        title: 'Gratuito. Per sempre.',
        text: 'SeSync è e rimarrà gratuito. Nessun abbonamento, nessuna pubblicità, nessuna raccolta di dati rivenduti. Il nostro modello: una commissione sulle vendite dei marchi partner.',
      },
    },
    browsers: {
      eyebrow: 'Compatibilità',
      titleBefore: 'Disponibile',
      titleHighlight: 'ovunque',
      titleAfter: '.',
      description:
        "SeSync è compatibile con i 6 principali browser che coprono oltre il 99% del mercato globale. Un'unica installazione, ovunque.",
      available: 'Disponibile',
      soon: 'Prossimamente',
    },
    faq: {
      eyebrow: 'Domande',
      titleBefore: 'Le ',
      titleHighlight: 'risposte',
      titleAfter: 'quella importa.',
      free: {
        q: 'SeSync è davvero gratuito?',
        a: "Sì, gratis per sempre, senza abbonamenti nascosti. Le nostre entrate provengono solo dalle commissioni sulle vendite effettuate tramite l'estensione, pagate dai marchi partner.",
      },
      security: {
        q: 'I miei dati sono al sicuro?',
        a: 'SeSync è prioritario per il GDPR. I tuoi dati sono ospitati in Europa su Skoleom Cloud, mai rivenduti a terzi. I pagamenti sono crittografati e conformi PCI-DSS Livello 1.',
      },
      platforms: {
        q: 'Su quali piattaforme funziona SeSync?',
        a: 'SeSync rileva automaticamente più di 2.000 piattaforme OTT (Netflix, YouTube, Prime Video, Disney+, HBO, Twitch, ecc.) e più di un miliardo di siti Web partner.',
      },
      performance: {
        q: 'Questo rallenta i miei video?',
        a: "No. SeSync è progettato per avere un impatto zero sulle prestazioni di riproduzione, anche in 4K HDR. Il nostro rilevamento utilizza l'accelerazione GPU in un frame isolato.",
      },
      account: {
        q: 'Hai bisogno di creare un account?',
        a: 'Per scoprire le capsule: no. Per acquistare, salvare i preferiti o utilizzare il carrello universale: sì, è sufficiente un account Skoleom gratuito.',
      },
      mobile: {
        q: 'SeSync funziona sui dispositivi mobili?',
        a: "Per il browser, l'estensione funziona sul desktop. Per i dispositivi mobili, l'app Skoleom per iOS e Android offre la stessa esperienza, in background.",
      },
    },
    cta: {
      titleBefore: 'Aspetto. Tocco.',
      titleHighlight: 'Acquistare.',
      description:
        'Unisciti alla rivoluzione dei media al dettaglio. Installa SeSync gratuitamente e trasforma ogni video in un archivio live.',
      install: 'Installa SeSync: gratuito',
    },
  },
  mockup: {
    sidebar: {
      params: 'Impostazioni',
      favoris: 'Preferiti',
      panier: 'Cestino',
      compte: 'Account',
      magazine: 'Magazine',
      musique: 'Musica',
      travel: 'Viaggio',
    },
    episode: 'Drive to Survive · S6E2',
    capsule: 'Capsula',
  },
  capsule: {
    brand: 'Nike',
    videoTitle: 'Nike Free Run Rouge | Unboxing & Review',
    productName: 'Nike Free Run Rouge',
    price: '89.99€',
    freeShipping: 'Consegna GRATUITA',
    description:
      "Nike Free Run Rossa — Goditi un'ammortizzazione naturale e la massima flessibilità con questa scarpa da corsa leggera. Mesh traspirante, suola in gomma resistente.",
    buy: 'Acquistare',
    added: '✓ Aggiunto',
    tabInfos: 'Info',
    tabSimilaires: 'Simile',
    infoCards: {
      card1: 'Nike Free Run – Collezione Primavera 2026',
      card2: 'Nike Free Run Rouge | Unboxing & Review',
    },
    similaires: {
      item1: {
        name: 'Nike Air Max 270',
        price: '129€',
      },
      item2: {
        name: 'Adidas Ultra Boost 22',
        price: '159€',
      },
      item3: {
        name: 'Puma RS-X Street',
        price: '99€',
      },
    },
  },
  sidepages: {
    bottomNav: {
      favoris: 'Preferiti',
      panier: 'Cestino',
      compte: 'Account',
      magazine: 'Magazine',
    },
    params: {
      title: 'Impostazioni',
      language: 'Lingua',
      languageHint: "Scegli la lingua dell'estensione",
      english: '🇬🇧 English',
      french: '🇫🇷 Français',
      display: 'Display',
      displayOptions: {
        button: {
          label: 'Button',
          desc: 'Visualizzazione della capsula sotto forma di pulsante',
        },
        timeline: {
          label: 'Timeline',
          desc: 'Visualizzazione delle capsule sulla timeline',
        },
        magictouch: {
          label: 'Magic Touch',
          desc: 'Aggiunta di prodotti direttamente al passaggio del mouse',
        },
      },
      buttonShape: 'Forma a bottone',
      pillLabel: '· Capsule',
      pillDesc: 'Pulsante con testo',
      logoDesc: 'Icona rotonda discreta',
    },
    favoris: {
      title: 'Preferiti',
      add: 'Aggiungere',
      items: {
        item1: {
          name: 'Air Max Plus PSG Shoes',
          price: '312.00€',
        },
        item2: {
          name: "Men's Michael Jordan Black Chicago Bulls",
          price: '360€',
        },
        item3: {
          name: 'The 25X Sneakers - BB2 For Man',
          price: '310€',
        },
      },
    },
    panier: {
      title: 'Il mio cestino',
      options: 'Options',
      coupon: 'Buono sconto',
      promoPlaceholder: 'CODICE PROMOZIONALE',
      apply: 'Fare domanda a',
      subtotal: 'Subtotale',
      discount: 'Riduzione',
      shipping: 'Spedizione',
      shippingNote: 'Calcolato nel passaggio successivo',
      total: 'Total',
      vatNote: 'IVA inclusa · Consegna calcolata nel passaggio successivo',
      validate: 'Convalida il mio carrello',
      amazon: 'Ordina su Amazon',
      items: {
        item1: {
          name: 'The 25X Pants For Man',
          price: '105.00 €',
        },
        item2: {
          name: 'The 25X T-shirt For Man',
          price: '54.00 €',
        },
        item3: {
          name: 'The 25X Pants For Man',
          price: '150.00 €',
        },
      },
      subtotalValue: '473.33 €',
      discountValue: '-56.80 €',
      totalValue: '511.20 €',
    },
    produit: {
      title: 'Prodotto',
      name: 'Nike Free Run Rouge',
      price: '89.99€',
      color: 'Rosso',
      size: '42',
      material:
        "Composizione del materiale Tomaia: mesh traspirante; fodera e sottopiede: materiali sintetici; suola: gomma. Materiale suola Gomma. Altezza dello stelo bassa. Materiale esterno in rete. Paese d'origine Vietnam.",
      about:
        "Informazioni su questo articolo — Ammortizzazione Nike Free per una flessibilità naturale. Intersuola in schiuma leggera per un'ammortizzazione morbida. Design leggero ideale per la corsa e l'uso quotidiano.",
      addToCart: 'Aggiungi al carrello',
      removeFromFavorites: 'Rimuovi dai preferiti',
    },
    compte: {
      title: 'Il mio conto',
      member: '· Membro Skoleom',
      menu: {
        orders: {
          label: 'Ordini',
          desc: 'Monitoraggio e cronologia',
        },
        addresses: {
          label: 'Indirizzi',
          desc: 'Consegna e fatturazione',
        },
        details: {
          label: 'Dettagli del conto',
          desc: 'Nome, email, telefono',
        },
        security: {
          label: 'Sicurezza',
          desc: 'Password',
        },
      },
      logout: 'Disconnetti',
    },
    magazine: {
      title: 'Magazine',
      sesport: 'SeSport',
      gaming: 'Gaming',
      sesportArticles: {
        item1: {
          title: 'Mercato: Questo allenatore della Ligue 1 che potrebbe...',
          date: '12 maggio 2026',
        },
        item2: {
          title: 'Ligue 1: per il PSG il titolo della resilienza dopo...',
          date: '11 maggio 2026',
        },
        item3: {
          title: 'Champions League: lo scontro tra titani in semifinale...',
          date: '10 maggio 2026',
        },
      },
      gamingArticles: {
        item1: {
          title: 'Valorant Champions 2026: uno sguardo al passato...',
          date: '12 maggio 2026',
        },
        item2: {
          title: 'Xbox Game Pass: gli ultimi giochi di gennaio...',
          date: '11 maggio 2026',
        },
        item3: {
          title: 'PS5 Pro: tutto quello che sappiamo sul prossimo...',
          date: '10 maggio 2026',
        },
      },
    },
    musique: {
      title: 'Skoleom Music',
      recognizing: 'Riconoscimento in corso',
      listening: 'Stai ascoltando:',
      song: 'WHERE SHE GOES — Bad Bunny',
    },
    travel: {
      title: 'Skoleom Travel',
      destination: 'Destinazione:',
      flights: 'Prenotazione del volo',
      hotels: 'Prenotazione alberghiera',
      cities: {
        tokyo: 'Tokyo',
        santorin: 'Santorin',
        newYork: 'New York',
        paris: 'Paris',
      },
      vols: {
        af: {
          name: 'Air France',
          price: '896 €',
        },
        jl: {
          name: 'Japan Airlines',
          price: '920 €',
        },
        ek: {
          name: 'Emirates',
          price: '995 €',
        },
        qr: {
          name: 'Qatar Airw.',
          price: '847 €',
        },
      },
      hotelsList: {
        imperial: {
          name: 'Imperial Med',
          price: '132 €/notte',
        },
        shine: {
          name: 'Shine',
          price: '205 €/notte',
        },
        greco: {
          name: 'El Greco Resort',
          price: '203 €/notte',
        },
        karterado: {
          name: 'Hotel Karterado',
          price: '247 €/notte',
        },
      },
    },
    banner: {
      watchNow: 'Guarda ora',
    },
  },
};

const sesyncNl: SesyncTranslations = {
  page: {
    hero: {
      pill: 'Beschikbaar in alle 6 grote browsers · Gratis',
      line1: 'Elke video',
      line2Before: 'is een',
      line2Highlight: 'winkel',
      line3: 'live.',
      description:
        'SeSync is de extensie die van elke video (op Netflix, YouTube, Prime Video, Disney+ en meer dan 2.000 platforms) een winkelervaring maakt. Raak het scherm aan. Kopen. Zonder omleiding.',
      installCta: 'Installeer SeSync',
      howCta: 'Kijk hoe het werkt',
    },
    stats: {
      ott: {
        n: '2.000+',
        l: 'OTT-platforms',
      },
      sites: {
        n: '1 miljard+',
        l: 'Sites gedekt',
      },
      browsers: {
        n: '6',
        l: 'Browsers',
      },
      noRedirect: {
        n: '0',
        l: 'Omleiden',
      },
    },
    marquee: {
      ariaLabel: 'Voor SeSync geschikte OTT-platforms',
      moreOtt: '+2000 OTT',
    },
    how: {
      eyebrow: 'Het principe',
      titleBefore: 'Drie ',
      titleHighlight: 'gebaren',
      titleAfter: '. Een unieke ervaring.',
      description:
        'Geen leren vereist. SeSync wordt geactiveerd zodra een video start, identificeert objecten in realtime en biedt aankoop rechtstreeks in de speler aan.',
    },
    steps: {
      step1: {
        title: 'Installeer SeSync gratis.',
        text: 'Download de extensie vanuit de officiële winkel van uw browser. Eén klik, 30 seconden. Het SeSync-pictogram verschijnt onmiddellijk in uw werkbalk.',
      },
      step2: {
        title: 'Speel een willekeurige video af.',
        text: 'Netflix, YouTube, Prime Video, Twitch of een ander OTT-platform. SeSync wordt automatisch wakker en identificeert de producten die zichtbaar zijn op het scherm, zonder de speler te vertragen.',
      },
      step3: {
        title: 'Aanraken. Kopen. Dat is alles.',
        text: 'Veeg met uw vinger of muis over een object. Het productblad verschijnt. Voeg met één klik toe aan winkelwagen. De video blijft op de achtergrond spelen. Geen omleidingen.',
      },
    },
    mockup: {
      eyebrow: 'Magic Touch',
      titleBefore: 'Dit is wat ',
      titleHighlight: 'gebeurt',
      titleAfter: '.',
      description:
        'De gebruiker beweegt zijn vinger over de sneaker. SeSync identificeert de Gulf Runner Sky Edition. Prijzen, maten, bezorging, toevoegen aan winkelwagentje: het is er allemaal, zonder Netflix te verlaten.',
    },
    universes: {
      eyebrow: 'De 8 universums',
      titleBefore: 'Een ',
      titleHighlight: 'balk',
      titleAfter: '. Acht mogelijkheden.',
      description:
        'Rechts van elke video opent een pictogrammenbalk een speciaal universum: producten, muziek, reizen, games, AI-assistent. Allemaal contextueel, allemaal gesynchroniseerd.',
      music: {
        title: 'Muziek',
        desc: 'Identificeer de soundtrack en open Spotify, Apple Music of Deezer met één klik.',
      },
      travel: {
        title: 'Reis',
        desc: 'Boek een vlucht en hotel vanaf de bestemming die op het scherm wordt weergegeven.',
      },
      sport: {
        title: 'Sport',
        desc: 'Sneakers, truien, sportaccessoires: de uitrusting die in de video te zien is.',
      },
      gaming: {
        title: 'Gaming',
        desc: 'Minigames, cashback, promotiecodes om te ontgrendelen tijdens het spelen.',
      },
      fashion: {
        title: 'Mode',
        desc: 'Kleding gedetecteerd door visuele AI – exacte match of iets dergelijks.',
      },
      magazine: {
        title: 'Magazine',
        desc: 'Inhoudelijke artikelen, lookbooks en merkverhalen.',
      },
      cart: {
        title: 'Universele mand',
        desc: "Eén mandje voor al uw video's, platforms en tabbladen.",
      },
      gpt: {
        title: 'Skoleom GPT',
        desc: 'Uw AI-winkelassistent: stel elke vraag.',
      },
    },
    why: {
      eyebrow: 'Waarom SeSync',
      titleBefore: 'Een ',
      titleHighlight: 'technologie',
      titleAfter: 'die nergens anders bestaat.',
    },
    pillars: {
      patent: {
        title: 'Wereldwijd gepatenteerd.',
        text: 'Onze real-time objectidentificatietechnologie in een videostream wordt beschermd door drie internationale patenten (FR2201013A, EP4473738, WO2023148295A1). Dit maakt SeSync onverslaanbaar.',
      },
      performance: {
        title: "Geen impact op uw video's.",
        text: "SeSync maakt gebruik van GPU-versnelling en werkt in een geïsoleerd frame. Je 4K- en HDR-video's worden nooit langzamer. Detectie is onmiddellijk, onzichtbaar en natuurlijk.",
      },
      privacy: {
        title: 'AVG voorop. Europese soevereiniteit.',
        text: 'Uw gegevens blijven op Skoleom Cloud, de soevereine infrastructuur in Europa. Geen wederverkoop aan derden, gecodeerde betalingen, PCI-DSS niveau 1-compatibel.',
      },
      free: {
        title: 'Vrij. Voor altijd.',
        text: 'SeSync is en blijft gratis. Geen abonnement, geen reclame, geen verzameling van doorverkochte gegevens. Ons model: een commissie op de verkoop van partnermerken.',
      },
    },
    browsers: {
      eyebrow: 'Verenigbaarheid',
      titleBefore: 'Beschikbaar',
      titleHighlight: 'overal',
      titleAfter: '.',
      description:
        'SeSync is compatibel met de 6 grote browsers die meer dan 99% van de wereldmarkt bestrijken. Eén installatie, overal.',
      available: 'Beschikbaar',
      soon: 'Binnenkort beschikbaar',
    },
    faq: {
      eyebrow: 'Vragen',
      titleBefore: 'De ',
      titleHighlight: 'antwoorden',
      titleAfter: 'die zaak.',
      free: {
        q: 'Is SeSync echt gratis?',
        a: 'Ja, voor altijd gratis, zonder verborgen abonnementen. Onze inkomsten komen uitsluitend uit commissies op verkopen via de extensie, betaald door partnermerken.',
      },
      security: {
        q: 'Zijn mijn gegevens veilig?',
        a: 'SeSync is AVG-eerst. Uw gegevens worden in Europa gehost op Skoleom Cloud en worden nooit doorverkocht aan derden. Betalingen zijn gecodeerd en voldoen aan PCI-DSS Level 1.',
      },
      platforms: {
        q: 'Op welke platforms werkt SeSync?',
        a: 'SeSync detecteert automatisch meer dan 2.000 OTT-platforms (Netflix, YouTube, Prime Video, Disney+, HBO, Twitch, enz.) en meer dan een miljard partnerwebsites.',
      },
      performance: {
        q: "Vertraagt ​​dit mijn video's?",
        a: 'Nee. SeSync is ontworpen om geen invloed te hebben op de afspeelprestaties, zelfs in 4K HDR. Onze detectie maakt gebruik van GPU-versnelling in een geïsoleerd frame.',
      },
      account: {
        q: 'Moet u een account aanmaken?',
        a: 'Om de capsules te ontdekken: nee. Om te kopen, favorieten op te slaan of het universele winkelmandje te gebruiken: ja, een gratis Skoleom-account is voldoende.',
      },
      mobile: {
        q: 'Werkt SeSync op mobiel?',
        a: 'Voor de browser werkt de extensie op desktop. Voor mobiel biedt de Skoleom iOS- en Android-app dezelfde ervaring, op de achtergrond.',
      },
    },
    cta: {
      titleBefore: 'Kijk. Aanraken.',
      titleHighlight: 'Kopen.',
      description:
        'Sluit u aan bij de Retail Media-revolutie. Installeer SeSync gratis en maak van elke video een live winkel.',
      install: 'Installeer SeSync — Gratis',
    },
  },
  mockup: {
    sidebar: {
      params: 'Instellingen',
      favoris: 'Favorieten',
      panier: 'Mand',
      compte: 'Rekening',
      magazine: 'Magazine',
      musique: 'Muziek',
      travel: 'Reis',
    },
    episode: 'Drive to Survive · S6E2',
    capsule: 'Capsule',
  },
  capsule: {
    brand: 'Nike',
    videoTitle: 'Nike Free Run Rouge | Unboxing & Review',
    productName: 'Nike Free Run Rouge',
    price: '89.99€',
    freeShipping: 'GRATIS levering',
    description:
      'Nike Free Run Red — Geniet van natuurlijke demping en maximale flexibiliteit met deze lichtgewicht hardloopschoen. Ademend mesh, duurzame rubberen zool.',
    buy: 'Kopen',
    added: '✓ Toegevoegd',
    tabInfos: 'Info',
    tabSimilaires: 'Vergelijkbaar',
    infoCards: {
      card1: 'Nike Free Run — Lentecollectie 2026',
      card2: 'Nike Free Run Rouge | Unboxing & Review',
    },
    similaires: {
      item1: {
        name: 'Nike Air Max 270',
        price: '129€',
      },
      item2: {
        name: 'Adidas Ultra Boost 22',
        price: '159€',
      },
      item3: {
        name: 'Puma RS-X Street',
        price: '99€',
      },
    },
  },
  sidepages: {
    bottomNav: {
      favoris: 'Favorieten',
      panier: 'Mand',
      compte: 'Rekening',
      magazine: 'Magazine',
    },
    params: {
      title: 'Instellingen',
      language: 'Taal',
      languageHint: 'Kies de extensietaal',
      english: '🇬🇧 English',
      french: '🇫🇷 Français',
      display: 'Weergave',
      displayOptions: {
        button: {
          label: 'Button',
          desc: 'Weergave van de capsule in knopvorm',
        },
        timeline: {
          label: 'Timeline',
          desc: 'Capsules weergeven op de tijdlijn',
        },
        magictouch: {
          label: 'Magic Touch',
          desc: 'Producten rechtstreeks aan de hover toevoegen',
        },
      },
      buttonShape: 'Knoopvorm',
      pillLabel: '· Capsule',
      pillDesc: 'Knop met tekst',
      logoDesc: 'Discreet rond icoon',
    },
    favoris: {
      title: 'Favorieten',
      add: 'Toevoegen',
      items: {
        item1: {
          name: 'Air Max Plus PSG Shoes',
          price: '312.00€',
        },
        item2: {
          name: "Men's Michael Jordan Black Chicago Bulls",
          price: '360€',
        },
        item3: {
          name: 'The 25X Sneakers - BB2 For Man',
          price: '310€',
        },
      },
    },
    panier: {
      title: 'Mijn mandje',
      options: 'Options',
      coupon: 'Kortingsbon',
      promoPlaceholder: 'PROMOCODE',
      apply: 'Toepassen',
      subtotal: 'Subtotaal',
      discount: 'Afname',
      shipping: 'Verzending',
      shippingNote: 'Berekend in de volgende stap',
      total: 'Total',
      vatNote: 'Inclusief BTW · Levering berekend in de volgende stap',
      validate: 'Valideer mijn winkelmandje',
      amazon: 'Bestel op Amazon',
      items: {
        item1: {
          name: 'The 25X Pants For Man',
          price: '105.00 €',
        },
        item2: {
          name: 'The 25X T-shirt For Man',
          price: '54.00 €',
        },
        item3: {
          name: 'The 25X Pants For Man',
          price: '150.00 €',
        },
      },
      subtotalValue: '473.33 €',
      discountValue: '-56.80 €',
      totalValue: '511.20 €',
    },
    produit: {
      title: 'Product',
      name: 'Nike Free Run Rouge',
      price: '89.99€',
      color: 'Rood',
      size: '42',
      material:
        'Materiaalsamenstelling Bovenwerk: ademend mesh; voering en binnenzool: synthetische materialen; buitenzool: rubber. Zoolmateriaal Rubber. Lage stamhoogte. Buitenmateriaal van mesh. Land van herkomst Vietnam.',
      about:
        'Over dit item — Nike Free-demping voor natuurlijke flexibiliteit. Lichtgewicht tussenzool van foam voor zachte demping. Lichtgewicht ontwerp, ideaal voor hardlopen en dagelijks gebruik.',
      addToCart: 'Voeg toe aan winkelwagen',
      removeFromFavorites: 'Verwijderen uit favorieten',
    },
    compte: {
      title: 'Mijn account',
      member: '· Lid Skoleom',
      menu: {
        orders: {
          label: 'Bestellingen',
          desc: 'Volgen en geschiedenis',
        },
        addresses: {
          label: 'Adressen',
          desc: 'Levering en facturatie',
        },
        details: {
          label: 'Accountgegevens',
          desc: 'Naam, e-mail, telefoon',
        },
        security: {
          label: 'Beveiliging',
          desc: 'Wachtwoord',
        },
      },
      logout: 'Verbreek de verbinding',
    },
    magazine: {
      title: 'Magazine',
      sesport: 'SeSport',
      gaming: 'Gaming',
      sesportArticles: {
        item1: {
          title: 'Mercato: Deze Ligue 1-coach die...',
          date: '12 mei 2026',
        },
        item2: {
          title: 'Ligue 1: voor PSG de titel van veerkracht na...',
          date: '11 mei 2026',
        },
        item3: {
          title: 'Champions League: de strijd der titanen in de halve finale...',
          date: '10 mei 2026',
        },
      },
      gamingArticles: {
        item1: {
          title: 'Valorant Champions 2026: Een terugblik op...',
          date: '12 mei 2026',
        },
        item2: {
          title: 'Xbox Game Pass: de nieuwste games voor januari...',
          date: '11 mei 2026',
        },
        item3: {
          title: 'PS5 Pro: alles wat we weten over de volgende...',
          date: '10 mei 2026',
        },
      },
    },
    musique: {
      title: 'Skoleom Music',
      recognizing: 'Erkenning in uitvoering',
      listening: 'Je luistert:',
      song: 'WHERE SHE GOES — Bad Bunny',
    },
    travel: {
      title: 'Skoleom Travel',
      destination: 'Bestemming :',
      flights: 'Vlucht boeken',
      hotels: 'Hotelreservering',
      cities: {
        tokyo: 'Tokyo',
        santorin: 'Santorin',
        newYork: 'New York',
        paris: 'Paris',
      },
      vols: {
        af: {
          name: 'Air France',
          price: '896 €',
        },
        jl: {
          name: 'Japan Airlines',
          price: '920 €',
        },
        ek: {
          name: 'Emirates',
          price: '995 €',
        },
        qr: {
          name: 'Qatar Airw.',
          price: '847 €',
        },
      },
      hotelsList: {
        imperial: {
          name: 'Imperial Med',
          price: '132 €/nacht',
        },
        shine: {
          name: 'Shine',
          price: '205 €/nacht',
        },
        greco: {
          name: 'El Greco Resort',
          price: '203 €/nacht',
        },
        karterado: {
          name: 'Hotel Karterado',
          price: '247 €/nacht',
        },
      },
    },
    banner: {
      watchNow: 'Kijk nu',
    },
  },
};

const sesyncPt: SesyncTranslations = {
  page: {
    hero: {
      pill: 'Disponível em todos os 6 principais navegadores · Gratuito',
      line1: 'Cada vídeo',
      line2Before: 'é um',
      line2Highlight: 'comprar',
      line3: 'ao vivo.',
      description:
        'SeSync é a extensão que transforma qualquer vídeo – no Netflix, YouTube, Prime Video, Disney+ e mais de 2.000 plataformas – em uma experiência de compra. Toque na tela. Comprar. Sem redirecionamento.',
      installCta: 'Instale o SeSync',
      howCta: 'Veja como funciona',
    },
    stats: {
      ott: {
        n: '2.000+',
        l: 'Plataformas OTT',
      },
      sites: {
        n: '1 Md+',
        l: 'Sites cobertos',
      },
      browsers: {
        n: '6',
        l: 'Navegadores',
      },
      noRedirect: {
        n: '0',
        l: 'Redirecionar',
      },
    },
    marquee: {
      ariaLabel: 'Plataformas OTT habilitadas para SeSync',
      moreOtt: '+2000 OTT',
    },
    how: {
      eyebrow: 'O princípio',
      titleBefore: 'Três ',
      titleHighlight: 'gestos',
      titleAfter: '. Uma experiência única.',
      description:
        'Não é necessário aprendizado. O SeSync é ativado assim que o vídeo começa, identifica objetos em tempo real e oferece a compra diretamente no player.',
    },
    steps: {
      step1: {
        title: 'Instale o SeSync gratuitamente.',
        text: 'Baixe a extensão na loja oficial do seu navegador. Um clique, 30 segundos. O ícone SeSync aparece imediatamente na sua barra de ferramentas.',
      },
      step2: {
        title: 'Reproduza qualquer vídeo.',
        text: 'Netflix, YouTube, Prime Video, Twitch ou qualquer plataforma OTT. O SeSync acorda automaticamente e identifica os produtos visíveis na tela, sem desacelerar o player.',
      },
      step3: {
        title: 'Tocar. Comprar. Isso é tudo.',
        text: 'Passe o dedo ou o mouse sobre um objeto. A ficha do produto é exibida. Adicione ao carrinho com um clique. O vídeo continua sendo reproduzido em segundo plano. Sem redirecionamentos.',
      },
    },
    mockup: {
      eyebrow: 'Magic Touch',
      titleBefore: 'Isto é o que ',
      titleHighlight: 'acontece',
      titleAfter: '.',
      description:
        'O usuário passa o dedo no tênis. SeSync identifica o Gulf Runner Sky Edition. Preços, tamanhos, entrega, adicionar ao carrinho – está tudo lá, sem sair da Netflix.',
    },
    universes: {
      eyebrow: 'Os 8 universos',
      titleBefore: 'Uma ',
      titleHighlight: 'barra',
      titleAfter: '. Oito possibilidades.',
      description:
        'À direita de cada vídeo, uma barra de ícones abre um universo dedicado – produtos, música, viagens, jogos, assistente de IA. Tudo contextual, tudo sincronizado.',
      music: {
        title: 'Música',
        desc: 'Identifique a trilha sonora e abra o Spotify, Apple Music ou Deezer com um clique.',
      },
      travel: {
        title: 'Jornada',
        desc: 'Reserve voo e hotel a partir do destino exibido na tela.',
      },
      sport: {
        title: 'Desporto',
        desc: 'Tênis, camisetas, acessórios esportivos — os equipamentos vistos no vídeo.',
      },
      gaming: {
        title: 'Gaming',
        desc: 'Minijogos, cashback, códigos promocionais para desbloquear enquanto joga.',
      },
      fashion: {
        title: 'Moda',
        desc: 'Roupas detectadas por IA visual – correspondência exata ou similar.',
      },
      magazine: {
        title: 'Magazine',
        desc: 'Artigos relacionados a conteúdo, lookbooks e histórias de marcas.',
      },
      cart: {
        title: 'Cesta universal',
        desc: 'Uma única cesta para todos os seus vídeos, plataformas e guias.',
      },
      gpt: {
        title: 'Skoleom GPT',
        desc: 'Seu assistente de compras com IA – faça qualquer pergunta.',
      },
    },
    why: {
      eyebrow: 'Por que SeSync',
      titleBefore: 'Uma ',
      titleHighlight: 'tecnologia',
      titleAfter: 'que não existe em nenhum outro lugar.',
    },
    pillars: {
      patent: {
        title: 'Patenteado em todo o mundo.',
        text: 'Nossa tecnologia de identificação de objetos em tempo real em um stream de vídeo é protegida por três patentes internacionais (FR2201013A, EP4473738, WO2023148295A1). Isto é o que torna o SeSync imbatível.',
      },
      performance: {
        title: 'Impacto zero em seus vídeos.',
        text: 'SeSync usa aceleração de GPU e funciona em um quadro isolado. Seus vídeos 4K e HDR nunca ficam lentos. A detecção é instantânea, invisível, natural.',
      },
      privacy: {
        title: 'GDPR em primeiro lugar. Soberania Europeia.',
        text: 'Os seus dados permanecem na Skoleom Cloud, a infraestrutura soberana na Europa. Sem revenda a terceiros, pagamentos criptografados, compatível com PCI-DSS nível 1.',
      },
      free: {
        title: 'Livre. Para sempre.',
        text: 'SeSync é e continuará sendo gratuito. Sem assinatura, sem publicidade, sem coleta de dados revendidos. Nosso modelo: comissão sobre vendas de marcas parceiras.',
      },
    },
    browsers: {
      eyebrow: 'Compatibilidade',
      titleBefore: 'Disponível',
      titleHighlight: 'em todos os lugares',
      titleAfter: '.',
      description:
        'SeSync é compatível com os 6 principais navegadores que cobrem mais de 99% do mercado global. Uma instalação, em qualquer lugar.',
      available: 'Disponível',
      soon: 'Em breve',
    },
    faq: {
      eyebrow: 'Perguntas',
      titleBefore: 'As ',
      titleHighlight: 'respostas',
      titleAfter: 'isso importa.',
      free: {
        q: 'O SeSync é realmente gratuito?',
        a: 'Sim, grátis para sempre, sem assinaturas ocultas. Nossa receita é proveniente apenas de comissões sobre vendas realizadas via extensão, pagas pelas marcas parceiras.',
      },
      security: {
        q: 'Meus dados estão seguros?',
        a: 'SeSync é o primeiro GDPR. Seus dados são hospedados na Europa no Skoleom Cloud, nunca revendidos a terceiros. Os pagamentos são criptografados e compatíveis com PCI-DSS Nível 1.',
      },
      platforms: {
        q: 'Em quais plataformas o SeSync funciona?',
        a: 'O SeSync detecta automaticamente mais de 2.000 plataformas OTT (Netflix, YouTube, Prime Video, Disney+, HBO, Twitch, etc.) e mais de um bilhão de sites parceiros.',
      },
      performance: {
        q: 'Isso retarda meus vídeos?',
        a: 'O SeSync foi projetado para ter impacto zero no desempenho da reprodução, mesmo em 4K HDR. Nossa detecção usa aceleração de GPU em um quadro isolado.',
      },
      account: {
        q: 'Você precisa criar uma conta?',
        a: 'Para descobrir as cápsulas: não. Para comprar, salve favoritos ou use a cesta universal: sim, basta uma conta Skoleom gratuita.',
      },
      mobile: {
        q: 'O SeSync funciona em dispositivos móveis?',
        a: 'Para o navegador, a extensão funciona no desktop. Para dispositivos móveis, o aplicativo Skoleom para iOS e Android oferece a mesma experiência, em segundo plano.',
      },
    },
    cta: {
      titleBefore: 'Olhar. Tocar.',
      titleHighlight: 'Comprar.',
      description:
        'Junte-se à revolução da mídia de varejo. Instale o SeSync gratuitamente e transforme cada vídeo em uma loja ao vivo.',
      install: 'Instale SeSync – Grátis',
    },
  },
  mockup: {
    sidebar: {
      params: 'Configurações',
      favoris: 'Favoritos',
      panier: 'Cesta',
      compte: 'Conta',
      magazine: 'Magazine',
      musique: 'Música',
      travel: 'Jornada',
    },
    episode: 'Drive to Survive · S6E2',
    capsule: 'Cápsula',
  },
  capsule: {
    brand: 'Nike',
    videoTitle: 'Nike Free Run Rouge | Unboxing & Review',
    productName: 'Nike Free Run Rouge',
    price: '89.99€',
    freeShipping: 'Entrega GRATUITA',
    description:
      'Nike Free Run Red — Desfrute de amortecimento natural e flexibilidade máxima com este tênis de corrida leve. Malha respirável, sola de borracha durável.',
    buy: 'Comprar',
    added: '✓ Adicionado',
    tabInfos: 'Info',
    tabSimilaires: 'Semelhante',
    infoCards: {
      card1: 'Nike Free Run — Coleção Primavera 2026',
      card2: 'Nike Free Run Rouge | Unboxing & Review',
    },
    similaires: {
      item1: {
        name: 'Nike Air Max 270',
        price: '129€',
      },
      item2: {
        name: 'Adidas Ultra Boost 22',
        price: '159€',
      },
      item3: {
        name: 'Puma RS-X Street',
        price: '99€',
      },
    },
  },
  sidepages: {
    bottomNav: {
      favoris: 'Favoritos',
      panier: 'Cesta',
      compte: 'Conta',
      magazine: 'Magazine',
    },
    params: {
      title: 'Configurações',
      language: 'Linguagem',
      languageHint: 'Escolha o idioma da extensão',
      english: '🇬🇧 English',
      french: '🇫🇷 Français',
      display: 'Mostrar',
      displayOptions: {
        button: {
          label: 'Button',
          desc: 'Exibição da cápsula em forma de botão',
        },
        timeline: {
          label: 'Timeline',
          desc: 'Exibindo cápsulas na linha do tempo',
        },
        magictouch: {
          label: 'Magic Touch',
          desc: 'Adicionando produtos diretamente ao foco',
        },
      },
      buttonShape: 'Formato de botão',
      pillLabel: '· Capsule',
      pillDesc: 'Botão com texto',
      logoDesc: 'Ícone redondo discreto',
    },
    favoris: {
      title: 'Favoritos',
      add: 'Adicionar',
      items: {
        item1: {
          name: 'Air Max Plus PSG Shoes',
          price: '312.00€',
        },
        item2: {
          name: "Men's Michael Jordan Black Chicago Bulls",
          price: '360€',
        },
        item3: {
          name: 'The 25X Sneakers - BB2 For Man',
          price: '310€',
        },
      },
    },
    panier: {
      title: 'Minha cesta',
      options: 'Options',
      coupon: 'Cupom de desconto',
      promoPlaceholder: 'CÓDIGO PROMOCIONAL',
      apply: 'Aplicar',
      subtotal: 'Subtotal',
      discount: 'Redução',
      shipping: 'Envio',
      shippingNote: 'Calculado na próxima etapa',
      total: 'Total',
      vatNote: 'IVA incluído · Entrega calculada no passo seguinte',
      validate: 'Validar meu carrinho',
      amazon: 'Encomende na Amazon',
      items: {
        item1: {
          name: 'The 25X Pants For Man',
          price: '105.00 €',
        },
        item2: {
          name: 'The 25X T-shirt For Man',
          price: '54.00 €',
        },
        item3: {
          name: 'The 25X Pants For Man',
          price: '150.00 €',
        },
      },
      subtotalValue: '473.33 €',
      discountValue: '-56.80 €',
      totalValue: '511.20 €',
    },
    produit: {
      title: 'Produto',
      name: 'Nike Free Run Rouge',
      price: '89.99€',
      color: 'Vermelho',
      size: '42',
      material:
        'Composição do material Parte superior: malha respirável; forro e palmilha: materiais sintéticos; sola: borracha. Material único Borracha. Altura do caule baixa. Material externo em malha. País de origem Vietnã.',
      about:
        'Sobre este item – amortecimento Nike Free para flexibilidade natural. Entressola de espuma leve para amortecimento macio. Design leve ideal para corrida e uso diário.',
      addToCart: 'Adicionar ao carrinho',
      removeFromFavorites: 'Remover dos favoritos',
    },
    compte: {
      title: 'Minha conta',
      member: '· Membro Skoleom',
      menu: {
        orders: {
          label: 'Pedidos',
          desc: 'Rastreamento e histórico',
        },
        addresses: {
          label: 'Endereços',
          desc: 'Entrega e faturamento',
        },
        details: {
          label: 'Detalhes da conta',
          desc: 'Nome, e-mail, telefone',
        },
        security: {
          label: 'Segurança',
          desc: 'Senha',
        },
      },
      logout: 'Desconectar',
    },
    magazine: {
      title: 'Magazine',
      sesport: 'SeSport',
      gaming: 'Gaming',
      sesportArticles: {
        item1: {
          title: 'Mercato: Este treinador da Ligue 1 que poderia...',
          date: '12 de maio de 2026',
        },
        item2: {
          title: 'Ligue 1: para o PSG, o título de resiliência após...',
          date: '11 de maio de 2026',
        },
        item3: {
          title: 'Liga dos Campeões: o confronto dos titãs na semifinal...',
          date: '10 de maio de 2026',
        },
      },
      gamingArticles: {
        item1: {
          title: 'Valorant Champions 2026: Uma retrospectiva de...',
          date: '12 de maio de 2026',
        },
        item2: {
          title: 'Xbox Game Pass: os jogos mais recentes de janeiro...',
          date: '11 de maio de 2026',
        },
        item3: {
          title: 'PS5 Pro: tudo o que sabemos sobre o próximo...',
          date: '10 de maio de 2026',
        },
      },
    },
    musique: {
      title: 'Skoleom Music',
      recognizing: 'Reconhecimento em andamento',
      listening: 'Você está ouvindo:',
      song: 'WHERE SHE GOES — Bad Bunny',
    },
    travel: {
      title: 'Skoleom Travel',
      destination: 'Destino:',
      flights: 'Reserva de voo',
      hotels: 'Reserva de hotel',
      cities: {
        tokyo: 'Tokyo',
        santorin: 'Santorin',
        newYork: 'New York',
        paris: 'Paris',
      },
      vols: {
        af: {
          name: 'Air France',
          price: '896 €',
        },
        jl: {
          name: 'Japan Airlines',
          price: '920 €',
        },
        ek: {
          name: 'Emirates',
          price: '995 €',
        },
        qr: {
          name: 'Qatar Airw.',
          price: '847 €',
        },
      },
      hotelsList: {
        imperial: {
          name: 'Imperial Med',
          price: '132€/noite',
        },
        shine: {
          name: 'Shine',
          price: '205€/noite',
        },
        greco: {
          name: 'El Greco Resort',
          price: '203€/noite',
        },
        karterado: {
          name: 'Hotel Karterado',
          price: '247€/noite',
        },
      },
    },
    banner: {
      watchNow: 'Assista agora',
    },
  },
};

const sesyncAr: SesyncTranslations = {
  page: {
    hero: {
      pill: 'متوفر على جميع المتصفحات الستة الرئيسية · مجاناً',
      line1: 'كل فيديو',
      line2Before: 'هو ',
      line2Highlight: 'متجر تفاعلي مباشر',
      line3: '.',
      description:
        'SeSync هي إضافة المتصفح التي تحول أي فيديو—على Netflix، وYouTube، وPrime Video، وDisney+، وأكثر من 2000 منصة أخرى—إلى تجربة تسوق فورية. المس الشاشة. اشترِ. دون أي إعادة توجيه.',
      installCta: 'ثبّت SeSync',
      howCta: 'اكتشف طريقة العمل',
    },
    stats: {
      ott: { n: '2,000+', l: 'منصات OTT' },
      sites: { n: '1 مليار+', l: 'موقع مغطى' },
      browsers: { n: '6', l: 'متصفحات رئيسية' },
      noRedirect: { n: '0', l: 'روابط إعادة توجيه' },
    },
    marquee: {
      ariaLabel: 'منصات OTT المتوافقة مع SeSync',
      moreOtt: '+2000 OTT',
    },
    how: {
      eyebrow: 'الفكرة',
      titleBefore: 'ثلاث ',
      titleHighlight: 'حركات بسيطة',
      titleAfter: '. تجربة مبتكرة بالكامل.',
      description:
        'سهل الاستخدام للغاية دون أي تعقيد. يتم تفعيل SeSync تلقائياً بمجرد بدء تشغيل الفيديو، ليتعرف على المنتجات في الوقت الفعلي ويسمح لك بالتسوق مباشرة داخل مشغل الفيديو.',
    },
    steps: {
      step1: {
        title: 'ثبّت SeSync مجاناً',
        text: 'حمّل الإضافة من المتجر الرسمي لمتصفحك بنقرة واحدة. لا يستغرق الأمر سوى 30 ثانية، وستظهر أيقونة SeSync فوراً في شريط الأدوات الخاص بك.',
      },
      step2: {
        title: 'شغّل أي فيديو',
        text: 'سواء كنت تشاهد Netflix، أو YouTube، أو Prime Video، أو Twitch، يتم تفعيل SeSync تلقائياً للتعرف على المنتجات المعروضة على الشاشة دون أي تأثير على سرعة التشغيل.',
      },
      step3: {
        title: 'المس، اشترِ، بكل بساطة.',
        text: 'مرر مؤشر الماوس أو إصبعك فوق أي منتج لتظهر لك بطاقة المنتج فوراً. أضفه إلى سلة التسوق بنقرة واحدة بينما يستمر تشغيل الفيديو بسلاسة في الخلفية دون أي إعادة توجيه.',
      },
    },
    mockup: {
      eyebrow: 'Magic Touch',
      titleBefore: 'شاهد ما ',
      titleHighlight: 'سيحدث',
      titleAfter: '.',
      description:
        'مرر المؤشر أو المس الحذاء الرياضي، وسيتعرف SeSync فوراً على طراز Gulf Runner Sky Edition. تحقق من الأسعار، المقاسات، خيارات الشحن، وأضف المنتج إلى السلة—كل ذلك دون مغادرة Netflix.',
    },
    universes: {
      eyebrow: 'العوالم الثمانية',
      titleBefore: 'شريط أدوات ',
      titleHighlight: 'واحد',

      titleAfter: '. ثمانية عوالم لا حصر لها.',
      description:
        'يظهر شريط أدوات أنيق على جانب الفيديو يمنحك الوصول إلى عوالم مخصصة—التسوق، الموسيقى، السفر، الألعاب، ومساعد الذكاء الاصطناعي. كل شيء متزامن ومتوافق تماماً مع محتوى الفيديو.',
      music: {
        title: 'الموسيقى',
        desc: 'تعرف فوراً على أي موسيقى تصويرية وافتحها مباشرة على Spotify أو Apple Music أو Deezer بنقرة واحدة.',
      },
      travel: {
        title: 'السفر',
        desc: 'احجز تذاكر الطيران والفنادق للوجهة المعروضة على الشاشة مباشرة.',
      },
      sport: {
        title: 'الرياضة',
        desc: 'اعثر على الأحذية الرياضية، القمصان، والمعدات الرياضية المعروضة في الفيديو بدقة.',
      },
      gaming: {
        title: 'الألعاب',
        desc: 'استمتع بألعاب مصغرة، واحصل على كاش باك حصري وأكواد خصم أثناء المشاهدة.',
      },
      fashion: {
        title: 'الأزياء',
        desc: 'تقنية البحث البصري بالذكاء الاصطناعي تتعرف على الملابس لتقدم لك قطعاً مطابقة تماماً أو مشابهة لها.',
      },
      magazine: {
        title: 'المجلة',
        desc: 'استكشف مقالات منسقة، كتالوجات أزياء، وقصص العلامات التجارية وراء المحتوى.',
      },
      cart: {
        title: 'السلة الموحدة',
        desc: 'سلة تسوق واحدة تجمع مشترياتك من جميع مقاطع الفيديو، منصات البث، وعلامات التبويب.',
      },
      gpt: {
        title: 'Skoleom GPT',
        desc: 'مساعدك الشخصي للتسوق بالذكاء الاصطناعي—اطرح أسئلتك واحصل على إجابات فورية.',
      },
    },
    why: {
      eyebrow: 'لماذا SeSync',
      titleBefore: 'تقنية ثورية ',
      titleHighlight: 'فريدة',
      titleAfter: ' لا مثيل لها.',
    },
    pillars: {
      patent: {
        title: 'براءات اختراع عالمية',
        text: 'تقنيتنا المبتكرة للتعرف على المنتجات في الوقت الفعلي داخل مقاطع الفيديو محمية بثلاث براءات اختراع دولية (FR2201013A, EP4473738, WO2023148295A1)، مما يجعل SeSync فريداً من نوعه.',
      },
      performance: {
        title: 'دون أي تأثير على التشغيل',
        text: 'بفضل تقنية تسريع معالجة الرسوميات (GPU) والتشغيل في بيئة معزولة، لا يتسبب SeSync بأي بطء في مقاطع الفيديو بدقة 4K أو HDR. تجربة خفيفة، فورية، وانسيابية.',
      },
      privacy: {
        title: 'خصوصية وأمان تام (GDPR)',
        text: 'تتم استضافة بياناتك بأمان في أوروبا على سحابة Skoleom Cloud السيادية. نحن لا نبيع بياناتك لأي طرف ثالث، وجميع المدفوعات مشفرة بالكامل ومتوافقة مع معايير PCI-DSS من المستوى الأول.',
      },
      free: {
        title: 'مجاني 100% للأبد',
        text: 'SeSync مجاني وسيبقى كذلك دائماً. لا اشتراكات، لا إعلانات مزعجة، ولا جمع للبيانات لبيعها. نموذج عملنا يعتمد على عمولة بسيطة ندفعها العلامات التجارية الشريكة عند شرائك للمنتجات.',
      },
    },
    browsers: {
      eyebrow: 'التوافق',
      titleBefore: 'متوفر ',
      titleHighlight: 'على جميع المتصفحات',
      titleAfter: '.',
      description:
        'يتوافق SeSync بالكامل مع المتصفحات الستة الرئيسية، مما يغطي أكثر من 99% من مستخدمي الإنترنت حول العالم. ثبته مرة واحدة واستخدمه في كل مكان.',
      available: 'متوفر الآن',
      soon: 'قريباً',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      titleBefore: 'الإجابات ',
      titleHighlight: 'التي تبحث عنها',
      titleAfter: '.',
      free: {
        q: 'هل SeSync مجاني حقاً؟',
        a: 'نعم، SeSync مجاني بالكامل وللأبد دون أي رسوم خفية أو اشتراكات. نحن نحصل فقط على عمولة تدفعها العلامات التجارية الشريكة لنا عندما تقوم إتمامك أي عملية شراء.',
      },
      security: {
        q: 'هل بياناتي الشخصية آمنة؟',
        a: 'بالتأكيد. تم تصميم SeSync مع الالتزام التام بمعايير حماية البيانات الأوروبية (GDPR). بياناتك مستضافة بأمان في أوروبا على Skoleom Cloud ولا يتم بيعها مطلقاً لأطراف ثالثة. كما أن جميع المعاملات مشفرة بالكامل ومتوافقة مع معيار PCI-DSS من المستوى الأول.',
      },
      platforms: {
        q: 'ما هي منصات البث المدعومة؟',
        a: 'يعمل SeSync تلقائياً على أكثر من 2,000 منصة بث (OTT)—بما في ذلك Netflix وYouTube وPrime Video وDisney+ وHBO وTwitch—بالإضافة إلى أكثر من مليار موقع إلكتروني شريك.',
      },
      performance: {
        q: 'هل يتسبب في إبطاء تشغيل الفيديو؟',
        a: 'على الإطلاق. تم تطوير SeSync هندسياً ليكون له تأثير صفري على أداء البث، حتى عند المشاهدة بدقة 4K HDR. تتم عملية التعرف على المنتجات في إطار معزول باستخدام تسريع الرسوميات (GPU).',
      },
      account: {
        q: 'هل يجب عليّ إنشاء حساب؟',
        a: 'لا تحتاج إلى حساب لتصفح المنتجات والكبسولات. ولكن لإتمام عمليات الشراء، حفظ المنتجات في المفضلة، أو استخدام السلة الموحدة، ستحتاج إلى إنشاء حساب Skoleom مجاني.',
      },
      mobile: {
        q: 'هل يعمل SeSync على الهواتف المحمولة؟',
        a: 'إضافة المتصفح مصممة لأجهزة الكمبيوتر المكتبية. أما بالنسبة للهواتف المحمولة، فإن تطبيق Skoleom لنظامي iOS وAndroid يقدم لك نفس التجربة التفاعلية الرائعة.',
      },
    },
    cta: {
      titleBefore: 'شاهد. انقر. ',
      titleHighlight: 'تسوق.',
      description:
        'انضم إلى ثورة الـ Retail Media. ثبّت إضافة SeSync مجاناً اليوم وحوّل أي فيديو إلى متجر تفاعلي خاص بك.',
      install: 'ثبّت SeSync — مجاناً بالكامل',
    },
  },
  mockup: {
    sidebar: {
      params: 'الإعدادات',
      favoris: 'المفضلة',
      panier: 'السلة',
      compte: 'الحساب',
      magazine: 'المجلة',
      musique: 'الموسيقى',
      travel: 'السفر',
    },
    episode: 'Drive to Survive · الموسم 6 الحلقة 2',
    capsule: 'كبسولة',
  },
  capsule: {
    brand: 'Nike',
    videoTitle: 'Nike Free Run Red | Unboxing & Review',
    productName: 'Nike Free Run Red',
    price: '89.99 €',
    freeShipping: 'شحن مجاني',
    description:
      'Nike Free Run Red — استمتع ببطانة طبيعية وأقصى قدر من المرونة مع حذاء الجري خفيف الوزن هذا. يتميز بنسيج شبكي مسامي ونعل مطاطي متين.',
    buy: 'اشترِ الآن',
    added: '✓ تم الإضافة',
    tabInfos: 'التفاصيل',
    tabSimilaires: 'منتجات مشابهة',
    infoCards: {
      card1: 'Nike Free Run — مجموعة ربيع 2026',
      card2: 'Nike Free Run Red | Unboxing & Review',
    },
    similaires: {
      item1: { name: 'Nike Air Max 270', price: '129 €' },
      item2: { name: 'Adidas Ultra Boost 22', price: '159 €' },
      item3: { name: 'Puma RS-X Street', price: '99 €' },
    },
  },
  sidepages: {
    bottomNav: {
      favoris: 'المفضلة',
      panier: 'السلة',
      compte: 'الحساب',
      magazine: 'المجلة',
    },
    params: {
      title: 'الإعدادات',
      language: 'اللغة',
      languageHint: 'اختر لغة الإضافة المفضلة لديك',
      english: '🇬🇧 English',
      french: '🇫🇷 Français',
      display: 'وضع العرض',
      displayOptions: {
        button: { label: 'زر عائم', desc: 'عرض الكبسولة التفاعلية كزر عائم' },
        timeline: {
          label: 'علامات الخط الزمني',
          desc: 'إظهار الكبسولات التفاعلية على شريط تقدم الفيديو',
        },
        magictouch: {
          label: 'Magic Touch',
          desc: 'إظهار تفاصيل المنتج فوراً عند تمرير مؤشر الماوس',
        },
      },
      buttonShape: 'نمط الزر',
      pillLabel: '· كبسولة',
      pillDesc: 'زر مع تسمية نصية',
      logoDesc: 'أيقونة دائرية سرية',
    },
    favoris: {
      title: 'المفضلة',
      add: 'إضافة إلى المفضلة',
      items: {
        item1: { name: 'حذاء Air Max Plus PSG', price: '312.00 €' },
        item2: { name: 'قميص مايكل جوردان شيكاغو بولز للرجال', price: '360 €' },
        item3: { name: 'حذاء الرياضي The 25X - BB2 للرجال', price: '310 €' },
      },
    },
    panier: {
      title: 'سلة التسوق',
      options: 'الخيارات',
      coupon: 'كود الخصم',
      promoPlaceholder: 'أدخل الكود',
      apply: 'تطبيق',
      subtotal: 'المجموع الفرعي',
      discount: 'الخصم',
      shipping: 'الشحن',
      shippingNote: 'يُحتسب في الخطوة التالية',
      total: 'الإجمالي',
      vatNote: 'شامل ضريبة القيمة المضافة · يُحتسب الشحن في الخطوة التالية',
      validate: 'المتابعة لإتمام الشراء',
      amazon: 'الشراء عبر أمازون',
      items: {
        item1: { name: 'بنطال The 25X للرجال', price: '105.00 €' },
        item2: { name: 'تيشيرت The 25X للرجال', price: '54.00 €' },
        item3: { name: 'بنطال The 25X للرجال', price: '150.00 €' },
      },
      subtotalValue: '473.33 €',
      discountValue: '-56.80 €',
      totalValue: '511.20 €',
    },
    produit: {
      title: 'تفاصيل المنتج',
      name: 'Nike Free Run Red',
      price: '89.99 €',
      color: 'الأحمر',
      size: '42',
      material:
        'الخامات والعناية — الجزء العلوي: نسيج شبكي مسامي؛ البطانة والنعل الداخلي: خامات صناعية ممتازة؛ النعل الخارجي: مطاط متين. تصميم منخفض الرقبة. بلد المنشأ: فيتنام.',
      about:
        'عن المنتج — توفر تقنية Nike Free مرونة طبيعية تحاكي حركة القدم الحافية. نعل أوسط من الفوم خفيف الوزن يوفر توسيداً ناعماً. تصميم أنيق وخفيف الوزن مثالي للجري والاستخدام اليومي.',
      addToCart: 'إضافة إلى السلة',
      removeFromFavorites: 'إزالة من المفضلة',
    },
    compte: {
      title: 'حسابي',
      member: '· عضو Skoleom',
      menu: {
        orders: { label: 'الطلبات', desc: 'تتبع الطلبات والسجل' },
        addresses: { label: 'العناوين', desc: 'إدارة عناوين الشحن والفواتير' },
        details: { label: 'تفاصيل الحساب', desc: 'تحديث الاسم، البريد الإلكتروني والهاتف' },
        security: { label: 'الأمان', desc: 'تغيير كلمة المرور والإعدادات' },
      },
      logout: 'تسجيل الخروج',
    },
    magazine: {
      title: 'المجلة',
      sesport: 'SeSport',
      gaming: 'الألعاب',
      sesportArticles: {
        item1: {
          title: 'سوق الانتقالات: مدرب الدوري الفرنسي هذا الذي قد...',
          date: '12 مايو 2026',
        },
        item2: {
          title: 'الدوري الفرنسي: لباريس سان جيرمان، لقب الصمود بعد...',
          date: '11 مايو 2026',
        },
        item3: {
          title: 'دوري أبطال أوروبا: صراع العمالقة في نصف النهائي...',
          date: '10 مايو 2026',
        },
      },
      gamingArticles: {
        item1: { title: 'بطولة Valorant Champions 2026: نظرة إلى الوراء...', date: '12 مايو 2026' },
        item2: { title: 'Xbox Game Pass: أحدث الألعاب المضافة في يناير...', date: '11 مايو 2026' },
        item3: { title: 'PS5 Pro: كل ما نعرفه عن الجهاز القادم...', date: '10 مايو 2026' },
      },
    },
    musique: {
      title: 'Skoleom Music',
      recognizing: 'جاري التعرف على الأغنية...',
      listening: 'يتم تشغيلها الآن:',
      song: 'WHERE SHE GOES — Bad Bunny',
    },
    travel: {
      title: 'Skoleom Travel',
      destination: 'الوجهة:',
      flights: 'حجز رحلات الطيران',
      hotels: 'حجز الفنادق',
      cities: {
        tokyo: 'طوكيو',
        santorin: 'سانتوريني',
        newYork: 'نيويورك',
        paris: 'باريس',
      },
      vols: {
        af: { name: 'Air France', price: '896 €' },
        jl: { name: 'Japan Airlines', price: '920 €' },
        ek: { name: 'Emirates', price: '995 €' },
        qr: { name: 'Qatar Airways', price: '847 €' },
      },
      hotelsList: {
        imperial: { name: 'Imperial Med', price: '132 €/ليلة' },
        shine: { name: 'Shine', price: '205 €/ليلة' },
        greco: { name: 'El Greco Resort', price: '203 €/ليلة' },
        karterado: { name: 'Hotel Karterado', price: '247 €/ليلة' },
      },
    },
    banner: {
      watchNow: 'شاهد الآن',
    },
  },
};

const sesyncHi: SesyncTranslations = {
  page: {
    hero: {
      pill: 'सभी 6 प्रमुख ब्राउज़रों पर उपलब्ध · निःशुल्क',
      line1: 'प्रत्येक वीडियो',
      line2Before: 'एक है',
      line2Highlight: 'दुकान',
      line3: 'रहना।',
      description:
        'SeSync वह एक्सटेंशन है जो नेटफ्लिक्स, यूट्यूब, प्राइम वीडियो, डिज़्नी+ और 2,000+ प्लेटफ़ॉर्म पर किसी भी वीडियो को शॉपिंग अनुभव में बदल देता है। स्क्रीन स्पर्श करें। खरीदना। पुनर्निर्देशन के बिना.',
      installCta: 'SeSync इंस्टॉल करें',
      howCta: 'देखो यह कैसे काम करता है',
    },
    stats: {
      ott: {
        n: '2,000+',
        l: 'ओटीटी प्लेटफॉर्म',
      },
      sites: {
        n: '1 बिलियन+',
        l: 'कवर की गई साइटें',
      },
      browsers: {
        n: '6',
        l: 'ब्राउज़र्स',
      },
      noRedirect: {
        n: '0',
        l: 'पुनर्निर्देशन',
      },
    },
    marquee: {
      ariaLabel: 'SeSync-सक्षम ओटीटी प्लेटफॉर्म',
      moreOtt: '+2000 OTT',
    },
    how: {
      eyebrow: 'सिद्धांत',
      titleBefore: 'तीन ',
      titleHighlight: 'इशारों',
      titleAfter: '. एक अनोखा अनुभव.',
      description:
        'कोई सीखने की आवश्यकता नहीं है. वीडियो शुरू होते ही SeSync सक्रिय हो जाता है, वास्तविक समय में वस्तुओं की पहचान करता है और सीधे प्लेयर के अंदर खरीदारी की पेशकश करता है।',
    },
    steps: {
      step1: {
        title: 'SeSync निःशुल्क इंस्टॉल करें.',
        text: 'अपने ब्राउज़र के आधिकारिक स्टोर से एक्सटेंशन डाउनलोड करें। एक क्लिक, 30 सेकंड। SeSync आइकन तुरंत आपके टूलबार में दिखाई देता है।',
      },
      step2: {
        title: 'कोई भी वीडियो चलाएं.',
        text: 'नेटफ्लिक्स, यूट्यूब, प्राइम वीडियो, ट्विच, या कोई ओटीटी प्लेटफॉर्म। SeSync स्वचालित रूप से सक्रिय होता है और प्लेयर को धीमा किए बिना, स्क्रीन पर दिखाई देने वाले उत्पादों की पहचान करता है।',
      },
      step3: {
        title: 'छूना। खरीदना। बस इतना ही।',
        text: 'किसी वस्तु पर अपनी उंगली या माउस स्वाइप करें। उत्पाद पत्रक प्रकट होता है. एक क्लिक में कार्ट में जोड़ें। बैकग्राउंड में वीडियो चलता रहता है. कोई रीडायरेक्ट नहीं.',
      },
    },
    mockup: {
      eyebrow: 'Magic Touch',
      titleBefore: 'यही वह है जो ',
      titleHighlight: 'होता है',
      titleAfter: '.',
      description:
        'उपयोगकर्ता स्नीकर पर अपनी उंगली फिराता है। SeSync गल्फ रनर स्काई संस्करण की पहचान करता है। कीमतें, आकार, डिलीवरी, कार्ट में जोड़ें - नेटफ्लिक्स को छोड़े बिना, यह सब कुछ है।',
    },
    universes: {
      eyebrow: '8 ब्रह्माण्ड',
      titleBefore: 'एक ',
      titleHighlight: 'पट्टी',
      titleAfter: '. आठ संभावनाएँ.',
      description:
        'प्रत्येक वीडियो के दाईं ओर, एक आइकन बार एक समर्पित ब्रह्मांड खोलता है - उत्पाद, संगीत, यात्रा, गेम, एआई सहायक। सभी प्रासंगिक, सभी समकालिक।',
      music: {
        title: 'संगीत',
        desc: 'साउंडट्रैक को पहचानें और एक क्लिक में Spotify, Apple Music या Deezer खोलें।',
      },
      travel: {
        title: 'यात्रा',
        desc: 'स्क्रीन पर प्रदर्शित गंतव्य से उड़ान और होटल बुक करें।',
      },
      sport: {
        title: 'खेल',
        desc: 'स्नीकर्स, जर्सी, खेल का सामान - वीडियो में देखे गए उपकरण।',
      },
      gaming: {
        title: 'Gaming',
        desc: 'खेलते समय अनलॉक करने के लिए मिनी-गेम, कैशबैक, प्रोमो कोड।',
      },
      fashion: {
        title: 'पहनावा',
        desc: 'विज़ुअल एआई द्वारा कपड़ों का पता लगाया गया - सटीक मिलान या समान।',
      },
      magazine: {
        title: 'Magazine',
        desc: 'सामग्री-संबंधित लेख, लुकबुक और ब्रांड कहानियां।',
      },
      cart: {
        title: 'सार्वभौमिक टोकरी',
        desc: 'आपके सभी वीडियो, प्लेटफ़ॉर्म और टैब के लिए एक एकल टोकरी।',
      },
      gpt: {
        title: 'Skoleom GPT',
        desc: 'आपका एआई शॉपिंग सहायक - कोई भी प्रश्न पूछें।',
      },
    },
    why: {
      eyebrow: 'SeSync क्यों',
      titleBefore: 'एक ',
      titleHighlight: 'तकनीकी',
      titleAfter: 'जो अन्यत्र कहीं नहीं है।',
    },
    pillars: {
      patent: {
        title: 'दुनिया भर में पेटेंट कराया गया।',
        text: 'वीडियो स्ट्रीम में हमारी वास्तविक समय वस्तु पहचान तकनीक तीन अंतरराष्ट्रीय पेटेंट (FR2201013A, EP4473738, WO2023148295A1) द्वारा संरक्षित है। यही बात SeSync को अपराजेय बनाती है।',
      },
      performance: {
        title: 'आपके वीडियो पर शून्य प्रभाव.',
        text: 'SeSync GPU त्वरण का उपयोग करता है और एक अलग फ्रेम में काम करता है। आपके 4K और HDR वीडियो कभी धीमे नहीं होते। पता लगाना तात्कालिक, अदृश्य, प्राकृतिक है।',
      },
      privacy: {
        title: 'जीडीपीआर-प्रथम. यूरोपीय संप्रभुता.',
        text: 'आपका डेटा यूरोप के संप्रभु बुनियादी ढांचे स्कोलेओम क्लाउड पर रहता है। तीसरे पक्ष को कोई पुनर्विक्रय नहीं, एन्क्रिप्टेड भुगतान, पीसीआई-डीएसएस स्तर 1 के अनुरूप।',
      },
      free: {
        title: 'मुक्त। हमेशा के लिए।',
        text: 'SeSync मुफ़्त है और मुफ़्त रहेगा। कोई सदस्यता नहीं, कोई विज्ञापन नहीं, पुनर्विक्रय डेटा का कोई संग्रह नहीं। हमारा मॉडल: साझेदार ब्रांडों से बिक्री पर कमीशन।',
      },
    },
    browsers: {
      eyebrow: 'अनुकूलता',
      titleBefore: 'उपलब्ध',
      titleHighlight: 'हर जगह',
      titleAfter: '.',
      description:
        'SeSync 6 प्रमुख ब्राउज़रों के साथ संगत है जो 99% से अधिक वैश्विक बाज़ार को कवर करते हैं। एक स्थापना, हर जगह.',
      available: 'उपलब्ध',
      soon: 'जल्द आ रहा है',
    },
    faq: {
      eyebrow: 'प्रश्न',
      titleBefore: 'ये ',
      titleHighlight: 'जवाब',
      titleAfter: 'वह मामला।',
      free: {
        q: 'क्या SeSync सचमुच मुफ़्त है?',
        a: 'हाँ, हमेशा के लिए मुफ़्त, बिना किसी छिपी हुई सदस्यता के। हमारी आय केवल एक्सटेंशन के माध्यम से की गई बिक्री पर साझेदार ब्रांडों द्वारा भुगतान किए गए कमीशन से आती है।',
      },
      security: {
        q: 'क्या मेरा डेटा सुरक्षित है?',
        a: 'SeSync जीडीपीआर-प्रथम है। आपका डेटा यूरोप में स्कोलेओम क्लाउड पर होस्ट किया जाता है, इसे कभी भी तीसरे पक्ष को दोबारा नहीं बेचा जाता है। भुगतान एन्क्रिप्टेड हैं और PCI-DSS लेवल 1 के अनुरूप हैं।',
      },
      platforms: {
        q: 'SeSync किस प्लेटफ़ॉर्म पर काम करता है?',
        a: 'SeSync स्वचालित रूप से 2,000 से अधिक ओटीटी प्लेटफार्मों (नेटफ्लिक्स, यूट्यूब, प्राइम वीडियो, डिज्नी+, एचबीओ, ट्विच, आदि) और एक अरब से अधिक भागीदार वेबसाइटों का पता लगाता है।',
      },
      performance: {
        q: 'क्या इससे मेरे वीडियो धीमे हो जाते हैं?',
        a: 'नहीं, SeSync को 4K HDR में भी प्लेबैक प्रदर्शन पर शून्य प्रभाव डालने के लिए डिज़ाइन किया गया है। हमारा पता लगाने के लिए एक पृथक फ्रेम में GPU त्वरण का उपयोग किया जाता है।',
      },
      account: {
        q: 'क्या आपको एक खाता बनाने की जरूरत है?',
        a: 'कैप्सूल खोजने के लिए: नहीं. खरीदने, पसंदीदा सहेजने या यूनिवर्सल बास्केट का उपयोग करने के लिए: हाँ, एक निःशुल्क स्कोलेओम खाता पर्याप्त है।',
      },
      mobile: {
        q: 'क्या SeSync मोबाइल पर काम करता है?',
        a: 'ब्राउज़र के लिए, एक्सटेंशन डेस्कटॉप पर काम करता है। मोबाइल के लिए, Skoleom iOS और Android ऐप पृष्ठभूमि में समान अनुभव प्रदान करता है।',
      },
    },
    cta: {
      titleBefore: 'देखना। छूना।',
      titleHighlight: 'खरीदना।',
      description:
        'खुदरा मीडिया क्रांति में शामिल हों. SeSync निःशुल्क इंस्टॉल करें, और प्रत्येक वीडियो को एक लाइव स्टोर बनाएं।',
      install: 'SeSync इंस्टॉल करें - निःशुल्क',
    },
  },
  mockup: {
    sidebar: {
      params: 'सेटिंग्स',
      favoris: 'पसंदीदा',
      panier: 'टोकरी',
      compte: 'खाता',
      magazine: 'Magazine',
      musique: 'संगीत',
      travel: 'यात्रा',
    },
    episode: 'Drive to Survive · S6E2',
    capsule: 'कैप्सूल',
  },
  capsule: {
    brand: 'Nike',
    videoTitle: 'Nike Free Run Rouge | Unboxing & Review',
    productName: 'Nike Free Run Rouge',
    price: '89.99€',
    freeShipping: 'नि: शुल्क डिलिवरी',
    description:
      'नाइके फ्री रन रेड - इस हल्के वजन वाले रनिंग जूते के साथ प्राकृतिक कुशनिंग और अधिकतम लचीलेपन का आनंद लें। सांस लेने योग्य जाल, टिकाऊ रबर सोल।',
    buy: 'खरीदना',
    added: '✓ जोड़ा गया',
    tabInfos: 'जानकारी',
    tabSimilaires: 'समान',
    infoCards: {
      card1: 'नाइके फ्री रन - स्प्रिंग 2026 कलेक्शन',
      card2: 'Nike Free Run Rouge | Unboxing & Review',
    },
    similaires: {
      item1: {
        name: 'Nike Air Max 270',
        price: '129€',
      },
      item2: {
        name: 'Adidas Ultra Boost 22',
        price: '159€',
      },
      item3: {
        name: 'Puma RS-X Street',
        price: '99€',
      },
    },
  },
  sidepages: {
    bottomNav: {
      favoris: 'पसंदीदा',
      panier: 'टोकरी',
      compte: 'खाता',
      magazine: 'Magazine',
    },
    params: {
      title: 'सेटिंग्स',
      language: 'भाषा',
      languageHint: 'एक्सटेंशन भाषा चुनें',
      english: '🇬🇧 English',
      french: '🇫🇷 Français',
      display: 'प्रदर्शन',
      displayOptions: {
        button: {
          label: 'Button',
          desc: 'बटन के रूप में कैप्सूल का प्रदर्शन',
        },
        timeline: {
          label: 'Timeline',
          desc: 'टाइमलाइन पर कैप्सूल प्रदर्शित करना',
        },
        magictouch: {
          label: 'Magic Touch',
          desc: 'उत्पादों को सीधे होवर में जोड़ना',
        },
      },
      buttonShape: 'बटन का आकार',
      pillLabel: '· Capsule',
      pillDesc: 'पाठ के साथ बटन',
      logoDesc: 'विवेकशील गोल चिह्न',
    },
    favoris: {
      title: 'पसंदीदा',
      add: 'जोड़ना',
      items: {
        item1: {
          name: 'Air Max Plus PSG Shoes',
          price: '312.00€',
        },
        item2: {
          name: "Men's Michael Jordan Black Chicago Bulls",
          price: '360€',
        },
        item3: {
          name: 'The 25X Sneakers - BB2 For Man',
          price: '310€',
        },
      },
    },
    panier: {
      title: 'मेरी टोकरी',
      options: 'Options',
      coupon: 'डिस्काउंट कूपन',
      promoPlaceholder: 'प्रचार कोड',
      apply: 'आवेदन करना',
      subtotal: 'उप-योग',
      discount: 'कमी',
      shipping: 'शिपिंग',
      shippingNote: 'अगले चरण में गणना की जाएगी',
      total: 'Total',
      vatNote: 'वैट शामिल · डिलीवरी की गणना अगले चरण में की जाएगी',
      validate: 'मेरी टोकरी सत्यापित करें',
      amazon: 'अमेज़न पर ऑर्डर करें',
      items: {
        item1: {
          name: 'The 25X Pants For Man',
          price: '105.00 €',
        },
        item2: {
          name: 'The 25X T-shirt For Man',
          price: '54.00 €',
        },
        item3: {
          name: 'The 25X Pants For Man',
          price: '150.00 €',
        },
      },
      subtotalValue: '473.33 €',
      discountValue: '-56.80 €',
      totalValue: '511.20 €',
    },
    produit: {
      title: 'उत्पाद',
      name: 'Nike Free Run Rouge',
      price: '89.99€',
      color: 'लाल',
      size: '42',
      material:
        'सामग्री संरचना ऊपरी: सांस लेने योग्य जाल; अस्तर और धूप में सुखाना: सिंथेटिक सामग्री; आउटसोल: रबर. सोल सामग्री रबर. तने की कम ऊंचाई. बाहरी सामग्री जाल. मूल देश वियतनाम.',
      about:
        'इस आइटम के बारे में - प्राकृतिक लचीलेपन के लिए नाइके फ्री कुशनिंग। नरम कुशनिंग के लिए हल्के फोम मिडसोल। हल्के वजन का डिज़ाइन दौड़ने और रोजमर्रा के उपयोग के लिए आदर्श है।',
      addToCart: 'कार्ट में जोड़ें',
      removeFromFavorites: 'पसंदीदा से हटाएँ',
    },
    compte: {
      title: 'मेरा खाता',
      member: '· सदस्य स्कोलोम',
      menu: {
        orders: {
          label: 'आदेश',
          desc: 'ट्रैकिंग और इतिहास',
        },
        addresses: {
          label: 'पतों',
          desc: 'वितरण और चालान',
        },
        details: {
          label: 'खाता विवरण',
          desc: 'नाम, ईमेल, टेलीफोन',
        },
        security: {
          label: 'सुरक्षा',
          desc: 'पासवर्ड',
        },
      },
      logout: 'डिस्कनेक्ट',
    },
    magazine: {
      title: 'Magazine',
      sesport: 'SeSport',
      gaming: 'Gaming',
      sesportArticles: {
        item1: {
          title: 'मर्काटो: यह लीग 1 कोच जो...',
          date: '12 मई 2026',
        },
        item2: {
          title: 'लीग 1: पीएसजी के लिए, लचीलेपन का शीर्षक...',
          date: '11 मई 2026',
        },
        item3: {
          title: 'चैंपियंस लीग: सेमीफाइनल में टाइटंस की टक्कर...',
          date: '10 मई 2026',
        },
      },
      gamingArticles: {
        item1: {
          title: 'वेलोरेंट चैंपियंस 2026: एक नजर पीछे...',
          date: '12 मई 2026',
        },
        item2: {
          title: 'एक्सबॉक्स गेम पास: जनवरी के लिए नवीनतम गेम...',
          date: '11 मई 2026',
        },
        item3: {
          title: 'PS5 प्रो: अगले के बारे में हम सब कुछ जानते हैं...',
          date: '10 मई 2026',
        },
      },
    },
    musique: {
      title: 'Skoleom Music',
      recognizing: 'मान्यता प्रगति पर है',
      listening: 'आप सुन रहे हैं:',
      song: 'WHERE SHE GOES — Bad Bunny',
    },
    travel: {
      title: 'Skoleom Travel',
      destination: 'गंतव्य :',
      flights: 'फ्लाइट बुकिंग',
      hotels: 'होटल आरक्षण',
      cities: {
        tokyo: 'Tokyo',
        santorin: 'Santorin',
        newYork: 'New York',
        paris: 'Paris',
      },
      vols: {
        af: {
          name: 'Air France',
          price: '896 €',
        },
        jl: {
          name: 'Japan Airlines',
          price: '920 €',
        },
        ek: {
          name: 'Emirates',
          price: '995 €',
        },
        qr: {
          name: 'Qatar Airw.',
          price: '847 €',
        },
      },
      hotelsList: {
        imperial: {
          name: 'Imperial Med',
          price: '132 €/रात',
        },
        shine: {
          name: 'Shine',
          price: '205 €/रात',
        },
        greco: {
          name: 'El Greco Resort',
          price: '203 €/रात',
        },
        karterado: {
          name: 'Hotel Karterado',
          price: '247 €/रात',
        },
      },
    },
    banner: {
      watchNow: 'अब देखिए',
    },
  },
};

const sesyncZh: SesyncTranslations = {
  page: {
    hero: {
      pill: '适用于所有 6 种主要浏览器 · 免费',
      line1: '每个视频',
      line2Before: '是一个',
      line2Highlight: '店铺',
      line3: '居住。',
      description:
        'SeSync 是一款扩展程序，可将 Netflix、YouTube、Prime Video、Disney+ 和 2,000 多个平台上的任何视频转变为购物体验。触摸屏幕。买。无需重定向。',
      installCta: '安装 SeSync',
      howCta: '看看它是如何工作的',
    },
    stats: {
      ott: {
        n: '2,000+',
        l: 'OTT平台',
      },
      sites: {
        n: '10亿+',
        l: '覆盖站点',
      },
      browsers: {
        n: '6',
        l: '浏览器',
      },
      noRedirect: {
        n: '0',
        l: '重定向',
      },
    },
    marquee: {
      ariaLabel: '支持 SeSync 的 OTT 平台',
      moreOtt: '+2000 OTT',
    },
    how: {
      eyebrow: '原理',
      titleBefore: '三个',
      titleHighlight: '手势',
      titleAfter: '。一次独特的体验。',
      description: '无需学习。 SeSync 在视频开始后立即激活，实时识别对象并直接在播放器内提供购买。',
    },
    steps: {
      step1: {
        title: '免费安装 SeSync。',
        text: '从浏览器的官方商店下载扩展程序。一键点击，30 秒。 SeSync 图标立即出现在您的工具栏中。',
      },
      step2: {
        title: '播放任何视频。',
        text: 'Netflix、YouTube、Prime Video、Twitch 或任何 OTT 平台。 SeSync 自动唤醒并识别屏幕上可见的产品，而不会减慢播放器的速度。',
      },
      step3: {
        title: '触碰。买。就这样。',
        text: '在对象上滑动手指或鼠标。出现产品表。一键添加到购物车。视频继续在后台播放。没有重定向。',
      },
    },
    mockup: {
      eyebrow: 'Magic Touch',
      titleBefore: '这就是',
      titleHighlight: '发生',
      titleAfter: '.',
      description:
        '用户用手指抚摸运动鞋。 SeSync 标识了 Gulf Runner Sky Edition。价格、尺寸、送货、添加到购物车 — 一切尽在其中，无需离开 Netflix。',
    },
    universes: {
      eyebrow: '8个宇宙',
      titleBefore: '一个',
      titleHighlight: '栏',
      titleAfter: '。八种可能性。',
      description:
        '每个视频的右侧都有一个图标栏，打开一个专用的宇宙——产品、音乐、旅行、游戏、人工智能助手。一切都是上下文相关的，都是同步的。',
      music: {
        title: '音乐',
        desc: '识别音轨并一键打开 Spotify、Apple Music 或 Deezer。',
      },
      travel: {
        title: '旅行',
        desc: '从屏幕上显示的目的地预订航班和酒店。',
      },
      sport: {
        title: '运动',
        desc: '运动鞋、球衣、运动配件——视频中看到的装备。',
      },
      gaming: {
        title: 'Gaming',
        desc: '玩游戏时可以解锁迷你游戏、现金返还、促销代码。',
      },
      fashion: {
        title: '时尚',
        desc: '视觉人工智能检测到的服装——完全匹配或相似。',
      },
      magazine: {
        title: 'Magazine',
        desc: '与内容相关的文章、造型手册和品牌故事。',
      },
      cart: {
        title: '通用篮子',
        desc: '一个篮子可容纳您的所有视频、平台和标签。',
      },
      gpt: {
        title: 'Skoleom GPT',
        desc: '您的人工智能购物助手——提出任何问题。',
      },
    },
    why: {
      eyebrow: '为什么选择 SeSync',
      titleBefore: '一项',
      titleHighlight: '技术',
      titleAfter: '这是其他地方不存在的。',
    },
    pillars: {
      patent: {
        title: '获得全球专利。',
        text: '我们的视频流中的实时对象识别技术受三项国际专利（FR2201013A、EP4473738、WO2023148295A1）的保护。这就是 SeSync 无与伦比的原因。',
      },
      performance: {
        title: '对您的视频零影响。',
        text: 'SeSync 使用 GPU 加速并在隔离帧中工作。您的 4K 和 HDR 视频永远不会变慢。检测是即时的、不可见的、自然的。',
      },
      privacy: {
        title: 'GDPR-第一。欧洲主权。',
        text: '您的数据保留在欧洲的主权基础设施 Skoleom Cloud 上。不得转售给第三方，加密支付，符合 PCI-DSS 1 级标准。',
      },
      free: {
        title: '自由的。永远。',
        text: 'SeSync 现在和将来都是免费的。无需订阅，无需广告，无需收集转售数据。我们的模式：从合作伙伴品牌那里收取销售佣金。',
      },
    },
    browsers: {
      eyebrow: '兼容性',
      titleBefore: '可用的',
      titleHighlight: '到处',
      titleAfter: '.',
      description: 'SeSync兼容6大主流浏览器，覆盖全球99%以上市场。一次安装，无处不在。',
      available: '可用的',
      soon: '即将推出',
    },
    faq: {
      eyebrow: '常见问题',
      titleBefore: '这些',
      titleHighlight: '答案',
      titleAfter: '那很重要。',
      free: {
        q: 'SeSync 真的免费吗？',
        a: '是的，永久免费，没有隐藏订阅。我们的收入仅来自通过扩展进行的销售佣金，由合作伙伴品牌支付。',
      },
      security: {
        q: '我的数据安全吗？',
        a: 'SeSync 优先考虑 GDPR。您的数据托管在欧洲的 Skoleom Cloud 上，绝不会转售给第三方。付款经过加密且符合 PCI-DSS 1 级标准。',
      },
      platforms: {
        q: 'SeSync 在哪些平台上运行？',
        a: 'SeSync 自动检测超过 2,000 个 OTT 平台（Netflix、YouTube、Prime Video、Disney+、HBO、Twitch 等）和超过 10 亿个合作伙伴网站。',
      },
      performance: {
        q: '这会减慢我的视频播放速度吗？',
        a: '不会。SeSync 的设计对播放性能的影响为零，即使在 4K HDR 中也是如此。我们的检测在孤立帧中使用 GPU 加速。',
      },
      account: {
        q: '您需要创建一个帐户吗？',
        a: '发现胶囊：没有。要购买、保存收藏夹或使用通用购物篮：是的，一个免费的 Skoleom 帐户就足够了。',
      },
      mobile: {
        q: 'SeSync 可以在移动设备上使用吗？',
        a: '对于浏览器，该扩展可在桌面上运行。对于移动设备，Skoleom iOS 和 Android 应用程序在后台提供相同的体验。',
      },
    },
    cta: {
      titleBefore: '看。触碰。',
      titleHighlight: '买。',
      description: '加入零售媒体革命。免费安装 SeSync，让每个视频都成为直播商店。',
      install: '安装 SeSync — 免费',
    },
  },
  mockup: {
    sidebar: {
      params: '设置',
      favoris: '收藏夹',
      panier: '篮子',
      compte: '帐户',
      magazine: 'Magazine',
      musique: '音乐',
      travel: '旅行',
    },
    episode: 'Drive to Survive · S6E2',
    capsule: '胶囊',
  },
  capsule: {
    brand: 'Nike',
    videoTitle: 'Nike Free Run Rouge | Unboxing & Review',
    productName: 'Nike Free Run Rouge',
    price: '89.99€',
    freeShipping: '免费送货',
    description:
      'Nike Free Run Red — 这款轻质跑鞋提供自然缓冲和最大灵活性。透气网布，耐用橡胶鞋底。',
    buy: '买',
    added: '✓ 添加',
    tabInfos: '信息',
    tabSimilaires: '相似的',
    infoCards: {
      card1: 'Nike Free Run — 2026 年春季系列',
      card2: 'Nike Free Run Rouge | Unboxing & Review',
    },
    similaires: {
      item1: {
        name: 'Nike Air Max 270',
        price: '129€',
      },
      item2: {
        name: 'Adidas Ultra Boost 22',
        price: '159€',
      },
      item3: {
        name: 'Puma RS-X Street',
        price: '99€',
      },
    },
  },
  sidepages: {
    bottomNav: {
      favoris: '收藏夹',
      panier: '篮子',
      compte: '帐户',
      magazine: 'Magazine',
    },
    params: {
      title: '设置',
      language: '语言',
      languageHint: '选择扩展语言',
      english: '🇬🇧 English',
      french: '🇫🇷 Français',
      display: '展示',
      displayOptions: {
        button: {
          label: 'Button',
          desc: '以按钮形式显示胶囊',
        },
        timeline: {
          label: 'Timeline',
          desc: '在时间轴上显示胶囊',
        },
        magictouch: {
          label: 'Magic Touch',
          desc: '直接将产品添加到悬停',
        },
      },
      buttonShape: '纽扣形状',
      pillLabel: '· Capsule',
      pillDesc: '带文字的按钮',
      logoDesc: '谨慎的圆形图标',
    },
    favoris: {
      title: '收藏夹',
      add: '添加',
      items: {
        item1: {
          name: 'Air Max Plus PSG Shoes',
          price: '312.00€',
        },
        item2: {
          name: "Men's Michael Jordan Black Chicago Bulls",
          price: '360€',
        },
        item3: {
          name: 'The 25X Sneakers - BB2 For Man',
          price: '310€',
        },
      },
    },
    panier: {
      title: '我的篮子',
      options: 'Options',
      coupon: '折扣券',
      promoPlaceholder: '促销代码',
      apply: '申请',
      subtotal: '小计',
      discount: '减少',
      shipping: '船运',
      shippingNote: '下一步计算',
      total: 'Total',
      vatNote: '含增值税 · 下一步计算的交货',
      validate: '验证我的购物篮',
      amazon: '在亚马逊订购',
      items: {
        item1: {
          name: 'The 25X Pants For Man',
          price: '105.00 €',
        },
        item2: {
          name: 'The 25X T-shirt For Man',
          price: '54.00 €',
        },
        item3: {
          name: 'The 25X Pants For Man',
          price: '150.00 €',
        },
      },
      subtotalValue: '473.33 €',
      discountValue: '-56.80 €',
      totalValue: '511.20 €',
    },
    produit: {
      title: '产品',
      name: 'Nike Free Run Rouge',
      price: '89.99€',
      color: '红色的',
      size: '42',
      material:
        '材质成分 鞋面：透气网布；衬里和鞋垫：合成材料；外底：橡胶。鞋底材质 橡胶。茎高低。网状外层材质。原产国越南。',
      about:
        '关于该商品 — Nike Free 缓震，带来自然的灵活性。轻质泡沫中底提供柔软的缓冲效果。轻巧的设计非常适合跑步和日常使用。',
      addToCart: '添加到购物车',
      removeFromFavorites: '从收藏夹中删除',
    },
    compte: {
      title: '我的账户',
      member: '· 斯库莱姆会员',
      menu: {
        orders: {
          label: '订单',
          desc: '追踪和历史记录',
        },
        addresses: {
          label: '地址',
          desc: '交货和发票',
        },
        details: {
          label: '账户详情',
          desc: '姓名、电子邮件、电话',
        },
        security: {
          label: '安全',
          desc: '密码',
        },
      },
      logout: '断开',
    },
    magazine: {
      title: 'Magazine',
      sesport: 'SeSport',
      gaming: 'Gaming',
      sesportArticles: {
        item1: {
          title: '梅尔卡托：这位法甲教练可以……',
          date: '2026 年 5 月 12 日',
        },
        item2: {
          title: '法甲：对于巴黎圣日尔曼来说，恢复力的冠军......',
          date: '2026 年 5 月 11 日',
        },
        item3: {
          title: '冠军联赛：半决赛中的泰坦交锋……',
          date: '2026 年 5 月 10 日',
        },
      },
      gamingArticles: {
        item1: {
          title: '《Valorant Champions 2026》：回顾……',
          date: '2026 年 5 月 12 日',
        },
        item2: {
          title: 'Xbox Game Pass：一月份的最新游戏......',
          date: '2026 年 5 月 11 日',
        },
        item3: {
          title: 'PS5 Pro：我们所知道的关于下一代的一切......',
          date: '2026 年 5 月 10 日',
        },
      },
    },
    musique: {
      title: 'Skoleom Music',
      recognizing: '识别正在进行中',
      listening: '你正在听：',
      song: 'WHERE SHE GOES — Bad Bunny',
    },
    travel: {
      title: 'Skoleom Travel',
      destination: '目的地 ：',
      flights: '航班预订',
      hotels: '酒店预订',
      cities: {
        tokyo: 'Tokyo',
        santorin: 'Santorin',
        newYork: 'New York',
        paris: 'Paris',
      },
      vols: {
        af: {
          name: 'Air France',
          price: '896 €',
        },
        jl: {
          name: 'Japan Airlines',
          price: '920 €',
        },
        ek: {
          name: 'Emirates',
          price: '995 €',
        },
        qr: {
          name: 'Qatar Airw.',
          price: '847 €',
        },
      },
      hotelsList: {
        imperial: {
          name: 'Imperial Med',
          price: '132 欧元/晚',
        },
        shine: {
          name: 'Shine',
          price: '205 欧元/晚',
        },
        greco: {
          name: 'El Greco Resort',
          price: '203 欧元/晚',
        },
        karterado: {
          name: 'Hotel Karterado',
          price: '247 欧元/晚',
        },
      },
    },
    banner: {
      watchNow: '立即观看',
    },
  },
};

const sesyncId: SesyncTranslations = {
  page: {
    hero: {
      pill: 'Tersedia di 6 browser utama · Gratis',
      line1: 'Setiap video',
      line2Before: 'adalah a',
      line2Highlight: 'toko',
      line3: 'hidup.',
      description:
        'SeSync adalah ekstensi yang mengubah video apa pun — di Netflix, YouTube, Prime Video, Disney+, dan 2.000+ platform — menjadi pengalaman berbelanja. Sentuh layar. Membeli. Tanpa pengalihan.',
      installCta: 'Instal SeSync',
      howCta: 'Lihat cara kerjanya',
    },
    stats: {
      ott: {
        n: '2.000+',
        l: 'platform OTT',
      },
      sites: {
        n: '1 miliar+',
        l: 'Situs tercakup',
      },
      browsers: {
        n: '6',
        l: 'Peramban',
      },
      noRedirect: {
        n: '0',
        l: 'Pengalihan',
      },
    },
    marquee: {
      ariaLabel: 'Platform OTT berkemampuan SeSync',
      moreOtt: '+2000 OTT',
    },
    how: {
      eyebrow: 'Prinsipnya',
      titleBefore: 'Tiga ',
      titleHighlight: 'isyarat',
      titleAfter: '. Sebuah pengalaman unik.',
      description:
        'Tidak diperlukan pembelajaran. SeSync diaktifkan segera setelah video dimulai, mengidentifikasi objek secara real time dan menawarkan pembelian langsung di dalam pemutar.',
    },
    steps: {
      step1: {
        title: 'Instal SeSync secara gratis.',
        text: 'Unduh ekstensi dari toko resmi browser Anda. Satu klik, 30 detik. Ikon SeSync segera muncul di toolbar Anda.',
      },
      step2: {
        title: 'Putar video apa pun.',
        text: 'Netflix, YouTube, Prime Video, Twitch, atau platform OTT apa pun. SeSync secara otomatis aktif dan mengidentifikasi produk yang terlihat di layar, tanpa memperlambat pemutar.',
      },
      step3: {
        title: 'Menyentuh. Membeli. Itu saja.',
        text: 'Geser jari atau mouse Anda ke suatu objek. Lembar produk muncul. Tambahkan ke troli dalam satu klik. Video terus diputar di latar belakang. Tidak ada pengalihan.',
      },
    },
    mockup: {
      eyebrow: 'Magic Touch',
      titleBefore: 'Inilah yang ',
      titleHighlight: 'terjadi',
      titleAfter: '.',
      description:
        'Pengguna mengusapkan jarinya ke atas sepatu. SeSync mengidentifikasi Gulf Runner Sky Edition. Harga, ukuran, pengiriman, tambahkan ke troli — semuanya ada di sana, tanpa perlu keluar dari Netflix.',
    },
    universes: {
      eyebrow: '8 alam semesta',
      titleBefore: 'Satu ',
      titleHighlight: 'bilah',
      titleAfter: '. Delapan kemungkinan.',
      description:
        'Di sebelah kanan setiap video, bilah ikon membuka dunia khusus — produk, musik, perjalanan, game, asisten AI. Semua kontekstual, semua tersinkronisasi.',
      music: {
        title: 'Musik',
        desc: 'Identifikasi soundtrack dan buka Spotify, Apple Music, atau Deezer dalam satu klik.',
      },
      travel: {
        title: 'Perjalanan',
        desc: 'Pesan penerbangan dan hotel dari tujuan yang ditampilkan di layar.',
      },
      sport: {
        title: 'Olahraga',
        desc: 'Sepatu kets, kaus, aksesoris olahraga — perlengkapan yang terlihat di video.',
      },
      gaming: {
        title: 'Gaming',
        desc: 'Mini-game, cashback, kode promo untuk dibuka saat bermain.',
      },
      fashion: {
        title: 'Mode',
        desc: 'Pakaian terdeteksi oleh AI visual — sama persis atau serupa.',
      },
      magazine: {
        title: 'Magazine',
        desc: 'Artikel terkait konten, lookbook, dan cerita merek.',
      },
      cart: {
        title: 'Keranjang serbaguna',
        desc: 'Satu keranjang untuk semua video, platform, dan tab Anda.',
      },
      gpt: {
        title: 'Skoleom GPT',
        desc: 'Asisten belanja AI Anda — ajukan pertanyaan apa pun.',
      },
    },
    why: {
      eyebrow: 'Mengapa SeSync',
      titleBefore: 'Sebuah ',
      titleHighlight: 'teknologi',
      titleAfter: 'yang tidak ada di tempat lain.',
    },
    pillars: {
      patent: {
        title: 'Dipatenkan di seluruh dunia.',
        text: 'Teknologi identifikasi objek real-time kami dalam aliran video dilindungi oleh tiga paten internasional (FR2201013A, EP4473738, WO2023148295A1). Hal inilah yang membuat SeSync tidak ada duanya.',
      },
      performance: {
        title: 'Tidak ada dampak pada video Anda.',
        text: 'SeSync menggunakan akselerasi GPU dan bekerja dalam frame yang terisolasi. Video 4K dan HDR Anda tidak pernah melambat. Deteksi terjadi seketika, tidak terlihat, alami.',
      },
      privacy: {
        title: 'GDPR-pertama. kedaulatan Eropa.',
        text: 'Data Anda tetap berada di Skoleom Cloud, infrastruktur berdaulat di Eropa. Tidak ada penjualan kembali ke pihak ketiga, pembayaran terenkripsi, sesuai PCI-DSS level 1.',
      },
      free: {
        title: 'Bebas. Selamanya.',
        text: 'SeSync adalah dan akan tetap gratis. Tanpa berlangganan, tanpa iklan, tanpa pengumpulan data yang dijual kembali. Model kami: komisi penjualan dari merek mitra.',
      },
    },
    browsers: {
      eyebrow: 'Kesesuaian',
      titleBefore: 'Tersedia',
      titleHighlight: 'di mana pun',
      titleAfter: '.',
      description:
        'SeSync kompatibel dengan 6 browser utama yang mencakup lebih dari 99% pasar global. Satu instalasi, di mana saja.',
      available: 'Tersedia',
      soon: 'Segera hadir',
    },
    faq: {
      eyebrow: 'Pertanyaan',
      titleBefore: ' ',
      titleHighlight: 'jawaban',
      titleAfter: 'itu penting.',
      free: {
        q: 'Apakah SeSync benar-benar gratis?',
        a: 'Ya, gratis selamanya, tanpa langganan tersembunyi. Pendapatan kami hanya berasal dari komisi penjualan yang dilakukan melalui ekstensi, yang dibayarkan oleh merek mitra.',
      },
      security: {
        q: 'Apakah data saya aman?',
        a: 'SeSync mengutamakan GDPR. Data Anda dihosting di Eropa di Skoleom Cloud, tidak pernah dijual kembali ke pihak ketiga. Pembayaran dienkripsi dan mematuhi PCI-DSS Level 1.',
      },
      platforms: {
        q: 'Pada platform manakah SeSync bekerja?',
        a: 'SeSync secara otomatis mendeteksi lebih dari 2.000 platform OTT (Netflix, YouTube, Prime Video, Disney+, HBO, Twitch, dll.) dan lebih dari satu miliar situs web mitra.',
      },
      performance: {
        q: 'Apakah ini memperlambat video saya?',
        a: 'Tidak. SeSync dirancang untuk tidak memberikan dampak apa pun pada performa pemutaran, bahkan dalam 4K HDR. Deteksi kami menggunakan akselerasi GPU dalam frame yang terisolasi.',
      },
      account: {
        q: 'Apakah Anda perlu membuat akun?',
        a: 'Untuk menemukan kapsulnya: tidak. Untuk membeli, menyimpan favorit, atau menggunakan keranjang universal: ya, akun Skoleom gratis sudah cukup.',
      },
      mobile: {
        q: 'Apakah SeSync berfungsi di perangkat seluler?',
        a: 'Untuk browser, ekstensi berfungsi di desktop. Untuk seluler, aplikasi Skoleom iOS dan Android menawarkan pengalaman yang sama, di latar belakang.',
      },
    },
    cta: {
      titleBefore: 'Lihat. Menyentuh.',
      titleHighlight: 'Membeli.',
      description:
        'Bergabunglah dengan revolusi Media Ritel. Instal SeSync secara gratis, dan jadikan setiap video sebagai penyimpanan langsung.',
      install: 'Instal SeSync — Gratis',
    },
  },
  mockup: {
    sidebar: {
      params: 'Pengaturan',
      favoris: 'Favorit',
      panier: 'Keranjang',
      compte: 'Akun',
      magazine: 'Magazine',
      musique: 'Musik',
      travel: 'Perjalanan',
    },
    episode: 'Drive to Survive · S6E2',
    capsule: 'Kapsul',
  },
  capsule: {
    brand: 'Nike',
    videoTitle: 'Nike Free Run Rouge | Unboxing & Review',
    productName: 'Nike Free Run Rouge',
    price: '89.99€',
    freeShipping: 'Pengiriman GRATIS',
    description:
      'Nike Free Run Red — Nikmati bantalan alami dan fleksibilitas maksimal dengan sepatu lari ringan ini. Jaring berpori, sol karet tahan lama.',
    buy: 'Membeli',
    added: '✓ Ditambahkan',
    tabInfos: 'Info',
    tabSimilaires: 'Serupa',
    infoCards: {
      card1: 'Nike Free Run — Koleksi Musim Semi 2026',
      card2: 'Nike Free Run Rouge | Unboxing & Review',
    },
    similaires: {
      item1: {
        name: 'Nike Air Max 270',
        price: '129€',
      },
      item2: {
        name: 'Adidas Ultra Boost 22',
        price: '159€',
      },
      item3: {
        name: 'Puma RS-X Street',
        price: '99€',
      },
    },
  },
  sidepages: {
    bottomNav: {
      favoris: 'Favorit',
      panier: 'Keranjang',
      compte: 'Akun',
      magazine: 'Magazine',
    },
    params: {
      title: 'Pengaturan',
      language: 'Bahasa',
      languageHint: 'Pilih bahasa ekstensi',
      english: '🇬🇧 English',
      french: '🇫🇷 Français',
      display: 'Menampilkan',
      displayOptions: {
        button: {
          label: 'Button',
          desc: 'Tampilan kapsul dalam bentuk kancing',
        },
        timeline: {
          label: 'Timeline',
          desc: 'Menampilkan kapsul di timeline',
        },
        magictouch: {
          label: 'Magic Touch',
          desc: 'Menambahkan produk langsung ke hover',
        },
      },
      buttonShape: 'Bentuk tombol',
      pillLabel: '· Capsule',
      pillDesc: 'Tombol dengan teks',
      logoDesc: 'Ikon bulat yang bijaksana',
    },
    favoris: {
      title: 'Favorit',
      add: 'Menambahkan',
      items: {
        item1: {
          name: 'Air Max Plus PSG Shoes',
          price: '312.00€',
        },
        item2: {
          name: "Men's Michael Jordan Black Chicago Bulls",
          price: '360€',
        },
        item3: {
          name: 'The 25X Sneakers - BB2 For Man',
          price: '310€',
        },
      },
    },
    panier: {
      title: 'keranjang saya',
      options: 'Options',
      coupon: 'Kupon diskon',
      promoPlaceholder: 'KODE PROMO',
      apply: 'Menerapkan',
      subtotal: 'Subtotal',
      discount: 'Pengurangan',
      shipping: 'Pengiriman',
      shippingNote: 'Dihitung pada langkah selanjutnya',
      total: 'Total',
      vatNote: 'Termasuk PPN · Pengiriman dihitung pada langkah berikutnya',
      validate: 'Validasi keranjang saya',
      amazon: 'Pesan di Amazon',
      items: {
        item1: {
          name: 'The 25X Pants For Man',
          price: '105.00 €',
        },
        item2: {
          name: 'The 25X T-shirt For Man',
          price: '54.00 €',
        },
        item3: {
          name: 'The 25X Pants For Man',
          price: '150.00 €',
        },
      },
      subtotalValue: '473.33 €',
      discountValue: '-56.80 €',
      totalValue: '511.20 €',
    },
    produit: {
      title: 'Produk',
      name: 'Nike Free Run Rouge',
      price: '89.99€',
      color: 'Merah',
      size: '42',
      material:
        'Komposisi bahan Bagian atas: jaring bernapas; lapisan dan sol dalam: bahan sintetis; sol luar: karet. Bahan sol Karet. Tinggi batang rendah. Bahan luar jaring. Negara asal Vietnam.',
      about:
        'Tentang item ini — Bantalan Nike Free untuk fleksibilitas alami. Midsole busa ringan untuk bantalan lembut. Desain ringan ideal untuk lari dan penggunaan sehari-hari.',
      addToCart: 'Tambahkan ke troli',
      removeFromFavorites: 'Hapus dari favorit',
    },
    compte: {
      title: 'Akun Saya',
      member: '· Anggota Skoleom',
      menu: {
        orders: {
          label: 'Pesanan',
          desc: 'Pelacakan dan sejarah',
        },
        addresses: {
          label: 'Alamat',
          desc: 'Pengiriman dan penagihan',
        },
        details: {
          label: 'Detail akun',
          desc: 'Nama, email, telepon',
        },
        security: {
          label: 'Keamanan',
          desc: 'Kata sandi',
        },
      },
      logout: 'Memutuskan',
    },
    magazine: {
      title: 'Magazine',
      sesport: 'SeSport',
      gaming: 'Gaming',
      sesportArticles: {
        item1: {
          title: 'Mercato: Pelatih Ligue 1 ini yang bisa...',
          date: '12 Mei 2026',
        },
        item2: {
          title: 'Ligue 1: Bagi PSG, Gelar Ketahanan Setelah...',
          date: '11 Mei 2026',
        },
        item3: {
          title: 'Liga Champions: bentrokan para raksasa di semifinal...',
          date: '10 Mei 2026',
        },
      },
      gamingArticles: {
        item1: {
          title: 'Valorant Champions 2026: Melihat kembali...',
          date: '12 Mei 2026',
        },
        item2: {
          title: 'Xbox Game Pass: game terbaru untuk bulan Januari...',
          date: '11 Mei 2026',
        },
        item3: {
          title: 'PS5 Pro: semua yang kami ketahui tentang selanjutnya...',
          date: '10 Mei 2026',
        },
      },
    },
    musique: {
      title: 'Skoleom Music',
      recognizing: 'Pengakuan sedang berlangsung',
      listening: 'Anda mendengarkan:',
      song: 'WHERE SHE GOES — Bad Bunny',
    },
    travel: {
      title: 'Skoleom Travel',
      destination: 'Tujuan :',
      flights: 'Pemesanan penerbangan',
      hotels: 'Reservasi hotel',
      cities: {
        tokyo: 'Tokyo',
        santorin: 'Santorin',
        newYork: 'New York',
        paris: 'Paris',
      },
      vols: {
        af: {
          name: 'Air France',
          price: '896 €',
        },
        jl: {
          name: 'Japan Airlines',
          price: '920 €',
        },
        ek: {
          name: 'Emirates',
          price: '995 €',
        },
        qr: {
          name: 'Qatar Airw.',
          price: '847 €',
        },
      },
      hotelsList: {
        imperial: {
          name: 'Imperial Med',
          price: '132 €/malam',
        },
        shine: {
          name: 'Shine',
          price: '205 €/malam',
        },
        greco: {
          name: 'El Greco Resort',
          price: '203 €/malam',
        },
        karterado: {
          name: 'Hotel Karterado',
          price: '247 €/malam',
        },
      },
    },
    banner: {
      watchNow: 'Tonton sekarang',
    },
  },
};

const sesyncRu: SesyncTranslations = {
  page: {
    hero: {
      pill: 'Доступно во всех 6 основных браузерах · Бесплатно',
      line1: 'Каждое видео',
      line2Before: 'это',
      line2Highlight: 'магазин',
      line3: 'жить.',
      description:
        'SeSync — это расширение, которое превращает любое видео — на Netflix, YouTube, Prime Video, Disney+ и более чем 2000 платформах — в процесс совершения покупок. Коснитесь экрана. Купить. Без перенаправления.',
      installCta: 'Установите Сесинк',
      howCta: 'Посмотрите, как это работает',
    },
    stats: {
      ott: {
        n: '2 000+',
        l: 'ОТТ-платформы',
      },
      sites: {
        n: '1 миллиард+',
        l: 'Охваченные сайты',
      },
      browsers: {
        n: '6',
        l: 'Браузеры',
      },
      noRedirect: {
        n: '0',
        l: 'Перенаправление',
      },
    },
    marquee: {
      ariaLabel: 'OTT-платформы с поддержкой SeSync',
      moreOtt: '+2000 OTT',
    },
    how: {
      eyebrow: 'Принцип',
      titleBefore: 'Три ',
      titleHighlight: 'жесты',
      titleAfter: '. Уникальный опыт.',
      description:
        'Никакого обучения не требуется. SeSync активируется при запуске видео, идентифицирует объекты в реальном времени и предлагает покупку прямо внутри плеера.',
    },
    steps: {
      step1: {
        title: 'Установите SeSync бесплатно.',
        text: "Download the extension from your browser's official store. Один клик, 30 секунд. The SeSync icon immediately appears in your toolbar.",
      },
      step2: {
        title: 'Воспроизведите любое видео.',
        text: 'Netflix, YouTube, Prime Video, Twitch или любая платформа OTT. SeSync автоматически выходит из режима ожидания и определяет продукты, видимые на экране, не замедляя работу плеера.',
      },
      step3: {
        title: 'Трогать. Купить. Вот и все.',
        text: 'Проведите пальцем или мышью по объекту. Появится лист продукта. Добавьте в корзину в один клик. Видео продолжает воспроизводиться в фоновом режиме. Никаких перенаправлений.',
      },
    },
    mockup: {
      eyebrow: 'Magic Touch',
      titleBefore: 'Вот что ',
      titleHighlight: 'происходит',
      titleAfter: '.',
      description:
        'Пользователь проводит пальцем по кроссовку. SeSync идентифицирует Gulf Runner Sky Edition. Цены, размеры, доставка, добавить в корзину — все это есть, не выходя из Netflix.',
    },
    universes: {
      eyebrow: '8 вселенных',
      titleBefore: 'Одна ',
      titleHighlight: 'панель',
      titleAfter: '. Восемь возможностей.',
      description:
        'Справа от каждого видео панель значков открывает специальную вселенную — продукты, музыку, путешествия, игры, AI-помощник. Все контекстно, все синхронизировано.',
      music: {
        title: 'Музыка',
        desc: 'Определите саундтрек и откройте Spotify, Apple Music или Deezer одним щелчком мыши.',
      },
      travel: {
        title: 'Путешествие',
        desc: 'Забронируйте рейс и отель из пункта назначения, отображаемого на экране.',
      },
      sport: {
        title: 'Спорт',
        desc: 'Кроссовки, трикотажные изделия, спортивные аксессуары — инвентарь представлен на видео.',
      },
      gaming: {
        title: 'Gaming',
        desc: 'Мини-игры, кэшбэк, промокоды для разблокировки во время игры.',
      },
      fashion: {
        title: 'Мода',
        desc: 'Одежда, обнаруженная визуальным искусственным интеллектом — точное совпадение или подобная.',
      },
      magazine: {
        title: 'Magazine',
        desc: 'Статьи, связанные с контентом, лукбуки и истории брендов.',
      },
      cart: {
        title: 'Универсальная корзина',
        desc: 'Единая корзина для всех ваших видео, платформ и вкладок.',
      },
      gpt: {
        title: 'Skoleom GPT',
        desc: 'Ваш AI-помощник по покупкам — задайте любой вопрос.',
      },
    },
    why: {
      eyebrow: 'Почему SeSync',
      titleBefore: 'Одна ',
      titleHighlight: 'технология',
      titleAfter: 'которого нет больше нигде.',
    },
    pillars: {
      patent: {
        title: 'Запатентовано во всем мире.',
        text: 'Наша технология идентификации объектов в реальном времени в видеопотоке защищена тремя международными патентами (FR2201013A, EP4473738, WO2023148295A1). Именно это делает SeSync непобедимым.',
      },
      performance: {
        title: 'Нулевое влияние на ваши видео.',
        text: 'SeSync использует ускорение графического процессора и работает в изолированном кадре. Ваши видео 4K и HDR никогда не замедляются. Обнаружение мгновенное, незаметное, естественное.',
      },
      privacy: {
        title: 'GDPR-первый. Европейский суверенитет.',
        text: 'Ваши данные остаются в Skoleom Cloud, независимой инфраструктуре в Европе. Никакой перепродажи третьим лицам, платежи зашифрованы, соответствует уровню 1 PCI-DSS.',
      },
      free: {
        title: 'Бесплатно. Навсегда.',
        text: 'SeSync есть и останется бесплатным. Никакой подписки, никакой рекламы, никакого сбора перепродаваемых данных. Наша модель: комиссия с продаж от брендов-партнеров.',
      },
    },
    browsers: {
      eyebrow: 'Совместимость',
      titleBefore: 'Доступный',
      titleHighlight: 'повсюду',
      titleAfter: '.',
      description:
        'SeSync совместим с 6 основными браузерами, которые охватывают более 99% мирового рынка. Одна установка везде.',
      available: 'Доступный',
      soon: 'Скоро',
    },
    faq: {
      eyebrow: 'Вопросы',
      titleBefore: ' ',
      titleHighlight: 'ответы',
      titleAfter: 'это важно.',
      free: {
        q: 'SeSync действительно бесплатен?',
        a: 'Да, бесплатно навсегда, без скрытых подписок. Наш доход поступает только от комиссий от продаж, совершенных через расширение, выплачиваемых брендами-партнерами.',
      },
      security: {
        q: 'Мои данные в безопасности?',
        a: 'SeSync — это приоритет GDPR. Ваши данные хранятся в Европе на Skoleom Cloud и никогда не перепродаются третьим лицам. Платежи шифруются и соответствуют стандарту PCI-DSS Level 1.',
      },
      platforms: {
        q: 'На каких платформах работает SeSync?',
        a: 'SeSync автоматически обнаруживает более 2000 OTT-платформ (Netflix, YouTube, Prime Video, Disney+, HBO, Twitch и т. д.) и более миллиарда партнерских веб-сайтов.',
      },
      performance: {
        q: 'Это замедляет мои видео?',
        a: 'Нет. SeSync не оказывает никакого влияния на качество воспроизведения, даже в формате 4K HDR. Наше обнаружение использует ускорение графического процессора в изолированном кадре.',
      },
      account: {
        q: 'Вам нужно создать учетную запись?',
        a: 'Чтобы обнаружить капсулы: нет. Чтобы купить, сохранить в избранное или воспользоваться универсальной корзиной: да, достаточно бесплатного аккаунта Skoleom.',
      },
      mobile: {
        q: 'Работает ли SeSync на мобильных устройствах?',
        a: 'Для браузера расширение работает на рабочем столе. Для мобильных устройств приложение Skoleom для iOS и Android предлагает те же возможности в фоновом режиме.',
      },
    },
    cta: {
      titleBefore: 'Смотреть. Трогать.',
      titleHighlight: 'Купить.',
      description:
        'Присоединяйтесь к революции в розничной торговле. Установите SeSync бесплатно и сделайте каждое видео живым магазином.',
      install: 'Установите SeSync — бесплатно',
    },
  },
  mockup: {
    sidebar: {
      params: 'Настройки',
      favoris: 'Избранное',
      panier: 'Корзина',
      compte: 'Счет',
      magazine: 'Magazine',
      musique: 'Музыка',
      travel: 'Путешествие',
    },
    episode: 'Drive to Survive · S6E2',
    capsule: 'Капсула',
  },
  capsule: {
    brand: 'Nike',
    videoTitle: 'Nike Free Run Rouge | Unboxing & Review',
    productName: 'Nike Free Run Rouge',
    price: '89.99€',
    freeShipping: 'БЕСПЛАТНАЯ доставка',
    description:
      'Nike Free Run Red — наслаждайтесь естественной амортизацией и максимальной гибкостью в этих легких беговых кроссовках. Дышащая сетка, прочная резиновая подошва.',
    buy: 'Купить',
    added: '✓ Добавлено',
    tabInfos: 'Инфо',
    tabSimilaires: 'Похожий',
    infoCards: {
      card1: 'Nike Free Run — коллекция весны 2026 г.',
      card2: 'Nike Free Run Rouge | Unboxing & Review',
    },
    similaires: {
      item1: {
        name: 'Nike Air Max 270',
        price: '129€',
      },
      item2: {
        name: 'Adidas Ultra Boost 22',
        price: '159€',
      },
      item3: {
        name: 'Puma RS-X Street',
        price: '99€',
      },
    },
  },
  sidepages: {
    bottomNav: {
      favoris: 'Избранное',
      panier: 'Корзина',
      compte: 'Счет',
      magazine: 'Magazine',
    },
    params: {
      title: 'Настройки',
      language: 'Язык',
      languageHint: 'Выберите язык расширения',
      english: '🇬🇧 English',
      french: '🇫🇷 Français',
      display: 'Отображать',
      displayOptions: {
        button: {
          label: 'Button',
          desc: 'Отображение капсулы в виде кнопки',
        },
        timeline: {
          label: 'Timeline',
          desc: 'Отображение капсул на временной шкале',
        },
        magictouch: {
          label: 'Magic Touch',
          desc: 'Добавление товаров прямо при наведении',
        },
      },
      buttonShape: 'Форма кнопки',
      pillLabel: '· Capsule',
      pillDesc: 'Кнопка с текстом',
      logoDesc: 'Неброский круглый значок',
    },
    favoris: {
      title: 'Избранное',
      add: 'Добавлять',
      items: {
        item1: {
          name: 'Air Max Plus PSG Shoes',
          price: '312.00€',
        },
        item2: {
          name: "Men's Michael Jordan Black Chicago Bulls",
          price: '360€',
        },
        item3: {
          name: 'The 25X Sneakers - BB2 For Man',
          price: '310€',
        },
      },
    },
    panier: {
      title: 'Моя корзина',
      options: 'Options',
      coupon: 'Купон на скидку',
      promoPlaceholder: 'ПРОМО-КОД',
      apply: 'Применять',
      subtotal: 'Промежуточный итог',
      discount: 'Снижение',
      shipping: 'Перевозки',
      shippingNote: 'Рассчитывается на следующем этапе',
      total: 'Total',
      vatNote: 'Включен НДС · Стоимость доставки рассчитывается на следующем шаге',
      validate: 'Подтвердить мою корзину',
      amazon: 'Заказать на Амазоне',
      items: {
        item1: {
          name: 'The 25X Pants For Man',
          price: '105.00 €',
        },
        item2: {
          name: 'The 25X T-shirt For Man',
          price: '54.00 €',
        },
        item3: {
          name: 'The 25X Pants For Man',
          price: '150.00 €',
        },
      },
      subtotalValue: '473.33 €',
      discountValue: '-56.80 €',
      totalValue: '511.20 €',
    },
    produit: {
      title: 'Продукт',
      name: 'Nike Free Run Rouge',
      price: '89.99€',
      color: 'Красный',
      size: '42',
      material:
        'Состав материала Верх: дышащая сетка; подкладка и стелька: синтетические материалы; подошва: резина. Материал подошвы Резина. Низкая высота стебля. Сетчатый внешний материал. Страна-производитель Вьетнам.',
      about:
        'Об этом товаре — Амортизация Nike Free для естественной гибкости. Легкая подошва из пеноматериала для мягкой амортизации. Легкий дизайн идеально подходит для бега и повседневного использования.',
      addToCart: 'Добавить в корзину',
      removeFromFavorites: 'Удалить из избранного',
    },
    compte: {
      title: 'Мой счет',
      member: '· Член Сколеом',
      menu: {
        orders: {
          label: 'Заказы',
          desc: 'Отслеживание и история',
        },
        addresses: {
          label: 'Адреса',
          desc: 'Доставка и выставление счетов',
        },
        details: {
          label: 'Детали аккаунта',
          desc: 'Имя, электронная почта, телефон',
        },
        security: {
          label: 'Безопасность',
          desc: 'Пароль',
        },
      },
      logout: 'Отключить',
    },
    magazine: {
      title: 'Magazine',
      sesport: 'SeSport',
      gaming: 'Gaming',
      sesportArticles: {
        item1: {
          title: 'Меркато: Этот тренер Лиги 1, который мог...',
          date: '12 мая 2026 г.',
        },
        item2: {
          title: 'Лига 1: для ПСЖ титул стойкости после...',
          date: '11 мая 2026 г.',
        },
        item3: {
          title: 'Лига чемпионов: битва титанов в полуфинале...',
          date: '10 мая 2026 г.',
        },
      },
      gamingArticles: {
        item1: {
          title: 'Valorant Champions 2026: взгляд назад...',
          date: '12 мая 2026 г.',
        },
        item2: {
          title: 'Xbox Game Pass: новейшие игры января...',
          date: '11 мая 2026 г.',
        },
        item3: {
          title: 'PS5 Pro: все, что мы знаем о следующем...',
          date: '10 мая 2026 г.',
        },
      },
    },
    musique: {
      title: 'Skoleom Music',
      recognizing: 'Распознавание в процессе',
      listening: 'Вы слушаете:',
      song: 'WHERE SHE GOES — Bad Bunny',
    },
    travel: {
      title: 'Skoleom Travel',
      destination: 'Место назначения :',
      flights: 'Бронирование авиабилетов',
      hotels: 'Бронирование отеля',
      cities: {
        tokyo: 'Tokyo',
        santorin: 'Santorin',
        newYork: 'New York',
        paris: 'Paris',
      },
      vols: {
        af: {
          name: 'Air France',
          price: '896 €',
        },
        jl: {
          name: 'Japan Airlines',
          price: '920 €',
        },
        ek: {
          name: 'Emirates',
          price: '995 €',
        },
        qr: {
          name: 'Qatar Airw.',
          price: '847 €',
        },
      },
      hotelsList: {
        imperial: {
          name: 'Imperial Med',
          price: '132 €/ночь',
        },
        shine: {
          name: 'Shine',
          price: '205 €/ночь',
        },
        greco: {
          name: 'El Greco Resort',
          price: '203 €/ночь',
        },
        karterado: {
          name: 'Hotel Karterado',
          price: '247 €/ночь',
        },
      },
    },
    banner: {
      watchNow: 'Смотреть сейчас',
    },
  },
};

const sesyncSw: SesyncTranslations = {
  page: {
    hero: {
      pill: 'Inapatikana kwenye vivinjari vyote 6 vikubwa · Bila malipo',
      line1: 'Kila video',
      line2Before: 'ni a',
      line2Highlight: 'duka',
      line3: 'kuishi.',
      description:
        'SeSync ni kiendelezi ambacho hubadilisha video yoyote - kwenye Netflix, YouTube, Prime Video, Disney+ na majukwaa 2,000+ - kuwa matumizi ya ununuzi. Gusa skrini. Nunua. Bila kuelekezwa kwingine.',
      installCta: 'Sakinisha SeSync',
      howCta: 'Tazama jinsi inavyofanya kazi',
    },
    stats: {
      ott: {
        n: '2,000+',
        l: 'majukwaa ya OTT',
      },
      sites: {
        n: 'bilioni 1+',
        l: 'Maeneo yaliyofunikwa',
      },
      browsers: {
        n: '6',
        l: 'Vivinjari',
      },
      noRedirect: {
        n: '0',
        l: 'Elekeza kwingine',
      },
    },
    marquee: {
      ariaLabel: 'Mifumo ya OTT iliyowezeshwa na SeSync',
      moreOtt: '+2000 OTT',
    },
    how: {
      eyebrow: 'Kanuni',
      titleBefore: 'Hatua tatu ',
      titleHighlight: 'ishara',
      titleAfter: '. Uzoefu wa kipekee.',
      description:
        'Hakuna kujifunza kunahitajika. SeSync huwashwa mara tu video inapoanza, hutambua vitu kwa wakati halisi na inatoa ununuzi moja kwa moja ndani ya kichezaji.',
    },
    steps: {
      step1: {
        title: 'Sakinisha SeSync bila malipo.',
        text: 'Pakua kiendelezi kutoka kwa duka rasmi la kivinjari chako. Mbofyo mmoja, sekunde 30. Aikoni ya SeSync inaonekana mara moja kwenye upau wako wa vidhibiti.',
      },
      step2: {
        title: 'Cheza video yoyote.',
        text: 'Netflix, YouTube, Video Kuu, Twitch, au jukwaa lolote la OTT. SeSync huamka kiotomatiki na kutambua bidhaa zinazoonekana kwenye skrini, bila kupunguza kasi ya kichezaji.',
      },
      step3: {
        title: 'Gusa. Nunua. Ni hayo tu.',
        text: 'Telezesha kidole au kipanya chako juu ya kitu. Karatasi ya bidhaa inaonekana. Ongeza kwenye rukwama kwa mbofyo mmoja. Video inaendelea kucheza chinichini. Hakuna uelekezaji kwingine.',
      },
    },
    mockup: {
      eyebrow: 'Magic Touch',
      titleBefore: 'Hivi ndivyo ',
      titleHighlight: 'kinatokea',
      titleAfter: '.',
      description:
        'Mtumiaji anaendesha kidole chake juu ya sneaker. SeSync inabainisha Toleo la Anga la Gulf Runner. Bei, saizi, usafirishaji, ongeza kwenye rukwama - yote yapo, bila kuondoka kwenye Netflix.',
    },
    universes: {
      eyebrow: 'Ulimwengu 8',
      titleBefore: 'Upau mmoja ',
      titleHighlight: 'upau',
      titleAfter: '. Uwezekano nane.',
      description:
        'Upande wa kulia wa kila video, upau wa ikoni hufungua ulimwengu uliojitolea - bidhaa, muziki, usafiri, michezo, msaidizi wa AI. Zote za muktadha, zote zimesawazishwa.',
      music: {
        title: 'Muziki',
        desc: 'Tambua wimbo na ufungue Spotify, Apple Music au Deezer kwa mbofyo mmoja.',
      },
      travel: {
        title: 'Safari',
        desc: 'Weka nafasi ya ndege na hoteli kutoka unakoenda kuonyeshwa kwenye skrini.',
      },
      sport: {
        title: 'Michezo',
        desc: 'Sneakers, jezi, vifaa vya michezo - vifaa vinavyoonekana kwenye video.',
      },
      gaming: {
        title: 'Gaming',
        desc: 'Michezo ndogo, kurejesha pesa, kuponi za ofa ili kufungua unapocheza.',
      },
      fashion: {
        title: 'Mitindo',
        desc: 'Nguo zilizogunduliwa na AI inayoonekana - inayolingana kabisa au sawa.',
      },
      magazine: {
        title: 'Magazine',
        desc: 'Makala yanayohusiana na maudhui, vitabu vya kutazama na hadithi za chapa.',
      },
      cart: {
        title: 'Kikapu cha Universal',
        desc: 'Kikapu kimoja cha video, majukwaa na vichupo vyako vyote.',
      },
      gpt: {
        title: 'Skoleom GPT',
        desc: 'Msaidizi wako wa ununuzi wa AI - uliza swali lolote.',
      },
    },
    why: {
      eyebrow: 'Kwa nini SeSync',
      titleBefore: 'Teknolojia ',
      titleHighlight: 'teknolojia',
      titleAfter: 'ambayo haipo popote pengine.',
    },
    pillars: {
      patent: {
        title: 'Hati miliki duniani kote.',
        text: 'Teknolojia yetu ya kutambua kitu cha wakati halisi katika mtiririko wa video inalindwa na hataza tatu za kimataifa (FR2201013A, EP4473738, WO2023148295A1). Hiki ndicho kinachofanya SeSync isishindwe.',
      },
      performance: {
        title: 'Athari sifuri kwenye video zako.',
        text: 'SeSync hutumia kuongeza kasi ya GPU na hufanya kazi katika fremu iliyotengwa. Video zako za 4K na HDR hazipunguzi kasi. Utambuzi ni wa papo hapo, hauonekani, wa asili.',
      },
      privacy: {
        title: 'GDPR - kwanza. Utawala wa Ulaya.',
        text: 'Data yako inasalia kwenye Skoleom Cloud, miundombinu huru barani Ulaya. Hakuna mauzo tena kwa wahusika wengine, malipo yaliyosimbwa kwa njia fiche, kiwango cha 1 cha PCI-DSS kinatii.',
      },
      free: {
        title: 'Bure. Milele.',
        text: 'SeSync ni na itasalia bila malipo. Hakuna usajili, hakuna utangazaji, hakuna mkusanyiko wa data iliyouzwa tena. Mfano wetu: tume ya mauzo kutoka kwa chapa za washirika.',
      },
    },
    browsers: {
      eyebrow: 'Utangamano',
      titleBefore: 'Inapatikana',
      titleHighlight: 'kila mahali',
      titleAfter: '.',
      description:
        'SeSync inaoana na vivinjari 6 vikuu ambavyo vinashughulikia zaidi ya 99% ya soko la kimataifa. Ufungaji mmoja, kila mahali.',
      available: 'Inapatikana',
      soon: 'Inakuja hivi karibuni',
    },
    faq: {
      eyebrow: 'Maswali',
      titleBefore: ' ',
      titleHighlight: 'majibu',
      titleAfter: 'jambo hilo.',
      free: {
        q: 'Je, SeSync ni bure kabisa?',
        a: 'Ndiyo, bila malipo milele, bila usajili uliofichwa. Mapato yetu yanatokana tu na kamisheni za mauzo yanayofanywa kupitia kiendelezi, kinacholipwa na chapa za washirika.',
      },
      security: {
        q: 'Je, data yangu ni salama?',
        a: 'SeSync ni GDPR-ya kwanza. Data yako inapangishwa Ulaya kwenye Skoleom Cloud, haiuzwi tena kwa wahusika wengine. Malipo yamesimbwa kwa njia fiche na PCI-DSS Level 1 inatii.',
      },
      platforms: {
        q: 'SeSync hufanya kazi kwenye majukwaa gani?',
        a: 'SeSync hutambua kiotomatiki zaidi ya majukwaa 2,000 ya OTT (Netflix, YouTube, Prime Video, Disney+, HBO, Twitch, n.k.) na zaidi ya tovuti bilioni washirika.',
      },
      performance: {
        q: 'Je, hii inapunguza kasi ya video zangu?',
        a: 'No. SeSync imeundwa ili isiathiri utendaji wa uchezaji, hata katika 4K HDR. Utambuzi wetu hutumia kuongeza kasi ya GPU katika fremu iliyotengwa.',
      },
      account: {
        q: 'Je, unahitaji kuunda akaunti?',
        a: 'Kugundua vidonge: hapana. Kununua, kuokoa vipendwa au kutumia kikapu cha ulimwengu wote: ndiyo, akaunti ya bure ya Skoleom inatosha.',
      },
      mobile: {
        q: 'Je, SeSync inafanya kazi kwenye simu ya mkononi?',
        a: 'Kwa kivinjari, ugani hufanya kazi kwenye eneo-kazi. Kwa simu ya mkononi, programu ya Skoleom iOS na Android inatoa matumizi sawa, chinichini.',
      },
    },
    cta: {
      titleBefore: 'Tazama. Gusa.',
      titleHighlight: 'Nunua.',
      description:
        'Jiunge na mapinduzi ya Media Retail. Sakinisha SeSync bila malipo, na ufanye kila video kuwa duka la moja kwa moja.',
      install: 'Sakinisha SeSync - Bila Malipo',
    },
  },
  mockup: {
    sidebar: {
      params: 'Mipangilio',
      favoris: 'Vipendwa',
      panier: 'Kikapu',
      compte: 'Akaunti',
      magazine: 'Magazine',
      musique: 'Muziki',
      travel: 'Safari',
    },
    episode: 'Drive to Survive · S6E2',
    capsule: 'Kapsuli',
  },
  capsule: {
    brand: 'Nike',
    videoTitle: 'Nike Free Run Rouge | Unboxing & Review',
    productName: 'Nike Free Run Rouge',
    price: '89.99€',
    freeShipping: 'Uwasilishaji BILA MALIPO',
    description:
      'Nike Free Run Red — Furahia mikunjo ya asili na kunyumbulika kwa kiwango cha juu zaidi ukitumia kiatu hiki chepesi cha kukimbia. Mesh ya kupumua, pekee ya mpira inayodumu.',
    buy: 'Nunua',
    added: '✓ Imeongezwa',
    tabInfos: 'Maelezo',
    tabSimilaires: 'Sawa',
    infoCards: {
      card1: 'Ukusanyaji wa Mbio za Bure za Nike - Spring 2026',
      card2: 'Nike Free Run Rouge | Unboxing & Review',
    },
    similaires: {
      item1: {
        name: 'Nike Air Max 270',
        price: '129€',
      },
      item2: {
        name: 'Adidas Ultra Boost 22',
        price: '159€',
      },
      item3: {
        name: 'Puma RS-X Street',
        price: '99€',
      },
    },
  },
  sidepages: {
    bottomNav: {
      favoris: 'Vipendwa',
      panier: 'Kikapu',
      compte: 'Akaunti',
      magazine: 'Magazine',
    },
    params: {
      title: 'Mipangilio',
      language: 'Lugha',
      languageHint: 'Chagua lugha ya kiendelezi',
      english: '🇬🇧 English',
      french: '🇫🇷 Français',
      display: 'Onyesho',
      displayOptions: {
        button: {
          label: 'Button',
          desc: 'Onyesho la capsule katika fomu ya kifungo',
        },
        timeline: {
          label: 'Timeline',
          desc: 'Inaonyesha vidonge kwenye kalenda ya matukio',
        },
        magictouch: {
          label: 'Magic Touch',
          desc: 'Kuongeza bidhaa moja kwa moja kwa hover',
        },
      },
      buttonShape: 'Umbo la kifungo',
      pillLabel: '· Capsule',
      pillDesc: 'Kitufe chenye maandishi',
      logoDesc: 'Aikoni ya duru ya busara',
    },
    favoris: {
      title: 'Vipendwa',
      add: 'Ongeza',
      items: {
        item1: {
          name: 'Air Max Plus PSG Shoes',
          price: '312.00€',
        },
        item2: {
          name: "Men's Michael Jordan Black Chicago Bulls",
          price: '360€',
        },
        item3: {
          name: 'The 25X Sneakers - BB2 For Man',
          price: '310€',
        },
      },
    },
    panier: {
      title: 'Kikapu changu',
      options: 'Options',
      coupon: 'Kuponi ya punguzo',
      promoPlaceholder: 'MSIMBO WA PROMO',
      apply: 'Omba',
      subtotal: 'Jumla ndogo',
      discount: 'Kupunguza',
      shipping: 'Usafirishaji',
      shippingNote: 'Imehesabiwa katika hatua inayofuata',
      total: 'Total',
      vatNote: 'VAT imejumuishwa · Uwasilishaji umehesabiwa katika hatua inayofuata',
      validate: 'Thibitisha kikapu changu',
      amazon: 'Agiza kwenye Amazon',
      items: {
        item1: {
          name: 'The 25X Pants For Man',
          price: '105.00 €',
        },
        item2: {
          name: 'The 25X T-shirt For Man',
          price: '54.00 €',
        },
        item3: {
          name: 'The 25X Pants For Man',
          price: '150.00 €',
        },
      },
      subtotalValue: '473.33 €',
      discountValue: '-56.80 €',
      totalValue: '511.20 €',
    },
    produit: {
      title: 'Bidhaa',
      name: 'Nike Free Run Rouge',
      price: '89.99€',
      color: 'Nyekundu',
      size: '42',
      material:
        'Utungaji wa nyenzo Juu: mesh ya kupumua; bitana na insole: vifaa vya synthetic; outsole: mpira. Mpira wa nyenzo pekee. Urefu wa chini wa shina. Mesh nyenzo za nje. Nchi ya asili ya Vietnam.',
      about:
        'Kuhusu bidhaa hii - Mto wa Nike Bila malipo kwa urahisi wa asili. Nyepesi povu midsole kwa mto laini. Ubunifu mwepesi unaofaa kwa kukimbia na matumizi ya kila siku.',
      addToCart: 'Ongeza kwenye rukwama',
      removeFromFavorites: 'Ondoa kutoka kwa vipendwa',
    },
    compte: {
      title: 'Akaunti Yangu',
      member: '· Mwanachama Skoleom',
      menu: {
        orders: {
          label: 'Maagizo',
          desc: 'Ufuatiliaji na historia',
        },
        addresses: {
          label: 'Anwani',
          desc: 'Uwasilishaji na ankara',
        },
        details: {
          label: 'Maelezo ya akaunti',
          desc: 'Jina, barua pepe, simu',
        },
        security: {
          label: 'Usalama',
          desc: 'Nenosiri',
        },
      },
      logout: 'Tenganisha',
    },
    magazine: {
      title: 'Magazine',
      sesport: 'SeSport',
      gaming: 'Gaming',
      sesportArticles: {
        item1: {
          title: 'Mercato: Kocha huyu wa Ligue 1 ambaye angeweza...',
          date: 'Mei 12, 2026',
        },
        item2: {
          title: 'Ligue 1: kwa PSG, taji la uthabiti baada ya...',
          date: 'Mei 11, 2026',
        },
        item3: {
          title: 'Ligi ya Mabingwa: mpambano wa wababe katika nusu fainali...',
          date: 'Mei 10, 2026',
        },
      },
      gamingArticles: {
        item1: {
          title: 'Mabingwa wa Shujaa 2026: Kuangalia nyuma...',
          date: 'Mei 12, 2026',
        },
        item2: {
          title: 'Xbox Game Pass: michezo ya hivi punde zaidi ya Januari...',
          date: 'Mei 11, 2026',
        },
        item3: {
          title: 'PS5 Pro: kila kitu tunachojua kuhusu ijayo ...',
          date: 'Mei 10, 2026',
        },
      },
    },
    musique: {
      title: 'Skoleom Music',
      recognizing: 'Utambuzi unaendelea',
      listening: 'Unasikiliza:',
      song: 'WHERE SHE GOES — Bad Bunny',
    },
    travel: {
      title: 'Skoleom Travel',
      destination: 'Lengwa :',
      flights: 'Uhifadhi wa ndege',
      hotels: 'Uhifadhi wa hoteli',
      cities: {
        tokyo: 'Tokyo',
        santorin: 'Santorin',
        newYork: 'New York',
        paris: 'Paris',
      },
      vols: {
        af: {
          name: 'Air France',
          price: '896 €',
        },
        jl: {
          name: 'Japan Airlines',
          price: '920 €',
        },
        ek: {
          name: 'Emirates',
          price: '995 €',
        },
        qr: {
          name: 'Qatar Airw.',
          price: '847 €',
        },
      },
      hotelsList: {
        imperial: {
          name: 'Imperial Med',
          price: '€132/usiku',
        },
        shine: {
          name: 'Shine',
          price: '€205/usiku',
        },
        greco: {
          name: 'El Greco Resort',
          price: '€203/usiku',
        },
        karterado: {
          name: 'Hotel Karterado',
          price: '€247/usiku',
        },
      },
    },
    banner: {
      watchNow: 'Tazama sasa',
    },
  },
};
export const sesyncPageTranslations: Record<LanguageCode, SesyncTranslations> = {
  fr: sesyncFr,
  en: sesyncEn,
  es: sesyncEs,
  de: sesyncDe,
  it: sesyncIt,
  nl: sesyncNl,
  pt: sesyncPt,
  ar: sesyncAr,
  hi: sesyncHi,
  zh: sesyncZh,
  id: sesyncId,
  ru: sesyncRu,
  sw: sesyncSw,
};
