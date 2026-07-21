/**
 * Traductions de la page native « Audiovisual Store Page » (multilingue).
 * La source FR vit ici (FR) ; les surcouches par langue dans I18N.
 * Toute clé absente retombe sur le FR (aucune régression).
 *
 * Conservé tel quel (hors i18n) : noms de marque/produit (« Skoleom », « SeSync »,
 * « Monetizer Studio », « Watch. Touch. Buy. », « Audiovisual Store Page »…) et
 * tous les chiffres / prix / pourcentages, gérés directement dans le markup.
 */

export interface AudiovisualStorePageStrings {
  hero: {
    h1Line1: string;
    h1Line2: string;
    h1Line3: string; // « boutique »
    h1Line4: string; // « audiovisuelle »
    sub1: string;
    subNb: string;
    imgAlt: string;
  };
  principe: {
    eyebrow: string;
    h2a: string; // « De la vue à l'achat, »
    h2b: string; // « sans quitter le »
    h2mark: string; // « contenu »
    steps: { title: string; text: string }[];
    imgAlt: string;
    shopHead: string; // « Produits similaires »
    shopHeadSub: string; // « SeSync · 4 articles détectés à 00:42 »
    products: { brand: string; name: string; detail: string; stock: string }[];
    cartEmpty: string;
    touchToBuy: string;
    stats: { label: string }[];
  };
  platforms: {
    eyebrow: string;
    h2: string;
    lead: string;
    flowFinal: string; // « Une Audiovisual Store Page »
    flowAgency: string; // « Agence créative »
    pillars: string[];
    whyTitle: string;
    whyStats: { label: string }[];
    note: string;
  };
  contains: {
    eyebrow: string;
    h2: string;
    feats: { title: string; text: string }[];
    resultTag: string;
    resultText: string;
    monetizerAlt: string;
  };
  offers: {
    eyebrow: string;
    h2: string;
    lead: string;
    prices: {
      name: string;
      seg: string;
      monthLabel: string;
      items: string[];
      badge?: string;
    }[];
    includeLabel: string;
    includeText: string; // partie avant le <strong>
    includeStrong: string; // dans le <strong>
    note: string;
  };
  finalCta: {
    eyebrow: string;
    h2a: string; // « Lancez dès aujourd'hui »
    h2b: string; // « votre »
    h2g1: string; // « audiovisual »
    h2g2: string; // « store page »
    sub: string;
    cta: string; // « Inscription »
    imgAlt: string;
  };
}

const FR: AudiovisualStorePageStrings = {
  hero: {
    h1Line1: 'Votre marque',
    h1Line2: 'devient une',
    h1Line3: 'boutique',
    h1Line4: 'audiovisuelle',
    sub1: 'Fini la simple page produit. Chaque contenu devient un canal de vente direct —',
    subNb: 'tout ce que l’on regarde devient instantanément achetable.',
    imgAlt: 'Marque transformée en boutique audiovisuelle',
  },
  principe: {
    eyebrow: 'Le principe',
    h2a: 'De la vue à l’achat,',
    h2b: 'sans quitter le',
    h2mark: 'contenu',
    steps: [
      {
        title: 'Regardez',
        text: 'L’utilisateur regarde un live, un replay, une story, un film ou un extrait TV — comme d’habitude.',
      },
      {
        title: 'Touchez',
        text: 'L’IA reconnaît l’objet et affiche une capsule à la demande. Ajout au panier sans interrompre le flux.',
      },
      {
        title: 'Achetez',
        text: 'Skoleom SeSync et Skoleom Pay exécutent le paiement dans la vidéo. Le spectateur reprend au même time code.',
      },
    ],
    imgAlt: 'Contenu skoléomisé — de la vue à l’achat',
    shopHead: 'Produits similaires',
    shopHeadSub: 'SeSync · 4 articles détectés à 00:42',
    products: [
      {
        brand: 'Arena',
        name: 'Maillot une pièce',
        detail: 'Taille M · Bordeaux',
        stock: 'En stock',
      },
      { brand: 'Speedo', name: 'Lunettes Fastskin', detail: 'Miroir · Adulte', stock: 'En stock' },
      { brand: 'TYR', name: 'Bonnet silicone', detail: 'Noir · Uni', stock: 'En stock' },
      { brand: 'Nike', name: 'Serviette microfibre', detail: '70 × 140 cm', stock: '3 restants' },
    ],
    cartEmpty: 'Panier vide',
    touchToBuy: 'Toucher pour acheter',
    stats: [
      { label: 'Pays de distribution' },
      { label: 'Plateformes OTT' },
      { label: 'Sites web connectés' },
      { label: 'Vidéos skoléomisées / jour' },
    ],
  },
  platforms: {
    eyebrow: 'Une seule plateforme',
    h2: '5 plateformes en une seule',
    lead: 'Aujourd’hui une marque jongle entre cinq outils. Skoleom les réunit : diffusion vidéo, intégration produit, paiement dans la vidéo, distribution internationale et monétisation.',
    flowFinal: 'Une Audiovisual Store Page',
    flowAgency: 'Agence créative',
    pillars: ['Votre média', 'Votre catalogue', 'Votre boutique', 'Votre chaîne de vente'],
    whyTitle: 'Pourquoi la vidéo vend jusqu’à 10× plus que l’e-commerce classique',
    whyStats: [
      { label: 'de conversion' },
      { label: 'd’engagement' },
      { label: 'des consommateurs influencés' },
    ],
    note: '*Source : loopexdigital · Firework · Storyly.io',
  },
  contains: {
    eyebrow: 'Votre page, chaque mois',
    h2: 'Ce que contient votre Store Page',
    feats: [
      {
        title: '25 vidéos publiées par mois',
        text: 'Les contenus OTT les plus performants (Netflix, Disney+, YouTube, TikTok) intégrés selon votre zone et votre stratégie.',
      },
      {
        title: 'Jusqu’à 625 produits par mois',
        text: 'Jusqu’à 25 produits intégrés par vidéo, présentés avec votre marque.',
      },
      {
        title: '15 capsules de marque par vidéo',
        text: 'Sur 25 capsules par vidéo, 15 vous sont réservées ; 10 reviennent aux produits Skoleom.',
      },
      {
        title: 'Presse & jeux concours inclus',
        text: '25 articles de presse, un communiqué et un jeu concours chaque mois.',
      },
    ],
    resultTag: 'Le résultat',
    resultText:
      'Votre page devient un média, un catalogue et un point de vente — réunis en un seul endroit, pilotés depuis Monetizer Studio®.',
    monetizerAlt: 'Monetizer Studio — pilotez votre Store Page',
  },
  offers: {
    eyebrow: 'Abonnement — Créez votre Audiovisual Store Page',
    h2: '3 offres, 1 mission',
    lead: 'Des Audiovisual Store Pages pensées pour les marques ambitieuses, les créateurs visionnaires et les projets en pleine croissance.',
    prices: [
      {
        name: 'Starter',
        seg: 'Lancer votre présence',
        monthLabel: '/ mois',
        items: [
          '5 contenus / mois',
          'Tableau de bord standard (vues, clics)',
          'Capsules produits',
          'Design standard',
        ],
      },
      {
        name: 'Growth',
        seg: 'Accélérez votre croissance',
        monthLabel: '/ mois',
        badge: 'Le plus populaire',
        items: [
          '10 contenus / mois',
          'Tableau de bord avancé (conversions)',
          'SeSync : 5 plateformes de redirection',
          'Capsules produits',
        ],
      },
      {
        name: 'Premium',
        seg: 'Dominez votre marché',
        monthLabel: '/ mois',
        items: [
          '25 contenus / mois',
          'SeSync illimité, tous territoires',
          'Sponsoring de célébrités & sportifs*',
          'Design personnalisé + A/B testing',
        ],
      },
    ],
    includeLabel: 'Toutes les offres incluent',
    includeText:
      'Votre Store Page à votre effigie · hébergement & maintenance · sécurité & RGPD · SEO / SEA · support 7j/7 · analytics avancées · ',
    includeStrong: 'commission Skoleom de 20 % sur les ventes.',
    note: 'Montants HT, par marque. Une part des revenus est redistribuée aux créateurs de contenus et aux propriétaires de boutiques audiovisuelles. *Pour le sponsoring de boutiques audiovisuelles de personnalités, des offres dédiées sont disponibles sur demande.',
  },
  finalCta: {
    eyebrow: 'Le futur du e-commerce est audiovisuel',
    h2a: 'Lancez dès aujourd’hui',
    h2b: 'votre',
    h2g1: 'audiovisual',
    h2g2: 'store page',
    sub: 'Votre marque. Vos contenus. Une nouvelle manière d’être vu, touché et acheté.',
    cta: 'Inscription',
    imgAlt: 'Lancez votre Audiovisual Store Page',
  },
};

const en: Partial<AudiovisualStorePageStrings> = {
  hero: {
    h1Line1: 'Your brand',
    h1Line2: 'becomes an',
    h1Line3: 'audiovisual',
    h1Line4: 'store',
    sub1: 'No more plain product pages. Every piece of content becomes a direct sales channel —',
    subNb: 'everything you watch becomes instantly shoppable.',
    imgAlt: 'Brand turned into an audiovisual store',
  },
  principe: {
    eyebrow: 'The principle',
    h2a: 'From viewing to buying,',
    h2b: 'without leaving the',
    h2mark: 'content',
    steps: [
      {
        title: 'Watch',
        text: 'The user watches a live stream, a replay, a story, a movie or a TV clip — as usual.',
      },
      {
        title: 'Touch',
        text: 'AI recognizes the item and shows a capsule on demand. Add to cart without interrupting the stream.',
      },
      {
        title: 'Buy',
        text: 'Skoleom SeSync and Skoleom Pay process the payment inside the video. The viewer resumes at the same time code.',
      },
    ],
    imgAlt: 'Skoleomized content — from viewing to buying',
    shopHead: 'Similar products',
    shopHeadSub: 'SeSync · 4 items detected at 00:42',
    products: [
      {
        brand: 'Arena',
        name: 'One-piece swimsuit',
        detail: 'Size M · Burgundy',
        stock: 'In stock',
      },
      { brand: 'Speedo', name: 'Fastskin goggles', detail: 'Mirror · Adult', stock: 'In stock' },
      { brand: 'TYR', name: 'Silicone cap', detail: 'Black · Plain', stock: 'In stock' },
      { brand: 'Nike', name: 'Microfiber towel', detail: '70 × 140 cm', stock: '3 left' },
    ],
    cartEmpty: 'Empty cart',
    touchToBuy: 'Touch to buy',
    stats: [
      { label: 'Distribution countries' },
      { label: 'OTT platforms' },
      { label: 'Connected websites' },
      { label: 'Skoleomized videos / day' },
    ],
  },
  platforms: {
    eyebrow: 'One single platform',
    h2: '5 platforms in one',
    lead: 'Today a brand juggles five tools. Skoleom brings them together: video streaming, product integration, in-video payment, international distribution and monetization.',
    flowFinal: 'One Audiovisual Store Page',
    flowAgency: 'Creative agency',
    pillars: ['Your media', 'Your catalog', 'Your store', 'Your sales channel'],
    whyTitle: 'Why video sells up to 10× more than traditional e-commerce',
    whyStats: [
      { label: 'conversion' },
      { label: 'engagement' },
      { label: 'of consumers influenced' },
    ],
    note: '*Source: loopexdigital · Firework · Storyly.io',
  },
  contains: {
    eyebrow: 'Your page, every month',
    h2: 'What your Store Page includes',
    feats: [
      {
        title: '25 videos published per month',
        text: 'The top-performing OTT content (Netflix, Disney+, YouTube, TikTok) integrated according to your region and strategy.',
      },
      {
        title: 'Up to 625 products per month',
        text: 'Up to 25 products integrated per video, presented with your brand.',
      },
      {
        title: '15 brand capsules per video',
        text: 'Out of 25 capsules per video, 15 are reserved for you; 10 go to Skoleom products.',
      },
      {
        title: 'Press & giveaways included',
        text: '25 press articles, a press release and a giveaway every month.',
      },
    ],
    resultTag: 'The result',
    resultText:
      'Your page becomes a media outlet, a catalog and a point of sale — all in one place, managed from Monetizer Studio®.',
    monetizerAlt: 'Monetizer Studio — manage your Store Page',
  },
  offers: {
    eyebrow: 'Subscription — Create your Audiovisual Store Page',
    h2: '3 plans, 1 mission',
    lead: 'Audiovisual Store Pages designed for ambitious brands, visionary creators and fast-growing projects.',
    prices: [
      {
        name: 'Starter',
        seg: 'Launch your presence',
        monthLabel: '/ month',
        items: [
          '5 contents / month',
          'Standard dashboard (views, clicks)',
          'Product capsules',
          'Standard design',
        ],
      },
      {
        name: 'Growth',
        seg: 'Accelerate your growth',
        monthLabel: '/ month',
        badge: 'Most popular',
        items: [
          '10 contents / month',
          'Advanced dashboard (conversions)',
          'SeSync: 5 redirection platforms',
          'Product capsules',
        ],
      },
      {
        name: 'Premium',
        seg: 'Dominate your market',
        monthLabel: '/ month',
        items: [
          '25 contents / month',
          'Unlimited SeSync, all territories',
          'Celebrity & athlete sponsorship*',
          'Custom design + A/B testing',
        ],
      },
    ],
    includeLabel: 'All plans include',
    includeText:
      'Your branded Store Page · hosting & maintenance · security & GDPR · SEO / SEA · 24/7 support · advanced analytics · ',
    includeStrong: '20% Skoleom commission on sales.',
    note: 'Amounts excl. tax, per brand. A share of revenue is redistributed to content creators and audiovisual store owners. *For the sponsoring of celebrity audiovisual stores, dedicated offers are available on request.',
  },
  finalCta: {
    eyebrow: 'The future of e-commerce is audiovisual',
    h2a: 'Launch your',
    h2b: '',
    h2g1: 'audiovisual',
    h2g2: 'store page',
    sub: 'Your brand. Your content. A new way to be seen, touched and bought.',
    cta: 'Sign up',
    imgAlt: 'Launch your Audiovisual Store Page',
  },
};

const es: Partial<AudiovisualStorePageStrings> = {
  hero: {
    h1Line1: 'Tu marca',
    h1Line2: 'se convierte en una',
    h1Line3: 'tienda',
    h1Line4: 'audiovisual',
    sub1: 'Se acabó la simple página de producto. Cada contenido se convierte en un canal de venta directo —',
    subNb: 'todo lo que se mira se vuelve comprable al instante.',
    imgAlt: 'Marca transformada en tienda audiovisual',
  },
  principe: {
    eyebrow: 'El principio',
    h2a: 'De ver a comprar,',
    h2b: 'sin salir del',
    h2mark: 'contenido',
    steps: [
      {
        title: 'Mira',
        text: 'El usuario mira un directo, una repetición, una historia, una película o un fragmento de TV — como siempre.',
      },
      {
        title: 'Toca',
        text: 'La IA reconoce el objeto y muestra una cápsula bajo demanda. Añadir al carrito sin interrumpir el flujo.',
      },
      {
        title: 'Compra',
        text: 'Skoleom SeSync y Skoleom Pay ejecutan el pago dentro del vídeo. El espectador retoma en el mismo time code.',
      },
    ],
    imgAlt: 'Contenido skoleomizado — de ver a comprar',
    shopHead: 'Productos similares',
    shopHeadSub: 'SeSync · 4 artículos detectados a las 00:42',
    products: [
      {
        brand: 'Arena',
        name: 'Bañador de una pieza',
        detail: 'Talla M · Burdeos',
        stock: 'En stock',
      },
      { brand: 'Speedo', name: 'Gafas Fastskin', detail: 'Espejo · Adulto', stock: 'En stock' },
      { brand: 'TYR', name: 'Gorro de silicona', detail: 'Negro · Liso', stock: 'En stock' },
      { brand: 'Nike', name: 'Toalla de microfibra', detail: '70 × 140 cm', stock: 'Quedan 3' },
    ],
    cartEmpty: 'Carrito vacío',
    touchToBuy: 'Toca para comprar',
    stats: [
      { label: 'Países de distribución' },
      { label: 'Plataformas OTT' },
      { label: 'Sitios web conectados' },
      { label: 'Vídeos skoleomizados / día' },
    ],
  },
  platforms: {
    eyebrow: 'Una sola plataforma',
    h2: '5 plataformas en una',
    lead: 'Hoy una marca hace malabares con cinco herramientas. Skoleom las reúne: difusión de vídeo, integración de producto, pago dentro del vídeo, distribución internacional y monetización.',
    flowFinal: 'Una Audiovisual Store Page',
    flowAgency: 'Agencia creativa',
    pillars: ['Tu medio', 'Tu catálogo', 'Tu tienda', 'Tu canal de venta'],
    whyTitle: 'Por qué el vídeo vende hasta 10× más que el e-commerce clásico',
    whyStats: [
      { label: 'de conversión' },
      { label: 'de interacción' },
      { label: 'de consumidores influenciados' },
    ],
    note: '*Fuente: loopexdigital · Firework · Storyly.io',
  },
  contains: {
    eyebrow: 'Tu página, cada mes',
    h2: 'Lo que incluye tu Store Page',
    feats: [
      {
        title: '25 vídeos publicados al mes',
        text: 'Los contenidos OTT de mayor rendimiento (Netflix, Disney+, YouTube, TikTok) integrados según tu zona y tu estrategia.',
      },
      {
        title: 'Hasta 625 productos al mes',
        text: 'Hasta 25 productos integrados por vídeo, presentados con tu marca.',
      },
      {
        title: '15 cápsulas de marca por vídeo',
        text: 'De 25 cápsulas por vídeo, 15 están reservadas para ti; 10 corresponden a los productos Skoleom.',
      },
      {
        title: 'Prensa y sorteos incluidos',
        text: '25 artículos de prensa, un comunicado y un sorteo cada mes.',
      },
    ],
    resultTag: 'El resultado',
    resultText:
      'Tu página se convierte en un medio, un catálogo y un punto de venta — reunidos en un solo lugar, gestionados desde Monetizer Studio®.',
    monetizerAlt: 'Monetizer Studio — gestiona tu Store Page',
  },
  offers: {
    eyebrow: 'Suscripción — Crea tu Audiovisual Store Page',
    h2: '3 planes, 1 misión',
    lead: 'Audiovisual Store Pages pensadas para marcas ambiciosas, creadores visionarios y proyectos en plena expansión.',
    prices: [
      {
        name: 'Starter',
        seg: 'Lanza tu presencia',
        monthLabel: '/ mes',
        items: [
          '5 contenidos / mes',
          'Panel estándar (vistas, clics)',
          'Cápsulas de producto',
          'Diseño estándar',
        ],
      },
      {
        name: 'Growth',
        seg: 'Acelera tu crecimiento',
        monthLabel: '/ mes',
        badge: 'El más popular',
        items: [
          '10 contenidos / mes',
          'Panel avanzado (conversiones)',
          'SeSync: 5 plataformas de redirección',
          'Cápsulas de producto',
        ],
      },
      {
        name: 'Premium',
        seg: 'Domina tu mercado',
        monthLabel: '/ mes',
        items: [
          '25 contenidos / mes',
          'SeSync ilimitado, todos los territorios',
          'Patrocinio de celebridades y deportistas*',
          'Diseño personalizado + test A/B',
        ],
      },
    ],
    includeLabel: 'Todos los planes incluyen',
    includeText:
      'Tu Store Page con tu imagen · alojamiento y mantenimiento · seguridad y RGPD · SEO / SEA · soporte 24/7 · analíticas avanzadas · ',
    includeStrong: 'comisión Skoleom del 20 % sobre las ventas.',
    note: 'Importes sin IVA, por marca. Una parte de los ingresos se redistribuye a los creadores de contenido y a los propietarios de tiendas audiovisuales. *Para el patrocinio de tiendas audiovisuales de personalidades, hay ofertas dedicadas disponibles bajo petición.',
  },
  finalCta: {
    eyebrow: 'El futuro del e-commerce es audiovisual',
    h2a: 'Lanza hoy mismo',
    h2b: 'tu',
    h2g1: 'audiovisual',
    h2g2: 'store page',
    sub: 'Tu marca. Tus contenidos. Una nueva manera de ser visto, tocado y comprado.',
    cta: 'Inscripción',
    imgAlt: 'Lanza tu Audiovisual Store Page',
  },
};

const de: Partial<AudiovisualStorePageStrings> = {
  hero: {
    h1Line1: 'Ihre Marke',
    h1Line2: 'wird zum',
    h1Line3: 'audiovisuellen',
    h1Line4: 'Shop',
    sub1: 'Schluss mit der einfachen Produktseite. Jeder Inhalt wird zum direkten Verkaufskanal —',
    subNb: 'alles, was man ansieht, wird sofort kaufbar.',
    imgAlt: 'Marke verwandelt in einen audiovisuellen Shop',
  },
  principe: {
    eyebrow: 'Das Prinzip',
    h2a: 'Vom Sehen zum Kauf,',
    h2b: 'ohne den',
    h2mark: 'Inhalt',
    steps: [
      {
        title: 'Ansehen',
        text: 'Der Nutzer schaut einen Livestream, eine Wiederholung, eine Story, einen Film oder einen TV-Ausschnitt — wie gewohnt.',
      },
      {
        title: 'Berühren',
        text: 'Die KI erkennt das Objekt und zeigt auf Wunsch eine Kapsel an. In den Warenkorb legen, ohne den Stream zu unterbrechen.',
      },
      {
        title: 'Kaufen',
        text: 'Skoleom SeSync und Skoleom Pay wickeln die Zahlung im Video ab. Der Zuschauer setzt am selben Time Code fort.',
      },
    ],
    imgAlt: 'Skoleomisierter Inhalt — vom Sehen zum Kauf',
    shopHead: 'Ähnliche Produkte',
    shopHeadSub: 'SeSync · 4 Artikel erkannt bei 00:42',
    products: [
      {
        brand: 'Arena',
        name: 'Einteiliger Badeanzug',
        detail: 'Größe M · Bordeaux',
        stock: 'Auf Lager',
      },
      {
        brand: 'Speedo',
        name: 'Fastskin-Brille',
        detail: 'Verspiegelt · Erwachsene',
        stock: 'Auf Lager',
      },
      { brand: 'TYR', name: 'Silikonkappe', detail: 'Schwarz · Einfarbig', stock: 'Auf Lager' },
      { brand: 'Nike', name: 'Mikrofaser-Handtuch', detail: '70 × 140 cm', stock: 'Noch 3' },
    ],
    cartEmpty: 'Leerer Warenkorb',
    touchToBuy: 'Zum Kaufen berühren',
    stats: [
      { label: 'Vertriebsländer' },
      { label: 'OTT-Plattformen' },
      { label: 'Verbundene Websites' },
      { label: 'Skoleomisierte Videos / Tag' },
    ],
  },
  platforms: {
    eyebrow: 'Eine einzige Plattform',
    h2: '5 Plattformen in einer',
    lead: 'Heute jongliert eine Marke mit fünf Tools. Skoleom vereint sie: Video-Streaming, Produktintegration, Bezahlung im Video, internationale Distribution und Monetarisierung.',
    flowFinal: 'Eine Audiovisual Store Page',
    flowAgency: 'Kreativagentur',
    pillars: ['Ihr Medium', 'Ihr Katalog', 'Ihr Shop', 'Ihr Verkaufskanal'],
    whyTitle: 'Warum Video bis zu 10× mehr verkauft als klassischer E-Commerce',
    whyStats: [
      { label: 'Conversion' },
      { label: 'Engagement' },
      { label: 'der beeinflussten Verbraucher' },
    ],
    note: '*Quelle: loopexdigital · Firework · Storyly.io',
  },
  contains: {
    eyebrow: 'Ihre Seite, jeden Monat',
    h2: 'Was Ihre Store Page enthält',
    feats: [
      {
        title: '25 Videos pro Monat veröffentlicht',
        text: 'Die leistungsstärksten OTT-Inhalte (Netflix, Disney+, YouTube, TikTok), integriert nach Ihrer Region und Ihrer Strategie.',
      },
      {
        title: 'Bis zu 625 Produkte pro Monat',
        text: 'Bis zu 25 Produkte pro Video integriert, mit Ihrer Marke präsentiert.',
      },
      {
        title: '15 Markenkapseln pro Video',
        text: 'Von 25 Kapseln pro Video sind 15 für Sie reserviert; 10 entfallen auf Skoleom-Produkte.',
      },
      {
        title: 'Presse & Gewinnspiele inklusive',
        text: '25 Presseartikel, eine Pressemitteilung und ein Gewinnspiel jeden Monat.',
      },
    ],
    resultTag: 'Das Ergebnis',
    resultText:
      'Ihre Seite wird zum Medium, Katalog und Verkaufspunkt — an einem Ort vereint, gesteuert über Monetizer Studio®.',
    monetizerAlt: 'Monetizer Studio — steuern Sie Ihre Store Page',
  },
  offers: {
    eyebrow: 'Abonnement — Erstellen Sie Ihre Audiovisual Store Page',
    h2: '3 Angebote, 1 Mission',
    lead: 'Audiovisual Store Pages für ehrgeizige Marken, visionäre Creator und schnell wachsende Projekte.',
    prices: [
      {
        name: 'Starter',
        seg: 'Starten Sie Ihre Präsenz',
        monthLabel: '/ Monat',
        items: [
          '5 Inhalte / Monat',
          'Standard-Dashboard (Aufrufe, Klicks)',
          'Produktkapseln',
          'Standard-Design',
        ],
      },
      {
        name: 'Growth',
        seg: 'Beschleunigen Sie Ihr Wachstum',
        monthLabel: '/ Monat',
        badge: 'Am beliebtesten',
        items: [
          '10 Inhalte / Monat',
          'Erweitertes Dashboard (Conversions)',
          'SeSync: 5 Weiterleitungsplattformen',
          'Produktkapseln',
        ],
      },
      {
        name: 'Premium',
        seg: 'Dominieren Sie Ihren Markt',
        monthLabel: '/ Monat',
        items: [
          '25 Inhalte / Monat',
          'Unbegrenztes SeSync, alle Gebiete',
          'Promi- & Sportler-Sponsoring*',
          'Individuelles Design + A/B-Testing',
        ],
      },
    ],
    includeLabel: 'Alle Angebote enthalten',
    includeText:
      'Ihre Store Page in Ihrem Look · Hosting & Wartung · Sicherheit & DSGVO · SEO / SEA · Support rund um die Uhr · erweiterte Analysen · ',
    includeStrong: '20 % Skoleom-Provision auf Verkäufe.',
    note: 'Beträge netto, pro Marke. Ein Teil der Einnahmen wird an die Content-Creator und die Inhaber audiovisueller Shops weitergegeben. *Für das Sponsoring audiovisueller Shops von Persönlichkeiten sind auf Anfrage dedizierte Angebote verfügbar.',
  },
  finalCta: {
    eyebrow: 'Die Zukunft des E-Commerce ist audiovisuell',
    h2a: 'Starten Sie noch heute',
    h2b: 'Ihre',
    h2g1: 'audiovisual',
    h2g2: 'store page',
    sub: 'Ihre Marke. Ihre Inhalte. Eine neue Art, gesehen, berührt und gekauft zu werden.',
    cta: 'Anmeldung',
    imgAlt: 'Starten Sie Ihre Audiovisual Store Page',
  },
};

const it: Partial<AudiovisualStorePageStrings> = {
  hero: {
    h1Line1: 'Il tuo marchio',
    h1Line2: 'diventa un',
    h1Line3: 'negozio',
    h1Line4: 'audiovisivo',
    sub1: 'Basta con la semplice pagina prodotto. Ogni contenuto diventa un canale di vendita diretto —',
    subNb: 'tutto ciò che si guarda diventa istantaneamente acquistabile.',
    imgAlt: 'Marchio trasformato in negozio audiovisivo',
  },
  principe: {
    eyebrow: 'Il principio',
    h2a: 'Dalla visione all’acquisto,',
    h2b: 'senza uscire dal',
    h2mark: 'contenuto',
    steps: [
      {
        title: 'Guarda',
        text: 'L’utente guarda un live, un replay, una story, un film o uno spezzone TV — come al solito.',
      },
      {
        title: 'Tocca',
        text: 'L’IA riconosce l’oggetto e mostra una capsula su richiesta. Aggiungi al carrello senza interrompere il flusso.',
      },
      {
        title: 'Acquista',
        text: 'Skoleom SeSync e Skoleom Pay eseguono il pagamento nel video. Lo spettatore riprende allo stesso time code.',
      },
    ],
    imgAlt: 'Contenuto skoleomizzato — dalla visione all’acquisto',
    shopHead: 'Prodotti simili',
    shopHeadSub: 'SeSync · 4 articoli rilevati alle 00:42',
    products: [
      {
        brand: 'Arena',
        name: 'Costume intero',
        detail: 'Taglia M · Bordeaux',
        stock: 'Disponibile',
      },
      {
        brand: 'Speedo',
        name: 'Occhialini Fastskin',
        detail: 'Specchio · Adulto',
        stock: 'Disponibile',
      },
      {
        brand: 'TYR',
        name: 'Cuffia in silicone',
        detail: 'Nero · Tinta unita',
        stock: 'Disponibile',
      },
      {
        brand: 'Nike',
        name: 'Asciugamano in microfibra',
        detail: '70 × 140 cm',
        stock: '3 rimasti',
      },
    ],
    cartEmpty: 'Carrello vuoto',
    touchToBuy: 'Tocca per acquistare',
    stats: [
      { label: 'Paesi di distribuzione' },
      { label: 'Piattaforme OTT' },
      { label: 'Siti web connessi' },
      { label: 'Video skoleomizzati / giorno' },
    ],
  },
  platforms: {
    eyebrow: 'Un’unica piattaforma',
    h2: '5 piattaforme in una',
    lead: 'Oggi un marchio destreggia tra cinque strumenti. Skoleom li riunisce: diffusione video, integrazione prodotto, pagamento nel video, distribuzione internazionale e monetizzazione.',
    flowFinal: 'Una Audiovisual Store Page',
    flowAgency: 'Agenzia creativa',
    pillars: ['Il tuo media', 'Il tuo catalogo', 'Il tuo negozio', 'Il tuo canale di vendita'],
    whyTitle: 'Perché il video vende fino a 10× più dell’e-commerce classico',
    whyStats: [
      { label: 'di conversione' },
      { label: 'di coinvolgimento' },
      { label: 'di consumatori influenzati' },
    ],
    note: '*Fonte: loopexdigital · Firework · Storyly.io',
  },
  contains: {
    eyebrow: 'La tua pagina, ogni mese',
    h2: 'Cosa contiene la tua Store Page',
    feats: [
      {
        title: '25 video pubblicati al mese',
        text: 'I contenuti OTT più performanti (Netflix, Disney+, YouTube, TikTok) integrati in base alla tua zona e alla tua strategia.',
      },
      {
        title: 'Fino a 625 prodotti al mese',
        text: 'Fino a 25 prodotti integrati per video, presentati con il tuo marchio.',
      },
      {
        title: '15 capsule di marca per video',
        text: 'Su 25 capsule per video, 15 sono riservate a te; 10 vanno ai prodotti Skoleom.',
      },
      {
        title: 'Stampa e concorsi inclusi',
        text: '25 articoli di stampa, un comunicato e un concorso ogni mese.',
      },
    ],
    resultTag: 'Il risultato',
    resultText:
      'La tua pagina diventa un media, un catalogo e un punto vendita — riuniti in un unico posto, gestiti da Monetizer Studio®.',
    monetizerAlt: 'Monetizer Studio — gestisci la tua Store Page',
  },
  offers: {
    eyebrow: 'Abbonamento — Crea la tua Audiovisual Store Page',
    h2: '3 offerte, 1 missione',
    lead: 'Audiovisual Store Pages pensate per marchi ambiziosi, creatori visionari e progetti in piena crescita.',
    prices: [
      {
        name: 'Starter',
        seg: 'Lancia la tua presenza',
        monthLabel: '/ mese',
        items: [
          '5 contenuti / mese',
          'Dashboard standard (visualizzazioni, clic)',
          'Capsule prodotto',
          'Design standard',
        ],
      },
      {
        name: 'Growth',
        seg: 'Accelera la tua crescita',
        monthLabel: '/ mese',
        badge: 'Il più popolare',
        items: [
          '10 contenuti / mese',
          'Dashboard avanzata (conversioni)',
          'SeSync: 5 piattaforme di reindirizzamento',
          'Capsule prodotto',
        ],
      },
      {
        name: 'Premium',
        seg: 'Domina il tuo mercato',
        monthLabel: '/ mese',
        items: [
          '25 contenuti / mese',
          'SeSync illimitato, tutti i territori',
          'Sponsorizzazione di celebrità e sportivi*',
          'Design personalizzato + A/B testing',
        ],
      },
    ],
    includeLabel: 'Tutte le offerte includono',
    includeText:
      'La tua Store Page con la tua immagine · hosting e manutenzione · sicurezza e GDPR · SEO / SEA · supporto 7 giorni su 7 · analisi avanzate · ',
    includeStrong: 'commissione Skoleom del 20 % sulle vendite.',
    note: 'Importi IVA esclusa, per marchio. Una parte dei ricavi viene ridistribuita ai creatori di contenuti e ai proprietari di negozi audiovisivi. *Per la sponsorizzazione di negozi audiovisivi di personalità, sono disponibili offerte dedicate su richiesta.',
  },
  finalCta: {
    eyebrow: 'Il futuro dell’e-commerce è audiovisivo',
    h2a: 'Lancia oggi stesso',
    h2b: 'la tua',
    h2g1: 'audiovisual',
    h2g2: 'store page',
    sub: 'Il tuo marchio. I tuoi contenuti. Un nuovo modo di essere visto, toccato e acquistato.',
    cta: 'Iscrizione',
    imgAlt: 'Lancia la tua Audiovisual Store Page',
  },
};

const pt: Partial<AudiovisualStorePageStrings> = {
  hero: {
    h1Line1: 'A sua marca',
    h1Line2: 'torna-se uma',
    h1Line3: 'loja',
    h1Line4: 'audiovisual',
    sub1: 'Acabou a simples página de produto. Cada conteúdo torna-se um canal de venda direto —',
    subNb: 'tudo o que se vê torna-se instantaneamente comprável.',
    imgAlt: 'Marca transformada em loja audiovisual',
  },
  principe: {
    eyebrow: 'O princípio',
    h2a: 'Da visualização à compra,',
    h2b: 'sem sair do',
    h2mark: 'conteúdo',
    steps: [
      {
        title: 'Veja',
        text: 'O utilizador vê uma transmissão ao vivo, uma repetição, uma story, um filme ou um trecho de TV — como sempre.',
      },
      {
        title: 'Toque',
        text: 'A IA reconhece o objeto e exibe uma cápsula sob demanda. Adicionar ao carrinho sem interromper o fluxo.',
      },
      {
        title: 'Compre',
        text: 'O Skoleom SeSync e o Skoleom Pay executam o pagamento dentro do vídeo. O espectador retoma no mesmo time code.',
      },
    ],
    imgAlt: 'Conteúdo skoleomizado — da visualização à compra',
    shopHead: 'Produtos semelhantes',
    shopHeadSub: 'SeSync · 4 artigos detetados às 00:42',
    products: [
      {
        brand: 'Arena',
        name: 'Fato de banho inteiro',
        detail: 'Tamanho M · Bordô',
        stock: 'Em stock',
      },
      { brand: 'Speedo', name: 'Óculos Fastskin', detail: 'Espelhado · Adulto', stock: 'Em stock' },
      { brand: 'TYR', name: 'Touca de silicone', detail: 'Preto · Liso', stock: 'Em stock' },
      { brand: 'Nike', name: 'Toalha de microfibra', detail: '70 × 140 cm', stock: '3 restantes' },
    ],
    cartEmpty: 'Carrinho vazio',
    touchToBuy: 'Toque para comprar',
    stats: [
      { label: 'Países de distribuição' },
      { label: 'Plataformas OTT' },
      { label: 'Sites conectados' },
      { label: 'Vídeos skoleomizados / dia' },
    ],
  },
  platforms: {
    eyebrow: 'Uma única plataforma',
    h2: '5 plataformas numa só',
    lead: 'Hoje uma marca faz malabarismos com cinco ferramentas. A Skoleom reúne-as: difusão de vídeo, integração de produto, pagamento no vídeo, distribuição internacional e monetização.',
    flowFinal: 'Uma Audiovisual Store Page',
    flowAgency: 'Agência criativa',
    pillars: ['O seu media', 'O seu catálogo', 'A sua loja', 'O seu canal de venda'],
    whyTitle: 'Porque o vídeo vende até 10× mais do que o e-commerce clássico',
    whyStats: [
      { label: 'de conversão' },
      { label: 'de envolvimento' },
      { label: 'de consumidores influenciados' },
    ],
    note: '*Fonte: loopexdigital · Firework · Storyly.io',
  },
  contains: {
    eyebrow: 'A sua página, todos os meses',
    h2: 'O que contém a sua Store Page',
    feats: [
      {
        title: '25 vídeos publicados por mês',
        text: 'Os conteúdos OTT com melhor desempenho (Netflix, Disney+, YouTube, TikTok) integrados de acordo com a sua zona e a sua estratégia.',
      },
      {
        title: 'Até 625 produtos por mês',
        text: 'Até 25 produtos integrados por vídeo, apresentados com a sua marca.',
      },
      {
        title: '15 cápsulas de marca por vídeo',
        text: 'De 25 cápsulas por vídeo, 15 são reservadas para si; 10 vão para os produtos Skoleom.',
      },
      {
        title: 'Imprensa e passatempos incluídos',
        text: '25 artigos de imprensa, um comunicado e um passatempo todos os meses.',
      },
    ],
    resultTag: 'O resultado',
    resultText:
      'A sua página torna-se um media, um catálogo e um ponto de venda — reunidos num só lugar, geridos a partir do Monetizer Studio®.',
    monetizerAlt: 'Monetizer Studio — faça a gestão da sua Store Page',
  },
  offers: {
    eyebrow: 'Subscrição — Crie a sua Audiovisual Store Page',
    h2: '3 ofertas, 1 missão',
    lead: 'Audiovisual Store Pages pensadas para marcas ambiciosas, criadores visionários e projetos em plena expansão.',
    prices: [
      {
        name: 'Starter',
        seg: 'Lance a sua presença',
        monthLabel: '/ mês',
        items: [
          '5 conteúdos / mês',
          'Painel padrão (visualizações, cliques)',
          'Cápsulas de produto',
          'Design padrão',
        ],
      },
      {
        name: 'Growth',
        seg: 'Acelere o seu crescimento',
        monthLabel: '/ mês',
        badge: 'O mais popular',
        items: [
          '10 conteúdos / mês',
          'Painel avançado (conversões)',
          'SeSync: 5 plataformas de redirecionamento',
          'Cápsulas de produto',
        ],
      },
      {
        name: 'Premium',
        seg: 'Domine o seu mercado',
        monthLabel: '/ mês',
        items: [
          '25 conteúdos / mês',
          'SeSync ilimitado, todos os territórios',
          'Patrocínio de celebridades e desportistas*',
          'Design personalizado + teste A/B',
        ],
      },
    ],
    includeLabel: 'Todas as ofertas incluem',
    includeText:
      'A sua Store Page com a sua imagem · alojamento e manutenção · segurança e RGPD · SEO / SEA · suporte 24/7 · análises avançadas · ',
    includeStrong: 'comissão Skoleom de 20 % sobre as vendas.',
    note: 'Valores sem IVA, por marca. Uma parte das receitas é redistribuída aos criadores de conteúdos e aos proprietários de lojas audiovisuais. *Para o patrocínio de lojas audiovisuais de personalidades, estão disponíveis ofertas dedicadas mediante pedido.',
  },
  finalCta: {
    eyebrow: 'O futuro do e-commerce é audiovisual',
    h2a: 'Lance hoje mesmo',
    h2b: 'a sua',
    h2g1: 'audiovisual',
    h2g2: 'store page',
    sub: 'A sua marca. Os seus conteúdos. Uma nova forma de ser visto, tocado e comprado.',
    cta: 'Inscrição',
    imgAlt: 'Lance a sua Audiovisual Store Page',
  },
};

const nl: Partial<AudiovisualStorePageStrings> = {
  hero: {
    h1Line1: 'Uw merk',
    h1Line2: 'wordt een',
    h1Line3: 'audiovisuele',
    h1Line4: 'winkel',
    sub1: 'Geen gewone productpagina meer. Elke content wordt een direct verkoopkanaal —',
    subNb: 'alles wat je bekijkt wordt meteen koopbaar.',
    imgAlt: 'Merk omgevormd tot audiovisuele winkel',
  },
  principe: {
    eyebrow: 'Het principe',
    h2a: 'Van kijken tot kopen,',
    h2b: 'zonder de',
    h2mark: 'content',
    steps: [
      {
        title: 'Kijk',
        text: 'De gebruiker bekijkt een live, een replay, een story, een film of een tv-fragment — zoals gewoonlijk.',
      },
      {
        title: 'Raak aan',
        text: 'De AI herkent het object en toont op verzoek een capsule. Toevoegen aan winkelmand zonder de stream te onderbreken.',
      },
      {
        title: 'Koop',
        text: 'Skoleom SeSync en Skoleom Pay verwerken de betaling in de video. De kijker hervat op dezelfde time code.',
      },
    ],
    imgAlt: 'Skoleomized content — van kijken tot kopen',
    shopHead: 'Vergelijkbare producten',
    shopHeadSub: 'SeSync · 4 artikelen gedetecteerd om 00:42',
    products: [
      {
        brand: 'Arena',
        name: 'Eendelig badpak',
        detail: 'Maat M · Bordeaux',
        stock: 'Op voorraad',
      },
      {
        brand: 'Speedo',
        name: 'Fastskin-bril',
        detail: 'Spiegel · Volwassen',
        stock: 'Op voorraad',
      },
      { brand: 'TYR', name: 'Siliconen badmuts', detail: 'Zwart · Effen', stock: 'Op voorraad' },
      { brand: 'Nike', name: 'Microvezelhanddoek', detail: '70 × 140 cm', stock: 'Nog 3' },
    ],
    cartEmpty: 'Lege winkelmand',
    touchToBuy: 'Aanraken om te kopen',
    stats: [
      { label: 'Distributielanden' },
      { label: 'OTT-platforms' },
      { label: 'Verbonden websites' },
      { label: 'Skoleomized video’s / dag' },
    ],
  },
  platforms: {
    eyebrow: 'Eén enkel platform',
    h2: '5 platforms in één',
    lead: 'Vandaag jongleert een merk met vijf tools. Skoleom brengt ze samen: videostreaming, productintegratie, betaling in de video, internationale distributie en monetisatie.',
    flowFinal: 'Eén Audiovisual Store Page',
    flowAgency: 'Creatief bureau',
    pillars: ['Uw media', 'Uw catalogus', 'Uw winkel', 'Uw verkoopkanaal'],
    whyTitle: 'Waarom video tot 10× meer verkoopt dan klassieke e-commerce',
    whyStats: [
      { label: 'conversie' },
      { label: 'betrokkenheid' },
      { label: 'van consumenten beïnvloed' },
    ],
    note: '*Bron: loopexdigital · Firework · Storyly.io',
  },
  contains: {
    eyebrow: 'Uw pagina, elke maand',
    h2: 'Wat uw Store Page bevat',
    feats: [
      {
        title: '25 video’s per maand gepubliceerd',
        text: 'De best presterende OTT-content (Netflix, Disney+, YouTube, TikTok) geïntegreerd volgens uw zone en uw strategie.',
      },
      {
        title: 'Tot 625 producten per maand',
        text: 'Tot 25 producten geïntegreerd per video, gepresenteerd met uw merk.',
      },
      {
        title: '15 merkcapsules per video',
        text: 'Van de 25 capsules per video zijn er 15 voor u gereserveerd; 10 gaan naar Skoleom-producten.',
      },
      {
        title: 'Pers & winacties inbegrepen',
        text: '25 persartikelen, een persbericht en een winactie elke maand.',
      },
    ],
    resultTag: 'Het resultaat',
    resultText:
      'Uw pagina wordt een medium, een catalogus en een verkooppunt — samen op één plek, beheerd vanuit Monetizer Studio®.',
    monetizerAlt: 'Monetizer Studio — beheer uw Store Page',
  },
  offers: {
    eyebrow: 'Abonnement — Maak uw Audiovisual Store Page',
    h2: '3 aanbiedingen, 1 missie',
    lead: 'Audiovisual Store Pages bedacht voor ambitieuze merken, visionaire makers en snelgroeiende projecten.',
    prices: [
      {
        name: 'Starter',
        seg: 'Lanceer uw aanwezigheid',
        monthLabel: '/ maand',
        items: [
          '5 content / maand',
          'Standaarddashboard (weergaven, kliks)',
          'Productcapsules',
          'Standaardontwerp',
        ],
      },
      {
        name: 'Growth',
        seg: 'Versnel uw groei',
        monthLabel: '/ maand',
        badge: 'Meest populair',
        items: [
          '10 content / maand',
          'Geavanceerd dashboard (conversies)',
          'SeSync: 5 doorverwijzingsplatforms',
          'Productcapsules',
        ],
      },
      {
        name: 'Premium',
        seg: 'Domineer uw markt',
        monthLabel: '/ maand',
        items: [
          '25 content / maand',
          'Onbeperkte SeSync, alle gebieden',
          'Sponsoring van beroemdheden & sporters*',
          'Aangepast ontwerp + A/B-testen',
        ],
      },
    ],
    includeLabel: 'Alle aanbiedingen omvatten',
    includeText:
      'Uw Store Page met uw uitstraling · hosting & onderhoud · beveiliging & AVG · SEO / SEA · 24/7 support · geavanceerde analytics · ',
    includeStrong: '20 % Skoleom-commissie op verkopen.',
    note: 'Bedragen excl. btw, per merk. Een deel van de inkomsten wordt herverdeeld naar contentmakers en eigenaren van audiovisuele winkels. *Voor de sponsoring van audiovisuele winkels van bekendheden zijn op aanvraag speciale aanbiedingen beschikbaar.',
  },
  finalCta: {
    eyebrow: 'De toekomst van e-commerce is audiovisueel',
    h2a: 'Lanceer vandaag nog',
    h2b: 'uw',
    h2g1: 'audiovisual',
    h2g2: 'store page',
    sub: 'Uw merk. Uw content. Een nieuwe manier om gezien, aangeraakt en gekocht te worden.',
    cta: 'Inschrijving',
    imgAlt: 'Lanceer uw Audiovisual Store Page',
  },
};

const ru: Partial<AudiovisualStorePageStrings> = {
  hero: {
    h1Line1: 'Ваш бренд',
    h1Line2: 'становится',
    h1Line3: 'аудиовизуальным',
    h1Line4: 'магазином',
    sub1: 'Конец обычной странице товара. Каждый контент становится прямым каналом продаж —',
    subNb: 'всё, что вы смотрите, мгновенно становится доступным для покупки.',
    imgAlt: 'Бренд, превращённый в аудиовизуальный магазин',
  },
  principe: {
    eyebrow: 'Принцип',
    h2a: 'От просмотра к покупке,',
    h2b: 'не покидая',
    h2mark: 'контент',
    steps: [
      {
        title: 'Смотрите',
        text: 'Пользователь смотрит прямой эфир, повтор, историю, фильм или ТВ-фрагмент — как обычно.',
      },
      {
        title: 'Касайтесь',
        text: 'ИИ распознаёт объект и по запросу показывает капсулу. Добавление в корзину без прерывания потока.',
      },
      {
        title: 'Покупайте',
        text: 'Skoleom SeSync и Skoleom Pay выполняют оплату прямо в видео. Зритель продолжает с того же time code.',
      },
    ],
    imgAlt: 'Сколеомизированный контент — от просмотра к покупке',
    shopHead: 'Похожие товары',
    shopHeadSub: 'SeSync · 4 товара обнаружено на 00:42',
    products: [
      {
        brand: 'Arena',
        name: 'Слитный купальник',
        detail: 'Размер M · Бордовый',
        stock: 'В наличии',
      },
      {
        brand: 'Speedo',
        name: 'Очки Fastskin',
        detail: 'Зеркальные · Взрослые',
        stock: 'В наличии',
      },
      {
        brand: 'TYR',
        name: 'Силиконовая шапочка',
        detail: 'Чёрный · Однотонный',
        stock: 'В наличии',
      },
      {
        brand: 'Nike',
        name: 'Полотенце из микрофибры',
        detail: '70 × 140 см',
        stock: 'Осталось 3',
      },
    ],
    cartEmpty: 'Корзина пуста',
    touchToBuy: 'Коснитесь, чтобы купить',
    stats: [
      { label: 'Стран дистрибуции' },
      { label: 'OTT-платформ' },
      { label: 'Подключённых сайтов' },
      { label: 'Сколеомизированных видео / день' },
    ],
  },
  platforms: {
    eyebrow: 'Единая платформа',
    h2: '5 платформ в одной',
    lead: 'Сегодня бренд жонглирует пятью инструментами. Skoleom объединяет их: видеовещание, интеграцию товаров, оплату в видео, международную дистрибуцию и монетизацию.',
    flowFinal: 'Одна Audiovisual Store Page',
    flowAgency: 'Креативное агентство',
    pillars: ['Ваше медиа', 'Ваш каталог', 'Ваш магазин', 'Ваш канал продаж'],
    whyTitle: 'Почему видео продаёт до 10× больше, чем классическая электронная коммерция',
    whyStats: [
      { label: 'конверсии' },
      { label: 'вовлечённости' },
      { label: 'потребителей под влиянием' },
    ],
    note: '*Источник: loopexdigital · Firework · Storyly.io',
  },
  contains: {
    eyebrow: 'Ваша страница, каждый месяц',
    h2: 'Что входит в вашу Store Page',
    feats: [
      {
        title: '25 видео публикуется в месяц',
        text: 'Самый эффективный OTT-контент (Netflix, Disney+, YouTube, TikTok), интегрированный по вашему региону и стратегии.',
      },
      {
        title: 'До 625 товаров в месяц',
        text: 'До 25 товаров, интегрированных в каждое видео, представленных с вашим брендом.',
      },
      {
        title: '15 брендовых капсул на видео',
        text: 'Из 25 капсул на видео 15 зарезервированы для вас; 10 отводятся товарам Skoleom.',
      },
      {
        title: 'Пресса и конкурсы включены',
        text: '25 пресс-статей, один пресс-релиз и один конкурс каждый месяц.',
      },
    ],
    resultTag: 'Результат',
    resultText:
      'Ваша страница становится медиа, каталогом и точкой продаж — собранными в одном месте и управляемыми из Monetizer Studio®.',
    monetizerAlt: 'Monetizer Studio — управляйте вашей Store Page',
  },
  offers: {
    eyebrow: 'Подписка — Создайте вашу Audiovisual Store Page',
    h2: '3 предложения, 1 миссия',
    lead: 'Audiovisual Store Pages, созданные для амбициозных брендов, дальновидных авторов и быстрорастущих проектов.',
    prices: [
      {
        name: 'Starter',
        seg: 'Запустите своё присутствие',
        monthLabel: '/ месяц',
        items: [
          '5 материалов / месяц',
          'Стандартная панель (просмотры, клики)',
          'Капсулы товаров',
          'Стандартный дизайн',
        ],
      },
      {
        name: 'Growth',
        seg: 'Ускорьте свой рост',
        monthLabel: '/ месяц',
        badge: 'Самый популярный',
        items: [
          '10 материалов / месяц',
          'Расширенная панель (конверсии)',
          'SeSync: 5 платформ перенаправления',
          'Капсулы товаров',
        ],
      },
      {
        name: 'Premium',
        seg: 'Доминируйте на своём рынке',
        monthLabel: '/ месяц',
        items: [
          '25 материалов / месяц',
          'Безлимитный SeSync, все территории',
          'Спонсорство знаменитостей и спортсменов*',
          'Индивидуальный дизайн + A/B-тестирование',
        ],
      },
    ],
    includeLabel: 'Все предложения включают',
    includeText:
      'Вашу Store Page в вашем стиле · хостинг и обслуживание · безопасность и GDPR · SEO / SEA · поддержка 24/7 · расширенная аналитика · ',
    includeStrong: 'комиссия Skoleom 20 % с продаж.',
    note: 'Суммы без налога, за бренд. Часть выручки перераспределяется создателям контента и владельцам аудиовизуальных магазинов. *Для спонсорства аудиовизуальных магазинов знаменитостей доступны отдельные предложения по запросу.',
  },
  finalCta: {
    eyebrow: 'Будущее электронной коммерции — аудиовизуальное',
    h2a: 'Запустите уже сегодня',
    h2b: 'вашу',
    h2g1: 'audiovisual',
    h2g2: 'store page',
    sub: 'Ваш бренд. Ваш контент. Новый способ быть увиденным, затронутым и купленным.',
    cta: 'Регистрация',
    imgAlt: 'Запустите вашу Audiovisual Store Page',
  },
};

const ar: Partial<AudiovisualStorePageStrings> = {
  hero: {
    h1Line1: 'علامتك التجارية',
    h1Line2: 'تصبح',
    h1Line3: 'متجراً',
    h1Line4: 'سمعياً بصرياً',
    sub1: 'انتهى عصر صفحة المنتج البسيطة. يصبح كل محتوى قناة بيع مباشرة —',
    subNb: 'كل ما تشاهده يصبح قابلاً للشراء على الفور.',
    imgAlt: 'علامة تجارية تحولت إلى متجر سمعي بصري',
  },
  principe: {
    eyebrow: 'المبدأ',
    h2a: 'من المشاهدة إلى الشراء،',
    h2b: 'دون مغادرة',
    h2mark: 'المحتوى',
    steps: [
      {
        title: 'شاهد',
        text: 'يشاهد المستخدم بثاً مباشراً أو إعادة أو قصة أو فيلماً أو مقطعاً تلفزيونياً — كالمعتاد.',
      },
      {
        title: 'المس',
        text: 'يتعرف الذكاء الاصطناعي على العنصر ويعرض كبسولة عند الطلب. أضف إلى السلة دون مقاطعة البث.',
      },
      {
        title: 'اشترِ',
        text: 'ينفّذ Skoleom SeSync و Skoleom Pay الدفع داخل الفيديو. يستأنف المشاهد من نفس time code.',
      },
    ],
    imgAlt: 'محتوى مُسكلَم — من المشاهدة إلى الشراء',
    shopHead: 'منتجات مشابهة',
    shopHeadSub: 'SeSync · تم اكتشاف 4 عناصر عند 00:42',
    products: [
      { brand: 'Arena', name: 'مايوه قطعة واحدة', detail: 'مقاس M · خمري', stock: 'متوفر' },
      { brand: 'Speedo', name: 'نظارة Fastskin', detail: 'عاكسة · للبالغين', stock: 'متوفر' },
      { brand: 'TYR', name: 'قبعة سيليكون', detail: 'أسود · سادة', stock: 'متوفر' },
      { brand: 'Nike', name: 'منشفة ميكروفايبر', detail: '70 × 140 سم', stock: 'بقي 3' },
    ],
    cartEmpty: 'السلة فارغة',
    touchToBuy: 'المس للشراء',
    stats: [
      { label: 'دول التوزيع' },
      { label: 'منصات OTT' },
      { label: 'مواقع متصلة' },
      { label: 'فيديوهات مُسكلَمة / اليوم' },
    ],
  },
  platforms: {
    eyebrow: 'منصة واحدة فقط',
    h2: '5 منصات في واحدة',
    lead: 'اليوم تتنقل العلامة التجارية بين خمس أدوات. تجمعها Skoleom: بث الفيديو، تكامل المنتج، الدفع داخل الفيديو، التوزيع الدولي والتحقيق من الربح.',
    flowFinal: 'Audiovisual Store Page واحدة',
    flowAgency: 'وكالة إبداعية',
    pillars: ['وسائطك', 'كتالوجك', 'متجرك', 'قناة البيع الخاصة بك'],
    whyTitle: 'لماذا يبيع الفيديو حتى 10× أكثر من التجارة الإلكترونية التقليدية',
    whyStats: [
      { label: 'من التحويل' },
      { label: 'من التفاعل' },
      { label: 'من المستهلكين المتأثرين' },
    ],
    note: '*المصدر: loopexdigital · Firework · Storyly.io',
  },
  contains: {
    eyebrow: 'صفحتك، كل شهر',
    h2: 'ما تحتويه صفحة Store Page الخاصة بك',
    feats: [
      {
        title: '25 فيديو يُنشر شهرياً',
        text: 'أفضل محتوى OTT أداءً (Netflix, Disney+, YouTube, TikTok) مدمج وفقاً لمنطقتك واستراتيجيتك.',
      },
      {
        title: 'حتى 625 منتجاً شهرياً',
        text: 'حتى 25 منتجاً مدمجاً لكل فيديو، معروضاً مع علامتك التجارية.',
      },
      {
        title: '15 كبسولة علامة لكل فيديو',
        text: 'من بين 25 كبسولة لكل فيديو، 15 محجوزة لك؛ 10 تعود لمنتجات Skoleom.',
      },
      {
        title: 'الصحافة والمسابقات مشمولة',
        text: '25 مقالاً صحفياً وبيان صحفي ومسابقة كل شهر.',
      },
    ],
    resultTag: 'النتيجة',
    resultText:
      'تصبح صفحتك وسيلة إعلامية وكتالوجاً ونقطة بيع — مجتمعة في مكان واحد، مُدارة من Monetizer Studio®.',
    monetizerAlt: 'Monetizer Studio — أدر صفحة Store Page الخاصة بك',
  },
  offers: {
    eyebrow: 'اشتراك — أنشئ Audiovisual Store Page الخاصة بك',
    h2: '3 عروض، مهمة واحدة',
    lead: 'صفحات Audiovisual Store Pages مصممة للعلامات الطموحة والمبدعين أصحاب الرؤية والمشاريع سريعة النمو.',
    prices: [
      {
        name: 'Starter',
        seg: 'أطلق حضورك',
        monthLabel: '/ شهرياً',
        items: [
          '5 محتويات / شهر',
          'لوحة قياس عادية (مشاهدات، نقرات)',
          'كبسولات منتجات',
          'تصميم عادي',
        ],
      },
      {
        name: 'Growth',
        seg: 'سرّع نموك',
        monthLabel: '/ شهرياً',
        badge: 'الأكثر شيوعاً',
        items: [
          '10 محتويات / شهر',
          'لوحة قياس متقدمة (تحويلات)',
          'SeSync: 5 منصات إعادة توجيه',
          'كبسولات منتجات',
        ],
      },
      {
        name: 'Premium',
        seg: 'سيطر على سوقك',
        monthLabel: '/ شهرياً',
        items: [
          '25 محتوى / شهر',
          'SeSync غير محدود، جميع المناطق',
          'رعاية المشاهير والرياضيين*',
          'تصميم مخصص + اختبار A/B',
        ],
      },
    ],
    includeLabel: 'جميع العروض تشمل',
    includeText:
      'صفحة Store Page بهويتك · الاستضافة والصيانة · الأمان و GDPR · SEO / SEA · دعم 24/7 · تحليلات متقدمة · ',
    includeStrong: 'عمولة Skoleom بنسبة 20 % على المبيعات.',
    note: 'المبالغ بدون ضريبة، لكل علامة تجارية. تُعاد توزيع جزء من الإيرادات على صانعي المحتوى وأصحاب المتاجر السمعية البصرية. *لرعاية المتاجر السمعية البصرية للشخصيات، تتوفر عروض مخصصة عند الطلب.',
  },
  finalCta: {
    eyebrow: 'مستقبل التجارة الإلكترونية سمعي بصري',
    h2a: 'أطلق اليوم',
    h2b: '',
    h2g1: 'audiovisual',
    h2g2: 'store page',
    sub: 'علامتك التجارية. محتواك. طريقة جديدة لتُرى وتُلمس وتُشترى.',
    cta: 'التسجيل',
    imgAlt: 'أطلق Audiovisual Store Page الخاصة بك',
  },
};

const hi: Partial<AudiovisualStorePageStrings> = {
  hero: {
    h1Line1: 'आपका ब्रांड',
    h1Line2: 'बन जाता है एक',
    h1Line3: 'ऑडियोविजुअल',
    h1Line4: 'स्टोर',
    sub1: 'साधारण उत्पाद पेज का अंत। हर कंटेंट एक सीधा बिक्री चैनल बन जाता है —',
    subNb: 'जो कुछ भी आप देखते हैं वह तुरंत खरीदने योग्य बन जाता है।',
    imgAlt: 'ब्रांड एक ऑडियोविजुअल स्टोर में बदल गया',
  },
  principe: {
    eyebrow: 'सिद्धांत',
    h2a: 'देखने से खरीदने तक,',
    h2b: 'बिना छोड़े',
    h2mark: 'कंटेंट',
    steps: [
      {
        title: 'देखें',
        text: 'उपयोगकर्ता एक लाइव, एक रीप्ले, एक स्टोरी, एक फिल्म या एक टीवी क्लिप देखता है — हमेशा की तरह।',
      },
      {
        title: 'स्पर्श करें',
        text: 'AI वस्तु को पहचानता है और मांग पर एक कैप्सूल दिखाता है। स्ट्रीम बाधित किए बिना कार्ट में जोड़ें।',
      },
      {
        title: 'खरीदें',
        text: 'Skoleom SeSync और Skoleom Pay वीडियो के भीतर भुगतान निष्पादित करते हैं। दर्शक उसी time code पर फिर से शुरू करता है।',
      },
    ],
    imgAlt: 'स्कोलेओमाइज्ड कंटेंट — देखने से खरीदने तक',
    shopHead: 'समान उत्पाद',
    shopHeadSub: 'SeSync · 00:42 पर 4 आइटम पहचाने गए',
    products: [
      { brand: 'Arena', name: 'वन-पीस स्विमसूट', detail: 'साइज M · बरगंडी', stock: 'स्टॉक में' },
      { brand: 'Speedo', name: 'Fastskin चश्मा', detail: 'मिरर · वयस्क', stock: 'स्टॉक में' },
      { brand: 'TYR', name: 'सिलिकॉन कैप', detail: 'काला · सादा', stock: 'स्टॉक में' },
      { brand: 'Nike', name: 'माइक्रोफाइबर तौलिया', detail: '70 × 140 सेमी', stock: '3 बचे' },
    ],
    cartEmpty: 'खाली कार्ट',
    touchToBuy: 'खरीदने के लिए स्पर्श करें',
    stats: [
      { label: 'वितरण देश' },
      { label: 'OTT प्लेटफॉर्म' },
      { label: 'जुड़ी हुई वेबसाइटें' },
      { label: 'स्कोलेओमाइज्ड वीडियो / दिन' },
    ],
  },
  platforms: {
    eyebrow: 'एक ही प्लेटफॉर्म',
    h2: '5 प्लेटफॉर्म एक में',
    lead: 'आज एक ब्रांड पाँच टूल्स के बीच तालमेल बिठाता है। Skoleom उन्हें एकजुट करता है: वीडियो प्रसारण, उत्पाद एकीकरण, वीडियो में भुगतान, अंतरराष्ट्रीय वितरण और मुद्रीकरण।',
    flowFinal: 'एक Audiovisual Store Page',
    flowAgency: 'क्रिएटिव एजेंसी',
    pillars: ['आपका मीडिया', 'आपका कैटलॉग', 'आपकी दुकान', 'आपका बिक्री चैनल'],
    whyTitle: 'क्यों वीडियो पारंपरिक ई-कॉमर्स की तुलना में 10× तक अधिक बिकता है',
    whyStats: [{ label: 'रूपांतरण' }, { label: 'जुड़ाव' }, { label: 'प्रभावित उपभोक्ता' }],
    note: '*स्रोत: loopexdigital · Firework · Storyly.io',
  },
  contains: {
    eyebrow: 'आपका पेज, हर महीने',
    h2: 'आपकी Store Page में क्या शामिल है',
    feats: [
      {
        title: 'प्रति माह 25 वीडियो प्रकाशित',
        text: 'सर्वश्रेष्ठ प्रदर्शन करने वाला OTT कंटेंट (Netflix, Disney+, YouTube, TikTok) आपके क्षेत्र और रणनीति के अनुसार एकीकृत।',
      },
      {
        title: 'प्रति माह 625 उत्पादों तक',
        text: 'प्रति वीडियो 25 उत्पादों तक एकीकृत, आपके ब्रांड के साथ प्रस्तुत।',
      },
      {
        title: 'प्रति वीडियो 15 ब्रांड कैप्सूल',
        text: 'प्रति वीडियो 25 कैप्सूल में से, 15 आपके लिए आरक्षित हैं; 10 Skoleom उत्पादों को जाते हैं।',
      },
      {
        title: 'प्रेस और प्रतियोगिताएं शामिल',
        text: 'हर महीने 25 प्रेस लेख, एक विज्ञप्ति और एक प्रतियोगिता।',
      },
    ],
    resultTag: 'परिणाम',
    resultText:
      'आपका पेज एक मीडिया, एक कैटलॉग और एक बिक्री बिंदु बन जाता है — एक ही जगह पर एकत्रित, Monetizer Studio® से संचालित।',
    monetizerAlt: 'Monetizer Studio — अपनी Store Page संचालित करें',
  },
  offers: {
    eyebrow: 'सदस्यता — अपनी Audiovisual Store Page बनाएं',
    h2: '3 ऑफर, 1 मिशन',
    lead: 'महत्वाकांक्षी ब्रांडों, दूरदर्शी रचनाकारों और तेजी से बढ़ते प्रोजेक्ट्स के लिए डिज़ाइन की गई Audiovisual Store Pages।',
    prices: [
      {
        name: 'Starter',
        seg: 'अपनी उपस्थिति शुरू करें',
        monthLabel: '/ माह',
        items: ['5 कंटेंट / माह', 'मानक डैशबोर्ड (व्यूज, क्लिक)', 'उत्पाद कैप्सूल', 'मानक डिज़ाइन'],
      },
      {
        name: 'Growth',
        seg: 'अपनी वृद्धि तेज करें',
        monthLabel: '/ माह',
        badge: 'सबसे लोकप्रिय',
        items: [
          '10 कंटेंट / माह',
          'उन्नत डैशबोर्ड (रूपांतरण)',
          'SeSync: 5 रीडायरेक्शन प्लेटफॉर्म',
          'उत्पाद कैप्सूल',
        ],
      },
      {
        name: 'Premium',
        seg: 'अपने बाजार पर हावी हों',
        monthLabel: '/ माह',
        items: [
          '25 कंटेंट / माह',
          'असीमित SeSync, सभी क्षेत्र',
          'हस्तियों और खिलाड़ियों की प्रायोजना*',
          'कस्टम डिज़ाइन + A/B परीक्षण',
        ],
      },
    ],
    includeLabel: 'सभी ऑफर में शामिल हैं',
    includeText:
      'आपकी छवि वाली Store Page · होस्टिंग और रखरखाव · सुरक्षा और GDPR · SEO / SEA · 24/7 सहायता · उन्नत एनालिटिक्स · ',
    includeStrong: 'बिक्री पर 20 % Skoleom कमीशन।',
    note: 'राशि कर रहित, प्रति ब्रांड। राजस्व का एक हिस्सा कंटेंट निर्माताओं और ऑडियोविजुअल स्टोर मालिकों को पुनर्वितरित किया जाता है। *हस्तियों के ऑडियोविजुअल स्टोर की प्रायोजना के लिए, अनुरोध पर समर्पित ऑफर उपलब्ध हैं।',
  },
  finalCta: {
    eyebrow: 'ई-कॉमर्स का भविष्य ऑडियोविजुअल है',
    h2a: 'आज ही लॉन्च करें',
    h2b: 'अपनी',
    h2g1: 'audiovisual',
    h2g2: 'store page',
    sub: 'आपका ब्रांड। आपका कंटेंट। देखे, छुए और खरीदे जाने का एक नया तरीका।',
    cta: 'पंजीकरण',
    imgAlt: 'अपनी Audiovisual Store Page लॉन्च करें',
  },
};

const zh: Partial<AudiovisualStorePageStrings> = {
  hero: {
    h1Line1: '您的品牌',
    h1Line2: '成为一家',
    h1Line3: '视听',
    h1Line4: '商店',
    sub1: '告别简单的产品页面。每一段内容都成为直接的销售渠道——',
    subNb: '您所观看的一切都立即变得可购买。',
    imgAlt: '品牌转变为视听商店',
  },
  principe: {
    eyebrow: '原理',
    h2a: '从观看到购买，',
    h2b: '无需离开',
    h2mark: '内容',
    steps: [
      {
        title: '观看',
        text: '用户观看直播、回放、故事、电影或电视片段——一如往常。',
      },
      {
        title: '触碰',
        text: 'AI 识别物品并按需显示胶囊。无需中断播放即可加入购物车。',
      },
      {
        title: '购买',
        text: 'Skoleom SeSync 和 Skoleom Pay 在视频中完成付款。观众从同一 time code 继续观看。',
      },
    ],
    imgAlt: '已 Skoleom 化的内容——从观看到购买',
    shopHead: '相似产品',
    shopHeadSub: 'SeSync · 在 00:42 检测到 4 件商品',
    products: [
      { brand: 'Arena', name: '连体泳衣', detail: '尺码 M · 酒红色', stock: '有货' },
      { brand: 'Speedo', name: 'Fastskin 泳镜', detail: '镜面 · 成人', stock: '有货' },
      { brand: 'TYR', name: '硅胶泳帽', detail: '黑色 · 纯色', stock: '有货' },
      { brand: 'Nike', name: '超细纤维毛巾', detail: '70 × 140 厘米', stock: '剩 3 件' },
    ],
    cartEmpty: '购物车为空',
    touchToBuy: '触碰即可购买',
    stats: [
      { label: '分销国家' },
      { label: 'OTT 平台' },
      { label: '已连接网站' },
      { label: '每日 Skoleom 化视频' },
    ],
  },
  platforms: {
    eyebrow: '唯一的平台',
    h2: '五合一平台',
    lead: '如今品牌需要在五种工具之间周旋。Skoleom 将它们整合：视频播放、产品集成、视频内付款、国际分销和变现。',
    flowFinal: '一个 Audiovisual Store Page',
    flowAgency: '创意机构',
    pillars: ['您的媒体', '您的目录', '您的商店', '您的销售渠道'],
    whyTitle: '为什么视频的销量比传统电商高出 10× 之多',
    whyStats: [{ label: '转化率' }, { label: '互动度' }, { label: '受影响的消费者' }],
    note: '*来源：loopexdigital · Firework · Storyly.io',
  },
  contains: {
    eyebrow: '您的页面，每月更新',
    h2: '您的 Store Page 包含什么',
    feats: [
      {
        title: '每月发布 25 个视频',
        text: '根据您的区域和策略集成表现最佳的 OTT 内容（Netflix、Disney+、YouTube、TikTok）。',
      },
      {
        title: '每月最多 625 件产品',
        text: '每个视频最多集成 25 件产品，以您的品牌呈现。',
      },
      {
        title: '每个视频 15 个品牌胶囊',
        text: '每个视频 25 个胶囊中，15 个为您保留；10 个归 Skoleom 产品。',
      },
      {
        title: '含媒体报道与抽奖活动',
        text: '每月 25 篇新闻报道、一篇新闻稿和一次抽奖活动。',
      },
    ],
    resultTag: '成果',
    resultText: '您的页面成为媒体、目录和销售点——集于一处，通过 Monetizer Studio® 进行管理。',
    monetizerAlt: 'Monetizer Studio — 管理您的 Store Page',
  },
  offers: {
    eyebrow: '订阅——创建您的 Audiovisual Store Page',
    h2: '3 种方案，1 个使命',
    lead: '为雄心勃勃的品牌、富有远见的创作者和快速成长的项目打造的 Audiovisual Store Pages。',
    prices: [
      {
        name: 'Starter',
        seg: '开启您的存在',
        monthLabel: '/ 月',
        items: ['每月 5 条内容', '标准仪表板（浏览量、点击量）', '产品胶囊', '标准设计'],
      },
      {
        name: 'Growth',
        seg: '加速您的增长',
        monthLabel: '/ 月',
        badge: '最受欢迎',
        items: ['每月 10 条内容', '高级仪表板（转化）', 'SeSync：5 个重定向平台', '产品胶囊'],
      },
      {
        name: 'Premium',
        seg: '主导您的市场',
        monthLabel: '/ 月',
        items: [
          '每月 25 条内容',
          '无限 SeSync，所有地区',
          '名人与运动员赞助*',
          '定制设计 + A/B 测试',
        ],
      },
    ],
    includeLabel: '所有方案均包含',
    includeText:
      '您专属形象的 Store Page · 托管与维护 · 安全与 GDPR · SEO / SEA · 全天候支持 · 高级分析 · ',
    includeStrong: '销售额 20 % 的 Skoleom 佣金。',
    note: '金额不含税，按品牌计。部分收入将重新分配给内容创作者和视听商店所有者。*关于名人视听商店的赞助，可应要求提供专属方案。',
  },
  finalCta: {
    eyebrow: '电商的未来是视听化的',
    h2a: '即刻启动',
    h2b: '您的',
    h2g1: 'audiovisual',
    h2g2: 'store page',
    sub: '您的品牌。您的内容。一种被看见、被触碰、被购买的全新方式。',
    cta: '注册',
    imgAlt: '启动您的 Audiovisual Store Page',
  },
};

const id: Partial<AudiovisualStorePageStrings> = {
  hero: {
    h1Line1: 'Merek Anda',
    h1Line2: 'menjadi sebuah',
    h1Line3: 'toko',
    h1Line4: 'audiovisual',
    sub1: 'Tidak ada lagi halaman produk biasa. Setiap konten menjadi saluran penjualan langsung —',
    subNb: 'segala yang ditonton langsung dapat dibeli.',
    imgAlt: 'Merek yang diubah menjadi toko audiovisual',
  },
  principe: {
    eyebrow: 'Prinsipnya',
    h2a: 'Dari menonton hingga membeli,',
    h2b: 'tanpa meninggalkan',
    h2mark: 'konten',
    steps: [
      {
        title: 'Tonton',
        text: 'Pengguna menonton siaran langsung, tayangan ulang, story, film, atau cuplikan TV — seperti biasa.',
      },
      {
        title: 'Sentuh',
        text: 'AI mengenali objek dan menampilkan kapsul sesuai permintaan. Tambahkan ke keranjang tanpa menghentikan aliran.',
      },
      {
        title: 'Beli',
        text: 'Skoleom SeSync dan Skoleom Pay memproses pembayaran di dalam video. Penonton melanjutkan pada time code yang sama.',
      },
    ],
    imgAlt: 'Konten yang di-skoleomisasi — dari menonton hingga membeli',
    shopHead: 'Produk serupa',
    shopHeadSub: 'SeSync · 4 item terdeteksi pada 00:42',
    products: [
      {
        brand: 'Arena',
        name: 'Baju renang satu potong',
        detail: 'Ukuran M · Marun',
        stock: 'Tersedia',
      },
      { brand: 'Speedo', name: 'Kacamata Fastskin', detail: 'Cermin · Dewasa', stock: 'Tersedia' },
      { brand: 'TYR', name: 'Topi silikon', detail: 'Hitam · Polos', stock: 'Tersedia' },
      { brand: 'Nike', name: 'Handuk mikrofiber', detail: '70 × 140 cm', stock: 'Sisa 3' },
    ],
    cartEmpty: 'Keranjang kosong',
    touchToBuy: 'Sentuh untuk membeli',
    stats: [
      { label: 'Negara distribusi' },
      { label: 'Platform OTT' },
      { label: 'Situs web terhubung' },
      { label: 'Video yang di-skoleomisasi / hari' },
    ],
  },
  platforms: {
    eyebrow: 'Satu platform saja',
    h2: '5 platform dalam satu',
    lead: 'Saat ini sebuah merek harus mengelola lima alat sekaligus. Skoleom menyatukannya: penyiaran video, integrasi produk, pembayaran di video, distribusi internasional, dan monetisasi.',
    flowFinal: 'Satu Audiovisual Store Page',
    flowAgency: 'Agensi kreatif',
    pillars: ['Media Anda', 'Katalog Anda', 'Toko Anda', 'Saluran penjualan Anda'],
    whyTitle: 'Mengapa video menjual hingga 10× lebih banyak daripada e-commerce klasik',
    whyStats: [
      { label: 'konversi' },
      { label: 'keterlibatan' },
      { label: 'konsumen yang terpengaruh' },
    ],
    note: '*Sumber: loopexdigital · Firework · Storyly.io',
  },
  contains: {
    eyebrow: 'Halaman Anda, setiap bulan',
    h2: 'Apa yang ada di Store Page Anda',
    feats: [
      {
        title: '25 video diterbitkan per bulan',
        text: 'Konten OTT berperforma terbaik (Netflix, Disney+, YouTube, TikTok) diintegrasikan sesuai zona dan strategi Anda.',
      },
      {
        title: 'Hingga 625 produk per bulan',
        text: 'Hingga 25 produk diintegrasikan per video, disajikan dengan merek Anda.',
      },
      {
        title: '15 kapsul merek per video',
        text: 'Dari 25 kapsul per video, 15 disediakan untuk Anda; 10 untuk produk Skoleom.',
      },
      {
        title: 'Pers & kuis berhadiah termasuk',
        text: '25 artikel pers, satu siaran pers, dan satu kuis berhadiah setiap bulan.',
      },
    ],
    resultTag: 'Hasilnya',
    resultText:
      'Halaman Anda menjadi media, katalog, dan titik penjualan — disatukan di satu tempat, dikelola dari Monetizer Studio®.',
    monetizerAlt: 'Monetizer Studio — kelola Store Page Anda',
  },
  offers: {
    eyebrow: 'Langganan — Buat Audiovisual Store Page Anda',
    h2: '3 penawaran, 1 misi',
    lead: 'Audiovisual Store Pages yang dirancang untuk merek ambisius, kreator visioner, dan proyek yang berkembang pesat.',
    prices: [
      {
        name: 'Starter',
        seg: 'Luncurkan kehadiran Anda',
        monthLabel: '/ bulan',
        items: [
          '5 konten / bulan',
          'Dasbor standar (tayangan, klik)',
          'Kapsul produk',
          'Desain standar',
        ],
      },
      {
        name: 'Growth',
        seg: 'Percepat pertumbuhan Anda',
        monthLabel: '/ bulan',
        badge: 'Paling populer',
        items: [
          '10 konten / bulan',
          'Dasbor lanjutan (konversi)',
          'SeSync: 5 platform pengalihan',
          'Kapsul produk',
        ],
      },
      {
        name: 'Premium',
        seg: 'Dominasi pasar Anda',
        monthLabel: '/ bulan',
        items: [
          '25 konten / bulan',
          'SeSync tanpa batas, semua wilayah',
          'Sponsor selebriti & atlet*',
          'Desain khusus + pengujian A/B',
        ],
      },
    ],
    includeLabel: 'Semua penawaran mencakup',
    includeText:
      'Store Page dengan citra Anda · hosting & pemeliharaan · keamanan & GDPR · SEO / SEA · dukungan 24/7 · analitik lanjutan · ',
    includeStrong: 'komisi Skoleom 20 % atas penjualan.',
    note: 'Jumlah belum termasuk pajak, per merek. Sebagian pendapatan didistribusikan kembali kepada kreator konten dan pemilik toko audiovisual. *Untuk sponsor toko audiovisual milik tokoh terkenal, penawaran khusus tersedia atas permintaan.',
  },
  finalCta: {
    eyebrow: 'Masa depan e-commerce adalah audiovisual',
    h2a: 'Luncurkan hari ini',
    h2b: 'juga',
    h2g1: 'audiovisual',
    h2g2: 'store page',
    sub: 'Merek Anda. Konten Anda. Cara baru untuk dilihat, disentuh, dan dibeli.',
    cta: 'Pendaftaran',
    imgAlt: 'Luncurkan Audiovisual Store Page Anda',
  },
};

const sw: Partial<AudiovisualStorePageStrings> = {
  hero: {
    h1Line1: 'Chapa yako',
    h1Line2: 'inakuwa',
    h1Line3: 'duka',
    h1Line4: 'la sauti-picha',
    sub1: 'Basi kwa ukurasa wa bidhaa wa kawaida. Kila maudhui yanakuwa njia ya moja kwa moja ya mauzo —',
    subNb: 'kila kitu unachokitazama kinakuwa kinunulika papo hapo.',
    imgAlt: 'Chapa iliyobadilishwa kuwa duka la sauti-picha',
  },
  principe: {
    eyebrow: 'Kanuni',
    h2a: 'Kutoka kutazama hadi kununua,',
    h2b: 'bila kuondoka kwenye',
    h2mark: 'maudhui',
    steps: [
      {
        title: 'Tazama',
        text: 'Mtumiaji anatazama matangazo ya moja kwa moja, urudiaji, hadithi, filamu au kipande cha TV — kama kawaida.',
      },
      {
        title: 'Gusa',
        text: 'AI inatambua kitu na kuonyesha kapsuli kwa ombi. Ongeza kwenye kikapu bila kukatiza mtiririko.',
      },
      {
        title: 'Nunua',
        text: 'Skoleom SeSync na Skoleom Pay hutekeleza malipo ndani ya video. Mtazamaji anaendelea kwenye time code ile ile.',
      },
    ],
    imgAlt: 'Maudhui yaliyoskoleomishwa — kutoka kutazama hadi kununua',
    shopHead: 'Bidhaa zinazofanana',
    shopHeadSub: 'SeSync · vipengee 4 vimetambuliwa saa 00:42',
    products: [
      {
        brand: 'Arena',
        name: 'Vazi la kuogelea la kipande kimoja',
        detail: 'Saizi M · Zambarau',
        stock: 'Inapatikana',
      },
      {
        brand: 'Speedo',
        name: 'Miwani ya Fastskin',
        detail: 'Kioo · Mtu mzima',
        stock: 'Inapatikana',
      },
      {
        brand: 'TYR',
        name: 'Kofia ya silikoni',
        detail: 'Nyeusi · Rangi moja',
        stock: 'Inapatikana',
      },
      { brand: 'Nike', name: 'Taulo ya microfiber', detail: '70 × 140 cm', stock: 'Zimebaki 3' },
    ],
    cartEmpty: 'Kikapu tupu',
    touchToBuy: 'Gusa ili kununua',
    stats: [
      { label: 'Nchi za usambazaji' },
      { label: 'Majukwaa ya OTT' },
      { label: 'Tovuti zilizounganishwa' },
      { label: 'Video zilizoskoleomishwa / siku' },
    ],
  },
  platforms: {
    eyebrow: 'Jukwaa moja tu',
    h2: 'Majukwaa 5 katika moja',
    lead: 'Leo chapa inahangaika na zana tano. Skoleom inaziunganisha: utangazaji wa video, ujumuishaji wa bidhaa, malipo ndani ya video, usambazaji wa kimataifa na uzalishaji wa mapato.',
    flowFinal: 'Audiovisual Store Page moja',
    flowAgency: 'Wakala wa ubunifu',
    pillars: ['Vyombo vyako vya habari', 'Katalogi yako', 'Duka lako', 'Njia yako ya mauzo'],
    whyTitle: 'Kwa nini video huuza hadi mara 10× zaidi ya biashara ya kawaida ya mtandaoni',
    whyStats: [
      { label: 'ya ubadilishaji' },
      { label: 'ya ushirikiano' },
      { label: 'ya watumiaji walioshawishiwa' },
    ],
    note: '*Chanzo: loopexdigital · Firework · Storyly.io',
  },
  contains: {
    eyebrow: 'Ukurasa wako, kila mwezi',
    h2: 'Kile kilichomo katika Store Page yako',
    feats: [
      {
        title: 'Video 25 zinazochapishwa kwa mwezi',
        text: 'Maudhui ya OTT yanayofanya vizuri zaidi (Netflix, Disney+, YouTube, TikTok) yameunganishwa kulingana na eneo na mkakati wako.',
      },
      {
        title: 'Hadi bidhaa 625 kwa mwezi',
        text: 'Hadi bidhaa 25 zilizounganishwa kwa kila video, zikiwasilishwa na chapa yako.',
      },
      {
        title: 'Kapsuli 15 za chapa kwa kila video',
        text: 'Kati ya kapsuli 25 kwa video, 15 zimehifadhiwa kwa ajili yako; 10 huenda kwa bidhaa za Skoleom.',
      },
      {
        title: 'Vyombo vya habari na mashindano vimejumuishwa',
        text: 'Makala 25 ya vyombo vya habari, taarifa moja kwa vyombo vya habari na shindano moja kila mwezi.',
      },
    ],
    resultTag: 'Matokeo',
    resultText:
      'Ukurasa wako unakuwa chombo cha habari, katalogi na sehemu ya mauzo — vimeunganishwa mahali pamoja, vikidhibitiwa kutoka Monetizer Studio®.',
    monetizerAlt: 'Monetizer Studio — dhibiti Store Page yako',
  },
  offers: {
    eyebrow: 'Usajili — Unda Audiovisual Store Page yako',
    h2: 'Ofa 3, dhamira 1',
    lead: 'Audiovisual Store Pages zilizoundwa kwa ajili ya chapa zenye matarajio, wabunifu wenye maono na miradi inayokua kwa kasi.',
    prices: [
      {
        name: 'Starter',
        seg: 'Zindua uwepo wako',
        monthLabel: '/ mwezi',
        items: [
          'Maudhui 5 / mwezi',
          'Dashibodi ya kawaida (mwonekano, mibofyo)',
          'Kapsuli za bidhaa',
          'Muundo wa kawaida',
        ],
      },
      {
        name: 'Growth',
        seg: 'Ongeza kasi ya ukuaji wako',
        monthLabel: '/ mwezi',
        badge: 'Maarufu zaidi',
        items: [
          'Maudhui 10 / mwezi',
          'Dashibodi ya kina (ubadilishaji)',
          'SeSync: majukwaa 5 ya uelekezaji',
          'Kapsuli za bidhaa',
        ],
      },
      {
        name: 'Premium',
        seg: 'Tawala soko lako',
        monthLabel: '/ mwezi',
        items: [
          'Maudhui 25 / mwezi',
          'SeSync isiyo na kikomo, maeneo yote',
          'Ufadhili wa watu mashuhuri na wanamichezo*',
          'Muundo maalum + upimaji wa A/B',
        ],
      },
    ],
    includeLabel: 'Ofa zote zinajumuisha',
    includeText:
      'Store Page yako yenye sura yako · upangishaji & matengenezo · usalama & GDPR · SEO / SEA · usaidizi 24/7 · uchanganuzi wa kina · ',
    includeStrong: 'tume ya Skoleom ya 20 % kwa mauzo.',
    note: 'Kiasi bila kodi, kwa kila chapa. Sehemu ya mapato husambazwa upya kwa wabunifu wa maudhui na wamiliki wa maduka ya sauti-picha. *Kwa ufadhili wa maduka ya sauti-picha ya watu mashuhuri, ofa maalum zinapatikana kwa ombi.',
  },
  finalCta: {
    eyebrow: 'Mustakabali wa biashara ya mtandaoni ni wa sauti-picha',
    h2a: 'Zindua leo hii',
    h2b: 'yako',
    h2g1: 'audiovisual',
    h2g2: 'store page',
    sub: 'Chapa yako. Maudhui yako. Njia mpya ya kuonekana, kuguswa na kununuliwa.',
    cta: 'Usajili',
    imgAlt: 'Zindua Audiovisual Store Page yako',
  },
};

const I18N: Partial<Record<string, Partial<AudiovisualStorePageStrings>>> = {
  en,
  es,
  de,
  it,
  pt,
  nl,
  ru,
  ar,
  hi,
  zh,
  id,
  sw,
};

/**
 * Deep-merge FR (source) avec la surcouche de langue.
 * Fallback par clé sur le FR : toute chaîne manquante reste en français.
 */
export function getAudiovisualStorePageStrings(lang: string): AudiovisualStorePageStrings {
  const over = I18N[lang];
  if (!over) return FR;

  const mergeArr = <T>(base: T[], ov: T[] | undefined): T[] => {
    if (!ov) return base;
    return base.map((b, i) => {
      const o = ov[i];
      if (o === null || o === undefined) return b;
      if (typeof b === 'object' && b !== null && !Array.isArray(b)) {
        return { ...(b as object), ...(o as object) } as T;
      }
      return o;
    });
  };

  return {
    hero: { ...FR.hero, ...over.hero },
    principe: {
      ...FR.principe,
      ...over.principe,
      steps: mergeArr(FR.principe.steps, over.principe?.steps),
      products: mergeArr(FR.principe.products, over.principe?.products),
      stats: mergeArr(FR.principe.stats, over.principe?.stats),
    },
    platforms: {
      ...FR.platforms,
      ...over.platforms,
      pillars: over.platforms?.pillars ?? FR.platforms.pillars,
      whyStats: mergeArr(FR.platforms.whyStats, over.platforms?.whyStats),
    },
    contains: {
      ...FR.contains,
      ...over.contains,
      feats: mergeArr(FR.contains.feats, over.contains?.feats),
    },
    offers: {
      ...FR.offers,
      ...over.offers,
      prices: mergeArr(FR.offers.prices, over.offers?.prices).map((p, i) => ({
        ...FR.offers.prices[i],
        ...p,
        items: over.offers?.prices?.[i]?.items ?? FR.offers.prices[i].items,
      })),
    },
    finalCta: { ...FR.finalCta, ...over.finalCta },
  };
}
