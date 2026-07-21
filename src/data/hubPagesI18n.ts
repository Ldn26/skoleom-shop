/**
 * Traductions des pages descriptives natives (PageView) : mission, technologie,
 * brevets, écosystème, financement. Source FR = hubData.ts (HUB_PAGES).
 * Toute clé absente retombe sur le FR. Pour les sections « liste de marques »
 * (items inchangés), seul le `title` est traduit (items hérités du FR).
 */
import { HUB_PAGES, type HubPage } from './hubData';
import { ABOUT_I18N } from './hubI18n';

interface SectionT {
  title: string;
  paragraphs?: string[];
  items?: string[];
}
interface PageT {
  title: string;
  intro: string;
  ctaLabel?: string;
  sections: SectionT[];
}

type PageId = 'mission' | 'technologie' | 'brevets' | 'ecosystem' | 'financement';

export const HUB_PAGES_I18N: Record<string, Partial<Record<PageId, PageT>>> = {
  en: {
    mission: {
      title: 'Our mission',
      intro:
        'Make every video shoppable, anywhere in the world, with no gap between desire and purchase.',
      ctaLabel: 'Discover the technology',
      sections: [
        {
          title: 'Our purpose',
          paragraphs: [
            'Every day, billions of hours of video are watched — streaming, social media, connected TV. Between the desire for a product seen on screen and the purchase, there is a gap. Skoleom makes it disappear.',
          ],
        },
        {
          title: 'Watch. Touch. Buy.®',
          items: [
            'Watch — Watch without interruption.',
            'Touch — Interact with what you see.',
            'Buy — Buy inside the content, with no redirection.',
          ],
        },
        {
          title: 'Our values',
          items: [
            'Patented innovation',
            'Content–commerce immersion',
            'Technological sovereignty',
            'Real-time measurement',
          ],
        },
      ],
    },
    technologie: {
      title: 'Our technology',
      intro:
        'A shoppable audiovisual engine that recognizes what you watch and makes everything you see buyable.',
      ctaLabel: 'See the patents',
      sections: [
        {
          title: 'The shoppable engine',
          paragraphs: [
            'Content analysis, real-time product identification, interactive purchase points without breaking the experience. Connected to 2,000+ OTT platforms and billions of sites.',
          ],
        },
        {
          title: '4 pillars',
          items: [
            'AI Recognition — real-time identification',
            'Smart Capsules — interactive in-video',
            'One Tap — zero redirection',
            'Buy in Context — buy without leaving the stream',
          ],
        },
        { title: 'Proprietary blocks' },
      ],
    },
    brevets: {
      title: 'Skoleom patent',
      intro:
        'Proprietary technology protected by three patent families, filed and extended internationally.',
      ctaLabel: 'The ecosystem',
      sections: [
        {
          title: 'SKM1 patent',
          items: [
            'Access to remote resources from audiovisual content',
            'FR2201013A / EP4473738 / WO2023148295A1',
            'Filed: 04/02/2022',
          ],
        },
        {
          title: 'SKM2 patent',
          items: [
            'Enrichment of audiovisual content',
            'FR2201014A / EP4473422 / WO2023148296A1',
            'Filed: 04/02/2022',
          ],
        },
        {
          title: 'SKM3 patent',
          items: [
            'Access from a connected TV device',
            'FR2309179 / WO2025046115A1',
            'Filed: 01/09/2023',
          ],
        },
        {
          title: 'Registered trademarks',
          paragraphs: [
            'Skoleom®, SeContent®, The25x®, SkoleToon’s®, Monetizer Studio® — protected in over 50 countries.',
          ],
        },
      ],
    },
    ecosystem: {
      title: 'The Skoleom ecosystem',
      intro:
        'Audiovisual stores, consumer services, professional solutions and Group entities — a complete ecosystem.',
      ctaLabel: 'Explore the stores',
      sections: [
        { title: 'Audiovisual stores' },
        { title: 'For everyone' },
        { title: 'For professionals' },
        { title: 'The Group' },
      ],
    },
    financement: {
      title: 'Funding programs',
      intro: 'Skoleom Invest — an information space dedicated to the funding of the Skoleom group.',
      ctaLabel: 'Investor contact',
      sections: [
        {
          title: 'Disclaimer',
          paragraphs: [
            'Informational content only. This is neither a public offering nor investment advice. Risk of capital loss.',
          ],
        },
        {
          title: 'Skoleom Invest',
          paragraphs: [
            'Information centralized on invest.skoleom.com for investors who want to understand the ecosystem and its trajectory.',
          ],
        },
        { title: 'Capital', items: ['Skoleom Platform Inc. — €194M share capital'] },
      ],
    },
  },

  es: {
    mission: {
      title: 'Nuestra misión',
      intro:
        'Hacer que cada vídeo sea comprable, en cualquier parte del mundo, sin ruptura entre el deseo y la compra.',
      ctaLabel: 'Descubrir la tecnología',
      sections: [
        {
          title: 'Nuestra razón de ser',
          paragraphs: [
            'Cada día se ven miles de millones de horas de vídeo: streaming, redes sociales, TV conectada. Entre el deseo de un producto visto en pantalla y la compra existe una ruptura. Skoleom la hace desaparecer.',
          ],
        },
        {
          title: 'Watch. Touch. Buy.®',
          items: [
            'Watch — Ver sin interrupciones.',
            'Touch — Interactuar con lo que ves.',
            'Buy — Comprar dentro del contenido, sin redirección.',
          ],
        },
        {
          title: 'Nuestros valores',
          items: [
            'Innovación patentada',
            'Inmersión contenido-comercio',
            'Soberanía tecnológica',
            'Medición en tiempo real',
          ],
        },
      ],
    },
    technologie: {
      title: 'Nuestra tecnología',
      intro:
        'Un motor audiovisual comprable que reconoce lo que ves y hace comprable todo lo que aparece en pantalla.',
      ctaLabel: 'Ver las patentes',
      sections: [
        {
          title: 'El motor comprable',
          paragraphs: [
            'Análisis del contenido, identificación de productos en tiempo real, puntos de compra interactivos sin romper la experiencia. Conectado a más de 2000 plataformas OTT y miles de millones de sitios.',
          ],
        },
        {
          title: '4 pilares',
          items: [
            'AI Recognition — identificación en tiempo real',
            'Smart Capsules — interactivas en el vídeo',
            'One Tap — cero redirección',
            'Buy in Context — comprar sin salir del flujo',
          ],
        },
        { title: 'Bloques propios' },
      ],
    },
    brevets: {
      title: 'Patente Skoleom',
      intro:
        'Tecnología propia protegida por tres familias de patentes, presentadas y ampliadas internacionalmente.',
      ctaLabel: 'El ecosistema',
      sections: [
        {
          title: 'Patente SKM1',
          items: [
            'Acceso a recursos remotos desde un contenido audiovisual',
            'FR2201013A / EP4473738 / WO2023148295A1',
            'Presentación: 04/02/2022',
          ],
        },
        {
          title: 'Patente SKM2',
          items: [
            'Enriquecimiento de un contenido audiovisual',
            'FR2201014A / EP4473422 / WO2023148296A1',
            'Presentación: 04/02/2022',
          ],
        },
        {
          title: 'Patente SKM3',
          items: [
            'Acceso desde un equipo de televisión conectada',
            'FR2309179 / WO2025046115A1',
            'Presentación: 01/09/2023',
          ],
        },
        {
          title: 'Marcas registradas',
          paragraphs: [
            'Skoleom®, SeContent®, The25x®, SkoleToon’s®, Monetizer Studio® — protegidas en más de 50 países.',
          ],
        },
      ],
    },
    ecosystem: {
      title: 'El ecosistema Skoleom',
      intro:
        'Tiendas audiovisuales, servicios para el gran público, soluciones profesionales y entidades del Grupo: un ecosistema completo.',
      ctaLabel: 'Explorar las tiendas',
      sections: [
        { title: 'Tiendas audiovisuales' },
        { title: 'Para todos' },
        { title: 'Para profesionales' },
        { title: 'El Grupo' },
      ],
    },
    financement: {
      title: 'Programas de financiación',
      intro:
        'Skoleom Invest — espacio de información dedicado a la financiación del grupo Skoleom.',
      ctaLabel: 'Contacto inversores',
      sections: [
        {
          title: 'Aviso',
          paragraphs: [
            'Contenido únicamente informativo. No constituye una oferta pública ni asesoramiento de inversión. Riesgo de pérdida de capital.',
          ],
        },
        {
          title: 'Skoleom Invest',
          paragraphs: [
            'Información centralizada en invest.skoleom.com para los inversores que deseen comprender el ecosistema y su trayectoria.',
          ],
        },
        { title: 'Capital', items: ['Skoleom Platform Inc. — 194 M€ de capital social'] },
      ],
    },
  },

  de: {
    mission: {
      title: 'Unsere Mission',
      intro:
        'Jedes Video überall auf der Welt kaufbar machen – ohne Bruch zwischen Wunsch und Kauf.',
      ctaLabel: 'Die Technologie entdecken',
      sections: [
        {
          title: 'Unser Sinn',
          paragraphs: [
            'Jeden Tag werden Milliarden Stunden Video angesehen – Streaming, soziale Medien, Connected TV. Zwischen dem Wunsch nach einem auf dem Bildschirm gesehenen Produkt und dem Kauf klafft eine Lücke. Skoleom lässt sie verschwinden.',
          ],
        },
        {
          title: 'Watch. Touch. Buy.®',
          items: [
            'Watch — Ohne Unterbrechung ansehen.',
            'Touch — Mit dem Gesehenen interagieren.',
            'Buy — Im Inhalt kaufen, ohne Weiterleitung.',
          ],
        },
        {
          title: 'Unsere Werte',
          items: [
            'Patentierte Innovation',
            'Content-Commerce-Immersion',
            'Technologische Souveränität',
            'Messung in Echtzeit',
          ],
        },
      ],
    },
    technologie: {
      title: 'Unsere Technologie',
      intro:
        'Eine kaufbare audiovisuelle Engine, die erkennt, was man sieht, und alles Gesehene kaufbar macht.',
      ctaLabel: 'Die Patente ansehen',
      sections: [
        {
          title: 'Die kaufbare Engine',
          paragraphs: [
            'Inhaltsanalyse, Produkterkennung in Echtzeit, interaktive Kaufpunkte ohne Unterbrechung des Erlebnisses. Verbunden mit über 2.000 OTT-Plattformen und Milliarden von Websites.',
          ],
        },
        {
          title: '4 Säulen',
          items: [
            'AI Recognition — Echtzeit-Erkennung',
            'Smart Capsules — interaktiv im Video',
            'One Tap — keine Weiterleitung',
            'Buy in Context — kaufen, ohne den Stream zu verlassen',
          ],
        },
        { title: 'Eigene Bausteine' },
      ],
    },
    brevets: {
      title: 'Skoleom-Patent',
      intro:
        'Eigene Technologie, geschützt durch drei Patentfamilien, international angemeldet und erweitert.',
      ctaLabel: 'Das Ökosystem',
      sections: [
        {
          title: 'Patent SKM1',
          items: [
            'Zugriff auf entfernte Ressourcen aus audiovisuellen Inhalten',
            'FR2201013A / EP4473738 / WO2023148295A1',
            'Anmeldung: 04.02.2022',
          ],
        },
        {
          title: 'Patent SKM2',
          items: [
            'Anreicherung audiovisueller Inhalte',
            'FR2201014A / EP4473422 / WO2023148296A1',
            'Anmeldung: 04.02.2022',
          ],
        },
        {
          title: 'Patent SKM3',
          items: [
            'Zugriff über ein verbundenes Fernsehgerät',
            'FR2309179 / WO2025046115A1',
            'Anmeldung: 01.09.2023',
          ],
        },
        {
          title: 'Eingetragene Marken',
          paragraphs: [
            'Skoleom®, SeContent®, The25x®, SkoleToon’s®, Monetizer Studio® — in über 50 Ländern geschützt.',
          ],
        },
      ],
    },
    ecosystem: {
      title: 'Das Skoleom-Ökosystem',
      intro:
        'Audiovisuelle Shops, Verbraucherdienste, professionelle Lösungen und Konzerngesellschaften – ein vollständiges Ökosystem.',
      ctaLabel: 'Shops entdecken',
      sections: [
        { title: 'Audiovisuelle Shops' },
        { title: 'Für alle' },
        { title: 'Für Profis' },
        { title: 'Der Konzern' },
      ],
    },
    financement: {
      title: 'Finanzierungsprogramme',
      intro: 'Skoleom Invest — Informationsbereich zur Finanzierung des Skoleom-Konzerns.',
      ctaLabel: 'Investorenkontakt',
      sections: [
        {
          title: 'Hinweis',
          paragraphs: [
            'Nur zu Informationszwecken. Weder ein öffentliches Angebot noch eine Anlageberatung. Risiko eines Kapitalverlusts.',
          ],
        },
        {
          title: 'Skoleom Invest',
          paragraphs: [
            'Zentrale Informationen auf invest.skoleom.com für Investoren, die das Ökosystem und seinen Werdegang verstehen möchten.',
          ],
        },
        { title: 'Kapital', items: ['Skoleom Platform Inc. — 194 Mio. € Stammkapital'] },
      ],
    },
  },

  it: {
    mission: {
      title: 'La nostra missione',
      intro:
        'Rendere ogni video acquistabile, ovunque nel mondo, senza interruzioni tra il desiderio e l’acquisto.',
      ctaLabel: 'Scopri la tecnologia',
      sections: [
        {
          title: 'La nostra ragione d’essere',
          paragraphs: [
            'Ogni giorno si guardano miliardi di ore di video — streaming, social, TV connessa. Tra il desiderio di un prodotto visto sullo schermo e l’acquisto c’è una frattura. Skoleom la fa sparire.',
          ],
        },
        {
          title: 'Watch. Touch. Buy.®',
          items: [
            'Watch — Guardare senza interruzioni.',
            'Touch — Interagire con ciò che vedi.',
            'Buy — Acquistare nel contenuto, senza reindirizzamento.',
          ],
        },
        {
          title: 'I nostri valori',
          items: [
            'Innovazione brevettata',
            'Immersione contenuto-commercio',
            'Sovranità tecnologica',
            'Misurazione in tempo reale',
          ],
        },
      ],
    },
    technologie: {
      title: 'La nostra tecnologia',
      intro:
        'Un motore audiovisivo acquistabile che riconosce ciò che si guarda e rende acquistabile tutto ciò che si vede.',
      ctaLabel: 'Vedi i brevetti',
      sections: [
        {
          title: 'Il motore acquistabile',
          paragraphs: [
            'Analisi del contenuto, identificazione dei prodotti in tempo reale, punti d’acquisto interattivi senza interrompere l’esperienza. Connesso a oltre 2.000 piattaforme OTT e miliardi di siti.',
          ],
        },
        {
          title: '4 pilastri',
          items: [
            'AI Recognition — identificazione in tempo reale',
            'Smart Capsules — interattive nel video',
            'One Tap — zero reindirizzamenti',
            'Buy in Context — acquistare senza lasciare il flusso',
          ],
        },
        { title: 'Componenti proprietari' },
      ],
    },
    brevets: {
      title: 'Brevetto Skoleom',
      intro:
        'Tecnologia proprietaria protetta da tre famiglie di brevetti, depositate ed estese a livello internazionale.',
      ctaLabel: 'L’ecosistema',
      sections: [
        {
          title: 'Brevetto SKM1',
          items: [
            'Accesso a risorse remote da un contenuto audiovisivo',
            'FR2201013A / EP4473738 / WO2023148295A1',
            'Deposito: 04/02/2022',
          ],
        },
        {
          title: 'Brevetto SKM2',
          items: [
            'Arricchimento di un contenuto audiovisivo',
            'FR2201014A / EP4473422 / WO2023148296A1',
            'Deposito: 04/02/2022',
          ],
        },
        {
          title: 'Brevetto SKM3',
          items: [
            'Accesso da un dispositivo televisivo connesso',
            'FR2309179 / WO2025046115A1',
            'Deposito: 01/09/2023',
          ],
        },
        {
          title: 'Marchi registrati',
          paragraphs: [
            'Skoleom®, SeContent®, The25x®, SkoleToon’s®, Monetizer Studio® — protetti in oltre 50 Paesi.',
          ],
        },
      ],
    },
    ecosystem: {
      title: 'L’ecosistema Skoleom',
      intro:
        'Negozi audiovisivi, servizi per il grande pubblico, soluzioni professionali ed entità del Gruppo: un ecosistema completo.',
      ctaLabel: 'Esplora i negozi',
      sections: [
        { title: 'Negozi audiovisivi' },
        { title: 'Per tutti' },
        { title: 'Per i professionisti' },
        { title: 'Il Gruppo' },
      ],
    },
    financement: {
      title: 'Programmi di finanziamento',
      intro: 'Skoleom Invest — spazio informativo dedicato al finanziamento del gruppo Skoleom.',
      ctaLabel: 'Contatto investitori',
      sections: [
        {
          title: 'Avvertenza',
          paragraphs: [
            'Contenuto puramente informativo. Non costituisce un’offerta al pubblico né una consulenza in materia di investimenti. Rischio di perdita del capitale.',
          ],
        },
        {
          title: 'Skoleom Invest',
          paragraphs: [
            'Informazioni centralizzate su invest.skoleom.com per gli investitori che desiderano comprendere l’ecosistema e la sua traiettoria.',
          ],
        },
        { title: 'Capitale', items: ['Skoleom Platform Inc. — 194 M€ di capitale sociale'] },
      ],
    },
  },

  pt: {
    mission: {
      title: 'A nossa missão',
      intro:
        'Tornar cada vídeo comprável, em qualquer lugar do mundo, sem ruptura entre o desejo e a compra.',
      ctaLabel: 'Descobrir a tecnologia',
      sections: [
        {
          title: 'A nossa razão de ser',
          paragraphs: [
            'Todos os dias, assistem-se a milhares de milhões de horas de vídeo — streaming, redes sociais, TV ligada. Entre o desejo de um produto visto no ecrã e a compra existe uma ruptura. A Skoleom faz com que ela desapareça.',
          ],
        },
        {
          title: 'Watch. Touch. Buy.®',
          items: [
            'Watch — Assistir sem interrupções.',
            'Touch — Interagir com o que vê.',
            'Buy — Comprar dentro do conteúdo, sem redirecionamento.',
          ],
        },
        {
          title: 'Os nossos valores',
          items: [
            'Inovação patenteada',
            'Imersão conteúdo-comércio',
            'Soberania tecnológica',
            'Medição em tempo real',
          ],
        },
      ],
    },
    technologie: {
      title: 'A nossa tecnologia',
      intro:
        'Um motor audiovisual comprável que reconhece o que se vê e torna comprável tudo o que aparece no ecrã.',
      ctaLabel: 'Ver as patentes',
      sections: [
        {
          title: 'O motor comprável',
          paragraphs: [
            'Análise do conteúdo, identificação de produtos em tempo real, pontos de compra interativos sem quebrar a experiência. Ligado a mais de 2000 plataformas OTT e milhares de milhões de sites.',
          ],
        },
        {
          title: '4 pilares',
          items: [
            'AI Recognition — identificação em tempo real',
            'Smart Capsules — interativas no vídeo',
            'One Tap — zero redirecionamento',
            'Buy in Context — comprar sem sair do fluxo',
          ],
        },
        { title: 'Blocos próprios' },
      ],
    },
    brevets: {
      title: 'Patente Skoleom',
      intro:
        'Tecnologia própria protegida por três famílias de patentes, depositadas e alargadas internacionalmente.',
      ctaLabel: 'O ecossistema',
      sections: [
        {
          title: 'Patente SKM1',
          items: [
            'Acesso a recursos remotos a partir de um conteúdo audiovisual',
            'FR2201013A / EP4473738 / WO2023148295A1',
            'Depósito: 04/02/2022',
          ],
        },
        {
          title: 'Patente SKM2',
          items: [
            'Enriquecimento de um conteúdo audiovisual',
            'FR2201014A / EP4473422 / WO2023148296A1',
            'Depósito: 04/02/2022',
          ],
        },
        {
          title: 'Patente SKM3',
          items: [
            'Acesso a partir de um equipamento de televisão ligada',
            'FR2309179 / WO2025046115A1',
            'Depósito: 01/09/2023',
          ],
        },
        {
          title: 'Marcas registadas',
          paragraphs: [
            'Skoleom®, SeContent®, The25x®, SkoleToon’s®, Monetizer Studio® — protegidas em mais de 50 países.',
          ],
        },
      ],
    },
    ecosystem: {
      title: 'O ecossistema Skoleom',
      intro:
        'Lojas audiovisuais, serviços para o grande público, soluções profissionais e entidades do Grupo — um ecossistema completo.',
      ctaLabel: 'Explorar as lojas',
      sections: [
        { title: 'Lojas audiovisuais' },
        { title: 'Para todos' },
        { title: 'Para profissionais' },
        { title: 'O Grupo' },
      ],
    },
    financement: {
      title: 'Programas de financiamento',
      intro: 'Skoleom Invest — espaço de informação dedicado ao financiamento do grupo Skoleom.',
      ctaLabel: 'Contacto investidores',
      sections: [
        {
          title: 'Aviso',
          paragraphs: [
            'Conteúdo apenas informativo. Não constitui uma oferta ao público nem aconselhamento de investimento. Risco de perda de capital.',
          ],
        },
        {
          title: 'Skoleom Invest',
          paragraphs: [
            'Informações centralizadas em invest.skoleom.com para os investidores que pretendam compreender o ecossistema e a sua trajetória.',
          ],
        },
        { title: 'Capital', items: ['Skoleom Platform Inc. — 194 M€ de capital social'] },
      ],
    },
  },

  nl: {
    mission: {
      title: 'Onze missie',
      intro:
        'Elke video overal ter wereld koopbaar maken, zonder kloof tussen verlangen en aankoop.',
      ctaLabel: 'Ontdek de technologie',
      sections: [
        {
          title: 'Onze bestaansreden',
          paragraphs: [
            'Elke dag worden miljarden uren video bekeken — streaming, social media, connected tv. Tussen het verlangen naar een op het scherm gezien product en de aankoop zit een kloof. Skoleom laat die verdwijnen.',
          ],
        },
        {
          title: 'Watch. Touch. Buy.®',
          items: [
            'Watch — Kijken zonder onderbreking.',
            'Touch — Interageren met wat je ziet.',
            'Buy — Kopen in de content, zonder omleiding.',
          ],
        },
        {
          title: 'Onze waarden',
          items: [
            'Gepatenteerde innovatie',
            'Content-commerce-immersie',
            'Technologische soevereiniteit',
            'Meting in realtime',
          ],
        },
      ],
    },
    technologie: {
      title: 'Onze technologie',
      intro:
        'Een koopbare audiovisuele engine die herkent wat je kijkt en alles wat je ziet koopbaar maakt.',
      ctaLabel: 'Bekijk de octrooien',
      sections: [
        {
          title: 'De koopbare engine',
          paragraphs: [
            'Contentanalyse, productidentificatie in realtime, interactieve koopmomenten zonder de beleving te onderbreken. Verbonden met 2.000+ OTT-platforms en miljarden sites.',
          ],
        },
        {
          title: '4 pijlers',
          items: [
            'AI Recognition — identificatie in realtime',
            'Smart Capsules — interactief in de video',
            'One Tap — geen omleiding',
            'Buy in Context — kopen zonder de stream te verlaten',
          ],
        },
        { title: 'Eigen bouwstenen' },
      ],
    },
    brevets: {
      title: 'Skoleom-octrooi',
      intro:
        'Eigen technologie beschermd door drie octrooifamilies, internationaal ingediend en uitgebreid.',
      ctaLabel: 'Het ecosysteem',
      sections: [
        {
          title: 'Octrooi SKM1',
          items: [
            'Toegang tot externe bronnen vanuit audiovisuele content',
            'FR2201013A / EP4473738 / WO2023148295A1',
            'Indiening: 04-02-2022',
          ],
        },
        {
          title: 'Octrooi SKM2',
          items: [
            'Verrijking van audiovisuele content',
            'FR2201014A / EP4473422 / WO2023148296A1',
            'Indiening: 04-02-2022',
          ],
        },
        {
          title: 'Octrooi SKM3',
          items: [
            'Toegang vanaf een verbonden televisietoestel',
            'FR2309179 / WO2025046115A1',
            'Indiening: 01-09-2023',
          ],
        },
        {
          title: 'Gedeponeerde merken',
          paragraphs: [
            'Skoleom®, SeContent®, The25x®, SkoleToon’s®, Monetizer Studio® — beschermd in meer dan 50 landen.',
          ],
        },
      ],
    },
    ecosystem: {
      title: 'Het Skoleom-ecosysteem',
      intro:
        'Audiovisuele winkels, consumentendiensten, professionele oplossingen en groepsentiteiten — een volledig ecosysteem.',
      ctaLabel: 'Ontdek de winkels',
      sections: [
        { title: 'Audiovisuele winkels' },
        { title: 'Voor iedereen' },
        { title: 'Voor professionals' },
        { title: 'De Groep' },
      ],
    },
    financement: {
      title: 'Financieringsprogramma’s',
      intro: 'Skoleom Invest — informatieruimte gewijd aan de financiering van de Skoleom-groep.',
      ctaLabel: 'Investeerderscontact',
      sections: [
        {
          title: 'Disclaimer',
          paragraphs: [
            'Uitsluitend informatieve inhoud. Geen openbare aanbieding noch beleggingsadvies. Risico op kapitaalverlies.',
          ],
        },
        {
          title: 'Skoleom Invest',
          paragraphs: [
            'Gecentraliseerde informatie op invest.skoleom.com voor investeerders die het ecosysteem en zijn traject willen begrijpen.',
          ],
        },
        {
          title: 'Kapitaal',
          items: ['Skoleom Platform Inc. — € 194 mln maatschappelijk kapitaal'],
        },
      ],
    },
  },

  ru: {
    mission: {
      title: 'Наша миссия',
      intro:
        'Сделать каждое видео доступным для покупки в любой точке мира, без разрыва между желанием и покупкой.',
      ctaLabel: 'Узнать о технологии',
      sections: [
        {
          title: 'Наше предназначение',
          paragraphs: [
            'Каждый день просматриваются миллиарды часов видео — стриминг, соцсети, Smart TV. Между желанием увиденного на экране товара и покупкой есть разрыв. Skoleom его устраняет.',
          ],
        },
        {
          title: 'Watch. Touch. Buy.®',
          items: [
            'Watch — Смотреть без прерываний.',
            'Touch — Взаимодействовать с тем, что видишь.',
            'Buy — Покупать внутри контента, без перенаправлений.',
          ],
        },
        {
          title: 'Наши ценности',
          items: [
            'Запатентованные инновации',
            'Слияние контента и торговли',
            'Технологический суверенитет',
            'Измерение в реальном времени',
          ],
        },
      ],
    },
    technologie: {
      title: 'Наша технология',
      intro:
        'Аудиовизуальный движок для покупок, который распознаёт то, что вы смотрите, и делает доступным для покупки всё увиденное.',
      ctaLabel: 'Смотреть патенты',
      sections: [
        {
          title: 'Движок для покупок',
          paragraphs: [
            'Анализ контента, идентификация товаров в реальном времени, интерактивные точки покупки без прерывания опыта. Подключён к более чем 2000 OTT-платформам и миллиардам сайтов.',
          ],
        },
        {
          title: '4 опоры',
          items: [
            'AI Recognition — идентификация в реальном времени',
            'Smart Capsules — интерактив внутри видео',
            'One Tap — без перенаправлений',
            'Buy in Context — покупка без выхода из потока',
          ],
        },
        { title: 'Собственные модули' },
      ],
    },
    brevets: {
      title: 'Патент Skoleom',
      intro:
        'Собственная технология, защищённая тремя семействами патентов, поданных и расширенных на международном уровне.',
      ctaLabel: 'Экосистема',
      sections: [
        {
          title: 'Патент SKM1',
          items: [
            'Доступ к удалённым ресурсам из аудиовизуального контента',
            'FR2201013A / EP4473738 / WO2023148295A1',
            'Подача: 04.02.2022',
          ],
        },
        {
          title: 'Патент SKM2',
          items: [
            'Обогащение аудиовизуального контента',
            'FR2201014A / EP4473422 / WO2023148296A1',
            'Подача: 04.02.2022',
          ],
        },
        {
          title: 'Патент SKM3',
          items: [
            'Доступ с подключённого телевизора',
            'FR2309179 / WO2025046115A1',
            'Подача: 01.09.2023',
          ],
        },
        {
          title: 'Зарегистрированные товарные знаки',
          paragraphs: [
            'Skoleom®, SeContent®, The25x®, SkoleToon’s®, Monetizer Studio® — защищены более чем в 50 странах.',
          ],
        },
      ],
    },
    ecosystem: {
      title: 'Экосистема Skoleom',
      intro:
        'Аудиовизуальные магазины, сервисы для широкой аудитории, профессиональные решения и компании Группы — полноценная экосистема.',
      ctaLabel: 'Открыть магазины',
      sections: [
        { title: 'Аудиовизуальные магазины' },
        { title: 'Для всех' },
        { title: 'Для профи' },
        { title: 'Группа' },
      ],
    },
    financement: {
      title: 'Программы финансирования',
      intro:
        'Skoleom Invest — информационное пространство, посвящённое финансированию группы Skoleom.',
      ctaLabel: 'Контакт для инвесторов',
      sections: [
        {
          title: 'Предупреждение',
          paragraphs: [
            'Только информационный материал. Не является публичным предложением или инвестиционной рекомендацией. Риск потери капитала.',
          ],
        },
        {
          title: 'Skoleom Invest',
          paragraphs: [
            'Централизованная информация на invest.skoleom.com для инвесторов, желающих понять экосистему и её развитие.',
          ],
        },
        { title: 'Капитал', items: ['Skoleom Platform Inc. — уставный капитал 194 млн €'] },
      ],
    },
  },

  ar: {
    mission: {
      title: 'رسالتنا',
      intro: 'جعل كل فيديو قابلاً للشراء في أي مكان في العالم، دون انقطاع بين الرغبة والشراء.',
      ctaLabel: 'اكتشف التقنية',
      sections: [
        {
          title: 'سبب وجودنا',
          paragraphs: [
            'كل يوم تُشاهَد مليارات الساعات من الفيديو — البث، ووسائل التواصل، والتلفزيون المتصل. بين الرغبة في منتج يظهر على الشاشة وبين الشراء توجد فجوة. تجعلها Skoleom تختفي.',
          ],
        },
        {
          title: 'Watch. Touch. Buy.®',
          items: [
            'Watch — المشاهدة دون انقطاع.',
            'Touch — التفاعل مع ما تراه.',
            'Buy — الشراء داخل المحتوى، دون إعادة توجيه.',
          ],
        },
        {
          title: 'قيمنا',
          items: [
            'ابتكار محمي ببراءة اختراع',
            'اندماج المحتوى والتجارة',
            'السيادة التقنية',
            'القياس الفوري',
          ],
        },
      ],
    },
    technologie: {
      title: 'تقنيتنا',
      intro: 'محرك سمعي بصري قابل للتسوق يتعرّف على ما تشاهده ويجعل كل ما تراه قابلاً للشراء.',
      ctaLabel: 'عرض براءات الاختراع',
      sections: [
        {
          title: 'المحرك القابل للتسوق',
          paragraphs: [
            'تحليل المحتوى، وتحديد المنتجات في الوقت الفعلي، ونقاط شراء تفاعلية دون قطع التجربة. متصل بأكثر من 2000 منصة OTT ومليارات المواقع.',
          ],
        },
        {
          title: '4 ركائز',
          items: [
            'AI Recognition — تحديد فوري',
            'Smart Capsules — تفاعلية داخل الفيديو',
            'One Tap — دون إعادة توجيه',
            'Buy in Context — الشراء دون مغادرة البث',
          ],
        },
        { title: 'مكوّنات خاصة' },
      ],
    },
    brevets: {
      title: 'براءة اختراع سكوليوم',
      intro: 'تقنية خاصة محمية بثلاث عائلات من براءات الاختراع، مودعة وموسّعة دولياً.',
      ctaLabel: 'المنظومة',
      sections: [
        {
          title: 'براءة SKM1',
          items: [
            'الوصول إلى الموارد البعيدة من محتوى سمعي بصري',
            'FR2201013A / EP4473738 / WO2023148295A1',
            'تاريخ الإيداع: 04/02/2022',
          ],
        },
        {
          title: 'براءة SKM2',
          items: [
            'إثراء محتوى سمعي بصري',
            'FR2201014A / EP4473422 / WO2023148296A1',
            'تاريخ الإيداع: 04/02/2022',
          ],
        },
        {
          title: 'براءة SKM3',
          items: [
            'الوصول من جهاز تلفزيون متصل',
            'FR2309179 / WO2025046115A1',
            'تاريخ الإيداع: 01/09/2023',
          ],
        },
        {
          title: 'علامات مسجّلة',
          paragraphs: [
            'Skoleom®، SeContent®، The25x®، SkoleToon’s®، Monetizer Studio® — محمية في أكثر من 50 دولة.',
          ],
        },
      ],
    },
    ecosystem: {
      title: 'منظومة سكوليوم',
      intro:
        'متاجر سمعية بصرية، وخدمات للجمهور العام، وحلول احترافية، وكيانات المجموعة — منظومة متكاملة.',
      ctaLabel: 'استكشاف المتاجر',
      sections: [
        { title: 'متاجر سمعية بصرية' },
        { title: 'للجميع' },
        { title: 'للمحترفين' },
        { title: 'المجموعة' },
      ],
    },
    financement: {
      title: 'برامج التمويل',
      intro: 'Skoleom Invest — مساحة معلومات مخصّصة لتمويل مجموعة سكوليوم.',
      ctaLabel: 'التواصل مع المستثمرين',
      sections: [
        {
          title: 'تنبيه',
          paragraphs: [
            'محتوى إعلامي فقط. لا يشكّل عرضاً عاماً ولا استشارة استثمارية. مخاطر فقدان رأس المال.',
          ],
        },
        {
          title: 'Skoleom Invest',
          paragraphs: [
            'معلومات مركزية على invest.skoleom.com للمستثمرين الراغبين في فهم المنظومة ومسارها.',
          ],
        },
        { title: 'رأس المال', items: ['Skoleom Platform Inc. — رأس مال قدره 194 مليون يورو'] },
      ],
    },
  },

  hi: {
    mission: {
      title: 'हमारा मिशन',
      intro:
        'हर वीडियो को दुनिया में कहीं भी खरीदने योग्य बनाना, इच्छा और खरीद के बीच बिना किसी रुकावट के।',
      ctaLabel: 'तकनीक जानें',
      sections: [
        {
          title: 'हमारा उद्देश्य',
          paragraphs: [
            'हर दिन अरबों घंटे का वीडियो देखा जाता है — स्ट्रीमिंग, सोशल मीडिया, कनेक्टेड टीवी। स्क्रीन पर दिखे किसी उत्पाद की इच्छा और खरीद के बीच एक खाई होती है। Skoleom उसे मिटा देता है।',
          ],
        },
        {
          title: 'Watch. Touch. Buy.®',
          items: [
            'Watch — बिना रुकावट देखें।',
            'Touch — जो दिखे उससे इंटरैक्ट करें।',
            'Buy — कंटेंट के भीतर ही खरीदें, बिना रीडायरेक्ट।',
          ],
        },
        {
          title: 'हमारे मूल्य',
          items: ['पेटेंटेड नवाचार', 'कंटेंट-कॉमर्स इमर्शन', 'तकनीकी संप्रभुता', 'रियल-टाइम मापन'],
        },
      ],
    },
    technologie: {
      title: 'हमारी तकनीक',
      intro:
        'एक शॉपेबल ऑडियोविज़ुअल इंजन जो पहचानता है कि आप क्या देख रहे हैं और दिखने वाली हर चीज़ को खरीदने योग्य बनाता है।',
      ctaLabel: 'पेटेंट देखें',
      sections: [
        {
          title: 'शॉपेबल इंजन',
          paragraphs: [
            'कंटेंट विश्लेषण, रियल-टाइम उत्पाद पहचान, अनुभव तोड़े बिना इंटरैक्टिव खरीद-बिंदु। 2,000+ OTT प्लेटफ़ॉर्म और अरबों साइटों से जुड़ा।',
          ],
        },
        {
          title: '4 स्तंभ',
          items: [
            'AI Recognition — रियल-टाइम पहचान',
            'Smart Capsules — वीडियो में इंटरैक्टिव',
            'One Tap — शून्य रीडायरेक्ट',
            'Buy in Context — स्ट्रीम छोड़े बिना खरीद',
          ],
        },
        { title: 'स्वामित्व वाले ब्लॉक' },
      ],
    },
    brevets: {
      title: 'स्कोलियम पेटेंट',
      intro:
        'स्वामित्व वाली तकनीक तीन पेटेंट परिवारों द्वारा संरक्षित, अंतरराष्ट्रीय स्तर पर दाखिल और विस्तारित।',
      ctaLabel: 'इकोसिस्टम',
      sections: [
        {
          title: 'पेटेंट SKM1',
          items: [
            'ऑडियोविज़ुअल कंटेंट से रिमोट संसाधनों तक पहुँच',
            'FR2201013A / EP4473738 / WO2023148295A1',
            'दाखिल: 04/02/2022',
          ],
        },
        {
          title: 'पेटेंट SKM2',
          items: [
            'ऑडियोविज़ुअल कंटेंट का संवर्धन',
            'FR2201014A / EP4473422 / WO2023148296A1',
            'दाखिल: 04/02/2022',
          ],
        },
        {
          title: 'पेटेंट SKM3',
          items: [
            'कनेक्टेड टीवी डिवाइस से पहुँच',
            'FR2309179 / WO2025046115A1',
            'दाखिल: 01/09/2023',
          ],
        },
        {
          title: 'पंजीकृत ट्रेडमार्क',
          paragraphs: [
            'Skoleom®, SeContent®, The25x®, SkoleToon’s®, Monetizer Studio® — 50 से अधिक देशों में संरक्षित।',
          ],
        },
      ],
    },
    ecosystem: {
      title: 'स्कोलियम इकोसिस्टम',
      intro:
        'ऑडियोविज़ुअल स्टोर, उपभोक्ता सेवाएँ, पेशेवर समाधान और समूह की इकाइयाँ — एक संपूर्ण इकोसिस्टम।',
      ctaLabel: 'स्टोर एक्सप्लोर करें',
      sections: [
        { title: 'ऑडियोविज़ुअल स्टोर' },
        { title: 'सभी के लिए' },
        { title: 'पेशेवरों के लिए' },
        { title: 'समूह' },
      ],
    },
    financement: {
      title: 'फंडिंग कार्यक्रम',
      intro: 'Skoleom Invest — Skoleom समूह की फंडिंग के लिए समर्पित सूचना स्थान।',
      ctaLabel: 'निवेशक संपर्क',
      sections: [
        {
          title: 'चेतावनी',
          paragraphs: [
            'केवल सूचनात्मक सामग्री। यह न सार्वजनिक पेशकश है, न निवेश सलाह। पूंजी हानि का जोखिम।',
          ],
        },
        {
          title: 'Skoleom Invest',
          paragraphs: [
            'invest.skoleom.com पर केंद्रित जानकारी, उन निवेशकों के लिए जो इकोसिस्टम और उसकी दिशा समझना चाहते हैं।',
          ],
        },
        { title: 'पूंजी', items: ['Skoleom Platform Inc. — €194M शेयर पूंजी'] },
      ],
    },
  },

  zh: {
    mission: {
      title: '我们的使命',
      intro: '让每一个视频在世界任何地方都可购买，让心动与购买之间不再有断层。',
      ctaLabel: '了解技术',
      sections: [
        {
          title: '我们的初心',
          paragraphs: [
            '每天有数十亿小时的视频被观看——流媒体、社交媒体、联网电视。从屏幕上看到的商品的心动到购买之间存在断层。Skoleom 让它消失。',
          ],
        },
        {
          title: 'Watch. Touch. Buy.®',
          items: [
            'Watch — 不间断观看。',
            'Touch — 与所见内容互动。',
            'Buy — 在内容中购买，无需跳转。',
          ],
        },
        { title: '我们的价值', items: ['专利创新', '内容与商业融合', '技术主权', '实时衡量'] },
      ],
    },
    technologie: {
      title: '我们的技术',
      intro: '一款可购物的视听引擎，识别你所观看的内容，让所见之物皆可购买。',
      ctaLabel: '查看专利',
      sections: [
        {
          title: '可购物引擎',
          paragraphs: [
            '内容分析、实时商品识别、在不打断体验的情况下提供互动购买点。连接 2000 多个 OTT 平台和数十亿网站。',
          ],
        },
        {
          title: '四大支柱',
          items: [
            'AI Recognition — 实时识别',
            'Smart Capsules — 视频内互动',
            'One Tap — 零跳转',
            'Buy in Context — 不离开内容即可购买',
          ],
        },
        { title: '自有模块' },
      ],
    },
    brevets: {
      title: 'Skoleom 专利',
      intro: '自有技术由三大专利族保护，已在国际范围内申请并扩展。',
      ctaLabel: '生态系统',
      sections: [
        {
          title: '专利 SKM1',
          items: [
            '从视听内容访问远程资源',
            'FR2201013A / EP4473738 / WO2023148295A1',
            '申请日：2022/02/04',
          ],
        },
        {
          title: '专利 SKM2',
          items: [
            '视听内容的增强',
            'FR2201014A / EP4473422 / WO2023148296A1',
            '申请日：2022/02/04',
          ],
        },
        {
          title: '专利 SKM3',
          items: ['从联网电视设备访问', 'FR2309179 / WO2025046115A1', '申请日：2023/09/01'],
        },
        {
          title: '注册商标',
          paragraphs: [
            'Skoleom®、SeContent®、The25x®、SkoleToon’s®、Monetizer Studio® — 在 50 多个国家受到保护。',
          ],
        },
      ],
    },
    ecosystem: {
      title: 'Skoleom 生态系统',
      intro: '视听商店、面向大众的服务、专业解决方案以及集团旗下实体——一个完整的生态系统。',
      ctaLabel: '探索商店',
      sections: [
        { title: '视听商店' },
        { title: '面向所有人' },
        { title: '面向专业人士' },
        { title: '集团' },
      ],
    },
    financement: {
      title: '融资计划',
      intro: 'Skoleom Invest — 专注于 Skoleom 集团融资的信息空间。',
      ctaLabel: '投资者联系',
      sections: [
        {
          title: '免责声明',
          paragraphs: ['仅供参考。既非公开发行，也非投资建议。存在资本损失风险。'],
        },
        {
          title: 'Skoleom Invest',
          paragraphs: ['信息集中于 invest.skoleom.com，面向希望了解生态系统及其发展轨迹的投资者。'],
        },
        { title: '资本', items: ['Skoleom Platform Inc. — 注册资本 1.94 亿欧元'] },
      ],
    },
  },

  id: {
    mission: {
      title: 'Misi kami',
      intro:
        'Menjadikan setiap video dapat dibeli, di mana saja di dunia, tanpa jeda antara keinginan dan pembelian.',
      ctaLabel: 'Pelajari teknologinya',
      sections: [
        {
          title: 'Alasan kami ada',
          paragraphs: [
            'Setiap hari, miliaran jam video ditonton — streaming, media sosial, TV terhubung. Antara keinginan akan produk yang terlihat di layar dan pembelian terdapat jeda. Skoleom menghilangkannya.',
          ],
        },
        {
          title: 'Watch. Touch. Buy.®',
          items: [
            'Watch — Menonton tanpa gangguan.',
            'Touch — Berinteraksi dengan yang Anda lihat.',
            'Buy — Membeli di dalam konten, tanpa pengalihan.',
          ],
        },
        {
          title: 'Nilai-nilai kami',
          items: [
            'Inovasi berpaten',
            'Imersi konten-perdagangan',
            'Kedaulatan teknologi',
            'Pengukuran real-time',
          ],
        },
      ],
    },
    technologie: {
      title: 'Teknologi kami',
      intro:
        'Mesin audiovisual yang dapat dibeli, yang mengenali apa yang Anda tonton dan membuat semua yang terlihat dapat dibeli.',
      ctaLabel: 'Lihat paten',
      sections: [
        {
          title: 'Mesin yang dapat dibeli',
          paragraphs: [
            'Analisis konten, identifikasi produk real-time, titik pembelian interaktif tanpa memutus pengalaman. Terhubung ke 2.000+ platform OTT dan miliaran situs.',
          ],
        },
        {
          title: '4 pilar',
          items: [
            'AI Recognition — identifikasi real-time',
            'Smart Capsules — interaktif dalam video',
            'One Tap — tanpa pengalihan',
            'Buy in Context — membeli tanpa meninggalkan tayangan',
          ],
        },
        { title: 'Komponen milik sendiri' },
      ],
    },
    brevets: {
      title: 'Paten Skoleom',
      intro:
        'Teknologi milik sendiri yang dilindungi tiga keluarga paten, diajukan dan diperluas secara internasional.',
      ctaLabel: 'Ekosistem',
      sections: [
        {
          title: 'Paten SKM1',
          items: [
            'Akses ke sumber daya jarak jauh dari konten audiovisual',
            'FR2201013A / EP4473738 / WO2023148295A1',
            'Pengajuan: 04/02/2022',
          ],
        },
        {
          title: 'Paten SKM2',
          items: [
            'Pengayaan konten audiovisual',
            'FR2201014A / EP4473422 / WO2023148296A1',
            'Pengajuan: 04/02/2022',
          ],
        },
        {
          title: 'Paten SKM3',
          items: [
            'Akses dari perangkat televisi terhubung',
            'FR2309179 / WO2025046115A1',
            'Pengajuan: 01/09/2023',
          ],
        },
        {
          title: 'Merek terdaftar',
          paragraphs: [
            'Skoleom®, SeContent®, The25x®, SkoleToon’s®, Monetizer Studio® — dilindungi di lebih dari 50 negara.',
          ],
        },
      ],
    },
    ecosystem: {
      title: 'Ekosistem Skoleom',
      intro:
        'Toko audiovisual, layanan publik, solusi profesional, dan entitas Grup — ekosistem yang lengkap.',
      ctaLabel: 'Jelajahi toko',
      sections: [
        { title: 'Toko audiovisual' },
        { title: 'Untuk semua' },
        { title: 'Untuk profesional' },
        { title: 'Grup' },
      ],
    },
    financement: {
      title: 'Program pendanaan',
      intro: 'Skoleom Invest — ruang informasi yang didedikasikan untuk pendanaan grup Skoleom.',
      ctaLabel: 'Kontak investor',
      sections: [
        {
          title: 'Peringatan',
          paragraphs: [
            'Konten hanya bersifat informatif. Bukan penawaran umum maupun nasihat investasi. Risiko kehilangan modal.',
          ],
        },
        {
          title: 'Skoleom Invest',
          paragraphs: [
            'Informasi terpusat di invest.skoleom.com untuk investor yang ingin memahami ekosistem dan arahnya.',
          ],
        },
        { title: 'Modal', items: ['Skoleom Platform Inc. — modal saham €194 jt'] },
      ],
    },
  },

  sw: {
    mission: {
      title: 'Dhamira yetu',
      intro: 'Kufanya kila video inunulike, popote duniani, bila pengo kati ya hamu na ununuzi.',
      ctaLabel: 'Gundua teknolojia',
      sections: [
        {
          title: 'Sababu ya kuwepo kwetu',
          paragraphs: [
            'Kila siku, saa bilioni za video hutazamwa — utiririshaji, mitandao ya kijamii, TV iliyounganishwa. Kati ya hamu ya bidhaa iliyoonekana skrini na ununuzi kuna pengo. Skoleom hulifuta.',
          ],
        },
        {
          title: 'Watch. Touch. Buy.®',
          items: [
            'Watch — Tazama bila kukatizwa.',
            'Touch — Shirikiana na unachokiona.',
            'Buy — Nunua ndani ya maudhui, bila kuelekezwa.',
          ],
        },
        {
          title: 'Maadili yetu',
          items: [
            'Ubunifu uliosajiliwa hataza',
            'Muunganiko wa maudhui na biashara',
            'Uhuru wa kiteknolojia',
            'Upimaji wa wakati halisi',
          ],
        },
      ],
    },
    technologie: {
      title: 'Teknolojia yetu',
      intro:
        'Injini ya kusikia na kuona inayonunulika, inayotambua unachotazama na kufanya kila unachokiona kinunulike.',
      ctaLabel: 'Tazama hataza',
      sections: [
        {
          title: 'Injini inayonunulika',
          paragraphs: [
            'Uchambuzi wa maudhui, utambuzi wa bidhaa wa wakati halisi, sehemu shirikishi za ununuzi bila kukatiza uzoefu. Imeunganishwa na majukwaa 2,000+ ya OTT na tovuti bilioni.',
          ],
        },
        {
          title: 'Nguzo 4',
          items: [
            'AI Recognition — utambuzi wa wakati halisi',
            'Smart Capsules — shirikishi ndani ya video',
            'One Tap — bila kuelekezwa',
            'Buy in Context — nunua bila kuondoka kwenye tiririko',
          ],
        },
        { title: 'Vipengele vya kumiliki' },
      ],
    },
    brevets: {
      title: 'Hataza ya Skoleom',
      intro:
        'Teknolojia ya kumiliki iliyolindwa na familia tatu za hataza, zilizowasilishwa na kupanuliwa kimataifa.',
      ctaLabel: 'Mfumo-ikolojia',
      sections: [
        {
          title: 'Hataza SKM1',
          items: [
            'Ufikiaji wa rasilimali za mbali kutoka maudhui ya kusikia na kuona',
            'FR2201013A / EP4473738 / WO2023148295A1',
            'Uwasilishaji: 04/02/2022',
          ],
        },
        {
          title: 'Hataza SKM2',
          items: [
            'Uboreshaji wa maudhui ya kusikia na kuona',
            'FR2201014A / EP4473422 / WO2023148296A1',
            'Uwasilishaji: 04/02/2022',
          ],
        },
        {
          title: 'Hataza SKM3',
          items: [
            'Ufikiaji kutoka kifaa cha televisheni kilichounganishwa',
            'FR2309179 / WO2025046115A1',
            'Uwasilishaji: 01/09/2023',
          ],
        },
        {
          title: 'Alama za biashara zilizosajiliwa',
          paragraphs: [
            'Skoleom®, SeContent®, The25x®, SkoleToon’s®, Monetizer Studio® — zinalindwa katika nchi zaidi ya 50.',
          ],
        },
      ],
    },
    ecosystem: {
      title: 'Mfumo-ikolojia wa Skoleom',
      intro:
        'Maduka ya kusikia na kuona, huduma za umma, suluhu za kitaalamu na taasisi za Kundi — mfumo-ikolojia kamili.',
      ctaLabel: 'Gundua maduka',
      sections: [
        { title: 'Maduka ya kusikia na kuona' },
        { title: 'Kwa wote' },
        { title: 'Kwa wataalamu' },
        { title: 'Kundi' },
      ],
    },
    financement: {
      title: 'Programu za ufadhili',
      intro: 'Skoleom Invest — nafasi ya taarifa iliyojikita kwenye ufadhili wa kundi la Skoleom.',
      ctaLabel: 'Mawasiliano ya wawekezaji',
      sections: [
        {
          title: 'Tahadhari',
          paragraphs: [
            'Maudhui ya kuelimisha tu. Si toleo kwa umma wala ushauri wa uwekezaji. Hatari ya kupoteza mtaji.',
          ],
        },
        {
          title: 'Skoleom Invest',
          paragraphs: [
            'Taarifa zilizojikita kwenye invest.skoleom.com kwa wawekezaji wanaotaka kuelewa mfumo-ikolojia na mwelekeo wake.',
          ],
        },
        { title: 'Mtaji', items: ['Skoleom Platform Inc. — mtaji wa hisa €194M'] },
      ],
    },
  },
};

/** Page hub résolue pour une langue (FR par défaut). */
export function getHubPage(lang: string, id: string): HubPage {
  const base = HUB_PAGES[id];
  const tr = HUB_PAGES_I18N[lang]?.[id as PageId];
  if (!base || !tr) return base;
  const eyebrow =
    base.column === 'about' ? (ABOUT_I18N[lang]?.title ?? base.eyebrow) : base.eyebrow;
  return {
    ...base,
    eyebrow,
    title: tr.title ?? base.title,
    intro: tr.intro ?? base.intro,
    cta: base.cta ? { ...base.cta, label: tr.ctaLabel ?? base.cta.label } : base.cta,
    sections: base.sections.map((s, i) => ({
      title: tr.sections[i]?.title ?? s.title,
      paragraphs: tr.sections[i]?.paragraphs ?? s.paragraphs,
      items: tr.sections[i]?.items ?? s.items,
    })),
  };
}
