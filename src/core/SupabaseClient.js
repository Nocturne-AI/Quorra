/**
 * QUORRA SUPABASE CLIENT
 * Divine database connection blessed by the Goddess of Smithing
 * 
 * Features:
 * - Secure database connection
 * - Authentication integration
 * - Real-time subscriptions
 * - File storage access
 * - Row Level Security (RLS)
 */

import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl) {
  throw new Error('🔥 Missing NEXT_PUBLIC_SUPABASE_URL in environment variables');
}

if (!supabaseAnonKey) {
  throw new Error('🔥 Missing NEXT_PUBLIC_SUPABASE_ANON_KEY in environment variables');
}

// Create Supabase client with divine configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Authentication configuration
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    
    // Divine auth settings
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    storageKey: 'quorra-auth-token',
    
    // Redirect URLs for authentication
    redirectTo: typeof window !== 'undefined' ? `${window.location.origin}/auth/callback` : undefined
  },
  
  // Real-time configuration for live updates
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  },
  
  // Database configuration
  db: {
    schema: 'public'
  },
  
  // Global headers
  global: {
    headers: {
      'X-Client-Info': 'quorra-divine-website-builder'
    }
  }
});

/**
 * 🔥 DIVINE DATABASE HELPERS
 */

// User management
export const auth = {
  // Sign up new user
  signUp: async (email, password, metadata = {}) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          divine_blessing_level: 0,
          subscription_tier: 'ember',
          created_with_quorra: true,
          ...metadata
        }
      }
    });
    
    if (error) throw new Error(`🔥 Sign up failed: ${error.message}`);
    return data;
  },

  // Sign in user
  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw new Error(`🔥 Sign in failed: ${error.message}`);
    return data;
  },

  // Sign out user
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(`🔥 Sign out failed: ${error.message}`);
  },

  // Get current user
  getCurrentUser: () => {
    return supabase.auth.getUser();
  },

  // Listen to auth changes
  onAuthStateChange: (callback) => {
    return supabase.auth.onAuthStateChange(callback);
  }
};

// Project management
export const projects = {
  // Create new project
  create: async (projectData) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('🔥 User must be authenticated');

    const { data, error } = await supabase
      .from('projects')
      .insert([{
        user_id: user.id,
        name: projectData.name,
        industry: projectData.industry,
        design_data: projectData.designData || {},
        css_code: projectData.cssCode || '',
        html_code: projectData.htmlCode || '',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) throw new Error(`🔥 Project creation failed: ${error.message}`);
    return data;
  },

  // Get user's projects
  list: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('🔥 User must be authenticated');

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false });

    if (error) throw new Error(`🔥 Failed to fetch projects: ${error.message}`);
    return data || [];
  },

  // Get single project
  get: async (projectId) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('🔥 User must be authenticated');

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', projectId)
      .eq('user_id', user.id)
      .single();

    if (error) throw new Error(`🔥 Project not found: ${error.message}`);
    return data;
  },

  // Update project
  update: async (projectId, updates) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('🔥 User must be authenticated');

    const { data, error } = await supabase
      .from('projects')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', projectId)
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) throw new Error(`🔥 Project update failed: ${error.message}`);
    return data;
  },

  // Delete project
  delete: async (projectId) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('🔥 User must be authenticated');

    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', projectId)
      .eq('user_id', user.id);

    if (error) throw new Error(`🔥 Project deletion failed: ${error.message}`);
    return true;
  }
};

// Sparky memory management
export const sparkyMemories = {
  // Store memory
  store: async (memoryData) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('🔥 User must be authenticated');

    const { data, error } = await supabase
      .from('sparky_memories')
      .insert([{
        user_id: user.id,
        project_id: memoryData.projectId,
        memory_type: memoryData.type,
        content: memoryData.content,
        score: memoryData.score || 0,
        tier: memoryData.tier || 'disposable',
        created_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) throw new Error(`🔥 Memory storage failed: ${error.message}`);
    return data;
  },

  // Get memories for user
  list: async (projectId = null) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('🔥 User must be authenticated');

    let query = supabase
      .from('sparky_memories')
      .select('*')
      .eq('user_id', user.id);

    if (projectId) {
      query = query.eq('project_id', projectId);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) throw new Error(`🔥 Failed to fetch memories: ${error.message}`);
    return data || [];
  },

  // Update memory
  update: async (memoryId, updates) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('🔥 User must be authenticated');

    const { data, error } = await supabase
      .from('sparky_memories')
      .update(updates)
      .eq('id', memoryId)
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) throw new Error(`🔥 Memory update failed: ${error.message}`);
    return data;
  },

  // Delete old memories (for decay engine)
  deleteOld: async (cutoffDate) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('🔥 User must be authenticated');

    const { error } = await supabase
      .from('sparky_memories')
      .delete()
      .eq('user_id', user.id)
      .lt('created_at', cutoffDate.toISOString());

    if (error) throw new Error(`🔥 Memory cleanup failed: ${error.message}`);
    return true;
  }
};

// User preferences management
export const userPreferences = {
  // Get user preferences
  get: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('🔥 User must be authenticated');

    const { data, error } = await supabase
      .from('user_preferences')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
      throw new Error(`🔥 Failed to fetch preferences: ${error.message}`);
    }

    return data || {
      color_preferences: {},
      typography_preferences: {},
      industry_preferences: {},
      sparky_settings: {
        personality_mode: 'helpful',
        suggestion_frequency: 'smart'
      }
    };
  },

  // Save user preferences
  save: async (preferences) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('🔥 User must be authenticated');

    const { data, error } = await supabase
      .from('user_preferences')
      .upsert([{
        user_id: user.id,
        ...preferences,
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) throw new Error(`🔥 Failed to save preferences: ${error.message}`);
    return data;
  }
};

// File storage (for project exports, images, etc.)
export const storage = {
  // Upload file
  upload: async (bucket, filePath, file) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) throw new Error(`🔥 File upload failed: ${error.message}`);
    return data;
  },

  // Download file
  download: async (bucket, filePath) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .download(filePath);

    if (error) throw new Error(`🔥 File download failed: ${error.message}`);
    return data;
  },

  // Get public URL
  getPublicUrl: (bucket, filePath) => {
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return data.publicUrl;
  },

  // Delete file
  delete: async (bucket, filePaths) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .remove(filePaths);

    if (error) throw new Error(`🔥 File deletion failed: ${error.message}`);
    return data;
  }
};

// Real-time subscriptions
export const realtime = {
  // Subscribe to project changes
  subscribeToProject: (projectId, callback) => {
    return supabase
      .channel(`project-${projectId}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'projects',
        filter: `id=eq.${projectId}`
      }, callback)
      .subscribe();
  },

  // Subscribe to user's projects
  subscribeToUserProjects: (userId, callback) => {
    return supabase
      .channel(`user-projects-${userId}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'projects',
        filter: `user_id=eq.${userId}`
      }, callback)
      .subscribe();
  },

  // Unsubscribe from channel
  unsubscribe: (subscription) => {
    return supabase.removeChannel(subscription);
  }
};

// Utility functions
export const utils = {
  // Check if user is authenticated
  isAuthenticated: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return !!user;
  },

  // Get user subscription tier
  getSubscriptionTier: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return 'ember';

    return user.user_metadata?.subscription_tier || 'ember';
  },

  // Update user metadata
  updateUserMetadata: async (metadata) => {
    const { data, error } = await supabase.auth.updateUser({
      data: metadata
    });

    if (error) throw new Error(`🔥 Failed to update user metadata: ${error.message}`);
    return data;
  }
};

// Export default client for direct access
export default supabase;

/**
 * 🔥 USAGE EXAMPLES:
 * 
 * // Authentication
 * import { auth } from './SupabaseClient.js';
 * await auth.signUp('user@example.com', 'password');
 * 
 * // Projects
 * import { projects } from './SupabaseClient.js';
 * const newProject = await projects.create({ name: 'My Site', industry: 'healthcare' });
 * 
 * // Sparky Memories
 * import { sparkyMemories } from './SupabaseClient.js';
 * await sparkyMemories.store({ type: 'design_preference', content: { color: 'blue' } });
 * 
 * // Real-time
 * import { realtime } from './SupabaseClient.js';
 * const subscription = realtime.subscribeToProject(projectId, (payload) => {
 *   console.log('Project updated:', payload);
 * });
 */