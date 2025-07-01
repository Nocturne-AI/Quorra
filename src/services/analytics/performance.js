/**
 * QUORRA Performance Service - CORRECTED VERSION
 * Sacred monitoring of divine speed and optimization
 * Tracks loading times, rendering performance, and optimization opportunities
 */

class PerformanceService {
  constructor() {
    this.metrics = new Map();
    this.observers = new Map();
    this.intervals = new Set(); // Track intervals for cleanup
    this.thresholds = {
      pageLoad: 3000, // 3 seconds - divine speed
      firstPaint: 1000, // 1 second - blessed rendering
      interaction: 100, // 100ms - responsive divinity
      codeSize: 50000, // 50KB - sacred optimization
      codeGeneration: 5000 // 5 seconds - blessed forging
    };
    
    this.isSupported = this.checkSupport();
    this.isDestroyed = false; // Track destruction state
    
    if (this.isSupported) {
      this.initializeObservers();
    }
    
    console.log('⚡ Divine performance monitoring awakened');
  }

  /**
   * 🚀 Initialize Performance Observers - IMPROVED ERROR HANDLING
   * Sacred watchers for divine speed metrics
   */
  initializeObservers() {
    if (!this.isSupported || this.isDestroyed) return;

    try {
      // Navigation timing observer
      if ('PerformanceObserver' in window && 'getEntriesByType' in performance) {
        this.observeNavigationTiming();
        this.observePaintTiming();
        this.observeLayoutShifts();
        this.observeLargestContentfulPaint();
      }

      // Resource timing observer
      this.observeResourceTiming();
      
      // Memory usage observer - with cleanup tracking
      this.observeMemoryUsage();
      
    } catch (error) {
      console.warn('Performance observers failed to initialize:', error);
      // Graceful degradation - continue without observers
    }
  }

  /**
   * 📊 Track Page Load Performance - IMPROVED NULL CHECKS
   * Divine speed measurement for page loading
   */
  trackPageLoad() {
    if (!this.isSupported || this.isDestroyed) return null;

    try {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (!navigation) {
        console.warn('Navigation timing not available');
        return null;
      }

      const metrics = {
        dns: Math.max(0, navigation.domainLookupEnd - navigation.domainLookupStart),
        tcp: Math.max(0, navigation.connectEnd - navigation.connectStart),
        request: Math.max(0, navigation.responseStart - navigation.requestStart),
        response: Math.max(0, navigation.responseEnd - navigation.responseStart),
        processing: Math.max(0, navigation.domContentLoadedEventStart - navigation.responseEnd),
        load: Math.max(0, navigation.loadEventEnd - navigation.loadEventStart),
        total: Math.max(0, navigation.loadEventEnd - navigation.fetchStart)
      };

      this.recordMetric('page_load', {
        ...metrics,
        score: this.calculateLoadScore(metrics.total),
        timestamp: Date.now(),
        blessing: metrics.total < this.thresholds.pageLoad ? 'Divine Speed' : 'Mortal Pace'
      });

      return metrics;
    } catch (error) {
      console.warn('Page load tracking failed:', error);
      return null;
    }
  }

  /**
   * 🎨 Track Rendering Performance - IMPROVED PROMISE HANDLING
   * Sacred measurement of visual creation speed
   */
  async trackRenderingPerformance(componentName, renderFunction) {
    if (!componentName || typeof renderFunction !== 'function') {
      throw new Error('Invalid parameters for rendering performance tracking');
    }

    try {
      const startTime = performance.now();
      const startMemory = this.getMemoryUsage();

      // Execute the rendering with error handling
      let result;
      try {
        result = await Promise.resolve(renderFunction());
      } catch (renderError) {
        console.error(`Rendering failed for ${componentName}:`, renderError);
        throw renderError;
      }

      const endTime = performance.now();
      const endMemory = this.getMemoryUsage();
      const renderTime = endTime - startTime;

      this.recordMetric('component_render', {
        component: componentName,
        renderTime,
        memoryDelta: endMemory.used - startMemory.used,
        score: this.calculateRenderScore(renderTime),
        timestamp: Date.now(),
        blessing: renderTime < 16 ? 'Silky Smooth' : renderTime < 100 ? 'Divine' : 'Needs Blessing'
      });

      return {
        result,
        renderTime,
        memoryUsage: endMemory.used - startMemory.used
      };
    } catch (error) {
      console.error('Rendering performance tracking failed:', error);
      throw error;
    }
  }

  /**
   * 🔨 Track Code Generation Performance - IMPROVED TYPE CHECKING
   * Sacred measurement of divine forging speed
   */
  async trackCodeGeneration(generationFunction, context = {}) {
    if (typeof generationFunction !== 'function') {
      throw new Error('Generation function must be a function');
    }

    const startTime = performance.now();
    const startMemory = this.getMemoryUsage();

    try {
      const result = await Promise.resolve(generationFunction());
      const endTime = performance.now();
      const endMemory = this.getMemoryUsage();
      
      const generationTime = endTime - startTime;
      const memoryUsed = Math.max(0, endMemory.used - startMemory.used);

      // Calculate code size if HTML/CSS provided
      const codeSize = this.calculateCodeSize(result);

      const metrics = {
        generationTime,
        memoryUsed,
        codeSize,
        compressionRatio: this.calculateCompressionRatio(result),
        performance: this.calculateCodePerformance(codeSize, generationTime),
        context: context.industry || 'unknown',
        timestamp: Date.now()
      };

      this.recordMetric('code_generation', {
        ...metrics,
        score: this.calculateGenerationScore(generationTime, codeSize),
        blessing: this.getGenerationBlessing(metrics)
      });

      return {
        ...result,
        performanceMetrics: metrics
      };
    } catch (error) {
      const endTime = performance.now();
      const errorTime = endTime - startTime;

      this.recordMetric('code_generation_error', {
        errorTime,
        error: error.message || 'Unknown error',
        context: context.industry || 'unknown',
        timestamp: Date.now()
      });

      throw error;
    }
  }

  /**
   * 📱 Track Interaction Performance - IMPROVED FRAME HANDLING
   * Sacred measurement of user experience responsiveness
   */
  trackInteraction(interactionType, interactionFunction) {
    if (typeof interactionFunction !== 'function') {
      return Promise.reject(new Error('Interaction function must be a function'));
    }

    return new Promise((resolve, reject) => {
      try {
        const startTime = performance.now();

        const result = interactionFunction();

        // Use requestAnimationFrame to measure after paint
        const rafId = requestAnimationFrame(() => {
          const endTime = performance.now();
          const interactionTime = endTime - startTime;

          this.recordMetric('interaction', {
            type: interactionType,
            responseTime: interactionTime,
            score: this.calculateInteractionScore(interactionTime),
            timestamp: Date.now(),
            blessing: interactionTime < this.thresholds.interaction ? 'Lightning Fast' : 'Divine Response'
          });

          resolve({
            result,
            responseTime: interactionTime
          });
        });

        // Cleanup timeout fallback
        setTimeout(() => {
          cancelAnimationFrame(rafId);
          const endTime = performance.now();
          const interactionTime = endTime - startTime;
          
          resolve({
            result,
            responseTime: interactionTime
          });
        }, 1000); // 1 second fallback
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * 🧠 Track Memory Usage - IMPROVED BROWSER COMPATIBILITY
   * Sacred monitoring of divine resource consumption
   */
  getMemoryUsage() {
    try {
      if (performance.memory && typeof performance.memory === 'object') {
        return {
          used: performance.memory.usedJSHeapSize || 0,
          total: performance.memory.totalJSHeapSize || 0,
          limit: performance.memory.jsHeapSizeLimit || 0
        };
      }
    } catch (error) {
      console.warn('Memory usage tracking not available:', error);
    }
    return { used: 0, total: 0, limit: 0 };
  }

  /**
   * 📊 Observe Navigation Timing - IMPROVED ERROR HANDLING
   * Sacred watcher for page load metrics
   */
  observeNavigationTiming() {
    try {
      const observer = new PerformanceObserver((list) => {
        try {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'navigation' && !this.isDestroyed) {
              this.trackPageLoad();
            }
          });
        } catch (error) {
          console.warn('Navigation timing observation failed:', error);
        }
      });

      observer.observe({ entryTypes: ['navigation'] });
      this.observers.set('navigation', observer);
    } catch (error) {
      console.warn('Navigation timing observer setup failed:', error);
    }
  }

  /**
   * 🎨 Observe Paint Timing - IMPROVED ERROR HANDLING
   * Sacred watcher for visual rendering
   */
  observePaintTiming() {
    try {
      const observer = new PerformanceObserver((list) => {
        try {
          list.getEntries().forEach((entry) => {
            if (!this.isDestroyed) {
              this.recordMetric('paint_timing', {
                type: entry.name,
                time: entry.startTime,
                score: this.calculatePaintScore(entry.startTime),
                timestamp: Date.now(),
                blessing: entry.startTime < this.thresholds.firstPaint ? 'Instant Divine' : 'Swift Blessing'
              });
            }
          });
        } catch (error) {
          console.warn('Paint timing observation failed:', error);
        }
      });

      observer.observe({ entryTypes: ['paint'] });
      this.observers.set('paint', observer);
    } catch (error) {
      console.warn('Paint timing observer setup failed:', error);
    }
  }

  /**
   * 📏 Observe Layout Shifts - IMPROVED ERROR HANDLING
   * Sacred watcher for visual stability
   */
  observeLayoutShifts() {
    try {
      let clsValue = 0;
      
      const observer = new PerformanceObserver((list) => {
        try {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput && !this.isDestroyed) {
              clsValue += entry.value;
            }
          }

          if (!this.isDestroyed) {
            this.recordMetric('layout_shift', {
              cumulativeScore: clsValue,
              score: this.calculateLayoutScore(clsValue),
              timestamp: Date.now(),
              blessing: clsValue < 0.1 ? 'Rock Steady' : clsValue < 0.25 ? 'Stable Divine' : 'Needs Steadying'
            });
          }
        } catch (error) {
          console.warn('Layout shift observation failed:', error);
        }
      });

      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.set('layout-shift', observer);
    } catch (error) {
      console.warn('Layout shift observer setup failed:', error);
    }
  }

  /**
   * 🖼️ Observe Largest Contentful Paint - IMPROVED ERROR HANDLING
   * Sacred watcher for content loading
   */
  observeLargestContentfulPaint() {
    try {
      const observer = new PerformanceObserver((list) => {
        try {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];

          if (lastEntry && !this.isDestroyed) {
            this.recordMetric('largest_contentful_paint', {
              time: lastEntry.startTime,
              element: lastEntry.element?.tagName || 'unknown',
              score: this.calculateLCPScore(lastEntry.startTime),
              timestamp: Date.now(),
              blessing: lastEntry.startTime < 2500 ? 'Lightning Content' : 'Swift Loading'
            });
          }
        } catch (error) {
          console.warn('LCP observation failed:', error);
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.set('lcp', observer);
    } catch (error) {
      console.warn('LCP observer setup failed:', error);
    }
  }

  /**
   * 📦 Observe Resource Timing - IMPROVED ERROR HANDLING
   * Sacred watcher for asset loading
   */
  observeResourceTiming() {
    try {
      const observer = new PerformanceObserver((list) => {
        try {
          list.getEntries().forEach((entry) => {
            if (entry.initiatorType && !this.isDestroyed) {
              this.recordMetric('resource_timing', {
                name: entry.name,
                type: entry.initiatorType,
                duration: entry.duration,
                size: entry.transferSize || 0,
                timestamp: Date.now(),
                blessing: entry.duration < 100 ? 'Instant Load' : 'Divine Speed'
              });
            }
          });
        } catch (error) {
          console.warn('Resource timing observation failed:', error);
        }
      });

      observer.observe({ entryTypes: ['resource'] });
      this.observers.set('resource', observer);
    } catch (error) {
      console.warn('Resource timing observer setup failed:', error);
    }
  }

  /**
   * 🧠 Observe Memory Usage - IMPROVED CLEANUP TRACKING
   * Sacred watcher for resource consumption
   */
  observeMemoryUsage() {
    const intervalId = setInterval(() => {
      if (this.isDestroyed) {
        clearInterval(intervalId);
        return;
      }

      try {
        const memory = this.getMemoryUsage();
        const usagePercent = memory.limit > 0 ? (memory.used / memory.limit) * 100 : 0;

        this.recordMetric('memory_usage', {
          ...memory,
          usagePercent,
          score: this.calculateMemoryScore(usagePercent),
          timestamp: Date.now(),
          blessing: usagePercent < 50 ? 'Efficient Divine' : usagePercent < 80 ? 'Well Managed' : 'Needs Optimization'
        });
      } catch (error) {
        console.warn('Memory usage observation failed:', error);
      }
    }, 30000); // Every 30 seconds

    this.intervals.add(intervalId);
  }

  /**
   * 📊 Record Performance Metric - IMPROVED VALIDATION
   * Sacred storage of divine measurements
   */
  recordMetric(type, data) {
    if (this.isDestroyed || !type || !data) return;

    try {
      if (!this.metrics.has(type)) {
        this.metrics.set(type, []);
      }

      const metrics = this.metrics.get(type);
      metrics.push({
        ...data,
        timestamp: data.timestamp || Date.now()
      });

      // Keep only last 100 metrics per type
      if (metrics.length > 100) {
        metrics.splice(0, metrics.length - 100);
      }

      // Log significant performance events
      if (typeof data.score === 'number') {
        if (data.score < 50) {
          console.warn(`⚠️ Performance concern: ${type}`, data);
        } else if (data.score > 90) {
          console.log(`✨ Excellent performance: ${type}`, data);
        }
      }
    } catch (error) {
      console.warn('Failed to record metric:', error);
    }
  }

  /**
   * 📈 Get Performance Summary - IMPROVED ERROR HANDLING
   * Sacred overview of divine speed metrics
   */
  getPerformanceSummary() {
    try {
      const summary = {
        overall: this.calculateOverallScore(),
        categories: {},
        recommendations: [],
        timestamp: Date.now()
      };

      // Summarize each metric type
      for (const [type, metrics] of this.metrics) {
        if (metrics.length > 0) {
          const latest = metrics[metrics.length - 1];
          const average = this.calculateAverageScore(metrics);
          
          summary.categories[type] = {
            latest: latest.score || 0,
            average,
            count: metrics.length,
            blessing: latest.blessing || 'Unknown',
            trend: this.calculateTrend(metrics)
          };
        }
      }

      // Generate recommendations
      summary.recommendations = this.generateRecommendations(summary);

      return summary;
    } catch (error) {
      console.warn('Failed to generate performance summary:', error);
      return {
        overall: { score: 0, grade: 'F', blessing: 'Divine Intervention Needed' },
        categories: {},
        recommendations: [],
        timestamp: Date.now(),
        error: 'Summary generation failed'
      };
    }
  }

  /**
   * 🔢 Calculate Code Metrics - IMPROVED NULL CHECKS
   * Sacred analysis of generated code
   */
  calculateCodeSize(result) {
    if (!result || typeof result !== 'object') return 0;
    
    try {
      const htmlSize = result.html ? new Blob([result.html]).size : 0;
      const cssSize = result.css ? new Blob([result.css]).size : 0;
      
      return htmlSize + cssSize;
    } catch (error) {
      console.warn('Code size calculation failed:', error);
      return 0;
    }
  }

  calculateCompressionRatio(result) {
    if (!result || typeof result !== 'object') return 0;
    
    try {
      if (!result.optimizedSize || !result.originalSize) return 0;
      
      const original = (result.originalSize.html || 0) + (result.originalSize.css || 0);
      const optimized = (result.optimizedSize.html || 0) + (result.optimizedSize.css || 0);
      
      return original > 0 ? ((original - optimized) / original) * 100 : 0;
    } catch (error) {
      console.warn('Compression ratio calculation failed:', error);
      return 0;
    }
  }

  /**
   * ✅ Check Support - IMPROVED COMPATIBILITY DETECTION
   * Sacred compatibility verification
   */
  checkSupport() {
    try {
      return (
        typeof window !== 'undefined' &&
        'performance' in window &&
        'now' in performance &&
        typeof performance.now === 'function'
      );
    } catch (error) {
      console.warn('Performance API support check failed:', error);
      return false;
    }
  }

  /**
   * 🚫 Disconnect Observers - IMPROVED CLEANUP
   * Sacred cleanup when divine monitoring ends
   */
  disconnect() {
    try {
      this.isDestroyed = true;

      // Disconnect all observers
      for (const [name, observer] of this.observers) {
        try {
          observer.disconnect();
          console.log(`📊 ${name} observer disconnected`);
        } catch (error) {
          console.warn(`Failed to disconnect ${name} observer:`, error);
        }
      }
      this.observers.clear();

      // Clear all intervals
      for (const intervalId of this.intervals) {
        try {
          clearInterval(intervalId);
        } catch (error) {
          console.warn('Failed to clear interval:', error);
        }
      }
      this.intervals.clear();

      console.log('📊 Performance service gracefully disconnected');
    } catch (error) {
      console.error('Performance service cleanup failed:', error);
    }
  }

  // ... (keeping all the existing calculation methods unchanged as they work well)
  calculateLoadScore(loadTime) {
    if (typeof loadTime !== 'number' || loadTime < 0) return 0;
    if (loadTime < 1000) return 100;
    if (loadTime < 2000) return 90;
    if (loadTime < 3000) return 80;
    if (loadTime < 5000) return 60;
    return 40;
  }

  calculateRenderScore(renderTime) {
    if (typeof renderTime !== 'number' || renderTime < 0) return 0;
    if (renderTime < 16) return 100; // 60fps
    if (renderTime < 33) return 90; // 30fps
    if (renderTime < 100) return 80;
    if (renderTime < 300) return 60;
    return 40;
  }

  calculateInteractionScore(responseTime) {
    if (typeof responseTime !== 'number' || responseTime < 0) return 0;
    if (responseTime < 50) return 100;
    if (responseTime < 100) return 90;
    if (responseTime < 200) return 80;
    if (responseTime < 500) return 60;
    return 40;
  }

  calculateGenerationScore(time, size) {
    const timeScore = time < 2000 ? 100 : time < 5000 ? 80 : 60;
    const sizeScore = size < 30000 ? 100 : size < 50000 ? 80 : 60;
    return (timeScore + sizeScore) / 2;
  }

  calculatePaintScore(paintTime) {
    if (typeof paintTime !== 'number' || paintTime < 0) return 0;
    if (paintTime < 500) return 100;
    if (paintTime < 1000) return 90;
    if (paintTime < 2000) return 80;
    return 60;
  }

  calculateLayoutScore(clsValue) {
    if (typeof clsValue !== 'number' || clsValue < 0) return 100;
    if (clsValue < 0.1) return 100;
    if (clsValue < 0.25) return 80;
    return 60;
  }

  calculateLCPScore(lcpTime) {
    if (typeof lcpTime !== 'number' || lcpTime < 0) return 0;
    if (lcpTime < 2500) return 100;
    if (lcpTime < 4000) return 80;
    return 60;
  }

  calculateMemoryScore(usagePercent) {
    if (typeof usagePercent !== 'number' || usagePercent < 0) return 100;
    if (usagePercent < 30) return 100;
    if (usagePercent < 50) return 90;
    if (usagePercent < 70) return 80;
    return 60;
  }

  calculateCodePerformance(size, time) {
    const sizeScore = size < this.thresholds.codeSize ? 100 : 80;
    const timeScore = time < this.thresholds.codeGeneration ? 100 : 80;
    return (sizeScore + timeScore) / 2;
  }

  calculateOverallScore() {
    let totalScore = 0;
    let categoryCount = 0;

    for (const [type, metrics] of this.metrics) {
      if (metrics.length > 0) {
        const average = this.calculateAverageScore(metrics);
        totalScore += average;
        categoryCount++;
      }
    }

    const overall = categoryCount > 0 ? totalScore / categoryCount : 0;
    
    return {
      score: Math.round(overall),
      grade: this.getPerformanceGrade(overall),
      blessing: this.getOverallBlessing(overall)
    };
  }

  calculateAverageScore(metrics) {
    const scores = metrics.map(m => m.score).filter(s => typeof s === 'number' && !isNaN(s));
    return scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
  }

  calculateTrend(metrics) {
    if (metrics.length < 2) return 'stable';
    
    const recent = metrics.slice(-5);
    const older = metrics.slice(-10, -5);
    
    if (recent.length === 0 || older.length === 0) return 'stable';
    
    const recentAvg = this.calculateAverageScore(recent);
    const olderAvg = this.calculateAverageScore(older);
    
    if (recentAvg > olderAvg + 5) return 'improving';
    if (recentAvg < olderAvg - 5) return 'declining';
    return 'stable';
  }

  getPerformanceGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  getOverallBlessing(score) {
    if (score >= 95) return 'Divine Perfection';
    if (score >= 85) return 'Blessed Performance';
    if (score >= 75) return 'Sacred Speed';
    if (score >= 65) return 'Mortal Excellence';
    return 'Needs Divine Intervention';
  }

  getGenerationBlessing(metrics) {
    if (metrics.generationTime < 2000 && metrics.codeSize < 30000) return 'Lightning Forge';
    if (metrics.generationTime < 5000 && metrics.codeSize < 50000) return 'Swift Divine';
    return 'Steady Creation';
  }

  generateRecommendations(summary) {
    const recommendations = [];

    try {
      // Check load performance
      if (summary.categories.page_load?.latest < 70) {
        recommendations.push({
          type: 'load_optimization',
          priority: 'high',
          message: '⚡ Consider optimizing resource loading and reducing bundle size',
          action: 'optimize_resources'
        });
      }

      // Check memory usage
      if (summary.categories.memory_usage?.latest < 70) {
        recommendations.push({
          type: 'memory_optimization',
          priority: 'medium',
          message: '🧠 Memory usage is high - consider optimizing component lifecycle',
          action: 'optimize_memory'
        });
      }

      // Check code generation
      if (summary.categories.code_generation?.latest < 80) {
        recommendations.push({
          type: 'generation_optimization',
          priority: 'medium',
          message: '🔨 Code generation could be faster - check component complexity',
          action: 'optimize_generation'
        });
      }
    } catch (error) {
      console.warn('Recommendation generation failed:', error);
    }

    return recommendations;
  }

  clearMetrics() {
    try {
      this.metrics.clear();
      console.log('📊 Performance metrics cleared - fresh divine measurements begin');
    } catch (error) {
      console.warn('Failed to clear metrics:', error);
    }
  }

  exportPerformanceData() {
    try {
      return {
        summary: this.getPerformanceSummary(),
        metrics: Object.fromEntries(this.metrics),
        thresholds: this.thresholds,
        support: this.isSupported,
        exportedAt: new Date().toISOString(),
        blessing: '⚡ Divine performance data blessed by sacred fire'
      };
    } catch (error) {
      console.warn('Performance data export failed:', error);
      return {
        error: 'Export failed',
        exportedAt: new Date().toISOString()
      };
    }
  }
}

export default PerformanceService;