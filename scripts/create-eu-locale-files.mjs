/**
 * Génère src/locales/de.ts, it.ts, nl.ts (base UI) à partir du modèle es.ts.
 */
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const blocks = {
  de: {
    lang: 'de',
    loading: 'Laden...',
    close: 'Menü schließen',
    search: 'Suchen',
    backHome: 'Zur Startseite',
    login: 'Anmelden',
    register: 'Konto erstellen',
    explore: 'Entdecken',
    skip: 'Zum Hauptinhalt springen',
    notFoundMsg: 'Diese Seite existiert nicht im Skoleom-Universum.',
    notFoundCta: 'Zur Startseite',
    brandHome: 'Startseite',
    navLabel: 'Hauptnavigation',
    changeLang: 'Sprache ändern',
    settings: 'Einstellungen',
    favorites: 'Favoriten',
    cart: 'Warenkorb',
    account: 'Benutzerkonto',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    dashboard: 'Mein Bereich',
    orders: 'Meine Bestellungen',
    admin: 'Admin-Konsole',
    logout: 'Abmelden',
    nav: {
      home: 'Startseite',
      stores: 'Audiovisual-Stores',
      everyone: 'Für alle',
      pros: 'Für Profis',
      news: 'News',
      events: 'Events',
      group: 'Gruppe',
      search: 'Suche',
      support: 'Support',
    },
    cartTitle: 'Mein Warenkorb',
    itemCount: '{{count}} Artikel',
    emptyTitle: 'Ihr Warenkorb ist leer',
    emptySub: 'Entdecken Sie shoppable Inhalte',
    subtotal: 'Zwischensumme',
    shipping: 'Versand',
    free: 'Kostenlos',
    total: 'Gesamt',
    payCta: 'Mit Skoleom Pay bezahlen',
    paySec: 'Souveräne, sichere Zahlung · DSGVO-konform',
  },
  it: {
    lang: 'it',
    loading: 'Caricamento...',
    close: 'Chiudi menu',
    search: 'Cerca',
    backHome: 'Torna alla home',
    login: 'Accedi',
    register: 'Crea account',
    explore: 'Esplora',
    skip: 'Vai al contenuto principale',
    notFoundMsg: 'Questa pagina non esiste nell’universo Skoleom.',
    notFoundCta: 'Torna alla home',
    brandHome: 'Home',
    navLabel: 'Navigazione principale',
    changeLang: 'Cambia lingua',
    settings: 'Impostazioni',
    favorites: 'Preferiti',
    cart: 'Carrello',
    account: 'Account utente',
    openMenu: 'Apri menu',
    closeMenu: 'Chiudi menu',
    dashboard: 'Il tuo spazio',
    orders: 'I tuoi ordini',
    admin: 'Console admin',
    logout: 'Esci',
    nav: {
      home: 'Home',
      stores: 'Store audiovisivi',
      everyone: 'Per tutti',
      pros: 'Per i professionisti',
      news: 'Notizie',
      events: 'Eventi',
      group: 'Gruppo',
      search: 'Cerca',
      support: 'Supporto',
    },
    cartTitle: 'Il mio carrello',
    itemCount: '{{count}} articolo/i',
    emptyTitle: 'Il carrello è vuoto',
    emptySub: 'Scopri i contenuti shoppable',
    subtotal: 'Subtotale',
    shipping: 'Spedizione',
    free: 'Gratis',
    total: 'Totale',
    payCta: 'Paga con Skoleom Pay',
    paySec: 'Pagamento sovrano e sicuro · conforme GDPR',
  },
  nl: {
    lang: 'nl',
    loading: 'Laden...',
    close: 'Menu sluiten',
    search: 'Zoeken',
    backHome: 'Terug naar home',
    login: 'Inloggen',
    register: 'Account aanmaken',
    explore: 'Ontdekken',
    skip: 'Ga naar hoofdinhoud',
    notFoundMsg: 'Deze pagina bestaat niet in het Skoleom-universum.',
    notFoundCta: 'Terug naar home',
    brandHome: 'Home',
    navLabel: 'Hoofdnavigatie',
    changeLang: 'Taal wijzigen',
    settings: 'Instellingen',
    favorites: 'Favorieten',
    cart: 'Winkelwagen',
    account: 'Gebruikersaccount',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    dashboard: 'Uw ruimte',
    orders: 'Uw bestellingen',
    admin: 'Beheerconsole',
    logout: 'Uitloggen',
    nav: {
      home: 'Home',
      stores: 'Audiovisuele winkels',
      everyone: 'Voor iedereen',
      pros: 'Voor professionals',
      news: 'Nieuws',
      events: 'Evenementen',
      group: 'Groep',
      search: 'Zoeken',
      support: 'Ondersteuning',
    },
    cartTitle: 'Mijn winkelwagen',
    itemCount: '{{count}} artikel(en)',
    emptyTitle: 'Uw winkelwagen is leeg',
    emptySub: 'Ontdek onze shoppable content',
    subtotal: 'Subtotaal',
    shipping: 'Verzending',
    free: 'Gratis',
    total: 'Totaal',
    payCta: 'Betalen met Skoleom Pay',
    paySec: 'Soevereine, veilige betaling · AVG-conform',
  },
};

function buildLocale(b) {
  return `import type { LocaleResource } from './types';
import { STATIC_PAGE_DOCUMENTS } from './staticPages';
import { getA11yFallback } from './a11yFallback';
import { search2En } from './search2.translations';

const resource = {
  staticPages: STATIC_PAGE_DOCUMENTS.${b.lang},
  common: {
    loading: ${JSON.stringify(b.loading)},
    actions: {
      close: ${JSON.stringify(b.close)},
      search: ${JSON.stringify(b.search)},
      backHome: ${JSON.stringify(b.backHome)},
      login: ${JSON.stringify(b.login)},
      register: ${JSON.stringify(b.register)},
      explore: ${JSON.stringify(b.explore)},
    },
    states: {
      noResults: ${JSON.stringify(b.lang === 'de' ? 'Keine Ergebnisse' : b.lang === 'it' ? 'Nessun risultato' : 'Geen resultaten')},
      noResultsFor: ${JSON.stringify(b.lang === 'de' ? 'Keine Ergebnisse für „{{query}}“.' : b.lang === 'it' ? 'Nessun risultato per «{{query}}».' : 'Geen resultaten voor «{{query}}».')},
    },
  },
  app: {
    skipToContent: ${JSON.stringify(b.skip)},
    loading: ${JSON.stringify(b.loading)},
    notFound: {
      message: ${JSON.stringify(b.notFoundMsg)},
      cta: ${JSON.stringify(b.notFoundCta)},
    },
  },
  a11y: getA11yFallback('${b.lang}'),
  header: {
    brandHome: ${JSON.stringify(b.brandHome)},
    universe: 'Universe',
    navLabel: ${JSON.stringify(b.navLabel)},
    searchPlaceholder: ${JSON.stringify(b.search)},
    searchAria: ${JSON.stringify(b.search)},
    language: { change: ${JSON.stringify(b.changeLang)} },
    actions: {
      settings: ${JSON.stringify(b.settings)},
      favorites: ${JSON.stringify(b.favorites)},
      cart: ${JSON.stringify(b.cart)},
      account: ${JSON.stringify(b.account)},
      openMenu: ${JSON.stringify(b.openMenu)},
      closeMenu: ${JSON.stringify(b.closeMenu)},
    },
    account: {
      dashboard: ${JSON.stringify(b.dashboard)},
      orders: ${JSON.stringify(b.orders)},
      favorites: ${JSON.stringify(b.favorites)},
      admin: ${JSON.stringify(b.admin)},
      adminBadge: 'Admin',
      logout: ${JSON.stringify(b.logout)},
    },
    nav: {
      home: ${JSON.stringify(b.nav.home)},
      stores: ${JSON.stringify(b.nav.stores)},
      everyone: ${JSON.stringify(b.nav.everyone)},
      pros: ${JSON.stringify(b.nav.pros)},
      news: ${JSON.stringify(b.nav.news)},
      events: ${JSON.stringify(b.nav.events)},
      group: ${JSON.stringify(b.nav.group)},
      search: ${JSON.stringify(b.nav.search)},
      support: ${JSON.stringify(b.nav.support)},
    },
  },
  cart: {
    title: ${JSON.stringify(b.cartTitle)},
    itemCount: ${JSON.stringify(b.itemCount)},
    empty: {
      title: ${JSON.stringify(b.emptyTitle)},
      subtitle: ${JSON.stringify(b.emptySub)},
    },
    summary: {
      subtotal: ${JSON.stringify(b.subtotal)},
      shipping: ${JSON.stringify(b.shipping)},
      free: ${JSON.stringify(b.free)},
      total: ${JSON.stringify(b.total)},
    },
    checkout: {
      cta: ${JSON.stringify(b.payCta)},
      security: ${JSON.stringify(b.paySec)},
    },
    aria: {
      decrease: ${JSON.stringify(b.lang === 'de' ? 'Menge verringern' : b.lang === 'it' ? 'Diminuisci quantità' : 'Hoeveelheid verlagen')},
      increase: ${JSON.stringify(b.lang === 'de' ? 'Menge erhöhen' : b.lang === 'it' ? 'Aumenta quantità' : 'Hoeveelheid verhogen')},
      remove: ${JSON.stringify(b.lang === 'de' ? 'Artikel entfernen' : b.lang === 'it' ? 'Rimuovi articolo' : 'Artikel verwijderen')},
      close: ${JSON.stringify(b.lang === 'de' ? 'Warenkorb schließen' : b.lang === 'it' ? 'Chiudi carrello' : 'Winkelwagen sluiten')},
    },
  },
  public: {
    notFound: {
      unavailable: ${JSON.stringify(b.lang === 'de' ? 'Seite nicht verfügbar' : b.lang === 'it' ? 'Pagina non disponibile' : 'Pagina niet beschikbaar')},
      heroLine1: ${JSON.stringify(b.lang === 'de' ? 'Diese Seite' : b.lang === 'it' ? 'Questa pagina' : 'Deze pagina')},
      heroLine2: ${JSON.stringify(b.lang === 'de' ? 'existiert nicht…' : b.lang === 'it' ? 'non esiste…' : 'bestaat niet…')},
      heroLine3: ${JSON.stringify(b.lang === 'de' ? 'Noch.' : b.lang === 'it' ? 'Ancora.' : 'Nog.')},
      badge: '404',
      title: ${JSON.stringify(b.lang === 'de' ? 'Seite nicht gefunden' : b.lang === 'it' ? 'Pagina non trovata' : 'Pagina niet gevonden')},
      subtitle: ${JSON.stringify(b.notFoundMsg)},
      cta: ${JSON.stringify(b.notFoundCta)},
      building: ${JSON.stringify(b.lang === 'de' ? 'In Entwicklung' : b.lang === 'it' ? 'In costruzione' : 'In ontwikkeling')},
      buildingDesc: ${JSON.stringify(
        b.lang === 'de'
          ? 'Wir entwickeln etwas Revolutionäres für Sie. Bleiben Sie dran.'
          : b.lang === 'it'
            ? 'Stiamo costruendo qualcosa di rivoluzionario per te. Resta connesso.'
            : 'We bouwen iets revolutionairs voor u. Blijf verbonden.',
      )},
      progress: ${JSON.stringify(
        b.lang === 'de'
          ? 'Entwicklungsfortschritt'
          : b.lang === 'it'
            ? 'Avanzamento sviluppo'
            : 'Ontwikkelingsvoortgang',
      )},
      discover: ${JSON.stringify(
        b.lang === 'de'
          ? 'In der Zwischenzeit entdecken'
          : b.lang === 'it'
            ? 'Nel frattempo, scopri'
            : 'Ontdek intussen',
      )},
      explore: ${JSON.stringify(b.explore)},
      productCardAria: ${JSON.stringify(
        b.lang === 'de'
          ? '{{title}} entdecken'
          : b.lang === 'it'
            ? 'Scopri {{title}}'
            : '{{title}} ontdekken',
      )},
      products: {
        sesync: {
          title: 'Skoleom SeSync',
          description: ${JSON.stringify(
            b.lang === 'de'
              ? 'Synchronisieren. Entdecken. Kaufen.'
              : b.lang === 'it'
                ? 'Sincronizza. Scopri. Acquista.'
                : 'Synchroniseer. Ontdek. Koop.',
          )},
        },
        stores: {
          title: ${JSON.stringify(
            b.lang === 'de'
              ? 'Alle Audiovisual-Stores'
              : b.lang === 'it'
                ? 'Tutti gli store audiovisivi'
                : 'Alle audiovisuele winkels',
          )},
          description: ${JSON.stringify(
            b.lang === 'de'
              ? 'Entdecken Sie unsere offiziellen Universen.'
              : b.lang === 'it'
                ? 'Esplora i nostri universi ufficiali.'
                : 'Verken onze officiële universums.',
          )},
        },
        watch: {
          title: 'Skoleom Watch',
          description: ${JSON.stringify(
            b.lang === 'de'
              ? 'Filme, Serien, Videos und Exklusivitäten.'
              : b.lang === 'it'
                ? 'Film, serie, video ed esclusive.'
                : 'Films, series, video’s en exclusives.',
          )},
        },
        invest: {
          title: 'Skoleom Invest',
          description: ${JSON.stringify(
            b.lang === 'de'
              ? 'Investieren Sie in die Zukunft des Audiovisuellen.'
              : b.lang === 'it'
                ? 'Investi nel futuro dell’audiovisivo.'
                : 'Investeer in de toekomst van audiovisueel.',
          )},
        },
        pulse: {
          title: 'Skoleom Pulse',
          description: ${JSON.stringify(
            b.lang === 'de'
              ? 'Trends in Echtzeit verfolgen.'
              : b.lang === 'it'
                ? 'Segui le tendenze in tempo reale.'
                : 'Volg trends in realtime.',
          )},
        },
      },
    },
    search2: search2En,
  },
  data: {},
} as const satisfies LocaleResource;

export default resource;
`;
}

for (const lang of ['de', 'it', 'nl']) {
  const path = join(root, 'src/locales', `${lang}.ts`);
  writeFileSync(path, buildLocale(blocks[lang]));
}
