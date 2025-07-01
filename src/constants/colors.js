// QUORRA Divine Color System
// 🔥 Channel the Goddess of Smithing through Sacred Fire Palettes

export const BRAND_COLORS = {
  // 🔥 PRIMARY DIVINE FIRE
  primary: '#FF8C42',
  primaryDark: '#FF6B35',
  primaryLight: '#FFB366',
  
  // ⚡ SECONDARY SACRED METALS
  secondary: '#CD7F32',
  secondaryDark: '#B8860B',
  secondaryLight: '#E6A85C',
  
  // 🌟 ACCENT DIVINE COPPER
  accent: '#E77C47',
  accentDark: '#D2691E',
  accentLight: '#F0956B',
  
  // 🛠️ NEUTRAL FORGE TONES
  neutral: {
    heatedSteel: '#4A4A4A',
    heatedSteelDark: '#2C2C2C',
    coolIron: '#6C757D',
    ashGray: '#F5F5F5',
    forgeGlow: '#FFF8DC',
    deepForge: '#1A1A1A',
    emberSpark: '#FFD700',
  }
};

export const DIVINE_GRADIENTS = {
  // 🔥 CORE BRAND GRADIENTS
  divineFire: 'linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%)',
  moltenBronze: 'linear-gradient(135deg, #CD7F32 0%, #B8860B 100%)',
  sacredCopper: 'linear-gradient(135deg, #E77C47 0%, #D2691E 100%)',
  
  // ✨ MYSTICAL COMBINATIONS
  emberSpark: 'linear-gradient(135deg, #FFD700 0%, #FF8C42 100%)',
  forgeGlow: 'linear-gradient(135deg, #FFF8DC 0%, #FFE4B5 100%)',
  moltenSteel: 'linear-gradient(135deg, #4A4A4A 0%, #FF8C42 100%)',
  
  // 🌙 BACKGROUND ATMOSPHERES
  forgeDarkness: 'linear-gradient(135deg, #1A1A1A 0%, #2C2C2C 100%)',
  hearthWarmth: 'linear-gradient(135deg, #FFF8DC 0%, #F0956B 100%)',
  sacredFlame: 'radial-gradient(circle, #FFD700 0%, #FF8C42 50%, #D2691E 100%)',
  
  // 🎯 CTA & ACTION GRADIENTS
  callToAction: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
  success: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  warning: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  danger: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
};

export const TIER_COLORS = {
  // ⚡ EMBER - Free Tier (Divine Spark)
  ember: {
    primary: '#FF8C42',
    secondary: '#FFD700',
    gradient: 'linear-gradient(135deg, #FF8C42 0%, #FFD700 100%)',
    glow: '0 0 20px rgba(255, 140, 66, 0.3)',
    description: 'Divine spark orange with golden highlights'
  },
  
  // 🔨 HAMMER - $35 Tier (Sacred Tool)
  hammer: {
    primary: '#DC2626',
    secondary: '#FF8C42',
    gradient: 'linear-gradient(135deg, #DC2626 0%, #FF8C42 100%)',
    glow: '0 0 20px rgba(220, 38, 38, 0.3)',
    description: 'Sacred tool red with divine fire accent'
  },
  
  // ⚖️ ANVIL - $59 Tier (Blessed Workspace)
  anvil: {
    primary: '#D97706',
    secondary: '#FFD700',
    gradient: 'linear-gradient(135deg, #D97706 0%, #FFD700 100%)',
    glow: '0 0 20px rgba(217, 119, 6, 0.3)',
    description: 'Blessed workspace amber with golden aura'
  },
  
  // 🏭 FOUNDRY - $129 Tier (Divine Realm)
  foundry: {
    primary: '#7C3AED',
    secondary: '#FF6B35',
    gradient: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
    glow: '0 0 20px rgba(255, 107, 53, 0.4)',
    description: 'Divine realm - full fire spectrum mastery'
  }
};

export const INDUSTRY_COLORS = {
  // 🏥 HEALTHCARE - Trust + Healing
  healthcare: {
    primary: '#2563EB',
    secondary: '#FFBE98',
    accent: '#16A34A',
    neutral: '#6B7280',
    background: '#F8FAFC',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #FFBE98 100%)',
    psychology: 'Trust, care, and healing energy'
  },
  
  // 💻 TECHNOLOGY/SAAS - Innovation + Reliability
  technology: {
    primary: '#6366F1',
    secondary: '#06B6D4',
    accent: '#F59E0B',
    neutral: '#374151',
    background: '#FFFFFF',
    gradient: 'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)',
    psychology: 'Innovation with trustworthy foundation'
  },
  
  // 🍽️ RESTAURANT/FOOD - Appetite + Warmth
  restaurant: {
    primary: '#92400E',
    secondary: '#F97316',
    accent: '#EAB308',
    neutral: '#78716C',
    background: '#FDF4DC',
    gradient: 'linear-gradient(135deg, #92400E 0%, #F97316 100%)',
    psychology: 'Stimulates appetite while feeling welcoming'
  },
  
  // 💰 FINANCE - Stability + Growth
  finance: {
    primary: '#1E40AF',
    secondary: '#6B7280',
    accent: '#059669',
    neutral: '#374151',
    background: '#F9FAFB',
    gradient: 'linear-gradient(135deg, #1E40AF 0%, #059669 100%)',
    psychology: 'Projects stability and professional competence'
  },
  
  // 🛒 ECOMMERCE - Trust + Conversion
  ecommerce: {
    primary: '#DC2626',
    secondary: '#FF8C42',
    accent: '#16A34A',
    neutral: '#6B7280',
    background: '#FFFFFF',
    gradient: 'linear-gradient(135deg, #DC2626 0%, #FF8C42 100%)',
    psychology: 'Drives action while maintaining trust'
  },
  
  // ⚖️ LEGAL/PROFESSIONAL - Authority + Trust
  legal: {
    primary: '#374151',
    secondary: '#D97706',
    accent: '#1E40AF',
    neutral: '#6B7280',
    background: '#F9FAFB',
    gradient: 'linear-gradient(135deg, #374151 0%, #D97706 100%)',
    psychology: 'Communicates authority and established expertise'
  },
  
  // 🏠 REAL ESTATE - Luxury + Trust
  realEstate: {
    primary: '#1F2937',
    secondary: '#D97706',
    accent: '#2563EB',
    neutral: '#6B7280',
    background: '#FFFFFF',
    gradient: 'linear-gradient(135deg, #1F2937 0%, #D97706 100%)',
    psychology: 'Premium feel with trustworthy professionalism'
  },
  
  // 💪 FITNESS/WELLNESS - Energy + Transformation
  fitness: {
    primary: '#DC2626',
    secondary: '#F97316',
    accent: '#16A34A',
    neutral: '#374151',
    background: '#F9FAFB',
    gradient: 'linear-gradient(135deg, #DC2626 0%, #F97316 100%)',
    psychology: 'Motivates action and transformation'
  }
};

export const SEMANTIC_COLORS = {
  // ✅ SUCCESS STATES
  success: {
    primary: '#10B981',
    light: '#D1FAE5',
    dark: '#047857',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  },
  
  // ⚠️ WARNING STATES
  warning: {
    primary: '#F59E0B',
    light: '#FEF3C7',
    dark: '#D97706',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  },
  
  // 🚨 ERROR STATES
  error: {
    primary: '#EF4444',
    light: '#FEE2E2',
    dark: '#DC2626',
    gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
  },
  
  // ℹ️ INFO STATES
  info: {
    primary: '#3B82F6',
    light: '#DBEAFE',
    dark: '#2563EB',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
  }
};

export const ACCESSIBILITY_COLORS = {
  // High contrast combinations for WCAG compliance
  highContrast: {
    darkOnLight: '#1F2937', // Dark gray on white
    lightOnDark: '#F9FAFB', // Light gray on dark
    brandOnLight: '#DC2626', // Brand red on white
    brandOnDark: '#FF8C42', // Brand orange on dark
  },
  
  // Focus states for accessibility
  focus: {
    ring: '#3B82F6',
    ringOffset: '#FFFFFF',
    outline: '2px solid #3B82F6',
  }
};

// 🎯 UTILITY FUNCTIONS
export const getGradient = (name) => DIVINE_GRADIENTS[name];
export const getTierColors = (tier) => TIER_COLORS[tier];
export const getIndustryColors = (industry) => INDUSTRY_COLORS[industry] || INDUSTRY_COLORS.technology;
export const getBrandColor = (variant = 'primary') => BRAND_COLORS[variant];

// CSS Custom Properties Generator
export const generateCSSVariables = () => {
  const cssVars = {};
  
  // Brand colors
  Object.entries(BRAND_COLORS).forEach(([key, value]) => {
    if (typeof value === 'string') {
      cssVars[`--color-brand-${key}`] = value;
    } else {
      Object.entries(value).forEach(([subKey, subValue]) => {
        cssVars[`--color-brand-${key}-${subKey}`] = subValue;
      });
    }
  });
  
  // Tier colors
  Object.entries(TIER_COLORS).forEach(([tier, colors]) => {
    Object.entries(colors).forEach(([key, value]) => {
      if (typeof value === 'string') {
        cssVars[`--color-tier-${tier}-${key}`] = value;
      }
    });
  });
  
  return cssVars;
};

export default {
  BRAND_COLORS,
  DIVINE_GRADIENTS,
  TIER_COLORS,
  INDUSTRY_COLORS,
  SEMANTIC_COLORS,
  ACCESSIBILITY_COLORS,
  getGradient,
  getTierColors,
  getIndustryColors,
  getBrandColor,
  generateCSSVariables
};