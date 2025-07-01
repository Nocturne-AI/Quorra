/**
 * QUORRA API Client - CORRECTED VERSION
 * Sacred gateway to divine backend services
 * Handles authentication, requests, and divine data transmission
 */

class ApiClient {
  constructor() {
    this.baseURL = this.getBaseURL();
    this.apiKey = this.getApiKey();
    this.headers = this.getDefaultHeaders();
    this.requestQueue = [];
    this.isOnline = this.checkOnlineStatus();
    this.retryAttempts = 3;
    this.timeout = 10000; // 10 seconds for divine patience
    this.isDestroyed = false;
    
    // Sacred request interceptors
    this.requestInterceptors = [];
    this.responseInterceptors = [];
    
    // Rate limiting
    this.rateLimiter = new Map();
    this.maxConcurrentRequests = 6;
    this.activeRequests = 0;
    
    this.initializeClient();
    console.log('🌐 Divine API client awakened - ready to commune with sacred servers');
  }

  /**
   * 🔧 Initialize Divine Client - IMPROVED ERROR HANDLING
   * Set up sacred connection protocols
   */
  initializeClient() {
    try {
      // Monitor connection status with feature detection
      if (typeof window !== 'undefined') {
        window.addEventListener('online', () => {
          this.isOnline = true;
          this.processQueuedRequests();
          console.log('🌐 Divine connection restored');
        });

        window.addEventListener('offline', () => {
          this.isOnline = false;
          console.log('📡 Divine connection temporarily severed - queuing requests');
        });
      }

      // Set up default interceptors
      this.setupDefaultInterceptors();
    } catch (error) {
      console.warn('Client initialization warning:', error);
      // Continue without event listeners if they fail
    }
  }

  /**
   * 🌟 Main Request Method - IMPROVED ERROR HANDLING
   * Sacred gateway for all divine communications
   */
  async request(endpoint, options = {}) {
    if (this.isDestroyed) {
      throw new ApiError('API client has been destroyed', 0, endpoint);
    }

    // Validate inputs
    if (!endpoint || typeof endpoint !== 'string') {
      throw new ApiError('Invalid endpoint provided', 400, endpoint);
    }

    // Rate limiting check
    if (this.activeRequests >= this.maxConcurrentRequests) {
      throw new ApiError('Too many concurrent requests', 429, endpoint);
    }

    const config = {
      method: 'GET',
      headers: { ...this.headers },
      timeout: this.timeout,
      retries: this.retryAttempts,
      ...options
    };

    // Validate config
    if (!config.method || typeof config.method !== 'string') {
      config.method = 'GET';
    }

    try {
      this.activeRequests++;
      
      // Apply request interceptors
      const processedConfig = await this.applyRequestInterceptors(endpoint, config);
      
      // Check if we're online
      if (!this.isOnline) {
        return this.handleOfflineRequest(endpoint, processedConfig);
      }

      const response = await this.executeRequest(endpoint, processedConfig);
      return await this.applyResponseInterceptors(response);
    } catch (error) {
      return this.handleRequestError(error, endpoint, config);
    } finally {
      this.activeRequests = Math.max(0, this.activeRequests - 1);
    }
  }

  /**
   * 🚀 Execute Sacred Request - IMPROVED ERROR HANDLING
   * Core divine communication method
   */
  async executeRequest(endpoint, config) {
    const url = this.buildFullURL(endpoint);
    let controller;
    let timeoutId;
    
    try {
      // Feature detection for AbortController
      if (typeof AbortController !== 'undefined') {
        controller = new AbortController();
        timeoutId = setTimeout(() => controller.abort(), config.timeout);
      }

      const fetchConfig = {
        method: config.method,
        headers: config.headers,
        ...this.getFetchOptions(config)
      };

      // Add signal if controller exists
      if (controller) {
        fetchConfig.signal = controller.signal;
      }

      // Add body if present
      if (config.body) {
        fetchConfig.body = this.prepareRequestBody(config.body, config.headers);
      }

      console.log(`🌐 Sending ${config.method} request to divine realm: ${endpoint}`);
      
      const response = await fetch(url, fetchConfig);
      
      if (timeoutId) clearTimeout(timeoutId);

      if (!response.ok) {
        throw new ApiError(
          `Divine server responded with ${response.status}: ${response.statusText}`,
          response.status,
          endpoint
        );
      }

      const data = await this.parseResponse(response);
      
      console.log(`✨ Divine response received from: ${endpoint}`);
      return {
        data,
        status: response.status,
        headers: this.parseHeaders(response.headers),
        endpoint,
        timestamp: new Date().toISOString(),
        blessing: '🌟 Blessed by divine servers'
      };
    } catch (error) {
      if (timeoutId) clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        throw new ApiError('Divine request timed out', 408, endpoint);
      }
      
      // Handle network errors
      if (error instanceof TypeError) {
        throw new ApiError('Network error - divine connection failed', 0, endpoint, error);
      }
      
      throw error;
    }
  }

  /**
   * 📡 HTTP Method Helpers - IMPROVED VALIDATION
   * Sacred shortcuts for divine communications
   */
  async get(endpoint, params = {}) {
    try {
      const queryString = this.buildQueryString(params);
      const fullEndpoint = queryString ? `${endpoint}?${queryString}` : endpoint;
      
      return this.request(fullEndpoint, { method: 'GET' });
    } catch (error) {
      throw new ApiError(`GET request failed: ${error.message}`, error.status || 500, endpoint, error);
    }
  }

  async post(endpoint, data = {}, options = {}) {
    try {
      return this.request(endpoint, {
        method: 'POST',
        body: data,
        ...options
      });
    } catch (error) {
      throw new ApiError(`POST request failed: ${error.message}`, error.status || 500, endpoint, error);
    }
  }

  async put(endpoint, data = {}, options = {}) {
    try {
      return this.request(endpoint, {
        method: 'PUT',
        body: data,
        ...options
      });
    } catch (error) {
      throw new ApiError(`PUT request failed: ${error.message}`, error.status || 500, endpoint, error);
    }
  }

  async patch(endpoint, data = {}, options = {}) {
    try {
      return this.request(endpoint, {
        method: 'PATCH',
        body: data,
        ...options
      });
    } catch (error) {
      throw new ApiError(`PATCH request failed: ${error.message}`, error.status || 500, endpoint, error);
    }
  }

  async delete(endpoint, options = {}) {
    try {
      return this.request(endpoint, {
        method: 'DELETE',
        ...options
      });
    } catch (error) {
      throw new ApiError(`DELETE request failed: ${error.message}`, error.status || 500, endpoint, error);
    }
  }

  /**
   * 🔄 Retry with Exponential Backoff - IMPROVED ERROR HANDLING
   * Divine persistence in sacred communications
   */
  async retryRequest(endpoint, config, attempt = 1) {
    if (this.isDestroyed) {
      throw new ApiError('API client destroyed during retry', 0, endpoint);
    }

    const delay = Math.min(1000 * Math.pow(2, attempt - 1), 30000); // Max 30 seconds
    
    console.log(`🔄 Divine retry attempt ${attempt} for ${endpoint} (waiting ${delay}ms)`);
    
    await this.sleep(delay);
    
    try {
      return await this.executeRequest(endpoint, config);
    } catch (error) {
      if (attempt < config.retries && this.isRetryableError(error)) {
        return this.retryRequest(endpoint, config, attempt + 1);
      }
      throw error;
    }
  }

  /**
   * 🔐 Authentication Methods - IMPROVED ERROR HANDLING
   * Sacred identity verification
   */
  setApiKey(apiKey) {
    if (!apiKey || typeof apiKey !== 'string') {
      console.warn('Invalid API key provided');
      return;
    }
    
    this.apiKey = apiKey;
    this.headers['Authorization'] = `Bearer ${apiKey}`;
    console.log('🔐 Divine API key updated');
  }

  setAuthToken(token) {
    if (!token || typeof token !== 'string') {
      console.warn('Invalid auth token provided');
      return;
    }
    
    this.headers['Authorization'] = `Bearer ${token}`;
    console.log('🔐 Divine auth token updated');
  }

  clearAuth() {
    delete this.headers['Authorization'];
    this.apiKey = null;
    console.log('🔐 Divine authentication cleared');
  }

  /**
   * 📝 Request/Response Interceptors - IMPROVED ERROR HANDLING
   * Sacred middleware for divine communications
   */
  addRequestInterceptor(interceptor) {
    if (typeof interceptor !== 'function') {
      console.warn('Request interceptor must be a function');
      return;
    }
    
    this.requestInterceptors.push(interceptor);
    console.log('🔌 Divine request interceptor added');
  }

  addResponseInterceptor(interceptor) {
    if (typeof interceptor !== 'function') {
      console.warn('Response interceptor must be a function');
      return;
    }
    
    this.responseInterceptors.push(interceptor);
    console.log('🔌 Divine response interceptor added');
  }

  async applyRequestInterceptors(endpoint, config) {
    let processedConfig = { ...config };
    
    for (const interceptor of this.requestInterceptors) {
      try {
        const result = await interceptor(endpoint, processedConfig);
        if (result && typeof result === 'object') {
          processedConfig = result;
        }
      } catch (error) {
        console.error('❌ Request interceptor failed:', error);
        // Continue with original config if interceptor fails
      }
    }
    
    return processedConfig;
  }

  async applyResponseInterceptors(response) {
    let processedResponse = response;
    
    for (const interceptor of this.responseInterceptors) {
      try {
        const result = await interceptor(processedResponse);
        if (result && typeof result === 'object') {
          processedResponse = result;
        }
      } catch (error) {
        console.error('❌ Response interceptor failed:', error);
        // Continue with original response if interceptor fails
      }
    }
    
    return processedResponse;
  }

  /**
   * 🛡️ Error Handling - IMPROVED ERROR CLASSIFICATION
   * Divine intervention for failed communications
   */
  handleRequestError(error, endpoint, config) {
    console.error(`❌ Divine communication failed for ${endpoint}:`, error);
    
    // Retry for retryable errors
    if (this.isRetryableError(error) && config.retries > 0) {
      return this.retryRequest(endpoint, { ...config, retries: config.retries - 1 });
    }
    
    // Transform error for better handling
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(
      `Divine communication failed: ${error.message}`,
      error.status || 500,
      endpoint,
      error
    );
  }

  isRetryableError(error) {
    if (!error) return false;
    
    const retryableStatuses = [408, 429, 500, 502, 503, 504];
    const retryableNames = ['TypeError', 'AbortError', 'NetworkError'];
    
    return retryableStatuses.includes(error.status) || 
           retryableNames.includes(error.name) ||
           (error.message && error.message.includes('network'));
  }

  /**
   * 📱 Offline Handling - IMPROVED QUEUE MANAGEMENT
   * Divine patience when connection wavers
   */
  handleOfflineRequest(endpoint, config) {
    if (config.allowOffline) {
      // Prevent queue from growing too large
      if (this.requestQueue.length >= 50) {
        this.requestQueue.shift(); // Remove oldest request
      }
      
      this.requestQueue.push({ endpoint, config, timestamp: Date.now() });
      console.log(`📡 Queued divine request: ${endpoint}`);
      
      return Promise.resolve({
        data: null,
        status: 0,
        offline: true,
        queued: true,
        message: 'Divine request queued - will send when connection returns'
      });
    }
    
    throw new ApiError('Divine connection unavailable', 0, endpoint);
  }

  async processQueuedRequests() {
    if (this.requestQueue.length === 0) return;
    
    console.log(`🔄 Processing ${this.requestQueue.length} queued divine requests`);
    
    const requests = [...this.requestQueue];
    this.requestQueue = [];
    
    // Process requests with concurrency limit
    const processRequest = async ({ endpoint, config }) => {
      try {
        await this.executeRequest(endpoint, config);
      } catch (error) {
        console.error(`❌ Queued request failed for ${endpoint}:`, error);
      }
    };

    // Process in batches to avoid overwhelming the server
    const batchSize = 3;
    for (let i = 0; i < requests.length; i += batchSize) {
      const batch = requests.slice(i, i + batchSize);
      await Promise.allSettled(batch.map(processRequest));
      
      // Small delay between batches
      if (i + batchSize < requests.length) {
        await this.sleep(1000);
      }
    }
  }

  /**
   * 🛠️ Utility Methods - IMPROVED ERROR HANDLING
   * Sacred helper functions
   */
  getBaseURL() {
    try {
      return process.env.REACT_APP_API_BASE_URL || 
             (process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api' : '/api');
    } catch (error) {
      console.warn('Failed to get base URL:', error);
      return '/api';
    }
  }

  getApiKey() {
    try {
      return process.env.REACT_APP_API_KEY || 
             (typeof localStorage !== 'undefined' ? localStorage.getItem('quorra_api_key') : null);
    } catch (error) {
      console.warn('Failed to get API key:', error);
      return null;
    }
  }

  getDefaultHeaders() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Client': 'QUORRA-Divine-Client',
      'X-Version': '1.0.0'
    };

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    return headers;
  }

  checkOnlineStatus() {
    try {
      return typeof navigator !== 'undefined' ? navigator.onLine : true;
    } catch (error) {
      console.warn('Failed to check online status:', error);
      return true; // Assume online if check fails
    }
  }

  buildFullURL(endpoint) {
    try {
      if (!endpoint) throw new Error('Endpoint is required');
      
      const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
      const cleanBaseURL = this.baseURL.endsWith('/') ? this.baseURL.slice(0, -1) : this.baseURL;
      
      return `${cleanBaseURL}/${cleanEndpoint}`;
    } catch (error) {
      console.error('Failed to build URL:', error);
      throw new ApiError('Invalid URL construction', 400, endpoint);
    }
  }

  buildQueryString(params) {
    try {
      if (!params || typeof params !== 'object') return '';
      
      const searchParams = new URLSearchParams();
      
      Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          searchParams.append(key, value.toString());
        }
      });
      
      return searchParams.toString();
    } catch (error) {
      console.warn('Failed to build query string:', error);
      return '';
    }
  }

  prepareRequestBody(body, headers) {
    try {
      const contentType = headers['Content-Type'] || headers['content-type'] || '';
      
      if (contentType.includes('application/json')) {
        return JSON.stringify(body);
      }
      
      if (contentType.includes('multipart/form-data')) {
        const formData = new FormData();
        Object.entries(body).forEach(([key, value]) => {
          if (value !== null && value !== undefined) {
            formData.append(key, value);
          }
        });
        return formData;
      }
      
      return body;
    } catch (error) {
      console.error('Failed to prepare request body:', error);
      return body;
    }
  }

  async parseResponse(response) {
    try {
      const contentType = response.headers.get('content-type') || '';
      
      if (contentType.includes('application/json')) {
        const text = await response.text();
        return text ? JSON.parse(text) : null;
      }
      
      if (contentType.includes('text/')) {
        return await response.text();
      }
      
      return await response.blob();
    } catch (error) {
      console.warn('Failed to parse response:', error);
      return null;
    }
  }

  parseHeaders(headers) {
    try {
      const headerObj = {};
      for (const [key, value] of headers.entries()) {
        headerObj[key] = value;
      }
      return headerObj;
    } catch (error) {
      console.warn('Failed to parse headers:', error);
      return {};
    }
  }

  getFetchOptions(config) {
    const options = {};
    
    try {
      // Handle credentials
      if (config.credentials) {
        options.credentials = config.credentials;
      }
      
      // Handle cache
      if (config.cache) {
        options.cache = config.cache;
      }
      
      // Handle mode
      if (config.mode) {
        options.mode = config.mode;
      }
    } catch (error) {
      console.warn('Failed to set fetch options:', error);
    }
    
    return options;
  }

  setupDefaultInterceptors() {
    try {
      // Request ID interceptor
      this.addRequestInterceptor(async (endpoint, config) => {
        config.headers['X-Request-ID'] = this.generateRequestId();
        return config;
      });

      // Timestamp interceptor
      this.addRequestInterceptor(async (endpoint, config) => {
        config.headers['X-Timestamp'] = new Date().toISOString();
        return config;
      });

      // Response timing interceptor
      this.addResponseInterceptor(async (response) => {
        if (response.timestamp) {
          response.responseTime = Date.now() - new Date(response.timestamp).getTime();
        }
        return response;
      });
    } catch (error) {
      console.warn('Failed to setup default interceptors:', error);
    }
  }

  generateRequestId() {
    try {
      return `quorra_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    } catch (error) {
      return `quorra_${Date.now()}_fallback`;
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, Math.max(0, ms)));
  }

  /**
   * 📊 Client Health & Status - IMPROVED ERROR HANDLING
   * Sacred monitoring of divine connection
   */
  getClientStatus() {
    try {
      return {
        baseURL: this.baseURL,
        isOnline: this.isOnline,
        hasAuth: !!this.headers['Authorization'],
        queuedRequests: this.requestQueue.length,
        activeRequests: this.activeRequests,
        interceptors: {
          request: this.requestInterceptors.length,
          response: this.responseInterceptors.length
        },
        isDestroyed: this.isDestroyed,
        timestamp: new Date().toISOString(),
        blessing: '🌐 Divine client status blessed'
      };
    } catch (error) {
      console.warn('Failed to get client status:', error);
      return {
        error: 'Status unavailable',
        timestamp: new Date().toISOString()
      };
    }
  }

  /**
   * 🧹 Cleanup Methods - IMPROVED CLEANUP
   * Sacred resource management
   */
  clearQueue() {
    try {
      this.requestQueue = [];
      console.log('🧹 Divine request queue cleared');
    } catch (error) {
      console.warn('Failed to clear queue:', error);
    }
  }

  destroy() {
    try {
      this.isDestroyed = true;
      this.clearQueue();
      this.requestInterceptors = [];
      this.responseInterceptors = [];
      this.rateLimiter.clear();
      console.log('🧹 Divine API client gracefully destroyed');
    } catch (error) {
      console.error('Failed to destroy API client:', error);
    }
  }
}

/**
 * 🚨 Custom API Error Class - IMPROVED ERROR HANDLING
 * Sacred error handling for divine communications
 */
class ApiError extends Error {
  constructor(message, status = 500, endpoint = '', originalError = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.endpoint = endpoint;
    this.originalError = originalError;
    this.timestamp = new Date().toISOString();
    this.isApiError = true;
    
    // Maintain proper stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }

  toString() {
    return `${this.name}: ${this.message} (${this.status}) at ${this.endpoint}`;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      endpoint: this.endpoint,
      timestamp: this.timestamp,
      originalError: this.originalError?.message || null,
      blessing: '🛡️ Divine error handled gracefully'
    };
  }
}

// Create and export the divine API client
const apiClient = new ApiClient();

export default apiClient;
export { ApiClient, ApiError };