/** Sections `home` (partiel) et `public` par langue — injectées dans src/locales/*.ts */

import { euApp, euHomeDescriptions, euHeroTaglines, euPublicStores } from './eu-lang-strings.mjs';

export const homeSections = {
  fr: {
    welcome: 'Bienvenue dans le futur du retail media et du transmedia',
    how: 'Comment fonctionne Skoleom',
    moment: 'Chaque moment. Devient. Une opportunité.',
    interactive: 'Une expérience interactive',
    universe: 'Un univers. Plusieurs possibilités.',
    ecosystem: "L'écosystème Skoleom",
    partners: 'Marques partenaires',
  },
  en: {
    welcome: 'Welcome to the future of retail media and transmedia',
    how: 'How Skoleom works',
    moment: 'Every moment. Becomes. An opportunity.',
    interactive: 'An interactive experience',
    universe: 'One universe. Multiple possibilities.',
    ecosystem: 'The Skoleom ecosystem',
    partners: 'Partner brands',
  },
  es: {
    welcome: 'Bienvenido al futuro del retail media y del transmedia',
    how: 'Cómo funciona Skoleom',
    moment: 'Cada momento. Se convierte. En una oportunidad.',
    interactive: 'Una experiencia interactiva',
    universe: 'Un universo. Múltiples posibilidades.',
    ecosystem: 'El ecosistema Skoleom',
    partners: 'Marcas asociadas',
  },
  ar: {
    welcome: 'مرحبًا بكم في مستقبل الوسائط التجارية والترانس ميديا',
    how: 'كيف يعمل Skoleom',
    moment: 'كل لحظة. تصبح. فرصة.',
    interactive: 'تجربة تفاعلية',
    universe: 'كون واحد. إمكانيات متعددة.',
    ecosystem: 'نظام Skoleom البيئي',
    partners: 'العلامات الشريكة',
  },
  pt: {
    welcome: 'Bem-vindo ao futuro do retail media e do transmedia',
    how: 'Como o Skoleom funciona',
    moment: 'Cada momento. Torna-se. Uma oportunidade.',
    interactive: 'Uma experiência interativa',
    universe: 'Um universo. Várias possibilidades.',
    ecosystem: 'O ecossistema Skoleom',
    partners: 'Marcas parceiras',
  },
  hi: {
    welcome: 'रिटेल मीडिया और ट्रांसमीडिया के भविष्य में आपका स्वागत है',
    how: 'Skoleom कैसे काम करता है',
    moment: 'हर पल। बन जाता है। एक अवसर।',
    interactive: 'एक इंटरैक्टिव अनुभव',
    universe: 'एक ब्रह्मांड। कई संभावनाएँ।',
    ecosystem: 'Skoleom इकोसिस्टम',
    partners: 'पार्टनर ब्रांड',
  },
  zh: {
    welcome: '欢迎来到零售媒体与跨媒体的未来',
    how: 'Skoleom 如何运作',
    moment: '每一刻。都成为。一次机遇。',
    interactive: '互动体验',
    universe: '一个宇宙。多种可能。',
    ecosystem: 'Skoleom 生态系统',
    partners: '合作品牌',
  },
  id: {
    welcome: 'Selamat datang di masa depan retail media dan transmedia',
    how: 'Cara kerja Skoleom',
    moment: 'Setiap momen. Menjadi. Sebuah peluang.',
    interactive: 'Pengalaman interaktif',
    universe: 'Satu alam semesta. Banyak kemungkinan.',
    ecosystem: 'Ekosistem Skoleom',
    partners: 'Merek mitra',
  },
  ru: {
    welcome: 'Добро пожаловать в будущее retail media и трансмедиа',
    how: 'Как работает Skoleom',
    moment: 'Каждый момент. Становится. Возможностью.',
    interactive: 'Интерактивный опыт',
    universe: 'Одна вселенная. Множество возможностей.',
    ecosystem: 'Экосистема Skoleom',
    partners: 'Партнёрские бренды',
  },
  sw: {
    welcome: 'Karibu kwenye mustakabali wa retail media na transmedia',
    how: 'Jinsi Skoleom inavyofanya kazi',
    moment: 'Kila wakati. Huwa. Fursa.',
    interactive: 'Uzoefu wa maingiliano',
    universe: 'Ulimwengu mmoja. Uwezekano mwingi.',
    ecosystem: 'Mfumo wa ikolojia wa Skoleom',
    partners: 'Chapa za washirika',
  },
};

export const homeDescriptions = {
  fr: 'Skoleom détecte ce que vous regardez et rend tout ce que vous voyez achetable, dans une expérience interactive inédite.',
  en: 'Skoleom detects what you watch and makes everything you see shoppable, in an interactive experience never designed before.',
  es: 'Skoleom detecta lo que estás viendo y convierte todo lo que ves en comprable, en una experiencia interactiva nunca antes diseñada.',
  ar: 'يكتشف Skoleom ما تشاهده ويجعل كل ما تراه قابلاً للشراء، في تجربة تفاعلية لم تُصمَّم من قبل.',
  pt: 'O Skoleom deteta o que você assiste e torna tudo o que vê comprável, numa experiência interativa inédita.',
  hi: 'Skoleom आप जो देखते हैं उसे पहचानता है और जो कुछ भी आप देखते हैं उसे खरीदने योग्य बनाता है — एक अभूतपूर्व इंटरैक्टिव अनुभव।',
  zh: 'Skoleom 识别您观看的内容，让您所见皆可购买，带来前所未有的互动体验。',
  id: 'Skoleom mendeteksi apa yang Anda tonton dan membuat semua yang Anda lihat dapat dibeli, dalam pengalaman interaktif yang belum pernah ada.',
  ru: 'Skoleom распознаёт, что вы смотрите, и делает всё увиденное доступным для покупки — в уникальном интерактивном опыте.',
  sw: 'Skoleom hutambua unachotazama na kufanya kila unachokiona kiweze kununuliwa, katika uzoefu wa maingiliano usio wa kawaida.',
};

export const appStrings = {
  fr: { skipToContent: 'Aller au contenu principal' },
  en: { skipToContent: 'Skip to main content' },
  es: { skipToContent: 'Ir al contenido principal' },
  ar: { skipToContent: 'انتقل إلى المحتوى الرئيسي' },
  pt: { skipToContent: 'Ir para o conteúdo principal' },
  hi: { skipToContent: 'मुख्य सामग्री पर जाएँ' },
  zh: { skipToContent: '跳转到主要内容' },
  id: { skipToContent: 'Lompat ke konten utama' },
  ru: { skipToContent: 'Перейти к основному содержимому' },
  sw: { skipToContent: 'Nenda kwenye maudhui kuu' },
};

export const homeWelcome = {
  fr: {
    part1: 'Bienvenue dans le ',
    part2: 'futur du ',
    part3: 'retail media',
    part4: 'et du ',
    part5: 'transmédia',
  },
  en: {
    part1: 'Welcome to the ',
    part2: 'future of ',
    part3: 'retail media',
    part4: 'and ',
    part5: 'transmedia',
  },
  es: {
    part1: 'Bienvenido al ',
    part2: 'futuro del ',
    part3: 'retail media',
    part4: 'y del ',
    part5: 'transmedia',
  },
  ar: {
    part1: 'مرحبًا بكم في ',
    part2: 'مستقبل ',
    part3: 'الوسائط التجارية',
    part4: 'و',
    part5: 'الترانس ميديا',
  },
  pt: {
    part1: 'Bem-vindo ao ',
    part2: 'futuro do ',
    part3: 'retail media',
    part4: 'e do ',
    part5: 'transmedia',
  },
  hi: {
    part1: 'रिटेल मीडिया और ट्रांसमीडिया के ',
    part2: 'भविष्य में ',
    part3: 'आपका स्वागत',
    part4: ' है — ',
    part5: '',
  },
  zh: {
    part1: '欢迎来到',
    part2: '',
    part3: '零售媒体与跨媒体',
    part4: '的',
    part5: '未来',
  },
  id: {
    part1: 'Selamat datang di ',
    part2: 'masa depan ',
    part3: 'retail media',
    part4: 'dan ',
    part5: 'transmedia',
  },
  ru: {
    part1: 'Добро пожаловать в ',
    part2: 'будущее ',
    part3: 'retail media',
    part4: 'и ',
    part5: 'трансмедиа',
  },
  sw: {
    part1: 'Karibu kwenye ',
    part2: 'mustakabali wa ',
    part3: 'retail media',
    part4: 'na ',
    part5: 'transmedia',
  },
};

export const homeExtra = {
  fr: {
    heroClose: 'Fermer',
    interactiveKicker: 'Une expérience interactive',
    interactiveSubtitle: "À l'intérieur de la vidéo.\nAu même moment.\nSans friction.",
    ecosystemKicker: 'Un univers. Des possibilités multiples.',
    ecosystemTitle: "L'écosystème\nSkoleom",
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
    partnersTitle: 'Marcas asociadas',
    boutiquesCta: 'Descubre nuestras',
    boutiquesTitle: 'Tiendas audiovisuales',
    boutiquesSubtitle:
      'Un ecosistema inmersivo. Más de 50 aplicaciones web. Un solo límite: tus ganas.',
  },
  ar: {
    heroClose: 'إغلاق',
    interactiveKicker: 'تجربة تفاعلية',
    interactiveSubtitle: 'داخل الفيديو.\nفي نفس اللحظة.\nبلا احتكاك.',
    ecosystemKicker: 'كون واحد. إمكانيات متعددة.',
    ecosystemTitle: 'نظام\nSkoleom البيئي',
    partnersTitle: 'العلامات الشريكة',
    boutiquesCta: 'اكتشف',
    boutiquesTitle: 'متاجرنا السمعية البصرية',
    boutiquesSubtitle: 'نظام بيئي غامر. أكثر من 50 تطبيق ويب. حد واحد: خيالك.',
  },
  pt: {
    heroClose: 'Fechar',
    interactiveKicker: 'Uma experiência interativa',
    interactiveSubtitle: 'Dentro do vídeo.\nNo mesmo momento.\nSem fricção.',
    ecosystemKicker: 'Um universo. Várias possibilidades.',
    ecosystemTitle: 'O ecossistema\nSkoleom',
    partnersTitle: 'Marcas parceiras',
    boutiquesCta: 'Descubra as nossas',
    boutiquesTitle: 'Lojas audiovisuais',
    boutiquesSubtitle:
      'Um ecossistema imersivo. Mais de 50 aplicações web. Um único limite: a sua imaginação.',
  },
  hi: {
    heroClose: 'बंद करें',
    interactiveKicker: 'एक इंटरैक्टिव अनुभव',
    interactiveSubtitle: 'वीडियो के अंदर।\nउसी पल।\nबिना रुकावट।',
    ecosystemKicker: 'एक ब्रह्मांड। कई संभावनाएँ।',
    ecosystemTitle: 'Skoleom\nइकोसिस्टम',
    partnersTitle: 'पार्टनर ब्रांड',
    boutiquesCta: 'हमारी',
    boutiquesTitle: 'ऑडियोविज़ुअल स्टोर खोजें',
    boutiquesSubtitle: 'एक इमर्सिव इकोसिस्टम। 50+ वेब ऐप। एक सीमा: आपकी कल्पना।',
  },
  zh: {
    heroClose: '关闭',
    interactiveKicker: '互动体验',
    interactiveSubtitle: '在视频内。\n同一时刻。\n无摩擦。',
    ecosystemKicker: '一个宇宙。多种可能。',
    ecosystemTitle: 'Skoleom\n生态系统',
    partnersTitle: '合作品牌',
    boutiquesCta: '探索我们的',
    boutiquesTitle: '视听商店',
    boutiquesSubtitle: '沉浸式生态系统。50+ 网页应用。唯一的限制：您的想象力。',
  },
  id: {
    heroClose: 'Tutup',
    interactiveKicker: 'Pengalaman interaktif',
    interactiveSubtitle: 'Di dalam video.\nPada momen yang sama.\nTanpa gesekan.',
    ecosystemKicker: 'Satu alam semesta. Banyak kemungkinan.',
    ecosystemTitle: 'Ekosistem\nSkoleom',
    partnersTitle: 'Merek mitra',
    boutiquesCta: 'Temukan',
    boutiquesTitle: 'Toko Audiovisual kami',
    boutiquesSubtitle: 'Ekosistem imersif. Lebih dari 50 aplikasi web. Satu batas: imajinasi Anda.',
  },
  ru: {
    heroClose: 'Закрыть',
    interactiveKicker: 'Интерактивный опыт',
    interactiveSubtitle: 'Внутри видео.\nВ тот же момент.\nБез трения.',
    ecosystemKicker: 'Одна вселенная. Множество возможностей.',
    ecosystemTitle: 'Экосистема\nSkoleom',
    partnersTitle: 'Партнёрские бренды',
    boutiquesCta: 'Откройте наши',
    boutiquesTitle: 'Аудиовизуальные магазины',
    boutiquesSubtitle:
      'Иммерсивная экосистема. Более 50 веб-приложений. Один предел: ваше воображение.',
  },
  sw: {
    heroClose: 'Funga',
    interactiveKicker: 'Uzoefu wa maingiliano',
    interactiveSubtitle: 'Ndani ya video.\nWakati huo huo.\nBila msuguano.',
    ecosystemKicker: 'Ulimwengu mmoja. Uwezekano mwingi.',
    ecosystemTitle: 'Mfumo wa ikolojia\nwa Skoleom',
    partnersTitle: 'Chapa za washirika',
    boutiquesCta: 'Gundua',
    boutiquesTitle: 'Maduka yetu ya sauti na picha',
    boutiquesSubtitle:
      'Mfumo wa ikolojia wa kina. Programu 50+ za wavuti. Kikomo kimoja: mawazo yako.',
  },
};

export const heroTaglines = {
  fr: {
    tagline1: 'CHAQUE VIDÉO DEVIENT UN VÉRITABLE MAGASIN IMMERSIF :',
    tagline2:
      "UNE EXPÉRIENCE FLUIDE, ÉLÉGANTE ET INTERACTIVE, OÙ L'ON DÉCOUVRE, TOUCHE ET ACHÈTE INSTANTANÉMENT CE QUE L'ON VOIT.",
  },
  en: {
    tagline1: 'EVERY VIDEO BECOMES A TRUE IMMERSIVE STORE:',
    tagline2:
      'A FLUID, ELEGANT AND INTERACTIVE EXPERIENCE, WHERE YOU DISCOVER, TOUCH AND BUY INSTANTLY WHAT YOU SEE.',
  },
  es: {
    tagline1: 'CADA VÍDEO SE CONVIERTE EN UNA VERDADERA TIENDA INMERSIVA:',
    tagline2:
      'UNA EXPERIENCIA FLUIDA, ELEGANTE E INTERACTIVA, DONDE DESCUBRES, TOCAS Y COMPRAS AL INSTANTE LO QUE VES.',
  },
  ar: {
    tagline1: 'كل فيديو يصبح متجرًا غامرًا حقيقيًا:',
    tagline2: 'تجربة سلسة وأنيقة وتفاعلية، تكتشف فيها وتلمس وتشتري فورًا ما تراه.',
  },
  pt: {
    tagline1: 'CADA VÍDEO TORNA-SE UMA VERDADEIRA LOJA IMERSIVA:',
    tagline2:
      'UMA EXPERIÊNCIA FLUIDA, ELEGANTE E INTERATIVA, ONDE DESCOBRE, TOCA E COMPRA INSTANTANEAMENTE O QUE VÊ.',
  },
  hi: {
    tagline1: 'हर वीडियो एक सच्चा इमर्सिव स्टोर बन जाता है:',
    tagline2: 'एक सहज, सुरुचिपूर्ण और इंटरैक्टिव अनुभव, जहाँ आप जो देखते हैं उसे तुरंत खरीदते हैं।',
  },
  zh: {
    tagline1: '每段视频都成为真正的沉浸式商店：',
    tagline2: '流畅、优雅、互动的体验，让您即时发现、触摸并购买所见之物。',
  },
  id: {
    tagline1: 'SETIAP VIDEO MENJADI TOKO IMERSIF YANG SESUNGGUHNYA:',
    tagline2:
      'PENGALAMAN YANG FLUID, ELEGAN, DAN INTERAKTIF, DI MANA ANDA MENEMUKAN, MENYENTUH, DAN MEMBELI SECARA INSTAN.',
  },
  ru: {
    tagline1: 'КАЖДОЕ ВИДЕО СТАНОВИТСЯ НАСТОЯЩИМ ИММЕРСИВНЫМ МАГАЗИНОМ:',
    tagline2:
      'ПЛАВНЫЙ, ЭЛЕГАНТНЫЙ И ИНТЕРАКТИВНЫЙ ОПЫТ, ГДЕ ВЫ МГНОВЕННО ОТКРЫВАЕТЕ, КАСАЕТЕСЬ И ПОКУПАЕТЕ УВИДЕННОЕ.',
  },
  sw: {
    tagline1: 'KILA VIDEO HUWA DUKA LA KWELI LA KINA:',
    tagline2:
      'UZOEFU LAINI, LA KISTAARABU NA LA MAINGILIANO, UNAPOGUNDUA, KUGUSA NA KUNUNUA PAPO HAPO UNACHOKIONA.',
  },
};

/** Segments du paragraphe hero — les clés economy, ott et web s'affichent en gras. */
export const heroDescriptionParts = {
  fr: {
    intro: 'Skoleom Group révolutionne ',
    economy: "l'économie digitale",
    mid: " en permettant l'achat instantané au cœur des contenus audiovisuels. Connecté à plus de ",
    ott: '2 000 plateformes OTT',
    join: ' et à ',
    web: 'des milliards de sites web',
    outro: ', notre technologie transforme chaque écran en point de vente interactif.',
  },
  en: {
    intro: 'Skoleom Group is revolutionizing ',
    economy: 'the digital economy',
    mid: ' by enabling instant purchasing at the heart of audiovisual content. Connected to more than ',
    ott: '2,000 OTT platforms',
    join: ' and ',
    web: 'billions of websites',
    outro: ', our technology turns every screen into an interactive point of sale.',
  },
  es: {
    intro: 'Skoleom Group revoluciona ',
    economy: 'la economía digital',
    mid: ' permitiendo la compra instantánea en el corazón de los contenidos audiovisuales. Conectada a más de ',
    ott: '2 000 plataformas OTT',
    join: ' y a ',
    web: 'miles de millones de sitios web',
    outro: ', nuestra tecnología transforma cada pantalla en un punto de venta interactivo.',
  },
  ar: {
    intro: 'تُحدث Skoleom Group ثورة في ',
    economy: 'الاقتصاد الرقمي',
    mid: ' من خلال تمكين الشراء الفوري في قلب المحتوى السمعي البصري. متصلة بأكثر من ',
    ott: '2 000 منصة OTT',
    join: ' و',
    web: 'مليارات المواقع',
    outro: '، تحوّل تقنيتنا كل شاشة إلى نقطة بيع تفاعلية.',
  },
  pt: {
    intro: 'A Skoleom Group está a revolucionar ',
    economy: 'a economia digital',
    mid: ' ao permitir a compra instantânea no coração dos conteúdos audiovisuais. Ligada a mais de ',
    ott: '2 000 plataformas OTT',
    join: ' e a ',
    web: 'milhares de milhões de sites',
    outro: ', a nossa tecnologia transforma cada ecrã num ponto de venda interativo.',
  },
  hi: {
    intro: 'Skoleom Group ',
    economy: 'डिजिटल अर्थव्यवस्था',
    mid: ' में क्रांति ला रहा है, ऑडियोविज़ुअल सामग्री के केंद्र में त्वरित खरीदारी सक्षम करके। ',
    ott: '2 000+ OTT प्लेटफ़ॉर्म',
    join: ' और ',
    web: 'अरबों वेबसाइटों',
    outro: ' से जुड़ा, हमारी तकनीक हर स्क्रीन को इंटरैक्टिव बिक्री बिंदु बनाती है।',
  },
  zh: {
    intro: 'Skoleom Group 正在革新',
    economy: '数字经济',
    mid: '，在视听内容核心实现即时购买。连接超过',
    ott: '2 000 个 OTT 平台',
    join: '和',
    web: '数十亿网站',
    outro: '，我们的技术将每块屏幕变为互动销售点。',
  },
  id: {
    intro: 'Skoleom Group merevolusi ',
    economy: 'ekonomi digital',
    mid: ' dengan memungkinkan pembelian instan di jantung konten audiovisual. Terhubung ke lebih dari ',
    ott: '2 000 platform OTT',
    join: ' dan ',
    web: 'miliaran situs web',
    outro: ', teknologi kami mengubah setiap layar menjadi titik penjualan interaktif.',
  },
  ru: {
    intro: 'Skoleom Group революционизирует ',
    economy: 'цифровую экономику',
    mid: ', позволяя мгновенные покупки внутри аудиовизуального контента. Подключена к более чем ',
    ott: '2 000 OTT-платформам',
    join: ' и ',
    web: 'миллиардам сайтов',
    outro: ' — наша технология превращает каждый экран в интерактивную точку продаж.',
  },
  sw: {
    intro: 'Skoleom Group inabadilisha ',
    economy: 'uchumi wa kidijitali',
    mid: ' kwa kuwezesha ununuzi wa papo hapo katika maudhui ya sauti na picha. Imeunganishwa na zaidi ya ',
    ott: 'majukwaa 2 000 ya OTT',
    join: ' na ',
    web: 'mabilioni ya tovuti',
    outro: ', teknolojia yetu hubadilisha kila skrini kuwa sehemu ya mauzo shirikishi.',
  },
  de: {
    intro: 'Die Skoleom-Gruppe revolutioniert ',
    economy: 'die digitale Wirtschaft',
    mid: ', indem sie sofortiges Einkaufen direkt aus audiovisuellen Inhalten ermöglicht. Verbunden mit mehr als ',
    ott: '2 000 OTT-Plattformen',
    join: ' und ',
    web: 'Milliarden von Websites',
    outro: ', verwandelt unsere Technologie jeden Bildschirm in einen interaktiven Point of Sale.',
  },
  nl: {
    intro: 'Skoleom Group revolutioneert de ',
    economy: 'digitale economie',
    mid: ' door directe aankopen mogelijk te maken vanuit het hart van audiovisuele content. Verbonden met meer dan ',
    ott: '2 000 OTT-platformen',
    join: ' en ',
    web: 'miljarden websites',
    outro: ', transformeert onze technologie elk scherm in een interactief verkooppunt.',
  },
  it: {
    intro: "Skoleom Group rivoluziona l'",
    economy: 'economia digitale',
    mid: " consentendo l'acquisto istantaneo direttamente nei contenuti audiovisivi. Connesso a più di ",
    ott: '2 000 piattaforme OTT',
    join: ' e a ',
    web: 'miliardi di siti web',
    outro: ', la nostra tecnologia trasforma ogni schermo in un punto vendita interattivo.',
  },
};

export const homeStats = {
  fr: 'pages Audiovisual Store par boutique.',
  en: 'Audiovisual Store pages per shop.',
  es: 'páginas Audiovisual Store por tienda.',
  ar: 'صفحة Audiovisual Store لكل متجر.',
  pt: 'páginas Audiovisual Store por loja.',
  hi: 'प्रति दुकान Audiovisual Store पेज।',
  zh: '每家店铺的 Audiovisual Store 页面。',
  id: 'halaman Audiovisual Store per toko.',
  ru: 'страниц Audiovisual Store на магазин.',
  sw: 'kurasa za Audiovisual Store kwa kila duka.',
};

/** Bloc `public` complet (stores, howItWorks, technology) */
export const publicBundles = {
  fr: {
    stores: {
      hero: {
        titleLine1: 'Découvrez nos',
        titleLine2: 'Boutiques audiovisuelles',
        subtitle:
          'Un écosystème immersif. Plus de 50 applications web. Une seule limite : votre imagination.',
      },
      search: {
        placeholder: 'Rechercher une boutique ou une marque',
        aria: 'Rechercher une boutique ou une marque',
      },
      sections: { official: 'Boutiques officielles', brands: 'Marques disponibles' },
      showcase: {
        kicker: 'Boutiques à la une',
        title: 'Univers phares',
        subtitle:
          'Sport, OTT, musique et gaming — un aperçu des boutiques audiovisuelles emblématiques.',
      },
      carousel: {
        kicker: 'Toutes les boutiques',
        title: 'Boutiques audiovisuelles',
        subtitle: 'Découvrez toutes les boutiques disponibles dans l’écosystème Skoleom.',
        searchPlaceholder: 'Rechercher une boutique (ex : sport, music, games...)',
        ariaLabel: 'Carrousel des boutiques audiovisuelles',
      },
    },
    howItWorks: {
      hero: {
        kicker: 'Comment ça marche',
        subtitle: 'Dans la vidéo. Au même moment. Sans friction.',
      },
      steps: {
        '01': {
          title: 'RECONNAISSANCE IA',
          desc: 'Notre IA identifie les produits, objets et moments dans n’importe quel contenu.',
        },
        '02': {
          title: 'CAPSULES INTELLIGENTES',
          desc: 'Des capsules interactives apparaissent en temps réel, en toute fluidité.',
        },
        '03': {
          title: 'UN SEUL CLIC',
          desc: 'Vous cliquez. Pas de redirection. Pas de friction. Juste une action instantanée.',
        },
        '04': {
          title: 'ACHAT EN CONTEXTE',
          desc: 'Finalisez votre achat sans quitter le contenu que vous aimez.',
        },
      },
      demo: {
        titlePrefix: 'Découvrez la',
        titleHighlight: 'magie',
        cta: 'Lancer la démo interactive',
      },
      showcase: {
        kicker: 'Univers grand public',
        title: 'Boutiques à la une',
        subtitle:
          'Découvrez des expériences interactives accessibles à tous, intégrées à vos contenus favoris.',
      },
      carousel: {
        kicker: 'Toutes les boutiques',
        title: 'Pour tous',
        subtitle: 'Toutes les boutiques grand public de l’écosystème Skoleom.',
        searchPlaceholder: 'Rechercher (ex : page, shop, magazine...)',
        ariaLabel: 'Carrousel des boutiques Pour tous',
      },
    },
    technology: {
      hero: {
        kicker: 'SeSync · La technologie',
        titlePrefix: 'Connecté à plus de',
        titleMiddle: 'et',
      },
      features: {
        seamless: "Une expérience d'achat transparente directement dans les vidéos",
        compatible: 'Compatible avec vos marques et créateurs préférés',
        secure: 'Sécurisé et conforme au RGPD',
      },
      download: "Télécharger l'extension",
      studio: {
        titleLine1: "L'outil de monétisation",
        titleLine2Prefix: 'le plus',
        titleLine2Highlight: 'puissant au monde',
        description:
          'ERP/DCM SaaS dédié à la gestion, la monétisation et l’analyse des contenus vidéo interactifs. Connecté à plus de 300 APIs. Contrôle total : ventes, audiences, campagnes, retargeting et performance produit.',
      },
    },
  },
  en: {
    stores: {
      hero: {
        titleLine1: 'Discover our',
        titleLine2: 'Audiovisual Stores',
        subtitle:
          'An immersive ecosystem. More than 50 web applications. One limit: your imagination.',
      },
      search: { placeholder: 'Search a store or brand', aria: 'Search a store or brand' },
      sections: { official: 'Official stores', brands: 'Available brands' },
      showcase: {
        kicker: 'Featured stores',
        title: 'Flagship universes',
        subtitle: 'Sport, OTT, music and gaming — a look at iconic audiovisual stores.',
      },
      carousel: {
        kicker: 'All stores',
        title: 'Audiovisual stores',
        subtitle: 'Discover all stores available in the Skoleom ecosystem.',
        searchPlaceholder: 'Search a store (e.g. sport, music, games...)',
        ariaLabel: 'Audiovisual stores carousel',
      },
    },
    howItWorks: {
      hero: {
        kicker: 'How it works',
        subtitle: 'Inside the video. At the same moment. Without friction.',
      },
      steps: {
        '01': {
          title: 'AI RECOGNITION',
          desc: 'Our AI identifies products, objects and moments inside any content.',
        },
        '02': {
          title: 'SMART CAPSULES',
          desc: 'Interactive capsules appear in real time, without interruption.',
        },
        '03': { title: 'ONE TAP', desc: 'One click. No redirect. No friction. Instant action.' },
        '04': {
          title: 'BUY IN CONTEXT',
          desc: 'Purchase completed without leaving the content you love.',
        },
      },
      demo: {
        titlePrefix: 'Discover the',
        titleHighlight: 'magic',
        cta: 'Launch the interactive demo',
      },
      showcase: {
        kicker: 'Consumer universe',
        title: 'Featured stores',
        subtitle:
          'Discover interactive experiences accessible to everyone, integrated into your favorite content.',
      },
      carousel: {
        kicker: 'All stores',
        title: 'For everyone',
        subtitle: 'All consumer stores in the Skoleom ecosystem.',
        searchPlaceholder: 'Search (e.g. page, shop, magazine...)',
        ariaLabel: 'For everyone stores carousel',
      },
    },
    technology: {
      hero: {
        kicker: 'SeSync · The technology',
        titlePrefix: 'Connected to more than',
        titleMiddle: 'and',
      },
      features: {
        seamless: 'A seamless shopping experience directly inside videos',
        compatible: 'Compatible with your favorite brands and creators',
        secure: 'Secure and GDPR compliant',
      },
      download: 'Download the extension',
      studio: {
        titleLine1: 'The monetization tool',
        titleLine2Prefix: 'the most',
        titleLine2Highlight: 'powerful in the world',
        description:
          'ERP/DCM SaaS dedicated to managing, monetizing and analyzing interactive video content. Connected to 300+ APIs. Full control: sales, audiences, campaigns, retargeting, product performance.',
      },
    },
  },
};

// Copier es depuis es.ts existant — autres langues dérivées ci-dessous
publicBundles.es = {
  stores: {
    hero: {
      titleLine1: 'Descubre nuestras',
      titleLine2: 'Tiendas audiovisuales',
      subtitle: 'Un ecosistema inmersivo. Más de 50 aplicaciones web. Un solo límite: tus ganas.',
    },
    search: { placeholder: 'Buscar una tienda o marca', aria: 'Buscar una tienda o marca' },
    sections: { official: 'Tiendas oficiales', brands: 'Marcas disponibles' },
    showcase: {
      kicker: 'Tiendas destacadas',
      title: 'Universos principales',
      subtitle: 'Deporte, OTT, música y gaming — una mirada a tiendas audiovisuales emblemáticas.',
    },
    carousel: {
      kicker: 'Todas las tiendas',
      title: 'Tiendas audiovisuales',
      subtitle: 'Descubre todas las tiendas disponibles en el ecosistema Skoleom.',
      searchPlaceholder: 'Buscar una tienda (ej: sport, music, games...)',
      ariaLabel: 'Carrusel de tiendas audiovisuales',
    },
  },
  howItWorks: {
    hero: {
      kicker: 'Cómo funciona',
      subtitle: 'Dentro del vídeo. En el mismo momento. Sin fricción.',
    },
    steps: {
      '01': {
        title: 'RECONOCIMIENTO IA',
        desc: 'Nuestra IA identifica productos, objetos y momentos dentro de cualquier contenido.',
      },
      '02': {
        title: 'CÁPSULAS INTELIGENTES',
        desc: 'Aparecen cápsulas interactivas en tiempo real, sin interrupción.',
      },
      '03': {
        title: 'UN SOLO TOQUE',
        desc: 'Un clic. Sin redirección. Sin fricción. Acción instantánea.',
      },
      '04': {
        title: 'COMPRA EN CONTEXTO',
        desc: 'Compra finalizada sin salir del contenido que amas.',
      },
    },
    demo: {
      titlePrefix: 'Descubre la',
      titleHighlight: 'magia',
      cta: 'Iniciar la demo interactiva',
    },
    showcase: {
      kicker: 'Universo para todos',
      title: 'Tiendas destacadas',
      subtitle:
        'Descubre experiencias interactivas accesibles a todos, integradas en tus contenidos favoritos.',
    },
    carousel: {
      kicker: 'Todas las tiendas',
      title: 'Para todos',
      subtitle: 'Todas las tiendas de consumo del ecosistema Skoleom.',
      searchPlaceholder: 'Buscar (ej: page, shop, magazine...)',
      ariaLabel: 'Carrusel de tiendas Para todos',
    },
  },
  technology: {
    hero: { kicker: 'SeSync · La tecnología', titlePrefix: 'Conectado a más de', titleMiddle: 'y' },
    features: {
      seamless: 'Una experiencia de compra transparente directamente en los vídeos',
      compatible: 'Compatible con tus marcas y creadores favoritos',
      secure: 'Seguro y conforme al RGPD',
    },
    download: 'Descargar la extensión',
    studio: {
      titleLine1: 'La herramienta de monetización',
      titleLine2Prefix: 'más',
      titleLine2Highlight: 'potente del mundo',
      description:
        'ERP/DCM SaaS dedicado a la gestión, monetización y análisis de contenidos de vídeo interactivos. Conectado a más de 300 APIs. Control total: ventas, audiencias, campañas, retargeting y rendimiento de producto.',
    },
  },
};

publicBundles.ar = {
  stores: {
    hero: {
      titleLine1: 'اكتشف',
      titleLine2: 'متاجرنا السمعية البصرية',
      subtitle: 'نظام بيئي غامر. أكثر من 50 تطبيق ويب. حد واحد فقط: خيالك.',
    },
    search: { placeholder: 'ابحث عن متجر أو علامة', aria: 'ابحث عن متجر أو علامة' },
    sections: { official: 'متاجر رسمية', brands: 'علامات متاحة' },
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
    hero: { kicker: 'كيف يعمل', subtitle: 'داخل الفيديو. في نفس اللحظة. بلا احتكاك.' },
    steps: {
      '01': {
        title: 'تعرّف بالذكاء الاصطناعي',
        desc: 'ذكاؤنا الاصطناعي يحدد المنتجات والأشياء واللحظات في أي محتوى.',
      },
      '02': { title: 'كبسولات ذكية', desc: 'تظهر كبسولات تفاعلية في الوقت الفعلي دون انقطاع.' },
      '03': { title: 'نقرة واحدة', desc: 'نقرة واحدة. بلا إعادة توجيه. بلا احتكاك. إجراء فوري.' },
      '04': { title: 'شراء في السياق', desc: 'أكمل الشراء دون مغادرة المحتوى الذي تحب.' },
    },
    demo: { titlePrefix: 'اكتشف', titleHighlight: 'السحر', cta: 'تشغيل العرض التفاعلي' },
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
    hero: { kicker: 'SeSync · التقنية', titlePrefix: 'متصل بأكثر من', titleMiddle: 'و' },
    features: {
      seamless: 'تجربة شراء سلسة مباشرة داخل الفيديوهات',
      compatible: 'متوافق مع علاماتك ومبدعيك المفضلين',
      secure: 'آمن ومتوافق مع RGPD',
    },
    download: 'تنزيل الإضافة',
    studio: {
      titleLine1: 'أداة تحقيق الدخل',
      titleLine2Prefix: 'الأكثر',
      titleLine2Highlight: 'قوة في العالم',
      description:
        'ERP/DCM SaaS لإدارة وتحقيق الدخل وتحليل محتوى الفيديو التفاعلي. متصل بأكثر من 300 API. تحكم كامل: مبيعات وجماهير وحملات وإعادة استهداف وأداء المنتج.',
    },
  },
};

publicBundles.pt = {
  stores: {
    hero: {
      titleLine1: 'Descubra as nossas',
      titleLine2: 'Lojas audiovisuais',
      subtitle:
        'Um ecossistema imersivo. Mais de 50 aplicações web. Um único limite: a sua imaginação.',
    },
    search: { placeholder: 'Pesquisar loja ou marca', aria: 'Pesquisar loja ou marca' },
    sections: { official: 'Lojas oficiais', brands: 'Marcas disponíveis' },
    showcase: {
      kicker: 'Lojas em destaque',
      title: 'Universos principais',
      subtitle: 'Desporto, OTT, música e gaming — lojas audiovisuais emblemáticas.',
    },
    carousel: {
      kicker: 'Todas as lojas',
      title: 'Lojas audiovisuais',
      subtitle: 'Descubra todas as lojas do ecossistema Skoleom.',
      searchPlaceholder: 'Pesquisar loja (ex: sport, music, games...)',
      ariaLabel: 'Carrossel de lojas audiovisuais',
    },
  },
  howItWorks: {
    hero: { kicker: 'Como funciona', subtitle: 'Dentro do vídeo. No mesmo momento. Sem fricção.' },
    steps: {
      '01': {
        title: 'RECONHECIMENTO IA',
        desc: 'A nossa IA identifica produtos, objetos e momentos em qualquer conteúdo.',
      },
      '02': {
        title: 'CÁPSULAS INTELIGENTES',
        desc: 'Cápsulas interativas aparecem em tempo real, sem interrupção.',
      },
      '03': {
        title: 'UM TOQUE',
        desc: 'Um clique. Sem redirecionamento. Sem fricção. Ação instantânea.',
      },
      '04': {
        title: 'COMPRA EM CONTEXTO',
        desc: 'Conclua a compra sem sair do conteúdo que adora.',
      },
    },
    demo: { titlePrefix: 'Descubra a', titleHighlight: 'magia', cta: 'Iniciar demo interativa' },
    showcase: {
      kicker: 'Universo consumidor',
      title: 'Lojas em destaque',
      subtitle: 'Experiências interativas para todos, integradas nos seus conteúdos favoritos.',
    },
    carousel: {
      kicker: 'Todas as lojas',
      title: 'Para todos',
      subtitle: 'Todas as lojas de consumo do ecossistema Skoleom.',
      searchPlaceholder: 'Pesquisar (ex: page, shop, magazine...)',
      ariaLabel: 'Carrossel de lojas Para todos',
    },
  },
  technology: {
    hero: { kicker: 'SeSync · A tecnologia', titlePrefix: 'Ligado a mais de', titleMiddle: 'e' },
    features: {
      seamless: 'Experiência de compra fluida diretamente nos vídeos',
      compatible: 'Compatível com as suas marcas e criadores favoritos',
      secure: 'Seguro e em conformidade com o RGPD',
    },
    download: 'Descarregar a extensão',
    studio: {
      titleLine1: 'A ferramenta de monetização',
      titleLine2Prefix: 'mais',
      titleLine2Highlight: 'poderosa do mundo',
      description:
        'ERP/DCM SaaS para gerir, monetizar e analisar conteúdos de vídeo interativos. Ligado a 300+ APIs. Controlo total: vendas, audiências, campanhas, retargeting e desempenho.',
    },
  },
};

publicBundles.hi = {
  stores: {
    hero: {
      titleLine1: 'हमारी',
      titleLine2: 'ऑडियोविज़ुअल स्टोर खोजें',
      subtitle: 'एक इमर्सिव इकोसिस्टम। 50+ वेब ऐप। एक सीमा: आपकी कल्पना।',
    },
    search: { placeholder: 'स्टोर या ब्रांड खोजें', aria: 'स्टोर या ब्रांड खोजें' },
    sections: { official: 'आधिकारिक स्टोर', brands: 'उपलब्ध ब्रांड' },
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
    hero: { kicker: 'यह कैसे काम करता है', subtitle: 'वीडियो के अंदर। उसी पल। बिना रुकावट।' },
    steps: {
      '01': {
        title: 'AI पहचान',
        desc: 'हमारी AI किसी भी कंटेंट में उत्पाद, वस्तुएँ और पल पहचानती है।',
      },
      '02': { title: 'स्मार्ट कैप्सूल', desc: 'इंटरैक्टिव कैप्सूल रियल टाइम में, बिना रुकावट।' },
      '03': {
        title: 'एक टैप',
        desc: 'एक क्लिक। कोई रीडायरेक्ट नहीं। कोई घर्षण नहीं। तुरंत कार्रवाई।',
      },
      '04': { title: 'संदर्भ में खरीद', desc: 'पसंदीदा कंटेंट छोड़े बिना खरीद पूरी करें।' },
    },
    demo: { titlePrefix: 'खोजें', titleHighlight: 'जादू', cta: 'इंटरैक्टिव डेमो शुरू करें' },
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
    hero: { kicker: 'SeSync · तकनीक', titlePrefix: 'से अधिक से जुड़ा', titleMiddle: 'और' },
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
};

publicBundles.zh = {
  stores: {
    hero: {
      titleLine1: '探索我们的',
      titleLine2: '视听商店',
      subtitle: '沉浸式生态系统。50+ 网页应用。唯一的限制：您的想象力。',
    },
    search: { placeholder: '搜索商店或品牌', aria: '搜索商店或品牌' },
    sections: { official: '官方商店', brands: '可用品牌' },
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
    hero: { kicker: '运作方式', subtitle: '在视频内。同一时刻。无摩擦。' },
    steps: {
      '01': { title: 'AI 识别', desc: '我们的 AI 识别任何内容中的产品、物体与时刻。' },
      '02': { title: '智能胶囊', desc: '互动胶囊实时出现，不中断观看。' },
      '03': { title: '一键购买', desc: '一次点击。无跳转。无摩擦。即时行动。' },
      '04': { title: '情境购买', desc: '无需离开您喜爱的内容即可完成购买。' },
    },
    demo: { titlePrefix: '探索', titleHighlight: '魔力', cta: '启动互动演示' },
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
    hero: { kicker: 'SeSync · 技术', titlePrefix: '连接超过', titleMiddle: '和' },
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
};

publicBundles.id = {
  stores: {
    hero: {
      titleLine1: 'Temukan',
      titleLine2: 'Toko Audiovisual kami',
      subtitle: 'Ekosistem imersif. Lebih dari 50 aplikasi web. Satu batas: imajinasi Anda.',
    },
    search: { placeholder: 'Cari toko atau merek', aria: 'Cari toko atau merek' },
    sections: { official: 'Toko resmi', brands: 'Merek tersedia' },
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
    demo: { titlePrefix: 'Temukan', titleHighlight: 'keajaiban', cta: 'Luncurkan demo interaktif' },
    showcase: {
      kicker: 'Alam konsumen',
      title: 'Toko unggulan',
      subtitle: 'Pengalaman interaktif untuk semua orang, terintegrasi dalam konten favorit Anda.',
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
};

publicBundles.ru = {
  stores: {
    hero: {
      titleLine1: 'Откройте наши',
      titleLine2: 'Аудиовизуальные магазины',
      subtitle: 'Иммерсивная экосистема. Более 50 веб-приложений. Один предел: ваше воображение.',
    },
    search: { placeholder: 'Поиск магазина или бренда', aria: 'Поиск магазина или бренда' },
    sections: { official: 'Официальные магазины', brands: 'Доступные бренды' },
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
    hero: { kicker: 'Как это работает', subtitle: 'Внутри видео. В тот же момент. Без трения.' },
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
    demo: { titlePrefix: 'Откройте', titleHighlight: 'магию', cta: 'Запустить интерактивное демо' },
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
};

publicBundles.sw = {
  stores: {
    hero: {
      titleLine1: 'Gundua',
      titleLine2: 'Maduka yetu ya sauti na picha',
      subtitle: 'Mfumo wa ikolojia wa kina. Programu 50+ za wavuti. Kikomo kimoja: mawazo yako.',
    },
    search: { placeholder: 'Tafuta duka au chapa', aria: 'Tafuta duka au chapa' },
    sections: { official: 'Maduka rasmi', brands: 'Chapa zinazopatikana' },
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
    demo: { titlePrefix: 'Gundua', titleHighlight: 'uchawi', cta: 'Anzisha demo ya maingiliano' },
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
};

for (const lang of ['de', 'it', 'nl']) {
  publicBundles[lang] = {
    ...publicBundles.en,
    stores: euPublicStores[lang],
  };
}

heroTaglines.de = euHeroTaglines.de;
heroTaglines.it = euHeroTaglines.it;
heroTaglines.nl = euHeroTaglines.nl;
homeDescriptions.de = euHomeDescriptions.de;
homeDescriptions.it = euHomeDescriptions.it;
homeDescriptions.nl = euHomeDescriptions.nl;
appStrings.de = euApp.de;
appStrings.it = euApp.it;
appStrings.nl = euApp.nl;
