// C:\Users\Kimberly\quorra\src\store\slices\userSlice.js
// QUORRA User Management Slice
// Divine user state and preferences blessed by the Goddess of Smithing

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const createUserSlice = (set, get) => ({
  // ===== USER STATE =====
  
  // Authentication state
  user: null,
  isAuthenticated: false,
  isLoading: false,
  authError: null,
  
  // Subscription and billing
  subscription: {
    tier: 'ember', // ember, hammer, anvil, foundry
    status: 'active', // active, inactive, canceled, past_due
    currentPeriodEnd: null,
    billingCycle: 'monthly', // monthly, annual
    features: {
      maxProjects: 1,
      teamMembers: 1,
      advancedFeatures: false,
      prioritySupport: false,
      apiAccess: false
    }
  },

  // User preferences and divine settings
  preferences: {
    // Design preferences
    design: {
      defaultColorPalette: 'auto',
      defaultTypography: 'modern',
      defaultLayout: 'clean',
      autoApplyIndustryIntelligence: true,
      sparkyGuidanceLevel: 'active' // active, minimal, disabled
    },
    
    // Workspace preferences
    workspace: {
      theme: 'divine_fire', // divine_fire, sacred_forge, clean_light
      gridSnapping: true,
      showRulers: true,
      autoSave: true,
      autoSaveInterval: 30000, // 30 seconds
      panelLayout: 'default'
    },
    
    // Notification preferences
    notifications: {
      projectUpdates: true,
      sparkyTips: true,
      newFeatures: true,
      billingAlerts: true,
      collaborationInvites: true,
      emailNotifications: true
    },
    
    // Performance preferences
    performance: {
      enableAnimations: true,
      previewQuality: 'high', // low, medium, high
      autoOptimizeImages: true,
      backgroundSync: true
    }
  },

  // User profile and divine craft progress
  profile: {
    displayName: '',
    email: '',
    avatar: null,
    joinedAt: null,
    lastActiveAt: null,
    
    // Divine craftsmanship stats
    divineStats: {
      projectsCreated: 0,
      codeGenerated: 0, // lines of code
      performanceGains: 0, // total KB saved
      sparkyInteractions: 0,
      timeInForge: 0, // minutes spent in editor
      achievementUnlocked: []
    },
    
    // Skill progression
    craftLevel: {
      level: 1,
      experience: 0,
      nextLevelAt: 100,
      skills: {
        design: 0,
        performance: 0,
        collaboration: 0,
        innovation: 0
      }
    }
  },

  // User's divine achievements
  achievements: [
    // Will be populated as user progresses
  ],

  // ===== USER ACTIONS =====

  /**
   * Sign in user with divine blessing
   */
  signIn: async (credentials) => {
    set({ isLoading: true, authError: null });
    
    try {
      // Mock authentication - in real app, would call Supabase auth
      const userData = await authenticateUser(credentials);
      
      const user = {
        id: userData.id,
        email: userData.email,
        displayName: userData.user_metadata?.display_name || userData.email.split('@')[0],
        avatar: userData.user_metadata?.avatar_url || null,
        joinedAt: userData.created_at,
        lastActiveAt: new Date().toISOString()
      };

      // Load user subscription and preferences
      const subscription = await loadUserSubscription(user.id);
      const preferences = await loadUserPreferences(user.id);
      const profile = await loadUserProfile(user.id);

      set({
        user,
        isAuthenticated: true,
        isLoading: false,
        subscription: subscription || get().subscription,
        preferences: { ...get().preferences, ...preferences },
        profile: { ...get().profile, ...profile }
      });

      return user;
    } catch (error) {
      set({
        authError: error.message,
        isLoading: false,
        isAuthenticated: false,
        user: null
      });
      throw error;
    }
  },

  /**
   * Sign up new divine craftsperson
   */
  signUp: async (userData) => {
    set({ isLoading: true, authError: null });
    
    try {
      const newUser = await createUser(userData);
      
      // Initialize divine craftsperson profile
      const profile = {
        displayName: userData.displayName || userData.email.split('@')[0],
        email: userData.email,
        joinedAt: new Date().toISOString(),
        lastActiveAt: new Date().toISOString(),
        divineStats: {
          projectsCreated: 0,
          codeGenerated: 0,
          performanceGains: 0,
          sparkyInteractions: 0,
          timeInForge: 0,
          achievementUnlocked: ['divine_spark'] // First achievement
        },
        craftLevel: {
          level: 1,
          experience: 0,
          nextLevelAt: 100,
          skills: {
            design: 0,
            performance: 0,
            collaboration: 0,
            innovation: 0
          }
        }
      };

      set({
        user: newUser,
        isAuthenticated: true,
        isLoading: false,
        profile: { ...get().profile, ...profile },
        achievements: [
          {
            id: 'divine_spark',
            name: 'Divine Spark',
            description: 'Blessed by Quorra and joined the divine craftspeople',
            unlockedAt: new Date().toISOString(),
            rarity: 'common'
          }
        ]
      });

      return newUser;
    } catch (error) {
      set({
        authError: error.message,
        isLoading: false
      });
      throw error;
    }
  },

  /**
   * Sign out user
   */
  signOut: async () => {
    set({ isLoading: true });
    
    try {
      await signOutUser();
      
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        authError: null,
        subscription: {
          tier: 'ember',
          status: 'active',
          currentPeriodEnd: null,
          billingCycle: 'monthly',
          features: {
            maxProjects: 1,
            teamMembers: 1,
            advancedFeatures: false,
            prioritySupport: false,
            apiAccess: false
          }
        }
      });
    } catch (error) {
      set({ isLoading: false, authError: error.message });
      throw error;
    }
  },

  /**
   * Update user preferences
   */
  updatePreferences: async (newPreferences) => {
    const updatedPreferences = {
      ...get().preferences,
      ...newPreferences
    };

    set({ preferences: updatedPreferences });

    // Save to backend
    if (get().isAuthenticated) {
      try {
        await saveUserPreferences(get().user.id, updatedPreferences);
      } catch (error) {
        console.error('Failed to save preferences:', error);
      }
    }

    return updatedPreferences;
  },

  /**
   * Update user profile
   */
  updateProfile: async (profileUpdates) => {
    const updatedProfile = {
      ...get().profile,
      ...profileUpdates
    };

    set({ profile: updatedProfile });

    if (get().isAuthenticated) {
      try {
        await saveUserProfile(get().user.id, updatedProfile);
      } catch (error) {
        console.error('Failed to save profile:', error);
      }
    }

    return updatedProfile;
  },

  /**
   * Upgrade subscription tier
   */
  upgradeSubscription: async (newTier, billingCycle = 'monthly') => {
    set({ isLoading: true });

    try {
      const newSubscription = await upgradeUserSubscription(
        get().user.id,
        newTier,
        billingCycle
      );

      set({
        subscription: newSubscription,
        isLoading: false
      });

      // Unlock achievement if first upgrade
      if (get().subscription.tier === 'ember' && newTier !== 'ember') {
        get().unlockAchievement('first_upgrade');
      }

      return newSubscription;
    } catch (error) {
      set({ isLoading: false, authError: error.message });
      throw error;
    }
  },

  /**
   * Add divine experience points
   */
  addExperience: (amount, category = 'general') => {
    const { profile } = get();
    const newExperience = profile.craftLevel.experience + amount;
    
    let newLevel = profile.craftLevel.level;
    let nextLevelAt = profile.craftLevel.nextLevelAt;
    
    // Check for level up
    if (newExperience >= nextLevelAt) {
      newLevel += 1;
      nextLevelAt = newLevel * 100; // Simple progression
      
      // Unlock level achievement
      get().unlockAchievement(`level_${newLevel}`);
    }

    const updatedProfile = {
      ...profile,
      craftLevel: {
        ...profile.craftLevel,
        experience: newExperience,
        level: newLevel,
        nextLevelAt
      }
    };

    set({ profile: updatedProfile });
    
    if (get().isAuthenticated) {
      saveUserProfile(get().user.id, updatedProfile).catch(console.error);
    }
  },

  /**
   * Unlock divine achievement
   */
  unlockAchievement: (achievementId) => {
    const { achievements } = get();
    
    // Check if already unlocked
    if (achievements.some(a => a.id === achievementId)) {
      return;
    }

    const achievementData = getAchievementData(achievementId);
    if (!achievementData) return;

    const newAchievement = {
      ...achievementData,
      unlockedAt: new Date().toISOString()
    };

    set({
      achievements: [...achievements, newAchievement]
    });

    // Add experience for achievement
    get().addExperience(achievementData.experience || 10);
  },

  /**
   * Track divine activity
   */
  trackActivity: (activity, metadata = {}) => {
    const { profile } = get();
    
    const updates = {
      lastActiveAt: new Date().toISOString()
    };

    // Update relevant stats
    switch (activity) {
      case 'project_created':
        updates.divineStats = {
          ...profile.divineStats,
          projectsCreated: profile.divineStats.projectsCreated + 1
        };
        get().addExperience(25, 'design');
        break;
        
      case 'code_generated':
        updates.divineStats = {
          ...profile.divineStats,
          codeGenerated: profile.divineStats.codeGenerated + (metadata.linesOfCode || 1)
        };
        get().addExperience(10, 'performance');
        break;
        
      case 'sparky_interaction':
        updates.divineStats = {
          ...profile.divineStats,
          sparkyInteractions: profile.divineStats.sparkyInteractions + 1
        };
        get().addExperience(5, 'innovation');
        break;
        
      case 'time_in_forge':
        updates.divineStats = {
          ...profile.divineStats,
          timeInForge: profile.divineStats.timeInForge + (metadata.minutes || 1)
        };
        break;
    }

    get().updateProfile(updates);
  },

  /**
   * Check if user has feature access
   */
  hasFeatureAccess: (feature) => {
    const { subscription } = get();
    
    switch (feature) {
      case 'unlimited_projects':
        return subscription.tier === 'foundry';
      case 'team_collaboration':
        return ['anvil', 'foundry'].includes(subscription.tier);
      case 'api_access':
        return subscription.tier === 'foundry';
      case 'priority_support':
        return ['anvil', 'foundry'].includes(subscription.tier);
      case 'advanced_css':
        return ['anvil', 'foundry'].includes(subscription.tier);
      default:
        return true; // Basic features available to all
    }
  },

  /**
   * Get project limit for current tier
   */
  getProjectLimit: () => {
    const { subscription } = get();
    
    const limits = {
      ember: 1,
      hammer: 10,
      anvil: 25,
      foundry: Infinity
    };
    
    return limits[subscription.tier] || 1;
  },

  /**
   * Clear auth error
   */
  clearAuthError: () => set({ authError: null }),

  /**
   * Reset user state
   */
  resetUserState: () => {
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      authError: null,
      subscription: {
        tier: 'ember',
        status: 'active',
        currentPeriodEnd: null,
        billingCycle: 'monthly',
        features: {
          maxProjects: 1,
          teamMembers: 1,
          advancedFeatures: false,
          prioritySupport: false,
          apiAccess: false
        }
      },
      achievements: []
    });
  }
});

// ===== HELPER FUNCTIONS =====

/**
 * Mock authentication function
 */
const authenticateUser = async (credentials) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (credentials.email === 'error@test.com') {
    throw new Error('Invalid divine credentials');
  }
  
  return {
    id: 'user_' + Math.random().toString(36).substr(2, 9),
    email: credentials.email,
    created_at: new Date().toISOString(),
    user_metadata: {
      display_name: credentials.displayName || null,
      avatar_url: null
    }
  };
};

/**
 * Create new user
 */
const createUser = async (userData) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    id: 'user_' + Math.random().toString(36).substr(2, 9),
    email: userData.email,
    created_at: new Date().toISOString()
  };
};

/**
 * Sign out user
 */
const signOutUser = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
};

/**
 * Load user subscription
 */
const loadUserSubscription = async (userId) => {
  // Mock subscription loading
  return null; // Will use defaults
};

/**
 * Load user preferences
 */
const loadUserPreferences = async (userId) => {
  // Mock preferences loading
  return {};
};

/**
 * Load user profile
 */
const loadUserProfile = async (userId) => {
  // Mock profile loading
  return {};
};

/**
 * Save user preferences
 */
const saveUserPreferences = async (userId, preferences) => {
  // Mock save operation
  await new Promise(resolve => setTimeout(resolve, 200));
};

/**
 * Save user profile
 */
const saveUserProfile = async (userId, profile) => {
  // Mock save operation
  await new Promise(resolve => setTimeout(resolve, 200));
};

/**
 * Upgrade user subscription
 */
const upgradeUserSubscription = async (userId, tier, billingCycle) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const tierFeatures = {
    ember: {
      maxProjects: 1,
      teamMembers: 1,
      advancedFeatures: false,
      prioritySupport: false,
      apiAccess: false
    },
    hammer: {
      maxProjects: 10,
      teamMembers: 1,
      advancedFeatures: false,
      prioritySupport: false,
      apiAccess: false
    },
    anvil: {
      maxProjects: 25,
      teamMembers: 3,
      advancedFeatures: true,
      prioritySupport: true,
      apiAccess: false
    },
    foundry: {
      maxProjects: Infinity,
      teamMembers: 5,
      advancedFeatures: true,
      prioritySupport: true,
      apiAccess: true
    }
  };

  return {
    tier,
    status: 'active',
    billingCycle,
    currentPeriodEnd: new Date(Date.now() + (billingCycle === 'annual' ? 365 : 30) * 24 * 60 * 60 * 1000).toISOString(),
    features: tierFeatures[tier]
  };
};

/**
 * Get achievement data
 */
const getAchievementData = (achievementId) => {
  const achievements = {
    divine_spark: {
      id: 'divine_spark',
      name: 'Divine Spark',
      description: 'Blessed by Quorra and joined the divine craftspeople',
      rarity: 'common',
      experience: 0
    },
    first_upgrade: {
      id: 'first_upgrade',
      name: 'Sacred Investment',
      description: 'Upgraded to a blessed tier for enhanced divine power',
      rarity: 'uncommon',
      experience: 50
    },
    level_5: {
      id: 'level_5',
      name: 'Apprentice Smith',
      description: 'Reached level 5 in divine craftsmanship',
      rarity: 'rare',
      experience: 100
    }
  };

  return achievements[achievementId];
};

// Create the store slice
export const useUserStore = create(
  devtools(
    persist(createUserSlice, {
      name: 'quorra-user',
      // Only persist essential user data
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        subscription: state.subscription,
        preferences: state.preferences,
        profile: state.profile,
        achievements: state.achievements
      })
    }),
    { name: 'QuorraUserStore' }
  )
);