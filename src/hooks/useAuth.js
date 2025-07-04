// ============================================================================
// hooks/useAuth.js - Authentication Hook for QUORRA
// Sacred authentication blessed by the Goddess of Smithing
// ============================================================================

import { useState, useEffect, useContext, createContext } from 'react'
import { supabase } from '../utils/supabase'
import { database } from '../utils/database'

// Create Auth Context
const AuthContext = createContext({})

// Auth Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    let mounted = true

    // Get initial session
    async function getInitialSession() {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (mounted) {
          if (error) {
            console.error('Error getting session:', error)
          } else {
            setSession(session)
            setUser(session?.user || null)
            
            // Get user profile if authenticated
            if (session?.user) {
              await loadUserProfile(session.user.id)
            }
          }
          setLoading(false)
          setInitialized(true)
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
        if (mounted) {
          setLoading(false)
          setInitialized(true)
        }
      }
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return

        console.log('Auth event:', event, session?.user?.email)
        
        setSession(session)
        setUser(session?.user || null)
        
        if (session?.user) {
          await loadUserProfile(session.user.id)
          // Update user activity
          database.updateUserActivity(session.user.id)
        } else {
          setProfile(null)
        }
        
        if (initialized) {
          setLoading(false)
        }
      }
    )

    return () => {
      mounted = false
      subscription?.unsubscribe()
    }
  }, [initialized])

  // Load user profile from database
  async function loadUserProfile(userId) {
    try {
      const { profile: userProfile, error } = await database.getUserProfile(userId)
      
      if (error) {
        console.error('Error loading user profile:', error)
        return
      }
      
      setProfile(userProfile)
    } catch (error) {
      console.error('Load user profile error:', error)
    }
  }

  // Sign up new user
  async function signUp(email, password, userData = {}) {
    try {
      setLoading(true)
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: userData.displayName || email.split('@')[0],
            ...userData
          }
        }
      })
      
      if (error) throw error
      
      return { user: data.user, error: null }
    } catch (error) {
      console.error('Sign up error:', error)
      return { user: null, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  // Sign in existing user
  async function signIn(email, password) {
    try {
      setLoading(true)
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      
      if (error) throw error
      
      return { user: data.user, session: data.session, error: null }
    } catch (error) {
      console.error('Sign in error:', error)
      return { user: null, session: null, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  // Sign out user
  async function signOut() {
    try {
      setLoading(true)
      
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      // Clear local state
      setUser(null)
      setSession(null)
      setProfile(null)
      
      return { error: null }
    } catch (error) {
      console.error('Sign out error:', error)
      return { error: error.message }
    } finally {
      setLoading(false)
    }
  }

  // Reset password
  async function resetPassword(email) {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      })
      
      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('Reset password error:', error)
      return { error: error.message }
    }
  }

  // Update password
  async function updatePassword(newPassword) {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      })
      
      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('Update password error:', error)
      return { error: error.message }
    }
  }

  // Update user profile
  async function updateProfile(updates) {
    try {
      if (!user) throw new Error('No user logged in')
      
      setLoading(true)
      
      // Update auth metadata if needed
      const authUpdates = {}
      if (updates.displayName) {
        authUpdates.data = { display_name: updates.displayName }
      }
      
      if (Object.keys(authUpdates).length > 0) {
        const { error: authError } = await supabase.auth.updateUser(authUpdates)
        if (authError) throw authError
      }
      
      // Update database profile
      const { profile: updatedProfile, error } = await database.updateUserProfile(
        user.id,
        updates
      )
      
      if (error) throw new Error(error)
      
      setProfile(updatedProfile)
      return { profile: updatedProfile, error: null }
    } catch (error) {
      console.error('Update profile error:', error)
      return { profile: null, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  // Get subscription tier
  function getSubscriptionTier() {
    return profile?.subscription_tier || 'ember'
  }

  // Check if user has access to feature based on tier
  function hasFeatureAccess(feature) {
    const tier = getSubscriptionTier()
    const tierLevels = {
      'ember': 1,
      'hammer': 2,
      'anvil': 3,
      'foundry': 4
    }
    
    const featureRequirements = {
      'unlimited_projects': 4, // foundry only
      'advanced_analytics': 3, // anvil and above
      'custom_domains': 3,     // anvil and above
      'team_collaboration': 4, // foundry only
      'api_access': 4,         // foundry only
      'priority_support': 2,   // hammer and above
      'advanced_export': 3     // anvil and above
    }
    
    const userLevel = tierLevels[tier] || 1
    const requiredLevel = featureRequirements[feature] || 1
    
    return userLevel >= requiredLevel
  }

  // Get project limits based on tier
  function getProjectLimits() {
    const tier = getSubscriptionTier()
    const limits = {
      'ember': { max_projects: 1, max_exports: 5 },
      'hammer': { max_projects: 10, max_exports: 50 },
      'anvil': { max_projects: 25, max_exports: 150 },
      'foundry': { max_projects: -1, max_exports: -1 } // unlimited
    }
    
    return limits[tier] || limits['ember']
  }

  // Refresh user data
  async function refreshUser() {
    if (!user) return
    
    try {
      await loadUserProfile(user.id)
    } catch (error) {
      console.error('Refresh user error:', error)
    }
  }

  const value = {
    // State
    user,
    session,
    profile,
    loading,
    initialized,
    isAuthenticated: !!user,
    
    // Methods
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
    updateProfile,
    refreshUser,
    
    // Subscription helpers
    getSubscriptionTier,
    hasFeatureAccess,
    getProjectLimits,
    
    // Convenience flags
    isEmber: getSubscriptionTier() === 'ember',
    isHammer: getSubscriptionTier() === 'hammer',
    isAnvil: getSubscriptionTier() === 'anvil',
    isFoundry: getSubscriptionTier() === 'foundry',
    isPaid: ['hammer', 'anvil', 'foundry'].includes(getSubscriptionTier())
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext)
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  
  return context
}

// Higher-order component for protected routes
export function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { isAuthenticated, loading } = useAuth()
    
    if (loading) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #71717a, #27272a, #3f3f46)',
          color: 'white'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid transparent',
              borderTop: '3px solid #CA8A04',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 16px'
            }}></div>
            <p>Channeling divine fire...</p>
          </div>
        </div>
      )
    }
    
    if (!isAuthenticated) {
      // Redirect to login
      if (typeof window !== 'undefined') {
        window.location.href = '/login'
      }
      return null
    }
    
    return <Component {...props} />
  }
}

// Hook for subscription-based features
export function useSubscription() {
  const { 
    getSubscriptionTier, 
    hasFeatureAccess, 
    getProjectLimits,
    profile 
  } = useAuth()
  
  return {
    tier: getSubscriptionTier(),
    hasFeatureAccess,
    limits: getProjectLimits(),
    subscription: {
      tier: getSubscriptionTier(),
      status: profile?.subscription_status || 'active',
      periodEnd: profile?.subscription_period_end,
      isActive: profile?.subscription_status === 'active'
    }
  }
}