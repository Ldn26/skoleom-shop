import type { LocaleResource } from './types';
import { getA11yFallback } from './a11yFallback';
const resource = {
  common: {
    loading: 'Загрузка...',
    actions: {
      close: 'Закрыть меню',
      search: 'Поиск',
      backHome: 'Вернуться на главную',
      login: 'Войти',
      register: 'Создать аккаунт',
      explore: 'Исследовать',
    },
    states: {
      noResults: 'Нет результатов',
      noResultsFor: 'Нет результатов для “{{query}}”.',
    },
  },
  app: {
    skipToContent: 'Перейти к основному содержимому',
    loading: 'Загрузка...',
    notFound: {
      message: 'Эта страница не существует во вселенной Skoleom.',
      cta: 'Вернуться на главную',
    },
  },
  a11y: getA11yFallback('ru'),
  header: {
    brandHome: 'Главная',
    universe: 'Universe',
    profile : {
      profile: 'Мой профиль',
      logout: 'Выйти',
    },
    navLabel: 'Основная навигация',
    searchPlaceholder: 'Поиск',
    searchAria: 'Поиск',
    language: {
      change: 'Сменить язык',
    },
    actions: {
      settings: 'Настройки',
      favorites: 'Избранное',
      cart: 'Корзина',
      account: 'Аккаунт пользователя',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
    },
    account: {
      dashboard: 'Моя панель',
      orders: 'Мои заказы',
      favorites: 'Избранное',
      admin: 'Панель администратора',
      adminBadge: 'Admin',
      logout: 'Выйти',
    },
    nav: {
      home: 'Главная',
      essayage: 'Виртуальная примерка',
      stores: 'Официальные аудиовизуальные магазины',
      everyone: 'Для всех',
      pros: 'Для профессионалов',
      news: 'Новости',
      events: 'События',
      group: 'Группа',
      support: 'Поддержка',
    },
  },
  cart: {
    title: 'Моя корзина',
    itemCount: '{{count}} товар(ов)',
    empty: {
      title: 'Ваша корзина пуста',
      subtitle: 'Откройте для себя наш покупаемый контент',
    },
    summary: {
      subtotal: 'Промежуточный итог',
      shipping: 'Доставка',
      free: 'Бесплатно',
      total: 'Итого',
    },
    checkout: {
      cta: 'Оплатить через Skoleom Pay',
      security: 'Суверенный и безопасный платеж · соответствует GDPR',
    },
    aria: {
      decrease: 'Уменьшить количество',
      increase: 'Увеличить количество',
      remove: 'Удалить этот товар',
      close: 'Закрыть корзину',
    },
  },
  skoleomPage: {
    nav: {
      ariaLabel: 'Навигация Skoleom Page',
      home: 'Главная',
      homeMobile: 'Главная',
      trends: 'Тренды',
      trendsMobile: 'Тренды',
      create: 'Создайте SeContent',
      createMobile: 'Создать',
      profile: 'Профиль',
      profileMobile: 'Профиль',
      modalTitle: 'Сервис недоступен',
      modalBody: 'Этот сервис недоступен в вашем регионе.',
      modalClose: 'Закрыть',
    },
    explorer: {
      poweredBy: 'На базе SeSync',
      heroBefore: 'Смотрите. Коснитесь. ',
      heroHighlight: 'Открывайте.',
      heroSubtitle:
        'Один поиск — вся экосистема Skoleom Universe: видео, музыка, медиа, покупки. Каждый результат — иммерсивный вход.',
      logoAlt: 'Skoleom Page',
      searchPlaceholder: 'Поиск артиста, фильма, бренда…',
      searchAria: 'Поисковый запрос',
      searchSubmit: 'Начать поиск',
      searchReset: 'Сбросить поиск',
      exploreCta: 'Исследовать',
      resultsFor: 'Результаты для',
      resultsOnPlatforms_one: 'на {{count}} платформе',
      resultsOnPlatforms_other: 'на {{count}} платформах',
      filter: 'Фильтр',
      platforms: 'Платформы',
      filterPlatformsAria: 'Фильтровать платформы',
      selectAll: 'Все',
      selectNone: 'Ничего',
      loading: 'Подключение к вселенной Skoleom…',
      noResults: 'Нет результатов по текущим фильтрам. Выберите больше платформ.',
    },
    actionCards: {
      sectionBefore: 'Откройте ',
      sectionHighlight: 'вселенную Skoleom',
      mobile: {
        title: 'Мобильный',
        description: 'Доступно на iOS и Android.',
      },
      tv: {
        title: 'ТВ',
        description: 'Смотрите на подключённом ТВ.',
      },
      rewards: {
        title: 'Награды',
        description: 'Кэшбэк на премиум-покупки.',
      },
      extension: {
        title: 'Расширение',
        description: 'Доступ ко всем функциям.',
      },
      audio: {
        title: 'Aудио',
        description: 'Слушайте на всех устройствах.',
      },
      gaming: {
        title: 'Игры',
        description: 'Откройте наши игровые приложения.',
      },
    },
  },
  footer: {
    shopPrompt: {
      prefix: 'Вы также можете делать покупки в',
      link: 'интернет-магазине Skoleom',
    },
    copyright: 'Все права защищены.',
    modal: {
      close: 'Закрыть меню',
      title: 'Сервис недоступен',
      body: 'Этот сервис недоступен в вашем регионе.',
    },
    columns: {
      about: 'About Skoleom',
      stores: 'Официальные аудиовизуальные магазины',
      everyone: 'Для всех',
      pros: 'Для профессионалов',
      group: 'Группа',
      '1': 'About Skoleom',
      '2': 'Аудиовизуальные магазины',
      '3': 'For everyone',
      '4': 'Для профессионалов',
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
      title: 'Войти',
      submit: 'Войти',
    },
    register: {
      title: 'Создать аккаунт',
      submit: 'Создать аккаунт',
    },
  },
  dashboard: {
    user: {
      orders: 'Мои заказы',
    },
    admin: {
      title: 'Панель администратора',
    },
  },
  home: {
    hero: {
      downloadPickerHintAndroid: 'Доступно в Google Play',
      downloadPickerHintIOS: 'Доступно в App Store',
      downloadPickerHintDefault: 'Выберите вашу платформу',
      extensionRegionModal: {
        kicker: 'Расширение Skoleom',
        title: 'Расширение недоступно',
        body: 'Это расширение недоступно в вашем регионе.',
        close: 'Закрыть',
      },
      title: 'Откройте глобальную экосистему Skoleom Group',
      description: {
        intro: 'Skoleom Group революционизирует ',
        economy: 'цифровую экономику',
        mid: ', позволяя мгновенные покупки внутри аудиовизуального контента. Подключена к более чем ',
        ott: '2 000 OTT-платформам',
        join: ' и ',
        web: 'миллиардам сайтов',
        outro: ' — наша технология превращает каждый экран в интерактивную точку продаж.',
      },
      download: 'Скачать',
      application: 'приложение',
      extension: 'расширение',
      watchVideo: 'Смотреть видео',
      ottMarqueeLabel: 'Стриминговые и OTT-платформы',
      logoWtbAlt: 'Watch. Touch. Buy.',
      videoAria: 'Видео Skoleom',
      studioAria: 'Skoleom Studio',
      tagline1: 'КАЖДОЕ ВИДЕО СТАНОВИТСЯ НАСТОЯЩИМ ИММЕРСИВНЫМ МАГАЗИНОМ:',
      tagline2:
        'ПЛАВНЫЙ, ЭЛЕГАНТНЫЙ И ИНТЕРАКТИВНЫЙ ОПЫТ, ГДЕ ВЫ МГНОВЕННО ОТКРЫВАЕТЕ, КАСАЕТЕСЬ И ПОКУПАЕТЕ УВИДЕННОЕ.',
    },
    skoletoonsHero: {
      kicker: 'Shoppable мода, красота и lifestyle',
      title: "SkoleToon's",
      subtitle:
        'Аудиовизуальный магазин, превращающий каждое модное вдохновение в интерактивный опыт.',
      body: 'Премиальная вселенная, где образы, продукты и моменты доступны в нужный миг.',
      discover: 'Открыть',
      videoTitle: "Видео SkoleToon's",
      modalTitle: 'Магазин в разработке',
      modalBody: "Магазин SkoleToon's ещё в разработке. Скоро будет доступен в экосистеме Skoleom.",
      modalClose: 'Закрыть',
    },
    actions: {
      discoverMagic: 'Откройте магию',
    },
    welcome: {
      part1: 'Добро пожаловать в ',
      part2: 'будущее ',
      part3: 'retail media',
      part4: 'и ',
      part5: 'трансмедиа',
    },
    page: {
      heroClose: 'Закрыть',
      interactiveKicker: 'Интерактивный опыт',
      interactiveSubtitle:
        'От площадки до экрана\nSkoleom Studio оживляет ваши творения.\nПогружение не прерывается.',
      ecosystemKicker: 'Одна вселенная. Множество возможностей.',
      ecosystemTitle: 'Экосистема\nSkoleom',
      ecosystemIntro:
        'Более 2 000 платформ, миллиарды экранов: экосистема Skoleom связывает создателей, бренды и аудитории в иммерсивном опыте, где каждый контент становится магазином.',
      ecosystemStats: {
        products: 'товаров и услуг доступны для покупки одним касанием.',
        countries: 'Стран подключено к экосистеме.',
        detection: 'Чтобы распознавать и активировать просмотр.',
        alwaysOpen: 'Аудиовизуальные магазины всегда открыты.',
      },
      partnersTitle: 'Партнёрские бренды',
      boutiquesCta: 'Откройте наши',
      boutiquesTitle: 'Аудиовизуальные магазины',
      boutiquesSubtitle:
        'Иммерсивная экосистема. Более 50 веб-приложений. Один предел: ваше воображение.',
      partnersSearchPlaceholder: 'Поиск бренда (напр. Netflix...)',
      partnersSearchAria: 'Поиск партнёрского бренда',
    },
    news: {
      badge: 'Новинки',
    },
    boutiques: {
      title: 'Откройте наши аудиовизуальные магазины',
      searchPlaceholder: 'Поиск сайта Skoleom...',
    },
    sections: {
      welcome: 'Добро пожаловать в будущее retail media и трансмедиа',
      how: 'Как работает Skoleom',
      moment: 'Каждый момент. Становится. Возможностью.',
      interactive: 'Интерактивный опыт',
      universe: 'Одна вселенная. Множество возможностей.',
      ecosystem: 'Экосистема Skoleom',
      partners: 'Партнёрские бренды',
    },
    descriptions: {
      detect:
        'Как только вы смотрите, Skoleom распознаёт то, что появляется на экране, и превращает это в покупку — одно касание, без выхода из контента.',
    },
    stats: {
      storePages: 'страниц Audiovisual Store на магазин.',
    },
  },
  public: {
    retailMediaPlatform: {
      kicker: 'Retail Media',
      titlePrefix: 'Платформа retail media, превращающая',
      titleHighlight: 'видео в коммерцию',
      description:
        'Skoleom объединяет покупаемое видео, аналитику и кросс-платформенную дистрибуцию в единой retail-media-платформе — обращайтесь к аудитории внутри контента, который она уже смотрит.',
      ctaBusiness: 'Бизнес-решения',
      ctaTechnology: 'Наша технология',
      pillars: {
        videoCommerce: {
          title: 'Видеокоммерция',
          description:
            'Превратите любое видео в покупаемую витрину. Каждый товар на экране доступен к покупке в один тап, без перенаправлений.',
        },
        unifiedMeasurement: {
          title: 'Единая аналитика',
          description:
            'Отслеживайте каждый показ, клик и конверсию на всех платформах в реальном времени — одна панель, полная атрибуция.',
        },
        crossPlatform: {
          title: 'Кросс-платформенный охват',
          description:
            'Запускайте кампании на 2000+ OTT-платформах, в соцсетях и открытом вебе из одной интеграции.',
        },
      },
    },
    interactiveVideoCommerce: {
      kicker: 'Интерактивная видеокоммерция',
      titlePrefix: 'Сделайте каждое видео',
      titleHighlight: 'мгновенно покупаемым',
      description:
        'Skoleom встраивает интерактивные точки покупки прямо в ваши видео. Зрители покупают то, что видят, — мгновенно, не покидая контент.',
      ctaTalk: 'Поговорить с экспертом',
      ctaOverview: 'Посмотреть обзор',
      benefits: {
        conversion: 'Выше конверсия — покупка в момент желания.',
        reporting:
          'Отчётность в реальном времени — каждое взаимодействие измерено и атрибутировано.',
        friction:
          'Ноль трений — без перенаправлений, без переключения приложений, без брошенных корзин.',
      },
    },
    hub: {
      groupCarousel: {
        kicker: 'Все подразделения',
        title: 'Группа',
        subtitle: 'Дочерние компании и подразделения группы Skoleom.',
        searchPlaceholder: 'Поиск (напр. studio, invest, lab...)',
        ariaLabel: 'Карусель подразделений Группы',
      },
    },
    skoleomTouch: {
      introSubtitle: 'Найдите скрытые продукты в видео и получите эксклюзивную награду.',
      startCta: 'Начать опыт',
      productsToFind: 'Продукты для поиска',
      exclusiveReward: 'Эксклюзивная награда',
      gameModalTitle: 'Функция в разработке',
      gameModalBody:
        'Интерактивный опыт Skoleom Touch все еще находится в разработке. Скоро он будет доступен.',
      gameModalClose: 'Закрыть',
    },
    stores: {
      hero: {
        titleLine1: 'Откройте наши',
        titleLine2: 'Аудиовизуальные магазины',
        subtitle: 'Иммерсивная экосистема. Более 50 веб-приложений. Один предел: ваше воображение.',
      },
      search: {
        placeholder: 'Поиск магазина или бренда',
        aria: 'Поиск магазина или бренда',
      },
      sections: {
        official: 'Официальные магазины',
        brands: 'Доступные бренды',
      },
      showcase: {
        kicker: 'Избранные магазины',
        title: 'Флагманские вселенные',
        subtitle: 'Спорт, OTT, музыка и гейминг — культовые аудиовизуальные магазины.',
      },
      carousel: {
        kicker: 'Все магазины',
        title: 'Аудиовизуальные магазины',
        subtitle: 'Все магазины экосистемы Skoleom.',
        searchPlaceholder: 'Поиск магазина (напр.: sport, music, games...)',
        ariaLabel: 'Карусель аудиовизуальных магазинов',
      },
    },
    howItWorks: {
      hero: {
        kicker: 'Как это работает',
        subtitle: 'Внутри видео. В тот же момент. Без трения.',
      },
      steps: {
        '01': {
          title: 'РАСПОЗНАВАНИЕ ИИ',
          desc: 'Наш ИИ определяет продукты, объекты и моменты в любом контенте.',
        },
        '02': {
          title: 'УМНЫЕ КАПСУЛЫ',
          desc: 'Интерактивные капсулы появляются в реальном времени без прерывания.',
        },
        '03': {
          title: 'ОДИН ТАП',
          desc: 'Один клик. Без редиректа. Без трения. Мгновенное действие.',
        },
        '04': {
          title: 'ПОКУПКА В КОНТЕКСТЕ',
          desc: 'Завершите покупку, не покидая любимый контент.',
        },
      },
      demo: {
        titlePrefix: 'Откройте',
        titleHighlight: 'магию',
        cta: 'Запустить интерактивное демо',
      },
      showcase: {
        kicker: 'Вселенная для всех',
        title: 'Избранные магазины',
        subtitle: 'Интерактивные experiences для всех, в вашем любимом контенте.',
      },
      carousel: {
        kicker: 'Все магазины',
        title: 'Для всех',
        subtitle: 'Все потребительские магазины экосистемы Skoleom.',
        searchPlaceholder: 'Поиск (напр.: page, shop, magazine...)',
        ariaLabel: 'Карусель магазинов Для всех',
      },
    },
    technology: {
      hero: {
        kicker: 'SeSync · Технология',
        titlePrefix: 'Подключено к более чем',
        titleMiddle: 'и',
      },
      features: {
        seamless: 'Бесшовные покупки прямо в видео',
        compatible: 'Совместимо с любимыми брендами и креаторами',
        secure: 'Безопасно и соответствует GDPR',
      },
      download: 'Скачать расширение',
      studio: {
        titleLine1: 'Инструмент монетизации',
        titleLine2Prefix: 'самый',
        titleLine2Highlight: 'мощный в мире',
        description:
          'ERP/DCM SaaS для управления, монетизации и анализа интерактивного видео. 300+ API. Полный контроль.',
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
