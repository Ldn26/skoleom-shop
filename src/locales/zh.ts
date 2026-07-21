import type { LocaleResource } from './types';
import { getA11yFallback } from './a11yFallback';
const resource = {
  common: {
    loading: '加载中...',
    actions: {
      close: '关闭菜单',
      search: '搜索',
      backHome: '返回首页',
      login: '登录',
      register: '创建账户',
      explore: '探索',
    },
    states: {
      noResults: '无结果',
      noResultsFor: '没有找到 “{{query}}” 的结果。',
    },
  },
  app: {
    skipToContent: '跳转到主要内容',
    loading: '加载中...',
    notFound: {
      message: '此页面不存在于 Skoleom 宇宙中。',
      cta: '返回首页',
    },
  },
  a11y: getA11yFallback('zh'),
  header: {
    brandHome: '首页',
    universe: 'Universe',
    navLabel: '主导航',
    searchPlaceholder: '搜索',
    searchAria: '搜索',
    language: {
      change: '切换语言',
    },
    actions: {
      settings: '设置',
      favorites: '收藏',
      cart: '购物车',
      account: '用户账户',
      openMenu: '打开菜单',
      closeMenu: '关闭菜单',
    },
    account: {
      dashboard: '我的面板',
      orders: '我的订单',
      favorites: '收藏',
      admin: '管理控制台',
      adminBadge: 'Admin',
      logout: '退出登录',
    },
    nav: {
      home: '首页',
      stores: '视听商店',
      everyone: '面向所有人',
      pros: '面向专业人士',
      news: '新闻',
      events: '活动',
      group: '集团',
      support: '支持',
    },
  },
  cart: {
    title: '我的购物车',
    itemCount: '{{count}} 件商品',
    empty: {
      title: '您的购物车为空',
      subtitle: '探索我们的可购物内容',
    },
    summary: {
      subtotal: '小计',
      shipping: '配送',
      free: '免费',
      total: '总计',
    },
    checkout: {
      cta: '使用 Skoleom Pay 支付',
      security: '主权且安全的支付 · 符合 GDPR',
    },
    aria: {
      decrease: '减少数量',
      increase: '增加数量',
      remove: '移除此商品',
      close: '关闭购物车',
    },
  },
  skoleomPage: {
    nav: {
      ariaLabel: 'Skoleom Page 导航',
      home: '首页',
      homeMobile: '首页',
      trends: '趋势',
      trendsMobile: '趋势',
      create: '创建您的 SeContent',
      createMobile: '创建',
      profile: '个人资料',
      profileMobile: '资料',
      modalTitle: '服务不可用',
      modalBody: '该服务在您的地区不可用。',
      modalClose: '关闭',
    },
    explorer: {
      poweredBy: '由 SeSync 驱动',
      heroBefore: '观看。触摸。',
      heroHighlight: '发现。',
      heroSubtitle:
        '一次搜索，整个 Skoleom Universe 生态系统 — 视频、音乐、媒体、购物。每个结果都是沉浸式入口。',
      logoAlt: 'Skoleom Page',
      searchPlaceholder: '搜索艺术家、电影、品牌…',
      searchAria: '搜索词',
      searchSubmit: '开始搜索',
      searchReset: '重置搜索',
      exploreCta: '探索',
      resultsFor: '搜索结果：',
      resultsOnPlatforms_one: '在 {{count}} 个平台上',
      resultsOnPlatforms_other: '在 {{count}} 个平台上',
      filter: '筛选',
      platforms: '平台',
      filterPlatformsAria: '筛选平台',
      selectAll: '全选',
      selectNone: '无',
      loading: '正在连接 Skoleom 宇宙…',
      noResults: '没有符合当前筛选的结果。请选择更多平台。',
    },
    actionCards: {
      sectionBefore: '探索',
      sectionHighlight: 'Skoleom 宇宙',
      mobile: {
        title: '移动端',
        description: '适用于 iOS 和 Android。',
      },
      tv: {
        title: '电视',
        description: '在联网电视上观看。',
      },
      rewards: {
        title: '奖励',
        description: '高级购物返现。',
      },
      extension: {
        title: '扩展',
        description: '访问所有功能。',
      },
      audio: {
        title: '音频',
        description: '在所有设备上收听。',
      },
      gaming: {
        title: '游戏',
        description: '探索我们的游戏应用。',
      },
    },
  },
  footer: {
    shopPrompt: {
      prefix: '你也可以在此购物',
      link: 'Skoleom 在线商店',
    },
    copyright: '版权所有。',
    modal: {
      close: '关闭菜单',
      title: '服务不可用',
      body: '该服务在你的地区不可用。',
    },
    columns: {
      about: 'About Skoleom',
      stores: '视听商店',
      everyone: '面向所有人',
      pros: '面向专业人士',
      group: '集团',
      '1': 'About Skoleom',
      '2': '视听商店',
      '3': 'For everyone',
      '4': '面向专业人士',
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
      title: '登录',
      submit: '登录',
    },
    register: {
      title: '创建账户',
      submit: '创建账户',
    },
  },
  dashboard: {
    user: {
      orders: '我的订单',
    },
    admin: {
      title: '管理控制台',
    },
  },
  home: {
    hero: {
      downloadPickerHintAndroid: '可在 Google Play 下载',
      downloadPickerHintIOS: '可在 App Store 下载',
      downloadPickerHintDefault: '选择您的平台',
      title: '探索 Skoleom Group 的全球生态系统',
      description: {
        intro: 'Skoleom Group 正在革新',
        economy: '数字经济',
        mid: '，在视听内容核心实现即时购买。连接超过',
        ott: '2 000 个 OTT 平台',
        join: '和',
        web: '数十亿网站',
        outro: '，我们的技术将每块屏幕变为互动销售点。',
      },
      download: '下载',
      application: '应用',
      extension: '扩展',
      watchVideo: '观看视频',
      ottMarqueeLabel: '流媒体和 OTT 平台',
      logoWtbAlt: 'Watch. Touch. Buy.',
      videoAria: 'Skoleom 视频',
      studioAria: 'Skoleom Studio',
      tagline1: '每段视频都成为真正的沉浸式商店：',
      tagline2: '流畅、优雅、互动的体验，让您即时发现、触摸并购买所见之物。',
    },
    skoletoonsHero: {
      kicker: '可购物的时尚、美妆与生活方式',
      title: "SkoleToon's",
      subtitle: '一家视听商店，将每个时尚灵感转化为互动体验。',
      body: '探索优质宇宙，在恰当时刻获取造型、产品与瞬间。',
      discover: '探索',
      videoTitle: "SkoleToon's 视频",
      modalTitle: '商店开发中',
      modalBody: "SkoleToon's 商店仍在开发中，即将在 Skoleom 生态系统中上线。",
      modalClose: '关闭',
    },
    actions: {
      discoverMagic: '探索魔力',
    },
    welcome: {
      part1: '欢迎来到',
      part2: '',
      part3: '零售媒体与跨媒体',
      part4: '的',
      part5: '未来',
    },
    page: {
      heroClose: '关闭',
      interactiveKicker: '互动体验',
      interactiveSubtitle: '从片场到屏幕，\nSkoleom Studio 让你的创作鲜活呈现。\n沉浸不中断。',
      ecosystemKicker: '一个宇宙。多种可能。',
      ecosystemTitle: 'Skoleom\n生态系统',
      ecosystemIntro:
        '超过 2000 个平台、数十亿块屏幕：Skoleom 生态系统将创作者、品牌与受众连接在沉浸式体验中，让每段内容都成为商店。',
      ecosystemStats: {
        products: '产品和服务一触即可购买。',
        countries: '接入生态系统的国家。',
        detection: '检测并激活您正在观看的内容。',
        alwaysOpen: '视听商店始终开放。',
      },
      partnersTitle: '合作品牌',
      boutiquesCta: '探索我们的',
      boutiquesTitle: '视听商店',
      boutiquesSubtitle: '沉浸式生态系统。50+ 网页应用。唯一的限制：您的想象力。',
      partnersSearchPlaceholder: '搜索品牌（如 Netflix...）',
      partnersSearchAria: '搜索合作品牌',
    },
    news: {
      badge: '最新',
    },
    boutiques: {
      title: '探索我们的视听商店',
      searchPlaceholder: '搜索 Skoleom 站点...',
    },
    sections: {
      welcome: '欢迎来到零售媒体与跨媒体的未来',
      how: 'Skoleom 如何运作',
      moment: '每一刻。都成为。一次机遇。',
      interactive: '互动体验',
      universe: '一个宇宙。多种可能。',
      ecosystem: 'Skoleom 生态系统',
      partners: '合作品牌',
    },
    descriptions: {
      detect: '当您观看时，Skoleom 识别屏幕上的内容，一键即可购买——无需离开内容本身。',
    },
    stats: {
      storePages: '每家店铺的 Audiovisual Store 页面。',
    },
  },
  public: {
    retailMediaPlatform: {
      kicker: '零售媒体',
      titlePrefix: '将视频转化为商业的',
      titleHighlight: '零售媒体平台',
      description:
        'Skoleom 将可购物视频、衡量与跨平台分发整合为单一的零售媒体平台——在受众已经观看的内容中触达他们。',
      ctaBusiness: '商业解决方案',
      ctaTechnology: '我们的技术',
      pillars: {
        videoCommerce: {
          title: '视频商务',
          description: '将任意视频变为可购物商店。屏幕上的每件商品一键即可购买，无需跳转。',
        },
        unifiedMeasurement: {
          title: '统一衡量',
          description: '实时追踪各平台的每次展示、点击与转化——一个看板，完整归因。',
        },
        crossPlatform: {
          title: '跨平台触达',
          description: '通过单一集成，在 2000+ 个 OTT 平台、社交媒体及开放网络分发活动。',
        },
      },
    },
    interactiveVideoCommerce: {
      kicker: '互动视频商务',
      titlePrefix: '让每个视频',
      titleHighlight: '即刻可购买',
      description: 'Skoleom 将互动购买点直接嵌入你的视频。观众所见即所购——即刻完成，无需离开内容。',
      ctaTalk: '与专家沟通',
      ctaOverview: '查看概览',
      benefits: {
        conversion: '更高转化——在心动的瞬间完成购买。',
        reporting: '实时报告——每次互动均被衡量与归因。',
        friction: '零摩擦——无跳转、无切换应用、无弃购。',
      },
    },
    hub: {
      groupCarousel: {
        kicker: '所有实体',
        title: '集团',
        subtitle: 'Skoleom 集团的卫星公司与业务板块。',
        searchPlaceholder: '搜索（如 studio、invest、lab...）',
        ariaLabel: '集团实体轮播',
      },
    },
    skoleomTouch: {
      introSubtitle: '在视频中找到隐藏的产品并获得独家奖励。',
      startCta: '开始体验',
      productsToFind: '找到的产品',
      exclusiveReward: '独家奖励',
      gameModalTitle: '体验开发中',
      gameModalBody: 'Skoleom Touch 互动体验仍在开发中。即将上线。',
      gameModalClose: '关闭',
    },
    stores: {
      hero: {
        titleLine1: '探索我们的',
        titleLine2: '视听商店',
        subtitle: '沉浸式生态系统。50+ 网页应用。唯一的限制：您的想象力。',
      },
      search: {
        placeholder: '搜索商店或品牌',
        aria: '搜索商店或品牌',
      },
      sections: {
        official: '官方商店',
        brands: '可用品牌',
      },
      showcase: {
        kicker: '精选商店',
        title: '旗舰宇宙',
        subtitle: '体育、OTT、音乐与游戏——标志性视听商店一览。',
      },
      carousel: {
        kicker: '全部商店',
        title: '视听商店',
        subtitle: '探索 Skoleom 生态系统中的所有商店。',
        searchPlaceholder: '搜索商店（例如：sport, music, games...）',
        ariaLabel: '视听商店轮播',
      },
    },
    howItWorks: {
      hero: {
        kicker: '运作方式',
        subtitle: '在视频内。同一时刻。无摩擦。',
      },
      steps: {
        '01': {
          title: 'AI 识别',
          desc: '我们的 AI 识别任何内容中的产品、物体与时刻。',
        },
        '02': {
          title: '智能胶囊',
          desc: '互动胶囊实时出现，不中断观看。',
        },
        '03': {
          title: '一键购买',
          desc: '一次点击。无跳转。无摩擦。即时行动。',
        },
        '04': {
          title: '情境购买',
          desc: '无需离开您喜爱的内容即可完成购买。',
        },
      },
      demo: {
        titlePrefix: '探索',
        titleHighlight: '魔力',
        cta: '启动互动演示',
      },
      showcase: {
        kicker: '消费者宇宙',
        title: '精选商店',
        subtitle: '人人可用的互动体验，直接融入您喜爱的内容。',
      },
      carousel: {
        kicker: '全部商店',
        title: '面向所有人',
        subtitle: 'Skoleom 生态系统中所有消费者商店。',
        searchPlaceholder: '搜索（例如：page, shop, magazine...）',
        ariaLabel: '面向所有人商店轮播',
      },
    },
    technology: {
      hero: {
        kicker: 'SeSync · 技术',
        titlePrefix: '连接超过',
        titleMiddle: '和',
      },
      features: {
        seamless: '视频内无缝购物体验',
        compatible: '兼容您喜爱的品牌与创作者',
        secure: '安全且符合 GDPR',
      },
      download: '下载扩展程序',
      studio: {
        titleLine1: '变现工具',
        titleLine2Prefix: '世界上',
        titleLine2Highlight: '最强大',
        description:
          '用于管理、变现和分析互动视频内容的 ERP/DCM SaaS。连接 300+ API。全面掌控销售、受众、活动与效果。',
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
