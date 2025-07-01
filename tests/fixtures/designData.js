/**
 * QUORRA TEST FIXTURES - DESIGN DATA
 * Sacred design patterns for divine testing
 */

// Healthcare Industry Test Data
export const healthcareDesign = {
  industry: 'healthcare',
  colors: {
    primary: '#2563EB',      // Trust blue
    secondary: '#FFBE98',    // Healing peach  
    accent: '#16A34A',       // Health green
    neutral: '#6B7280',      // Professional gray
    background: '#F8FAFC',   // Clean white
    text: '#1F2937'          // Dark text
  },
  typography: {
    heading: 'Inter',
    body: 'Open Sans', 
    accent: 'Crimson Text',
    weights: ['300', '400', '500', '600', '700']
  },
  layout: {
    sections: ['header', 'hero', 'services', 'about', 'contact', 'footer'],
    navigation: ['Home', 'Services', 'About', 'Contact'],
    cta: 'Book Appointment',
    style: 'professional_caring'
  },
  content: {
    title: 'Canyon Lake Medical Center',
    tagline: 'Compassionate Care, Every Step of the Way',
    services: ['Primary Care', 'Preventive Medicine', 'Urgent Care'],
    description: 'Comprehensive healthcare for Canyon Lake & surrounding communities'
  },
  expectedOutput: {
    cssSize: '<15KB',
    loadTime: '<2000ms',
    lighthouseScore: '>95',
    accessibility: 'WCAG AA compliant'
  }
};

// Restaurant Industry Test Data
export const restaurantDesign = {
  industry: 'restaurant',
  colors: {
    primary: '#8B6914',      // Rich brown (Mocha Mousse)
    secondary: '#F97316',    // Appetite orange
    accent: '#EAB308',       // Warm yellow
    neutral: '#78716C',      // Earth gray
    background: '#FDF4DC',   // Cream
    text: '#1C1917'          // Dark brown text
  },
  typography: {
    heading: 'Playfair Display',
    body: 'Crimson Text',
    accent: 'Inter',
    weights: ['300', '400', '500', '600', '700']
  },
  layout: {
    sections: ['header', 'hero', 'menu-preview', 'about', 'contact', 'footer'],
    navigation: ['Home', 'Menu', 'About', 'Contact'],
    cta: 'Reserve Table',
    style: 'elegant_appetite'
  },
  content: {
    title: 'Bistro Divine',
    tagline: 'Where flavor meets the sacred',
    services: ['Fine Dining', 'Wine Selection', 'Private Events'],
    description: 'Culinary artistry blessed by divine inspiration'
  },
  expectedOutput: {
    cssSize: '<12KB',
    loadTime: '<1800ms',
    appetiteAppeal: 'high',
    visualHierarchy: 'food-focused'
  }
};

// Technology/SaaS Industry Test Data
export const technologyDesign = {
  industry: 'technology',
  colors: {
    primary: '#6366F1',      // Innovation purple
    secondary: '#06B6D4',    // Tech cyan
    accent: '#F59E0B',       // Energy orange
    neutral: '#374151',      // Modern gray
    background: '#FFFFFF',   // Clean white
    text: '#111827'          // Tech black
  },
  typography: {
    heading: 'Inter',
    body: 'Roboto',
    accent: 'Space Mono',
    weights: ['300', '400', '500', '600', '700']
  },
  layout: {
    sections: ['header', 'hero', 'features', 'demo', 'pricing', 'footer'],
    navigation: ['Features', 'Demo', 'Pricing', 'Docs'],
    cta: 'Start Free Trial',
    style: 'modern_innovative'
  },
  content: {
    title: 'FlowSuite',
    tagline: 'Boost Productivity. Simplify Workflows.',
    services: ['Task Management', 'Team Collaboration', 'Analytics'],
    description: 'All-in-one platform for modern teams'
  },
  expectedOutput: {
    cssSize: '<18KB',
    loadTime: '<1500ms',
    conversionOptimized: true,
    featureFocused: true
  }
};

// E-commerce Industry Test Data
export const ecommerceDesign = {
  industry: 'ecommerce',
  colors: {
    primary: '#DC2626',      // Sale red
    secondary: '#2563EB',    // Trust blue
    accent: '#16A34A',       // Success green
    neutral: '#6B7280',      // Product gray
    background: '#F9FAFB',   // Light background
    text: '#1F2937'          // Product text
  },
  typography: {
    heading: 'Inter',
    body: 'Open Sans',
    accent: 'Montserrat',
    weights: ['300', '400', '500', '600', '700', '800']
  },
  layout: {
    sections: ['header', 'hero', 'products', 'features', 'testimonials', 'footer'],
    navigation: ['Shop', 'Categories', 'About', 'Contact'],
    cta: 'Shop Now',
    style: 'conversion_optimized'
  },
  content: {
    title: 'Divine Commerce',
    tagline: 'Blessed products for modern life',
    services: ['Premium Products', 'Fast Shipping', '24/7 Support'],
    description: 'Carefully curated items with divine quality'
  },
  expectedOutput: {
    cssSize: '<20KB',
    loadTime: '<2500ms',
    conversionRate: 'optimized',
    productFocused: true
  }
};

// Creative/Portfolio Industry Test Data
export const creativeDesign = {
  industry: 'creative',
  colors: {
    primary: '#8B5CF6',      // Creative purple
    secondary: '#F59E0B',    // Inspiration orange
    accent: '#EC4899',       // Creative pink
    neutral: '#6B7280',      // Artistic gray
    background: '#F5F5DC',   // Warm beige
    text: '#374151'          // Artistic text
  },
  typography: {
    heading: 'Playfair Display',
    body: 'Crimson Text',
    accent: 'Dancing Script',
    weights: ['300', '400', '500', '600', '700']
  },
  layout: {
    sections: ['header', 'hero', 'portfolio', 'about', 'blog', 'contact', 'footer'],
    navigation: ['Portfolio', 'About', 'Blog', 'Contact'],
    cta: 'View Work',
    style: 'artistic_elegant'
  },
  content: {
    title: 'Divine Creations',
    tagline: 'Art blessed by sacred inspiration',
    services: ['Digital Art', 'Photography', 'Design Consultation'],
    description: 'Creative works channeling divine artistic energy'
  },
  expectedOutput: {
    cssSize: '<16KB',
    loadTime: '<2200ms',
    portfolioFocused: true,
    visuallyStriking: true
  }
};

// Test scenarios for different user types
export const userScenarios = {
  beginner: {
    experience: 'none',
    needsGuidance: true,
    preferredStyle: 'simple',
    expectedInteractions: ['color_help', 'layout_suggestions', 'sparky_guidance']
  },
  
  intermediate: {
    experience: 'some',
    needsGuidance: 'minimal',
    preferredStyle: 'balanced',
    expectedInteractions: ['quick_edits', 'template_customization']
  },
  
  advanced: {
    experience: 'expert', 
    needsGuidance: false,
    preferredStyle: 'custom',
    expectedInteractions: ['advanced_css', 'code_export', 'performance_optimization']
  }
};

// Mock API responses
export const mockAPIResponses = {
  forgeWebsite: {
    success: true,
    code: {
      html: '<!DOCTYPE html><html>...</html>',
      css: ':root { --primary: #2563EB; } body { font-family: Inter; }',
      performance: {
        loadTime: 1850,
        fileSize: 12800,
        lighthouse: 96
      }
    },
    metrics: {
      forgeTime: 2340,
      filesizeReduction: 87,
      performanceGain: 215,
      divineBlessing: '✨ Blessed by Quorra, Goddess of Smithing'
    }
  },
  
  sparkyGuidance: {
    recommendations: {
      colors: ['Trust-building blues work well for healthcare'],
      typography: ['Clean sans-serif fonts enhance readability'],
      layout: ['Services section should be prominent']
    },
    reasoning: 'Healthcare industry patterns suggest...',
    personality: {
      tone: 'helpful',
      message: '✨ The divine patterns suggest...'
    }
  }
};

// Performance benchmarks
export const performanceBenchmarks = {
  excellent: {
    cssSize: '<10KB',
    loadTime: '<1500ms',
    lighthouse: '>95',
    fileReduction: '>90%'
  },
  
  good: {
    cssSize: '<15KB', 
    loadTime: '<2000ms',
    lighthouse: '>90',
    fileReduction: '>85%'
  },
  
  acceptable: {
    cssSize: '<25KB',
    loadTime: '<3000ms', 
    lighthouse: '>80',
    fileReduction: '>75%'
  }
};

// Export all test data
export const testDesignData = {
  healthcare: healthcareDesign,
  restaurant: restaurantDesign,
  technology: technologyDesign,
  ecommerce: ecommerceDesign,
  creative: creativeDesign
};

export default {
  testDesignData,
  userScenarios,
  mockAPIResponses,
  performanceBenchmarks
};