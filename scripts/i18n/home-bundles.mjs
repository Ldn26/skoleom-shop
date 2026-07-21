/**
 * Bloc `home` complet par langue — source unique pour apply-locale-bundles.
 */
import { homeHeroExtras } from './locale-extras.mjs';
import {
  heroDescriptionParts,
  heroTaglines,
  homeDescriptions,
  homeSections,
  homeStats,
  homeWelcome,
} from './public-bundles.mjs';
import { euHomeHeroMeta } from './eu-lang-strings.mjs';

const homeHeroMeta = {
  fr: {
    title: "Découvrez l'écosystème mondial de Skoleom Group",
    download: 'Télécharger',
    application: "l'application",
    extension: "l'extension",
    watchVideo: 'Lire la vidéo',
    discoverMagic: 'Découvrez la magie',
  },
  en: {
    title: 'Discover the global ecosystem of Skoleom Group',
    download: 'Download',
    application: 'the app',
    extension: 'the extension',
    watchVideo: 'Watch video',
    discoverMagic: 'Discover the magic',
  },
  es: {
    title: 'Descubre el ecosistema global de Skoleom Group',
    download: 'Descargar',
    application: 'la aplicación',
    extension: 'la extensión',
    watchVideo: 'Ver vídeo',
    discoverMagic: 'Descubre la magia',
  },
  pt: {
    title: 'Descubra o ecossistema global do Skoleom Group',
    download: 'Transferir',
    application: 'a aplicação',
    extension: 'a extensão',
    watchVideo: 'Ver vídeo',
    discoverMagic: 'Descubra a magia',
  },
  ar: {
    title: 'اكتشف النظام البيئي العالمي لـ Skoleom Group',
    download: 'تنزيل',
    application: 'التطبيق',
    extension: 'الإضافة',
    watchVideo: 'مشاهدة الفيديو',
    discoverMagic: 'اكتشف السحر',
  },
  hi: {
    title: 'Skoleom Group का वैश्विक इकोसिस्टम खोजें',
    download: 'डाउनलोड',
    application: 'ऐप',
    extension: 'एक्सटेंशन',
    watchVideo: 'वीडियो देखें',
    discoverMagic: 'जादू खोजें',
  },
  zh: {
    title: '探索 Skoleom Group 的全球生态系统',
    download: '下载',
    application: '应用',
    extension: '扩展',
    watchVideo: '观看视频',
    discoverMagic: '探索魔力',
  },
  id: {
    title: 'Jelajahi ekosistem global Skoleom Group',
    download: 'Unduh',
    application: 'aplikasi',
    extension: 'ekstensi',
    watchVideo: 'Tonton video',
    discoverMagic: 'Temukan keajaiban',
  },
  ru: {
    title: 'Откройте глобальную экосистему Skoleom Group',
    download: 'Скачать',
    application: 'приложение',
    extension: 'расширение',
    watchVideo: 'Смотреть видео',
    discoverMagic: 'Откройте магию',
  },
  sw: {
    title: 'Gundua ekosistimu ya kimataifa ya Skoleom Group',
    download: 'Pakua',
    application: 'programu',
    extension: 'kiendelezi',
    watchVideo: 'Tazama video',
    discoverMagic: 'Gundua uchawi',
  },
  de: euHomeHeroMeta.de,
  it: euHomeHeroMeta.it,
  nl: euHomeHeroMeta.nl,
};

const skoletoonsHero = {
  fr: {
    kicker: 'Mode, beauté et lifestyle shoppable',
    title: "SkoleToon's",
    subtitle:
      'Une boutique audiovisuelle pensée pour transformer chaque inspiration mode en expérience interactive.',
    body: 'Découvrez un univers premium où les looks, les produits et les moments deviennent accessibles au bon instant.',
    discover: 'Découvrir',
    videoTitle: "Vidéo SkoleToon's",
    modalTitle: 'Boutique en cours de développement',
    modalBody:
      "La boutique SkoleToon's est encore en cours de développement. Elle sera disponible prochainement dans l'écosystème Skoleom.",
    modalClose: 'Fermer',
  },
  en: {
    kicker: 'Shoppable fashion, beauty and lifestyle',
    title: "SkoleToon's",
    subtitle:
      'An audiovisual store designed to turn every fashion inspiration into an interactive experience.',
    body: 'Discover a premium universe where looks, products and moments become available at exactly the right time.',
    discover: 'Discover',
    videoTitle: "SkoleToon's video",
    modalTitle: 'Store under development',
    modalBody:
      "The SkoleToon's store is still under development. It will be available soon inside the Skoleom ecosystem.",
    modalClose: 'Close',
  },
  es: {
    kicker: 'Moda, belleza y lifestyle shoppable',
    title: "SkoleToon's",
    subtitle:
      'Una tienda audiovisual pensada para convertir cada inspiración de moda en una experiencia interactiva.',
    body: 'Descubre un universo premium donde looks, productos y momentos están disponibles en el instante adecuado.',
    discover: 'Descubrir',
    videoTitle: "Vídeo de SkoleToon's",
    modalTitle: 'Tienda en desarrollo',
    modalBody:
      "La tienda SkoleToon's está en desarrollo. Estará disponible pronto en el ecosistema Skoleom.",
    modalClose: 'Cerrar',
  },
  pt: {
    kicker: 'Moda, beleza e lifestyle shoppable',
    title: "SkoleToon's",
    subtitle:
      'Uma loja audiovisual pensada para transformar cada inspiração de moda numa experiência interativa.',
    body: 'Descubra um universo premium onde looks, produtos e momentos ficam disponíveis no instante certo.',
    discover: 'Descobrir',
    videoTitle: "Vídeo SkoleToon's",
    modalTitle: 'Loja em desenvolvimento',
    modalBody:
      "A loja SkoleToon's está em desenvolvimento. Estará disponível em breve no ecossistema Skoleom.",
    modalClose: 'Fechar',
  },
  ar: {
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
  hi: {
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
  zh: {
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
  id: {
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
  ru: {
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
  sw: {
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
};

const homePage = {
  fr: {
    heroClose: 'Fermer',
    interactiveKicker: 'Une expérience interactive',
    interactiveSubtitle: "À l'intérieur de la vidéo.\nAu même moment.\nSans friction.",
    ecosystemKicker: 'Un univers. Des possibilités multiples.',
    ecosystemTitle: "L'écosystème\nSkoleom",
    ecosystemIntro:
      'Extension SeSync, boutiques audiovisuelles, marques partenaires : un écosystème mondial qui transforme chaque écran en point de vente interactif.',
    ecosystemStats: {
      products: 'de produits et services rendus achetables en un seul toucher.',
      countries: "Pays connectés à l'écosystème.",
      detection: 'Pour détecter et activer ce que vous regardez.',
      alwaysOpen: 'Boutiques audiovisuelles toujours ouvertes.',
    },
    partnersTitle: 'Marques partenaires',
    boutiquesCta: 'Découvrez nos',
    boutiquesTitle: 'Boutiques Audiovisuelles',
    boutiquesSubtitle:
      'Un écosystème immersif. Plus de 50 applications web. Une seule limite : vos envies.',
    partnersSearchPlaceholder: 'Rechercher une marque (ex: Decathlon, Netflix, Intersport...)',
    partnersSearchAria: 'Rechercher une marque partenaire',
  },
  en: {
    heroClose: 'Close',
    interactiveKicker: 'An interactive experience',
    interactiveSubtitle: 'Inside the video.\nAt the same moment.\nWithout friction.',
    ecosystemKicker: 'One universe. Multiple possibilities.',
    ecosystemTitle: 'The Skoleom\necosystem',
    ecosystemIntro:
      'SeSync extension, audiovisual stores, partner brands: a global ecosystem that turns every screen into an interactive point of sale.',
    ecosystemStats: {
      products: 'products and services made shoppable with one touch.',
      countries: 'Countries connected to the ecosystem.',
      detection: 'To detect and activate what you are watching.',
      alwaysOpen: 'Audiovisual stores always open.',
    },
    partnersTitle: 'Partner brands',
    boutiquesCta: 'Discover our',
    boutiquesTitle: 'Audiovisual Stores',
    boutiquesSubtitle:
      'An immersive ecosystem. More than 50 web applications. One limit: your imagination.',
    partnersSearchPlaceholder: 'Search a brand (e.g. Decathlon, Netflix, Intersport...)',
    partnersSearchAria: 'Search a partner brand',
  },
  es: {
    heroClose: 'Cerrar',
    interactiveKicker: 'Una experiencia interactiva',
    interactiveSubtitle: 'Dentro del vídeo.\nEn el mismo momento.\nSin fricción.',
    ecosystemKicker: 'Un universo. Múltiples posibilidades.',
    ecosystemTitle: 'El ecosistema\nSkoleom',
    ecosystemIntro:
      'Extensión SeSync, tiendas audiovisuales, marcas asociadas: un ecosistema global que convierte cada pantalla en un punto de venta interactivo.',
    ecosystemStats: {
      products: 'de productos y servicios hechos comprables con un solo toque.',
      countries: 'Países conectados al ecosistema.',
      detection: 'Para detectar y activar lo que estás viendo.',
      alwaysOpen: 'Tiendas audiovisuales siempre abiertas.',
    },
    partnersTitle: 'Marcas asociadas',
    boutiquesCta: 'Descubre nuestras',
    boutiquesTitle: 'Tiendas audiovisuales',
    boutiquesSubtitle:
      'Un ecosistema inmersivo. Más de 50 aplicaciones web. Un solo límite: tus ganas.',
    partnersSearchPlaceholder: 'Buscar una marca (ej: Decathlon, Netflix, Intersport...)',
    partnersSearchAria: 'Buscar una marca asociada',
  },
  pt: {
    heroClose: 'Fechar',
    interactiveKicker: 'Uma experiência interativa',
    interactiveSubtitle: 'Dentro do vídeo.\nNo mesmo momento.\nSem fricção.',
    ecosystemKicker: 'Um universo. Várias possibilidades.',
    ecosystemTitle: 'O ecossistema\nSkoleom',
    ecosystemIntro:
      'Extensão SeSync, lojas audiovisuais, marcas parceiras: um ecossistema global que transforma cada ecrã num ponto de venda interativo.',
    ecosystemStats: {
      products: 'de produtos e serviços tornados compráveis com um toque.',
      countries: 'Países ligados ao ecossistema.',
      detection: 'Para detetar e ativar o que está a ver.',
      alwaysOpen: 'Lojas audiovisuais sempre abertas.',
    },
    partnersTitle: 'Marcas parceiras',
    boutiquesCta: 'Descubra as nossas',
    boutiquesTitle: 'Lojas audiovisuais',
    boutiquesSubtitle:
      'Um ecossistema imersivo. Mais de 50 aplicações web. Um único limite: a sua imaginação.',
    partnersSearchPlaceholder: 'Pesquisar uma marca (ex: Decathlon, Netflix...)',
    partnersSearchAria: 'Pesquisar uma marca parceira',
  },
  ar: {
    heroClose: 'إغلاق',
    interactiveKicker: 'تجربة تفاعلية',
    interactiveSubtitle: 'داخل الفيديو.\nفي نفس اللحظة.\nبلا احتكاك.',
    ecosystemKicker: 'كون واحد. إمكانيات متعددة.',
    ecosystemTitle: 'نظام\nSkoleom البيئي',
    ecosystemIntro:
      'امتداد SeSync، متاجر سمعية بصرية، علامات شريكة: نظام بيئي عالمي يحوّل كل شاشة إلى نقطة بيع تفاعلية.',
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
  hi: {
    heroClose: 'बंद करें',
    interactiveKicker: 'एक इंटरैक्टिव अनुभव',
    interactiveSubtitle: 'वीडियो के अंदर।\nउसी पल।\nबिना रुकावट।',
    ecosystemKicker: 'एक ब्रह्मांड। कई संभावनाएँ।',
    ecosystemTitle: 'Skoleom\nइकोसिस्टम',
    ecosystemIntro:
      'SeSync एक्सटेंशन, ऑडियोविज़ुअल स्टोर, पार्टनर ब्रांड: एक वैश्विक इकोसिस्टम जो हर स्क्रीन को इंटरैक्टिव बिक्री बिंदु बनाता है।',
    ecosystemStats: {
      products: 'उत्पाद और सेवाएँ एक स्पर्श में खरीदने योग्य।',
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
  zh: {
    heroClose: '关闭',
    interactiveKicker: '互动体验',
    interactiveSubtitle: '在视频内。\n同一时刻。\n无摩擦。',
    ecosystemKicker: '一个宇宙。多种可能。',
    ecosystemTitle: 'Skoleom\n生态系统',
    ecosystemIntro: 'SeSync 扩展、视听商店、合作品牌：一个将每块屏幕变为互动销售点的全球生态系统。',
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
  id: {
    heroClose: 'Tutup',
    interactiveKicker: 'Pengalaman interaktif',
    interactiveSubtitle: 'Di dalam video.\nPada momen yang sama.\nTanpa gesekan.',
    ecosystemKicker: 'Satu alam semesta. Banyak kemungkinan.',
    ecosystemTitle: 'Ekosistem\nSkoleom',
    ecosystemIntro:
      'Ekstensi SeSync, toko audiovisual, merek mitra: ekosistem global yang mengubah setiap layar menjadi titik penjualan interaktif.',
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
  ru: {
    heroClose: 'Закрыть',
    interactiveKicker: 'Интерактивный опыт',
    interactiveSubtitle: 'Внутри видео.\nВ тот же момент.\nБез трения.',
    ecosystemKicker: 'Одна вселенная. Множество возможностей.',
    ecosystemTitle: 'Экосистема\nSkoleom',
    ecosystemIntro:
      'Расширение SeSync, аудиовизуальные магазины, партнёрские бренды: глобальная экосистема, превращающая каждый экран в интерактивную точку продаж.',
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
  sw: {
    heroClose: 'Funga',
    interactiveKicker: 'Uzoefu wa maingiliano',
    interactiveSubtitle: 'Ndani ya video.\nWakati huo huo.\nBila msuguano.',
    ecosystemKicker: 'Ulimwengu mmoja. Uwezekano mwingi.',
    ecosystemTitle: 'Mfumo wa ikolojia\nwa Skoleom',
    ecosystemIntro:
      'Kiendelezi cha SeSync, maduka ya sauti na picha, chapa za washirika: mfumo wa ikolojia wa kimataifa unaobadilisha kila skrini kuwa sehemu ya mauzo shirikishi.',
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
};

const newsBadge = {
  fr: 'Nouveautés',
  en: 'New releases',
  es: 'Novedades',
  pt: 'Novidades',
  ar: 'جديد',
  hi: 'नया',
  zh: '最新',
  id: 'Terbaru',
  ru: 'Новинки',
  sw: 'Mpya',
};

const boutiquesBlock = {
  fr: {
    title: 'Découvrez nos Boutiques Audiovisuelles',
    searchPlaceholder: 'Rechercher un site Skoleom (ex: market, sport, ott...)',
  },
  en: {
    title: 'Discover our Audiovisual Stores',
    searchPlaceholder: 'Search a Skoleom site (e.g. market, sport, ott...)',
  },
  es: {
    title: 'Descubre nuestras tiendas audiovisuales',
    searchPlaceholder: 'Buscar un sitio Skoleom (ej: market, sport, ott...)',
  },
  pt: {
    title: 'Descubra as nossas lojas audiovisuais',
    searchPlaceholder: 'Pesquisar um site Skoleom (ex: market, sport, ott...)',
  },
  ar: {
    title: 'اكتشف متاجرنا السمعية البصرية',
    searchPlaceholder: 'ابحث عن موقع Skoleom...',
  },
  hi: {
    title: 'हमारे ऑडियोविज़ुअल स्टोर खोजें',
    searchPlaceholder: 'Skoleom साइट खोजें...',
  },
  zh: {
    title: '探索我们的视听商店',
    searchPlaceholder: '搜索 Skoleom 站点...',
  },
  id: {
    title: 'Temukan Toko Audiovisual kami',
    searchPlaceholder: 'Cari situs Skoleom...',
  },
  ru: {
    title: 'Откройте наши аудиовизуальные магазины',
    searchPlaceholder: 'Поиск сайта Skoleom...',
  },
  sw: {
    title: 'Gundua Maduka yetu ya sauti na picha',
    searchPlaceholder: 'Tafuta tovuti ya Skoleom...',
  },
};

export function buildHomeBundle(lang) {
  const code = lang in homeHeroMeta ? lang : 'en';
  const meta = homeHeroMeta[code];
  const tags = heroTaglines[code];
  const extras = homeHeroExtras[code] ?? homeHeroExtras.en;

  return {
    hero: {
      title: meta.title,
      description: heroDescriptionParts[code],
      download: meta.download,
      application: meta.application,
      extension: meta.extension,
      watchVideo: meta.watchVideo,
      ottMarqueeLabel: extras.ottMarqueeLabel,
      logoWtbAlt: extras.logoWtbAlt,
      videoAria: extras.videoAria,
      studioAria: extras.studioAria,
      tagline1: tags.tagline1,
      tagline2: tags.tagline2,
    },
    skoletoonsHero: skoletoonsHero[code],
    actions: { discoverMagic: meta.discoverMagic },
    welcome: homeWelcome[code],
    page: homePage[code],
    news: { badge: newsBadge[code] },
    boutiques: boutiquesBlock[code],
    sections: homeSections[code],
    descriptions: { detect: homeDescriptions[code] },
    stats: { storePages: homeStats[code] },
  };
}
