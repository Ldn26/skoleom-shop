import type { LocaleResource } from './types';
import { getA11yFallback } from './a11yFallback';
const resource = {
  common: {
    loading: 'Inapakia...',
    actions: {
      close: 'Funga menyu',
      search: 'Tafuta',
      backHome: 'Rudi nyumbani',
      login: 'Ingia',
      register: 'Fungua akaunti',
      explore: 'Chunguza',
    },
    states: {
      noResults: 'Hakuna matokeo',
      noResultsFor: 'Hakuna matokeo ya “{{query}}”.',
    },
  },
  app: {
    skipToContent: 'Nenda kwenye maudhui kuu',
    loading: 'Inapakia...',
    notFound: {
      message: 'Ukurasa huu haupo katika ulimwengu wa Skoleom.',
      cta: 'Rudi nyumbani',
    },
  },
  a11y: getA11yFallback('sw'),
  header: {
    brandHome: 'Nyumbani',
    universe: 'Universe',
    navLabel: 'Urambazaji mkuu',
    searchPlaceholder: 'Tafuta',
    searchAria: 'Tafuta',
    language: {
      change: 'Badilisha lugha',
    },
    actions: {
      settings: 'Mipangilio',
      favorites: 'Vipendwa',
      cart: 'Kikapu',
      account: 'Akaunti ya mtumiaji',
      openMenu: 'Fungua menyu',
      closeMenu: 'Funga menyu',
    },
    account: {
      dashboard: 'Dashibodi yangu',
      orders: 'Oda zangu',
      favorites: 'Vipendwa',
      admin: 'Dashibodi ya admin',
      adminBadge: 'Admin',
      logout: 'Toka',
    },
    nav: {
      home: 'Nyumbani',
      essayage: 'Jaribio la mtandaoni',
      stores: 'Maduka rasmi ya sauti na video',
      everyone: 'Kwa wote',
      pros: 'Kwa wataalamu',
      news: 'Habari',
      events: 'Matukio',
      group: 'Kundi',
      support: 'Usaidizi',
    },
  },
  cart: {
    title: 'Kikapu changu',
    itemCount: '{{count}} bidhaa',
    empty: {
      title: 'Kikapu chako kiko tupu',
      subtitle: 'Gundua maudhui yetu yanayoweza kununuliwa',
    },
    summary: {
      subtotal: 'Jumla ndogo',
      shipping: 'Usafirishaji',
      free: 'Bure',
      total: 'Jumla',
    },
    checkout: {
      cta: 'Lipa kwa Skoleom Pay',
      security: 'Malipo huru na salama · yanatii GDPR',
    },
    aria: {
      decrease: 'Punguza idadi',
      increase: 'Ongeza idadi',
      remove: 'Ondoa bidhaa hii',
      close: 'Funga kikapu',
    },
  },
  skoleomPage: {
    nav: {
      ariaLabel: 'Urambazaji wa Skoleom Page',
      home: 'Nyumbani',
      homeMobile: 'Nyumbani',
      trends: 'Mitindo',
      trendsMobile: 'Mitindo',
      create: 'Unda SeContent yako',
      createMobile: 'Unda',
      profile: 'Wasifu',
      profileMobile: 'Wasifu',
      modalTitle: 'Huduma haipatikani',
      modalBody: 'Huduma hii haipatikani katika eneo lako.',
      modalClose: 'Funga',
    },
    explorer: {
      poweredBy: 'Inaendeshwa na SeSync',
      heroBefore: 'Tazama. Gusa. ',
      heroHighlight: 'Gundua.',
      heroSubtitle:
        'Utafutaji mmoja, mfumo wote wa Skoleom Universe — video, muziki, media, ununuzi. Kila matokeo ni mlango wa kina.',
      logoAlt: 'Skoleom Page',
      searchPlaceholder: 'Tafuta msanii, filamu, chapa…',
      searchAria: 'Neno la utafutaji',
      searchSubmit: 'Anza utafutaji',
      searchReset: 'Weka upya utafutaji',
      exploreCta: 'Chunguza',
      resultsFor: 'Matokeo kwa',
      resultsOnPlatforms_one: 'kwenye jukwaa {{count}}',
      resultsOnPlatforms_other: 'kwenye majukwaa {{count}}',
      filter: 'Chuja',
      platforms: 'Majukwaa',
      filterPlatformsAria: 'Chuja majukwaa',
      selectAll: 'Zote',
      selectNone: 'Hakuna',
      loading: 'Inaunganisha na ulimwengu wa Skoleom…',
      noResults: 'Hakuna matokeo yanayolingana na vichujio vyako. Chagua majukwaa zaidi.',
    },
    actionCards: {
      sectionBefore: 'Gundua ',
      sectionHighlight: 'ulimwengu wa Skoleom',
      mobile: {
        title: 'Simu',
        description: 'Inapatikana kwenye iOS na Android.',
      },
      tv: {
        title: 'TV',
        description: 'Tazama kwenye TV yako iliyounganishwa.',
      },
      rewards: {
        title: 'Zawadi',
        description: 'Cashback kwa ununuzi wa premium.',
      },
      extension: {
        title: 'Kiendelezi',
        description: 'Fikia vipengele vyote.',
      },
      audio: {
        title: 'Sauti',
        description: 'Sikiliza kwenye vifaa vyako vyote.',
      },
      gaming: {
        title: 'Michezo',
        description: 'Gundua programu zetu za michezo.',
      },
    },
  },
  footer: {
    shopPrompt: {
      prefix: 'Unaweza pia kununua katika',
      link: 'duka la mtandaoni la Skoleom',
    },
    copyright: 'Haki zote zimehifadhiwa.',
    modal: {
      close: 'Funga menyu',
      title: 'Huduma haipatikani',
      body: 'Huduma hii haipatikani katika eneo lako.',
    },
    columns: {
      about: 'About Skoleom',
      stores: 'Maduka rasmi ya sauti na video',
      everyone: 'Kwa wote',
      pros: 'Kwa wataalamu',
      group: 'Kundi',
      '1': 'About Skoleom',
      '2': 'Maduka ya sauti na picha',
      '3': 'For everyone',
      '4': 'Kwa wataalamu',
      '5': 'Group',
    },
    links: {
      '101': 'Help/Contact',
      '102': 'Legal',
      '103': 'Privacy policy',
      '104': 'Cookie preferences',
      '105': 'Affiliate disclosure',
      '106': 'Terms of use',
    },
  },
  auth: {
    login: {
      title: 'Ingia',
      submit: 'Ingia',
    },
    register: {
      title: 'Fungua akaunti',
      submit: 'Fungua akaunti',
    },
  },
  dashboard: {
    user: {
      orders: 'Oda zangu',
    },
    admin: {
      title: 'Dashibodi ya admin',
    },
  },
  home: {
    hero: {
      downloadPickerHintAndroid: 'Inapatikana kwenye Google Play',
      downloadPickerHintIOS: 'Inapatikana kwenye App Store',
      downloadPickerHintDefault: 'Chagua platform yako',
      extensionRegionModal: {
        kicker: 'Kiendelezi cha Skoleom',
        title: 'Kiendelezi Hakipatikani',
        body: 'Kiendelezi hiki bado hakipatikani katika eneo lako.',
        close: 'Funga',
      },
      title: 'Gundua ekosistimu ya kimataifa ya Skoleom Group',
      description: {
        intro: 'Skoleom Group inabadilisha ',
        economy: 'uchumi wa kidijitali',
        mid: ' kwa kuwezesha ununuzi wa papo hapo katika maudhui ya sauti na picha. Imeunganishwa na zaidi ya ',
        ott: 'majukwaa 2 000 ya OTT',
        join: ' na ',
        web: 'mabilioni ya tovuti',
        outro: ', teknolojia yetu hubadilisha kila skrini kuwa sehemu ya mauzo shirikishi.',
      },
      download: 'Pakua',
      application: 'programu',
      extension: 'kiendelezi',
      watchVideo: 'Tazama video',
      ottMarqueeLabel: 'Majukwaa ya utiririshaji na OTT',
      logoWtbAlt: 'Watch. Touch. Buy.',
      videoAria: 'Video ya Skoleom',
      studioAria: 'Skoleom Studio',
      tagline1: 'KILA VIDEO HUWA DUKA LA KWELI LA KINA:',
      tagline2:
        'UZOEFU LAINI, LA KISTAARABU NA LA MAINGILIANO, UNAPOGUNDUA, KUGUSA NA KUNUNUA PAPO HAPO UNACHOKIONA.',
    },
    skoletoonsHero: {
      kicker: 'Mitindo, urembo na mtindo wa maisha unaonunulika',
      title: "SkoleToon's",
      subtitle:
        'Duka la sauti na picha linalogeza kila msukumo wa mitindo kuwa uzoefu wa maingiliano.',
      body: 'Gundua ulimwengu wa premium ambapo mitindo, bidhaa na wakati hupatikana kwa wakati sahihi.',
      discover: 'Gundua',
      videoTitle: "Video ya SkoleToon's",
      modalTitle: 'Duka linatengenezwa',
      modalBody:
        "Duka la SkoleToon's bado linatengenezwa. Litapatikana hivi karibuni katika mfumo wa Skoleom.",
      modalClose: 'Funga',
    },
    actions: {
      discoverMagic: 'Gundua uchawi',
    },
    welcome: {
      part1: 'Karibu kwenye ',
      part2: 'mustakabali wa ',
      part3: 'retail media',
      part4: 'na ',
      part5: 'transmedia',
    },
    page: {
      heroClose: 'Funga',
      interactiveKicker: 'Uzoefu wa maingiliano',
      interactiveSubtitle:
        'Kutoka seti hadi skrini,\nSkoleom Studio huifanya kazi yako iwe hai.\nUzoefu wa kuzama unaendelea.',
      ecosystemKicker: 'Ulimwengu mmoja. Uwezekano mwingi.',
      ecosystemTitle: 'Mfumo wa ikolojia\nwa Skoleom',
      ecosystemIntro:
        'Zaidi ya majukwaa 2,000, mabilioni ya skrini: mfumo wa ikolojia wa Skoleom unaunganisha wabunifu, chapa na hadhira katika uzoefu wa kuzama ambapo kila maudhui huwa duka.',
      ecosystemStats: {
        products: 'bidhaa na huduma zinazonunulika kwa mguso mmoja.',
        countries: 'Nchi zilizounganishwa na mfumo wa ikolojia.',
        detection: 'Kutambua na kuwezesha unachotazama.',
        alwaysOpen: 'Maduka ya sauti na picha yamefunguliwa kila wakati.',
      },
      partnersTitle: 'Chapa za washirika',
      boutiquesCta: 'Gundua',
      boutiquesTitle: 'Maduka yetu ya sauti na picha',
      boutiquesSubtitle:
        'Mfumo wa ikolojia wa kina. Programu 50+ za wavuti. Kikomo kimoja: mawazo yako.',
      partnersSearchPlaceholder: 'Tafuta chapa (mf: Netflix...)',
      partnersSearchAria: 'Tafuta chapa ya mshirika',
    },
    news: {
      badge: 'Mpya',
    },
    boutiques: {
      title: 'Gundua Maduka yetu ya sauti na picha',
      searchPlaceholder: 'Tafuta tovuti ya Skoleom...',
    },
    sections: {
      welcome: 'Karibu kwenye mustakabali wa retail media na transmedia',
      how: 'Jinsi Skoleom inavyofanya kazi',
      moment: 'Kila wakati. Huwa. Fursa.',
      interactive: 'Uzoefu wa maingiliano',
      universe: 'Ulimwengu mmoja. Uwezekano mwingi.',
      ecosystem: 'Mfumo wa ikolojia wa Skoleom',
      partners: 'Chapa za washirika',
    },
    descriptions: {
      detect:
        'Mara unapotazama, Skoleom hutambua kinachoonekana skrini na kukibadilisha kuwa ununuzi — mguso mmoja, bila kuondoka kwenye maudhui.',
    },
    stats: {
      storePages: 'kurasa za Audiovisual Store kwa kila duka.',
    },
  },
  public: {
    retailMediaPlatform: {
      kicker: 'Retail Media',
      titlePrefix: 'Jukwaa la retail media linalogeuza',
      titleHighlight: 'video kuwa biashara',
      description:
        'Skoleom huunganisha video inayonunulika, upimaji na usambazaji wa majukwaa mbalimbali katika jukwaa moja la retail media — fika kwa hadhira ndani ya maudhui wanayotazama tayari.',
      ctaBusiness: 'Suluhu za biashara',
      ctaTechnology: 'Teknolojia yetu',
      pillars: {
        videoCommerce: {
          title: 'Biashara ya video',
          description:
            'Geuza video yoyote kuwa duka linalonunulika. Kila bidhaa skrini inanunulika kwa mguso mmoja, bila kuelekezwa.',
        },
        unifiedMeasurement: {
          title: 'Upimaji uliounganishwa',
          description:
            'Fuatilia kila onyesho, mbofyo na ubadilishaji katika majukwaa yote kwa wakati halisi — dashibodi moja, uhusishaji kamili.',
        },
        crossPlatform: {
          title: 'Ufikiaji wa majukwaa mbalimbali',
          description:
            'Sambaza kampeni katika majukwaa 2,000+ ya OTT, mitandao ya kijamii na wavuti huria kutoka muunganisho mmoja.',
        },
      },
    },
    interactiveVideoCommerce: {
      kicker: 'Biashara ya video shirikishi',
      titlePrefix: 'Fanya kila video',
      titleHighlight: 'inunulike papo hapo',
      description:
        'Skoleom huingiza pointi za ununuzi shirikishi moja kwa moja ndani ya video zako. Watazamaji hununua wanachokiona — papo hapo, bila kuondoka kwenye maudhui.',
      ctaTalk: 'Zungumza na mtaalamu',
      ctaOverview: 'Tazama muhtasari',
      benefits: {
        conversion: 'Ubadilishaji wa juu — ununuzi hutokea wakati wa hamu.',
        reporting: 'Ripoti za wakati halisi — kila mwingiliano hupimwa na kuhusishwa.',
        friction: 'Bila msuguano — bila kuelekezwa, bila kubadilisha programu, bila kuacha kikapu.',
      },
    },
    hub: {
      groupCarousel: {
        kicker: 'Vyombo vyote',
        title: 'Kikundi',
        subtitle: 'Kampuni tanzu na vitengo vya kundi la Skoleom.',
        searchPlaceholder: 'Tafuta (k.m. studio, invest, lab...)',
        ariaLabel: 'Mzunguko wa vyombo vya Kundi',
      },
    },
    skoleomTouch: {
      introSubtitle: 'Tafuta bidhaa zilizofichwa kwenye video na ufungue zawadi ya kipekee.',
      startCta: 'Anzisha uzoefu',
      productsToFind: 'Bidhaa za kupata',
      exclusiveReward: 'Zawadi ya kipekee',
      gameModalTitle: 'Uzoefu Unatengenezwa',
      gameModalBody:
        'Uzoefu shirikishi wa Skoleom Touch bado unatengenezwa. Utapatikana hivi karibuni.',
      gameModalClose: 'Funga',
    },
    stores: {
      hero: {
        titleLine1: 'Gundua',
        titleLine2: 'Maduka yetu ya sauti na picha',
        subtitle: 'Mfumo wa ikolojia wa kina. Programu 50+ za wavuti. Kikomo kimoja: mawazo yako.',
      },
      search: {
        placeholder: 'Tafuta duka au chapa',
        aria: 'Tafuta duka au chapa',
      },
      sections: {
        official: 'Maduka rasmi',
        brands: 'Chapa zinazopatikana',
      },
      showcase: {
        kicker: 'Maduka maalum',
        title: 'Ulimwengu mkuu',
        subtitle: 'Michezo, OTT, muziki na gaming — maduka maarufu ya sauti na picha.',
      },
      carousel: {
        kicker: 'Maduka yote',
        title: 'Maduka ya sauti na picha',
        subtitle: 'Gundua maduka yote katika mfumo wa Skoleom.',
        searchPlaceholder: 'Tafuta duka (mf: sport, music, games...)',
        ariaLabel: 'Karuseli ya maduka ya sauti na picha',
      },
    },
    howItWorks: {
      hero: {
        kicker: 'Jinsi inavyofanya kazi',
        subtitle: 'Ndani ya video. Wakati huo huo. Bila msuguano.',
      },
      steps: {
        '01': {
          title: 'UTAMBULISHO WA AI',
          desc: 'AI yetu hutambua bidhaa, vitu na wakati katika maudhui yoyote.',
        },
        '02': {
          title: 'KAPSULI MAZINGIRA',
          desc: 'Kapsuli za maingiliano zinaonekana kwa wakati halisi bila kukatiza.',
        },
        '03': {
          title: 'GUSA MOJA',
          desc: 'Bofya moja. Hakuna uelekezaji. Hakuna msuguano. Hatua ya papo hapo.',
        },
        '04': {
          title: 'NUNUA KATIKA MUKTADHA',
          desc: 'Maliza ununuzi bila kuacha maudhui unayopenda.',
        },
      },
      demo: {
        titlePrefix: 'Gundua',
        titleHighlight: 'uchawi',
        cta: 'Anzisha demo ya maingiliano',
      },
      showcase: {
        kicker: 'Ulimwengu wa watumiaji',
        title: 'Maduka maalum',
        subtitle: 'Uzoefu wa maingiliano kwa wote, katika maudhui unayopenda.',
      },
      carousel: {
        kicker: 'Maduka yote',
        title: 'Kwa wote',
        subtitle: 'Maduka yote ya watumiaji katika mfumo wa Skoleom.',
        searchPlaceholder: 'Tafuta (mf: page, shop, magazine...)',
        ariaLabel: 'Karuseli ya maduka Kwa wote',
      },
    },
    technology: {
      hero: {
        kicker: 'SeSync · Teknolojia',
        titlePrefix: 'Imeunganishwa na zaidi ya',
        titleMiddle: 'na',
      },
      features: {
        seamless: 'Uzoefu wa ununuzi laini moja kwa moja ndani ya video',
        compatible: 'Inaoana na chapa na waundaji unaowapenda',
        secure: 'Salama na inatii GDPR',
      },
      download: 'Pakua kiendelezi',
      studio: {
        titleLine1: 'Zana ya uchumaji',
        titleLine2Prefix: 'yenye',
        titleLine2Highlight: 'nguvu zaidi duniani',
        description:
          'ERP/DCM SaaS kwa kusimamia, kuchumisha na kuchambua maudhui ya video ya maingiliano. API 300+. Udhibiti kamili.',
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
