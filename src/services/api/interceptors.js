/**
 * QUORRA API Interceptors - CORRECTED VERSION
 * Sacred middleware for divine communications
 * Handles authentication, errors, caching, and performance
 */

import apiClient from './client.js';

/**
 * 🔐 Authentication Interceptor - IMPROVED ERROR HANDLING
 * Sacred identity management for divine requests
 */
export const authInterceptor = {
  /**
   * Request interceptor - Add authentication
   */
  request: async (endpoint, config) => {
    try {
      // Get auth token from various sources
      const token = getAuthToken();
      
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      
      // Add user context if available
      const userContext = getUserContext();
      if (userContext) {
        config.headers['X-User-Context'] = JSON.stringify(userContext);
      }
      
      console.log('🔐 Authentication added to divine request');
      return config;
    } catch (error) {
      console.warn('Auth interceptor request failed:', error);
      return config; // Continue without auth if it fails
    }
  },

  /**
   * Response interceptor - Handle auth errors
   */
  response: async (response) => {
    try {
      // Handle authentication errors
      if (response.status === 401) {
        console.warn('🔐 Divine authentication expired');
        await handleAuthExpiration();
        throw new Error('Authentication required - please log in again');
      }
      
      // Update auth info if provided
      if (response.headers && response.headers['x-new-token']) {
        updateAuthToken(response.headers['x-new-token']);
        console.log('🔐 Divine authentication token refreshed');
      }
      
      return response;
    } catch (error) {
      console.warn('Auth interceptor response failed:', error);
      return response;
    }
  }
};

/**
 * 📊 Analytics Interceptor - IMPROVED ERROR HANDLING
 * Sacred measurement of divine communications
 */
export const analyticsInterceptor = {
  /**
   * Request interceptor - Track API usage
   */
  request: async (endpoint, config) => {
    try {
      // Add request tracking headers
      config.headers['X-Request-Start'] = Date.now().toString();
      config.headers['X-Request-ID'] = generateRequestId();
      
      // Track API call start
      trackApiCall('request_start', {
        endpoint,
        method: config.method,
        timestamp: Date.now()
      });
      
      return config;
    } catch (error) {
      console.warn('Analytics interceptor request failed:', error);
      return config;
    }
  },

  /**
   * Response interceptor - Track performance and usage
   */
  response: async (response) => {
    try {
      const requestStart = parseInt(response.headers?.['x-request-start'] || '0');
      const responseTime = requestStart > 0 ? Date.now() - requestStart : 0;
      
      // Track successful API call
      trackApiCall('request_complete', {
        endpoint: response.endpoint,
        status: response.status,
        responseTime,
        dataSize: response.data ? JSON.stringify(response.data).length : 0,
        timestamp: Date.now()
      });
      
      // Track performance metrics
      if (responseTime > 5000) {
        console.warn(`⚠️ Slow divine response: ${response.endpoint} took ${responseTime}ms`);
      }
      
      return response;
    } catch (error) {
      console.warn('Analytics interceptor response failed:', error);
      return response;
    }
  }
};

/**
 * 🛡️ Error Handling Interceptor - IMPROVED ERROR HANDLING
 * Sacred protection against communication failures
 */
export const errorInterceptor = {
  /**
   * Request interceptor - Add error context
   */
  request: async (endpoint, config) => {
    try {
      // Add error context for better debugging
      config.errorContext = {
        timestamp: new Date().toISOString(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
        url: typeof window !== 'undefined' ? window.location.href : 'unknown',
        userId: getUserId()
      };
      
      return config;
    } catch (error) {
      console.warn('Error interceptor request failed:', error);
      return config;
    }
  },

  /**
   * Response interceptor - Transform and handle errors
   */
  response: async (response) => {
    try {
      // Handle various error scenarios
      if (response.status >= 400) {
        const errorData = {
          status: response.status,
          endpoint: response.endpoint,
          message: response.data?.message || 'Divine communication failed',
          timestamp: response.timestamp,
          context: response.errorContext
        };
        
        // Log structured error for analytics
        trackError('api_error', errorData);
        
        // Show user-friendly error messages
        showUserFriendlyError(errorData);
      }
      
      return response;
    } catch (error) {
      console.warn('Error interceptor response failed:', error);
      return response;
    }
  }
};

/**
 * 💾 Caching Interceptor - IMPROVED CACHE MANAGEMENT
 * Sacred storage of divine wisdom
 */
export const cachingInterceptor = {
  cache: new Map(),
  maxCacheSize: 100, // Limit cache size
  
  /**
   * Request interceptor - Check cache
   */
  request: async (endpoint, config) => {
    try {
      // Only cache GET requests
      if (config.method !== 'GET') return config;
      
      // Check if cacheable endpoint
      if (!isCacheableEndpoint(endpoint)) return config;
      
      const cacheKey = generateCacheKey(endpoint, config);
      const cached = this.cache.get(cacheKey);
      
      if (cached && !isCacheExpired(cached)) {
        console.log(`💾 Divine cache hit for: ${endpoint}`);
        
        // Return cached response
        config.cachedResponse = {
          data: cached.data,
          status: 200,
          headers: cached.headers,
          endpoint,
          timestamp: cached.timestamp,
          fromCache: true,
          blessing: '💾 Blessed from divine cache'
        };
      }
      
      return config;
    } catch (error) {
      console.warn('Cache interceptor request failed:', error);
      return config;
    }
  },

  /**
   * Response interceptor - Store in cache
   */
  response: async (response) => {
    try {
      // Don't cache error responses
      if (response.status >= 400) return response;
      
      // Only cache GET requests
      if (!response.fromCache && isCacheableEndpoint(response.endpoint)) {
        // Manage cache size
        if (this.cache.size >= this.maxCacheSize) {
          const firstKey = this.cache.keys().next().value;
          this.cache.delete(firstKey);
        }
        
        const cacheKey = generateCacheKey(response.endpoint);
        
        this.cache.set(cacheKey, {
          data: response.data,
          headers: response.headers,
          timestamp: Date.now(),
          expiresAt: Date.now() + getCacheDuration(response.endpoint)
        });
        
        console.log(`💾 Divine response cached: ${response.endpoint}`);
      }
      
      return response;
    } catch (error) {
      console.warn('Cache interceptor response failed:', error);
      return response;
    }
  },

  /**
   * Clear cache for specific patterns
   */
  clearCache(pattern) {
    try {
      if (pattern) {
        for (const [key] of this.cache) {
          if (key.includes(pattern)) {
            this.cache.delete(key);
          }
        }
      } else {
        this.cache.clear();
      }
      console.log(`💾 Divine cache cleared: ${pattern || 'all'}`);
    } catch (error) {
      console.warn('Cache clear failed:', error);
    }
  }
};

/**
 * ⚡ Performance Interceptor - IMPROVED MONITORING
 * Sacred optimization of divine communications
 */
export const performanceInterceptor = {
  /**
   * Request interceptor - Optimize request
   */
  request: async (endpoint, config) => {
    try {
      // Add compression headers
      config.headers['Accept-Encoding'] = 'gzip, deflate, br';
      
      // Add performance hints
      config.headers['X-Performance-Mode'] = 'optimized';
      
      // Set appropriate timeout based on endpoint
      config.timeout = getOptimalTimeout(endpoint);
      
      return config;
    } catch (error) {
      console.warn('Performance interceptor request failed:', error);
      return config;
    }
  },

  /**
   * Response interceptor - Track performance
   */
  response: async (response) => {
    try {
      // Track response size
      const responseSize = response.data ? JSON.stringify(response.data).length : 0;
      
      if (responseSize > 1000000) { // 1MB
        console.warn(`📊 Large divine response: ${response.endpoint} (${formatBytes(responseSize)})`);
      }
      
      // Add performance metadata
      response.performanceMetrics = {
        responseSize,
        responseTime: response.responseTime || 0,
        compressionRatio: response.headers?.['content-encoding'] ? 'compressed' : 'none',
        timestamp: Date.now()
      };
      
      return response;
    } catch (error) {
      console.warn('Performance interceptor response failed:', error);
      return response;
    }
  }
};

/**
 * 🔄 Retry Interceptor - IMPROVED RETRY LOGIC
 * Sacred persistence for divine communications
 */
export const retryInterceptor = {
  /**
   * Request interceptor - Add retry configuration
   */
  request: async (endpoint, config) => {
    try {
      // Set retry configuration based on endpoint
      config.retries = getRetryCount(endpoint);
      config.retryDelay = getRetryDelay(endpoint);
      config.retryCondition = (error) => isRetryableError(error);
      
      return config;
    } catch (error) {
      console.warn('Retry interceptor request failed:', error);
      return config;
    }
  },

  /**
   * Response interceptor - Handle retry logic
   */
  response: async (response) => {
    try {
      // Log retry attempts for monitoring
      if (response.retryAttempt) {
        console.log(`🔄 Divine retry successful after ${response.retryAttempt} attempts`);
      }
      
      return response;
    } catch (error) {
      console.warn('Retry interceptor response failed:', error);
      return response;
    }
  }
};

/**
 * 🌍 Localization Interceptor - IMPROVED LOCALE HANDLING
 * Sacred multi-language support
 */
export const localizationInterceptor = {
  /**
   * Request interceptor - Add language preferences
   */
  request: async (endpoint, config) => {
    try {
      const locale = getUserLocale();
      const timezone = getUserTimezone();
      
      config.headers['Accept-Language'] = locale;
      config.headers['X-Timezone'] = timezone;
      
      return config;
    } catch (error) {
      console.warn('Localization interceptor request failed:', error);
      return config;
    }
  },

  /**
   * Response interceptor - Handle localized responses
   */
  response: async (response) => {
    try {
      // Process localized content if present
      if (response.data && response.data.localized) {
        response.data = processLocalizedContent(response.data);
      }
      
      return response;
    } catch (error) {
      console.warn('Localization interceptor response failed:', error);
      return response;
    }
  }
};

/**
 * 🔧 Development Interceptor - IMPROVED DEBUGGING
 * Sacred debugging assistance
 */
export const developmentInterceptor = {
  /**
   * Request interceptor - Add debug info
   */
  request: async (endpoint, config) => {
    try {
      if (process.env.NODE_ENV === 'development') {
        console.log(`🔧 Divine request: ${config.method} ${endpoint}`, {
          headers: config.headers,
          body: config.body
        });
        
        // Add debug headers
        config.headers['X-Debug-Mode'] = 'true';
        config.headers['X-Build-Version'] = process.env.REACT_APP_VERSION || 'dev';
      }
      
      return config;
    } catch (error) {
      console.warn('Development interceptor request failed:', error);
      return config;
    }
  },

  /**
   * Response interceptor - Log debug info
   */
  response: async (response) => {
    try {
      if (process.env.NODE_ENV === 'development') {
        console.log(`🔧 Divine response: ${response.status} ${response.endpoint}`, {
          data: response.data,
          headers: response.headers,
          responseTime: response.responseTime
        });
      }
      
      return response;
    } catch (error) {
      console.warn('Development interceptor response failed:', error);
      return response;
    }
  }
};

/**
 * 🛠️ Utility Functions - IMPROVED ERROR HANDLING
 * Sacred helper methods for interceptors
 */

function getAuthToken() {
  try {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('quorra_auth_token');
    }
    if (typeof sessionStorage !== 'undefined') {
      return sessionStorage.getItem('quorra_auth_token');
    }
    return null;
  } catch (error) {
    console.warn('Failed to get auth token:', error);
    return null;
  }
}

function getUserContext() {
  try {
    if (typeof localStorage !== 'undefined') {
      const user = localStorage.getItem('quorra_user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  } catch (error) {
    console.warn('Failed to get user context:', error);
    return null;
  }
}

function getUserId() {
  try {
    const context = getUserContext();
    return context?.id || 'anonymous';
  } catch (error) {
    return 'anonymous';
  }
}

function getUserLocale() {
  try {
    return (typeof navigator !== 'undefined' && navigator.language) || 'en-US';
  } catch (error) {
    return 'en-US';
  }
}

function getUserTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (error) {
    return 'UTC';
  }
}

function generateRequestId() {
  try {
    return `quorra_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  } catch (error) {
    return `quorra_${Date.now()}_fallback`;
  }
}

function generateCacheKey(endpoint, config = {}) {
  try {
    const params = config.params ? JSON.stringify(config.params) : '';
    return `${endpoint}_${btoa(params)}`;
  } catch (error) {
    return `${endpoint}_${Date.now()}`;
  }
}

function isCacheableEndpoint(endpoint) {
  if (!endpoint || typeof endpoint !== 'string') return false;
  
  const cacheablePatterns = [
    '/intelligence/',
    '/templates/',
    '/system/health',
    '/user/preferences'
  ];
  
  return cacheablePatterns.some(pattern => endpoint.includes(pattern));
}

function getCacheDuration(endpoint) {
  if (!endpoint || typeof endpoint !== 'string') return 10 * 60 * 1000;
  
  const durations = {
    '/intelligence/': 30 * 60 * 1000, // 30 minutes
    '/templates/': 60 * 60 * 1000,    // 1 hour
    '/system/health': 5 * 60 * 1000,  // 5 minutes
    '/user/preferences': 15 * 60 * 1000 // 15 minutes
  };
  
  for (const [pattern, duration] of Object.entries(durations)) {
    if (endpoint.includes(pattern)) return duration;
  }
  
  return 10 * 60 * 1000; // Default 10 minutes
}

function isCacheExpired(cached) {
  try {
    return !cached || !cached.expiresAt || Date.now() > cached.expiresAt;
  } catch (error) {
    return true;
  }
}

function getOptimalTimeout(endpoint) {
  if (!endpoint || typeof endpoint !== 'string') return 10000;
  
  const timeouts = {
    '/generation/forge': 30000,    // 30 seconds for code generation
    '/assets/upload': 60000,       // 60 seconds for file uploads
    '/analytics/': 5000,           // 5 seconds for analytics
    default: 10000                 // 10 seconds default
  };
  
  for (const [pattern, timeout] of Object.entries(timeouts)) {
    if (endpoint.includes(pattern)) return timeout;
  }
  
  return timeouts.default;
}

function getRetryCount(endpoint) {
  if (!endpoint || typeof endpoint !== 'string') return 2;
  
  const retryCounts = {
    '/sparky/': 2,        // AI services get fewer retries
    '/generation/': 1,    // Code generation is expensive
    '/analytics/': 3,     // Analytics can retry more
    default: 2
  };
  
  for (const [pattern, count] of Object.entries(retryCounts)) {
    if (endpoint.includes(pattern)) return count;
  }
  
  return retryCounts.default;
}

function getRetryDelay(endpoint) {
  return 1000; // 1 second base delay
}

function isRetryableError(error) {
  if (!error) return false;
  
  const retryableStatuses = [408, 429, 500, 502, 503, 504];
  return retryableStatuses.includes(error.status) || 
         error.name === 'TypeError'; // Network errors
}

function handleAuthExpiration() {
  try {
    // Clear auth tokens
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('quorra_auth_token');
    }
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('quorra_auth_token');
    }
    
    // Dispatch custom event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('quorra:auth:expired'));
    }
  } catch (error) {
    console.warn('Failed to handle auth expiration:', error);
  }
}

function updateAuthToken(newToken) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('quorra_auth_token', newToken);
    }
    if (apiClient && typeof apiClient.setAuthToken === 'function') {
      apiClient.setAuthToken(newToken);
    }
  } catch (error) {
    console.warn('Failed to update auth token:', error);
  }
}

function trackApiCall(eventType, data) {
  try {
    // Send to analytics service
    if (typeof window !== 'undefined' && window.quorraAnalytics) {
      window.quorraAnalytics.trackEvent(`api_${eventType}`, data);
    }
  } catch (error) {
    console.warn('Failed to track API call:', error);
  }
}

function trackError(errorType, errorData) {
  try {
    if (typeof window !== 'undefined' && window.quorraAnalytics) {
      window.quorraAnalytics.trackError({
        errorType,
        ...errorData
      });
    }
  } catch (error) {
    console.warn('Failed to track error:', error);
  }
}

function showUserFriendlyError(errorData) {
  try {
    const friendlyMessages = {
      400: 'Invalid request - please check your input',
      401: 'Authentication required - please log in',
      403: 'Access denied - insufficient permissions',
      404: 'Resource not found',
      429: 'Too many requests - please wait a moment',
      500: 'Server error - our divine engineers are on it',
      503: 'Service temporarily unavailable'
    };
    
    const message = friendlyMessages[errorData.status] || 'Something went wrong';
    
    // Show toast notification or modal
    if (typeof window !== 'undefined' && window.quorraUI) {
      window.quorraUI.showNotification({
        type: 'error',
        message,
        duration: 5000
      });
    } else {
      console.warn('User error:', message);
    }
  } catch (error) {
    console.warn('Failed to show user friendly error:', error);
  }
}

function formatBytes(bytes) {
  try {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  } catch (error) {
    return 'Unknown size';
  }
}

function processLocalizedContent(data) {
  try {
    // Process localized content based on user preferences
    return data;
  } catch (error) {
    console.warn('Failed to process localized content:', error);
    return data;
  }
}

/**
 * 🌟 Initialize All Interceptors - IMPROVED ERROR HANDLING
 * Sacred setup of divine middleware
 */
export function initializeInterceptors() {
  try {
    // Add all interceptors to the API client
    if (apiClient && typeof apiClient.addRequestInterceptor === 'function') {
      apiClient.addRequestInterceptor(authInterceptor.request);
      apiClient.addResponseInterceptor(authInterceptor.response);
      
      apiClient.addRequestInterceptor(analyticsInterceptor.request);
      apiClient.addResponseInterceptor(analyticsInterceptor.response);
      
      apiClient.addRequestInterceptor(errorInterceptor.request);
      apiClient.addResponseInterceptor(errorInterceptor.response);
      
      apiClient.addRequestInterceptor(cachingInterceptor.request);
      apiClient.addResponseInterceptor(cachingInterceptor.response);
      
      apiClient.addRequestInterceptor(performanceInterceptor.request);
      apiClient.addResponseInterceptor(performanceInterceptor.response);
      
      apiClient.addRequestInterceptor(retryInterceptor.request);
      apiClient.addResponseInterceptor(retryInterceptor.response);
      
      apiClient.addRequestInterceptor(localizationInterceptor.request);
      apiClient.addResponseInterceptor(localizationInterceptor.response);
      
      if (process.env.NODE_ENV === 'development') {
        apiClient.addRequestInterceptor(developmentInterceptor.request);
        apiClient.addResponseInterceptor(developmentInterceptor.response);
      }
      
      console.log('🔌 All divine interceptors initialized');
    } else {
      console.warn('API client not available for interceptor initialization');
    }
  } catch (error) {
    console.error('Failed to initialize interceptors:', error);
  }
}

/**
 * 🧹 Cleanup Interceptors - IMPROVED CLEANUP
 * Sacred resource management
 */
export function cleanupInterceptors() {
  try {
    if (cachingInterceptor && typeof cachingInterceptor.clearCache === 'function') {
      cachingInterceptor.clearCache();
    }
    console.log('🧹 Divine interceptors cleaned up');
  } catch (error) {
    console.error('Failed to cleanup interceptors:', error);
  }
}

// Export individual interceptors for custom usage
export {
  authInterceptor,
  analyticsInterceptor,
  errorInterceptor,
  cachingInterceptor,
  performanceInterceptor,
  retryInterceptor,
  localizationInterceptor,
  developmentInterceptor
};