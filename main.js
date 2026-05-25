document.addEventListener('DOMContentLoaded', () => {
  
  // --- 1. Custom High-Tech Magnetic Cursor ---
  const cursor = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursor-dot');
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let dotX = 0, dotY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });
  
  function updateCursor() {
    cursorX += (mouseX - cursorX) * 0.12;
    cursorY += (mouseY - cursorY) * 0.12;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    
    dotX += (mouseX - dotX) * 0.28;
    dotY += (mouseY - dotY) * 0.28;
    cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
    
    requestAnimationFrame(updateCursor);
  }
  updateCursor();
  
  // Hover states sync
  const hoverables = document.querySelectorAll('.hoverable, a, button, select, input, textarea, .blueprint-hotspot, .monolith-visual');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hovered');
    }, { passive: true });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovered');
    }, { passive: true });
  });

  // --- 2. Ultra-Smooth HTML5 Video Preloader System ---
  const preloader = document.getElementById('preloader');
  const progress = document.getElementById('preload-progress');
  const perc = document.getElementById('preload-perc');
  const video = document.getElementById('hero-video');
  
  function unlockWebsite() {
    progress.style.width = '100%';
    perc.innerText = '100%';
    setTimeout(() => {
      preloader.classList.add('fade-out');
      document.body.style.overflowY = 'auto';
    }, 500);
  }

  // Preload and monitor the video readiness
  if (video.readyState >= 3) {
    unlockWebsite();
  } else {
    video.addEventListener('canplaythrough', unlockWebsite, { once: true });
    // Backup safety unlock in case of browser/caching quirks
    setTimeout(unlockWebsite, 2500);
  }

  // --- 3. Hardware-Accelerated Video Scroll Scrubbing with Decoupled Seek Lock ---
  let targetTimeRatio = 0;
  let currentTimeRatio = 0;
  let isScrollerInView = true;
  
  const heroScrub = document.getElementById('hero-scrub');
  const videoWrapper = document.getElementById('video-wrapper');
  const scrollIndicator = document.getElementById('scroll-indicator');
  
  function checkScrollerBounds() {
    const scrollerHeight = heroScrub.offsetHeight;
    isScrollerInView = window.scrollY < scrollerHeight;
  }
  window.addEventListener('scroll', checkScrollerBounds, { passive: true });
  window.addEventListener('resize', checkScrollerBounds, { passive: true });
  checkScrollerBounds(); // Initial run
  
  window.addEventListener('scroll', () => {
    if (!isScrollerInView) return;
    
    const scrollerHeight = heroScrub.offsetHeight;
    const stickyHeight = window.innerHeight;
    const totalScrollableDistance = scrollerHeight - stickyHeight;
    const currentScrollY = window.scrollY;
    
    const scrollFraction = Math.max(0, Math.min(1, currentScrollY / totalScrollableDistance));
    
    // Set target LERP ratio
    targetTimeRatio = scrollFraction;
    
    // Hide scrolling mouse overlay
    if (scrollFraction > 0.05) {
      scrollIndicator.classList.add('hidden');
    } else {
      scrollIndicator.classList.remove('hidden');
    }
    
    // Dynamic text cards highlights
    updateTypographyPhases(scrollFraction);
    
    // Smooth container transition
    videoWrapper.style.transform = 'none';
    videoWrapper.style.opacity   = '1';
    if (scrollFraction >= 1) {
      videoWrapper.style.display = 'none';
    } else {
      videoWrapper.style.display = 'block';
    }
  }, { passive: true });
  
  // Seek locking system to prevent browser video decoder backlogging
  let isSeeking = false;
  let pendingSeekTime = -1;
  
  function performSeek(time) {
    if (isSeeking) {
      pendingSeekTime = time;
      return;
    }
    isSeeking = true;
    video.currentTime = time;
  }
  
  video.addEventListener('seeked', () => {
    isSeeking = false;
    if (pendingSeekTime !== -1) {
      const nextTime = pendingSeekTime;
      pendingSeekTime = -1;
      performSeek(nextTime);
    }
  });

  // Butter-smooth video LERP seeking loop
  function scrubAnimationLoop() {
    if (isScrollerInView && video.duration) {
      // 0.15 LERP: makes scrolling extremely smooth and gives an ultra-premium sliding momentum feel!
      currentTimeRatio += (targetTimeRatio - currentTimeRatio) * 0.15;
      
      if (currentTimeRatio < 0.001) currentTimeRatio = 0;
      if (currentTimeRatio > 0.999) currentTimeRatio = 1.0;
      
      const targetTime = currentTimeRatio * video.duration;
      performSeek(targetTime);
    }
    requestAnimationFrame(scrubAnimationLoop);
  }
  requestAnimationFrame(scrubAnimationLoop);
  
  const phases = [
    document.getElementById('phase-1'),
    document.getElementById('phase-2'),
    document.getElementById('phase-3'),
    document.getElementById('phase-4')
  ];
  
  function updateTypographyPhases(fraction) {
    let activeIdx = 0;
    if (fraction >= 0.22 && fraction < 0.52) {
      activeIdx = 1;
    } else if (fraction >= 0.52 && fraction < 0.80) {
      activeIdx = 2;
    } else if (fraction >= 0.80) {
      activeIdx = 3;
    }
    
    phases.forEach((phase, idx) => {
      if (idx === activeIdx) {
        phase.classList.add('active');
      } else {
        phase.classList.remove('active');
      }
    });
  }

  // --- 4. Playable Smart Cockpit Dashboard ---
  const biotopeButtons = document.querySelectorAll('.biotope-btn');
  const sceneImages = document.querySelectorAll('.dashboard-scene-img');
  
  const propertiesData = {
    jungle: {
      name: 'Villa Vertex',
      location: 'Hunan, China',
      beds: '4',
      baths: '4.5',
      sqft: '7,800',
      theme: 'theme-jungle'
    },
    coastal: {
      name: 'The Horizon House',
      location: 'Positano, Italy',
      beds: '5',
      baths: '6.0',
      sqft: '9,500',
      theme: 'theme-coastal'
    },
    desert: {
      name: 'The Mirage Pavilion',
      location: 'California, USA',
      beds: '3',
      baths: '3.5',
      sqft: '4,800',
      theme: 'theme-desert'
    },
    urban: {
      name: 'The Slate Penthouse',
      location: 'New York City, USA',
      beds: '4',
      baths: '4.5',
      sqft: '6,500',
      theme: 'theme-urban'
    }
  };
  
  const dashPropName = document.getElementById('dash-prop-name');
  const dashPropLoc = document.getElementById('dash-prop-loc');
  const dashPropBeds = document.getElementById('dash-prop-beds');
  const dashPropBaths = document.getElementById('dash-prop-baths');
  const dashPropSqft = document.getElementById('dash-prop-sqft');
  
  const atmosphereOverlays = {
    jungle: document.getElementById('overlay-mist'),
    coastal: document.getElementById('overlay-waves'),
    desert: document.getElementById('overlay-dust'),
    urban: document.getElementById('overlay-urban')
  };
  
  biotopeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedBiotope = btn.getAttribute('data-biotope');
      
      biotopeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const currentProp = propertiesData[selectedBiotope];
      document.body.className = currentProp.theme;
      
      sceneImages.forEach(img => img.classList.remove('active'));
      document.getElementById(`scene-${selectedBiotope}`).classList.add('active');
      
      dashPropName.innerText = currentProp.name;
      dashPropLoc.innerText = currentProp.location;
      dashPropBeds.innerText = currentProp.beds;
      dashPropBaths.innerText = currentProp.baths;
      dashPropSqft.innerText = `${currentProp.sqft} SQFT`;
      
      Object.keys(atmosphereOverlays).forEach(key => {
        atmosphereOverlays[key].classList.remove('active');
      });
      
      if (document.getElementById('toggle-mist').checked) {
        atmosphereOverlays[selectedBiotope].classList.add('active');
      }
    });
  });

  // --- 5. Cockpit Sliders & Lighting Dials ---
  const toggleLights = document.getElementById('toggle-lights');
  const toggleMist = document.getElementById('toggle-mist');
  const toggleFire = document.getElementById('toggle-fire');
  
  const overlayInterior = document.getElementById('overlay-interior-glow');
  const overlayFire = document.getElementById('overlay-fire-glow');
  const dashDisplay = document.getElementById('dashboard-display');
  
  toggleLights.addEventListener('change', () => {
    if (toggleLights.checked) {
      overlayInterior.classList.add('active');
      dashDisplay.classList.add('warm-lights-glow');
    } else {
      overlayInterior.classList.remove('active');
      dashDisplay.classList.remove('warm-lights-glow');
    }
  });
  
  toggleMist.addEventListener('change', () => {
    const activeBtn = document.querySelector('.biotope-btn.active');
    const activeBiotope = activeBtn.getAttribute('data-biotope');
    
    if (toggleMist.checked) {
      atmosphereOverlays[activeBiotope].classList.add('active');
    } else {
      atmosphereOverlays[activeBiotope].classList.remove('active');
    }
  });
  
  toggleFire.addEventListener('change', () => {
    if (toggleFire.checked) {
      overlayFire.classList.add('active');
      dashDisplay.classList.add('landscape-fire-glow');
    } else {
      overlayFire.classList.remove('active');
      dashDisplay.classList.remove('landscape-fire-glow');
    }
  });

  // --- 6. Blueprint Hotspots Synchronization ---
  const blueprintHotspots = document.querySelectorAll('.blueprint-hotspot');
  const bpTag = document.getElementById('bp-tag');
  const bpTitle = document.getElementById('bp-title');
  const bpDesc = document.getElementById('bp-desc');
  const bpSpecs = document.getElementById('bp-specs');
  
  const blueprintNodesData = {
    cantilever: {
      tag: 'Engineering 01 / Structural Force',
      title: 'Brutalist Cantilever',
      desc: 'A double-reinforced carbon-fiber concrete roof cantilever extending 6.2 meters over the glass lounge without pillars. Engineered to maximize panoramic field-of-view while balancing high thermal mass.',
      spec1_label: 'Overhang Range',
      spec1_val: '6.2 Meters',
      spec2_label: 'Load Capacity',
      spec2_val: '450 kN'
    },
    glazing: {
      tag: 'Engineering 02 / Thermal Envelope',
      title: 'Structural Glazing System',
      desc: 'Argon-filled, triple-glazed custom solar panelling running floor-to-ceiling. Utilizes self-tinting electrochromic coating that limits incoming solar gain dynamically as daylight intensifies.',
      spec1_label: 'U-Value (Insulation)',
      spec1_val: '0.62 W/m²K',
      spec2_label: 'Solar Gain Transmit',
      spec2_val: '0.28 g-value'
    },
    materials: {
      tag: 'Engineering 03 / Organic Materials',
      title: 'Sustainable Teak Decking',
      desc: 'Class 1 sustainably harvested rainforest teak structural decks, naturally cured against moisture and mildew. Embedded over steel support runners to allow organic breathing and water dissipation.',
      spec1_label: 'Teak Density',
      spec1_val: '680 kg/m³',
      spec2_label: 'Moisture Coefficient',
      spec2_val: '0.04% Index'
    },
    filtration: {
      tag: 'Engineering 04 / Ecological Water',
      title: 'Granite Infinity Filtration',
      desc: 'Water circulation utilizes a secondary biological sand filter and passive copper-ionization purification. Eradicates chlorine usage entirely, blending recycled rainwater seamlessly with the natural pool.',
      spec1_label: 'Flow Velocity',
      spec1_val: '18 Liters/Sec',
      spec2_label: 'Purity Level',
      spec2_val: '99.8% Certified'
    }
  };
  
  blueprintHotspots.forEach(hotspot => {
    hotspot.addEventListener('mouseenter', () => {
      const selectedNode = hotspot.getAttribute('data-node');
      
      blueprintHotspots.forEach(hs => hs.classList.remove('active'));
      hotspot.classList.add('active');
      
      const nodeData = blueprintNodesData[selectedNode];
      
      bpTag.style.opacity = '0';
      bpTitle.style.opacity = '0';
      bpDesc.style.opacity = '0';
      bpSpecs.style.opacity = '0';
      
      setTimeout(() => {
        bpTag.innerText = nodeData.tag;
        bpTitle.innerText = nodeData.title;
        bpDesc.innerText = nodeData.desc;
        
        bpSpecs.innerHTML = `
          <div class="bp-spec-row">
            <span class="bp-spec-label">${nodeData.spec1_label}</span>
            <span class="bp-spec-val">${nodeData.spec1_val}</span>
          </div>
          <div class="bp-spec-row">
            <span class="bp-spec-label">${nodeData.spec2_label}</span>
            <span class="bp-spec-val">${nodeData.spec2_val}</span>
          </div>
        `;
        
        bpTag.style.opacity = '1';
        bpTitle.style.opacity = '1';
        bpDesc.style.opacity = '1';
        bpSpecs.style.opacity = '1';
      }, 150);
    });
  });



});
