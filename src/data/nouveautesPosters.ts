import { PLATFORM_BRAND_LOGOS } from '../constants/logos';

/** Préfixe assets maquette (affiches nouveautés / actualités). */
export const MAQUETTE_PREFIX = '/maquette';

export const NOUVEAUTES_AFFICHES = [
  `${MAQUETTE_PREFIX}/affiche-1.webp`,
  `${MAQUETTE_PREFIX}/affiche-2.webp`,
  `${MAQUETTE_PREFIX}/affiche-3.webp`,
] as const;

export const PLATFORM_CARD_LABELS = ['Netflix', 'Apple TV+', 'Disney+'] as const;

export const PLATFORM_CARD_ICONS = [
  PLATFORM_BRAND_LOGOS.netflix,
  PLATFORM_BRAND_LOGOS.appleTv,
  PLATFORM_BRAND_LOGOS.disneyPlus,
] as const;

export const NOUVEAUTES_PROGRAM_SUMMARIES = [
  'Stranger Things 5',
  'Mayday',
  'Avatar 3: Fire and Ash',
] as const;

export const NOUVEAUTES_PROGRAM_DESCRIPTIONS = [
  "La cinquième saison de Stranger Things, série télévisée américaine de science-fiction et d'horreur, officiellement intitulée Stranger Things 5, est composée de 8 épisodes.",
  "La mission de reconnaissance du lieutenant Troy Brennan au-dessus du territoire soviétique tourne mal, l'obligeant à atterrir en catastrophe et à survivre dans la nature russe tout en évitant d'être capturé ou secouru.",
  "Aux prises avec le chagrin après la mort de Neteyam, la famille de Jake et Neytiri rencontre une nouvelle tribu agressive : les Na'vi. Ce peuple des cendres est dirigé par le fougueux Varang, alors que le conflit sur Pandora s'intensifie.",
] as const;

export type FeaturedLocaleCode =
  | 'en'
  | 'fr'
  | 'es'
  | 'ar'
  | 'pt'
  | 'hi'
  | 'zh'
  | 'id'
  | 'ru'
  | 'sw'
  | 'de'
  | 'it'
  | 'nl';

type FeaturedTextBundle = {
  summaries: readonly [string, string, string];
  descriptions: readonly [string, string, string];
};

const FEATURED_TEXT_BY_LOCALE: Record<FeaturedLocaleCode, FeaturedTextBundle> = {
  en: {
    summaries: ['Stranger Things 5', 'Mayday', 'Avatar 3: Fire and Ash'],
    descriptions: [
      'Season five of Stranger Things is made up of 8 episodes and pushes Hawkins into its darkest chapter yet.',
      'Lieutenant Troy Brennan crashes behind Soviet lines and must survive the Russian wilderness while evading capture.',
      'After Neteyam’s death, Jake and Neytiri face the aggressive Ash People as the conflict on Pandora escalates.',
    ],
  },
  fr: {
    summaries: ['Stranger Things 5', 'Mayday', 'Avatar 3: Fire and Ash'],
    descriptions: [
      "La cinquième saison de Stranger Things, série télévisée américaine de science-fiction et d'horreur, officiellement intitulée Stranger Things 5, est composée de 8 épisodes.",
      "La mission de reconnaissance du lieutenant Troy Brennan au-dessus du territoire soviétique tourne mal, l'obligeant à atterrir en catastrophe et à survivre dans la nature russe tout en évitant d'être capturé ou secouru.",
      "Aux prises avec le chagrin après la mort de Neteyam, la famille de Jake et Neytiri rencontre une nouvelle tribu agressive : les Na'vi. Ce peuple des cendres est dirigé par le fougueux Varang, alors que le conflit sur Pandora s'intensifie.",
    ],
  },
  es: {
    summaries: ['Stranger Things 5', 'Mayday', 'Avatar 3: Fire and Ash'],
    descriptions: [
      'La quinta temporada de Stranger Things consta de 8 episodios y lleva a Hawkins a su etapa más oscura.',
      'El teniente Troy Brennan se estrella tras las líneas soviéticas y debe sobrevivir en la naturaleza rusa sin ser capturado.',
      'Tras la muerte de Neteyam, Jake y Neytiri se enfrentan al agresivo Pueblo de Ceniza mientras el conflicto en Pandora crece.',
    ],
  },
  ar: {
    summaries: ['Stranger Things 5', 'Mayday', 'Avatar 3: Fire and Ash'],
    descriptions: [
      'يتكون الموسم الخامس من Stranger Things من 8 حلقات ويدخل مدينة هوكينز في أكثر فصولها ظلاما.',
      'يتحطم الملازم تروي برينان خلف الخطوط السوفيتية ويجب أن ينجو في البرية الروسية مع تجنب الأسر.',
      'بعد وفاة نيتيام، يواجه جيك ونيتيري شعب الرماد العدائي بينما يتصاعد الصراع على باندورا.',
    ],
  },
  pt: {
    summaries: ['Stranger Things 5', 'Mayday', 'Avatar 3: Fire and Ash'],
    descriptions: [
      'A quinta temporada de Stranger Things tem 8 episódios e leva Hawkins ao seu capítulo mais sombrio.',
      'O tenente Troy Brennan cai atrás das linhas soviéticas e precisa sobreviver na natureza russa sem ser capturado.',
      'Após a morte de Neteyam, Jake e Neytiri enfrentam o agressivo Povo das Cinzas enquanto o conflito em Pandora aumenta.',
    ],
  },
  hi: {
    summaries: ['Stranger Things 5', 'Mayday', 'Avatar 3: Fire and Ash'],
    descriptions: [
      'Stranger Things का पांचवां सीजन 8 एपिसोड का है और Hawkins को उसके सबसे अंधेरे दौर में ले जाता है।',
      'लेफ्टिनेंट ट्रॉय ब्रेनन सोवियत सीमा के पीछे दुर्घटनाग्रस्त हो जाता है और रूसी जंगल में जीवित रहना पड़ता है।',
      'नेटेयम की मौत के बाद, जेक और नेयतिरी आक्रामक Ash People का सामना करते हैं और Pandora का संघर्ष बढ़ता है।',
    ],
  },
  zh: {
    summaries: ['怪奇物语 5', 'Mayday', '阿凡达3：火与烬'],
    descriptions: [
      '《怪奇物语》第五季共8集，将霍金斯带入迄今最黑暗的篇章。',
      '特洛伊·布伦南中尉在苏联防线后方坠机，必须在俄罗斯荒野中生存并躲避追捕。',
      '内特亚姆去世后，杰克与奈蒂莉遭遇好战的灰烬部族，潘多拉冲突进一步升级。',
    ],
  },
  id: {
    summaries: ['Stranger Things 5', 'Mayday', 'Avatar 3: Fire and Ash'],
    descriptions: [
      'Musim kelima Stranger Things terdiri dari 8 episode dan membawa Hawkins ke babak paling gelapnya.',
      'Letnan Troy Brennan jatuh di belakang garis Soviet dan harus bertahan hidup di alam liar Rusia sambil menghindari penangkapan.',
      'Setelah kematian Neteyam, Jake dan Neytiri menghadapi Ash People yang agresif saat konflik di Pandora meningkat.',
    ],
  },
  ru: {
    summaries: ['Очень странные дела 5', 'Mayday', 'Аватар 3: Огонь и пепел'],
    descriptions: [
      'Пятый сезон «Очень странных дел» состоит из 8 эпизодов и ведет Хокинс к самой мрачной главе.',
      'Лейтенант Трой Бреннан терпит крушение за советской линией и вынужден выживать в российской тайге, избегая плена.',
      'После смерти Нетеяма Джейк и Нейтири сталкиваются с агрессивным Народом Пепла, а конфликт на Пандоре усиливается.',
    ],
  },
  sw: {
    summaries: ['Stranger Things 5', 'Mayday', 'Avatar 3: Fire and Ash'],
    descriptions: [
      'Msimu wa tano wa Stranger Things una vipindi 8 na unaifikisha Hawkins kwenye sura yake ya giza zaidi.',
      'Luteni Troy Brennan anaanguka nyuma ya mstari wa Soviet na analazimika kuishi porini Urusi bila kukamatwa.',
      'Baada ya kifo cha Neteyam, Jake and Neytiri wanakabiliana na Ash People huku mgogoro wa Pandora ukizidi.',
    ],
  },
  de: {
    summaries: ['Stranger Things 5', 'Mayday', 'Avatar 3: Fire and Ash'],
    descriptions: [
      'Die fünfte Staffel von Stranger Things besteht aus 8 Episoden und führt Hawkins in sein bisher dunkelstes Kapitel.',
      'Leutnant Troy Brennan stürzt hinter den sowjetischen Linien ab und muss in der russischen Wildnis überleben, während er der Gefangennahme entgeht.',
      'Nach Neteyams Tod konfrontieren Jake und Neytiri das aggressive Volk der Asche, während der Konflikt auf Pandora eskaliert.',
    ],
  },
  it: {
    summaries: ['Stranger Things 5', 'Mayday', 'Avatar 3: Fire and Ash'],
    descriptions: [
      'La quinta stagione di Stranger Things è composta da 8 episodi e spinge Hawkins nel suo capitolo più oscuro.',
      'Il tenente Troy Brennan si schianta dietro le linee sovietiche e deve sopravvivere nella landa selvaggia russa eludendo la cattura.',
      'Dopo la morte di Neteyam, Jake e Neytiri affrontano l’aggressivo Popolo della Cenere mentre il conflitto su Pandora si intensifica.',
    ],
  },
  nl: {
    summaries: ['Stranger Things 5', 'Mayday', 'Avatar 3: Fire and Ash'],
    descriptions: [
      'Seizoen vijf van Stranger Things bestaat uit 8 afleveringen en duwt Hawkins in zijn donkerste hoofdstuk tot nu toe.',
      'Luitenant Troy Brennan stort neer achter de Sovjetlinies en moet overleven in de Russische wildernis terwijl hij gevangenneming vermijdt.',
      'Na de dood van Neteyam worden Jake en Neytiri geconfronteerd met de agressieve Ash People naarmate het conflict op Pandora escaleert.',
    ],
  },
};

export function getFeaturedProgramsText(languageCode: string): FeaturedTextBundle {
  const code = languageCode.split('-')[0] as FeaturedLocaleCode;
  return FEATURED_TEXT_BY_LOCALE[code] ?? FEATURED_TEXT_BY_LOCALE.en;
}
