// ============================================================
//  GYM X — script.js
//  Dynamic DOM generation, pricing toggle, mobile drawer,
//  hero gallery, smooth scroll, intersection observers, counters
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ──────────────────────────────────────────────────────────
  //  1. RENDER HERO STATS FROM data.js
  // ──────────────────────────────────────────────────────────
  const heroStatsContainer = document.getElementById('hero-stats');
  if (heroStatsContainer && typeof heroStats !== 'undefined') {
    heroStatsContainer.innerHTML = heroStats.map(s => `
      <div class="stat-pill">
        <span class="pill-icon">${s.icon}</span>
        <span>${s.label}</span>
      </div>
    `).join('');
  }

  // ──────────────────────────────────────────────────────────
  //  2. RENDER HERO 4-CARD IMAGE GALLERY
  // ──────────────────────────────────────────────────────────
  const heroGalleryContainer = document.getElementById('hero-gallery');
  if (heroGalleryContainer && typeof heroGallery !== 'undefined') {
    heroGalleryContainer.innerHTML = heroGallery.map(item => `
      <div class="gallery-card reveal" id="${item.id}">
        <div class="gallery-img-wrap">
          <img src="${item.img}" alt="${item.title}" loading="lazy" />
          <div class="gallery-overlay"></div>
          <span class="gallery-badge">${item.badge}</span>
        </div>
        <div class="gallery-info">
          <span class="gallery-cat">${item.category}</span>
          <h3 class="gallery-title">${item.title}</h3>
          <p class="gallery-desc">${item.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // ──────────────────────────────────────────────────────────
  //  3. RENDER COUNTER STATS
  // ──────────────────────────────────────────────────────────
  const statsGrid = document.getElementById('stats-grid');
  if (statsGrid && typeof counterStats !== 'undefined') {
    statsGrid.innerHTML = counterStats.map(s => `
      <div class="stat-item reveal">
        <div class="stat-number" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');
  }

  // ──────────────────────────────────────────────────────────
  //  4. RENDER FACILITIES BENTO GRID
  // ──────────────────────────────────────────────────────────
  const bentoGrid = document.getElementById('bento-grid');
  if (bentoGrid && typeof facilitiesData !== 'undefined') {
    bentoGrid.innerHTML = facilitiesData.map(f => `
      <article class="facility-card size-${f.size} reveal" id="facility-${f.id}">
        <div>
          <div class="facility-header-row">
            <div class="facility-tag">${f.tag}</div>
            <span class="facility-icon">${f.icon}</span>
          </div>
          <h3 class="facility-title">${f.title}</h3>
          <p class="facility-desc">${f.description}</p>
        </div>
        <div class="facility-arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </article>
    `).join('');
  }

  // ──────────────────────────────────────────────────────────
  //  5. RENDER SCHEDULE
  // ──────────────────────────────────────────────────────────
  const scheduleEl = document.getElementById('schedule-list');
  if (scheduleEl && typeof scheduleData !== 'undefined') {
    scheduleEl.innerHTML = scheduleData.map(s => `
      <div class="schedule-item">
        <span class="schedule-day">${s.day}</span>
        <span class="schedule-hours">${s.hours}</span>
      </div>
    `).join('');
  }

  // ──────────────────────────────────────────────────────────
  //  6. RENDER PRICING CARDS
  // ──────────────────────────────────────────────────────────
  let isQuarterly = false;

  function getPeriodLabel() {
    return isQuarterly ? '/ 3 months' : '/ month';
  }

  function buildFeatureItem(f) {
    const cls = f.included ? 'included' : 'excluded';
    const iconSVG = f.included
      ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`
      : `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

    return `
      <li class="plan-feature ${cls}">
        <span class="feature-check">${iconSVG}</span>
        <span>${f.text}</span>
      </li>
    `;
  }

  function renderPricingCards() {
    const container = document.getElementById('pricing-container');
    if (!container || typeof pricingData === 'undefined') return;

    container.innerHTML = pricingData.map(plan => {
      const price  = isQuarterly ? plan.quarterlyPKR : plan.monthlyPKR;
      const period = getPeriodLabel();
      const popularClass = plan.popular ? 'popular' : '';
      const badgeHTML = plan.popular
        ? `<div class="popular-badge">${plan.badge}</div>`
        : '';
      const featuresHTML = plan.features.map(f => buildFeatureItem(f)).join('');

      const waMsg = encodeURIComponent(
        `Hi! I'm interested in the ${plan.title} membership plan at GYM X.`
      );

      return `
        <div class="pricing-card ${popularClass} reveal" id="plan-${plan.id}">
          ${badgeHTML}
          <div class="plan-subtitle">${plan.subtitle}</div>
          <h3 class="plan-title">${plan.title}</h3>
          <div class="plan-price-block">
            <div class="price-amount">
              <span class="price-currency">PKR</span>
              <span class="price-value">${price.toLocaleString('en-PK')}</span>
            </div>
            <div class="price-period">${period}</div>
          </div>
          <ul class="plan-features">${featuresHTML}</ul>
          <a
            href="https://wa.me/923121057858?text=${waMsg}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-plan"
          >${plan.ctaText}</a>
        </div>
      `;
    }).join('');

    // Re-trigger reveals
    observeRevealElements();
  }

  // Initial render
  renderPricingCards();

  // ──────────────────────────────────────────────────────────
  //  7. PRICING TOGGLE
  // ──────────────────────────────────────────────────────────
  const toggleInput  = document.getElementById('pricing-toggle');
  const labelMonthly = document.getElementById('label-monthly');
  const labelQuarterly = document.getElementById('label-quarterly');

  if (toggleInput) {
    toggleInput.addEventListener('change', () => {
      isQuarterly = toggleInput.checked;

      if (labelMonthly)   labelMonthly.classList.toggle('active', !isQuarterly);
      if (labelQuarterly) labelQuarterly.classList.toggle('active', isQuarterly);

      // Animate existing price values
      const container = document.getElementById('pricing-container');
      if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(8px)';
        container.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        setTimeout(() => {
          renderPricingCards();
          container.style.opacity = '1';
          container.style.transform = 'translateY(0)';
        }, 200);
      }
    });
  }

  // ──────────────────────────────────────────────────────────
  //  8. FLOATING NAVBAR — scroll behavior
  // ──────────────────────────────────────────────────────────
  const navCapsule = document.querySelector('.nav-capsule');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navCapsule?.classList.add('scrolled');
    } else {
      navCapsule?.classList.remove('scrolled');
    }
  }, { passive: true });

  // ──────────────────────────────────────────────────────────
  //  9. MOBILE DRAWER
  // ──────────────────────────────────────────────────────────
  const hamburger    = document.getElementById('nav-hamburger');
  const drawer       = document.getElementById('mobile-drawer');
  const drawerClose  = document.getElementById('drawer-close');
  const drawerBack   = document.getElementById('drawer-backdrop');

  function openDrawer() {
    drawer?.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger?.classList.add('active');
  }

  function closeDrawer() {
    drawer?.classList.remove('open');
    document.body.style.overflow = '';
    hamburger?.classList.remove('active');
  }

  hamburger?.addEventListener('click', () => {
    drawer?.classList.contains('open') ? closeDrawer() : openDrawer();
  });

  drawerClose?.addEventListener('click', closeDrawer);
  drawerBack?.addEventListener('click', closeDrawer);

  // Close on nav link click inside drawer
  drawer?.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // ──────────────────────────────────────────────────────────
  //  10. SMOOTH ANCHOR SCROLLING
  // ──────────────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ──────────────────────────────────────────────────────────
  //  11. INTERSECTION OBSERVER — Reveal Animations
  // ──────────────────────────────────────────────────────────
  function observeRevealElements() {
    const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  observeRevealElements();

  // ──────────────────────────────────────────────────────────
  //  12. ANIMATED COUNTERS
  // ──────────────────────────────────────────────────────────
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const step = 16;
    const steps = duration / step;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString('en-PK') + suffix;
    }, step);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numberEl = entry.target.querySelector('.stat-number[data-target]');
        if (numberEl && !numberEl.dataset.animated) {
          numberEl.dataset.animated = 'true';
          animateCounter(numberEl);
        }
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-item').forEach(el => counterObserver.observe(el));

  // ──────────────────────────────────────────────────────────
  //  13. FLOATING WA WIDGET — show after 1.5s
  // ──────────────────────────────────────────────────────────
  const waFloat = document.getElementById('wa-float');
  if (waFloat) {
    waFloat.style.opacity = '0';
    waFloat.style.transform = 'translateY(20px)';
    waFloat.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    setTimeout(() => {
      waFloat.style.opacity = '1';
      waFloat.style.transform = 'translateY(0)';
    }, 1500);
  }

  // ──────────────────────────────────────────────────────────
  //  14. ACTIVE NAV LINK HIGHLIGHTING (Scroll Spy)
  // ──────────────────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = 'var(--volt)';
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => spyObserver.observe(s));

});
