import type { LocaleResource } from './types';
import { STATIC_PAGE_DOCUMENTS } from './staticPages';
const resource = {
  staticPages: STATIC_PAGE_DOCUMENTS.it,
  common: {
    loading: 'Caricamento...',
    actions: {
      close: 'Chiudi il menu',
      search: 'Cerca',
      backHome: 'Torna alla home',
      login: 'Accedi',
      register: 'Crea un account',
      explore: 'Esplora',
    },
    states: {
      noResults: 'Nessun risultato',
      noResultsFor: 'Nessun risultato per "{{query}}".',
    },
  },
  app: {
    skipToContent: 'Vai al contenuto principale',
    loading: 'Caricamento...',
    notFound: {
      message: "Questa pagina non esiste nell'universo Skoleom.",
      cta: 'Torna alla home',
    },
  },
  header: {
    brandHome: 'Home',
    universe: 'Universe',
    navLabel: 'Navigazione principale',
    searchPlaceholder: 'Cerca',
    searchAria: 'Cerca',
    profile : {
      profile: 'Il mio profilo',
      logout: 'Disconnessione',
    },
    language: {
      change: 'Cambia lingua',
      zones: {
        international: 'Internazionale',
        europe: 'Europa',
        americas: 'Americhe',
        mena: 'Medio Oriente & Maghreb',
        asiaPacific: 'Asia-Pacifico',
        africa: 'Africa',
      },
    },
    actions: {
      settings: 'Impostazioni',
      favorites: 'Preferiti',
      cart: 'Carrello',
      account: 'Account utente',
      openMenu: 'Apri il menu',
      closeMenu: 'Chiudi il menu',
    },
    account: {
      dashboard: 'Il tuo spazio',
      orders: 'I tuoi ordini',
      favorites: 'Preferiti',
      admin: 'Console Admin',
      adminBadge: 'Admin',
      logout: 'Disconnessione',
    },
    nav: {
      home: 'Home',
      essayage: 'Prova virtuale',
      stores: 'Negozi audiovisivi',
      everyone: 'Per tutti',
      pros: 'Per i Pro',
      news: 'Novità',
      events: 'Eventi',
      group: 'Gruppo',
      search: 'Ricerca',
      support: 'Assistenza',
    },
  },
  cart: {
    title: 'Il tuo carrello',
    itemCount: '{{count}} articolo/i',
    empty: {
      title: 'Il tuo carrello è vuoto',
      subtitle: 'Scopri i nostri contenuti shoppable',
    },
    summary: {
      subtotal: 'Totale parziale',
      shipping: 'Spedizione',
      free: 'Gratuita',
      total: 'Totale',
    },
    checkout: {
      cta: 'Paga con Skoleom Pay',
      security: 'Pagamento sovrano e sicuro · conforme GDPR',
    },
    aria: {
      decrease: 'Diminuisci quantità',
      increase: 'Aumenta quantità',
      remove: 'Rimuovi questo articolo',
      close: 'Chiudi il carrello',
    },
  },
  skoleomPage: {
    nav: {
      ariaLabel: 'Navigazione Skoleom Page',
      home: 'Home',
      homeMobile: 'Home',
      trends: 'Tendenze',
      trendsMobile: 'Tendenze',
      create: 'Crea il tuo SeContent',
      createMobile: 'Crea',
      profile: 'Profilo',
      profileMobile: 'Profilo',
      modalTitle: 'Servizio non disponibile',
      modalBody: 'Questo servizio non è disponibile nella tua regione.',
      modalClose: 'Chiudi',
    },
    explorer: {
      poweredBy: 'Alimentato da SeSync',
      heroBefore: 'Guarda. Tocca. ',
      heroHighlight: 'Scopri.',
      heroSubtitle:
        "Una sola ricerca, tutto l'ecosistema Skoleom Universe — video, musica, media, shopping. Ogni risultato diventa una porta d'accesso immersiva.",
      logoAlt: 'Skoleom Page',
      searchPlaceholder: 'Cerca un artista, un film, un marchio…',
      searchAria: 'Termine di ricerca',
      searchSubmit: 'Avvia la ricerca',
      searchReset: 'Reimposta la ricerca',
      exploreCta: 'Esplora',
      resultsFor: 'Risultati per',
      resultsOnPlatforms_one: 'su {{count}} piattaforma',
      resultsOnPlatforms_other: 'su {{count}} piattaforme',
      filter: 'Filtra',
      platforms: 'Piattaforme',
      filterPlatformsAria: 'Filtra le piattaforme',
      selectAll: 'Tutto',
      selectNone: 'Nessuno',
      loading: "Connessione all'universo Skoleom…",
      noResults: 'Nessun risultato corrisponde ai tuoi filtri attuali. Seleziona più piattaforme.',
    },
    actionCards: {
      sectionBefore: "Scopri l'",
      sectionHighlight: 'universo Skoleom',
      mobile: {
        title: 'Mobile',
        description: 'Disponibile su iOS e Android.',
      },
      tv: {
        title: 'TV',
        description: 'Guarda sulla tua Smart TV.',
      },
      rewards: {
        title: 'Premi',
        description: 'Cashback sui tuoi acquisti premium.',
      },
      extension: {
        title: 'Estensione',
        description: 'Accedi a tutte le funzionalità.',
      },
      audio: {
        title: 'Audio',
        description: 'Ascolta su tutti i tuoi dispositivi.',
      },
      gaming: {
        title: 'Gaming',
        description: 'Scopri le nostre app di gioco.',
      },
    },
  },
  footer: {
    brand: {
      description:
        "L'ecosistema Skoleom unisce i negozi audiovisivi, gli strumenti per i creatori e le soluzioni aziendali per rendere i contenuti interattivi e fruibili.",
    },
    socials: {
      label: 'Social network Skoleom',
    },
    shopPrompt: {
      prefix: 'Puoi anche fare i tuoi acquisti nel',
      link: 'negozio online Skoleom',
    },
    copyright: 'Tutti i diritti riservati.',
    modal: {
      close: 'Chiudi il menu',
      title: 'Servizio non disponibile',
      body: 'Questo servizio non è disponibile nella tua regione.',
    },
    columns: {
      about: 'Informazioni su Skoleom',
      stores: 'Negozi audiovisivi',
      everyone: 'Per tutti',
      pros: 'Per i Pro',
      group: 'Gruppo',
      '1': 'Informazioni su Skoleom',
      '2': 'Negozi audiovisivi',
      '3': 'Per tutti',
      '4': 'Per i Pro',
      '5': 'Gruppo',
    },
    links: {
      '101': 'La nostra missione',
      '102': 'La nostra tecnologia',
      '103': "L'ecosistema Skoleom",
      '104': 'Programmi di finanziamento',
      '105': 'Brevetto Skoleom',
    },
    legalLinks: {
      '901': 'Note legali',
      '902': 'Termini e Condizioni',
      '903': 'Privacy',
      '904': 'Informativa sulle affiliazioni',
      '905': 'Preferenze cookie',
    },
  },
  auth: {
    login: {
      title: 'Accedi',
      submit: 'Accedi',
    },
    register: {
      title: 'Crea un account',
      submit: 'Crea un account',
    },
  },
  dashboard: {
    user: {
      orders: 'I tuoi ordini',
    },
    admin: {
      title: 'Console Admin',
    },
  },
  home: {
    hero: {
      downloadPickerHintAndroid: 'Disponibile su Google Play',
      downloadPickerHintIOS: 'Disponibile su App Store',
      downloadPickerHintDefault: 'Seleziona la tua piattaforma',
      extensionRegionModal: {
        kicker: 'Estensione Skoleom',
        title: 'Estensione non disponibile',
        body: 'Questa estensione non è disponibile nella tua regione.',
        close: 'Chiudi',
      },
      title: "Scopri l'ecosistema globale di Skoleom Group",
      description: {
        intro: "Skoleom Group rivoluziona l'",
        economy: 'economia digitale',
        mid: " consentendo l'acquisto istantaneo direttamente nei contenuti audiovisivi. Connesso a più di ",
        ott: '2 000 piattaforme OTT',
        join: ' e a ',
        web: 'miliardi di siti web',
        outro: ', la nostra tecnologia trasforma ogni schermo in un punto vendita interattivo.',
      },
      download: 'Scarica',
      application: "l'applicazione",
      extension: "l'estensione",
      watchVideo: 'Riproduci il video',
      ottMarqueeLabel: 'Piattaforme di streaming e OTT',
      logoWtbAlt: 'Watch. Touch. Buy.',
      videoAria: 'Video Skoleom',
      studioAria: 'Skoleom Studio',
      tagline1: 'OGNI VIDEO DIVENTA UN VERO NEGOZIO IMMERSIVO:',
      tagline2:
        "UN'ESPERIENZA FLUIDE, ELEGANTE E INTERATTIVA, DOVE SCOPRI, TOCCI E ACQUISTI ISTANTANEAMENTE CIÒ CHE VEDI.",
    },
    skoletoonsHero: {
      kicker: 'Moda, bellezza & lifestyle acquistabili',
      title: "SkoleToon's",
      subtitle:
        "Un negozio audiovisivo che trasforma ogni ispirazione di moda in un'esperienza interattiva.",
      body: 'Scopri un universo premium dove look, prodotti e momenti sono disponibili al momento giusto.',
      discover: 'Esplora',
      videoTitle: "Video di SkoleToon's",
      modalTitle: 'Negozio in fase di sviluppo',
      modalBody:
        "Il negozio SkoleToon's è ancora in fase di sviluppo. Presto disponibile nell'ecosistema Skoleom.",
      modalClose: 'Chiudi',
    },
    actions: {
      discoverMagic: 'Scopri la magia',
    },
    welcome: {
      part1: 'Benvenuto nel ',
      part2: 'futuro del ',
      part3: 'retail media',
      part4: 'e del ',
      part5: 'transmedia',
    },
    page: {
      heroClose: 'Chiudi',
      interactiveKicker: "Un'esperienza interattiva",
      interactiveSubtitle:
        "Dal set allo schermo,\nSkoleom Studio dà vita alle tue creazioni.\nL'immersione continua.",
      ecosystemKicker: 'Un universo. Molteplici possibilità.',
      ecosystemTitle: "L'ecosistema\nSkoleom",
      ecosystemIntro:
        "Oltre 2.000 piattaforme, miliardi di schermi: l'ecosistema Skoleom collega creator, brand e audience in un'esperienza immersiva dove ogni contenuto diventa negozio.",
      ecosystemStats: {
        products: 'di prodotti e servizi resi shoppable con un solo tocco.',
        countries: "Paesi connessi all'ecosistema.",
        detection: 'Per rilevare e attivare ciò que stai guardando.',
        alwaysOpen: 'Negozi audiovisivi sempre aperti.',
      },
      partnersTitle: 'Marchi partner',
      boutiquesCta: 'Scopri i nostri',
      boutiquesTitle: 'Negozi Audiovisivi',
      boutiquesSubtitle:
        'Un ecosistema immersivo. Più di 50 applicazioni web. Un solo limite: i tuoi desideri.',
      partnersSearchPlaceholder: 'Cerca un marchio (es: Decathlon, Netflix, Intersport...)',
      partnersSearchAria: 'Cerca un marchio partner',
    },
    news: {
      badge: 'Novità',
    },
    boutiques: {
      title: 'Scopri i nostri Negozi Audiovisivi',
      searchPlaceholder: 'Cerca un sito Skoleom (es: market, sport, ott...)',
    },
    sections: {
      welcome: 'Benvenuto nel futuro del retail media e del transmedia',
      how: 'Come funziona Skoleom',
      moment: "Ogni momento. Diventa. Un'opportunità.",
      interactive: "Un'esperienza interattiva",
      universe: 'Un universo. Diverse possibilità.',
      ecosystem: "L'ecosistema Skoleom",
      partners: 'Marchi partner',
    },
    descriptions: {
      detect:
        'Appena guardi, Skoleom riconosce ciò che appare sullo schermo e lo trasforma in acquisto — un tocco, senza uscire dal contenuto.',
    },
    stats: {
      storePages: 'pagine Audiovisual Store per negozio.',
    },
  },
  public: {
    retailMediaPlatform: {
      kicker: 'Retail Media',
      titlePrefix: 'La piattaforma di retail media che trasforma',
      titleHighlight: 'il video in commercio',
      description:
        'Skoleom unisce video acquistabile, misurazione e distribuzione multipiattaforma in un’unica piattaforma di retail media — raggiungi il pubblico dentro i contenuti che già guarda.',
      ctaBusiness: 'Soluzioni business',
      ctaTechnology: 'La nostra tecnologia',
      pillars: {
        videoCommerce: {
          title: 'Video commerce',
          description:
            'Trasforma ogni video in un negozio acquistabile. Ogni prodotto sullo schermo si acquista con un tap, senza reindirizzamenti.',
        },
        unifiedMeasurement: {
          title: 'Misurazione unificata',
          description:
            'Misura ogni impression, clic e conversione su tutte le piattaforme in tempo reale — un’unica dashboard, attribuzione completa.',
        },
        crossPlatform: {
          title: 'Copertura multipiattaforma',
          description:
            'Distribuisci campagne su oltre 2.000 piattaforme OTT, social e web aperto da un’unica integrazione.',
        },
      },
    },
    interactiveVideoCommerce: {
      kicker: 'Commercio video interattivo',
      titlePrefix: 'Rendi ogni video',
      titleHighlight: 'subito acquistabile',
      description:
        'Skoleom integra punti d’acquisto interattivi direttamente nei tuoi video. Gli spettatori acquistano ciò che vedono — subito, senza mai lasciare il contenuto.',
      ctaTalk: 'Parla con un esperto',
      ctaOverview: 'Vedi la panoramica',
      benefits: {
        conversion: 'Conversione più alta — l’acquisto avviene nel momento del desiderio.',
        reporting: 'Reportistica in tempo reale — ogni interazione misurata e attribuita.',
        friction:
          'Zero attrito — nessun reindirizzamento, nessun cambio di app, nessun abbandono del carrello.',
      },
    },
    hub: {
      groupCarousel: {
        kicker: 'Tutte le entità',
        title: 'Gruppo',
        subtitle: 'Le società satellite e i poli del gruppo Skoleom.',
        searchPlaceholder: 'Cerca (es. studio, invest, lab...)',
        ariaLabel: 'Carosello delle entità del Gruppo',
      },
    },
    skoleomTouch: {
      introSubtitle: 'Trova i prodotti nascosti nel video e sblocca una ricompensa esclusiva.',
      startCta: "Inizia l'esperienza",
      productsToFind: 'Prodotti da trovare',
      exclusiveReward: 'Ricompensa esclusiva',
      gameModalTitle: 'Esperienza in fase di sviluppo',
      gameModalBody:
        "L'esperienza interattiva Skoleom Touch è ancora in fase di sviluppo. Sarà presto disponibile.",
      gameModalClose: 'Chiudi',
    },
    stores: {
      hero: {
        titleLine1: 'Scopri i nostri',
        titleLine2: 'Negozi audiovisivi',
        subtitle:
          'Un ecosistema immersivo. Più di 50 applicazioni web. Un solo limite: la tua immaginazione.',
      },
      search: {
        placeholder: 'Cerca un negozio o un marchio',
        aria: 'Cerca un negozio o un marchio',
      },
      sections: {
        official: 'Negozi ufficiali',
        brands: 'Marchi disponibili',
      },
      showcase: {
        kicker: 'Negozi in primo piano',
        title: 'Universi principali',
        subtitle: 'Sport, OTT, musica e gaming — una panoramica dei negozi audiovisivi iconici.',
      },
      carousel: {
        kicker: 'Tutti i negozi',
        title: 'Negozi audiovisivi',
        subtitle: "Scopri tutti i negozi disponibili nell'ecosistema Skoleom.",
        searchPlaceholder: 'Cerca un negozio (es: sport, music, games...)',
        ariaLabel: 'Carosello dei negozi audiovisivi',
      },
    },
    howItWorks: {
      hero: {
        kicker: 'Come funziona',
        subtitle: 'Nel video. Allo stesso momento. Senza attriti.',
      },
      steps: {
        '01': {
          title: 'RICONOSCIMENTO IA',
          desc: 'La nostra IA identifica prodotti, oggetti e momenti in qualsiasi contenuto.',
        },
        '02': {
          title: 'CAPSULE INTELLIGENTI',
          desc: 'Capsule interattive appaiono in tempo reale, in modo fluido.',
        },
        '03': {
          title: 'UN SOLO CLIC',
          desc: "Clicchi. Nessun reindirizzamento. Nessun attrito. Solo un'azione istantanea.",
        },
        '04': {
          title: 'ACQUISTO CONTESTUALE',
          desc: 'Completa il tuo acquisto senza lasciare i contenuti che ami.',
        },
      },
      demo: {
        titlePrefix: 'Scopri la',
        titleHighlight: 'magia',
        cta: 'Avvia la demo interattiva',
      },
      showcase: {
        kicker: 'Universi consumer',
        title: 'Negozi in primo piano',
        subtitle:
          'Scopri esperienze interattive accessibili a tutti, integrate nei tuoi contenuti preferiti.',
      },
      carousel: {
        kicker: 'Tutti i negozi',
        title: 'Per tutti',
        subtitle: "Tutti i negozi consumer dell'ecosistema Skoleom.",
        searchPlaceholder: 'Cerca (es: page, shop, magazine...)',
        ariaLabel: 'Carosello dei negozi Per tutti',
      },
    },
    technology: {
      hero: {
        kicker: 'SeSync · La tecnologia',
        titlePrefix: 'Connesso a più di',
        titleMiddle: 'e',
      },
      features: {
        seamless: "Un'esperienza d'acquisto fluida direttamente nei video",
        compatible: 'Compatibile con i tuoi marchi e creatori preferiti',
        secure: 'Sicuro e conforme al GDPR',
      },
      download: "Scarica l'estensione",
      studio: {
        titleLine1: 'Lo strumento di monetizzazione',
        titleLine2Prefix: 'più',
        titleLine2Highlight: 'potente al mondo',
        description:
          'ERP/DCM SaaS dedicato alla gestione, monetizzazione e analisi dei contenuti video interattivi. Connesso a oltre 300 API. Controllo totale: vendite, audience, campagne, retargeting e performance del prodotto.',
      },
    },
  },
  data: {
    showcase: {
      'av-sesports': {
        title: 'Skoleom SeSports',
        desc: 'Universo sportivo interattivo: video-to-commerce, retail media e coinvolgimento dei fan. Il negozio audiovisivo ufficiale del gruppo per marchi sportivi e federazioni.',
      },
      'av-watch': {
        title: 'Watch on Skoleom',
        desc: 'Esperienza OTT shoppable di Skoleom: film, serie e live stream dove ogni prodotto visibile diventa accessibile in un tocco.',
      },
      'av-music': {
        title: 'Skoleom Music',
        desc: 'Etichette, artisti e merchandising. Il negozio audiovisivo dedicato alla musica con capsule di acquisto diretto in clip e concerti.',
      },
      'av-games': {
        title: 'Skoleom Games',
        desc: 'Universo del gaming e monetizzazione in-game. IP proprietarie, partnership con studi e capsule interattive integrate nei contenuti.',
      },
      'tous-sesync': {
        title: 'SeSync',
        desc: 'Motore di sincronizzazione Skoleom: acquisti in-page e distribuzione multipiattaforma in tempo reale.',
      },
      'tous-shop': {
        title: 'Skoleom Shop',
        desc: 'Il marketplace ufficiale del gruppo: prodotti, merchandise ed edizioni limitate disponibili direttamente dai tuoi contenuti preferiti.',
      },
      'tous-secontent': {
        title: 'SeContent Creation',
        desc: "Creazione e orchestrazione di capsule interattive. Strumenti intuitivi per trasformare qualsiasi contenuto in un'esperienza shoppable.",
      },
      'tous-magazine': {
        title: 'Skoleom Magazine',
        desc: 'Media e formati interattivi: notizie, rubriche e reportage arricchiti con capsule di shopping inline.',
      },
    },
    boutiques: {
      'av-sesports': {
        name: 'Skoleom SeSports',
        description: 'Universo sportivo e retail media.',
      },
      'av-cares': {
        name: 'Skoleom Cares',
        description: 'Impatto sociale e programmi dedicati.',
      },
      'av-games': {
        name: 'Skoleom Games',
        description: 'Giochi, IP e monetizzazione in-game.',
      },
      'av-watch': {
        name: 'Watch on Skoleom',
        description: 'Contenuti OTT shoppable ed esperienze live.',
      },
      'av-music': {
        name: 'Skoleom Music',
        description: 'Musica, artisti e merchandising diretto.',
      },
      'tous-page': {
        name: 'Skoleom Page',
        description: 'Punto di ingresso Skoleom e scoperta.',
      },
      'tous-sesync': {
        name: 'SeSync',
        description: 'Acquisti in-page e distribuzione.',
      },
      'tous-shop': {
        name: 'Skoleom Shop',
        description: "Marketplace ufficiale per l'ecosistema.",
      },
      'tous-secontent': {
        name: 'SeContent Creation',
        description: 'Crea e orchestra capsule interattive.',
      },
      'tous-magazine': {
        name: 'Skoleom Magazine',
        description: 'Media interattivi, notizie e reportage.',
      },
    },
  },
} satisfies LocaleResource;
export default resource;
