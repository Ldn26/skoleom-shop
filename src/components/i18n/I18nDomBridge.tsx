import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { isRtlLanguage } from '../../i18n/urlLanguage';

const normalizeText = (value: string) => value.replace(/\s+/g, ' ').trim();

const phrasebook: Record<string, Partial<Record<string, string>>> = {
  'Découvrez nos': {
    en: 'Discover our',
    es: 'Descubre nuestras',
    ar: 'اكتشف',
    pt: 'Descubra nossas',
    hi: 'हमारे',
    zh: '探索我们的',
    id: 'Jelajahi',
    ru: 'Откройте наши',
    sw: 'Gundua',
    de: 'Entdecken Sie unsere',
    it: 'Scopri i nostri',
    nl: 'Ontdek onze',
  },
  'Boutiques Audiovisuelles': {
    en: 'Audiovisual Stores',
    es: 'tiendas audiovisuales',
    ar: 'متاجرنا السمعية والبصرية',
    pt: 'lojas audiovisuais',
    hi: 'ऑडियोविज़ुअल स्टोर खोजें',
    zh: '视听商店',
    id: 'Toko Audiovisual',
    ru: 'аудиовизуальные магазины',
    sw: 'Maduka ya sauti na video',
    de: 'Audiovisual-Stores',
    it: 'store audiovisivi',
    nl: 'audiovisuele winkels',
  },
  'Un écosystème immersif. Plus de 50 web applications. Une seule limite : vos envies.': {
    en: 'An immersive ecosystem. More than 50 web applications. One limit: your imagination.',
    es: 'Un ecosistema inmersivo. Más de 50 aplicaciones web. Un solo límite: tus ganas.',
    ar: 'نظام بيئي غامر. أكثر من 50 تطبيق ويب. الحد الوحيد هو رغباتك.',
    pt: 'Um ecossistema imersivo. Mais de 50 aplicações web. Um único limite: suas vontades.',
    hi: 'एक इमर्सिव इकोसिस्टम। 50 से अधिक वेब एप्लिकेशन। एक ही सीमा: आपकी इच्छा।',
    zh: '沉浸式生态系统。超过 50 个 Web 应用。唯一的限制是你的想象。',
    id: 'Ekosistem imersif. Lebih dari 50 aplikasi web. Satu batas: keinginan Anda.',
    ru: 'Иммерсивная экосистема. Более 50 веб-приложений. Единственное ограничение — ваши желания.',
    sw: 'Ekosistimu inayozamisha. Zaidi ya programu 50 za wavuti. Kikomo kimoja: matamanio yako.',
    de: 'Ein immersives Ökosystem. Über 50 Web-Apps. Ein Limit: Ihre Fantasie.',
    it: 'Un ecosistema immersivo. Oltre 50 applicazioni web. Un limite: la tua immaginazione.',
    nl: 'Een immersief ecosysteem. Meer dan 50 webapps. Eén limiet: uw verbeelding.',
  },
  'Boutiques officielles': {
    en: 'Official stores',
    es: 'Tiendas oficiales',
    ar: 'المتاجر الرسمية',
    pt: 'Lojas oficiais',
    hi: 'आधिकारिक स्टोर',
    zh: '官方商店',
    id: 'Toko resmi',
    ru: 'Официальные магазины',
    sw: 'Maduka rasmi',
    de: 'Offizielle Stores',
    it: 'Store ufficiali',
    nl: 'Officiële winkels',
  },
  'Marques disponibles': {
    en: 'Available brands',
    es: 'Marcas disponibles',
    ar: 'العلامات المتاحة',
    pt: 'Marcas disponíveis',
    hi: 'उपलब्ध ब्रांड',
    zh: '可用品牌',
    id: 'Merek tersedia',
    ru: 'Доступные бренды',
    sw: 'Chapa zinazopatikana',
    de: 'Verfügbare Marken',
    it: 'Brand disponibili',
    nl: 'Beschikbare merken',
  },
  'Comment ça marche': {
    en: 'How it works',
    es: 'Cómo funciona',
    ar: 'كيف يعمل',
    pt: 'Como funciona',
    hi: 'यह कैसे काम करता है',
    zh: '工作原理',
    id: 'Cara kerjanya',
    ru: 'Как это работает',
    sw: 'Jinsi inavyofanya kazi',
    de: 'So funktioniert es',
    it: 'Come funziona',
    nl: 'Hoe het werkt',
  },
  "Du plateau à l'écran, Skoleom Studio donne vie à vos créations. L'immersion continue.": {
    en: 'From set to screen, Skoleom Studio brings your creations to life. The immersion continues.',
    es: 'Del plató a la pantalla, Skoleom Studio da vida a tus creaciones. La inmersión continúa.',
    ar: 'من المنصة إلى الشاشة، يُحيي Skoleom Studio إبداعاتك. الانغماس مستمر.',
    pt: 'Do estúdio ao ecrã, o Skoleom Studio dá vida às suas criações. A imersão continua.',
    hi: 'सेट से स्क्रीन तक, Skoleom Studio आपकी रचनाओं को जीवंत करता है। इमर्शन जारी रहता है।',
    zh: '从片场到屏幕，Skoleom Studio 让你的创作鲜活呈现。沉浸不中断。',
    id: 'Dari set ke layar, Skoleom Studio menghidupkan kreasi Anda. Imersi terus berlanjut.',
    ru: 'От площадки до экрана Skoleom Studio оживляет ваши творения. Погружение не прерывается.',
    sw: 'Kutoka seti hadi skrini, Skoleom Studio huifanya kazi yako iwe hai. Uzoefu wa kuzama unaendelea.',
    de: 'Vom Set zum Screen erweckt Skoleom Studio Ihre Kreationen zum Leben. Die Immersion bleibt.',
    it: 'Dal set allo schermo, Skoleom Studio dà vita alle tue creazioni. L’immersione continua.',
    nl: 'Van set tot scherm brengt Skoleom Studio je creaties tot leven. De immersie gaat door.',
  },
  'Découvrez la': {
    en: 'Discover the',
    es: 'Descubre la',
    ar: 'اكتشف',
    pt: 'Descubra a',
    hi: 'खोजें',
    zh: '发现',
    id: 'Temukan',
    ru: 'Откройте',
    sw: 'Gundua',
    de: 'Entdecken Sie die',
    it: 'Scopri la',
    nl: 'Ontdek de',
  },
  magie: {
    en: 'magic',
    es: 'magia',
    ar: 'السحر',
    pt: 'magia',
    hi: 'जादू',
    zh: '魔力',
    id: 'keajaiban',
    ru: 'магию',
    sw: 'uchawi',
    de: 'Magie',
    it: 'magia',
    nl: 'magie',
  },
  'Tout le': {
    en: 'All the',
    es: 'Todo el',
    ar: 'كل',
    pt: 'Todo o',
    hi: 'सारा',
    zh: '所有',
    id: 'Semua',
    ru: 'Весь',
    sw: 'Yote',
    de: 'Alle',
    it: 'Tutto il',
    nl: 'Alle',
  },
  'contenu shoppable': {
    en: 'shoppable content',
    es: 'contenido comprable',
    ar: 'المحتوى القابل للتسوق',
    pt: 'conteúdo comprável',
    hi: 'खरीद योग्य कंटेंट',
    zh: '可购物内容',
    id: 'konten yang dapat dibeli',
    ru: 'покупаемый контент',
    sw: 'maudhui yanayoweza kununuliwa',
    de: 'shoppable Inhalte',
    it: 'contenuto shoppable',
    nl: 'shoppable content',
  },
  'Films · Séries · Lifestyle · Tous shoppables grâce à SeSync.': {
    en: 'Movies · Series · Lifestyle · All shoppable thanks to SeSync.',
    es: 'Películas · Series · Lifestyle · Todo comprable gracias a SeSync.',
    ar: 'أفلام · مسلسلات · لايف ستايل · كلها قابلة للتسوق بفضل SeSync.',
    pt: 'Filmes · Séries · Lifestyle · Tudo comprável graças ao SeSync.',
    hi: 'फिल्में · सीरीज़ · लाइफ़स्टाइल · SeSync के साथ सब खरीद योग्य।',
    zh: '电影 · 剧集 · 生活方式 · 借助 SeSync 全部可购物。',
    id: 'Film · Serial · Lifestyle · Semua dapat dibeli berkat SeSync.',
    ru: 'Фильмы · Сериалы · Lifestyle · Всё доступно для покупки благодаря SeSync.',
    sw: 'Filamu · Mfululizo · Mtindo wa maisha · Yote yanaweza kununuliwa kupitia SeSync.',
    de: 'Filme · Serien · Lifestyle · Alles kaufbar dank SeSync.',
    it: 'Film · Serie · Lifestyle · Tutto acquistabile grazie a SeSync.',
    nl: 'Films · Series · Lifestyle · Alles koopbaar dankzij SeSync.',
  },
  'SeSync · La technologie': {
    en: 'SeSync · The technology',
    es: 'SeSync · La tecnología',
    ar: 'SeSync · التقنية',
    pt: 'SeSync · A tecnologia',
    hi: 'SeSync · तकनीक',
    zh: 'SeSync · 技术',
    id: 'SeSync · Teknologi',
    ru: 'SeSync · Технология',
    sw: 'SeSync · Teknolojia',
    de: 'SeSync · Die Technologie',
    it: 'SeSync · La tecnologia',
    nl: 'SeSync · De technologie',
  },
  'Connecté à plus de': {
    en: 'Connected to more than',
    es: 'Conectado a más de',
    ar: 'متصل بأكثر من',
    pt: 'Conectado a mais de',
    hi: 'से अधिक से जुड़ा',
    zh: '连接超过',
    id: 'Terhubung ke lebih dari',
    ru: 'Подключено более чем к',
    sw: 'Imeunganishwa na zaidi ya',
    de: 'Verbunden mit mehr als',
    it: 'Connesso a più di',
    nl: 'Verbonden met meer dan',
  },
  et: {
    en: 'and',
    es: 'y',
    ar: 'و',
    pt: 'e',
    hi: 'और',
    zh: '和',
    id: 'dan',
    ru: 'и',
    sw: 'na',
    de: 'und',
    it: 'e',
    nl: 'en',
  },
  "Télécharger l'extension": {
    en: 'Download the extension',
    es: 'Descargar la extensión',
    ar: 'تنزيل الإضافة',
    pt: 'Baixar a extensão',
    hi: 'एक्सटेंशन डाउनलोड करें',
    zh: '下载扩展',
    id: 'Unduh ekstensi',
    ru: 'Скачать расширение',
    sw: 'Pakua kiendelezi',
    de: 'Erweiterung herunterladen',
    it: 'Scarica l’estensione',
    nl: 'Download de extensie',
  },
  'Bon retour.': {
    en: 'Welcome back.',
    es: 'Bienvenido de nuevo.',
    ar: 'مرحبًا بعودتك.',
    pt: 'Bem-vindo de volta.',
    hi: 'वापसी पर स्वागत है।',
    zh: '欢迎回来。',
    id: 'Selamat datang kembali.',
    ru: 'С возвращением.',
    sw: 'Karibu tena.',
    de: 'Willkommen zurück.',
    it: 'Bentornato.',
    nl: 'Welkom terug.',
  },
  'Connectez-vous à Skoleom Universe': {
    en: 'Sign in to Skoleom Universe',
    es: 'Inicia sesión en Skoleom Universe',
    ar: 'سجّل الدخول إلى Skoleom Universe',
    pt: 'Entre no Skoleom Universe',
    hi: 'Skoleom Universe में साइन इन करें',
    zh: '登录 Skoleom Universe',
    id: 'Masuk ke Skoleom Universe',
    ru: 'Войдите в Skoleom Universe',
    sw: 'Ingia kwenye Skoleom Universe',
    de: 'Bei Skoleom Universe anmelden',
    it: 'Accedi a Skoleom Universe',
    nl: 'Inloggen bij Skoleom Universe',
  },
  'Rejoignez l’Univers.': {
    en: 'Join the Universe.',
    es: 'Únete al universo.',
    ar: 'انضم إلى الكون.',
    pt: 'Junte-se ao universo.',
    hi: 'यूनिवर्स से जुड़ें।',
    zh: '加入宇宙。',
    id: 'Bergabunglah dengan Universe.',
    ru: 'Присоединяйтесь к вселенной.',
    sw: 'Jiunge na Universe.',
    de: 'Werden Sie Teil des Universums.',
    it: 'Unisciti all’Universo.',
    nl: 'Word lid van het Universum.',
  },
  'Créez votre compte Skoleom': {
    en: 'Create your Skoleom account',
    es: 'Crea tu cuenta de Skoleom',
    ar: 'أنشئ حسابك في Skoleom',
    pt: 'Crie sua conta Skoleom',
    hi: 'अपना Skoleom खाता बनाएँ',
    zh: '创建你的 Skoleom 账户',
    id: 'Buat akun Skoleom Anda',
    ru: 'Создайте аккаунт Skoleom',
    sw: 'Fungua akaunti yako ya Skoleom',
    de: 'Erstellen Sie Ihr Skoleom-Konto',
    it: 'Crea il tuo account Skoleom',
    nl: 'Maak uw Skoleom-account aan',
  },
  'Bienvenue,': {
    en: 'Welcome,',
    es: 'Bienvenido,',
    ar: 'مرحبًا،',
    pt: 'Bem-vindo,',
    hi: 'स्वागत है,',
    zh: '欢迎，',
    id: 'Selamat datang,',
    ru: 'Добро пожаловать,',
    sw: 'Karibu,',
    de: 'Willkommen,',
    it: 'Benvenuto,',
    nl: 'Welkom,',
  },
  'Votre univers Skoleom personnalisé.': {
    en: 'Your personalized Skoleom universe.',
    es: 'Tu universo Skoleom personalizado.',
    ar: 'عالم Skoleom المخصص لك.',
    pt: 'Seu universo Skoleom personalizado.',
    hi: 'आपका व्यक्तिगत Skoleom यूनिवर्स।',
    zh: '你的个性化 Skoleom 宇宙。',
    id: 'Semesta Skoleom pribadi Anda.',
    ru: 'Ваша персональная вселенная Skoleom.',
    sw: 'Ulimwengu wako binafsi wa Skoleom.',
    de: 'Ihr personalisiertes Skoleom-Universum.',
    it: 'Il tuo universo Skoleom personalizzato.',
    nl: 'Uw gepersonaliseerde Skoleom-universum.',
  },
  'Commandes récentes': {
    en: 'Recent orders',
    es: 'Pedidos recientes',
    ar: 'الطلبات الأخيرة',
    pt: 'Pedidos recentes',
    hi: 'हाल के ऑर्डर',
    zh: '最近订单',
    id: 'Pesanan terbaru',
    ru: 'Последние заказы',
    sw: 'Oda za hivi karibuni',
    de: 'Letzte Bestellungen',
    it: 'Ordini recenti',
    nl: 'Recente bestellingen',
  },
  'Tout voir': {
    en: 'View all',
    es: 'Ver todo',
    ar: 'عرض الكل',
    pt: 'Ver tudo',
    hi: 'सभी देखें',
    zh: '查看全部',
    id: 'Lihat semua',
    ru: 'Смотреть все',
    sw: 'Tazama yote',
    de: 'Alle ansehen',
    it: 'Mostra tutti',
    nl: 'Alles bekijken',
  },
  'Aucune commande pour le moment': {
    en: 'No orders yet',
    es: 'Aún no hay pedidos',
    ar: 'لا توجد طلبات بعد',
    pt: 'Ainda não há pedidos',
    hi: 'अभी कोई ऑर्डर नहीं',
    zh: '暂无订单',
    id: 'Belum ada pesanan',
    ru: 'Заказов пока нет',
    sw: 'Hakuna oda bado',
    de: 'Noch keine Bestellungen',
    it: 'Nessun ordine al momento',
    nl: 'Nog geen bestellingen',
  },
  'Découvrir les contenus': {
    en: 'Discover content',
    es: 'Descubrir contenidos',
    ar: 'اكتشف المحتوى',
    pt: 'Descobrir conteúdos',
    hi: 'कंटेंट खोजें',
    zh: '发现内容',
    id: 'Jelajahi konten',
    ru: 'Открыть контент',
    sw: 'Gundua maudhui',
    de: 'Inhalte entdecken',
    it: 'Scopri i contenuti',
    nl: 'Inhoud ontdekken',
  },
  'Se connecter': {
    en: 'Sign in',
    es: 'Iniciar sesión',
    ar: 'تسجيل الدخول',
    pt: 'Entrar',
    hi: 'लॉग इन',
    zh: '登录',
    id: 'Masuk',
    ru: 'Войти',
    sw: 'Ingia',
    de: 'Anmelden',
    it: 'Accedi',
    nl: 'Inloggen',
  },
  'Créer un compte': {
    en: 'Create account',
    es: 'Crear cuenta',
    ar: 'إنشاء حساب',
    pt: 'Criar conta',
    hi: 'खाता बनाएँ',
    zh: '创建账户',
    id: 'Buat akun',
    ru: 'Создать аккаунт',
    sw: 'Fungua akaunti',
    de: 'Konto erstellen',
    it: 'Crea un account',
    nl: 'Account aanmaken',
  },
  'Mot de passe': {
    en: 'Password',
    es: 'Contraseña',
    ar: 'كلمة المرور',
    pt: 'Senha',
    hi: 'पासवर्ड',
    zh: '密码',
    id: 'Kata sandi',
    ru: 'Пароль',
    sw: 'Nenosiri',
    de: 'Passwort',
    it: 'Password',
    nl: 'Wachtwoord',
  },
};

const translate = (value: string, language: string) => {
  const normalized = normalizeText(value);
  const direct = phrasebook[normalized]?.[language];
  return direct ?? value;
};

const TRANSLATABLE_ATTRIBUTES = ['placeholder', 'aria-label', 'title'] as const;

const translateAttributes = (element: Element, language: string) => {
  TRANSLATABLE_ATTRIBUTES.forEach((attribute) => {
    const currentValue = element.getAttribute(attribute);
    if (!currentValue) return;
    const originalAttribute = `data-i18n-original-${attribute}`;
    const original = element.getAttribute(originalAttribute) || currentValue;
    const translated = translate(original, language);
    if (!element.hasAttribute(originalAttribute)) {
      element.setAttribute(originalAttribute, original);
    }
    if (translated !== currentValue) {
      element.setAttribute(attribute, translated);
    }
  });
};

const translateElementAttributes = (root: ParentNode, language: string) => {
  if (root instanceof Element) {
    translateAttributes(root, language);
    root.querySelectorAll('*').forEach((element) => translateAttributes(element, language));
  }
};

export default function I18nDomBridge() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0];
    let translating = false;

    const translateDocument = () => {
      if (translating) return;
      translating = true;
      translateElementAttributes(document.body, language);
      translating = false;
    };

    document.documentElement.lang = language;
    document.documentElement.dir = isRtlLanguage(language) ? 'rtl' : 'ltr';
    translateDocument();

    const observer = new MutationObserver(() => {
      requestAnimationFrame(translateDocument);
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...TRANSLATABLE_ATTRIBUTES],
    });

    return () => observer.disconnect();
  }, [i18n.language, i18n.resolvedLanguage]);

  return null;
}
