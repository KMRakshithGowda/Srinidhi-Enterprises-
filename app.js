/**
 * Srinidhi Enterprises — Pinned Scroll Engine & Interactive Features
 * Zero-budget, zero-lag, vanilla JS implementation
 */

(function () {
  'use strict';

  // --- Utility functions ---
  function clamp(val, min = 0, max = 1) {
    return Math.max(min, Math.min(max, val));
  }

  function seg(p, a, b) {
    return clamp((p - a) / (b - a));
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  // --- Elements ---
  const story = document.getElementById('story');
  const cam = document.getElementById('cam');
  const l0 = document.getElementById('l0');
  const l1 = document.getElementById('l1');
  const l2 = document.getElementById('l2');
  const l3 = document.getElementById('l3');
  const l4 = document.getElementById('l4');
  const progFill = document.getElementById('prog-fill');
  const sparklinePoly = document.getElementById('sparkline-poly');
  const countWater = document.getElementById('count-water');

  // --- Scroll state variables ---
  let rawP = 0;
  let smoothP = 0;
  let lastTime = performance.now();
  let mouseX = 0, mouseY = 0;
  let smoothMX = 0, smoothMY = 0;

  // Track pointer for camera parallax
  window.addEventListener('pointermove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  // Update raw scroll progress
  function updateScroll() {
    if (!story) return;
    const rect = story.getBoundingClientRect();
    const scrollDist = story.offsetHeight - window.innerHeight;
    if (scrollDist <= 0) {
      rawP = 0;
    } else {
      rawP = clamp(-rect.top / scrollDist);
    }
  }

  window.addEventListener('scroll', updateScroll, { passive: true });
  window.addEventListener('resize', updateScroll, { passive: true });
  updateScroll();

  // --- Animation Loop ---
  let sparklineDrawn = false;

  function renderLoop(now) {
    const dt = Math.min(now - lastTime, 64);
    lastTime = now;

    // Smoothed progress (Lerp with framerate independence)
    const factor = 1 - Math.pow(0.84, dt / 16.7);
    smoothP += (rawP - smoothP) * factor;
    if (Math.abs(rawP - smoothP) < 0.0001) smoothP = rawP;

    smoothMX += (mouseX - smoothMX) * 0.06;
    smoothMY += (mouseY - smoothMY) * 0.06;

    const sp = smoothP;

    // Camera scale & 3D tilt
    if (cam) {
      const camScale = 1.0 + sp * 0.12;
      const camTransX = -smoothMX * 14;
      const camTransY = -smoothMY * 10 - sp * 40;
      cam.style.transform = `translate3d(${camTransX.toFixed(2)}px, ${camTransY.toFixed(2)}px, 0) scale(${camScale.toFixed(3)})`;
    }

    // Progress bar fill
    if (progFill) {
      progFill.style.transform = `scaleX(${sp.toFixed(3)})`;
    }

    // ----------------------------------------------------------------
    // BEAT 1: Hero (l0 & l1) -> sp: 0.00 to 0.18
    // ----------------------------------------------------------------
    const heroOut = seg(sp, 0.04, 0.18);
    if (l0 && l1) {
      if (heroOut >= 1) {
        l0.style.visibility = 'hidden';
        l0.style.opacity = '0';
        l1.style.visibility = 'hidden';
        l1.style.opacity = '0';
      } else {
        l0.style.visibility = 'visible';
        l1.style.visibility = 'visible';
        const opacity = (1 - heroOut).toFixed(3);
        const blur = (heroOut * 12).toFixed(1);
        const lift = (-heroOut * 60).toFixed(1);
        l0.style.opacity = opacity;
        l0.style.filter = `blur(${blur}px)`;
        l0.style.transform = `translate3d(0, ${lift}px, 0)`;

        l1.style.opacity = (1 - seg(sp, 0.02, 0.14)).toFixed(3);
      }
    }

    // ----------------------------------------------------------------
    // BEAT 2: Vision & Live Agro-Weather (l2) -> sp: 0.16 to 0.40
    // ----------------------------------------------------------------
    const vIn = seg(sp, 0.15, 0.25);
    const vOut = seg(sp, 0.35, 0.44);
    if (l2) {
      if (vIn <= 0 || vOut >= 1) {
        l2.style.visibility = 'hidden';
        l2.style.opacity = '0';
      } else {
        l2.style.visibility = 'visible';
        const k = vIn * (1 - vOut);
        const blur = ((1 - vIn) * 10 + vOut * 12).toFixed(1);
        const transY = ((1 - vIn) * 40 - vOut * 40).toFixed(1);
        l2.style.opacity = k.toFixed(3);
        l2.style.filter = `blur(${blur}px)`;
        l2.style.transform = `translate3d(0, ${transY}px, 0)`;
      }
    }

    // ----------------------------------------------------------------
    // BEAT 3: Hotspots (l3) -> sp: 0.40 to 0.66
    // ----------------------------------------------------------------
    const hIn = seg(sp, 0.40, 0.50);
    const hOut = seg(sp, 0.62, 0.70);
    if (l3) {
      if (hIn <= 0 || hOut >= 1) {
        l3.style.visibility = 'hidden';
        l3.style.opacity = '0';
      } else {
        l3.style.visibility = 'visible';
        const k = hIn * (1 - hOut);
        const blur = ((1 - hIn) * 8 + hOut * 10).toFixed(1);
        l3.style.opacity = k.toFixed(3);
        l3.style.filter = `blur(${blur}px)`;
      }
    }

    // ----------------------------------------------------------------
    // BEAT 4: Station Metrics & Checklist (l4) -> sp: 0.66 to 1.00
    // ----------------------------------------------------------------
    const sIn = seg(sp, 0.66, 0.78);
    if (l4) {
      if (sIn <= 0) {
        l4.style.visibility = 'hidden';
        l4.style.opacity = '0';
      } else {
        l4.style.visibility = 'visible';
        l4.style.opacity = sIn.toFixed(3);
        const transY = ((1 - sIn) * 40).toFixed(1);
        l4.style.transform = `translate3d(0, ${transY}px, 0)`;

        // Draw sparkline & count up water conservation
        if (sIn > 0.4 && !sparklineDrawn) {
          sparklineDrawn = true;
          if (sparklinePoly) {
            sparklinePoly.style.strokeDashoffset = '0';
          }
          animateCount(countWater, 55, 1200);
        }
      }
    }

    requestAnimationFrame(renderLoop);
  }

  requestAnimationFrame(renderLoop);

  // Counter helper
  function animateCount(el, target, duration) {
    if (!el) return;
    let start = 0;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = easeInOutCubic(progress);
      el.textContent = Math.round(eased * target);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(tick);
  }

  // --- Background Mist / Droplet Particle Canvas ---
  const canvas = document.getElementById('mist-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    // Generate mist / water droplet particles
    const particles = [];
    const NUM_PARTICLES = 35;
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: Math.random() * 0.6 + 0.2,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    function drawParticles() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#ffffff';

      for (let i = 0; i < NUM_PARTICLES; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y > height) p.y = 0;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      requestAnimationFrame(drawParticles);
    }
    requestAnimationFrame(drawParticles);
  }

  // --- Live Agro-Weather API Integration (Open-Meteo) ---
  // Coordinates for Bethamangala / KGF, Kolar: 13.0039° N, 78.3242° E
  async function fetchBethamangalaWeather() {
    const tempEl = document.getElementById('wt-temp');
    const humEl = document.getElementById('wt-humidity');
    const etEl = document.getElementById('wt-et');
    const advEl = document.getElementById('wt-advisory');

    try {
      const res = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=13.0039&longitude=78.3242&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m&timezone=Asia%2FKolkata'
      );
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      const current = data.current;

      const temp = Math.round(current.temperature_2m);
      const hum = Math.round(current.relative_humidity_2m);

      if (tempEl) tempEl.textContent = `${temp}°C`;
      if (humEl) humEl.textContent = `${hum}%`;

      // Advisory logic based on real-time temperature and humidity
      if (temp > 30) {
        if (etEl) etEl.textContent = 'High Evaporation (Run Drip at Dawn)';
        if (advEl) advEl.textContent = 'Irrigate 6:00 AM – 8:30 AM to prevent soil vapor loss';
      } else if (temp < 20) {
        if (etEl) etEl.textContent = 'Low Soil Stress · Good Retention';
        if (advEl) advEl.textContent = 'Standard drip cycle: 45–60 min adequate for root zone';
      } else {
        if (etEl) etEl.textContent = 'Optimal Moisture Index';
        if (advEl) advEl.textContent = 'Normal cycle · Kaveri/Nandi 4 LPH drippers recommended';
      }
    } catch (e) {
      // Safe fallback if offline
      if (tempEl) tempEl.textContent = '26°C';
      if (humEl) humEl.textContent = '68%';
      if (etEl) etEl.textContent = 'Normal Moisture';
      if (advEl) advEl.textContent = 'Morning drip cycle recommended for Bethamangala fields';
    }
  }

  fetchBethamangalaWeather();

  // --- Interactive Hotspots ---
  const hotspots = document.querySelectorAll('.hotspot');
  hotspots.forEach((hs) => {
    hs.addEventListener('click', () => {
      hotspots.forEach((other) => {
        if (other !== hs) other.classList.remove('active');
      });
      hs.classList.toggle('active');
    });
  });

  // --- 3D Card Tilt on Pointer Move ---
  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${(x * 10).toFixed(2)}deg) rotateX(${(-y * 10).toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)';
    });
  });

  // --- Interactive Farmer Drip Estimator ---
  const cropSelect = document.getElementById('crop-type');
  const acresRange = document.getElementById('farm-acres');
  const acresDisp = document.getElementById('acres-disp');
  const resLateral = document.getElementById('res-lateral');
  const resFilter = document.getElementById('res-filter');
  const resMainline = document.getElementById('res-mainline');
  const waBtn = document.getElementById('calc-wa-btn');

  // Spacing in meters per row: [crop]: meters of lateral per acre
  const cropData = {
    vegetables: { lateralPerAcre: 3300, name: 'Vegetables (Tomato/Chilly)' },
    mulberry: { lateralPerAcre: 2800, name: 'Mulberry (Sericulture)' },
    banana: { lateralPerAcre: 2200, name: 'Banana / Papaya' },
    mango: { lateralPerAcre: 1100, name: 'Mango / Orchard' },
    sugarcane: { lateralPerAcre: 3000, name: 'Sugarcane' }
  };

  function updateEstimator() {
    if (!cropSelect || !acresRange) return;

    const cropKey = cropSelect.value;
    const acres = parseFloat(acresRange.value);
    const info = cropData[cropKey] || cropData.vegetables;

    if (acresDisp) {
      acresDisp.textContent = `${acres.toFixed(1)} ${acres === 1 ? 'Acre' : 'Acres'}`;
    }

    const totalLateral = Math.round(info.lateralPerAcre * acres);
    const totalMainline = Math.round(180 * acres);

    let filterText = '2" Screen / Disc Filter (25 m³/hr)';
    if (acres >= 3.5) {
      filterText = '2.5" / 3" Hydrocyclone + Disc Filter (40 m³/hr)';
    }

    if (resLateral) resLateral.textContent = `~${totalLateral.toLocaleString('en-IN')} meters`;
    if (resMainline) resMainline.textContent = `~${totalMainline.toLocaleString('en-IN')} meters`;
    if (resFilter) resFilter.textContent = filterText;

    // Pre-fill WhatsApp message
    if (waBtn) {
      const msg = encodeURIComponent(
        `Hello Harsha sir (Srinidhi Enterprises),\n` +
        `I calculated my farm requirements on your website:\n` +
        `• Crop: ${info.name}\n` +
        `• Land Area: ${acres.toFixed(1)} Acres\n` +
        `• Estimated Drip Lateral: ~${totalLateral.toLocaleString('en-IN')} m (Kaveri/Nandi 16mm)\n` +
        `• Mainline Pipe: ~${totalMainline.toLocaleString('en-IN')} m (Finolex PVC)\n` +
        `• Recommended Filter: ${filterText}\n\n` +
        `Please give me the quotation and availability at your Bethamangala shop.`
      );
      waBtn.href = `https://wa.me/919686636755?text=${msg}`;
    }
  }

  if (cropSelect && acresRange) {
    cropSelect.addEventListener('change', updateEstimator);
    acresRange.addEventListener('input', updateEstimator);
    updateEstimator();
  }

  // --- Count-up on scroll for stats banner ---
  const statsBanner = document.getElementById('stats-banner');
  let statsCounted = false;

  if (statsBanner && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          const nums = statsBanner.querySelectorAll('.stat-num');
          nums.forEach((num) => {
            const target = parseInt(num.getAttribute('data-val'), 10);
            animateCount(num, target, 1600);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsBanner);
  }

})();
