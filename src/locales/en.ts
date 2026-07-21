import type { LocaleResource } from './types';
import { STATIC_PAGE_DOCUMENTS } from './staticPages';
const resource = {
  staticPages: STATIC_PAGE_DOCUMENTS.en,
  common: {
    loading: 'Loading...',
    actions: {
      close: 'Close menu',
      search: 'Search',
      backHome: 'Back to home',
      login: 'Sign in',
      register: 'Create account',
      explore: 'Explore',
    },
    states: {
      noResults: 'No results',
      noResultsFor: 'No results for “{{query}}”.',
    },
  },
  app: {
    skipToContent: 'Skip to main content',
    loading: 'Loading...',
    notFound: {
      message: 'This page does not exist in the Skoleom universe.',
      cta: 'Back to home',
    },
    skyAssistant: {
      badge: 'SKY · AI ASSISTANT',
      title: 'Sky is coming soon!',
      description:
        'Our intelligent assistant is busy preparing to offer you a unique experience. Stay tuned, Sky takes off very soon!',
      backHome: 'Back to home',
      sendTicket: 'Send a ticket · Reply in 4h',
      requestCallback: 'Request a callback · In 30 min',
    },
  },
  header: {
    brandHome: 'Home',
    profile: {
      logout: 'Log out',
      profile : 'My profile',
    },
    universe: 'Universe',
    navLabel: 'Main navigation',
    searchPlaceholder: 'Search',
    searchAria: 'Search',
    language: {
      change: 'Change language',
      zones: {
        international: 'International',
        europe: 'Europe',
        americas: 'Americas',
        mena: 'Middle East & North Africa',
        asiaPacific: 'Asia-Pacific',
        africa: 'Africa',
      },
    },
    actions: {
      settings: 'Settings',
      favorites: 'Favorites',
      cart: 'Cart',
      account: 'User account',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    account: {
      dashboard: 'My dashboard',
      orders: 'My orders',
      favorites: 'Favorites',
      admin: 'Admin console',
      adminBadge: 'Admin',
      logout: 'Log out',
    },
    nav: {
      essayage: 'Virtual try-on',
      home: 'Home',
      cabine: 'Fitting room',
      stores: 'Audiovisual stores',
      everyone: 'For everyone',
      pros: 'For Professionals',
      news: 'News',
      events: 'Events',
      group: 'Group',
      search: 'Search',
      support: 'Support',
    },
  },
  cart: {
    title: 'My cart',
    itemCount: '{{count}} item(s)',
    empty: {
      title: 'Your cart is empty',
      subtitle: 'Discover our shoppable content',
    },
    summary: {
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      free: 'Free',
      total: 'Total',
    },
    checkout: {
      cta: 'Pay with Skoleom Pay',
      security: 'Sovereign and secure payment · GDPR compliant',
    },
    aria: {
      decrease: 'Decrease quantity',
      increase: 'Increase quantity',
      remove: 'Remove this item',
      close: 'Close cart',
    },
  },
  skoleomPage: {
    nav: {
      ariaLabel: 'Skoleom Page navigation',
      home: 'Home',
      homeMobile: 'Home',
      trends: 'Trends',
      trendsMobile: 'Trends',
      create: 'Create your SeContent',
      createMobile: 'Create',
      profile: 'Profile',
      profileMobile: 'Profile',
      modalTitle: 'Service unavailable',
      modalBody: 'This service is not available in your region.',
      modalClose: 'Close',
    },
    explorer: {
      poweredBy: 'Powered by SeSync',
      heroBefore: 'Watch. Touch. ',
      heroHighlight: 'Discover.',
      heroSubtitle:
        'One search, the entire Skoleom Universe ecosystem — video, music, media, shopping. Every result becomes an immersive gateway.',
      logoAlt: 'Skoleom Page',
      searchPlaceholder: 'Search an artist, film, brand…',
      searchAria: 'Search term',
      searchSubmit: 'Start search',
      searchReset: 'Reset search',
      exploreCta: 'Explore',
      resultsFor: 'Results for',
      resultsOnPlatforms_one: 'on {{count}} platform',
      resultsOnPlatforms_other: 'on {{count}} platforms',
      filter: 'Filter',
      platforms: 'Platforms',
      filterPlatformsAria: 'Filter platforms',
      selectAll: 'All',
      selectNone: 'None',
      loading: 'Connecting to the Skoleom universe…',
      noResults: 'No results match your current filters. Select more platforms.',
    },
    actionCards: {
      sectionBefore: 'Discover the ',
      sectionHighlight: 'Skoleom universe',
      mobile: {
        title: 'Mobile',
        description: 'Available on iOS and Android.',
      },
      tv: {
        title: 'TV',
        description: 'Watch on your connected TV.',
      },
      rewards: {
        title: 'Rewards',
        description: 'Cashback on your premium purchases.',
      },
      extension: {
        title: 'Extension',
        description: 'Access all features.',
      },
      audio: {
        title: 'Audio',
        description: 'Listen on all your devices.',
      },
      gaming: {
        title: 'Gaming',
        description: 'Discover our gaming apps.',
      },
    },
  },
  footer: {
    brand: {
      description:
        'The Skoleom ecosystem brings together audiovisual stores, creator tools and business solutions to make content interactive and actionable.',
    },
    socials: {
      label: 'Skoleom social networks',
    },
    shopPrompt: {
      prefix: 'You can also shop in',
      link: 'the Skoleom online store',
    },
    copyright: 'All rights reserved.',
    modal: {
      close: 'Close menu',
      title: 'Service unavailable',
      body: 'This service is not available in your region.',
    },
    columns: {
      about: 'About Skoleom',
      stores: 'Audiovisual stores',
      everyone: 'For everyone',
      pros: 'For Professionals',
      group: 'Group',
      '1': 'About Skoleom',
      '2': 'Audiovisual stores',
      '3': 'For everyone',
      '4': 'For Professionals',
      '5': 'Group',
    },
    links: {
      '101': 'Our mission',
      '102': 'Our technology',
      '103': 'The Skoleom ecosystem',
      '104': 'Funding programs',
      '105': 'Skoleom patent',
    },
    legalLinks: {
      '901': 'Legal notice',
      '902': 'Terms',
      '903': 'Privacy',
      '904': 'Affiliate disclosure',
      '905': 'Cookie preferences',
    },
  },
  auth: {
    login: {
      title: 'Sign in',
      submit: 'Sign in',
    },
    register: {
      title: 'Create account',
      submit: 'Create account',
    },
  },
  dashboard: {
    user: {
      orders: 'My orders',
    },
    admin: {
      title: 'Admin console',
    },
  },
  help: {
    title: 'Help & Contact',
    supportUrl: 'https://support.skoleom.com/',
    supportUrlText: 'https://support.skoleom.com/',
    contact: {
      title: 'Contact us',
      email: 'hi@skoleom.com',
      dpo: 'dpo@skoleom.com',
    },
    technical: {
      title: 'Technical support',
      description:
        'For technical support, please contact us and we will get back to you within 48 hours.',
    },
  },
  legal: {
    title: 'Legal',
    personalData: {
      title: 'Personal Data',
      phraseOne: 'The personal information you provide is processed solely by SKOLEOM GROUP.',
      phraseTwo:
        'In accordance with Article 34 of the French Data Protection Act ("Informatique et Libertés"), you have the right to access, correct, update, or request the deletion of your personal data.',
      phraseThree:
        'To exercise these rights, please contact SKOLEOM GROUP, 42 Cours Pierre Vasseur, 91120 Palaiseau.',
      phraseFour: 'Email: dpo@skoleom.com',
    },
    webPublisher: {
      title: 'Website Publisher',
      phraseOne: 'SKOLEOM GROUP',
      phraseTwo: 'A Simplified Joint-Stock Company with a share capital of €194,138,367.00',
      phraseThree: 'Registered with the Commercial Court (RCS): 939506796, EVRY',
      phraseFour: 'Registered Office: 42 Cours Pierre Vasseur, 91120 Palaiseau',
      phraseFive: 'Publishing Director: Mr. Kevin RACOIS, President',
    },
    webHostingProvider: {
      title: 'Hosting Provider',
      phraseOne: 'Amazon Web Services EMEA SARL',
      phraseTwo: '38 Avenue John F. Kennedy, L-1855, Luxembourg',
      phraseThree: 'Telephone: +352 26 50 86 11',
      phraseFour: 'Email: aws-EU-privacy@amazon.com',
    },
  },
  privacyPolicy: {
    title: 'SKOLEOM Privacy Policy',
    effectiveDate: 'Effective date: May 21, 2025',
    sections: {
      '1': {
        title: '1 | Introduction',
        content:
          'This Privacy Policy explains how Skoleom Group, a simplified joint-stock company (SAS) with share capital of €194 138 367, registered in the Trade and Companies Register of Evry under No. 939 506 796, whose registered office is 42 Cours Pierre Vasseur, 91120 Palaiseau, France ("Skoleom", "we"), collects, uses, discloses and stores your personal data when you visit skoleom.com, purchase products in our online store, interact with our newsletters or contact support (together, the "Site"). It also sets out your rights under the EU General Data Protection Regulation (GDPR) and the French Data-Protection Act.',
      },
      '2': {
        title: '2 | Who is responsible for your data?',
        content:
          '<strong>Data controller</strong> – Skoleom Group (full details above).<br> <strong>Data-Protection Officer (DPO)</strong> – dpo@skoleom.com.',
      },
      '3': {
        title: '3 | What personal data do we collect?',
        list: [
          'Identification & contact data (name, postal address, e-mail, phone).',
          'Account credentials (username, hashed password, language preferences).',
          'Order & payment data (products, quantities, shipping address, invoices, last four digits of your card, VAT information).',
          'Customer-support data (messages, attachments).',
          'Usage data (IP address, device/browser info, pages viewed, clicks, referrer URL, timestamps).',
          'Marketing data (newsletter opt-in status, open/click metrics).',
        ],
        note: 'We do not intentionally collect special-category ("sensitive") data and ask you not to provide such information.',
      },
      '4': {
        title: '4 | Purposes and legal bases',
        table: {
          headers: ['Purpose', 'Legal basis (Art. 6 GDPR)'],
          rows: [
            {
              purpose: 'Process and deliver your orders, handle returns',
              basis: 'Contract performance (b)',
            },
            {
              purpose: 'Create and manage your customer account',
              basis: 'Contract performance (b)',
            },
            {
              purpose: 'Process payments and prevent fraud',
              basis: 'Contract (b) & Legitimate interest (f)',
            },
            {
              purpose: 'Send mandatory service messages (order updates, password reset)',
              basis: 'Contract (b)',
            },
            {
              purpose: 'Send newsletters and promotions',
              basis: 'Consent (a)—withdrawable at any time',
            },
            { purpose: 'Provide customer support', basis: 'Contract (b)' },
            {
              purpose: 'Improve the Site and compile anonymised statistics',
              basis: 'Legitimate interest (f)',
            },
            {
              purpose: 'Comply with accounting, tax and other legal obligations',
              basis: 'Legal obligation (c)',
            },
          ],
        },
        note: 'No automated decision-making with legal or similarly significant effects is carried out (§22 GDPR).',
      },
      '5': {
        title: '5 | Who has access to your data?',
        subtitle: 'Your data is shared only with :',
        list: [
          '<strong>Payment service providers</strong> (Stripe, PayPal, Apple Pay, Amazon Pay).',
          '<strong>Logistics partner</strong> (La Poste, DHL, UPS) for shipping.',
          '<strong>Cloud hosting / CDN providers</strong> operating our infrastructure.',
          '<strong>E-mail & marketing platform</strong> (for newsletters, if you opt in).',
          '<strong>Professional advisers</strong> (accountants, auditors, lawyers) where necessary.',
        ],
        note: 'Each partner acts under a GDPR-compliant data-processing agreement. We never sell your data.',
      },
      '6': {
        title: '6 | International transfers',
        content: 'When data leaves the European Economic Area, we rely on:',
        subitems: [
          'the European Commission’s <strong>Standard Contractual Clauses</strong> (2021/914/EU)',
          'the <strong>EU–US Data Privacy Framework</strong> (if the recipient is certified)',
          'another mechanism approved by the GDPR',
        ],
        note: 'You may obtain a copy of the relevant safeguards by contacting our DPO.',
      },
      '7': {
        title: '7 | Retention periods',
        list: [
          'Orders & invoices – 10 years (French Commercial Code).',
          'Customer account – retained while active; deleted 24 months after last login or upon request.',
          'Newsletter list – until you unsubscribe or after 24 months of inactivity.',
          'Support records – 3 years from closure.',
          'Web-analytics logs – 14 months, then aggregated.',
          'Back-ups – overwritten on a 30-day rolling schedule.',
        ],
      },
      '8': {
        title: '8 | Security of processing',
        subtitle:
          'We implement <strong>appropriate technical and organisational measures</strong> to protect personal data (Art. 32 GDPR), including:',
        list: [
          'Encryption of data in transit.',
          'Strict role-based access control.',
          'Multi-factor authentication for admin accounts.',
          'Regular vulnerability management and security testing.',
          'Continuous monitoring and logging.',
        ],
      },
      '9': {
        title: '9 | Your rights',
        subtitle: 'You may, at any time and free of charge, exercise the following rights :',
        list: [
          'Access your data.',
          'Rectify inaccurate or incomplete data.',
          'Erase data when legally possible.',
          'Restrict processing while a dispute is examined.',
          'Object to processing based on legitimate interest or to direct marketing.',
          'Port your data in a structured, machine-readable format.',
          'Withdraw consent (newsletters, cookies) at any time.',
        ],
        complaint:
          'Requests: <strong>dpo@skoleom.com</strong> – response within one month.<br>  You may also lodge a complaint with the <strong>CNIL</strong>  (3 Place de Fontenoy, 75007 Paris, <customLink>[www.cnil.fr](https://www.cnil.fr)</customLink>).',
      },
      '10': {
        title: '10 | Cookies',
        subtitle: 'The Site uses:',
        list: [
          '<strong>Essential cookies</strong> (session, CSRF) required for core functionality.',
          '<strong>Analytics cookies</strong> only if you grant consent via our cookie banner.',
          '<strong>Marketing pixels</strong> in e-mails, active only for subscribers.',
        ],
        note: 'You can adjust or revoke your cookie preferences at any time via the <0>Cookie settings</0> link in the footer.',
      },
      '11': {
        title: '11 | Children',
        content:
          'The Site is <strong>not intended for persons under 18 years of age.</strong> We do not knowingly collect personal data from anyone under 18. If we learn we have done so, we will delete the data promptly or seek parental authorisation.',
      },
      '12': {
        title: '12 | Changes to this Policy',
        content:
          'We may update this Policy to reflect changes in law, technology or our practices. Material changes will be announced at least 14 days in advance via banner or e-mail. The effective-date line at the top shows the latest version.',
      },
      '13': {
        title: '13 | Contact',
        content:
          'General enquiries – hi@skoleom.com.<br> Privacy enquiries & DPO – dpo@skoleom.com.',
      },
    },
  },
  termsOfUse: {
    title: 'SKOLEOM – Website Terms of Use (CGU)',
    published: 'Published 21 May 2025',
    sections: {
      '1': {
        title: '1 | Acceptance & Legal Capacity',
        content:
          'BY ACCESSING, BROWSING OR USING <customLink>https://skoleom.com</customLink> ("the Site"), YOU AGREE TO THESE TERMS OF USE. PLEASE READ THEM CAREFULLY BEFORE CONTINUING.',
        content2:
          'Use of the Site is restricted to natural persons aged 18 or over who have full legal capacity.',
      },
      '2': {
        title: '2 | Definitions',
        items: [
          {
            description:
              '<strong>"Skoleom Group" / "Provider" / "we"</strong> : Skoleom Group, a société par actions simplifiée with share capital of €194 138 367, registered with the RCS Évry under No. 939 506 796, having its registered office at 42 Cours Pierre Vasseur, 91120 Palaiseau, France (hi@skoleom.com).',
          },
          {
            description:
              '<strong>"User" / "you"</strong> : Any visitor to the Site, whether or not an account is created.',
          },
          {
            description:
              '<strong>"Services"</strong>  : Digital services provided via the Site, including:',
            subitems: [
              'access to Skoleom’s trans-media content catalogue',
              'interactive technology that embeds product information and "shoppable" features inside audiovisual content',
              'ancillary features such as user accounts, newsletters and community areas',
            ],
          },
        ],
      },
      '3': {
        title: '3 | Purpose',
        content:
          'These CGU govern <strong>access to and use of the Site and its online Services.</strong>',
        table: {
          headers: ['Document', 'Topic'],
          rows: [
            {
              document: '<strong>Privacy Policy</strong>',
              topic: 'Personal-data processing and GDPR rights',
            },
            {
              document: '<strong>CGV</strong>',
              topic: 'Commercial terms for purchasing products or paid services',
            },
          ],
        },
      },
      '4': {
        title: '4 | Access to the Services',
        list: [
          'The Site and Services are provided "as is" and "as available". Skoleom endeavours to ensure continuous availability but makes no warranty of uninterrupted or error-free operation.',
          'Skoleom may modify, suspend or discontinue any feature at any time for maintenance, security or business reasons.',
          'Users are responsible for their own internet connection and compatible device.',
        ],
      },
      '5': {
        title: '5 | User Accounts',
        content:
          'Creating an account may be required for certain features. You must provide accurate, current information and keep your credentials confidential. You are liable for all activity carried out under your login.',
      },
      '6': {
        title: '6 | Prohibited Conduct & Notice-and-Action',
        content: 'Users must <strong>not</strong>:',
        list: [
          'Upload or transmit viruses, malware, unlawful, defamatory, hateful or obscene content.',
          'Scrape, mine or extract data from the Site without written permission.',
          'Attempt unauthorised access to Skoleom’s systems or other users’ accounts.',
          'Reverse-engineer, decompile, copy, resell or exploit any part of the Site.',
          'Use the Site for spam or any unlawful solicitation.',
        ],
        notice:
          '<strong>Notice-and-action.</strong> If you believe content on the Site is unlawful, please e-mail <strong>legal@skoleom.com</strong> with (i) the URL, (ii) the legal reason for removal and (iii) your contact details. Skoleom will assess valid notices under the EU Digital Services Act and may remove or disable the content, notify the user concerned and/or inform authorities.',
      },
      '7': {
        title: '7 | Intellectual Property',
        content:
          'The Site, underlying code, SeContent® technology and all text, graphics, videos, trademarks and logos are owned by Skoleom or its licensors. You receive only a limited, non-transferable right to view the Site for personal, non-commercial purposes. Any other use requires prior written consent.',
      },
      '8': {
        title: '8 | Disclaimer & Limitation of Liability',
        content:
          'To the maximum extent permitted by law, Skoleom disclaims all warranties, express or implied, regarding the Site and Services. Skoleom is not liable for indirect or consequential damages, loss of profit, data or goodwill. Nothing in this clause limits liability for death, personal injury or fraud.',
      },
      '9': {
        title: '9 | Personal Data',
        content:
          'Personal information you provide is processed in accordance with our <strong>Privacy Policy</strong> (footer link). GDPR requests: dpo@skoleom.com.',
      },
      '10': {
        title: '10 | Modification & Moderation',
        content:
          'Skoleom may update these CGU at any time; the new version is effective upon publication (see publication date above). Skoleom may remove user content, suspend accounts or block access that violates these CGU or applicable law, with prior notice where legally required. Users may contest such decisions by replying to the notification e-mail.',
      },
      '11': {
        title: '11 | Governing Law & Dispute Resolution',
        content:
          'These CGU are governed by <strong>French law. Consumer mediation.</strong> Pursuant to Article L 612-1 of the French Consumer Code, Skoleom is finalising an agreement with a certified consumer mediator. The mediator’s contact details will be published here once the convention is signed. Failing amicable settlement or mediation, disputes fall under the <strong>exclusive jurisdiction of the courts of Évry (France).</strong>',
      },
      '12': {
        title: '12 | Legal Notice (publisher & host)',
        table: {
          headers: ['Item', 'Details'],
          rows: [
            {
              item: 'Website publisher',
              details:
                '<strong>SKOLEOM GROUP</strong> – SAS, €194 138 367 capital – RCS Évry 939 506 796 – Registered office: <strong>42 Cours Pierre Vasseur, 91120 Palaiseau, France</strong>',
            },
            {
              item: 'Publishing director',
              details: 'Mr Kevin RACOIS (President)',
            },
            { item: 'Contact', details: 'hi@skoleom.com' },
            { item: 'EU VAT', details: 'FR 51882561400' },
            {
              item: 'Hosting provider',
              details:
                '<strong>Amazon Web Services EMEA SARL</strong> – 38 av. John F. Kennedy, L-1855 Luxembourg – Tel. +352 26 50 86 11 – aws-EU-privacy@amazon.com',
            },
          ],
        },
      },
    },
  },
  cookiePreferences: {
    title: 'SKOLEOM — Cookie Policy / Cookie Preferences',
    lastUpdated: '(last updated: 21 May 2025)',
    sections: {
      '1': {
        title: '1 | Who sets cookies on the Skoleom Platform?',
        content:
          'Cookies and similar technologies (pixels, local storage, SDKs) on <strong>skoleom.com</strong>, our mobile apps and digital experiences (together, the "Platform") are placed either by <strong>Skoleom Group, SAS</strong> (publisher) or by carefully selected partners listed in Section 4.',
      },
      '2': {
        title: '2 | What is a cookie?',
        content:
          'A cookie is a small text file stored on your device by your browser. It allows a website to recognise your device on future visits. Pixels and SDKs work in a similar way for mobile apps.',
      },
      '3': {
        title: '3 | Why do we use cookies?',
        table: {
          headers: ['Category', 'Purpose', 'Duration', 'Can you refuse?'],
          rows: [
            {
              category: 'Strictly necessary',
              purpose: 'Core site functions, security, basket & checkout, consent storage',
              duration: 'Session – 13 months',
              canRefuse: 'No (browser settings only)',
            },
            {
              category: 'Performance / Analytics',
              purpose: 'Audience measurement, crash reporting, A/B testing',
              duration: '13 months',
              canRefuse: 'Yes',
            },
            {
              category: 'Personalisation',
              purpose: 'Remember size, language, location, wishlist',
              duration: '6 months',
              canRefuse: 'Yes',
            },
            {
              category: 'Advertising & Social Media',
              purpose: 'Show ads tailored to your interests; let you share content',
              duration: '3–12 months',
              canRefuse: 'Yes',
            },
          ],
        },
        note: '*Maximum durations follow CNIL recommendations; individual lifetimes are shown in the consent centre.',
      },
      '4': {
        title: '4 | Which third parties receive data?',
        table: {
          headers: ['Partner', 'Purpose', 'Privacy policy'],
          rows: [
            {
              partner: 'Google Analytics 4',
              purpose: 'Aggregate statistics, event tracking',
              policy: 'https://policies.google.com/privacy',
            },
            {
              partner: 'Meta Pixel / Conversions API',
              purpose: 'Ad personalisation & performance',
              policy: 'https://www.facebook.com/privacy/policy',
            },
            {
              partner: 'Oracle Monetizer Studio',
              purpose: 'On-site search optimisation',
              policy: 'https://www.oracle.com/legal/privacy/',
            },
          ],
        },
        note: 'The full, dynamic list (including cookie names and expiry) appears in the "<strong>Cookie Settings</strong>" panel accessible from every page footer.',
      },
      '5': {
        title: '5 | How do you manage your cookie preferences?',
        list: [
          '<strong>Consent banner</strong> - On your first visit you are asked to accept, refuse or customise cookies.',
          '<strong>Cookie Settings</strong> - Click the footer link at any time to change or withdraw consent.',
          '<strong>Browser controls</strong> - You can delete cookies or enable "Do Not Track" in your browser settings.',
          '<strong>Mobile OS controls</strong> - iOS > Settings > Privacy > Advertising > "Limit Ad Tracking"; Android > Settings > Google > Ads > "Opt out".',
        ],
        note: 'Refusing Performance, Personalisation or Advertising cookies may degrade certain features (e.g., product recommendations or social sharing), but the core store and checkout will still function.',
      },
      '6': {
        title: '6 | Legal basis and retention',
        list: [
          'Strictly necessary cookies are stored on the basis of Skoleom’s <strong>legitimate interest</strong> in operating a secure, functional site (Art. 6-1-f GDPR).',
          'All other cookies are stored only after your <strong>explicit consent</strong> (Art. 6-1-a).',
          'Consent records are kept for 13 months; cookie lifetimes never exceed the table in Section 3.',
        ],
      },
      '7': {
        title: '7 | International transfers',
        content:
          'Some partners (e.g., AWS, Meta) process data outside the EEA. Transfers are covered by Standard Contractual Clauses or the EU–US Data Privacy Framework.',
      },
      '8': {
        title: '8 | Your rights',
        content:
          'You may exercise your GDPR rights (access, erasure, portability, objection, withdrawal of consent) at any time: <strong>dpo@skoleom.com</strong>. For full details see our Privacy Policy.',
      },
    },
  },
  affiliate: {
    title: 'FTC Disclosure Compliance Rules',
    description: {
      phraseOne:
        '(This clause applies to all Skoleom ecosystem websites, apps, and SaaS-based CRMs that use affiliate links.)',
      phraseTwo:
        'In 2015, the Federal Trade Commission (FTC) published new disclosure compliance rules to ensure that readers and viewers of online media understand whether a blogger, publisher, or other content producer is sponsored, endorsed, or affiliated with another company (brand).',
      phraseThree:
        'Readers need to know if the content publisher earns money by sharing a link or product.',
      phraseFour:
        'Pursuant to the FTC’s guidelines, please note the following regarding links and posts on this site:',
      phraseFive:
        'Some websites, apps, and SaaS-based CRMs in the Skoleom ecosystem use affiliate links, through which we may earn a commission on the sale of certain items',
    },
    affiliation: {
      title: 'What Are Affiliate Links?',
      phraseOne:
        'Purchases are made through external affiliated websites. When a viewer clicks on an affiliate link on any of the Skoleom ecosystem’s sites, apps, or SaaS CRMs to buy or integrate an item into their video, the viewer is effectively purchasing the item within the Skoleom ecosystem. Skoleom then handles the purchase from the final seller, who ships the item directly to the viewer.',
      phraseTwo:
        'Amazon and/or other companies pay Skoleom a commission or other form of compensation for helping drive customers to their websites.',
      phraseThree:
        'Prices remain exactly the same for readers whether they purchase via an affiliate link or a non-affiliate link. Clicking on an affiliate link versus a non-affiliate link does not change the price or anything else for the visitor.',
    },
    programmeAffiliation: {
      title: 'Skoleom’s Main Types of Affiliate Programs',
      phraseOne:
        'Amazon Affiliate Links. Skoleom participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide website owners with a means of earning commissions by linking to Amazon.com and affiliated sites, as well as other websites that may be part of Amazon Service LLC’s affiliate program.',
      phraseTwo:
        'Product Affiliate Links. If you click a product affiliate link and purchase the product, we receive a percentage of the sale or other form of compensation.',
    },
    contact: {
      title: 'Contact',
    },
  },
  home: {
    hero: {
      downloadPickerHintAndroid: 'Available on Google Play',
      downloadPickerHintIOS: 'Available on the App Store',
      downloadPickerHintDefault: 'Choose your platform',
      title: 'Discover the global ecosystem of Skoleom Group',
      description: {
        intro: 'Skoleom Group is revolutionizing ',
        economy: 'the digital economy',
        mid: ' by enabling instant purchasing at the heart of audiovisual content. Connected to more than ',
        ott: '2 000 OTT platforms',
        join: ' and ',
        web: 'billions of websites',
        outro: ', our technology turns every screen into an interactive point of sale.',
      },
      download: 'Download',
      application: 'the app',
      extension: 'the extension',
      watchVideo: 'Watch video',
      ottMarqueeLabel: 'Streaming and OTT platforms',
      logoWtbAlt: 'Watch. Touch. Buy.',
      videoAria: 'Skoleom video',
      studioAria: 'Skoleom Studio',
      tagline1: 'EVERY VIDEO BECOMES A TRUE IMMERSIVE STORE:',
      tagline2:
        'A FLUID, ELEGANT AND INTERACTIVE EXPERIENCE, WHERE YOU DISCOVER, TOUCH AND BUY INSTANTLY WHAT YOU SEE.',
      extensionRegionModal: {
        kicker: 'Skoleom Extension',
        title: 'Extension Unavailable',
        body: 'This extension is not yet available in your region.',
        close: 'Close',
      },
    },
    skoletoonsHero: {
      kicker: 'Shoppable fashion, beauty and lifestyle',
      title: "SkoleToon's",
      subtitle:
        'An audiovisual store designed to turn every fashion inspiration into an interactive experience.',
      body: 'Discover a premium universe where looks, products and moments become available at exactly the right time.',
      discover: 'Discover',
      videoTitle: "SkoleToon's video",
      modalTitle: 'Store under development',
      modalBody:
        "The SkoleToon's store is still under development. It will be available soon inside the Skoleom ecosystem.",
      modalClose: 'Close',
    },
    actions: {
      discoverMagic: 'Discover the magic',
    },
    welcome: {
      part1: 'Welcome to the ',
      part2: 'future of ',
      part3: 'retail media',
      part4: 'and ',
      part5: 'transmedia',
    },
    page: {
      heroClose: 'Close',
      interactiveKicker: 'An interactive experience',
      interactiveSubtitle:
        'From set to screen,\nSkoleom Studio brings your creations to life.\nThe immersion continues.',
      ecosystemKicker: 'One universe. Multiple possibilities.',
      ecosystemTitle: 'The Skoleom\necosystem',
      ecosystemIntro:
        'Over 2,000 platforms, billions of screens: the Skoleom ecosystem connects creators, brands and audiences in an immersive experience where every piece of content becomes a store.',
      ecosystemStats: {
        products: 'products and services made shoppable with one touch.',
        countries: 'Countries connected to the ecosystem.',
        detection: 'To detect and activate what you are watching.',
        alwaysOpen: 'Audiovisual stores always open.',
      },
      partnersTitle: 'Partner brands',
      boutiquesCta: 'Discover our',
      boutiquesTitle: 'Audiovisual Stores',
      boutiquesSubtitle:
        'An immersive ecosystem. More than 50 web applications. One limit: your imagination.',
      partnersSearchPlaceholder: 'Search a brand (e.g. Decathlon, Netflix, Intersport...)',
      partnersSearchAria: 'Search a partner brand',
    },
    news: {
      badge: 'New releases',
    },
    boutiques: {
      title: 'Discover our Audiovisual Stores',
      searchPlaceholder: 'Search a Skoleom site (e.g. market, sport, ott...)',
    },
    sections: {
      welcome: 'Welcome to the future of retail media and transmedia',
      how: 'How Skoleom works',
      moment: 'Every moment. Becomes. An opportunity.',
      interactive: 'An interactive experience',
      universe: 'One universe. Multiple possibilities.',
      ecosystem: 'The Skoleom ecosystem',
      partners: 'Partner brands',
    },
    descriptions: {
      detect:
        'The moment you watch, Skoleom recognises what appears on screen and turns it into a purchase — one touch, without leaving the content.',
    },
    stats: {
      storePages: 'Audiovisual Store pages per shop.',
    },
  },
  public: {
    retailMediaPlatform: {
      kicker: 'Retail Media',
      titlePrefix: 'The retail media platform that turns',
      titleHighlight: 'video into commerce',
      description:
        'Skoleom unifies shoppable video, measurement and cross-platform distribution into a single retail media platform — reach audiences inside the content they already watch.',
      ctaBusiness: 'Business solutions',
      ctaTechnology: 'Our technology',
      pillars: {
        videoCommerce: {
          title: 'Video commerce',
          description:
            'Turn any video into a shoppable storefront. Every product on screen becomes buyable in one tap, with no redirection.',
        },
        unifiedMeasurement: {
          title: 'Unified measurement',
          description:
            'Track every impression, click and conversion across platforms in real time — one dashboard, full attribution.',
        },
        crossPlatform: {
          title: 'Cross-platform reach',
          description:
            'Distribute campaigns across 2,000+ OTT platforms, social and the open web from a single integration.',
        },
      },
    },
    interactiveVideoCommerce: {
      kicker: 'Interactive video commerce',
      titlePrefix: 'Make every video',
      titleHighlight: 'instantly shoppable',
      description:
        'Skoleom embeds interactive purchase points directly inside your videos. Viewers buy what they see — instantly, without ever leaving the content.',
      ctaTalk: 'Talk to an expert',
      ctaOverview: 'See the overview',
      benefits: {
        conversion: 'Higher conversion — buying happens at the moment of desire.',
        reporting: 'Real-time reporting — every interaction measured and attributed.',
        friction: 'Zero friction — no redirection, no app switching, no checkout drop-off.',
      },
    },
    hub: {
      groupCarousel: {
        kicker: 'All entities',
        title: 'Group',
        subtitle: 'The satellite companies and divisions of the Skoleom group.',
        searchPlaceholder: 'Search (e.g. studio, invest, lab...)',
        ariaLabel: 'Group entities carousel',
      },
    },
    skoleomTouch: {
      introSubtitle: 'Spot the hidden products in the video and unlock an exclusive reward.',
      startCta: 'Start the experience',
      productsToFind: 'Products to find',
      exclusiveReward: 'Exclusive reward',
      gameModalTitle: 'Experience under development',
      gameModalBody:
        'The Skoleom Touch experience is still under development. It will be available soon.',
      gameModalClose: 'Close',
      hint: 'Tap the products hidden in the video',
      productsFound: 'products found',
      openCart: 'Open cart',
      buy: 'Add',
      inStock: 'In stock',
      cartTitle: 'Your cart',
      emptyCartTitle: 'Your cart is empty',
      emptyCartSubtitle: 'Tap the products hidden in the video to add them.',
      subtotal: 'Subtotal',
      cashback: 'Cashback',
      checkout: 'Place order',
      clearCart: 'Clear cart',
      confirmClearCart: 'Clear the cart?',
      total: 'Total',
      alertSuccess: 'Order confirmed!',
      victoryTitle: 'Congratulations!',
      victorySubtitle: 'You found all {{count}} hidden products.',
      time: 'Time',
      score: 'Score',
      rewardUnlocked: 'Reward unlocked',
      rewardSubtitle: 'Use this code on your next purchase on Skoleom.',
      finalizeOrder: 'Finalize order',
      toasts: {
        oops: 'Oops',
        emptyCart: 'Empty cart',
      },
    },
    stores: {
      hero: {
        titleLine1: 'Discover our',
        titleLine2: 'Audiovisual Stores',
        subtitle:
          'An immersive ecosystem. More than 50 web applications. One limit: your imagination.',
      },
      search: {
        placeholder: 'Search a store or brand',
        aria: 'Search a store or brand',
      },
      sections: {
        official: 'Official stores',
        brands: 'Available brands',
      },
      showcase: {
        kicker: 'Featured stores',
        title: 'Flagship universes',
        subtitle: 'Sport, OTT, music and gaming — a look at iconic audiovisual stores.',
      },
      carousel: {
        kicker: 'All stores',
        title: 'Audiovisual stores',
        subtitle: 'Discover all stores available in the Skoleom ecosystem.',
        searchPlaceholder: 'Search a store (e.g. sport, music, games...)',
        ariaLabel: 'Audiovisual stores carousel',
      },
    },
    howItWorks: {
      hero: {
        kicker: 'How it works',
        subtitle: 'Inside the video. At the same moment. Without friction.',
      },
      steps: {
        '01': {
          title: 'AI RECOGNITION',
          desc: 'Our AI identifies products, objects and moments inside any content.',
        },
        '02': {
          title: 'SMART CAPSULES',
          desc: 'Interactive capsules appear in real time, without interruption.',
        },
        '03': {
          title: 'ONE TAP',
          desc: 'One click. No redirect. No friction. Instant action.',
        },
        '04': {
          title: 'BUY IN CONTEXT',
          desc: 'Purchase completed without leaving the content you love.',
        },
      },
      demo: {
        titlePrefix: 'Discover the',
        titleHighlight: 'magic',
        cta: 'Launch the interactive demo',
      },
      showcase: {
        kicker: 'Consumer universe',
        title: 'Featured stores',
        subtitle:
          'Discover interactive experiences accessible to everyone, integrated into your favorite content.',
      },
      carousel: {
        kicker: 'All stores',
        title: 'For everyone',
        subtitle: 'All consumer stores in the Skoleom ecosystem.',
        searchPlaceholder: 'Search (e.g. page, shop, magazine...)',
        ariaLabel: 'For everyone stores carousel',
      },
    },
    technology: {
      hero: {
        kicker: 'SeSync · The technology',
        titlePrefix: 'Connected to more than',
        titleMiddle: 'and',
      },
      features: {
        seamless: 'A seamless shopping experience directly inside videos',
        compatible: 'Compatible with your favorite brands and creators',
        secure: 'Secure and GDPR compliant',
      },
      download: 'Download the extension',
      studio: {
        titleLine1: 'The monetization tool',
        titleLine2Prefix: 'the most',
        titleLine2Highlight: 'powerful in the world',
        description:
          'ERP/DCM SaaS dedicated to managing, monetizing and analyzing interactive video content. Connected to 300+ APIs. Full control: sales, audiences, campaigns, retargeting, product performance.',
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
