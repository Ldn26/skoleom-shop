/**
 * Traductions de la page « Créer votre boutique » native (multilingue).
 * Source FR = contenu actuel de CreerBoutiqueNativePage.tsx.
 * Les surcouches I18N par langue retombent clé par clé sur le FR (aucune régression).
 * Les noms de marque (Skoleom, SeSync, Monetizer Studio, Token, « Watch. Touch. Buy. »),
 * les chiffres, prix et pourcentages restent inchangés.
 * Référence EN : tableau PAIRS de footer-pages/pour-les-pros/creer-boutique.html.
 */

interface Step {
  title: string;
  text: string;
}
interface Stat {
  label: string;
}
interface HiwCard {
  title: string;
  text: string;
}
interface Advantage {
  title: string;
  text: string;
}
interface PriceRows {
  install: string;
  maintenance: string;
  revenue: string;
  revenueVal: string;
  delivery: string;
  deliveryVal: string;
}
interface Plan {
  badge?: string;
  name: string;
  seg: string;
  lic: string;
  rows: PriceRows;
}

export interface CreerBoutiqueStrings {
  hero: {
    title1: string;
    title2: string;
    title3: string;
    sub: string;
    subNb: string;
  };
  principe: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    steps: [Step, Step, Step];
    stats: [Stat, Stat, Stat, Stat];
  };
  hiw: {
    eyebrow: string;
    h2: string;
    cards: [HiwCard, HiwCard, HiwCard];
  };
  avantages: {
    eyebrow: string;
    h2: string;
    items: [Advantage, Advantage, Advantage];
  };
  offres: {
    eyebrow: string;
    h2: string;
    chip1: string;
    chip2: string;
    chip3: string;
    plans: [Plan, Plan, Plan, Plan];
    note: string;
  };
  finalCta: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    text: string;
    cta: string;
  };
  rowLabels: {
    install: string;
    maintenance: string;
    revenue: string;
    delivery: string;
  };
}

const FR: CreerBoutiqueStrings = {
  hero: {
    title1: 'Créez votre',
    title2: 'boutique audiovisuelle',
    title3: 'skoléomisée',
    sub: 'La première technologie au monde qui transforme chaque vidéo en point de vente intelligent',
    subNb: 'sans redirection, sans interruption.',
  },
  principe: {
    eyebrow: 'Le principe',
    h2a: 'Chaque vidéo devient',
    h2b: 'un point de vente',
    steps: [
      {
        title: 'Regardez',
        text: "Vos contenus comme d'habitude, sur plus de 2 000 plateformes OTT et 1 milliard de sites web.",
      },
      {
        title: 'Touchez',
        text: "SeSync analyse en temps réel ce qui apparaît à l'écran et révèle instantanément le produit.",
      },
      {
        title: 'Achetez',
        text: "L'achat se fait à l'intérieur même de la vidéo. Votre audience ne quitte jamais votre écosystème.",
      },
    ],
    stats: [
      { label: 'Couverture brevetée' },
      { label: 'Marché adressable' },
      { label: 'Plateformes OTT' },
      { label: 'Sites web connectés' },
    ],
  },
  hiw: {
    eyebrow: 'Fonctionnement',
    h2: 'Comment ça marche',
    cards: [
      {
        title: 'Créez votre boutique',
        text: 'Donnez vie à votre univers audiovisuel, entièrement à votre image — sur une plateforme existante ou une nouvelle création.',
      },
      {
        title: 'Connectez & activez votre token',
        text: 'La convergence intègre automatiquement les contenus les plus populaires adaptés à votre marque, et active votre token Skoleom.',
      },
      {
        title: 'Générez des revenus',
        text: 'Chaque vue, chaque interaction, chaque achat — même hors de votre plateforme — devient une source de revenus automatiques.',
      },
    ],
  },
  avantages: {
    eyebrow: 'Votre boutique audiovisuelle',
    h2: 'Les avantages',
    items: [
      {
        title: 'Une communauté mondiale',
        text: "Rejoignez une nouvelle génération de créateurs et d'entrepreneurs audiovisuels, en pleine expansion.",
      },
      {
        title: 'Un référencement révolutionnaire',
        text: 'Vos mots-clés intégrés au code des vidéos skoléomisées : visibilité organique maximale, sans publicité payante.',
      },
      {
        title: 'Un Monetizer Studio à votre effigie',
        text: 'Votre token, vos analyses et tous vos outils de monétisation réunis pour faire croître votre empire numérique.',
      },
    ],
  },
  offres: {
    eyebrow: 'Modèle économique',
    h2: 'Les offres',
    chip1: "Redistribution jusqu'à 30 %",
    chip2: 'Livraison en 45 jours',
    chip3: 'Monetizer Studio',
    plans: [
      {
        badge: 'Le plus choisi',
        name: 'Grands Comptes',
        seg: 'Plateforme existante',
        lic: "Licence d'exploitation / an",
        rows: {
          install: "Frais d'installation",
          maintenance: 'Maintenance / mois',
          revenue: 'Revenus est. / an',
          revenueVal: "jusqu'à 50 M€",
          delivery: 'Délai de livraison',
          deliveryVal: '45 jours',
        },
      },
      {
        name: 'Grands Comptes',
        seg: 'Nouvelle plateforme',
        lic: "Licence d'exploitation / an",
        rows: {
          install: "Frais d'installation",
          maintenance: 'Maintenance / mois',
          revenue: 'Revenus est. / an',
          revenueVal: "jusqu'à 30 M€",
          delivery: 'Délai de livraison',
          deliveryVal: '45 jours',
        },
      },
      {
        name: 'PME & ETI',
        seg: 'Croissance',
        lic: "Licence d'exploitation / an",
        rows: {
          install: "Frais d'installation",
          maintenance: 'Maintenance / mois',
          revenue: 'Revenus est. / an',
          revenueVal: "jusqu'à 10 M€",
          delivery: 'Délai de livraison',
          deliveryVal: '45 jours',
        },
      },
      {
        name: 'Start-up',
        seg: 'Lancement',
        lic: "Licence d'exploitation / an",
        rows: {
          install: "Frais d'installation",
          maintenance: 'Maintenance / mois',
          revenue: 'Revenus est. / an',
          revenueVal: "jusqu'à 2 M€",
          delivery: 'Délai de livraison',
          deliveryVal: '45 jours',
        },
      },
    ],
    note: 'Estimations de revenus moyens pour la plateforme hôte, basées sur la monétisation des contenus et des achats intégrés. Montants HT.',
  },
  finalCta: {
    eyebrow: "Rejoignez l'écosystème",
    h2a: 'Créez dès maintenant',
    h2b: 'votre boutique',
    text: 'Entrez dans une nouvelle ère du commerce intégré où chaque contenu devient une opportunité de conversion.',
    cta: 'Inscription',
  },
  rowLabels: {
    install: "Frais d'installation",
    maintenance: 'Maintenance / mois',
    revenue: 'Revenus est. / an',
    delivery: 'Délai de livraison',
  },
};

const I18N: Partial<Record<string, Partial<CreerBoutiqueStrings>>> = {
  en: {
    hero: {
      title1: 'Create your',
      title2: 'audiovisual store',
      title3: 'skoleomized',
      sub: "The world's first technology that turns every video into a smart point of sale",
      subNb: 'no redirection, no interruption.',
    },
    principe: {
      eyebrow: 'The principle',
      h2a: 'Every video becomes',
      h2b: 'a point of sale',
      steps: [
        {
          title: 'Watch',
          text: 'Your content as usual, across more than 2,000 OTT platforms and 1 billion websites.',
        },
        {
          title: 'Touch',
          text: 'SeSync analyzes in real time what appears on screen and instantly reveals the product.',
        },
        {
          title: 'Buy',
          text: 'The purchase happens inside the video itself. Your audience never leaves your ecosystem.',
        },
      ],
      stats: [
        { label: 'Patented coverage' },
        { label: 'Addressable market' },
        { label: 'OTT platforms' },
        { label: 'Connected websites' },
      ],
    },
    hiw: {
      eyebrow: 'How it works',
      h2: 'How it works',
      cards: [
        {
          title: 'Create your store',
          text: 'Bring your audiovisual universe to life, entirely in your image — on an existing platform or a new creation.',
        },
        {
          title: 'Connect & activate your token',
          text: 'Convergence automatically integrates the most popular content tailored to your brand, and activates your Skoleom token.',
        },
        {
          title: 'Generate revenue',
          text: 'Every view, every interaction, every purchase — even outside your platform — becomes a source of automatic revenue.',
        },
      ],
    },
    avantages: {
      eyebrow: 'Your audiovisual store',
      h2: 'The benefits',
      items: [
        {
          title: 'A global community',
          text: 'Join a fast-growing new generation of audiovisual creators and entrepreneurs.',
        },
        {
          title: 'Revolutionary discoverability',
          text: 'Your keywords embedded in the code of skoleomized videos: maximum organic visibility, with no paid ads.',
        },
        {
          title: 'A Monetizer Studio in your image',
          text: 'Your token, your analytics and all your monetization tools together to grow your digital empire.',
        },
      ],
    },
    offres: {
      eyebrow: 'Business model',
      h2: 'The plans',
      chip1: 'Redistribution up to 30%',
      chip2: 'Delivery in 45 days',
      chip3: 'Monetizer Studio',
      plans: [
        {
          badge: 'Most chosen',
          name: 'Key Accounts',
          seg: 'Existing platform',
          lic: 'Operating license / year',
          rows: {
            install: 'Setup fee',
            maintenance: 'Maintenance / month',
            revenue: 'Est. revenue / year',
            revenueVal: 'up to €50M',
            delivery: 'Delivery time',
            deliveryVal: '45 days',
          },
        },
        {
          name: 'Key Accounts',
          seg: 'New platform',
          lic: 'Operating license / year',
          rows: {
            install: 'Setup fee',
            maintenance: 'Maintenance / month',
            revenue: 'Est. revenue / year',
            revenueVal: 'up to €30M',
            delivery: 'Delivery time',
            deliveryVal: '45 days',
          },
        },
        {
          name: 'SMEs & mid-caps',
          seg: 'Growth',
          lic: 'Operating license / year',
          rows: {
            install: 'Setup fee',
            maintenance: 'Maintenance / month',
            revenue: 'Est. revenue / year',
            revenueVal: 'up to €10M',
            delivery: 'Delivery time',
            deliveryVal: '45 days',
          },
        },
        {
          name: 'Start-up',
          seg: 'Launch',
          lic: 'Operating license / year',
          rows: {
            install: 'Setup fee',
            maintenance: 'Maintenance / month',
            revenue: 'Est. revenue / year',
            revenueVal: 'up to €2M',
            delivery: 'Delivery time',
            deliveryVal: '45 days',
          },
        },
      ],
      note: 'Average revenue estimates for the host platform, based on content monetization and integrated purchases. Amounts excl. tax.',
    },
    finalCta: {
      eyebrow: 'Join the ecosystem',
      h2a: 'Create now',
      h2b: 'your store',
      text: 'Step into a new era of integrated commerce where every piece of content becomes a conversion opportunity.',
      cta: 'Sign up',
    },
    rowLabels: {
      install: 'Setup fee',
      maintenance: 'Maintenance / month',
      revenue: 'Est. revenue / year',
      delivery: 'Delivery time',
    },
  },
  es: {
    hero: {
      title1: 'Crea tu',
      title2: 'tienda audiovisual',
      title3: 'skoleomizada',
      sub: 'La primera tecnología del mundo que convierte cada vídeo en un punto de venta inteligente',
      subNb: 'sin redirección, sin interrupción.',
    },
    principe: {
      eyebrow: 'El principio',
      h2a: 'Cada vídeo se convierte en',
      h2b: 'un punto de venta',
      steps: [
        {
          title: 'Mira',
          text: 'Tus contenidos como siempre, en más de 2 000 plataformas OTT y 1 000 millones de sitios web.',
        },
        {
          title: 'Toca',
          text: 'SeSync analiza en tiempo real lo que aparece en pantalla y revela el producto al instante.',
        },
        {
          title: 'Compra',
          text: 'La compra ocurre dentro del propio vídeo. Tu audiencia nunca abandona tu ecosistema.',
        },
      ],
      stats: [
        { label: 'Cobertura patentada' },
        { label: 'Mercado direccionable' },
        { label: 'Plataformas OTT' },
        { label: 'Sitios web conectados' },
      ],
    },
    hiw: {
      eyebrow: 'Funcionamiento',
      h2: 'Cómo funciona',
      cards: [
        {
          title: 'Crea tu tienda',
          text: 'Da vida a tu universo audiovisual, totalmente a tu imagen — en una plataforma existente o en una nueva creación.',
        },
        {
          title: 'Conecta y activa tu token',
          text: 'La convergencia integra automáticamente los contenidos más populares adaptados a tu marca, y activa tu token Skoleom.',
        },
        {
          title: 'Genera ingresos',
          text: 'Cada visualización, cada interacción, cada compra — incluso fuera de tu plataforma — se convierte en una fuente de ingresos automáticos.',
        },
      ],
    },
    avantages: {
      eyebrow: 'Tu tienda audiovisual',
      h2: 'Las ventajas',
      items: [
        {
          title: 'Una comunidad mundial',
          text: 'Únete a una nueva generación de creadores y emprendedores audiovisuales, en plena expansión.',
        },
        {
          title: 'Un posicionamiento revolucionario',
          text: 'Tus palabras clave integradas en el código de los vídeos skoleomizados: máxima visibilidad orgánica, sin publicidad de pago.',
        },
        {
          title: 'Un Monetizer Studio con tu sello',
          text: 'Tu token, tus análisis y todas tus herramientas de monetización reunidos para hacer crecer tu imperio digital.',
        },
      ],
    },
    offres: {
      eyebrow: 'Modelo económico',
      h2: 'Las ofertas',
      chip1: 'Redistribución hasta el 30 %',
      chip2: 'Entrega en 45 días',
      chip3: 'Monetizer Studio',
      plans: [
        {
          badge: 'El más elegido',
          name: 'Grandes Cuentas',
          seg: 'Plataforma existente',
          lic: 'Licencia de explotación / año',
          rows: {
            install: 'Gastos de instalación',
            maintenance: 'Mantenimiento / mes',
            revenue: 'Ingresos est. / año',
            revenueVal: 'hasta 50 M€',
            delivery: 'Plazo de entrega',
            deliveryVal: '45 días',
          },
        },
        {
          name: 'Grandes Cuentas',
          seg: 'Nueva plataforma',
          lic: 'Licencia de explotación / año',
          rows: {
            install: 'Gastos de instalación',
            maintenance: 'Mantenimiento / mes',
            revenue: 'Ingresos est. / año',
            revenueVal: 'hasta 30 M€',
            delivery: 'Plazo de entrega',
            deliveryVal: '45 días',
          },
        },
        {
          name: 'Pymes y empresas medianas',
          seg: 'Crecimiento',
          lic: 'Licencia de explotación / año',
          rows: {
            install: 'Gastos de instalación',
            maintenance: 'Mantenimiento / mes',
            revenue: 'Ingresos est. / año',
            revenueVal: 'hasta 10 M€',
            delivery: 'Plazo de entrega',
            deliveryVal: '45 días',
          },
        },
        {
          name: 'Start-up',
          seg: 'Lanzamiento',
          lic: 'Licencia de explotación / año',
          rows: {
            install: 'Gastos de instalación',
            maintenance: 'Mantenimiento / mes',
            revenue: 'Ingresos est. / año',
            revenueVal: 'hasta 2 M€',
            delivery: 'Plazo de entrega',
            deliveryVal: '45 días',
          },
        },
      ],
      note: 'Estimaciones de ingresos medios para la plataforma anfitriona, basadas en la monetización de contenidos y de las compras integradas. Importes sin IVA.',
    },
    finalCta: {
      eyebrow: 'Únete al ecosistema',
      h2a: 'Crea ahora mismo',
      h2b: 'tu tienda',
      text: 'Entra en una nueva era del comercio integrado donde cada contenido se convierte en una oportunidad de conversión.',
      cta: 'Inscripción',
    },
    rowLabels: {
      install: 'Gastos de instalación',
      maintenance: 'Mantenimiento / mes',
      revenue: 'Ingresos est. / año',
      delivery: 'Plazo de entrega',
    },
  },
  de: {
    hero: {
      title1: 'Erstellen Sie Ihren',
      title2: 'audiovisuellen Shop',
      title3: 'skoleomisiert',
      sub: 'Die weltweit erste Technologie, die jedes Video in einen intelligenten Verkaufspunkt verwandelt',
      subNb: 'ohne Weiterleitung, ohne Unterbrechung.',
    },
    principe: {
      eyebrow: 'Das Prinzip',
      h2a: 'Jedes Video wird zu',
      h2b: 'einem Verkaufspunkt',
      steps: [
        {
          title: 'Ansehen',
          text: 'Ihre Inhalte wie gewohnt, auf über 2 000 OTT-Plattformen und 1 Milliarde Websites.',
        },
        {
          title: 'Berühren',
          text: 'SeSync analysiert in Echtzeit, was auf dem Bildschirm erscheint, und zeigt das Produkt sofort an.',
        },
        {
          title: 'Kaufen',
          text: 'Der Kauf erfolgt direkt im Video. Ihr Publikum verlässt nie Ihr Ökosystem.',
        },
      ],
      stats: [
        { label: 'Patentierte Abdeckung' },
        { label: 'Adressierbarer Markt' },
        { label: 'OTT-Plattformen' },
        { label: 'Verbundene Websites' },
      ],
    },
    hiw: {
      eyebrow: 'Funktionsweise',
      h2: 'So funktioniert es',
      cards: [
        {
          title: 'Erstellen Sie Ihren Shop',
          text: 'Erwecken Sie Ihr audiovisuelles Universum ganz in Ihrem Stil zum Leben — auf einer bestehenden Plattform oder als Neuschöpfung.',
        },
        {
          title: 'Token verbinden & aktivieren',
          text: 'Die Konvergenz integriert automatisch die beliebtesten, auf Ihre Marke abgestimmten Inhalte und aktiviert Ihren Skoleom-Token.',
        },
        {
          title: 'Einnahmen generieren',
          text: 'Jede Ansicht, jede Interaktion, jeder Kauf — sogar außerhalb Ihrer Plattform — wird zu einer Quelle automatischer Einnahmen.',
        },
      ],
    },
    avantages: {
      eyebrow: 'Ihr audiovisueller Shop',
      h2: 'Die Vorteile',
      items: [
        {
          title: 'Eine globale Community',
          text: 'Schließen Sie sich einer schnell wachsenden neuen Generation audiovisueller Creator und Unternehmer an.',
        },
        {
          title: 'Eine revolutionäre Auffindbarkeit',
          text: 'Ihre Keywords im Code der skoleomisierten Videos: maximale organische Sichtbarkeit, ganz ohne bezahlte Werbung.',
        },
        {
          title: 'Ein Monetizer Studio in Ihrem Design',
          text: 'Ihr Token, Ihre Analysen und alle Ihre Monetarisierungs-Tools vereint, um Ihr digitales Imperium wachsen zu lassen.',
        },
      ],
    },
    offres: {
      eyebrow: 'Geschäftsmodell',
      h2: 'Die Angebote',
      chip1: 'Umverteilung bis zu 30 %',
      chip2: 'Lieferung in 45 Tagen',
      chip3: 'Monetizer Studio',
      plans: [
        {
          badge: 'Am häufigsten gewählt',
          name: 'Großkunden',
          seg: 'Bestehende Plattform',
          lic: 'Nutzungslizenz / Jahr',
          rows: {
            install: 'Einrichtungsgebühr',
            maintenance: 'Wartung / Monat',
            revenue: 'Gesch. Einnahmen / Jahr',
            revenueVal: 'bis zu 50 Mio. €',
            delivery: 'Lieferzeit',
            deliveryVal: '45 Tage',
          },
        },
        {
          name: 'Großkunden',
          seg: 'Neue Plattform',
          lic: 'Nutzungslizenz / Jahr',
          rows: {
            install: 'Einrichtungsgebühr',
            maintenance: 'Wartung / Monat',
            revenue: 'Gesch. Einnahmen / Jahr',
            revenueVal: 'bis zu 30 Mio. €',
            delivery: 'Lieferzeit',
            deliveryVal: '45 Tage',
          },
        },
        {
          name: 'KMU & Mittelstand',
          seg: 'Wachstum',
          lic: 'Nutzungslizenz / Jahr',
          rows: {
            install: 'Einrichtungsgebühr',
            maintenance: 'Wartung / Monat',
            revenue: 'Gesch. Einnahmen / Jahr',
            revenueVal: 'bis zu 10 Mio. €',
            delivery: 'Lieferzeit',
            deliveryVal: '45 Tage',
          },
        },
        {
          name: 'Start-up',
          seg: 'Markteinführung',
          lic: 'Nutzungslizenz / Jahr',
          rows: {
            install: 'Einrichtungsgebühr',
            maintenance: 'Wartung / Monat',
            revenue: 'Gesch. Einnahmen / Jahr',
            revenueVal: 'bis zu 2 Mio. €',
            delivery: 'Lieferzeit',
            deliveryVal: '45 Tage',
          },
        },
      ],
      note: 'Durchschnittliche Umsatzschätzungen für die Host-Plattform, basierend auf der Monetarisierung von Inhalten und integrierten Käufen. Beträge zzgl. MwSt.',
    },
    finalCta: {
      eyebrow: 'Treten Sie dem Ökosystem bei',
      h2a: 'Erstellen Sie jetzt',
      h2b: 'Ihren Shop',
      text: 'Treten Sie ein in eine neue Ära des integrierten Handels, in der jeder Inhalt zur Conversion-Chance wird.',
      cta: 'Anmeldung',
    },
    rowLabels: {
      install: 'Einrichtungsgebühr',
      maintenance: 'Wartung / Monat',
      revenue: 'Gesch. Einnahmen / Jahr',
      delivery: 'Lieferzeit',
    },
  },
  it: {
    hero: {
      title1: 'Crea il tuo',
      title2: 'negozio audiovisivo',
      title3: 'skoleomizzato',
      sub: 'La prima tecnologia al mondo che trasforma ogni video in un punto vendita intelligente',
      subNb: 'senza reindirizzamento, senza interruzione.',
    },
    principe: {
      eyebrow: 'Il principio',
      h2a: 'Ogni video diventa',
      h2b: 'un punto vendita',
      steps: [
        {
          title: 'Guarda',
          text: 'I tuoi contenuti come al solito, su oltre 2 000 piattaforme OTT e 1 miliardo di siti web.',
        },
        {
          title: 'Tocca',
          text: 'SeSync analizza in tempo reale ciò che appare sullo schermo e rivela istantaneamente il prodotto.',
        },
        {
          title: 'Acquista',
          text: "L'acquisto avviene all'interno del video stesso. Il tuo pubblico non lascia mai il tuo ecosistema.",
        },
      ],
      stats: [
        { label: 'Copertura brevettata' },
        { label: 'Mercato indirizzabile' },
        { label: 'Piattaforme OTT' },
        { label: 'Siti web collegati' },
      ],
    },
    hiw: {
      eyebrow: 'Funzionamento',
      h2: 'Come funziona',
      cards: [
        {
          title: 'Crea il tuo negozio',
          text: 'Dai vita al tuo universo audiovisivo, interamente a tua immagine — su una piattaforma esistente o una nuova creazione.',
        },
        {
          title: 'Collega e attiva il tuo token',
          text: 'La convergenza integra automaticamente i contenuti più popolari adattati al tuo marchio e attiva il tuo token Skoleom.',
        },
        {
          title: 'Genera ricavi',
          text: 'Ogni visualizzazione, ogni interazione, ogni acquisto — anche fuori dalla tua piattaforma — diventa una fonte di ricavi automatici.',
        },
      ],
    },
    avantages: {
      eyebrow: 'Il tuo negozio audiovisivo',
      h2: 'I vantaggi',
      items: [
        {
          title: 'Una comunità mondiale',
          text: 'Unisciti a una nuova generazione di creatori e imprenditori audiovisivi in piena espansione.',
        },
        {
          title: 'Un posizionamento rivoluzionario',
          text: 'Le tue parole chiave integrate nel codice dei video skoleomizzati: massima visibilità organica, senza pubblicità a pagamento.',
        },
        {
          title: 'Un Monetizer Studio a tua immagine',
          text: 'Il tuo token, le tue analisi e tutti i tuoi strumenti di monetizzazione riuniti per far crescere il tuo impero digitale.',
        },
      ],
    },
    offres: {
      eyebrow: 'Modello economico',
      h2: 'Le offerte',
      chip1: 'Redistribuzione fino al 30 %',
      chip2: 'Consegna in 45 giorni',
      chip3: 'Monetizer Studio',
      plans: [
        {
          badge: 'Il più scelto',
          name: 'Grandi Account',
          seg: 'Piattaforma esistente',
          lic: 'Licenza di esercizio / anno',
          rows: {
            install: 'Costi di installazione',
            maintenance: 'Manutenzione / mese',
            revenue: 'Ricavi stim. / anno',
            revenueVal: 'fino a 50 M€',
            delivery: 'Tempo di consegna',
            deliveryVal: '45 giorni',
          },
        },
        {
          name: 'Grandi Account',
          seg: 'Nuova piattaforma',
          lic: 'Licenza di esercizio / anno',
          rows: {
            install: 'Costi di installazione',
            maintenance: 'Manutenzione / mese',
            revenue: 'Ricavi stim. / anno',
            revenueVal: 'fino a 30 M€',
            delivery: 'Tempo di consegna',
            deliveryVal: '45 giorni',
          },
        },
        {
          name: 'PMI e mid-cap',
          seg: 'Crescita',
          lic: 'Licenza di esercizio / anno',
          rows: {
            install: 'Costi di installazione',
            maintenance: 'Manutenzione / mese',
            revenue: 'Ricavi stim. / anno',
            revenueVal: 'fino a 10 M€',
            delivery: 'Tempo di consegna',
            deliveryVal: '45 giorni',
          },
        },
        {
          name: 'Start-up',
          seg: 'Lancio',
          lic: 'Licenza di esercizio / anno',
          rows: {
            install: 'Costi di installazione',
            maintenance: 'Manutenzione / mese',
            revenue: 'Ricavi stim. / anno',
            revenueVal: 'fino a 2 M€',
            delivery: 'Tempo di consegna',
            deliveryVal: '45 giorni',
          },
        },
      ],
      note: 'Stime di ricavo medio per la piattaforma ospite, basate sulla monetizzazione dei contenuti e degli acquisti integrati. Importi IVA esclusa.',
    },
    finalCta: {
      eyebrow: "Unisciti all'ecosistema",
      h2a: 'Crea subito',
      h2b: 'il tuo negozio',
      text: "Entra in una nuova era del commercio integrato in cui ogni contenuto diventa un'opportunità di conversione.",
      cta: 'Iscrizione',
    },
    rowLabels: {
      install: 'Costi di installazione',
      maintenance: 'Manutenzione / mese',
      revenue: 'Ricavi stim. / anno',
      delivery: 'Tempo di consegna',
    },
  },
  pt: {
    hero: {
      title1: 'Crie a sua',
      title2: 'loja audiovisual',
      title3: 'skoleomizada',
      sub: 'A primeira tecnologia do mundo que transforma cada vídeo num ponto de venda inteligente',
      subNb: 'sem redirecionamento, sem interrupção.',
    },
    principe: {
      eyebrow: 'O princípio',
      h2a: 'Cada vídeo torna-se',
      h2b: 'um ponto de venda',
      steps: [
        {
          title: 'Veja',
          text: 'Os seus conteúdos como sempre, em mais de 2 000 plataformas OTT e 1 mil milhões de sites.',
        },
        {
          title: 'Toque',
          text: 'O SeSync analisa em tempo real o que aparece no ecrã e revela instantaneamente o produto.',
        },
        {
          title: 'Compre',
          text: 'A compra acontece dentro do próprio vídeo. A sua audiência nunca sai do seu ecossistema.',
        },
      ],
      stats: [
        { label: 'Cobertura patenteada' },
        { label: 'Mercado endereçável' },
        { label: 'Plataformas OTT' },
        { label: 'Sites conectados' },
      ],
    },
    hiw: {
      eyebrow: 'Funcionamento',
      h2: 'Como funciona',
      cards: [
        {
          title: 'Crie a sua loja',
          text: 'Dê vida ao seu universo audiovisual, totalmente à sua imagem — numa plataforma existente ou numa nova criação.',
        },
        {
          title: 'Conecte e ative o seu token',
          text: 'A convergência integra automaticamente os conteúdos mais populares adaptados à sua marca e ativa o seu token Skoleom.',
        },
        {
          title: 'Gere receitas',
          text: 'Cada visualização, cada interação, cada compra — mesmo fora da sua plataforma — torna-se uma fonte de receitas automáticas.',
        },
      ],
    },
    avantages: {
      eyebrow: 'A sua loja audiovisual',
      h2: 'As vantagens',
      items: [
        {
          title: 'Uma comunidade mundial',
          text: 'Junte-se a uma nova geração de criadores e empreendedores audiovisuais, em plena expansão.',
        },
        {
          title: 'Uma indexação revolucionária',
          text: 'As suas palavras-chave integradas no código dos vídeos skoleomizados: visibilidade orgânica máxima, sem publicidade paga.',
        },
        {
          title: 'Um Monetizer Studio à sua imagem',
          text: 'O seu token, as suas análises e todas as suas ferramentas de monetização reunidos para fazer crescer o seu império digital.',
        },
      ],
    },
    offres: {
      eyebrow: 'Modelo económico',
      h2: 'As ofertas',
      chip1: 'Redistribuição até 30 %',
      chip2: 'Entrega em 45 dias',
      chip3: 'Monetizer Studio',
      plans: [
        {
          badge: 'O mais escolhido',
          name: 'Grandes Contas',
          seg: 'Plataforma existente',
          lic: 'Licença de exploração / ano',
          rows: {
            install: 'Custos de instalação',
            maintenance: 'Manutenção / mês',
            revenue: 'Receitas est. / ano',
            revenueVal: 'até 50 M€',
            delivery: 'Prazo de entrega',
            deliveryVal: '45 dias',
          },
        },
        {
          name: 'Grandes Contas',
          seg: 'Nova plataforma',
          lic: 'Licença de exploração / ano',
          rows: {
            install: 'Custos de instalação',
            maintenance: 'Manutenção / mês',
            revenue: 'Receitas est. / ano',
            revenueVal: 'até 30 M€',
            delivery: 'Prazo de entrega',
            deliveryVal: '45 dias',
          },
        },
        {
          name: 'PME e mid-caps',
          seg: 'Crescimento',
          lic: 'Licença de exploração / ano',
          rows: {
            install: 'Custos de instalação',
            maintenance: 'Manutenção / mês',
            revenue: 'Receitas est. / ano',
            revenueVal: 'até 10 M€',
            delivery: 'Prazo de entrega',
            deliveryVal: '45 dias',
          },
        },
        {
          name: 'Start-up',
          seg: 'Lançamento',
          lic: 'Licença de exploração / ano',
          rows: {
            install: 'Custos de instalação',
            maintenance: 'Manutenção / mês',
            revenue: 'Receitas est. / ano',
            revenueVal: 'até 2 M€',
            delivery: 'Prazo de entrega',
            deliveryVal: '45 dias',
          },
        },
      ],
      note: 'Estimativas de receita média para a plataforma anfitriã, baseadas na monetização de conteúdos e nas compras integradas. Valores sem IVA.',
    },
    finalCta: {
      eyebrow: 'Junte-se ao ecossistema',
      h2a: 'Crie já',
      h2b: 'a sua loja',
      text: 'Entre numa nova era do comércio integrado em que cada conteúdo se torna uma oportunidade de conversão.',
      cta: 'Inscrição',
    },
    rowLabels: {
      install: 'Custos de instalação',
      maintenance: 'Manutenção / mês',
      revenue: 'Receitas est. / ano',
      delivery: 'Prazo de entrega',
    },
  },
  nl: {
    hero: {
      title1: 'Creëer uw',
      title2: 'audiovisuele winkel',
      title3: 'skoleomized',
      sub: "'s Werelds eerste technologie die elke video omzet in een slim verkooppunt",
      subNb: 'zonder omleiding, zonder onderbreking.',
    },
    principe: {
      eyebrow: 'Het principe',
      h2a: 'Elke video wordt',
      h2b: 'een verkooppunt',
      steps: [
        {
          title: 'Bekijk',
          text: 'Uw content zoals gewoonlijk, op meer dan 2 000 OTT-platforms en 1 miljard websites.',
        },
        {
          title: 'Raak aan',
          text: 'SeSync analyseert in realtime wat er op het scherm verschijnt en onthult het product direct.',
        },
        {
          title: 'Koop',
          text: 'De aankoop gebeurt binnen de video zelf. Uw publiek verlaat nooit uw ecosysteem.',
        },
      ],
      stats: [
        { label: 'Gepatenteerde dekking' },
        { label: 'Adresseerbare markt' },
        { label: 'OTT-platforms' },
        { label: 'Verbonden websites' },
      ],
    },
    hiw: {
      eyebrow: 'Werking',
      h2: 'Hoe het werkt',
      cards: [
        {
          title: 'Creëer uw winkel',
          text: 'Breng uw audiovisuele universum tot leven, volledig naar uw beeld — op een bestaand platform of een nieuwe creatie.',
        },
        {
          title: 'Verbind & activeer uw token',
          text: 'De convergentie integreert automatisch de populairste content afgestemd op uw merk en activeert uw Skoleom-token.',
        },
        {
          title: 'Genereer inkomsten',
          text: 'Elke weergave, elke interactie, elke aankoop — zelfs buiten uw platform — wordt een bron van automatische inkomsten.',
        },
      ],
    },
    avantages: {
      eyebrow: 'Uw audiovisuele winkel',
      h2: 'De voordelen',
      items: [
        {
          title: 'Een wereldwijde community',
          text: 'Sluit u aan bij een snelgroeiende nieuwe generatie audiovisuele makers en ondernemers.',
        },
        {
          title: 'Een revolutionaire vindbaarheid',
          text: 'Uw trefwoorden geïntegreerd in de code van skoleomized video’s: maximale organische zichtbaarheid, zonder betaalde advertenties.',
        },
        {
          title: 'Een Monetizer Studio in uw stijl',
          text: 'Uw token, uw analyses en al uw monetiseringstools samengebracht om uw digitale imperium te laten groeien.',
        },
      ],
    },
    offres: {
      eyebrow: 'Verdienmodel',
      h2: 'De aanbiedingen',
      chip1: 'Herverdeling tot 30 %',
      chip2: 'Levering in 45 dagen',
      chip3: 'Monetizer Studio',
      plans: [
        {
          badge: 'Meest gekozen',
          name: 'Grote accounts',
          seg: 'Bestaand platform',
          lic: 'Exploitatielicentie / jaar',
          rows: {
            install: 'Installatiekosten',
            maintenance: 'Onderhoud / maand',
            revenue: 'Gesch. omzet / jaar',
            revenueVal: 'tot 50 M€',
            delivery: 'Levertijd',
            deliveryVal: '45 dagen',
          },
        },
        {
          name: 'Grote accounts',
          seg: 'Nieuw platform',
          lic: 'Exploitatielicentie / jaar',
          rows: {
            install: 'Installatiekosten',
            maintenance: 'Onderhoud / maand',
            revenue: 'Gesch. omzet / jaar',
            revenueVal: 'tot 30 M€',
            delivery: 'Levertijd',
            deliveryVal: '45 dagen',
          },
        },
        {
          name: 'Mkb & middelgrote bedrijven',
          seg: 'Groei',
          lic: 'Exploitatielicentie / jaar',
          rows: {
            install: 'Installatiekosten',
            maintenance: 'Onderhoud / maand',
            revenue: 'Gesch. omzet / jaar',
            revenueVal: 'tot 10 M€',
            delivery: 'Levertijd',
            deliveryVal: '45 dagen',
          },
        },
        {
          name: 'Start-up',
          seg: 'Lancering',
          lic: 'Exploitatielicentie / jaar',
          rows: {
            install: 'Installatiekosten',
            maintenance: 'Onderhoud / maand',
            revenue: 'Gesch. omzet / jaar',
            revenueVal: 'tot 2 M€',
            delivery: 'Levertijd',
            deliveryVal: '45 dagen',
          },
        },
      ],
      note: 'Schattingen van de gemiddelde omzet voor het hostplatform, gebaseerd op de monetisering van content en geïntegreerde aankopen. Bedragen excl. btw.',
    },
    finalCta: {
      eyebrow: 'Sluit u aan bij het ecosysteem',
      h2a: 'Creëer nu',
      h2b: 'uw winkel',
      text: 'Stap in een nieuw tijdperk van geïntegreerde handel waarin elke content een conversiekans wordt.',
      cta: 'Aanmelden',
    },
    rowLabels: {
      install: 'Installatiekosten',
      maintenance: 'Onderhoud / maand',
      revenue: 'Gesch. omzet / jaar',
      delivery: 'Levertijd',
    },
  },
  ru: {
    hero: {
      title1: 'Создайте свой',
      title2: 'аудиовизуальный магазин',
      title3: 'скулеомизированный',
      sub: 'Первая в мире технология, превращающая каждое видео в умную точку продаж',
      subNb: 'без перенаправления, без прерывания.',
    },
    principe: {
      eyebrow: 'Принцип',
      h2a: 'Каждое видео становится',
      h2b: 'точкой продаж',
      steps: [
        {
          title: 'Смотрите',
          text: 'Ваш контент как обычно, на более чем 2 000 OTT-платформах и 1 миллиарде веб-сайтов.',
        },
        {
          title: 'Касайтесь',
          text: 'SeSync в реальном времени анализирует то, что появляется на экране, и мгновенно показывает товар.',
        },
        {
          title: 'Покупайте',
          text: 'Покупка совершается прямо внутри видео. Ваша аудитория никогда не покидает вашу экосистему.',
        },
      ],
      stats: [
        { label: 'Запатентованное покрытие' },
        { label: 'Адресуемый рынок' },
        { label: 'OTT-платформы' },
        { label: 'Подключённые сайты' },
      ],
    },
    hiw: {
      eyebrow: 'Как это работает',
      h2: 'Как это работает',
      cards: [
        {
          title: 'Создайте свой магазин',
          text: 'Воплотите в жизнь свою аудиовизуальную вселенную, полностью в вашем стиле — на существующей платформе или с нуля.',
        },
        {
          title: 'Подключите и активируйте токен',
          text: 'Конвергенция автоматически интегрирует самый популярный контент под ваш бренд и активирует ваш токен Skoleom.',
        },
        {
          title: 'Генерируйте доход',
          text: 'Каждый просмотр, каждое взаимодействие, каждая покупка — даже за пределами вашей платформы — становится источником автоматического дохода.',
        },
      ],
    },
    avantages: {
      eyebrow: 'Ваш аудиовизуальный магазин',
      h2: 'Преимущества',
      items: [
        {
          title: 'Мировое сообщество',
          text: 'Присоединяйтесь к быстрорастущему новому поколению аудиовизуальных авторов и предпринимателей.',
        },
        {
          title: 'Революционная индексация',
          text: 'Ваши ключевые слова встроены в код скулеомизированных видео: максимальная органическая видимость без платной рекламы.',
        },
        {
          title: 'Monetizer Studio с вашим брендом',
          text: 'Ваш токен, ваша аналитика и все инструменты монетизации объединены для роста вашей цифровой империи.',
        },
      ],
    },
    offres: {
      eyebrow: 'Бизнес-модель',
      h2: 'Предложения',
      chip1: 'Перераспределение до 30 %',
      chip2: 'Поставка за 45 дней',
      chip3: 'Monetizer Studio',
      plans: [
        {
          badge: 'Самый выбираемый',
          name: 'Крупные клиенты',
          seg: 'Существующая платформа',
          lic: 'Лицензия на эксплуатацию / год',
          rows: {
            install: 'Стоимость установки',
            maintenance: 'Обслуживание / мес.',
            revenue: 'Ожид. доход / год',
            revenueVal: 'до 50 M€',
            delivery: 'Срок поставки',
            deliveryVal: '45 дней',
          },
        },
        {
          name: 'Крупные клиенты',
          seg: 'Новая платформа',
          lic: 'Лицензия на эксплуатацию / год',
          rows: {
            install: 'Стоимость установки',
            maintenance: 'Обслуживание / мес.',
            revenue: 'Ожид. доход / год',
            revenueVal: 'до 30 M€',
            delivery: 'Срок поставки',
            deliveryVal: '45 дней',
          },
        },
        {
          name: 'МСП и средний бизнес',
          seg: 'Рост',
          lic: 'Лицензия на эксплуатацию / год',
          rows: {
            install: 'Стоимость установки',
            maintenance: 'Обслуживание / мес.',
            revenue: 'Ожид. доход / год',
            revenueVal: 'до 10 M€',
            delivery: 'Срок поставки',
            deliveryVal: '45 дней',
          },
        },
        {
          name: 'Стартап',
          seg: 'Запуск',
          lic: 'Лицензия на эксплуатацию / год',
          rows: {
            install: 'Стоимость установки',
            maintenance: 'Обслуживание / мес.',
            revenue: 'Ожид. доход / год',
            revenueVal: 'до 2 M€',
            delivery: 'Срок поставки',
            deliveryVal: '45 дней',
          },
        },
      ],
      note: 'Оценки среднего дохода для платформы-хоста, основанные на монетизации контента и встроенных покупках. Суммы без НДС.',
    },
    finalCta: {
      eyebrow: 'Присоединяйтесь к экосистеме',
      h2a: 'Создайте прямо сейчас',
      h2b: 'свой магазин',
      text: 'Войдите в новую эру интегрированной коммерции, где каждый контент становится возможностью для конверсии.',
      cta: 'Регистрация',
    },
    rowLabels: {
      install: 'Стоимость установки',
      maintenance: 'Обслуживание / мес.',
      revenue: 'Ожид. доход / год',
      delivery: 'Срок поставки',
    },
  },
  ar: {
    hero: {
      title1: 'أنشئ',
      title2: 'متجرك السمعي البصري',
      title3: 'المُسكلَم',
      sub: 'أول تقنية في العالم تحوّل كل فيديو إلى نقطة بيع ذكية',
      subNb: 'دون إعادة توجيه، دون انقطاع.',
    },
    principe: {
      eyebrow: 'المبدأ',
      h2a: 'كل فيديو يصبح',
      h2b: 'نقطة بيع',
      steps: [
        {
          title: 'شاهِد',
          text: 'محتواك كالمعتاد، على أكثر من 2000 منصة OTT ومليار موقع إلكتروني.',
        },
        {
          title: 'المس',
          text: 'يحلّل SeSync في الوقت الفعلي ما يظهر على الشاشة ويكشف المنتج على الفور.',
        },
        {
          title: 'اشترِ',
          text: 'يتم الشراء داخل الفيديو نفسه. لا يغادر جمهورك منظومتك أبدًا.',
        },
      ],
      stats: [
        { label: 'تغطية محمية ببراءة اختراع' },
        { label: 'السوق المستهدف' },
        { label: 'منصات OTT' },
        { label: 'مواقع متصلة' },
      ],
    },
    hiw: {
      eyebrow: 'آلية العمل',
      h2: 'كيف يعمل',
      cards: [
        {
          title: 'أنشئ متجرك',
          text: 'امنح الحياة لعالمك السمعي البصري، بالكامل على صورتك — على منصة قائمة أو إبداع جديد.',
        },
        {
          title: 'اربط وفعّل الـ token الخاص بك',
          text: 'يدمج التقارب تلقائيًا المحتوى الأكثر شعبية المُكيّف مع علامتك التجارية، ويفعّل الـ token الخاص بك من Skoleom.',
        },
        {
          title: 'حقّق الإيرادات',
          text: 'كل مشاهدة، كل تفاعل، كل عملية شراء — حتى خارج منصتك — تصبح مصدرًا للإيرادات التلقائية.',
        },
      ],
    },
    avantages: {
      eyebrow: 'متجرك السمعي البصري',
      h2: 'المزايا',
      items: [
        {
          title: 'مجتمع عالمي',
          text: 'انضم إلى جيل جديد سريع النمو من صنّاع المحتوى ورواد الأعمال في المجال السمعي البصري.',
        },
        {
          title: 'فهرسة ثورية',
          text: 'كلماتك المفتاحية مدمجة في شيفرة الفيديوهات المُسكلَمة: أقصى ظهور عضوي، دون إعلانات مدفوعة.',
        },
        {
          title: 'Monetizer Studio يحمل بصمتك',
          text: 'الـ token الخاص بك وتحليلاتك وكل أدوات تحقيق الدخل مجتمعة لتنمية إمبراطوريتك الرقمية.',
        },
      ],
    },
    offres: {
      eyebrow: 'نموذج الأعمال',
      h2: 'العروض',
      chip1: 'إعادة توزيع حتى 30 %',
      chip2: 'التسليم في 45 يومًا',
      chip3: 'Monetizer Studio',
      plans: [
        {
          badge: 'الأكثر اختيارًا',
          name: 'الحسابات الكبرى',
          seg: 'منصة قائمة',
          lic: 'رخصة تشغيل / سنة',
          rows: {
            install: 'رسوم التركيب',
            maintenance: 'الصيانة / شهر',
            revenue: 'الإيرادات المقدّرة / سنة',
            revenueVal: 'حتى 50 M€',
            delivery: 'مدة التسليم',
            deliveryVal: '45 يومًا',
          },
        },
        {
          name: 'الحسابات الكبرى',
          seg: 'منصة جديدة',
          lic: 'رخصة تشغيل / سنة',
          rows: {
            install: 'رسوم التركيب',
            maintenance: 'الصيانة / شهر',
            revenue: 'الإيرادات المقدّرة / سنة',
            revenueVal: 'حتى 30 M€',
            delivery: 'مدة التسليم',
            deliveryVal: '45 يومًا',
          },
        },
        {
          name: 'الشركات الصغيرة والمتوسطة',
          seg: 'النمو',
          lic: 'رخصة تشغيل / سنة',
          rows: {
            install: 'رسوم التركيب',
            maintenance: 'الصيانة / شهر',
            revenue: 'الإيرادات المقدّرة / سنة',
            revenueVal: 'حتى 10 M€',
            delivery: 'مدة التسليم',
            deliveryVal: '45 يومًا',
          },
        },
        {
          name: 'شركة ناشئة',
          seg: 'الإطلاق',
          lic: 'رخصة تشغيل / سنة',
          rows: {
            install: 'رسوم التركيب',
            maintenance: 'الصيانة / شهر',
            revenue: 'الإيرادات المقدّرة / سنة',
            revenueVal: 'حتى 2 M€',
            delivery: 'مدة التسليم',
            deliveryVal: '45 يومًا',
          },
        },
      ],
      note: 'تقديرات متوسط الإيرادات للمنصة المضيفة، استنادًا إلى تحقيق الدخل من المحتوى والمشتريات المدمجة. المبالغ غير شاملة الضريبة.',
    },
    finalCta: {
      eyebrow: 'انضم إلى المنظومة',
      h2a: 'أنشئ الآن',
      h2b: 'متجرك',
      text: 'ادخل إلى حقبة جديدة من التجارة المدمجة حيث يصبح كل محتوى فرصة للتحويل.',
      cta: 'التسجيل',
    },
    rowLabels: {
      install: 'رسوم التركيب',
      maintenance: 'الصيانة / شهر',
      revenue: 'الإيرادات المقدّرة / سنة',
      delivery: 'مدة التسليم',
    },
  },
  hi: {
    hero: {
      title1: 'अपना बनाएँ',
      title2: 'ऑडियोविज़ुअल स्टोर',
      title3: 'स्कोलेओमाइज़्ड',
      sub: 'दुनिया की पहली तकनीक जो हर वीडियो को एक स्मार्ट बिक्री केंद्र में बदल देती है',
      subNb: 'बिना रीडायरेक्शन, बिना रुकावट के।',
    },
    principe: {
      eyebrow: 'सिद्धांत',
      h2a: 'हर वीडियो बन जाता है',
      h2b: 'एक बिक्री केंद्र',
      steps: [
        {
          title: 'देखें',
          text: 'आपका कॉन्टेंट हमेशा की तरह, 2,000 से अधिक OTT प्लेटफ़ॉर्म और 1 अरब वेबसाइटों पर।',
        },
        {
          title: 'स्पर्श करें',
          text: 'SeSync रीयल टाइम में विश्लेषण करता है कि स्क्रीन पर क्या दिखता है और तुरंत उत्पाद दिखाता है।',
        },
        {
          title: 'खरीदें',
          text: 'खरीदारी वीडियो के भीतर ही होती है। आपके दर्शक कभी आपका इकोसिस्टम नहीं छोड़ते।',
        },
      ],
      stats: [
        { label: 'पेटेंटेड कवरेज' },
        { label: 'एड्रेसेबल मार्केट' },
        { label: 'OTT प्लेटफ़ॉर्म' },
        { label: 'कनेक्टेड वेबसाइटें' },
      ],
    },
    hiw: {
      eyebrow: 'कार्यप्रणाली',
      h2: 'यह कैसे काम करता है',
      cards: [
        {
          title: 'अपना स्टोर बनाएँ',
          text: 'अपने ऑडियोविज़ुअल ब्रह्मांड को पूरी तरह अपनी छवि में जीवंत करें — किसी मौजूदा प्लेटफ़ॉर्म पर या नई रचना के रूप में।',
        },
        {
          title: 'अपना token कनेक्ट और सक्रिय करें',
          text: 'कन्वर्जेंस आपके ब्रांड के अनुकूल सबसे लोकप्रिय कॉन्टेंट को स्वचालित रूप से एकीकृत करता है और आपका Skoleom token सक्रिय करता है।',
        },
        {
          title: 'राजस्व उत्पन्न करें',
          text: 'हर व्यू, हर इंटरैक्शन, हर खरीद — आपके प्लेटफ़ॉर्म के बाहर भी — स्वचालित राजस्व का स्रोत बन जाती है।',
        },
      ],
    },
    avantages: {
      eyebrow: 'आपका ऑडियोविज़ुअल स्टोर',
      h2: 'लाभ',
      items: [
        {
          title: 'एक वैश्विक समुदाय',
          text: 'ऑडियोविज़ुअल क्रिएटर्स और उद्यमियों की तेज़ी से बढ़ती नई पीढ़ी से जुड़ें।',
        },
        {
          title: 'एक क्रांतिकारी खोज-योग्यता',
          text: 'स्कोलेओमाइज़्ड वीडियो के कोड में एकीकृत आपके कीवर्ड: अधिकतम ऑर्गेनिक दृश्यता, बिना किसी सशुल्क विज्ञापन के।',
        },
        {
          title: 'आपकी छवि वाला एक Monetizer Studio',
          text: 'आपका token, आपके विश्लेषण और आपके सभी मॉनेटाइज़ेशन टूल एक साथ, ताकि आपका डिजिटल साम्राज्य बढ़े।',
        },
      ],
    },
    offres: {
      eyebrow: 'व्यवसाय मॉडल',
      h2: 'ऑफ़र',
      chip1: '30 % तक पुनर्वितरण',
      chip2: '45 दिनों में डिलीवरी',
      chip3: 'Monetizer Studio',
      plans: [
        {
          badge: 'सबसे ज़्यादा चुना गया',
          name: 'बड़े खाते',
          seg: 'मौजूदा प्लेटफ़ॉर्म',
          lic: 'परिचालन लाइसेंस / वर्ष',
          rows: {
            install: 'इंस्टॉलेशन शुल्क',
            maintenance: 'रखरखाव / माह',
            revenue: 'अनुमानित राजस्व / वर्ष',
            revenueVal: '50 M€ तक',
            delivery: 'डिलीवरी समय',
            deliveryVal: '45 दिन',
          },
        },
        {
          name: 'बड़े खाते',
          seg: 'नया प्लेटफ़ॉर्म',
          lic: 'परिचालन लाइसेंस / वर्ष',
          rows: {
            install: 'इंस्टॉलेशन शुल्क',
            maintenance: 'रखरखाव / माह',
            revenue: 'अनुमानित राजस्व / वर्ष',
            revenueVal: '30 M€ तक',
            delivery: 'डिलीवरी समय',
            deliveryVal: '45 दिन',
          },
        },
        {
          name: 'SME और मिड-कैप',
          seg: 'विकास',
          lic: 'परिचालन लाइसेंस / वर्ष',
          rows: {
            install: 'इंस्टॉलेशन शुल्क',
            maintenance: 'रखरखाव / माह',
            revenue: 'अनुमानित राजस्व / वर्ष',
            revenueVal: '10 M€ तक',
            delivery: 'डिलीवरी समय',
            deliveryVal: '45 दिन',
          },
        },
        {
          name: 'स्टार्ट-अप',
          seg: 'लॉन्च',
          lic: 'परिचालन लाइसेंस / वर्ष',
          rows: {
            install: 'इंस्टॉलेशन शुल्क',
            maintenance: 'रखरखाव / माह',
            revenue: 'अनुमानित राजस्व / वर्ष',
            revenueVal: '2 M€ तक',
            delivery: 'डिलीवरी समय',
            deliveryVal: '45 दिन',
          },
        },
      ],
      note: 'होस्ट प्लेटफ़ॉर्म के लिए औसत राजस्व का अनुमान, कॉन्टेंट मॉनेटाइज़ेशन और एकीकृत खरीदारी पर आधारित। राशियाँ कर रहित।',
    },
    finalCta: {
      eyebrow: 'इकोसिस्टम से जुड़ें',
      h2a: 'अभी बनाएँ',
      h2b: 'अपना स्टोर',
      text: 'एकीकृत वाणिज्य के एक नए युग में कदम रखें जहाँ हर कॉन्टेंट एक रूपांतरण अवसर बन जाता है।',
      cta: 'पंजीकरण',
    },
    rowLabels: {
      install: 'इंस्टॉलेशन शुल्क',
      maintenance: 'रखरखाव / माह',
      revenue: 'अनुमानित राजस्व / वर्ष',
      delivery: 'डिलीवरी समय',
    },
  },
  zh: {
    hero: {
      title1: '创建您的',
      title2: '视听商店',
      title3: 'Skoleom 化',
      sub: '全球首创技术，将每个视频转化为智能销售点',
      subNb: '无需跳转，无需中断。',
    },
    principe: {
      eyebrow: '原理',
      h2a: '每个视频都成为',
      h2b: '一个销售点',
      steps: [
        {
          title: '观看',
          text: '像往常一样观看您的内容，覆盖 2,000 多个 OTT 平台和 10 亿个网站。',
        },
        {
          title: '触碰',
          text: 'SeSync 实时分析屏幕上出现的内容，并即时呈现产品。',
        },
        {
          title: '购买',
          text: '购买在视频内部完成。您的受众永远不会离开您的生态系统。',
        },
      ],
      stats: [
        { label: '专利覆盖' },
        { label: '可触达市场' },
        { label: 'OTT 平台' },
        { label: '已连接网站' },
      ],
    },
    hiw: {
      eyebrow: '运作方式',
      h2: '如何运作',
      cards: [
        {
          title: '创建您的商店',
          text: '让您的视听世界完全按您的形象焕发活力——在现有平台上或全新打造。',
        },
        {
          title: '连接并激活您的 token',
          text: '融合技术会自动整合最适合您品牌的热门内容，并激活您的 Skoleom token。',
        },
        {
          title: '创造收入',
          text: '每一次观看、每一次互动、每一次购买——即使在您的平台之外——都成为自动收入的来源。',
        },
      ],
    },
    avantages: {
      eyebrow: '您的视听商店',
      h2: '优势',
      items: [
        {
          title: '全球社区',
          text: '加入快速成长的新一代视听创作者和创业者。',
        },
        {
          title: '革命性的可发现性',
          text: '您的关键词嵌入 Skoleom 化视频的代码中：最大化自然曝光，无需付费广告。',
        },
        {
          title: '专属于您的 Monetizer Studio',
          text: '您的 token、您的分析和所有变现工具汇聚一处，助力您的数字帝国成长。',
        },
      ],
    },
    offres: {
      eyebrow: '商业模式',
      h2: '方案',
      chip1: '最高 30 % 再分配',
      chip2: '45 天交付',
      chip3: 'Monetizer Studio',
      plans: [
        {
          badge: '最受欢迎',
          name: '大客户',
          seg: '现有平台',
          lic: '运营许可 / 年',
          rows: {
            install: '安装费用',
            maintenance: '维护 / 月',
            revenue: '预计收入 / 年',
            revenueVal: '高达 50 M€',
            delivery: '交付时间',
            deliveryVal: '45 天',
          },
        },
        {
          name: '大客户',
          seg: '全新平台',
          lic: '运营许可 / 年',
          rows: {
            install: '安装费用',
            maintenance: '维护 / 月',
            revenue: '预计收入 / 年',
            revenueVal: '高达 30 M€',
            delivery: '交付时间',
            deliveryVal: '45 天',
          },
        },
        {
          name: '中小企业',
          seg: '增长',
          lic: '运营许可 / 年',
          rows: {
            install: '安装费用',
            maintenance: '维护 / 月',
            revenue: '预计收入 / 年',
            revenueVal: '高达 10 M€',
            delivery: '交付时间',
            deliveryVal: '45 天',
          },
        },
        {
          name: '初创企业',
          seg: '启动',
          lic: '运营许可 / 年',
          rows: {
            install: '安装费用',
            maintenance: '维护 / 月',
            revenue: '预计收入 / 年',
            revenueVal: '高达 2 M€',
            delivery: '交付时间',
            deliveryVal: '45 天',
          },
        },
      ],
      note: '托管平台的平均收入预估，基于内容变现和集成购买。金额不含税。',
    },
    finalCta: {
      eyebrow: '加入生态系统',
      h2a: '立即创建',
      h2b: '您的商店',
      text: '步入集成商务的新时代，让每一份内容都成为转化机会。',
      cta: '注册',
    },
    rowLabels: {
      install: '安装费用',
      maintenance: '维护 / 月',
      revenue: '预计收入 / 年',
      delivery: '交付时间',
    },
  },
  id: {
    hero: {
      title1: 'Buat',
      title2: 'toko audiovisual Anda',
      title3: 'yang di-skoleom-kan',
      sub: 'Teknologi pertama di dunia yang mengubah setiap video menjadi titik penjualan cerdas',
      subNb: 'tanpa pengalihan, tanpa gangguan.',
    },
    principe: {
      eyebrow: 'Prinsipnya',
      h2a: 'Setiap video menjadi',
      h2b: 'sebuah titik penjualan',
      steps: [
        {
          title: 'Tonton',
          text: 'Konten Anda seperti biasa, di lebih dari 2.000 platform OTT dan 1 miliar situs web.',
        },
        {
          title: 'Sentuh',
          text: 'SeSync menganalisis secara real time apa yang muncul di layar dan langsung menampilkan produknya.',
        },
        {
          title: 'Beli',
          text: 'Pembelian terjadi di dalam video itu sendiri. Audiens Anda tidak pernah meninggalkan ekosistem Anda.',
        },
      ],
      stats: [
        { label: 'Cakupan berpaten' },
        { label: 'Pasar yang dapat dijangkau' },
        { label: 'Platform OTT' },
        { label: 'Situs web terhubung' },
      ],
    },
    hiw: {
      eyebrow: 'Cara kerja',
      h2: 'Cara kerjanya',
      cards: [
        {
          title: 'Buat toko Anda',
          text: 'Hidupkan dunia audiovisual Anda, sepenuhnya sesuai citra Anda — di platform yang sudah ada atau kreasi baru.',
        },
        {
          title: 'Hubungkan & aktifkan token Anda',
          text: 'Konvergensi secara otomatis mengintegrasikan konten terpopuler yang disesuaikan dengan merek Anda, dan mengaktifkan token Skoleom Anda.',
        },
        {
          title: 'Hasilkan pendapatan',
          text: 'Setiap tayangan, setiap interaksi, setiap pembelian — bahkan di luar platform Anda — menjadi sumber pendapatan otomatis.',
        },
      ],
    },
    avantages: {
      eyebrow: 'Toko audiovisual Anda',
      h2: 'Keunggulan',
      items: [
        {
          title: 'Komunitas global',
          text: 'Bergabunglah dengan generasi baru kreator dan wirausahawan audiovisual yang berkembang pesat.',
        },
        {
          title: 'Keterindeksan yang revolusioner',
          text: 'Kata kunci Anda tertanam dalam kode video yang di-skoleom-kan: visibilitas organik maksimal, tanpa iklan berbayar.',
        },
        {
          title: 'Monetizer Studio bercitra Anda',
          text: 'Token Anda, analitik Anda, dan semua alat monetisasi Anda disatukan untuk menumbuhkan kerajaan digital Anda.',
        },
      ],
    },
    offres: {
      eyebrow: 'Model bisnis',
      h2: 'Penawaran',
      chip1: 'Redistribusi hingga 30 %',
      chip2: 'Pengiriman dalam 45 hari',
      chip3: 'Monetizer Studio',
      plans: [
        {
          badge: 'Paling banyak dipilih',
          name: 'Akun Besar',
          seg: 'Platform yang ada',
          lic: 'Lisensi operasional / tahun',
          rows: {
            install: 'Biaya pemasangan',
            maintenance: 'Pemeliharaan / bulan',
            revenue: 'Perk. pendapatan / tahun',
            revenueVal: 'hingga 50 M€',
            delivery: 'Waktu pengiriman',
            deliveryVal: '45 hari',
          },
        },
        {
          name: 'Akun Besar',
          seg: 'Platform baru',
          lic: 'Lisensi operasional / tahun',
          rows: {
            install: 'Biaya pemasangan',
            maintenance: 'Pemeliharaan / bulan',
            revenue: 'Perk. pendapatan / tahun',
            revenueVal: 'hingga 30 M€',
            delivery: 'Waktu pengiriman',
            deliveryVal: '45 hari',
          },
        },
        {
          name: 'UKM & perusahaan menengah',
          seg: 'Pertumbuhan',
          lic: 'Lisensi operasional / tahun',
          rows: {
            install: 'Biaya pemasangan',
            maintenance: 'Pemeliharaan / bulan',
            revenue: 'Perk. pendapatan / tahun',
            revenueVal: 'hingga 10 M€',
            delivery: 'Waktu pengiriman',
            deliveryVal: '45 hari',
          },
        },
        {
          name: 'Start-up',
          seg: 'Peluncuran',
          lic: 'Lisensi operasional / tahun',
          rows: {
            install: 'Biaya pemasangan',
            maintenance: 'Pemeliharaan / bulan',
            revenue: 'Perk. pendapatan / tahun',
            revenueVal: 'hingga 2 M€',
            delivery: 'Waktu pengiriman',
            deliveryVal: '45 hari',
          },
        },
      ],
      note: 'Perkiraan pendapatan rata-rata untuk platform inang, berdasarkan monetisasi konten dan pembelian terintegrasi. Jumlah belum termasuk pajak.',
    },
    finalCta: {
      eyebrow: 'Bergabunglah dengan ekosistem',
      h2a: 'Buat sekarang juga',
      h2b: 'toko Anda',
      text: 'Masuki era baru perdagangan terintegrasi di mana setiap konten menjadi peluang konversi.',
      cta: 'Pendaftaran',
    },
    rowLabels: {
      install: 'Biaya pemasangan',
      maintenance: 'Pemeliharaan / bulan',
      revenue: 'Perk. pendapatan / tahun',
      delivery: 'Waktu pengiriman',
    },
  },
  sw: {
    hero: {
      title1: 'Unda yako',
      title2: 'duka la kusikia na kuona',
      title3: 'lililoskoleomishwa',
      sub: 'Teknolojia ya kwanza duniani inayobadilisha kila video kuwa kituo cha mauzo chenye akili',
      subNb: 'bila kuelekezwa upya, bila kukatizwa.',
    },
    principe: {
      eyebrow: 'Kanuni',
      h2a: 'Kila video huwa',
      h2b: 'kituo cha mauzo',
      steps: [
        {
          title: 'Tazama',
          text: 'Maudhui yako kama kawaida, kwenye majukwaa zaidi ya 2,000 ya OTT na tovuti bilioni 1.',
        },
        {
          title: 'Gusa',
          text: 'SeSync huchanganua kwa wakati halisi kinachoonekana skrini na kufichua bidhaa papo hapo.',
        },
        {
          title: 'Nunua',
          text: 'Ununuzi hufanyika ndani ya video yenyewe. Hadhira yako haitoki kamwe kwenye mfumo wako.',
        },
      ],
      stats: [
        { label: 'Ufikiaji wenye hati miliki' },
        { label: 'Soko linaloweza kufikiwa' },
        { label: 'Majukwaa ya OTT' },
        { label: 'Tovuti zilizounganishwa' },
      ],
    },
    hiw: {
      eyebrow: 'Jinsi inavyofanya kazi',
      h2: 'Jinsi inavyofanya kazi',
      cards: [
        {
          title: 'Unda duka lako',
          text: 'Hai maisha kwa ulimwengu wako wa kusikia na kuona, kikamilifu kwa sura yako — kwenye jukwaa lililopo au ubunifu mpya.',
        },
        {
          title: 'Unganisha na uwashe token yako',
          text: 'Muunganiko huunganisha kiotomatiki maudhui maarufu zaidi yaliyolengwa kwa chapa yako, na kuwasha token yako ya Skoleom.',
        },
        {
          title: 'Zalisha mapato',
          text: 'Kila mtazamo, kila mwingiliano, kila ununuzi — hata nje ya jukwaa lako — huwa chanzo cha mapato ya kiotomatiki.',
        },
      ],
    },
    avantages: {
      eyebrow: 'Duka lako la kusikia na kuona',
      h2: 'Manufaa',
      items: [
        {
          title: 'Jumuiya ya kimataifa',
          text: 'Jiunge na kizazi kipya kinachokua kwa kasi cha wabunifu na wajasiriamali wa kusikia na kuona.',
        },
        {
          title: 'Upatikanaji wa kimapinduzi',
          text: 'Maneno yako muhimu yameingizwa katika msimbo wa video zilizoskoleomishwa: mwonekano wa juu wa kiasili, bila matangazo ya kulipia.',
        },
        {
          title: 'Monetizer Studio yenye sura yako',
          text: 'Token yako, uchanganuzi wako na zana zako zote za kupata mapato zimeunganishwa ili kukuza himaya yako ya kidijitali.',
        },
      ],
    },
    offres: {
      eyebrow: 'Mfumo wa biashara',
      h2: 'Matoleo',
      chip1: 'Ugawaji upya hadi 30 %',
      chip2: 'Uwasilishaji ndani ya siku 45',
      chip3: 'Monetizer Studio',
      plans: [
        {
          badge: 'Iliyochaguliwa zaidi',
          name: 'Akaunti Kubwa',
          seg: 'Jukwaa lililopo',
          lic: 'Leseni ya uendeshaji / mwaka',
          rows: {
            install: 'Gharama za usakinishaji',
            maintenance: 'Matengenezo / mwezi',
            revenue: 'Mapato yanayokadiriwa / mwaka',
            revenueVal: 'hadi 50 M€',
            delivery: 'Muda wa uwasilishaji',
            deliveryVal: 'siku 45',
          },
        },
        {
          name: 'Akaunti Kubwa',
          seg: 'Jukwaa jipya',
          lic: 'Leseni ya uendeshaji / mwaka',
          rows: {
            install: 'Gharama za usakinishaji',
            maintenance: 'Matengenezo / mwezi',
            revenue: 'Mapato yanayokadiriwa / mwaka',
            revenueVal: 'hadi 30 M€',
            delivery: 'Muda wa uwasilishaji',
            deliveryVal: 'siku 45',
          },
        },
        {
          name: 'Biashara ndogo na za kati',
          seg: 'Ukuaji',
          lic: 'Leseni ya uendeshaji / mwaka',
          rows: {
            install: 'Gharama za usakinishaji',
            maintenance: 'Matengenezo / mwezi',
            revenue: 'Mapato yanayokadiriwa / mwaka',
            revenueVal: 'hadi 10 M€',
            delivery: 'Muda wa uwasilishaji',
            deliveryVal: 'siku 45',
          },
        },
        {
          name: 'Start-up',
          seg: 'Uzinduzi',
          lic: 'Leseni ya uendeshaji / mwaka',
          rows: {
            install: 'Gharama za usakinishaji',
            maintenance: 'Matengenezo / mwezi',
            revenue: 'Mapato yanayokadiriwa / mwaka',
            revenueVal: 'hadi 2 M€',
            delivery: 'Muda wa uwasilishaji',
            deliveryVal: 'siku 45',
          },
        },
      ],
      note: 'Makadirio ya wastani wa mapato kwa jukwaa mwenyeji, kwa msingi wa kupata mapato kutoka kwa maudhui na ununuzi uliojumuishwa. Kiasi hakijajumuisha kodi.',
    },
    finalCta: {
      eyebrow: 'Jiunge na mfumo',
      h2a: 'Unda sasa hivi',
      h2b: 'duka lako',
      text: 'Ingia katika enzi mpya ya biashara iliyojumuishwa ambapo kila maudhui huwa fursa ya ubadilishaji.',
      cta: 'Usajili',
    },
    rowLabels: {
      install: 'Gharama za usakinishaji',
      maintenance: 'Matengenezo / mwezi',
      revenue: 'Mapato yanayokadiriwa / mwaka',
      delivery: 'Muda wa uwasilishaji',
    },
  },
};

/** Fusion profonde clé par clé : FR sert toujours de repli. */
export function getCreerBoutiqueStrings(lang: string): CreerBoutiqueStrings {
  const code = (lang || 'fr').slice(0, 2).toLowerCase();
  if (code === 'fr') return FR;
  const o = I18N[code];
  if (!o) return FR;

  const mergeRows = (base: PriceRows, ov?: Partial<PriceRows>): PriceRows => ({
    ...base,
    ...(ov || {}),
  });
  const mergePlan = (base: Plan, ov?: Partial<Plan>): Plan => ({
    ...base,
    ...(ov || {}),
    rows: mergeRows(base.rows, ov?.rows),
  });

  return {
    hero: { ...FR.hero, ...(o.hero || {}) },
    principe: {
      ...FR.principe,
      ...(o.principe || {}),
      steps: FR.principe.steps.map((st, i) => ({
        ...st,
        ...(o.principe?.steps?.[i] || {}),
      })) as [Step, Step, Step],
      stats: FR.principe.stats.map((st, i) => ({
        ...st,
        ...(o.principe?.stats?.[i] || {}),
      })) as [Stat, Stat, Stat, Stat],
    },
    hiw: {
      ...FR.hiw,
      ...(o.hiw || {}),
      cards: FR.hiw.cards.map((c, i) => ({
        ...c,
        ...(o.hiw?.cards?.[i] || {}),
      })) as [HiwCard, HiwCard, HiwCard],
    },
    avantages: {
      ...FR.avantages,
      ...(o.avantages || {}),
      items: FR.avantages.items.map((it, i) => ({
        ...it,
        ...(o.avantages?.items?.[i] || {}),
      })) as [Advantage, Advantage, Advantage],
    },
    offres: {
      ...FR.offres,
      ...(o.offres || {}),
      plans: FR.offres.plans.map((p, i) => mergePlan(p, o.offres?.plans?.[i])) as [
        Plan,
        Plan,
        Plan,
        Plan,
      ],
    },
    finalCta: { ...FR.finalCta, ...(o.finalCta || {}) },
    rowLabels: { ...FR.rowLabels, ...(o.rowLabels || {}) },
  };
}
