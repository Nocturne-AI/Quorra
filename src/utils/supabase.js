import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Auth helpers
export const auth = {
  async signUp(email, password) {
    return await supabase.auth.signUp({ email, password })
  },

  async signIn(email, password) {
    return await supabase.auth.signInWithPassword({ email, password })
  },

  async signOut() {
    return await supabase.auth.signOut()
  },

  async getUser() {
    return await supabase.auth.getUser()
  },

  async getSession() {
    return await supabase.auth.getSession()
  }
}

// Database helpers
export const database = {
  // Projects
  async getProjects(userId) {
    return await supabase
      .from('projects')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
  },

  async createProject(projectData) {
    return await supabase
      .from('projects')
      .insert(projectData)
      .select()
      .single()
  },

  async updateProject(projectId, updates) {
    return await supabase
      .from('projects')
      .update(updates)
      .eq('id', projectId)
      .select()
      .single()
  },

  async deleteProject(projectId) {
    return await supabase
      .from('projects')
      .delete()
      .eq('id', projectId)
  },

  // Sparky memories
  async getMemories(userId) {
    return await supabase
      .from('sparky_memories')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
  },

  async createMemory(memoryData) {
    return await supabase
      .from('sparky_memories')
      .insert(memoryData)
      .select()
      .single()
  },

  async updateMemory(memoryId, updates) {
    return await supabase
      .from('sparky_memories')
      .update(updates)
      .eq('id', memoryId)
      .select()
      .single()
  },

  // User preferences
  async getUserPreferences(userId) {
    return await supabase
      .from('user_preferences')
      .select('*')
      .eq('user_id', userId)
      .single()
  },

  async updateUserPreferences(userId, preferences) {
    return await supabase
      .from('user_preferences')
      .upsert({ user_id: userId, ...preferences })
      .select()
      .single()
  }
}

// Export default client for direct access
export default supabase