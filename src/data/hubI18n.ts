/**
 * Traductions des pages hub natives (multilingue).
 * La source FR vit dans hubData.ts ; ici on stocke les surcouches par langue.
 * Toute clé absente retombe sur le FR (aucune régression).
 */
import { ABOUT_PAGE, SHOWCASE_INTRO, GROUP_PERKS, GROUP_CTA, type Perk } from './hubData';

export interface AboutSectionT {
  title: string;
  text: string;
  points?: string[];
}
export interface AboutPageT {
  title: string;
  intro: string;
  moreLabel: string;
  sections: AboutSectionT[];
}

/** Libellé du bouton « Explorer » par langue. */
export const EXPLORE_LABEL: Record<string, string> = {
  fr: 'Explorer',
  en: 'Explore',
  es: 'Explorar',
  de: 'Entdecken',
  it: 'Esplora',
  pt: 'Explorar',
  nl: 'Ontdekken',
  ru: 'Открыть',
  ar: 'استكشاف',
  hi: 'एक्सप्लोर करें',
  zh: '探索',
  id: 'Jelajahi',
  sw: 'Gundua',
};

/** Libellé « En savoir plus » par langue. */
export const MORE_LABEL: Record<string, string> = {
  fr: 'En savoir plus',
  en: 'Learn more',
  es: 'Saber más',
  de: 'Mehr erfahren',
  it: 'Scopri di più',
  pt: 'Saiba mais',
  nl: 'Meer weten',
  ru: 'Подробнее',
  ar: 'اعرف المزيد',
  hi: 'और जानें',
  zh: '了解更多',
  id: 'Pelajari lebih lanjut',
  sw: 'Jifunze zaidi',
};

/**
 * Surcouches « À propos ». Ordre des sections identique à ABOUT_PAGE :
 * mission, technologie, brevets, écosystème, financement.
 */
export const ABOUT_I18N: Record<
  string,
  { title: string; intro: string; sections: AboutSectionT[] }
> = {
  en: {
    title: 'About Skoleom',
    intro:
      'Mission, technology, patents, ecosystem and funding: the foundations of Skoleom Universe.',
    sections: [
      {
        title: 'Our mission',
        text: 'Make every video shoppable, anywhere in the world, with no gap between desire and purchase. That is the Watch. Touch. Buy.® promise: watch without interruption, interact with what you see, then buy directly inside the content — with no redirection.',
      },
      {
        title: 'Our technology',
        text: 'SeSync®, a shoppable audiovisual engine, recognizes on-screen products in real time and makes them buyable without leaving the video, across more than 2,000 OTT platforms.',
        points: [
          'AI recognition and interactive in-video capsules',
          'Built-in “One Tap” payment, zero redirection',
          'Proprietary blocks: SeContent®, The25x®, Monetizer Studio®, OTT Integration',
        ],
      },
      {
        title: 'Skoleom patent',
        text: 'Proprietary technology protected by three patent families, filed and extended internationally with the INPI, EUIPO, USPTO and WIPO. The Skoleom®, SeContent®, The25x® and Monetizer Studio® trademarks are protected in over 50 countries.',
        points: [
          'SKM1 — access to remote resources from audiovisual content',
          'SKM2 — enrichment of audiovisual content',
          'SKM3 — access from a connected TV device',
        ],
      },
      {
        title: 'The Skoleom ecosystem',
        text: 'An integrated whole, from content to commerce: audiovisual stores, consumer services, professional solutions and Group entities.',
        points: [
          'Stores: The25x®, SeSports, Cares, SkoleToon’s',
          'Consumer: Skoleom Page, SeSync, Shop, Magazine',
          'Pros: Monetizer Studio, Skoleom Ads, Skoleom Pay, SVE API',
        ],
      },
      {
        title: 'Funding programs',
        text: 'Skoleom Invest centralizes information dedicated to the group’s funding (€194M share capital, Skoleom Platform Inc.). Informational content only: it is neither a public offering nor investment advice, and any investment carries a risk of capital loss.',
      },
    ],
  },
  es: {
    title: 'Acerca de Skoleom',
    intro:
      'Misión, tecnología, patentes, ecosistema y financiación: los cimientos de Skoleom Universe.',
    sections: [
      {
        title: 'Nuestra misión',
        text: 'Hacer que cada vídeo sea comprable, en cualquier parte del mundo, sin ruptura entre el deseo y la compra. Esa es la promesa Watch. Touch. Buy.®: ver sin interrupciones, interactuar con lo que ves y comprar directamente dentro del contenido, sin ninguna redirección.',
      },
      {
        title: 'Nuestra tecnología',
        text: 'SeSync®, un motor audiovisual comprable, reconoce los productos en pantalla en tiempo real y los hace comprables sin salir del vídeo, en más de 2000 plataformas OTT.',
        points: [
          'Reconocimiento por IA y cápsulas interactivas dentro del vídeo',
          'Pago «One Tap» integrado, cero redirecciones',
          'Bloques propios: SeContent®, The25x®, Monetizer Studio®, OTT Integration',
        ],
      },
      {
        title: 'Patente Skoleom',
        text: 'Tecnología propia protegida por tres familias de patentes, presentadas y ampliadas internacionalmente ante la INPI, la EUIPO, la USPTO y la OMPI. Las marcas Skoleom®, SeContent®, The25x® y Monetizer Studio® están protegidas en más de 50 países.',
        points: [
          'SKM1 — acceso a recursos remotos desde un contenido audiovisual',
          'SKM2 — enriquecimiento de un contenido audiovisual',
          'SKM3 — acceso desde un equipo de televisión conectada',
        ],
      },
      {
        title: 'El ecosistema Skoleom',
        text: 'Un conjunto integrado, del contenido al comercio: tiendas audiovisuales, servicios para el gran público, soluciones profesionales y entidades del Grupo.',
        points: [
          'Tiendas: The25x®, SeSports, Cares, SkoleToon’s',
          'Gran público: Skoleom Page, SeSync, Shop, Magazine',
          'Profesionales: Monetizer Studio, Skoleom Ads, Skoleom Pay, SVE API',
        ],
      },
      {
        title: 'Programas de financiación',
        text: 'Skoleom Invest centraliza la información dedicada a la financiación del grupo (capital social de 194 M€, Skoleom Platform Inc.). Contenido únicamente informativo: no es una oferta pública ni asesoramiento de inversión, y toda inversión conlleva un riesgo de pérdida de capital.',
      },
    ],
  },
  de: {
    title: 'Über Skoleom',
    intro:
      'Mission, Technologie, Patente, Ökosystem und Finanzierung: die Grundpfeiler von Skoleom Universe.',
    sections: [
      {
        title: 'Unsere Mission',
        text: 'Jedes Video überall auf der Welt kaufbar machen – ohne Bruch zwischen Wunsch und Kauf. Das ist das Watch. Touch. Buy.®-Versprechen: ohne Unterbrechung ansehen, mit dem Gesehenen interagieren und direkt im Inhalt kaufen – ganz ohne Weiterleitung.',
      },
      {
        title: 'Unsere Technologie',
        text: 'SeSync®, eine kaufbare audiovisuelle Engine, erkennt Produkte auf dem Bildschirm in Echtzeit und macht sie kaufbar, ohne das Video zu verlassen – auf über 2.000 OTT-Plattformen.',
        points: [
          'KI-Erkennung und interaktive In-Video-Kapseln',
          'Integrierte „One Tap“-Zahlung, keine Weiterleitung',
          'Eigene Bausteine: SeContent®, The25x®, Monetizer Studio®, OTT Integration',
        ],
      },
      {
        title: 'Skoleom-Patent',
        text: 'Eigene Technologie, geschützt durch drei Patentfamilien, international angemeldet und erweitert bei INPI, EUIPO, USPTO und WIPO. Die Marken Skoleom®, SeContent®, The25x® und Monetizer Studio® sind in über 50 Ländern geschützt.',
        points: [
          'SKM1 — Zugriff auf entfernte Ressourcen aus audiovisuellen Inhalten',
          'SKM2 — Anreicherung audiovisueller Inhalte',
          'SKM3 — Zugriff über ein verbundenes Fernsehgerät',
        ],
      },
      {
        title: 'Das Skoleom-Ökosystem',
        text: 'Ein integriertes Ganzes, vom Inhalt bis zum Handel: audiovisuelle Shops, Verbraucherdienste, professionelle Lösungen und Konzerngesellschaften.',
        points: [
          'Shops: The25x®, SeSports, Cares, SkoleToon’s',
          'Verbraucher: Skoleom Page, SeSync, Shop, Magazine',
          'Profis: Monetizer Studio, Skoleom Ads, Skoleom Pay, SVE API',
        ],
      },
      {
        title: 'Finanzierungsprogramme',
        text: 'Skoleom Invest bündelt die Informationen zur Finanzierung des Konzerns (Stammkapital 194 Mio. €, Skoleom Platform Inc.). Nur zu Informationszwecken: weder ein öffentliches Angebot noch eine Anlageberatung; jede Investition birgt das Risiko eines Kapitalverlusts.',
      },
    ],
  },
  it: {
    title: 'Informazioni su Skoleom',
    intro:
      'Missione, tecnologia, brevetti, ecosistema e finanziamento: le fondamenta di Skoleom Universe.',
    sections: [
      {
        title: 'La nostra missione',
        text: 'Rendere ogni video acquistabile, ovunque nel mondo, senza interruzioni tra il desiderio e l’acquisto. È la promessa Watch. Touch. Buy.®: guardare senza interruzioni, interagire con ciò che si vede e acquistare direttamente nel contenuto, senza alcun reindirizzamento.',
      },
      {
        title: 'La nostra tecnologia',
        text: 'SeSync®, un motore audiovisivo acquistabile, riconosce i prodotti sullo schermo in tempo reale e li rende acquistabili senza uscire dal video, su oltre 2.000 piattaforme OTT.',
        points: [
          'Riconoscimento tramite IA e capsule interattive nel video',
          'Pagamento «One Tap» integrato, zero reindirizzamenti',
          'Componenti proprietari: SeContent®, The25x®, Monetizer Studio®, OTT Integration',
        ],
      },
      {
        title: 'Brevetto Skoleom',
        text: 'Tecnologia proprietaria protetta da tre famiglie di brevetti, depositate ed estese a livello internazionale presso INPI, EUIPO, USPTO e OMPI. I marchi Skoleom®, SeContent®, The25x® e Monetizer Studio® sono protetti in oltre 50 Paesi.',
        points: [
          'SKM1 — accesso a risorse remote da un contenuto audiovisivo',
          'SKM2 — arricchimento di un contenuto audiovisivo',
          'SKM3 — accesso da un dispositivo televisivo connesso',
        ],
      },
      {
        title: 'L’ecosistema Skoleom',
        text: 'Un insieme integrato, dal contenuto al commercio: negozi audiovisivi, servizi per il grande pubblico, soluzioni professionali ed entità del Gruppo.',
        points: [
          'Negozi: The25x®, SeSports, Cares, SkoleToon’s',
          'Grande pubblico: Skoleom Page, SeSync, Shop, Magazine',
          'Professionisti: Monetizer Studio, Skoleom Ads, Skoleom Pay, SVE API',
        ],
      },
      {
        title: 'Programmi di finanziamento',
        text: 'Skoleom Invest centralizza le informazioni dedicate al finanziamento del gruppo (capitale sociale di 194 M€, Skoleom Platform Inc.). Contenuto puramente informativo: non è né un’offerta al pubblico né una consulenza in materia di investimenti, e ogni investimento comporta un rischio di perdita del capitale.',
      },
    ],
  },
  pt: {
    title: 'Sobre a Skoleom',
    intro:
      'Missão, tecnologia, patentes, ecossistema e financiamento: os alicerces do Skoleom Universe.',
    sections: [
      {
        title: 'A nossa missão',
        text: 'Tornar cada vídeo comprável, em qualquer lugar do mundo, sem ruptura entre o desejo e a compra. É a promessa Watch. Touch. Buy.®: assistir sem interrupções, interagir com o que se vê e comprar diretamente no conteúdo, sem qualquer redirecionamento.',
      },
      {
        title: 'A nossa tecnologia',
        text: 'O SeSync®, um motor audiovisual comprável, reconhece os produtos no ecrã em tempo real e torna-os compráveis sem sair do vídeo, em mais de 2000 plataformas OTT.',
        points: [
          'Reconhecimento por IA e cápsulas interativas no vídeo',
          'Pagamento «One Tap» integrado, zero redirecionamentos',
          'Blocos próprios: SeContent®, The25x®, Monetizer Studio®, OTT Integration',
        ],
      },
      {
        title: 'Patente Skoleom',
        text: 'Tecnologia própria protegida por três famílias de patentes, depositadas e alargadas internacionalmente junto do INPI, EUIPO, USPTO e OMPI. As marcas Skoleom®, SeContent®, The25x® e Monetizer Studio® estão protegidas em mais de 50 países.',
        points: [
          'SKM1 — acesso a recursos remotos a partir de um conteúdo audiovisual',
          'SKM2 — enriquecimento de um conteúdo audiovisual',
          'SKM3 — acesso a partir de um equipamento de televisão conectada',
        ],
      },
      {
        title: 'O ecossistema Skoleom',
        text: 'Um conjunto integrado, do conteúdo ao comércio: lojas audiovisuais, serviços para o grande público, soluções profissionais e entidades do Grupo.',
        points: [
          'Lojas: The25x®, SeSports, Cares, SkoleToon’s',
          'Grande público: Skoleom Page, SeSync, Shop, Magazine',
          'Profissionais: Monetizer Studio, Skoleom Ads, Skoleom Pay, SVE API',
        ],
      },
      {
        title: 'Programas de financiamento',
        text: 'A Skoleom Invest centraliza a informação dedicada ao financiamento do grupo (capital social de 194 M€, Skoleom Platform Inc.). Conteúdo apenas informativo: não é uma oferta ao público nem aconselhamento de investimento, e qualquer investimento comporta um risco de perda de capital.',
      },
    ],
  },
  nl: {
    title: 'Over Skoleom',
    intro:
      'Missie, technologie, octrooien, ecosysteem en financiering: de fundamenten van Skoleom Universe.',
    sections: [
      {
        title: 'Onze missie',
        text: 'Elke video overal ter wereld koopbaar maken, zonder kloof tussen verlangen en aankoop. Dat is de belofte Watch. Touch. Buy.®: kijken zonder onderbreking, interageren met wat je ziet en rechtstreeks in de content kopen — zonder enige omleiding.',
      },
      {
        title: 'Onze technologie',
        text: 'SeSync®, een koopbare audiovisuele engine, herkent producten op het scherm in realtime en maakt ze koopbaar zonder de video te verlaten, op meer dan 2.000 OTT-platforms.',
        points: [
          'AI-herkenning en interactieve in-videocapsules',
          'Geïntegreerde “One Tap”-betaling, geen omleiding',
          'Eigen bouwstenen: SeContent®, The25x®, Monetizer Studio®, OTT Integration',
        ],
      },
      {
        title: 'Skoleom-octrooi',
        text: 'Eigen technologie beschermd door drie octrooifamilies, internationaal ingediend en uitgebreid bij INPI, EUIPO, USPTO en WIPO. De merken Skoleom®, SeContent®, The25x® en Monetizer Studio® zijn beschermd in meer dan 50 landen.',
        points: [
          'SKM1 — toegang tot externe bronnen vanuit audiovisuele content',
          'SKM2 — verrijking van audiovisuele content',
          'SKM3 — toegang vanaf een verbonden televisietoestel',
        ],
      },
      {
        title: 'Het Skoleom-ecosysteem',
        text: 'Een geïntegreerd geheel, van content tot commerce: audiovisuele winkels, consumentendiensten, professionele oplossingen en groepsentiteiten.',
        points: [
          'Winkels: The25x®, SeSports, Cares, SkoleToon’s',
          'Consument: Skoleom Page, SeSync, Shop, Magazine',
          'Professionals: Monetizer Studio, Skoleom Ads, Skoleom Pay, SVE API',
        ],
      },
      {
        title: 'Financieringsprogramma’s',
        text: 'Skoleom Invest centraliseert de informatie over de financiering van de groep (maatschappelijk kapitaal van € 194 mln, Skoleom Platform Inc.). Uitsluitend informatieve inhoud: het is geen openbare aanbieding noch beleggingsadvies, en elke investering brengt een risico op kapitaalverlies met zich mee.',
      },
    ],
  },
  ru: {
    title: 'О Skoleom',
    intro: 'Миссия, технология, патенты, экосистема и финансирование — основы Skoleom Universe.',
    sections: [
      {
        title: 'Наша миссия',
        text: 'Сделать каждое видео доступным для покупки в любой точке мира, без разрыва между желанием и покупкой. Это и есть обещание Watch. Touch. Buy.®: смотреть без прерываний, взаимодействовать с тем, что видишь, и покупать прямо внутри контента — без каких-либо перенаправлений.',
      },
      {
        title: 'Наша технология',
        text: 'SeSync® — аудиовизуальный движок для покупок — распознаёт товары на экране в реальном времени и делает их доступными для покупки, не выходя из видео, более чем на 2000 OTT-платформах.',
        points: [
          'Распознавание с помощью ИИ и интерактивные капсулы внутри видео',
          'Встроенная оплата «One Tap», без перенаправлений',
          'Собственные модули: SeContent®, The25x®, Monetizer Studio®, OTT Integration',
        ],
      },
      {
        title: 'Патент Skoleom',
        text: 'Собственная технология, защищённая тремя семействами патентов, поданных и расширенных на международном уровне в INPI, EUIPO, USPTO и ВОИС. Товарные знаки Skoleom®, SeContent®, The25x® и Monetizer Studio® защищены более чем в 50 странах.',
        points: [
          'SKM1 — доступ к удалённым ресурсам из аудиовизуального контента',
          'SKM2 — обогащение аудиовизуального контента',
          'SKM3 — доступ с подключённого телевизора',
        ],
      },
      {
        title: 'Экосистема Skoleom',
        text: 'Единое целое — от контента к коммерции: аудиовизуальные магазины, сервисы для широкой аудитории, профессиональные решения и компании Группы.',
        points: [
          'Магазины: The25x®, SeSports, Cares, SkoleToon’s',
          'Для всех: Skoleom Page, SeSync, Shop, Magazine',
          'Для профи: Monetizer Studio, Skoleom Ads, Skoleom Pay, SVE API',
        ],
      },
      {
        title: 'Программы финансирования',
        text: 'Skoleom Invest объединяет информацию о финансировании группы (уставный капитал 194 млн €, Skoleom Platform Inc.). Только информационный материал: это не публичное предложение и не инвестиционная рекомендация; любые инвестиции сопряжены с риском потери капитала.',
      },
    ],
  },
  ar: {
    title: 'عن سكوليوم',
    intro: 'الرسالة والتقنية وبراءات الاختراع والمنظومة والتمويل: أسس Skoleom Universe.',
    sections: [
      {
        title: 'رسالتنا',
        text: 'جعل كل فيديو قابلاً للشراء في أي مكان في العالم، دون انقطاع بين الرغبة والشراء. هذا هو وعد Watch. Touch. Buy.®: المشاهدة دون انقطاع، والتفاعل مع ما تراه، ثم الشراء مباشرة داخل المحتوى — دون أي إعادة توجيه.',
      },
      {
        title: 'تقنيتنا',
        text: 'يتعرّف SeSync®، وهو محرك سمعي بصري قابل للتسوق، على المنتجات الظاهرة على الشاشة في الوقت الفعلي ويجعلها قابلة للشراء دون مغادرة الفيديو، عبر أكثر من 2000 منصة OTT.',
        points: [
          'التعرّف بالذكاء الاصطناعي وكبسولات تفاعلية داخل الفيديو',
          'دفع «One Tap» مدمج، دون أي إعادة توجيه',
          'مكوّنات خاصة: SeContent®، The25x®، Monetizer Studio®، OTT Integration',
        ],
      },
      {
        title: 'براءة اختراع سكوليوم',
        text: 'تقنية خاصة محمية بثلاث عائلات من براءات الاختراع، مودعة وموسّعة دولياً لدى INPI وEUIPO وUSPTO وWIPO. العلامات Skoleom® وSeContent® وThe25x® وMonetizer Studio® محمية في أكثر من 50 دولة.',
        points: [
          'SKM1 — الوصول إلى الموارد البعيدة من محتوى سمعي بصري',
          'SKM2 — إثراء محتوى سمعي بصري',
          'SKM3 — الوصول من جهاز تلفزيون متصل',
        ],
      },
      {
        title: 'منظومة سكوليوم',
        text: 'منظومة متكاملة، من المحتوى إلى التجارة: متاجر سمعية بصرية، وخدمات للجمهور العام، وحلول احترافية، وكيانات المجموعة.',
        points: [
          'المتاجر: The25x®، SeSports، Cares، SkoleToon’s',
          'للجمهور: Skoleom Page، SeSync، Shop، Magazine',
          'للمحترفين: Monetizer Studio، Skoleom Ads، Skoleom Pay، SVE API',
        ],
      },
      {
        title: 'برامج التمويل',
        text: 'تجمع Skoleom Invest المعلومات المخصّصة لتمويل المجموعة (رأس مال قدره 194 مليون يورو، Skoleom Platform Inc.). محتوى إعلامي فقط: ليس عرضاً عاماً ولا استشارة استثمارية، وكل استثمار ينطوي على مخاطر فقدان رأس المال.',
      },
    ],
  },
  hi: {
    title: 'स्कोलियम के बारे में',
    intro: 'मिशन, तकनीक, पेटेंट, इकोसिस्टम और फंडिंग: Skoleom Universe की नींव।',
    sections: [
      {
        title: 'हमारा मिशन',
        text: 'हर वीडियो को दुनिया में कहीं भी खरीदने योग्य बनाना, इच्छा और खरीद के बीच बिना किसी रुकावट के। यही Watch. Touch. Buy.® का वादा है: बिना रुकावट देखें, जो दिखे उससे इंटरैक्ट करें, और सीधे कंटेंट के भीतर ही खरीदें — बिना किसी रीडायरेक्ट के।',
      },
      {
        title: 'हमारी तकनीक',
        text: 'SeSync®, एक शॉपेबल ऑडियोविज़ुअल इंजन, स्क्रीन पर मौजूद उत्पादों को रियल-टाइम में पहचानता है और वीडियो छोड़े बिना उन्हें 2,000 से अधिक OTT प्लेटफ़ॉर्म पर खरीदने योग्य बनाता है।',
        points: [
          'AI पहचान और वीडियो के भीतर इंटरैक्टिव कैप्सूल',
          'इनबिल्ट «One Tap» भुगतान, शून्य रीडायरेक्ट',
          'स्वामित्व वाले ब्लॉक: SeContent®, The25x®, Monetizer Studio®, OTT Integration',
        ],
      },
      {
        title: 'स्कोलियम पेटेंट',
        text: 'स्वामित्व वाली तकनीक तीन पेटेंट परिवारों द्वारा संरक्षित, जो INPI, EUIPO, USPTO और WIPO के पास अंतरराष्ट्रीय स्तर पर दाखिल और विस्तारित हैं। Skoleom®, SeContent®, The25x® और Monetizer Studio® ट्रेडमार्क 50 से अधिक देशों में संरक्षित हैं।',
        points: [
          'SKM1 — ऑडियोविज़ुअल कंटेंट से रिमोट संसाधनों तक पहुँच',
          'SKM2 — ऑडियोविज़ुअल कंटेंट का संवर्धन',
          'SKM3 — कनेक्टेड टीवी डिवाइस से पहुँच',
        ],
      },
      {
        title: 'स्कोलियम इकोसिस्टम',
        text: 'कंटेंट से कॉमर्स तक एक एकीकृत समूह: ऑडियोविज़ुअल स्टोर, उपभोक्ता सेवाएँ, पेशेवर समाधान और समूह की इकाइयाँ।',
        points: [
          'स्टोर: The25x®, SeSports, Cares, SkoleToon’s',
          'उपभोक्ता: Skoleom Page, SeSync, Shop, Magazine',
          'पेशेवर: Monetizer Studio, Skoleom Ads, Skoleom Pay, SVE API',
        ],
      },
      {
        title: 'फंडिंग कार्यक्रम',
        text: 'Skoleom Invest समूह की फंडिंग से जुड़ी जानकारी को केंद्रित करता है (शेयर पूंजी €194M, Skoleom Platform Inc.)। केवल सूचनात्मक सामग्री: यह न तो सार्वजनिक पेशकश है और न ही निवेश सलाह, और हर निवेश में पूंजी हानि का जोखिम होता है।',
      },
    ],
  },
  zh: {
    title: '关于 Skoleom',
    intro: '使命、技术、专利、生态系统与融资：Skoleom Universe 的基石。',
    sections: [
      {
        title: '我们的使命',
        text: '让每一个视频在世界任何地方都可购买，让心动与购买之间不再有断层。这就是 Watch. Touch. Buy.® 的承诺：不间断观看、与所见内容互动，并直接在内容中购买——无需任何跳转。',
      },
      {
        title: '我们的技术',
        text: 'SeSync® 是一款可购物的视听引擎，能够实时识别屏幕上的商品，并在不离开视频的情况下使其可购买，覆盖 2000 多个 OTT 平台。',
        points: [
          'AI 识别与视频内互动胶囊',
          '内置「One Tap」支付，零跳转',
          '自有模块：SeContent®、The25x®、Monetizer Studio®、OTT Integration',
        ],
      },
      {
        title: 'Skoleom 专利',
        text: '自有技术由三大专利族保护，已在 INPI、EUIPO、USPTO 和 WIPO 进行国际申请与扩展。Skoleom®、SeContent®、The25x® 和 Monetizer Studio® 商标在 50 多个国家受到保护。',
        points: [
          'SKM1 — 从视听内容访问远程资源',
          'SKM2 — 视听内容的增强',
          'SKM3 — 从联网电视设备访问',
        ],
      },
      {
        title: 'Skoleom 生态系统',
        text: '从内容到商业的一体化整体：视听商店、面向大众的服务、专业解决方案以及集团旗下实体。',
        points: [
          '商店：The25x®、SeSports、Cares、SkoleToon’s',
          '大众：Skoleom Page、SeSync、Shop、Magazine',
          '专业：Monetizer Studio、Skoleom Ads、Skoleom Pay、SVE API',
        ],
      },
      {
        title: '融资计划',
        text: 'Skoleom Invest 集中提供集团融资相关信息（注册资本 1.94 亿欧元，Skoleom Platform Inc.）。仅供参考：既非公开发行，也非投资建议，任何投资均存在资本损失风险。',
      },
    ],
  },
  id: {
    title: 'Tentang Skoleom',
    intro: 'Misi, teknologi, paten, ekosistem, dan pendanaan: fondasi Skoleom Universe.',
    sections: [
      {
        title: 'Misi kami',
        text: 'Menjadikan setiap video dapat dibeli, di mana saja di dunia, tanpa jeda antara keinginan dan pembelian. Itulah janji Watch. Touch. Buy.®: menonton tanpa gangguan, berinteraksi dengan yang Anda lihat, lalu membeli langsung di dalam konten — tanpa pengalihan.',
      },
      {
        title: 'Teknologi kami',
        text: 'SeSync®, mesin audiovisual yang dapat dibeli, mengenali produk di layar secara real-time dan membuatnya dapat dibeli tanpa meninggalkan video, di lebih dari 2.000 platform OTT.',
        points: [
          'Pengenalan AI dan kapsul interaktif dalam video',
          'Pembayaran «One Tap» bawaan, tanpa pengalihan',
          'Komponen milik sendiri: SeContent®, The25x®, Monetizer Studio®, OTT Integration',
        ],
      },
      {
        title: 'Paten Skoleom',
        text: 'Teknologi milik sendiri yang dilindungi oleh tiga keluarga paten, diajukan dan diperluas secara internasional di INPI, EUIPO, USPTO, dan WIPO. Merek Skoleom®, SeContent®, The25x®, dan Monetizer Studio® dilindungi di lebih dari 50 negara.',
        points: [
          'SKM1 — akses ke sumber daya jarak jauh dari konten audiovisual',
          'SKM2 — pengayaan konten audiovisual',
          'SKM3 — akses dari perangkat televisi terhubung',
        ],
      },
      {
        title: 'Ekosistem Skoleom',
        text: 'Satu kesatuan terintegrasi, dari konten hingga perdagangan: toko audiovisual, layanan publik, solusi profesional, dan entitas Grup.',
        points: [
          'Toko: The25x®, SeSports, Cares, SkoleToon’s',
          'Publik: Skoleom Page, SeSync, Shop, Magazine',
          'Profesional: Monetizer Studio, Skoleom Ads, Skoleom Pay, SVE API',
        ],
      },
      {
        title: 'Program pendanaan',
        text: 'Skoleom Invest memusatkan informasi seputar pendanaan grup (modal saham €194 jt, Skoleom Platform Inc.). Konten hanya bersifat informatif: bukan penawaran umum maupun nasihat investasi, dan setiap investasi mengandung risiko kehilangan modal.',
      },
    ],
  },
  sw: {
    title: 'Kuhusu Skoleom',
    intro: 'Dhamira, teknolojia, hataza, mfumo-ikolojia na ufadhili: misingi ya Skoleom Universe.',
    sections: [
      {
        title: 'Dhamira yetu',
        text: 'Kufanya kila video inunulike, popote duniani, bila pengo kati ya hamu na ununuzi. Hiyo ndiyo ahadi ya Watch. Touch. Buy.®: tazama bila kukatizwa, shirikiana na unachokiona, kisha nunua moja kwa moja ndani ya maudhui — bila kuelekezwa kwingine.',
      },
      {
        title: 'Teknolojia yetu',
        text: 'SeSync®, injini ya kusikia na kuona inayonunulika, hutambua bidhaa zilizo skrini kwa wakati halisi na kuzifanya zinunulike bila kuondoka kwenye video, kwenye majukwaa zaidi ya 2,000 ya OTT.',
        points: [
          'Utambuzi wa AI na kapsuli shirikishi ndani ya video',
          'Malipo ya «One Tap» yaliyojengwa ndani, bila kuelekezwa',
          'Vipengele vya kumiliki: SeContent®, The25x®, Monetizer Studio®, OTT Integration',
        ],
      },
      {
        title: 'Hataza ya Skoleom',
        text: 'Teknolojia ya kumiliki iliyolindwa na familia tatu za hataza, zilizowasilishwa na kupanuliwa kimataifa katika INPI, EUIPO, USPTO na WIPO. Alama za Skoleom®, SeContent®, The25x® na Monetizer Studio® zinalindwa katika nchi zaidi ya 50.',
        points: [
          'SKM1 — ufikiaji wa rasilimali za mbali kutoka maudhui ya kusikia na kuona',
          'SKM2 — uboreshaji wa maudhui ya kusikia na kuona',
          'SKM3 — ufikiaji kutoka kifaa cha televisheni kilichounganishwa',
        ],
      },
      {
        title: 'Mfumo-ikolojia wa Skoleom',
        text: 'Mkusanyiko uliounganishwa, kutoka maudhui hadi biashara: maduka ya kusikia na kuona, huduma za umma, suluhu za kitaalamu na taasisi za Kundi.',
        points: [
          'Maduka: The25x®, SeSports, Cares, SkoleToon’s',
          'Umma: Skoleom Page, SeSync, Shop, Magazine',
          'Wataalamu: Monetizer Studio, Skoleom Ads, Skoleom Pay, SVE API',
        ],
      },
      {
        title: 'Programu za ufadhili',
        text: 'Skoleom Invest hukusanya taarifa zinazohusu ufadhili wa kundi (mtaji wa hisa €194M, Skoleom Platform Inc.). Maudhui ya kuelimisha tu: si toleo kwa umma wala ushauri wa uwekezaji, na kila uwekezaji una hatari ya kupoteza mtaji.',
      },
    ],
  },
};

/** Surcouches d'intro des pages « showcase » (Pour tous / Groupe). */
export const SHOWCASE_INTRO_I18N: Record<string, { public?: string; group?: string }> = {
  en: {
    public:
      'Buy everything you see. Skoleom turns every video into a shopping experience — zero redirection. Pay without leaving the content, earn cashback and manage it all from your Wallet.',
    group:
      'Skoleom Group is the world’s first Retail Media & Transmedia group. Based in Paris, we build the technologies that let everyone buy directly inside audiovisual content.',
  },
  es: {
    public:
      'Compra todo lo que ves. Skoleom convierte cada vídeo en una experiencia de compra, sin redirecciones. Paga sin salir del contenido, acumula cashback y gestiónalo todo desde tu Wallet.',
    group:
      'Skoleom Group es el primer grupo mundial de Retail Media y Transmedia. Con sede en París, desarrollamos las tecnologías que permiten a cada persona comprar directamente dentro de un contenido audiovisual.',
  },
  de: {
    public:
      'Kaufe alles, was du siehst. Skoleom verwandelt jedes Video in ein Einkaufserlebnis – ganz ohne Weiterleitung. Bezahle, ohne den Inhalt zu verlassen, sammle Cashback und verwalte alles in deiner Wallet.',
    group:
      'Skoleom Group ist die weltweit erste Retail-Media- & Transmedia-Gruppe. Mit Sitz in Paris entwickeln wir die Technologien, mit denen jeder direkt in audiovisuellen Inhalten einkaufen kann.',
  },
  it: {
    public:
      'Acquista tutto ciò che vedi. Skoleom trasforma ogni video in un’esperienza di acquisto, senza reindirizzamenti. Paga senza lasciare il contenuto, accumula cashback e gestisci tutto dal tuo Wallet.',
    group:
      'Skoleom Group è il primo gruppo mondiale di Retail Media e Transmedia. Con sede a Parigi, sviluppiamo le tecnologie che permettono a ciascuno di acquistare direttamente all’interno di un contenuto audiovisivo.',
  },
  pt: {
    public:
      'Compre tudo o que vê. A Skoleom transforma cada vídeo numa experiência de compra, sem redirecionamentos. Pague sem sair do conteúdo, acumule cashback e faça a gestão de tudo a partir da sua Wallet.',
    group:
      'A Skoleom Group é o primeiro grupo mundial de Retail Media e Transmedia. Sediada em Paris, desenvolvemos as tecnologias que permitem a cada pessoa comprar diretamente dentro de um conteúdo audiovisual.',
  },
  nl: {
    public:
      'Koop alles wat je ziet. Skoleom maakt van elke video een winkelervaring — zonder omleiding. Betaal zonder de content te verlaten, verdien cashback en beheer alles vanuit je Wallet.',
    group:
      'Skoleom Group is de eerste Retail Media- & Transmedia-groep ter wereld. Vanuit Parijs bouwen we de technologieën waarmee iedereen rechtstreeks in audiovisuele content kan kopen.',
  },
  ru: {
    public:
      'Покупайте всё, что видите. Skoleom превращает каждое видео в покупательский опыт — без перенаправлений. Платите, не покидая контент, получайте кэшбэк и управляйте всем из вашего Wallet.',
    group:
      'Skoleom Group — первая в мире группа Retail Media и трансмедиа. Базируясь в Париже, мы создаём технологии, которые позволяют каждому покупать прямо внутри аудиовизуального контента.',
  },
  ar: {
    public:
      'اشترِ كل ما تراه. تحوّل Skoleom كل فيديو إلى تجربة تسوّق — دون أي إعادة توجيه. ادفع دون مغادرة المحتوى، واجمع استرداداً نقدياً، وأدِر كل شيء من محفظتك Wallet.',
    group:
      'Skoleom Group هي أول مجموعة عالمية في مجال Retail Media والوسائط العابرة. ومقرها باريس، نطوّر التقنيات التي تتيح للجميع الشراء مباشرة داخل المحتوى السمعي البصري.',
  },
  hi: {
    public:
      'जो दिखे, सब खरीदें। Skoleom हर वीडियो को एक शॉपिंग अनुभव में बदल देता है — शून्य रीडायरेक्ट। कंटेंट छोड़े बिना भुगतान करें, कैशबैक कमाएँ और सब कुछ अपने Wallet से प्रबंधित करें।',
    group:
      'Skoleom Group दुनिया का पहला Retail Media और ट्रांसमीडिया समूह है। पेरिस में स्थित, हम वे तकनीकें बनाते हैं जो हर किसी को ऑडियोविज़ुअल कंटेंट के भीतर सीधे खरीदारी करने देती हैं।',
  },
  zh: {
    public:
      '所见即可购。Skoleom 将每个视频变成购物体验——零跳转。无需离开内容即可付款，赚取返现，并在你的 Wallet 中统一管理。',
    group:
      'Skoleom Group 是全球首个零售媒体与跨媒体集团。总部位于巴黎，我们打造让每个人都能直接在视听内容中购买的技术。',
  },
  id: {
    public:
      'Beli semua yang Anda lihat. Skoleom mengubah setiap video menjadi pengalaman belanja — tanpa pengalihan. Bayar tanpa meninggalkan konten, kumpulkan cashback, dan kelola semuanya dari Wallet Anda.',
    group:
      'Skoleom Group adalah grup Retail Media & Transmedia pertama di dunia. Berbasis di Paris, kami membangun teknologi yang memungkinkan setiap orang membeli langsung di dalam konten audiovisual.',
  },
  sw: {
    public:
      'Nunua kila kitu unachokiona. Skoleom hubadilisha kila video kuwa uzoefu wa ununuzi — bila kuelekezwa kwingine. Lipa bila kuondoka kwenye maudhui, pata cashback na simamia yote kutoka Wallet yako.',
    group:
      'Skoleom Group ni kundi la kwanza duniani la Retail Media na Transmedia. Likiwa na makao yake Paris, tunajenga teknolojia zinazomwezesha kila mtu kununua moja kwa moja ndani ya maudhui ya kusikia na kuona.',
  },
};

/** Page « À propos » résolue pour une langue (FR par défaut). */
export function getAboutPage(lang: string): AboutPageT {
  const base = ABOUT_PAGE;
  const tr = ABOUT_I18N[lang];
  const moreLabel = MORE_LABEL[lang] ?? MORE_LABEL.fr;
  if (!tr) {
    return {
      title: base.title,
      intro: base.intro,
      moreLabel,
      sections: base.sections.map((s) => ({ title: s.title, text: s.text, points: s.points })),
    };
  }
  return {
    title: tr.title,
    intro: tr.intro,
    moreLabel,
    sections: base.sections.map((s, i) => ({
      title: tr.sections[i]?.title ?? s.title,
      text: tr.sections[i]?.text ?? s.text,
      points: tr.sections[i]?.points ?? s.points,
    })),
  };
}

/** Intro de la page Boutiques par langue (FR par défaut). */
const BOUTIQUES_INTRO_I18N: Record<string, string> = {
  fr: "Toutes les boutiques audiovisuelles de l'écosystème — sport, gaming, musique, voyage, OTT et bien plus.",
  en: 'All the audiovisual stores in the ecosystem — sport, gaming, music, travel, OTT and much more.',
  es: 'Todas las tiendas audiovisuales del ecosistema: deporte, gaming, música, viajes, OTT y mucho más.',
  de: 'Alle audiovisuellen Shops des Ökosystems — Sport, Gaming, Musik, Reisen, OTT und vieles mehr.',
  it: 'Tutti i negozi audiovisivi dell’ecosistema — sport, gaming, musica, viaggi, OTT e molto altro.',
  pt: 'Todas as lojas audiovisuais do ecossistema — desporto, gaming, música, viagens, OTT e muito mais.',
  nl: 'Alle audiovisuele winkels van het ecosysteem — sport, gaming, muziek, reizen, OTT en nog veel meer.',
  ru: 'Все аудиовизуальные магазины экосистемы — спорт, гейминг, музыка, путешествия, OTT и многое другое.',
  ar: 'كل المتاجر السمعية البصرية في المنظومة — الرياضة والألعاب والموسيقى والسفر وOTT وغير ذلك الكثير.',
  hi: 'इकोसिस्टम के सभी ऑडियोविज़ुअल स्टोर — खेल, गेमिंग, संगीत, यात्रा, OTT और बहुत कुछ।',
  zh: '生态系统中的所有视听商店——体育、游戏、音乐、旅行、OTT 等等。',
  id: 'Semua toko audiovisual dalam ekosistem — olahraga, gaming, musik, perjalanan, OTT, dan banyak lagi.',
  sw: 'Maduka yote ya kusikia na kuona katika mfumo-ikolojia — michezo, geimu, muziki, safari, OTT na mengi zaidi.',
};

/** Intro showcase résolue pour une langue (FR par défaut). */
export function getShowcaseIntro(lang: string, colKey: string): string {
  if (colKey === 'boutiques') return BOUTIQUES_INTRO_I18N[lang] ?? BOUTIQUES_INTRO_I18N.fr;
  const tr = SHOWCASE_INTRO_I18N[lang]?.[colKey as 'public' | 'group'];
  return tr ?? SHOWCASE_INTRO[colKey] ?? '';
}

/** Titres des colonnes showcase (hero) par langue. */
const COLUMN_TITLE_I18N: Record<string, Record<string, string>> = {
  fr: {
    public: 'Pour tous',
    group: 'Groupe',
    pros: 'Pour les Pros',
    boutiques: 'Boutiques audiovisuelles',
  },
  en: {
    public: 'For everyone',
    group: 'Group',
    pros: 'For professionals',
    boutiques: 'Audiovisual stores',
  },
  es: {
    public: 'Para todos',
    group: 'Grupo',
    pros: 'Para profesionales',
    boutiques: 'Tiendas audiovisuales',
  },
  de: { public: 'Für alle', group: 'Gruppe', pros: 'Für Profis', boutiques: 'Audiovisuelle Shops' },
  it: {
    public: 'Per tutti',
    group: 'Gruppo',
    pros: 'Per i professionisti',
    boutiques: 'Negozi audiovisivi',
  },
  pt: {
    public: 'Para todos',
    group: 'Grupo',
    pros: 'Para profissionais',
    boutiques: 'Lojas audiovisuais',
  },
  nl: {
    public: 'Voor iedereen',
    group: 'Groep',
    pros: 'Voor professionals',
    boutiques: 'Audiovisuele winkels',
  },
  ru: {
    public: 'Для всех',
    group: 'Группа',
    pros: 'Для профессионалов',
    boutiques: 'Аудиовизуальные магазины',
  },
  ar: {
    public: 'للجميع',
    group: 'المجموعة',
    pros: 'للمحترفين',
    boutiques: 'المتاجر السمعية البصرية',
  },
  hi: {
    public: 'सभी के लिए',
    group: 'समूह',
    pros: 'पेशेवरों के लिए',
    boutiques: 'ऑडियोविज़ुअल स्टोर',
  },
  zh: { public: '面向所有人', group: '集团', pros: '面向专业人士', boutiques: '视听商店' },
  id: {
    public: 'Untuk semua',
    group: 'Grup',
    pros: 'Untuk profesional',
    boutiques: 'Toko audiovisual',
  },
  sw: {
    public: 'Kwa wote',
    group: 'Kikundi',
    pros: 'Kwa wataalamu',
    boutiques: 'Maduka ya kusikia na kuona',
  },
};

/** Titre de colonne showcase résolu (FR par défaut). */
export function getColumnTitle(lang: string, colKey: string, fallback: string): string {
  return COLUMN_TITLE_I18N[lang]?.[colKey] ?? COLUMN_TITLE_I18N.fr[colKey] ?? fallback;
}

/* ── Groupe : perks + CTA ──────────────────────────────────────────── */

type PerkT = { title: string; text: string };
export const GROUP_PERKS_I18N: Record<string, PerkT[]> = {
  en: [
    {
      title: '€194M in share capital.',
      text: 'Skoleom Platform Inc. and 400+ proprietary technology blocks (INPI, EUIPO, USPTO, WIPO patents).',
    },
    {
      title: 'Technology and global distribution.',
      text: 'Transmedia retail media — proprietary technology and brand distribution on an international scale.',
    },
    {
      title: 'A daily global impact.',
      text: '10B+ skoleomized videos a day, 5.5B+ people reached, 2,000+ OTT platforms across 190 countries.',
    },
  ],
  es: [
    {
      title: '194 M€ de capital social.',
      text: 'Skoleom Platform Inc. y más de 400 bloques tecnológicos propios (patentes INPI, EUIPO, USPTO, OMPI).',
    },
    {
      title: 'Tecnología y distribución mundial.',
      text: 'Retail media transmedia — tecnología propia y distribución de marcas a escala internacional.',
    },
    {
      title: 'Un impacto diario mundial.',
      text: '10 000 M+ de vídeos skoleomizados al día, 5500 M+ de personas alcanzadas, 2000+ plataformas OTT en 190 países.',
    },
  ],
  de: [
    {
      title: '194 Mio. € Stammkapital.',
      text: 'Skoleom Platform Inc. und 400+ eigene Technologiebausteine (Patente INPI, EUIPO, USPTO, WIPO).',
    },
    {
      title: 'Technologie und weltweite Distribution.',
      text: 'Transmediales Retail Media — eigene Technologie und Markenvertrieb auf internationaler Ebene.',
    },
    {
      title: 'Täglich globale Wirkung.',
      text: '10 Mrd.+ skoleomisierte Videos pro Tag, 5,5 Mrd.+ erreichte Menschen, 2.000+ OTT-Plattformen in 190 Ländern.',
    },
  ],
  it: [
    {
      title: '194 M€ di capitale sociale.',
      text: 'Skoleom Platform Inc. e oltre 400 componenti tecnologici proprietari (brevetti INPI, EUIPO, USPTO, OMPI).',
    },
    {
      title: 'Tecnologia e distribuzione mondiale.',
      text: 'Retail media transmediale — tecnologia proprietaria e distribuzione di marchi su scala internazionale.',
    },
    {
      title: 'Un impatto quotidiano mondiale.',
      text: '10 mld+ di video skoleomizzati al giorno, 5,5 mld+ di persone raggiunte, 2.000+ piattaforme OTT in 190 Paesi.',
    },
  ],
  pt: [
    {
      title: '194 M€ de capital social.',
      text: 'Skoleom Platform Inc. e mais de 400 blocos tecnológicos próprios (patentes INPI, EUIPO, USPTO, OMPI).',
    },
    {
      title: 'Tecnologia e distribuição mundial.',
      text: 'Retail media transmédia — tecnologia própria e distribuição de marcas à escala internacional.',
    },
    {
      title: 'Um impacto diário mundial.',
      text: '10 mil M+ de vídeos skoleomizados por dia, 5,5 mil M+ de pessoas alcançadas, 2000+ plataformas OTT em 190 países.',
    },
  ],
  nl: [
    {
      title: '€ 194 mln maatschappelijk kapitaal.',
      text: 'Skoleom Platform Inc. en 400+ eigen technologiebouwstenen (octrooien INPI, EUIPO, USPTO, WIPO).',
    },
    {
      title: 'Technologie en wereldwijde distributie.',
      text: 'Transmediale retail media — eigen technologie en merkdistributie op internationale schaal.',
    },
    {
      title: 'Dagelijks wereldwijde impact.',
      text: '10 mld+ geskoleomiseerde video’s per dag, 5,5 mld+ bereikte mensen, 2.000+ OTT-platforms in 190 landen.',
    },
  ],
  ru: [
    {
      title: 'Уставный капитал 194 млн €.',
      text: 'Skoleom Platform Inc. и 400+ собственных технологических модулей (патенты INPI, EUIPO, USPTO, ВОИС).',
    },
    {
      title: 'Технология и мировая дистрибуция.',
      text: 'Трансмедийный retail media — собственная технология и дистрибуция брендов в международном масштабе.',
    },
    {
      title: 'Ежедневное мировое влияние.',
      text: '10 млрд+ «скулеомизированных» видео в день, 5,5 млрд+ охваченных людей, 2000+ OTT-платформ в 190 странах.',
    },
  ],
  ar: [
    {
      title: 'رأس مال قدره 194 مليون يورو.',
      text: 'Skoleom Platform Inc. وأكثر من 400 وحدة تقنية خاصة (براءات INPI وEUIPO وUSPTO وWIPO).',
    },
    {
      title: 'تقنية وتوزيع عالمي.',
      text: 'ريتيل ميديا عابر للوسائط — تقنية خاصة وتوزيع للعلامات التجارية على نطاق دولي.',
    },
    {
      title: 'أثر عالمي يومي.',
      text: 'أكثر من 10 مليار فيديو «مُسكلَم» يومياً، وأكثر من 5.5 مليار شخص يتم الوصول إليهم، وأكثر من 2000 منصة OTT في 190 دولة.',
    },
  ],
  hi: [
    {
      title: '€194M शेयर पूंजी।',
      text: 'Skoleom Platform Inc. और 400+ स्वामित्व वाले तकनीकी ब्लॉक (INPI, EUIPO, USPTO, WIPO पेटेंट)।',
    },
    {
      title: 'तकनीक और वैश्विक वितरण।',
      text: 'ट्रांसमीडिया रिटेल मीडिया — स्वामित्व वाली तकनीक और अंतरराष्ट्रीय स्तर पर ब्रांड वितरण।',
    },
    {
      title: 'प्रतिदिन वैश्विक प्रभाव।',
      text: 'प्रतिदिन 10B+ स्कोलियमाइज़्ड वीडियो, 5.5B+ लोगों तक पहुँच, 190 देशों में 2,000+ OTT प्लेटफ़ॉर्म।',
    },
  ],
  zh: [
    {
      title: '注册资本 1.94 亿欧元。',
      text: 'Skoleom Platform Inc. 及 400+ 自有技术模块（INPI、EUIPO、USPTO、WIPO 专利）。',
    },
    { title: '技术与全球分发。', text: '跨媒体零售媒体——自有技术与品牌的国际化分发。' },
    {
      title: '每日全球影响力。',
      text: '每天 100 亿+ 条 Skoleom 化视频，触达 55 亿+ 人，覆盖 190 个国家的 2000+ 个 OTT 平台。',
    },
  ],
  id: [
    {
      title: 'Modal saham €194 jt.',
      text: 'Skoleom Platform Inc. dan 400+ blok teknologi milik sendiri (paten INPI, EUIPO, USPTO, WIPO).',
    },
    {
      title: 'Teknologi dan distribusi global.',
      text: 'Retail media transmedia — teknologi milik sendiri dan distribusi merek dalam skala internasional.',
    },
    {
      title: 'Dampak global setiap hari.',
      text: '10M+ video terskoleomisasi per hari, 5,5M+ orang terjangkau, 2.000+ platform OTT di 190 negara.',
    },
  ],
  sw: [
    {
      title: 'Mtaji wa hisa €194M.',
      text: 'Skoleom Platform Inc. na vipengele 400+ vya teknolojia vya kumiliki (hataza za INPI, EUIPO, USPTO, WIPO).',
    },
    {
      title: 'Teknolojia na usambazaji wa kimataifa.',
      text: 'Retail media ya kuvuka media — teknolojia ya kumiliki na usambazaji wa chapa kwa kiwango cha kimataifa.',
    },
    {
      title: 'Athari ya kila siku duniani.',
      text: 'Video 10B+ zilizofanyiwa skoleom kwa siku, watu 5.5B+ wamefikiwa, majukwaa 2,000+ ya OTT katika nchi 190.',
    },
  ],
};

type GroupCtaT = {
  contactTitle: string;
  contactText: string;
  contactBtn: string;
  helpTitle: string;
  helpText: string;
  helpBtn: string;
};
export const GROUP_CTA_I18N: Record<string, GroupCtaT> = {
  en: {
    contactTitle: 'Contact us.',
    contactText:
      'Partnerships, press, investors or general inquiries — our team replies within 24 business hours. sellers@skoleom.com.',
    contactBtn: 'Contact us',
    helpTitle: 'Support.',
    helpText:
      'Skoleom Assistant available 24/7 — technical support and user help to make the most of the ecosystem.',
    helpBtn: 'Get help',
  },
  es: {
    contactTitle: 'Contáctanos.',
    contactText:
      'Alianzas, prensa, inversores o consultas generales — nuestro equipo responde en 24 h hábiles. sellers@skoleom.com.',
    contactBtn: 'Contáctanos',
    helpTitle: 'Asistencia.',
    helpText:
      'Asistente Skoleom disponible 24/7 — soporte técnico y ayuda al usuario para aprovechar al máximo el ecosistema.',
    helpBtn: 'Obtener ayuda',
  },
  de: {
    contactTitle: 'Kontaktieren Sie uns.',
    contactText:
      'Partnerschaften, Presse, Investoren oder allgemeine Anfragen — unser Team antwortet innerhalb von 24 Geschäftsstunden. sellers@skoleom.com.',
    contactBtn: 'Kontakt aufnehmen',
    helpTitle: 'Support.',
    helpText:
      'Skoleom-Assistent rund um die Uhr verfügbar — technischer Support und Nutzerhilfe, um das Ökosystem optimal zu nutzen.',
    helpBtn: 'Hilfe erhalten',
  },
  it: {
    contactTitle: 'Contattaci.',
    contactText:
      'Partnership, stampa, investitori o richieste generali — il nostro team risponde entro 24 ore lavorative. sellers@skoleom.com.',
    contactBtn: 'Contattaci',
    helpTitle: 'Assistenza.',
    helpText:
      'Assistente Skoleom disponibile 24/7 — supporto tecnico e aiuto agli utenti per sfruttare al meglio l’ecosistema.',
    helpBtn: 'Ottieni aiuto',
  },
  pt: {
    contactTitle: 'Fale connosco.',
    contactText:
      'Parcerias, imprensa, investidores ou questões gerais — a nossa equipa responde em 24 h úteis. sellers@skoleom.com.',
    contactBtn: 'Fale connosco',
    helpTitle: 'Suporte.',
    helpText:
      'Assistente Skoleom disponível 24/7 — suporte técnico e ajuda ao utilizador para aproveitar ao máximo o ecossistema.',
    helpBtn: 'Obter ajuda',
  },
  nl: {
    contactTitle: 'Neem contact op.',
    contactText:
      'Partnerschappen, pers, investeerders of algemene vragen — ons team reageert binnen 24 werkuren. sellers@skoleom.com.',
    contactBtn: 'Contact opnemen',
    helpTitle: 'Ondersteuning.',
    helpText:
      'Skoleom-assistent 24/7 beschikbaar — technische ondersteuning en gebruikershulp om het ecosysteem optimaal te benutten.',
    helpBtn: 'Hulp krijgen',
  },
  ru: {
    contactTitle: 'Свяжитесь с нами.',
    contactText:
      'Партнёрства, пресса, инвесторы или общие вопросы — наша команда отвечает в течение 24 рабочих часов. sellers@skoleom.com.',
    contactBtn: 'Связаться',
    helpTitle: 'Поддержка.',
    helpText:
      'Ассистент Skoleom доступен круглосуточно — техническая поддержка и помощь пользователям для полноценного использования экосистемы.',
    helpBtn: 'Получить помощь',
  },
  ar: {
    contactTitle: 'تواصل معنا.',
    contactText:
      'الشراكات أو الصحافة أو المستثمرون أو الاستفسارات العامة — يردّ فريقنا خلال 24 ساعة عمل. sellers@skoleom.com.',
    contactBtn: 'تواصل معنا',
    helpTitle: 'الدعم.',
    helpText:
      'مساعد Skoleom متاح على مدار الساعة — دعم تقني ومساعدة للمستخدمين للاستفادة الكاملة من المنظومة.',
    helpBtn: 'احصل على المساعدة',
  },
  hi: {
    contactTitle: 'हमसे संपर्क करें।',
    contactText:
      'साझेदारी, प्रेस, निवेशक या सामान्य पूछताछ — हमारी टीम 24 कार्य-घंटों में जवाब देती है। sellers@skoleom.com.',
    contactBtn: 'संपर्क करें',
    helpTitle: 'सहायता।',
    helpText:
      'Skoleom असिस्टेंट 24/7 उपलब्ध — इकोसिस्टम का पूरा लाभ उठाने के लिए तकनीकी सहायता और उपयोगकर्ता मदद।',
    helpBtn: 'सहायता पाएँ',
  },
  zh: {
    contactTitle: '联系我们。',
    contactText:
      '合作、媒体、投资者或一般咨询——我们的团队将在 24 个工作小时内回复。sellers@skoleom.com。',
    contactBtn: '联系我们',
    helpTitle: '支持。',
    helpText: 'Skoleom 助手全天候可用——提供技术支持与用户帮助，助你充分利用生态系统。',
    helpBtn: '获取帮助',
  },
  id: {
    contactTitle: 'Hubungi kami.',
    contactText:
      'Kemitraan, pers, investor, atau pertanyaan umum — tim kami merespons dalam 24 jam kerja. sellers@skoleom.com.',
    contactBtn: 'Hubungi kami',
    helpTitle: 'Dukungan.',
    helpText:
      'Asisten Skoleom tersedia 24/7 — dukungan teknis dan bantuan pengguna untuk memaksimalkan ekosistem.',
    helpBtn: 'Dapatkan bantuan',
  },
  sw: {
    contactTitle: 'Wasiliana nasi.',
    contactText:
      'Ushirikiano, vyombo vya habari, wawekezaji au maswali ya jumla — timu yetu hujibu ndani ya saa 24 za kazi. sellers@skoleom.com.',
    contactBtn: 'Wasiliana nasi',
    helpTitle: 'Usaidizi.',
    helpText:
      'Msaidizi wa Skoleom anapatikana 24/7 — usaidizi wa kiufundi na msaada kwa watumiaji ili kunufaika kikamilifu na mfumo-ikolojia.',
    helpBtn: 'Pata msaada',
  },
};

/** Perks Groupe résolus (FR par défaut, conserve l'icône FR). */
export function getGroupPerks(lang: string): Perk[] {
  const tr = GROUP_PERKS_I18N[lang];
  if (!tr) return GROUP_PERKS;
  return GROUP_PERKS.map((p, i) => ({
    icon: p.icon,
    title: tr[i]?.title ?? p.title,
    text: tr[i]?.text ?? p.text,
  }));
}

/** Bloc CTA Groupe résolu (FR par défaut, conserve les liens). */
export function getGroupCta(lang: string): typeof GROUP_CTA {
  const tr = GROUP_CTA_I18N[lang];
  if (!tr) return GROUP_CTA;
  return {
    ...GROUP_CTA,
    contactTitle: tr.contactTitle,
    contactText: tr.contactText,
    contactBtn: tr.contactBtn,
    helpTitle: tr.helpTitle,
    helpText: tr.helpText,
    helpBtn: tr.helpBtn,
  };
}
