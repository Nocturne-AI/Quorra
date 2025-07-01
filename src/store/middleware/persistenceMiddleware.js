/**
 * QUORRA PERSISTENCE MIDDLEWARE
 * Divine data persistence and synchronization
 * "Sacred state preservation blessed by the Goddess of Smithing"
 */

import { createClient } from '@supabase/supabase-js';
import { debounce } from 'lodash';

// Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Persistence configuration
const PERSISTENCE_CONFIG = {
  // Auto-save intervals
  autoSaveInterval: 30000, // 30 seconds
  quickSaveInterval: 5000,  // 5 seconds for critical changes
  
  // Data compression
  enableCompression: true,
  compressionThreshold: 10000, // Compress if data > 10KB
  
  // Sync settings
  enableRealtimeSync: true,
  syncConflictResolution: 'last_write_wins', // 'last_write_wins', 'manual_merge'
  
  // Storage layers
  localStorage: true,
  sessionStorage: false,
  indexedDB: true,
  supabase: true,
  
  // What to persist
  persistedSlices: [
    'design',
    'projects', 
    'user',
    'sparky',
    'intelligence'
  ],
  
  // What to exclude from persistence
  excludedPaths: [
    'ui.isLoading',
    'ui.modal',
    'generation.isGenerating',
    'sparky.isThinking',
    'design.present.canvas.zoom',
    'design.present.canvas.pan'
  ]
};

// Debounced save functions
const debouncedAutoSave = debounce(saveToStorage, PERSISTENCE_CONFIG.autoSaveInterval);
const debouncedQuickSave = debounce(saveToStorage, PERSISTENCE_CONFIG.quickSaveInterval);

// Storage managers
let storageManagers = null;

/**
 * PERSISTENCE MIDDLEWARE
 * Handles all data persistence and synchronization
 */
const persistenceMiddleware = (store) => (next) => async (action) => {
  const { type, payload } = action;
  const prevState = store.getState();
  
  // Initialize storage if needed
  if (!storageManagers) {
    storageManagers = initializeStorageManagers(store);
  }
  
  // Execute the action
  const result = next(action);
  const newState = store.getState();
  
  // Handle persistence based on action type
  await handleActionPersistence(action, prevState, newState, storageManagers);
  
  return result;
};

/**
 * INITIALIZE STORAGE MANAGERS
 */
function initializeStorageManagers(store) {
  const managers = {
    localStorage: PERSISTENCE_CONFIG.localStorage ? new LocalStorageManager() : null,
    indexedDB: PERSISTENCE_CONFIG.indexedDB ? new IndexedDBManager() : null,
    supabase: PERSISTENCE_CONFIG.supabase ? new SupabaseManager() : null,
    realtime: null
  };
  
  // Initialize IndexedDB
  if (managers.indexedDB) {
    managers.indexedDB.initialize();
  }
  
  // Initialize realtime sync if enabled
  if (PERSISTENCE_CONFIG.enableRealtimeSync && managers.supabase) {
    managers.realtime = new RealtimeManager(store, managers.supabase);
    managers.realtime.initialize();
  }
  
  return managers;
}

/**
 * HANDLE ACTION PERSISTENCE
 * Determine what and how to persist based on action
 */
async function handleActionPersistence(action, prevState, newState, managers) {
  const { type, payload } = action;
  const userId = newState.auth?.user?.id;
  
  // Get persistence strategy for this action
  const strategy = getPersistenceStrategy(action, prevState, newState);
  
  if (strategy.shouldPersist) {
    switch (strategy.urgency) {
      case 'immediate':
        await saveImmediately(newState, managers, strategy);
        break;
        
      case 'quick':
        debouncedQuickSave(newState, managers, strategy);
        break;
        
      case 'normal':
        debouncedAutoSave(newState, managers, strategy);
        break;
        
      case 'background':
        // Background save (non-blocking)
        setTimeout(() => saveToStorage(newState, managers, strategy), 100);
        break;
    }
  }
  
  // Handle special persistence cases
  await handleSpecialPersistence(action, newState, managers);
}

/**
 * GET PERSISTENCE STRATEGY
 * Determine how urgently to persist based on action
 */
function getPersistenceStrategy(action, prevState, newState) {
  const { type, payload } = action;
  
  // Immediate persistence (critical data)
  const immediateActions = [
    'auth/login',
    'auth/logout', 
    'projects/save',
    'generation/complete',
    'design/publish'
  ];
  
  // Quick persistence (important changes)
  const quickActions = [
    'design/addElement',
    'design/deleteElement',
    'design/setIndustry',
    'projects/create',
    'projects/delete'
  ];
  
  // Background persistence (less critical)
  const backgroundActions = [
    'ui/setTheme',
    'ui/togglePanel',
    'sparky/updateMood',
    'intelligence/cacheResult'
  ];
  
  // No persistence needed
  const skipActions = [
    'ui/setLoading',
    'ui/showModal',
    'ui/hideModal',
    'generation/setProgress',
    'sparky/setIsThinking'
  ];
  
  if (skipActions.includes(type)) {
    return { shouldPersist: false };
  }
  
  if (immediateActions.includes(type)) {
    return { 
      shouldPersist: true, 
      urgency: 'immediate',
      layers: ['localStorage', 'indexedDB', 'supabase'],
      slices: getAllRelevantSlices(type)
    };
  }
  
  if (quickActions.includes(type)) {
    return { 
      shouldPersist: true, 
      urgency: 'quick',
      layers: ['localStorage', 'indexedDB'],
      slices: getRelevantSlices(type)
    };
  }
  
  if (backgroundActions.includes(type)) {
    return { 
      shouldPersist: true, 
      urgency: 'background',
      layers: ['localStorage'],
      slices: getRelevantSlices(type)
    };
  }
  
  // Default strategy for design changes
  if (type.startsWith('design/')) {
    return { 
      shouldPersist: true, 
      urgency: 'normal',
      layers: ['localStorage', 'indexedDB'],
      slices: ['design']
    };
  }
  
  return { shouldPersist: false };
}

/**
 * SAVE TO STORAGE
 * Main persistence function
 */
async function saveToStorage(state, managers, strategy) {
  try {
    const userId = state.auth?.user?.id;
    const timestamp = Date.now();
    
    // Prepare data for persistence
    const persistenceData = preparePersistenceData(state, strategy);
    
    // Save to each specified layer
    const savePromises = [];
    
    if (strategy.layers.includes('localStorage') && managers.localStorage) {
      savePromises.push(
        managers.localStorage.save('quorra_state', persistenceData, { timestamp })
      );
    }
    
    if (strategy.layers.includes('indexedDB') && managers.indexedDB) {
      savePromises.push(
        managers.indexedDB.save('app_state', persistenceData, { 
          userId, 
          timestamp,
          version: getStateVersion(state)
        })
      );
    }
    
    if (strategy.layers.includes('supabase') && managers.supabase && userId) {
      savePromises.push(
        managers.supabase.save(userId, persistenceData, { 
          timestamp,
          version: getStateVersion(state)
        })
      );
    }
    
    // Execute saves
    await Promise.allSettled(savePromises);
    
    // Update last save timestamp
    if (managers.localStorage) {
      managers.localStorage.save('quorra_last_save', timestamp);
    }
    
  } catch (error) {
    console.error('Persistence save failed:', error);
    // Dispatch error action if needed
  }
}

/**
 * SAVE IMMEDIATELY
 * For critical data that must be saved right away
 */
async function saveImmediately(state, managers, strategy) {
  // Cancel any pending debounced saves
  debouncedAutoSave.cancel();
  debouncedQuickSave.cancel();
  
  // Save immediately
  await saveToStorage(state, managers, strategy);
}

/**
 * PREPARE PERSISTENCE DATA
 * Clean and prepare state data for persistence
 */
function preparePersistenceData(state, strategy) {
  const data = {};
  
  // Include only specified slices
  const slicesToPersist = strategy.slices || PERSISTENCE_CONFIG.persistedSlices;
  
  slicesToPersist.forEach(slice => {
    if (state[slice]) {
      data[slice] = cleanStateSlice(state[slice], slice);
    }
  });
  
  // Add metadata
  data._metadata = {
    version: getStateVersion(state),
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    quorraBlessing: '🔥 State preserved by divine fire'
  };
  
  // Compress if needed
  if (PERSISTENCE_CONFIG.enableCompression) {
    return compressData(data);
  }
  
  return data;
}

/**
 * CLEAN STATE SLICE
 * Remove non-persistable data from state slice
 */
function cleanStateSlice(slice, sliceName) {
  const cleaned = { ...slice };
  
  // Remove excluded paths
  PERSISTENCE_CONFIG.excludedPaths.forEach(path => {
    if (path.startsWith(sliceName + '.')) {
      const remainingPath = path.substring(sliceName.length + 1);
      deleteNestedProperty(cleaned, remainingPath);
    }
  });
  
  // Clean specific slice types
  switch (sliceName) {
    case 'design':
      return cleanDesignSlice(cleaned);
    case 'sparky':
      return cleanSparkySlice(cleaned);
    case 'intelligence':
      return cleanIntelligenceSlice(cleaned);
    default:
      return cleaned;
  }
}

/**
 * SLICE-SPECIFIC CLEANING
 */
function cleanDesignSlice(design) {
  return {
    ...design,
    // Remove temporary UI state
    present: design.present ? {
      ...design.present,
      canvas: undefined, // Don't persist canvas state
      selection: undefined, // Don't persist selection
      isDirty: undefined
    } : design.present
  };
}

function cleanSparkySlice(sparky) {
  return {
    ...sparky,
    // Keep conversation but limit size
    chatHistory: sparky.chatHistory ? 
      sparky.chatHistory.slice(-50) : [], // Keep last 50 messages
    isThinking: false, // Always reset thinking state
    currentAnimation: undefined
  };
}

function cleanIntelligenceSlice(intelligence) {
  return {
    ...intelligence,
    // Cache results but limit size
    analysisCache: intelligence.analysisCache ? 
      limitCacheSize(intelligence.analysisCache, 100) : {},
    temporaryResults: undefined // Don't persist temporary results
  };
}

/**
 * HANDLE SPECIAL PERSISTENCE
 * Handle special cases that need custom persistence logic
 */
async function handleSpecialPersistence(action, state, managers) {
  const { type, payload } = action;
  
  switch (type) {
    case 'auth/login':
      await handleLoginPersistence(state, managers);
      break;
      
    case 'auth/logout':
      await handleLogoutPersistence(managers);
      break;
      
    case 'projects/create':
      await handleProjectCreatePersistence(payload, state, managers);
      break;
      
    case 'sparky/learnFromInteraction':
      await handleSparkyLearningPersistence(payload, state, managers);
      break;
      
    case 'generation/complete':
      await handleGenerationPersistence(payload, state, managers);
      break;
  }
}

/**
 * SPECIALIZED PERSISTENCE HANDLERS
 */
async function handleLoginPersistence(state, managers) {
  const userId = state.auth?.user?.id;
  
  if (userId && managers.supabase) {
    // Load user's cloud data
    try {
      const cloudData = await managers.supabase.load(userId);
      if (cloudData) {
        // Merge with local data if needed
        const mergedData = mergeUserData(state, cloudData);
        // Update state with merged data (would need store reference)
      }
    } catch (error) {
      console.error('Failed to load user cloud data:', error);
    }
  }
}

async function handleLogoutPersistence(managers) {
  // Clear sensitive data but keep non-user-specific state
  if (managers.localStorage) {
    const keysToKeep = ['quorra_theme', 'quorra_ui_preferences'];
    await managers.localStorage.clearExcept(keysToKeep);
  }
  
  if (managers.indexedDB) {
    await managers.indexedDB.clearUserData();
  }
}

async function handleProjectCreatePersistence(project, state, managers) {
  const userId = state.auth?.user?.id;
  
  if (userId && managers.supabase) {
    // Save project to cloud immediately
    try {
      await managers.supabase.saveProject(userId, project);
    } catch (error) {
      console.error('Failed to save project to cloud:', error);
      // Add to offline queue
      if (managers.indexedDB) {
        await managers.indexedDB.addToSyncQueue('project_create', project);
      }
    }
  }
}

async function handleSparkyLearningPersistence(learningData, state, managers) {
  const userId = state.auth?.user?.id;
  
  if (userId && managers.supabase) {
    // Save learning data for Sparky's memory
    try {
      await managers.supabase.saveSparkyMemory(userId, learningData);
    } catch (error) {
      console.error('Failed to save Sparky learning data:', error);
      // Cache locally for later sync
      if (managers.indexedDB) {
        await managers.indexedDB.cacheSparkyLearning(learningData);
      }
    }
  }
}

async function handleGenerationPersistence(generationResult, state, managers) {
  const userId = state.auth?.user?.id;
  
  // Always save generation results locally
  if (managers.indexedDB) {
    await managers.indexedDB.saveGeneration(generationResult);
  }
  
  // Save to cloud if user is logged in
  if (userId && managers.supabase) {
    try {
      await managers.supabase.saveGeneration(userId, generationResult);
    } catch (error) {
      console.error('Failed to save generation to cloud:', error);
    }
  }
}

/**
 * STORAGE MANAGERS
 */
class LocalStorageManager {
  save(key, data, options = {}) {
    try {
      const serialized = JSON.stringify(data);
      localStorage.setItem(key, serialized);
      if (options.timestamp) {
        localStorage.setItem(`${key}_timestamp`, options.timestamp.toString());
      }
    } catch (error) {
      console.error('LocalStorage save failed:', error);
    }
  }
  
  load(key) {
    try {
      const serialized = localStorage.getItem(key);
      return serialized ? JSON.parse(serialized) : null;
    } catch (error) {
      console.error('LocalStorage load failed:', error);
      return null;
    }
  }
  
  clearExcept(keysToKeep) {
    const allKeys = Object.keys(localStorage);
    allKeys.forEach(key => {
      if (!keysToKeep.some(keepKey => key.startsWith(keepKey))) {
        localStorage.removeItem(key);
      }
    });
  }
}

class IndexedDBManager {
  constructor() {
    this.dbName = 'QuorraDB';
    this.version = 1;
    this.db = null;
  }
  
  async initialize() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        // Create stores
        if (!db.objectStoreNames.contains('app_state')) {
          db.createObjectStore('app_state', { keyPath: 'id' });
        }
        
        if (!db.objectStoreNames.contains('projects')) {
          db.createObjectStore('projects', { keyPath: 'id' });
        }
        
        if (!db.objectStoreNames.contains('generations')) {
          db.createObjectStore('generations', { keyPath: 'id' });
        }
        
        if (!db.objectStoreNames.contains('sync_queue')) {
          const syncStore = db.createObjectStore('sync_queue', { keyPath: 'id', autoIncrement: true });
          syncStore.createIndex('timestamp', 'timestamp');
        }
      };
    });
  }
  
  async save(store, data, options = {}) {
    if (!this.db) return;
    
    const transaction = this.db.transaction([store], 'readwrite');
    const objectStore = transaction.objectStore(store);
    
    const record = {
      id: options.userId || 'default',
      data,
      timestamp: options.timestamp || Date.now(),
      version: options.version || 1
    };
    
    return objectStore.put(record);
  }
  
  async load(store, id = 'default') {
    if (!this.db) return null;
    
    const transaction = this.db.transaction([store], 'readonly');
    const objectStore = transaction.objectStore(store);
    
    return new Promise((resolve, reject) => {
      const request = objectStore.get(id);
      request.onsuccess = () => resolve(request.result?.data || null);
      request.onerror = () => reject(request.error);
    });
  }
  
  async addToSyncQueue(type, data) {
    if (!this.db) return;
    
    const transaction = this.db.transaction(['sync_queue'], 'readwrite');
    const objectStore = transaction.objectStore('sync_queue');
    
    const record = {
      type,
      data,
      timestamp: Date.now(),
      status: 'pending'
    };
    
    return objectStore.add(record);
  }
}

class SupabaseManager {
  async save(userId, data, options = {}) {
    const { error } = await supabase
      .from('user_states')
      .upsert({
        user_id: userId,
        state_data: data,
        version: options.version || 1,
        updated_at: new Date().toISOString()
      });
    
    if (error) throw error;
  }
  
  async load(userId) {
    const { data, error } = await supabase
      .from('user_states')
      .select('state_data')
      .eq('user_id', userId)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') {
        // No data found, return null
        return null;
      }
      throw error;
    }
    
    return data?.state_data || null;
  }
  
  async saveProject(userId, project) {
    const { error } = await supabase
      .from('projects')
      .upsert({
        id: project.id,
        user_id: userId,
        name: project.name,
        data: project,
        updated_at: new Date().toISOString()
      });
    
    if (error) throw error;
  }
  
  async saveGeneration(userId, generation) {
    const { error } = await supabase
      .from('generations')
      .insert({
        user_id: userId,
        project_id: generation.projectId,
        result: generation,
        created_at: new Date().toISOString()
      });
    
    if (error) throw error;
  }
  
  async saveSparkyMemory(userId, memoryData) {
    const { error } = await supabase
      .from('sparky_memories')
      .insert({
        user_id: userId,
        memory_data: memoryData,
        created_at: new Date().toISOString()
      });
    
    if (error) throw error;
  }
}

class RealtimeManager {
  constructor(store, supabaseManager) {
    this.store = store;
    this.supabaseManager = supabaseManager;
    this.subscription = null;
  }
  
  initialize() {
    // Set up realtime subscription for collaborative features
    this.subscription = supabase
      .channel('user_states')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'user_states' },
        this.handleRealtimeUpdate.bind(this)
      )
      .subscribe();
  }
  
  handleRealtimeUpdate(payload) {
    // Handle realtime updates for collaborative editing
    const { eventType, new: newRecord } = payload;
    
    if (eventType === 'UPDATE') {
      // Check if this update is from another session
      const currentUserId = this.store.getState().auth?.user?.id;
      if (newRecord.user_id === currentUserId) {
        // Handle collaborative updates
        this.handleCollaborativeUpdate(newRecord);
      }
    }
  }
  
  handleCollaborativeUpdate(record) {
    // Implement collaborative update logic
    // This would need careful conflict resolution
  }
  
  cleanup() {
    if (this.subscription) {
      supabase.removeChannel(this.subscription);
    }
  }
}

/**
 * UTILITY FUNCTIONS
 */
function getRelevantSlices(actionType) {
  const sliceMapping = {
    'design/': ['design'],
    'projects/': ['projects'],
    'auth/': ['auth'],
    'sparky/': ['sparky'],
    'intelligence/': ['intelligence'],
    'ui/': ['ui']
  };
  
  for (const [prefix, slices] of Object.entries(sliceMapping)) {
    if (actionType.startsWith(prefix)) {
      return slices;
    }
  }
  
  return ['design']; // Default
}

function getAllRelevantSlices(actionType) {
  return PERSISTENCE_CONFIG.persistedSlices;
}

function getStateVersion(state) {
  return state._version || 1;
}

function compressData(data) {
  // Simple compression placeholder - could use libraries like lz-string
  return data;
}

function deleteNestedProperty(obj, path) {
  const keys = path.split('.');
  const lastKey = keys.pop();
  const target = keys.reduce((current, key) => current && current[key], obj);
  
  if (target && typeof target === 'object') {
    delete target[lastKey];
  }
}

function limitCacheSize(cache, maxSize) {
  const entries = Object.entries(cache);
  if (entries.length <= maxSize) return cache;
  
  // Keep most recent entries
  const sortedEntries = entries.sort((a, b) => 
    (b[1].timestamp || 0) - (a[1].timestamp || 0)
  );
  
  return Object.fromEntries(sortedEntries.slice(0, maxSize));
}

function mergeUserData(localState, cloudData) {
  // Implement intelligent merge logic for cloud/local data
  // This would need sophisticated conflict resolution
  return { ...localState, ...cloudData };
}

// Export middleware and utilities
export default persistenceMiddleware;
export { PERSISTENCE_CONFIG, saveToStorage };