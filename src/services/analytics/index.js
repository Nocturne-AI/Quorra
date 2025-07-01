/**
 * QUORRA Analytics Services Coordinator - CORRECTED VERSION
 * Sacred hub that orchestrates all divine measurement and insights
 * Combines tracking and performance analytics into unified wisdom
 */

import TrackingService from './tracking.js';
import PerformanceService from './performance.js';

class QuorraAnalytics {
  constructor(options = {}) {
    // Initialize divine analytics services with error handling
    try {
      this.tracking = new TrackingService();
    } catch (error) {
      console.error('Failed to initialize TrackingService:', error);
      this.tracking = this.createFallbackTracker();
    }

    try {
      this.performance = new PerformanceService();
    } catch (error) {
      console.error('Failed to initialize PerformanceService:', error);
      this.performance = this.createFallbackPerformance();
    }
    
    // Sacred coordination state
    this.isActive = true;
    this.isDestroyed = false;
    this.dashboardData = {};
    this.insights = [];
    this.reportingInterval = null;
    this.options = {
      reportingInterval: 120000, // 2 minutes
      maxRetries: 3,
      retryDelay: 5000,
      ...options
    };
    
    // Error handling state
    this.errorCount = 0;
    this.maxErrors = 10;
    
    // Start sacred monitoring with error handling
    this.initializeMonitoring();
    
    console.log('📊 QUORRA Analytics awakened - Divine insights begin!');
  }

  /**
   * 🌟 Initialize Divine Monitoring - IMPROVED ERROR HANDLING
   * Start all sacred measurement processes
   */
  initializeMonitoring() {
    try {
      // Track initial page load with fallback
      this.safeCall(() => this.performance.trackPageLoad());
      
      // Start tracking user journey
      this.safeCall(() => this.tracking.trackEvent('analytics_session_started'));
      
      // Set up regular reporting
      this.startRegularReporting();
      
      // Listen for page visibility changes
      this.handleVisibilityChanges();
      
      // Handle errors gracefully
      this.setupErrorHandling();
      
    } catch (error) {
      console.error('❌ Analytics initialization failed:', error);
      this.handleAnalyticsError('initialization', error);
    }
  }

  /**
   * 🎨 Track Design Journey - IMPROVED VALIDATION
   * Sacred monitoring of creative process
   */
  trackDesignAction(action, details = {}) {
    if (!action || typeof action !== 'string') {
      console.warn('Invalid design action provided');
      return;
    }

    try {
      // Track with timing if it's an interaction
      if (details.isInteraction) {
        return this.safeCall(() => 
          this.performance.trackInteraction(action, () => {
            this.tracking.trackDesignAction(action, details);
            return { success: true };
          })
        );
      } else {
        this.safeCall(() => this.tracking.trackDesignAction(action, details));
      }
    } catch (error) {
      this.handleAnalyticsError('design_tracking', error);
    }
  }

  /**
   * 🤖 Track Sparky Interactions - IMPROVED VALIDATION
   * Sacred monitoring of divine messenger conversations
   */
  trackSparkyInteraction(interactionType, details = {}) {
    if (!interactionType || typeof interactionType !== 'string') {
      console.warn('Invalid Sparky interaction type provided');
      return;
    }

    try {
      this.safeCall(() => this.tracking.trackSparkyInteraction(interactionType, details));
      
      // Track response time for Sparky interactions
      if (interactionType === 'message_sent') {
        this.safeCall(() => 
          this.performance.trackInteraction('sparky_response', () => {
            return { messageProcessed: true };
          })
        );
      }
    } catch (error) {
      this.handleAnalyticsError('sparky_tracking', error);
    }
  }

  /**
   * 🔨 Track Code Generation - IMPROVED ASYNC HANDLING
   * Sacred monitoring of divine forging process
   */
  async trackCodeGeneration(generationFunction, context = {}) {
    if (typeof generationFunction !== 'function') {
      throw new Error('Generation function must be a function');
    }

    try {
      // Use performance service to track generation with fallback
      const result = await this.safeAsyncCall(async () => 
        await this.performance.trackCodeGeneration(generationFunction, context)
      );
      
      // Track business metrics
      this.safeCall(() => 
        this.tracking.trackCodeGeneration({
          industry: context.industry,
          businessType: context.businessType,
          componentsCount: context.componentsCount,
          generationTime: result?.performanceMetrics?.generationTime || 0,
          performance: result?.performanceMetrics || {},
          intelligence: context.intelligence || {},
          errors: context.errors || []
        })
      );
      
      return result;
    } catch (error) {
      this.handleAnalyticsError('code_generation_tracking', error);
      throw error; // Re-throw so calling code can handle it
    }
  }

  /**
   * 🎯 Track Feature Usage - IMPROVED VALIDATION
   * Sacred monitoring of divine tool utilization
   */
  trackFeature(featureName, usage = {}) {
    if (!featureName || typeof featureName !== 'string') {
      console.warn('Invalid feature name provided');
      return;
    }

    try {
      this.safeCall(() => this.tracking.trackFeatureUsage(featureName, usage));
      
      // Track interaction performance if it's a UI feature
      if (usage.isUIFeature) {
        this.safeCall(() => 
          this.performance.trackInteraction(`feature_${featureName}`, () => {
            return { featureUsed: true };
          })
        );
      }
    } catch (error) {
      this.handleAnalyticsError('feature_tracking', error);
    }
  }

  /**
   * 💰 Track Business Events - IMPROVED VALIDATION
   * Sacred monitoring of conversion and engagement
   */
  trackBusinessEvent(eventType, value, context = {}) {
    if (!eventType || typeof eventType !== 'string') {
      console.warn('Invalid business event type provided');
      return;
    }

    try {
      this.safeCall(() => this.tracking.trackBusinessMetric(eventType, value, context));
      
      // Special handling for critical business events
      if (['trial_started', 'subscription_converted', 'project_completed'].includes(eventType)) {
        this.generateBusinessInsight(eventType, value, context);
      }
    } catch (error) {
      this.handleAnalyticsError('business_tracking', error);
    }
  }

  /**
   * 🚨 Track Errors - IMPROVED ERROR HANDLING
   * Sacred monitoring of divine intervention moments
   */
  trackError(errorData) {
    try {
      // Validate error data
      const sanitizedError = {
        errorType: errorData?.errorType || 'unknown',
        errorMessage: errorData?.errorMessage || 'Unknown error',
        component: errorData?.component || 'unknown',
        severity: errorData?.severity || 'medium',
        recovered: Boolean(errorData?.recovered),
        timestamp: Date.now(),
        ...errorData
      };

      this.safeCall(() => this.tracking.trackError(sanitizedError));
      
      this.safeCall(() => 
        this.performance.recordMetric('error_impact', {
          component: sanitizedError.component,
          severity: sanitizedError.severity,
          recovered: sanitizedError.recovered,
          timestamp: sanitizedError.timestamp
        })
      );
    } catch (error) {
      console.error('Analytics error tracking failed:', error);
      // Don't create infinite error loops
    }
  }

  /**
   * 🔥 Generate Divine Dashboard - IMPROVED ERROR HANDLING
   * Sacred overview of all measurements and insights
   */
  generateDashboard() {
    try {
      const sessionAnalytics = this.safeCall(() => this.tracking.getSessionAnalytics()) || {};
      const performanceSummary = this.safeCall(() => this.performance.getPerformanceSummary()) || {};
      const insights = this.generateCombinedInsights();
      
      this.dashboardData = {
        session: {
          id: sessionAnalytics.sessionId || 'unknown',
          duration: sessionAnalytics.duration || 0,
          eventsCount: sessionAnalytics.eventsCount || 0,
          userType: this.determineUserType(sessionAnalytics)
        },
        performance: {
          overall: performanceSummary.overall || { score: 0, blessing: 'Unknown' },
          categories: performanceSummary.categories || {},
          recommendations: performanceSummary.recommendations || []
        },
        usage: {
          designActions: sessionAnalytics.metrics?.designTime || 0,
          sparkyInteractions: sessionAnalytics.metrics?.sparkyInteractions || 0,
          codeGenerations: sessionAnalytics.metrics?.codeGenerations || 0,
          topFeatures: this.getTopFeatures(sessionAnalytics)
        },
        insights: insights,
        health: this.calculateSystemHealth(),
        timestamp: new Date().toISOString(),
        blessing: '📊 Divine dashboard blessed by sacred analytics'
      };
      
      return this.dashboardData;
    } catch (error) {
      this.handleAnalyticsError('dashboard_generation', error);
      return this.getEmergencyDashboard();
    }
  }

  /**
   * 💡 Generate Combined Insights - IMPROVED ERROR HANDLING
   * Sacred wisdom from all measurement sources
   */
  generateCombinedInsights() {
    const insights = [];
    
    try {
      // Get insights from tracking service
      const trackingInsights = this.safeCall(() => this.tracking.generateInsights()) || [];
      insights.push(...trackingInsights);
      
      // Get performance recommendations
      const performanceSummary = this.safeCall(() => this.performance.getPerformanceSummary()) || {};
      const recommendations = performanceSummary.recommendations || [];
      
      insights.push(...recommendations.map(rec => ({
        type: 'performance',
        message: rec.message || 'Performance recommendation available',
        score: rec.priority === 'high' ? 'needs_attention' : 'good',
        action: rec.action || 'review_performance'
      })));
      
      // Generate cross-service insights
      const crossInsights = this.generateCrossServiceInsights();
      insights.push(...crossInsights);
      
      this.insights = insights;
      return insights;
    } catch (error) {
      this.handleAnalyticsError('insights_generation', error);
      return [{ type: 'error', message: 'Divine insights temporarily unavailable', score: 'unknown' }];
    }
  }

  /**
   * 🔗 Generate Cross-Service Insights - IMPROVED ERROR HANDLING
   * Sacred wisdom from combining tracking and performance data
   */
  generateCrossServiceInsights() {
    const insights = [];
    
    try {
      const sessionAnalytics = this.safeCall(() => this.tracking.getSessionAnalytics()) || {};
      const performanceSummary = this.safeCall(() => this.performance.getPerformanceSummary()) || {};
      
      const metrics = sessionAnalytics.metrics || {};
      const overall = performanceSummary.overall || {};
      
      // User engagement vs performance correlation
      if (metrics.sparkyInteractions > 10 && overall.score > 85) {
        insights.push({
          type: 'engagement_performance',
          message: '🚀 High engagement with excellent performance - users love the divine experience!',
          score: 'excellent'
        });
      }
      
      // Code generation efficiency insight
      if (metrics.codeGenerations > 3) {
        const avgPerformance = performanceSummary.categories?.code_generation?.average || 0;
        if (avgPerformance > 85) {
          insights.push({
            type: 'generation_efficiency',
            message: '⚡ Consistent high-performance code generation - divine forge is optimized!',
            score: 'excellent'
          });
        }
      }
      
      // Design workflow insight
      const designTime = metrics.designTime || 0;
      const codeGenerations = metrics.codeGenerations || 0;
      if (designTime > 0 && codeGenerations > 0) {
        const avgDesignTime = designTime / codeGenerations / 1000 / 60; // minutes
        if (avgDesignTime < 5) {
          insights.push({
            type: 'workflow_efficiency',
            message: `⚡ Lightning-fast design workflow: ${avgDesignTime.toFixed(1)} minutes average per generation`,
            score: 'excellent'
          });
        }
      }
    } catch (error) {
      console.warn('Cross-service insights generation failed:', error);
    }
    
    return insights;
  }

  /**
   * 🏥 Calculate System Health - IMPROVED ERROR HANDLING
   * Sacred assessment of divine tool wellness
   */
  calculateSystemHealth() {
    try {
      const performanceSummary = this.safeCall(() => this.performance.getPerformanceSummary()) || {};
      const sessionAnalytics = this.safeCall(() => this.tracking.getSessionAnalytics()) || {};
      
      const healthMetrics = {
        performance: performanceSummary.overall?.score || 0,
        engagement: Math.min(100, (sessionAnalytics.metrics?.sparkyInteractions || 0) * 10),
        stability: this.calculateStabilityScore(),
        efficiency: this.calculateEfficiencyScore()
      };
      
      const overallHealth = (
        healthMetrics.performance + 
        healthMetrics.engagement + 
        healthMetrics.stability + 
        healthMetrics.efficiency
      ) / 4;
      
      return {
        overall: Math.round(overallHealth),
        metrics: healthMetrics,
        status: this.getHealthStatus(overallHealth),
        blessing: this.getHealthBlessing(overallHealth)
      };
    } catch (error) {
      this.handleAnalyticsError('health_calculation', error);
      return {
        overall: 50,
        status: 'unknown',
        blessing: 'Divine health assessment in progress'
      };
    }
  }

  /**
   * 📊 Start Regular Reporting - IMPROVED ERROR HANDLING
   * Sacred periodic insights generation
   */
  startRegularReporting() {
    try {
      // Clear any existing interval
      if (this.reportingInterval) {
        clearInterval(this.reportingInterval);
      }

      // Generate dashboard every configured interval
      this.reportingInterval = setInterval(() => {
        if (this.isActive && !this.isDestroyed) {
          this.safeCall(() => this.generateDashboard());
          this.safeCall(() => this.sendPeriodicReport());
        }
      }, this.options.reportingInterval);
    } catch (error) {
      this.handleAnalyticsError('reporting_setup', error);
    }
  }

  /**
   * 📡 Send Periodic Report - IMPROVED ERROR HANDLING
   * Sacred transmission of divine measurements
   */
  sendPeriodicReport() {
    try {
      const report = {
        dashboard: this.dashboardData,
        insights: this.insights,
        timestamp: new Date().toISOString(),
        type: 'periodic_report'
      };
      
      // In development, log the report
      if (process.env.NODE_ENV === 'development') {
        console.log('📊 Periodic Analytics Report:', report);
      } else {
        // Send to analytics endpoint
        this.sendReport(report);
      }
    } catch (error) {
      this.handleAnalyticsError('periodic_reporting', error);
    }
  }

  /**
   * 👁️ Handle Visibility Changes - IMPROVED ERROR HANDLING
   * Sacred awareness of user attention
   */
  handleVisibilityChanges() {
    try {
      if (typeof document === 'undefined') return;

      document.addEventListener('visibilitychange', () => {
        try {
          if (document.hidden) {
            this.safeCall(() => this.tracking.trackEvent('page_hidden'));
            this.pauseAnalytics();
          } else {
            this.safeCall(() => this.tracking.trackEvent('page_visible'));
            this.resumeAnalytics();
          }
        } catch (error) {
          console.warn('Visibility change handling failed:', error);
        }
      });
    } catch (error) {
      console.warn('Visibility change setup failed:', error);
    }
  }

  /**
   * 🛡️ Setup Error Handling - IMPROVED GLOBAL ERROR HANDLING
   * Sacred protection against measurement failures
   */
  setupErrorHandling() {
    try {
      if (typeof window === 'undefined') return;

      window.addEventListener('error', (event) => {
        this.trackError({
          errorType: 'javascript_error',
          errorMessage: event.message || 'Unknown JavaScript error',
          component: 'global',
          context: {
            filename: event.filename,
            lineNumber: event.lineno,
            columnNumber: event.colno
          },
          recovered: false
        });
      });

      window.addEventListener('unhandledrejection', (event) => {
        this.trackError({
          errorType: 'unhandled_promise_rejection',
          errorMessage: event.reason?.message || 'Unknown promise rejection',
          component: 'global',
          context: { reason: event.reason },
          recovered: false
        });
      });
    } catch (error) {
      console.warn('Global error handling setup failed:', error);
    }
  }

  /**
   * 🛠️ Safe Call Wrappers - NEW ERROR HANDLING UTILITIES
   * Sacred protection for all analytics operations
   */
  safeCall(fn, fallback = null) {
    if (!fn || typeof fn !== 'function') return fallback;
    
    try {
      return fn();
    } catch (error) {
      this.errorCount++;
      console.warn('Safe call failed:', error);
      
      if (this.errorCount > this.maxErrors) {
        console.error('Too many analytics errors, disabling service');
        this.isActive = false;
      }
      
      return fallback;
    }
  }

  async safeAsyncCall(fn, fallback = null) {
    if (!fn || typeof fn !== 'function') return fallback;
    
    try {
      return await fn();
    } catch (error) {
      this.errorCount++;
      console.warn('Safe async call failed:', error);
      
      if (this.errorCount > this.maxErrors) {
        console.error('Too many analytics errors, disabling service');
        this.isActive = false;
      }
      
      return fallback;
    }
  }

  /**
   * 🏗️ Fallback Service Creation - NEW FALLBACK UTILITIES
   * Sacred fallback services when main services fail
   */
  createFallbackTracker() {
    return {
      trackEvent: () => {},
      trackDesignAction: () => {},
      trackSparkyInteraction: () => {},
      trackCodeGeneration: () => {},
      trackFeatureUsage: () => {},
      trackBusinessMetric: () => {},
      trackError: () => {},
      getSessionAnalytics: () => ({}),
      generateInsights: () => [],
      clearSession: () => {},
      updateConsent: () => {},
      exportAnalyticsData: () => ({})
    };
  }

  createFallbackPerformance() {
    return {
      trackPageLoad: () => null,
      trackRenderingPerformance: async () => ({ result: null, renderTime: 0 }),
      trackCodeGeneration: async (fn) => await fn(),
      trackInteraction: async (type, fn) => ({ result: fn(), responseTime: 0 }),
      recordMetric: () => {},
      getPerformanceSummary: () => ({ overall: { score: 0 }, categories: {}, recommendations: [] }),
      clearMetrics: () => {},
      disconnect: () => {},
      exportPerformanceData: () => ({})
    };
  }

  /**
   * 🔢 Helper Calculation Methods - IMPROVED ERROR HANDLING
   * Sacred mathematics for divine insights
   */
  determineUserType(sessionAnalytics) {
    try {
      const metrics = sessionAnalytics.metrics || {};
      const { sparkyInteractions = 0, codeGenerations = 0, designTime = 0 } = metrics;
      
      if (sparkyInteractions > 20 && codeGenerations > 5) return 'power_user';
      if (sparkyInteractions > 10 || codeGenerations > 2) return 'engaged_user';
      if (designTime > 300000) return 'exploring_user'; // 5+ minutes
      return 'new_user';
    } catch (error) {
      console.warn('User type determination failed:', error);
      return 'unknown_user';
    }
  }

  getTopFeatures(sessionAnalytics) {
    try {
      const topEvents = sessionAnalytics.topEvents || [];
      return topEvents.slice(0, 3).map(event => ({
        feature: (event.event || 'unknown').replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
        usage: event.count || 0
      }));
    } catch (error) {
      console.warn('Top features calculation failed:', error);
      return [];
    }
  }

  calculateStabilityScore() {
    try {
      // Based on error rate and recovery rate
      const errorMetrics = this.tracking?.metrics?.errorRecoveries || 0;
      const totalEvents = this.tracking?.events?.length || 0;
      
      if (totalEvents === 0) return 100;
      
      const errorRate = errorMetrics / totalEvents;
      return Math.max(0, 100 - (errorRate * 1000));
    } catch (error) {
      console.warn('Stability score calculation failed:', error);
      return 50;
    }
  }

  calculateEfficiencyScore() {
    try {
      const sessionAnalytics = this.safeCall(() => this.tracking.getSessionAnalytics()) || {};
      const metrics = sessionAnalytics.metrics || {};
      const { designTime = 0, codeGenerations = 0 } = metrics;
      
      if (codeGenerations === 0) return 50;
      
      const avgTimePerGeneration = designTime / codeGenerations / 1000; // seconds
      
      if (avgTimePerGeneration < 60) return 100; // Under 1 minute
      if (avgTimePerGeneration < 300) return 80; // Under 5 minutes
      return 60;
    } catch (error) {
      console.warn('Efficiency score calculation failed:', error);
      return 50;
    }
  }

  getHealthStatus(score) {
    if (score >= 90) return 'excellent';
    if (score >= 80) return 'good';
    if (score >= 70) return 'fair';
    return 'needs_attention';
  }

  getHealthBlessing(score) {
    if (score >= 95) return 'Divine Perfection';
    if (score >= 85) return 'Blessed System';
    if (score >= 75) return 'Sacred Wellness';
    return 'Needs Divine Intervention';
  }

  /**
   * 🛡️ Error Handling Methods - IMPROVED ERROR HANDLING
   * Sacred protection and recovery
   */
  handleAnalyticsError(context, error) {
    console.warn(`📊 Analytics ${context} failed:`, error);
    
    // Track the analytics error itself (meta!) with protection
    this.safeCall(() => 
      this.tracking.trackEvent('analytics_error', {
        context,
        error: error?.message || 'Unknown error',
        timestamp: Date.now()
      })
    );
  }

  generateBusinessInsight(eventType, value, context) {
    try {
      // Generate special insights for business events
      this.insights.unshift({
        type: 'business',
        message: `💰 ${eventType.replace('_', ' ').toUpperCase()}: ${value}`,
        score: 'excellent',
        timestamp: Date.now(),
        context: context || {}
      });

      // Keep insights array from growing too large
      if (this.insights.length > 50) {
        this.insights = this.insights.slice(0, 50);
      }
    } catch (error) {
      console.warn('Business insight generation failed:', error);
    }
  }

  getEmergencyDashboard() {
    return {
      session: { status: 'Emergency mode' },
      performance: { overall: { score: 0, blessing: 'Divine systems recovering' } },
      usage: { status: 'Metrics temporarily unavailable' },
      insights: [{ type: 'system', message: 'Divine analytics temporarily offline', score: 'recovering' }],
      health: { overall: 50, status: 'recovering', blessing: 'Divine intervention in progress' },
      timestamp: new Date().toISOString()
    };
  }

  /**
   * ⏸️ Control Methods - IMPROVED STATE MANAGEMENT
   * Sacred analytics lifecycle management
   */
  pauseAnalytics() {
    try {
      this.isActive = false;
      console.log('📊 Analytics paused - divine measurements suspended');
    } catch (error) {
      console.warn('Analytics pause failed:', error);
    }
  }

  resumeAnalytics() {
    try {
      this.isActive = true;
      this.safeCall(() => this.tracking.trackEvent('analytics_resumed'));
      console.log('📊 Analytics resumed - divine measurements continue');
    } catch (error) {
      console.warn('Analytics resume failed:', error);
    }
  }

  /**
   * 🧹 Cleanup Methods - IMPROVED CLEANUP
   * Sacred resource management
   */
  destroy() {
    try {
      this.isDestroyed = true;
      this.isActive = false;
      
      if (this.reportingInterval) {
        clearInterval(this.reportingInterval);
        this.reportingInterval = null;
      }
      
      this.safeCall(() => this.performance.disconnect());
      this.safeCall(() => this.tracking.destroy?.());
      
      // Clear all data
      this.dashboardData = {};
      this.insights = [];
      
      console.log('📊 QUORRA Analytics gracefully ended - divine wisdom preserved');
    } catch (error) {
      console.error('Analytics destruction failed:', error);
    }
  }

  /**
   * 💾 Export All Analytics Data - IMPROVED ERROR HANDLING
   * Sacred data export for comprehensive analysis
   */
  exportAllData() {
    try {
      return {
        tracking: this.safeCall(() => this.tracking.exportAnalyticsData()) || {},
        performance: this.safeCall(() => this.performance.exportPerformanceData()) || {},
        dashboard: this.dashboardData,
        insights: this.insights,
        exportedAt: new Date().toISOString(),
        blessing: '📊 Complete divine analytics data blessed by sacred fire'
      };
    } catch (error) {
      console.warn('Analytics data export failed:', error);
      return {
        error: 'Export failed',
        exportedAt: new Date().toISOString()
      };
    }
  }

  /**
   * 🔒 Update User Consent - IMPROVED ERROR HANDLING
   * Sacred privacy management
   */
  updateConsent(consent) {
    try {
      this.safeCall(() => this.tracking.updateConsent(consent));
      
      if (!consent) {
        this.pauseAnalytics();
      } else {
        this.resumeAnalytics();
      }
    } catch (error) {
      console.warn('Consent update failed:', error);
    }
  }

  /**
   * 📡 Send Report - IMPROVED ERROR HANDLING
   * Sacred data transmission
   */
  async sendReport(report) {
    try {
      const endpoint = process.env.REACT_APP_ANALYTICS_ENDPOINT || '/api/analytics/report';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(report),
        signal: AbortSignal.timeout(10000) // 10 second timeout
      });

      if (!response.ok) {
        throw new Error(`Report transmission failed: ${response.status}`);
      }
    } catch (error) {
      console.warn('Analytics report transmission failed:', error);
    }
  }

  /**
   * 🔍 Get Current Status - NEW STATUS METHOD
   * Sacred service status check
   */
  getStatus() {
    return {
      isActive: this.isActive,
      isDestroyed: this.isDestroyed,
      errorCount: this.errorCount,
      hasTracking: Boolean(this.tracking),
      hasPerformance: Boolean(this.performance),
      reportingActive: Boolean(this.reportingInterval),
      timestamp: new Date().toISOString()
    };
  }
}

// Create and export the divine analytics coordinator
const quorraAnalytics = new QuorraAnalytics();

export default quorraAnalytics;
export { QuorraAnalytics, TrackingService, PerformanceService };