import type { LocaleResource } from './types';
import { getA11yFallback } from './a11yFallback';

const resource = {
  common: {
    loading: 'Cargando...',
    actions: {
      close: 'Cerrar menú',
      search: 'Buscar',
      backHome: 'Volver al inicio',
      login: 'Iniciar sesión',
      register: 'Crear cuenta',
      explore: 'Explorar',
    },
    states: {
      noResults: 'Sin resultados',
      noResultsFor: 'Sin resultados para “{{query}}”.',
    },
  },
  app: {
    skipToContent: 'Ir al contenido principal',
    loading: 'Cargando...',
    notFound: {
      message: 'Esta página no existe en el universo Skoleom.',
      cta: 'Volver al inicio',
    },
  },
  a11y: getA11yFallback('es'),
  header: {
    brandHome: 'Inicio',
    universe: 'Universe',
    profile: {
      logout: 'Cerrar sesión',
      profile : 'Mi perfil',
    },
    navLabel: 'Navegación principal',
    searchPlaceholder: 'Buscar',
    searchAria: 'Buscar',
    language: {
      change: 'Cambiar idioma',
    },
    actions: {
      settings: 'Ajustes',
      favorites: 'Favoritos',
      cart: 'Carrito',
      account: 'Cuenta de usuario',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    account: {
      dashboard: 'Mi panel',
      orders: 'Mis pedidos',
      favorites: 'Favoritos',
      admin: 'Consola de administración',
      adminBadge: 'Admin',
      logout: 'Cerrar sesión',
    },
    nav: {
      home: 'Inicio',
      essayage: 'Prueba virtual',
      cabine: 'Cabina de prueba',
      stores: 'Tiendas audiovisuales',
      everyone: 'Para todos',
      pros: 'Para Profesionales',
      news: 'Noticias',
      events: 'Eventos',
      group: 'Grupo',
      support: 'Soporte',
    },
  },
  cart: {
    title: 'Mi carrito',
    itemCount: '{{count}} artículo(s)',
    empty: {
      title: 'Tu carrito está vacío',
      subtitle: 'Descubre nuestro contenido comprable',
    },
    summary: {
      subtotal: 'Subtotal',
      shipping: 'Envío',
      free: 'Gratis',
      total: 'Total',
    },
    checkout: {
      cta: 'Pagar con Skoleom Pay',
      security: 'Pago soberano y seguro · compatible con RGPD',
    },
    aria: {
      decrease: 'Disminuir cantidad',
      increase: 'Aumentar cantidad',
      remove: 'Eliminar este artículo',
      close: 'Cerrar carrito',
    },
  },
  skoleomPage: {
    nav: {
      ariaLabel: 'Navegación Skoleom Page',
      home: 'Inicio',
      homeMobile: 'Inicio',
      trends: 'Tendencias',
      trendsMobile: 'Tendencias',
      create: 'Cree su SeContent',
      createMobile: 'Crear',
      profile: 'Perfil',
      profileMobile: 'Perfil',
    },
    explorer: {
      poweredBy: 'Impulsado por SeSync',
      heroBefore: 'Mire. Toque. ',
      heroHighlight: 'Descubra.',
      heroSubtitle:
        'Una sola búsqueda, todo el ecosistema Skoleom Universe — vídeo, música, medios, compras. Cada resultado es una puerta de entrada inmersiva.',
      logoAlt: 'Skoleom Page',
      searchPlaceholder: 'Busque un artista, película, marca…',
      searchAria: 'Término de búsqueda',
      searchSubmit: 'Iniciar búsqueda',
      searchReset: 'Restablecer búsqueda',
      exploreCta: 'Explorar',
      resultsFor: 'Resultados para',
      resultsOnPlatforms_one: 'en {{count}} plataforma',
      resultsOnPlatforms_other: 'en {{count}} plataformas',
      filter: 'Filtrar',
      platforms: 'Plataformas',
      filterPlatformsAria: 'Filtrar plataformas',
      selectAll: 'Todo',
      selectNone: 'Ninguno',
      loading: 'Conectando al universo Skoleom…',
      noResults: 'Ningún resultado coincide con sus filtros actuales. Seleccione más plataformas.',
    },
    actionCards: {
      sectionBefore: 'Descubra el ',
      sectionHighlight: 'universo Skoleom',
      mobile: {
        title: 'Móvil',
        description: 'Disponible en iOS y Android.',
      },
      tv: {
        title: 'TV',
        description: 'Vea en su TV conectada.',
      },
      rewards: {
        title: 'Recompensas',
        description: 'Cashback en sus compras premium.',
      },
      extension: {
        title: 'Extensión',
        description: 'Acceda a todas las funciones.',
      },
      audio: {
        title: 'Audio',
        description: 'Escuche en todos sus dispositivos.',
      },
      gaming: {
        title: 'Gaming',
        description: 'Descubra nuestras apps de juegos.',
      },
    },
  },
  footer: {
    shopPrompt: {
      prefix: 'También puedes comprar en',
      link: 'la tienda online de Skoleom',
    },
    copyright: 'Todos los derechos reservados.',
    modal: {
      close: 'Cerrar menú',
      title: 'Servicio no disponible',
      body: 'Este servicio no está disponible en tu región.',
    },
    columns: {
      '1': 'Acerca de Skoleom',
      '2': 'Tiendas audiovisuales',
      '3': 'Para todos',
      '4': 'Para profesionales',
      '5': 'Grupo',
    },
    links: {
      '101': 'Nuestra misión',
      '102': 'Nuestra tecnología',
      '103': 'El ecosistema Skoleom',
      '104': 'Programas de financiación',
      '105': 'Patente Skoleom',
      '201': 'Explorar tiendas',
      '202': 'Universo por categoría',
      '203': 'Lanzar una tienda',
      '301': 'Cómo funciona',
      '302': 'Ver y comprar',
      '303': 'Cashback y recompensas',
      '304': 'Skoleom Wallet',
      '305': 'Seguridad y privacidad',
      '401': 'Soluciones business',
      '402': 'Monetice su contenido',
      '403': 'Crear una tienda audiovisual',
      '404': 'Distribuya sus productos',
      '405': 'Publicidad interactiva',
      '406': 'API e integraciones',
      '501': 'Actualidades',
      '502': 'Carreras',
      '503': 'Inversores',
      '504': 'Prensa',
      '505': 'Contacto',
      '506': 'Asistencia',
    },
  },
  auth: {
    login: {
      title: 'Iniciar sesión',
      submit: 'Iniciar sesión',
    },
    register: {
      title: 'Crear cuenta',
      submit: 'Crear cuenta',
    },
  },
  dashboard: {
    user: {
      orders: 'Mis pedidos',
    },
    admin: {
      title: 'Consola de administración',
    },
  },
  home: {
    hero: {
      title: 'Descubre el ecosistema global de Skoleom Group',
      description: {
        intro: 'Skoleom Group revoluciona ',
        economy: 'la economía digital',
        mid: ' permitiendo la compra instantánea en el corazón de los contenidos audiovisuales. Conectada a más de ',
        ott: '2 000 plataformas OTT',
        join: ' y a ',
        web: 'miles de millones de sitios web',
        outro: ', nuestra tecnología transforma cada pantalla en un punto de venta interactivo.',
      },
      download: 'Descargar',
      application: 'la aplicación',
      extension: 'la extensión',
      watchVideo: 'Ver vídeo',
      ottMarqueeLabel: 'Plataformas de streaming y OTT',
      logoWtbAlt: 'Watch. Touch. Buy.',
      videoAria: 'Vídeo Skoleom',
      studioAria: 'Skoleom Studio',
      tagline1: 'CADA VÍDEO SE CONVIERTE EN UNA VERDADERA TIENDA INMERSIVA:',
      tagline2:
        'UNA EXPERIENCIA FLUIDA, ELEGANTE E INTERACTIVA, DONDE DESCUBRES, TOCAS Y COMPRAS AL INSTANTE LO QUE VES.',
    },
    skoletoonsHero: {
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
    actions: {
      discoverMagic: 'Descubre la magia',
    },
    welcome: {
      part1: 'Bienvenido al ',
      part2: 'futuro del ',
      part3: 'retail media',
      part4: 'y del ',
      part5: 'transmedia',
    },
    page: {
      heroClose: 'Cerrar',
      interactiveKicker: 'Una experiencia interactiva',
      interactiveSubtitle:
        'Del plató a la pantalla,\nSkoleom Studio da vida a tus creaciones.\nLa inmersión continúa.',
      ecosystemKicker: 'Un universo. Múltiples posibilidades.',
      ecosystemTitle: 'El ecosistema\nSkoleom',
      ecosystemIntro:
        'Más de 2.000 plataformas, miles de millones de pantallas: el ecosistema Skoleom conecta creadores, marcas y audiencias en una experiencia inmersiva donde cada contenido se convierte en tienda.',
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
    news: {
      badge: 'Novedades',
    },
    boutiques: {
      title: 'Descubre nuestras tiendas audiovisuales',
      searchPlaceholder: 'Buscar un sitio Skoleom (ej: market, sport, ott...)',
    },
    sections: {
      welcome: 'Bienvenido al futuro del retail media y del transmedia',
      how: 'Cómo funciona Skoleom',
      moment: 'Cada momento. Se convierte. En una oportunidad.',
      interactive: 'Una experiencia interactiva',
      universe: 'Un universo. Múltiples posibilidades.',
      ecosystem: 'El ecosistema Skoleom',
      partners: 'Marcas asociadas',
    },
    descriptions: {
      detect:
        'En cuanto miras, Skoleom reconoce lo que aparece en pantalla y lo convierte en compra — un toque, sin salir del contenido.',
    },
    stats: {
      storePages: 'páginas Audiovisual Store por tienda.',
    },
  },
  public: {
    retailMediaPlatform: {
      kicker: 'Retail Media',
      titlePrefix: 'La plataforma de retail media que convierte',
      titleHighlight: 'el vídeo en comercio',
      description:
        'Skoleom unifica el vídeo comprable, la medición y la distribución multiplataforma en una sola plataforma de retail media: llega a tu audiencia dentro del contenido que ya ve.',
      ctaBusiness: 'Soluciones para empresas',
      ctaTechnology: 'Nuestra tecnología',
      pillars: {
        videoCommerce: {
          title: 'Video commerce',
          description:
            'Convierte cualquier vídeo en una tienda comprable. Cada producto en pantalla se compra en un toque, sin redirección.',
        },
        unifiedMeasurement: {
          title: 'Medición unificada',
          description:
            'Mide cada impresión, clic y conversión en todas las plataformas en tiempo real: un solo panel, atribución completa.',
        },
        crossPlatform: {
          title: 'Alcance multiplataforma',
          description:
            'Distribuye campañas en más de 2000 plataformas OTT, redes sociales y la web abierta desde una sola integración.',
        },
      },
    },
    interactiveVideoCommerce: {
      kicker: 'Comercio de vídeo interactivo',
      titlePrefix: 'Haz que cada vídeo sea',
      titleHighlight: 'comprable al instante',
      description:
        'Skoleom integra puntos de compra interactivos directamente en tus vídeos. Los espectadores compran lo que ven, al instante, sin salir del contenido.',
      ctaTalk: 'Hablar con un experto',
      ctaOverview: 'Ver la visión general',
      benefits: {
        conversion: 'Mayor conversión: la compra ocurre en el momento del deseo.',
        reporting: 'Informes en tiempo real: cada interacción medida y atribuida.',
        friction: 'Cero fricción: sin redirección, sin cambiar de app, sin abandono del carrito.',
      },
    },
    hub: {
      groupCarousel: {
        kicker: 'Todas las entidades',
        title: 'Grupo',
        subtitle: 'Las sociedades satélite y los polos del grupo Skoleom.',
        searchPlaceholder: 'Buscar (ej.: studio, invest, lab...)',
        ariaLabel: 'Carrusel de entidades del Grupo',
      },
    },
    stores: {
      hero: {
        titleLine1: 'Descubre nuestras',
        titleLine2: 'Tiendas audiovisuales',
        subtitle: 'Un ecosistema inmersivo. Más de 50 aplicaciones web. Un solo límite: tus ganas.',
      },
      search: {
        placeholder: 'Buscar una tienda o marca',
        aria: 'Buscar una tienda o marca',
      },
      sections: {
        official: 'Tiendas oficiales',
        brands: 'Marcas disponibles',
      },
      showcase: {
        kicker: 'Tiendas destacadas',
        title: 'Universos principales',
        subtitle:
          'Deporte, OTT, música y gaming — una mirada a tiendas audiovisuales emblemáticas.',
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
      hero: {
        kicker: 'SeSync · La tecnología',
        titlePrefix: 'Conectado a más de',
        titleMiddle: 'y',
      },
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
