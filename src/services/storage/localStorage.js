/**
 * QUORRA Local Storage Service
 * Sacred preservation of divine data in mortal browser realms
 * Handles projects, preferences, and sacred session state
 */

class LocalStorageService {
  constructor() {
    this.prefix = 'quorra_';
    this.version = '1.0.0';
    this.maxStorageSize = 5 * 1024 * 1024; // 5MB limit for safety
    this.compressionThreshold = 50 * 1024; // 50KB - compress larger data
    
    this.isSupported = this.checkSupport();
    this.storageQuota = null;
    
    // Initialize fallback storage for unsupported browsers
    this.memoryFallback = new Map();
    
    this.initializeStorage();
    console.log('💾 Divine local storage awakened - sacred data preservation ready');
  }

  /**
   * 🔧 Initialize Divine Storage
   * Sacred setup and validation
   */
  initializeStorage() {
    if (!this.isSupported) {
      console.warn('⚠️ Local storage not supported - using memory fallback');
      return;
    }

    try {
      // Perform storage cleanup on initialization
      this.cleanupExpiredData();
      
      // Set up storage event listeners for cross-tab synchronization
      this.setupStorageSync();
      
      // Initialize storage version tracking
      this.initializeVersioning();
      
      // Get storage quota
      this.getStorageQuota();
    } catch (error) {
      console.error('❌ Storage initialization failed:', error);
    }
  }

  /**
   * 💾 Core Storage Methods
   * Sacred data preservation and retrieval
   */
  set(key, value, options = {}) {
    try {
      const fullKey = this.buildKey(key);
      const data = this.prepareDataForStorage(value, options);
      const serializedData = JSON.stringify(data);
      
      // Check storage size before saving
      this.checkStorageSpace(serializedData);
      
      if (this.isSupported) {
        localStorage.setItem(fullKey, serializedData);
      } else {
        this.memoryFallback.set(fullKey, data);
      }
      
      console.log(`💾 Sacred data preserved: ${key}`);
      return true;
    } catch (error) {
      console.error(`❌ Failed to preserve sacred data: ${key}`, error);
      return this.handleStorageError(error, 'set', key, value);
    }
  }

  get(key, defaultValue = null) {
    try {
      const fullKey = this.buildKey(key);
      let rawData;
      
      if (this.isSupported) {
        rawData = localStorage.getItem(fullKey);
      } else {
        const data = this.memoryFallback.get(fullKey);
        rawData = data ? JSON.stringify(data) : null;
      }
      
      if (rawData === null) {
        return defaultValue;
      }
      
      const data = JSON.parse(rawData);
      
      // Check if data has expired
      if (this.isDataExpired(data)) {
        this.remove(key);
        return defaultValue;
      }
      
      // Decompress if needed
      const value = this.extractValueFromStorage(data);
      
      console.log(`💾 Sacred data retrieved: ${key}`);
      return value;
    } catch (error) {
      console.error(`❌ Failed to retrieve sacred data: ${key}`, error);
      return defaultValue;
    }
  }

  remove(key) {
    try {
      const fullKey = this.buildKey(key);
      
      if (this.isSupported) {
        localStorage.removeItem(fullKey);
      } else {
        this.memoryFallback.delete(fullKey);
      }
      
      console.log(`💾 Sacred data removed: ${key}`);
      return true;
    } catch (error) {
      console.error(`❌ Failed to remove sacred data: ${key}`, error);
      return false;
    }
  }

  clear(pattern = null) {
    try {
      if (pattern) {
        // Clear items matching pattern
        const keys = this.getKeys().filter(key => key.includes(pattern));
        keys.forEach(key => this.remove(key.replace(this.prefix, '')));
        console.log(`💾 Sacred data cleared for pattern: ${pattern}`);
      } else {
        // Clear all QUORRA data
        if (this.isSupported) {
          const keys = Object.keys(localStorage).filter(key => key.startsWith(this.prefix));
          keys.forEach(key => localStorage.removeItem(key));
        } else {
          this.memoryFallback.clear();
        }
        console.log('💾 All sacred data cleared');
      }
      return true;
    } catch (error) {
      console.error('❌ Failed to clear sacred data', error);
      return false;
    }
  }

  /**
   * 📁 Project Management
   * Sacred project persistence
   */
  saveProject(projectId, projectData) {
    if (!projectId || !projectData) {
      throw new Error('Project ID and data are required');
    }

    const project = {
      id: projectId,
      ...projectData,
      lastSaved: new Date().toISOString(),
      version: this.version
    };
    
    return this.set(`project_${projectId}`, project, {
      compress: true,
      expires: 30 * 24 * 60 * 60 * 1000 // 30 days
    });
  }

  getProject(projectId) {
    if (!projectId) {
      return null;
    }
    return this.get(`project_${projectId}`);
  }

  listProjects() {
    try {
      const projectKeys = this.getKeys().filter(key => key.includes('project_'));
      const projects = [];
      
      projectKeys.forEach(key => {
        const projectId = key.replace(`${this.prefix}project_`, '');
        const project = this.getProject(projectId);
        if (project) {
          projects.push({
            id: projectId,
            name: project.name || 'Untitled Project',
            lastSaved: project.lastSaved,
            industry: project.industry,
            businessType: project.businessType,
            size: this.calculateDataSize(project)
          });
        }
      });
      
      return projects.sort((a, b) => new Date(b.lastSaved) - new Date(a.lastSaved));
    } catch (error) {
      console.error('❌ Failed to list projects:', error);
      return [];
    }
  }

  deleteProject(projectId) {
    if (!projectId) {
      return false;
    }
    return this.remove(`project_${projectId}`);
  }

  /**
   * ⚙️ User Preferences
   * Sacred customization persistence
   */
  savePreferences(preferences) {
    if (!preferences || typeof preferences !== 'object') {
      throw new Error('Preferences must be an object');
    }

    return this.set('user_preferences', {
      ...preferences,
      updatedAt: new Date().toISOString()
    });
  }

  getPreferences() {
    return this.get('user_preferences', {
      theme: 'light',
      language: 'en',
      autoSave: true,
      showTips: true,
      sparkyChatHistory: true,
      analytics: true
    });
  }

  updatePreference(key, value) {
    if (!key) {
      throw new Error('Preference key is required');
    }

    const preferences = this.getPreferences();
    preferences[key] = value;
    preferences.updatedAt = new Date().toISOString();
    return this.savePreferences(preferences);
  }

  /**
   * 🎨 Design State Management
   * Sacred creative session persistence
   */
  saveDesignState(sessionId, designState) {
    if (!sessionId || !designState) {
      throw new Error('Session ID and design state are required');
    }

    return this.set(`design_state_${sessionId}`, designState, {
      expires: 24 * 60 * 60 * 1000 // 24 hours
    });
  }

  getDesignState(sessionId) {
    if (!sessionId) {
      return null;
    }
    return this.get(`design_state_${sessionId}`);
  }

  clearDesignState(sessionId) {
    if (!sessionId) {
      return false;
    }
    return this.remove(`design_state_${sessionId}`);
  }

  /**
   * 🤖 Sparky Memory
   * Sacred conversation persistence
   */
  saveSparkyMemory(conversationData) {
    if (!conversationData) {
      throw new Error('Conversation data is required');
    }

    return this.set('sparky_memory', {
      conversations: conversationData.conversations || [],
      context: conversationData.context || {},
      lastInteraction: new Date().toISOString()
    }, {
      expires: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
  }

  getSparkyMemory() {
    return this.get('sparky_memory', {
      conversations: [],
      context: {},
      lastInteraction: null
    });
  }

  clearSparkyMemory() {
    return this.remove('sparky_memory');
  }

  /**
   * 📊 Analytics & Usage Data
   * Sacred measurement persistence
   */
  saveAnalyticsData(data) {
    if (!data) {
      throw new Error('Analytics data is required');
    }

    const existing = this.get('analytics_data', { events: [], sessions: [] });
    
    // Merge new data with existing
    const merged = {
      events: [...existing.events, ...(data.events || [])].slice(-1000), // Keep last 1000 events
      sessions: [...existing.sessions, ...(data.sessions || [])].slice(-50), // Keep last 50 sessions
      lastUpdated: new Date().toISOString()
    };
    
    return this.set('analytics_data', merged, {
      compress: true
    });
  }

  getAnalyticsData() {
    return this.get('analytics_data', { events: [], sessions: [] });
  }

  /**
   * 🛠️ Utility Methods
   * Sacred helper functions
   */
  buildKey(key) {
    return `${this.prefix}${key}`;
  }

  getKeys() {
    try {
      if (this.isSupported) {
        return Object.keys(localStorage).filter(key => key.startsWith(this.prefix));
      } else {
        return Array.from(this.memoryFallback.keys());
      }
    } catch (error) {
      console.error('❌ Failed to get storage keys:', error);
      return [];
    }
  }

  prepareDataForStorage(value, options = {}) {
    const data = {
      value,
      timestamp: Date.now(),
      version: this.version
    };
    
    // Add expiration if specified
    if (options.expires) {
      data.expiresAt = Date.now() + options.expires;
    }
    
    // Compress if data is large or compression requested
    const serialized = JSON.stringify(value);
    if (options.compress || serialized.length > this.compressionThreshold) {
      try {
        data.compressed = true;
        data.value = this.compressData(value);
        console.log(`🗜️ Data compressed: ${serialized.length} → ${JSON.stringify(data.value).length} bytes`);
      } catch (error) {
        console.warn('⚠️ Compression failed, storing uncompressed', error);
        data.compressed = false;
      }
    }
    
    return data;
  }

  extractValueFromStorage(data) {
    if (data.compressed) {
      return this.decompressData(data.value);
    }
    return data.value;
  }

  isDataExpired(data) {
    if (!data.expiresAt) return false;
    return Date.now() > data.expiresAt;
  }

  calculateDataSize(data) {
    try {
      return JSON.stringify(data).length;
    } catch (error) {
      return 0;
    }
  }

  /**
   * 🗜️ Compression Methods
   * Sacred data optimization
   */
  compressData(data) {
    try {
      // Simple compression using JSON stringify + base64
      const jsonString = JSON.stringify(data);
      const compressed = btoa(unescape(encodeURIComponent(jsonString)));
      return compressed;
    } catch (error) {
      console.warn('⚠️ Compression failed, storing uncompressed', error);
      return data;
    }
  }

  decompressData(compressedData) {
    try {
      const decompressed = decodeURIComponent(escape(atob(compressedData)));
      return JSON.parse(decompressed);
    } catch (error) {
      console.warn('⚠️ Decompression failed, returning raw data', error);
      return compressedData;
    }
  }

  /**
   * 🧹 Maintenance Methods
   * Sacred data hygiene
   */
  cleanupExpiredData() {
    let cleanedCount = 0;
    
    try {
      const keys = this.getKeys();
      
      keys.forEach(fullKey => {
        try {
          const rawData = this.isSupported ? 
            localStorage.getItem(fullKey) : 
            this.memoryFallback.get(fullKey);
            
          if (rawData) {
            const data = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;
            
            if (this.isDataExpired(data)) {
              if (this.isSupported) {
                localStorage.removeItem(fullKey);
              } else {
                this.memoryFallback.delete(fullKey);
              }
              cleanedCount++;
            }
          }
        } catch (error) {
          console.warn(`⚠️ Failed to check expiration for ${fullKey}`, error);
        }
      });
      
      if (cleanedCount > 0) {
        console.log(`🧹 Cleaned up ${cleanedCount} expired sacred items`);
      }
    } catch (error) {
      console.error('❌ Cleanup failed:', error);
    }
  }

  getStorageInfo() {
    try {
      const keys = this.getKeys();
      let totalSize = 0;
      
      keys.forEach(key => {
        try {
          const value = this.isSupported ? 
            localStorage.getItem(key) : 
            JSON.stringify(this.memoryFallback.get(key));
          totalSize += value ? value.length : 0;
        } catch (error) {
          console.warn(`⚠️ Failed to calculate size for ${key}`, error);
        }
      });
      
      return {
        totalItems: keys.length,
        totalSize,
        maxSize: this.maxStorageSize,
        usagePercent: (totalSize / this.maxStorageSize) * 100,
        isSupported: this.isSupported,
        quota: this.storageQuota,
        timestamp: new Date().toISOString(),
        blessing: '💾 Sacred storage information revealed'
      };
    } catch (error) {
      console.error('❌ Failed to get storage info:', error);
      return {
        totalItems: 0,
        totalSize: 0,
        maxSize: this.maxStorageSize,
        usagePercent: 0,
        isSupported: this.isSupported,
        error: error.message
      };
    }
  }

  checkStorageSpace(data) {
    if (!this.isSupported) return; // Memory storage has no practical limit
    
    try {
      const currentSize = this.getStorageInfo().totalSize;
      const newDataSize = data.length;
      
      if (currentSize + newDataSize > this.maxStorageSize) {
        throw new Error('Storage quota exceeded');
      }
    } catch (error) {
      if (error.name === 'QuotaExceededError' || error.message.includes('quota')) {
        this.cleanupExpiredData();
        throw error;
      }
    }
  }

  /**
   * 🔄 Cross-Tab Synchronization
   * Sacred multi-realm awareness
   */
  setupStorageSync() {
    if (!this.isSupported) return;
    
    try {
      window.addEventListener('storage', (event) => {
        if (event.key && event.key.startsWith(this.prefix)) {
          const key = event.key.replace(this.prefix, '');
          
          console.log(`🔄 Sacred data synchronized across realms: ${key}`);
          
          // Emit custom event for app to react to storage changes
          window.dispatchEvent(new CustomEvent('quorra:storage:changed', {
            detail: {
              key,
              oldValue: event.oldValue,
              newValue: event.newValue,
              timestamp: Date.now()
            }
          }));
        }
      });
    } catch (error) {
      console.warn('⚠️ Storage sync setup failed:', error);
    }
  }

  /**
   * 📝 Versioning
   * Sacred data migration support
   */
  initializeVersioning() {
    try {
      const currentVersion = this.get('storage_version');
      
      if (!currentVersion) {
        // First time setup
        this.set('storage_version', this.version);
        console.log(`💾 Sacred storage initialized with version ${this.version}`);
      } else if (currentVersion !== this.version) {
        // Version mismatch - might need migration
        console.log(`💾 Storage version updated: ${currentVersion} → ${this.version}`);
        this.migrateData(currentVersion, this.version);
        this.set('storage_version', this.version);
      }
    } catch (error) {
      console.error('❌ Versioning initialization failed:', error);
    }
  }

  migrateData(fromVersion, toVersion) {
    console.log(`🔄 Migrating sacred data from ${fromVersion} to ${toVersion}`);
    
    try {
      // Add migration logic here if needed in the future
      // For now, just log the migration
      
      console.log('✨ Sacred data migration completed');
    } catch (error) {
      console.error('❌ Migration failed:', error);
    }
  }

  /**
   * 💾 Export/Import
   * Sacred data portability
   */
  exportAllData() {
    try {
      const data = {};
      
      this.getKeys().forEach(fullKey => {
        const key = fullKey.replace(this.prefix, '');
        data[key] = this.get(key);
      });
      
      return {
        version: this.version,
        exportedAt: new Date().toISOString(),
        data,
        blessing: '💾 Sacred data exported for divine preservation'
      };
    } catch (error) {
      console.error('❌ Export failed:', error);
      throw new Error(`Export failed: ${error.message}`);
    }
  }

  importData(exportedData, options = { overwrite: false }) {
    if (!exportedData || !exportedData.data) {
      throw new Error('Invalid export data format');
    }
    
    try {
      let importedCount = 0;
      let skippedCount = 0;
      
      Object.entries(exportedData.data).forEach(([key, value]) => {
        const exists = this.get(key) !== null;
        
        if (!exists || options.overwrite) {
          this.set(key, value);
          importedCount++;
        } else {
          skippedCount++;
        }
      });
      
      console.log(`💾 Sacred data import: ${importedCount} imported, ${skippedCount} skipped`);
      
      return {
        imported: importedCount,
        skipped: skippedCount,
        total: Object.keys(exportedData.data).length,
        blessing: '💾 Sacred data import completed'
      };
    } catch (error) {
      console.error('❌ Import failed:', error);
      throw new Error(`Import failed: ${error.message}`);
    }
  }

  /**
   * 📊 Storage Analytics
   * Sacred usage insights
   */
  getUsageStats() {
    try {
      const keys = this.getKeys();
      const stats = {
        projects: 0,
        preferences: 0,
        designStates: 0,
        sparkyMemory: 0,
        analytics: 0,
        assets: 0,
        auth: 0,
        other: 0
      };
      
      keys.forEach(key => {
        if (key.includes('project_')) stats.projects++;
        else if (key.includes('preferences')) stats.preferences++;
        else if (key.includes('design_state_')) stats.designStates++;
        else if (key.includes('sparky_memory')) stats.sparkyMemory++;
        else if (key.includes('analytics_data')) stats.analytics++;
        else if (key.includes('asset_')) stats.assets++;
        else if (key.includes('auth_data')) stats.auth++;
        else stats.other++;
      });
      
      return {
        ...stats,
        total: keys.length,
        storageInfo: this.getStorageInfo(),
        blessing: '📊 Sacred storage statistics revealed'
      };
    } catch (error) {
      console.error('❌ Failed to get usage stats:', error);
      return { error: error.message };
    }
  }

  /**
   * 🛡️ Error Handling
   * Sacred resilience methods
   */
  handleStorageError(error, operation, key, value) {
    console.error(`❌ Storage ${operation} failed for ${key}:`, error);
    
    // Try to recover based on error type
    if (error.name === 'QuotaExceededError') {
      console.log('💾 Storage quota exceeded - attempting cleanup...');
      this.cleanupExpiredData();
      
      // Try again after cleanup
      if (operation === 'set') {
        try {
          return this.set(key, value);
        } catch (retryError) {
          console.error('❌ Retry after cleanup also failed', retryError);
          return false;
        }
      }
    }
    
    return false;
  }

  /**
   * ✅ Support Detection
   * Sacred compatibility checking
   */
  checkSupport() {
    try {
      if (typeof Storage === 'undefined') {
        return false;
      }
      
      const testKey = '__quorra_test__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      console.warn('⚠️ Local storage not supported:', error);
      return false;
    }
  }

  async getStorageQuota() {
    if (!this.isSupported) return null;
    
    try {
      // Modern way to get storage quota
      if ('storage' in navigator && 'estimate' in navigator.storage) {
        const estimate = await navigator.storage.estimate();
        this.storageQuota = estimate;
        console.log(`💾 Storage quota: ${estimate.quota} bytes, used: ${estimate.usage} bytes`);
        return estimate;
      }
    } catch (error) {
      console.warn('⚠️ Could not determine storage quota', error);
    }
    
    return null;
  }

  /**
   * 🧹 Cleanup
   * Sacred resource management
   */
  destroy() {
    try {
      // Remove event listeners
      if (this.isSupported) {
        window.removeEventListener('storage', this.handleStorageEvent);
      }
      
      // Clear memory fallback
      this.memoryFallback.clear();
      
      console.log('🧹 Divine local storage gracefully ended');
    } catch (error) {
      console.error('❌ Cleanup failed:', error);
    }
  }
}

// Export the divine local storage service
export default LocalStorageService;