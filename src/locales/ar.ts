import type { LocaleResource } from './types';
import { getA11yFallback } from './a11yFallback';
const resource = {
  common: {
    loading: 'جارٍ التحميل...',
    actions: {
      close: 'إغلاق القائمة',
      search: 'بحث',
      backHome: 'العودة إلى الرئيسية',
      login: 'تسجيل الدخول',
      register: 'إنشاء حساب',
      explore: 'استكشاف',
    },
    states: {
      noResults: 'لا توجد نتائج',
      noResultsFor: 'لا توجد نتائج لـ “{{query}}”.',
    },
  },
  app: {
    skipToContent: 'انتقل إلى المحتوى الرئيسي',
    loading: 'جارٍ التحميل...',
    notFound: {
      message: 'هذه الصفحة غير موجودة في عالم Skoleom.',
      cta: 'العودة إلى الرئيسية',
    },
  },
  a11y: getA11yFallback('ar'),
  header: {
    brandHome: 'الرئيسية',
    universe: 'Universe',
    navLabel: 'التنقل الرئيسي',
    searchPlaceholder: 'بحث',
    searchAria: 'بحث',
    profile: {
      profile: 'ملفي الشخصي',
      logout: 'تسجيل الخروج',
    },
    language: {
      change: 'تغيير اللغة',
    },
    actions: {
      settings: 'الإعدادات',
      favorites: 'المفضلة',
      cart: 'السلة',
      account: 'حساب المستخدم',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
    },
    account: {
      dashboard: 'لوحة التحكم',
      orders: 'طلباتي',
      favorites: 'المفضلة',
      admin: 'لوحة الإدارة',
      adminBadge: 'Admin',
      logout: 'تسجيل الخروج',
    },
    nav: {
      home: 'الرئيسية',
      stores: 'متاجر سمعية بصرية',
      everyone: 'للجميع',
      pros: 'للمحترفين',
      news: 'الأخبار',
      events: 'الفعاليات',
      group: 'المجموعة',
      support: 'الدعم',
    },
  },
  cart: {
    title: 'سلتي',
    itemCount: '{{count}} عنصر',
    empty: {
      title: 'سلتك فارغة',
      subtitle: 'اكتشف محتوانا القابل للتسوق',
    },
    summary: {
      subtotal: 'المجموع الفرعي',
      shipping: 'الشحن',
      free: 'مجاني',
      total: 'الإجمالي',
    },
    checkout: {
      cta: 'ادفع باستخدام Skoleom Pay',
      security: 'دفع سيادي وآمن · متوافق مع GDPR',
    },
    aria: {
      decrease: 'تقليل الكمية',
      increase: 'زيادة الكمية',
      remove: 'إزالة هذا العنصر',
      close: 'إغلاق السلة',
    },
  },
  skoleomPage: {
    nav: {
      ariaLabel: 'تنقل Skoleom Page',
      home: 'الرئيسية',
      essayage: 'تجربة افتراضية',
      homeMobile: 'الرئيسية',
      trends: 'الاتجاهات',
      trendsMobile: 'الاتجاهات',
      create: 'أنشئ SeContent',
      createMobile: 'إنشاء',
      profile: 'الملف الشخصي',
      profileMobile: 'الملف',
      modalTitle: 'الخدمة غير متاحة',
      modalBody: 'هذه الخدمة غير متاحة في منطقتك.',
      modalClose: 'إغلاق',
    },
    explorer: {
      poweredBy: 'مدعوم من SeSync',
      heroBefore: 'شاهد. المس. ',
      heroHighlight: 'اكتشف.',
      heroSubtitle:
        'بحث واحد، نظام Skoleom Universe بالكامل — فيديو، موسيقى، إعلام، تسوق. كل نتيجة بوابة غامرة.',
      logoAlt: 'Skoleom Page',
      searchPlaceholder: 'ابحث عن فنان، فيلم، علامة…',
      searchAria: 'مصطلح البحث',
      searchSubmit: 'بدء البحث',
      searchReset: 'إعادة تعيين البحث',
      exploreCta: 'استكشف',
      resultsFor: 'نتائج لـ',
      resultsOnPlatforms_one: 'على {{count}} منصة',
      resultsOnPlatforms_other: 'على {{count}} منصات',
      filter: 'تصفية',
      platforms: 'المنصات',
      filterPlatformsAria: 'تصفية المنصات',
      selectAll: 'الكل',
      selectNone: 'لا شيء',
      loading: 'الاتصال بعالم Skoleom…',
      noResults: 'لا توجد نتائج تطابق عوامل التصفية الحالية. اختر المزيد من المنصات.',
    },
    actionCards: {
      sectionBefore: 'اكتشف ',
      sectionHighlight: 'عالم Skoleom',
      mobile: {
        title: 'الجوال',
        description: 'متوفر على iOS وAndroid.',
      },
      tv: {
        title: 'تلفزيون',
        description: 'شاهد على تلفزيونك المتصل.',
      },
      rewards: {
        title: 'مكافآت',
        description: 'استرداد نقدي على مشترياتك المميزة.',
      },
      extension: {
        title: 'امتداد',
        description: 'الوصول إلى جميع الميزات.',
      },
      audio: {
        title: 'صوت',
        description: 'استمع على جميع أجهزتك.',
      },
      gaming: {
        title: 'ألعاب',
        description: 'اكتشف تطبيقات الألعاب لدينا.',
      },
    },
  },
  footer: {
    shopPrompt: {
      prefix: 'يمكنك أيضًا التسوق في',
      link: 'متجر Skoleom الإلكتروني',
    },
    copyright: 'جميع الحقوق محفوظة.',
    modal: {
      close: 'إغلاق القائمة',
      title: 'الخدمة غير متاحة',
      body: 'هذه الخدمة غير متاحة في منطقتك.',
    },
    columns: {
      about: 'About Skoleom',
      stores: 'متاجر سمعية بصرية',
      everyone: 'للجميع',
      pros: 'للمحترفين',
      group: 'المجموعة',
      '1': 'About Skoleom',
      '2': 'متاجر سمعية بصرية',
      '3': 'For everyone',
      '4': 'للمحترفين',
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
      title: 'تسجيل الدخول',
      submit: 'تسجيل الدخول',
    },
    register: {
      title: 'إنشاء حساب',
      submit: 'إنشاء حساب',
    },
  },
  dashboard: {
    user: {
      orders: 'طلباتي',
    },
    admin: {
      title: 'لوحة الإدارة',
    },
  },
  home: {
    hero: {
      downloadPickerHintAndroid: 'متاح على Google Play',
      downloadPickerHintIOS: 'متاح على التطبيق Store',
      downloadPickerHintDefault: 'اختر بلدك',
      extensionRegionModal: {
        kicker: 'إضافة سكوليوم',
        title: 'الإضافة غير متاحة',
        body: 'هذه الإضافة ليست متاحة بعد في منطقتك.',
        close: 'إغلاق',
      },
      title: 'اكتشف النظام البيئي العالمي لـ Skoleom Group',
      description: {
        intro: 'تُحدث Skoleom Group ثورة في ',
        economy: 'الاقتصاد الرقمي',
        mid: ' من خلال تمكين الشراء الفوري في قلب المحتوى السمعي البصري. متصلة بأكثر من ',
        ott: '2 000 منصة OTT',
        join: ' و',
        web: 'مليارات المواقع',
        outro: '، تحوّل تقنيتنا كل شاشة إلى نقطة بيع تفاعلية.',
      },
      download: 'تنزيل',
      application: 'التطبيق',
      extension: 'الإضافة',
      watchVideo: 'مشاهدة الفيديو',
      ottMarqueeLabel: 'منصات البث وOTT',
      logoWtbAlt: 'Watch. Touch. Buy.',
      videoAria: 'فيديو Skoleom',
      studioAria: 'Skoleom Studio',
      tagline1: 'كل فيديو يصبح متجرًا غامرًا حقيقيًا:',
      tagline2: 'تجربة سلسة وأنيقة وتفاعلية، تكتشف فيها وتلمس وتشتري فورًا ما تراه.',
    },
    skoletoonsHero: {
      kicker: 'أزياء وجمال ونمط حياة قابل للتسوق',
      title: "SkoleToon's",
      subtitle: 'متجر سمعي بصري يحوّل كل إلهام أزياء إلى تجربة تفاعلية.',
      body: 'اكتشف عالمًا مميزًا حيث تتوفر الإطلالات والمنتجات واللحظات في الوقت المناسب.',
      discover: 'اكتشف',
      videoTitle: "فيديو SkoleToon's",
      modalTitle: 'المتجر قيد التطوير',
      modalBody: "متجر SkoleToon's قيد التطوير. سيكون متاحًا قريبًا في نظام Skoleom البيئي.",
      modalClose: 'إغلاق',
    },
    actions: {
      discoverMagic: 'اكتشف السحر',
    },
    welcome: {
      part1: 'مرحبًا بكم في ',
      part2: 'مستقبل ',
      part3: 'الوسائط التجارية',
      part4: 'و',
      part5: 'الترانس ميديا',
    },
    page: {
      heroClose: 'إغلاق',
      interactiveKicker: 'تجربة تفاعلية',
      interactiveSubtitle: 'من المنصة إلى الشاشة،\nيُحيي Skoleom Studio إبداعاتك.\nالانغماس مستمر.',
      ecosystemKicker: 'كون واحد. إمكانيات متعددة.',
      ecosystemTitle: 'نظام\nSkoleom البيئي',
      ecosystemIntro:
        'أكثر من 2000 منصة ومليارات الشاشات: يربط نظام Skoleom البيئي المبدعين والعلامات والجماهير في تجربة غامرة حيث يصبح كل محتوى متجرًا.',
      ecosystemStats: {
        products: 'منتجات وخدمات قابلة للتسوق بلمسة واحدة.',
        countries: 'دول متصلة بالنظام البيئي.',
        detection: 'للكشف عن ما تشاهده وتفعيله.',
        alwaysOpen: 'متاجر سمعية بصرية مفتوحة دائمًا.',
      },
      partnersTitle: 'العلامات الشريكة',
      boutiquesCta: 'اكتشف',
      boutiquesTitle: 'متاجرنا السمعية البصرية',
      boutiquesSubtitle: 'نظام بيئي غامر. أكثر من 50 تطبيق ويب. حد واحد: خيالك.',
      partnersSearchPlaceholder: 'ابحث عن علامة (مثال: Netflix...)',
      partnersSearchAria: 'البحث عن علامة شريكة',
    },
    news: {
      badge: 'جديد',
    },
    boutiques: {
      title: 'اكتشف متاجرنا السمعية البصرية',
      searchPlaceholder: 'ابحث عن موقع Skoleom...',
    },
    sections: {
      welcome: 'مرحبًا بكم في مستقبل الوسائط التجارية والترانس ميديا',
      how: 'كيف يعمل Skoleom',
      moment: 'كل لحظة. تصبح. فرصة.',
      interactive: 'تجربة تفاعلية',
      universe: 'كون واحد. إمكانيات متعددة.',
      ecosystem: 'نظام Skoleom البيئي',
      partners: 'العلامات الشريكة',
    },
    descriptions: {
      detect:
        'بمجرد أن تشاهد، يتعرّف Skoleom على ما يظهر على الشاشة ويحوّله إلى شراء — بلمسة واحدة، دون مغادرة المحتوى.',
    },
    stats: {
      storePages: 'صفحة Audiovisual Store لكل متجر.',
    },
  },
  public: {
    retailMediaPlatform: {
      kicker: 'Retail Media',
      titlePrefix: 'منصة الـRetail Media التي تحوّل',
      titleHighlight: 'الفيديو إلى تجارة',
      description:
        'تجمع Skoleom الفيديو القابل للشراء والقياس والتوزيع عبر المنصات في منصة retail media واحدة — اصل إلى جمهورك داخل المحتوى الذي يشاهده بالفعل.',
      ctaBusiness: 'حلول الأعمال',
      ctaTechnology: 'تقنيتنا',
      pillars: {
        videoCommerce: {
          title: 'تجارة الفيديو',
          description:
            'حوّل أي فيديو إلى متجر قابل للشراء. كل منتج على الشاشة يصبح قابلاً للشراء بنقرة واحدة، دون إعادة توجيه.',
        },
        unifiedMeasurement: {
          title: 'قياس موحّد',
          description:
            'تتبّع كل ظهور ونقرة وتحويل عبر المنصات في الوقت الفعلي — لوحة واحدة وإسناد كامل.',
        },
        crossPlatform: {
          title: 'وصول عبر المنصات',
          description:
            'وزّع حملاتك عبر أكثر من 2000 منصة OTT ووسائل التواصل والويب المفتوح من تكامل واحد.',
        },
      },
    },
    interactiveVideoCommerce: {
      kicker: 'تجارة الفيديو التفاعلية',
      titlePrefix: 'اجعل كل فيديو',
      titleHighlight: 'قابلاً للشراء فوراً',
      description:
        'تدمج Skoleom نقاط شراء تفاعلية مباشرة داخل فيديوهاتك. يشتري المشاهدون ما يرونه — فوراً، دون مغادرة المحتوى.',
      ctaTalk: 'تحدّث إلى خبير',
      ctaOverview: 'عرض النظرة العامة',
      benefits: {
        conversion: 'تحويل أعلى — الشراء يحدث في لحظة الرغبة.',
        reporting: 'تقارير فورية — كل تفاعل يُقاس ويُنسب.',
        friction: 'بلا احتكاك — دون إعادة توجيه، دون تبديل تطبيقات، دون التخلي عن السلة.',
      },
    },
    hub: {
      groupCarousel: {
        kicker: 'كل الكيانات',
        title: 'المجموعة',
        subtitle: 'الشركات التابعة وأقطاب مجموعة Skoleom.',
        searchPlaceholder: 'بحث (مثل: studio، invest، lab...)',
        ariaLabel: 'دوّارة كيانات المجموعة',
      },
    },
    skoleomTouch: {
      introSubtitle: 'اكتشف المنتجات المخفية في الفيديو واحصل على مكافأة حصرية.',
      startCta: 'ابدأ التجربة',
      productsToFind: 'المنتجات للبحث عنها',
      exclusiveReward: 'مكافأة حصرية',
      gameModalTitle: 'التجربة قيد التطوير',
      gameModalBody: 'تجربة Skoleom Touch التفاعلية لا تزال قيد التطوير. ستكون متاحة قريبًا.',
      gameModalClose: 'إغلاق',
    },
    stores: {
      hero: {
        titleLine1: 'اكتشف',
        titleLine2: 'متاجرنا السمعية البصرية',
        subtitle: 'نظام بيئي غامر. أكثر من 50 تطبيق ويب. حد واحد فقط: خيالك.',
      },
      search: {
        placeholder: 'ابحث عن متجر أو علامة',
        aria: 'ابحث عن متجر أو علامة',
      },
      sections: {
        official: 'متاجر رسمية',
        brands: 'علامات متاحة',
      },
      showcase: {
        kicker: 'متاجر مميزة',
        title: 'عوالم رائدة',
        subtitle: 'رياضة وOTT وموسيقى وألعاب — نظرة على متاجر سمعية بصرية أيقونية.',
      },
      carousel: {
        kicker: 'كل المتاجر',
        title: 'متاجر سمعية بصرية',
        subtitle: 'اكتشف جميع المتاجر في نظام Skoleom البيئي.',
        searchPlaceholder: 'ابحث عن متجر (مثال: sport, music, games...)',
        ariaLabel: 'دائرة متاجر سمعية بصرية',
      },
    },
    howItWorks: {
      hero: {
        kicker: 'كيف يعمل',
        subtitle: 'داخل الفيديو. في نفس اللحظة. بلا احتكاك.',
      },
      steps: {
        '01': {
          title: 'تعرّف بالذكاء الاصطناعي',
          desc: 'ذكاؤنا الاصطناعي يحدد المنتجات والأشياء واللحظات في أي محتوى.',
        },
        '02': {
          title: 'كبسولات ذكية',
          desc: 'تظهر كبسولات تفاعلية في الوقت الفعلي دون انقطاع.',
        },
        '03': {
          title: 'نقرة واحدة',
          desc: 'نقرة واحدة. بلا إعادة توجيه. بلا احتكاك. إجراء فوري.',
        },
        '04': {
          title: 'شراء في السياق',
          desc: 'أكمل الشراء دون مغادرة المحتوى الذي تحب.',
        },
      },
      demo: {
        titlePrefix: 'اكتشف',
        titleHighlight: 'السحر',
        cta: 'تشغيل العرض التفاعلي',
      },
      showcase: {
        kicker: 'عالم المستهلك',
        title: 'متاجر مميزة',
        subtitle: 'تجارب تفاعلية للجميع، مدمجة في محتواك المفضل.',
      },
      carousel: {
        kicker: 'كل المتاجر',
        title: 'للجميع',
        subtitle: 'كل متاجر المستهلك في نظام Skoleom.',
        searchPlaceholder: 'بحث (مثال: page, shop, magazine...)',
        ariaLabel: 'دائرة متاجر للجميع',
      },
    },
    technology: {
      hero: {
        kicker: 'SeSync · التقنية',
        titlePrefix: 'متصل بأكثر من',
        titleMiddle: 'و',
      },
      features: {
        seamless: 'تجربة شراء سلسة مباشرة داخل الفيديوهات',
        compatible: 'متوافق مع علاماتك ومبدعيك المفضلين',
        secure: 'سيادي وآمن ومتوافق مع RGPD',
      },
      download: 'تنزيل الإضافة',
      studio: {
        titleLine1: 'أداة تحقيق الدخل',
        titleLine2Prefix: 'الأكثر',
        titleLine2Highlight: 'قوة in العالم',
        description:
          'ERP/DCM SaaS لإدارة وتحقيق الدخل وتحليل محتوى الفيديو التفاعلي. متصل بأكثر من 300 API. تحكم كامل: مبيعات وجماهير وحملات وإعادة استهداف وأداء المنتج.',
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
