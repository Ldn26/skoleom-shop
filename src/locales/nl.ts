import type { LocaleResource } from './types';
import { STATIC_PAGE_DOCUMENTS } from './staticPages';
const resource = {
  staticPages: STATIC_PAGE_DOCUMENTS.nl,
  common: {
    loading: 'Laden...',
    actions: {
      close: 'Menu sluiten',
      search: 'Zoeken',
      backHome: 'Terug naar home',
      login: 'Inloggen',
      register: 'Account aanmaken',
      explore: 'Ontdekken',
    },
    states: {
      noResults: 'Geen resultaten',
      noResultsFor: 'Geen resultaten voor "{{query}}".',
    },
  },
  app: {
    skipToContent: 'Naar hoofdinhoud springen',
    loading: 'Laden...',
    notFound: {
      message: 'Deze pagina bestaat niet in het Skoleom-universum.',
      cta: 'Terug naar home',
    },
  },
  header: {
    brandHome: 'Home',
    universe: 'Universe',
    navLabel: 'Hoofdnavigatie',
    searchPlaceholder: 'Zoeken',
    searchAria: 'Zoeken',
    profile: {
      profile: 'Mijn profiel',
      logout: 'Uitloggen',
    },
    language: {
      change: 'Spracht wijzigen',
      zones: {
        international: 'Internationaal',
        europe: 'Europa',
        americas: 'Amerika',
        mena: 'Midden-Oosten & Maghreb',
        asiaPacific: 'Azië-Pacific',
        africa: 'Afrika',
      },
    },
    actions: {
      settings: 'Instellingen',
      favorites: 'Favorieten',
      cart: 'Winkelwagen',
      account: 'Gebruikersaccount',
      openMenu: 'Menu openen',
      closeMenu: 'Menu sluiten',
    },
    account: {
      dashboard: 'Jouw omgeving',
      orders: 'Jouw bestellingen',
      favorites: 'Favorieten',
      admin: 'Admin Console',
      adminBadge: 'Admin',
      logout: 'Uitloggen',
    },
    nav: {
      home: 'Home',
      essayage: 'Virtuele paskamer',
      stores: 'Audiovisuele winkels',
      everyone: 'Voor iedereen',
      pros: 'Voor Professionals',
      news: 'Nieuws',
      events: 'Evenementen',
      group: 'Groep',
      search: 'Zoeken',
      support: 'Ondersteuning',
    },
  },
  cart: {
    title: 'Jouw winkelwagen',
    itemCount: '{{count}} artikel(en)',
    empty: {
      title: 'Jouw winkelwagen is leeg',
      subtitle: 'Ontdek onze shoppable content',
    },
    summary: {
      subtotal: 'Subtotaal',
      shipping: 'Verzending',
      free: 'Gratis',
      total: 'Totaal',
    },
    checkout: {
      cta: 'Betalen met Skoleom Pay',
      security: 'Soevereine en beveiligde betaling · AVG-conform',
    },
    aria: {
      decrease: 'Aantal verlagen',
      increase: 'Aantal verhogen',
      remove: 'Dit artikel verwijderen',
      close: 'Winkelwagen sluiten',
    },
  },
  skoleomPage: {
    nav: {
      ariaLabel: 'Skoleom Page Navigatie',
      home: 'Home',
      homeMobile: 'Home',
      trends: 'Trends',
      trendsMobile: 'Trends',
      create: 'Maak jouw SeContent',
      createMobile: 'Creëren',
      profile: 'Profiel',
      profileMobile: 'Profiel',
      modalTitle: 'Dienst niet beschikbaar',
      modalBody: 'Deze dienst is niet beschikbaar in jouw regio.',
      modalClose: 'Sluiten',
    },
    explorer: {
      poweredBy: 'Aangedreven door SeSync',
      heroBefore: 'Kijk. Tik. ',
      heroHighlight: 'Ontdek.',
      heroSubtitle:
        "Eén enkele zoekopdracht, het hele Skoleom Universe-ecosysteem — video's, muziek, media, shopping. Elk resultaat wordt een immersieve toegangspoort.",
      logoAlt: 'Skoleom Page',
      searchPlaceholder: 'Zoek een artiest, een film, een merk…',
      searchAria: 'Zoekterm',
      searchSubmit: 'Zoeken starten',
      searchReset: 'Zoekopdracht wissen',
      exploreCta: 'Ontdekken',
      resultsFor: 'Resultaten voor',
      resultsOnPlatforms_one: 'op {{count}} platform',
      resultsOnPlatforms_other: 'op {{count}} platformen',
      filter: 'Filteren',
      platforms: 'Platformen',
      filterPlatformsAria: 'Platformen filteren',
      selectAll: 'Alle',
      selectNone: 'Geen',
      loading: 'Verbinding maken met het Skoleom-universum…',
      noResults: 'Geen resultaten komen overeen met je huidige filters. Selecteer meer platformen.',
    },
    actionCards: {
      sectionBefore: 'Ontdek het ',
      sectionHighlight: 'Skoleom-universum',
      mobile: {
        title: 'Mobiel',
        description: 'Beschikbaar op iOS and Android.',
      },
      tv: {
        title: 'TV',
        description: 'Kijk op jouw Smart TV.',
      },
      rewards: {
        title: 'Beloningen',
        description: 'Cashback op jouw premium aankopen.',
      },
      extension: {
        title: 'Extensie',
        description: 'Krijg toegang tot alle functies.',
      },
      audio: {
        title: 'Audio',
        description: 'Luister op al jouw apparaten.',
      },
      gaming: {
        title: 'Gaming',
        description: 'Ontdek onze game-apps.',
      },
    },
  },
  footer: {
    brand: {
      description:
        'Het Skoleom-ecosysteem brengt audiovisuele winkels, creator-tools en zakelijke oplossingen samen om content interactief en actiegericht te maken.',
    },
    socials: {
      label: 'Skoleom Sociale media',
    },
    shopPrompt: {
      prefix: 'Je kunt ook winkelen in',
      link: 'de Skoleom online shop',
    },
    copyright: 'Alle rechten voorbehouden.',
    modal: {
      close: 'Menu sluiten',
      title: 'Dienst niet beschikbaar',
      body: 'Deze dienst is niet beschikbaar in jouw regio.',
    },
    columns: {
      about: 'Over Skoleom',
      stores: 'Audiovisuele winkels',
      everyone: 'Voor iedereen',
      pros: 'Voor Professionals',
      group: 'Groep',
      '1': 'Over Skoleom',
      '2': 'Audiovisuele winkels',
      '3': 'Voor iedereen',
      '4': 'Voor Professionals',
      '5': 'Groep',
    },
    links: {
      '101': 'Onze missie',
      '102': 'Onze technologie',
      '103': 'Het Skoleom-ecosysteem',
      '104': "Financieringsprogramma's",
      '105': 'Skoleom Patent',
    },
    legalLinks: {
      '901': 'Juridische vermeldingen',
      '902': 'Algemene Voorwaarden',
      '903': 'Privacybeleid',
      '904': 'Affiliate openbaarmaking',
      '905': 'Cookievoorkeuren',
    },
  },
  auth: {
    login: {
      title: 'Inloggen',
      submit: 'Inloggen',
    },
    register: {
      title: 'Account aanmaken',
      submit: 'Account aanmaken',
    },
  },
  dashboard: {
    user: {
      orders: 'Jouw bestellingen',
    },
    admin: {
      title: 'Admin Console',
    },
  },
  home: {
    hero: {
      downloadPickerHintAndroid: 'Beschikbaar op Google Play',
      downloadPickerHintIOS: 'Beschikbaar op App Store',
      downloadPickerHintDefault: 'Kies jouw platform',
      extensionRegionModal: {
        kicker: 'Extension Skoleom',
        title: 'Extension niet beschikbaar',
        body: 'Deze extension is niet beschikbaar in jouw regio.',
        close: 'Sluiten',
      },
      title: 'Ontdek het wereldwijde ecosysteem van Skoleom Group',
      description: {
        intro: 'Skoleom Group revolutioneert de ',
        economy: 'digitale economie',
        mid: ' door directe aankopen mogelijk te maken vanuit het hart van audiovisuele content. Verbonden met meer dan ',
        ott: '2 000 OTT-platformen',
        join: ' en ',
        web: 'miljarden websites',
        outro: ', transformeert onze technologie elk scherm in een interactief verkooppunt.',
      },
      download: 'Download',
      application: 'de app',
      extension: 'de extensie',
      watchVideo: 'Video afspelen',
      ottMarqueeLabel: 'Streaming- und OTT-platformen',
      logoWtbAlt: 'Watch. Touch. Buy.',
      videoAria: 'Skoleom Video',
      studioAria: 'Skoleom Studio',
      tagline1: 'ELKE VIDEO WORDT EEN ECHTE IMMERSIEVE WINKEL:',
      tagline2:
        'EEN VLOEIENDE, ELEGANTE EN INTERACTIEVE ERVARING, WAAR JE DIRECT ONTDEKT, TIKT EN KOOPT WAT JE ZIET.',
    },
    skoletoonsHero: {
      kicker: 'Shoppable mode, beauty & lifestyle',
      title: "SkoleToon's",
      subtitle:
        'Een audiovisuele winkel die elke mode-inspiratie omzet in een interactieve ervaring.',
      body: 'Ontdek een premium universum waar looks, producten en momenten op het juiste moment beschikbaar zijn.',
      discover: 'Ontdek',
      videoTitle: "Video van SkoleToon's",
      modalTitle: 'Winkel in ontwikkeling',
      modalBody:
        "De SkoleToon's winkel is nog in ontwikkeling. Binnenkort beschikbaar in het Skoleom-ecosysteem.",
      modalClose: 'Sluiten',
    },
    actions: {
      discoverMagic: 'Ontdek de magie',
    },
    welcome: {
      part1: 'Welkom in de ',
      part2: 'toekomst van ',
      part3: 'retail media',
      part4: 'en ',
      part5: 'transmedia',
    },
    page: {
      heroClose: 'Sluiten',
      interactiveKicker: 'Een interactieve ervaring',
      interactiveSubtitle:
        'Van set tot scherm brengt\nSkoleom Studio je creaties tot leven.\nDe immersie gaat door.',
      ecosystemKicker: 'Eén universum. Meerdere mogelijkheden.',
      ecosystemTitle: 'Het Skoleom-\necosysteem',
      ecosystemIntro:
        'Meer dan 2.000 platformen, miljarden schermen: het Skoleom-ecosysteem verbindt creators, merken en audiences in een immersieve ervaring waarin elke content een winkel wordt.',
      ecosystemStats: {
        products: 'aan producten en diensten shoppable gemaakt met één enkele tik.',
        countries: 'Landen verbonden met het ecosysteem.',
        detection: 'Om te detecteren en te activeren waarnaar je kijkt.',
        alwaysOpen: 'Audiovisuele winkels die altijd open zijn.',
      },
      partnersTitle: 'Partnermerken',
      boutiquesCta: 'Ontdek onze',
      boutiquesTitle: 'Audiovisuele winkels',
      boutiquesSubtitle:
        'Een immersief ecosysteem. Meer dan 50 webapplicaties. Slechts één grens: jouw wensen.',
      partnersSearchPlaceholder: 'Zoek een merk (bijv: Decathlon, Netflix, Intersport...)',
      partnersSearchAria: 'Zoek een partnermerk',
    },
    news: {
      badge: 'Nieuw',
    },
    boutiques: {
      title: 'Ontdek onze Audiovisuele winkels',
      searchPlaceholder: 'Zoek een Skoleom-site (bijv: market, sport, ott...)',
    },
    sections: {
      welcome: 'Welkom in de toekomst van retail media en transmedia',
      how: 'Hoe Skoleom werkt',
      moment: 'Elk moment. Wordt. Een kans.',
      interactive: 'Een interactieve ervaring',
      universe: 'Eén universum. Meerdere mogelijkheden.',
      ecosystem: 'Het Skoleom-ecosysteem',
      partners: 'Partnermerken',
    },
    descriptions: {
      detect:
        'Zodra je kijkt, herkent Skoleom wat op het scherm verschijnt en maakt het met één tik koopbaar — zonder de content te verlaten.',
    },
    stats: {
      storePages: "Audiovisual Store pagina's per winkel.",
    },
  },
  public: {
    retailMediaPlatform: {
      kicker: 'Retail Media',
      titlePrefix: 'Het retail-mediaplatform dat',
      titleHighlight: 'video tot commerce maakt',
      description:
        'Skoleom verenigt shoppable video, meting en cross-platform distributie in één retail-mediaplatform — bereik je publiek binnen de content die het al bekijkt.',
      ctaBusiness: 'Zakelijke oplossingen',
      ctaTechnology: 'Onze technologie',
      pillars: {
        videoCommerce: {
          title: 'Video commerce',
          description:
            'Maak van elke video een koopbare winkel. Elk product op het scherm is met één tik te koop, zonder omleiding.',
        },
        unifiedMeasurement: {
          title: 'Uniforme meting',
          description:
            'Volg elke impressie, klik en conversie over platforms heen in realtime — één dashboard, volledige attributie.',
        },
        crossPlatform: {
          title: 'Cross-platform bereik',
          description:
            'Distribueer campagnes over 2.000+ OTT-platforms, social en het open web vanuit één integratie.',
        },
      },
    },
    interactiveVideoCommerce: {
      kicker: 'Interactieve videocommerce',
      titlePrefix: 'Maak elke video',
      titleHighlight: 'direct koopbaar',
      description:
        'Skoleom integreert interactieve koopmomenten direct in je video’s. Kijkers kopen wat ze zien — direct, zonder ooit de content te verlaten.',
      ctaTalk: 'Praat met een expert',
      ctaOverview: 'Bekijk het overzicht',
      benefits: {
        conversion: 'Hogere conversie — kopen gebeurt op het moment van verlangen.',
        reporting: 'Realtime rapportage — elke interactie gemeten en toegewezen.',
        friction: 'Geen frictie — geen omleiding, geen app-wissel, geen verlaten winkelwagen.',
      },
    },
    hub: {
      groupCarousel: {
        kicker: 'Alle entiteiten',
        title: 'Groep',
        subtitle: 'De satellietbedrijven en divisies van de Skoleom-groep.',
        searchPlaceholder: 'Zoeken (bijv. studio, invest, lab...)',
        ariaLabel: 'Carrousel van groepsentiteiten',
      },
    },
    skoleomTouch: {
      introSubtitle:
        'Vind de verborgen producten in de video en ontgrendel een exclusieve beloning.',
      startCta: 'Start de ervaring',
      productsToFind: 'Producten om te vinden',
      exclusiveReward: 'Exclusieve beloning',
      gameModalTitle: 'Ervaring in ontwikkeling',
      gameModalBody:
        'De interactieve Skoleom Touch-ervaring is nog in ontwikkeling. Binnenkort beschikbaar.',
      gameModalClose: 'Sluiten',
    },
    stores: {
      hero: {
        titleLine1: 'Ontdek onze',
        titleLine2: 'Audiovisuele winkels',
        subtitle:
          'Een immersief ecosysteem. Meer dan 50 webapplicaties. Slechts één grens: jouw verbeelding.',
      },
      search: {
        placeholder: 'Zoek een winkel of een merk',
        aria: 'Zoek een winkel of een merk',
      },
      sections: {
        official: 'Officiële winkels',
        brands: 'Beschikbare merken',
      },
      showcase: {
        kicker: 'Uitgelichte winkels',
        title: 'Topuniversums',
        subtitle:
          'Sport, OTT, muziek en gaming — een overzicht van iconische audiovisuele winkels.',
      },
      carousel: {
        kicker: 'Alle winkels',
        title: 'Audiovisuele winkels',
        subtitle: 'Ontdek alle winkels die beschikbaar zijn in het Skoleom-ecosysteem.',
        searchPlaceholder: 'Zoek een winkel (bijv: sport, music, games...)',
        ariaLabel: 'Carrousel van audiovisuele winkels',
      },
    },
    howItWorks: {
      hero: {
        kicker: 'Hoe het werkt',
        subtitle: 'In de video. Op hetzelfde moment. Zonder frictie.',
      },
      steps: {
        '01': {
          title: 'AI RECOGNITION',
          desc: 'Onze AI identificeert producten, objecten en momenten in alle content.',
        },
        '02': {
          title: 'INTELLIGENTE CAPSULES',
          desc: 'Interactieve capsules verschijnen naadloos in realtime.',
        },
        '03': {
          title: 'EÉN ENKELE TIK',
          desc: 'Je klikt. Geen herleiding. Geen frictie. Gewoon direct actie.',
        },
        '04': {
          title: 'CONTEXTUEEL KOPEN',
          desc: 'Rond je aankoop af zonder de content te verlaten waarvan je houdt.',
        },
      },
      demo: {
        titlePrefix: 'Ontdek de',
        titleHighlight: 'magie',
        cta: 'Start de interactieve demo',
      },
      showcase: {
        kicker: 'Consumentenuniversums',
        title: 'Uitgelichte winkels',
        subtitle:
          'Ontdek interactieve ervaringen die voor iedereen toegankelijk zijn, geïntegreerd in je favoriete content.',
      },
      carousel: {
        kicker: 'Alle winkels',
        title: 'Voor iedereen',
        subtitle: 'Alle consumentenwinkels van het Skoleom-ecosysteem.',
        searchPlaceholder: 'Zoeken (bijv: page, shop, magazine...)',
        ariaLabel: 'Carrousel van winkels Voor iedereen',
      },
    },
    technology: {
      hero: {
        kicker: 'SeSync · De technologie',
        titlePrefix: 'Verbonden met meer dan',
        titleMiddle: 'en',
      },
      features: {
        seamless: "Een naadloze winkelervaring direct in video's",
        compatible: 'Compatibel met je favoriete merken en creators',
        secure: 'Veilig en AVG-conform',
      },
      download: 'Download de extensie',
      studio: {
        titleLine1: 'De monetisatie-tool',
        titleLine2Prefix: 'de meest',
        titleLine2Highlight: 'krachtige ter wereld',
        description:
          "ERP/DCM SaaS ontworpen voor het beheer, de monetisatie en de analyse van interactieve videocontent. Verbonden met meer dan 300 API's. Volledige controle: verkopen, doelgroepen, campagnes, retargeting en productprestaties.",
      },
    },
  },
  data: {
    showcase: {
      'av-sesports': {
        title: 'Skoleom SeSports',
        desc: 'Interactief sportuniversum: video-to-commerce, retail media en fanbetrokkenheid. De officiële audiovisuele winkel van de groep voor sportmerken en -federaties.',
      },
      'av-watch': {
        title: 'Watch on Skoleom',
        desc: 'Skoleom shoppable OTT-ervaring: films, series en live streams waar elk zichtbaar product met één tik toegankelijk wordt.',
      },
      'av-music': {
        title: 'Skoleom Music',
        desc: 'Label, artiesten en merchandising. De audiovisuele winkel speciaal voor muziek met directe aankoopcapsules in clips en concerten.',
      },
      'av-games': {
        title: 'Skoleom Games',
        desc: 'Gaming-universum en in-game monetisatie. Eigen IP, studio-partnerschappen og interactieve capsules ingebed in content.',
      },
      'tous-sesync': {
        title: 'SeSync',
        desc: 'Skoleom synchronisatie-engine: in-page aankopen en realtime multi-platform distributie.',
      },
      'tous-shop': {
        title: 'Skoleom Shop',
        desc: 'De officiële marktplaats van de groep: producten, merchandise en limited editions rechtstreeks beschikbaar vanuit je favoriete content.',
      },
      'tous-secontent': {
        title: 'SeContent Creation',
        desc: 'Creatie en orkestratie van interactieve capsules. Intuïtieve tools om elke content om te zetten in een shoppable ervaring.',
      },
      'tous-magazine': {
        title: 'Skoleom Magazine',
        desc: 'Media en interactieve formats: nieuws, achtergronden en rapportages verrijkt met inline shopping-capsules.',
      },
    },
    boutiques: {
      'av-sesports': {
        name: 'Skoleom SeSports',
        description: 'Sportuniversum en retail media.',
      },
      'av-cares': {
        name: 'Skoleom Cares',
        description: "Maatschappelijke impact en speciale programma's.",
      },
      'av-games': {
        name: 'Skoleom Games',
        description: 'Games, IP en in-game monetisatie.',
      },
      'av-watch': {
        name: 'Watch on Skoleom',
        description: 'Shoppable OTT-content en live ervaringen.',
      },
      'av-music': {
        name: 'Skoleom Music',
        description: 'Muziek, artiesten en directe merchandising.',
      },
      'tous-page': {
        name: 'Skoleom Page',
        description: 'Skoleom toegangspunt en ontdekking.',
      },
      'tous-sesync': {
        name: 'SeSync',
        description: 'In-page aankopen en distribut.',
      },
      'tous-shop': {
        name: 'Skoleom Shop',
        description: 'Officiële marktplaats voor het ecosysteem.',
      },
      'tous-secontent': {
        name: 'SeContent Creation',
        description: 'Interactieve capsules maken en orkestreren.',
      },
      'tous-magazine': {
        name: 'Skoleom Magazine',
        description: 'Interactieve media, nieuws en rapportages.',
      },
    },
  },
} satisfies LocaleResource;
export default resource;
