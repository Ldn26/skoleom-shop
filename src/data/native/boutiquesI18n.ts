/**
 * Traductions de la page « Boutiques » native (multilingue).
 * La source FR (= contenu actuel de BoutiquesNativePage.tsx) vit ici dans FR ;
 * I18N stocke les surcouches par langue. Toute clé absente retombe sur le FR
 * (per-key fallback, aucune régression).
 *
 * Ne sont PAS traduits (marques, noms propres, produits, chiffres) :
 * Skoleom, noms de boutiques, « Watch. Touch. Buy. », SeSync, Monetizer Studio,
 * Skoleom Pay, Oracle, titres d'étapes WATCH/TOUCH/BUY/EARN, noms produits
 * capsules, prix, libellés de stats chiffrés, badges LIVE/HOT/TOP.
 */

/** Clés stables des univers (UNIV_CARDS, par `store`). */
type UnivKey =
  | 'sesports'
  | 'cares'
  | 'games'
  | 'invest'
  | 'services'
  | 'fnb'
  | 'travel'
  | 'music'
  | 'watch'
  | 'realestate'
  | 'publishing';

/** Clés stables des étapes « Comment ça marche ». */
type HiwKey = 'watch' | 'touch' | 'buy' | 'earn';

export interface BoutiquesStrings {
  /* HERO */
  heroH1Line1: string;
  heroH1Line2: string;
  heroH1Line3: string;
  heroSubBefore: string; // texte avant le <em>
  heroSubEm: string; // contenu du <em>
  heroSubAfter: string; // texte après le <em>
  heroCtaExplore: string;
  heroCtaUniverse: string;
  /** Libellés des 4 HERO_STATS (mêmes index). */
  heroStatLabels: [string, string, string, string];

  /* FEATURED */
  featuredLabel: string;
  featuredTitle: string;
  seeAll: string;
  /** Carte vedette principale (sesports). */
  featBigDesc: string;
  featProductsLabel: string; // « produits actifs »
  featViewsLabel: string; // « vues/mois »
  featBuyExplore: string; // « Explorer la boutique »
  /** Carte music. */
  featMusicDesc: string;
  /** Carte fashion. */
  featFashionDesc: string;
  badgeNew: string; // « NOUVEAU »
  explore: string; // « Explorer »

  /* UNIVERSE */
  univLabel: string;
  univTitle: string;
  allBoutiques: string; // « Toutes les boutiques »
  ariaViewMode: string;
  ariaGridView: string;
  ariaCarouselView: string;
  ucDiscover: string; // « Découvrir l'univers »
  /** Descriptions des 11 cartes univers, par store. */
  univDesc: Record<UnivKey, string>;
  /** Libellés de stats réutilisés. */
  statBoutiques: string;
  statStudios: string;
  statViewsMonth: string; // « vues/mois »
  statActiveProducts: string; // « produits actifs »

  /* HOW IT WORKS */
  hiwLabel: string;
  /** Textes des 4 étapes, par clé. */
  hiwText: Record<HiwKey, string>;
  capsulesLabel: string; // « Capsules interactives »
  cartAdded: string; // aria « Ajouté au panier »
  cartAdd: string; // aria « Ajouter au panier »

  /* STATS BANNER */
  bannerLabels: [string, string, string, string, string];

  /* LAUNCH */
  launchLabel: string;
  launchTitleLine1: string;
  launchTitleLine2: string;
  launchSub: string;
  launchCreate: string; // « Créer ma boutique »
  launchPricing: string; // « Voir les tarifs »
}

const FR: BoutiquesStrings = {
  heroH1Line1: 'Tout ce que',
  heroH1Line2: 'vous regardez',
  heroH1Line3: "s'achète.",
  heroSubBefore: 'Skoleom transforme chaque vidéo en boutique interactive. ',
  heroSubEm: "Touchez n'importe quoi.",
  heroSubAfter: ' Possédez tout. Instantanément. Sans jamais quitter le contenu.',
  heroCtaExplore: 'Explorer les boutiques',
  heroCtaUniverse: 'Univers par catégorie',
  heroStatLabels: [
    'Vidéos skoléomisées/jour',
    'Personnes exposées',
    'Pays connectés',
    'Produits intégrés',
  ],

  featuredLabel: 'BOUTIQUES EN VEDETTE',
  featuredTitle: 'Les plus populaires maintenant',
  seeAll: 'Voir tout',
  featBigDesc:
    'La boutique audiovisuelle sport ultime. Équipements premium, nutrition, vêtements — achetez directement pendant les matchs en direct.',
  featProductsLabel: 'produits actifs',
  featViewsLabel: 'vues/mois',
  featBuyExplore: 'Explorer la boutique',
  featMusicDesc: 'Instruments, merch, vinyles — achetez dans les clips.',
  featFashionDesc: 'Mode, beauté et luxe intégrés dans les défilés et vlogs.',
  badgeNew: 'NOUVEAU',
  explore: 'Explorer',

  univLabel: 'BOUTIQUES AUDIOVISUELLES',
  univTitle: 'Toutes les boutiques officielles',
  allBoutiques: 'Toutes les boutiques',
  ariaViewMode: "Mode d'affichage des boutiques",
  ariaGridView: 'Affichage en blocs',
  ariaCarouselView: 'Affichage en carrousel',
  ucDiscover: "Découvrir l'univers",
  univDesc: {
    sesports:
      'Univers sport interactif : video-to-commerce, retail média et fan engagement. La boutique audiovisuelle officielle du groupe pour les marques sport.',
    cares:
      "Impact social et programmes dédiés — l'engagement et les causes au cœur de l'expérience audiovisuelle shoppable.",
    games:
      'Jeux, IP et monétisation in-game. Capsules interactives intégrées aux streams et contenus gaming préférés.',
    invest:
      "Levées, véhicules et structuration — la boutique audiovisuelle dédiée à l'investissement et au financement de projets.",
    services:
      'Services et accompagnement groupe — solutions professionnelles accessibles directement depuis les contenus audiovisuels.',
    fnb: 'Food & beverage, marques gourmandes et expériences culinaires — commandez en regardant recettes, lives et formats food.',
    travel:
      'Mobilité, hospitality et contenus voyage — réservez et achetez pendant les documentaires, vlogs et expériences immersives.',
    music:
      "Label, artistes et merchandising — capsules d'achat directes dans les clips, lives et concerts audiovisuels.",
    watch:
      "L'expérience OTT shoppable : films, séries et lives où chaque produit visible devient accessible en un tap.",
    realestate:
      "Promotions, lieux et retail centers — l'immobilier rendu shoppable dans les contenus audiovisuels et visites virtuelles.",
    publishing:
      "Édition transmédia et catalogues — livres, magazines et contenus enrichis de capsules d'achat intégrées.",
  },
  statBoutiques: 'boutiques',
  statStudios: 'studios',
  statViewsMonth: 'vues/mois',
  statActiveProducts: 'produits actifs',

  hiwLabel: 'COMMENT ÇA MARCHE',
  hiwText: {
    watch:
      "L'utilisateur regarde un live, un replay, une story, un film ou un extrait TV sur n'importe quelle plateforme connectée à Skoleom (+2 000 OTT, +1B sites).",
    touch:
      "L'IA Skoleom reconnaît l'objet dans la vidéo et affiche une capsule interactive à la demande (tap, touch ou commande vocale). Ajout au panier intégré sans pause du flux.",
    buy: "SeSync® et Skoleom Pay exécutent le paiement dans la vidéo. L'utilisateur reprend le contenu au même timecode. La transaction se fait en arrière-plan, invisible.",
    earn: 'Le créateur de contenu, le propriétaire de la boutique et Skoleom se partagent les revenus en temps réel via le Token et Monetizer Studio powered by Oracle.',
  },
  capsulesLabel: 'Capsules interactives',
  cartAdded: 'Ajouté au panier',
  cartAdd: 'Ajouter au panier',

  bannerLabels: [
    'Vidéos skoléomisées/jour',
    'Personnes exposées quotidiennement',
    'Plateformes OTT connectées',
    "Produits dans l'écosystème",
    'Pays de distribution',
  ],

  launchLabel: 'POUR LES MARQUES & CRÉATEURS',
  launchTitleLine1: 'Lancez votre',
  launchTitleLine2: 'boutique audiovisuelle',
  launchSub:
    "Rejoignez l'écosystème Skoleom et transformez vos contenus en machine à vendre. 25 vidéos/mois × 25 produits = 625 produits distribués dans les milliards de contenus les plus vus au monde.",
  launchCreate: 'Créer ma boutique',
  launchPricing: 'Voir les tarifs',
};

const I18N: Partial<Record<string, Partial<BoutiquesStrings>>> = {
  en: {
    heroH1Line1: 'Everything you',
    heroH1Line2: 'watch',
    heroH1Line3: 'is shoppable.',
    heroSubBefore: 'Skoleom turns every video into an interactive store. ',
    heroSubEm: 'Touch anything.',
    heroSubAfter: ' Own everything. Instantly. Without ever leaving the content.',
    heroCtaExplore: 'Explore the stores',
    heroCtaUniverse: 'Universe by category',
    heroStatLabels: [
      'Skoleomized videos/day',
      'People reached',
      'Connected countries',
      'Integrated products',
    ],
    featuredLabel: 'FEATURED STORES',
    featuredTitle: 'Most popular right now',
    seeAll: 'See all',
    featBigDesc:
      'The ultimate audiovisual sports store. Premium gear, nutrition, apparel — buy directly during live games.',
    featProductsLabel: 'active products',
    featViewsLabel: 'views/month',
    featBuyExplore: 'Explore the store',
    featMusicDesc: 'Instruments, merch, vinyl — buy inside the music videos.',
    featFashionDesc: 'Fashion, beauty and luxury embedded in runway shows and vlogs.',
    badgeNew: 'NEW',
    explore: 'Explore',
    univLabel: 'AUDIOVISUAL STORES',
    univTitle: 'All official stores',
    allBoutiques: 'All stores',
    ariaViewMode: 'Store display mode',
    ariaGridView: 'Block view',
    ariaCarouselView: 'Carousel view',
    ucDiscover: 'Discover the universe',
    univDesc: {
      sesports:
        'Interactive sports universe: video-to-commerce, retail media and fan engagement. The group’s official audiovisual store for sports brands.',
      cares:
        'Social impact and dedicated programs — engagement and causes at the heart of the shoppable audiovisual experience.',
      games:
        'Games, IP and in-game monetization. Interactive capsules embedded in your favorite streams and gaming content.',
      invest:
        'Fundraising, vehicles and structuring — the audiovisual store dedicated to investment and project financing.',
      services:
        'Group services and support — professional solutions accessible directly from audiovisual content.',
      fnb: 'Food & beverage, gourmet brands and culinary experiences — order while watching recipes, lives and food formats.',
      travel:
        'Mobility, hospitality and travel content — book and buy during documentaries, vlogs and immersive experiences.',
      music:
        'Label, artists and merchandising — direct purchase capsules in music videos, lives and audiovisual concerts.',
      watch:
        'The shoppable OTT experience: movies, series and lives where every visible product becomes accessible in one tap.',
      realestate:
        'Developments, venues and retail centers — real estate made shoppable in audiovisual content and virtual tours.',
      publishing:
        'Transmedia publishing and catalogs — books, magazines and content enriched with embedded purchase capsules.',
    },
    statBoutiques: 'stores',
    statStudios: 'studios',
    statViewsMonth: 'views/month',
    statActiveProducts: 'active products',
    hiwLabel: 'HOW IT WORKS',
    hiwText: {
      watch:
        'The user watches a live, replay, story, film or TV clip on any platform connected to Skoleom (2,000+ OTT, 1B+ sites).',
      touch:
        'Skoleom AI recognizes the object in the video and displays an interactive capsule on demand (tap, touch or voice command). Built-in add to cart without pausing the stream.',
      buy: 'SeSync® and Skoleom Pay process the payment inside the video. The user resumes the content at the same timecode. The transaction happens in the background, invisibly.',
      earn: 'The content creator, the store owner and Skoleom share revenue in real time via the Token and Monetizer Studio powered by Oracle.',
    },
    capsulesLabel: 'Interactive capsules',
    cartAdded: 'Added to cart',
    cartAdd: 'Add to cart',
    bannerLabels: [
      'Skoleomized videos/day',
      'People reached daily',
      'Connected OTT platforms',
      'Products in the ecosystem',
      'Distribution countries',
    ],
    launchLabel: 'FOR BRANDS & CREATORS',
    launchTitleLine1: 'Launch your',
    launchTitleLine2: 'audiovisual store',
    launchSub:
      'Join the Skoleom ecosystem and turn your content into a selling machine. 25 videos/month × 25 products = 625 products distributed across the billions of most-watched content worldwide.',
    launchCreate: 'Create my store',
    launchPricing: 'See pricing',
  },

  es: {
    heroH1Line1: 'Todo lo que',
    heroH1Line2: 'miras',
    heroH1Line3: 'se compra.',
    heroSubBefore: 'Skoleom convierte cada vídeo en una tienda interactiva. ',
    heroSubEm: 'Toca cualquier cosa.',
    heroSubAfter: ' Posee todo. Al instante. Sin salir nunca del contenido.',
    heroCtaExplore: 'Explorar las tiendas',
    heroCtaUniverse: 'Universo por categoría',
    heroStatLabels: [
      'Vídeos skoleomizados/día',
      'Personas alcanzadas',
      'Países conectados',
      'Productos integrados',
    ],
    featuredLabel: 'TIENDAS DESTACADAS',
    featuredTitle: 'Las más populares ahora',
    seeAll: 'Ver todo',
    featBigDesc:
      'La tienda audiovisual deportiva definitiva. Equipamiento premium, nutrición, ropa: compra directamente durante los partidos en directo.',
    featProductsLabel: 'productos activos',
    featViewsLabel: 'vistas/mes',
    featBuyExplore: 'Explorar la tienda',
    featMusicDesc: 'Instrumentos, merch, vinilos: compra dentro de los videoclips.',
    featFashionDesc: 'Moda, belleza y lujo integrados en desfiles y vlogs.',
    badgeNew: 'NUEVO',
    explore: 'Explorar',
    univLabel: 'TIENDAS AUDIOVISUALES',
    univTitle: 'Todas las tiendas oficiales',
    allBoutiques: 'Todas las tiendas',
    ariaViewMode: 'Modo de visualización de las tiendas',
    ariaGridView: 'Vista en bloques',
    ariaCarouselView: 'Vista en carrusel',
    ucDiscover: 'Descubrir el universo',
    univDesc: {
      sesports:
        'Universo deportivo interactivo: video-to-commerce, retail media y fan engagement. La tienda audiovisual oficial del grupo para las marcas deportivas.',
      cares:
        'Impacto social y programas dedicados: el compromiso y las causas en el centro de la experiencia audiovisual comprable.',
      games:
        'Juegos, IP y monetización in-game. Cápsulas interactivas integradas en tus streams y contenidos de gaming favoritos.',
      invest:
        'Rondas, vehículos y estructuración: la tienda audiovisual dedicada a la inversión y la financiación de proyectos.',
      services:
        'Servicios y acompañamiento del grupo: soluciones profesionales accesibles directamente desde los contenidos audiovisuales.',
      fnb: 'Food & beverage, marcas gourmet y experiencias culinarias: pide mientras ves recetas, directos y formatos food.',
      travel:
        'Movilidad, hospitality y contenidos de viaje: reserva y compra durante documentales, vlogs y experiencias inmersivas.',
      music:
        'Sello, artistas y merchandising: cápsulas de compra directa en videoclips, directos y conciertos audiovisuales.',
      watch:
        'La experiencia OTT comprable: películas, series y directos donde cada producto visible se vuelve accesible con un toque.',
      realestate:
        'Promociones, lugares y retail centers: el inmobiliario hecho comprable en los contenidos audiovisuales y visitas virtuales.',
      publishing:
        'Edición transmedia y catálogos: libros, revistas y contenidos enriquecidos con cápsulas de compra integradas.',
    },
    statBoutiques: 'tiendas',
    statStudios: 'estudios',
    statViewsMonth: 'vistas/mes',
    statActiveProducts: 'productos activos',
    hiwLabel: 'CÓMO FUNCIONA',
    hiwText: {
      watch:
        'El usuario mira un directo, una repetición, una story, una película o un extracto de TV en cualquier plataforma conectada a Skoleom (+2000 OTT, +1B sitios).',
      touch:
        'La IA de Skoleom reconoce el objeto en el vídeo y muestra una cápsula interactiva a demanda (tap, touch o comando de voz). Añadir al carrito integrado sin pausar el flujo.',
      buy: 'SeSync® y Skoleom Pay ejecutan el pago dentro del vídeo. El usuario retoma el contenido en el mismo timecode. La transacción se realiza en segundo plano, invisible.',
      earn: 'El creador de contenido, el propietario de la tienda y Skoleom se reparten los ingresos en tiempo real mediante el Token y Monetizer Studio powered by Oracle.',
    },
    capsulesLabel: 'Cápsulas interactivas',
    cartAdded: 'Añadido al carrito',
    cartAdd: 'Añadir al carrito',
    bannerLabels: [
      'Vídeos skoleomizados/día',
      'Personas alcanzadas a diario',
      'Plataformas OTT conectadas',
      'Productos en el ecosistema',
      'Países de distribución',
    ],
    launchLabel: 'PARA MARCAS Y CREADORES',
    launchTitleLine1: 'Lanza tu',
    launchTitleLine2: 'tienda audiovisual',
    launchSub:
      'Únete al ecosistema Skoleom y convierte tus contenidos en una máquina de vender. 25 vídeos/mes × 25 productos = 625 productos distribuidos en los miles de millones de contenidos más vistos del mundo.',
    launchCreate: 'Crear mi tienda',
    launchPricing: 'Ver tarifas',
  },

  de: {
    heroH1Line1: 'Alles, was du',
    heroH1Line2: 'ansiehst,',
    heroH1Line3: 'ist kaufbar.',
    heroSubBefore: 'Skoleom verwandelt jedes Video in einen interaktiven Shop. ',
    heroSubEm: 'Berühre alles.',
    heroSubAfter: ' Besitze alles. Sofort. Ohne den Inhalt je zu verlassen.',
    heroCtaExplore: 'Shops entdecken',
    heroCtaUniverse: 'Universum nach Kategorie',
    heroStatLabels: [
      'Skoleomisierte Videos/Tag',
      'Erreichte Personen',
      'Verbundene Länder',
      'Integrierte Produkte',
    ],
    featuredLabel: 'EMPFOHLENE SHOPS',
    featuredTitle: 'Gerade am beliebtesten',
    seeAll: 'Alle ansehen',
    featBigDesc:
      'Der ultimative audiovisuelle Sport-Shop. Premium-Ausrüstung, Ernährung, Bekleidung — kaufe direkt während der Live-Spiele.',
    featProductsLabel: 'aktive Produkte',
    featViewsLabel: 'Aufrufe/Monat',
    featBuyExplore: 'Shop entdecken',
    featMusicDesc: 'Instrumente, Merch, Vinyl — kaufe in den Musikvideos.',
    featFashionDesc: 'Mode, Beauty und Luxus eingebettet in Modenschauen und Vlogs.',
    badgeNew: 'NEU',
    explore: 'Entdecken',
    univLabel: 'AUDIOVISUELLE SHOPS',
    univTitle: 'Alle offiziellen Shops',
    allBoutiques: 'Alle Shops',
    ariaViewMode: 'Anzeigemodus der Shops',
    ariaGridView: 'Blockansicht',
    ariaCarouselView: 'Karussellansicht',
    ucDiscover: 'Universum entdecken',
    univDesc: {
      sesports:
        'Interaktives Sport-Universum: Video-to-Commerce, Retail Media und Fan-Engagement. Der offizielle audiovisuelle Shop der Gruppe für Sportmarken.',
      cares:
        'Soziale Wirkung und gezielte Programme — Engagement und gute Zwecke im Zentrum des kaufbaren audiovisuellen Erlebnisses.',
      games:
        'Spiele, IP und In-Game-Monetarisierung. Interaktive Kapseln, eingebettet in deine liebsten Streams und Gaming-Inhalte.',
      invest:
        'Finanzierungsrunden, Vehikel und Strukturierung — der audiovisuelle Shop für Investitionen und Projektfinanzierung.',
      services:
        'Konzerndienste und Begleitung — professionelle Lösungen, direkt aus audiovisuellen Inhalten zugänglich.',
      fnb: 'Food & Beverage, Gourmet-Marken und kulinarische Erlebnisse — bestelle, während du Rezepte, Lives und Food-Formate ansiehst.',
      travel:
        'Mobilität, Hospitality und Reiseinhalte — buche und kaufe während Dokus, Vlogs und immersiven Erlebnissen.',
      music:
        'Label, Künstler und Merchandising — direkte Kaufkapseln in Musikvideos, Lives und audiovisuellen Konzerten.',
      watch:
        'Das kaufbare OTT-Erlebnis: Filme, Serien und Lives, in denen jedes sichtbare Produkt mit einem Tap zugänglich wird.',
      realestate:
        'Bauträger, Standorte und Retail-Center — Immobilien kaufbar gemacht in audiovisuellen Inhalten und virtuellen Touren.',
      publishing:
        'Transmediales Publishing und Kataloge — Bücher, Magazine und Inhalte, angereichert mit integrierten Kaufkapseln.',
    },
    statBoutiques: 'Shops',
    statStudios: 'Studios',
    statViewsMonth: 'Aufrufe/Monat',
    statActiveProducts: 'aktive Produkte',
    hiwLabel: 'SO FUNKTIONIERT ES',
    hiwText: {
      watch:
        'Der Nutzer schaut einen Live-Stream, ein Replay, eine Story, einen Film oder einen TV-Ausschnitt auf jeder mit Skoleom verbundenen Plattform (+2.000 OTT, +1 Mrd. Websites).',
      touch:
        'Die Skoleom-KI erkennt das Objekt im Video und zeigt auf Wunsch eine interaktive Kapsel an (Tap, Touch oder Sprachbefehl). Integriertes Hinzufügen zum Warenkorb ohne Pause des Streams.',
      buy: 'SeSync® und Skoleom Pay wickeln die Zahlung im Video ab. Der Nutzer setzt den Inhalt am selben Timecode fort. Die Transaktion läuft im Hintergrund, unsichtbar.',
      earn: 'Der Content-Creator, der Shop-Inhaber und Skoleom teilen sich die Einnahmen in Echtzeit über den Token und Monetizer Studio powered by Oracle.',
    },
    capsulesLabel: 'Interaktive Kapseln',
    cartAdded: 'Zum Warenkorb hinzugefügt',
    cartAdd: 'Zum Warenkorb hinzufügen',
    bannerLabels: [
      'Skoleomisierte Videos/Tag',
      'Täglich erreichte Personen',
      'Verbundene OTT-Plattformen',
      'Produkte im Ökosystem',
      'Vertriebsländer',
    ],
    launchLabel: 'FÜR MARKEN & CREATOR',
    launchTitleLine1: 'Starte deinen',
    launchTitleLine2: 'audiovisuellen Shop',
    launchSub:
      'Tritt dem Skoleom-Ökosystem bei und verwandle deine Inhalte in eine Verkaufsmaschine. 25 Videos/Monat × 25 Produkte = 625 Produkte, verteilt in den Milliarden meistgesehener Inhalte weltweit.',
    launchCreate: 'Meinen Shop erstellen',
    launchPricing: 'Preise ansehen',
  },

  it: {
    heroH1Line1: 'Tutto ciò che',
    heroH1Line2: 'guardi',
    heroH1Line3: 'si acquista.',
    heroSubBefore: 'Skoleom trasforma ogni video in un negozio interattivo. ',
    heroSubEm: 'Tocca qualsiasi cosa.',
    heroSubAfter: ' Possiedi tutto. Istantaneamente. Senza mai lasciare il contenuto.',
    heroCtaExplore: 'Esplora i negozi',
    heroCtaUniverse: 'Universo per categoria',
    heroStatLabels: [
      'Video skoleomizzati/giorno',
      'Persone raggiunte',
      'Paesi connessi',
      'Prodotti integrati',
    ],
    featuredLabel: 'NEGOZI IN EVIDENZA',
    featuredTitle: 'I più popolari ora',
    seeAll: 'Vedi tutto',
    featBigDesc:
      'Il negozio audiovisivo sportivo definitivo. Attrezzatura premium, nutrizione, abbigliamento — acquista direttamente durante le partite in diretta.',
    featProductsLabel: 'prodotti attivi',
    featViewsLabel: 'visualizzazioni/mese',
    featBuyExplore: 'Esplora il negozio',
    featMusicDesc: 'Strumenti, merch, vinili — acquista nei videoclip.',
    featFashionDesc: 'Moda, beauty e lusso integrati nelle sfilate e nei vlog.',
    badgeNew: 'NUOVO',
    explore: 'Esplora',
    univLabel: 'NEGOZI AUDIOVISIVI',
    univTitle: 'Tutti i negozi ufficiali',
    allBoutiques: 'Tutti i negozi',
    ariaViewMode: 'Modalità di visualizzazione dei negozi',
    ariaGridView: 'Vista a blocchi',
    ariaCarouselView: 'Vista a carosello',
    ucDiscover: 'Scopri l’universo',
    univDesc: {
      sesports:
        'Universo sportivo interattivo: video-to-commerce, retail media e fan engagement. Il negozio audiovisivo ufficiale del gruppo per i marchi sportivi.',
      cares:
        'Impatto sociale e programmi dedicati — l’impegno e le cause al centro dell’esperienza audiovisiva acquistabile.',
      games:
        'Giochi, IP e monetizzazione in-game. Capsule interattive integrate negli stream e nei contenuti gaming preferiti.',
      invest:
        'Raccolte, veicoli e strutturazione — il negozio audiovisivo dedicato all’investimento e al finanziamento di progetti.',
      services:
        'Servizi e accompagnamento del gruppo — soluzioni professionali accessibili direttamente dai contenuti audiovisivi.',
      fnb: 'Food & beverage, marchi gourmet ed esperienze culinarie — ordina guardando ricette, live e formati food.',
      travel:
        'Mobilità, hospitality e contenuti di viaggio — prenota e acquista durante documentari, vlog ed esperienze immersive.',
      music:
        'Etichetta, artisti e merchandising — capsule di acquisto diretto in videoclip, live e concerti audiovisivi.',
      watch:
        'L’esperienza OTT acquistabile: film, serie e live dove ogni prodotto visibile diventa accessibile con un tap.',
      realestate:
        'Promozioni, luoghi e retail center — l’immobiliare reso acquistabile nei contenuti audiovisivi e nei tour virtuali.',
      publishing:
        'Editoria transmediale e cataloghi — libri, riviste e contenuti arricchiti con capsule di acquisto integrate.',
    },
    statBoutiques: 'negozi',
    statStudios: 'studi',
    statViewsMonth: 'visualizzazioni/mese',
    statActiveProducts: 'prodotti attivi',
    hiwLabel: 'COME FUNZIONA',
    hiwText: {
      watch:
        'L’utente guarda un live, un replay, una story, un film o un estratto TV su qualsiasi piattaforma connessa a Skoleom (+2.000 OTT, +1B siti).',
      touch:
        'L’IA di Skoleom riconosce l’oggetto nel video e mostra una capsula interattiva su richiesta (tap, touch o comando vocale). Aggiunta al carrello integrata senza interrompere il flusso.',
      buy: 'SeSync® e Skoleom Pay eseguono il pagamento nel video. L’utente riprende il contenuto allo stesso timecode. La transazione avviene in background, invisibile.',
      earn: 'Il creatore di contenuti, il proprietario del negozio e Skoleom si dividono i ricavi in tempo reale tramite il Token e Monetizer Studio powered by Oracle.',
    },
    capsulesLabel: 'Capsule interattive',
    cartAdded: 'Aggiunto al carrello',
    cartAdd: 'Aggiungi al carrello',
    bannerLabels: [
      'Video skoleomizzati/giorno',
      'Persone raggiunte ogni giorno',
      'Piattaforme OTT connesse',
      'Prodotti nell’ecosistema',
      'Paesi di distribuzione',
    ],
    launchLabel: 'PER MARCHI E CREATOR',
    launchTitleLine1: 'Lancia il tuo',
    launchTitleLine2: 'negozio audiovisivo',
    launchSub:
      'Unisciti all’ecosistema Skoleom e trasforma i tuoi contenuti in una macchina per vendere. 25 video/mese × 25 prodotti = 625 prodotti distribuiti nei miliardi di contenuti più visti al mondo.',
    launchCreate: 'Crea il mio negozio',
    launchPricing: 'Vedi le tariffe',
  },

  pt: {
    heroH1Line1: 'Tudo o que',
    heroH1Line2: 'você vê',
    heroH1Line3: 'compra-se.',
    heroSubBefore: 'A Skoleom transforma cada vídeo numa loja interativa. ',
    heroSubEm: 'Toque em qualquer coisa.',
    heroSubAfter: ' Possua tudo. Instantaneamente. Sem nunca sair do conteúdo.',
    heroCtaExplore: 'Explorar as lojas',
    heroCtaUniverse: 'Universo por categoria',
    heroStatLabels: [
      'Vídeos skoleomizados/dia',
      'Pessoas alcançadas',
      'Países conectados',
      'Produtos integrados',
    ],
    featuredLabel: 'LOJAS EM DESTAQUE',
    featuredTitle: 'As mais populares agora',
    seeAll: 'Ver tudo',
    featBigDesc:
      'A loja audiovisual desportiva definitiva. Equipamento premium, nutrição, vestuário — compre diretamente durante os jogos em direto.',
    featProductsLabel: 'produtos ativos',
    featViewsLabel: 'visualizações/mês',
    featBuyExplore: 'Explorar a loja',
    featMusicDesc: 'Instrumentos, merch, vinis — compre nos videoclipes.',
    featFashionDesc: 'Moda, beleza e luxo integrados em desfiles e vlogs.',
    badgeNew: 'NOVO',
    explore: 'Explorar',
    univLabel: 'LOJAS AUDIOVISUAIS',
    univTitle: 'Todas as lojas oficiais',
    allBoutiques: 'Todas as lojas',
    ariaViewMode: 'Modo de exibição das lojas',
    ariaGridView: 'Vista em blocos',
    ariaCarouselView: 'Vista em carrossel',
    ucDiscover: 'Descobrir o universo',
    univDesc: {
      sesports:
        'Universo desportivo interativo: video-to-commerce, retail media e fan engagement. A loja audiovisual oficial do grupo para as marcas desportivas.',
      cares:
        'Impacto social e programas dedicados — o compromisso e as causas no centro da experiência audiovisual comprável.',
      games:
        'Jogos, IP e monetização in-game. Cápsulas interativas integradas nos streams e conteúdos de gaming favoritos.',
      invest:
        'Captações, veículos e estruturação — a loja audiovisual dedicada ao investimento e ao financiamento de projetos.',
      services:
        'Serviços e acompanhamento do grupo — soluções profissionais acessíveis diretamente a partir dos conteúdos audiovisuais.',
      fnb: 'Food & beverage, marcas gourmet e experiências culinárias — encomende enquanto vê receitas, diretos e formatos food.',
      travel:
        'Mobilidade, hospitality e conteúdos de viagem — reserve e compre durante documentários, vlogs e experiências imersivas.',
      music:
        'Editora, artistas e merchandising — cápsulas de compra direta em videoclipes, diretos e concertos audiovisuais.',
      watch:
        'A experiência OTT comprável: filmes, séries e diretos onde cada produto visível se torna acessível com um toque.',
      realestate:
        'Empreendimentos, locais e retail centers — o imobiliário tornado comprável nos conteúdos audiovisuais e visitas virtuais.',
      publishing:
        'Edição transmédia e catálogos — livros, revistas e conteúdos enriquecidos com cápsulas de compra integradas.',
    },
    statBoutiques: 'lojas',
    statStudios: 'estúdios',
    statViewsMonth: 'visualizações/mês',
    statActiveProducts: 'produtos ativos',
    hiwLabel: 'COMO FUNCIONA',
    hiwText: {
      watch:
        'O utilizador vê um direto, uma repetição, uma story, um filme ou um excerto de TV em qualquer plataforma conectada à Skoleom (+2000 OTT, +1B sites).',
      touch:
        'A IA da Skoleom reconhece o objeto no vídeo e apresenta uma cápsula interativa a pedido (tap, touch ou comando de voz). Adição ao carrinho integrada sem pausar o fluxo.',
      buy: 'O SeSync® e o Skoleom Pay executam o pagamento dentro do vídeo. O utilizador retoma o conteúdo no mesmo timecode. A transação ocorre em segundo plano, invisível.',
      earn: 'O criador de conteúdo, o proprietário da loja e a Skoleom partilham as receitas em tempo real através do Token e do Monetizer Studio powered by Oracle.',
    },
    capsulesLabel: 'Cápsulas interativas',
    cartAdded: 'Adicionado ao carrinho',
    cartAdd: 'Adicionar ao carrinho',
    bannerLabels: [
      'Vídeos skoleomizados/dia',
      'Pessoas alcançadas diariamente',
      'Plataformas OTT conectadas',
      'Produtos no ecossistema',
      'Países de distribuição',
    ],
    launchLabel: 'PARA MARCAS E CRIADORES',
    launchTitleLine1: 'Lance a sua',
    launchTitleLine2: 'loja audiovisual',
    launchSub:
      'Junte-se ao ecossistema Skoleom e transforme os seus conteúdos numa máquina de vender. 25 vídeos/mês × 25 produtos = 625 produtos distribuídos nos milhares de milhões de conteúdos mais vistos do mundo.',
    launchCreate: 'Criar a minha loja',
    launchPricing: 'Ver os preços',
  },

  nl: {
    heroH1Line1: 'Alles wat je',
    heroH1Line2: 'bekijkt',
    heroH1Line3: 'is te koop.',
    heroSubBefore: 'Skoleom maakt van elke video een interactieve winkel. ',
    heroSubEm: 'Raak alles aan.',
    heroSubAfter: ' Bezit alles. Direct. Zonder de content ooit te verlaten.',
    heroCtaExplore: 'Winkels ontdekken',
    heroCtaUniverse: 'Universum per categorie',
    heroStatLabels: [
      'Geskoleomiseerde video’s/dag',
      'Bereikte personen',
      'Verbonden landen',
      'Geïntegreerde producten',
    ],
    featuredLabel: 'UITGELICHTE WINKELS',
    featuredTitle: 'Nu het populairst',
    seeAll: 'Alles bekijken',
    featBigDesc:
      'De ultieme audiovisuele sportwinkel. Premium uitrusting, voeding, kleding — koop rechtstreeks tijdens livewedstrijden.',
    featProductsLabel: 'actieve producten',
    featViewsLabel: 'weergaven/maand',
    featBuyExplore: 'Winkel ontdekken',
    featMusicDesc: 'Instrumenten, merch, vinyl — koop in de videoclips.',
    featFashionDesc: 'Mode, beauty en luxe verwerkt in modeshows en vlogs.',
    badgeNew: 'NIEUW',
    explore: 'Ontdekken',
    univLabel: 'AUDIOVISUELE WINKELS',
    univTitle: 'Alle officiële winkels',
    allBoutiques: 'Alle winkels',
    ariaViewMode: 'Weergavemodus van de winkels',
    ariaGridView: 'Blokweergave',
    ariaCarouselView: 'Carrouselweergave',
    ucDiscover: 'Ontdek het universum',
    univDesc: {
      sesports:
        'Interactief sportuniversum: video-to-commerce, retail media en fan engagement. De officiële audiovisuele winkel van de groep voor sportmerken.',
      cares:
        'Maatschappelijke impact en speciale programma’s — engagement en goede doelen in het hart van de koopbare audiovisuele ervaring.',
      games:
        'Games, IP en in-game-monetisatie. Interactieve capsules verwerkt in je favoriete streams en gamingcontent.',
      invest:
        'Financieringsrondes, vehikels en structurering — de audiovisuele winkel voor investeringen en projectfinanciering.',
      services:
        'Groepsdiensten en begeleiding — professionele oplossingen rechtstreeks toegankelijk vanuit audiovisuele content.',
      fnb: 'Food & beverage, gourmetmerken en culinaire ervaringen — bestel terwijl je recepten, lives en foodformats bekijkt.',
      travel:
        'Mobiliteit, hospitality en reiscontent — boek en koop tijdens documentaires, vlogs en meeslepende ervaringen.',
      music:
        'Label, artiesten en merchandising — directe aankoopcapsules in videoclips, lives en audiovisuele concerten.',
      watch:
        'De koopbare OTT-ervaring: films, series en lives waar elk zichtbaar product met één tap toegankelijk wordt.',
      realestate:
        'Projecten, locaties en retailcenters — vastgoed koopbaar gemaakt in audiovisuele content en virtuele tours.',
      publishing:
        'Transmediale uitgeverij en catalogi — boeken, tijdschriften en content verrijkt met geïntegreerde aankoopcapsules.',
    },
    statBoutiques: 'winkels',
    statStudios: 'studio’s',
    statViewsMonth: 'weergaven/maand',
    statActiveProducts: 'actieve producten',
    hiwLabel: 'HOE HET WERKT',
    hiwText: {
      watch:
        'De gebruiker bekijkt een live, replay, story, film of tv-fragment op elk platform dat met Skoleom is verbonden (+2.000 OTT, +1B sites).',
      touch:
        'De Skoleom-AI herkent het object in de video en toont op verzoek een interactieve capsule (tap, touch of spraakopdracht). Geïntegreerd toevoegen aan winkelwagen zonder de stream te pauzeren.',
      buy: 'SeSync® en Skoleom Pay voeren de betaling uit in de video. De gebruiker hervat de content op dezelfde timecode. De transactie verloopt op de achtergrond, onzichtbaar.',
      earn: 'De contentmaker, de winkeleigenaar en Skoleom delen de inkomsten in realtime via de Token en Monetizer Studio powered by Oracle.',
    },
    capsulesLabel: 'Interactieve capsules',
    cartAdded: 'Toegevoegd aan winkelwagen',
    cartAdd: 'Toevoegen aan winkelwagen',
    bannerLabels: [
      'Geskoleomiseerde video’s/dag',
      'Dagelijks bereikte personen',
      'Verbonden OTT-platforms',
      'Producten in het ecosysteem',
      'Distributielanden',
    ],
    launchLabel: 'VOOR MERKEN & CREATORS',
    launchTitleLine1: 'Lanceer je',
    launchTitleLine2: 'audiovisuele winkel',
    launchSub:
      'Sluit je aan bij het Skoleom-ecosysteem en maak van je content een verkoopmachine. 25 video’s/maand × 25 producten = 625 producten verspreid over de miljarden meest bekeken content ter wereld.',
    launchCreate: 'Mijn winkel maken',
    launchPricing: 'Tarieven bekijken',
  },

  ru: {
    heroH1Line1: 'Всё, что вы',
    heroH1Line2: 'смотрите,',
    heroH1Line3: 'можно купить.',
    heroSubBefore: 'Skoleom превращает каждое видео в интерактивный магазин. ',
    heroSubEm: 'Прикоснитесь к чему угодно.',
    heroSubAfter: ' Владейте всем. Мгновенно. Не покидая контент.',
    heroCtaExplore: 'Открыть магазины',
    heroCtaUniverse: 'Вселенная по категориям',
    heroStatLabels: [
      'Скулеомизированных видео/день',
      'Охваченных людей',
      'Подключённых стран',
      'Интегрированных товаров',
    ],
    featuredLabel: 'РЕКОМЕНДУЕМЫЕ МАГАЗИНЫ',
    featuredTitle: 'Самые популярные сейчас',
    seeAll: 'Смотреть все',
    featBigDesc:
      'Лучший аудиовизуальный спортивный магазин. Премиум-экипировка, питание, одежда — покупайте прямо во время прямых трансляций матчей.',
    featProductsLabel: 'активных товаров',
    featViewsLabel: 'просмотров/мес',
    featBuyExplore: 'Открыть магазин',
    featMusicDesc: 'Инструменты, мерч, винил — покупайте прямо в клипах.',
    featFashionDesc: 'Мода, красота и люкс, встроенные в показы и влоги.',
    badgeNew: 'НОВОЕ',
    explore: 'Открыть',
    univLabel: 'АУДИОВИЗУАЛЬНЫЕ МАГАЗИНЫ',
    univTitle: 'Все официальные магазины',
    allBoutiques: 'Все магазины',
    ariaViewMode: 'Режим отображения магазинов',
    ariaGridView: 'Отображение блоками',
    ariaCarouselView: 'Отображение каруселью',
    ucDiscover: 'Открыть вселенную',
    univDesc: {
      sesports:
        'Интерактивная спортивная вселенная: video-to-commerce, retail media и вовлечение фанатов. Официальный аудиовизуальный магазин группы для спортивных брендов.',
      cares:
        'Социальное влияние и специальные программы — вовлечённость и важные цели в центре покупательского аудиовизуального опыта.',
      games:
        'Игры, IP и внутриигровая монетизация. Интерактивные капсулы, встроенные в любимые стримы и игровой контент.',
      invest:
        'Раунды, инструменты и структурирование — аудиовизуальный магазин для инвестиций и финансирования проектов.',
      services:
        'Услуги и сопровождение группы — профессиональные решения, доступные прямо из аудиовизуального контента.',
      fnb: 'Food & beverage, гурман-бренды и кулинарные впечатления — заказывайте, смотря рецепты, лайвы и фуд-форматы.',
      travel:
        'Мобильность, hospitality и тревел-контент — бронируйте и покупайте во время документалок, влогов и иммерсивных впечатлений.',
      music:
        'Лейбл, артисты и мерчандайзинг — капсулы прямой покупки в клипах, лайвах и аудиовизуальных концертах.',
      watch:
        'Покупательский OTT-опыт: фильмы, сериалы и лайвы, где каждый видимый товар становится доступным в один тап.',
      realestate:
        'Девелопмент, объекты и ретейл-центры — недвижимость, доступная для покупки в аудиовизуальном контенте и виртуальных турах.',
      publishing:
        'Трансмедийное издательство и каталоги — книги, журналы и контент, обогащённые встроенными капсулами покупки.',
    },
    statBoutiques: 'магазинов',
    statStudios: 'студий',
    statViewsMonth: 'просмотров/мес',
    statActiveProducts: 'активных товаров',
    hiwLabel: 'КАК ЭТО РАБОТАЕТ',
    hiwText: {
      watch:
        'Пользователь смотрит прямой эфир, повтор, сторис, фильм или ТВ-фрагмент на любой платформе, подключённой к Skoleom (+2 000 OTT, +1 млрд сайтов).',
      touch:
        'ИИ Skoleom распознаёт объект в видео и по запросу показывает интерактивную капсулу (тап, касание или голосовая команда). Встроенное добавление в корзину без остановки потока.',
      buy: 'SeSync® и Skoleom Pay выполняют оплату внутри видео. Пользователь продолжает контент с того же таймкода. Транзакция проходит в фоне, незаметно.',
      earn: 'Создатель контента, владелец магазина и Skoleom делят доход в реальном времени через Token и Monetizer Studio powered by Oracle.',
    },
    capsulesLabel: 'Интерактивные капсулы',
    cartAdded: 'Добавлено в корзину',
    cartAdd: 'Добавить в корзину',
    bannerLabels: [
      'Скулеомизированных видео/день',
      'Людей охвачено ежедневно',
      'Подключённых OTT-платформ',
      'Товаров в экосистеме',
      'Стран распространения',
    ],
    launchLabel: 'ДЛЯ БРЕНДОВ И АВТОРОВ',
    launchTitleLine1: 'Запустите свой',
    launchTitleLine2: 'аудиовизуальный магазин',
    launchSub:
      'Присоединяйтесь к экосистеме Skoleom и превратите свой контент в машину продаж. 25 видео/мес × 25 товаров = 625 товаров, распределённых по миллиардам самого просматриваемого контента в мире.',
    launchCreate: 'Создать магазин',
    launchPricing: 'Посмотреть тарифы',
  },

  ar: {
    heroH1Line1: 'كل ما',
    heroH1Line2: 'تشاهده',
    heroH1Line3: 'يُشترى.',
    heroSubBefore: 'تحوّل Skoleom كل فيديو إلى متجر تفاعلي. ',
    heroSubEm: 'المس أي شيء.',
    heroSubAfter: ' امتلك كل شيء. فوراً. دون مغادرة المحتوى أبداً.',
    heroCtaExplore: 'استكشاف المتاجر',
    heroCtaUniverse: 'العوالم حسب الفئة',
    heroStatLabels: ['فيديوهات مُسكلَمة/يوم', 'أشخاص تم الوصول إليهم', 'دول متصلة', 'منتجات مدمجة'],
    featuredLabel: 'متاجر مميّزة',
    featuredTitle: 'الأكثر رواجاً الآن',
    seeAll: 'عرض الكل',
    featBigDesc:
      'متجر الرياضة السمعي البصري الأمثل. معدات فاخرة وتغذية وملابس — اشترِ مباشرة أثناء المباريات المباشرة.',
    featProductsLabel: 'منتجات نشطة',
    featViewsLabel: 'مشاهدة/شهر',
    featBuyExplore: 'استكشاف المتجر',
    featMusicDesc: 'آلات وبضائع وأسطوانات — اشترِ داخل مقاطع الفيديو الموسيقية.',
    featFashionDesc: 'موضة وجمال وفخامة مدمجة في عروض الأزياء والمدوّنات المرئية.',
    badgeNew: 'جديد',
    explore: 'استكشاف',
    univLabel: 'متاجر سمعية بصرية',
    univTitle: 'كل المتاجر الرسمية',
    allBoutiques: 'كل المتاجر',
    ariaViewMode: 'وضع عرض المتاجر',
    ariaGridView: 'عرض بالكتل',
    ariaCarouselView: 'عرض بالشريط الدوّار',
    ucDiscover: 'اكتشف العالم',
    univDesc: {
      sesports:
        'عالم رياضي تفاعلي: video-to-commerce وretail media وتفاعل المعجبين. المتجر السمعي البصري الرسمي للمجموعة للعلامات الرياضية.',
      cares:
        'أثر اجتماعي وبرامج مخصّصة — الالتزام والقضايا في قلب التجربة السمعية البصرية القابلة للشراء.',
      games:
        'ألعاب وملكية فكرية وتحقيق دخل داخل اللعبة. كبسولات تفاعلية مدمجة في البثوث ومحتوى الألعاب المفضّل.',
      invest: 'جولات تمويل وأدوات وهيكلة — المتجر السمعي البصري المخصّص للاستثمار وتمويل المشاريع.',
      services:
        'خدمات ومرافقة المجموعة — حلول احترافية يمكن الوصول إليها مباشرة من المحتوى السمعي البصري.',
      fnb: 'الأطعمة والمشروبات والعلامات الذواقة والتجارب الطهوية — اطلب أثناء مشاهدة الوصفات والبث المباشر وصيغ الطعام.',
      travel:
        'التنقّل والضيافة ومحتوى السفر — احجز واشترِ أثناء الأفلام الوثائقية والمدوّنات المرئية والتجارب الغامرة.',
      music:
        'شركة تسجيل وفنانون ومنتجات — كبسولات شراء مباشر في الفيديوهات الموسيقية والبث المباشر والحفلات السمعية البصرية.',
      watch:
        'تجربة OTT قابلة للشراء: أفلام ومسلسلات وبث مباشر يصبح فيه كل منتج ظاهر متاحاً بلمسة واحدة.',
      realestate:
        'مشاريع ومواقع ومراكز تجزئة — العقارات أصبحت قابلة للشراء في المحتوى السمعي البصري والجولات الافتراضية.',
      publishing: 'نشر عابر للوسائط وكتالوجات — كتب ومجلات ومحتوى مُثرى بكبسولات شراء مدمجة.',
    },
    statBoutiques: 'متاجر',
    statStudios: 'استوديوهات',
    statViewsMonth: 'مشاهدة/شهر',
    statActiveProducts: 'منتجات نشطة',
    hiwLabel: 'كيف يعمل',
    hiwText: {
      watch:
        'يشاهد المستخدم بثاً مباشراً أو إعادة أو ستوري أو فيلماً أو مقطعاً تلفزيونياً على أي منصة متصلة بـ Skoleom (+2000 OTT، +1B موقع).',
      touch:
        'يتعرّف ذكاء Skoleom الاصطناعي على العنصر في الفيديو ويعرض كبسولة تفاعلية عند الطلب (نقر أو لمس أو أمر صوتي). إضافة إلى السلة مدمجة دون إيقاف التدفّق.',
      buy: 'ينفّذ SeSync® وSkoleom Pay الدفع داخل الفيديو. يستأنف المستخدم المحتوى عند نفس التوقيت. تتم المعاملة في الخلفية، غير مرئية.',
      earn: 'يتقاسم منشئ المحتوى ومالك المتجر وSkoleom الإيرادات في الوقت الفعلي عبر الـ Token وMonetizer Studio powered by Oracle.',
    },
    capsulesLabel: 'كبسولات تفاعلية',
    cartAdded: 'أُضيف إلى السلة',
    cartAdd: 'أضف إلى السلة',
    bannerLabels: [
      'فيديوهات مُسكلَمة/يوم',
      'أشخاص يتم الوصول إليهم يومياً',
      'منصات OTT متصلة',
      'منتجات في المنظومة',
      'دول التوزيع',
    ],
    launchLabel: 'للعلامات التجارية والمبدعين',
    launchTitleLine1: 'أطلق',
    launchTitleLine2: 'متجرك السمعي البصري',
    launchSub:
      'انضم إلى منظومة Skoleom وحوّل محتواك إلى آلة بيع. 25 فيديو/شهر × 25 منتجاً = 625 منتجاً موزّعاً في مليارات المحتويات الأكثر مشاهدة في العالم.',
    launchCreate: 'إنشاء متجري',
    launchPricing: 'عرض الأسعار',
  },

  hi: {
    heroH1Line1: 'जो कुछ आप',
    heroH1Line2: 'देखते हैं',
    heroH1Line3: 'वह खरीदा जा सकता है।',
    heroSubBefore: 'Skoleom हर वीडियो को एक इंटरैक्टिव स्टोर में बदल देता है। ',
    heroSubEm: 'किसी भी चीज़ को छुएँ।',
    heroSubAfter: ' सब कुछ अपना बनाएँ। तुरंत। कंटेंट छोड़े बिना।',
    heroCtaExplore: 'स्टोर एक्सप्लोर करें',
    heroCtaUniverse: 'श्रेणी के अनुसार यूनिवर्स',
    heroStatLabels: ['स्कोलियमाइज़्ड वीडियो/दिन', 'पहुँचे गए लोग', 'कनेक्टेड देश', 'एकीकृत उत्पाद'],
    featuredLabel: 'फ़ीचर्ड स्टोर',
    featuredTitle: 'अभी सबसे लोकप्रिय',
    seeAll: 'सभी देखें',
    featBigDesc:
      'परम ऑडियोविज़ुअल स्पोर्ट्स स्टोर। प्रीमियम उपकरण, न्यूट्रिशन, कपड़े — लाइव मैचों के दौरान सीधे खरीदें।',
    featProductsLabel: 'सक्रिय उत्पाद',
    featViewsLabel: 'व्यू/माह',
    featBuyExplore: 'स्टोर एक्सप्लोर करें',
    featMusicDesc: 'इंस्ट्रूमेंट, मर्च, वाइनिल — म्यूज़िक वीडियो में ही खरीदें।',
    featFashionDesc: 'फ़ैशन शो और व्लॉग में समाहित फ़ैशन, ब्यूटी और लग्ज़री।',
    badgeNew: 'नया',
    explore: 'एक्सप्लोर करें',
    univLabel: 'ऑडियोविज़ुअल स्टोर',
    univTitle: 'सभी आधिकारिक स्टोर',
    allBoutiques: 'सभी स्टोर',
    ariaViewMode: 'स्टोर प्रदर्शन मोड',
    ariaGridView: 'ब्लॉक दृश्य',
    ariaCarouselView: 'कैरोसेल दृश्य',
    ucDiscover: 'यूनिवर्स खोजें',
    univDesc: {
      sesports:
        'इंटरैक्टिव स्पोर्ट्स यूनिवर्स: video-to-commerce, रिटेल मीडिया और फैन एंगेजमेंट। स्पोर्ट्स ब्रांडों के लिए समूह का आधिकारिक ऑडियोविज़ुअल स्टोर।',
      cares:
        'सामाजिक प्रभाव और समर्पित कार्यक्रम — खरीदारी-योग्य ऑडियोविज़ुअल अनुभव के केंद्र में सहभागिता और सरोकार।',
      games:
        'गेम्स, IP और इन-गेम मॉनेटाइज़ेशन। आपकी पसंदीदा स्ट्रीम और गेमिंग कंटेंट में समाहित इंटरैक्टिव कैप्सूल।',
      invest:
        'फंडरेज़िंग, वाहन और संरचना — निवेश और परियोजना वित्तपोषण को समर्पित ऑडियोविज़ुअल स्टोर।',
      services: 'समूह सेवाएँ और सहयोग — ऑडियोविज़ुअल कंटेंट से सीधे सुलभ पेशेवर समाधान।',
      fnb: 'फूड एंड बेवरेज, गॉरमे ब्रांड और पाककला अनुभव — रेसिपी, लाइव और फूड फ़ॉर्मेट देखते हुए ऑर्डर करें।',
      travel:
        'मोबिलिटी, हॉस्पिटैलिटी और यात्रा कंटेंट — डॉक्यूमेंट्री, व्लॉग और इमर्सिव अनुभवों के दौरान बुक और खरीदें।',
      music:
        'लेबल, कलाकार और मर्चेंडाइजिंग — म्यूज़िक वीडियो, लाइव और ऑडियोविज़ुअल कॉन्सर्ट में सीधी खरीद कैप्सूल।',
      watch:
        'खरीदारी-योग्य OTT अनुभव: फ़िल्में, सीरीज़ और लाइव जहाँ हर दृश्य उत्पाद एक टैप में सुलभ हो जाता है।',
      realestate:
        'परियोजनाएँ, स्थल और रिटेल सेंटर — ऑडियोविज़ुअल कंटेंट और वर्चुअल टूर में रियल एस्टेट को खरीदारी-योग्य बनाया गया।',
      publishing:
        'ट्रांसमीडिया प्रकाशन और कैटलॉग — किताबें, पत्रिकाएँ और समाहित खरीद कैप्सूल से समृद्ध कंटेंट।',
    },
    statBoutiques: 'स्टोर',
    statStudios: 'स्टूडियो',
    statViewsMonth: 'व्यू/माह',
    statActiveProducts: 'सक्रिय उत्पाद',
    hiwLabel: 'यह कैसे काम करता है',
    hiwText: {
      watch:
        'उपयोगकर्ता Skoleom से जुड़े किसी भी प्लेटफ़ॉर्म पर लाइव, रीप्ले, स्टोरी, फ़िल्म या टीवी क्लिप देखता है (+2,000 OTT, +1B साइट)।',
      touch:
        'Skoleom AI वीडियो में वस्तु को पहचानता है और माँग पर एक इंटरैक्टिव कैप्सूल दिखाता है (टैप, टच या वॉइस कमांड)। स्ट्रीम रोके बिना अंतर्निहित कार्ट में जोड़।',
      buy: 'SeSync® और Skoleom Pay वीडियो के भीतर ही भुगतान करते हैं। उपयोगकर्ता उसी टाइमकोड पर कंटेंट फिर से शुरू करता है। लेनदेन पृष्ठभूमि में, अदृश्य रूप से होता है।',
      earn: 'कंटेंट निर्माता, स्टोर मालिक और Skoleom Token और Monetizer Studio powered by Oracle के माध्यम से रियल-टाइम में राजस्व साझा करते हैं।',
    },
    capsulesLabel: 'इंटरैक्टिव कैप्सूल',
    cartAdded: 'कार्ट में जोड़ा गया',
    cartAdd: 'कार्ट में जोड़ें',
    bannerLabels: [
      'स्कोलियमाइज़्ड वीडियो/दिन',
      'प्रतिदिन पहुँचे गए लोग',
      'कनेक्टेड OTT प्लेटफ़ॉर्म',
      'इकोसिस्टम में उत्पाद',
      'वितरण देश',
    ],
    launchLabel: 'ब्रांड और क्रिएटर के लिए',
    launchTitleLine1: 'अपना',
    launchTitleLine2: 'ऑडियोविज़ुअल स्टोर लॉन्च करें',
    launchSub:
      'Skoleom इकोसिस्टम से जुड़ें और अपने कंटेंट को बिक्री मशीन में बदलें। 25 वीडियो/माह × 25 उत्पाद = 625 उत्पाद, दुनिया के सबसे अधिक देखे जाने वाले अरबों कंटेंट में वितरित।',
    launchCreate: 'मेरा स्टोर बनाएँ',
    launchPricing: 'कीमतें देखें',
  },

  zh: {
    heroH1Line1: '你所看的',
    heroH1Line2: '一切',
    heroH1Line3: '皆可购买。',
    heroSubBefore: 'Skoleom 将每个视频变成互动商店。',
    heroSubEm: '触碰任何东西。',
    heroSubAfter: ' 即刻拥有一切。无需离开内容。',
    heroCtaExplore: '探索商店',
    heroCtaUniverse: '按类别浏览宇宙',
    heroStatLabels: ['Skoleom 化视频/天', '触达人数', '已连接国家', '集成商品'],
    featuredLabel: '精选商店',
    featuredTitle: '当下最热门',
    seeAll: '查看全部',
    featBigDesc: '终极视听运动商店。高端装备、营养品、服饰——在直播比赛中直接购买。',
    featProductsLabel: '在售商品',
    featViewsLabel: '次/月',
    featBuyExplore: '探索商店',
    featMusicDesc: '乐器、周边、黑胶——在 MV 中直接购买。',
    featFashionDesc: '时尚、美妆与奢侈品，融入时装秀与 vlog。',
    badgeNew: '新品',
    explore: '探索',
    univLabel: '视听商店',
    univTitle: '所有官方商店',
    allBoutiques: '全部商店',
    ariaViewMode: '商店显示模式',
    ariaGridView: '区块视图',
    ariaCarouselView: '轮播视图',
    ucDiscover: '探索宇宙',
    univDesc: {
      sesports:
        '互动体育宇宙：video-to-commerce、零售媒体与粉丝互动。集团面向体育品牌的官方视听商店。',
      cares: '社会影响力与专属计划——参与和公益置于可购物视听体验的核心。',
      games: '游戏、IP 与游戏内变现。融入你最爱的直播与游戏内容的互动胶囊。',
      invest: '融资、工具与架构——专注于投资与项目融资的视听商店。',
      services: '集团服务与陪伴——可直接从视听内容获取的专业解决方案。',
      fnb: '食品饮料、美食品牌与烹饪体验——观看食谱、直播和美食内容时即可下单。',
      travel: '出行、酒店与旅行内容——在纪录片、vlog 和沉浸式体验中预订并购买。',
      music: '厂牌、艺人与周边——在 MV、直播和视听演唱会中直接购买的胶囊。',
      watch: '可购物的 OTT 体验：电影、剧集与直播中，每件可见商品一触即得。',
      realestate: '楼盘、场所与零售中心——在视听内容和虚拟看房中让房地产可购买。',
      publishing: '跨媒体出版与目录——书籍、杂志与嵌入购买胶囊的丰富内容。',
    },
    statBoutiques: '家商店',
    statStudios: '个工作室',
    statViewsMonth: '次/月',
    statActiveProducts: '在售商品',
    hiwLabel: '运作方式',
    hiwText: {
      watch:
        '用户在任意接入 Skoleom 的平台上观看直播、回放、故事、电影或电视片段（+2,000 个 OTT，+10 亿个站点）。',
      touch:
        'Skoleom AI 识别视频中的物品，并按需显示互动胶囊（点按、触碰或语音指令）。内置加入购物车，无需暂停播放。',
      buy: 'SeSync® 与 Skoleom Pay 在视频内完成支付。用户在同一时间码继续内容。交易在后台进行，无形无感。',
      earn: '内容创作者、商店所有者与 Skoleom 通过 Token 及 Monetizer Studio powered by Oracle 实时分享收益。',
    },
    capsulesLabel: '互动胶囊',
    cartAdded: '已加入购物车',
    cartAdd: '加入购物车',
    bannerLabels: [
      'Skoleom 化视频/天',
      '每日触达人数',
      '已连接 OTT 平台',
      '生态系统中的商品',
      '分发国家',
    ],
    launchLabel: '面向品牌与创作者',
    launchTitleLine1: '开启你的',
    launchTitleLine2: '视听商店',
    launchSub:
      '加入 Skoleom 生态系统，把你的内容变成销售机器。每月 25 个视频 × 25 件商品 = 625 件商品，分发到全球数十亿最受欢迎的内容中。',
    launchCreate: '创建我的商店',
    launchPricing: '查看价格',
  },

  id: {
    heroH1Line1: 'Semua yang',
    heroH1Line2: 'Anda tonton',
    heroH1Line3: 'bisa dibeli.',
    heroSubBefore: 'Skoleom mengubah setiap video menjadi toko interaktif. ',
    heroSubEm: 'Sentuh apa saja.',
    heroSubAfter: ' Miliki semuanya. Seketika. Tanpa pernah meninggalkan konten.',
    heroCtaExplore: 'Jelajahi toko',
    heroCtaUniverse: 'Semesta per kategori',
    heroStatLabels: [
      'Video terskoleomisasi/hari',
      'Orang terjangkau',
      'Negara terhubung',
      'Produk terintegrasi',
    ],
    featuredLabel: 'TOKO UNGGULAN',
    featuredTitle: 'Paling populer saat ini',
    seeAll: 'Lihat semua',
    featBigDesc:
      'Toko audiovisual olahraga terbaik. Perlengkapan premium, nutrisi, pakaian — beli langsung saat pertandingan langsung.',
    featProductsLabel: 'produk aktif',
    featViewsLabel: 'tayangan/bulan',
    featBuyExplore: 'Jelajahi toko',
    featMusicDesc: 'Instrumen, merch, vinil — beli di dalam video musik.',
    featFashionDesc: 'Mode, kecantikan, dan kemewahan tertanam dalam peragaan dan vlog.',
    badgeNew: 'BARU',
    explore: 'Jelajahi',
    univLabel: 'TOKO AUDIOVISUAL',
    univTitle: 'Semua toko resmi',
    allBoutiques: 'Semua toko',
    ariaViewMode: 'Mode tampilan toko',
    ariaGridView: 'Tampilan blok',
    ariaCarouselView: 'Tampilan korsel',
    ucDiscover: 'Temukan semestanya',
    univDesc: {
      sesports:
        'Semesta olahraga interaktif: video-to-commerce, retail media, dan fan engagement. Toko audiovisual resmi grup untuk merek olahraga.',
      cares:
        'Dampak sosial dan program khusus — keterlibatan dan misi sosial di jantung pengalaman audiovisual yang bisa dibeli.',
      games:
        'Game, IP, dan monetisasi in-game. Kapsul interaktif tertanam dalam stream dan konten gaming favorit.',
      invest:
        'Penggalangan dana, instrumen, dan strukturasi — toko audiovisual khusus untuk investasi dan pendanaan proyek.',
      services:
        'Layanan dan pendampingan grup — solusi profesional yang dapat diakses langsung dari konten audiovisual.',
      fnb: 'Food & beverage, merek gourmet, dan pengalaman kuliner — pesan sambil menonton resep, live, dan format food.',
      travel:
        'Mobilitas, hospitality, dan konten perjalanan — pesan dan beli saat dokumenter, vlog, dan pengalaman imersif.',
      music:
        'Label, artis, dan merchandising — kapsul pembelian langsung di video musik, live, dan konser audiovisual.',
      watch:
        'Pengalaman OTT yang bisa dibeli: film, serial, dan live di mana setiap produk yang terlihat bisa diakses dengan satu ketukan.',
      realestate:
        'Pengembangan, lokasi, dan retail center — properti dibuat bisa dibeli dalam konten audiovisual dan tur virtual.',
      publishing:
        'Penerbitan transmedia dan katalog — buku, majalah, dan konten yang diperkaya kapsul pembelian terintegrasi.',
    },
    statBoutiques: 'toko',
    statStudios: 'studio',
    statViewsMonth: 'tayangan/bulan',
    statActiveProducts: 'produk aktif',
    hiwLabel: 'CARA KERJANYA',
    hiwText: {
      watch:
        'Pengguna menonton live, replay, story, film, atau cuplikan TV di platform mana pun yang terhubung ke Skoleom (+2.000 OTT, +1B situs).',
      touch:
        'AI Skoleom mengenali objek di video dan menampilkan kapsul interaktif sesuai permintaan (tap, sentuh, atau perintah suara). Tambah ke keranjang terintegrasi tanpa menjeda streaming.',
      buy: 'SeSync® dan Skoleom Pay menjalankan pembayaran di dalam video. Pengguna melanjutkan konten pada timecode yang sama. Transaksi berlangsung di latar belakang, tak terlihat.',
      earn: 'Kreator konten, pemilik toko, dan Skoleom berbagi pendapatan secara real-time melalui Token dan Monetizer Studio powered by Oracle.',
    },
    capsulesLabel: 'Kapsul interaktif',
    cartAdded: 'Ditambahkan ke keranjang',
    cartAdd: 'Tambahkan ke keranjang',
    bannerLabels: [
      'Video terskoleomisasi/hari',
      'Orang terjangkau setiap hari',
      'Platform OTT terhubung',
      'Produk dalam ekosistem',
      'Negara distribusi',
    ],
    launchLabel: 'UNTUK MEREK & KREATOR',
    launchTitleLine1: 'Luncurkan',
    launchTitleLine2: 'toko audiovisual Anda',
    launchSub:
      'Bergabunglah dengan ekosistem Skoleom dan ubah konten Anda menjadi mesin penjualan. 25 video/bulan × 25 produk = 625 produk yang tersebar di miliaran konten paling banyak ditonton di dunia.',
    launchCreate: 'Buat toko saya',
    launchPricing: 'Lihat harga',
  },

  sw: {
    heroH1Line1: 'Kila kitu',
    heroH1Line2: 'unachotazama',
    heroH1Line3: 'kinanunulika.',
    heroSubBefore: 'Skoleom hubadilisha kila video kuwa duka shirikishi. ',
    heroSubEm: 'Gusa chochote.',
    heroSubAfter: ' Miliki kila kitu. Papo hapo. Bila kuondoka kwenye maudhui kamwe.',
    heroCtaExplore: 'Gundua maduka',
    heroCtaUniverse: 'Ulimwengu kwa kategoria',
    heroStatLabels: [
      'Video zilizofanyiwa skoleom/siku',
      'Watu waliofikiwa',
      'Nchi zilizounganishwa',
      'Bidhaa zilizojumuishwa',
    ],
    featuredLabel: 'MADUKA YALIYOANGAZIWA',
    featuredTitle: 'Maarufu zaidi sasa',
    seeAll: 'Ona yote',
    featBigDesc:
      'Duka bora kabisa la michezo la kusikia na kuona. Vifaa vya hali ya juu, lishe, mavazi — nunua moja kwa moja wakati wa mechi za moja kwa moja.',
    featProductsLabel: 'bidhaa hai',
    featViewsLabel: 'mionekano/mwezi',
    featBuyExplore: 'Gundua duka',
    featMusicDesc: 'Ala, bidhaa, vinili — nunua ndani ya video za muziki.',
    featFashionDesc:
      'Mitindo, urembo na anasa vilivyojumuishwa katika maonyesho ya mitindo na vlog.',
    badgeNew: 'MPYA',
    explore: 'Gundua',
    univLabel: 'MADUKA YA KUSIKIA NA KUONA',
    univTitle: 'Maduka yote rasmi',
    allBoutiques: 'Maduka yote',
    ariaViewMode: 'Hali ya kuonyesha maduka',
    ariaGridView: 'Mwonekano wa vizuizi',
    ariaCarouselView: 'Mwonekano wa karuseli',
    ucDiscover: 'Gundua ulimwengu',
    univDesc: {
      sesports:
        'Ulimwengu shirikishi wa michezo: video-to-commerce, retail media na ushiriki wa mashabiki. Duka rasmi la kusikia na kuona la kundi kwa chapa za michezo.',
      cares:
        'Athari za kijamii na programu maalum — ushiriki na malengo ya kijamii katikati ya uzoefu wa kusikia na kuona unaonunulika.',
      games:
        'Michezo, IP na upataji mapato ndani ya mchezo. Kapsuli shirikishi zilizojumuishwa katika mitiririko na maudhui ya gemu unayopenda.',
      invest:
        'Ukusanyaji fedha, vyombo na muundo — duka la kusikia na kuona maalum kwa uwekezaji na ufadhili wa miradi.',
      services:
        'Huduma na usaidizi wa kundi — suluhu za kitaalamu zinazopatikana moja kwa moja kutoka maudhui ya kusikia na kuona.',
      fnb: 'Vyakula na vinywaji, chapa za kitoweo na uzoefu wa upishi — agiza ukitazama mapishi, matangazo ya moja kwa moja na miundo ya vyakula.',
      travel:
        'Usafiri, ukarimu na maudhui ya safari — weka nafasi na nunua wakati wa makala, vlog na uzoefu wa kuvutia.',
      music:
        'Lebo, wasanii na bidhaa — kapsuli za ununuzi wa moja kwa moja katika video za muziki, matangazo ya moja kwa moja na matamasha ya kusikia na kuona.',
      watch:
        'Uzoefu wa OTT unaonunulika: filamu, mfululizo na matangazo ya moja kwa moja ambapo kila bidhaa inayoonekana inapatikana kwa mguso mmoja.',
      realestate:
        'Miradi, maeneo na vituo vya rejareja — mali isiyohamishika imefanywa kununulika katika maudhui ya kusikia na kuona na ziara pepe.',
      publishing:
        'Uchapishaji wa kuvuka media na katalogi — vitabu, majarida na maudhui yaliyoboreshwa kwa kapsuli za ununuzi zilizojumuishwa.',
    },
    statBoutiques: 'maduka',
    statStudios: 'studio',
    statViewsMonth: 'mionekano/mwezi',
    statActiveProducts: 'bidhaa hai',
    hiwLabel: 'JINSI INAVYOFANYA KAZI',
    hiwText: {
      watch:
        'Mtumiaji hutazama tangazo la moja kwa moja, urudufu, story, filamu au kipande cha TV kwenye jukwaa lolote lililounganishwa na Skoleom (+2,000 OTT, +1B tovuti).',
      touch:
        'AI ya Skoleom hutambua kitu kwenye video na huonyesha kapsuli shirikishi kwa mahitaji (gusa, mguso au amri ya sauti). Kuongeza kwenye kikapu kumejumuishwa bila kusimamisha mtiririko.',
      buy: 'SeSync® na Skoleom Pay hutekeleza malipo ndani ya video. Mtumiaji huendelea na maudhui kwenye timecode ile ile. Muamala hufanyika nyuma ya pazia, bila kuonekana.',
      earn: 'Muundaji wa maudhui, mmiliki wa duka na Skoleom hugawana mapato kwa wakati halisi kupitia Token na Monetizer Studio powered by Oracle.',
    },
    capsulesLabel: 'Kapsuli shirikishi',
    cartAdded: 'Imeongezwa kwenye kikapu',
    cartAdd: 'Ongeza kwenye kikapu',
    bannerLabels: [
      'Video zilizofanyiwa skoleom/siku',
      'Watu wanaofikiwa kila siku',
      'Majukwaa ya OTT yaliyounganishwa',
      'Bidhaa katika mfumo-ikolojia',
      'Nchi za usambazaji',
    ],
    launchLabel: 'KWA CHAPA NA WAUNDAJI',
    launchTitleLine1: 'Zindua',
    launchTitleLine2: 'duka lako la kusikia na kuona',
    launchSub:
      'Jiunge na mfumo-ikolojia wa Skoleom na ugeuze maudhui yako kuwa mashine ya kuuza. Video 25/mwezi × bidhaa 25 = bidhaa 625 zilizosambazwa katika mabilioni ya maudhui yanayotazamwa zaidi duniani.',
    launchCreate: 'Tengeneza duka langu',
    launchPricing: 'Ona bei',
  },
};

/**
 * Strings résolus pour une langue (FR par défaut, per-key fallback).
 * Deep-merge simple : on part du FR puis on écrase champ par champ par la
 * surcouche de langue, y compris pour les objets imbriqués (univDesc, hiwText).
 */
export function getBoutiquesStrings(lang: string): BoutiquesStrings {
  const tr = I18N[lang];
  if (!tr) return FR;
  return {
    ...FR,
    ...tr,
    heroStatLabels: (tr.heroStatLabels ?? FR.heroStatLabels) as BoutiquesStrings['heroStatLabels'],
    bannerLabels: (tr.bannerLabels ?? FR.bannerLabels) as BoutiquesStrings['bannerLabels'],
    univDesc: { ...FR.univDesc, ...(tr.univDesc ?? {}) },
    hiwText: { ...FR.hiwText, ...(tr.hiwText ?? {}) },
  };
}
