import type { LocaleResource } from './types';
import { getA11yFallback } from './a11yFallback';
const resource = {
  common: {
    loading: 'लोड हो रहा है...',
    actions: {
      close: 'मेनू बंद करें',
      search: 'खोजें',
      backHome: 'होम पर वापस जाएँ',
      login: 'लॉग इन',
      register: 'खाता बनाएँ',
      explore: 'एक्सप्लोर करें',
    },
    states: {
      noResults: 'कोई परिणाम नहीं',
      noResultsFor: '“{{query}}” के लिए कोई परिणाम नहीं।',
    },
  },
  app: {
    skipToContent: 'मुख्य सामग्री पर जाएँ',
    loading: 'लोड हो रहा है...',
    notFound: {
      message: 'यह पेज Skoleom यूनिवर्स में मौजूद नहीं है।',
      cta: 'होम पर वापस जाएँ',
    },
  },
  a11y: getA11yFallback('hi'),
  header: {
    brandHome: 'होम',
    universe: 'Universe',
    navLabel: 'मुख्य नेविगेशन',
    searchPlaceholder: 'खोजें',
    searchAria: 'खोजें',
    language: {
      change: 'भाषा बदलें',
    },
    profile: {
      profile: 'मेरा प्रोफ़ाइल',
      logout: 'लॉग आउट',
    },
    actions: {
      settings: 'सेटिंग्स',
      favorites: 'पसंदीदा',
      cart: 'कार्ट',
      account: 'उपयोगकर्ता खाता',
      openMenu: 'मेनू खोलें',
      closeMenu: 'मेनू बंद करें',
    },
    account: {
      dashboard: 'मेरा डैशबोर्ड',
      orders: 'मेरे ऑर्डर',
      favorites: 'पसंदीदा',
      admin: 'एडमिन कंसोल',
      adminBadge: 'Admin',
      logout: 'लॉग आउट',
    },
    nav: {
      home: 'होम',
      essayage: 'वर्चुअल ट्रायल',
      cabine: 'कबिन',
      stores: 'ऑडियोविज़ुअल स्टोर',
      everyone: 'सभी के लिए',
      pros: 'पेशेवरों के लिए',
      news: 'समाचार',
      events: 'इवेंट',
      group: 'ग्रुप',
      support: 'सहायता',
    },
  },
  cart: {
    title: 'मेरा कार्ट',
    itemCount: '{{count}} आइटम',
    empty: {
      title: 'आपका कार्ट खाली है',
      subtitle: 'हमारी खरीद योग्य सामग्री खोजें',
    },
    summary: {
      subtotal: 'सबटोटल',
      shipping: 'शिपिंग',
      free: 'मुफ़्त',
      total: 'कुल',
    },
    checkout: {
      cta: 'Skoleom Pay से भुगतान करें',
      security: 'सुरक्षित सार्वभौमिक भुगतान · GDPR अनुरूप',
    },
    aria: {
      decrease: 'मात्रा घटाएँ',
      increase: 'मात्रा बढ़ाएँ',
      remove: 'यह आइटम हटाएँ',
      close: 'कार्ट बंद करें',
    },
  },
  skoleomPage: {
    nav: {
      ariaLabel: 'Skoleom Page नेविगेशन',
      home: 'होम',
      homeMobile: 'होम',
      trends: 'ट्रेंड',
      trendsMobile: 'ट्रेंड',
      create: 'अपना SeContent बनाएं',
      createMobile: 'बनाएं',
      profile: 'प्रोफ़ाइल',
      profileMobile: 'प्रोफ़ाइल',
      modalTitle: 'सेवा उपलब्ध नहीं',
      modalBody: 'यह सेवा आपके क्षेत्र में उपलब्ध नहीं है।',
      modalClose: 'बंद करें',
    },
    explorer: {
      poweredBy: 'SeSync द्वारा संचालित',
      heroBefore: 'देखें। छुएँ। ',
      heroHighlight: 'खोजें।',
      heroSubtitle:
        'एक खोज, पूरा Skoleom Universe इकोसिस्टम — वीडियो, संगीत, मीडिया, शॉपिंग। हर परिणाम एक इमर्सिव प्रवेश द्वार है।',
      logoAlt: 'Skoleom Page',
      searchPlaceholder: 'कलाकार, फ़िल्म, ब्रांड खोजें…',
      searchAria: 'खोज शब्द',
      searchSubmit: 'खोज शुरू करें',
      searchReset: 'खोज रीसेट करें',
      exploreCta: 'खोजें',
      resultsFor: 'इसके परिणाम',
      resultsOnPlatforms_one: '{{count}} प्लेटफ़ॉर्म पर',
      resultsOnPlatforms_other: '{{count}} प्लेटफ़ॉर्म पर',
      filter: 'फ़िल्टर',
      platforms: 'प्लेटफ़ॉर्म',
      filterPlatformsAria: 'प्लेटफ़ॉर्म फ़िल्टर करें',
      selectAll: 'सभी',
      selectNone: 'कोई नहीं',
      loading: 'Skoleom ब्रह्मांड से कनेक्ट हो रहा है…',
      noResults: 'आपके वर्तमान फ़िल्टर से कोई परिणाम मेल नहीं खाता। अधिक प्लेटफ़ॉर्म चुनें।',
    },
    actionCards: {
      sectionBefore: 'खोजें ',
      sectionHighlight: 'Skoleom ब्रह्मांड',
      mobile: {
        title: 'मोबाइल',
        description: 'iOS और Android पर उपलब्ध।',
      },
      tv: {
        title: 'TV',
        description: 'अपने कनेक्टेड TV पर देखें।',
      },
      rewards: {
        title: 'पुरस्कार',
        description: 'प्रीमियम खरीद पर कैशबैक।',
      },
      extension: {
        title: 'एक्सटेंशन',
        description: 'सभी सुविधाओं तक पहुँचें।',
      },
      audio: {
        title: 'ऑडियो',
        description: 'सभी उपकरणों पर सुनें।',
      },
      gaming: {
        title: 'गेमिंग',
        description: 'हमारे गेम ऐप खोजें।',
      },
    },
  },
  footer: {
    shopPrompt: {
      prefix: 'आप खरीदारी यहाँ भी कर सकते हैं',
      link: 'Skoleom ऑनलाइन स्टोर',
    },
    copyright: 'सर्वाधिकार सुरक्षित।',
    modal: {
      close: 'मेनू बंद करें',
      title: 'सेवा उपलब्ध नहीं',
      body: 'यह सेवा आपके क्षेत्र में उपलब्ध नहीं है।',
    },
    columns: {
      about: 'About Skoleom',
      stores: 'ऑडियोविज़ुअल स्टोर',
      everyone: 'सभी के लिए',
      pros: 'पेशेवरों के लिए',
      group: 'ग्रुप',
      '1': 'About Skoleom',
      '2': 'ऑडियोविज़ुअल स्टोर',
      '3': 'For everyone',
      '4': 'पेशेवरों के लिए',
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
      title: 'लॉग इन',
      submit: 'लॉग इन',
    },
    register: {
      title: 'खाता बनाएँ',
      submit: 'खाता बनाएँ',
    },
  },
  dashboard: {
    user: {
      orders: 'मेरे ऑर्डर',
    },
    admin: {
      title: 'एडमिन कंसोल',
    },
  },
  home: {
    hero: {
      downloadPickerHintAndroid: 'Google Play पर उपलब्ध',
      downloadPickerHintIOS: 'App Store पर उपलब्थ',
      downloadPickerHintDefault: 'अपनी प्लेटफ़ॉर्म चुनें',
      extensionRegionModal: {
        kicker: 'Skoleom एक्सटेंशन',
        title: 'एक्सटेंशन अनुपलब्ध',
        body: 'यह एक्सटेंशन अभी आपके क्षेत्र में उपलब्ध नहीं है।',
        close: 'बंद करें',
      },
      title: 'Skoleom Group का वैश्विक इकोसिस्टम खोजें',
      description: {
        intro: 'Skoleom Group ',
        economy: 'डिजिटल अर्थव्यवस्था',
        mid: ' में क्रांति ला रहा है, ऑडियोविज़ुअल सामग्री के केंद्र में त्वरित खरीदारी सक्षम करके। ',
        ott: '2 000 OTT प्लेटफ़ॉर्म',
        join: ' और ',
        web: 'अरबों वेबसाइटों',
        outro: ' से जुड़ा, हमारी तकनीक हर स्क्रीन को इंटरैक्टिव बिक्री बिंदु बनाती है।',
      },
      download: 'डाउनलोड',
      application: 'ऐप',
      extension: 'एक्सटेंशन',
      watchVideo: 'वीडियो देखें',
      ottMarqueeLabel: 'स्ट्रीमिंग और OTT प्लेटफ़ॉर्म',
      logoWtbAlt: 'Watch. Touch. Buy.',
      videoAria: 'Skoleom वीडियो',
      studioAria: 'Skoleom Studio',
      tagline1: 'हर वीडियो एक सच्चा इमर्सिव स्टोर बन जाता है:',
      tagline2:
        'एक सहज, सुरुचिपूर्ण और इंटरैक्टिव अनुभव, जहाँ आप जो देखते हैं उसे तुरंत खरीदते हैं।',
    },
    skoletoonsHero: {
      kicker: 'शॉपेबल फ़ैशन, ब्यूटी और लाइफ़स्टाइल',
      title: "SkoleToon's",
      subtitle: 'एक ऑडियोविज़ुअल स्टोर जो हर फ़ैशन प्रेरणा को इंटरैक्टिव अनुभव में बदलता है।',
      body: 'एक प्रीमियम ब्रह्मांड जहाँ लुक, उत्पाद और पल सही समय पर उपलब्ध होते हैं।',
      discover: 'खोजें',
      videoTitle: "SkoleToon's वीडियो",
      modalTitle: 'स्टोर विकास में',
      modalBody: "SkoleToon's स्टोर अभी विकास में है। जल्द ही Skoleom इकोसिस्टम में उपलब्ध होगा।",
      modalClose: 'बंद करें',
    },
    actions: {
      discoverMagic: 'जादू खोजें',
    },
    welcome: {
      part1: 'रिटेल मीडिया और ट्रांसमीडिया के ',
      part2: 'भविष्य में ',
      part3: 'आपका स्वागत',
      part4: ' है — ',
      part5: '',
    },
    page: {
      heroClose: 'बंद करें',
      interactiveKicker: 'एक इंटरैक्टिव अनुभव',
      interactiveSubtitle:
        'सेट से स्क्रीन तक,\nSkoleom Studio आपकी रचनाओं को जीवंत करता है।\nइमर्शन जारी रहता है।',
      ecosystemKicker: 'एक ब्रह्मांड। कई संभावनाएँ।',
      ecosystemTitle: 'Skoleom\nइकोसिस्टम',
      ecosystemIntro:
        '2,000 से अधिक प्लेटफ़ॉर्म, अरबों स्क्रीन: Skoleom इकोसिस्टम रचनाकारों, ब्रांडों और दर्शकों को एक इमर्सिव अनुभव में जोड़ता है जहाँ हर कंटेंट दुकान बन जाता है।',
      ecosystemStats: {
        products: 'उत्पाद और सेवाएँ एक स्पर्श में शॉपेबल।',
        countries: 'इकोसिस्टम से जुड़े देश।',
        detection: 'जो आप देख रहे हैं उसे पहचानने और सक्रिय करने के लिए।',
        alwaysOpen: 'ऑडियोविज़ुअल स्टोर हमेशा खुले।',
      },
      partnersTitle: 'पार्टनर ब्रांड',
      boutiquesCta: 'हमारी',
      boutiquesTitle: 'ऑडियोविज़ुअल स्टोर खोजें',
      boutiquesSubtitle: 'एक इमर्सिव इकोसिस्टम। 50+ वेब ऐप। एक सीमा: आपकी कल्पना।',
      partnersSearchPlaceholder: 'ब्रांड खोजें (उदा: Netflix...)',
      partnersSearchAria: 'पार्टनर ब्रांड खोजें',
    },
    news: {
      badge: 'नया',
    },
    boutiques: {
      title: 'हमारे ऑडियोविज़ुअल स्टोर खोजें',
      searchPlaceholder: 'Skoleom साइट खोजें...',
    },
    sections: {
      welcome: 'रिटेल मीडिया और ट्रांसमीडिया के भविष्य में आपका स्वागत है',
      how: 'Skoleom कैसे काम करता है',
      moment: 'हर पल। बन जाता है। एक अवसर।',
      interactive: 'एक इंटरैक्टिव अनुभव',
      universe: 'एक ब्रह्मांड। कई संभावनाएँ।',
      ecosystem: 'Skoleom इकोसिस्टम',
      partners: 'पार्टनर ब्रांड',
    },
    descriptions: {
      detect:
        'जैसे ही आप देखते हैं, Skoleom स्क्रीन पर दिखाई देने वाली चीज़ को पहचानता है और उसे खरीद में बदल देता है — एक स्पर्श, बिना कंटेंट छोड़े।',
    },
    stats: {
      storePages: 'प्रति दुकान Audiovisual Store पेज।',
    },
  },
  public: {
    retailMediaPlatform: {
      kicker: 'Retail Media',
      titlePrefix: 'वह रिटेल मीडिया प्लेटफ़ॉर्म जो',
      titleHighlight: 'वीडियो को कॉमर्स बनाता है',
      description:
        'Skoleom शॉपेबल वीडियो, मापन और क्रॉस-प्लेटफ़ॉर्म वितरण को एक ही रिटेल मीडिया प्लेटफ़ॉर्म में जोड़ता है — उस कंटेंट के भीतर अपने दर्शकों तक पहुँचें जिसे वे पहले से देख रहे हैं।',
      ctaBusiness: 'बिज़नेस समाधान',
      ctaTechnology: 'हमारी तकनीक',
      pillars: {
        videoCommerce: {
          title: 'वीडियो कॉमर्स',
          description:
            'किसी भी वीडियो को शॉपेबल स्टोर में बदलें। स्क्रीन पर हर उत्पाद एक टैप में खरीदने योग्य, बिना रीडायरेक्ट।',
        },
        unifiedMeasurement: {
          title: 'एकीकृत मापन',
          description:
            'सभी प्लेटफ़ॉर्म पर हर इम्प्रेशन, क्लिक और कन्वर्ज़न को रियल-टाइम में ट्रैक करें — एक डैशबोर्ड, पूर्ण एट्रिब्यूशन।',
        },
        crossPlatform: {
          title: 'क्रॉस-प्लेटफ़ॉर्म पहुँच',
          description:
            '2,000+ OTT प्लेटफ़ॉर्म, सोशल और ओपन वेब पर एक ही इंटीग्रेशन से कैम्पेन वितरित करें।',
        },
      },
    },
    interactiveVideoCommerce: {
      kicker: 'इंटरैक्टिव वीडियो कॉमर्स',
      titlePrefix: 'हर वीडियो को बनाएँ',
      titleHighlight: 'तुरंत खरीदने योग्य',
      description:
        'Skoleom आपके वीडियो में इंटरैक्टिव खरीद-बिंदु सीधे जोड़ता है। दर्शक जो देखते हैं वही खरीदते हैं — तुरंत, कंटेंट छोड़े बिना।',
      ctaTalk: 'विशेषज्ञ से बात करें',
      ctaOverview: 'अवलोकन देखें',
      benefits: {
        conversion: 'अधिक कन्वर्ज़न — खरीद इच्छा के क्षण में होती है।',
        reporting: 'रियल-टाइम रिपोर्टिंग — हर इंटरैक्शन मापा और एट्रिब्यूट किया गया।',
        friction: 'शून्य घर्षण — कोई रीडायरेक्ट नहीं, कोई ऐप स्विच नहीं, कोई कार्ट छोड़ना नहीं।',
      },
    },
    hub: {
      groupCarousel: {
        kicker: 'सभी इकाइयाँ',
        title: 'समूह',
        subtitle: 'Skoleom समूह की सहायक कंपनियाँ और प्रभाग।',
        searchPlaceholder: 'खोजें (जैसे studio, invest, lab...)',
        ariaLabel: 'समूह इकाइयों का कैरोसेल',
      },
    },
    skoleomTouch: {
      introSubtitle: 'वीडियो में छिपे उत्पादों को ढूंढें और एक विशेष पुरस्कार अनलॉक करें।',
      startCta: 'अनुभव शुरू करें',
      productsToFind: 'खोजने के लिए उत्पाद',
      exclusiveReward: 'विशेष पुरस्कार',
      gameModalTitle: 'अनुभव विकास में',
      gameModalBody: 'इंटरैक्टिव Skoleom Touch अनुभव अभी विकास में है। जल्द ही उपलब्ध होगा।',
      gameModalClose: 'बंद करें',
    },
    stores: {
      hero: {
        titleLine1: 'हमारी',
        titleLine2: 'ऑडियोविज़ुअल स्टोर खोजें',
        subtitle: 'एक इमर्सिव इकोसिस्टम। 50+ वेब ऐप। एक सीमा: आपकी कल्पना।',
      },
      search: {
        placeholder: 'स्टोर या ब्रांड खोजें',
        aria: 'स्टोर या ब्रांड खोजें',
      },
      sections: {
        official: 'आधिकारिक स्टोर',
        brands: 'उपलब्ध ब्रांड',
      },
      showcase: {
        kicker: 'फ़ीचर्ड स्टोर',
        title: 'प्रमुख यूनिवर्स',
        subtitle: 'स्पोर्ट, OTT, संगीत और गेमिंग — प्रतिष्ठित ऑडियोविज़ुअल स्टोर।',
      },
      carousel: {
        kicker: 'सभी स्टोर',
        title: 'ऑडियोविज़ुअल स्टोर',
        subtitle: 'Skoleom इकोसिस्टम में सभी स्टोर खोजें।',
        searchPlaceholder: 'स्टोर खोजें (जैसे: sport, music, games...)',
        ariaLabel: 'ऑडियोविज़ुअल स्टोर कैरोसेल',
      },
    },
    howItWorks: {
      hero: {
        kicker: 'यह कैसे काम करता है',
        subtitle: 'वीडियो के अंदर। उसी पल। बिना रुकावट।',
      },
      steps: {
        '01': {
          title: 'AI पहचान',
          desc: 'हमारी AI किसी भी कंटेंट में उत्पाद, वस्तुएँ और पल पहचानती है।',
        },
        '02': {
          title: 'स्मार्ट कैप्सूल',
          desc: 'इंटरैक्टिव कैप्सूल रियल टाइम में, बिना रुकावट।',
        },
        '03': {
          title: 'एक टैप',
          desc: 'एक क्लिक। कोई रीडायरेक्ट नहीं। कोई घर्षण नहीं। तुरंत कार्रवाई।',
        },
        '04': {
          title: 'संदर्भ में खरीद',
          desc: 'पसंदीदा कंटेंट छोड़े बिना खरीद पूरी करें।',
        },
      },
      demo: {
        titlePrefix: 'खोजें',
        titleHighlight: 'जादू',
        cta: 'इंटरैक्टिव डेमो शुरू करें',
      },
      showcase: {
        kicker: 'उपभोक्ता यूनिवर्स',
        title: 'फ़ीचर्ड स्टोर',
        subtitle: 'सभी के लिए इंटरैक्टिव अनुभव, आपके पसंदीदा कंटेंट में एकीकृत।',
      },
      carousel: {
        kicker: 'सभी स्टोर',
        title: 'सभी के लिए',
        subtitle: 'Skoleom इकोसिस्टम के सभी उपभोक्ता स्टोर।',
        searchPlaceholder: 'खोजें (जैसे: page, shop, magazine...)',
        ariaLabel: 'सभी के लिए स्टोर कैरोसेल',
      },
    },
    technology: {
      hero: {
        kicker: 'SeSync · तकनीक',
        titlePrefix: 'से अधिक से जुड़ा',
        titleMiddle: 'और',
      },
      features: {
        seamless: 'वीडियो में सीधे सहज खरीदारी अनुभव',
        compatible: 'आपके पसंदीदा ब्रांड और क्रिएटर के साथ संगत',
        secure: 'सुरक्षित और GDPR अनुपालन',
      },
      download: 'एक्सटेंशन डाउनलोड करें',
      studio: {
        titleLine1: 'मुद्रीकरण उपकरण',
        titleLine2Prefix: 'दुनिया का सबसे',
        titleLine2Highlight: 'शक्तिशाली',
        description:
          'इंटरैक्टिव वीडियो कंटेंट प्रबंधन, मुद्रीकरण और विश्लेषण के लिए ERP/DCM SaaS। 300+ APIs से जुड़ा। पूर्ण नियंत्रण।',
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
