// ============================================================
//  LLOYD ATHLETIC CLUB — script.js
//  Dynamic DOM generation, Three.js 3D hero object,
//  pricing toggle, mobile drawer, smooth scroll, intersection observers
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ──────────────────────────────────────────────────────────
  //  1. THREE.JS INTERACTIVE 3D ATHLETIC OBJECT (HERO SECTION)
  // ──────────────────────────────────────────────────────────
  function initHero3D() {
    const container = document.getElementById('hero-3d-canvas');
    if (!container || typeof THREE === 'undefined') return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // ── Lighting ───────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    // Key Volt Neon Point Light
    const voltLight = new THREE.PointLight(0xccff00, 3.2, 35);
    voltLight.position.set(6, 6, 7);
    scene.add(voltLight);

    // Rim Cyber Cyan Point Light
    const cyanLight = new THREE.PointLight(0x00e5ff, 2.6, 35);
    cyanLight.position.set(-7, -5, -4);
    scene.add(cyanLight);

    // Soft Studio Overhead Light
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(0, 10, 8);
    scene.add(dirLight);

    // ── Materials ──────────────────────────────────────────
    const darkPlateMaterial = new THREE.MeshStandardMaterial({
      color: 0x11141c,
      metalness: 0.85,
      roughness: 0.28,
    });

    const chromeBarMaterial = new THREE.MeshStandardMaterial({
      color: 0xedf2f7,
      metalness: 0.95,
      roughness: 0.18,
    });

    const voltNeonMaterial = new THREE.MeshStandardMaterial({
      color: 0xccff00,
      emissive: 0xccff00,
      emissiveIntensity: 0.75,
      roughness: 0.2,
      metalness: 0.5,
    });

    const cyanNeonMaterial = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x00e5ff,
      emissiveIntensity: 0.7,
      roughness: 0.25,
      metalness: 0.4,
    });

    // ── Dumbbell & Orbit Group ──────────────────────────────
    const rootGroup = new THREE.Group();
    const dumbbellGroup = new THREE.Group();

    // Central Grip Bar (Horizontal)
    const barGeo = new THREE.CylinderGeometry(0.16, 0.16, 4.4, 32);
    const barMesh = new THREE.Mesh(barGeo, chromeBarMaterial);
    barMesh.rotation.z = Math.PI / 2;
    dumbbellGroup.add(barMesh);

    // Knurled center rings
    const ringGeo = new THREE.TorusGeometry(0.18, 0.02, 16, 32);
    for (let offset of [-0.6, -0.2, 0.2, 0.6]) {
      const ring = new THREE.Mesh(ringGeo, voltNeonMaterial);
      ring.rotation.y = Math.PI / 2;
      ring.position.x = offset;
      dumbbellGroup.add(ring);
    }

    // Weight Plates Generator (Hexagonal plates with beveled rims)
    function createWeightStack(xPosition, isRight) {
      const sideGroup = new THREE.Group();
      sideGroup.position.x = xPosition;

      // Inner plate (Large hex)
      const p1Geo = new THREE.CylinderGeometry(1.28, 1.28, 0.38, 6);
      const p1 = new THREE.Mesh(p1Geo, darkPlateMaterial);
      p1.rotation.z = Math.PI / 2;
      sideGroup.add(p1);

      // Outer plate (Slightly smaller hex)
      const p2Geo = new THREE.CylinderGeometry(1.1, 1.1, 0.35, 6);
      const p2 = new THREE.Mesh(p2Geo, darkPlateMaterial);
      p2.rotation.z = Math.PI / 2;
      p2.position.x = isRight ? 0.35 : -0.35;
      sideGroup.add(p2);

      // Volt Glowing Collar Ring
      const collarGeo = new THREE.TorusGeometry(0.68, 0.055, 16, 32);
      const collar = new THREE.Mesh(collarGeo, voltNeonMaterial);
      collar.rotation.y = Math.PI / 2;
      collar.position.x = isRight ? -0.25 : 0.25;
      sideGroup.add(collar);

      // Chrome End Cap
      const capGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.16, 24);
      const cap = new THREE.Mesh(capGeo, chromeBarMaterial);
      cap.rotation.z = Math.PI / 2;
      cap.position.x = isRight ? 0.58 : -0.58;
      sideGroup.add(cap);

      return sideGroup;
    }

    dumbbellGroup.add(createWeightStack(-1.7, false));
    dumbbellGroup.add(createWeightStack(1.7, true));

    // Tilt dumbbell slightly for dramatic athletic perspective
    dumbbellGroup.rotation.z = 0.28;
    dumbbellGroup.rotation.y = -0.35;
    rootGroup.add(dumbbellGroup);

    // ── Floating Orbital Gyroscopic Rings ───────────────────
    const orbitRing1Geo = new THREE.TorusGeometry(2.35, 0.022, 16, 80);
    const orbitRing1 = new THREE.Mesh(orbitRing1Geo, voltNeonMaterial);
    orbitRing1.rotation.x = Math.PI / 3;
    rootGroup.add(orbitRing1);

    const orbitRing2Geo = new THREE.TorusGeometry(2.65, 0.018, 16, 80);
    const orbitRing2 = new THREE.Mesh(orbitRing2Geo, cyanNeonMaterial);
    orbitRing2.rotation.x = -Math.PI / 3.5;
    orbitRing2.rotation.y = Math.PI / 4;
    rootGroup.add(orbitRing2);

    // ── Subtle Floating Particle Swarm ──────────────────────
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePositions[i]     = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xccff00,
      size: 0.05,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    scene.add(rootGroup);

    // ── Interactive Controls (Drag & Cursor Track) ──────────
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let targetRotationX = 0.2;
    let targetRotationY = 0.35;
    let velocityX = 0;
    let velocityY = 0;
    let isMouseOverHero = false;

    // Track mouse position over hero section
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', (e) => {
        isMouseOverHero = true;
        const rect = heroSection.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        if (!isDragging) {
          targetRotationY += (nx * 0.4 - targetRotationY) * 0.04;
          targetRotationX += (-ny * 0.3 - targetRotationX) * 0.04;
        }
      });
      heroSection.addEventListener('mouseleave', () => {
        isMouseOverHero = false;
      });
    }

    // Direct Drag Interactions on Canvas
    container.addEventListener('pointerdown', (e) => {
      isDragging = true;
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
      velocityX = 0;
      velocityY = 0;
      container.setPointerCapture?.(e.pointerId);
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousPointerX;
      const deltaY = e.clientY - previousPointerY;
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;

      velocityX = deltaX * 0.007;
      velocityY = deltaY * 0.007;

      rootGroup.rotation.y += velocityX;
      rootGroup.rotation.x += velocityY;
    });

    const stopDragging = (e) => {
      if (isDragging) {
        isDragging = false;
        container.releasePointerCapture?.(e?.pointerId);
      }
    };
    window.addEventListener('pointerup', stopDragging);
    window.addEventListener('pointercancel', stopDragging);

    // ── Responsive Resize ──────────────────────────────────
    function onResize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener('resize', onResize);

    // ── Animation Loop ─────────────────────────────────────
    let isVisible = true;
    let clock = new THREE.Clock();

    const heroObserver = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0.05 });
    heroObserver.observe(heroSection || container);

    function animate() {
      requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Inertia and Auto-rotation
      if (!isDragging) {
        // Inertia damp
        velocityX *= 0.94;
        velocityY *= 0.94;
        rootGroup.rotation.y += velocityX;
        rootGroup.rotation.x += velocityY;

        // Subtle ambient continuous drift
        rootGroup.rotation.y += 0.004;

        // Smooth bobbing float
        dumbbellGroup.position.y = Math.sin(elapsed * 1.6) * 0.12;
      }

      // Orbital rings dynamic precession
      orbitRing1.rotation.z += 0.012;
      orbitRing2.rotation.z -= 0.009;
      particles.rotation.y -= 0.002;

      renderer.render(scene, camera);
    }
    animate();
  }

  // Initialize Three.js object
  initHero3D();

  // ──────────────────────────────────────────────────────────
  //  2. RENDER HERO STATS FROM data.js
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
  //  3. RENDER HERO 4-CARD IMAGE GALLERY
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
  //  4. RENDER COUNTER STATS (Specification Data)
  //  Card 1: "4.6★" | "820+ REVIEWS"
  //  Card 2: "FULL" | "ATHLETIC AMENITIES"
  //  Card 3: "LOCAL" | "PORTLAND COMMUNITY"
  //  Card 4: "FREE" | "GUEST DAY PASS"
  // ──────────────────────────────────────────────────────────
  const statsGrid = document.getElementById('stats-grid');
  if (statsGrid && typeof counterStats !== 'undefined') {
    statsGrid.innerHTML = counterStats.map(s => `
      <div class="stat-item reveal">
        <div class="stat-number">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');
  }

  // ──────────────────────────────────────────────────────────
  //  5. RENDER FACILITIES BENTO GRID
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
  //  6. RENDER SCHEDULE
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
  //  7. RENDER PRICING CARDS
  // ──────────────────────────────────────────────────────────
  let isQuarterly = false;

  function getPeriodLabel(isFree) {
    if (isFree) return 'one-time pass';
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
      const price = isQuarterly ? plan.quarterlyPrice : plan.monthlyPrice;
      const period = getPeriodLabel(plan.isFree);
      const popularClass = plan.popular ? 'popular' : '';
      const badgeHTML = plan.popular
        ? `<div class="popular-badge">${plan.badge}</div>`
        : '';
      const featuresHTML = plan.features.map(f => buildFeatureItem(f)).join('');

      const priceDisplayHTML = plan.isFree
        ? `<span class="price-value" style="color:var(--volt); font-size:2.8rem;">FREE</span>`
        : `<span class="price-currency">$</span><span class="price-value">${price}</span>`;

      return `
        <div class="pricing-card ${popularClass} reveal" id="plan-${plan.id}">
          ${badgeHTML}
          <div class="plan-subtitle">${plan.subtitle}</div>
          <h3 class="plan-title">${plan.title}</h3>
          <div class="plan-price-block">
            <div class="price-amount">
              ${priceDisplayHTML}
            </div>
            <div class="price-period">${period}</div>
          </div>
          <ul class="plan-features">${featuresHTML}</ul>
          <a
            href="tel:5032874594"
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
  //  8. PRICING TOGGLE
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
  //  9. FLOATING NAVBAR — scroll behavior
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
  //  10. MOBILE DRAWER
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
  //  11. SMOOTH ANCHOR SCROLLING
  // ──────────────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = 85;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ──────────────────────────────────────────────────────────
  //  12. INTERSECTION OBSERVER — Reveal Animations
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
  //  13. FLOATING QUICK CONTACT WIDGET — show after 1.5s
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
