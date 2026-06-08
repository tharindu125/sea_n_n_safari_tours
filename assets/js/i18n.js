/* ============================================
   Sea & Safari Tours – Internationalization
   Languages: English, German, French
   ============================================ */

(function () {
  const STORAGE_KEY = 'sst-lang';
  const SUPPORTED = ['en', 'de', 'fr'];
  const DEFAULT_LANG = 'en';

  const LANG_META = {
    en: { label: 'English', code: 'EN', flag: '🇬🇧', htmlLang: 'en', ogLocale: 'en_US' },
    de: { label: 'Deutsch', code: 'DE', flag: '🇩🇪', htmlLang: 'de', ogLocale: 'de_DE' },
    fr: { label: 'Français', code: 'FR', flag: '🇫🇷', htmlLang: 'fr', ogLocale: 'fr_FR' }
  };

  let currentLang = DEFAULT_LANG;
  let onChangeCallbacks = [];

  function getNested(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : null), obj);
  }

  function interpolate(str, vars) {
    if (!vars || typeof str !== 'string') return str;
    return str.replace(/\{(\w+)\}/g, (_, key) => (vars[key] != null ? vars[key] : `{${key}}`));
  }

  function t(key, vars) {
    const dict = window.SST_TRANSLATIONS?.[currentLang];
    const fallback = window.SST_TRANSLATIONS?.[DEFAULT_LANG];
    let value = getNested(dict, key) ?? getNested(fallback, key) ?? key;
    return interpolate(value, vars);
  }

  function getTourIdFromHref(href) {
    if (!href) return null;
    const match = href.match(/\/([^/]+)\.html$/);
    return match ? match[1] : null;
  }

  function getStoredLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return SUPPORTED.includes(stored) ? stored : null;
    } catch {
      return null;
    }
  }

  function detectBrowserLang() {
    const lang = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(lang) ? lang : DEFAULT_LANG;
  }

  function getLang() {
    return currentLang;
  }

  function setLang(lang, persist = true) {
    if (!SUPPORTED.includes(lang)) return;
    currentLang = lang;
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ }
    }
    document.documentElement.lang = LANG_META[lang].htmlLang;
    applyTranslations();
    onChangeCallbacks.forEach(cb => cb(lang));
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  }

  function onLanguageChange(callback) {
    onChangeCallbacks.push(callback);
  }

  function applyDataI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');
      let vars = null;
      const varsAttr = el.getAttribute('data-i18n-vars');
      if (varsAttr) {
        try { vars = JSON.parse(varsAttr); } catch { /* ignore */ }
      }
      const value = t(key, vars);
      if (attr) {
        el.setAttribute(attr, value);
      } else if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
  }

  const NAV_HREF_KEYS = {
    'index.html': 'nav.home',
    'tours.html': 'nav.tours',
    'booking.html': 'nav.bookNow',
    'about.html': 'nav.about',
    'contact.html': 'nav.contact',
    'faq.html': 'nav.faq',
    'gallery.html': 'nav.gallery',
    'blog.html': 'nav.blog'
  };

  function translateNavLinks() {
    document.querySelectorAll('.nav-link-caret').forEach(link => {
      const toursLabel = link.querySelector('.nav-tours-label');
      if (toursLabel) {
        toursLabel.textContent = t('nav.tours');
        return;
      }
      link.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
          node.textContent = ` ${t('nav.tours')} `;
        }
      });
    });

    document.querySelectorAll('header .nav a.nav-link, .mobile-nav a.nav-link').forEach(link => {
      if (link.classList.contains('nav-sub')) {
        const tourId = getTourIdFromHref(link.getAttribute('href'));
        if (tourId && t(`tours.${tourId}.name`) !== `tours.${tourId}.name`) {
          link.textContent = t(`tours.${tourId}.name`);
        }
        return;
      }

      const file = (link.getAttribute('href') || '').split('/').pop().split('#')[0];
      const isMobileAllTours = link.closest('.mobile-nav') && file === 'tours.html';
      const key = isMobileAllTours ? 'nav.allTours' : NAV_HREF_KEYS[file];
      if (!key) return;

      const mobileText = link.querySelector('.mobile-nav-text');
      if (mobileText) {
        mobileText.textContent = t(key);
        return;
      }

      if (link.classList.contains('nav-extra-link')) {
        const label = link.querySelector('span[data-i18n], span:not(.link-arrow):not(.mobile-nav-icon)');
        if (label) label.textContent = t(key);
        return;
      }

      const labelSpan = link.querySelector('span:not(.link-arrow):not(.mobile-nav-icon):not(.nav-tours-loc)');
      if (labelSpan && !link.querySelector('svg')) {
        labelSpan.textContent = t(key);
      } else if (!link.querySelector('svg') && !link.querySelector('.mobile-nav-icon')) {
        link.textContent = t(key);
      }
    });

    document.querySelectorAll('.dropdown-menu a:not(.dropdown-all)').forEach(link => {
      const tourId = getTourIdFromHref(link.getAttribute('href'));
      if (!tourId) return;
      const nameEl = link.querySelector('.dropdown-tour-name');
      const translated = t(`tours.${tourId}.name`);
      if (nameEl) nameEl.textContent = translated;
      else link.textContent = translated;
    });

    document.querySelectorAll('.dropdown-all:not(.dropdown-all-combos)').forEach(link => {
      const arrow = link.querySelector('.link-arrow');
      link.textContent = '';
      link.append(document.createTextNode(t('nav.viewAllTours') + ' '));
      if (arrow) link.appendChild(arrow);
      else link.insertAdjacentHTML('beforeend', '<span class="link-arrow" aria-hidden="true">&rarr;</span>');
    });

    if (typeof refreshComboDropdownLabels === 'function') refreshComboDropdownLabels();

    document.querySelectorAll('.nav-cta, .mobile-nav .btn.btn-primary').forEach(btn => {
      if (!btn.querySelector('svg')) btn.textContent = t('nav.reserveTour');
    });

    document.querySelectorAll('.nav-pill-faq span, .nav-pill-gallery span').forEach((span, i, arr) => {
      const parent = span.closest('.nav-pill-faq, .nav-pill-gallery');
      if (parent?.classList.contains('nav-pill-faq')) span.textContent = t('nav.faq');
      if (parent?.classList.contains('nav-pill-gallery')) span.textContent = t('nav.gallery');
    });

    document.querySelectorAll('.mobile-nav-label').forEach(label => {
      const text = label.textContent.trim().toLowerCase();
      if (text === 'menu') label.textContent = t('nav.menu');
      else if (text.startsWith('popular tours')) label.textContent = t('nav.popularTours', { location: 'Mirissa' });
      else if (text === 'discover') label.textContent = t('nav.discover');
    });

    document.querySelectorAll('.mobile-nav-view-all').forEach(link => {
      link.innerHTML = `${t('nav.viewAllTours')} <span class="link-arrow" aria-hidden="true">&rarr;</span>`;
    });

    document.querySelectorAll('.mobile-nav-wa').forEach(link => {
      const icon = link.querySelector('.mobile-nav-wa-icon');
      link.textContent = '';
      if (icon) link.appendChild(icon);
      else link.insertAdjacentHTML('afterbegin', '<span class="mobile-nav-wa-icon" aria-hidden="true"></span> ');
      link.append(document.createTextNode(t('common.chatWhatsApp')));
    });
  }

  function translateFooter() {
    document.querySelectorAll('.footer-tagline').forEach(el => { el.textContent = t('footer.tagline'); });
    document.querySelectorAll('.footer-actions .btn-primary').forEach(el => { el.textContent = t('footer.bookTour'); });
    document.querySelectorAll('.footer-actions .btn-whatsapp').forEach(el => { el.textContent = t('common.whatsapp'); });

    document.querySelectorAll('.footer-col h4').forEach(h4 => {
      const text = h4.textContent.trim().toLowerCase();
      if (text === 'explore') h4.textContent = t('footer.explore');
      else if (text.includes('popular')) h4.textContent = t('footer.popularTours');
      else if (text.includes('touch')) h4.textContent = t('footer.getInTouch');
    });

    const footerLinkMap = {
      'index.html': 'nav.home',
      'tours.html': 'footer.allTours',
      'booking.html': 'nav.bookNow',
      'about.html': 'footer.aboutUs',
      'contact.html': 'nav.contact',
      'faq.html': 'nav.faq',
      'gallery.html': 'nav.gallery',
      'blog.html': 'nav.blog'
    };

    document.querySelectorAll('.footer-col ul a').forEach(link => {
      const file = (link.getAttribute('href') || '').split('/').pop();
      const tourId = getTourIdFromHref(link.getAttribute('href'));
      if (tourId && t(`tours.${tourId}.name`) !== `tours.${tourId}.name`) {
        link.textContent = t(`tours.${tourId}.name`);
        return;
      }
      const key = footerLinkMap[file];
      if (key) link.textContent = t(key);
    });

    document.querySelectorAll('.footer-bottom p:first-child').forEach(el => {
      el.innerHTML = t('footer.copyright', { year: new Date().getFullYear() });
    });
  }

  function translateBreadcrumbs() {
    document.querySelectorAll('.breadcrumb a').forEach(link => {
      const file = (link.getAttribute('href') || '').split('/').pop();
      if (file === 'index.html') link.textContent = t('nav.home');
      else if (file === 'tours.html') link.textContent = t('nav.tours');
    });
  }

  function translateHeroSlides() {
    const slideKeys = ['overview', 'whale', 'turtle', 'crocodile', 'fishing', 'kayak', 'cooking'];
    document.querySelectorAll('.hero-slide').forEach((slide, i) => {
      const key = slide.dataset.i18nSlide || slideKeys[i];
      if (!key) return;

      const badge = slide.querySelector('.hero-badge');
      const title = slide.querySelector('.hero-title');
      const subtitle = slide.querySelector('.hero-subtitle');

      if (badge) badge.textContent = t(`hero.${key}.badge`);
      if (title) title.innerHTML = t(`hero.${key}.title`);
      if (subtitle) subtitle.textContent = t(`hero.${key}.subtitle`);

      slide.dataset.tab = t(`hero.${key}.tab`);
      slide.dataset.cta = t(`hero.${key}.cta`);
    });

    const bookBtn = document.querySelector('.hero-slide-cta-book');
    if (bookBtn) bookBtn.textContent = t('hero.bookTour');
    const discover = document.querySelector('.hero-scroll');
    if (discover) {
      const line = discover.querySelector('.hero-scroll-line');
      discover.textContent = '';
      discover.append(document.createTextNode(t('hero.discover')));
      if (line) discover.appendChild(line);
      else discover.insertAdjacentHTML('beforeend', '<span class="hero-scroll-line" aria-hidden="true"></span>');
    }

    const autoplayBtn = document.querySelector('.hero-autoplay-toggle');
    if (autoplayBtn) {
      const paused = autoplayBtn.getAttribute('aria-pressed') === 'true';
      autoplayBtn.setAttribute('aria-label', t(paused ? 'hero.playSlideshow' : 'hero.pauseSlideshow'));
    }
  }

  function translateStatsBar() {
    const keys = ['experience', 'travelers', 'tours', 'rating'];
    document.querySelectorAll('.stats-bar .stat-item, .stats-grid .stat-item').forEach((item, i) => {
      const span = item.querySelector('span');
      if (span && keys[i]) span.textContent = t(`stats.${keys[i]}`);
    });
  }

  function applyTranslations() {
    applyDataI18n();
    translateNavLinks();
    translateFooter();
    translateBreadcrumbs();
    translateHeroSlides();
    translateStatsBar();
    updateLangSwitcherUI();
  }

  function getTour(tourId, baseTour) {
    const tr = getNested(window.SST_TRANSLATIONS?.[currentLang], `tours.${tourId}`);
    if (!tr || currentLang === DEFAULT_LANG) return baseTour;
    return {
      ...baseTour,
      name: tr.name || baseTour.name,
      shortDesc: tr.shortDesc || baseTour.shortDesc,
      fullDesc: tr.fullDesc || baseTour.fullDesc,
      highlights: tr.highlights || baseTour.highlights,
      itinerary: tr.itinerary || baseTour.itinerary,
      included: tr.included || baseTour.included,
      excluded: tr.excluded || baseTour.excluded,
      duration: tr.duration || baseTour.duration,
      groupType: tr.groupType || baseTour.groupType,
      priceNote: tr.priceNote || baseTour.priceNote,
      packagesTitle: tr.packagesTitle || baseTour.packagesTitle,
      packagesDesc: tr.packagesDesc || baseTour.packagesDesc
    };
  }

  function getBlogPost(postId, basePost) {
    const pack = window.SST_BLOG_I18N?.[postId];
    const tr = pack?.[currentLang] || pack?.[DEFAULT_LANG];
    if (!tr) return basePost;
    return {
      ...basePost,
      title: tr.title || basePost.title,
      description: tr.description || basePost.description,
      excerpt: tr.excerpt || basePost.excerpt,
      lead: tr.lead || basePost.lead,
      categoryLabel: tr.categoryLabel || basePost.categoryLabel,
      readTime: tr.readTime || basePost.readTime,
      tourLabel: tr.tourLabel || basePost.tourLabel,
      content: tr.content || basePost.content
    };
  }

  function getCombo(comboId, baseCombo) {
    const tr = getNested(window.SST_TRANSLATIONS?.[currentLang], `combos.${comboId}`);
    if (!tr || currentLang === DEFAULT_LANG) return baseCombo;
    return {
      ...baseCombo,
      name: tr.name || baseCombo.name,
      badge: tr.badge || baseCombo.badge,
      desc: tr.desc || baseCombo.desc,
      fullDesc: tr.fullDesc || baseCombo.fullDesc,
      tours: tr.tours || baseCombo.tours,
      highlights: tr.highlights || baseCombo.highlights,
      itinerary: tr.itinerary || baseCombo.itinerary,
      included: tr.included || baseCombo.included,
      waText: tr.waText || baseCombo.waText
    };
  }

  function getFaqItems(baseItems) {
    const tr = window.SST_TRANSLATIONS?.[currentLang]?.faq;
    if (!tr || currentLang === DEFAULT_LANG) return baseItems;
    return baseItems.map((section, si) => ({
      category: tr[si]?.category || section.category,
      questions: section.questions.map((item, qi) => ({
        q: tr[si]?.questions?.[qi]?.q || item.q,
        a: tr[si]?.questions?.[qi]?.a || item.a
      }))
    }));
  }

  function injectLanguageSwitcher() {
    document.querySelectorAll('.header-inner').forEach(headerInner => {
      if (headerInner.querySelector('.lang-switcher')) return;

      const actions = headerInner.querySelector('.header-actions');
      const hamburger = headerInner.querySelector('.hamburger');
      const switcher = document.createElement('div');
      switcher.className = 'lang-switcher';
      switcher.innerHTML = `
        <button type="button" class="lang-switcher-btn" aria-haspopup="listbox" aria-expanded="false" aria-label="${t('lang.select')}">
          <svg class="lang-globe" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.75"/><path d="M3 12h18M12 3c2.5 2.8 4 6 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6-4 9s1.5 6.2 4 9" fill="none" stroke="currentColor" stroke-width="1.75"/></svg>
          <span class="lang-code">${LANG_META[currentLang].code}</span>
          <svg class="lang-chevron" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>
        </button>
        <ul class="lang-dropdown" role="listbox" aria-label="${t('lang.select')}">
          ${SUPPORTED.map(lang => `
            <li role="option">
              <button type="button" class="lang-option${lang === currentLang ? ' active' : ''}" data-lang="${lang}" aria-selected="${lang === currentLang}">
                <span class="lang-flag">${LANG_META[lang].flag}</span>
                <span>${LANG_META[lang].label}</span>
              </button>
            </li>
          `).join('')}
        </ul>
      `;

      if (actions) {
        if (hamburger) actions.insertBefore(switcher, hamburger);
        else actions.appendChild(switcher);
      } else if (hamburger) {
        headerInner.insertBefore(switcher, hamburger);
      } else {
        headerInner.appendChild(switcher);
      }

      const btn = switcher.querySelector('.lang-switcher-btn');
      const dropdown = switcher.querySelector('.lang-dropdown');

      btn.addEventListener('click', e => {
        e.stopPropagation();
        const open = switcher.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      switcher.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', e => {
          e.stopPropagation();
          setLang(option.dataset.lang);
          switcher.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        });
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.lang-switcher.open').forEach(sw => {
        sw.classList.remove('open');
        sw.querySelector('.lang-switcher-btn')?.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function updateLangSwitcherUI() {
    document.querySelectorAll('.lang-switcher').forEach(sw => {
      const btn = sw.querySelector('.lang-switcher-btn');
      if (!btn) return;
      btn.querySelector('.lang-code').textContent = LANG_META[currentLang].code;
      btn.setAttribute('aria-label', t('lang.select'));
      sw.querySelectorAll('.lang-option').forEach(opt => {
        const active = opt.dataset.lang === currentLang;
        opt.classList.toggle('active', active);
        opt.setAttribute('aria-selected', active ? 'true' : 'false');
      });
    });
  }

  function init() {
    currentLang = getStoredLang() || detectBrowserLang();
    document.documentElement.lang = LANG_META[currentLang].htmlLang;
    injectLanguageSwitcher();
    applyTranslations();
  }

  window.I18n = {
    t,
    getLang,
    setLang,
    init,
    onLanguageChange,
    applyTranslations,
    getTour,
    getCombo,
    getBlogPost,
    getFaqItems,
    SUPPORTED,
    LANG_META,
    DEFAULT_LANG
  };
})();
