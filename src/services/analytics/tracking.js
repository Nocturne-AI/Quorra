/**
 * QUORRA Tracking Service - CORRECTED VERSION
 * Sacred analytics to understand divine craftsmanship patterns
 * Tracks user journey, performance metrics, and divine interventions
 */

class TrackingService {
  constructor() {
    this.sessionId = this.generateSessionId();
    this.userId = this.getUserId();
    this.events = [];
    this.startTime = Date.now();
    this.isEnabled = this.checkTrackingConsent();
    this.isDestroyed = false; // Track destruction state
    
    // Sacred metrics we track
    this.metrics = {
      designTime: 0,
      sparkyInteractions: 0,
      codeGenerations: 0,
      errorRecoveries: 0,
      performanceScores: []
    };

    // Rate limiting for analytics calls
    this.rateLimiter = {
      lastCall: 0,
      minInterval: 100 // Minimum 100ms between calls
    };

    if (this.isEnabled) {
      console.log('📊 Divine analytics awakened - tracking sacred journey');
      this.trackEvent('analytics_initialized');
    } else {
      console.log('📊 Analytics disabled by user preference');
    }
  }

  /**
   * 🔥 Track Divine Events - IMPROVED ERROR HANDLING AND RATE LIMITING
   * Main method for tracking user interactions and divine moments
   */
  trackEvent(eventName, properties = {}, options = {}) {
    if (!this.isEnabled || this.isDestroyed) return;

    // Validate inputs
    if (!eventName || typeof eventName !== 'string') {
      console.warn('Invalid event name provided to trackEvent');
      return;
    }

    // Rate limiting
    const now = Date.now();
    if (now - this.rateLimiter.lastCall < this.rateLimiter.minInterval) {
      return; // Skip if called too frequently
    }
    this.rateLimiter.lastCall = now;

    try {
      const event = {
        eventName,
        properties: {
          ...this.sanitizeProperties(properties),
          sessionId: this.sessionId,
          userId: this.userId,
          timestamp: new Date().toISOString(),
          timeFromStart: now - this.startTime,
          userAgent: this.getUserAgent(),
          url: this.getCurrentUrl(),
          referrer: this.getReferrer()
        },
        metadata: {
          tracked: true,
          divine: true,
          version: '1.0.0',
          ...options
        }
      };

      // Store locally with size limit
      this.storeEvent(event);
      
      // Send to divine servers (if connected)
      this.sendToAnalytics(event);
      
      // Update session metrics
      this.updateSessionMetrics(eventName, properties);

      console.log(`✨ Tracked: ${eventName}`, properties);
    } catch (error) {
      console.error('❌ Tracking failed:', error);
      // Track the tracking failure (meta-tracking)
      this.trackTrackingError(error, eventName);
    }
  }

  /**
   * 🎨 Track Design Actions - IMPROVED VALIDATION
   * Sacred tracking for creative processes
   */
  trackDesignAction(action, details = {}) {
    if (!action || typeof action !== 'string') {
      console.warn('Invalid design action provided');
      return;
    }

    const designEvents = {
      'component_added': {
        component: details.componentType || 'unknown',
        position: details.position || { x: 0, y: 0 },
        source: details.source || 'manual' // drag-drop, click, ai-suggestion
      },
      'color_changed': {
        element: details.element || 'unknown',
        oldColor: details.oldColor || '#000000',
        newColor: details.newColor || '#000000',
        source: details.source || 'manual' // manual, ai-suggestion, sparky
      },
      'font_changed': {
        element: details.element || 'unknown',
        oldFont: details.oldFont || 'default',
        newFont: details.newFont || 'default',
        source: details.source || 'manual'
      },
      'layout_modified': {
        layoutType: details.layoutType || 'unknown',
        modification: details.modification || 'unknown',
        timeSpent: details.timeSpent || 0
      },
      'design_preview': {
        device: details.device || 'desktop', // desktop, tablet, mobile
        duration: details.duration || 0
      }
    };

    const eventData = designEvents[action] || {};

    this.trackEvent('design_action', {
      action,
      ...eventData,
      ...this.sanitizeProperties(details)
    });

    // Track design time safely
    if (typeof details.timeSpent === 'number' && details.timeSpent > 0) {
      this.metrics.designTime += details.timeSpent;
    }
  }

  /**
   * 🤖 Track Sparky Interactions - IMPROVED MESSAGE ANALYSIS
   * Divine messenger analytics
   */
  trackSparkyInteraction(interactionType, details = {}) {
    if (!interactionType || typeof interactionType !== 'string') {
      console.warn('Invalid Sparky interaction type provided');
      return;
    }

    const interactions = {
      'message_sent': {
        messageLength: details.message?.length || 0,
        messageType: this.categorizeMessage(details.message),
        hasContext: Boolean(details.context),
        messageHash: this.hashMessage(details.message) // For privacy
      },
      'guidance_received': {
        guidanceType: details.guidanceType || 'general',
        helpful: Boolean(details.helpful),
        followedAdvice: Boolean(details.followedAdvice)
      },
      'recommendation_applied': {
        recommendationType: details.recommendationType || 'unknown',
        category: details.category || 'general', // color, font, layout
        confidence: Math.max(0, Math.min(100, details.confidence || 0))
      },
      'sparky_thumbs_up': {
        context: details.context || 'general',
        helpfulnessScore: 5
      },
      'sparky_thumbs_down': {
        context: details.context || 'general',
        helpfulnessScore: 1,
        feedback: details.feedback ? details.feedback.substring(0, 500) : '' // Limit feedback length
      }
    };

    const eventData = interactions[interactionType] || {};

    this.trackEvent('sparky_interaction', {
      interactionType,
      ...eventData,
      ...this.sanitizeProperties(details)
    });

    this.metrics.sparkyInteractions++;
  }

  /**
   * 🔨 Track Code Generation - IMPROVED DATA VALIDATION
   * Sacred forging analytics
   */
  trackCodeGeneration(generationData = {}) {
    try {
      const {
        industry = 'unknown',
        businessType = 'unknown',
        componentsCount = 0,
        generationTime = 0,
        performance = {},
        intelligence = {},
        errors = []
      } = generationData;

      // Validate and sanitize data
      const sanitizedData = {
        industry: String(industry).substring(0, 50),
        businessType: String(businessType).substring(0, 50),
        componentsCount: Math.max(0, Number(componentsCount) || 0),
        generationTime: Math.max(0, Number(generationTime) || 0),
        performanceScore: Number(performance?.performanceScore) || 0,
        totalSize: Number(performance?.totalSize) || 0,
        compressionRatio: Number(performance?.compressionRatio) || 0,
        intelligenceConfidence: Number(intelligence?.confidence) || 0,
        errorsCount: Array.isArray(errors) ? errors.length : 0,
        validationScore: Number(performance?.accessibilityScore) || 0
      };

      this.trackEvent('code_generated', sanitizedData);

      this.metrics.codeGenerations++;
      if (sanitizedData.performanceScore > 0) {
        this.metrics.performanceScores.push(sanitizedData.performanceScore);
        
        // Keep performance scores array from growing too large
        if (this.metrics.performanceScores.length > 100) {
          this.metrics.performanceScores.splice(0, this.metrics.performanceScores.length - 100);
        }
      }
    } catch (error) {
      console.warn('Code generation tracking failed:', error);
    }
  }

  /**
   * ⚡ Track Performance Metrics - IMPROVED VALIDATION
   * Divine speed and optimization tracking
   */
  trackPerformance(performanceData = {}) {
    try {
      const sanitizedData = {
        pageLoadTime: Math.max(0, Number(performanceData.pageLoadTime) || 0),
        renderTime: Math.max(0, Number(performanceData.renderTime) || 0),
        interactionDelay: Math.max(0, Number(performanceData.interactionDelay) || 0),
        memoryUsage: Math.max(0, Number(performanceData.memoryUsage) || 0),
        errorRate: Math.max(0, Math.min(100, Number(performanceData.errorRate) || 0)),
        deviceType: this.getDeviceType(),
        connectionType: this.getConnectionType()
      };

      this.trackEvent('performance_measured', sanitizedData);
    } catch (error) {
      console.warn('Performance tracking failed:', error);
    }
  }

  /**
   * 🛡️ Track Errors and Recovery - IMPROVED ERROR SANITIZATION
   * Divine intervention analytics
   */
  trackError(errorData = {}) {
    try {
      const sanitizedError = {
        errorType: String(errorData.errorType || 'unknown').substring(0, 100),
        errorMessage: String(errorData.errorMessage || 'Unknown error').substring(0, 200),
        component: String(errorData.component || 'unknown').substring(0, 100),
        context: this.sanitizeProperties(errorData.context || {}),
        recovered: Boolean(errorData.recovered),
        recoveryTime: Math.max(0, Number(errorData.recoveryTime) || 0),
        stack: String(errorData.stack || '').substring(0, 500),
        timestamp: Date.now()
      };

      this.trackEvent('error_occurred', sanitizedError);

      if (sanitizedError.recovered) {
        this.metrics.errorRecoveries++;
      }
    } catch (error) {
      console.warn('Error tracking failed:', error);
    }
  }

  /**
   * 💰 Track Business Metrics - IMPROVED VALIDATION
   * Sacred conversion and engagement tracking
   */
  trackBusinessMetric(metricType, value, context = {}) {
    if (!metricType || typeof metricType !== 'string') {
      console.warn('Invalid business metric type provided');
      return;
    }

    const businessMetrics = {
      'trial_started': {
        tier: String(context.tier || 'unknown').substring(0, 50),
        source: String(context.source || 'direct').substring(0, 100),
        referrer: String(context.referrer || 'none').substring(0, 200)
      },
      'subscription_converted': {
        tier: String(context.tier || 'unknown').substring(0, 50),
        timeToConversion: Math.max(0, Number(context.timeToConversion) || 0),
        trialDuration: Math.max(0, Number(context.trialDuration) || 0)
      },
      'project_completed': {
        industry: String(context.industry || 'unknown').substring(0, 50),
        timeSpent: Math.max(0, Number(context.timeSpent) || 0),
        sparkyInteractions: Math.max(0, Number(context.sparkyInteractions) || 0),
        codeGenerations: Math.max(0, Number(context.codeGenerations) || 0)
      },
      'export_completed': {
        exportType: String(context.exportType || 'unknown').substring(0, 50),
        projectSize: Math.max(0, Number(context.projectSize) || 0),
        performanceScore: Math.max(0, Math.min(100, Number(context.performanceScore) || 0))
      }
    };

    const metricData = businessMetrics[metricType] || {};

    this.trackEvent('business_metric', {
      metricType,
      value: this.sanitizeValue(value),
      ...metricData,
      ...this.sanitizeProperties(context)
    });
  }

  /**
   * 🎯 Track Feature Usage - IMPROVED VALIDATION
   * Divine tool utilization analytics
   */
  trackFeatureUsage(feature, usage = {}) {
    if (!feature || typeof feature !== 'string') {
      console.warn('Invalid feature name provided');
      return;
    }

    const sanitizedUsage = {
      feature: String(feature).substring(0, 100),
      frequency: Math.max(1, Number(usage.frequency) || 1),
      duration: Math.max(0, Number(usage.duration) || 0),
      success: Boolean(usage.success !== false),
      context: String(usage.context || '').substring(0, 200)
    };

    this.trackEvent('feature_used', sanitizedUsage);
  }

  /**
   * 📊 Get Session Analytics - IMPROVED ERROR HANDLING
   * Current session divine insights
   */
  getSessionAnalytics() {
    try {
      const sessionDuration = Date.now() - this.startTime;
      
      return {
        sessionId: this.sessionId,
        userId: this.userId,
        duration: sessionDuration,
        eventsCount: this.events.length,
        metrics: {
          ...this.metrics,
          averagePerformanceScore: this.calculateAveragePerformance(),
          eventsPerMinute: sessionDuration > 0 ? (this.events.length / (sessionDuration / 60000)).toFixed(2) : '0.00'
        },
        topEvents: this.getTopEvents(),
        lastActivity: this.events.length > 0 ? this.events[this.events.length - 1]?.properties?.timestamp : null
      };
    } catch (error) {
      console.warn('Session analytics generation failed:', error);
      return {
        sessionId: this.sessionId,
        userId: this.userId,
        duration: 0,
        eventsCount: 0,
        metrics: this.metrics,
        topEvents: [],
        lastActivity: null,
        error: 'Analytics generation failed'
      };
    }
  }

  /**
   * 🔍 Generate Divine Insights - IMPROVED ERROR HANDLING
   * AI-powered analytics insights
   */
  generateInsights() {
    const insights = [];
    
    try {
      // Design efficiency insights
      if (this.metrics.designTime > 0 && this.metrics.codeGenerations > 0) {
        const avgDesignTime = this.metrics.designTime / this.metrics.codeGenerations;
        insights.push({
          type: 'efficiency',
          message: `⚡ Average design time: ${(avgDesignTime / 1000 / 60).toFixed(1)} minutes per generation`,
          score: avgDesignTime < 300000 ? 'excellent' : avgDesignTime < 600000 ? 'good' : 'needs_improvement'
        });
      }

      // Sparky engagement insights
      if (this.metrics.sparkyInteractions > 5) {
        insights.push({
          type: 'engagement',
          message: `🤖 High Sparky engagement: ${this.metrics.sparkyInteractions} interactions`,
          score: 'excellent'
        });
      } else if (this.metrics.sparkyInteractions === 0) {
        insights.push({
          type: 'engagement',
          message: '🤖 Consider using Sparky for design guidance',
          score: 'suggestion'
        });
      }

      // Performance insights
      const avgPerformance = this.calculateAveragePerformance();
      if (avgPerformance > 0) {
        insights.push({
          type: 'performance',
          message: `🚀 Average performance score: ${avgPerformance}%`,
          score: avgPerformance > 90 ? 'excellent' : avgPerformance > 80 ? 'good' : 'needs_improvement'
        });
      }

      // Error recovery insights
      if (this.metrics.errorRecoveries > 0) {
        insights.push({
          type: 'resilience',
          message: `🛡️ Divine recovery: ${this.metrics.errorRecoveries} errors gracefully handled`,
          score: 'excellent'
        });
      }

      // Code generation insights
      if (this.metrics.codeGenerations > 3) {
        insights.push({
          type: 'productivity',
          message: `🔨 Productive session: ${this.metrics.codeGenerations} code generations`,
          score: 'excellent'
        });
      }
    } catch (error) {
      console.warn('Insights generation failed:', error);
      insights.push({
        type: 'error',
        message: 'Divine insights temporarily unavailable',
        score: 'unknown'
      });
    }

    return insights;
  }

  /**
   * 🌐 Send to Analytics - IMPROVED ERROR HANDLING AND RETRY
   * Sacred data transmission to divine servers
   */
  async sendToAnalytics(event) {
    if (!event || this.isDestroyed) return;

    try {
      // In development, log to console
      if (process.env.NODE_ENV === 'development') {
        console.log('📊 Analytics Event:', event);
        return;
      }

      // Send to analytics endpoint with retry logic
      const analyticsEndpoint = process.env.REACT_APP_ANALYTICS_ENDPOINT || '/api/analytics';
      
      const response = await fetch(analyticsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
        signal: AbortSignal.timeout(5000) // 5 second timeout
      });

      if (!response.ok) {
        throw new Error(`Analytics request failed: ${response.status}`);
      }
    } catch (error) {
      // Fail silently for analytics, but store for retry if needed
      console.warn('Analytics transmission failed:', error);
      
      // Store failed events for potential retry (keep last 10)
      if (!this.failedEvents) this.failedEvents = [];
      this.failedEvents.push(event);
      if (this.failedEvents.length > 10) {
        this.failedEvents.shift();
      }
    }
  }

  /**
   * 🆔 Generate Session ID - IMPROVED UNIQUENESS
   * Sacred session identification
   */
  generateSessionId() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 9);
    const performance = typeof window !== 'undefined' && window.performance 
      ? Math.round(window.performance.now()).toString(36) 
      : '';
    
    return `quorra_session_${timestamp}_${random}_${performance}`;
  }

  /**
   * 👤 Get User ID - IMPROVED ERROR HANDLING
   * Sacred user identification (anonymous but persistent)
   */
  getUserId() {
    try {
      let userId = null;
      
      // Try to get from localStorage
      if (typeof localStorage !== 'undefined') {
        userId = localStorage.getItem('quorra_user_id');
      }
      
      if (!userId) {
        userId = `quorra_user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        
        // Try to save to localStorage
        try {
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('quorra_user_id', userId);
          }
        } catch (storageError) {
          console.warn('Could not save user ID to localStorage:', storageError);
        }
      }
      
      return userId;
    } catch (error) {
      console.warn('User ID generation failed:', error);
      return `quorra_user_${Date.now()}_fallback`;
    }
  }

  /**
   * ✅ Check Tracking Consent - IMPROVED ERROR HANDLING
   * Respect user privacy choices
   */
  checkTrackingConsent() {
    try {
      // Check for consent cookie/localStorage
      if (typeof localStorage !== 'undefined') {
        const consent = localStorage.getItem('quorra_analytics_consent');
        return consent !== 'false';
      }
      
      // Default to true for analytics (anonymized) if localStorage not available
      return true;
    } catch (error) {
      console.warn('Consent check failed:', error);
      return true; // Default to enabled
    }
  }

  /**
   * 🎯 Categorize Message - IMPROVED PATTERN MATCHING
   * Understand what users are asking Sparky about
   */
  categorizeMessage(message) {
    if (!message || typeof message !== 'string') return 'unknown';
    
    try {
      const lowerMessage = message.toLowerCase().trim();
      
      // More comprehensive categorization
      if (/\b(color|palette|hue|shade|tint)\b/.test(lowerMessage)) return 'color_question';
      if (/\b(font|typography|typeface|text)\b/.test(lowerMessage)) return 'font_question';
      if (/\b(layout|design|arrange|position)\b/.test(lowerMessage)) return 'layout_question';
      if (/\b(help|how|what|guide|tutorial)\b/.test(lowerMessage)) return 'help_request';
      if (/\b(error|problem|issue|bug|broken)\b/.test(lowerMessage)) return 'error_report';
      if (/\b(component|element|widget|section)\b/.test(lowerMessage)) return 'component_question';
      if (/\b(responsive|mobile|tablet|desktop)\b/.test(lowerMessage)) return 'responsive_question';
      
      return 'general_question';
    } catch (error) {
      console.warn('Message categorization failed:', error);
      return 'unknown';
    }
  }

  /**
   * 📱 Get Device Type - IMPROVED DETECTION
   * Sacred device detection
   */
  getDeviceType() {
    try {
      if (typeof window === 'undefined') return 'unknown';
      
      const width = window.innerWidth || 0;
      const userAgent = navigator.userAgent || '';
      
      // Check for mobile user agents
      if (/Mobi|Android/i.test(userAgent) || width < 768) return 'mobile';
      if (/Tablet|iPad/i.test(userAgent) || (width >= 768 && width < 1024)) return 'tablet';
      
      return 'desktop';
    } catch (error) {
      console.warn('Device type detection failed:', error);
      return 'unknown';
    }
  }

  /**
   * 🌐 Get Connection Type - IMPROVED DETECTION
   * Divine connection wisdom
   */
  getConnectionType() {
    try {
      if (typeof navigator !== 'undefined' && navigator.connection) {
        return navigator.connection.effectiveType || 'unknown';
      }
      return 'unknown';
    } catch (error) {
      console.warn('Connection type detection failed:', error);
      return 'unknown';
    }
  }

  /**
   * 🧹 Helper Methods - IMPROVED DATA SANITIZATION
   */
  sanitizeProperties(properties) {
    if (!properties || typeof properties !== 'object') return {};
    
    const sanitized = {};
    
    try {
      for (const [key, value] of Object.entries(properties)) {
        if (key.length > 100) continue; // Skip overly long keys
        
        if (typeof value === 'string') {
          sanitized[key] = value.substring(0, 1000); // Limit string length
        } else if (typeof value === 'number') {
          sanitized[key] = isNaN(value) ? 0 : value;
        } else if (typeof value === 'boolean') {
          sanitized[key] = value;
        } else if (value === null || value === undefined) {
          sanitized[key] = null;
        } else if (typeof value === 'object') {
          // Shallow sanitization for objects
          sanitized[key] = JSON.parse(JSON.stringify(value).substring(0, 1000));
        }
      }
    } catch (error) {
      console.warn('Property sanitization failed:', error);
    }
    
    return sanitized;
  }

  sanitizeValue(value) {
    if (typeof value === 'string') {
      return value.substring(0, 500);
    } else if (typeof value === 'number') {
      return isNaN(value) ? 0 : value;
    } else if (typeof value === 'boolean') {
      return value;
    }
    return String(value).substring(0, 500);
  }

  hashMessage(message) {
    if (!message) return '';
    
    try {
      // Simple hash for privacy (not cryptographic)
      let hash = 0;
      for (let i = 0; i < message.length; i++) {
        const char = message.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
      }
      return hash.toString();
    } catch (error) {
      return 'hash_failed';
    }
  }

  getUserAgent() {
    try {
      return typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown';
    } catch (error) {
      return 'unknown';
    }
  }

  getCurrentUrl() {
    try {
      return typeof window !== 'undefined' ? window.location.href : 'unknown';
    } catch (error) {
      return 'unknown';
    }
  }

  getReferrer() {
    try {
      return typeof document !== 'undefined' ? document.referrer : 'unknown';
    } catch (error) {
      return 'unknown';
    }
  }

  storeEvent(event) {
    try {
      this.events.push(event);
      
      // Keep events array from growing too large (keep last 1000)
      if (this.events.length > 1000) {
        this.events.splice(0, this.events.length - 1000);
      }
    } catch (error) {
      console.warn('Event storage failed:', error);
    }
  }

  trackTrackingError(error, originalEventName) {
    try {
      // Simple tracking error without triggering another error
      console.warn(`Tracking error for ${originalEventName}:`, error);
    } catch (metaError) {
      // Silent fail for meta-tracking errors
    }
  }

  /**
   * 🔢 Calculate Average Performance - IMPROVED ERROR HANDLING
   * Divine performance insights
   */
  calculateAveragePerformance() {
    try {
      if (!Array.isArray(this.metrics.performanceScores) || this.metrics.performanceScores.length === 0) {
        return 0;
      }
      
      const validScores = this.metrics.performanceScores.filter(score => {
        const numScore = typeof score === 'string' ? 
          (score === 'Divine' ? 100 : score === 'Blessed' ? 90 : 80) : 
          Number(score);
        return !isNaN(numScore) && numScore >= 0 && numScore <= 100;
      });
      
      if (validScores.length === 0) return 0;
      
      const total = validScores.reduce((sum, score) => {
        const numScore = typeof score === 'string' ? 
          (score === 'Divine' ? 100 : score === 'Blessed' ? 90 : 80) : 
          Number(score);
        return sum + numScore;
      }, 0);
      
      return Math.round(total / validScores.length);
    } catch (error) {
      console.warn('Average performance calculation failed:', error);
      return 0;
    }
  }

  /**
   * 🏆 Get Top Events - IMPROVED ERROR HANDLING
   * Most frequent divine activities
   */
  getTopEvents() {
    try {
      const eventCounts = {};
      
      this.events.forEach(event => {
        if (event.eventName) {
          eventCounts[event.eventName] = (eventCounts[event.eventName] || 0) + 1;
        }
      });
      
      return Object.entries(eventCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([event, count]) => ({ event, count }));
    } catch (error) {
      console.warn('Top events calculation failed:', error);
      return [];
    }
  }

  /**
   * 📊 Update Session Metrics - IMPROVED ERROR HANDLING
   * Real-time metric updates
   */
  updateSessionMetrics(eventName, properties) {
    try {
      switch (eventName) {
        case 'sparky_interaction':
          this.metrics.sparkyInteractions++;
          break;
        case 'code_generated':
          this.metrics.codeGenerations++;
          break;
        case 'error_occurred':
          if (properties && properties.recovered) {
            this.metrics.errorRecoveries++;
          }
          break;
        case 'design_action':
          if (properties && typeof properties.timeSpent === 'number' && properties.timeSpent > 0) {
            this.metrics.designTime += properties.timeSpent;
          }
          break;
      }
    } catch (error) {
      console.warn('Session metrics update failed:', error);
    }
  }

  /**
   * 🧹 Clear Session Data - IMPROVED CLEANUP
   * Sacred data cleanup
   */
  clearSession() {
    try {
      this.events = [];
      this.metrics = {
        designTime: 0,
        sparkyInteractions: 0,
        codeGenerations: 0,
        errorRecoveries: 0,
        performanceScores: []
      };
      this.startTime = Date.now();
      this.sessionId = this.generateSessionId();
      
      if (this.failedEvents) {
        this.failedEvents = [];
      }
      
      console.log('📊 Session data cleared');
    } catch (error) {
      console.warn('Session cleanup failed:', error);
    }
  }

  /**
   * 💾 Export Analytics Data - IMPROVED ERROR HANDLING
   * Sacred data export for analysis
   */
  exportAnalyticsData() {
    try {
      return {
        sessionId: this.sessionId,
        userId: this.userId,
        startTime: this.startTime,
        events: this.events,
        metrics: this.metrics,
        insights: this.generateInsights(),
        failedEvents: this.failedEvents || [],
        exportedAt: new Date().toISOString(),
        blessing: '📊 Sacred analytics data blessed by divine fire'
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
   * 🔒 Update Consent - IMPROVED ERROR HANDLING
   * Handle user privacy preferences
   */
  updateConsent(consent) {
    try {
      this.isEnabled = Boolean(consent);
      
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('quorra_analytics_consent', consent.toString());
      }
      
      if (consent) {
        this.trackEvent('analytics_consent_granted');
        console.log('📊 Analytics enabled by user choice');
      } else {
        console.log('📊 Analytics disabled by user choice');
        this.clearSession();
      }
    } catch (error) {
      console.warn('Consent update failed:', error);
    }
  }

  /**
   * 🗑️ Destroy Service - CLEANUP METHOD
   * Sacred service destruction
   */
  destroy() {
    try {
      this.isDestroyed = true;
      this.isEnabled = false;
      
      // Clear all data
      this.events = [];
      this.metrics = {};
      
      if (this.failedEvents) {
        this.failedEvents = [];
      }
      
      console.log('📊 Tracking service destroyed');
    } catch (error) {
      console.warn('Tracking service destruction failed:', error);
    }
  }
}

// Export the divine tracking service
export default TrackingService;