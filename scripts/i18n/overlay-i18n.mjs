/** Traductions public.* pour overlays (écosystème, actualités, assistance étendue, business, 404). */

import { euNotFound } from './eu-lang-strings.mjs';

const frEcosystem = {
  overview: {
    kicker: 'Groupe',
    title: 'Skoleom Group',
    subtitle: 'Les boutiques centrales de Skoleom Group.',
  },
  stats: {
    capital: 'de capital social',
    partnerBrands: 'marques partenaires',
    ottPlatforms: 'plateformes OTT',
    websitesConnected: 'sites web connectés',
  },
  architecture: {
    kicker: 'Architecture du groupe',
    title: 'Dualité des pôles',
    subtitle:
      'Deux head offices complémentaires : Retail Media (plateforme) et Transmédia (expériences physiques & contenus).',
    platform: {
      badge: 'Skoleom Platform Inc. · Retail Media',
      title: 'IA · E-commerce · Data analytics · Monétisation',
      desc: 'Focus sur la stack technologique : détection, matching produit, parcours d’achat in-content, reporting, attribution et optimisation.',
    },
    nexus: {
      badge: 'Skoleom Nexus Park · Transmédia',
      title: 'Lieux · Événements · Studios · Formation',
      desc: 'Production, campus, conventions et expériences physiques au service de la marque et des partenaires.',
      units: '+15 unités métier',
    },
  },
  poles: {
    kicker: 'Pôles stratégiques',
    title: 'Spécialisations',
    subtitle: 'Juridique, valorisation d’actifs et production hybride IA + live action.',
    explore: 'Explorer',
    items: {
      srm: {
        title: 'SRM · Skoleom Rights Management',
        desc: 'Gestion juridique, protection IP internationale et valorisation des actifs.',
      },
      'patrimoine-ia': {
        title: 'Gestion de Patrimoine IA',
        desc: "Valorisation de l'image des célébrités en actifs numériques monétisables (ex: Anthony Modeste).",
      },
      'skoleom-studio': {
        title: 'Skoleom Studio',
        desc: 'Production audiovisuelle hybride (IA + Live Action), réalisations produites à 85% par IA (ex: campagne Jean Reno x JAECOO).',
      },
    },
  },
  offers: {
    kicker: 'Offres',
    title: 'Modèle économique',
    subtitle:
      'Commissions, abonnements, licences et services. Survolez les cartes pour voir les détails.',
    productLabel: 'Produit',
    detailsLabel: 'Détails',
    revenueTitle: 'Flux de revenus & produits',
    revenueFlux: 'Flux de revenus',
    items: {
      asp: {
        title: 'Audiovisual Store Page',
        desc: 'Expérience d’achat in-content (video-to-commerce) pour plateformes & marques.',
        d0: 'Licence annuelle ~970k$',
        d1: 'Commission de référence : 20%',
        d2: 'Activation multi-OTT & web',
      },
      skoleomized: {
        title: 'Boutique Skoleomisée',
        desc: 'Déploiement d’une boutique/verticale “skoleomisée” (parcours + tracking + monétisation).',
        d0: 'Licence annuelle ~970k$',
        d1: 'Commission de référence : 20%',
        d2: 'Modules & services sur mesure',
      },
    },
  },
  model: {
    kicker: 'Modèle',
    title: 'Piliers & revenus',
    pillars: ['Technologie', 'Distribution', 'Monétisation', 'Data & IA'],
    revenue: [
      'Audiovisual Store Page',
      'Boutique Skoleomisée',
      'Frais marketplace',
      'Publicité',
      'Licences',
      'Production',
      'Abonnements SaaS',
    ],
    revenueDetails: {
      commissions: 'Commissions sur ventes',
      commissionsNote: '(référence : 20%).',
      subscriptions: 'Abonnements',
      subscriptionsNote: '(outils, analytics, dashboards).',
      licenses: 'Licences',
      licensesNote: '(stack, briques, déploiement par verticale).',
      services: 'Services',
      servicesNote: '(intégration, accompagnement, production).',
    },
  },
  tech: {
    kicker: 'Technologie',
    title: 'La technologie qui change tout',
    lockTitle: 'Le “verrou” Skoleom',
    lockSubtitle: 'SeSync + Monetizer Studio® comme socle, connectés à un réseau massif OTT & web.',
    stackLabel: 'Stack',
    stackTitle: 'SeSync · Monetizer Studio®',
    stackDesc:
      'Orchestration temps réel des capsules, tracking, matching produit, et activation du modèle économique in-content.',
    connectivityLabel: 'Connectivité',
    connectivityTitle: '+2 000 OTT · +1 milliard de sites',
    connectivityDesc:
      'Exemples OTT : Netflix, Disney+. Exemples web : IKEA, Nike. Une même logique d’achat « sans friction ».',
    sesync: {
      title: 'SeSync®',
      desc: 'Reconnaissance IA temps réel dans les flux vidéo. Détection produit, capsules contextuelles, achat en un clic sans quitter le player.',
    },
    monetizer: {
      title: 'Monetizer Studio®',
      desc: 'ERP/DCM de monétisation le plus puissant. Gestion campagnes, analytics, retargeting, performance produit.',
    },
    secontent: {
      title: 'SeContent®',
      desc: 'Création de contenus et orchestration de capsules. Transformez tout contenu en expérience shoppable.',
    },
  },
  groupe: {
    kicker: 'Groupe',
    title: 'Skoleom Group',
    subtitle:
      'Un aperçu des sociétés centrales du groupe. Les autres catégories auront leurs pages dédiées.',
    searchPlaceholder: 'Rechercher une société Skoleom (ex: market, sport, ott...)',
    noResults: 'Aucune société trouvée pour « {{query}} ».',
    carouselAria: 'Carrousel des sociétés du groupe',
  },
};

const enEcosystem = {
  overview: {
    kicker: 'Group',
    title: 'Skoleom Group',
    subtitle: 'Skoleom Group central stores.',
  },
  stats: {
    capital: 'in share capital',
    partnerBrands: 'partner brands',
    ottPlatforms: 'OTT platforms',
    websitesConnected: 'connected websites',
  },
  architecture: {
    kicker: 'Group architecture',
    title: 'Dual pillars',
    subtitle:
      'Two complementary head offices: Retail Media (platform) and Transmedia (physical experiences & content).',
    platform: {
      badge: 'Skoleom Platform Inc. · Retail Media',
      title: 'AI · E-commerce · Data analytics · Monetization',
      desc: 'Technology stack focus: detection, product matching, in-content purchase journeys, reporting, attribution and optimization.',
    },
    nexus: {
      badge: 'Skoleom Nexus Park · Transmedia',
      title: 'Venues · Events · Studios · Education',
      desc: 'Production, campus, conventions and physical experiences for the brand and partners.',
      units: '+15 business units',
    },
  },
  poles: {
    kicker: 'Strategic pillars',
    title: 'Specializations',
    subtitle: 'Legal, asset valuation and hybrid AI + live action production.',
    explore: 'Explore',
  },
  offers: {
    kicker: 'Offers',
    title: 'Business model',
    subtitle: 'Commissions, subscriptions, licenses and services. Hover cards for details.',
    productLabel: 'Product',
    detailsLabel: 'Details',
    revenueTitle: 'Revenue streams & products',
    revenueFlux: 'Revenue streams',
    items: {
      asp: {
        title: 'Audiovisual Store Page',
        desc: 'In-content shopping experience for platforms & brands.',
        d0: 'Annual license ~$970k',
        d1: 'Reference commission: 20%',
        d2: 'Multi-OTT & web activation',
      },
      skoleomized: {
        title: 'Skoleomized Store',
        desc: 'Deploy a skoleomized store (journey + tracking + monetization).',
        d0: 'Annual license ~$970k',
        d1: 'Reference commission: 20%',
        d2: 'Custom modules & services',
      },
    },
  },
  model: {
    kicker: 'Model',
    title: 'Pillars & revenue',
    pillars: ['Technology', 'Distribution', 'Monetization', 'Data & AI'],
    revenue: [
      'Audiovisual Store Page',
      'Skoleomized Store',
      'Marketplace fees',
      'Advertising',
      'Licensing',
      'Production',
      'SaaS subscriptions',
    ],
    revenueDetails: {
      commissions: 'Sales commissions',
      commissionsNote: '(reference: 20%).',
      subscriptions: 'Subscriptions',
      subscriptionsNote: '(tools, analytics, dashboards).',
      licenses: 'Licenses',
      licensesNote: '(stack, modules, vertical deployment).',
      services: 'Services',
      servicesNote: '(integration, support, production).',
    },
  },
  tech: {
    kicker: 'Technology',
    title: 'The technology that changes everything',
    lockTitle: 'The Skoleom “lock”',
    lockSubtitle:
      'SeSync + Monetizer Studio® as the core, connected to a massive OTT & web network.',
    stackLabel: 'Stack',
    stackTitle: 'SeSync · Monetizer Studio®',
    stackDesc:
      'Real-time capsule orchestration, tracking, product matching, and in-content monetization activation.',
    connectivityLabel: 'Connectivity',
    connectivityTitle: '2,000+ OTT · 1 billion websites',
    connectivityDesc:
      'OTT examples: Netflix, Disney+. Web examples: IKEA, Nike. The same frictionless purchase logic.',
    sesync: {
      title: 'SeSync®',
      desc: 'Real-time AI recognition in video streams. Product detection, contextual capsules, one-click purchase without leaving the player.',
    },
    monetizer: {
      title: 'Monetizer Studio®',
      desc: 'The most powerful monetization ERP/DCM. Campaign management, analytics, retargeting, product performance.',
    },
    secontent: {
      title: 'SeContent®',
      desc: 'Content creation and capsule orchestration. Turn any content into a shoppable experience.',
    },
  },
  groupe: {
    kicker: 'Group',
    title: 'Skoleom Group',
    subtitle:
      'An overview of the group’s core companies. Other categories will get dedicated pages.',
    searchPlaceholder: 'Search a Skoleom company (e.g. market, sport, ott...)',
    noResults: 'No company found for "{{query}}".',
    carouselAria: 'Group companies carousel',
  },
};

const esEcosystem = JSON.parse(JSON.stringify(enEcosystem));
esEcosystem.overview = {
  kicker: 'Grupo',
  title: 'Skoleom Group',
  subtitle: 'Las tiendas centrales de Skoleom Group.',
};
esEcosystem.stats = {
  capital: 'de capital social',
  partnerBrands: 'marcas asociadas',
  ottPlatforms: 'plataformas OTT',
  websitesConnected: 'sitios web conectados',
};
esEcosystem.architecture.kicker = 'Arquitectura del grupo';
esEcosystem.architecture.title = 'Dualidad de pilares';
esEcosystem.architecture.subtitle =
  'Dos sedes complementarias: Retail Media (plataforma) y Transmedia (experiencias físicas y contenidos).';
esEcosystem.poles = {
  kicker: 'Pilares estratégicos',
  title: 'Especializaciones',
  subtitle: 'Legal, valoración de activos y producción híbrida IA + live action.',
  explore: 'Explorar',
  items: {
    srm: {
      title: 'SRM · Skoleom Rights Management',
      desc: 'Gestión legal, protección IP internacional y valoración de activos.',
    },
    'patrimoine-ia': {
      title: 'Gestión de patrimonio IA',
      desc: 'Monetización de la imagen de celebridades como activos digitales (ej: Anthony Modeste).',
    },
    'skoleom-studio': {
      title: 'Skoleom Studio',
      desc: 'Producción audiovisual híbrida (IA + Live Action), 85% producida por IA (ej: campaña Jean Reno x JAECOO).',
    },
  },
};
esEcosystem.groupe.searchPlaceholder = 'Buscar una empresa Skoleom (ej: market, sport, ott...)';
esEcosystem.groupe.noResults = 'Ninguna empresa encontrada para « {{query}} ».';
esEcosystem.groupe.carouselAria = 'Carrusel de empresas del grupo';

const pick = (lang, fr, en, es) => {
  if (lang === 'fr') return fr;
  if (lang === 'es') return es;
  return en;
};

export function getEcosystem(lang) {
  return pick(lang, frEcosystem, enEcosystem, esEcosystem);
}

const enPolesItems = {
  srm: {
    title: 'SRM · Skoleom Rights Management',
    desc: 'Legal management, international IP protection and asset valuation.',
  },
  'patrimoine-ia': {
    title: 'AI Asset Management',
    desc: 'Monetize celebrity image as digital monetizable assets (e.g. Anthony Modeste).',
  },
  'skoleom-studio': {
    title: 'Skoleom Studio',
    desc: 'Hybrid audiovisual production (AI + Live Action), 85% AI-produced (e.g. Jean Reno x JAECOO campaign).',
  },
};

enEcosystem.poles = {
  kicker: 'Strategic pillars',
  title: 'Specializations',
  subtitle: 'Legal, asset valuation and hybrid AI + live action production.',
  explore: 'Explore',
  items: enPolesItems,
};

export function getNews(lang) {
  const isFr = lang === 'fr';
  const isEs = lang === 'es';
  return {
    titleHighlight: isFr ? 'Actualités' : isEs ? 'Noticias' : 'News',
    titleBrand: 'Skoleom',
    title: isFr ? 'Actualités Skoleom' : isEs ? 'Noticias Skoleom' : 'Skoleom News',
    articles: {
      a1: {
        cat: isFr ? 'Innovation' : lang === 'es' ? 'Innovación' : 'Innovation',
        title: isFr
          ? 'Skoleom Group lance Monetizer Studio 2.0 avec 50+ nouvelles APIs'
          : lang === 'es'
            ? 'Skoleom Group lanza Monetizer Studio 2.0 con más de 50 APIs nuevas'
            : 'Skoleom Group launches Monetizer Studio 2.0 with 50+ new APIs',
        desc: isFr
          ? "La nouvelle version intègre l'IA générative pour optimiser la monétisation des contenus en temps réel."
          : lang === 'es'
            ? 'La nueva versión integra IA generativa para optimizar la monetización de contenidos en tiempo real.'
            : 'The new version integrates generative AI to optimize content monetization in real time.',
      },
      a2: {
        cat: isFr ? 'Partnership' : lang === 'es' ? 'Alianza' : 'Partnership',
        title: isFr
          ? "Partenariat stratégique avec Oracle pour l'infrastructure cloud souveraine"
          : lang === 'es'
            ? 'Alianza estratégica con Oracle para infraestructura cloud soberana'
            : 'Strategic partnership with Oracle for sovereign cloud infrastructure',
        desc: isFr
          ? 'Skoleom Cloud devient la première infrastructure souveraine européenne dédiée au retail media.'
          : lang === 'es'
            ? 'Skoleom Cloud se convierte en la primera infraestructura soberana europea dedicada al retail media.'
            : 'Skoleom Cloud becomes the first European sovereign infrastructure dedicated to retail media.',
      },
      a3: {
        cat: isFr ? 'Expansion' : 'Expansion',
        title: isFr
          ? 'Skoleom Universe est désormais déployé dans 190 pays'
          : lang === 'es'
            ? 'Skoleom Universe ya está desplegado en 190 países'
            : 'Skoleom Universe is now deployed in 190 countries',
        desc: isFr
          ? 'SeContent® franchit le cap des +250M de créateurs internationaux.'
          : lang === 'es'
            ? 'SeContent® supera los 250M de creadores internacionales.'
            : 'SeContent® crosses the 250M international creators milestone.',
      },
      a4: {
        cat: isFr ? 'Tech' : lang === 'es' ? 'Tech' : 'Tech',
        title: isFr
          ? 'Brevet déposé : reconnaissance IA temps réel dans flux OTT'
          : lang === 'es'
            ? 'Patente presentada: reconocimiento IA en tiempo real en flujos OTT'
            : 'Patent filed: real-time AI recognition in OTT streams',
        desc: isFr
          ? "Notre algorithme atteint 97% de précision sur l'identification produit."
          : lang === 'es'
            ? 'Nuestro algoritmo alcanza el 97% de precisión en identificación de productos.'
            : 'Our algorithm achieves 97% accuracy on product identification.',
      },
    },
  };
}

export function getAssistance(lang) {
  const isFr = lang === 'fr';
  const isEs = lang === 'es';
  return {
    step1: {
      titleLine1: isFr ? "Besoin d'aide." : isEs ? '¿Necesitas ayuda?' : 'Need help.',
      titleLine2: isFr ? 'Nous sommes là.' : isEs ? 'Estamos aquí.' : 'We are here.',
      placeholder: isFr
        ? 'Décrivez votre problème en quelques mots ...'
        : isEs
          ? 'Describe tu problema en pocas palabras...'
          : 'Describe your issue in a few words...',
      continue: isFr ? 'Continuer' : isEs ? 'Continuar' : 'Continue',
      searchLabel: isFr
        ? 'Décrire votre problème'
        : isEs
          ? 'Describe tu problema'
          : 'Describe your issue',
      avgResponse: isFr
        ? 'Réponse moyenne : 2 min'
        : isEs
          ? 'Respuesta media: 2 min'
          : 'Average response: 2 min',
      available247: isFr ? 'Disponible 24/7' : isEs ? 'Disponible 24/7' : 'Available 24/7',
      satisfaction: isFr
        ? '4.8/5 satisfaction client'
        : isEs
          ? '4.8/5 satisfacción del cliente'
          : '4.8/5 customer satisfaction',
    },
    step2: {
      title: isFr
        ? 'Qualification du visiteur'
        : isEs
          ? 'Calificación del visitante'
          : 'Visitor qualification',
      badge: isFr ? 'ÉTAPE 2' : isEs ? 'PASO 2' : 'STEP 2',
      heading: isFr
        ? "Qui êtes-vous aujourd'hui ?"
        : isEs
          ? '¿Quién eres hoy?'
          : 'Who are you today?',
      subtitle: isFr
        ? 'Aidez-nous à vous orienter vers la bonne équipe en un clic.'
        : isEs
          ? 'Ayúdanos a dirigirte al equipo correcto en un clic.'
          : 'Help us route you to the right team in one click.',
      back: isFr
        ? "Retour à l'étape précédente"
        : isEs
          ? 'Volver al paso anterior'
          : 'Back to previous step',
    },
    step3: {
      badge: isFr ? 'ÉTAPE 3' : isEs ? 'PASO 3' : 'STEP 3',
      label: isFr
        ? 'FAQ contextuelle et self-service'
        : isEs
          ? 'FAQ contextual y autoservicio'
          : 'Contextual FAQ and self-service',
      heading: isFr
        ? 'Que pouvons-nous faire pour vous ?'
        : isEs
          ? '¿Qué podemos hacer por ti?'
          : 'What can we do for you?',
      subtitle: isFr
        ? 'La plupart des questions trouvent leur réponse ici, sans contact humain.'
        : isEs
          ? 'La mayoría de preguntas se responden aquí, sin contacto humano.'
          : 'Most questions are answered here, without human contact.',
      faqPlaceholder: isFr
        ? 'Ex : « rembourser une commande », « activer votre compte pro »...'
        : isEs
          ? 'Ej: « reembolsar un pedido », « activar mi cuenta pro »...'
          : 'E.g. “refund an order”, “activate my pro account”...',
      popularTopics: isFr ? 'Sujets populaires' : isEs ? 'Temas populares' : 'Popular topics',
      suggestedQuestions: isFr
        ? 'Questions suggérées'
        : isEs
          ? 'Preguntas sugeridas'
          : 'Suggested questions',
    },
    step4: {
      badge: isFr ? 'ÉTAPE 4' : isEs ? 'PASO 4' : 'STEP 4',
      label: isFr
        ? 'Centre d’aide & contact'
        : isEs
          ? 'Centro de ayuda y contacto'
          : 'Help center & contact',
    },
    step5: {
      badge: isFr ? 'ÉTAPE 5' : isEs ? 'PASO 5' : 'STEP 5',
      label: isFr
        ? 'Conversation et clôture'
        : isEs
          ? 'Conversación y cierre'
          : 'Conversation and wrap-up',
      title: isFr
        ? "Conversation avec Sky, l'assistant Skoleom"
        : isEs
          ? 'Conversación con Sky, el asistente Skoleom'
          : 'Conversation with Sky, Skoleom assistant',
      subtitle: isFr
        ? 'IA en première ligne, agent humain en relais si nécessaire.'
        : isEs
          ? 'IA en primera línea, agente humano si es necesario.'
          : 'AI first line, human agent if needed.',
      resolved: isFr ? 'Problème résolu' : isEs ? 'Problema resuelto' : 'Issue resolved',
      rateExperience: isFr
        ? 'Notez votre expérience pour nous aider à progresser en continu.'
        : isEs
          ? 'Valora tu experiencia para ayudarnos a mejorar.'
          : 'Rate your experience to help us improve.',
      restart: isFr ? 'Recommencer depuis le début' : isEs ? 'Empezar de nuevo' : 'Start over',
    },
    categories: {
      users: isFr ? 'Utilisateurs' : isEs ? 'Usuarios' : 'Users',
      solutions: isFr ? 'Solutions' : isEs ? 'Soluciones' : 'Solutions',
      business: isFr ? 'Entreprise' : isEs ? 'Empresa' : 'Business',
      support: isFr ? 'Support' : 'Soporte',
      chat: 'Chat',
    },
    faqTopics: {
      0: isFr ? 'Commande & livraison' : isEs ? 'Pedido y envío' : 'Order & delivery',
      1: isFr ? 'Paiement & facturation' : isEs ? 'Pago y facturación' : 'Payment & billing',
      2: isFr ? 'Compte & sécurité' : isEs ? 'Cuenta y seguridad' : 'Account & security',
      3: isFr ? 'Boutique audiovisuelle' : isEs ? 'Tienda audiovisual' : 'Audiovisual store',
      4: isFr ? 'Abonnement' : isEs ? 'Suscripción' : 'Subscription',
      5: isFr ? 'Problème technique' : isEs ? 'Problema técnico' : 'Technical issue',
    },
    profiles: {
      particulier: {
        title: isFr ? 'Particulier' : isEs ? 'Particular' : 'Individual',
        desc: isFr
          ? 'Compte, achats, abonnements personnels et utilisation quotidienne.'
          : isEs
            ? 'Cuenta, compras, suscripciones personales y uso diario.'
            : 'Account, purchases, personal subscriptions and daily use.',
      },
      'pro-boutique': {
        title: isFr ? 'Pro / Boutique' : isEs ? 'Pro / Tienda' : 'Pro / Store',
        desc: isFr
          ? 'Vendeur audiovisuel officiel Skoleom, gestion de catalogue.'
          : isEs
            ? 'Vendedor audiovisual oficial Skoleom, gestión de catálogo.'
            : 'Official Skoleom audiovisual seller, catalog management.',
      },
      entreprise: {
        title: isFr ? 'Entreprise' : isEs ? 'Empresa' : 'Business',
        desc: isFr
          ? "Contrats, intégrations, gestion d'équipes et solutions B2B."
          : isEs
            ? 'Contratos, integraciones, gestión de equipos y soluciones B2B.'
            : 'Contracts, integrations, team management and B2B solutions.',
      },
      'partenaire-presse': {
        title: isFr ? 'Partenaire / Presse' : isEs ? 'Socio / Prensa' : 'Partner / Press',
        desc: isFr
          ? 'Groupe Skoleom, événements, relations presse et partenariats.'
          : isEs
            ? 'Grupo Skoleom, eventos, relaciones con prensa y alianzas.'
            : 'Skoleom Group, events, press relations and partnerships.',
      },
    },
    prevStep: isFr
      ? "Retour à l'étape précédente"
      : isEs
        ? 'Volver al paso anterior'
        : 'Back to previous step',
  };
}

export function getBusiness(lang) {
  const isFr = lang === 'fr';
  const isEs = lang === 'es';
  return {
    kicker: isFr ? 'Pour les Pros' : isEs ? 'Para profesionales' : 'For professionals',
    titleLine1: isFr ? 'Monétisez' : isEs ? 'Monetiza' : 'Monetize',
    titleLine2: isFr ? 'vos contenus.' : isEs ? 'tu contenido.' : 'your content.',
    titleHighlight: isFr ? 'Maintenant.' : isEs ? 'Ahora.' : 'Now.',
    subtitle: isFr
      ? 'Marques, créateurs, plateformes OTT, retailers : intégrez SeSync à vos contenus et transformez chaque vue en transaction.'
      : isEs
        ? 'Marcas, creadores, plataformas OTT, retailers: integra SeSync en tu contenido y convierte cada vista en transacción.'
        : 'Brands, creators, OTT platforms, retailers: integrate SeSync into your content and turn every view into a transaction.',
    offers: {
      brands: {
        title: isFr ? 'Pour les Marques' : isEs ? 'Para marcas' : 'For brands',
        desc: isFr
          ? 'Distribuez vos produits dans des millions de vidéos. Mesurez chaque clic, chaque conversion.'
          : isEs
            ? 'Distribuye tus productos en millones de vídeos. Mide cada clic, cada conversión.'
            : 'Distribute your products across millions of videos. Measure every click, every conversion.',
        cta: isFr ? 'Devenir partenaire' : isEs ? 'Ser socio' : 'Become a partner',
      },
      creators: {
        title: isFr ? 'Pour les Créateurs' : isEs ? 'Para creadores' : 'For creators',
        desc: isFr
          ? 'Monétisez votre audience. Recevez des reversements en temps réel sur chaque vente.'
          : isEs
            ? 'Monetiza tu audiencia. Recibe pagos en tiempo real por cada venta.'
            : 'Monetize your audience. Receive real-time payouts on every sale.',
        cta: isFr ? 'Rejoindre' : isEs ? 'Unirse' : 'Join',
      },
      platforms: {
        title: isFr ? 'Pour les Plateformes' : isEs ? 'Para plataformas' : 'For platforms',
        desc: isFr
          ? 'Intégrez Skoleom Universe Engine à votre OTT. Augmentez vos revenus de 40%+.'
          : isEs
            ? 'Integra Skoleom Universe Engine en tu OTT. Aumenta tus ingresos un 40%+.'
            : 'Integrate Skoleom Universe Engine into your OTT. Increase revenue by 40%+.',
        cta: 'API SVE',
      },
    },
    showcase: {
      kicker: isFr ? 'Outils B2B' : isEs ? 'Herramientas B2B' : 'B2B tools',
      title: isFr ? 'Stack professionnelle' : isEs ? 'Stack profesional' : 'Professional stack',
      subtitle: isFr
        ? 'Monetizer Studio, Skoleom Pay, Skoleom Ads et SVE API — les briques techniques au cœur de votre monétisation.'
        : isEs
          ? 'Monetizer Studio, Skoleom Pay, Skoleom Ads y SVE API: la base técnica de tu monetización.'
          : 'Monetizer Studio, Skoleom Pay, Skoleom Ads and SVE API — the technical core of your monetization.',
    },
    carousel: {
      kicker: isFr ? 'Toutes les solutions' : isEs ? 'Todas las soluciones' : 'All solutions',
      title: isFr ? 'Pour les Pros' : isEs ? 'Para profesionales' : 'For professionals',
      subtitle: isFr
        ? "L'ensemble des solutions B2B disponibles dans l'écosystème Skoleom."
        : isEs
          ? 'Todas las soluciones B2B del ecosistema Skoleom.'
          : 'All B2B solutions available in the Skoleom ecosystem.',
      searchPlaceholder: isFr
        ? 'Rechercher (ex: pay, ads, api, cloud...)'
        : isEs
          ? 'Buscar (ej: pay, ads, api, cloud...)'
          : 'Search (e.g. pay, ads, api, cloud...)',
      ariaLabel: isFr
        ? 'Carrousel des solutions Pour les Pros'
        : isEs
          ? 'Carrusel de soluciones Para profesionales'
          : 'For professionals solutions carousel',
    },
  };
}

export function getNotFound(lang) {
  if (euNotFound[lang]) {
    return euNotFound[lang];
  }
  const isFr = lang === 'fr';
  const isEs = lang === 'es';
  return {
    unavailable: isFr ? 'Page indisponible' : isEs ? 'Página no disponible' : 'Page unavailable',
    heroLine1: isFr ? 'Cette page' : isEs ? 'Esta página' : 'This page',
    heroLine2: isFr ? "n'existe pas…" : isEs ? 'no existe…' : "doesn't exist…",
    heroLine3: isFr ? 'Encore.' : isEs ? 'Todavía.' : 'Yet.',
    badge: '404',
    title: isFr ? 'Page introuvable' : isEs ? 'Página no encontrada' : 'Page not found',
    subtitle: isFr
      ? "Cette page n'existe pas dans l'univers Skoleom."
      : isEs
        ? 'Esta página no existe en el universo Skoleom.'
        : 'This page does not exist in the Skoleom universe.',
    cta: isFr ? "Retour à l'accueil" : isEs ? 'Volver al inicio' : 'Back to home',
    building: isFr ? 'En construction' : isEs ? 'En construcción' : 'Under construction',
    buildingDesc: isFr
      ? 'Nous construisons quelque chose de révolutionnaire pour vous. Restez connectés.'
      : isEs
        ? 'Estamos construyendo algo revolucionario para ti. Mantente conectado.'
        : 'We are building something revolutionary for you. Stay tuned.',
    progress: isFr
      ? 'Progression du développement'
      : isEs
        ? 'Progreso del desarrollo'
        : 'Development progress',
    discover: isFr
      ? 'En attendant, découvrez'
      : isEs
        ? 'Mientras tanto, descubre'
        : 'In the meantime, discover',
    explore: isFr ? 'Explorer' : isEs ? 'Explorar' : 'Explore',
    productCardAria: isFr
      ? 'Découvrir {{title}}'
      : isEs
        ? 'Descubrir {{title}}'
        : 'Discover {{title}}',
    products: {
      sesync: {
        title: 'Skoleom SeSync',
        description: isFr
          ? 'Synchronisez. Découvrez. Achetez.'
          : isEs
            ? 'Sincroniza. Descubre. Compra.'
            : 'Sync. Discover. Buy.',
      },
      stores: {
        title: isFr
          ? 'Toutes les boutiques audiovisuelles'
          : isEs
            ? 'Todas las tiendas audiovisuales'
            : 'All audiovisual stores',
        description: isFr
          ? 'Explorez nos univers officiels.'
          : isEs
            ? 'Explora nuestros universos oficiales.'
            : 'Explore our official universes.',
      },
      watch: {
        title: 'Skoleom Watch',
        description: isFr
          ? 'Films, séries, vidéos et exclusivités.'
          : isEs
            ? 'Películas, series, vídeos y exclusivas.'
            : 'Movies, series, videos and exclusives.',
      },
      invest: {
        title: 'Skoleom Invest',
        description: isFr
          ? "Investissez dans l'avenir de l'audiovisuel."
          : isEs
            ? 'Invierte en el futuro del audiovisual.'
            : 'Invest in the future of audiovisual.',
      },
      pulse: {
        title: 'Skoleom Pulse',
        description: isFr
          ? 'Suivez les tendances en temps réel.'
          : isEs
            ? 'Sigue las tendencias en tiempo real.'
            : 'Follow trends in real time.',
      },
    },
  };
}

export { getAuthForLang as getAuthExtras } from './overlay-translations.mjs';
