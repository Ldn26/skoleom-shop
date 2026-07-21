/**
 * Traductions des sous-cartes des showcases (FeatureBlock) : Pour tous & Groupe.
 * On ne traduit ici que title + intro (ce qu'affiche FeatureBlock). Le corps
 * complet des sous-pages (sections) est traité ailleurs. Repli FR automatique.
 */
export interface ShowcaseCardT {
  title: string;
  intro: string;
}

/** title + intro par langue, par id de page. */
export const SHOWCASE_CARD_I18N: Record<string, Record<string, ShowcaseCardT>> = {
  en: {
    'comment-ca-marche': {
      title: 'How it works',
      intro:
        'Watch. Touch. Buy.® — skoleomization in four steps: watch content, touch a product, buy without leaving the video, earn cashback.',
    },
    'regarder-acheter': {
      title: 'Watch and buy',
      intro:
        'Any content becomes a store. Wherever you watch, Skoleom naturally turns every viewing into a buying opportunity.',
    },
    cashback: {
      title: 'Cashback & rewards',
      intro:
        'The more you buy, the more you earn. The Skoleom loyalty program rewards every purchase — automatic, instant cashback, usable directly in your Wallet.',
    },
    wallet: {
      title: 'Skoleom Wallet',
      intro:
        'Your money, with you everywhere. The Skoleom Wallet centralizes your cashback, payments and benefits in one place — top up, pay, cash out, in real time.',
    },
    securite: {
      title: 'Security & privacy',
      intro:
        'Your trust, our absolute priority. Bank-grade security infrastructure — AI, blockchain and end-to-end encryption protect every transaction and every piece of data.',
    },
  },
  es: {
    'comment-ca-marche': {
      title: 'Cómo funciona',
      intro:
        'Watch. Touch. Buy.® — la skoleomización en cuatro pasos: ver un contenido, tocar un producto, comprar sin salir del vídeo y acumular cashback.',
    },
    'regarder-acheter': {
      title: 'Ver y comprar',
      intro:
        'Todo contenido se convierte en una tienda. Dondequiera que mires, Skoleom transforma cada visionado en una oportunidad de compra, de forma natural.',
    },
    cashback: {
      title: 'Cashback y recompensas',
      intro:
        'Cuanto más compras, más ganas. El programa de fidelidad de Skoleom recompensa cada compra: cashback automático e instantáneo, utilizable directamente en tu Wallet.',
    },
    wallet: {
      title: 'Skoleom Wallet',
      intro:
        'Tu dinero, contigo en todas partes. El Skoleom Wallet centraliza tus cashbacks, pagos y ventajas en un solo lugar: recarga, paga y cobra, en tiempo real.',
    },
    securite: {
      title: 'Seguridad y privacidad',
      intro:
        'Tu confianza, nuestra prioridad absoluta. Una infraestructura de seguridad de nivel bancario: IA, blockchain y cifrado de extremo a extremo protegen cada transacción y cada dato.',
    },
  },
  de: {
    'comment-ca-marche': {
      title: 'So funktioniert es',
      intro:
        'Watch. Touch. Buy.® — Skoleomisierung in vier Schritten: Inhalt ansehen, Produkt berühren, kaufen ohne das Video zu verlassen, Cashback sammeln.',
    },
    'regarder-acheter': {
      title: 'Ansehen und kaufen',
      intro:
        'Jeder Inhalt wird zum Shop. Wo immer du zusiehst, verwandelt Skoleom jedes Ansehen ganz natürlich in eine Kaufgelegenheit.',
    },
    cashback: {
      title: 'Cashback & Prämien',
      intro:
        'Je mehr du kaufst, desto mehr verdienst du. Das Skoleom-Treueprogramm belohnt jeden Kauf — automatisches, sofortiges Cashback, direkt in deiner Wallet nutzbar.',
    },
    wallet: {
      title: 'Skoleom Wallet',
      intro:
        'Dein Geld, überall dabei. Die Skoleom Wallet bündelt dein Cashback, deine Zahlungen und Vorteile an einem Ort — aufladen, bezahlen, auszahlen, in Echtzeit.',
    },
    securite: {
      title: 'Sicherheit & Datenschutz',
      intro:
        'Dein Vertrauen, unsere absolute Priorität. Eine Sicherheitsinfrastruktur auf Bankniveau — KI, Blockchain und Ende-zu-Ende-Verschlüsselung schützen jede Transaktion und jedes Datum.',
    },
  },
  it: {
    'comment-ca-marche': {
      title: 'Come funziona',
      intro:
        'Watch. Touch. Buy.® — la skoleomizzazione in quattro passi: guardare un contenuto, toccare un prodotto, acquistare senza lasciare il video, accumulare cashback.',
    },
    'regarder-acheter': {
      title: 'Guarda e acquista',
      intro:
        'Ogni contenuto diventa un negozio. Ovunque tu guardi, Skoleom trasforma naturalmente ogni visione in un’opportunità di acquisto.',
    },
    cashback: {
      title: 'Cashback e premi',
      intro:
        'Più acquisti, più guadagni. Il programma fedeltà Skoleom premia ogni acquisto: cashback automatico e istantaneo, utilizzabile direttamente nel tuo Wallet.',
    },
    wallet: {
      title: 'Skoleom Wallet',
      intro:
        'Il tuo denaro, sempre con te. Il Skoleom Wallet centralizza cashback, pagamenti e vantaggi in un unico posto: ricarica, paga, incassa, in tempo reale.',
    },
    securite: {
      title: 'Sicurezza e privacy',
      intro:
        'La tua fiducia, la nostra priorità assoluta. Un’infrastruttura di sicurezza di livello bancario: IA, blockchain e crittografia end-to-end proteggono ogni transazione e ogni dato.',
    },
  },
  pt: {
    'comment-ca-marche': {
      title: 'Como funciona',
      intro:
        'Watch. Touch. Buy.® — a skoleomização em quatro passos: ver um conteúdo, tocar num produto, comprar sem sair do vídeo e acumular cashback.',
    },
    'regarder-acheter': {
      title: 'Assistir e comprar',
      intro:
        'Todo conteúdo se torna uma loja. Onde quer que veja, a Skoleom transforma naturalmente cada visualização numa oportunidade de compra.',
    },
    cashback: {
      title: 'Cashback e recompensas',
      intro:
        'Quanto mais compra, mais ganha. O programa de fidelidade Skoleom recompensa cada compra: cashback automático e instantâneo, utilizável diretamente na sua Wallet.',
    },
    wallet: {
      title: 'Skoleom Wallet',
      intro:
        'O seu dinheiro, consigo em todo o lado. A Skoleom Wallet centraliza os seus cashbacks, pagamentos e vantagens num só lugar: carregue, pague e receba, em tempo real.',
    },
    securite: {
      title: 'Segurança e privacidade',
      intro:
        'A sua confiança, a nossa prioridade absoluta. Uma infraestrutura de segurança de nível bancário: IA, blockchain e encriptação ponta a ponta protegem cada transação e cada dado.',
    },
  },
  nl: {
    'comment-ca-marche': {
      title: 'Hoe het werkt',
      intro:
        'Watch. Touch. Buy.® — skoleomisatie in vier stappen: content bekijken, een product aanraken, kopen zonder de video te verlaten, cashback sparen.',
    },
    'regarder-acheter': {
      title: 'Bekijken en kopen',
      intro:
        'Elke content wordt een winkel. Waar je ook kijkt, Skoleom maakt van elke weergave op natuurlijke wijze een koopkans.',
    },
    cashback: {
      title: 'Cashback & beloningen',
      intro:
        'Hoe meer je koopt, hoe meer je verdient. Het Skoleom-loyaliteitsprogramma beloont elke aankoop — automatische, directe cashback, direct bruikbaar in je Wallet.',
    },
    wallet: {
      title: 'Skoleom Wallet',
      intro:
        'Je geld, overal bij je. De Skoleom Wallet bundelt je cashback, betalingen en voordelen op één plek — opwaarderen, betalen, uitbetalen, in realtime.',
    },
    securite: {
      title: 'Beveiliging & privacy',
      intro:
        'Jouw vertrouwen, onze absolute prioriteit. Een beveiligingsinfrastructuur op bankniveau — AI, blockchain en end-to-end-encryptie beschermen elke transactie en elk gegeven.',
    },
  },
  ru: {
    'comment-ca-marche': {
      title: 'Как это работает',
      intro:
        'Watch. Touch. Buy.® — «скулеомизация» в четыре шага: смотреть контент, коснуться товара, купить не выходя из видео, получать кэшбэк.',
    },
    'regarder-acheter': {
      title: 'Смотреть и покупать',
      intro:
        'Любой контент становится магазином. Где бы вы ни смотрели, Skoleom естественным образом превращает каждый просмотр в возможность покупки.',
    },
    cashback: {
      title: 'Кэшбэк и вознаграждения',
      intro:
        'Чем больше покупаете, тем больше зарабатываете. Программа лояльности Skoleom вознаграждает каждую покупку — автоматический мгновенный кэшбэк, доступный прямо в вашем Wallet.',
    },
    wallet: {
      title: 'Skoleom Wallet',
      intro:
        'Ваши деньги всегда с вами. Skoleom Wallet объединяет кэшбэк, платежи и привилегии в одном месте — пополняйте, платите и выводите средства в реальном времени.',
    },
    securite: {
      title: 'Безопасность и конфиденциальность',
      intro:
        'Ваше доверие — наш абсолютный приоритет. Инфраструктура безопасности банковского уровня: ИИ, блокчейн и сквозное шифрование защищают каждую транзакцию и каждые данные.',
    },
  },
  ar: {
    'comment-ca-marche': {
      title: 'كيف يعمل',
      intro:
        'Watch. Touch. Buy.® — «الـskoleomization» في أربع خطوات: مشاهدة المحتوى، لمس المنتج، الشراء دون مغادرة الفيديو، وجمع الاسترداد النقدي.',
    },
    'regarder-acheter': {
      title: 'شاهد واشترِ',
      intro: 'كل محتوى يصبح متجراً. أينما شاهدت، تحوّل Skoleom كل مشاهدة بشكل طبيعي إلى فرصة شراء.',
    },
    cashback: {
      title: 'استرداد نقدي ومكافآت',
      intro:
        'كلما اشتريت أكثر، ربحت أكثر. يكافئ برنامج ولاء Skoleom كل عملية شراء — استرداد نقدي تلقائي وفوري، قابل للاستخدام مباشرة في محفظتك Wallet.',
    },
    wallet: {
      title: 'Skoleom Wallet',
      intro:
        'أموالك معك في كل مكان. تجمع محفظة Skoleom Wallet استردادك النقدي ومدفوعاتك ومزاياك في مكان واحد — اشحن، وادفع، واسحب، في الوقت الفعلي.',
    },
    securite: {
      title: 'الأمان والخصوصية',
      intro:
        'ثقتك أولويتنا المطلقة. بنية أمان بمستوى مصرفي — الذكاء الاصطناعي والبلوك تشين والتشفير من طرف إلى طرف تحمي كل معاملة وكل بيان.',
    },
  },
  hi: {
    'comment-ca-marche': {
      title: 'यह कैसे काम करता है',
      intro:
        'Watch. Touch. Buy.® — चार चरणों में skoleomization: कंटेंट देखें, उत्पाद को टैप करें, वीडियो छोड़े बिना खरीदें, और कैशबैक कमाएँ।',
    },
    'regarder-acheter': {
      title: 'देखें और खरीदें',
      intro:
        'हर कंटेंट एक स्टोर बन जाता है। आप जहाँ भी देखें, Skoleom हर व्यू को स्वाभाविक रूप से खरीद के अवसर में बदल देता है।',
    },
    cashback: {
      title: 'कैशबैक और रिवॉर्ड',
      intro:
        'जितना अधिक खरीदें, उतना अधिक कमाएँ। Skoleom का लॉयल्टी प्रोग्राम हर खरीद पर इनाम देता है — स्वचालित, तुरंत कैशबैक, सीधे आपके Wallet में उपयोग योग्य।',
    },
    wallet: {
      title: 'Skoleom Wallet',
      intro:
        'आपका पैसा, हर जगह आपके साथ। Skoleom Wallet आपके कैशबैक, भुगतान और लाभ एक ही जगह रखता है — रिचार्ज करें, भुगतान करें, निकासी करें, रियल-टाइम में।',
    },
    securite: {
      title: 'सुरक्षा और गोपनीयता',
      intro:
        'आपका भरोसा, हमारी सर्वोच्च प्राथमिकता। बैंक-स्तरीय सुरक्षा अवसंरचना — AI, ब्लॉकचेन और एंड-टू-एंड एन्क्रिप्शन हर लेन-देन और हर डेटा की रक्षा करते हैं।',
    },
  },
  zh: {
    'comment-ca-marche': {
      title: '运作方式',
      intro:
        'Watch. Touch. Buy.® — 四步完成「Skoleom 化」：观看内容、触碰商品、不离开视频即可购买、累积返现。',
    },
    'regarder-acheter': {
      title: '观看并购买',
      intro: '任何内容都能成为商店。无论你在哪里观看，Skoleom 都能自然地把每一次观看变成购买机会。',
    },
    cashback: {
      title: '返现与奖励',
      intro:
        '买得越多，赚得越多。Skoleom 会员计划奖励每一笔购买——自动、即时返现，可直接在你的 Wallet 中使用。',
    },
    wallet: {
      title: 'Skoleom Wallet',
      intro:
        '你的资金，随身相伴。Skoleom Wallet 将返现、付款和权益集中于一处——实时充值、支付、提现。',
    },
    securite: {
      title: '安全与隐私',
      intro:
        '你的信任，是我们的绝对优先。银行级安全架构——AI、区块链与端到端加密保护每一笔交易和每一项数据。',
    },
  },
  id: {
    'comment-ca-marche': {
      title: 'Cara kerjanya',
      intro:
        'Watch. Touch. Buy.® — skoleomisasi dalam empat langkah: menonton konten, menyentuh produk, membeli tanpa meninggalkan video, dan mengumpulkan cashback.',
    },
    'regarder-acheter': {
      title: 'Tonton dan beli',
      intro:
        'Setiap konten menjadi toko. Di mana pun Anda menonton, Skoleom secara alami mengubah setiap tontonan menjadi peluang pembelian.',
    },
    cashback: {
      title: 'Cashback & hadiah',
      intro:
        'Semakin banyak Anda membeli, semakin banyak yang Anda dapatkan. Program loyalitas Skoleom memberi hadiah pada setiap pembelian — cashback otomatis dan instan, dapat digunakan langsung di Wallet Anda.',
    },
    wallet: {
      title: 'Skoleom Wallet',
      intro:
        'Uang Anda, selalu bersama Anda. Skoleom Wallet memusatkan cashback, pembayaran, dan keuntungan Anda di satu tempat — isi ulang, bayar, tarik dana, secara real-time.',
    },
    securite: {
      title: 'Keamanan & privasi',
      intro:
        'Kepercayaan Anda, prioritas mutlak kami. Infrastruktur keamanan setara bank — AI, blockchain, dan enkripsi ujung-ke-ujung melindungi setiap transaksi dan setiap data.',
    },
  },
  sw: {
    'comment-ca-marche': {
      title: 'Jinsi inavyofanya kazi',
      intro:
        'Watch. Touch. Buy.® — «skoleomization» kwa hatua nne: tazama maudhui, gusa bidhaa, nunua bila kuondoka kwenye video, na kusanya cashback.',
    },
    'regarder-acheter': {
      title: 'Tazama na ununue',
      intro:
        'Kila maudhui huwa duka. Popote unapotazama, Skoleom hubadilisha kila kutazama kuwa fursa ya kununua kwa njia ya asili.',
    },
    cashback: {
      title: 'Cashback na zawadi',
      intro:
        'Kadiri ununuavyo zaidi, ndivyo unavyopata zaidi. Mpango wa uaminifu wa Skoleom hutuza kila ununuzi — cashback ya kiotomatiki na ya papo hapo, inayotumika moja kwa moja katika Wallet yako.',
    },
    wallet: {
      title: 'Skoleom Wallet',
      intro:
        'Pesa zako, popote ulipo. Skoleom Wallet hukusanya cashback, malipo na manufaa yako mahali pamoja — ongeza, lipa, toa, kwa wakati halisi.',
    },
    securite: {
      title: 'Usalama na faragha',
      intro:
        'Imani yako, kipaumbele chetu cha juu. Miundombinu ya usalama wa kiwango cha benki — AI, blockchain na usimbaji fiche wa mwanzo-hadi-mwisho hulinda kila muamala na kila data.',
    },
  },
};

/** Sous-cartes du showcase « Groupe » (title + intro) par langue. */
export const SHOWCASE_CARD_GROUP_I18N: Record<string, Record<string, ShowcaseCardT>> = {
  en: {
    actualites: {
      title: 'News',
      intro:
        'Follow all the technological advances, strategic partnerships and news of the Skoleom group around the world.',
    },
    carrieres: {
      title: 'Careers',
      intro:
        'Join the global adventure. Build the future of interactive commerce with us — Skoleom is a pure meritocracy: your performance defines your growth. Freedom, responsibility, excellence.',
    },
    investisseurs: {
      title: 'Investors',
      intro:
        '€532 billion of opportunity. Skoleom targets a $6.5 trillion market with patented technology covering 99%+ of the global interactive live shopping market.',
    },
    presse: {
      title: 'Press',
      intro:
        'Skoleom in the media — find all Skoleom press releases, media kits and official assets. Press contact: presse@skoleom.com.',
    },
    contact: {
      title: 'Contact & support',
      intro:
        'We’re here for you. Whether you’re a consumer, brand, creator, investor or journalist — our team replies within 24h.',
    },
    assistance: {
      title: 'Support',
      intro:
        'Technical support, user help and incident resolution — our team helps you make the most of the Skoleom ecosystem.',
    },
  },
  es: {
    actualites: {
      title: 'Novedades',
      intro:
        'Sigue todos los avances tecnológicos, las alianzas estratégicas y las novedades del grupo Skoleom en todo el mundo.',
    },
    carrieres: {
      title: 'Empleo',
      intro:
        'Únete a la aventura mundial. Construye con nosotros el futuro del comercio interactivo — Skoleom es una meritocracia pura: tu rendimiento define tu evolución. Libertad, responsabilidad, excelencia.',
    },
    investisseurs: {
      title: 'Inversores',
      intro:
        '532 000 millones € de oportunidad. Skoleom aborda un mercado de 6,5 billones $ con una tecnología patentada que cubre más del 99 % del mercado mundial del live shopping interactivo.',
    },
    presse: {
      title: 'Prensa',
      intro:
        'Skoleom en los medios — encuentra todos los comunicados de prensa, kits de medios y recursos oficiales de Skoleom. Contacto de prensa: presse@skoleom.com.',
    },
    contact: {
      title: 'Contacto y asistencia',
      intro:
        'Estamos aquí para ti. Ya seas consumidor, marca, creador, inversor o periodista — nuestro equipo responde en 24 h.',
    },
    assistance: {
      title: 'Asistencia',
      intro:
        'Soporte técnico, ayuda al usuario y resolución de incidencias — nuestro equipo te acompaña para aprovechar al máximo el ecosistema Skoleom.',
    },
  },
  de: {
    actualites: {
      title: 'Neuigkeiten',
      intro:
        'Verfolgen Sie alle technologischen Fortschritte, strategischen Partnerschaften und Neuigkeiten der Skoleom-Gruppe weltweit.',
    },
    carrieres: {
      title: 'Karriere',
      intro:
        'Werde Teil des weltweiten Abenteuers. Gestalte mit uns die Zukunft des interaktiven Handels — Skoleom ist eine reine Leistungsgesellschaft: Deine Leistung bestimmt deine Entwicklung. Freiheit, Verantwortung, Exzellenz.',
    },
    investisseurs: {
      title: 'Investoren',
      intro:
        '532 Milliarden € Chance. Skoleom adressiert einen Markt von 6,5 Billionen $ mit patentierter Technologie, die über 99 % des weltweiten Markts für interaktives Live-Shopping abdeckt.',
    },
    presse: {
      title: 'Presse',
      intro:
        'Skoleom in den Medien — finden Sie alle Pressemitteilungen, Medienkits und offiziellen Materialien von Skoleom. Pressekontakt: presse@skoleom.com.',
    },
    contact: {
      title: 'Kontakt & Support',
      intro:
        'Wir sind für Sie da. Ob Verbraucher, Marke, Creator, Investor oder Journalist — unser Team antwortet innerhalb von 24 Stunden.',
    },
    assistance: {
      title: 'Support',
      intro:
        'Technischer Support, Nutzerhilfe und Störungsbehebung — unser Team hilft Ihnen, das Skoleom-Ökosystem optimal zu nutzen.',
    },
  },
  it: {
    actualites: {
      title: 'Novità',
      intro:
        'Segui tutti i progressi tecnologici, le partnership strategiche e le novità del gruppo Skoleom in tutto il mondo.',
    },
    carrieres: {
      title: 'Carriere',
      intro:
        'Unisciti all’avventura mondiale. Costruisci con noi il futuro del commercio interattivo — Skoleom è una meritocrazia pura: le tue prestazioni definiscono la tua crescita. Libertà, responsabilità, eccellenza.',
    },
    investisseurs: {
      title: 'Investitori',
      intro:
        '532 miliardi € di opportunità. Skoleom affronta un mercato da 6.500 miliardi $ con una tecnologia brevettata che copre oltre il 99% del mercato mondiale del live shopping interattivo.',
    },
    presse: {
      title: 'Stampa',
      intro:
        'Skoleom nei media — trova tutti i comunicati stampa, i kit media e i materiali ufficiali Skoleom. Contatto stampa: presse@skoleom.com.',
    },
    contact: {
      title: 'Contatti e assistenza',
      intro:
        'Siamo qui per te. Che tu sia consumatore, brand, creator, investitore o giornalista — il nostro team risponde entro 24 ore.',
    },
    assistance: {
      title: 'Assistenza',
      intro:
        'Supporto tecnico, aiuto agli utenti e risoluzione degli incidenti — il nostro team ti accompagna per sfruttare al meglio l’ecosistema Skoleom.',
    },
  },
  pt: {
    actualites: {
      title: 'Novidades',
      intro:
        'Acompanhe todos os avanços tecnológicos, as parcerias estratégicas e as novidades do grupo Skoleom em todo o mundo.',
    },
    carrieres: {
      title: 'Carreiras',
      intro:
        'Junte-se à aventura mundial. Construa connosco o futuro do comércio interativo — a Skoleom é uma meritocracia pura: o seu desempenho define a sua evolução. Liberdade, responsabilidade, excelência.',
    },
    investisseurs: {
      title: 'Investidores',
      intro:
        '532 mil milhões € de oportunidade. A Skoleom aborda um mercado de 6,5 biliões $ com uma tecnologia patenteada que cobre mais de 99% do mercado mundial do live shopping interativo.',
    },
    presse: {
      title: 'Imprensa',
      intro:
        'Skoleom nos media — encontre todos os comunicados de imprensa, kits de media e recursos oficiais da Skoleom. Contacto de imprensa: presse@skoleom.com.',
    },
    contact: {
      title: 'Contacto e suporte',
      intro:
        'Estamos aqui para si. Seja consumidor, marca, criador, investidor ou jornalista — a nossa equipa responde em 24 h.',
    },
    assistance: {
      title: 'Suporte',
      intro:
        'Suporte técnico, ajuda ao utilizador e resolução de incidentes — a nossa equipa acompanha-o para aproveitar ao máximo o ecossistema Skoleom.',
    },
  },
  nl: {
    actualites: {
      title: 'Nieuws',
      intro:
        'Volg alle technologische ontwikkelingen, strategische partnerschappen en het nieuws van de Skoleom-groep wereldwijd.',
    },
    carrieres: {
      title: 'Carrière',
      intro:
        'Doe mee aan het wereldwijde avontuur. Bouw met ons aan de toekomst van interactieve commerce — Skoleom is een pure meritocratie: jouw prestaties bepalen je groei. Vrijheid, verantwoordelijkheid, excellentie.',
    },
    investisseurs: {
      title: 'Investeerders',
      intro:
        '532 miljard € aan kansen. Skoleom richt zich op een markt van 6,5 biljoen $ met gepatenteerde technologie die meer dan 99% van de wereldwijde markt voor interactief live shopping dekt.',
    },
    presse: {
      title: 'Pers',
      intro:
        'Skoleom in de media — vind alle persberichten, mediakits en officiële materialen van Skoleom. Perscontact: presse@skoleom.com.',
    },
    contact: {
      title: 'Contact & ondersteuning',
      intro:
        'We staan voor je klaar. Of je nu consument, merk, creator, investeerder of journalist bent — ons team reageert binnen 24 uur.',
    },
    assistance: {
      title: 'Ondersteuning',
      intro:
        'Technische ondersteuning, gebruikershulp en incidentoplossing — ons team helpt je het Skoleom-ecosysteem optimaal te benutten.',
    },
  },
  ru: {
    actualites: {
      title: 'Новости',
      intro:
        'Следите за всеми технологическими достижениями, стратегическими партнёрствами и новостями группы Skoleom по всему миру.',
    },
    carrieres: {
      title: 'Карьера',
      intro:
        'Присоединяйтесь к мировому приключению. Стройте с нами будущее интерактивной торговли — Skoleom это чистая меритократия: ваши результаты определяют ваш рост. Свобода, ответственность, совершенство.',
    },
    investisseurs: {
      title: 'Инвесторам',
      intro:
        'Возможность на 532 млрд €. Skoleom выходит на рынок объёмом 6,5 трлн $ с запатентованной технологией, охватывающей более 99% мирового рынка интерактивного live-шопинга.',
    },
    presse: {
      title: 'Пресса',
      intro:
        'Skoleom в СМИ — все пресс-релизы, медиакиты и официальные материалы Skoleom. Контакт для прессы: presse@skoleom.com.',
    },
    contact: {
      title: 'Контакты и поддержка',
      intro:
        'Мы рядом. Будь вы потребитель, бренд, автор, инвестор или журналист — наша команда отвечает в течение 24 часов.',
    },
    assistance: {
      title: 'Поддержка',
      intro:
        'Техническая поддержка, помощь пользователям и решение инцидентов — наша команда помогает вам в полной мере использовать экосистему Skoleom.',
    },
  },
  ar: {
    actualites: {
      title: 'الأخبار',
      intro: 'تابع جميع التطورات التقنية والشراكات الاستراتيجية وأخبار مجموعة Skoleom حول العالم.',
    },
    carrieres: {
      title: 'الوظائف',
      intro:
        'انضم إلى المغامرة العالمية. ابنِ معنا مستقبل التجارة التفاعلية — Skoleom جدارة خالصة: أداؤك يحدد تطوّرك. الحرية والمسؤولية والتميّز.',
    },
    investisseurs: {
      title: 'المستثمرون',
      intro:
        'فرصة بقيمة 532 مليار يورو. تستهدف Skoleom سوقاً بقيمة 6.5 تريليون دولار بتقنية محمية ببراءة اختراع تغطي أكثر من 99% من سوق التسوّق المباشر التفاعلي عالمياً.',
    },
    presse: {
      title: 'الصحافة',
      intro:
        'Skoleom في الإعلام — اعثر على جميع البيانات الصحفية والحقائب الإعلامية والمواد الرسمية لـ Skoleom. للتواصل الصحفي: presse@skoleom.com.',
    },
    contact: {
      title: 'التواصل والدعم',
      intro:
        'نحن هنا من أجلك. سواء كنت مستهلكاً أو علامة تجارية أو صانع محتوى أو مستثمراً أو صحفياً — يردّ فريقنا خلال 24 ساعة.',
    },
    assistance: {
      title: 'الدعم',
      intro:
        'دعم تقني ومساعدة للمستخدمين وحلّ للأعطال — يرافقك فريقنا للاستفادة الكاملة من منظومة Skoleom.',
    },
  },
  hi: {
    actualites: {
      title: 'समाचार',
      intro:
        'दुनिया भर में Skoleom समूह की सभी तकनीकी प्रगति, रणनीतिक साझेदारियों और समाचारों का अनुसरण करें।',
    },
    carrieres: {
      title: 'करियर',
      intro:
        'वैश्विक सफर में शामिल हों। हमारे साथ इंटरैक्टिव कॉमर्स का भविष्य बनाएँ — Skoleom एक शुद्ध मेरिटोक्रेसी है: आपका प्रदर्शन आपकी प्रगति तय करता है। स्वतंत्रता, जिम्मेदारी, उत्कृष्टता।',
    },
    investisseurs: {
      title: 'निवेशक',
      intro:
        '€532 बिलियन का अवसर। Skoleom $6.5 ट्रिलियन के बाज़ार को लक्षित करता है, जिसकी पेटेंटेड तकनीक वैश्विक इंटरैक्टिव लाइव शॉपिंग बाज़ार के 99%+ को कवर करती है।',
    },
    presse: {
      title: 'प्रेस',
      intro:
        'मीडिया में Skoleom — सभी प्रेस विज्ञप्तियाँ, मीडिया किट और आधिकारिक सामग्री पाएँ। प्रेस संपर्क: presse@skoleom.com.',
    },
    contact: {
      title: 'संपर्क और सहायता',
      intro:
        'हम आपके लिए हैं। चाहे आप उपभोक्ता हों, ब्रांड, क्रिएटर, निवेशक या पत्रकार — हमारी टीम 24 घंटे में जवाब देती है।',
    },
    assistance: {
      title: 'सहायता',
      intro:
        'तकनीकी सहायता, उपयोगकर्ता मदद और समस्या समाधान — हमारी टीम Skoleom इकोसिस्टम का पूरा लाभ उठाने में आपकी मदद करती है।',
    },
  },
  zh: {
    actualites: {
      title: '最新动态',
      intro: '关注 Skoleom 集团在全球的所有技术进展、战略合作与最新动态。',
    },
    carrieres: {
      title: '招聘',
      intro:
        '加入这场全球冒险。与我们共建互动商务的未来——Skoleom 是纯粹的精英制：你的表现决定你的成长。自由、责任、卓越。',
    },
    investisseurs: {
      title: '投资者',
      intro:
        '5320 亿欧元的机遇。Skoleom 瞄准 6.5 万亿美元的市场，其专利技术覆盖全球互动直播购物市场的 99% 以上。',
    },
    presse: {
      title: '新闻',
      intro:
        '媒体中的 Skoleom——获取所有新闻稿、媒体资料包及官方素材。媒体联系：presse@skoleom.com。',
    },
    contact: {
      title: '联系与支持',
      intro:
        '我们随时为你服务。无论你是消费者、品牌、创作者、投资者还是记者——我们的团队将在 24 小时内回复。',
    },
    assistance: {
      title: '支持',
      intro: '技术支持、用户帮助与故障处理——我们的团队助你充分利用 Skoleom 生态系统。',
    },
  },
  id: {
    actualites: {
      title: 'Berita',
      intro:
        'Ikuti semua kemajuan teknologi, kemitraan strategis, dan berita grup Skoleom di seluruh dunia.',
    },
    carrieres: {
      title: 'Karier',
      intro:
        'Bergabunglah dengan petualangan global. Bangun masa depan perdagangan interaktif bersama kami — Skoleom adalah meritokrasi murni: kinerja Anda menentukan perkembangan Anda. Kebebasan, tanggung jawab, keunggulan.',
    },
    investisseurs: {
      title: 'Investor',
      intro:
        'Peluang €532 miliar. Skoleom membidik pasar $6,5 triliun dengan teknologi berpaten yang mencakup 99%+ pasar belanja langsung interaktif global.',
    },
    presse: {
      title: 'Pers',
      intro:
        'Skoleom di media — temukan semua rilis pers, media kit, dan materi resmi Skoleom. Kontak pers: presse@skoleom.com.',
    },
    contact: {
      title: 'Kontak & dukungan',
      intro:
        'Kami siap membantu Anda. Baik Anda konsumen, merek, kreator, investor, atau jurnalis — tim kami merespons dalam 24 jam.',
    },
    assistance: {
      title: 'Dukungan',
      intro:
        'Dukungan teknis, bantuan pengguna, dan penyelesaian insiden — tim kami membantu Anda memaksimalkan ekosistem Skoleom.',
    },
  },
  sw: {
    actualites: {
      title: 'Habari',
      intro:
        'Fuatilia maendeleo yote ya kiteknolojia, ushirikiano wa kimkakati na habari za kundi la Skoleom duniani kote.',
    },
    carrieres: {
      title: 'Ajira',
      intro:
        'Jiunge na safari ya kimataifa. Jenga nasi mustakabali wa biashara shirikishi — Skoleom ni utawala wa ustahili halisi: utendaji wako huamua ukuaji wako. Uhuru, uwajibikaji, ubora.',
    },
    investisseurs: {
      title: 'Wawekezaji',
      intro:
        'Fursa ya €532 bilioni. Skoleom inalenga soko la $6.5 trilioni kwa teknolojia yenye hataza inayofunika zaidi ya 99% ya soko la dunia la ununuzi wa moja kwa moja shirikishi.',
    },
    presse: {
      title: 'Vyombo vya habari',
      intro:
        'Skoleom kwenye vyombo vya habari — pata taarifa zote kwa vyombo vya habari, vifurushi vya media na nyenzo rasmi za Skoleom. Mawasiliano kwa waandishi: presse@skoleom.com.',
    },
    contact: {
      title: 'Mawasiliano na usaidizi',
      intro:
        'Tuko hapa kwa ajili yako. Iwe wewe ni mtumiaji, chapa, mbunifu, mwekezaji au mwandishi wa habari — timu yetu hujibu ndani ya saa 24.',
    },
    assistance: {
      title: 'Usaidizi',
      intro:
        'Usaidizi wa kiufundi, msaada kwa watumiaji na utatuzi wa matukio — timu yetu hukusaidia kunufaika kikamilifu na mfumo-ikolojia wa Skoleom.',
    },
  },
};

/** title + intro résolus pour une sous-carte (FR par défaut, géré côté composant). */
export function getShowcaseCard(lang: string, id: string): ShowcaseCardT | null {
  return SHOWCASE_CARD_I18N[lang]?.[id] ?? SHOWCASE_CARD_GROUP_I18N[lang]?.[id] ?? null;
}
