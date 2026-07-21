import type { LocaleResource } from './types';
import { getA11yFallback } from './a11yFallback';

const resource = {
  common: {
    loading: 'Memuat...',
    actions: {
      close: 'Tutup menu',
      search: 'Cari',
      backHome: 'Kembali ke beranda',
      login: 'Masuk',
      register: 'Buat akun',
      explore: 'Jelajahi',
    },
    states: {
      noResults: 'Tidak ada hasil',
      noResultsFor: 'Tidak ada hasil untuk “{{query}}”.',
    },
  },
  app: {
    skipToContent: 'Lompat ke konten utama',
    loading: 'Memuat...',
    notFound: {
      message: 'Halaman ini tidak ada di semesta Skoleom.',
      cta: 'Kembali ke beranda',
    },
  },
  a11y: getA11yFallback('id'),
  header: {
    brandHome: 'Beranda',
    universe: 'Universe',
    navLabel: 'Navigasi utama',
    searchPlaceholder: 'Cari',
    searchAria: 'Cari',
    language: {
      change: 'Ubah bahasa',
    },
    profile: {
      profile: 'Profil saya',
      logout: 'Keluar',
    },
    actions: {
      settings: 'Pengaturan',
      favorites: 'Favorit',
      cart: 'Keranjang',
      account: 'Akun pengguna',
      openMenu: 'Buka menu',
      closeMenu: 'Tutup menu',
    },
    account: {
      dashboard: 'Dasbor saya',
      orders: 'Pesanan saya',
      favorites: 'Favorit',
      admin: 'Konsol admin',
      adminBadge: 'Admin',
      logout: 'Keluar',
    },
    nav: {
      essayage: 'Uji coba virtual',
      home: 'Beranda',
      cabine: 'Ruang ganti',
      stores: 'Toko audiovisual',
      everyone: 'Untuk semua',
      pros: 'Untuk profesional',
      news: 'Berita',
      events: 'Acara',
      group: 'Grup',
      support: 'Bantuan',
    },
  },
  cart: {
    title: 'Keranjang saya',
    itemCount: '{{count}} item',
    empty: {
      title: 'Keranjang Anda kosong',
      subtitle: 'Jelajahi konten belanja kami',
    },
    summary: {
      subtotal: 'Subtotal',
      shipping: 'Pengiriman',
      free: 'Gratis',
      total: 'Total',
    },
    checkout: {
      cta: 'Bayar dengan Skoleom Pay',
      security: 'Pembayaran berdaulat dan aman · sesuai GDPR',
    },
    aria: {
      decrease: 'Kurangi jumlah',
      increase: 'Tambah jumlah',
      remove: 'Hapus item ini',
      close: 'Tutup keranjang',
    },
  },
  skoleomPage: {
    nav: {
      ariaLabel: 'Navigasi Skoleom Page',
      home: 'Beranda',
      homeMobile: 'Beranda',
      trends: 'Tren',
      trendsMobile: 'Tren',
      create: 'Buat SeContent Anda',
      createMobile: 'Buat',
      profile: 'Profil',
      profileMobile: 'Profil',
    },
    explorer: {
      poweredBy: 'Didukung oleh SeSync',
      heroBefore: 'Tonton. Sentuh. ',
      heroHighlight: 'Temukan.',
      heroSubtitle:
        'Satu pencarian, seluruh ekosistem Skoleom Universe — video, musik, media, belanja. Setiap hasil menjadi pintu masuk imersif.',
      logoAlt: 'Skoleom Page',
      searchPlaceholder: 'Cari artis, film, merek…',
      searchAria: 'Kata kunci pencarian',
      searchSubmit: 'Mulai pencarian',
      searchReset: 'Atur ulang pencarian',
      exploreCta: 'Jelajahi',
      resultsFor: 'Hasil untuk',
      resultsOnPlatforms_one: 'di {{count}} platform',
      resultsOnPlatforms_other: 'di {{count}} platform',
      filter: 'Filter',
      platforms: 'Platform',
      filterPlatformsAria: 'Filter platform',
      selectAll: 'Semua',
      selectNone: 'Tidak ada',
      loading: 'Menghubungkan ke alam Skoleom…',
      noResults: 'Tidak ada hasil yang sesuai filter Anda. Pilih lebih banyak platform.',
    },
    actionCards: {
      sectionBefore: 'Temukan ',
      sectionHighlight: 'alam Skoleom',
      mobile: {
        title: 'Mobile',
        description: 'Tersedia di iOS dan Android.',
      },
      tv: {
        title: 'TV',
        description: 'Tonton di TV Anda yang terhubung.',
      },
      rewards: {
        title: 'Hadiah',
        description: 'Cashback untuk pembelian premium.',
      },
      extension: {
        title: 'Ekstensi',
        description: 'Akses semua fitur.',
      },
      audio: {
        title: 'Audio',
        description: 'Dengarkan di semua perangkat.',
      },
      gaming: {
        title: 'Gaming',
        description: 'Temukan aplikasi game kami.',
      },
    },
  },
  footer: {
    shopPrompt: {
      prefix: 'Anda juga dapat berbelanja di',
      link: 'toko online Skoleom',
    },
    copyright: 'Seluruh hak cipta dilindungi.',
    modal: {
      close: 'Tutup menu',
      title: 'Layanan tidak tersedia',
      body: 'Layanan ini tidak tersedia di wilayah Anda.',
    },
    columns: {
      '1': 'Tentang Skoleom',
      '2': 'Toko audiovisual',
      '3': 'Untuk semua',
      '4': 'Untuk profesional',
      '5': 'Grup',
    },
    links: {
      '101': 'Misi kami',
      '102': 'Teknologi kami',
      '103': 'Ekosistem Skoleom',
      '104': 'Program pendanaan',
      '105': 'Paten Skoleom',
      '201': 'Jelajahi toko',
      '202': 'Univers per kategori',
      '203': 'Luncurkan toko',
      '301': 'Cara kerjanya',
      '302': 'Tonton dan beli',
      '303': 'Cashback & hadiah',
      '304': 'Skoleom Wallet',
      '305': 'Keamanan & privasi',
      '401': 'Solusi bisnis',
      '402': 'Monetisasi konten Anda',
      '403': 'Buat toko audiovisual',
      '404': 'Distribusikan produk Anda',
      '405': 'Iklan interaktif',
      '406': 'API & integrasi',
      '501': 'Berita',
      '502': 'Karier',
      '503': 'Investor',
      '504': 'Pers',
      '505': 'Kontak',
      '506': 'Dukungan',
    },
  },
  auth: {
    login: {
      title: 'Masuk',
      submit: 'Masuk',
    },
    register: {
      title: 'Buat akun',
      submit: 'Buat akun',
    },
  },
  dashboard: {
    user: {
      orders: 'Pesanan saya',
    },
    admin: {
      title: 'Konsol admin',
    },
  },
  home: {
    hero: {
      title: 'Jelajahi ekosistem global Skoleom Group',
      description: {
        intro: 'Skoleom Group merevolusi ',
        economy: 'ekonomi digital',
        mid: ' dengan memungkinkan pembelian instan di jantung konten audiovisual. Terhubung ke lebih dari ',
        ott: '2 000 platform OTT',
        join: ' dan ',
        web: 'miliaran situs web',
        outro: ', teknologi kami mengubah setiap layar menjadi titik penjualan interaktif.',
      },
      download: 'Unduh',
      application: 'aplikasi',
      extension: 'ekstensi',
      watchVideo: 'Tonton video',
      ottMarqueeLabel: 'Platform streaming dan OTT',
      logoWtbAlt: 'Watch. Touch. Buy.',
      videoAria: 'Video Skoleom',
      studioAria: 'Skoleom Studio',
      tagline1: 'SETIAP VIDEO MENJADI TOKO IMERSIF YANG SESUNGGUHNYA:',
      tagline2:
        'PENGALAMAN YANG FLUID, ELEGAN, DAN INTERAKTIF, DI MANA ANDA MENEMUKAN, MENYENTUH, DAN MEMBELI SECARA INSTAN.',
    },
    skoletoonsHero: {
      kicker: 'Fashion, kecantikan & gaya hidup yang bisa dibeli',
      title: "SkoleToon's",
      subtitle:
        'Toko audiovisual yang mengubah setiap inspirasi fashion menjadi pengalaman interaktif.',
      body: 'Temukan alam semesta premium di mana look, produk, dan momen tersedia pada waktu yang tepat.',
      discover: 'Jelajahi',
      videoTitle: "Video SkoleToon's",
      modalTitle: 'Toko dalam pengembangan',
      modalBody: "Toko SkoleToon's masih dikembangkan. Segera tersedia di ekosistem Skoleom.",
      modalClose: 'Tutup',
    },
    actions: {
      discoverMagic: 'Temukan keajaiban',
    },
    welcome: {
      part1: 'Selamat datang di ',
      part2: 'masa depan ',
      part3: 'retail media',
      part4: 'dan ',
      part5: 'transmedia',
    },
    page: {
      heroClose: 'Tutup',
      interactiveKicker: 'Pengalaman interaktif',
      interactiveSubtitle:
        'Dari set ke layar,\nSkoleom Studio menghidupkan kreasi Anda.\nImersi terus berlanjut.',
      ecosystemKicker: 'Satu alam semesta. Banyak kemungkinan.',
      ecosystemTitle: 'Ekosistem\nSkoleom',
      ecosystemIntro:
        'Lebih dari 2.000 platform, miliaran layar: ekosistem Skoleom menghubungkan kreator, merek, dan audiens dalam pengalaman imersif di mana setiap konten menjadi toko.',
      ecosystemStats: {
        products: 'produk dan layanan yang dapat dibeli dengan satu sentuhan.',
        countries: 'Negara terhubung ke ekosistem.',
        detection: 'Untuk mendeteksi dan mengaktifkan apa yang Anda tonton.',
        alwaysOpen: 'Toko audiovisual selalu buka.',
      },
      partnersTitle: 'Merek mitra',
      boutiquesCta: 'Temukan',
      boutiquesTitle: 'Toko Audiovisual kami',
      boutiquesSubtitle: 'Ekosistem imersif. 50+ aplikasi web. Satu batas: imajinasi Anda.',
      partnersSearchPlaceholder: 'Cari merek (mis: Netflix...)',
      partnersSearchAria: 'Cari merek mitra',
    },
    news: {
      badge: 'Terbaru',
    },
    boutiques: {
      title: 'Temukan Toko Audiovisual kami',
      searchPlaceholder: 'Cari situs Skoleom...',
    },
    sections: {
      welcome: 'Selamat datang di masa depan retail media dan transmedia',
      how: 'Cara kerja Skoleom',
      moment: 'Setiap momen. Menjadi. Sebuah peluang.',
      interactive: 'Pengalaman interaktif',
      universe: 'Satu alam semesta. Banyak kemungkinan.',
      ecosystem: 'Ekosistem Skoleom',
      partners: 'Merek mitra',
    },
    descriptions: {
      detect:
        'Saat Anda menonton, Skoleom mengenali apa yang muncul di layar dan mengubahnya menjadi pembelian — satu sentuhan, tanpa meninggalkan konten.',
    },
    stats: {
      storePages: 'halaman Audiovisual Store per toko.',
    },
  },
  public: {
    retailMediaPlatform: {
      kicker: 'Retail Media',
      titlePrefix: 'Platform retail media yang mengubah',
      titleHighlight: 'video menjadi perdagangan',
      description:
        'Skoleom menyatukan video yang dapat dibeli, pengukuran, dan distribusi lintas platform dalam satu platform retail media — jangkau audiens di dalam konten yang sudah mereka tonton.',
      ctaBusiness: 'Solusi bisnis',
      ctaTechnology: 'Teknologi kami',
      pillars: {
        videoCommerce: {
          title: 'Video commerce',
          description:
            'Ubah video apa pun menjadi etalase yang dapat dibeli. Setiap produk di layar bisa dibeli dengan satu ketukan, tanpa pengalihan.',
        },
        unifiedMeasurement: {
          title: 'Pengukuran terpadu',
          description:
            'Lacak setiap tayangan, klik, dan konversi di seluruh platform secara real-time — satu dasbor, atribusi penuh.',
        },
        crossPlatform: {
          title: 'Jangkauan lintas platform',
          description:
            'Distribusikan kampanye ke 2.000+ platform OTT, media sosial, dan web terbuka dari satu integrasi.',
        },
      },
    },
    interactiveVideoCommerce: {
      kicker: 'Perdagangan video interaktif',
      titlePrefix: 'Jadikan setiap video',
      titleHighlight: 'langsung bisa dibeli',
      description:
        'Skoleom menanamkan titik pembelian interaktif langsung di dalam video Anda. Penonton membeli apa yang mereka lihat — seketika, tanpa meninggalkan konten.',
      ctaTalk: 'Bicara dengan ahli',
      ctaOverview: 'Lihat ringkasan',
      benefits: {
        conversion: 'Konversi lebih tinggi — pembelian terjadi pada saat keinginan muncul.',
        reporting: 'Pelaporan real-time — setiap interaksi diukur dan diatribusikan.',
        friction:
          'Tanpa friksi — tanpa pengalihan, tanpa ganti aplikasi, tanpa keranjang ditinggalkan.',
      },
    },
    hub: {
      groupCarousel: {
        kicker: 'Semua entitas',
        title: 'Grup',
        subtitle: 'Perusahaan satelit dan divisi grup Skoleom.',
        searchPlaceholder: 'Cari (mis. studio, invest, lab...)',
        ariaLabel: 'Korsel entitas Grup',
      },
    },
    stores: {
      hero: {
        titleLine1: 'Temukan',
        titleLine2: 'Toko Audiovisual kami',
        subtitle: 'Ekosistem imersif. Lebih dari 50 aplikasi web. Satu batas: imajinasi Anda.',
      },
      search: {
        placeholder: 'Cari toko atau merek',
        aria: 'Cari toko atau merek',
      },
      sections: {
        official: 'Toko resmi',
        brands: 'Merek tersedia',
      },
      showcase: {
        kicker: 'Toko unggulan',
        title: 'Alam semesta utama',
        subtitle: 'Olahraga, OTT, musik & gaming — toko audiovisual ikonik.',
      },
      carousel: {
        kicker: 'Semua toko',
        title: 'Toko audiovisual',
        subtitle: 'Temukan semua toko di ekosistem Skoleom.',
        searchPlaceholder: 'Cari toko (mis: sport, music, games...)',
        ariaLabel: 'Karusel toko audiovisual',
      },
    },
    howItWorks: {
      hero: {
        kicker: 'Cara kerjanya',
        subtitle: 'Di dalam video. Pada momen yang sama. Tanpa gesekan.',
      },
      steps: {
        '01': {
          title: 'PENGENALAN AI',
          desc: 'AI kami mengidentifikasi produk, objek, dan momen dalam konten apa pun.',
        },
        '02': {
          title: 'KAPSUL PINTAR',
          desc: 'Kapsul interaktif muncul secara real-time tanpa gangguan.',
        },
        '03': {
          title: 'SATU KETUKAN',
          desc: 'Satu klik. Tanpa pengalihan. Tanpa gesekan. Aksi instan.',
        },
        '04': {
          title: 'BELI DALAM KONTEKS',
          desc: 'Selesaikan pembelian tanpa meninggalkan konten favorit Anda.',
        },
      },
      demo: {
        titlePrefix: 'Temukan',
        titleHighlight: 'keajaiban',
        cta: 'Luncurkan demo interaktif',
      },
      showcase: {
        kicker: 'Alam konsumen',
        title: 'Toko unggulan',
        subtitle:
          'Pengalaman interaktif untuk semua orang, terintegrasi dalam konten favorit Anda.',
      },
      carousel: {
        kicker: 'Semua toko',
        title: 'Untuk semua',
        subtitle: 'Semua toko konsumen di ekosistem Skoleom.',
        searchPlaceholder: 'Cari (mis: page, shop, magazine...)',
        ariaLabel: 'Karusel toko Untuk semua',
      },
    },
    technology: {
      hero: {
        kicker: 'SeSync · Teknologi',
        titlePrefix: 'Terhubung ke lebih dari',
        titleMiddle: 'dan',
      },
      features: {
        seamless: 'Pengalaman belanja mulus langsung di dalam video',
        compatible: 'Kompatibel dengan merek dan kreator favorit Anda',
        secure: 'Aman dan patuh GDPR',
      },
      download: 'Unduh ekstensi',
      studio: {
        titleLine1: 'Alat monetisasi',
        titleLine2Prefix: 'paling',
        titleLine2Highlight: 'kuat di dunia',
        description:
          'ERP/DCM SaaS untuk mengelola, memonetisasi, dan menganalisis konten video interaktif. Terhubung ke 300+ API. Kontrol penuh.',
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
