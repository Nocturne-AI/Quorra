import { supabase } from './supabase'

// Auth state management
export const authUtils = {
  // Check if user is authenticated
  async isAuthenticated() {
    try {
      const { data: { user }, error } = await supabase.auth.getUser()
      return !error && user !== null
    } catch (error) {
      console.error('Error checking auth status:', error)
      return false
    }
  },

  // Get current user
  async getCurrentUser() {
    try {
      const { data: { user }, error } = await supabase.auth.getUser()
      if (error) throw error
      return user
    } catch (error) {
      console.error('Error getting current user:', error)
      return null
    }
  },

  // Get current session
  async getCurrentSession() {
    try {
      const { data: { session }, error } = await supabase.auth.getSession()
      if (error) throw error
      return session
    } catch (error) {
      console.error('Error getting current session:', error)
      return null
    }
  },

  // Sign up new user
  async signUp(email, password, metadata = {}) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata
        }
      })
      
      if (error) throw error
      return { user: data.user, error: null }
    } catch (error) {
      console.error('Error signing up:', error)
      return { user: null, error: error.message }
    }
  },

  // Sign in user
  async signIn(email, password) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      
      if (error) throw error
      return { user: data.user, session: data.session, error: null }
    } catch (error) {
      console.error('Error signing in:', error)
      return { user: null, session: null, error: error.message }
    }
  },

  // Sign out user
  async signOut() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('Error signing out:', error)
      return { error: error.message }
    }
  },

  // Reset password
  async resetPassword(email) {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      })
      
      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('Error resetting password:', error)
      return { error: error.message }
    }
  },

  // Update password
  async updatePassword(newPassword) {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      })
      
      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('Error updating password:', error)
      return { error: error.message }
    }
  },

  // Update user metadata
  async updateUserMetadata(metadata) {
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: metadata
      })
      
      if (error) throw error
      return { user: data.user, error: null }
    } catch (error) {
      console.error('Error updating user metadata:', error)
      return { user: null, error: error.message }
    }
  },

  // Listen for auth state changes
  onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange((event, session) => {
      callback(event, session)
    })
  }
}

// Helper to get user subscription tier
export const getUserTier = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('subscription_tier')
      .eq('id', userId)
      .single()
    
    if (error) throw error
    return data?.subscription_tier || 'ember'
  } catch (error) {
    console.error('Error getting user tier:', error)
    return 'ember' // Default to free tier
  }
}

// Helper to check if user can perform action based on tier
export const canPerformAction = async (userId, action, currentCount = 0) => {
  const tier = await getUserTier(userId)
  const limits = {
    ember: { projects: 1, exports: 5 },
    hammer: { projects: 10, exports: -1 },
    anvil: { projects: 25, exports: -1 },
    foundry: { projects: -1, exports: -1 }
  }
  
  const tierLimits = limits[tier] || limits.ember
  const limit = tierLimits[action]
  
  // -1 means unlimited
  if (limit === -1) return true
  
  return currentCount < limit
}

export default authUtils