// Mock user profiles for QUORRA testing

console.log('👥 QUORRA User Profiles loaded - Divine craftspeople ready for testing');

export const userProfiles = {
  // Healthcare professionals
  healthcare_professional_experienced: {
    id: 'healthcare_pro_1',
    industry: 'healthcare',
    experience: 'expert',
    preferences: {
      colors: ['trust_blues', 'calming_greens', 'clean_whites'],
      typography: 'professional_serif',
      personality: 'authoritative_caring'
    },
    context: {
      businessType: 'medical_practice',
      targetPatients: 'all_ages',
      specialization: 'family_medicine'
    }
  },

  healthcare_beginner: {
    id: 'healthcare_new_1',
    industry: 'healthcare',
    experience: 'beginner',
    preferences: {
      colors: ['soft_blues', 'warm_grays'],
      typography: 'friendly_sans',
      personality: 'approachable_professional'
    },
    context: {
      businessType: 'wellness_center',
      targetPatients: 'wellness_focused',
      specialization: 'holistic_health'
    }
  },

  // Restaurant owners
  restaurant_owner_casual: {
    id: 'restaurant_casual_1',
    industry: 'restaurant',
    experience: 'intermediate',
    preferences: {
      colors: ['warm_earth_tones', 'appetite_oranges', 'friendly_yellows'],
      typography: 'casual_friendly',
      personality: 'welcoming_energetic'
    },
    context: {
      restaurantType: 'casual_dining',
      cuisine: 'american_comfort',
      atmosphere: 'family_friendly'
    }
  },

  restaurant_owner_fine_dining: {
    id: 'restaurant_fine_1',
    industry: 'restaurant',
    experience: 'expert',
    preferences: {
      colors: ['elegant_blacks', 'gold_accents', 'deep_wines'],
      typography: 'elegant_serif',
      personality: 'sophisticated_refined'
    },
    context: {
      restaurantType: 'fine_dining',
      cuisine: 'french_contemporary',
      atmosphere: 'upscale_intimate'
    }
  },

  // Technology professionals
  tech_startup_founder: {
    id: 'tech_startup_1',
    industry: 'technology',
    experience: 'expert',
    preferences: {
      colors: ['innovation_blues', 'energy_purples', 'clean_whites'],
      typography: 'modern_sans',
      personality: 'innovative_confident'
    },
    context: {
      businessType: 'saas_startup',
      targetAudience: 'developers',
      productFocus: 'developer_tools'
    }
  },

  tech_consultant_freelancer: {
    id: 'tech_freelance_1',
    industry: 'technology',
    experience: 'intermediate',
    preferences: {
      colors: ['professional_blues', 'trust_grays'],
      typography: 'clean_modern',
      personality: 'reliable_expert'
    },
    context: {
      businessType: 'consulting',
      targetAudience: 'small_businesses',
      servicesFocus: 'web_development'
    }
  },

  // Creative professionals
  creative_designer_portfolio: {
    id: 'creative_designer_1',
    industry: 'creative',
    experience: 'expert',
    preferences: {
      colors: ['bold_statements', 'creative_palettes', 'artistic_expression'],
      typography: 'expressive_mixed',
      personality: 'artistic_bold'
    },
    context: {
      creativeType: 'graphic_design',
      targetClients: 'agencies_brands',
      styleApproach: 'modern_bold'
    }
  },

  creative_photographer: {
    id: 'creative_photo_1',
    industry: 'creative',
    experience: 'intermediate',
    preferences: {
      colors: ['gallery_whites', 'subtle_grays', 'photo_focused'],
      typography: 'minimal_elegant',
      personality: 'artistic_professional'
    },
    context: {
      creativeType: 'photography',
      targetClients: 'weddings_portraits',
      styleApproach: 'clean_minimal'
    }
  },

  // Finance professionals
  financial_advisor: {
    id: 'finance_advisor_1',
    industry: 'finance',
    experience: 'expert',
    preferences: {
      colors: ['trust_blues', 'stability_grays', 'prosperity_greens'],
      typography: 'traditional_serif',
      personality: 'trustworthy_authoritative'
    },
    context: {
      serviceType: 'financial_planning',
      targetClients: 'high_net_worth',
      specialization: 'retirement_planning'
    }
  },

  // Local service providers
  local_plumber: {
    id: 'local_plumber_1',
    industry: 'local_service',
    experience: 'beginner',
    preferences: {
      colors: ['reliable_blues', 'trust_building'],
      typography: 'clear_readable',
      personality: 'dependable_friendly'
    },
    context: {
      serviceType: 'plumbing',
      serviceArea: 'canyon_lake_tx',
      businessModel: 'emergency_scheduled'
    }
  },

  local_landscaper: {
    id: 'local_landscaper_1',
    industry: 'local_service',
    experience: 'intermediate',
    preferences: {
      colors: ['nature_greens', 'earth_browns', 'sky_blues'],
      typography: 'outdoor_friendly',
      personality: 'nature_loving_reliable'
    },
    context: {
      serviceType: 'landscaping',
      serviceArea: 'central_texas',
      specialization: 'drought_resistant'
    }
  },

  // E-commerce entrepreneurs
  ecommerce_fashion: {
    id: 'ecommerce_fashion_1',
    industry: 'ecommerce',
    experience: 'intermediate',
    preferences: {
      colors: ['fashion_forward', 'trendy_palettes'],
      typography: 'modern_stylish',
      personality: 'trendy_accessible'
    },
    context: {
      productType: 'womens_fashion',
      targetDemo: 'millennial_women',
      pricePoint: 'affordable_trendy'
    }
  },

  ecommerce_handmade: {
    id: 'ecommerce_handmade_1',
    industry: 'ecommerce',
    experience: 'beginner',
    preferences: {
      colors: ['artisan_earth_tones', 'handcraft_warmth'],
      typography: 'handcrafted_feel',
      personality: 'authentic_personal'
    },
    context: {
      productType: 'handmade_crafts',
      targetDemo: 'conscious_consumers',
      pricePoint: 'premium_artisan'
    }
  }
};

// Profile helper functions
export const getProfileByIndustry = (industry) => {
  return Object.values(userProfiles).filter(profile => profile.industry === industry);
};

export const getProfileByExperience = (experience) => {
  return Object.values(userProfiles).filter(profile => profile.experience === experience);
};

export const getRandomProfile = () => {
  const profiles = Object.values(userProfiles);
  return profiles[Math.floor(Math.random() * profiles.length)];
};

export const getProfileById = (id) => {
  return Object.values(userProfiles).find(profile => profile.id === id);
};

// Test data generators
export const generateTestContext = (profileId) => {
  const profile = getProfileById(profileId);
  if (!profile) return null;

  return {
    industry: profile.industry,
    userExperience: profile.experience,
    preferences: profile.preferences,
    context: profile.context,
    personality: profile.preferences.personality
  };
};

export const generateDesignContext = (profileId, projectPhase = 'color_selection') => {
  const profile = getProfileById(profileId);
  if (!profile) return null;

  return {
    industry: profile.industry,
    userExperience: profile.experience,
    projectPhase,
    currentPreferences: profile.preferences,
    targetAudience: profile.context
  };
};

// Mock interaction patterns
export const mockUserInteractions = {
  corrections: [
    {
      profile: 'healthcare_professional_experienced',
      original: 'Use bright red for emergency button',
      corrected: 'Actually, use calming blue - red creates anxiety',
      reasoning: 'Medical expertise about patient psychology'
    },
    {
      profile: 'restaurant_owner_casual',
      original: 'Use cool blues for dining area',
      corrected: 'Warm oranges work better for appetite',
      reasoning: 'Restaurant industry knowledge'
    }
  ],

  preferences: [
    {
      profile: 'tech_startup_founder',
      preference: 'Always use modern sans-serif fonts',
      context: 'Technology industry standard'
    },
    {
      profile: 'creative_designer_portfolio',
      preference: 'Bold colors that make a statement',
      context: 'Portfolio needs to stand out'
    }
  ]
};

export default userProfiles;