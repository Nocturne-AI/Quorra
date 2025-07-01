/**
 * FORGE TYPOGRAPHY INTELLIGENCE
 * Location: src/intelligence/TypographyIntelligence.js
 * Google Fonts integration with psychological font selection
 * Based on industry psychology and readability optimization
 */

class TypographyIntelligence {
  constructor() {
    this.fontCombinations = new Map();
    this.fontPsychology = new Map();
    this.industryFonts = new Map();
    this.performanceOptimizations = new Map();
    this.initializeTypographyIntelligence();
  }

  initializeTypographyIntelligence() {
    this.loadFontPsychology();
    this.loadIndustryFontPatterns();
    this.loadOptimizedCombinations();
    this.loadPerformanceRules();
  }

  /**
   * MAIN FUNCTION: Generate optimal typography for business
   */
  generateOptimalTypography(businessCategory, brandPersonality = 'professional', devicePriority = 'mobile') {
    const industryPattern = this.getIndustryFontPattern(businessCategory);
    const personalityAdjustment = this.getPersonalityFonts(brandPersonality);
    const optimizedCombination = this.selectOptimalCombination(industryPattern, personalityAdjustment);
    
    return {
      fonts: optimizedCombination.fonts,
      googleFontsUrl: this.generateGoogleFontsUrl(optimizedCombination.fonts),
      cssVariables: this.generateCSSVariables(optimizedCombination.fonts),
      fallbackStacks: this.generateFallbackStacks(optimizedCombination.fonts),
      sizing: this.getOptimalSizing(devicePriority),
      spacing: this.getOptimalSpacing(),
      reasoning: this.generateTypographyReasoning(businessCategory, brandPersonality),
      performance: this.getPerformanceOptimizations(optimizedCombination.fonts),
      accessibility: this.getAccessibilityRules(),
      webFontStrategy: this.getWebFontStrategy()
    };
  }

  /**
   * FONT PSYCHOLOGY FOUNDATION
   */
  loadFontPsychology() {
    // SERIF FONTS - Trust, Authority, Tradition
    this.fontPsychology.set('serif', {
      psychology: 'Trust, authority, tradition, reliability, sophistication',
      emotional_response: 'Establishes credibility, evokes stability',
      best_industries: ['finance', 'law', 'healthcare', 'education', 'luxury'],
      user_perception: 'This brand has experience and can be trusted',
      readability: 'Excellent for print, good for web with proper sizing',
      examples: ['Playfair Display', 'EB Garamond', 'Crimson Text', 'Source Serif Pro']
    });

    // SANS SERIF FONTS - Modern, Clean, Approachable
    this.fontPsychology.set('sans-serif', {
      psychology: 'Modern, clean, approachable, efficient, progressive',
      emotional_response: 'Creates confidence, suggests innovation',
      best_industries: ['technology', 'startups', 'healthcare', 'ecommerce', 'fitness'],
      user_perception: 'This brand is forward-thinking and user-friendly',
      readability: 'Excellent for screens, optimal for mobile',
      examples: ['Inter', 'Open Sans', 'Roboto', 'Montserrat', 'Lato']
    });

    // DISPLAY FONTS - Bold, Confident, Attention-grabbing
    this.fontPsychology.set('display', {
      psychology: 'Bold, confident, creative, distinctive, memorable',
      emotional_response: 'Commands attention, creates impact',
      best_industries: ['creative', 'entertainment', 'fashion', 'restaurants'],
      user_perception: 'This brand is confident and distinctive',
      readability: 'Headers only, use sparingly',
      examples: ['Oswald', 'Bebas Neue', 'Fredoka One', 'Anton']
    });

    // SCRIPT FONTS - Elegant, Personal, Creative
    this.fontPsychology.set('script', {
      psychology: 'Elegant, personal, creative, handcrafted, sophisticated',
      emotional_response: 'Creates intimacy, suggests luxury',
      best_industries: ['wedding', 'beauty', 'boutique', 'personal_brand'],
      user_perception: 'This brand is personal and crafted with care',
      readability: 'Use sparingly, ensure high contrast',
      examples: ['Dancing Script', 'Great Vibes', 'Satisfy', 'Pacifico']
    });

    // MONOSPACE FONTS - Technical, Precise, Modern
    this.fontPsychology.set('monospace', {
      psychology: 'Technical, precise, systematic, modern, trustworthy',
      emotional_response: 'Suggests accuracy and technical competence',
      best_industries: ['technology', 'finance', 'architecture', 'engineering'],
      user_perception: 'This brand is precise and technically competent',
      readability: 'Excellent for code, data, technical content',
      examples: ['JetBrains Mono', 'Source Code Pro', 'Space Mono', 'Roboto Mono']
    });
  }

  /**
   * INDUSTRY-SPECIFIC FONT PATTERNS
   */
  loadIndustryFontPatterns() {
    // HEALTHCARE - Trust + Clarity + Approachability
    this.industryFonts.set('healthcare', {
      primary_approach: 'Clean sans-serif for trust and readability',
      heading: {
        professional: 'Lato', // Clean, trustworthy
        friendly: 'Nunito', // Warm, rounded curves
        traditional: 'Source Serif Pro' // Medical authority
      },
      body: {
        professional: 'Open Sans', // High legibility
        friendly: 'Source Sans Pro', // Warmer than Open Sans
        traditional: 'Merriweather' // Readable serif
      },
      accent: {
        professional: 'Inter', // Modern, clean
        friendly: 'Crimson Text', // Elegant serif warmth
        traditional: 'Playfair Display' // Classic authority
      },
      critical_requirements: ['Maximum readability', 'Patient safety', 'Professional credibility'],
      avoid: ['Decorative fonts', 'Low contrast', 'Complex scripts'],
      trending: ['Modern serif fonts for warmth', 'Rounded sans-serif for approachability']
    });

    // TECHNOLOGY/SAAS - Innovation + Efficiency + Trust
    this.industryFonts.set('saas', {
      primary_approach: 'Modern sans-serif for digital clarity',
      heading: {
        professional: 'Inter', // Tech standard
        innovative: 'Work Sans', // Modern geometric
        bold: 'Space Grotesk' // Distinctive tech feel
      },
      body: {
        professional: 'Roboto', // Google standard
        innovative: 'Inter', // Versatile, clean
        bold: 'DM Sans' // Modern readability
      },
      accent: {
        professional: 'Space Mono', // Technical monospace
        innovative: 'JetBrains Mono', // Code-friendly
        bold: 'Oswald' // Strong display
      },
      critical_requirements: ['Screen optimization', 'Performance', 'Technical credibility'],
      avoid: ['Traditional serifs', 'Decorative fonts', 'Heavy fonts'],
      trending: ['Variable fonts', 'System font stacks', 'Performance-first']
    });

    // RESTAURANT/FOOD - Appetite + Atmosphere + Experience
    this.industryFonts.set('restaurant', {
      primary_approach: 'Varies by restaurant type and atmosphere',
      heading: {
        fine_dining: 'Playfair Display', // Elegant serif
        casual: 'Montserrat', // Friendly sans-serif
        fast_food: 'Oswald', // Bold, readable
        artisanal: 'EB Garamond' // Handcrafted feel
      },
      body: {
        fine_dining: 'Crimson Text', // Readable serif
        casual: 'Open Sans', // Clean, approachable
        fast_food: 'Roboto', // Quick readability
        artisanal: 'Source Sans Pro' // Clean but warm
      },
      accent: {
        fine_dining: 'Dancing Script', // Elegant script
        casual: 'Lato', // Friendly accent
        fast_food: 'Bebas Neue', // Bold display
        artisanal: 'Great Vibes' // Handwritten
      },
      critical_requirements: ['Menu readability', 'Atmosphere alignment', 'Appetite appeal'],
      avoid: ['Hard-to-read scripts', 'Clinical fonts', 'Overly technical'],
      trending: ['Warm serif fonts', 'Handcrafted scripts', 'Appetite-focused styling']
    });

    // FINANCE/PROFESSIONAL - Authority + Stability + Trust
    this.industryFonts.set('finance', {
      primary_approach: 'Conservative fonts that build authority',
      heading: {
        traditional: 'EB Garamond', // Classic authority
        modern: 'Inter', // Clean professionalism
        premium: 'Playfair Display' // Sophisticated serif
      },
      body: {
        traditional: 'Source Serif Pro', // Readable authority
        modern: 'Roboto', // Clean efficiency
        premium: 'Crimson Text' // Elegant readability
      },
      accent: {
        traditional: 'Times New Roman', // Classic fallback
        modern: 'Work Sans', // Contemporary
        premium: 'EB Garamond' // Consistent elegance
      },
      critical_requirements: ['Professional credibility', 'Regulatory compliance', 'Trust building'],
      avoid: ['Playful fonts', 'Experimental typography', 'Low readability'],
      trending: ['Subtle modern serif', 'Clean sans-serif', 'Conservative innovation']
    });

    // E-COMMERCE - Trust + Efficiency + Brand Personality
    this.industryFonts.set('ecommerce', {
      primary_approach: 'Clean readability with brand personality',
      heading: {
        clean: 'Inter', // Product clarity
        luxury: 'Playfair Display', // Premium positioning
        youth: 'Montserrat', // Modern, bold
        discount: 'Oswald' // Strong, attention-grabbing
      },
      body: {
        clean: 'Open Sans', // Product descriptions
        luxury: 'Crimson Text', // Elegant readability
        youth: 'Roboto', // Modern standard
        discount: 'Lato' // Clear, efficient
      },
      accent: {
        clean: 'Lato', // Consistent branding
        luxury: 'EB Garamond', // Sophisticated
        youth: 'Work Sans', // Contemporary
        discount: 'Bebas Neue' // Bold impact
      },
      critical_requirements: ['Product readability', 'Trust building', 'Conversion optimization'],
      avoid: ['Complex decorative fonts', 'Hard-to-read scripts', 'Performance-heavy fonts'],
      trending: ['Variable fonts', 'Performance optimization', 'Mobile-first typography']
    });

    // CREATIVE/PERSONAL - Expression + Authenticity + Personality
    this.industryFonts.set('creative', {
      primary_approach: 'Expressive fonts that reflect personality',
      heading: {
        artistic: 'Playfair Display', // Creative elegance
        modern: 'Work Sans', // Contemporary creativity
        playful: 'Fredoka One', // Fun, distinctive
        elegant: 'EB Garamond' // Sophisticated creativity
      },
      body: {
        artistic: 'Crimson Text', // Readable elegance
        modern: 'Inter', // Clean creativity
        playful: 'Open Sans', // Friendly readability
        elegant: 'Source Serif Pro' // Refined reading
      },
      accent: {
        artistic: 'Dancing Script', // Handwritten touch
        modern: 'Space Mono', // Technical accent
        playful: 'Satisfy', // Fun script
        elegant: 'Great Vibes' // Sophisticated script
      },
      critical_requirements: ['Personal expression', 'Brand differentiation', 'Creative impact'],
      avoid: ['Generic corporate fonts', 'Overly conservative choices'],
      trending: ['Mixed font families', 'Expressive typography', 'Personal branding fonts']
    });
  }

  /**
   * OPTIMIZED FONT COMBINATIONS
   */
  loadOptimizedCombinations() {
    // High-Performance Combinations (Pre-tested for speed + aesthetics)
    this.fontCombinations.set('performance_leader', {
      name: 'System-First Performance',
      fonts: {
        heading: 'Inter',
        body: 'system-ui',
        accent: 'SF Mono'
      },
      performance_score: 10,
      load_time: '0ms',
      description: 'System fonts for maximum performance'
    });

    this.fontCombinations.set('healthcare_trustworthy', {
      name: 'Medical Trust Builder',
      fonts: {
        heading: 'Lato',
        body: 'Open Sans',
        accent: 'Source Serif Pro'
      },
      performance_score: 9,
      load_time: '150ms',
      description: 'Trust and readability for healthcare'
    });

    this.fontCombinations.set('tech_innovative', {
      name: 'Tech Innovation Stack',
      fonts: {
        heading: 'Inter',
        body: 'Roboto',
        accent: 'JetBrains Mono'
      },
      performance_score: 9,
      load_time: '120ms',
      description: 'Modern tech with technical precision'
    });

    this.fontCombinations.set('restaurant_elegant', {
      name: 'Fine Dining Elegance',
      fonts: {
        heading: 'Playfair Display',
        body: 'Crimson Text',
        accent: 'Dancing Script'
      },
      performance_score: 7,
      load_time: '200ms',
      description: 'Sophisticated dining atmosphere'
    });

    this.fontCombinations.set('business_authority', {
      name: 'Professional Authority',
      fonts: {
        heading: 'EB Garamond',
        body: 'Source Sans Pro',
        accent: 'Inter'
      },
      performance_score: 8,
      load_time: '180ms',
      description: 'Traditional authority with modern readability'
    });

    this.fontCombinations.set('creative_expressive', {
      name: 'Creative Expression',
      fonts: {
        heading: 'Work Sans',
        body: 'Inter',
        accent: 'Space Mono'
      },
      performance_score: 8,
      load_time: '160ms',
      description: 'Creative balance of expression and readability'
    });
  }

  /**
   * PERFORMANCE OPTIMIZATION RULES
   */
  loadPerformanceRules() {
    this.performanceOptimizations.set('google_fonts', {
      preconnect: 'https://fonts.googleapis.com',
      preconnect_crossorigin: 'https://fonts.gstatic.com',
      font_display: 'swap',
      weight_optimization: 'Load only needed weights (400, 600, 700)',
      subset_optimization: 'Use latin subset for English sites',
      max_families: 3,
      max_weights_per_family: 4
    });

    this.performanceOptimizations.set('loading_strategy', {
      critical_fonts: 'Inline critical font CSS',
      non_critical: 'Load non-critical fonts asynchronously',
      fallback_timing: '100ms before showing fallback',
      cache_strategy: 'Long-term caching with proper headers',
      preload_key_fonts: 'Preload most important font files'
    });
  }

  /**
   * INTELLIGENT FONT SELECTION
   */
  selectOptimalCombination(industryPattern, personalityAdjustment) {
    const industry = industryPattern;
    const personality = personalityAdjustment;
    
    // Select fonts based on industry and personality
    const selectedFonts = {
      heading: industry.heading[personality.style] || industry.heading.professional,
      body: industry.body[personality.style] || industry.body.professional,
      accent: industry.accent[personality.style] || industry.accent.professional
    };
    
    // Find matching optimized combination or create custom
    for (const [key, combination] of this.fontCombinations) {
      if (this.fontsMatch(selectedFonts, combination.fonts)) {
        return combination;
      }
    }
    
    // Create custom combination
    return {
      name: 'Custom Industry Optimized',
      fonts: selectedFonts,
      performance_score: this.calculatePerformanceScore(selectedFonts),
      load_time: this.estimateLoadTime(selectedFonts),
      description: `Optimized for ${industryPattern.primary_approach}`
    };
  }

  fontsMatch(fonts1, fonts2) {
    return fonts1.heading === fonts2.heading && 
           fonts1.body === fonts2.body && 
           fonts1.accent === fonts2.accent;
  }

  /**
   * GOOGLE FONTS URL GENERATION
   */
  generateGoogleFontsUrl(fonts) {
    const uniqueFonts = [...new Set(Object.values(fonts))];
    const googleFonts = uniqueFonts.filter(font => this.isGoogleFont(font));
    
    if (googleFonts.length === 0) {
      return null; // No Google Fonts needed
    }
    
    const weights = ['300', '400', '500', '600', '700'];
    const families = googleFonts.map(font => 
      `family=${font.replace(/\s+/g, '+')}:wght@${weights.join(';')}`
    );
    
    return `https://fonts.googleapis.com/css2?${families.join('&')}&display=swap`;
  }

  isGoogleFont(fontName) {
    const systemFonts = ['system-ui', 'SF Mono', 'Times New Roman', 'Arial', 'Helvetica'];
    return !systemFonts.includes(fontName);
  }

  /**
   * CSS GENERATION
   */
  generateCSSVariables(fonts) {
    const fallbacks = this.generateFallbackStacks(fonts);
    
    return `
/* FORGE Typography Variables */
:root {
  --font-heading: ${fallbacks.heading};
  --font-body: ${fallbacks.body};
  --font-accent: ${fallbacks.accent};
  
  /* Font Weights */
  --weight-light: 300;
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  
  /* Font Sizes - Mobile First */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
}

/* Typography Classes */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-tight);
}

body, p, div {
  font-family: var(--font-body);
  font-weight: var(--weight-normal);
  line-height: var(--leading-normal);
}

.accent, .quote, .special {
  font-family: var(--font-accent);
  font-weight: var(--weight-normal);
}

/* Performance Optimization */
* {
  font-display: swap;
}`;
  }

  generateFallbackStacks(fonts) {
    const fallbackMap = {
      // Sans-serif fallbacks
      'Inter': "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      'Open Sans': "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      'Roboto': "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      'Lato': "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      'Montserrat': "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      'Work Sans': "'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      'Source Sans Pro': "'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      'DM Sans': "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      'Nunito': "'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      
      // Serif fallbacks
      'Playfair Display': "'Playfair Display', Georgia, 'Times New Roman', serif",
      'EB Garamond': "'EB Garamond', Georgia, 'Times New Roman', serif",
      'Crimson Text': "'Crimson Text', Georgia, 'Times New Roman', serif",
      'Source Serif Pro': "'Source Serif Pro', Georgia, 'Times New Roman', serif",
      'Merriweather': "'Merriweather', Georgia, 'Times New Roman', serif",
      
      // Display fallbacks
      'Oswald': "'Oswald', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      'Bebas Neue': "'Bebas Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      'Space Grotesk': "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      
      // Script fallbacks
      'Dancing Script': "'Dancing Script', cursive",
      'Great Vibes': "'Great Vibes', cursive",
      'Satisfy': "'Satisfy', cursive",
      'Pacifico': "'Pacifico', cursive",
      
      // Monospace fallbacks
      'JetBrains Mono': "'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace",
      'Source Code Pro': "'Source Code Pro', 'SF Mono', Monaco, 'Cascadia Code', monospace",
      'Space Mono': "'Space Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace",
      'Roboto Mono': "'Roboto Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace",
      
      // System fonts
      'system-ui': 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      'SF Mono': "'SF Mono', Monaco, 'Cascadia Code', monospace"
    };
    
    return {
      heading: fallbackMap[fonts.heading] || `'${fonts.heading}', sans-serif`,
      body: fallbackMap[fonts.body] || `'${fonts.body}', sans-serif`,
      accent: fallbackMap[fonts.accent] || `'${fonts.accent}', serif`
    };
  }

  /**
   * RESPONSIVE SIZING
   */
  getOptimalSizing(devicePriority) {
    if (devicePriority === 'mobile') {
      return {
        base_size: '16px', // Prevents zoom on iOS
        scale_ratio: 1.25, // Minor third scale
        h1: 'clamp(1.875rem, 4vw, 3rem)', // 30px to 48px
        h2: 'clamp(1.5rem, 3vw, 2.25rem)', // 24px to 36px
        h3: 'clamp(1.25rem, 2.5vw, 1.875rem)', // 20px to 30px
        body: 'clamp(1rem, 2vw, 1.125rem)', // 16px to 18px
        small: '0.875rem' // 14px
      };
    }
    
    return {
      base_size: '18px', // Desktop comfortable reading
      scale_ratio: 1.333, // Perfect fourth scale
      h1: 'clamp(2.25rem, 5vw, 4rem)', // 36px to 64px
      h2: 'clamp(1.875rem, 4vw, 3rem)', // 30px to 48px
      h3: 'clamp(1.5rem, 3vw, 2.25rem)', // 24px to 36px
      body: 'clamp(1.125rem, 2vw, 1.25rem)', // 18px to 20px
      small: '1rem' // 16px
    };
  }

  getOptimalSpacing() {
    return {
      letter_spacing: {
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
      },
      line_height: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2'
      }
    };
  }

  /**
   * PERSONALITY-BASED ADJUSTMENTS
   */
  getPersonalityFonts(personality) {
    const personalities = {
      professional: {
        style: 'professional',
        approach: 'Conservative, trustworthy fonts',
        font_preference: 'sans-serif',
        weight_preference: 'medium'
      },
      friendly: {
        style: 'friendly',
        approach: 'Warm, approachable fonts',
        font_preference: 'rounded_sans',
        weight_preference: 'normal'
      },
      bold: {
        style: 'bold',
        approach: 'Strong, confident fonts',
        font_preference: 'display',
        weight_preference: 'bold'
      },
      elegant: {
        style: 'elegant',
        approach: 'Sophisticated, refined fonts',
        font_preference: 'serif',
        weight_preference: 'light'
      },
      playful: {
        style: 'playful',
        approach: 'Fun, engaging fonts',
        font_preference: 'display',
        weight_preference: 'medium'
      },
      traditional: {
        style: 'traditional',
        approach: 'Classic, authoritative fonts',
        font_preference: 'serif',
        weight_preference: 'medium'
      }
    };
    
    return personalities[personality] || personalities.professional;
  }

  /**
   * UTILITY METHODS
   */
  getIndustryFontPattern(category) {
    return this.industryFonts.get(category) || this.industryFonts.get('professional');
  }

  calculatePerformanceScore(fonts) {
    let score = 10;
    
    // Deduct for Google Fonts (vs system fonts)
    Object.values(fonts).forEach(font => {
      if (this.isGoogleFont(font)) score -= 0.5;
    });
    
    // Deduct for heavy/decorative fonts
    const heavyFonts = ['Bebas Neue', 'Oswald', 'Fredoka One'];
    Object.values(fonts).forEach(font => {
      if (heavyFonts.includes(font)) score -= 1;
    });
    
    return Math.max(score, 6);
  }

  estimateLoadTime(fonts) {
    const googleFonts = Object.values(fonts).filter(font => this.isGoogleFont(font));
    return `${googleFonts.length * 40}ms`;
  }

  generateTypographyReasoning(category, personality) {
    const industryReason = this.getIndustryTypographyReason(category);
    const personalityReason = this.getPersonalityTypographyReason(personality);
    
    return `${industryReason} ${personalityReason}`;
  }

  getIndustryTypographyReason(category) {
    const reasons = {
      healthcare: 'Clean, trustworthy fonts build patient confidence and ensure critical readability.',
      restaurant: 'Fonts create dining atmosphere while maintaining menu readability.',
      saas: 'Modern fonts communicate innovation while ensuring interface clarity.',
      finance: 'Traditional authority fonts build professional trust and credibility.',
      realestate: 'Professional fonts establish market expertise and authority.',
      ecommerce: 'Clear, trustworthy fonts optimize product readability and conversions.',
      creative: 'Expressive fonts reflect personality while maintaining professional readability.'
    };
    
    return reasons[category] || 'Professional fonts optimized for industry credibility.';
  }

  getPersonalityTypographyReason(personality) {
    const reasons = {
      professional: 'Conservative font choices maintain professional credibility.',
      friendly: 'Warm, rounded fonts create approachable atmosphere.',
      bold: 'Strong, confident typography commands attention and respect.',
      elegant: 'Sophisticated serif fonts suggest premium quality and refinement.',
      playful: 'Fun, engaging fonts inspire interaction and connection.',
      traditional: 'Classic font choices establish authority and timeless appeal.'
    };
    
    return reasons[personality] || '';
  }

  getPerformanceOptimizations(fonts) {
    return this.performanceOptimizations.get('google_fonts');
  }

  getAccessibilityRules() {
    return {
      minimum_size: '16px for mobile (prevents zoom)',
      contrast_ratio: '4.5:1 for normal text, 3:1 for large text',
      line_height: 'Minimum 1.5 for body text',
      letter_spacing: 'Avoid negative letter-spacing for body text',
      font_weight: 'Avoid fonts lighter than 400 for body text',
      recommendations: [
        'Use relative units (rem, em) for scalability',
        'Test with screen readers',
        'Ensure keyboard navigation works with custom fonts',
        'Provide font loading feedback for slow connections'
      ]
    };
  }

  getWebFontStrategy() {
    return {
      loading_strategy: 'font-display: swap for immediate text visibility',
      fallback_strategy: 'System font stacks prevent layout shift',
      performance_budget: 'Maximum 3 font families, 4 weights each',
      optimization: 'Preload critical fonts, lazy-load decorative fonts',
      caching: 'Long-term cache headers for font files'
    };
  }
}

export default TypographyIntelligence;