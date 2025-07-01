// QUORRA Industry Intelligence System
// 🏢 Divine wisdom for every sacred craft and calling

export const INDUSTRY_CATEGORIES = {
  // 🏥 HEALTHCARE & MEDICAL
  healthcare: {
    name: 'Healthcare & Medical',
    icon: 'heart-pulse',
    divineIcon: '/src/assets/images/icons/healthcare-fire.png',
    description: 'Healing arts blessed by compassionate fire',
    
    // Conversion Psychology
    conversionFlow: 'Need → Trust → Care → Relationship',
    primaryGoal: 'Book appointments and build patient trust',
    trustSignals: ['credentials', 'testimonials', 'accessibility', 'privacy'],
    
    // Design Intelligence
    colorPsychology: 'Trust + Care + Comfort',
    primaryColors: ['#2563EB', '#FFBE98', '#16A34A'],
    typography: 'Clean sans-serif for clarity, warm serif for empathy',
    
    // Content Patterns
    heroMessage: 'Compassionate care, proven results',
    ctaPrimary: 'Book Appointment',
    ctaSecondary: 'Learn More',
    
    // Industry-Specific Features
    specialFeatures: [
      'HIPAA-compliant forms',
      'Patient portal integration',
      'Appointment booking system',
      'Telehealth capabilities',
      'Insurance information display'
    ],
    
    // Target Audience
    audience: {
      primary: 'Patients seeking care',
      secondary: 'Caregivers and family members',
      demographics: 'All ages, health-conscious',
      psychographics: 'Trust-focused, outcome-oriented'
    },
    
    subcategories: [
      'General Practice',
      'Dental',
      'Mental Health',
      'Specialist Care',
      'Wellness Centers'
    ]
  },

  // 💻 TECHNOLOGY & SAAS
  technology: {
    name: 'Technology & SaaS',
    icon: 'laptop-code',
    divineIcon: '/src/assets/images/icons/tech-fire.png',
    description: 'Innovation forged in the digital realm',
    
    conversionFlow: 'Discovery → Trial → Adoption → Subscription',
    primaryGoal: 'Free trial signups and product demonstrations',
    trustSignals: ['user-metrics', 'integrations', 'security', 'uptime'],
    
    colorPsychology: 'Innovation + Trust + Efficiency',
    primaryColors: ['#6366F1', '#06B6D4', '#F59E0B'],
    typography: 'Modern sans-serif for clarity and innovation',
    
    heroMessage: 'Streamline workflows, boost productivity',
    ctaPrimary: 'Start Free Trial',
    ctaSecondary: 'Watch Demo',
    
    specialFeatures: [
      'Interactive product demos',
      'Feature comparison tables',
      'Integration showcases',
      'API documentation',
      'Usage analytics display'
    ],
    
    audience: {
      primary: 'Software developers and product managers',
      secondary: 'Business decision makers',
      demographics: '25-45, tech-savvy professionals',
      psychographics: 'Efficiency-focused, data-driven'
    },
    
    subcategories: [
      'SaaS Platforms',
      'Development Tools',
      'Analytics Software',
      'Productivity Apps',
      'Enterprise Solutions'
    ]
  },

  // 🍽️ RESTAURANT & FOOD SERVICE
  restaurant: {
    name: 'Restaurant & Food Service',
    icon: 'utensils',
    divineIcon: '/src/assets/images/icons/restaurant-fire.png',
    description: 'Culinary arts that kindle appetite and joy',
    
    conversionFlow: 'Appetite → Reservation/Order',
    primaryGoal: 'Table reservations and online orders',
    trustSignals: ['reviews', 'photos', 'hygiene-ratings', 'chef-credentials'],
    
    colorPsychology: 'Appetite + Warmth + Atmosphere',
    primaryColors: ['#92400E', '#F97316', '#EAB308'],
    typography: 'Elegant serif for fine dining, friendly sans for casual',
    
    heroMessage: 'Exceptional flavors, unforgettable experiences',
    ctaPrimary: 'Reserve Table',
    ctaSecondary: 'View Menu',
    
    specialFeatures: [
      'Online reservation system',
      'Menu display with prices',
      'Photo galleries of dishes',
      'Online ordering integration',
      'Chef and staff profiles'
    ],
    
    audience: {
      primary: 'Diners and food enthusiasts',
      secondary: 'Event planners and groups',
      demographics: 'All ages, food lovers',
      psychographics: 'Experience-focused, quality-conscious'
    },
    
    subcategories: [
      'Fine Dining',
      'Casual Dining',
      'Fast Food',
      'Cafes & Coffee Shops',
      'Catering Services'
    ]
  },

  // 💰 FINANCE & PROFESSIONAL SERVICES
  finance: {
    name: 'Finance & Professional Services',
    icon: 'building-columns',
    divineIcon: '/src/assets/images/icons/finance-fire.png',
    description: 'Prosperity counsel forged in wisdom',
    
    conversionFlow: 'Research → Evaluate → Trust → Engage',
    primaryGoal: 'Consultation bookings and lead generation',
    trustSignals: ['credentials', 'awards', 'case-studies', 'testimonials'],
    
    colorPsychology: 'Trust + Stability + Growth',
    primaryColors: ['#1E40AF', '#6B7280', '#059669'],
    typography: 'Conservative serif for authority, clean sans for accessibility',
    
    heroMessage: 'Trusted expertise, proven results',
    ctaPrimary: 'Schedule Consultation',
    ctaSecondary: 'Learn More',
    
    specialFeatures: [
      'Service area explanations',
      'Team credentials display',
      'Case study showcases',
      'Regulatory compliance info',
      'Secure contact forms'
    ],
    
    audience: {
      primary: 'Individuals and businesses needing financial services',
      secondary: 'Investors and entrepreneurs',
      demographics: '30-65, established professionals',
      psychographics: 'Security-focused, long-term thinking'
    },
    
    subcategories: [
      'Financial Planning',
      'Investment Services',
      'Insurance',
      'Legal Services',
      'Accounting'
    ]
  },

  // 🛒 ECOMMERCE & RETAIL
  ecommerce: {
    name: 'E-commerce & Retail',
    icon: 'shopping-cart',
    divineIcon: '/src/assets/images/icons/cart-fire.png',
    description: 'Marketplace magic where desires become reality',
    
    conversionFlow: 'Browse → Purchase',
    primaryGoal: 'Product sales and customer acquisition',
    trustSignals: ['reviews', 'security-badges', 'return-policy', 'testimonials'],
    
    colorPsychology: 'Trust + Excitement + Conversion',
    primaryColors: ['#DC2626', '#FF8C42', '#16A34A'],
    typography: 'Clean sans-serif for product clarity',
    
    heroMessage: 'Quality products, exceptional value',
    ctaPrimary: 'Shop Now',
    ctaSecondary: 'Learn More',
    
    specialFeatures: [
      'Product catalogs with filtering',
      'Shopping cart integration',
      'Customer review systems',
      'Secure checkout process',
      'Inventory management display'
    ],
    
    audience: {
      primary: 'Online shoppers and consumers',
      secondary: 'Gift buyers and bulk purchasers',
      demographics: 'All ages, online-savvy',
      psychographics: 'Convenience-focused, value-conscious'
    },
    
    subcategories: [
      'Fashion & Apparel',
      'Electronics',
      'Home & Garden',
      'Health & Beauty',
      'Specialty Products'
    ]
  },

  // 🏠 REAL ESTATE
  realEstate: {
    name: 'Real Estate',
    icon: 'home',
    divineIcon: '/src/assets/images/icons/house-fire.png',
    description: 'Homes and dreams forged into reality',
    
    conversionFlow: 'Browse → Visualize → Connect → Transact',
    primaryGoal: 'Property inquiries and agent connections',
    trustSignals: ['sales-volume', 'local-expertise', 'testimonials', 'certifications'],
    
    colorPsychology: 'Trust + Aspiration + Stability',
    primaryColors: ['#1F2937', '#D97706', '#2563EB'],
    typography: 'Professional sans-serif with elegant accent fonts',
    
    heroMessage: 'Find your perfect home, trusted guidance',
    ctaPrimary: 'Search Properties',
    ctaSecondary: 'Contact Agent',
    
    specialFeatures: [
      'Property search and filtering',
      'Virtual tour integration',
      'Market data displays',
      'Agent profile pages',
      'Neighborhood information'
    ],
    
    audience: {
      primary: 'Home buyers and sellers',
      secondary: 'Investors and renters',
      demographics: '25-65, property interested',
      psychographics: 'Future-focused, investment-minded'
    },
    
    subcategories: [
      'Residential Sales',
      'Commercial Real Estate',
      'Property Management',
      'Real Estate Investment',
      'Luxury Properties'
    ]
  },

  // ⚖️ LEGAL SERVICES
  legal: {
    name: 'Legal Services',
    icon: 'scale-balanced',
    divineIcon: '/src/assets/images/icons/scales-fire.png',
    description: 'Justice tempered in wisdom and experience',
    
    conversionFlow: 'Need → Research → Trust → Consultation',
    primaryGoal: 'Consultation bookings and case evaluations',
    trustSignals: ['bar-certification', 'case-results', 'experience', 'testimonials'],
    
    colorPsychology: 'Authority + Trust + Justice',
    primaryColors: ['#374151', '#D97706', '#1E40AF'],
    typography: 'Traditional serif for authority, accessible sans for clarity',
    
    heroMessage: 'Experienced counsel, proven advocacy',
    ctaPrimary: 'Free Consultation',
    ctaSecondary: 'Case Evaluation',
    
    specialFeatures: [
      'Practice area explanations',
      'Attorney profiles and credentials',
      'Case study presentations',
      'Legal resource libraries',
      'Confidential contact forms'
    ],
    
    audience: {
      primary: 'Individuals and businesses needing legal help',
      secondary: 'Referral sources and other attorneys',
      demographics: '25-70, various legal needs',
      psychographics: 'Problem-focused, outcome-oriented'
    },
    
    subcategories: [
      'Personal Injury',
      'Family Law',
      'Criminal Defense',
      'Business Law',
      'Estate Planning'
    ]
  },

  // 💪 FITNESS & WELLNESS
  fitness: {
    name: 'Fitness & Wellness',
    icon: 'dumbbell',
    divineIcon: '/src/assets/images/icons/fitness-fire.png',
    description: 'Strength and vitality forged through sacred discipline',
    
    conversionFlow: 'Motivate → Inspire → Trial → Transform',
    primaryGoal: 'Membership signups and trial sessions',
    trustSignals: ['transformations', 'certifications', 'testimonials', 'community'],
    
    colorPsychology: 'Energy + Motivation + Transformation',
    primaryColors: ['#DC2626', '#F97316', '#16A34A'],
    typography: 'Bold sans-serif for energy and motivation',
    
    heroMessage: 'Transform your body, elevate your life',
    ctaPrimary: 'Start Free Trial',
    ctaSecondary: 'View Programs',
    
    specialFeatures: [
      'Class schedules and booking',
      'Trainer profiles and certifications',
      'Before/after galleries',
      'Membership tier displays',
      'Fitness program descriptions'
    ],
    
    audience: {
      primary: 'Health and fitness enthusiasts',
      secondary: 'People seeking lifestyle changes',
      demographics: '18-55, health-conscious',
      psychographics: 'Goal-oriented, transformation-focused'
    },
    
    subcategories: [
      'Gyms & Fitness Centers',
      'Personal Training',
      'Yoga & Wellness',
      'Martial Arts',
      'Nutrition Coaching'
    ]
  }
};

export const CONVERSION_PATTERNS = {
  // 🎯 INDUSTRY-SPECIFIC CONVERSION FUNNELS
  
  appointment_based: {
    industries: ['healthcare', 'legal', 'finance'],
    primaryCTA: 'Book Appointment',
    secondaryCTA: 'Learn More',
    trustPhase: 'Critical - must establish credibility first',
    timeline: 'Immediate need to long-term relationship'
  },
  
  trial_based: {
    industries: ['technology', 'fitness'],
    primaryCTA: 'Start Free Trial',
    secondaryCTA: 'Watch Demo',
    trustPhase: 'Value demonstration through experience',
    timeline: 'Trial period to subscription conversion'
  },
  
  transaction_based: {
    industries: ['ecommerce', 'restaurant'],
    primaryCTA: 'Shop Now / Reserve',
    secondaryCTA: 'View Products / Menu',
    trustPhase: 'Quick trust building for immediate action',
    timeline: 'Immediate purchase or booking'
  },
  
  consultation_based: {
    industries: ['realEstate', 'legal', 'finance'],
    primaryCTA: 'Free Consultation',
    secondaryCTA: 'Case Evaluation',
    trustPhase: 'Authority building through expertise',
    timeline: 'Consultation to ongoing engagement'
  }
};

export const TRUST_BUILDING_ELEMENTS = {
  // 🛡️ INDUSTRY-SPECIFIC TRUST SIGNALS
  
  credentials: {
    applicableIndustries: ['healthcare', 'legal', 'finance', 'fitness'],
    elements: ['certifications', 'licenses', 'awards', 'education'],
    placement: 'Header area, about section, individual profiles'
  },
  
  social_proof: {
    applicableIndustries: ['restaurant', 'ecommerce', 'fitness', 'technology'],
    elements: ['reviews', 'ratings', 'testimonials', 'user-count'],
    placement: 'Hero section, product pages, dedicated testimonial sections'
  },
  
  experience_metrics: {
    applicableIndustries: ['legal', 'finance', 'realEstate', 'healthcare'],
    elements: ['years-in-business', 'cases-won', 'clients-served', 'success-rate'],
    placement: 'Hero section, statistics blocks, about pages'
  },
  
  security_indicators: {
    applicableIndustries: ['ecommerce', 'technology', 'finance', 'healthcare'],
    elements: ['ssl-certificates', 'privacy-policies', 'compliance-badges', 'security-features'],
    placement: 'Footer, checkout pages, privacy sections'
  }
};

// 🎯 UTILITY FUNCTIONS
export const getIndustryData = (industryKey) => 
  INDUSTRY_CATEGORIES[industryKey] || INDUSTRY_CATEGORIES.technology;

export const getConversionPattern = (industryKey) => {
  const industry = getIndustryData(industryKey);
  return Object.values(CONVERSION_PATTERNS).find(pattern => 
    pattern.industries.includes(industryKey)
  ) || CONVERSION_PATTERNS.transaction_based;
};

export const getTrustElements = (industryKey) => {
  return Object.entries(TRUST_BUILDING_ELEMENTS)
    .filter(([key, trust]) => trust.applicableIndustries.includes(industryKey))
    .map(([key, trust]) => ({ type: key, ...trust }));
};

export const getIndustryColors = (industryKey) => {
  const industry = getIndustryData(industryKey);
  return industry.primaryColors || ['#6366F1', '#06B6D4', '#F59E0B'];
};

export const getAllIndustries = () => Object.keys(INDUSTRY_CATEGORIES);

export const getIndustriesByCategory = () => {
  const categories = {
    service: ['healthcare', 'legal', 'finance', 'fitness'],
    product: ['ecommerce', 'restaurant', 'technology'],
    transactional: ['realEstate', 'restaurant', 'ecommerce'],
    consultative: ['legal', 'finance', 'realEstate']
  };
  return categories;
};

export default {
  INDUSTRY_CATEGORIES,
  CONVERSION_PATTERNS,
  TRUST_BUILDING_ELEMENTS,
  getIndustryData,
  getConversionPattern,
  getTrustElements,
  getIndustryColors,
  getAllIndustries,
  getIndustriesByCategory
};