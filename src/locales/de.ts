import type { LocaleResource } from './types';
import { STATIC_PAGE_DOCUMENTS } from './staticPages';
const resource = {
  staticPages: STATIC_PAGE_DOCUMENTS.de,
  common: {
    loading: 'Laden...',
    actions: {
      close: 'Menü schließen',
      search: 'Suchen',
      backHome: 'Zurück zur Startseite',
      login: 'Anmelden',
      register: 'Konto erstellen',
      explore: 'Entdecken',
    },
    states: {
      noResults: 'Keine Ergebnisse',
      noResultsFor: 'Keine Ergebnisse für „{{query}}“.',
    },
  },
  app: {
    skipToContent: 'Zum Hauptinhalt springen',
    loading: 'Laden...',
    notFound: {
      message: 'Diese Seite existiert im Skoleom-Universum nicht.',
      cta: 'Zurück zur Startseite',
    },
  },
  header: {
    brandHome: 'Startseite',
    universe: 'Universe',
    profile: {
      profile: 'Mein Profil',
      logout: 'Abmelden',
    },
    navLabel: 'Hauptnavigation',
    searchPlaceholder: 'Suchen',
    searchAria: 'Suchen',
    language: {
      change: 'Sprache ändern',
      zones: {
        international: 'International',
        europe: 'Europa',
        americas: 'Amerika',
        mena: 'Naher Osten & Maghreb',
        asiaPacific: 'Asien-Pazifik',
        africa: 'Afrika',
      },
    },
    actions: {
      settings: 'Einstellungen',
      favorites: 'Favoriten',
      cart: 'Warenkorb',
      account: 'Benutzerkonto',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
    },
    account: {
      dashboard: 'Ihr Bereich',
      orders: 'Ihre Bestellungen',
      favorites: 'Favoriten',
      admin: 'Admin-Konsole',
      adminBadge: 'Admin',
      logout: 'Abmelden',
    },
    nav: {
      home: 'Startseite',
      cabine: 'Ankleideraum',
      stores: 'Audiovisuelle Stores',
      everyone: 'Für alle',
      pros: 'Für Profis',
      news: 'Neuigkeiten',
      events: 'Events',
      group: 'Gruppe',
      search: 'Suche',
      support: 'Support',
    },
  },
  cart: {
    title: 'Ihr Warenkorb',
    itemCount: '{{count}} Artikel',
    empty: {
      title: 'Ihr Warenkorb ist leer',
      subtitle: 'Entdecken Sie unsere shoppbaren Inhalte',
    },
    summary: {
      subtotal: 'Zwischensumme',
      shipping: 'Versand',
      free: 'Kostenlos',
      total: 'Gesamtsumme',
    },
    checkout: {
      cta: 'Mit Skoleom Pay bezahlen',
      security: 'Souveräne und sichere Zahlung · DSGVO-konform',
    },
    aria: {
      decrease: 'Menge verringern',
      increase: 'Menge erhöhen',
      remove: 'Diesen Artikel entfernen',
      close: 'Warenkorb schließen',
    },
  },
  skoleomPage: {
    nav: {
      ariaLabel: 'Skoleom Page Navigation',
      home: 'Startseite',
      homeMobile: 'Startseite',
      trends: 'Trends',
      trendsMobile: 'Trends',
      create: 'Erstellen Sie Ihr SeContent',
      createMobile: 'Erstellen',
      profile: 'Profil',
      profileMobile: 'Profil',
      modalTitle: 'Dienst nicht verfügbar',
      modalBody: 'Dieser Dienst ist in Ihrer Region nicht verfügbar.',
      modalClose: 'Schließen',
    },
    explorer: {
      poweredBy: 'Unterstützt durch SeSync',
      heroBefore: 'Schauen Sie. Berühren Sie. ',
      heroHighlight: 'Entdecken Sie.',
      heroSubtitle:
        'Eine einzige Suche, das gesamte Skoleom Universe-Ökosystem – Videos, Musik, Medien, Shopping. Jedes Ergebnis wird zu einem immersiven Einstieg.',
      logoAlt: 'Skoleom Page',
      searchPlaceholder: 'Suchen Sie nach einem Künstler, Film, einer Marke…',
      searchAria: 'Suchbegriff',
      searchSubmit: 'Suche starten',
      searchReset: 'Suche zurücksetzen',
      exploreCta: 'Entdecken',
      resultsFor: 'Ergebnisse für',
      resultsOnPlatforms_one: 'auf {{count}} Plattform',
      resultsOnPlatforms_other: 'auf {{count}} Plattformen',
      filter: 'Filtern',
      platforms: 'Plattformen',
      filterPlatformsAria: 'Plattformen filtern',
      selectAll: 'Alle',
      selectNone: 'Keine',
      loading: 'Verbindung zum Skoleom-Universum wird hergestellt…',
      noResults:
        'Keine Ergebnisse entsprechen Ihren aktuellen Filtern. Wählen Sie mehr Plattformen aus.',
    },
    actionCards: {
      sectionBefore: 'Entdecken Sie das ',
      sectionHighlight: 'Skoleom-Universum',
      mobile: {
        title: 'Mobil',
        description: 'Verfügbar für iOS und Android.',
      },
      tv: {
        title: 'TV',
        description: 'Auf Ihrem Smart-TV ansehen.',
      },
      rewards: {
        title: 'Prämien',
        description: 'Cashback auf Ihre Premium-Einkäufe.',
      },
      extension: {
        title: 'Erweiterung',
        description: 'Greifen Sie auf alle Funktionen zu.',
      },
      audio: {
        title: 'Audio',
        description: 'Auf all Ihren Geräten hören.',
      },
      gaming: {
        title: 'Gaming',
        description: 'Entdecken Sie unsere Spiele-Apps.',
      },
    },
  },
  footer: {
    brand: {
      description:
        'Das Skoleom-Ökosystem vereint audiovisuelle Stores, Ersteller-Tools und Business-Lösungen, um Inhalte interaktiv und handlungsfähig zu machen.',
    },
    socials: {
      label: 'Skoleom Soziale Netzwerke',
    },
    shopPrompt: {
      prefix: 'Sie können auch einkaufen im',
      link: 'Skoleom Online-Shop',
    },
    copyright: 'Alle Rechte vorbehalten.',
    modal: {
      close: 'Menü schließen',
      title: 'Dienst nicht verfügbar',
      body: 'Dieser Dienst ist in Ihrer Region nicht verfügbar.',
    },
    columns: {
      about: 'Über Skoleom',
      stores: 'Audiovisuelle Stores',
      everyone: 'Für alle',
      pros: 'Für Profis',
      group: 'Gruppe',
      '1': 'Über Skoleom',
      '2': 'Audiovisuelle Stores',
      '3': 'Für alle',
      '4': 'Für Profis',
      '5': 'Gruppe',
    },
    links: {
      '101': 'Unsere Mission',
      '102': 'Unsere Technologie',
      '103': 'Das Skoleom-Ökosystem',
      '104': 'Finanzierungsprogramme',
      '105': 'Skoleom-Patent',
    },
    legalLinks: {
      '901': 'Impressum',
      '902': 'Nutzungsbedingungen',
      '903': 'Datenschutz',
      '904': 'Affiliate-Offenlegung',
      '905': 'Cookie-Einstellungen',
    },
  },
  auth: {
    login: {
      title: 'Anmelden',
      submit: 'Anmelden',
    },
    register: {
      title: 'Konto erstellen',
      submit: 'Konto erstellen',
    },
  },
  dashboard: {
    user: {
      orders: 'Ihre Bestellungen',
    },
    admin: {
      title: 'Admin-Konsole',
    },
  },
  home: {
    hero: {
      downloadPickerHintAndroid: 'Verfügbar auf Google Play',
      downloadPickerHintIOS: 'Verfügbar in der App Store',
      downloadPickerHintDefault: 'Wählen Sie Ihre Plattform',
      extensionRegionModal: {
        kicker: 'Extension Skoleom',
        title: 'Extension nicht verfügbar',
        body: 'Diese Extension ist in Ihrer Region nicht verfügbar.',
        close: 'Schließen',
      },
      title: 'Entdecken Sie das weltweite Ökosystem der Skoleom-Gruppe',
      description: {
        intro: 'Die Skoleom-Gruppe revolutioniert ',
        economy: 'die digitale Wirtschaft',
        mid: ', indem sie sofortiges Einkaufen direkt aus audiovisuellen Inhalten ermöglicht. Verbunden mit mehr als ',
        ott: '2 000 OTT-Plattformen',
        join: ' und ',
        web: 'Milliarden von Websites',
        outro:
          ', verwandelt unsere Technologie jeden Bildschirm in einen interaktiven Point of Sale.',
      },
      download: 'Herunterladen',
      application: 'die App',
      extension: 'die Erweiterung',
      watchVideo: 'Video abspielen',
      ottMarqueeLabel: 'Streaming- und OTT-Plattformen',
      logoWtbAlt: 'Watch. Touch. Buy.',
      videoAria: 'Skoleom Video',
      studioAria: 'Skoleom Studio',
      tagline1: 'JEDES VIDEO WIRD ZU EINEM ECHTEN IMMERSIVEN STORE:',
      tagline2:
        'EINE NAHTLOSE, ELEGANTE UND INTERAKTIVE ERFAHRUNG, BEI DER MAN DAS, WAS MAN SIEHT, SOFORT ENTDECKT, BERÜHRT UND KAUFT.',
    },
    skoletoonsHero: {
      kicker: 'Shoppable Fashion, Beauty & Lifestyle',
      title: "SkoleToon's",
      subtitle:
        'Ein audiovisueller Store, der jede Modeinspiration in ein interaktives Erlebnis verwandelt.',
      body: 'Entdecke ein Premium-Universum, in dem Looks, Produkte und Momente genau im richtigen Moment verfügbar sind.',
      discover: 'Entdecken',
      videoTitle: "SkoleToon's Video",
      modalTitle: 'Store in Entwicklung',
      modalBody:
        "Der SkoleToon's Store befindet sich noch in der Entwicklung. Bald im Skoleom-Ökosystem verfügbar.",
      modalClose: 'Schließen',
    },
    actions: {
      discoverMagic: 'Entdecken Sie die Magie',
    },
    welcome: {
      part1: 'Willkommen in der ',
      part2: 'Zukunft der ',
      part3: 'Retail Media',
      part4: ' und des ',
      part5: 'Transmedia',
    },
    page: {
      heroClose: 'Schließen',
      interactiveKicker: 'Eine interaktive Erfahrung',
      interactiveSubtitle:
        'Vom Set zum Screen erweckt\nSkoleom Studio Ihre Kreationen zum Leben.\nDie Immersion bleibt.',
      ecosystemKicker: 'Ein Universum. Viele Möglichkeiten.',
      ecosystemTitle: 'Das Skoleom-\nÖkosystem',
      ecosystemIntro:
        'Über 2.000 Plattformen, Milliarden von Screens: Das Skoleom-Ökosystem verbindet Creator, Marken und Audiences in einer immersiven Erfahrung, in der jeder Inhalt zum Store wird.',
      ecosystemStats: {
        products:
          'von Produkten und Dienstleistungen, die mit einer einzigen Berührung shoppable werden.',
        countries: 'Länder, die mit dem Ökosystem verbunden sind.',
        detection: 'Um zu erkennen und zu aktivieren, was Sie sehen.',
        alwaysOpen: 'Immer geöffnete audiovisuelle Stores.',
      },
      partnersTitle: 'Partnermarken',
      boutiquesCta: 'Entdecken Sie unsere',
      boutiquesTitle: 'Audiovisuellen Stores',
      boutiquesSubtitle:
        'Ein immersives Ökosystem. Mehr als 50 Web-Apps. Eine einzige Grenze: Ihre Wünsche.',
      partnersSearchPlaceholder:
        'Nach einer Marke suchen (z. B. Decathlon, Netflix, Intersport...)',
      partnersSearchAria: 'Nach einer Partnermarken suchen',
    },
    news: {
      badge: 'Neuheiten',
    },
    boutiques: {
      title: 'Entdecken Sie unsere Audiovisuellen Stores',
      searchPlaceholder: 'Nach einer Skoleom-Website suchen (z. B. Market, Sport, Ott...)',
    },
    sections: {
      welcome: 'Willkommen in der Zukunft von Retail Media und Transmedia',
      how: 'Wie Skoleom funktioniert',
      moment: 'Jeder Moment. Wird. Eine Chance.',
      interactive: 'Eine interaktive Erfahrung',
      universe: 'Ein Universum. Mehrere Möglichkeiten.',
      ecosystem: 'Das Skoleom-Ökosystem',
      partners: 'Partnermarken',
    },
    descriptions: {
      detect:
        'Sobald Sie zuschauen, erkennt Skoleom, was auf dem Screen erscheint, und macht es per Berührung kaufbar — ohne den Inhalt zu verlassen.',
    },
    stats: {
      storePages: 'Audiovisual Store-Seiten pro Store.',
    },
  },
  public: {
    retailMediaPlatform: {
      kicker: 'Retail Media',
      titlePrefix: 'Die Retail-Media-Plattform, die',
      titleHighlight: 'Video zu Commerce macht',
      description:
        'Skoleom vereint shoppbares Video, Messung und plattformübergreifende Distribution in einer einzigen Retail-Media-Plattform — erreiche dein Publikum in den Inhalten, die es bereits ansieht.',
      ctaBusiness: 'Business-Lösungen',
      ctaTechnology: 'Unsere Technologie',
      pillars: {
        videoCommerce: {
          title: 'Video Commerce',
          description:
            'Verwandle jedes Video in einen kaufbaren Shop. Jedes Produkt auf dem Bildschirm ist mit einem Tap kaufbar, ohne Weiterleitung.',
        },
        unifiedMeasurement: {
          title: 'Einheitliche Messung',
          description:
            'Verfolge jede Impression, jeden Klick und jede Conversion plattformübergreifend in Echtzeit — ein Dashboard, volle Attribution.',
        },
        crossPlatform: {
          title: 'Plattformübergreifende Reichweite',
          description:
            'Verteile Kampagnen über 2.000+ OTT-Plattformen, Social Media und das offene Web aus einer einzigen Integration.',
        },
      },
    },
    interactiveVideoCommerce: {
      kicker: 'Interaktiver Video-Commerce',
      titlePrefix: 'Mache jedes Video',
      titleHighlight: 'sofort kaufbar',
      description:
        'Skoleom bettet interaktive Kaufpunkte direkt in deine Videos ein. Zuschauer kaufen, was sie sehen — sofort, ohne den Inhalt je zu verlassen.',
      ctaTalk: 'Mit einem Experten sprechen',
      ctaOverview: 'Übersicht ansehen',
      benefits: {
        conversion: 'Höhere Conversion — der Kauf erfolgt im Moment des Wunsches.',
        reporting: 'Echtzeit-Reporting — jede Interaktion gemessen und zugeordnet.',
        friction: 'Null Reibung — keine Weiterleitung, kein App-Wechsel, kein Kaufabbruch.',
      },
    },
    hub: {
      groupCarousel: {
        kicker: 'Alle Einheiten',
        title: 'Konzern',
        subtitle: 'Die Tochtergesellschaften und Bereiche des Skoleom-Konzerns.',
        searchPlaceholder: 'Suchen (z. B. studio, invest, lab...)',
        ariaLabel: 'Karussell der Konzerneinheiten',
      },
    },
    skoleomTouch: {
      introSubtitle:
        'Finden Sie die versteckten Produkte im Video und schalten Sie eine exklusive Belohnung frei.',
      startCta: 'Erlebnis starten',
      productsToFind: 'Zu findende Produkte',
      exclusiveReward: 'Exklusive Belohnung',
      gameModalTitle: 'Erlebnis in Entwicklung',
      gameModalBody:
        'Das interaktive Skoleom Touch-Erlebnis befindet sich noch in der Entwicklung. Es wird bald verfügbar sein.',
      gameModalClose: 'Schließen',
    },
    stores: {
      hero: {
        titleLine1: 'Entdecken Sie unsere',
        titleLine2: 'Audiovisuellen Stores',
        subtitle:
          'Ein immersives Ökosystem. Mehr als 50 Web-Apps. Eine einzige Grenze: Ihre Vorstellungskraft.',
      },
      search: {
        placeholder: 'Nach einem Store oder einer Marke suchen',
        aria: 'Nach einem Store oder einer Marke suchen',
      },
      sections: {
        official: 'Offizielle Stores',
        brands: 'Verfügbare Marken',
      },
      showcase: {
        kicker: 'Vorgestellte Stores',
        title: 'Top-Universen',
        subtitle: 'Sport, OTT, Musik und Gaming – ein Einblick in ikonische audiovisuelle Stores.',
      },
      carousel: {
        kicker: 'Alle Stores',
        title: 'Audiovisuelle Stores',
        subtitle: 'Entdecken Sie alle im Skoleom-Ökosystem verfügbaren Stores.',
        searchPlaceholder: 'Nach einem Store suchen (z. B. Sport, Musik, Spiele...)',
        ariaLabel: 'Karussell der audiovisuellen Stores',
      },
    },
    howItWorks: {
      hero: {
        kicker: 'Wie es funktioniert',
        subtitle: 'Im Video. Im selben Moment. Ohne Reibung.',
      },
      steps: {
        '01': {
          title: 'KI-ERKENNUNG',
          desc: 'Unsere KI identifiziert Produkte, Objekte und Momente in jedem Inhalt.',
        },
        '02': {
          title: 'INTELLIGENTE KAPSELN',
          desc: 'Interaktive Kapseln erscheinen nahtlos und in Echtzeit.',
        },
        '03': {
          title: 'EIN EINZIGER KLICK',
          desc: 'Sie klicken. Keine Weiterleitung. Keine Reibung. Nur eine sofortige Aktion.',
        },
        '04': {
          title: 'KONTEXTUELLER KAUF',
          desc: 'Schließen Sie Ihren Kauf ab, ohne die Inhalte zu verlassen, die Sie lieben.',
        },
      },
      demo: {
        titlePrefix: 'Entdecken Sie die',
        titleHighlight: 'Magie',
        cta: 'Interaktive Demo starten',
      },
      showcase: {
        kicker: 'Verbraucheruniversen',
        title: 'Vorgestellte Stores',
        subtitle:
          'Entdecken Sie interaktive Erlebnisse, die für alle zugänglich und in Ihre Lieblingsinhalte integriert sind.',
      },
      carousel: {
        kicker: 'Alle Stores',
        title: 'Für alle',
        subtitle: 'Alle verbraucherorientierten Stores des Skoleom-Ökosystems.',
        searchPlaceholder: 'Suchen (z. B. Page, Shop, Magazin...)',
        ariaLabel: 'Karussell der Stores Für alle',
      },
    },
    technology: {
      hero: {
        kicker: 'SeSync · Die Technologie',
        titlePrefix: 'Verbunden mit mehr als',
        titleMiddle: 'und',
      },
      features: {
        seamless: 'Ein nahtloses Einkaufserlebnis direkt in Videos',
        compatible: 'Kompatibel mit Ihren Lieblingsmarken und -erstellern',
        secure: 'Sicher und DSGVO-konform',
      },
      download: 'Erweiterung herunterladen',
      studio: {
        titleLine1: 'Das Monetarisierungs-Tool',
        titleLine2Prefix: 'das',
        titleLine2Highlight: 'mächtigste der Welt',
        description:
          'ERP/DCM SaaS für die Verwaltung, Monetarisierung und Analyse interaktiver Videoinhalte. Verbunden mit über 300 APIs. Volle Kontrolle: Verkäufe, Zielgruppen, Kampagnen, Retargeting und Produktleistung.',
      },
    },
  },
  data: {
    showcase: {
      'av-sesports': {
        title: 'Skoleom SeSports',
        desc: 'Interaktives Sportuniversum: Video-to-Commerce, Retail Media und Fan-Engagement. Der offizielle audiovisuelle Store der Gruppe für Sportmarken und Verbände.',
      },
      'av-watch': {
        title: 'Watch on Skoleom',
        desc: 'Shoppbares OTT-Erlebnis von Skoleom: Filme, Serien und Live-Streams, bei denen jedes sichtbare Produkt mit einem Fingertipp zugänglich wird.',
      },
      'av-music': {
        title: 'Skoleom Music',
        desc: 'Label, Künstler und Merchandising. Der audiovisuelle Store für Musik mit direkten Kaufkapseln in Clips und Konzerten.',
      },
      'av-games': {
        title: 'Skoleom Games',
        desc: 'Gaming-Universum und In-Game-Monetarisierung. Eigene IPs, Studio-Partnerschaften und interaktive Kapseln, die in Inhalte eingebettet sind.',
      },
      'tous-sesync': {
        title: 'SeSync',
        desc: 'Skoleom-Synchronisations-Engine: In-Page-Kauf und plattformübergreifende Distribution in Echtzeit.',
      },
      'tous-shop': {
        title: 'Skoleom Shop',
        desc: 'Der offizielle Marktplatz der Gruppe: Produkte, Merchandise und limitierte Editionen direkt aus Ihren Lieblingsinhalten verfügbar.',
      },
      'tous-secontent': {
        title: 'SeContent Creation',
        desc: 'Erstellung und Orchestrierung interaktiver Kapseln. Intuitive Tools, um jeden Inhalt in ein shoppbares Erlebnis zu verwandeln.',
      },
      'tous-magazine': {
        title: 'Skoleom Magazine',
        desc: 'Medien und interaktive Formate: Nachrichten, Features und Berichte, angereichert mit Inline-Shopping-Kapseln.',
      },
    },
    boutiques: {
      'av-sesports': {
        name: 'Skoleom SeSports',
        description: 'Sportuniversum und Retail Media.',
      },
      'av-cares': {
        name: 'Skoleom Cares',
        description: 'Soziales Engagement und dedizierte Programme.',
      },
      'av-games': {
        name: 'Skoleom Games',
        description: 'Spiele, IPs und In-Game-Monetarisierung.',
      },
      'av-watch': {
        name: 'Watch on Skoleom',
        description: 'Shoppbare OTT-Inhalte und Live-Erlebnisse.',
      },
      'av-music': {
        name: 'Skoleom Music',
        description: 'Musik, Künstler und direktes Merchandising.',
      },
      'tous-page': {
        name: 'Skoleom Page',
        description: 'Skoleom-Einstiegspunkt und Entdeckung.',
      },
      'tous-sesync': {
        name: 'SeSync',
        description: 'In-Page-Kauf und Distribution.',
      },
      'tous-shop': {
        name: 'Skoleom Shop',
        description: 'Offizieller Marktplatz für das Ökosystem.',
      },
      'tous-secontent': {
        name: 'SeContent Creation',
        description: 'Erstellen und Orchestrieren interaktiver Kapseln.',
      },
      'tous-magazine': {
        name: 'Skoleom Magazine',
        description: 'Interaktive Medien, Nachrichten und Berichte.',
      },
    },
  },
} satisfies LocaleResource;
export default resource;
