export interface StaticPageSection {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
}
export interface StaticPageDocument {
  title: string;
  eyebrow: string;
  intro: string;
  meta?: string;
  actionLabel?: string;
  sections: readonly StaticPageSection[];
}
export type StaticPageDocumentKey =
  | 'mission'
  | 'technology'
  | 'ecosystem'
  | 'funding'
  | 'patents'
  | 'legal'
  | 'terms'
  | 'privacy'
  | 'affiliates'
  | 'cookies';
type StaticPagesResource = {
  documents: Record<StaticPageDocumentKey, StaticPageDocument>;
};
const fr = {
  documents: {
    mission: {
      eyebrow: 'À propos de Skoleom',
      title: 'Notre mission : rendre chaque vidéo achetable',
      meta: 'Skoleom Group · Retail Media & Transmedia · 2026',
      intro:
        'Rendre chaque vidéo achetable, partout dans le monde, sans rupture entre l’envie et l’achat.',
      sections: [
        {
          title: 'Notre raison d’être',
          paragraphs: [
            'Chaque jour, des milliards d’heures de vidéo sont regardées à travers le monde — sur les plateformes de streaming, les réseaux sociaux, la télévision connectée, les sites des marques. Pourtant, entre le moment où un spectateur désire un produit qu’il voit à l’écran et le moment où il peut réellement l’acheter, il existe une rupture.',
            'Skoleom existe pour faire disparaître cette rupture : transformer chaque vidéo en magasin et chaque audience en opportunité d’achat, sans jamais sortir le spectateur de l’expérience qu’il aime.',
          ],
        },
        {
          title: 'Notre mission',
          paragraphs: [
            'Fournir aux marques, aux créateurs et aux plateformes les technologies brevetées et les standards créatifs qui connectent le visionnage, le toucher et l’achat dans une expérience continue, fluide, mesurable et monétisable.',
            'Spécialiste du Retail Media et du Transmedia, Skoleom est connecté à plus de 2 000 plateformes OTT et à des milliards de sites web, transformant chaque écran en point de vente interactif.',
          ],
        },
        {
          title: 'La promesse : Watch. Touch. Buy.®',
          items: [
            'Watch — Regarder : le spectateur est capté par le contenu, sans bannière ni interruption.',
            'Touch — Toucher : d’un simple geste, il interagit avec ce qu’il voit, révélé en temps réel.',
            'Buy — Acheter : l’achat se conclut dans le contenu, sans redirection et sans friction.',
          ],
        },
        {
          title: 'Nos valeurs',
          items: [
            'Innovation : technologie brevetée, format propriétaire et leadership mondial.',
            'Immersion : effacer la frontière entre contenu et commerce.',
            'Souveraineté : maîtriser brevets, standards, infrastructure et données.',
            'Mesure : rendre chaque interaction traçable et monétisable.',
          ],
        },
      ],
    },
    technology: {
      eyebrow: 'À propos de Skoleom',
      title: 'Notre technologie : le moteur audiovisuel shoppable',
      meta: 'Skoleom Group · Retail Media & Transmedia · 2026',
      intro:
        'Un moteur audiovisuel shoppable qui reconnaît ce que l’on regarde et rend achetable tout ce que l’on voit.',
      sections: [
        {
          title: 'Le moteur audiovisuel shoppable',
          paragraphs: [
            'La technologie Skoleom analyse n’importe quel contenu audiovisuel, identifie en temps réel les produits et les moments qu’il contient, puis fait apparaître des points d’achat interactifs sans rompre l’expérience.',
            'Le spectateur reste dans le contenu ; le commerce vient à lui. C’est le cœur du format propriétaire Skoleom et la raison pour laquelle il peut s’intégrer à plus de 2 000 plateformes OTT et à des milliards de sites web.',
          ],
        },
        {
          title: 'Les 4 piliers technologiques',
          items: [
            'AI Recognition : identification en temps réel des produits, objets et moments présents dans un contenu audiovisuel.',
            'Smart Capsules : capsules interactives dans la vidéo, sans rupture de visionnage.',
            'One Tap : un geste, pas de redirection, pas de friction.',
            'Buy in Context : l’utilisateur finalise son achat sans quitter le contenu qu’il aime.',
          ],
        },
        {
          title: 'Nos briques propriétaires',
          items: [
            'SeContent® : le format audiovisuel shoppable qui rend chaque contenu interactif et achetable.',
            'The25x® : la boutique audiovisuelle brevetée.',
            'Skoleom SeSync® : la synchronisation temps réel entre contenus, capsules et catalogues.',
            'Capsules® : les unités interactives in-vidéo.',
            'Monetizer Studio® : la plateforme de monétisation et de pilotage.',
            'Token Marque : le suivi propriétaire de l’attribution.',
            'Skoleom Technology - OTT integration : l’interface d’intégration pour les partenaires.',
          ],
        },
        {
          title: 'Interopérabilité et échelle',
          paragraphs: [
            'Skoleom est une couche qui se branche sur l’existant. Une marque peut déployer une expérience shoppable à l’échelle internationale, sur tous les écrans, à partir d’un même standard.',
            'L’utilisateur achète dans le contenu. Sans redirection. Sans friction.',
          ],
        },
      ],
    },
    patents: {
      eyebrow: 'À propos de Skoleom',
      title: 'Nos brevets : une technologie propriétaire protégée',
      meta: 'Skoleom Group · Retail Media & Transmedia · 2026',
      intro:
        'Une technologie propriétaire protégée par trois familles de brevets, déposées et étendues à l’international.',
      sections: [
        {
          title: 'Une innovation protégée',
          paragraphs: [
            'Le commerce audiovisuel de Skoleom repose sur une technologie propriétaire protégée par trois familles de brevets. Ces brevets couvrent les mécanismes au cœur du format : accéder à des ressources et services distants depuis un contenu audiovisuel, enrichir ce contenu, et étendre ces usages à la télévision connectée.',
          ],
        },
        {
          title: 'Brevet SKM1',
          items: [
            'Procédé et système pour accéder à des ressources et services distants à partir d’un contenu audiovisuel.',
            'Références : FR2201013A / EP4473738 / WO2023148295A1 — publication FR3132579.',
            'Dépôt initial : 4 février 2022 · Publication : 11 août 2023 · Extension internationale : 2 février 2023.',
            'Titulaire : Skoleom Platform Inc. · Inventeurs : Arnaud Gokou, Kevin Racois.',
          ],
        },
        {
          title: 'Brevet SKM2',
          items: [
            'Procédé et système pour enrichir un contenu audiovisuel.',
            'Références : FR2201014A / EP4473422 / WO2023148296A1 — publication FR3132582.',
            'Dépôt initial : 4 février 2022 · Publication : 11 août 2023 · Extension internationale : 2 février 2023.',
            'Titulaire : Skoleom Platform Inc. · Inventeurs : Arnaud Gokou, Kevin Racois.',
          ],
        },
        {
          title: 'Brevet SKM3',
          items: [
            'Procédé et système pour accéder à des ressources et services distants à partir d’un contenu audiovisuel sur un équipement de télévision.',
            'Références : FR2309179 / WO2025046115A1 — publication FR3152691.',
            'Dépôt initial : 1er septembre 2023 · Publication : 7 mars 2025.',
            'Titulaire : Skoleom Group · Inventeur : Arnaud Gokou.',
          ],
        },
        {
          title: 'Protection mondiale et marques déposées',
          paragraphs: [
            'Déployés en phase nationale dans plus de 50 pays, les brevets Skoleom sécurisent la technologie du groupe sur ses marchés stratégiques.',
            'L’identité et les technologies de Skoleom sont également protégées par un portefeuille de marques déposées, parmi lesquelles Skoleom®, SeContent®, The25x®, SkoleToon’s® et Monetizer Studio®.',
          ],
        },
      ],
    },
    ecosystem: {
      eyebrow: 'À propos de Skoleom',
      title: 'L’écosystème Skoleom',
      meta: 'Skoleom Group · Retail Media & Transmedia · 2026',
      intro:
        'Un écosystème complet qui réunit boutiques audiovisuelles, services ouverts à tous, solutions professionnelles et entités du Groupe.',
      sections: [
        {
          title: 'Un écosystème, quatre territoires',
          paragraphs: [
            'Skoleom n’est pas un produit unique, mais un écosystème complet. Il couvre toute la chaîne de valeur, de la création du contenu shoppable jusqu’à sa monétisation.',
          ],
        },
        {
          title: 'Boutiques audiovisuelles',
          items: [
            'The25x : la boutique audiovisuelle des célébrités.',
            'Skoleom SeSports : le territoire sport & fitness rendu shoppable.',
            'Skoleom Cares : l’engagement et les causes au cœur de l’expérience audiovisuelle.',
            'SkoleToon’s : la marque distributrice mode, beauté et lifestyle.',
          ],
        },
        {
          title: 'Pour tous',
          items: [
            'Skoleom Page : moteur de recherche audiovisuel et réseau social SeContent.',
            'SeSync : synchronisation temps réel entre contenus, capsules et catalogues.',
            'SkoleToon’s : univers mode et lifestyle ouvert au grand public.',
            'Skoleom Shop : destination d’achat de l’écosystème.',
          ],
        },
        {
          title: 'Pour les professionnels',
          items: [
            'Monetizer Studio : plateforme de monétisation et de pilotage.',
            'Skoleom Ads : régie publicitaire du commerce audiovisuel.',
            'Skoleom Pay : couche de paiement intégrée à l’expérience in-vidéo.',
            'Skoleom Real Estate, Skoleom Pro+ et SVE API : solutions avancées d’intégration et de déploiement.',
          ],
        },
        {
          title: 'Le Groupe',
          items: [
            'Skoleom Group : maison mère, vision, marque et gouvernance.',
            'Skoleom Platform Inc. : filiale technologique dédiée au Retail Media.',
            'Skoleom Nexus Park : filiale dédiée au transmédia et aux événements.',
            'Skoleom Invest : plateforme d’information relative au financement du Groupe.',
          ],
        },
      ],
    },
    funding: {
      eyebrow: 'À propos de Skoleom',
      title: 'Programme d’investissement — Skoleom Invest',
      meta: 'Information réservée · Skoleom Group · 2026',
      intro:
        'Une information réservée aux personnes et investisseurs souhaitant rejoindre l’écosystème Skoleom.',
      sections: [
        {
          title: 'Avertissement important',
          paragraphs: [
            'Le présent contenu est diffusé à titre exclusivement informatif. Il ne constitue ni une offre au public de titres financiers, ni une sollicitation, ni une incitation à investir, ni un conseil en investissement, et ne s’adresse pas aux petits épargnants ni au grand public.',
            'Aucun prospectus n’a été soumis ni visé par l’Autorité des marchés financiers. Investir dans une société non cotée présente un risque de perte totale du capital investi ainsi qu’un risque d’illiquidité.',
          ],
        },
        {
          title: 'Skoleom Invest',
          paragraphs: [
            'Skoleom Invest est l’espace d’information dédié au financement du groupe Skoleom. Il s’adresse aux personnes et aux investisseurs qui souhaitent comprendre l’écosystème, suivre sa trajectoire et, le cas échéant, étudier les conditions dans lesquelles ils pourraient le rejoindre.',
            'Toutes les informations détaillées relatives à l’opération de financement sont centralisées sur l’espace dédié : invest.skoleom.com.',
          ],
        },
        {
          title: 'Une opération à dimension internationale',
          paragraphs: [
            'Skoleom conduit une opération de financement de 100 millions d’euros, menée sur le marché international auprès d’investisseurs qualifiés. Cette opération accompagne une infrastructure construite, un marché validé, des brevets protégés et un écosystème en déploiement.',
          ],
        },
        {
          title: 'À qui s’adresse cette information',
          items: [
            'Aux investisseurs qualifiés et professionnels au sens de la réglementation européenne et française.',
            'Aux investisseurs stratégiques, institutionnels et corporate.',
            'À un cercle restreint de personnes souhaitant être informées des conditions pour rejoindre l’écosystème Skoleom.',
          ],
        },
        {
          title: 'Rester informé',
          paragraphs: [
            'Les personnes éligibles peuvent s’enregistrer sur Skoleom Invest afin d’être tenues informées. Cette démarche est une simple manifestation d’intérêt, sans engagement.',
            'Communication à caractère promotionnel non contractuelle. Avant toute décision, chaque investisseur doit procéder à ses propres analyses et, si nécessaire, consulter ses conseils.',
          ],
        },
      ],
    },
    legal: {
      eyebrow: 'Mentions légales',
      title: 'Mentions légales',
      meta: 'Réf. SKM-LEGAL-ML-2026 · Dernière mise à jour : 30/05/2026',
      intro:
        'Mentions légales applicables à l’ensemble des sites, applications, logiciels et services édités ou exploités par Skoleom Group.',
      sections: [
        {
          title: 'Présentation et objet',
          paragraphs: [
            'Les présentes mentions légales régissent l’accès et l’utilisation de l’ensemble des sites internet, applications mobiles, logiciels et services édités ou exploités par Skoleom Group.',
            'Skoleom Group édite et exploite un portefeuille de plus de quatre cents applications, logiciels et services. Les présentes mentions s’appliquent à l’ensemble de ces Services, sauf conditions spécifiques.',
          ],
        },
        {
          title: 'Éditeur des Services',
          items: [
            'SKOLEOM GROUP, société par actions simplifiée (SAS).',
            'Capital social : 194 138 367,00 euros.',
            'Siège social : 66 avenue des Champs-Élysées, 75008 Paris, France.',
            'Immatriculation : RCS Paris 939 506 796.',
            'TVA intracommunautaire : FR33939506796.',
            'Directeur de la publication : Monsieur Kévin RACOIS, Président.',
            'Contact : contact@skoleom.com.',
          ],
        },
        {
          title: 'Hébergement',
          paragraphs: [
            'Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, L-1855 Luxembourg.',
            'Téléphone : +352 26 50 86 11. Contact : aws-EU-privacy@amazon.com.',
          ],
        },
        {
          title: 'Propriété intellectuelle',
          paragraphs: [
            'L’ensemble des éléments composant les Services est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive de Skoleom Group ou de ses partenaires.',
            'La technologie de monétisation audiovisuelle interactive de Skoleom Group est protégée par plusieurs familles de brevets déposés et publiés, parmi lesquels SKM1, SKM2 et SKM3.',
          ],
        },
        {
          title: 'Données, affiliation et responsabilité',
          paragraphs: [
            'Le traitement des données personnelles est décrit dans la Politique de confidentialité. Contact DPO : dpo@skoleom.com.',
            'Les Services peuvent contenir des liens vers des tiers et des liens d’affiliation susceptibles de générer une rémunération pour Skoleom Group.',
            'Skoleom Group s’efforce d’assurer l’exactitude des informations diffusées, sans garantir leur exhaustivité ni l’absence d’erreurs.',
          ],
        },
        {
          title: 'Médiation et droit applicable',
          paragraphs: [
            'L’Utilisateur consommateur peut recourir gratuitement à un médiateur de la consommation et à la plateforme européenne de règlement en ligne des litiges : https://ec.europa.eu/consumers/odr.',
            'Les présentes mentions légales sont régies par le droit français.',
          ],
        },
      ],
    },
    terms: {
      eyebrow: 'CGUV',
      title: 'Conditions générales d’utilisation et de vente',
      meta: 'Réf. SKM-LEGAL-CGUV-2026 · Dernière mise à jour : 30/05/2026',
      intro:
        'Socle contractuel applicable à l’ensemble des sites internet, applications mobiles, logiciels et services Skoleom Group.',
      sections: [
        {
          title: 'Préambule',
          paragraphs: [
            'SKOLEOM GROUP édite et exploite plus de quatre cents applications, logiciels et services sous diverses dénominations.',
            'Les présentes conditions constituent le socle contractuel applicable à l’ensemble des Services. Certains Services peuvent faire l’objet de conditions particulières propres.',
          ],
        },
        {
          title: 'Conditions générales d’utilisation',
          items: [
            'L’utilisation des Services suppose l’acceptation pleine et entière des présentes conditions.',
            'Certains Services reposent sur la technologie propriétaire brevetée de Skoleom permettant d’associer aux contenus audiovisuels des fonctionnalités interactives.',
            'Certaines fonctionnalités nécessitent la création d’un compte. L’Utilisateur garantit l’exactitude des informations fournies.',
          ],
        },
        {
          title: 'Obligations de l’Utilisateur',
          items: [
            'Utiliser les Services conformément à leur destination, aux présentes conditions et aux lois applicables.',
            'Ne pas porter atteinte aux droits de propriété intellectuelle de Skoleom ou de tiers.',
            'Ne pas contourner, copier, désassembler ou reproduire la technologie des Services.',
            'Ne pas perturber le fonctionnement des Services ni en compromettre la sécurité.',
          ],
        },
        {
          title: 'Conditions générales de vente',
          paragraphs: [
            'Lorsque les produits ou services sont vendus directement par Skoleom Group, celle-ci agit en qualité de vendeur ou de fournisseur de services.',
            'Lorsque les Services permettent l’accès à des offres de tiers, Skoleom Group agit comme intermédiaire technique. Le contrat est conclu directement entre l’Utilisateur et le vendeur ou prestataire concerné.',
          ],
        },
        {
          title: 'Commandes, paiements, livraison et garanties',
          items: [
            'La commande est validée après acceptation des CGV, récapitulatif et confirmation du paiement.',
            'Le paiement s’effectue via les moyens proposés lors de la commande, par des prestataires sécurisés.',
            'Pour les produits vendus directement par Skoleom, les modalités de livraison sont indiquées lors de la commande.',
            'Le consommateur dispose d’un droit de rétractation de quatorze jours lorsque la loi l’autorise.',
            'Les produits vendus directement par Skoleom bénéficient des garanties légales applicables.',
          ],
        },
        {
          title: 'Médiation et litiges',
          paragraphs: [
            'En cas de litige non résolu amiablement, le consommateur peut recourir gratuitement à un médiateur de la consommation.',
            'Les présentes conditions sont régies par le droit français.',
          ],
        },
      ],
    },
    privacy: {
      eyebrow: 'Confidentialité',
      title: 'Politique de confidentialité',
      meta: 'Réf. SKM-LEGAL-PC-2026 · Dernière mise à jour : 30/05/2026',
      intro:
        'Protection des données personnelles des utilisateurs de l’ensemble des sites, applications, logiciels et services Skoleom Group.',
      sections: [
        {
          title: 'Introduction',
          paragraphs: [
            'La présente Politique de confidentialité décrit la manière dont SKOLEOM GROUP collecte et traite les données personnelles des utilisateurs de ses Services.',
            'Ce traitement est mis en œuvre dans le respect du RGPD et de la loi Informatique et Libertés.',
          ],
        },
        {
          title: 'Responsable du traitement et DPO',
          paragraphs: [
            'Responsable de traitement : SKOLEOM GROUP, 66 avenue des Champs-Élysées, 75008 Paris, France.',
            'Délégué à la protection des données : dpo@skoleom.com.',
          ],
        },
        {
          title: 'Données collectées',
          items: [
            'Données d’identification et de compte.',
            'Données de contact.',
            'Données de transaction et d’interaction commerciale.',
            'Données de fidélité.',
            'Données techniques, de navigation et d’usage des Services.',
          ],
        },
        {
          title: 'Finalités et destinataires',
          paragraphs: [
            'Les données sont traitées pour la gestion des comptes, la fourniture des fonctionnalités d’achat et d’interaction, les transactions, la fidélité, la sécurité, les statistiques, le marketing lorsque le consentement requis a été donné et le respect des obligations légales.',
            'Les données sont destinées aux services habilités de Skoleom Group, aux sociétés du groupe, aux prestataires techniques, aux partenaires lorsque l’Utilisateur initie une transaction ou une redirection, et aux autorités lorsque la loi l’exige.',
          ],
        },
        {
          title: 'Cookies et transferts',
          paragraphs: [
            'Les Services utilisent des cookies et traceurs à des fins de fonctionnement, de mesure d’audience et, sous réserve du consentement, de personnalisation et de publicité.',
            'Certains prestataires peuvent traiter des données hors de l’Union européenne. Ces transferts sont encadrés par des garanties appropriées.',
          ],
        },
        {
          title: 'Vos droits',
          paragraphs: [
            'Vous disposez des droits d’accès, de rectification, d’effacement, de limitation, de portabilité, d’opposition, de retrait du consentement et de directives post-mortem.',
            'Pour exercer ces droits : dpo@skoleom.com. Vous pouvez également introduire une réclamation auprès de la CNIL.',
          ],
        },
        {
          title: 'Sécurité, mineurs et modifications',
          paragraphs: [
            'Skoleom Group met en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données.',
            'Le Service n’est pas destiné aux personnes de moins de 15 ans sans consentement parental. La politique peut être mise à jour.',
          ],
        },
      ],
    },
    affiliates: {
      eyebrow: 'Divulgation des affiliés',
      title: 'Divulgation d’affiliation',
      meta: 'Réf. SKM-LEGAL-AFF-2026 · Dernière mise à jour : 30/05/2026',
      intro:
        'Transparence sur les liens d’affiliation présents dans les sites, applications, logiciels et services Skoleom Group.',
      sections: [
        {
          title: 'Notre engagement de transparence',
          paragraphs: [
            'Skoleom informe ses utilisateurs de l’existence de relations d’affiliation rémunérées lorsque certains Services donnent accès à des produits et services.',
          ],
        },
        {
          title: 'Qu’est-ce qu’un lien d’affiliation ?',
          paragraphs: [
            'Un lien d’affiliation permet à un marchand ou partenaire d’identifier que vous avez été dirigé vers son site depuis l’un des Services.',
            'Lorsque vous effectuez un achat ou une action éligible, Skoleom peut percevoir une commission, sans coût supplémentaire pour vous.',
          ],
        },
        {
          title: 'Partenaires et rémunération',
          items: [
            'Amazon et programmes équivalents.',
            'Marketplaces, marchands, marques et plateformes partenaires.',
            'Commissions sur ventes éligibles, rémunérations de redirection ou avantages commerciaux négociés.',
          ],
        },
        {
          title: 'Produits Skoleom et produits tiers',
          paragraphs: [
            'Les produits et services Skoleom sont commercialisés directement par Skoleom. Les produits de partenaires tiers sont vendus directement par le vendeur concerné ; Skoleom intervient en qualité d’intermédiaire.',
          ],
        },
        {
          title: 'Indépendance, authenticité et contact',
          paragraphs: [
            'La présence d’un lien d’affiliation ne constitue pas une garantie ni une recommandation absolue.',
            'Pour toute question : contact@skoleom.com.',
          ],
        },
      ],
    },
    cookies: {
      eyebrow: 'Préférences cookies',
      title: 'Politique cookies',
      meta: 'Dernière mise à jour : 30/05/2026',
      actionLabel: 'Modifier mes préférences cookies',
      intro:
        'Cette page décrit les cookies et technologies similaires utilisés sur la plateforme Skoleom.',
      sections: [
        {
          title: 'Qu’est-ce qu’un cookie ?',
          paragraphs: [
            'Un cookie est un petit fichier stocké sur votre appareil par votre navigateur. Il permet notamment de reconnaître votre appareil lors de visites ultérieures.',
          ],
        },
        {
          title: 'Catégories de cookies',
          items: [
            'Cookies strictement nécessaires au fonctionnement du site, à la sécurité et au panier.',
            'Cookies de mesure d’audience et de performance, soumis au consentement lorsque requis.',
            'Cookies de personnalisation et publicitaires, activés uniquement selon vos choix.',
          ],
        },
        {
          title: 'Gestion des préférences',
          paragraphs: [
            'Vous pouvez accepter, refuser ou personnaliser les cookies depuis le bandeau de consentement ou les paramètres de votre navigateur.',
            'Le lien permanent « Préférences cookies » disponible en pied de page permet de modifier ou retirer votre consentement à tout moment.',
            'Le refus de certains cookies peut limiter quelques fonctionnalités, sans empêcher l’accès aux fonctions essentielles.',
          ],
        },
        {
          title: 'Conservation du choix',
          paragraphs: [
            'Votre choix est enregistré dans un cookie first-party nommé skoleom_cookie_consent pendant une durée maximale de 13 mois.',
            'Ce cookie ne sert pas à lire vos cookies personnels, vos cookies de session ou des cookies provenant d’autres sites.',
          ],
        },
        {
          title: 'Contact',
          paragraphs: [
            'Pour toute question relative aux cookies ou à vos droits : dpo@skoleom.com.',
          ],
        },
      ],
    },
  },
} as const satisfies StaticPagesResource;
const en = {
  documents: {
    mission: {
      eyebrow: 'About Skoleom',
      title: 'Our mission: make every video shoppable',
      meta: 'Skoleom Group · Retail Media & Transmedia · 2026',
      intro: 'Make every video shoppable worldwide, without any break between desire and purchase.',
      sections: [
        {
          title: 'Our reason for being',
          paragraphs: [
            'Every day, billions of hours of video are watched around the world. Yet between the moment a viewer wants a product seen on screen and the moment they can actually buy it, there is friction.',
            'Skoleom exists to remove that break: turning every video into a store and every audience into a purchase opportunity, without pulling viewers away from the experience they love.',
          ],
        },
        {
          title: 'Our mission',
          paragraphs: [
            'Provide brands, creators and platforms with patented technologies and creative standards that connect watching, touching and buying in one continuous, measurable and monetizable experience.',
            'As a Retail Media and Transmedia specialist, Skoleom connects to more than 2,000 OTT platforms and billions of websites, turning every screen into an interactive point of sale.',
          ],
        },
        {
          title: 'The promise: Watch. Touch. Buy.®',
          items: [
            'Watch: the viewer stays fully inside the content, without banners or interruption.',
            'Touch: with one gesture, they interact with what they see in real time.',
            'Buy: the purchase happens inside the content, without redirection or friction.',
          ],
        },
        {
          title: 'Our values',
          items: [
            'Innovation: patented technology, proprietary format and global leadership.',
            'Immersion: remove the boundary between content and commerce.',
            'Sovereignty: control patents, standards, infrastructure and data.',
            'Measurement: make every interaction traceable and monetizable.',
          ],
        },
      ],
    },
    technology: {
      eyebrow: 'About Skoleom',
      title: 'Our technology: the shoppable audiovisual engine',
      meta: 'Skoleom Group · Retail Media & Transmedia · 2026',
      intro:
        'A shoppable audiovisual engine that recognizes what people watch and makes what they see purchasable.',
      sections: [
        {
          title: 'The shoppable audiovisual engine',
          paragraphs: [
            'Skoleom technology analyzes audiovisual content, identifies products and moments in real time, then displays interactive purchase points without breaking the viewing experience.',
            'The viewer stays inside the content; commerce comes to them. This is the core of Skoleom’s proprietary format and what allows it to integrate with over 2,000 OTT platforms and billions of websites.',
          ],
        },
        {
          title: 'The 4 technology pillars',
          items: [
            'AI Recognition: real-time identification of products, objects and moments in audiovisual content.',
            'Smart Capsules: interactive capsules inside video, without interrupting viewing.',
            'One Tap: one gesture, no redirection, no friction.',
            'Buy in Context: the user completes the purchase without leaving the content they love.',
          ],
        },
        {
          title: 'Our proprietary building blocks',
          items: [
            'SeContent®: the shoppable audiovisual format.',
            'The25x®: the patented audiovisual store.',
            'Skoleom SeSync®: real-time synchronization between content, capsules and catalogs.',
            'Capsules®: in-video interactive units.',
            'Monetizer Studio®: the monetization and control platform.',
            'Token Marque: proprietary attribution tracking.',
            'Skoleom Technology - OTT integration: the partner integration interface.',
          ],
        },
        {
          title: 'Interoperability and scale',
          paragraphs: [
            'Skoleom is a layer that plugs into what already exists. A brand can deploy a shoppable experience globally, on every screen, from one standard.',
            'The user buys inside the content. Without redirection. Without friction.',
          ],
        },
      ],
    },
    patents: {
      eyebrow: 'About Skoleom',
      title: 'Our patents: protected proprietary technology',
      meta: 'Skoleom Group · Retail Media & Transmedia · 2026',
      intro:
        'A proprietary technology protected by three patent families filed and extended internationally.',
      sections: [
        {
          title: 'Protected innovation',
          paragraphs: [
            'Skoleom audiovisual commerce relies on proprietary technology protected by three patent families. These patents cover core mechanisms for accessing remote resources from audiovisual content, enriching that content, and extending those uses to connected television.',
          ],
        },
        {
          title: 'Patent SKM1',
          items: [
            'Method and system for accessing remote resources and services from audiovisual content.',
            'References: FR2201013A / EP4473738 / WO2023148295A1 — publication FR3132579.',
            'Initial filing: February 4, 2022 · Publication: August 11, 2023 · International extension: February 2, 2023.',
          ],
        },
        {
          title: 'Patent SKM2',
          items: [
            'Method and system for enriching audiovisual content.',
            'References: FR2201014A / EP4473422 / WO2023148296A1 — publication FR3132582.',
            'Initial filing: February 4, 2022 · Publication: August 11, 2023 · International extension: February 2, 2023.',
          ],
        },
        {
          title: 'Patent SKM3',
          items: [
            'Method and system for accessing remote resources and services from audiovisual content on television equipment.',
            'References: FR2309179 / WO2025046115A1 — publication FR3152691.',
            'Initial filing: September 1, 2023 · Publication: March 7, 2025.',
          ],
        },
        {
          title: 'Global protection and trademarks',
          paragraphs: [
            'Deployed in national phases in more than 50 countries, Skoleom patents secure the group’s technology across strategic markets.',
            'Skoleom’s identity and technologies are also protected by registered trademarks including Skoleom®, SeContent®, The25x®, SkoleToon’s® and Monetizer Studio®.',
          ],
        },
      ],
    },
    ecosystem: {
      eyebrow: 'About Skoleom',
      title: 'The Skoleom ecosystem',
      meta: 'Skoleom Group · Retail Media & Transmedia · 2026',
      intro:
        'A full ecosystem combining audiovisual stores, public services, professional solutions and group entities.',
      sections: [
        {
          title: 'One ecosystem, four territories',
          paragraphs: [
            'Skoleom is not a single product but a complete ecosystem covering the full value chain, from shoppable content creation to monetization.',
          ],
        },
        {
          title: 'Audiovisual stores',
          items: [
            'The25x: the celebrity audiovisual store.',
            'Skoleom SeSports: the shoppable sport and fitness territory.',
            'Skoleom Cares: causes and engagement inside the audiovisual experience.',
            'SkoleToon’s: the fashion, beauty and lifestyle distributor brand.',
          ],
        },
        {
          title: 'For everyone',
          items: [
            'Skoleom Page: audiovisual search engine and SeContent social network.',
            'SeSync: real-time synchronization between content, capsules and catalogs.',
            'SkoleToon’s: public fashion and lifestyle universe.',
            'Skoleom Shop: the ecosystem shopping destination.',
          ],
        },
        {
          title: 'For professionals',
          items: [
            'Monetizer Studio: monetization and control platform.',
            'Skoleom Ads: the advertising network for audiovisual commerce.',
            'Skoleom Pay: payment layer integrated into the in-video experience.',
            'Skoleom Real Estate, Skoleom Pro+ and SVE API: advanced integration and deployment solutions.',
          ],
        },
        {
          title: 'The Group',
          items: [
            'Skoleom Group: parent company, vision, brand and governance.',
            'Skoleom Platform Inc.: technology subsidiary dedicated to Retail Media.',
            'Skoleom Nexus Park: subsidiary dedicated to transmedia and events.',
            'Skoleom Invest: information platform for group financing.',
          ],
        },
      ],
    },
    funding: {
      eyebrow: 'About Skoleom',
      title: 'Investment program — Skoleom Invest',
      meta: 'Restricted information · Skoleom Group · 2026',
      intro:
        'Information reserved for eligible people and investors wishing to join the Skoleom ecosystem.',
      sections: [
        {
          title: 'Important notice',
          paragraphs: [
            'This content is provided for information purposes only. It is not a public offering of financial securities, a solicitation, an incentive to invest, or investment advice, and is not addressed to small savers or the general public.',
            'No prospectus has been submitted to or approved by the French financial markets authority. Investing in a private company involves a risk of total capital loss and illiquidity.',
          ],
        },
        {
          title: 'Skoleom Invest',
          paragraphs: [
            'Skoleom Invest is the information space dedicated to Skoleom Group financing. It is intended for people and investors who wish to understand the ecosystem, follow its trajectory and study how they may join it.',
            'Detailed information is centralized on the dedicated space: invest.skoleom.com.',
          ],
        },
        {
          title: 'An international operation',
          paragraphs: [
            'Skoleom is conducting a 100 million euro financing operation on the international market with qualified investors, supporting an infrastructure already built, validated market demand, protected patents and a deploying ecosystem.',
          ],
        },
        {
          title: 'Who this information is for',
          items: [
            'Qualified and professional investors under European and French regulations.',
            'Strategic, institutional and corporate investors.',
            'A restricted circle of people wishing to be informed about the conditions for joining the Skoleom ecosystem.',
          ],
        },
        {
          title: 'Stay informed',
          paragraphs: [
            'Eligible people can register on Skoleom Invest to stay informed. This is a non-binding expression of interest.',
            'Promotional, non-contractual communication. Before any decision, each investor should conduct their own analysis and consult advisers if needed.',
          ],
        },
      ],
    },
    legal: {
      eyebrow: 'Legal notice',
      title: 'Legal notice',
      meta: 'Ref. SKM-LEGAL-ML-2026 · Last updated: 30/05/2026',
      intro:
        'Legal information applicable to all websites, applications, software and services operated by Skoleom Group.',
      sections: [
        {
          title: 'Presentation and scope',
          paragraphs: [
            'This legal notice governs access to and use of all websites, mobile applications, software and services published or operated by Skoleom Group.',
            'Skoleom Group publishes and operates a portfolio of more than four hundred applications, software products and services. This notice applies to all Services unless specific terms apply.',
          ],
        },
        {
          title: 'Service publisher',
          items: [
            'SKOLEOM GROUP, simplified joint-stock company (SAS).',
            'Share capital: 194,138,367.00 euros.',
            'Registered office: 66 avenue des Champs-Élysées, 75008 Paris, France.',
            'Registration: Paris Trade and Companies Register 939 506 796.',
            'Intra-community VAT number: FR33939506796.',
            'Publication director: Mr Kévin RACOIS, President.',
            'Contact: contact@skoleom.com.',
          ],
        },
        {
          title: 'Hosting',
          paragraphs: [
            'Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, L-1855 Luxembourg.',
            'Phone: +352 26 50 86 11. Contact: aws-EU-privacy@amazon.com.',
          ],
        },
        {
          title: 'Intellectual property',
          paragraphs: [
            'All elements composing the Services are protected by intellectual property law and remain the exclusive property of Skoleom Group or its partners.',
            'Skoleom Group’s interactive audiovisual monetization technology is protected by several filed and published patent families, including SKM1, SKM2 and SKM3.',
          ],
        },
        {
          title: 'Data, affiliation and liability',
          paragraphs: [
            'Personal data processing is described in the Privacy Policy. DPO contact: dpo@skoleom.com.',
            'The Services may contain links to third parties and affiliate links that may generate compensation for Skoleom Group.',
            'Skoleom Group makes reasonable efforts to ensure information accuracy, without guaranteeing completeness or absence of errors.',
          ],
        },
        {
          title: 'Mediation and applicable law',
          paragraphs: [
            'Consumer users may use a consumer mediator free of charge and the European online dispute resolution platform: https://ec.europa.eu/consumers/odr.',
            'This legal notice is governed by French law.',
          ],
        },
      ],
    },
    terms: {
      eyebrow: 'Terms',
      title: 'Terms of use and sale',
      meta: 'Ref. SKM-LEGAL-CGUV-2026 · Last updated: 30/05/2026',
      intro:
        'Contractual framework applicable to Skoleom Group websites, apps, software and services.',
      sections: [
        {
          title: 'Preamble',
          paragraphs: [
            'SKOLEOM GROUP publishes and operates more than four hundred applications, software products and services under various names.',
            'These terms are the contractual framework applicable to all Services. Some Services may be subject to specific terms.',
          ],
        },
        {
          title: 'Terms of use',
          items: [
            'Use of the Services implies full acceptance of these terms.',
            'Some Services rely on Skoleom’s patented proprietary technology, which associates audiovisual content with interactive features.',
            'Certain features require an account. The User guarantees the accuracy of the information provided.',
          ],
        },
        {
          title: 'User obligations',
          items: [
            'Use the Services according to their purpose, these terms and applicable laws.',
            'Do not infringe Skoleom or third-party intellectual property rights.',
            'Do not bypass, copy, disassemble or reproduce the Services technology.',
            'Do not disrupt the Services or compromise their security.',
          ],
        },
        {
          title: 'Terms of sale',
          paragraphs: [
            'When products or services are sold directly by Skoleom Group, Skoleom acts as seller or service provider.',
            'When the Services provide access to third-party offers, Skoleom Group acts as a technical intermediary. The contract is concluded directly between the User and the relevant seller or provider.',
          ],
        },
        {
          title: 'Orders, payments, delivery and guarantees',
          items: [
            'Orders are confirmed after acceptance of the terms, order summary and payment confirmation.',
            'Payment is made through the methods offered during checkout via secure providers.',
            'For products sold directly by Skoleom, delivery terms are shown during the order process.',
            'Consumers have a fourteen-day withdrawal right where permitted by law.',
            'Products sold directly by Skoleom benefit from applicable legal guarantees.',
          ],
        },
        {
          title: 'Mediation and disputes',
          paragraphs: [
            'In case of unresolved dispute, consumers may use a consumer mediator free of charge.',
            'These terms are governed by French law.',
          ],
        },
      ],
    },
    privacy: {
      eyebrow: 'Privacy',
      title: 'Privacy policy',
      meta: 'Ref. SKM-LEGAL-PC-2026 · Last updated: 30/05/2026',
      intro:
        'Personal data protection for users of Skoleom Group websites, apps, software and services.',
      sections: [
        {
          title: 'Introduction',
          paragraphs: [
            'This Privacy Policy explains how SKOLEOM GROUP collects and processes personal data from users of its Services.',
            'Processing is carried out in compliance with the GDPR and French data protection law.',
          ],
        },
        {
          title: 'Controller and DPO',
          paragraphs: [
            'Data controller: SKOLEOM GROUP, 66 avenue des Champs-Élysées, 75008 Paris, France.',
            'Data Protection Officer: dpo@skoleom.com.',
          ],
        },
        {
          title: 'Data collected',
          items: [
            'Identification and account data.',
            'Contact data.',
            'Transaction and commercial interaction data.',
            'Loyalty data.',
            'Technical, navigation and Services usage data.',
          ],
        },
        {
          title: 'Purposes and recipients',
          paragraphs: [
            'Data is processed for account management, purchase and interaction features, transactions, loyalty, security, statistics, marketing where consent is required, and compliance with legal obligations.',
            'Data is intended for authorized Skoleom Group teams, group companies, technical providers, partners when the User initiates a transaction or redirection, and authorities where required by law.',
          ],
        },
        {
          title: 'Cookies and transfers',
          paragraphs: [
            'The Services use cookies and trackers for operation, audience measurement and, subject to consent, personalization and advertising.',
            'Some providers may process data outside the European Union. These transfers are covered by appropriate safeguards.',
          ],
        },
        {
          title: 'Your rights',
          paragraphs: [
            'You have rights of access, rectification, erasure, restriction, portability, objection, consent withdrawal and post-mortem instructions.',
            'To exercise these rights: dpo@skoleom.com. You may also lodge a complaint with the CNIL.',
          ],
        },
        {
          title: 'Security, minors and updates',
          paragraphs: [
            'Skoleom Group implements appropriate technical and organizational measures to protect data.',
            'The Service is not intended for people under 15 without parental consent. This policy may be updated.',
          ],
        },
      ],
    },
    affiliates: {
      eyebrow: 'Affiliate disclosure',
      title: 'Affiliate disclosure',
      meta: 'Ref. SKM-LEGAL-AFF-2026 · Last updated: 30/05/2026',
      intro:
        'Transparency about affiliate links used across Skoleom Group websites, apps, software and services.',
      sections: [
        {
          title: 'Our transparency commitment',
          paragraphs: [
            'Skoleom informs users about paid affiliate relationships when certain Services provide access to products and services.',
          ],
        },
        {
          title: 'What is an affiliate link?',
          paragraphs: [
            'An affiliate link allows a merchant or partner platform to identify that you were directed to its site from one of the Services.',
            'When you make a qualifying purchase or action, Skoleom may receive a commission at no extra cost to you.',
          ],
        },
        {
          title: 'Partners and compensation',
          items: [
            'Amazon and equivalent programs.',
            'Marketplaces, merchants, brands and partner platforms.',
            'Commissions on eligible sales, redirection compensation or negotiated commercial benefits.',
          ],
        },
        {
          title: 'Skoleom products and third-party products',
          paragraphs: [
            'Skoleom products and services are sold directly by Skoleom. Third-party partner products are sold directly by the relevant seller; Skoleom acts as intermediary.',
          ],
        },
        {
          title: 'Independence, authenticity and contact',
          paragraphs: [
            'The presence of an affiliate link is not an absolute guarantee or recommendation.',
            'For any question: contact@skoleom.com.',
          ],
        },
      ],
    },
    cookies: {
      eyebrow: 'Cookie preferences',
      title: 'Cookie policy',
      meta: 'Last updated: 30/05/2026',
      actionLabel: 'Change my cookie preferences',
      intro: 'This page describes cookies and similar technologies used on the Skoleom platform.',
      sections: [
        {
          title: 'What is a cookie?',
          paragraphs: [
            'A cookie is a small file stored on your device by your browser. It can recognize your device during later visits.',
          ],
        },
        {
          title: 'Cookie categories',
          items: [
            'Strictly necessary cookies for site operation, security and cart features.',
            'Audience measurement and performance cookies, subject to consent where required.',
            'Personalization and advertising cookies, enabled only according to your choices.',
          ],
        },
        {
          title: 'Managing preferences',
          paragraphs: [
            'You can accept, refuse or personalize cookies from the consent banner or browser settings.',
            'The permanent “Cookie preferences” link in the footer lets you change or withdraw consent at any time.',
            'Refusing some cookies may limit certain features without preventing access to essential functions.',
          ],
        },
        {
          title: 'Consent storage',
          paragraphs: [
            'Your choice is stored in a first-party cookie named skoleom_cookie_consent for a maximum of 13 months.',
            'This cookie is not used to read your personal cookies, session cookies or cookies from other websites.',
          ],
        },
        {
          title: 'Contact',
          paragraphs: ['For any question about cookies or your rights: dpo@skoleom.com.'],
        },
      ],
    },
  },
} as const satisfies StaticPagesResource;
type StaticPageLabels = Partial<
  Record<
    StaticPageDocumentKey,
    Pick<StaticPageDocument, 'eyebrow' | 'title' | 'intro'> &
      Partial<Pick<StaticPageDocument, 'actionLabel'>>
  >
>;
function makeLocalizedStaticPages(labels: StaticPageLabels): StaticPagesResource {
  const documents = { ...en.documents } as Record<StaticPageDocumentKey, StaticPageDocument>;
  for (const key of Object.keys(labels) as StaticPageDocumentKey[]) {
    const label = labels[key];
    if (!label) continue;
    documents[key] = {
      ...documents[key],
      ...label,
    };
  }
  return { documents };
}
const es = makeLocalizedStaticPages({
  mission: {
    eyebrow: 'Acerca de Skoleom',
    title: 'Nuestra misión: hacer que cada vídeo sea comprable',
    intro:
      'Hacer que cada vídeo sea comprable en todo el mundo, sin ruptura entre el deseo y la compra.',
  },
  technology: {
    eyebrow: 'Acerca de Skoleom',
    title: 'Nuestra tecnología: el motor audiovisual shoppable',
    intro:
      'Un motor audiovisual shoppable que reconoce lo que se mira y hace comprable lo que se ve.',
  },
  ecosystem: {
    eyebrow: 'Acerca de Skoleom',
    title: 'El ecosistema Skoleom',
    intro:
      'Un ecosistema completo que combina tiendas audiovisuales, servicios públicos, soluciones profesionales y entidades del grupo.',
  },
  funding: {
    eyebrow: 'Acerca de Skoleom',
    title: 'Programas de financiación',
    intro: 'La visión, la estructura y los programas de financiación del ecosistema Skoleom.',
  },
  patents: {
    eyebrow: 'Acerca de Skoleom',
    title: 'Patente Skoleom',
    intro:
      'Una tecnología propia protegida por familias de patentes presentadas y extendidas internacionalmente.',
  },
  legal: {
    eyebrow: 'Aviso legal',
    title: 'Aviso legal',
    intro:
      'Aviso legal aplicable a los sitios, aplicaciones, software y servicios de Skoleom Group.',
  },
  terms: {
    eyebrow: 'Condiciones de uso',
    title: 'Condiciones de uso y venta',
    intro:
      'Marco contractual aplicable a los sitios, aplicaciones, software y servicios de Skoleom Group.',
  },
  privacy: {
    eyebrow: 'Privacidad',
    title: 'Política de privacidad',
    intro: 'Protección de datos personales de los usuarios de los servicios de Skoleom Group.',
  },
  affiliates: {
    eyebrow: 'Divulgación de afiliados',
    title: 'Divulgación de afiliados',
    intro: 'Transparencia sobre los enlaces de afiliación utilizados por Skoleom Group.',
  },
  cookies: {
    eyebrow: 'Preferencias de cookies',
    title: 'Política de cookies',
    actionLabel: 'Cambiar mis preferencias de cookies',
    intro:
      'Esta página describe las cookies y tecnologías similares utilizadas en la plataforma Skoleom.',
  },
});
const pt = makeLocalizedStaticPages({
  mission: {
    eyebrow: 'Sobre a Skoleom',
    title: 'Nossa missão: tornar cada vídeo comprável',
    intro: 'Tornar cada vídeo comprável no mundo todo, sem ruptura entre desejo e compra.',
  },
  technology: {
    eyebrow: 'Sobre a Skoleom',
    title: 'Nossa tecnologia: o motor audiovisual shoppable',
    intro:
      'Um motor audiovisual shoppable que reconhece o que se assiste e torna comprável o que se vê.',
  },
  ecosystem: {
    eyebrow: 'Sobre a Skoleom',
    title: 'O ecossistema Skoleom',
    intro:
      'Um ecossistema completo que combina lojas audiovisuais, serviços públicos, soluções profissionais e entidades do grupo.',
  },
  funding: {
    eyebrow: 'Sobre a Skoleom',
    title: 'Programas de financiamento',
    intro: 'A visão, a estrutura e os programas de financiamento do ecossistema Skoleom.',
  },
  patents: {
    eyebrow: 'Sobre a Skoleom',
    title: 'Patente Skoleom',
    intro:
      'Uma tecnologia própria protegida por famílias de patentes depositadas e estendidas internacionalmente.',
  },
  legal: {
    eyebrow: 'Aviso legal',
    title: 'Aviso legal',
    intro: 'Aviso legal aplicável aos sites, aplicativos, softwares e serviços da Skoleom Group.',
  },
  terms: {
    eyebrow: 'Termos',
    title: 'Termos de uso e venda',
    intro:
      'Quadro contratual aplicável aos sites, aplicativos, softwares e serviços da Skoleom Group.',
  },
  privacy: {
    eyebrow: 'Privacidade',
    title: 'Política de privacidade',
    intro: 'Proteção de dados pessoais dos usuários dos serviços da Skoleom Group.',
  },
  affiliates: {
    eyebrow: 'Divulgação de afiliados',
    title: 'Divulgação de afiliados',
    intro: 'Transparência sobre links de afiliados usados pela Skoleom Group.',
  },
  cookies: {
    eyebrow: 'Preferências de cookies',
    title: 'Política de cookies',
    actionLabel: 'Alterar minhas preferências de cookies',
    intro: 'Esta página descreve cookies e tecnologias semelhantes usados na plataforma Skoleom.',
  },
});
const ar = makeLocalizedStaticPages({
  mission: {
    eyebrow: 'نبذة عن Skoleom',
    title: 'مهمتنا: جعل كل فيديو قابلاً للشراء',
    intro: 'جعل كل فيديو قابلاً للشراء عالمياً، من دون انقطاع بين الرغبة والشراء.',
  },
  technology: {
    eyebrow: 'نبذة عن Skoleom',
    title: 'تقنيتنا: محرك سمعي بصري قابل للتسوق',
    intro: 'محرك سمعي بصري قابل للتسوق يتعرف على ما تشاهده ويجعل ما تراه قابلاً للشراء.',
  },
  ecosystem: {
    eyebrow: 'نبذة عن Skoleom',
    title: 'منظومة Skoleom',
    intro:
      'منظومة كاملة تجمع المتاجر السمعية البصرية والخدمات العامة والحلول المهنية وكيانات المجموعة.',
  },
  funding: {
    eyebrow: 'نبذة عن Skoleom',
    title: 'برامج التمويل',
    intro: 'رؤية منظومة Skoleom وهيكلها وبرامج تمويلها.',
  },
  patents: {
    eyebrow: 'نبذة عن Skoleom',
    title: 'براءة اختراع Skoleom',
    intro: 'تقنية مملوكة محمية بعائلات براءات اختراع مودعة وموسعة دولياً.',
  },
  legal: {
    eyebrow: 'الإشعارات القانونية',
    title: 'الإشعارات القانونية',
    intro: 'إشعارات قانونية تنطبق على مواقع وتطبيقات وبرامج وخدمات Skoleom Group.',
  },
  terms: {
    eyebrow: 'الشروط',
    title: 'شروط الاستخدام والبيع',
    intro: 'الإطار التعاقدي المطبق على مواقع وتطبيقات وبرامج وخدمات Skoleom Group.',
  },
  privacy: {
    eyebrow: 'الخصوصية',
    title: 'سياسة الخصوصية',
    intro: 'حماية البيانات الشخصية لمستخدمي خدمات Skoleom Group.',
  },
  affiliates: {
    eyebrow: 'إفصاح الروابط التابعة',
    title: 'إفصاح الروابط التابعة',
    intro: 'شفافية حول روابط الإحالة المستخدمة من قبل Skoleom Group.',
  },
  cookies: {
    eyebrow: 'تفضيلات ملفات تعريف الارتباط',
    title: 'سياسة ملفات تعريف الارتباط',
    actionLabel: 'تغيير تفضيلات ملفات تعريف الارتباط',
    intro: 'تصف هذه الصفحة ملفات تعريف الارتباط والتقنيات المشابهة المستخدمة على منصة Skoleom.',
  },
});
const hi = makeLocalizedStaticPages({
  mission: {
    eyebrow: 'Skoleom के बारे में',
    title: 'हमारा मिशन: हर वीडियो को खरीदारी योग्य बनाना',
    intro: 'दुनिया भर में हर वीडियो को खरीदारी योग्य बनाना, इच्छा और खरीद के बीच बिना रुकावट।',
  },
  technology: {
    eyebrow: 'Skoleom के बारे में',
    title: 'हमारी तकनीक: शॉपेबल ऑडियोविजुअल इंजन',
    intro:
      'एक शॉपेबल ऑडियोविजुअल इंजन जो देखी जा रही चीज़ को पहचानता है और उसे खरीदारी योग्य बनाता है।',
  },
  ecosystem: {
    eyebrow: 'Skoleom के बारे में',
    title: 'Skoleom पारिस्थितिकी तंत्र',
    intro:
      'ऑडियोविजुअल स्टोर, सार्वजनिक सेवाएँ, पेशेवर समाधान और समूह संस्थाओं को जोड़ने वाला पूर्ण पारिस्थितिकी तंत्र।',
  },
  funding: {
    eyebrow: 'Skoleom के बारे में',
    title: 'वित्तपोषण कार्यक्रम',
    intro: 'Skoleom पारिस्थितिकी तंत्र की दृष्टि, संरचना और वित्तपोषण कार्यक्रम।',
  },
  patents: {
    eyebrow: 'Skoleom के बारे में',
    title: 'Skoleom पेटेंट',
    intro:
      'अंतरराष्ट्रीय स्तर पर दायर और विस्तारित पेटेंट परिवारों द्वारा संरक्षित स्वामित्व तकनीक।',
  },
  legal: {
    eyebrow: 'कानूनी सूचना',
    title: 'कानूनी सूचना',
    intro: 'Skoleom Group की वेबसाइटों, ऐप्स, सॉफ्टवेयर और सेवाओं पर लागू कानूनी सूचना।',
  },
  terms: {
    eyebrow: 'शर्तें',
    title: 'उपयोग और बिक्री की शर्तें',
    intro: 'Skoleom Group की वेबसाइटों, ऐप्स, सॉफ्टवेयर और सेवाओं पर लागू संविदात्मक ढांचा।',
  },
  privacy: {
    eyebrow: 'गोपनीयता',
    title: 'गोपनीयता नीति',
    intro: 'Skoleom Group सेवाओं के उपयोगकर्ताओं के व्यक्तिगत डेटा की सुरक्षा।',
  },
  affiliates: {
    eyebrow: 'सहबद्ध प्रकटीकरण',
    title: 'सहबद्ध प्रकटीकरण',
    intro: 'Skoleom Group द्वारा उपयोग किए गए सहबद्ध लिंक के बारे में पारदर्शिता।',
  },
  cookies: {
    eyebrow: 'कुकी प्राथमिकताएँ',
    title: 'कुकी नीति',
    actionLabel: 'मेरी कुकी प्राथमिकताएँ बदलें',
    intro:
      'यह पृष्ठ Skoleom प्लेटफ़ॉर्म पर उपयोग की जाने वाली कुकीज़ और समान तकनीकों का वर्णन करता है।',
  },
});
const zh = makeLocalizedStaticPages({
  mission: {
    eyebrow: '关于 Skoleom',
    title: '我们的使命：让每个视频都可购买',
    intro: '让全球每个视频都可购买，让欲望与购买之间不再断裂。',
  },
  technology: {
    eyebrow: '关于 Skoleom',
    title: '我们的技术：可购物视听引擎',
    intro: '一种可购物视听引擎，能够识别用户正在观看的内容，并让所见之物可购买。',
  },
  ecosystem: {
    eyebrow: '关于 Skoleom',
    title: 'Skoleom 生态系统',
    intro: '一个结合视听商店、公共服务、专业解决方案和集团实体的完整生态系统。',
  },
  funding: {
    eyebrow: '关于 Skoleom',
    title: '融资计划',
    intro: 'Skoleom 生态系统的愿景、结构和融资计划。',
  },
  patents: {
    eyebrow: '关于 Skoleom',
    title: 'Skoleom 专利',
    intro: '由已提交并在国际范围扩展的专利族保护的专有技术。',
  },
  legal: {
    eyebrow: '法律声明',
    title: '法律声明',
    intro: '适用于 Skoleom Group 网站、应用、软件和服务的法律声明。',
  },
  terms: {
    eyebrow: '条款',
    title: '使用和销售条款',
    intro: '适用于 Skoleom Group 网站、应用、软件和服务的合同框架。',
  },
  privacy: {
    eyebrow: '隐私',
    title: '隐私政策',
    intro: 'Skoleom Group 服务用户的个人数据保护。',
  },
  affiliates: {
    eyebrow: '联盟披露',
    title: '联盟披露',
    intro: '关于 Skoleom Group 使用联盟链接的透明说明。',
  },
  cookies: {
    eyebrow: 'Cookie 偏好设置',
    title: 'Cookie 政策',
    actionLabel: '更改我的 Cookie 偏好设置',
    intro: '本页面说明 Skoleom 平台使用的 Cookie 和类似技术。',
  },
});
const id = makeLocalizedStaticPages({
  mission: {
    eyebrow: 'Tentang Skoleom',
    title: 'Misi kami: membuat setiap video dapat dibeli',
    intro:
      'Membuat setiap video dapat dibeli di seluruh dunia, tanpa jeda antara keinginan dan pembelian.',
  },
  technology: {
    eyebrow: 'Tentang Skoleom',
    title: 'Teknologi kami: mesin audiovisual shoppable',
    intro:
      'Mesin audiovisual shoppable yang mengenali apa yang ditonton dan membuat apa yang dilihat dapat dibeli.',
  },
  ecosystem: {
    eyebrow: 'Tentang Skoleom',
    title: 'Ekosistem Skoleom',
    intro:
      'Ekosistem lengkap yang menggabungkan toko audiovisual, layanan publik, solusi profesional, dan entitas grup.',
  },
  funding: {
    eyebrow: 'Tentang Skoleom',
    title: 'Program pendanaan',
    intro: 'Visi, struktur, dan program pendanaan ekosistem Skoleom.',
  },
  patents: {
    eyebrow: 'Tentang Skoleom',
    title: 'Paten Skoleom',
    intro:
      'Teknologi milik sendiri yang dilindungi oleh keluarga paten yang diajukan dan diperluas secara internasional.',
  },
  legal: {
    eyebrow: 'Pemberitahuan hukum',
    title: 'Pemberitahuan hukum',
    intro:
      'Pemberitahuan hukum yang berlaku untuk situs, aplikasi, perangkat lunak, dan layanan Skoleom Group.',
  },
  terms: {
    eyebrow: 'Ketentuan',
    title: 'Syarat penggunaan dan penjualan',
    intro:
      'Kerangka kontraktual yang berlaku untuk situs, aplikasi, perangkat lunak, dan layanan Skoleom Group.',
  },
  privacy: {
    eyebrow: 'Privasi',
    title: 'Kebijakan privasi',
    intro: 'Perlindungan data pribadi bagi pengguna layanan Skoleom Group.',
  },
  affiliates: {
    eyebrow: 'Pengungkapan afiliasi',
    title: 'Pengungkapan afiliasi',
    intro: 'Transparansi tentang tautan afiliasi yang digunakan oleh Skoleom Group.',
  },
  cookies: {
    eyebrow: 'Preferensi cookie',
    title: 'Kebijakan cookie',
    actionLabel: 'Ubah preferensi cookie saya',
    intro:
      'Halaman ini menjelaskan cookie dan teknologi serupa yang digunakan di platform Skoleom.',
  },
});
const ru = makeLocalizedStaticPages({
  mission: {
    eyebrow: 'О Skoleom',
    title: 'Наша миссия: сделать каждое видео покупаемым',
    intro: 'Сделать каждое видео покупаемым по всему миру, без разрыва между желанием и покупкой.',
  },
  technology: {
    eyebrow: 'О Skoleom',
    title: 'Наша технология: аудиовизуальный shoppable-движок',
    intro:
      'Аудиовизуальный shoppable-движок, который распознает то, что смотрят, и делает увиденное доступным для покупки.',
  },
  ecosystem: {
    eyebrow: 'О Skoleom',
    title: 'Экосистема Skoleom',
    intro:
      'Полная экосистема, объединяющая аудиовизуальные магазины, публичные сервисы, профессиональные решения и структуры группы.',
  },
  funding: {
    eyebrow: 'О Skoleom',
    title: 'Программы финансирования',
    intro: 'Видение, структура и программы финансирования экосистемы Skoleom.',
  },
  patents: {
    eyebrow: 'О Skoleom',
    title: 'Патент Skoleom',
    intro:
      'Собственная технология, защищенная семействами патентов, поданных и расширенных на международном уровне.',
  },
  legal: {
    eyebrow: 'Правовая информация',
    title: 'Правовая информация',
    intro:
      'Правовая информация, применимая к сайтам, приложениям, программам и сервисам Skoleom Group.',
  },
  terms: {
    eyebrow: 'Условия',
    title: 'Условия использования и продажи',
    intro:
      'Договорная база, применимая к сайтам, приложениям, программам и сервисам Skoleom Group.',
  },
  privacy: {
    eyebrow: 'Конфиденциальность',
    title: 'Политика конфиденциальности',
    intro: 'Защита персональных данных пользователей сервисов Skoleom Group.',
  },
  affiliates: {
    eyebrow: 'Раскрытие информации об аффилиатах',
    title: 'Раскрытие информации об аффилиатах',
    intro: 'Прозрачность в отношении партнерских ссылок, используемых Skoleom Group.',
  },
  cookies: {
    eyebrow: 'Настройки cookies',
    title: 'Политика cookies',
    actionLabel: 'Изменить мои настройки cookies',
    intro:
      'На этой странице описаны cookies и аналогичные технологии, используемые на платформе Skoleom.',
  },
});
const sw = makeLocalizedStaticPages({
  mission: {
    eyebrow: 'Kuhusu Skoleom',
    title: 'Dhamira yetu: kufanya kila video iweze kununuliwa',
    intro:
      'Kufanya kila video iweze kununuliwa duniani kote, bila kuvunja mnyororo kati ya hamu na ununuzi.',
  },
  technology: {
    eyebrow: 'Kuhusu Skoleom',
    title: 'Teknolojia yetu: injini ya audiovisual inayoweza kununulika',
    intro:
      'Injini ya audiovisual inayotambua unachotazama na kufanya unachokiona kiweze kununuliwa.',
  },
  ecosystem: {
    eyebrow: 'Kuhusu Skoleom',
    title: 'Ekosistimu ya Skoleom',
    intro:
      'Ekosistimu kamili inayounganisha maduka ya sauti na picha, huduma za umma, suluhisho za kitaalamu na taasisi za kundi.',
  },
  funding: {
    eyebrow: 'Kuhusu Skoleom',
    title: 'Mipango ya ufadhili',
    intro: 'Maono, muundo na mipango ya ufadhili ya ekosistimu ya Skoleom.',
  },
  patents: {
    eyebrow: 'Kuhusu Skoleom',
    title: 'Hataza ya Skoleom',
    intro:
      'Teknolojia miliki inayolindwa na familia za hataza zilizowasilishwa na kupanuliwa kimataifa.',
  },
  legal: {
    eyebrow: 'Taarifa za kisheria',
    title: 'Taarifa za kisheria',
    intro: 'Taarifa za kisheria zinazotumika kwa tovuti, programu na huduma za Skoleom Group.',
  },
  terms: {
    eyebrow: 'Masharti',
    title: 'Masharti ya matumizi na mauzo',
    intro: 'Mfumo wa kimkataba unaotumika kwa tovuti, programu na huduma za Skoleom Group.',
  },
  privacy: {
    eyebrow: 'Faragha',
    title: 'Sera ya faragha',
    intro: 'Ulinzi wa data binafsi kwa watumiaji wa huduma za Skoleom Group.',
  },
  affiliates: {
    eyebrow: 'Ufichuzi wa washirika',
    title: 'Ufichuzi wa washirika',
    intro: 'Uwazi kuhusu viungo vya washirika vinavyotumiwa na Skoleom Group.',
  },
  cookies: {
    eyebrow: 'Mapendeleo ya vidakuzi',
    title: 'Sera ya vidakuzi',
    actionLabel: 'Badilisha mapendeleo yangu ya vidakuzi',
    intro:
      'Ukurasa huu unaeleza vidakuzi na teknolojia zinazofanana zinazotumiwa kwenye jukwaa la Skoleom.',
  },
});
const de = makeLocalizedStaticPages({
  mission: {
    eyebrow: 'Über Skoleom',
    title: 'Unsere Mission: Jedes Video kaufbar machen',
    intro: 'Jedes Video weltweit kaufbar machen, ohne Unterbrechung zwischen Wunsch und Kauf.',
  },
  technology: {
    eyebrow: 'Über Skoleom',
    title: 'Unsere Technologie: Die kaufbare audiovisuelle Engine',
    intro:
      'Eine kaufbare audiovisuelle Engine, die erkennt, was Sie sehen, und kaufbar macht, was Sie sehen.',
  },
  ecosystem: {
    eyebrow: 'Über Skoleom',
    title: 'Das Skoleom-Ökosystem',
    intro:
      'Ein vollständiges Ökosystem, das audiovisuelle Stores, öffentliche Dienste, professionelle Lösungen und Konzernstrukturen verbindet.',
  },
  funding: {
    eyebrow: 'Über Skoleom',
    title: 'Finanzierungsprogramme',
    intro: 'Vision, Struktur und Finanzierungsprogramme des Skoleom-Ökosystems.',
  },
  patents: {
    eyebrow: 'Über Skoleom',
    title: 'Das Skoleom-Patent',
    intro:
      'Proprietäre Technologie, geschützt durch international angemeldete und erweiterte Patentfamilien.',
  },
  legal: {
    eyebrow: 'Rechtliche Hinweise',
    title: 'Rechtliche Hinweise',
    intro: 'Rechtliche Hinweise für Websites, Anwendungen, Software und Dienste der Skoleom Group.',
  },
  terms: {
    eyebrow: 'Bedingungen',
    title: 'Nutzungs- und Verkaufsbedingungen',
    intro:
      'Vertraglicher Rahmen für Websites, Anwendungen, Software und Dienste der Skoleom Group.',
  },
  privacy: {
    eyebrow: 'Datenschutz',
    title: 'Datenschutzrichtlinie',
    intro: 'Schutz personenbezogener Daten für Nutzer der Dienste der Skoleom Group.',
  },
  affiliates: {
    eyebrow: 'Affiliate-Offenlegung',
    title: 'Affiliate-Offenlegung',
    intro: 'Transparenz bezüglich der von der Skoleom Group verwendeten Affiliate-Links.',
  },
  cookies: {
    eyebrow: 'Cookie-Einstellungen',
    title: 'Cookie-Richtlinie',
    actionLabel: 'Meine Cookie-Einstellungen ändern',
    intro:
      'Diese Seite beschreibt die auf der Skoleom-Plattform verwendeten Cookies und ähnlichen Technologien.',
  },
});
const it = makeLocalizedStaticPages({
  mission: {
    eyebrow: 'A proposito di Skoleom',
    title: 'La nostra missione: rendere ogni video acquistabile',
    intro:
      'Rendere ogni video acquistabile in tutto il mondo, senza interruzioni tra desiderio e acquisto.',
  },
  technology: {
    eyebrow: 'A proposito di Skoleom',
    title: 'La nostra tecnologia: il motore audiovisivo shoppable',
    intro:
      'Un motore audiovisivo shoppable che riconosce ciò che guardi e rende acquistabile ciò che vedi.',
  },
  ecosystem: {
    eyebrow: 'A proposito di Skoleom',
    title: 'L’ecosistema Skoleom',
    intro:
      'Un ecosistema completo che collega store audiovisivi, servizi pubblici, soluzioni professionali e strutture del gruppo.',
  },
  funding: {
    eyebrow: 'A proposito di Skoleom',
    title: 'Programmi di finanziamento',
    intro: 'Visione, struttura e programmi di finanziamento dell’ecosistema Skoleom.',
  },
  patents: {
    eyebrow: 'A proposito di Skoleom',
    title: 'Il brevetto Skoleom',
    intro:
      'Tecnologia proprietaria protetta da famiglie di brevetti depositati ed estesi a livello internazionale.',
  },
  legal: {
    eyebrow: 'Note legali',
    title: 'Note legali',
    intro: 'Note legali applicabili a siti, applicazioni, software e servizi di Skoleom Group.',
  },
  terms: {
    eyebrow: 'Termini e condizioni',
    title: 'Condizioni d’uso e di vendita',
    intro:
      'Quadro contrattuale applicabile a siti, applicazioni, software e servizi di Skoleom Group.',
  },
  privacy: {
    eyebrow: 'Privacy',
    title: 'Informativa sulla privacy',
    intro: 'Tutela dei dati personali per gli utenti dei servizi di Skoleom Group.',
  },
  affiliates: {
    eyebrow: 'Informativa sulle affiliazioni',
    title: 'Informativa sulle affiliazioni',
    intro: 'Trasparenza riguardo ai link di affiliazione utilizzati da Skoleom Group.',
  },
  cookies: {
    eyebrow: 'Preferenze cookie',
    title: 'Informativa sui cookie',
    actionLabel: 'Modifica le mie preferenze sui cookie',
    intro:
      'Questa pagina descrive i cookie e tecnologie simili utilizzati sulla piattaforma Skoleom.',
  },
});
const nl = makeLocalizedStaticPages({
  mission: {
    eyebrow: 'Over Skoleom',
    title: 'Onze missie: elke video koopbaar maken',
    intro: 'Elke video wereldwijd koopbaar maken, zonder onderbreking tussen verlangen en aankoop.',
  },
  technology: {
    eyebrow: 'Over Skoleom',
    title: 'Onze technologie: de koopbare audiovisuele motor',
    intro:
      'Een koopbare audiovisuele motor die herkent waarnaar u kijkt en koopbaar maakt wat u ziet.',
  },
  ecosystem: {
    eyebrow: 'Over Skoleom',
    title: 'Het Skoleom-ecosysteem',
    intro:
      'Een compleet ecosysteem dat audiovisuele winkels, openbare diensten, professionele oplossingen en groepsstructuren verbindt.',
  },
  funding: {
    eyebrow: 'Over Skoleom',
    title: 'Financieringsprogramma’s',
    intro: 'Visie, structuur en financieringsprogramma’s van het Skoleom-ecosysteem.',
  },
  patents: {
    eyebrow: 'Over Skoleom',
    title: 'Het Skoleom-patent',
    intro:
      'Gepatenteerde technologie beschermd door internationaal ingediende en uitgebreide octrooifamilies.',
  },
  legal: {
    eyebrow: 'Juridische informatie',
    title: 'Juridische informatie',
    intro:
      'Juridische informatie van toepassing op websites, applicaties, software en diensten van de Skoleom Group.',
  },
  terms: {
    eyebrow: 'Voorwaarden',
    title: 'Algemene gebruiks- en verkoopvoorwaarden',
    intro:
      'Contractueel kader van toepassing op websites, applicaties, software en diensten van de Skoleom Group.',
  },
  privacy: {
    eyebrow: 'Privacy',
    title: 'Privacybeleid',
    intro: 'Bescherming van persoonsgegevens van gebruikers van de diensten van de Skoleom Group.',
  },
  affiliates: {
    eyebrow: 'Affiliate-openbaarmaking',
    title: 'Affiliate-openbaarmaking',
    intro:
      'Transparente met betrekking tot affiliate links die door de Skoleom Group worden gebruikt.',
  },
  cookies: {
    eyebrow: 'Cookievoorkeuren',
    title: 'Cookiebeleid',
    actionLabel: 'Mijn cookievoorkeuren wijzigen',
    intro:
      'Deze pagina beschrijft de cookies en soortgelijke technologieën die op het Skoleom-platform worden gebruikt.',
  },
});
export const STATIC_PAGE_DOCUMENTS = {
  fr,
  en,
  es,
  pt,
  ar,
  hi,
  zh,
  id,
  ru,
  sw,
  de,
  it,
  nl,
} as const;
