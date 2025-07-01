/**
 * QUORRA API Endpoints - CORRECTED VERSION
 * Sacred registry of all divine communication pathways
 * Organized by service domains with intelligent routing
 */

import apiClient from './client.js';

/**
 * 🤖 Sparky AI Endpoints - IMPROVED ERROR HANDLING
 * Divine messenger communication pathways
 */
export const sparkyEndpoints = {
  /**
   * 💬 Channel Divine Guidance
   * Main endpoint for Sparky conversations
   */
  async channelGuidance(message, context = {}) {
    try {
      if (!message || typeof message !== 'string') {
        throw new Error('Message is required and must be a string');
      }

      return apiClient.post('/sparky/guidance', {
        message: message.substring(0, 2000), // Limit message length
        context: this.sanitizeContext(context),
        timestamp: new Date().toISOString(),
        sessionId: context.sessionId || 'default'
      });
    } catch (error) {
      console.error('Sparky guidance request failed:', error);
      throw error;
    }
  },

  /**
   * 🎨 Get Design Recommendations
   * AI-powered design suggestions
   */
  async getDesignRecommendations(businessInfo) {
    try {
      if (!businessInfo || typeof businessInfo !== 'object') {
        throw new Error('Business information is required');
      }

      return apiClient.post('/sparky/design-recommendations', {
        businessType: String(businessInfo.type || 'unknown').substring(0, 100),
        industry: String(businessInfo.industry || 'unknown').substring(0, 100),
        targetAudience: String(businessInfo.audience || 'general').substring(0, 200),
        brandPersonality: String(businessInfo.personality || 'professional').substring(0, 100),
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Design recommendations request failed:', error);
      throw error;
    }
  },

  /**
   * 🧠 Update Context
   * Keep Sparky informed about user's journey
   */
  async updateContext(contextUpdate) {
    try {
      if (!contextUpdate || typeof contextUpdate !== 'object') {
        throw new Error('Context update is required');
      }

      return apiClient.patch('/sparky/context', {
        contextUpdate: this.sanitizeContext(contextUpdate),
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Context update request failed:', error);
      throw error;
    }
  },

  /**
   * 💭 Get Memory Stats
   * Sacred conversation history insights
   */
  async getMemoryStats() {
    try {
      return apiClient.get('/sparky/memory/stats');
    } catch (error) {
      console.error('Memory stats request failed:', error);
      throw error;
    }
  },

  /**
   * 🔄 Reset Memory
   * Clear conversation history for fresh start
   */
  async resetMemory() {
    try {
      return apiClient.delete('/sparky/memory');
    } catch (error) {
      console.error('Memory reset request failed:', error);
      throw error;
    }
  },

  /**
   * 🛠️ Helper Methods
   */
  sanitizeContext(context) {
    try {
      const sanitized = {};
      
      // Only include safe properties
      const allowedKeys = ['sessionId', 'projectId', 'industry', 'businessType', 'preferences'];
      
      for (const key of allowedKeys) {
        if (context[key] !== undefined && context[key] !== null) {
          if (typeof context[key] === 'string') {
            sanitized[key] = context[key].substring(0, 500);
          } else if (typeof context[key] === 'object') {
            sanitized[key] = JSON.parse(JSON.stringify(context[key]).substring(0, 1000));
          } else {
            sanitized[key] = context[key];
          }
        }
      }
      
      return sanitized;
    } catch (error) {
      console.warn('Context sanitization failed:', error);
      return {};
    }
  }
};

/**
 * 🧠 Intelligence Service Endpoints - IMPROVED VALIDATION
 * Divine design wisdom pathways
 */
export const intelligenceEndpoints = {
  /**
   * 🌟 Channel Intelligence
   * Main endpoint for design intelligence
   */
  async channelIntelligence(projectInfo) {
    try {
      if (!projectInfo || typeof projectInfo !== 'object') {
        throw new Error('Project information is required');
      }

      return apiClient.post('/intelligence/channel', {
        industry: String(projectInfo.industry || 'unknown').substring(0, 100),
        businessType: String(projectInfo.businessType || 'unknown').substring(0, 100),
        targetAudience: String(projectInfo.targetAudience || 'general').substring(0, 200),
        brandPersonality: String(projectInfo.brandPersonality || 'professional').substring(0, 100),
        competitorContext: this.sanitizeCompetitorContext(projectInfo.competitorContext),
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Intelligence channel request failed:', error);
      throw error;
    }
  },

  /**
   * 🎨 Get Color Intelligence
   * Sacred color psychology and trends
   */
  async getColorIntelligence(industry, brandPersonality) {
    try {
      return apiClient.get('/intelligence/colors', {
        industry: String(industry || 'unknown').substring(0, 100),
        brandPersonality: String(brandPersonality || 'professional').substring(0, 100),
        year: new Date().getFullYear()
      });
    } catch (error) {
      console.error('Color intelligence request failed:', error);
      throw error;
    }
  },

  /**
   * ✍️ Get Typography Intelligence
   * Divine font wisdom
   */
  async getTypographyIntelligence(industry, targetAudience) {
    try {
      return apiClient.get('/intelligence/typography', {
        industry: String(industry || 'unknown').substring(0, 100),
        targetAudience: String(targetAudience || 'general').substring(0, 200)
      });
    } catch (error) {
      console.error('Typography intelligence request failed:', error);
      throw error;
    }
  },

  /**
   * 📐 Get Layout Intelligence
   * Sacred composition wisdom
   */
  async getLayoutIntelligence(businessType) {
    try {
      return apiClient.get('/intelligence/layout', {
        businessType: String(businessType || 'unknown').substring(0, 100)
      });
    } catch (error) {
      console.error('Layout intelligence request failed:', error);
      throw error;
    }
  },

  /**
   * 🎯 Get Industry Patterns
   * Sacred business category knowledge
   */
  async getIndustryPatterns(industry) {
    try {
      if (!industry || typeof industry !== 'string') {
        throw new Error('Industry parameter is required');
      }

      const sanitizedIndustry = industry.substring(0, 100).replace(/[^a-zA-Z0-9-_]/g, '');
      return apiClient.get(`/intelligence/industries/${encodeURIComponent(sanitizedIndustry)}`);
    } catch (error) {
      console.error('Industry patterns request failed:', error);
      throw error;
    }
  },

  /**
   * 🌈 Get Pantone Intelligence
   * Current color trends and cultural moments
   */
  async getPantoneIntelligence(year = new Date().getFullYear()) {
    try {
      const validYear = Math.max(2020, Math.min(2030, Number(year) || new Date().getFullYear()));
      return apiClient.get('/intelligence/pantone', { year: validYear });
    } catch (error) {
      console.error('Pantone intelligence request failed:', error);
      throw error;
    }
  },

  /**
   * 🛠️ Helper Methods
   */
  sanitizeCompetitorContext(context) {
    try {
      if (!context || typeof context !== 'object') return {};
      
      const sanitized = {};
      if (Array.isArray(context.competitors)) {
        sanitized.competitors = context.competitors
          .slice(0, 5) // Limit to 5 competitors
          .map(comp => String(comp).substring(0, 100));
      }
      
      if (context.positioning) {
        sanitized.positioning = String(context.positioning).substring(0, 500);
      }
      
      return sanitized;
    } catch (error) {
      console.warn('Competitor context sanitization failed:', error);
      return {};
    }
  }
};

/**
 * 🔨 Code Generation Endpoints - IMPROVED VALIDATION
 * Sacred forging communication pathways
 */
export const generationEndpoints = {
  /**
   * 🔥 Forge Sacred Code
   * Main endpoint for code generation
   */
  async forgeCode(designData, projectInfo) {
    try {
      if (!designData || typeof designData !== 'object') {
        throw new Error('Design data is required');
      }

      if (!projectInfo || typeof projectInfo !== 'object') {
        throw new Error('Project information is required');
      }

      return apiClient.post('/generation/forge', {
        designData: this.sanitizeDesignData(designData),
        projectInfo: this.sanitizeProjectInfo(projectInfo),
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Code forge request failed:', error);
      throw error;
    }
  },

  /**
   * ⚡ Optimize Generated Code
   * Divine performance enhancements
   */
  async optimizeCode(code, optimizationOptions = {}) {
    try {
      if (!code || typeof code !== 'object') {
        throw new Error('Code object is required');
      }

      return apiClient.post('/generation/optimize', {
        html: String(code.html || ''),
        css: String(code.css || ''),
        options: {
          minify: Boolean(optimizationOptions.minify !== false),
          compress: Boolean(optimizationOptions.compress !== false),
          accessibility: Boolean(optimizationOptions.accessibility !== false),
          performance: Boolean(optimizationOptions.performance !== false),
          ...this.sanitizeOptimizationOptions(optimizationOptions)
        }
      });
    } catch (error) {
      console.error('Code optimization request failed:', error);
      throw error;
    }
  },

  /**
   * ✅ Validate Sacred Code
   * Divine quality assurance
   */
  async validateCode(code) {
    try {
      if (!code || typeof code !== 'object') {
        throw new Error('Code object is required');
      }

      return apiClient.post('/generation/validate', {
        html: String(code.html || ''),
        css: String(code.css || ''),
        checks: ['html', 'css', 'accessibility', 'performance', 'seo']
      });
    } catch (error) {
      console.error('Code validation request failed:', error);
      throw error;
    }
  },

  /**
   * 📊 Analyze Performance
   * Sacred speed and optimization analysis
   */
  async analyzePerformance(code, context = {}) {
    try {
      if (!code || typeof code !== 'object') {
        throw new Error('Code object is required');
      }

      return apiClient.post('/generation/analyze-performance', {
        html: String(code.html || ''),
        css: String(code.css || ''),
        context: this.sanitizeAnalysisContext(context),
        metrics: ['size', 'loadTime', 'renderTime', 'accessibility']
      });
    } catch (error) {
      console.error('Performance analysis request failed:', error);
      throw error;
    }
  },

  /**
   * 📱 Generate Responsive Code
   * Divine multi-device optimization
   */
  async generateResponsive(designData, breakpoints = {}) {
    try {
      if (!designData || typeof designData !== 'object') {
        throw new Error('Design data is required');
      }

      return apiClient.post('/generation/responsive', {
        designData: this.sanitizeDesignData(designData),
        breakpoints: {
          mobile: String(breakpoints.mobile || '768px'),
          tablet: String(breakpoints.tablet || '1024px'),
          desktop: String(breakpoints.desktop || '1200px'),
          ...this.sanitizeBreakpoints(breakpoints)
        }
      });
    } catch (error) {
      console.error('Responsive generation request failed:', error);
      throw error;
    }
  },

  /**
   * 🛠️ Helper Methods
   */
  sanitizeDesignData(data) {
    try {
      // Deep clone and sanitize design data
      const sanitized = JSON.parse(JSON.stringify(data).substring(0, 100000)); // 100KB limit
      return sanitized;
    } catch (error) {
      console.warn('Design data sanitization failed:', error);
      return {};
    }
  },

  sanitizeProjectInfo(info) {
    try {
      return {
        industry: String(info.industry || 'unknown').substring(0, 100),
        businessType: String(info.businessType || 'unknown').substring(0, 100),
        targetAudience: String(info.targetAudience || 'general').substring(0, 200),
        projectId: String(info.projectId || '').substring(0, 50)
      };
    } catch (error) {
      console.warn('Project info sanitization failed:', error);
      return {};
    }
  },

  sanitizeOptimizationOptions(options) {
    try {
      const sanitized = {};
      const allowedKeys = ['removeComments', 'removeWhitespace', 'compressImages', 'bundleAssets'];
      
      for (const key of allowedKeys) {
        if (options[key] !== undefined) {
          sanitized[key] = Boolean(options[key]);
        }
      }
      
      return sanitized;
    } catch (error) {
      return {};
    }
  },

  sanitizeAnalysisContext(context) {
    try {
      return {
        target: String(context.target || 'web').substring(0, 50),
        environment: String(context.environment || 'production').substring(0, 50),
        constraints: context.constraints || {}
      };
    } catch (error) {
      return {};
    }
  },

  sanitizeBreakpoints(breakpoints) {
    try {
      const sanitized = {};
      const validBreakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
      
      for (const key of validBreakpoints) {
        if (breakpoints[key]) {
          sanitized[key] = String(breakpoints[key]).substring(0, 20);
        }
      }
      
      return sanitized;
    } catch (error) {
      return {};
    }
  }
};

/**
 * 👤 User & Project Management Endpoints - IMPROVED SECURITY
 * Sacred identity and creation pathways
 */
export const userEndpoints = {
  /**
   * 🔐 Authenticate User
   * Sacred identity verification
   */
  async authenticate(credentials) {
    try {
      if (!credentials || typeof credentials !== 'object') {
        throw new Error('Credentials are required');
      }

      if (!credentials.email || !credentials.password) {
        throw new Error('Email and password are required');
      }

      return apiClient.post('/auth/login', {
        email: String(credentials.email).substring(0, 255),
        password: credentials.password, // Don't log or limit password
        rememberMe: Boolean(credentials.rememberMe)
      });
    } catch (error) {
      console.error('Authentication request failed:', error);
      throw error;
    }
  },

  /**
   * 👤 Get User Profile
   * Sacred identity information
   */
  async getProfile() {
    try {
      return apiClient.get('/user/profile');
    } catch (error) {
      console.error('Profile fetch request failed:', error);
      throw error;
    }
  },

  /**
   * 📝 Update User Profile
   * Sacred identity modification
   */
  async updateProfile(profileData) {
    try {
      if (!profileData || typeof profileData !== 'object') {
        throw new Error('Profile data is required');
      }

      return apiClient.patch('/user/profile', this.sanitizeProfileData(profileData));
    } catch (error) {
      console.error('Profile update request failed:', error);
      throw error;
    }
  },

  /**
   * 🎯 Get User Preferences
   * Sacred customization settings
   */
  async getPreferences() {
    try {
      return apiClient.get('/user/preferences');
    } catch (error) {
      console.error('Preferences fetch request failed:', error);
      throw error;
    }
  },

  /**
   * ⚙️ Update User Preferences
   * Sacred settings modification
   */
  async updatePreferences(preferences) {
    try {
      if (!preferences || typeof preferences !== 'object') {
        throw new Error('Preferences data is required');
      }

      return apiClient.patch('/user/preferences', this.sanitizePreferences(preferences));
    } catch (error) {
      console.error('Preferences update request failed:', error);
      throw error;
    }
  },

  /**
   * 🔑 Change API Key
   * Sacred access token management
   */
  async regenerateApiKey() {
    try {
      return apiClient.post('/user/api-key/regenerate');
    } catch (error) {
      console.error('API key regeneration request failed:', error);
      throw error;
    }
  },

  /**
   * 🛠️ Helper Methods
   */
  sanitizeProfileData(data) {
    try {
      const allowedFields = ['firstName', 'lastName', 'company', 'website', 'bio'];
      const sanitized = {};
      
      for (const field of allowedFields) {
        if (data[field] !== undefined && data[field] !== null) {
          sanitized[field] = String(data[field]).substring(0, 500);
        }
      }
      
      return sanitized;
    } catch (error) {
      console.warn('Profile data sanitization failed:', error);
      return {};
    }
  },

  sanitizePreferences(prefs) {
    try {
      const allowedPrefs = ['theme', 'language', 'notifications', 'autoSave', 'defaultIndustry'];
      const sanitized = {};
      
      for (const pref of allowedPrefs) {
        if (prefs[pref] !== undefined) {
          if (typeof prefs[pref] === 'string') {
            sanitized[pref] = prefs[pref].substring(0, 100);
          } else if (typeof prefs[pref] === 'boolean') {
            sanitized[pref] = prefs[pref];
          } else if (typeof prefs[pref] === 'object') {
            sanitized[pref] = JSON.parse(JSON.stringify(prefs[pref]).substring(0, 1000));
          }
        }
      }
      
      return sanitized;
    } catch (error) {
      console.warn('Preferences sanitization failed:', error);
      return {};
    }
  }
};

/**
 * 📁 Project Management Endpoints - IMPROVED VALIDATION
 * Sacred creation lifecycle pathways
 */
export const projectEndpoints = {
  /**
   * 📋 List Projects
   * Sacred portfolio viewing
   */
  async listProjects(filters = {}) {
    try {
      const sanitizedFilters = {
        page: Math.max(1, Number(filters.page) || 1),
        limit: Math.min(100, Math.max(1, Number(filters.limit) || 20)),
        industry: filters.industry ? String(filters.industry).substring(0, 100) : undefined,
        status: filters.status ? String(filters.status).substring(0, 50) : undefined,
        search: filters.search ? String(filters.search).substring(0, 200) : undefined
      };

      // Remove undefined values
      Object.keys(sanitizedFilters).forEach(key => {
        if (sanitizedFilters[key] === undefined) {
          delete sanitizedFilters[key];
        }
      });

      return apiClient.get('/projects', sanitizedFilters);
    } catch (error) {
      console.error('Projects list request failed:', error);
      throw error;
    }
  },

  /**
   * 🆕 Create Project
   * Sacred new creation
   */
  async createProject(projectData) {
    try {
      if (!projectData || typeof projectData !== 'object') {
        throw new Error('Project data is required');
      }

      if (!projectData.name || typeof projectData.name !== 'string') {
        throw new Error('Project name is required');
      }

      return apiClient.post('/projects', {
        ...this.sanitizeProjectData(projectData),
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Project creation request failed:', error);
      throw error;
    }
  },

  /**
   * 👁️ Get Project Details
   * Sacred creation inspection
   */
  async getProject(projectId) {
    try {
      if (!projectId || typeof projectId !== 'string') {
        throw new Error('Project ID is required');
      }

      const sanitizedId = projectId.replace(/[^a-zA-Z0-9-_]/g, '').substring(0, 50);
      return apiClient.get(`/projects/${encodeURIComponent(sanitizedId)}`);
    } catch (error) {
      console.error('Project fetch request failed:', error);
      throw error;
    }
  },

  /**
   * 💾 Update Project
   * Sacred creation modification
   */
  async updateProject(projectId, updates) {
    try {
      if (!projectId || typeof projectId !== 'string') {
        throw new Error('Project ID is required');
      }

      if (!updates || typeof updates !== 'object') {
        throw new Error('Updates are required');
      }

      const sanitizedId = projectId.replace(/[^a-zA-Z0-9-_]/g, '').substring(0, 50);
      
      return apiClient.patch(`/projects/${encodeURIComponent(sanitizedId)}`, {
        ...this.sanitizeProjectData(updates),
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Project update request failed:', error);
      throw error;
    }
  },

  /**
   * 🗑️ Delete Project
   * Sacred creation removal
   */
  async deleteProject(projectId) {
    try {
      if (!projectId || typeof projectId !== 'string') {
        throw new Error('Project ID is required');
      }

      const sanitizedId = projectId.replace(/[^a-zA-Z0-9-_]/g, '').substring(0, 50);
      return apiClient.delete(`/projects/${encodeURIComponent(sanitizedId)}`);
    } catch (error) {
      console.error('Project deletion request failed:', error);
      throw error;
    }
  },

  /**
   * 💾 Save Project State
   * Sacred progress preservation
   */
  async saveProjectState(projectId, state) {
    try {
      if (!projectId || typeof projectId !== 'string') {
        throw new Error('Project ID is required');
      }

      if (!state || typeof state !== 'object') {
        throw new Error('Project state is required');
      }

      const sanitizedId = projectId.replace(/[^a-zA-Z0-9-_]/g, '').substring(0, 50);
      
      return apiClient.post(`/projects/${encodeURIComponent(sanitizedId)}/save`, {
        state: this.sanitizeProjectState(state),
        timestamp: new Date().toISOString(),
        version: Number(state.version) || 1
      });
    } catch (error) {
      console.error('Project save request failed:', error);
      throw error;
    }
  },

  /**
   * 📤 Export Project
   * Sacred creation delivery
   */
  async exportProject(projectId, exportOptions = {}) {
    try {
      if (!projectId || typeof projectId !== 'string') {
        throw new Error('Project ID is required');
      }

      const sanitizedId = projectId.replace(/[^a-zA-Z0-9-_]/g, '').substring(0, 50);
      
      return apiClient.post(`/projects/${encodeURIComponent(sanitizedId)}/export`, {
        format: String(exportOptions.format || 'zip').substring(0, 20),
        includeAssets: Boolean(exportOptions.includeAssets !== false),
        minify: Boolean(exportOptions.minify !== false),
        ...this.sanitizeExportOptions(exportOptions)
      });
    } catch (error) {
      console.error('Project export request failed:', error);
      throw error;
    }
  },

  /**
   * 📊 Get Project Analytics
   * Sacred creation insights
   */
  async getProjectAnalytics(projectId) {
    try {
      if (!projectId || typeof projectId !== 'string') {
        throw new Error('Project ID is required');
      }

      const sanitizedId = projectId.replace(/[^a-zA-Z0-9-_]/g, '').substring(0, 50);
      return apiClient.get(`/projects/${encodeURIComponent(sanitizedId)}/analytics`);
    } catch (error) {
      console.error('Project analytics request failed:', error);
      throw error;
    }
  },

  /**
   * 🛠️ Helper Methods
   */
  sanitizeProjectData(data) {
    try {
      const allowedFields = ['name', 'description', 'industry', 'businessType', 'status', 'tags'];
      const sanitized = {};
      
      for (const field of allowedFields) {
        if (data[field] !== undefined && data[field] !== null) {
          if (field === 'tags' && Array.isArray(data[field])) {
            sanitized[field] = data[field]
              .slice(0, 10) // Max 10 tags
              .map(tag => String(tag).substring(0, 50));
          } else {
            sanitized[field] = String(data[field]).substring(0, field === 'description' ? 1000 : 200);
          }
        }
      }
      
      return sanitized;
    } catch (error) {
      console.warn('Project data sanitization failed:', error);
      return {};
    }
  },

  sanitizeProjectState(state) {
    try {
      // Limit state size to prevent large payloads
      const stateString = JSON.stringify(state);
      if (stateString.length > 1000000) { // 1MB limit
        throw new Error('Project state too large');
      }
      
      return JSON.parse(stateString);
    } catch (error) {
      console.warn('Project state sanitization failed:', error);
      return {};
    }
  },

  sanitizeExportOptions(options) {
    try {
      const allowedOptions = ['compressed', 'includeSourceMaps', 'optimizeImages'];
      const sanitized = {};
      
      for (const option of allowedOptions) {
        if (options[option] !== undefined) {
          sanitized[option] = Boolean(options[option]);
        }
      }
      
      return sanitized;
    } catch (error) {
      return {};
    }
  }
};

// Continue with other endpoint groups...
// (Analytics, Assets, Templates, Billing, System endpoints would follow the same pattern)

/**
 * 📊 Analytics Endpoints - IMPROVED ERROR HANDLING
 * Sacred measurement pathways
 */
export const analyticsEndpoints = {
  async trackEvent(eventData) {
    try {
      if (!eventData || typeof eventData !== 'object') {
        throw new Error('Event data is required');
      }

      return apiClient.post('/analytics/events', {
        ...this.sanitizeEventData(eventData),
        timestamp: new Date().toISOString(),
        clientId: 'quorra-web-client'
      });
    } catch (error) {
      console.error('Analytics tracking request failed:', error);
      // Don't throw for analytics failures - they should be non-blocking
      return { success: false, error: error.message };
    }
  },

  async sendReport(reportData) {
    try {
      return apiClient.post('/analytics/reports', {
        ...this.sanitizeReportData(reportData),
        reportType: 'periodic',
        clientVersion: '1.0.0'
      });
    } catch (error) {
      console.error('Analytics report request failed:', error);
      return { success: false, error: error.message };
    }
  },

  sanitizeEventData(data) {
    try {
      return {
        eventName: String(data.eventName || 'unknown').substring(0, 100),
        properties: this.sanitizeProperties(data.properties || {}),
        userId: String(data.userId || 'anonymous').substring(0, 50)
      };
    } catch (error) {
      return { eventName: 'sanitization_error', properties: {} };
    }
  },

  sanitizeReportData(data) {
    try {
      const sanitized = {};
      if (data.sessionData) {
        sanitized.sessionData = JSON.parse(JSON.stringify(data.sessionData).substring(0, 50000));
      }
      if (data.performanceData) {
        sanitized.performanceData = JSON.parse(JSON.stringify(data.performanceData).substring(0, 50000));
      }
      return sanitized;
    } catch (error) {
      return {};
    }
  },

  sanitizeProperties(props) {
    try {
      const sanitized = {};
      let propCount = 0;
      
      for (const [key, value] of Object.entries(props)) {
        if (propCount >= 20) break; // Limit number of properties
        
        const sanitizedKey = String(key).substring(0, 50);
        
        if (typeof value === 'string') {
          sanitized[sanitizedKey] = value.substring(0, 1000);
        } else if (typeof value === 'number') {
          sanitized[sanitizedKey] = Number.isFinite(value) ? value : 0;
        } else if (typeof value === 'boolean') {
          sanitized[sanitizedKey] = value;
        }
        
        propCount++;
      }
      
      return sanitized;
    } catch (error) {
      return {};
    }
  }
};

// Simplified versions of other endpoints with basic error handling
export const assetEndpoints = {
  async uploadAsset(file, metadata = {}) {
    try {
      if (!file || !(file instanceof File)) {
        throw new Error('Valid file is required');
      }

      if (file.size > 50 * 1024 * 1024) { // 50MB limit
        throw new Error('File too large (max 50MB)');
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('metadata', JSON.stringify(metadata));

      return apiClient.post('/assets/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    } catch (error) {
      console.error('Asset upload request failed:', error);
      throw error;
    }
  },

  async listAssets(filters = {}) {
    try {
      return apiClient.get('/assets', {
        type: 'all',
        page: Math.max(1, Number(filters.page) || 1),
        limit: Math.min(100, Number(filters.limit) || 50),
        ...filters
      });
    } catch (error) {
      console.error('Assets list request failed:', error);
      throw error;
    }
  }
};

export const templateEndpoints = {
  async listTemplates(category = 'all') {
    try {
      return apiClient.get('/templates', {
        category: String(category).substring(0, 50),
        featured: true,
        page: 1,
        limit: 20
      });
    } catch (error) {
      console.error('Templates list request failed:', error);
      throw error;
    }
  }
};

export const billingEndpoints = {
  async getSubscription() {
    try {
      return apiClient.get('/billing/subscription');
    } catch (error) {
      console.error('Subscription fetch request failed:', error);
      throw error;
    }
  }
};

export const systemEndpoints = {
  async healthCheck() {
    try {
      return apiClient.get('/system/health');
    } catch (error) {
      console.error('Health check request failed:', error);
      throw error;
    }
  }
};

/**
 * 🌟 Unified API Interface - IMPROVED ERROR HANDLING
 * Sacred gateway to all divine services
 */
export const api = {
  sparky: sparkyEndpoints,
  intelligence: intelligenceEndpoints,
  generation: generationEndpoints,
  user: userEndpoints,
  projects: projectEndpoints,
  analytics: analyticsEndpoints,
  assets: assetEndpoints,
  templates: templateEndpoints,
  billing: billingEndpoints,
  system: systemEndpoints,
  
  // Direct client access for custom requests
  client: apiClient,
  
  /**
   * 🔧 Utility Methods
   * Sacred helper functions
   */
  setApiKey(apiKey) {
    try {
      apiClient.setApiKey(apiKey);
    } catch (error) {
      console.error('Failed to set API key:', error);
    }
  },
  
  setAuthToken(token) {
    try {
      apiClient.setAuthToken(token);
    } catch (error) {
      console.error('Failed to set auth token:', error);
    }
  },
  
  clearAuth() {
    try {
      apiClient.clearAuth();
    } catch (error) {
      console.error('Failed to clear auth:', error);
    }
  },
  
  getClientStatus() {
    try {
      return apiClient.getClientStatus();
    } catch (error) {
      console.error('Failed to get client status:', error);
      return { error: 'Status unavailable' };
    }
  },
  
  /**
   * 🧹 Cleanup
   * Sacred resource management
   */
  destroy() {
    try {
      apiClient.destroy();
    } catch (error) {
      console.error('Failed to destroy API client:', error);
    }
  }
};

// Export everything for flexible usage
export default api;