/**
 * Traductions de la page Boutiques (réplique React de footer-pages/boutiques.html).
 * Repli FR par défaut. Construction par étapes : hero d'abord.
 */
export interface BoutiquesHeroT {
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  sub: string;
  ctaExplore: string;
  ctaCategory: string;
  statVideos: string;
  statPeople: string;
  statCountries: string;
  statProducts: string;
}

export const BOUTIQUES_HERO_I18N: Record<string, BoutiquesHeroT> = {
  fr: {
    titleLine1: 'Tout ce que',
    titleLine2: 'vous regardez',
    titleLine3: "s'achète.",
    sub: "Skoleom transforme chaque vidéo en boutique interactive. Touchez n'importe quoi. Possédez tout. Instantanément. Sans jamais quitter le contenu.",
    ctaExplore: 'Explorer les boutiques',
    ctaCategory: 'Univers par catégorie',
    statVideos: 'Vidéos skoléomisées/jour',
    statPeople: 'Personnes exposées',
    statCountries: 'Pays connectés',
    statProducts: 'Produits intégrés',
  },
  en: {
    titleLine1: 'Everything you',
    titleLine2: 'watch',
    titleLine3: 'is shoppable.',
    sub: 'Skoleom turns every video into an interactive store. Touch anything. Own everything. Instantly. Without ever leaving the content.',
    ctaExplore: 'Explore stores',
    ctaCategory: 'Universe by category',
    statVideos: 'Skoleomized videos/day',
    statPeople: 'People reached',
    statCountries: 'Connected countries',
    statProducts: 'Integrated products',
  },
  es: {
    titleLine1: 'Todo lo que',
    titleLine2: 'ves',
    titleLine3: 'se compra.',
    sub: 'Skoleom convierte cada vídeo en una tienda interactiva. Toca cualquier cosa. Posee todo. Al instante. Sin salir nunca del contenido.',
    ctaExplore: 'Explorar las tiendas',
    ctaCategory: 'Universos por categoría',
    statVideos: 'Vídeos skoleomizados/día',
    statPeople: 'Personas alcanzadas',
    statCountries: 'Países conectados',
    statProducts: 'Productos integrados',
  },
  de: {
    titleLine1: 'Alles, was du',
    titleLine2: 'ansiehst,',
    titleLine3: 'ist käuflich.',
    sub: 'Skoleom verwandelt jedes Video in einen interaktiven Shop. Berühre alles. Besitze alles. Sofort. Ohne den Inhalt je zu verlassen.',
    ctaExplore: 'Shops entdecken',
    ctaCategory: 'Universen nach Kategorie',
    statVideos: 'skoleomisierte Videos/Tag',
    statPeople: 'Erreichte Menschen',
    statCountries: 'Verbundene Länder',
    statProducts: 'Integrierte Produkte',
  },
  it: {
    titleLine1: 'Tutto ciò che',
    titleLine2: 'guardi',
    titleLine3: 'è acquistabile.',
    sub: 'Skoleom trasforma ogni video in un negozio interattivo. Tocca qualsiasi cosa. Possiedi tutto. Istantaneamente. Senza mai lasciare il contenuto.',
    ctaExplore: 'Esplora i negozi',
    ctaCategory: 'Universi per categoria',
    statVideos: 'video skoleomizzati/giorno',
    statPeople: 'Persone raggiunte',
    statCountries: 'Paesi connessi',
    statProducts: 'Prodotti integrati',
  },
  pt: {
    titleLine1: 'Tudo o que',
    titleLine2: 'vês',
    titleLine3: 'é comprável.',
    sub: 'A Skoleom transforma cada vídeo numa loja interativa. Toca em tudo. Possui tudo. Instantaneamente. Sem nunca sair do conteúdo.',
    ctaExplore: 'Explorar as lojas',
    ctaCategory: 'Universos por categoria',
    statVideos: 'vídeos skoleomizados/dia',
    statPeople: 'Pessoas alcançadas',
    statCountries: 'Países conectados',
    statProducts: 'Produtos integrados',
  },
  nl: {
    titleLine1: 'Alles wat je',
    titleLine2: 'bekijkt,',
    titleLine3: 'is te koop.',
    sub: 'Skoleom maakt van elke video een interactieve winkel. Raak alles aan. Bezit alles. Direct. Zonder ooit de content te verlaten.',
    ctaExplore: 'Winkels ontdekken',
    ctaCategory: 'Universa per categorie',
    statVideos: 'geskoleomiseerde video’s/dag',
    statPeople: 'Bereikte mensen',
    statCountries: 'Verbonden landen',
    statProducts: 'Geïntegreerde producten',
  },
  ru: {
    titleLine1: 'Всё, что вы',
    titleLine2: 'смотрите,',
    titleLine3: 'можно купить.',
    sub: 'Skoleom превращает каждое видео в интерактивный магазин. Касайтесь чего угодно. Владейте всем. Мгновенно. Не покидая контент.',
    ctaExplore: 'Просмотр магазинов',
    ctaCategory: 'Вселенные по категориям',
    statVideos: '«скулеом»-видео/день',
    statPeople: 'Охваченные люди',
    statCountries: 'Подключённые страны',
    statProducts: 'Интегрированные товары',
  },
  ar: {
    titleLine1: 'كل ما',
    titleLine2: 'تشاهده',
    titleLine3: 'قابل للشراء.',
    sub: 'تحوّل Skoleom كل فيديو إلى متجر تفاعلي. المس أي شيء. امتلك كل شيء. فوراً. دون مغادرة المحتوى أبداً.',
    ctaExplore: 'استكشاف المتاجر',
    ctaCategory: 'عوالم حسب الفئة',
    statVideos: 'فيديوهات مُسكلَمة/يوم',
    statPeople: 'أشخاص تم الوصول إليهم',
    statCountries: 'دول متصلة',
    statProducts: 'منتجات مدمجة',
  },
  hi: {
    titleLine1: 'जो कुछ आप',
    titleLine2: 'देखते हैं',
    titleLine3: 'वह खरीदने योग्य है।',
    sub: 'Skoleom हर वीडियो को एक इंटरैक्टिव स्टोर में बदल देता है। कुछ भी छुएँ। सब कुछ पाएँ। तुरंत। कंटेंट छोड़े बिना।',
    ctaExplore: 'स्टोर एक्सप्लोर करें',
    ctaCategory: 'श्रेणी के अनुसार यूनिवर्स',
    statVideos: 'स्कोलियमाइज़्ड वीडियो/दिन',
    statPeople: 'पहुँचे लोग',
    statCountries: 'जुड़े देश',
    statProducts: 'एकीकृत उत्पाद',
  },
  zh: {
    titleLine1: '你所看的',
    titleLine2: '一切',
    titleLine3: '皆可购买。',
    sub: 'Skoleom 将每个视频变成互动商店。触碰任意之物，即刻拥有一切，无需离开内容。',
    ctaExplore: '探索商店',
    ctaCategory: '按类别浏览宇宙',
    statVideos: 'Skoleom 化视频/天',
    statPeople: '触达人数',
    statCountries: '连接国家',
    statProducts: '集成商品',
  },
  id: {
    titleLine1: 'Semua yang Anda',
    titleLine2: 'tonton',
    titleLine3: 'bisa dibeli.',
    sub: 'Skoleom mengubah setiap video menjadi toko interaktif. Sentuh apa saja. Miliki semuanya. Seketika. Tanpa pernah meninggalkan konten.',
    ctaExplore: 'Jelajahi toko',
    ctaCategory: 'Semesta menurut kategori',
    statVideos: 'video terskoleomisasi/hari',
    statPeople: 'Orang terjangkau',
    statCountries: 'Negara terhubung',
    statProducts: 'Produk terintegrasi',
  },
  sw: {
    titleLine1: 'Kila',
    titleLine2: 'unachotazama',
    titleLine3: 'kinanunulika.',
    sub: 'Skoleom hubadilisha kila video kuwa duka shirikishi. Gusa chochote. Miliki kila kitu. Papo hapo. Bila kuondoka kwenye maudhui.',
    ctaExplore: 'Gundua maduka',
    ctaCategory: 'Ulimwengu kwa kategoria',
    statVideos: 'video za skoleom/siku',
    statPeople: 'Watu waliofikiwa',
    statCountries: 'Nchi zilizounganishwa',
    statProducts: 'Bidhaa zilizounganishwa',
  },
};

export function getBoutiquesHero(lang: string): BoutiquesHeroT {
  return BOUTIQUES_HERO_I18N[lang] ?? BOUTIQUES_HERO_I18N.fr;
}

/* ── Sections : populaires, catalogue, Watch.Touch.Buy, CTA « launch » ── */
export interface BoutiquesSectionsT {
  featuredLabel: string;
  featuredTitle: string;
  seeAll: string;
  universeLabel: string;
  universeTitle: string;
  hiwKicker: string;
  watch: string;
  touch: string;
  buy: string;
  earn: string;
  launchLabel: string;
  launchTitle: string;
  launchSub: string;
  launchCreate: string;
  launchPricing: string;
}

export const BOUTIQUES_SECTIONS_I18N: Record<string, BoutiquesSectionsT> = {
  fr: {
    featuredLabel: 'BOUTIQUES EN VEDETTE',
    featuredTitle: 'Les plus populaires maintenant',
    seeAll: 'Voir tout',
    universeLabel: 'UNIVERS',
    universeTitle: 'Toutes les boutiques officielles',
    hiwKicker: 'COMMENT ÇA MARCHE',
    watch:
      "L'utilisateur regarde un live, un replay, une story, un film ou un extrait TV sur n'importe quelle plateforme connectée à Skoleom (+2 000 OTT, +1B sites).",
    touch:
      "L'IA Skoleom reconnaît l'objet dans la vidéo et affiche une capsule interactive à la demande. Ajout au panier intégré, sans pause du flux.",
    buy: 'SeSync® et Skoleom Pay exécutent le paiement dans la vidéo. Vous reprenez le contenu au même timecode — la transaction se fait en arrière-plan, invisible.',
    earn: 'Le créateur, le propriétaire de la boutique et Skoleom se partagent les revenus en temps réel via le Token et Monetizer Studio.',
    launchLabel: 'POUR LES MARQUES & CRÉATEURS',
    launchTitle: 'Lancez votre boutique audiovisuelle',
    launchSub:
      "Rejoignez l'écosystème Skoleom et transformez vos contenus en machine à vendre. 25 vidéos/mois × 25 produits = 625 produits distribués dans les contenus les plus vus au monde.",
    launchCreate: 'Créer ma boutique',
    launchPricing: 'Voir les tarifs',
  },
  en: {
    featuredLabel: 'FEATURED STORES',
    featuredTitle: 'Most popular right now',
    seeAll: 'See all',
    universeLabel: 'UNIVERSE',
    universeTitle: 'All official stores',
    hiwKicker: 'HOW IT WORKS',
    watch:
      'You watch a live, a replay, a story, a film or a TV clip on any platform connected to Skoleom (2,000+ OTT, 1B+ sites).',
    touch:
      'Skoleom’s AI recognizes the product in the video and shows an interactive capsule on demand. Add to cart built in, without pausing the stream.',
    buy: 'SeSync® and Skoleom Pay process the payment inside the video. You resume the content at the same timecode — the transaction runs in the background, invisibly.',
    earn: 'The creator, the store owner and Skoleom share the revenue in real time via the Token and Monetizer Studio.',
    launchLabel: 'FOR BRANDS & CREATORS',
    launchTitle: 'Launch your audiovisual store',
    launchSub:
      'Join the Skoleom ecosystem and turn your content into a selling machine. 25 videos/month × 25 products = 625 products distributed across the most-watched content in the world.',
    launchCreate: 'Create my store',
    launchPricing: 'See pricing',
  },
  es: {
    featuredLabel: 'TIENDAS DESTACADAS',
    featuredTitle: 'Las más populares ahora',
    seeAll: 'Ver todo',
    universeLabel: 'UNIVERSO',
    universeTitle: 'Todas las tiendas oficiales',
    hiwKicker: 'CÓMO FUNCIONA',
    watch:
      'Ves un directo, una repetición, una historia, una película o un clip de TV en cualquier plataforma conectada a Skoleom (más de 2000 OTT, +1B de sitios).',
    touch:
      'La IA de Skoleom reconoce el producto en el vídeo y muestra una cápsula interactiva a demanda. Añadir al carrito integrado, sin pausar el vídeo.',
    buy: 'SeSync® y Skoleom Pay ejecutan el pago dentro del vídeo. Retomas el contenido en el mismo punto: la transacción se realiza en segundo plano, invisible.',
    earn: 'El creador, el dueño de la tienda y Skoleom comparten los ingresos en tiempo real mediante el Token y Monetizer Studio.',
    launchLabel: 'PARA MARCAS Y CREADORES',
    launchTitle: 'Lanza tu tienda audiovisual',
    launchSub:
      'Únete al ecosistema Skoleom y convierte tu contenido en una máquina de ventas. 25 vídeos/mes × 25 productos = 625 productos distribuidos en el contenido más visto del mundo.',
    launchCreate: 'Crear mi tienda',
    launchPricing: 'Ver precios',
  },
  de: {
    featuredLabel: 'EMPFOHLENE SHOPS',
    featuredTitle: 'Gerade am beliebtesten',
    seeAll: 'Alle ansehen',
    universeLabel: 'UNIVERSUM',
    universeTitle: 'Alle offiziellen Shops',
    hiwKicker: 'SO FUNKTIONIERT ES',
    watch:
      'Du siehst einen Live-Stream, eine Wiederholung, eine Story, einen Film oder einen TV-Clip auf jeder mit Skoleom verbundenen Plattform (2.000+ OTT, 1 Mrd.+ Websites).',
    touch:
      'Die KI von Skoleom erkennt das Produkt im Video und zeigt auf Wunsch eine interaktive Kapsel. Integrierter Warenkorb, ohne den Stream zu pausieren.',
    buy: 'SeSync® und Skoleom Pay wickeln die Zahlung im Video ab. Du setzt den Inhalt am selben Timecode fort — die Transaktion läuft unsichtbar im Hintergrund.',
    earn: 'Creator, Shop-Inhaber und Skoleom teilen sich die Einnahmen in Echtzeit über das Token und Monetizer Studio.',
    launchLabel: 'FÜR MARKEN & CREATOR',
    launchTitle: 'Starte deinen audiovisuellen Shop',
    launchSub:
      'Werde Teil des Skoleom-Ökosystems und mache deine Inhalte zur Verkaufsmaschine. 25 Videos/Monat × 25 Produkte = 625 Produkte, verteilt in den meistgesehenen Inhalten der Welt.',
    launchCreate: 'Meinen Shop erstellen',
    launchPricing: 'Preise ansehen',
  },
  it: {
    featuredLabel: 'NEGOZI IN EVIDENZA',
    featuredTitle: 'I più popolari ora',
    seeAll: 'Vedi tutto',
    universeLabel: 'UNIVERSO',
    universeTitle: 'Tutti i negozi ufficiali',
    hiwKicker: 'COME FUNZIONA',
    watch:
      'Guardi un live, un replay, una storia, un film o una clip TV su qualsiasi piattaforma connessa a Skoleom (oltre 2.000 OTT, +1B di siti).',
    touch:
      'L’IA di Skoleom riconosce il prodotto nel video e mostra una capsula interattiva su richiesta. Aggiunta al carrello integrata, senza mettere in pausa lo streaming.',
    buy: 'SeSync® e Skoleom Pay eseguono il pagamento nel video. Riprendi il contenuto allo stesso timecode — la transazione avviene in background, invisibile.',
    earn: 'Il creator, il proprietario del negozio e Skoleom condividono i ricavi in tempo reale tramite il Token e Monetizer Studio.',
    launchLabel: 'PER BRAND E CREATOR',
    launchTitle: 'Lancia il tuo negozio audiovisivo',
    launchSub:
      'Unisciti all’ecosistema Skoleom e trasforma i tuoi contenuti in una macchina di vendita. 25 video/mese × 25 prodotti = 625 prodotti distribuiti nei contenuti più visti al mondo.',
    launchCreate: 'Crea il mio negozio',
    launchPricing: 'Vedi i prezzi',
  },
  pt: {
    featuredLabel: 'LOJAS EM DESTAQUE',
    featuredTitle: 'As mais populares agora',
    seeAll: 'Ver tudo',
    universeLabel: 'UNIVERSO',
    universeTitle: 'Todas as lojas oficiais',
    hiwKicker: 'COMO FUNCIONA',
    watch:
      'Vês um direto, uma repetição, uma story, um filme ou um clip de TV em qualquer plataforma ligada à Skoleom (mais de 2000 OTT, +1B de sites).',
    touch:
      'A IA da Skoleom reconhece o produto no vídeo e mostra uma cápsula interativa a pedido. Adicionar ao carrinho integrado, sem pausar o vídeo.',
    buy: 'O SeSync® e o Skoleom Pay executam o pagamento dentro do vídeo. Retomas o conteúdo no mesmo ponto — a transação ocorre em segundo plano, invisível.',
    earn: 'O criador, o dono da loja e a Skoleom partilham as receitas em tempo real através do Token e do Monetizer Studio.',
    launchLabel: 'PARA MARCAS E CRIADORES',
    launchTitle: 'Lança a tua loja audiovisual',
    launchSub:
      'Junta-te ao ecossistema Skoleom e transforma o teu conteúdo numa máquina de vendas. 25 vídeos/mês × 25 produtos = 625 produtos distribuídos no conteúdo mais visto do mundo.',
    launchCreate: 'Criar a minha loja',
    launchPricing: 'Ver preços',
  },
  nl: {
    featuredLabel: 'UITGELICHTE WINKELS',
    featuredTitle: 'Nu het populairst',
    seeAll: 'Alles bekijken',
    universeLabel: 'UNIVERSUM',
    universeTitle: 'Alle officiële winkels',
    hiwKicker: 'HOE HET WERKT',
    watch:
      'Je bekijkt een live, een replay, een story, een film of een tv-fragment op elk platform dat met Skoleom is verbonden (2.000+ OTT, 1B+ sites).',
    touch:
      'De AI van Skoleom herkent het product in de video en toont op verzoek een interactieve capsule. Ingebouwd toevoegen aan winkelwagen, zonder de stream te pauzeren.',
    buy: 'SeSync® en Skoleom Pay verwerken de betaling in de video. Je hervat de content op dezelfde timecode — de transactie verloopt onzichtbaar op de achtergrond.',
    earn: 'De creator, de winkeleigenaar en Skoleom delen de inkomsten in realtime via het Token en Monetizer Studio.',
    launchLabel: 'VOOR MERKEN & CREATORS',
    launchTitle: 'Lanceer je audiovisuele winkel',
    launchSub:
      'Sluit je aan bij het Skoleom-ecosysteem en maak van je content een verkoopmachine. 25 video’s/maand × 25 producten = 625 producten verspreid over de meest bekeken content ter wereld.',
    launchCreate: 'Mijn winkel maken',
    launchPricing: 'Prijzen bekijken',
  },
  ru: {
    featuredLabel: 'РЕКОМЕНДУЕМЫЕ МАГАЗИНЫ',
    featuredTitle: 'Самые популярные сейчас',
    seeAll: 'Смотреть все',
    universeLabel: 'ВСЕЛЕННАЯ',
    universeTitle: 'Все официальные магазины',
    hiwKicker: 'КАК ЭТО РАБОТАЕТ',
    watch:
      'Вы смотрите трансляцию, повтор, сторис, фильм или ТВ-фрагмент на любой платформе, подключённой к Skoleom (2000+ OTT, 1 млрд+ сайтов).',
    touch:
      'ИИ Skoleom распознаёт товар в видео и по запросу показывает интерактивную капсулу. Встроенное добавление в корзину — без паузы видео.',
    buy: 'SeSync® и Skoleom Pay проводят оплату внутри видео. Вы продолжаете контент с того же места — транзакция идёт в фоне, незаметно.',
    earn: 'Автор, владелец магазина и Skoleom делят доход в реальном времени через Token и Monetizer Studio.',
    launchLabel: 'ДЛЯ БРЕНДОВ И АВТОРОВ',
    launchTitle: 'Запустите свой аудиовизуальный магазин',
    launchSub:
      'Присоединяйтесь к экосистеме Skoleom и превратите контент в машину продаж. 25 видео/месяц × 25 товаров = 625 товаров в самом просматриваемом контенте мира.',
    launchCreate: 'Создать магазин',
    launchPricing: 'Посмотреть тарифы',
  },
  ar: {
    featuredLabel: 'متاجر مميّزة',
    featuredTitle: 'الأكثر رواجاً الآن',
    seeAll: 'عرض الكل',
    universeLabel: 'العالم',
    universeTitle: 'كل المتاجر الرسمية',
    hiwKicker: 'كيف يعمل',
    watch:
      'تشاهد بثاً مباشراً أو إعادة أو ستوري أو فيلماً أو مقطعاً تلفزيونياً على أي منصة متصلة بـ Skoleom (أكثر من 2000 OTT، +1 مليار موقع).',
    touch:
      'يتعرّف ذكاء Skoleom على المنتج في الفيديو ويعرض كبسولة تفاعلية عند الطلب. إضافة إلى السلة مدمجة، دون إيقاف البث.',
    buy: 'ينفّذ SeSync® وSkoleom Pay الدفع داخل الفيديو. تستأنف المحتوى من النقطة نفسها — تتم المعاملة في الخلفية دون أن تُرى.',
    earn: 'يتقاسم المنشئ ومالك المتجر وSkoleom الإيرادات في الوقت الفعلي عبر Token وMonetizer Studio.',
    launchLabel: 'للعلامات والمبدعين',
    launchTitle: 'أطلق متجرك السمعي البصري',
    launchSub:
      'انضم إلى منظومة Skoleom وحوّل محتواك إلى آلة بيع. 25 فيديو/شهر × 25 منتجاً = 625 منتجاً موزّعاً في أكثر المحتويات مشاهدة في العالم.',
    launchCreate: 'إنشاء متجري',
    launchPricing: 'عرض الأسعار',
  },
  hi: {
    featuredLabel: 'फ़ीचर्ड स्टोर',
    featuredTitle: 'अभी सबसे लोकप्रिय',
    seeAll: 'सभी देखें',
    universeLabel: 'यूनिवर्स',
    universeTitle: 'सभी आधिकारिक स्टोर',
    hiwKicker: 'यह कैसे काम करता है',
    watch:
      'आप किसी भी Skoleom-कनेक्टेड प्लेटफ़ॉर्म पर लाइव, रीप्ले, स्टोरी, फ़िल्म या टीवी क्लिप देखते हैं (2,000+ OTT, 1B+ साइटें)।',
    touch:
      'Skoleom का AI वीडियो में उत्पाद पहचानता है और मांग पर इंटरैक्टिव कैप्सूल दिखाता है। बिल्ट-इन कार्ट में जोड़ें, स्ट्रीम रोके बिना।',
    buy: 'SeSync® और Skoleom Pay वीडियो के भीतर भुगतान करते हैं। आप उसी टाइमकोड पर कंटेंट जारी रखते हैं — लेन-देन पृष्ठभूमि में, अदृश्य।',
    earn: 'क्रिएटर, स्टोर मालिक और Skoleom Token व Monetizer Studio के ज़रिए रियल-टाइम में राजस्व साझा करते हैं।',
    launchLabel: 'ब्रांड्स और क्रिएटर्स के लिए',
    launchTitle: 'अपना ऑडियोविज़ुअल स्टोर लॉन्च करें',
    launchSub:
      'Skoleom इकोसिस्टम से जुड़ें और अपने कंटेंट को बिक्री मशीन बनाएँ। 25 वीडियो/माह × 25 उत्पाद = दुनिया के सबसे ज़्यादा देखे जाने वाले कंटेंट में 625 उत्पाद।',
    launchCreate: 'मेरा स्टोर बनाएँ',
    launchPricing: 'मूल्य देखें',
  },
  zh: {
    featuredLabel: '精选商店',
    featuredTitle: '当下最受欢迎',
    seeAll: '查看全部',
    universeLabel: '宇宙',
    universeTitle: '所有官方商店',
    hiwKicker: '运作方式',
    watch:
      '你在任意接入 Skoleom 的平台上观看直播、回放、快拍、电影或电视片段（2000+ OTT，10 亿+ 网站）。',
    touch: 'Skoleom 的 AI 识别视频中的商品，并按需显示互动胶囊。内置加入购物车，无需暂停视频。',
    buy: 'SeSync® 与 Skoleom Pay 在视频内完成支付。你从同一时间点继续观看——交易在后台无形进行。',
    earn: '创作者、商店店主与 Skoleom 通过 Token 和 Monetizer Studio 实时分成。',
    launchLabel: '面向品牌与创作者',
    launchTitle: '开设你的视听商店',
    launchSub:
      '加入 Skoleom 生态系统，让你的内容成为销售机器。每月 25 条视频 × 25 件商品 = 625 件商品，分发到全球观看量最高的内容中。',
    launchCreate: '创建我的商店',
    launchPricing: '查看价格',
  },
  id: {
    featuredLabel: 'TOKO UNGGULAN',
    featuredTitle: 'Paling populer sekarang',
    seeAll: 'Lihat semua',
    universeLabel: 'SEMESTA',
    universeTitle: 'Semua toko resmi',
    hiwKicker: 'CARA KERJANYA',
    watch:
      'Anda menonton siaran langsung, tayangan ulang, story, film, atau klip TV di platform mana pun yang terhubung ke Skoleom (2.000+ OTT, 1M+ situs).',
    touch:
      'AI Skoleom mengenali produk dalam video dan menampilkan kapsul interaktif sesuai permintaan. Tambah ke keranjang bawaan, tanpa menjeda tayangan.',
    buy: 'SeSync® dan Skoleom Pay memproses pembayaran di dalam video. Anda melanjutkan konten pada timecode yang sama — transaksi berjalan di latar, tak terlihat.',
    earn: 'Kreator, pemilik toko, dan Skoleom berbagi pendapatan secara real-time melalui Token dan Monetizer Studio.',
    launchLabel: 'UNTUK MEREK & KREATOR',
    launchTitle: 'Luncurkan toko audiovisual Anda',
    launchSub:
      'Bergabunglah dengan ekosistem Skoleom dan ubah konten Anda menjadi mesin penjualan. 25 video/bulan × 25 produk = 625 produk yang tersebar di konten paling banyak ditonton di dunia.',
    launchCreate: 'Buat toko saya',
    launchPricing: 'Lihat harga',
  },
  sw: {
    featuredLabel: 'MADUKA YALIYOANGAZIWA',
    featuredTitle: 'Maarufu zaidi sasa',
    seeAll: 'Ona yote',
    universeLabel: 'ULIMWENGU',
    universeTitle: 'Maduka yote rasmi',
    hiwKicker: 'JINSI INAVYOFANYA KAZI',
    watch:
      'Unatazama matangazo ya moja kwa moja, marudio, story, filamu au klipu ya TV kwenye jukwaa lolote lililounganishwa na Skoleom (OTT 2,000+, tovuti 1B+).',
    touch:
      'AI ya Skoleom hutambua bidhaa kwenye video na huonyesha kapsuli shirikishi unapotaka. Ongeza kwenye kikapu kilichojengwa ndani, bila kusitisha video.',
    buy: 'SeSync® na Skoleom Pay hutekeleza malipo ndani ya video. Unaendelea na maudhui kwenye sehemu ileile — muamala hufanyika nyuma, bila kuonekana.',
    earn: 'Mbunifu, mmiliki wa duka na Skoleom hugawana mapato kwa wakati halisi kupitia Token na Monetizer Studio.',
    launchLabel: 'KWA CHAPA NA WABUNIFU',
    launchTitle: 'Zindua duka lako la kusikia na kuona',
    launchSub:
      'Jiunge na mfumo-ikolojia wa Skoleom na ugeuze maudhui yako kuwa mashine ya mauzo. Video 25/mwezi × bidhaa 25 = bidhaa 625 zilizosambazwa katika maudhui yanayotazamwa zaidi duniani.',
    launchCreate: 'Tengeneza duka langu',
    launchPricing: 'Ona bei',
  },
};

export function getBoutiquesSections(lang: string): BoutiquesSectionsT {
  return BOUTIQUES_SECTIONS_I18N[lang] ?? BOUTIQUES_SECTIONS_I18N.fr;
}
