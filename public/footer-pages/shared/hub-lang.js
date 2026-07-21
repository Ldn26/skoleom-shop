/** AUTO-GENERATED — source: footer-pages/src/ — npm run footer:build */
(() => {
  // footer-pages/src/hub-lang.ts
  (function () {
    const STORAGE_KEY = 'skoleom-language';
    const DEFAULT = 'fr';
    const ZONES = [
      { id: 'international', label: 'International', codes: ['en'] },
      { id: 'europe', label: 'Europe', codes: ['fr', 'de', 'it', 'nl', 'ru'] },
      { id: 'americas', label: 'Am\xE9riques', codes: ['es', 'pt'] },
      { id: 'mena', label: 'Moyen-Orient & Afrique du Nord', codes: ['ar'] },
      { id: 'asiaPacific', label: 'Asie-Pacifique', codes: ['zh', 'hi', 'id'] },
      { id: 'africa', label: 'Afrique', codes: ['sw'] },
    ];
    const LANGS = {
      en: { nativeName: 'English', flagImg: 'https://flagcdn.com/w40/gb.png' },
      fr: { nativeName: 'Fran\xE7ais', flagImg: 'https://flagcdn.com/w40/fr.png' },
      de: { nativeName: 'Deutsch', flagImg: 'https://flagcdn.com/w40/de.png' },
      it: { nativeName: 'Italiano', flagImg: 'https://flagcdn.com/w40/it.png' },
      nl: { nativeName: 'Nederlands (Vlaams)', flagImg: 'https://flagcdn.com/w40/be.png' },
      ru: {
        nativeName: '\u0420\u0443\u0441\u0441\u043A\u0438\u0439',
        flagImg: 'https://flagcdn.com/w40/ru.png',
      },
      es: { nativeName: 'Espa\xF1ol', flagImg: 'https://flagcdn.com/w40/es.png' },
      pt: { nativeName: 'Portugu\xEAs', flagImg: 'https://flagcdn.com/w40/br.png' },
      ar: {
        nativeName: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629',
        flagImg: 'https://flagcdn.com/w40/sa.png',
      },
      zh: { nativeName: '\u4E2D\u6587', flagImg: 'https://flagcdn.com/w40/cn.png' },
      hi: {
        nativeName: '\u0939\u093F\u0928\u094D\u0926\u0940',
        flagImg: 'https://flagcdn.com/w40/in.png',
      },
      id: { nativeName: 'Bahasa', flagImg: 'https://flagcdn.com/w40/id.png' },
      sw: { nativeName: 'Kiswahili', flagImg: 'https://flagcdn.com/w40/ke.png' },
    };
    function readLang() {
      try {
        return localStorage.getItem(STORAGE_KEY) || DEFAULT;
      } catch {
        return DEFAULT;
      }
    }
    function writeLang(code) {
      try {
        localStorage.setItem(STORAGE_KEY, code);
      } catch {}
    }
    function chevron(open) {
      return `<svg class="hub-lang-chevron${open ? ' is-open' : ''}" width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
    }
    function mount(root) {
      if (!root || root.dataset.hubLangMounted === '1') return;
      root.dataset.hubLangMounted = '1';
      const placement = root.dataset.hubLangPlacement || 'footer';
      let current = readLang();
      if (!LANGS[current]) current = DEFAULT;
      let open = false;
      let panel = null;
      const wrap = document.createElement('div');
      wrap.className = 'hub-lang';
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'hub-lang-btn';
      const ariaChange = () => {
        try {
          const l = localStorage.getItem(STORAGE_KEY) || DEFAULT;
          return l === 'en' ? 'Change language' : 'Changer la langue';
        } catch {
          return 'Changer la langue';
        }
      };
      btn.setAttribute('aria-label', ariaChange());
      btn.setAttribute('aria-haspopup', 'listbox');
      btn.setAttribute('aria-expanded', 'false');
      function renderBtn() {
        const lang = LANGS[current];
        btn.innerHTML = `<img class="hub-lang-flag" src="${lang.flagImg}" alt="" aria-hidden="true" width="20" height="14"/>${current.toUpperCase()}${chevron(open)}`;
      }
      function menuHtml() {
        return ZONES.map((zone, zi) => {
          const opts = zone.codes
            .map((code) => {
              const lang = LANGS[code];
              const active = code === current;
              return `<button type="button" class="hub-lang-option${active ? ' is-active' : ''}" data-lang="${code}" role="option" aria-selected="${active}" lang="${code}">
              <img class="hub-lang-flag hub-lang-flag--lg" src="${lang.flagImg}" alt="" aria-hidden="true" width="24" height="16"/>
              <span class="hub-lang-native">${lang.nativeName}</span>
              <span class="hub-lang-code">${code}</span>
            </button>`;
            })
            .join('');
          const sep = zi > 0 ? ' hub-lang-group--sep' : '';
          return `<div class="hub-lang-group${sep}" role="group" aria-label="${zone.label}">
          <p class="hub-lang-zone">${zone.label}</p>${opts}
        </div>`;
        }).join('');
      }
      function positionPanel() {
        if (!panel) return;
        const rect = btn.getBoundingClientRect();
        const width = Math.min(320, window.innerWidth - 16);
        const narrow = window.innerWidth < 768;
        const gap = 12;
        panel.style.width = `${narrow ? window.innerWidth - 16 : width}px`;
        panel.style.left = `${narrow ? 8 : Math.max(8, rect.right - width)}px`;
        if (placement === 'header') {
          const shell = document.getElementById('hub-header');
          const anchor = shell?.querySelector('.hub-top') || btn;
          const headerRect = anchor.getBoundingClientRect();
          panel.style.top = `${headerRect.bottom + gap}px`;
          panel.style.bottom = 'auto';
        } else {
          panel.style.top = 'auto';
          panel.style.bottom = `${window.innerHeight - rect.top + gap}px`;
        }
      }
      function close() {
        open = false;
        btn.setAttribute('aria-expanded', 'false');
        if (panel) {
          panel.remove();
          panel = null;
        }
        renderBtn();
      }
      function openMenu() {
        open = true;
        btn.setAttribute('aria-expanded', 'true');
        renderBtn();
        panel = document.createElement('div');
        panel.className = 'hub-lang-panel';
        panel.setAttribute('role', 'listbox');
        panel.setAttribute('aria-label', ariaChange());
        panel.innerHTML = menuHtml();
        document.body.appendChild(panel);
        positionPanel();
        panel.querySelectorAll('[data-lang]').forEach((el) => {
          el.addEventListener('click', () => {
            current = el.getAttribute('data-lang') || DEFAULT;
            writeLang(current);
            document.documentElement.lang = current;
            close();
            location.reload();
          });
        });
      }
      btn.addEventListener('click', () => {
        if (open) close();
        else openMenu();
      });
      renderBtn();
      wrap.appendChild(btn);
      root.replaceWith(wrap);
      const onDoc = (e) => {
        if (!open) return;
        const t = e.target;
        if (t instanceof Node && (wrap.contains(t) || panel?.contains(t))) return;
        close();
      };
      const onKey = (e) => {
        if (e.key === 'Escape') close();
      };
      const onResize = () => positionPanel();
      document.addEventListener('click', onDoc);
      document.addEventListener('keydown', onKey);
      window.addEventListener('resize', onResize);
      window.addEventListener('scroll', onResize, { passive: true });
    }
    function init() {
      document.querySelectorAll('[data-hub-lang]:not([data-hub-lang-mounted])').forEach(mount);
    }
    window.HubLang = { init };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();
})();
