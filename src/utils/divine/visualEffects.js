/**
 * QUORRA DIVINE VISUAL EFFECTS SYSTEM
 * Creates stunning visual effects that embody the goddess's divine power
 * 
 * Features: Particle systems, divine animations, sacred transitions
 * Philosophy: "Visual magic that enhances without overwhelming the sacred craft"
 */

class QuorraVisualEffects {
  constructor() {
    this.effectsConfig = {
      enabled: true,
      performanceMode: 'balanced', // 'minimal', 'balanced', 'maximum'
      respectsReducedMotion: true,
      maxParticles: 50,
      effectIntensity: 'medium', // 'subtle', 'medium', 'intense'
      seasonalEffects: true
    };

    this.particleSystems = new Map();
    this.activeAnimations = new Set();
    this.effectQueue = [];
    
    // Divine color palettes for different effects
    this.divineColors = {
      flame: ['#FF6B35', '#FF8C42', '#FFD700', '#FF4500', '#FFA500'],
      ember: ['#FF4500', '#FF6B35', '#FFB347', '#CD853F'],
      spark: ['#FFD700', '#FFF8DC', '#FFFFE0', '#F0E68C', '#FFFAF0'],
      divine: ['#9370DB', '#BA55D3', '#DDA0DD', '#E6E6FA'],
      sacred: ['#4169E1', '#6495ED', '#87CEEB', '#B0E0E6'],
      blessing: ['#32CD32', '#98FB98', '#90EE90', '#F0FFF0'],
      golden: ['#FFD700', '#FFA500', '#FF8C00', '#DAA520'],
      mythic: ['#FF1493', '#FF69B4', '#FFB6C1', '#FFC0CB'],
      seasonal: {
        spring: ['#32CD32', '#98FB98', '#FFB6C1', '#FFFFE0'],
        summer: ['#FFD700', '#FF6B35', '#32CD32', '#87CEEB'],
        autumn: ['#CD853F', '#DEB887', '#F4A460', '#D2691E'],
        winter: ['#4169E1', '#87CEEB', '#E6E6FA', '#F0F8FF']
      }
    };

    // Effect presets for different occasions
    this.effectPresets = {
      blessing: {
        type: 'blessing',
        particles: 12,
        duration: 2000,
        colors: this.divineColors.blessing,
        pattern: 'radial_burst',
        physics: 'gentle_rise'
      },
      achievement: {
        type: 'celebration',
        particles: 24,
        duration: 3000,
        colors: this.divineColors.golden,
        pattern: 'spiral_burst',
        physics: 'energetic_scatter'
      },
      divine_touch: {
        type: 'divine_enhancement',
        particles: 8,
        duration: 1500,
        colors: this.divineColors.divine,
        pattern: 'gentle_flow',
        physics: 'floating_sparkles'
      },
      perfect_alignment: {
        type: 'precision',
        particles: 6,
        duration: 1000,
        colors: this.divineColors.sacred,
        pattern: 'alignment_grid',
        physics: 'snap_to_grid'
      },
      mythic_moment: {
        type: 'transcendent',
        particles: 50,
        duration: 5000,
        colors: this.divineColors.mythic,
        pattern: 'expanding_universe',
        physics: 'transcendent_flow'
      }
    };

    // Initialize visual effects system
    this.initializeEffectsSystem();
  }

  /**
   * INITIALIZATION & SETUP
   */

  initializeEffectsSystem() {
    this.checkPerformanceCapabilities();
    this.setupReducedMotionDetection();
    this.createEffectsCanvas();
    this.startEffectsEngine();
    this.loadEffectStyles();
  }

  checkPerformanceCapabilities() {
    // Detect device capabilities for optimal performance
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    this.capabilities = {
      webgl: !!gl,
      hardwareAcceleration: !!gl,
      devicePixelRatio: window.devicePixelRatio || 1,
      maxTextureSize: gl ? gl.getParameter(gl.MAX_TEXTURE_SIZE) : 0
    };

    // Adjust settings based on capabilities
    if (!this.capabilities.hardwareAcceleration) {
      this.effectsConfig.performanceMode = 'minimal';
      this.effectsConfig.maxParticles = 20;
    }
  }

  setupReducedMotionDetection() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      this.effectsConfig.enabled = false;
      this.effectsConfig.effectIntensity = 'subtle';
    }

    prefersReducedMotion.addEventListener('change', (e) => {
      this.effectsConfig.enabled = !e.matches;
      if (e.matches) {
        this.clearAllEffects();
      }
    });
  }

  createEffectsCanvas() {
    // Create dedicated canvas for particle effects
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'quorra-effects-canvas';
    this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: screen;
    `;
    
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
    
    window.addEventListener('resize', () => this.resizeCanvas());
    document.body.appendChild(this.canvas);
  }

  resizeCanvas() {
    const dpr = this.capabilities.devicePixelRatio;
    this.canvas.width = window.innerWidth * dpr;
    this.canvas.height = window.innerHeight * dpr;
    this.ctx.scale(dpr, dpr);
  }

  startEffectsEngine() {
    // Main animation loop
    const animate = () => {
      this.updateParticles();
      this.renderParticles();
      this.processEffectQueue();
      requestAnimationFrame(animate);
    };
    
    animate();
  }

  loadEffectStyles() {
    const styles = document.createElement('style');
    styles.id = 'quorra-effects-styles';
    styles.textContent = this.getEffectCSS();
    document.head.appendChild(styles);
  }

  /**
   * PARTICLE SYSTEM MANAGEMENT
   */

  createParticleSystem(config) {
    const system = {
      id: `particle_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      particles: [],
      config: { ...config },
      startTime: Date.now(),
      active: true
    };

    // Generate particles based on config
    for (let i = 0; i < config.particles; i++) {
      system.particles.push(this.createParticle(config, i));
    }

    this.particleSystems.set(system.id, system);
    return system.id;
  }

  createParticle(config, index) {
    const particle = {
      x: config.origin?.x || window.innerWidth / 2,
      y: config.origin?.y || window.innerHeight / 2,
      vx: 0,
      vy: 0,
      life: 1.0,
      maxLife: config.duration || 2000,
      age: 0,
      size: config.size || this.randomBetween(2, 8),
      color: this.selectColor(config.colors),
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: this.randomBetween(-0.1, 0.1),
      pattern: config.pattern || 'radial_burst',
      physics: config.physics || 'gentle_rise',
      index: index
    };

    // Apply pattern-specific positioning
    this.applyParticlePattern(particle, config, index);
    
    return particle;
  }

  applyParticlePattern(particle, config, index) {
    const { pattern, particles } = config;
    
    switch (pattern) {
      case 'radial_burst':
        const angle = (index / particles) * Math.PI * 2;
        const speed = this.randomBetween(50, 150);
        particle.vx = Math.cos(angle) * speed;
        particle.vy = Math.sin(angle) * speed;
        break;
        
      case 'spiral_burst':
        const spiralAngle = (index / particles) * Math.PI * 4;
        const spiralRadius = index * 10;
        particle.x += Math.cos(spiralAngle) * spiralRadius;
        particle.y += Math.sin(spiralAngle) * spiralRadius;
        particle.vx = Math.cos(spiralAngle) * 100;
        particle.vy = Math.sin(spiralAngle) * 100;
        break;
        
      case 'gentle_flow':
        particle.x += this.randomBetween(-50, 50);
        particle.y += this.randomBetween(-50, 50);
        particle.vx = this.randomBetween(-30, 30);
        particle.vy = this.randomBetween(-80, -40);
        break;
        
      case 'alignment_grid':
        const gridSize = Math.ceil(Math.sqrt(particles));
        const gridX = index % gridSize;
        const gridY = Math.floor(index / gridSize);
        particle.x += (gridX - gridSize / 2) * 40;
        particle.y += (gridY - gridSize / 2) * 40;
        break;
        
      case 'expanding_universe':
        const universeAngle = Math.random() * Math.PI * 2;
        const universeDistance = this.randomBetween(0, 200);
        particle.x += Math.cos(universeAngle) * universeDistance;
        particle.y += Math.sin(universeAngle) * universeDistance;
        particle.vx = Math.cos(universeAngle) * this.randomBetween(20, 100);
        particle.vy = Math.sin(universeAngle) * this.randomBetween(20, 100);
        break;
    }
  }

  updateParticles() {
    for (const [systemId, system] of this.particleSystems) {
      if (!system.active) continue;

      const deltaTime = Date.now() - system.startTime;
      
      system.particles.forEach(particle => {
        this.updateParticlePhysics(particle, deltaTime, system.config);
        
        particle.age += 16; // Assume 60fps
        particle.life = Math.max(0, 1 - (particle.age / particle.maxLife));
        
        if (particle.life <= 0) {
          particle.active = false;
        }
      });

      // Remove inactive particles
      system.particles = system.particles.filter(p => p.active !== false);

      // Remove system if all particles are dead
      if (system.particles.length === 0) {
        this.particleSystems.delete(systemId);
      }
    }
  }

  updateParticlePhysics(particle, deltaTime, config) {
    const { physics } = config;
    const dt = 0.016; // 60fps delta time
    
    switch (physics) {
      case 'gentle_rise':
        particle.vy -= 30 * dt; // Gentle upward acceleration
        particle.vx *= 0.99; // Air resistance
        particle.vy *= 0.98;
        break;
        
      case 'energetic_scatter':
        particle.vy += 20 * dt; // Slight gravity
        particle.vx *= 0.995;
        particle.vy *= 0.995;
        break;
        
      case 'floating_sparkles':
        particle.vy += Math.sin(deltaTime * 0.001 + particle.index) * 0.5;
        particle.vx += Math.cos(deltaTime * 0.001 + particle.index) * 0.3;
        break;
        
      case 'snap_to_grid':
        // Particles snap to grid positions with ease
        const targetX = Math.round(particle.x / 20) * 20;
        const targetY = Math.round(particle.y / 20) * 20;
        particle.vx += (targetX - particle.x) * 0.1;
        particle.vy += (targetY - particle.y) * 0.1;
        break;
        
      case 'transcendent_flow':
        // Complex transcendent movement
        particle.vy -= 40 * dt;
        particle.vx += Math.sin(deltaTime * 0.002 + particle.index) * 20 * dt;
        particle.vy += Math.cos(deltaTime * 0.003 + particle.index) * 10 * dt;
        break;
    }

    // Update position
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
    particle.rotation += particle.rotationSpeed;
  }

  renderParticles() {
    if (!this.effectsConfig.enabled) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    for (const system of this.particleSystems.values()) {
      system.particles.forEach(particle => {
        this.renderParticle(particle);
      });
    }
  }

  renderParticle(particle) {
    const { ctx } = this;
    const alpha = particle.life;
    
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.rotation);
    ctx.globalAlpha = alpha;
    
    // Render particle based on type
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size);
    gradient.addColorStop(0, particle.color);
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
    
    // Add divine glow effect
    if (this.effectsConfig.effectIntensity !== 'subtle') {
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = particle.size * 2;
      ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
    }
    
    ctx.restore();
  }

  /**
   * DIVINE EFFECT TRIGGERS
   */

  // Create blessing effect at specific location
  createBlessingEffect(x, y, intensity = 'medium') {
    if (!this.effectsConfig.enabled) return;

    const config = {
      ...this.effectPresets.blessing,
      origin: { x, y },
      particles: this.adjustForPerformance(this.effectPresets.blessing.particles, intensity)
    };

    return this.createParticleSystem(config);
  }

  // Create achievement celebration
  createAchievementCelebration(rarity = 'common') {
    if (!this.effectsConfig.enabled) return;

    const rarityConfigs = {
      common: { particles: 12, duration: 2000, colors: this.divineColors.blessing },
      uncommon: { particles: 16, duration: 2500, colors: this.divineColors.spark },
      rare: { particles: 24, duration: 3000, colors: this.divineColors.sacred },
      epic: { particles: 32, duration: 4000, colors: this.divineColors.divine },
      legendary: { particles: 40, duration: 5000, colors: this.divineColors.golden },
      mythic: { particles: 50, duration: 6000, colors: this.divineColors.mythic }
    };

    const config = {
      ...this.effectPresets.achievement,
      ...rarityConfigs[rarity],
      origin: { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    };

    // Create multiple bursts for higher rarities
    const burstCount = rarity === 'mythic' ? 3 : rarity === 'legendary' ? 2 : 1;
    
    for (let i = 0; i < burstCount; i++) {
      setTimeout(() => {
        this.createParticleSystem(config);
      }, i * 500);
    }
  }

  // Create divine touch effect for UI elements
  createDivineTouchEffect(element) {
    if (!this.effectsConfig.enabled || !element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const config = {
      ...this.effectPresets.divine_touch,
      origin: { x: centerX, y: centerY }
    };

    return this.createParticleSystem(config);
  }

  // Create perfect alignment effect
  createAlignmentEffect(elements) {
    if (!this.effectsConfig.enabled || !elements.length) return;

    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      
      setTimeout(() => {
        const config = {
          ...this.effectPresets.perfect_alignment,
          origin: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
          particles: 6
        };
        
        this.createParticleSystem(config);
      }, index * 100);
    });
  }

  // Create code generation success effect
  createCodeBlessingEffect() {
    if (!this.effectsConfig.enabled) return;

    // Create cascading blessing effects
    const points = [
      { x: window.innerWidth * 0.2, y: window.innerHeight * 0.3 },
      { x: window.innerWidth * 0.5, y: window.innerHeight * 0.2 },
      { x: window.innerWidth * 0.8, y: window.innerHeight * 0.4 }
    ];

    points.forEach((point, index) => {
      setTimeout(() => {
        this.createBlessingEffect(point.x, point.y, 'high');
      }, index * 300);
    });
  }

  // Create seasonal effect
  createSeasonalEffect(season, intensity = 'medium') {
    if (!this.effectsConfig.seasonalEffects || !this.effectsConfig.enabled) return;

    const seasonalConfig = {
      spring: {
        particles: 20,
        duration: 3000,
        colors: this.divineColors.seasonal.spring,
        pattern: 'gentle_flow',
        physics: 'floating_sparkles'
      },
      summer: {
        particles: 25,
        duration: 2500,
        colors: this.divineColors.seasonal.summer,
        pattern: 'radial_burst',
        physics: 'energetic_scatter'
      },
      autumn: {
        particles: 18,
        duration: 4000,
        colors: this.divineColors.seasonal.autumn,
        pattern: 'gentle_flow',
        physics: 'gentle_rise'
      },
      winter: {
        particles: 15,
        duration: 5000,
        colors: this.divineColors.seasonal.winter,
        pattern: 'floating_sparkles',
        physics: 'transcendent_flow'
      }
    };

    const config = {
      ...seasonalConfig[season],
      origin: { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    };

    return this.createParticleSystem(config);
  }

  /**
   * DOM ENHANCEMENT EFFECTS
   */

  // Add divine hover effects to elements
  addDivineHover(element, effectType = 'gentle') {
    if (!element || !this.effectsConfig.enabled) return;

    const hoverHandler = (e) => {
      const rect = element.getBoundingClientRect();
      const x = rect.left + Math.random() * rect.width;
      const y = rect.top + Math.random() * rect.height;
      
      this.createBlessingEffect(x, y, 'low');
    };

    element.addEventListener('mouseenter', hoverHandler);
    
    // Return cleanup function
    return () => element.removeEventListener('mouseenter', hoverHandler);
  }

  // Add divine glow to elements
  addDivineGlow(element, intensity = 'medium', color = null) {
    if (!element) return;

    const glowColor = color || this.divineColors.divine[0];
    const glowIntensity = {
      'low': '0 0 10px',
      'medium': '0 0 20px',
      'high': '0 0 30px'
    }[intensity];

    element.style.transition = 'box-shadow 0.3s ease';
    element.style.boxShadow = `${glowIntensity} ${glowColor}40`;

    // Return cleanup function
    return () => {
      element.style.boxShadow = '';
    };
  }

  // Create pulsing divine aura
  createDivineAura(element, duration = 3000) {
    if (!element) return;

    element.classList.add('divine-aura');
    
    setTimeout(() => {
      element.classList.remove('divine-aura');
    }, duration);
  }

  // Create flowing divine energy around element
  createEnergyFlow(element, direction = 'clockwise') {
    if (!element || !this.effectsConfig.enabled) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const radius = Math.max(rect.width, rect.height) / 2 + 20;

    const config = {
      type: 'energy_flow',
      particles: 12,
      duration: 2000,
      colors: this.divineColors.divine,
      origin: { x: centerX, y: centerY },
      pattern: 'energy_circle',
      physics: 'orbital',
      radius: radius,
      direction: direction
    };

    return this.createParticleSystem(config);
  }

  /**
   * UTILITY METHODS
   */

  adjustForPerformance(baseValue, intensity) {
    const performanceMultiplier = {
      'minimal': 0.5,
      'balanced': 1.0,
      'maximum': 1.5
    }[this.effectsConfig.performanceMode];

    const intensityMultiplier = {
      'low': 0.6,
      'medium': 1.0,
      'high': 1.4
    }[intensity];

    return Math.round(baseValue * performanceMultiplier * intensityMultiplier);
  }

  randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  selectColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  processEffectQueue() {
    if (this.effectQueue.length === 0) return;

    const now = Date.now();
    
    this.effectQueue = this.effectQueue.filter(effect => {
      if (now >= effect.triggerTime) {
        effect.execute();
        return false; // Remove from queue
      }
      return true; // Keep in queue
    });
  }

  queueEffect(effectFunction, delay = 0) {
    this.effectQueue.push({
      execute: effectFunction,
      triggerTime: Date.now() + delay
    });
  }

  clearAllEffects() {
    this.particleSystems.clear();
    this.activeAnimations.clear();
    this.effectQueue = [];
    
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  // CSS for DOM-based effects
  getEffectCSS() {
    return `
      /* Divine Aura Effect */
      .divine-aura {
        position: relative;
        overflow: visible;
      }
      
      .divine-aura::before {
        content: '';
        position: absolute;
        inset: -10px;
        background: radial-gradient(circle, rgba(255, 107, 53, 0.2), transparent 70%);
        border-radius: inherit;
        animation: divineAura 3s ease-in-out;
        pointer-events: none;
        z-index: -1;
      }
      
      @keyframes divineAura {
        0%, 100% { 
          opacity: 0; 
          transform: scale(0.8); 
        }
        50% { 
          opacity: 1; 
          transform: scale(1.2); 
        }
      }
      
      /* Divine Hover Enhancement */
      .divine-hover-enhanced {
        transition: all 0.3s ease;
        position: relative;
      }
      
      .divine-hover-enhanced::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, transparent, rgba(255, 107, 53, 0.1), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        border-radius: inherit;
      }
      
      .divine-hover-enhanced:hover::after {
        opacity: 1;
      }
      
      /* Divine Glow States */
      .divine-glow-low {
        box-shadow: 0 0 10px rgba(255, 107, 53, 0.3);
      }
      
      .divine-glow-medium {
        box-shadow: 0 0 20px rgba(255, 107, 53, 0.4);
      }
      
      .divine-glow-high {
        box-shadow: 0 0 30px rgba(255, 107, 53, 0.5);
      }
      
      /* Pulsing Divine Effect */
      .divine-pulse {
        animation: divinePulse 2s ease-in-out infinite;
      }
      
      @keyframes divinePulse {
        0%, 100% { 
          box-shadow: 0 0 5px rgba(255, 107, 53, 0.3); 
        }
        50% { 
          box-shadow: 0 0 25px rgba(255, 107, 53, 0.6); 
        }
      }
      
      /* Divine Shimmer Effect */
      .divine-shimmer {
        position: relative;
        overflow: hidden;
      }
      
      .divine-shimmer::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 215, 0, 0.4),
          transparent
        );
        animation: divineShimmer 2s ease-in-out;
      }
      
      @keyframes divineShimmer {
        0% { left: -100%; }
        100% { left: 100%; }
      }
      
      /* Sacred Fire Flicker */
      .sacred-fire-flicker {
        animation: sacredFireFlicker 0.5s ease-in-out infinite alternate;
      }
      
      @keyframes sacredFireFlicker {
        0% { 
          filter: brightness(1) hue-rotate(0deg); 
          transform: scale(1);
        }
        100% { 
          filter: brightness(1.1) hue-rotate(5deg); 
          transform: scale(1.02);
        }
      }
      
      /* Divine Ascension Effect */
      .divine-ascension {
        animation: divineAscension 1s ease-out forwards;
      }
      
      @keyframes divineAscension {
        0% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        100% {
          opacity: 0;
          transform: translateY(-50px) scale(1.2);
        }
      }
      
      /* Seasonal Effect Variants */
      .seasonal-spring .divine-aura::before {
        background: radial-gradient(circle, rgba(50, 205, 50, 0.2), transparent 70%);
      }
      
      .seasonal-summer .divine-aura::before {
        background: radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent 70%);
      }
      
      .seasonal-autumn .divine-aura::before {
        background: radial-gradient(circle, rgba(205, 133, 63, 0.2), transparent 70%);
      }
      
      .seasonal-winter .divine-aura::before {
        background: radial-gradient(circle, rgba(65, 105, 225, 0.2), transparent 70%);
      }
      
      /* Performance Mode Adjustments */
      @media (prefers-reduced-motion: reduce) {
        .divine-aura::before,
        .divine-pulse,
        .divine-shimmer::before,
        .sacred-fire-flicker,
        .divine-ascension {
          animation: none !important;
        }
        
        .divine-hover-enhanced::after {
          transition: none;
        }
      }
      
      /* Mobile Performance Optimizations */
      @media (max-width: 768px) {
        .divine-aura::before {
          animation-duration: 1.5s;
        }
        
        .divine-shimmer::before {
          animation-duration: 1s;
        }
      }
    `;
  }

  /**
   * ADVANCED EFFECT COMBINATIONS
   */

  // Create complex mythic achievement effect
  createMythicAchievementSpectacle() {
    if (!this.effectsConfig.enabled) return;

    // Multi-phase mythic celebration
    const phases = [
      () => this.createAchievementCelebration('mythic'),
      () => this.createDivineAuraWave(),
      () => this.createTranscendentBurst(),
      () => this.createEternalFlameEffect()
    ];

    phases.forEach((phase, index) => {
      this.queueEffect(phase, index * 1000);
    });
  }

  // Create divine aura wave effect
  createDivineAuraWave() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let ring = 0; ring < 5; ring++) {
      this.queueEffect(() => {
        const config = {
          type: 'aura_wave',
          particles: 16,
          duration: 2000,
          colors: this.divineColors.mythic,
          origin: { x: centerX, y: centerY },
          pattern: 'expanding_ring',
          physics: 'wave_expansion',
          ring: ring
        };
        
        this.createParticleSystem(config);
      }, ring * 200);
    }
  }

  // Create transcendent burst
  createTranscendentBurst() {
    const config = {
      ...this.effectPresets.mythic_moment,
      particles: 60,
      duration: 4000,
      origin: { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    };

    this.createParticleSystem(config);
  }

  // Create eternal flame effect
  createEternalFlameEffect() {
    const flamePoints = [
      { x: window.innerWidth * 0.2, y: window.innerHeight * 0.8 },
      { x: window.innerWidth * 0.8, y: window.innerHeight * 0.8 },
      { x: window.innerWidth * 0.5, y: window.innerHeight * 0.1 }
    ];

    flamePoints.forEach((point, index) => {
      this.queueEffect(() => {
        const config = {
          type: 'eternal_flame',
          particles: 20,
          duration: 3000,
          colors: this.divineColors.flame,
          origin: point,
          pattern: 'flame_dance',
          physics: 'flame_physics'
        };
        
        this.createParticleSystem(config);
      }, index * 500);
    });
  }

  // Create divine lightning effect
  createDivineLightning(startPoint, endPoint) {
    if (!this.effectsConfig.enabled) return;

    const lightning = document.createElement('div');
    lightning.className = 'divine-lightning';
    lightning.style.cssText = `
      position: fixed;
      width: 2px;
      background: linear-gradient(to bottom, #FFD700, #FF6B35, transparent);
      box-shadow: 0 0 10px #FFD700;
      z-index: 9998;
      pointer-events: none;
    `;

    // Calculate lightning path
    const deltaX = endPoint.x - startPoint.x;
    const deltaY = endPoint.y - startPoint.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = Math.atan2(deltaY, deltaX);

    lightning.style.left = startPoint.x + 'px';
    lightning.style.top = startPoint.y + 'px';
    lightning.style.height = distance + 'px';
    lightning.style.transform = `rotate(${angle + Math.PI / 2}rad)`;

    document.body.appendChild(lightning);

    // Animate lightning
    lightning.style.animation = 'divineLightningStrike 0.2s ease-out';
    
    setTimeout(() => lightning.remove(), 200);
  }

  /**
   * EFFECT MANAGEMENT & CONTROLS
   */

  // Set effect intensity
  setEffectIntensity(intensity) {
    const validIntensities = ['subtle', 'medium', 'intense'];
    if (validIntensities.includes(intensity)) {
      this.effectsConfig.effectIntensity = intensity;
    }
  }

  // Set performance mode
  setPerformanceMode(mode) {
    const validModes = ['minimal', 'balanced', 'maximum'];
    if (validModes.includes(mode)) {
      this.effectsConfig.performanceMode = mode;
      
      // Adjust max particles based on performance mode
      this.effectsConfig.maxParticles = {
        'minimal': 20,
        'balanced': 50,
        'maximum': 100
      }[mode];
    }
  }

  // Toggle seasonal effects
  toggleSeasonalEffects(enabled) {
    this.effectsConfig.seasonalEffects = enabled;
  }

  // Enable/disable all effects
  setEffectsEnabled(enabled) {
    this.effectsConfig.enabled = enabled;
    
    if (!enabled) {
      this.clearAllEffects();
    }
  }

  // Get current performance stats
  getPerformanceStats() {
    return {
      activeParticleSystems: this.particleSystems.size,
      totalParticles: Array.from(this.particleSystems.values())
        .reduce((sum, system) => sum + system.particles.length, 0),
      queuedEffects: this.effectQueue.length,
      performanceMode: this.effectsConfig.performanceMode,
      effectIntensity: this.effectsConfig.effectIntensity
    };
  }

  /**
   * PUBLIC API METHODS
   */

  // Main method for triggering divine effects
  triggerEffect(effectType, context = {}) {
    if (!this.effectsConfig.enabled) return;

    switch (effectType) {
      case 'blessing':
        return this.createBlessingEffect(
          context.x || window.innerWidth / 2,
          context.y || window.innerHeight / 2,
          context.intensity || 'medium'
        );
        
      case 'achievement':
        return this.createAchievementCelebration(context.rarity || 'common');
        
      case 'divine_touch':
        return this.createDivineTouchEffect(context.element);
        
      case 'alignment':
        return this.createAlignmentEffect(context.elements || []);
        
      case 'code_blessing':
        return this.createCodeBlessingEffect();
        
      case 'seasonal':
        return this.createSeasonalEffect(context.season, context.intensity);
        
      case 'mythic_spectacle':
        return this.createMythicAchievementSpectacle();
        
      case 'divine_lightning':
        return this.createDivineLightning(context.start, context.end);
        
      default:
        console.warn(`Unknown effect type: ${effectType}`);
        return null;
    }
  }

  // Add divine enhancement to DOM element
  enhanceElement(element, enhancementType = 'hover', options = {}) {
    if (!element) return null;

    switch (enhancementType) {
      case 'hover':
        return this.addDivineHover(element, options.intensity);
        
      case 'glow':
        return this.addDivineGlow(element, options.intensity, options.color);
        
      case 'aura':
        this.createDivineAura(element, options.duration);
        break;
        
      case 'energy_flow':
        return this.createEnergyFlow(element, options.direction);
        
      default:
        console.warn(`Unknown enhancement type: ${enhancementType}`);
        return null;
    }
  }

  // Apply CSS effect class to element
  applyCSSEffect(element, effectClass, duration = null) {
    if (!element) return;

    element.classList.add(effectClass);
    
    if (duration) {
      setTimeout(() => {
        element.classList.remove(effectClass);
      }, duration);
    }

    return () => element.classList.remove(effectClass);
  }

  // Batch create multiple effects
  createEffectSequence(effects, interval = 500) {
    effects.forEach((effect, index) => {
      this.queueEffect(() => this.triggerEffect(effect.type, effect.context), index * interval);
    });
  }

  // Save effects configuration
  saveConfiguration() {
    localStorage.setItem('quorra-effects-config', JSON.stringify(this.effectsConfig));
  }

  // Load effects configuration
  loadConfiguration() {
    const saved = localStorage.getItem('quorra-effects-config');
    if (saved) {
      try {
        const config = JSON.parse(saved);
        this.effectsConfig = { ...this.effectsConfig, ...config };
      } catch (error) {
        console.warn('Failed to load effects configuration:', error);
      }
    }
  }

  // Cleanup method
  destroy() {
    this.clearAllEffects();
    
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    
    const styles = document.getElementById('quorra-effects-styles');
    if (styles) {
      styles.remove();
    }
  }
}

// Export singleton instance
const quorraVisualEffects = new QuorraVisualEffects();

export default quorraVisualEffects;
export { QuorraVisualEffects };