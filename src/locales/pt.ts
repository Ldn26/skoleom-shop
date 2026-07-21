import type { LocaleResource } from './types';
import { getA11yFallback } from './a11yFallback';
import { profile } from 'node:console';

const resource = {
  common: {
    loading: 'Carregando...',
    actions: {
      close: 'Fechar menu',
      search: 'Pesquisar',
      backHome: 'Voltar ao início',
      login: 'Entrar',
      register: 'Criar conta',
      explore: 'Explorar',
    },
    states: {
      noResults: 'Sem resultados',
      noResultsFor: 'Nenhum resultado para “{{query}}”.',
    },
  },
  app: {
    skipToContent: 'Ir para o conteúdo principal',
    loading: 'Carregando...',
    notFound: {
      message: 'Esta página não existe no universo Skoleom.',
      cta: 'Voltar ao início',
    },
  },
  a11y: getA11yFallback('pt'),
  header: {
    brandHome: 'Início',
    essayage: 'Prova virtual',
    universe: 'Universe',
    navLabel: 'Navegação principal',
    searchPlaceholder: 'Pesquisar',
    profile : {
      profile: 'Meu perfil',
      logout: 'Sair',
    },
    searchAria: 'Pesquisar',
    language: {
      change: 'Alterar idioma',
    },
    actions: {
      settings: 'Configurações',
      favorites: 'Favoritos',
      cart: 'Carrinho',
      account: 'Conta do usuário',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },
    account: {
      dashboard: 'Meu painel',
      orders: 'Meus pedidos',
      favorites: 'Favoritos',
      admin: 'Console de administração',
      adminBadge: 'Admin',
      logout: 'Sair',
    },
    nav: {
      home: 'Início',
      stores: 'Lojas audiovisuais oficiais',
      everyone: 'Para todos',
      pros: 'Para Profissionais',
      news: 'Notícias',
      events: 'Eventos',
      group: 'Grupo',
      support: 'Suporte',
    },
  },
  cart: {
    title: 'Meu carrinho',
    itemCount: '{{count}} item(ns)',
    empty: {
      title: 'Seu carrinho está vazio',
      subtitle: 'Descubra nossos conteúdos compráveis',
    },
    summary: {
      subtotal: 'Subtotal',
      shipping: 'Entrega',
      free: 'Grátis',
      total: 'Total',
    },
    checkout: {
      cta: 'Pagar com Skoleom Pay',
      security: 'Pagamento soberano e seguro · compatível com GDPR',
    },
    aria: {
      decrease: 'Diminuir quantidade',
      increase: 'Aumentar quantidade',
      remove: 'Remover este item',
      close: 'Fechar carrinho',
    },
  },
  skoleomPage: {
    nav: {
      ariaLabel: 'Navegação Skoleom Page',
      home: 'Início',
      homeMobile: 'Início',
      trends: 'Tendências',
      trendsMobile: 'Tendências',
      create: 'Crie o seu SeContent',
      createMobile: 'Criar',
      profile: 'Perfil',
      profileMobile: 'Perfil',
    },
    explorer: {
      poweredBy: 'Com tecnologia SeSync',
      heroBefore: 'Veja. Toque. ',
      heroHighlight: 'Descubra.',
      heroSubtitle:
        'Uma pesquisa, todo o ecossistema Skoleom Universe — vídeo, música, media, compras. Cada resultado é uma porta de entrada imersiva.',
      logoAlt: 'Skoleom Page',
      searchPlaceholder: 'Pesquise um artista, filme, marca…',
      searchAria: 'Termo de pesquisa',
      searchSubmit: 'Iniciar pesquisa',
      searchReset: 'Repor pesquisa',
      exploreCta: 'Explorar',
      resultsFor: 'Resultados para',
      resultsOnPlatforms_one: 'em {{count}} plataforma',
      resultsOnPlatforms_other: 'em {{count}} plataformas',
      filter: 'Filtrar',
      platforms: 'Plataformas',
      filterPlatformsAria: 'Filtrar plataformas',
      selectAll: 'Tudo',
      selectNone: 'Nenhum',
      loading: 'A ligar ao universo Skoleom…',
      noResults:
        'Nenhum resultado corresponde aos seus filtros atuais. Selecione mais plataformas.',
    },
    actionCards: {
      sectionBefore: 'Descubra o ',
      sectionHighlight: 'universo Skoleom',
      mobile: {
        title: 'Mobile',
        description: 'Disponível em iOS e Android.',
      },
      tv: {
        title: 'TV',
        description: 'Veja na sua TV ligada.',
      },
      rewards: {
        title: 'Recompensas',
        description: 'Cashback nas suas compras premium.',
      },
      extension: {
        title: 'Extensão',
        description: 'Aceda a todas as funcionalidades.',
      },
      audio: {
        title: 'Áudio',
        description: 'Ouça em todos os seus dispositivos.',
      },
      gaming: {
        title: 'Gaming',
        description: 'Descubra as nossas apps de jogos.',
      },
    },
  },
  footer: {
    shopPrompt: {
      prefix: 'Você também pode comprar na',
      link: 'loja online Skoleom',
    },
    copyright: 'Todos os direitos reservados.',
    modal: {
      close: 'Fechar menu',
      title: 'Serviço indisponível',
      body: 'Este serviço não está disponível na sua região.',
    },
    columns: {
      '1': 'Sobre a Skoleom',
      '2': 'Lojas audiovisuais',
      '3': 'Para todos',
      '4': 'Para profissionais',
      '5': 'Grupo',
    },
    links: {
      '101': 'Nossa missão',
      '102': 'Nossa tecnologia',
      '103': 'O ecossistema Skoleom',
      '104': 'Programas de financiamento',
      '105': 'Patente Skoleom',
      '201': 'Explorar lojas',
      '202': 'Universo por categoria',
      '203': 'Lançar uma loja',
      '301': 'Como funciona',
      '302': 'Ver e comprar',
      '303': 'Cashback e recompensas',
      '304': 'Skoleom Wallet',
      '305': 'Segurança e privacidade',
      '401': 'Soluções business',
      '402': 'Monetize o seu conteúdo',
      '403': 'Criar uma loja audiovisual',
      '404': 'Distribua os seus produtos',
      '405': 'Publicidade interativa',
      '406': 'API e integrações',
      '501': 'Notícias',
      '502': 'Carreiras',
      '503': 'Investidores',
      '504': 'Imprensa',
      '505': 'Contacto',
      '506': 'Assistência',
    },
  },
  auth: {
    login: {
      title: 'Entrar',
      submit: 'Entrar',
    },
    register: {
      title: 'Criar conta',
      submit: 'Criar conta',
    },
  },
  dashboard: {
    user: {
      orders: 'Meus pedidos',
    },
    admin: {
      title: 'Console de administração',
    },
  },
  home: {
    hero: {
      title: 'Descubra o ecossistema global do Skoleom Group',
      description: {
        intro: 'A Skoleom Group está a revolucionar ',
        economy: 'a economia digital',
        mid: ' ao permitir a compra instantânea no coração dos conteúdos audiovisuais. Ligada a mais de ',
        ott: '2 000 plataformas OTT',
        join: ' e a ',
        web: 'milhares de milhões de sites',
        outro: ', a nossa tecnologia transforma cada ecrã num ponto de venda interativo.',
      },
      download: 'Transferir',
      application: 'a aplicação',
      extension: 'a extensão',
      watchVideo: 'Ver vídeo',
      ottMarqueeLabel: 'Plataformas de streaming e OTT',
      logoWtbAlt: 'Watch. Touch. Buy.',
      videoAria: 'Vídeo Skoleom',
      studioAria: 'Skoleom Studio',
      tagline1: 'CADA VÍDEO TORNA-SE UMA VERDADEIRA LOJA IMERSIVA:',
      tagline2:
        'UMA EXPERIÊNCIA FLUIDA, ELEGANTE E INTERATIVA, ONDE DESCOBRE, TOCA E COMPRA INSTANTANEAMENTE O QUE VÊ.',
    },
    skoletoonsHero: {
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
    actions: {
      discoverMagic: 'Descubra a magia',
    },
    welcome: {
      part1: 'Bem-vindo ao ',
      part2: 'futuro do ',
      part3: 'retail media',
      part4: 'e do ',
      part5: 'transmedia',
    },
    page: {
      heroClose: 'Fechar',
      interactiveKicker: 'Uma experiência interativa',
      interactiveSubtitle:
        'Do estúdio ao ecrã,\no Skoleom Studio dá vida às suas criações.\nA imersão continua.',
      ecosystemKicker: 'Um universo. Várias possibilidades.',
      ecosystemTitle: 'O ecossistema\nSkoleom',
      ecosystemIntro:
        'Mais de 2.000 plataformas, milhares de milhões de ecrãs: o ecossistema Skoleom liga criadores, marcas e audiências numa experiência imersiva onde cada conteúdo se torna loja.',
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
    news: {
      badge: 'Novidades',
    },
    boutiques: {
      title: 'Descubra as nossas lojas audiovisuais',
      searchPlaceholder: 'Pesquisar um site Skoleom (ex: market, sport, ott...)',
    },
    sections: {
      welcome: 'Bem-vindo ao futuro do retail media e do transmedia',
      how: 'Como o Skoleom funciona',
      moment: 'Cada momento. Torna-se. Uma oportunidade.',
      interactive: 'Uma experiência interativa',
      universe: 'Um universo. Várias possibilidades.',
      ecosystem: 'O ecossistema Skoleom',
      partners: 'Marcas parceiras',
    },
    descriptions: {
      detect:
        'Assim que assiste, o Skoleom reconhece o que aparece no ecrã e transforma-o em compra — um toque, sem sair do conteúdo.',
    },
    stats: {
      storePages: 'páginas Audiovisual Store por loja.',
    },
  },
  public: {
    retailMediaPlatform: {
      kicker: 'Retail Media',
      titlePrefix: 'A plataforma de retail media que transforma',
      titleHighlight: 'vídeo em comércio',
      description:
        'A Skoleom reúne vídeo comprável, medição e distribuição multiplataforma numa única plataforma de retail media — alcance audiências dentro do conteúdo que já assistem.',
      ctaBusiness: 'Soluções para empresas',
      ctaTechnology: 'A nossa tecnologia',
      pillars: {
        videoCommerce: {
          title: 'Video commerce',
          description:
            'Transforme qualquer vídeo numa loja comprável. Cada produto no ecrã torna-se comprável num toque, sem redirecionamento.',
        },
        unifiedMeasurement: {
          title: 'Medição unificada',
          description:
            'Acompanhe cada impressão, clique e conversão em todas as plataformas em tempo real — um painel, atribuição completa.',
        },
        crossPlatform: {
          title: 'Alcance multiplataforma',
          description:
            'Distribua campanhas em mais de 2000 plataformas OTT, redes sociais e na web aberta a partir de uma só integração.',
        },
      },
    },
    interactiveVideoCommerce: {
      kicker: 'Comércio de vídeo interativo',
      titlePrefix: 'Torne cada vídeo',
      titleHighlight: 'instantaneamente comprável',
      description:
        'A Skoleom integra pontos de compra interativos diretamente nos seus vídeos. Os espectadores compram o que veem — instantaneamente, sem nunca sair do conteúdo.',
      ctaTalk: 'Falar com um especialista',
      ctaOverview: 'Ver a visão geral',
      benefits: {
        conversion: 'Maior conversão — a compra acontece no momento do desejo.',
        reporting: 'Relatórios em tempo real — cada interação medida e atribuída.',
        friction:
          'Zero fricção — sem redirecionamento, sem troca de app, sem abandono de carrinho.',
      },
    },
    hub: {
      groupCarousel: {
        kicker: 'Todas as entidades',
        title: 'Grupo',
        subtitle: 'As sociedades satélite e os polos do grupo Skoleom.',
        searchPlaceholder: 'Pesquisar (ex.: studio, invest, lab...)',
        ariaLabel: 'Carrossel das entidades do Grupo',
      },
    },
    stores: {
      hero: {
        titleLine1: 'Descubra as nossas',
        titleLine2: 'Lojas audiovisuais',
        subtitle:
          'Um ecossistema imersivo. Mais de 50 aplicações web. Um único limite: a sua imaginação.',
      },
      search: {
        placeholder: 'Pesquisar loja ou marca',
        aria: 'Pesquisar loja ou marca',
      },
      sections: {
        official: 'Lojas oficiais',
        brands: 'Marcas disponíveis',
      },
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
      hero: {
        kicker: 'Como funciona',
        subtitle: 'Dentro do vídeo. No mesmo momento. Sem fricção.',
      },
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
      demo: {
        titlePrefix: 'Descubra a',
        titleHighlight: 'magia',
        cta: 'Iniciar demo interativa',
      },
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
      hero: {
        kicker: 'SeSync · A tecnologia',
        titlePrefix: 'Ligado a mais de',
        titleMiddle: 'e',
      },
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
