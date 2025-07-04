// ============================================================================
// utils/database.js - Database Operations for QUORRA
// Sacred database operations blessed by the Goddess of Smithing
// ============================================================================

import { supabase } from './supabase'

export const database = {
  // ========== USERS ==========
  async getUserProfile(userId) {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single()
      
      if (error) throw error
      return { profile: data, error: null }
    } catch (error) {
      console.error('Get user profile error:', error)
      return { profile: null, error: error.message }
    }
  },

  async updateUserProfile(userId, updates) {
    try {
      const { data, error } = await supabase
        .from('users')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId)
        .select()
        .single()
      
      if (error) throw error
      return { profile: data, error: null }
    } catch (error) {
      console.error('Update user profile error:', error)
      return { profile: null, error: error.message }
    }
  },

  async updateUserActivity(userId) {
    try {
      const { error } = await supabase
        .from('users')
        .update({ last_active: new Date().toISOString() })
        .eq('id', userId)
      
      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('Update user activity error:', error)
      return { error: error.message }
    }
  },

  // ========== PROJECTS ==========
  async getUserProjects(userId) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', userId)
        .order('updated_at', { ascending: false })
      
      if (error) throw error
      return { projects: data || [], error: null }
    } catch (error) {
      console.error('Get user projects error:', error)
      return { projects: [], error: error.message }
    }
  },

  async getProject(projectId) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', projectId)
        .single()
      
      if (error) throw error
      return { project: data, error: null }
    } catch (error) {
      console.error('Get project error:', error)
      return { project: null, error: error.message }
    }
  },

  async createProject(userId, projectData) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert({
          user_id: userId,
          name: projectData.name,
          industry: projectData.industry,
          design_data: projectData.design_data || {},
          css_code: projectData.css_code || '',
          html_code: projectData.html_code || '',
          meta_title: projectData.meta_title || projectData.name,
          meta_description: projectData.meta_description || `A ${projectData.industry} website created with QUORRA`,
          status: 'draft'
        })
        .select()
        .single()
      
      if (error) throw error
      
      // Update user project count
      await this.incrementUserProjectCount(userId)
      
      return { project: data, error: null }
    } catch (error) {
      console.error('Create project error:', error)
      return { project: null, error: error.message }
    }
  },

  async updateProject(projectId, updates) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', projectId)
        .select()
        .single()
      
      if (error) throw error
      return { project: data, error: null }
    } catch (error) {
      console.error('Update project error:', error)
      return { project: null, error: error.message }
    }
  },

  async publishProject(projectId) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .update({
          status: 'published',
          published_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('id', projectId)
        .select()
        .single()
      
      if (error) throw error
      return { project: data, error: null }
    } catch (error) {
      console.error('Publish project error:', error)
      return { project: null, error: error.message }
    }
  },

  async deleteProject(projectId) {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', projectId)
      
      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('Delete project error:', error)
      return { error: error.message }
    }
  },

  async incrementUserProjectCount(userId) {
    try {
      const { error } = await supabase.rpc('increment_project_count', {
        user_id: userId
      })
      
      if (error) throw error
      return { error: null }
    } catch (error) {
      // Fallback to manual increment if RPC doesn't exist
      try {
        const { data: user } = await supabase
          .from('users')
          .select('projects_created')
          .eq('id', userId)
          .single()
        
        if (user) {
          await supabase
            .from('users')
            .update({ projects_created: (user.projects_created || 0) + 1 })
            .eq('id', userId)
        }
      } catch (fallbackError) {
        console.error('Increment project count fallback error:', fallbackError)
      }
      return { error: null }
    }
  },

  // ========== SPARKY MEMORIES ==========
  async getSparkyMemories(userId, options = {}) {
    try {
      const {
        limit = 100,
        memoryType = null,
        tier = null,
        minScore = null
      } = options

      let query = supabase
        .from('sparky_memories')
        .select('*')
        .eq('user_id', userId)
        .eq('marked_for_deletion', false)
        .order('current_score', { ascending: false })
        .limit(limit)

      if (memoryType) {
        query = query.eq('memory_type', memoryType)
      }
      
      if (tier) {
        query = query.eq('tier', tier)
      }
      
      if (minScore !== null) {
        query = query.gte('current_score', minScore)
      }

      const { data, error } = await query
      
      if (error) throw error
      return { memories: data || [], error: null }
    } catch (error) {
      console.error('Get Sparky memories error:', error)
      return { memories: [], error: error.message }
    }
  },

  async createSparkyMemory(userId, memoryData) {
    try {
      const tier = this.calculateMemoryTier(memoryData.original_score || 0)
      
      const { data, error } = await supabase
        .from('sparky_memories')
        .insert({
          user_id: userId,
          memory_type: memoryData.memory_type,
          tier: tier,
          content: memoryData.content,
          context: memoryData.context || {},
          original_score: memoryData.original_score || 0,
          current_score: memoryData.original_score || 0,
          signals: memoryData.signals || [],
          project_id: memoryData.project_id || null
        })
        .select()
        .single()
      
      if (error) throw error
      return { memory: data, error: null }
    } catch (error) {
      console.error('Create Sparky memory error:', error)
      return { memory: null, error: error.message }
    }
  },

  async accessSparkyMemory(memoryId) {
    try {
      const { data, error } = await supabase
        .from('sparky_memories')
        .update({
          last_accessed: new Date().toISOString(),
          access_count: supabase.raw('access_count + 1')
        })
        .eq('id', memoryId)
        .select()
        .single()
      
      if (error) throw error
      return { memory: data, error: null }
    } catch (error) {
      console.error('Access Sparky memory error:', error)
      return { memory: null, error: error.message }
    }
  },

  async reinforceSparkyMemory(memoryId, reinforcementAmount = 0.5) {
    try {
      const { data, error } = await supabase
        .from('sparky_memories')
        .update({
          current_score: supabase.raw(`current_score + ${reinforcementAmount}`),
          last_reinforced: new Date().toISOString(),
          reinforcement_count: supabase.raw('reinforcement_count + 1')
        })
        .eq('id', memoryId)
        .select()
        .single()
      
      if (error) throw error
      
      // Update tier if score changed significantly
      const newTier = this.calculateMemoryTier(data.current_score)
      if (newTier !== data.tier) {
        await supabase
          .from('sparky_memories')
          .update({ tier: newTier })
          .eq('id', memoryId)
      }
      
      return { memory: data, error: null }
    } catch (error) {
      console.error('Reinforce Sparky memory error:', error)
      return { memory: null, error: error.message }
    }
  },

  async decaySparkyMemories(userId) {
    try {
      // This would typically be run by a cron job
      const { data: memories, error: fetchError } = await supabase
        .from('sparky_memories')
        .select('*')
        .eq('user_id', userId)
        .eq('marked_for_deletion', false)
      
      if (fetchError) throw fetchError
      
      const updates = []
      const currentTime = new Date()
      
      for (const memory of memories || []) {
        const daysSinceLastAccess = Math.floor(
          (currentTime - new Date(memory.last_accessed)) / (1000 * 60 * 60 * 24)
        )
        
        if (daysSinceLastAccess > 7) {
          const decayAmount = this.calculateDecayAmount(memory.tier, daysSinceLastAccess)
          const newScore = Math.max(memory.current_score - decayAmount, -5)
          
          updates.push({
            id: memory.id,
            current_score: newScore,
            tier: this.calculateMemoryTier(newScore),
            marked_for_deletion: newScore <= -5
          })
        }
      }
      
      if (updates.length > 0) {
        const { error: updateError } = await supabase
          .from('sparky_memories')
          .upsert(updates)
        
        if (updateError) throw updateError
      }
      
      return { updated: updates.length, error: null }
    } catch (error) {
      console.error('Decay Sparky memories error:', error)
      return { updated: 0, error: error.message }
    }
  },

  calculateMemoryTier(score) {
    if (score >= 8) return 'PERMANENT'
    if (score >= 5) return 'LONG_TERM'
    if (score >= 2) return 'MEDIUM_TERM'
    return 'DISPOSABLE'
  },

  calculateDecayAmount(tier, daysSinceAccess) {
    const decayRates = {
      'PERMANENT': 0,
      'LONG_TERM': 0.1,
      'MEDIUM_TERM': 0.3,
      'DISPOSABLE': 1.0
    }
    
    const weeksSinceAccess = daysSinceAccess / 7
    return (decayRates[tier] || 0.3) * weeksSinceAccess
  },

  // ========== USER PREFERENCES ==========
  async getUserPreferences(userId) {
    try {
      const { data, error } = await supabase
        .from('user_preferences')
        .select('*')
        .eq('user_id', userId)
        .single()
      
      if (error && error.code === 'PGRST116') {
        // No preferences found, create default ones
        return await this.createDefaultUserPreferences(userId)
      }
      
      if (error) throw error
      return { preferences: data, error: null }
    } catch (error) {
      console.error('Get user preferences error:', error)
      return { preferences: null, error: error.message }
    }
  },

  async createDefaultUserPreferences(userId) {
    try {
      const defaultPreferences = {
        user_id: userId,
        preferred_color_palette: 'sacred_bronze',
        color_prefs: {
          primary: '#CA8A04',
          secondary: '#FBBF24',
          accent: '#92400E'
        },
        preferred_font_style: 'professional',
        typography_prefs: {
          heading: 'Cinzel',
          body: 'Georgia',
          accent: 'serif'
        },
        preferred_editor_layout: 'default',
        auto_save_enabled: true,
        sparky_guidance_level: 'helpful',
        email_notifications: true,
        sparky_tips_enabled: true,
        marketing_emails: false
      }
      
      const { data, error } = await supabase
        .from('user_preferences')
        .insert(defaultPreferences)
        .select()
        .single()
      
      if (error) throw error
      return { preferences: data, error: null }
    } catch (error) {
      console.error('Create default user preferences error:', error)
      return { preferences: null, error: error.message }
    }
  },

  async updateUserPreferences(userId, updates) {
    try {
      const { data, error } = await supabase
        .from('user_preferences')
        .upsert({
          user_id: userId,
          ...updates,
          updated_at: new Date().toISOString()
        })
        .select()
        .single()
      
      if (error) throw error
      return { preferences: data, error: null }
    } catch (error) {
      console.error('Update user preferences error:', error)
      return { preferences: null, error: error.message }
    }
  },

  // ========== ANALYTICS ==========
  async updateProjectAnalytics(projectId, analyticsData) {
    try {
      const updates = {}
      
      if (analyticsData.page_views !== undefined) {
        updates.page_views = analyticsData.page_views
      }
      
      if (analyticsData.unique_visitors !== undefined) {
        updates.unique_visitors = analyticsData.unique_visitors
      }
      
      if (analyticsData.conversion_rate !== undefined) {
        updates.conversion_rate = analyticsData.conversion_rate
      }
      
      const { data, error } = await supabase
        .from('projects')
        .update(updates)
        .eq('id', projectId)
        .select()
        .single()
      
      if (error) throw error
      return { project: data, error: null }
    } catch (error) {
      console.error('Update project analytics error:', error)
      return { project: null, error: error.message }
    }
  },

  // ========== UTILITY FUNCTIONS ==========
  async searchProjects(userId, searchTerm, filters = {}) {
    try {
      let query = supabase
        .from('projects')
        .select('*')
        .eq('user_id', userId)
      
      if (searchTerm) {
        query = query.or(`name.ilike.%${searchTerm}%,industry.ilike.%${searchTerm}%`)
      }
      
      if (filters.industry) {
        query = query.eq('industry', filters.industry)
      }
      
      if (filters.status) {
        query = query.eq('status', filters.status)
      }
      
      const { data, error } = await query.order('updated_at', { ascending: false })
      
      if (error) throw error
      return { projects: data || [], error: null }
    } catch (error) {
      console.error('Search projects error:', error)
      return { projects: [], error: error.message }
    }
  },

  async getProjectsByIndustry(userId, industry) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', userId)
        .eq('industry', industry)
        .order('updated_at', { ascending: false })
      
      if (error) throw error
      return { projects: data || [], error: null }
    } catch (error) {
      console.error('Get projects by industry error:', error)
      return { projects: [], error: error.message }
    }
  }
}