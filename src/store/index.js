// C:\Users\Kimberly\quorra\src\store\index.js
// QUORRA Divine Store Configuration
// Central orchestration of all divine state management blessed by the Goddess of Smithing

import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Import individual store slices
import { useUserStore } from './slices/userSlice';
import { useProjectStore } from './slices/projectSlice';
import { useSparkyStore } from './slices/sparkySlice';

// ===== COMBINED STORE INTERFACE =====

/**
 * Main QUORRA Store - Divine state orchestration
 * Combines all slices with cross-slice communication and divine syncing
 */
const useQuorraStore = create(
  subscribeWithSelector(
    devtools(
      immer((set, get) => ({
        // ===== GLOBAL APP STATE =====
        
        // Application loading and error states
        app: {
          isInitialized: false,
          isLoading: false,
          globalError: null,
          version: '1.0.0',
          buildNumber: Date.now(),
          environment: process.env.NODE_ENV || 'development'
        },

        // Divine theme and UI state
        ui: {
          theme: 'divine_fire', // divine_fire, sacred_forge, clean_light
          sidebarCollapsed: false,
          activePanel: 'design', // design, code, sparky, settings
          modalStack: [],
          notifications: [],
          commandPalette: {
            isOpen: false,
            query: ''
          }
        },

        // Editor state (visual design editor)
        editor: {
          canvas: {
            zoom: 1.0,
            panX: 0,
            panY: 0,
            gridVisible: true,
            snapToGrid: true,
            rulers: true
          },
          selection: {
            selectedElements: [],
            hoveredElement: null,
            clipboard: null
          },
          history: {
            undoStack: [],
            redoStack: [],
            currentIndex: 0,
            maxHistorySize: 50
          },
          tools: {
            activeTool: 'select', // select, text, image, shape, etc.
            toolOptions: {}
          }
        },

        // Real-time collaboration state
        collaboration: {
          isConnected: false,
          collaborators: [],
          cursorPositions: {},
          liveChanges: [],
          conflictResolution: 'auto' // auto, manual
        },

        // ===== GLOBAL ACTIONS =====

        /**
         * Initialize QUORRA application
         */
        initializeApp: async () => {
          set(state => {
            state.app.isLoading = true;
            state.app.globalError = null;
          });

          try {
            // Initialize authentication state
            const userStore = useUserStore.getState();
            if (userStore.isAuthenticated) {
              await userStore.signIn({ restore: true });
            }

            // Initialize Sparky for returning users
            const sparkyStore = useSparkyStore.getState();
            if (userStore.isAuthenticated && userStore.user) {
              sparkyStore.initializeSparky({
                name: 'Welcome Back',
                industry: 'general'
              });
            }

            // Load user's recent projects
            const projectStore = useProjectStore.getState();
            // In real app, would load from Supabase
            
            set(state => {
              state.app.isInitialized = true;
              state.app.isLoading = false;
            });

            return true;
          } catch (error) {
            set(state => {
              state.app.globalError = error.message;
              state.app.isLoading = false;
            });
            throw error;
          }
        },

        /**
         * Set application theme
         */
        setTheme: (theme) => {
          set(state => {
            state.ui.theme = theme;
          });

          // Sync with user preferences
          const userStore = useUserStore.getState();
          if (userStore.isAuthenticated) {
            userStore.updatePreferences({
              workspace: {
                ...userStore.preferences.workspace,
                theme
              }
            });
          }
        },

        /**
         * Toggle sidebar
         */
        toggleSidebar: () => {
          set(state => {
            state.ui.sidebarCollapsed = !state.ui.sidebarCollapsed;
          });
        },

        /**
         * Set active panel
         */
        setActivePanel: (panel) => {
          set(state => {
            state.ui.activePanel = panel;
          });
        },

        /**
         * Show modal
         */
        showModal: (modalConfig) => {
          set(state => {
            state.ui.modalStack.push({
              id: `modal_${Date.now()}`,
              ...modalConfig,
              createdAt: new Date().toISOString()
            });
          });
        },

        /**
         * Close modal
         */
        closeModal: (modalId) => {
          set(state => {
            if (modalId) {
              state.ui.modalStack = state.ui.modalStack.filter(m => m.id !== modalId);
            } else {
              // Close topmost modal
              state.ui.modalStack.pop();
            }
          });
        },

        /**
         * Add notification
         */
        addNotification: (notification) => {
          const id = `notif_${Date.now()}`;
          set(state => {
            state.ui.notifications.push({
              id,
              type: 'info',
              autoClose: true,
              duration: 5000,
              ...notification,
              createdAt: new Date().toISOString()
            });
          });

          // Auto-remove notification
          if (notification.autoClose !== false) {
            setTimeout(() => {
              get().removeNotification(id);
            }, notification.duration || 5000);
          }

          return id;
        },

        /**
         * Remove notification
         */
        removeNotification: (notificationId) => {
          set(state => {
            state.ui.notifications = state.ui.notifications.filter(n => n.id !== notificationId);
          });
        },

        /**
         * Update canvas state
         */
        updateCanvas: (canvasUpdates) => {
          set(state => {
            Object.assign(state.editor.canvas, canvasUpdates);
          });
        },

        /**
         * Set selected elements
         */
        setSelection: (elementIds) => {
          set(state => {
            state.editor.selection.selectedElements = Array.isArray(elementIds) ? elementIds : [elementIds];
          });
        },

        /**
         * Add to history stack for undo/redo
         */
        addToHistory: (action) => {
          set(state => {
            // Clear redo stack when new action is added
            state.editor.history.redoStack = [];
            
            // Add to undo stack
            state.editor.history.undoStack.push({
              ...action,
              timestamp: new Date().toISOString()
            });

            // Limit history size
            if (state.editor.history.undoStack.length > state.editor.history.maxHistorySize) {
              state.editor.history.undoStack.shift();
            }

            state.editor.history.currentIndex = state.editor.history.undoStack.length;
          });
        },

        /**
         * Undo last action
         */
        undo: () => {
          const state = get();
          if (state.editor.history.undoStack.length === 0) return;

          const lastAction = state.editor.history.undoStack.pop();
          
          set(state => {
            state.editor.history.redoStack.push(lastAction);
            state.editor.history.currentIndex = state.editor.history.undoStack.length;
          });

          // Execute undo action
          if (lastAction.undo) {
            lastAction.undo();
          }
        },

        /**
         * Redo last undone action
         */
        redo: () => {
          const state = get();
          if (state.editor.history.redoStack.length === 0) return;

          const actionToRedo = state.editor.history.redoStack.pop();
          
          set(state => {
            state.editor.history.undoStack.push(actionToRedo);
            state.editor.history.currentIndex = state.editor.history.undoStack.length;
          });

          // Execute redo action
          if (actionToRedo.redo) {
            actionToRedo.redo();
          }
        },

        /**
         * Set active tool
         */
        setActiveTool: (tool, options = {}) => {
          set(state => {
            state.editor.tools.activeTool = tool;
            state.editor.tools.toolOptions = options;
          });
        },

        /**
         * Clear global error
         */
        clearGlobalError: () => {
          set(state => {
            state.app.globalError = null;
          });
        },

        /**
         * Reset application state
         */
        resetApp: () => {
          set(state => {
            // Reset all global state
            state.app.isInitialized = false;
            state.app.isLoading = false;
            state.app.globalError = null;
            
            state.ui.sidebarCollapsed = false;
            state.ui.activePanel = 'design';
            state.ui.modalStack = [];
            state.ui.notifications = [];
            state.ui.commandPalette.isOpen = false;
            state.ui.commandPalette.query = '';
            
            state.editor.canvas.zoom = 1.0;
            state.editor.canvas.panX = 0;
            state.editor.canvas.panY = 0;
            state.editor.selection.selectedElements = [];
            state.editor.selection.hoveredElement = null;
            state.editor.history.undoStack = [];
            state.editor.history.redoStack = [];
            state.editor.history.currentIndex = 0;
            state.editor.tools.activeTool = 'select';
          });

          // Reset individual stores
          useUserStore.getState().resetUserState();
          useProjectStore.getState().clearProjects();
          useSparkyStore.getState().resetSparky();
        }
      })),
      { name: 'QuorraMainStore' }
    )
  )
);

// ===== CROSS-SLICE SUBSCRIPTIONS =====

/**
 * Set up divine synchronization between stores
 * This ensures all parts of QUORRA stay in harmony
 */
const setupDivineSync = () => {
  // Sync user authentication with Sparky
  useUserStore.subscribe(
    (state) => state.isAuthenticated,
    (isAuthenticated) => {
      if (isAuthenticated) {
        const user = useUserStore.getState().user;
        const currentProject = useProjectStore.getState().currentProject;
        
        if (currentProject) {
          useSparkyStore.getState().initializeSparky(currentProject);
        }
      } else {
        useSparkyStore.getState().resetSparky();
      }
    }
  );

  // Sync project changes with Sparky context
  useProjectStore.subscribe(
    (state) => state.currentProject,
    (currentProject) => {
      if (currentProject) {
        useSparkyStore.getState().updateContext({
          currentProject,
          lastAction: 'project_loaded'
        });
      }
    }
  );

  // Track user activity across stores
  useProjectStore.subscribe(
    (state) => state.projects.length,
    (projectCount, previousCount) => {
      if (projectCount > previousCount) {
        useUserStore.getState().trackActivity('project_created');
      }
    }
  );

  // Sync theme changes across the application
  useQuorraStore.subscribe(
    (state) => state.ui.theme,
    (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
    }
  );

  // Auto-save project changes
  useProjectStore.subscribe(
    (state) => state.currentProject?.designData,
    (designData) => {
      if (designData) {
        const userPrefs = useUserStore.getState().preferences;
        if (userPrefs.workspace.autoSave) {
          // Debounced auto-save would be implemented here
          console.log('🔥 Divine auto-save triggered');
        }
      }
    }
  );
};

// ===== STORE SELECTORS =====

/**
 * Convenient selectors for common store combinations
 */
export const useQuorraSelectors = () => ({
  // Get current user and subscription info
  userInfo: () => {
    const user = useUserStore(state => state.user);
    const subscription = useUserStore(state => state.subscription);
    const isAuthenticated = useUserStore(state => state.isAuthenticated);
    return { user, subscription, isAuthenticated };
  },

  // Get current project and editor state
  projectInfo: () => {
    const currentProject = useProjectStore(state => state.currentProject);
    const editorState = useQuorraStore(state => state.editor);
    const isLoading = useProjectStore(state => state.isLoading);
    return { currentProject, editorState, isLoading };
  },

  // Get Sparky conversation and suggestions
  sparkyInfo: () => {
    const conversation = useSparkyStore(state => state.conversation);
    const suggestions = useSparkyStore(state => state.suggestionsQueue);
    const isThinking = useSparkyStore(state => state.isThinking);
    return { conversation, suggestions, isThinking };
  },

  // Get UI state and theme
  uiInfo: () => {
    const theme = useQuorraStore(state => state.ui.theme);
    const activePanel = useQuorraStore(state => state.ui.activePanel);
    const notifications = useQuorraStore(state => state.ui.notifications);
    return { theme, activePanel, notifications };
  }
});

// ===== DIVINE HOOKS =====

/**
 * Hook for accessing the main QUORRA store
 */
export const useQuorra = useQuorraStore;

/**
 * Hook for accessing user store
 */
export const useUser = useUserStore;

/**
 * Hook for accessing project store
 */
export const useProject = useProjectStore;

/**
 * Hook for accessing Sparky store
 */
export const useSparky = useSparkyStore;

/**
 * Hook for divine initialization
 */
export const useDivineInit = () => {
  const initializeApp = useQuorraStore(state => state.initializeApp);
  const isInitialized = useQuorraStore(state => state.app.isInitialized);
  const isLoading = useQuorraStore(state => state.app.isLoading);
  
  return { initializeApp, isInitialized, isLoading };
};

/**
 * Hook for notifications
 */
export const useNotifications = () => {
  const notifications = useQuorraStore(state => state.ui.notifications);
  const addNotification = useQuorraStore(state => state.addNotification);
  const removeNotification = useQuorraStore(state => state.removeNotification);
  
  return { notifications, addNotification, removeNotification };
};

// ===== INITIALIZATION =====

// Set up divine synchronization when module loads
setupDivineSync();

// Initialize app if running in browser
if (typeof window !== 'undefined') {
  // Auto-initialize on first load
  const initializeIfNeeded = async () => {
    const state = useQuorraStore.getState();
    if (!state.app.isInitialized && !state.app.isLoading) {
      try {
        await state.initializeApp();
        console.log('🔥 QUORRA divine initialization complete');
      } catch (error) {
        console.error('⚡ Divine initialization failed:', error);
      }
    }
  };

  // Initialize on next tick to allow all modules to load
  setTimeout(initializeIfNeeded, 0);
}

// ===== EXPORTS =====

export default useQuorraStore;

export {
  useQuorraStore,
  useUserStore,
  useProjectStore,
  useSparkyStore
};

// For TypeScript users, create a separate types file:
// types/store.ts with the type definitions