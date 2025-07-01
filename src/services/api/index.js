/**
 * QUORRA API Services Coordinator - CORRECTED & COMPLETE VERSION
 * Sacred hub that orchestrates all divine communications
 * Initializes clients, interceptors, and provides unified API access
 */

import apiClient, { ApiClient, ApiError } from './client.js';
import api from './endpoints.js';
import { initializeInterceptors, cleanupInterceptors } from './interceptors.js';

/**
 * 🌟 QUORRA API Service
 * Divine coordinator for all external communications
 */
class QuorraApiService {
  constructor() {
    this.client = apiClient;
    this.endpoints = api;
    this.isInitialized = false;
    this.isDestroyed = false;
    this.healthStatus = 'unknown';
    this.lastHealthCheck = null;
    
    // Service state
    this.connectionRetries = 0;
    this.maxRetries = 3;
    this.healthCheckInterval = null;
    
    console.log('🌐 QUORRA API Service awakening...');
  }

  /**
   * 🔥 Initialize Divine API - IMPROVED ERROR HANDLING
   * Sacred startup sequence for all communications
   */
  async initialize(config = {}) {
    if (this.isDestroyed) {
      throw new Error('Cannot initialize destroyed API service');
    }

    try {
      console.log('🔥 Initializing divine API services...');
      
      // Set up configuration
      this.applyConfiguration(config);
      
      // Initialize interceptors with error handling
      try {
        initializeInterceptors();
      } catch (error) {
        console.warn('Interceptor initialization failed:', error);
        // Continue without interceptors if they fail
      }
      
      // Perform initial health check
      await this.performHealthCheck();
      
      // Set up monitoring
      this.setupHealthMonitoring();
      
      // Mark as initialized
      this.isInitialized = true;
      
      console.log('✨ Divine API services fully awakened and blessed!');
      return {
        status: 'initialized',
        health: this.healthStatus,
        blessing: '🌟 All divine pathways open and ready'
      };
    } catch (error) {
      console.error('❌ Divine API initialization failed:', error);
      return this.handleInitializationError(error);
    }
  }

  /**
   * ⚙️ Apply Configuration - IMPROVED VALIDATION
   * Sacred customization of divine settings
   */
  applyConfiguration(config) {
    try {
      // Set API key if provided
      if (config.apiKey && typeof config.apiKey === 'string') {
        this.setApiKey(config.apiKey);
      }
      
      // Set base URL if provided
      if (config.baseURL && typeof config.baseURL === 'string') {
        this.client.baseURL = config.baseURL;
      }
      
      // Apply timeout settings
      if (config.timeout && typeof config.timeout === 'number' && config.timeout > 0) {
        this.client.timeout = Math.min(config.timeout, 60000); // Max 60 seconds
      }
      
      // Apply retry settings
      if (config.retryAttempts && typeof config.retryAttempts === 'number') {
        this.client.retryAttempts = Math.max(0, Math.min(config.retryAttempts, 5)); // Max 5 retries
      }
      
      // Apply max retries for health checks
      if (config.maxRetries && typeof config.maxRetries === 'number') {
        this.maxRetries = Math.max(1, Math.min(config.maxRetries, 10));
      }
      
      console.log('⚙️ Divine configuration applied');
    } catch (error) {
      console.warn('Configuration application failed:', error);
    }
  }

  /**
   * 💓 Perform Health Check - IMPROVED ERROR HANDLING
   * Sacred verification of divine connectivity
   */
  async performHealthCheck() {
    try {
      console.log('💓 Checking divine connectivity...');
      
      const startTime = Date.now();
      const healthResponse = await this.endpoints.system.healthCheck();
      const responseTime = Date.now() - startTime;
      
      this.healthStatus = 'healthy';
      this.lastHealthCheck = new Date().toISOString();
      this.connectionRetries = 0;
      
      console.log(`✨ Divine servers responding in ${responseTime}ms`);
      
      return {
        status: 'healthy',
        responseTime,
        timestamp: this.lastHealthCheck,
        serverStatus: healthResponse.data?.status || 'unknown',
        blessing: '💓 Divine heart beats strong'
      };
    } catch (error) {
      return this.handleHealthCheckError(error);
    }
  }

  /**
   * 🚨 Handle Health Check Error - NEW METHOD
   * Sacred error handling for connectivity issues
   */
  handleHealthCheckError(error) {
    this.connectionRetries++;
    
    if (this.connectionRetries <= this.maxRetries) {
      this.healthStatus = 'degraded';
      console.warn(`⚠️ Divine connectivity issue (attempt ${this.connectionRetries}/${this.maxRetries}):`, error.message);
    } else {
      this.healthStatus = 'unhealthy';
      console.error('❌ Divine servers unreachable after maximum retries');
    }
    
    this.lastHealthCheck = new Date().toISOString();
    
    return {
      status: this.healthStatus,
      error: error.message,
      retries: this.connectionRetries,
      timestamp: this.lastHealthCheck,
      blessing: '🛡️ Divine intervention in progress'
    };
  }

  /**
   * 🚨 Handle Initialization Error - NEW METHOD
   * Sacred error handling for startup failures
   */
  handleInitializationError(error) {
    this.isInitialized = false;
    
    return {
      status: 'failed',
      error: error.message,
      health: 'unknown',
      blessing: '🚨 Divine initialization requires intervention',
      timestamp: new Date().toISOString()
    };
  }

  /**
   * 🔄 Setup Health Monitoring - IMPROVED CLEANUP
   * Sacred continuous monitoring of divine services
   */
  setupHealthMonitoring() {
    try {
      // Clear any existing interval
      if (this.healthCheckInterval) {
        clearInterval(this.healthCheckInterval);
      }

      // Periodic health checks every 5 minutes
      this.healthCheckInterval = setInterval(async () => {
        if (this.isInitialized && !this.isDestroyed) {
          await this.performHealthCheck();
        }
      }, 5 * 60 * 1000);
      
      // Check health on focus (when user returns to tab)
      if (typeof window !== 'undefined') {
        const focusHandler = () => {
          if (this.isInitialized && !this.isDestroyed) {
            this.performHealthCheck();
          }
        };
        
        window.addEventListener('focus', focusHandler);
        
        // Store handler for cleanup
        this.focusHandler = focusHandler;
      }
      
      console.log('🔄 Divine health monitoring established');
    } catch (error) {
      console.warn('Health monitoring setup failed:', error);
    }
  }

  /**
   * 🛡️ Ensure Initialized - NEW HELPER METHOD
   * Sacred validation of service readiness
   */
  ensureInitialized() {
    if (this.isDestroyed) {
      throw new ApiError('API service has been destroyed', 0, 'service');
    }
    
    if (!this.isInitialized) {
      throw new ApiError('API service not initialized - call initialize() first', 0, 'service');
    }
    
    if (this.healthStatus === 'unhealthy') {
      console.warn('⚠️ API service unhealthy but proceeding with request');
    }
  }

  /**
   * 🤖 Sparky AI Methods - IMPROVED ERROR HANDLING
   * Sacred shortcuts to divine messenger
   */
  async chatWithSparky(message, context = {}) {
    try {
      this.ensureInitialized();
      return await this.endpoints.sparky.channelGuidance(message, context);
    } catch (error) {
      console.error('Sparky chat failed:', error);
      throw new ApiError(`Sparky communication failed: ${error.message}`, error.status || 500, 'sparky/chat', error);
    }
  }

  async getSparkyDesignHelp(businessInfo) {
    try {
      this.ensureInitialized();
      return await this.endpoints.sparky.getDesignRecommendations(businessInfo);
    } catch (error) {
      console.error('Sparky design help failed:', error);
      throw new ApiError(`Sparky design help failed: ${error.message}`, error.status || 500, 'sparky/design', error);
    }
  }

  async updateSparkyContext(contextUpdate) {
    try {
      this.ensureInitialized();
      return await this.endpoints.sparky.updateContext(contextUpdate);
    } catch (error) {
      console.error('Sparky context update failed:', error);
      // Don't throw for context updates - they're non-critical
      return { success: false, error: error.message };
    }
  }

  /**
   * 🧠 Intelligence Methods - IMPROVED ERROR HANDLING
   * Sacred shortcuts to divine design wisdom
   */
  async getDesignIntelligence(projectInfo) {
    try {
      this.ensureInitialized();
      return await this.endpoints.intelligence.channelIntelligence(projectInfo);
    } catch (error) {
      console.error('Design intelligence failed:', error);
      throw new ApiError(`Design intelligence failed: ${error.message}`, error.status || 500, 'intelligence/design', error);
    }
  }

  async getColorGuidance(industry, brandPersonality) {
    try {
      this.ensureInitialized();
      return await this.endpoints.intelligence.getColorIntelligence(industry, brandPersonality);
    } catch (error) {
      console.error('Color guidance failed:', error);
      throw new ApiError(`Color guidance failed: ${error.message}`, error.status || 500, 'intelligence/color', error);
    }
  }

  async getTypographyGuidance(industry, targetAudience) {
    try {
      this.ensureInitialized();
      return await this.endpoints.intelligence.getTypographyIntelligence(industry, targetAudience);
    } catch (error) {
      console.error('Typography guidance failed:', error);
      throw new ApiError(`Typography guidance failed: ${error.message}`, error.status || 500, 'intelligence/typography', error);
    }
  }

  /**
   * 🔨 Code Generation Methods - IMPROVED ERROR HANDLING
   * Sacred shortcuts to divine forging
   */
  async generateCode(designData, projectInfo) {
    try {
      this.ensureInitialized();
      return await this.endpoints.generation.forgeCode(designData, projectInfo);
    } catch (error) {
      console.error('Code generation failed:', error);
      throw new ApiError(`Code generation failed: ${error.message}`, error.status || 500, 'generation/forge', error);
    }
  }

  async optimizeCode(code, options = {}) {
    try {
      this.ensureInitialized();
      return await this.endpoints.generation.optimizeCode(code, options);
    } catch (error) {
      console.error('Code optimization failed:', error);
      throw new ApiError(`Code optimization failed: ${error.message}`, error.status || 500, 'generation/optimize', error);
    }
  }

  async validateCode(code) {
    try {
      this.ensureInitialized();
      return await this.endpoints.generation.validateCode(code);
    } catch (error) {
      console.error('Code validation failed:', error);
      throw new ApiError(`Code validation failed: ${error.message}`, error.status || 500, 'generation/validate', error);
    }
  }

  /**
   * 📁 Project Management Methods - IMPROVED ERROR HANDLING
   * Sacred shortcuts to creation lifecycle
   */
  async createProject(projectData) {
    try {
      this.ensureInitialized();
      return await this.endpoints.projects.createProject(projectData);
    } catch (error) {
      console.error('Project creation failed:', error);
      throw new ApiError(`Project creation failed: ${error.message}`, error.status || 500, 'projects/create', error);
    }
  }

  async saveProject(projectId, state) {
    try {
      this.ensureInitialized();
      return await this.endpoints.projects.saveProjectState(projectId, state);
    } catch (error) {
      console.error('Project save failed:', error);
      throw new ApiError(`Project save failed: ${error.message}`, error.status || 500, 'projects/save', error);
    }
  }

  async exportProject(projectId, options = {}) {
    try {
      this.ensureInitialized();
      return await this.endpoints.projects.exportProject(projectId, options);
    } catch (error) {
      console.error('Project export failed:', error);
      throw new ApiError(`Project export failed: ${error.message}`, error.status || 500, 'projects/export', error);
    }
  }

  async listProjects(filters = {}) {
    try {
      this.ensureInitialized();
      return await this.endpoints.projects.listProjects(filters);
    } catch (error) {
      console.error('Projects list failed:', error);
      throw new ApiError(`Projects list failed: ${error.message}`, error.status || 500, 'projects/list', error);
    }
  }

  /**
   * 📊 Analytics Methods - NON-BLOCKING ERROR HANDLING
   * Sacred shortcuts to divine measurements
   */
  async trackEvent(eventData) {
    // Analytics should work even if API is not fully initialized
    try {
      return await this.endpoints.analytics.trackEvent(eventData);
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
      return { success: false, error: error.message };
    }
  }

  async sendAnalyticsReport(reportData) {
    try {
      return await this.endpoints.analytics.sendReport(reportData);
    } catch (error) {
      console.warn('Analytics report failed:', error);
      return { success: false, error: error.message };
    }
  }

  async getDashboard(timeRange = '7d') {
    try {
      this.ensureInitialized();
      return await this.endpoints.analytics.getDashboardData(timeRange);
    } catch (error) {
      console.error('Dashboard fetch failed:', error);
      throw new ApiError(`Dashboard fetch failed: ${error.message}`, error.status || 500, 'analytics/dashboard', error);
    }
  }

  /**
   * 👤 User Management Methods - IMPROVED ERROR HANDLING
   * Sacred shortcuts to identity management
   */
  async authenticate(credentials) {
    try {
      // Authentication doesn't require initialization
      return await this.endpoints.user.authenticate(credentials);
    } catch (error) {
      console.error('Authentication failed:', error);
      throw new ApiError(`Authentication failed: ${error.message}`, error.status || 401, 'auth/login', error);
    }
  }

  async getProfile() {
    try {
      this.ensureInitialized();
      return await this.endpoints.user.getProfile();
    } catch (error) {
      console.error('Profile fetch failed:', error);
      throw new ApiError(`Profile fetch failed: ${error.message}`, error.status || 500, 'user/profile', error);
    }
  }

  async updateProfile(profileData) {
    try {
      this.ensureInitialized();
      return await this.endpoints.user.updateProfile(profileData);
    } catch (error) {
      console.error('Profile update failed:', error);
      throw new ApiError(`Profile update failed: ${error.message}`, error.status || 500, 'user/profile', error);
    }
  }

  async getPreferences() {
    try {
      this.ensureInitialized();
      return await this.endpoints.user.getPreferences();
    } catch (error) {
      console.error('Preferences fetch failed:', error);
      throw new ApiError(`Preferences fetch failed: ${error.message}`, error.status || 500, 'user/preferences', error);
    }
  }

  /**
   * 🗄️ Asset Management Methods - IMPROVED ERROR HANDLING
   * Sacred shortcuts to resource management
   */
  async uploadAsset(file, metadata = {}) {
    try {
      this.ensureInitialized();
      return await this.endpoints.assets.uploadAsset(file, metadata);
    } catch (error) {
      console.error('Asset upload failed:', error);
      throw new ApiError(`Asset upload failed: ${error.message}`, error.status || 500, 'assets/upload', error);
    }
  }

  async listAssets(filters = {}) {
    try {
      this.ensureInitialized();
      return await this.endpoints.assets.listAssets(filters);
    } catch (error) {
      console.error('Assets list failed:', error);
      throw new ApiError(`Assets list failed: ${error.message}`, error.status || 500, 'assets/list', error);
    }
  }

  async deleteAsset(assetId) {
    try {
      this.ensureInitialized();
      return await this.endpoints.assets.deleteAsset(assetId);
    } catch (error) {
      console.error('Asset deletion failed:', error);
      throw new ApiError(`Asset deletion failed: ${error.message}`, error.status || 500, 'assets/delete', error);
    }
  }

  /**
   * 🎨 Template Methods - IMPROVED ERROR HANDLING
   * Sacred shortcuts to design patterns
   */
  async getTemplates(category = 'all') {
    try {
      this.ensureInitialized();
      return await this.endpoints.templates.listTemplates(category);
    } catch (error) {
      console.error('Templates fetch failed:', error);
      throw new ApiError(`Templates fetch failed: ${error.message}`, error.status || 500, 'templates/list', error);
    }
  }

  async getTemplate(templateId) {
    try {
      this.ensureInitialized();
      return await this.endpoints.templates.getTemplate(templateId);
    } catch (error) {
      console.error('Template fetch failed:', error);
      throw new ApiError(`Template fetch failed: ${error.message}`, error.status || 500, 'templates/get', error);
    }
  }

  async applyTemplate(templateId, projectId, customizations = {}) {
    try {
      this.ensureInitialized();
      return await this.endpoints.templates.applyTemplate(templateId, projectId, customizations);
    } catch (error) {
      console.error('Template application failed:', error);
      throw new ApiError(`Template application failed: ${error.message}`, error.status || 500, 'templates/apply', error);
    }
  }

  /**
   * 💳 Billing Methods - IMPROVED ERROR HANDLING
   * Sacred shortcuts to commerce
   */
  async getSubscription() {
    try {
      this.ensureInitialized();
      return await this.endpoints.billing.getSubscription();
    } catch (error) {
      console.error('Subscription fetch failed:', error);
      throw new ApiError(`Subscription fetch failed: ${error.message}`, error.status || 500, 'billing/subscription', error);
    }
  }

  async upgradeSubscription(newTier, billingCycle = 'monthly') {
    try {
      this.ensureInitialized();
      return await this.endpoints.billing.upgradeSubscription(newTier, billingCycle);
    } catch (error) {
      console.error('Subscription upgrade failed:', error);
      throw new ApiError(`Subscription upgrade failed: ${error.message}`, error.status || 500, 'billing/upgrade', error);
    }
  }

  async getUsageStats() {
    try {
      this.ensureInitialized();
      return await this.endpoints.billing.getUsageStats();
    } catch (error) {
      console.error('Usage stats fetch failed:', error);
      throw new ApiError(`Usage stats fetch failed: ${error.message}`, error.status || 500, 'billing/usage', error);
    }
  }

  /**
   * 🔐 Authentication Management - IMPROVED ERROR HANDLING
   * Sacred identity control
   */
  setApiKey(apiKey) {
    try {
      this.client.setApiKey(apiKey);
      console.log('🔐 Divine API key updated');
    } catch (error) {
      console.error('Failed to set API key:', error);
      throw new ApiError('Failed to set API key', 400, 'auth/apikey');
    }
  }

  setAuthToken(token) {
    try {
      this.client.setAuthToken(token);
      console.log('🔐 Divine auth token updated');
    } catch (error) {
      console.error('Failed to set auth token:', error);
      throw new ApiError('Failed to set auth token', 400, 'auth/token');
    }
  }

  clearAuth() {
    try {
      this.client.clearAuth();
      console.log('🔐 Divine authentication cleared');
    } catch (error) {
      console.error('Failed to clear auth:', error);
    }
  }

  /**
   * 📊 Service Status Methods - NEW METHODS
   * Sacred service monitoring
   */
  getServiceStatus() {
    try {
      return {
        isInitialized: this.isInitialized,
        isDestroyed: this.isDestroyed,
        healthStatus: this.healthStatus,
        lastHealthCheck: this.lastHealthCheck,
        connectionRetries: this.connectionRetries,
        maxRetries: this.maxRetries,
        clientStatus: this.client.getClientStatus(),
        timestamp: new Date().toISOString(),
        blessing: '📊 Divine service status revealed'
      };
    } catch (error) {
      console.warn('Failed to get service status:', error);
      return {
        error: 'Status unavailable',
        timestamp: new Date().toISOString()
      };
    }
  }

  async runHealthCheck() {
    try {
      return await this.performHealthCheck();
    } catch (error) {
      console.error('Manual health check failed:', error);
      return this.handleHealthCheckError(error);
    }
  }

  /**
   * 🔄 Retry Failed Operations - NEW METHOD
   * Sacred persistence for failed divine communications
   */
  async retryFailedOperation(operationFn, maxRetries = 3) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await operationFn();
      } catch (error) {
        lastError = error;
        console.warn(`Operation failed (attempt ${attempt}/${maxRetries}):`, error.message);
        
        if (attempt < maxRetries) {
          // Exponential backoff
          const delay = Math.min(1000 * Math.pow(2, attempt - 1), 10000);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    throw lastError;
  }

  /**
   * 🧹 Cleanup Methods - IMPROVED CLEANUP
   * Sacred resource management
   */
  destroy() {
    try {
      this.isDestroyed = true;
      this.isInitialized = false;
      
      // Clear health check interval
      if (this.healthCheckInterval) {
        clearInterval(this.healthCheckInterval);
        this.healthCheckInterval = null;
      }
      
      // Remove event listeners
      if (typeof window !== 'undefined' && this.focusHandler) {
        window.removeEventListener('focus', this.focusHandler);
        this.focusHandler = null;
      }
      
      // Cleanup interceptors
      try {
        cleanupInterceptors();
      } catch (error) {
        console.warn('Interceptor cleanup failed:', error);
      }
      
      // Destroy client
      try {
        this.client.destroy();
      } catch (error) {
        console.warn('Client destroy failed:', error);
      }
      
      console.log('🧹 QUORRA API Service gracefully destroyed - divine wisdom preserved');
    } catch (error) {
      console.error('API service destruction failed:', error);
    }
  }

  /**
   * 🔄 Reinitialize Service - NEW METHOD
   * Sacred restoration after errors
   */
  async reinitialize(config = {}) {
    try {
      console.log('🔄 Reinitializing divine API service...');
      
      // Reset state
      this.isInitialized = false;
      this.healthStatus = 'unknown';
      this.connectionRetries = 0;
      
      // Reinitialize
      return await this.initialize(config);
    } catch (error) {
      console.error('API service reinitialization failed:', error);
      throw new ApiError(`Reinitialization failed: ${error.message}`, 500, 'service/reinit', error);
    }
  }

  /**
   * 🔧 Configuration Management - NEW METHODS
   * Sacred settings management
   */
  updateConfiguration(newConfig) {
    try {
      this.applyConfiguration(newConfig);
      console.log('⚙️ Divine configuration updated');
      return this.getServiceStatus();
    } catch (error) {
      console.error('Configuration update failed:', error);
      throw new ApiError('Configuration update failed', 400, 'service/config');
    }
  }

  getConfiguration() {
    try {
      return {
        baseURL: this.client.baseURL,
        timeout: this.client.timeout,
        retryAttempts: this.client.retryAttempts,
        maxRetries: this.maxRetries,
        hasAuth: !!this.client.headers?.['Authorization'],
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.warn('Failed to get configuration:', error);
      return { error: 'Configuration unavailable' };
    }
  }
}

// Create and export the divine API service coordinator
const quorraApiService = new QuorraApiService();

export default quorraApiService;
export { QuorraApiService, ApiClient, ApiError };