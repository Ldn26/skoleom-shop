/**
 * Logos / partenaires affichés sur la page d'accueil
 * (distributeurs sport + plateformes OTT). Source : `/static/profils/*.webp`.
 */

export interface BrandLogo {
  id: string;
  title: string;
  image: string;
  href: string;
}

/** Distributeurs et e-commerces sport référencés dans le carrousel marques. */
export const AUDVIS_DISTRIBUTEURS: readonly BrandLogo[] = [
  {
    id: 'intersport',
    title: 'Intersport',
    image: '/static/profils/intersport.webp',
    href: '/videos',
  },
  { id: 'decathlon', title: 'Decathlon', image: '/static/profils/decathlon.webp', href: '/videos' },
  { id: 'gosport', title: 'Go Sport', image: '/static/profils/gosport.webp', href: '/videos' },
  {
    id: 'footlocker',
    title: 'Foot Locker',
    image: '/static/profils/footlocker.webp',
    href: '/videos',
  },
  { id: 'jdsports', title: 'JD Sports', image: '/static/profils/jd.webp', href: '/videos' },
  {
    id: 'SportsDirect',
    title: 'Sports Direct',
    image: '/static/profils/SportsDirect.webp',
    href: '/videos',
  },
  {
    id: 'Sport2000',
    title: 'Sport 2000',
    image: '/static/profils/Sport2000.webp',
    href: '/videos',
  },
  { id: 'Courir', title: 'Courir', image: '/static/profils/Courir.webp', href: '/videos' },
  { id: 'Temu', title: 'Temu', image: '/static/profils/Temu.webp', href: '/videos' },
  {
    id: 'SportScheck',
    title: 'SportScheck',
    image: '/static/profils/SportScheck.webp',
    href: '/videos',
  },
  {
    id: 'CisalfaSport',
    title: 'Cisalfa Sport',
    image: '/static/profils/CisalfaSport.webp',
    href: '/videos',
  },
  {
    id: 'BlueTomato',
    title: 'Blue Tomato',
    image: '/static/profils/BlueTomato.webp',
    href: '/videos',
  },
  {
    id: 'PrivateSportShop',
    title: 'Private Sport Shop',
    image: '/static/profils/PrivateSportShop.webp',
    href: '/videos',
  },
  {
    id: 'Bergfreunde',
    title: 'Bergfreunde',
    image: '/static/profils/Bergfreunde.webp',
    href: '/videos',
  },
  { id: 'Alltricks', title: 'Alltricks', image: '/static/profils/Alltricks.webp', href: '/videos' },
  { id: 'Bike24', title: 'Bike24', image: '/static/profils/Bike24.webp', href: '/videos' },
  {
    id: 'Deporvillage',
    title: 'Deporvillage',
    image: '/static/profils/Deporvillage.webp',
    href: '/videos',
  },
  { id: 'Wiggle', title: 'Wiggle', image: '/static/profils/Wiggle.webp', href: '/videos' },
  {
    id: 'ChainReactionCycles',
    title: 'Chain Reaction Cycles',
    image: '/static/profils/ChainReactionCycles.webp',
    href: '/videos',
  },
  {
    id: 'DicksSportingGoods',
    title: "Dick's Sporting Goods",
    image: '/static/profils/DicksSportingGoods.webp',
    href: '/videos',
  },
  {
    id: 'AcademySports+Outdoors',
    title: 'Academy Sports + Outdoors',
    image: '/static/profils/AcademySports+Outdoors.webp',
    href: '/videos',
  },
  {
    id: 'Big5SportingGoods',
    title: 'Big 5 Sporting Goods',
    image: '/static/profils/Big5SportingGoods.webp',
    href: '/videos',
  },
  { id: 'REI', title: 'REI', image: '/static/profils/REI.webp', href: '/videos' },
  {
    id: 'MercadoLibre',
    title: 'Mercado Libre',
    image: '/static/profils/MercadoLibre.webp',
    href: '/videos',
  },
  { id: "Cabela's", title: "Cabela's", image: "/static/profils/Cabela's.webp", href: '/videos' },
  { id: 'Scheels', title: 'Scheels', image: '/static/profils/Scheels.webp', href: '/videos' },
  { id: 'Fanatics', title: 'Fanatics', image: '/static/profils/Fanatics.webp', href: '/videos' },
  {
    id: 'HibbettSports',
    title: 'Hibbett Sports',
    image: '/static/profils/HibbettSports.webp',
    href: '/videos',
  },
  {
    id: 'AliExpress',
    title: 'AliExpress',
    image: '/static/profils/AliExpress.webp',
    href: '/videos',
  },
  {
    id: 'FinishLine',
    title: 'Finish Line',
    image: '/static/profils/FinishLine.webp',
    href: '/videos',
  },
  { id: 'Centauro', title: 'Centauro', image: '/static/profils/Centauro.webp', href: '/videos' },
  { id: 'Netshoes', title: 'Netshoes', image: '/static/profils/Netshoes.webp', href: '/videos' },
  { id: 'Lululemon', title: 'Lululemon', image: '/static/profils/Lululemon.webp', href: '/videos' },
  {
    id: 'SuperRetailGroup',
    title: 'Super Retail Group',
    image: '/static/profils/SuperRetailGroup.webp',
    href: '/videos',
  },
  { id: 'Tradeinn', title: 'Tradeinn', image: '/static/profils/Tradeinn.webp', href: '/videos' },
  { id: 'Unisport', title: 'Unisport', image: '/static/profils/Unisport.webp', href: '/videos' },
  {
    id: 'MountainWarehouse',
    title: 'Mountain Warehouse',
    image: '/static/profils/MountainWarehouse.webp',
    href: '/videos',
  },
  {
    id: 'Snowleader',
    title: 'Snowleader',
    image: '/static/profils/Snowleader.webp',
    href: '/videos',
  },
  { id: 'Ekosport', title: 'Ekosport', image: '/static/profils/Ekosport.webp', href: '/videos' },
  {
    id: 'Backcountry',
    title: 'Backcountry',
    image: '/static/profils/Backcountry.webp',
    href: '/videos',
  },
  { id: 'Moosejaw', title: 'Moosejaw', image: '/static/profils/Moosejaw.webp', href: '/videos' },
  { id: 'Amazon', title: 'Amazon', image: '/static/profils/Amazon.webp', href: '/videos' },
  { id: 'eBay', title: 'eBay', image: '/static/profils/eBay.webp', href: '/videos' },
  { id: 'Zalando', title: 'Zalando', image: '/static/profils/Zalando.webp', href: '/videos' },
  { id: 'ASOS', title: 'ASOS', image: '/static/profils/ASOS.webp', href: '/videos' },
];

/** Plateformes OTT (streaming) référencées dans le carrousel marques. */
export const AUDVIS_OTT: readonly BrandLogo[] = [
  { id: 'netflix', title: 'Netflix', image: '/static/profils/Netflix.webp', href: '/videos' },
  { id: 'youtube', title: 'YouTube', image: '/static/profils/youtube.webp', href: '/videos' },
  { id: 'primevideo', title: 'Prime Video', image: '/static/profils/prime.webp', href: '/videos' },
  { id: 'disney', title: 'Disney+', image: '/static/profils/disney.webp', href: '/videos' },
  { id: 'appletv', title: 'Apple TV+', image: '/static/profils/apple.webp', href: '/videos' },
  { id: 'DAZN', title: 'DAZN', image: '/static/profils/dazn.webp', href: '/videos' },
  { id: 'Peacock', title: 'Peacock', image: '/static/profils/Peacock.webp', href: '/videos' },
  {
    id: 'Paramount+',
    title: 'Paramount +',
    image: '/static/profils/Paramount+.webp',
    href: '/videos',
  },
  {
    id: 'NBALeaguePass',
    title: 'NBA League Pass',
    image: '/static/profils/NBALeaguePass.webp',
    href: '/videos',
  },
  { id: 'F1TV', title: 'F1 TV', image: '/static/profils/F1TV.webp', href: '/videos' },
  { id: 'FIFA+', title: 'FIFA +', image: '/static/profils/FIFA+.webp', href: '/videos' },
  { id: 'MLBtv', title: 'MLB.tv', image: '/static/profils/MLBtv.webp', href: '/videos' },
  { id: 'NFL+', title: 'NFL +', image: '/static/profils/NFL+.webp', href: '/videos' },
  {
    id: 'UFCFightPass',
    title: 'UFC Fight Pass',
    image: '/static/profils/UFCFightPass.webp',
    href: '/videos',
  },
  {
    id: 'BeINSPORTS',
    title: 'BeIN SPORTS',
    image: '/static/profils/BeINSPORTS.webp',
    href: '/videos',
  },
  {
    id: 'SkySports',
    title: 'Sky Sports',
    image: '/static/profils/SkySports.webp',
    href: '/videos',
  },
  { id: 'Canal+', title: 'Canal +', image: '/static/profils/Canal+.webp', href: '/videos' },
  { id: 'FuboTV', title: 'FuboTV', image: '/static/profils/FuboTV.webp', href: '/videos' },
  { id: 'Viaplay', title: 'Viaplay', image: '/static/profils/Viaplay.webp', href: '/videos' },
  {
    id: 'Discovery+',
    title: 'Discovery +',
    image: '/static/profils/Discovery+.webp',
    href: '/videos',
  },
];

export interface BrandTile {
  id: string;
  name: string;
  logoSrc: string;
  /** Site officiel de la marque (cible du clic). Absent = non cliquable. */
  url?: string;
}

/**
 * Sites officiels des marques (clé = id du logo).
 * Les marques absentes restent non cliquables (URL inconnue / ambiguë).
 */
const BRAND_WEBSITES: Readonly<Record<string, string>> = {
  // — Distributeurs sport —
  intersport: 'https://www.intersport.com',
  decathlon: 'https://www.decathlon.com',
  gosport: 'https://www.go-sport.com',
  footlocker: 'https://www.footlocker.com',
  jdsports: 'https://www.jdsports.com',
  SportsDirect: 'https://www.sportsdirect.com',
  Sport2000: 'https://www.sport2000.fr',
  Courir: 'https://www.courir.com',
  Temu: 'https://www.temu.com',
  SportScheck: 'https://www.sportscheck.com',
  CisalfaSport: 'https://www.cisalfasport.it',
  BlueTomato: 'https://www.blue-tomato.com',
  PrivateSportShop: 'https://www.privatesportshop.com',
  Bergfreunde: 'https://www.bergfreunde.de',
  Alltricks: 'https://www.alltricks.fr',
  Bike24: 'https://www.bike24.com',
  Deporvillage: 'https://www.deporvillage.com',
  Wiggle: 'https://www.wiggle.com',
  ChainReactionCycles: 'https://www.chainreactioncycles.com',
  DicksSportingGoods: 'https://www.dickssportinggoods.com',
  'AcademySports+Outdoors': 'https://www.academy.com',
  Big5SportingGoods: 'https://www.big5sportinggoods.com',
  REI: 'https://www.rei.com',
  MercadoLibre: 'https://www.mercadolibre.com',
  "Cabela's": 'https://www.cabelas.com',
  Scheels: 'https://www.scheels.com',
  Fanatics: 'https://www.fanatics.com',
  HibbettSports: 'https://www.hibbett.com',
  AliExpress: 'https://www.aliexpress.com',
  FinishLine: 'https://www.finishline.com',
  Centauro: 'https://www.centauro.com.br',
  Netshoes: 'https://www.netshoes.com.br',
  Lululemon: 'https://www.lululemon.com',
  SuperRetailGroup: 'https://www.superretailgroup.com',
  Tradeinn: 'https://www.tradeinn.com',
  Unisport: 'https://www.unisportstore.com',
  MountainWarehouse: 'https://www.mountainwarehouse.com',
  Snowleader: 'https://www.snowleader.com',
  Ekosport: 'https://www.ekosport.fr',
  Backcountry: 'https://www.backcountry.com',
  Moosejaw: 'https://www.moosejaw.com',
  Amazon: 'https://www.amazon.com',
  eBay: 'https://www.ebay.com',
  Zalando: 'https://www.zalando.com',
  ASOS: 'https://www.asos.com',
  // — Plateformes OTT —
  netflix: 'https://www.netflix.com',
  youtube: 'https://www.youtube.com',
  primevideo: 'https://www.primevideo.com',
  disney: 'https://www.disneyplus.com',
  appletv: 'https://tv.apple.com',
  DAZN: 'https://www.dazn.com',
  Peacock: 'https://www.peacocktv.com',
  'Paramount+': 'https://www.paramountplus.com',
  NBALeaguePass: 'https://www.nba.com/leaguepass',
  F1TV: 'https://f1tv.formula1.com',
  'FIFA+': 'https://plus.fifa.com',
  MLBtv: 'https://www.mlb.com/tv',
  'NFL+': 'https://www.nfl.com/plus',
  UFCFightPass: 'https://ufcfightpass.com',
  BeINSPORTS: 'https://www.beinsports.com',
  SkySports: 'https://www.skysports.com',
  'Canal+': 'https://www.canalplus.com',
  FuboTV: 'https://www.fubo.tv',
  Viaplay: 'https://www.viaplay.com',
  'Discovery+': 'https://www.discoveryplus.com',
};

/** Fusion des deux listes pour alimenter le composant BrandMarqueeRow. */
export const AUDVIS_BRANDS_ALL: readonly BrandTile[] = [...AUDVIS_DISTRIBUTEURS, ...AUDVIS_OTT].map(
  (x) => ({ id: x.id, name: x.title, logoSrc: x.image, url: BRAND_WEBSITES[x.id] }),
);
