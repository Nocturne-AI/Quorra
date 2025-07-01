/**
 * QUORRA DIVINE FONT LOADER
 * Goddess-blessed font loading with sacred performance optimization
 * 
 * Features:
 * - Divine font loading strategies (preload, swap, fallback)
 * - Sacred performance monitoring and optimization
 * - Google Fonts optimization with minimal requests
 * - Font display optimization for zero layout shift
 * - Progressive enhancement with system font fallbacks
 */

class QuorraFontLoader {
  constructor(options = {}) {
    this.config = {
      // Divine loading strategies
      strategy: options.strategy || 'progressive', // 'aggressive', 'progressive', 'conservative'
      enablePreload: options.enablePreload !== false,
      enableSwap: options.enableSwap !== false,
      enableFallbacks: options.enableFallbacks !== false,
      
      // Sacred performance thresholds
      maxLoadTime: options.maxLoadTime || 3000, // 3 seconds
      criticalFontTimeout: options.criticalFontTimeout || 1000, // 1 second
      
      // Divine monitoring
      enableMetrics: options.enableMetrics !== false,
      enableLogging: options.enableLogging || false,
      
      // Google Fonts optimization
      googleFontsDisplay: options.googleFontsDisplay || 'swap',
      combineRequests: options.combineRequests !== false
    };

    this.metrics = {
      loadStartTime: null,
      fontsLoaded: 0,
      totalFonts: 0,
      loadTimes: {},
      fallbacksUsed: 0,
      criticalPathBlocked: false
    };

    this.loadedFonts = new Set();
    this.criticalFonts = new Set();
    this.observers = [];
  }

  /**
   * 🔥 DIVINE FONT LOADING STRATEGIES
   */

  // Load fonts with divine optimization
  async loadDivineFonts(fontConfig) {
    this.metrics.loadStartTime = performance.now();
    this.metrics.totalFonts = this.countTotalFonts(fontConfig);

    try {
      switch (this.config.strategy) {
        case 'aggressive':
          return await this.aggressiveLoadStrategy(fontConfig);
        case 'progressive':
          return await this.progressiveLoadStrategy(fontConfig);
        case 'conservative':
          return await this.conservativeLoadStrategy(fontConfig);
        default:
          return await this.progressiveLoadStrategy(fontConfig);
      }
    } catch (error) {
      console.error('🔥 Divine font loading failed:', error);
      return this.activateSacredFallbacks(fontConfig);
    }
  }

  // Aggressive: Load all fonts immediately (for design-critical applications)
  async aggressiveLoadStrategy(fontConfig) {
    const loadPromises = [];

    // Preload critical fonts
    if (fontConfig.critical) {
      for (const font of fontConfig.critical) {
        loadPromises.push(this.preloadFont(font));
      }
    }

    // Load Google Fonts with optimized requests
    if (fontConfig.googleFonts) {
      loadPromises.push(this.loadOptimizedGoogleFonts(fontConfig.googleFonts));
    }

    // Load custom fonts
    if (fontConfig.custom) {
      for (const font of fontConfig.custom) {
        loadPromises.push(this.loadCustomFont(font));
      }
    }

    const results = await Promise.allSettled(loadPromises);
    return this.processLoadResults(results);
  }

  // Progressive: Load critical first, then progressive enhancement
  async progressiveLoadStrategy(fontConfig) {
    const results = { critical: [], secondary: [] };

    // Phase 1: Critical fonts with timeout
    if (fontConfig.critical) {
      try {
        const criticalPromise = Promise.all(
          fontConfig.critical.map(font => this.preloadFont(font))
        );
        
        results.critical = await Promise.race([
          criticalPromise,
          this.createTimeout(this.config.criticalFontTimeout)
        ]);
      } catch (error) {
        console.warn('🔥 Critical fonts timeout, using fallbacks');
        this.metrics.criticalPathBlocked = true;
      }
    }

    // Phase 2: Secondary fonts (non-blocking)
    if (fontConfig.secondary || fontConfig.googleFonts) {
      this.loadSecondaryFontsAsync(fontConfig);
    }

    return results;
  }

  // Conservative: System fonts first, progressive enhancement
  async conservativeLoadStrategy(fontConfig) {
    // Immediately apply system font fallbacks
    this.applySacredFallbacks(fontConfig);

    // Load fonts in background
    setTimeout(() => {
      this.loadSecondaryFontsAsync(fontConfig);
    }, 100);

    return { strategy: 'conservative', fallbacksApplied: true };
  }

  /**
   * ⚡ GOOGLE FONTS DIVINE OPTIMIZATION
   */

  // Generate optimized Google Fonts URL with divine efficiency
  generateOptimizedGoogleFontsURL(fonts) {
    if (!fonts || fonts.length === 0) return null;

    const baseURL = 'https://fonts.googleapis.com/css2?';
    const families = [];

    // Group fonts by family to minimize requests
    const fontGroups = this.groupFontsByFamily(fonts);

    for (const [family, variants] of fontGroups.entries()) {
      const familyParam = family.replace(/\s+/g, '+');
      const weights = [...new Set(variants.map(v => v.weight || '400'))].sort();
      const styles = [...new Set(variants.map(v => v.style || 'normal'))];
      
      let familyString = `family=${familyParam}:`;
      
      if (styles.includes('italic') && styles.includes('normal')) {
        familyString += `ital,wght@0,${weights.join(';0,')};1,${weights.join(';1,')}`;
      } else {
        familyString += `wght@${weights.join(';')}`;
      }
      
      families.push(familyString);
    }

    const url = baseURL + families.join('&') + `&display=${this.config.googleFontsDisplay}`;
    
    if (this.config.enableLogging) {
      console.log('🔥 Divine Google Fonts URL generated:', url);
    }

    return url;
  }

  // Load Google Fonts with divine optimization
  async loadOptimizedGoogleFonts(fonts) {
    const url = this.generateOptimizedGoogleFontsURL(fonts);
    if (!url) return null;

    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.crossOrigin = 'anonymous';
      
      if (this.config.enablePreload) {
        // Add preconnect for faster DNS resolution
        this.addPreconnect('https://fonts.googleapis.com');
        this.addPreconnect('https://fonts.gstatic.com');
      }

      link.onload = () => {
        this.metrics.fontsLoaded += fonts.length;
        if (this.config.enableLogging) {
          console.log('🔥 Divine Google Fonts loaded successfully');
        }
        resolve({ type: 'google-fonts', fonts, url });
      };

      link.onerror = () => {
        console.error('🔥 Google Fonts loading failed, activating fallbacks');
        this.activateSacredFallbacks({ googleFonts: fonts });
        reject(new Error('Google Fonts loading failed'));
      };

      document.head.appendChild(link);
    });
  }

  /**
   * 🎯 FONT PRELOADING & OPTIMIZATION
   */

  // Preload critical fonts for divine speed
  async preloadFont(fontConfig) {
    const { family, weight = '400', style = 'normal', url, display = 'swap' } = fontConfig;

    return new Promise((resolve, reject) => {
      // Check if already loaded
      if (this.loadedFonts.has(`${family}-${weight}-${style}`)) {
        resolve({ cached: true, font: fontConfig });
        return;
      }

      const startTime = performance.now();

      if (url) {
        // Custom font loading
        this.preloadCustomFont(fontConfig).then(resolve).catch(reject);
      } else {
        // System/Google font checking
        const fontFace = new FontFace(family, `local("${family}")`, {
          weight,
          style,
          display
        });

        fontFace.load().then(() => {
          const loadTime = performance.now() - startTime;
          this.metrics.loadTimes[`${family}-${weight}-${style}`] = loadTime;
          this.loadedFonts.add(`${family}-${weight}-${style}`);
          
          document.fonts.add(fontFace);
          
          resolve({
            font: fontConfig,
            loadTime,
            method: 'FontFace API'
          });
        }).catch(error => {
          console.warn(`🔥 Font ${family} not available, using fallback`);
          this.metrics.fallbacksUsed++;
          resolve({
            font: fontConfig,
            fallbackUsed: true,
            error: error.message
          });
        });
      }
    });
  }

  // Preload custom font files
  async preloadCustomFont(fontConfig) {
    const { family, url, weight, style, display = 'swap' } = fontConfig;

    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2'; // Prefer woff2 for divine compression
      link.href = url;
      link.crossOrigin = 'anonymous';

      const fontFace = new FontFace(family, `url(${url})`, {
        weight: weight || '400',
        style: style || 'normal',
        display
      });

      link.onload = () => {
        fontFace.load().then(() => {
          document.fonts.add(fontFace);
          this.loadedFonts.add(`${family}-${weight}-${style}`);
          this.metrics.fontsLoaded++;
          
          resolve({
            font: fontConfig,
            method: 'Custom preload',
            loaded: true
          });
        }).catch(reject);
      };

      link.onerror = () => {
        reject(new Error(`Failed to preload custom font: ${url}`));
      };

      document.head.appendChild(link);
    });
  }

  /**
   * 🛡️ SACRED FALLBACK SYSTEM
   */

  // Define divine fallback font stacks
  getSacredFallbacks() {
    return {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      serif: 'Georgia, "Times New Roman", Times, serif',
      mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
      display: '"Helvetica Neue", Arial, sans-serif',
      handwriting: '"Bradley Hand", "Brush Script MT", cursive'
    };
  }

  // Apply sacred fallbacks immediately
  applySacredFallbacks(fontConfig) {
    const fallbacks = this.getSacredFallbacks();
    const style = document.createElement('style');
    style.id = 'quorra-sacred-fallbacks';
    
    let css = `
      /* 🔥 Quorra Sacred Fallbacks - Divine Typography Protection */
      :root {
        --font-sans: ${fallbacks.sans};
        --font-serif: ${fallbacks.serif};
        --font-mono: ${fallbacks.mono};
        --font-display: ${fallbacks.display};
      }
      
      body {
        font-family: var(--font-sans);
        font-display: swap;
      }
    `;

    // Apply specific fallbacks based on config
    if (fontConfig.critical) {
      for (const font of fontConfig.critical) {
        const fallbackType = this.determineFallbackType(font.family);
        css += `
          .font-${this.sanitizeFontName(font.family)} {
            font-family: "${font.family}", ${fallbacks[fallbackType]};
            font-display: swap;
          }
        `;
      }
    }

    style.textContent = css;
    document.head.appendChild(style);

    if (this.config.enableLogging) {
      console.log('🔥 Sacred fallbacks activated');
    }
  }

  // Activate fallbacks when fonts fail
  activateSacredFallbacks(fontConfig) {
    this.applySacredFallbacks(fontConfig);
    this.metrics.fallbacksUsed++;
    
    return {
      fallbacksActivated: true,
      config: fontConfig,
      timestamp: performance.now()
    };
  }

  /**
   * 📊 DIVINE PERFORMANCE MONITORING
   */

  // Generate divine performance report
  generateDivineReport() {
    const totalLoadTime = performance.now() - (this.metrics.loadStartTime || 0);
    
    const report = {
      // Divine Metrics
      divineSpeed: {
        totalLoadTime: Math.round(totalLoadTime),
        averageFontLoadTime: this.calculateAverageFontLoadTime(),
        criticalPathBlocked: this.metrics.criticalPathBlocked,
        fallbacksUsed: this.metrics.fallbacksUsed
      },
      
      // Sacred Statistics
      fontStatistics: {
        totalFonts: this.metrics.totalFonts,
        fontsLoaded: this.metrics.fontsLoaded,
        loadSuccess: (this.metrics.fontsLoaded / this.metrics.totalFonts) * 100,
        loadDetails: this.metrics.loadTimes
      },
      
      // Divine Recommendations
      optimization: this.generateOptimizationRecommendations(),
      
      // Sacred Compliance
      performance: {
        meetsCoreWebVitals: totalLoadTime < 2500,
        meetsAccessibility: this.metrics.fallbacksUsed === 0 || this.config.enableFallbacks,
        divineBlessingLevel: this.calculateDivineBlessingLevel()
      }
    };

    if (this.config.enableLogging) {
      console.log('🔥 Divine Font Performance Report:', report);
    }

    return report;
  }

  // Calculate divine blessing level (0-100)
  calculateDivineBlessingLevel() {
    let blessingPoints = 0;
    
    // Speed blessing (40 points max)
    const totalLoadTime = performance.now() - (this.metrics.loadStartTime || 0);
    if (totalLoadTime < 1000) blessingPoints += 40;
    else if (totalLoadTime < 2000) blessingPoints += 30;
    else if (totalLoadTime < 3000) blessingPoints += 20;
    else blessingPoints += 10;
    
    // Success blessing (30 points max)
    const successRate = (this.metrics.fontsLoaded / this.metrics.totalFonts) * 100;
    blessingPoints += Math.round(successRate * 0.3);
    
    // Fallback blessing (20 points max)
    if (this.config.enableFallbacks && this.metrics.fallbacksUsed === 0) {
      blessingPoints += 20;
    } else if (this.config.enableFallbacks) {
      blessingPoints += 10;
    }
    
    // Strategy blessing (10 points max)
    if (this.config.strategy === 'progressive') blessingPoints += 10;
    else if (this.config.strategy === 'conservative') blessingPoints += 8;
    else blessingPoints += 6;
    
    return Math.min(100, blessingPoints);
  }

  /**
   * 🔧 UTILITY METHODS
   */

  // Group fonts by family for request optimization
  groupFontsByFamily(fonts) {
    const groups = new Map();
    
    for (const font of fonts) {
      const family = font.family || font.name;
      if (!groups.has(family)) {
        groups.set(family, []);
      }
      groups.get(family).push(font);
    }
    
    return groups;
  }

  // Add preconnect links for divine speed
  addPreconnect(url) {
    if (document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
      return; // Already exists
    }
    
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }

  // Determine appropriate fallback type
  determineFallbackType(fontFamily) {
    const family = fontFamily.toLowerCase();
    
    if (family.includes('mono') || family.includes('code') || family.includes('courier')) {
      return 'mono';
    } else if (family.includes('serif') || family.includes('times') || family.includes('georgia')) {
      return 'serif';
    } else if (family.includes('script') || family.includes('hand') || family.includes('brush')) {
      return 'handwriting';
    } else if (family.includes('display') || family.includes('headline')) {
      return 'display';
    } else {
      return 'sans';
    }
  }

  // Sanitize font name for CSS classes
  sanitizeFontName(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  }

  // Create timeout promise for divine patience
  createTimeout(ms) {
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Divine patience exceeded')), ms);
    });
  }

  // Count total fonts in configuration
  countTotalFonts(config) {
    let count = 0;
    if (config.critical) count += config.critical.length;
    if (config.secondary) count += config.secondary.length;
    if (config.googleFonts) count += config.googleFonts.length;
    if (config.custom) count += config.custom.length;
    return count;
  }

  // Calculate average font load time
  calculateAverageFontLoadTime() {
    const times = Object.values(this.metrics.loadTimes);
    if (times.length === 0) return 0;
    return Math.round(times.reduce((sum, time) => sum + time, 0) / times.length);
  }

  // Generate optimization recommendations
  generateOptimizationRecommendations() {
    const recommendations = [];
    
    if (this.metrics.fallbacksUsed > 0) {
      recommendations.push({
        type: 'fallback-optimization',
        message: 'Consider using system fonts or improving font loading strategy',
        priority: 'medium'
      });
    }
    
    const totalLoadTime = performance.now() - (this.metrics.loadStartTime || 0);
    if (totalLoadTime > 3000) {
      recommendations.push({
        type: 'performance-critical',
        message: 'Font loading time exceeds divine standards. Consider reducing font count or using progressive strategy',
        priority: 'high'
      });
    }
    
    if (this.metrics.fontsLoaded < this.metrics.totalFonts) {
      recommendations.push({
        type: 'reliability',
        message: 'Some fonts failed to load. Ensure fallback systems are in place',
        priority: 'high'
      });
    }
    
    return recommendations;
  }

  // Load secondary fonts asynchronously
  async loadSecondaryFontsAsync(fontConfig) {
    const promises = [];
    
    if (fontConfig.secondary) {
      for (const font of fontConfig.secondary) {
        promises.push(this.preloadFont(font));
      }
    }
    
    if (fontConfig.googleFonts) {
      promises.push(this.loadOptimizedGoogleFonts(fontConfig.googleFonts));
    }
    
    try {
      await Promise.allSettled(promises);
      if (this.config.enableLogging) {
        console.log('🔥 Secondary fonts loaded with divine grace');
      }
    } catch (error) {
      console.warn('🔥 Some secondary fonts failed, but divine fallbacks protect us');
    }
  }

  // Process load results
  processLoadResults(results) {
    const processed = {
      successful: [],
      failed: [],
      fallbacks: []
    };
    
    for (const result of results) {
      if (result.status === 'fulfilled') {
        if (result.value.fallbackUsed) {
          processed.fallbacks.push(result.value);
        } else {
          processed.successful.push(result.value);
        }
      } else {
        processed.failed.push(result.reason);
      }
    }
    
    return processed;
  }
}

// Divine font loading configurations
export const DivineFontConfigs = {
  // Performance-first configuration
  performance: {
    strategy: 'conservative',
    enablePreload: true,
    enableSwap: true,
    enableFallbacks: true,
    maxLoadTime: 2000,
    criticalFontTimeout: 800
  },
  
  // Design-first configuration
  design: {
    strategy: 'aggressive',
    enablePreload: true,
    enableSwap: true,
    enableFallbacks: true,
    maxLoadTime: 4000,
    criticalFontTimeout: 1500
  },
  
  // Balanced configuration (recommended)
  balanced: {
    strategy: 'progressive',
    enablePreload: true,
    enableSwap: true,
    enableFallbacks: true,
    maxLoadTime: 3000,
    criticalFontTimeout: 1000
  }
};

// Create divine font loader instance
const quorraFontLoader = new QuorraFontLoader(DivineFontConfigs.balanced);

export default quorraFontLoader;