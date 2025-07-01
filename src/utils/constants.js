// Application constants for Quorra

// Subscription tiers
export const SUBSCRIPTION_TIERS = {
  EMBER: 'ember',     // Free
  HAMMER: 'hammer',   // $35/month
  ANVIL: 'anvil',     // $59/month  
  FOUNDRY: 'foundry'  // $129/month
}

// Tier limits
export const TIER_LIMITS = {
  [SUBSCRIPTION_TIERS.EMBER]: {
    projects: 1,
    exports: 5,
    storage: 100, // MB
    teamMembers: 1
  },
  [SUBSCRIPTION_TIERS.HAMMER]: {
    projects: 10,
    exports: -1, // unlimited
    storage: 1000, // MB
    teamMembers: 1
  },
  [SUBSCRIPTION_TIERS.ANVIL]: {
    projects: 25,
    exports: -1, // unlimited
    storage: 5000, // MB
    teamMembers: 1
  },
  [SUBSCRIPTION_TIERS.FOUNDRY]: {
    projects: -1, // unlimited
    exports: -1, // unlimited
    storage: -1, // unlimited
    teamMembers: 5
  }
}

// Industry categories
export const INDUSTRIES = {
  ECOMMERCE: 'ecommerce',
  HEALTHCARE: 'healthcare',
  RESTAURANT: 'restaurant',
  TECHNOLOGY: 'technology',
  FINANCE: 'finance',
  REAL_ESTATE: 'real_estate',
  NON_PROFIT: 'non_profit',
  EDUCATION: 'education',
  CREATIVE: 'creative',
  LOCAL_SERVICE: 'local_service',
  PROFESSIONAL: 'professional',
  FITNESS: 'fitness',
  EVENT_PLANNING: 'event_planning',
  CONSULTING: 'consulting',
  MANUFACTURING: 'manufacturing',
  OTHER: 'other'
}

// Memory tiers for Sparky
export const MEMORY_TIERS = {
  PERMANENT: 'permanent',
  LONG_TERM: 'long_term',
  MEDIUM_TERM: 'medium_term',
  DISPOSABLE: 'disposable'
}

// Color palettes
export const QUORRA_COLORS = {
  // Divine fire gradients
  DIVINE_FLAME: {
    from: '#FF8C42',
    to: '#FF6B35'
  },
  MOLTEN_BRONZE: {
    from: '#CD7F32',
    to: '#B8860B'
  },
  SACRED_COPPER: {
    from: '#E77C47',
    to: '#D2691E'
  },
  
  // Supporting colors
  HEATED_STEEL: '#4A4A4A',
  COOL_IRON: '#6C757D',
  FORGE_GLOW: '#FFF8DC',
  EMBER_SPARK: '#FFD700',
  DEEP_FORGE: '#1A1A1A',
  ASH_GRAY: '#F5F5F5'
}

// API endpoints
export const API_ENDPOINTS = {
  PROJECTS: '/api/projects',
  SPARKY: '/api/sparky',
  GENERATE: '/api/generate',
  AUTH: '/api/auth'
}

// File size limits (in bytes)
export const FILE_LIMITS = {
  IMAGE_MAX_SIZE: 5 * 1024 * 1024, // 5MB
  PROJECT_MAX_SIZE: 50 * 1024 * 1024, // 50MB
  EXPORT_MAX_SIZE: 100 * 1024 * 1024 // 100MB
}

// Supported file types
export const SUPPORTED_FILES = {
  IMAGES: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'],
  EXPORTS: ['html', 'css', 'zip']
}

// Default values
export const DEFAULTS = {
  PROJECT_NAME: 'Untitled Project',
  THEME: 'light',
  LANGUAGE: 'en'
}

// Error messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  AUTH_REQUIRED: 'Please sign in to continue.',
  TIER_LIMIT: 'You have reached your plan limit. Please upgrade.',
  FILE_TOO_LARGE: 'File is too large.',
  INVALID_FILE_TYPE: 'Invalid file type.',
  PROJECT_NOT_FOUND: 'Project not found.',
  SAVE_FAILED: 'Failed to save project.',
  EXPORT_FAILED: 'Failed to export project.'
}

// Success messages
export const SUCCESS_MESSAGES = {
  PROJECT_SAVED: 'Project saved successfully!',
  PROJECT_EXPORTED: 'Project exported successfully!',
  ACCOUNT_CREATED: 'Account created successfully!',
  SIGNED_IN: 'Signed in successfully!',
  SIGNED_OUT: 'Signed out successfully!'
}

export default {
  SUBSCRIPTION_TIERS,
  TIER_LIMITS,
  INDUSTRIES,
  MEMORY_TIERS,
  QUORRA_COLORS,
  API_ENDPOINTS,
  FILE_LIMITS,
  SUPPORTED_FILES,
  DEFAULTS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES
}