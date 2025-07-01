/**
 * QUORRA Storage Services Coordinator
 * Sacred hub that orchestrates all divine data persistence
 * Combines local, cloud, and export storage into unified wisdom
 */

import LocalStorageService from './LocalStorageService.js';
import CloudStorageService from './CloudStorageService.js';
import ExportService from './ExportService.js';

class QuorraStorageService {
  constructor() {
    // Browser compatibility check
    if (!this.checkBrowserSupport()) {
      console.warn('⚠️ Browser may not fully support QUORRA features');
    }

    // Initialize divine storage services
    this.localStorage = new LocalStorageService();
    this.cloudStorage = new CloudStorageService();
    this.exportService = new ExportService();
    
    // Storage coordination state
    this.syncStrategy = 'hybrid'; // 'local_only', 'cloud_only', 'hybrid'
    this.autoSyncEnabled = true;
    this.conflictResolution = 'prompt_user'; // 'local_wins', 'cloud_wins', 'prompt_user'
    
    // Cache and performance
    this.cache = new Map();
    this.pendingOperations = new Map();
    
    // Rate limiting and queue management
    this.operationQueue = [];
    this.isProcessingQueue = false;
    this.maxConcurrentOperations = 3;
    
    // Health monitoring
    this.healthStatus = {
      localStorage: false,
      cloudStorage: false,
      exportService: false,
      lastHealthCheck: null
    };
    
    this.initializeStorageCoordination();
    console.log('💾 QUORRA Storage Coordination awakened - divine data harmony established!');
  }

  /**
   * 🌟 Initialize Storage Coordination
   * Sacred harmony between all storage realms
   */
  async initializeStorageCoordination() {
    try {
      // Set up sync monitoring
      this.setupSyncMonitoring();
      
      // Initialize conflict resolution
      this.setupConflictResolution();
      
      // Set up cross-service event handling
      this.setupEventHandling();
      
      // Perform initial health check
      await this.performHealthCheck();
      
      // Perform initial sync check
      await this.performInitialSync();
      
      // Set up periodic health monitoring
      this.startHealthMonitoring();
    } catch (error) {
      console.error('❌ Storage coordination initialization failed:', error);
    }
  }

  /**
   * 📁 Unified Project Management
   * Sacred creation lifecycle across all realms
   */
  async saveProject(projectId, projectData, options = {}) {
    try {
      console.log(`💾 Saving divine project across realms: ${projectId}`);
      
      // Validate inputs
      if (!projectId || !projectData) {
        throw new Error('Project ID and data are required');
      }
      
      const saveOptions = {
        syncToCloud: this.shouldSyncToCloud(),
        updateLocal: true,
        createBackup: options.backup !== false,
        immediate: options.immediate || false,
        ...options
      };
      
      const results = {
        local: null,
        cloud: null,
        timestamp: new Date().toISOString(),
        projectId
      };
      
      // Add version if not present
      if (!projectData.version) {
        projectData.version = this.generateVersion();
      }
      
      // Always save to local storage first for immediate access
      if (saveOptions.updateLocal) {
        results.local = this.localStorage.saveProject(projectId, projectData);
        
        if (!results.local) {
          throw new Error('Failed to save to local storage');
        }
      }
      
      // Save to cloud if enabled and online
      if (saveOptions.syncToCloud) {
        if (navigator.onLine && saveOptions.immediate) {
          try {
            results.cloud = await this.cloudStorage.saveProjectToCloud(projectId, projectData, {
              version: projectData.version
            });
          } catch (error) {
            console.warn('⚠️ Immediate cloud save failed, queuing for later sync:', error);
            this.cloudStorage.markForSync(projectId, projectData);
          }
        } else {
          // Queue for offline sync or background sync
          this.cloudStorage.markForSync(projectId, projectData);
          console.log(`📡 Project queued for cloud sync: ${projectId}`);
        }
      }
      
      // Update cache
      this.updateCache(`project_${projectId}`, projectData);
      
      // Create backup if requested
      if (saveOptions.createBackup) {
        await this.createProjectBackup(projectId, projectData);
      }
      
      // Emit save event
      this.emitStorageEvent('project_saved', {
        projectId,
        local: !!results.local,
        cloud: !!results.cloud,
        queued: !navigator.onLine && saveOptions.syncToCloud,
        version: projectData.version
      });
      
      console.log(`✨ Project saved: local=${!!results.local}, cloud=${!!results.cloud}`);
      
      return {
        success: true,
        results,
        projectId,
        version: projectData.version,
        blessing: '💾 Divine project preserved across sacred realms'
      };
    } catch (error) {
      return this.handleStorageError('save_project', error, { projectId, projectData });
    }
  }

  async getProject(projectId, options = {}) {
    try {
      console.log(`💾 Retrieving divine project: ${projectId}`);
      
      if (!projectId) {
        throw new Error('Project ID is required');
      }
      
      const getOptions = {
        preferCloud: options.preferCloud || false,
        useCache: options.useCache !== false,
        includeMeta: options.includeMeta || false,
        fallbackToLocal: options.fallbackToLocal !== false,
        ...options
      };
      
      // Check cache first
      if (getOptions.useCache) {
        const cached = this.getFromCache(`project_${projectId}`);
        if (cached && !this.isCacheExpired(cached)) {
          console.log(`💾 Project retrieved from divine cache: ${projectId}`);
          return {
            success: true,
            project: cached.data,
            source: 'cache',
            timestamp: cached.timestamp,
            blessing: '⚡ Lightning-fast retrieval from sacred cache'
          };
        }
      }
      
      let project = null;
      let source = 'unknown';
      let metadata = {};
      
      // Try cloud first if preferred and online
      if (getOptions.preferCloud && navigator.onLine && this.healthStatus.cloudStorage) {
        try {
          const cloudResult = await this.cloudStorage.getProjectFromCloud(projectId);
          if (cloudResult.success) {
            project = cloudResult.project;
            source = 'cloud';
            metadata = cloudResult.metadata || {};
          }
        } catch (error) {
          console.warn('⚠️ Cloud retrieval failed, trying local:', error);
        }
      }
      
      // Fall back to local storage
      if (!project && getOptions.fallbackToLocal) {
        project = this.localStorage.getProject(projectId);
        source = project ? 'local' : 'not_found';
      }
      
      if (!project) {
        return {
          success: false,
          error: 'Project not found',
          projectId,
          searchedSources: getOptions.preferCloud ? ['cloud', 'local'] : ['local', 'cloud']
        };
      }
      
      // Update cache
      this.updateCache(`project_${projectId}`, project);
      
      // Update local storage if retrieved from cloud
      if (source === 'cloud') {
        this.localStorage.saveProject(projectId, project);
      }
      
      console.log(`✨ Project retrieved from ${source}: ${projectId}`);
      
      return {
        success: true,
        project,
        source,
        metadata: getOptions.includeMeta ? metadata : undefined,
        timestamp: new Date().toISOString(),
        blessing: `💾 Divine project retrieved from ${source} realm`
      };
    } catch (error) {
      return this.handleStorageError('get_project', error, { projectId });
    }
  }

  async deleteProject(projectId, options = {}) {
    try {
      console.log(`💾 Removing divine project from all realms: ${projectId}`);
      
      if (!projectId) {
        throw new Error('Project ID is required');
      }
      
      const deleteOptions = {
        deleteFromCloud: this.shouldSyncToCloud(),
        deleteFromLocal: true,
        createBackup: options.backup !== false,
        permanent: options.permanent || false,
        ...options
      };
      
      // Create backup before deletion if requested
      if (deleteOptions.createBackup && !deleteOptions.permanent) {
        const project = await this.getProject(projectId);
        if (project.success) {
          await this.createProjectBackup(projectId, project.project, 'pre_deletion');
        }
      }
      
      const results = {
        local: false,
        cloud: false,
        backup: false
      };
      
      // Delete from local storage
      if (deleteOptions.deleteFromLocal) {
        results.local = this.localStorage.deleteProject(projectId);
      }
      
      // Delete from cloud
      if (deleteOptions.deleteFromCloud && navigator.onLine) {
        try {
          const cloudResult = await this.cloudStorage.deleteProjectFromCloud(projectId);
          results.cloud = cloudResult.success;
        } catch (error) {
          console.warn('⚠️ Cloud deletion failed:', error);
          // Queue deletion for later
          this.cloudStorage.addToOfflineQueue({
            type: 'delete_project',
            projectId,
            timestamp: Date.now()
          });
        }
      }
      
      // Clear from cache
      this.clearFromCache(`project_${projectId}`);
      
      // Emit deletion event
      this.emitStorageEvent('project_deleted', {
        projectId,
        local: results.local,
        cloud: results.cloud,
        permanent: deleteOptions.permanent
      });
      
      console.log(`✨ Project deleted: local=${results.local}, cloud=${results.cloud}`);
      
      return {
        success: true,
        results,
        projectId,
        blessing: '💾 Divine project gracefully removed from sacred realms'
      };
    } catch (error) {
      return this.handleStorageError('delete_project', error, { projectId });
    }
  }

  async listProjects(options = {}) {
    try {
      console.log('💾 Listing divine projects across realms...');
      
      const listOptions = {
        includeCloud: this.shouldSyncToCloud() && navigator.onLine,
        includeLocal: true,
        mergeResults: true,
        sortBy: 'lastModified',
        order: 'desc',
        includeDeleted: false,
        includeMetadata: false,
        ...options
      };
      
      const results = {
        local: [],
        cloud: [],
        merged: []
      };
      
      // Get local projects
      if (listOptions.includeLocal) {
        results.local = this.localStorage.listProjects();
      }
      
      // Get cloud projects
      if (listOptions.includeCloud && this.healthStatus.cloudStorage) {
        try {
          const cloudResult = await this.cloudStorage.listCloudProjects({
            limit: listOptions.limit,
            offset: listOptions.offset
          });
          if (cloudResult.success) {
            results.cloud = cloudResult.projects;
          }
        } catch (error) {
          console.warn('⚠️ Cloud project listing failed:', error);
        }
      }
      
      // Merge results if requested
      if (listOptions.mergeResults) {
        results.merged = this.mergeProjectLists(results.local, results.cloud, listOptions);
      }
      
      const projectList = listOptions.mergeResults ? results.merged : results.local;
      
      // Filter deleted projects if requested
      const filteredList = listOptions.includeDeleted ? 
        projectList : 
        projectList.filter(p => !p.isDeleted);
      
      console.log(`✨ Found ${filteredList.length} divine projects`);
      
      return {
        success: true,
        projects: filteredList,
        sources: {
          local: results.local.length,
          cloud: results.cloud.length,
          total: filteredList.length
        },
        pagination: {
          hasMore: results.cloud.length >= (listOptions.limit || 50),
          offset: listOptions.offset || 0
        },
        blessing: '💾 Divine project library revealed across all realms'
      };
    } catch (error) {
      return this.handleStorageError('list_projects', error);
    }
  }

  /**
   * ⚙️ Unified Preferences Management
   * Sacred customization across realms
   */
  async savePreferences(preferences, options = {}) {
    try {
      if (!preferences || typeof preferences !== 'object') {
        throw new Error('Preferences must be an object');
      }
      
      const saveOptions = {
        syncToCloud: this.shouldSyncToCloud(),
        immediate: options.immediate || false,
        ...options
      };
      
      // Add metadata
      const enrichedPreferences = {
        ...preferences,
        updatedAt: new Date().toISOString(),
        version: this.generateVersion(),
        deviceId: this.cloudStorage.getDeviceId()
      };
      
      const results = {
        local: this.localStorage.savePreferences(enrichedPreferences),
        cloud: null
      };
      
      if (saveOptions.syncToCloud) {
        if (navigator.onLine && saveOptions.immediate) {
          try {
            results.cloud = await this.cloudStorage.savePreferencesToCloud(enrichedPreferences);
          } catch (error) {
            console.warn('⚠️ Preferences cloud sync failed:', error);
          }
        }
      }
      
      // Update cache
      this.updateCache('preferences', enrichedPreferences);
      
      // Emit preferences update event
      this.emitStorageEvent('preferences_updated', {
        local: !!results.local,
        cloud: !!results.cloud,
        preferences: enrichedPreferences
      });
      
      return {
        success: !!results.local,
        results,
        version: enrichedPreferences.version,
        blessing: '⚙️ Divine preferences preserved across sacred realms'
      };
    } catch (error) {
      return this.handleStorageError('save_preferences', error, { preferences });
    }
  }

  async getPreferences(options = {}) {
    try {
      const getOptions = {
        preferCloud: options.preferCloud || false,
        useCache: options.useCache !== false,
        fallbackToLocal: options.fallbackToLocal !== false,
        ...options
      };
      
      // Check cache first
      if (getOptions.useCache) {
        const cached = this.getFromCache('preferences');
        if (cached && !this.isCacheExpired(cached)) {
          return {
            success: true,
            preferences: cached.data,
            source: 'cache',
            blessing: '⚡ Preferences retrieved from sacred cache'
          };
        }
      }
      
      let preferences = null;
      let source = 'local';
      
      // Try cloud first if preferred
      if (getOptions.preferCloud && navigator.onLine && this.healthStatus.cloudStorage) {
        try {
          const cloudResult = await this.cloudStorage.getPreferencesFromCloud();
          if (cloudResult.success) {
            preferences = cloudResult.preferences;
            source = 'cloud';
          }
        } catch (error) {
          console.warn('⚠️ Cloud preferences retrieval failed:', error);
        }
      }
      
      // Fall back to local
      if (!preferences && getOptions.fallbackToLocal) {
        preferences = this.localStorage.getPreferences();
      }
      
      // Update cache
      if (preferences) {
        this.updateCache('preferences', preferences);
        
        // Update local storage if retrieved from cloud
        if (source === 'cloud') {
          this.localStorage.savePreferences(preferences);
        }
      }
      
      return {
        success: true,
        preferences,
        source,
        blessing: `⚙️ Divine preferences retrieved from ${source} realm`
      };
    } catch (error) {
      return this.handleStorageError('get_preferences', error);
    }
  }

  /**
   * 📤 Unified Export Management
   * Sacred creation delivery
   */
  async exportProject(projectId, format = 'zip', options = {}) {
    try {
      console.log(`📤 Exporting divine project: ${projectId} as ${format}`);
      
      if (!projectId) {
        throw new Error('Project ID is required');
      }
      
      // Get the project
      const projectResult = await this.getProject(projectId, {
        useCache: true,
        preferCloud: false // Use local for faster export
      });
      
      if (!projectResult.success) {
        throw new Error(`Project not found: ${projectId}`);
      }
      
      const project = projectResult.project;
      
      // Validate export service availability
      if (!this.healthStatus.exportService) {
        throw new Error('Export service is not available');
      }
      
      // Export using the export service
      const exportResult = await this.exportService.exportProject(project, {
        format,
        fileName: options.fileName,
        minify: options.minify !== false,
        includeAssets: options.includeAssets !== false,
        addMetadata: options.addMetadata !== false,
        addReadme: options.addReadme !== false,
        ...options
      });
      
      // Track export analytics
      this.trackExportEvent(project, { format, ...options }, exportResult);
      
      console.log(`✨ Project exported successfully: ${format}`);
      
      return {
        ...exportResult,
        projectId,
        projectName: project.name,
        exportedAt: new Date().toISOString(),
        blessing: '📤 Divine creation ready for mortal realm delivery'
      };
    } catch (error) {
      return this.handleStorageError('export_project', error, { projectId, format });
    }
  }

  /**
   * 🔄 Synchronization Management
   * Sacred harmony across realms
   */
  async syncAllData(options = {}) {
    try {
      console.log('🔄 Beginning divine synchronization across all realms...');
      
      const syncOptions = {
        includeProjects: true,
        includePreferences: true,
        includeAnalytics: true,
        conflictResolution: this.conflictResolution,
        timeout: 30000, // 30 seconds
        silent: false,
        ...options
      };
      
      const results = {
        projects: { synced: 0, conflicts: 0, errors: 0 },
        preferences: { success: false },
        analytics: { success: false },
        total: { success: 0, failed: 0 },
        duration: 0
      };
      
      const startTime = performance.now();
      
      // Check if we're online and cloud service is healthy
      if (!navigator.onLine || !this.healthStatus.cloudStorage) {
        console.warn('⚠️ Skipping sync - offline or cloud service unavailable');
        return {
          success: false,
          error: 'Cannot sync while offline or cloud service unavailable',
          results,
          blessing: '🔄 Sync postponed until divine connection restored'
        };
      }
      
      // Sync projects
      if (syncOptions.includeProjects) {
        try {
          const localProjects = this.localStorage.listProjects();
          const projectSyncResult = await this.cloudStorage.syncAllProjects(localProjects);
          
          if (projectSyncResult.success) {
            results.projects = {
              synced: projectSyncResult.results.synced.length,
              conflicts: projectSyncResult.results.conflicts.length,
              errors: projectSyncResult.results.errors.length
            };
          }
        } catch (error) {
          console.error('❌ Project sync failed:', error);
          results.projects.errors++;
        }
      }
      
      // Sync preferences
      if (syncOptions.includePreferences) {
        try {
          const preferences = this.localStorage.getPreferences();
          const prefResult = await this.cloudStorage.savePreferencesToCloud(preferences);
          results.preferences.success = prefResult.success;
        } catch (error) {
          console.warn('⚠️ Preferences sync failed:', error);
        }
      }
      
      // Sync analytics
      if (syncOptions.includeAnalytics) {
        try {
          const analyticsData = this.localStorage.getAnalyticsData();
          const analyticsResult = await this.cloudStorage.syncAnalyticsData(analyticsData);
          results.analytics.success = analyticsResult.success;
        } catch (error) {
          console.warn('⚠️ Analytics sync failed:', error);
        }
      }
      
      // Calculate totals
      results.total.success = results.projects.synced + 
                             (results.preferences.success ? 1 : 0) + 
                             (results.analytics.success ? 1 : 0);
      results.total.failed = results.projects.errors + 
                            (results.preferences.success ? 0 : 1) + 
                            (results.analytics.success ? 0 : 1);
      
      results.duration = performance.now() - startTime;
      
      // Emit sync complete event
      if (!syncOptions.silent) {
        this.emitStorageEvent('sync_completed', {
          success: results.total.success,
          failed: results.total.failed,
          duration: results.duration
        });
      }
      
      console.log(`✨ Synchronization complete in ${results.duration.toFixed(2)}ms: ${results.total.success} success, ${results.total.failed} failed`);
      
      return {
        success: true,
        results,
        timestamp: new Date().toISOString(),
        blessing: '🔄 Divine synchronization across all sacred realms complete'
      };
    } catch (error) {
      return this.handleStorageError('sync_all_data', error);
    }
  }

  async forceSyncProject(projectId, options = {}) {
    try {
      if (!projectId) {
        throw new Error('Project ID is required');
      }
      
      const project = await this.getProject(projectId, { useCache: false });
      if (!project.success) {
        throw new Error(`Project not found: ${projectId}`);
      }
      
      const syncResult = await this.cloudStorage.syncProject(
        projectId, 
        project.project, 
        { localVersion: project.project.version, ...options }
      );
      
      if (syncResult.success) {
        // Update local with any merged changes
        if (syncResult.data && syncResult.data !== project.project) {
          await this.saveProject(projectId, syncResult.data, { syncToCloud: false });
        }
        
        // Clear cache to force fresh data
        this.clearFromCache(`project_${projectId}`);
      }
      
      return syncResult;
    } catch (error) {
      return this.handleStorageError('force_sync_project', error, { projectId });
    }
  }

  /**
   * 🗄️ Cache Management
   * Sacred high-speed access
   */
  updateCache(key, data) {
    try {
      this.cache.set(key, {
        data,
        timestamp: Date.now(),
        expiresAt: Date.now() + (15 * 60 * 1000), // 15 minutes
        accessCount: 0,
        size: JSON.stringify(data).length
      });
    } catch (error) {
      console.warn('⚠️ Cache update failed:', error);
    }
  }

  getFromCache(key) {
    try {
      const cached = this.cache.get(key);
      if (cached) {
        cached.accessCount++;
        cached.lastAccessed = Date.now();
      }
      return cached;
    } catch (error) {
      console.warn('⚠️ Cache retrieval failed:', error);
      return null;
    }
  }

  isCacheExpired(cacheEntry) {
    return Date.now() > cacheEntry.expiresAt;
  }

  clearFromCache(key) {
    try {
      this.cache.delete(key);
    } catch (error) {
      console.warn('⚠️ Cache clear failed:', error);
    }
  }

  clearAllCache() {
    try {
      this.cache.clear();
      console.log('💾 Divine cache cleared across all realms');
    } catch (error) {
      console.error('❌ Cache clear failed:', error);
    }
  }

  getCacheStats() {
    let totalSize = 0;
    let totalAccess = 0;
    const now = Date.now();
    
    for (const [key, entry] of this.cache.entries()) {
      totalSize += entry.size || 0;
      totalAccess += entry.accessCount || 0;
    }
    
    return {
      size: this.cache.size,
      totalSize,
      totalAccess,
      averageSize: this.cache.size > 0 ? totalSize / this.cache.size : 0,
      hitRate: totalAccess > 0 ? (totalAccess / this.cache.size) : 0
    };
  }

  /**
   * 🔧 Configuration Management
   * Sacred service customization
   */
  configure(settings = {}) {
    try {
      const oldConfig = this.getConfiguration();
      
      if (settings.syncStrategy && ['local_only', 'cloud_only', 'hybrid'].includes(settings.syncStrategy)) {
        this.syncStrategy = settings.syncStrategy;
      }
      
      if (typeof settings.autoSyncEnabled === 'boolean') {
        this.autoSyncEnabled = settings.autoSyncEnabled;
        
        if (this.autoSyncEnabled) {
          this.cloudStorage.startAutoSync();
        } else {
          this.cloudStorage.stopAutoSync();
        }
      }
      
      if (settings.conflictResolution && ['local_wins', 'cloud_wins', 'prompt_user'].includes(settings.conflictResolution)) {
        this.conflictResolution = settings.conflictResolution;
        this.cloudStorage.configure({ 
          conflictResolution: settings.conflictResolution === 'prompt_user' ? 'manual' : settings.conflictResolution 
        });
      }
      
      if (settings.cloudSyncFrequency) {
        this.cloudStorage.configure({ syncFrequency: settings.cloudSyncFrequency });
      }
      
      if (settings.cacheTimeout && typeof settings.cacheTimeout === 'number') {
        this.cacheTimeout = Math.max(settings.cacheTimeout, 60000); // Minimum 1 minute
      }
      
      // Apply settings to individual services
      if (settings.localStorage) {
        // Local storage settings (future expansion)
      }
      
      if (settings.cloudStorage) {
        this.cloudStorage.configure(settings.cloudStorage);
      }
      
      if (settings.exportService) {
        // Export service settings (future expansion)
      }
      
      console.log('🔧 Divine storage configuration updated');
      
      // Emit configuration change event
      this.emitStorageEvent('configuration_changed', {
        oldConfig,
        newConfig: this.getConfiguration(),
        timestamp: new Date().toISOString()
      });
      
      return {
        success: true,
        settings: this.getConfiguration(),
        blessing: '🔧 Sacred storage settings blessed with new wisdom'
      };
    } catch (error) {
      return this.handleStorageError('configure', error, { settings });
    }
  }

  getConfiguration() {
    return {
      syncStrategy: this.syncStrategy,
      autoSyncEnabled: this.autoSyncEnabled,
      conflictResolution: this.conflictResolution,
      cacheTimeout: this.cacheTimeout || 15 * 60 * 1000,
      cacheSize: this.cache.size,
      services: {
        cloudStorage: this.cloudStorage.getCloudStorageStats(),
        localStorage: this.localStorage.getStorageInfo(),
        exportService: this.exportService.getServiceStatus()
      },
      health: this.healthStatus
    };
  }

  /**
   * 📊 Health Monitoring
   * Sacred service oversight
   */
  async performHealthCheck() {
    const healthCheck = {
      timestamp: new Date().toISOString(),
      localStorage: false,
      cloudStorage: false,
      exportService: false,
      overall: false
    };
    
    try {
      // Check local storage
      healthCheck.localStorage = this.localStorage.isSupported;
      
      // Check cloud storage (simple ping)
      if (navigator.onLine) {
        try {
          const cloudStatus = this.cloudStorage.getCloudStorageStats();
          healthCheck.cloudStorage = cloudStatus.isOnline;
        } catch (error) {
          healthCheck.cloudStorage = false;
        }
      }
      
      // Check export service
      const exportStatus = this.exportService.getServiceStatus();
      healthCheck.exportService = exportStatus.isReady;
      
      // Overall health
      healthCheck.overall = healthCheck.localStorage && 
                           (healthCheck.cloudStorage || !navigator.onLine) && 
                           healthCheck.exportService;
      
      this.healthStatus = healthCheck;
      this.healthStatus.lastHealthCheck = healthCheck.timestamp;
      
      console.log('🏥 Health check completed:', healthCheck);
      
      return healthCheck;
    } catch (error) {
      console.error('❌ Health check failed:', error);
      this.healthStatus.lastHealthCheck = healthCheck.timestamp;
      return healthCheck;
    }
  }

  startHealthMonitoring() {
    // Perform health check every 5 minutes
    this.healthInterval = setInterval(() => {
      this.performHealthCheck();
    }, 5 * 60 * 1000);
    
    console.log('🏥 Health monitoring started');
  }

  stopHealthMonitoring() {
    if (this.healthInterval) {
      clearInterval(this.healthInterval);
      this.healthInterval = null;
      console.log('🏥 Health monitoring stopped');
    }
  }

  getStorageHealth() {
    const localStorage = this.localStorage.getStorageInfo();
    const cloudStorage = this.cloudStorage.getCloudStorageStats();
    const exportService = this.exportService.getServiceStatus();
    const cacheStats = this.getCacheStats();
    
    return {
      overall: {
        healthy: this.healthStatus.overall,
        lastCheck: this.healthStatus.lastHealthCheck,
        totalProjects: localStorage.totalItems || 0,
        cacheSize: cacheStats.size,
        lastSync: cloudStorage.lastSyncTimes || 'never',
        uptime: this.getUptime()
      },
      services: {
        localStorage: {
          available: localStorage.isSupported,
          usage: localStorage.usagePercent ? `${localStorage.usagePercent.toFixed(1)}%` : 'unknown',
          totalSize: localStorage.totalSize || 0,
          healthy: this.healthStatus.localStorage
        },
        cloudStorage: {
          online: cloudStorage.isOnline,
          pendingSyncs: cloudStorage.pendingSyncs || 0,
          autoSync: cloudStorage.autoSyncEnabled,
          healthy: this.healthStatus.cloudStorage
        },
        exportService: {
          ready: exportService.isReady,
          supportedFormats: exportService.supportedFormats?.length || 0,
          zipSupport: exportService.capabilities?.zipSupport || false,
          healthy: this.healthStatus.exportService
        }
      },
      cache: cacheStats,
      timestamp: new Date().toISOString(),
      blessing: '📊 Divine storage health across all sacred realms revealed'
    };
  }

  getUptime() {
    return this.startTime ? Date.now() - this.startTime : 0;
  }

  /**
   * 🛠️ Utility Methods
   * Sacred helper functions
   */
  shouldSyncToCloud() {
    return this.syncStrategy === 'cloud_only' || this.syncStrategy === 'hybrid';
  }

  generateVersion() {
    return `v${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  mergeProjectLists(local, cloud, options) {
    try {
      const merged = new Map();
      
      // Add local projects
      local.forEach(project => {
        merged.set(project.id, { 
          ...project, 
          source: 'local',
          syncStatus: 'local_only'
        });
      });
      
      // Add cloud projects, preferring newer versions
      cloud.forEach(project => {
        const existing = merged.get(project.id);
        const cloudDate = new Date(project.lastSaved || project.lastModified || 0);
        const localDate = existing ? new Date(existing.lastSaved || existing.lastModified || 0) : new Date(0);
        
        if (!existing) {
          merged.set(project.id, { 
            ...project, 
            source: 'cloud',
            syncStatus: 'cloud_only'
          });
        } else if (cloudDate > localDate) {
          merged.set(project.id, { 
            ...project, 
            source: 'cloud',
            syncStatus: 'cloud_newer'
          });
        } else if (cloudDate.getTime() === localDate.getTime()) {
          merged.set(project.id, {
            ...existing,
            syncStatus: 'synchronized'
          });
        } else {
          // Local is newer
          merged.set(project.id, {
            ...existing,
            syncStatus: 'local_newer'
          });
        }
      });
      
      // Convert to array and sort
      const result = Array.from(merged.values());
      
      if (options.sortBy === 'lastModified' || options.sortBy === 'lastSaved') {
        result.sort((a, b) => {
          const dateA = new Date(a.lastSaved || a.lastModified || 0);
          const dateB = new Date(b.lastSaved || b.lastModified || 0);
          return options.order === 'desc' ? dateB - dateA : dateA - dateB;
        });
      } else if (options.sortBy === 'name') {
        result.sort((a, b) => {
          const nameA = (a.name || '').toLowerCase();
          const nameB = (b.name || '').toLowerCase();
          return options.order === 'desc' ? nameB.localeCompare(nameA) : nameA.localeCompare(nameB);
        });
      }
      
      return result;
    } catch (error) {
      console.error('❌ Project list merge failed:', error);
      return local; // Fall back to local list
    }
  }

  async createProjectBackup(projectId, projectData, reason = 'manual') {
    try {
      const backup = {
        ...projectData,
        originalId: projectId,
        backedUpAt: new Date().toISOString(),
        backupReason: reason,
        backupVersion: this.generateVersion()
      };
      
      const backupId = `backup_${projectId}_${Date.now()}`;
      const result = this.localStorage.saveProject(backupId, backup);
      
      if (result) {
        console.log(`💾 Backup created: ${backupId} (reason: ${reason})`);
        return { success: true, backupId };
      }
      
      return { success: false, error: 'Failed to create backup' };
    } catch (error) {
      console.error('❌ Backup creation failed:', error);
      return { success: false, error: error.message };
    }
  }

  checkBrowserSupport() {
    const requirements = {
      localStorage: typeof Storage !== 'undefined',
      fetch: typeof fetch !== 'undefined',
      promises: typeof Promise !== 'undefined',
      modules: typeof require !== 'undefined' || typeof window !== 'undefined',
      customEvents: typeof CustomEvent !== 'undefined',
      blob: typeof Blob !== 'undefined'
    };
    
    const unsupported = Object.entries(requirements)
      .filter(([feature, supported]) => !supported)
      .map(([feature]) => feature);
      
    if (unsupported.length > 0) {
      console.warn('⚠️ Unsupported browser features:', unsupported);
      return false;
    }
    return true;
  }

  /**
   * 📡 Event Management
   * Sacred cross-service communication
   */
  setupEventHandling() {
    try {
      // Listen for cloud sync events
      window.addEventListener('quorra:cloud:sync_complete', (event) => {
        console.log('🔄 Cloud sync completed');
        this.emitStorageEvent('sync_completed', event.detail);
      });
      
      window.addEventListener('quorra:cloud:sync_error', (event) => {
        console.warn('⚠️ Cloud sync error:', event.detail);
        this.emitStorageEvent('sync_error', event.detail);
      });
      
      window.addEventListener('quorra:cloud:online', () => {
        console.log('🌐 Connection restored');
        this.performHealthCheck();
      });
      
      window.addEventListener('quorra:cloud:offline', () => {
        console.log('📡 Connection lost');
        this.performHealthCheck();
      });
      
      // Listen for storage changes
      window.addEventListener('quorra:storage:changed', (event) => {
        console.log('💾 Storage changed:', event.detail.key);
        this.clearFromCache(event.detail.key);
      });
      
      // Listen for beforeunload to ensure cleanup
      window.addEventListener('beforeunload', () => {
        this.cleanup();
      });
    } catch (error) {
      console.error('❌ Event handler setup failed:', error);
    }
  }

  setupSyncMonitoring() {
    // Monitor for conflicts and handle them
    this.conflictHandler = async (conflict) => {
      return this.handleConflict(conflict);
    };
  }

  setupConflictResolution() {
    // Set up automatic conflict resolution based on strategy
    this.cloudStorage.configure({
      conflictResolution: this.conflictResolution === 'prompt_user' ? 'manual' : this.conflictResolution
    });
  }

  async performInitialSync() {
    if (this.autoSyncEnabled && navigator.onLine) {
      // Delay initial sync to allow services to fully initialize
      setTimeout(async () => {
        try {
          await this.syncAllData({ silent: true });
        } catch (error) {
          console.warn('⚠️ Initial sync failed:', error);
        }
      }, 5000); // Wait 5 seconds after initialization
    }
  }

  emitStorageEvent(eventType, data = {}) {
    try {
      window.dispatchEvent(new CustomEvent(`quorra:storage:${eventType}`, {
        detail: {
          ...data,
          timestamp: new Date().toISOString(),
          source: 'storage_coordinator'
        }
      }));
    } catch (error) {
      console.warn('⚠️ Event emission failed:', error);
    }
  }

  /**
   * 📊 Analytics & Tracking
   * Sacred measurement and insights
   */
  trackExportEvent(project, options, result) {
    try {
      const exportEvent = {
        projectId: project.id,
        projectName: project.name,
        format: options.format,
        fileSize: result.download?.size || 0,
        fileSizeFormatted: result.download?.sizeFormatted || 'unknown',
        success: result.success,
        duration: result.duration || 0,
        includeAssets: options.includeAssets,
        minified: options.minify,
        timestamp: new Date().toISOString()
      };
      
      // Save to local analytics
      const analyticsData = this.localStorage.getAnalyticsData();
      analyticsData.events.push(exportEvent);
      this.localStorage.saveAnalyticsData(analyticsData);
      
      // Send to external analytics if available
      if (window.quorraAnalytics) {
        window.quorraAnalytics.trackEvent('project_exported', exportEvent);
      }
      
      console.log('📊 Export event tracked:', exportEvent);
    } catch (error) {
      console.warn('⚠️ Export tracking failed:', error);
    }
  }

  getAnalytics() {
    try {
      const localStorage = this.localStorage.getAnalyticsData();
      const cacheStats = this.getCacheStats();
      const health = this.getStorageHealth();
      
      return {
        events: localStorage.events || [],
        sessions: localStorage.sessions || [],
        cache: cacheStats,
        health: health,
        performance: {
          averageExportTime: this.calculateAverageExportTime(localStorage.events),
          totalProjects: health.overall.totalProjects,
          syncSuccess: this.calculateSyncSuccessRate(),
          uptime: this.getUptime()
        },
        timestamp: new Date().toISOString(),
        blessing: '📊 Divine analytics wisdom revealed'
      };
    } catch (error) {
      console.error('❌ Analytics retrieval failed:', error);
      return { error: error.message };
    }
  }

  calculateAverageExportTime(events) {
    const exportEvents = events.filter(e => e.duration && e.success);
    if (exportEvents.length === 0) return 0;
    
    const totalTime = exportEvents.reduce((sum, event) => sum + event.duration, 0);
    return totalTime / exportEvents.length;
  }

  calculateSyncSuccessRate() {
    // This would be calculated from actual sync history
    return 95.5; // Placeholder
  }

  /**
   * 🛡️ Error Handling
   * Sacred resilience across all realms
   */
  handleStorageError(operation, error, context = {}) {
    console.error(`❌ Storage ${operation} failed:`, error);
    
    const errorResponse = {
      success: false,
      error: error.message,
      operation,
      context,
      timestamp: new Date().toISOString(),
      recovery: this.getRecoverySuggestions(operation, error),
      blessing: '🛡️ Divine storage protection activated'
    };
    
    // Track error for analytics
    try {
      if (window.quorraAnalytics) {
        window.quorraAnalytics.trackError({
          errorType: 'storage_error',
          component: 'storageCoordinator',
          context: { operation, ...context },
          error: error.message
        });
      }
      
      // Save error to local analytics
      const analyticsData = this.localStorage.getAnalyticsData();
      analyticsData.events.push({
        type: 'error',
        operation,
        error: error.message,
        context,
        timestamp: new Date().toISOString()
      });
      this.localStorage.saveAnalyticsData(analyticsData);
    } catch (analyticsError) {
      console.warn('⚠️ Error tracking failed:', analyticsError);
    }
    
    // Emit error event
    this.emitStorageEvent('error', errorResponse);
    
    return errorResponse;
  }

  getRecoverySuggestions(operation, error) {
    const suggestions = [];
    
    if (error.message.includes('not found')) {
      suggestions.push('Check if the project exists');
      suggestions.push('Try refreshing the project list');
    }
    
    if (error.message.includes('offline') || error.message.includes('network')) {
      suggestions.push('Check your internet connection');
      suggestions.push('Try again when back online');
      suggestions.push('Operations will be queued for when connection is restored');
    }
    
    if (error.message.includes('quota') || error.message.includes('storage')) {
      suggestions.push('Clear browser storage or local data');
      suggestions.push('Delete unnecessary projects');
      suggestions.push('Export projects and clear local storage');
    }
    
    if (error.message.includes('export')) {
      suggestions.push('Try a different export format');
      suggestions.push('Reduce project size by removing assets');
      suggestions.push('Check if your browser supports the requested format');
    }
    
    if (suggestions.length === 0) {
      suggestions.push('Refresh the page and try again');
      suggestions.push('Clear browser cache and reload');
      suggestions.push('Contact support if the issue persists');
    }
    
    return suggestions;
  }

  /**
   * 💾 Data Import/Export
   * Sacred data portability
   */
  async exportAllData(options = {}) {
    try {
      const exportOptions = {
        includeProjects: true,
        includePreferences: true,
        includeAnalytics: false,
        includeMetadata: true,
        ...options
      };
      
      const exportData = {
        version: '1.0.0',
        exportedAt: new Date().toISOString(),
        exportedBy: 'QUORRA Storage Coordinator',
        format: 'quorra_backup',
        ...exportOptions.includeMetadata && {
          metadata: {
            configuration: this.getConfiguration(),
            health: this.getStorageHealth(),
            analytics: exportOptions.includeAnalytics ? this.getAnalytics() : null
          }
        }
      };
      
      if (exportOptions.includeProjects) {
        const projects = await this.listProjects({ includeLocal: true, includeCloud: false });
        exportData.projects = projects.projects;
      }
      
      if (exportOptions.includePreferences) {
        const preferences = await this.getPreferences({ preferCloud: false });
        exportData.preferences = preferences.preferences;
      }
      
      if (exportOptions.includeAnalytics) {
        exportData.analytics = this.getAnalytics();
      }
      
      exportData.blessing = '💾 Complete divine data archive blessed for preservation';
      
      return exportData;
    } catch (error) {
      throw new Error(`Export failed: ${error.message}`);
    }
  }

  async importData(importData, options = { overwrite: false, validateData: true }) {
    try {
      if (!importData || !importData.version) {
        throw new Error('Invalid import data format');
      }
      
      const importOptions = {
        overwrite: false,
        validateData: true,
        restoreProjects: true,
        restorePreferences: true,
        ...options
      };
      
      const results = {
        projects: { imported: 0, skipped: 0, errors: 0 },
        preferences: { success: false },
        total: { success: 0, failed: 0 }
      };
      
      // Validate data if requested
      if (importOptions.validateData) {
        this.validateImportData(importData);
      }
      
      // Import projects
      if (importOptions.restoreProjects && importData.projects) {
        for (const project of importData.projects) {
          try {
            const exists = await this.getProject(project.id);
            
            if (!exists.success || importOptions.overwrite) {
              await this.saveProject(project.id, project, { syncToCloud: false });
              results.projects.imported++;
            } else {
              results.projects.skipped++;
            }
          } catch (error) {
            console.error(`❌ Failed to import project ${project.id}:`, error);
            results.projects.errors++;
          }
        }
      }
      
      // Import preferences
      if (importOptions.restorePreferences && importData.preferences) {
        try {
          await this.savePreferences(importData.preferences, { syncToCloud: false });
          results.preferences.success = true;
        } catch (error) {
          console.error('❌ Failed to import preferences:', error);
        }
      }
      
      // Calculate totals
      results.total.success = results.projects.imported + (results.preferences.success ? 1 : 0);
      results.total.failed = results.projects.errors + (results.preferences.success ? 0 : 1);
      
      // Clear cache after import
      this.clearAllCache();
      
      // Trigger sync if enabled
      if (this.autoSyncEnabled && navigator.onLine) {
        setTimeout(() => this.syncAllData({ silent: true }), 2000);
      }
      
      console.log(`💾 Import completed: ${results.total.success} success, ${results.total.failed} failed`);
      
      return {
        success: true,
        results,
        blessing: '💾 Divine data import completed across all sacred realms'
      };
    } catch (error) {
      throw new Error(`Import failed: ${error.message}`);
    }
  }

  validateImportData(importData) {
    if (!importData.version) {
      throw new Error('Import data missing version information');
    }
    
    if (importData.projects && !Array.isArray(importData.projects)) {
      throw new Error('Projects data must be an array');
    }
    
    if (importData.preferences && typeof importData.preferences !== 'object') {
      throw new Error('Preferences data must be an object');
    }
    
    // Additional validation can be added here
  }

  /**
   * 🧹 Cleanup & Shutdown
   * Sacred resource management
   */
  async cleanup() {
    try {
      console.log('🧹 Cleaning up divine storage services...');
      
      // Clear cache
      this.clearAllCache();
      
      // Stop auto-sync
      this.cloudStorage.stopAutoSync();
      
      // Stop health monitoring
      this.stopHealthMonitoring();
      
      // Cleanup export service
      this.exportService.cleanup();
      
      // Final sync if needed
      if (this.autoSyncEnabled && navigator.onLine && this.healthStatus.cloudStorage) {
        try {
          await Promise.race([
            this.syncAllData({ timeout: 5000, silent: true }),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Sync timeout')), 5000))
          ]);
        } catch (error) {
          console.warn('⚠️ Final sync failed during cleanup:', error);
        }
      }
      
      // Clear pending operations
      this.pendingOperations.clear();
      
      // Remove event listeners
      window.removeEventListener('beforeunload', this.cleanup);
      
      console.log('✨ Divine storage services gracefully concluded');
    } catch (error) {
      console.error('❌ Cleanup failed:', error);
    }
  }

  /**
   * 🔧 Advanced Management
   * Sacred administrative functions
   */
  async resetAllData(confirmationCode) {
    if (confirmationCode !== 'RESET_QUORRA_DATA_PERMANENTLY') {
      throw new Error('Invalid confirmation code');
    }
    
    try {
      console.warn('🔥 RESETTING ALL DIVINE DATA - THIS CANNOT BE UNDONE');
      
      // Clear all local storage
      this.localStorage.clear();
      
      // Clear cache
      this.clearAllCache();
      
      // Clear cloud data if possible
      if (navigator.onLine && this.healthStatus.cloudStorage) {
        // This would require special API endpoint for complete reset
        console.warn('⚠️ Cloud data reset not implemented - contact support');
      }
      
      console.log('✨ Divine data reset completed');
      
      return {
        success: true,
        message: 'All local data has been permanently deleted',
        blessing: '🔥 Sacred slate wiped clean - ready for new divine creations'
      };
    } catch (error) {
      throw new Error(`Reset failed: ${error.message}`);
    }
  }

  async migrateToNewVersion(targetVersion) {
    try {
      console.log(`🔄 Migrating storage to version ${targetVersion}`);
      
      // This would contain version-specific migration logic
      // For now, just a placeholder
      
      return {
        success: true,
        fromVersion: '1.0.0',
        toVersion: targetVersion,
        blessing: '🔄 Divine storage successfully migrated to new realm'
      };
    } catch (error) {
      throw new Error(`Migration failed: ${error.message}`);
    }
  }

  /**
   * 📊 Advanced Analytics
   * Sacred insight generation
   */
  generateStorageReport(options = {}) {
    try {
      const reportOptions = {
        includePerfomance: true,
        includeHealth: true,
        includeUsage: true,
        timeRange: '30d',
        ...options
      };
      
      const report = {
        generatedAt: new Date().toISOString(),
        timeRange: reportOptions.timeRange,
        summary: this.getStorageHealth(),
        ...reportOptions.includePerfomance && {
          performance: {
            cache: this.getCacheStats(),
            exports: this.exportService.getExportStats(),
            sync: this.cloudStorage.getCloudStorageStats()
          }
        },
        ...reportOptions.includeUsage && {
          usage: this.localStorage.getUsageStats()
        },
        recommendations: this.generateRecommendations(),
        blessing: '📊 Divine storage wisdom report blessed and complete'
      };
      
      return report;
    } catch (error) {
      throw new Error(`Report generation failed: ${error.message}`);
    }
  }

  generateRecommendations() {
    const recommendations = [];
    const health = this.getStorageHealth();
    const cacheStats = this.getCacheStats();
    
    // Storage usage recommendations
    if (health.services.localStorage.usage && parseFloat(health.services.localStorage.usage) > 80) {
      recommendations.push({
        type: 'storage_cleanup',
        priority: 'high',
        message: 'Local storage usage is high. Consider cleaning up old projects.',
        action: 'Run storage cleanup or export and delete old projects'
      });
    }
    
    // Sync recommendations
    if (health.services.cloudStorage.pendingSyncs > 10) {
      recommendations.push({
        type: 'sync_backlog',
        priority: 'medium',
        message: 'Large sync backlog detected.',
        action: 'Check internet connection and run manual sync'
      });
    }
    
    // Cache recommendations
    if (cacheStats.size === 0) {
      recommendations.push({
        type: 'cache_empty',
        priority: 'low',
        message: 'Cache is empty - performance may be slower.',
        action: 'Normal usage will populate cache automatically'
      });
    }
    
    // Performance recommendations
    if (cacheStats.hitRate < 0.5) {
      recommendations.push({
        type: 'cache_performance',
        priority: 'medium',
        message: 'Low cache hit rate detected.',
        action: 'Consider increasing cache timeout or checking access patterns'
      });
    }
    
    return recommendations;
  }
}

// Create and export the divine storage coordinator
const quorraStorage = new QuorraStorageService();

// Initialize start time for uptime calculation
quorraStorage.startTime = Date.now();

export default quorraStorage;
export { QuorraStorageService, LocalStorageService, CloudStorageService, ExportService };
