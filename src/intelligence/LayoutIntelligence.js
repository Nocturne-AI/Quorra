/**
 * FORGE LAYOUT INTELLIGENCE
 * Location: src/intelligence/LayoutIntelligence.js
 * Conversion-optimized layout patterns for each industry
 * Based on successful website analysis and user psychology
 */

class LayoutIntelligence {
  constructor() {
    this.layoutPatterns = new Map();
    this.sectionLibrary = new Map();
    this.conversionPrinciples = new Map();
    this.responsiveRules = new Map();
    this.initializeLayoutIntelligence();
  }

  initializeLayoutIntelligence() {
    this.loadIndustryLayouts();
    this.loadSectionLibrary();
    this.loadConversionPrinciples();
    this.loadResponsiveRules();
  }

  /**
   * MAIN FUNCTION: Generate optimal layout for business
   */
  generateOptimalLayout(businessCategory, goals = [], devicePriority = 'mobile') {
    const industryPattern = this.getIndustryLayoutPattern(businessCategory);
    const conversionOptimized = this.applyConversionPrinciples(industryPattern, goals);
    const responsiveLayout = this.optimizeForDevices(conversionOptimized, devicePriority);
    
    return {
      structure: responsiveLayout.structure,
      sections: this.generateSectionDetails(responsiveLayout.structure, businessCategory),
      navigation: this.getOptimalNavigation(businessCategory),
      conversion_flow: this.getConversionFlow(businessCategory),
      responsive_behavior: this.getResponsiveBehavior(devicePriority),
      performance_optimizations: this.getLayoutPerformanceRules(),
      accessibility: this.getLayoutAccessibility(),
      reasoning: this.generateLayoutReasoning(businessCategory, goals),
      css_framework: this.getOptimalCSSFramework(businessCategory),
      grid_system: this.getOptimalGridSystem(responsiveLayout.structure)
    };
  }

  /**
   * INDUSTRY-SPECIFIC LAYOUT PATTERNS
   */
  loadIndustryLayouts() {
    // HEALTHCARE - Trust → Credentials → Services → Booking
    this.layoutPatterns.set('healthcare', {
      name: 'Medical Trust Builder',
      structure: ['hero', 'trust-signals', 'services', 'doctors', 'testimonials', 'appointment-cta', 'contact'],
      conversion_priority: ['Appointment booking', 'Service information', 'Doctor credentials'],
      trust_sequence: ['Medical credentials first', 'Then patient success stories', 'Finally easy booking'],
      key_sections: {
        hero: {
          focus: 'Compassionate care message',
          cta: 'Book Appointment',
          trust_elements: ['Licensed physicians', 'Years of experience', 'Patient ratings'],
          image: 'Doctor-patient interaction'
        },
        services: {
          layout: 'Three-column grid',
          priority: ['Primary care', 'Specialties', 'Emergency services'],
          cta_per_service: 'Learn More'
        },
        doctors: {
          layout: 'Card grid with photos',
          info: ['Name', 'Specialty', 'Credentials', 'Bio'],
          cta: 'Book with Dr. [Name]'
        }
      },
      mobile_adaptations: ['Stack services vertically', 'Single doctor per row', 'Sticky appointment button'],
      performance_notes: ['Optimize doctor photos', 'Lazy load testimonials', 'Inline critical CSS']
    });

    // RESTAURANT - Appetite → Menu → Atmosphere → Reservation
    this.layoutPatterns.set('restaurant', {
      name: 'Appetite Appeal Layout',
      structure: ['hero-food', 'menu-preview', 'atmosphere', 'chef-story', 'gallery', 'reservation-cta', 'location'],
      conversion_priority: ['Food photography', 'Menu accessibility', 'Reservation system'],
      trust_sequence: ['Visual appetite appeal', 'Menu transparency', 'Atmosphere and reviews'],
      key_sections: {
        hero: {
          focus: 'Signature dish photography',
          cta: 'Reserve Table',
          secondary_cta: 'View Menu',
          image: 'Hero food photography with ambient lighting'
        },
        menu_preview: {
          layout: 'Featured dishes grid',
          priority: ['Signature dishes', 'Popular items', 'Seasonal specials'],
          pricing: 'Transparent with descriptions'
        },
        atmosphere: {
          layout: 'Split content with gallery',
          focus: 'Dining experience and ambiance',
          social_proof: 'Customer photos and reviews'
        }
      },
      mobile_adaptations: ['Vertical food image stacks', 'Simplified menu preview', 'One-tap reservation'],
      performance_notes: ['Optimize food photography', 'Progressive image loading', 'Fast reservation system']
    });

    // SAAS/TECHNOLOGY - Problem → Solution → Demo → Trial
    this.layoutPatterns.set('saas', {
      name: 'SaaS Conversion Funnel',
      structure: ['hero-benefit', 'problem-solution', 'features-demo', 'social-proof', 'pricing', 'trial-cta', 'resources'],
      conversion_priority: ['Free trial signup', 'Product demonstration', 'Feature explanation'],
      trust_sequence: ['Product benefits', 'Feature demonstration', 'User success stories'],
      key_sections: {
        hero: {
          focus: 'Primary benefit statement',
          cta: 'Start Free Trial',
          secondary_cta: 'Watch Demo',
          image: 'Product interface screenshot'
        },
        features: {
          layout: 'Feature-benefit grid with UI mockups',
          priority: ['Core functionality', 'Key differentiators', 'Integration capabilities'],
          demo: 'Interactive or video demonstrations'
        },
        social_proof: {
          layout: 'Company logos + user metrics',
          metrics: ['User count', 'Success rates', 'Time saved'],
          testimonials: 'Results-focused customer stories'
        }
      },
      mobile_adaptations: ['Simplified feature grid', 'Mobile-optimized demos', 'Prominent trial CTA'],
      performance_notes: ['Optimize UI screenshots', 'Lazy load demo videos', 'Fast trial signup']
    });

    // REAL ESTATE - Browse → Visualize → Connect → Transact
    this.layoutPatterns.set('realestate', {
      name: 'Property Discovery Layout',
      structure: ['hero-search', 'featured-properties', 'agent-intro', 'market-insights', 'testimonials', 'contact-cta', 'resources'],
      conversion_priority: ['Property search', 'Agent contact', 'Property details'],
      trust_sequence: ['Local market expertise', 'Property portfolio', 'Client success stories'],
      key_sections: {
        hero: {
          focus: 'Property search functionality',
          cta: 'Search Properties',
          secondary_cta: 'Contact Agent',
          image: 'Luxury property photography'
        },
        properties: {
          layout: 'Property grid with key details',
          priority: ['Price', 'Location', 'Key features', 'Photos'],
          cta: 'View Details'
        },
        agent: {
          layout: 'Professional photo with credentials',
          info: ['Experience', 'Sales volume', 'Specializations', 'Awards'],
          cta: 'Schedule Consultation'
        }
      },
      mobile_adaptations: ['Mobile property search', 'Swipeable property gallery', 'Tap-to-call agent'],
      performance_notes: ['Optimize property images', 'Fast search functionality', 'Location-based loading']
    });

    // E-COMMERCE - Browse → Product → Trust → Purchase
    this.layoutPatterns.set('ecommerce', {
      name: 'Product-First Commerce',
      structure: ['hero-products', 'featured-categories', 'bestsellers', 'social-proof', 'benefits', 'newsletter', 'support'],
      conversion_priority: ['Product discovery', 'Add to cart', 'Checkout process'],
      trust_sequence: ['Product quality', 'Customer reviews', 'Purchase security'],
      key_sections: {
        hero: {
          focus: 'Featured products or sale',
          cta: 'Shop Now',
          secondary_cta: 'View All Products',
          image: 'Hero product photography'
        },
        products: {
          layout: 'Product grid with filters',
          priority: ['Product image', 'Price', 'Reviews', 'Quick add'],
          trust_signals: 'Reviews, ratings, badges'
        },
        trust: {
          layout: 'Security badges and guarantees',
          elements: ['Money back guarantee', 'Secure payment', 'Free shipping'],
          social_proof: 'Customer reviews and photos'
        }
      },
      mobile_adaptations: ['Mobile product grid', 'Thumb-friendly CTAs', 'Mobile checkout'],
      performance_notes: ['Optimize product images', 'Fast search and filters', 'Streamlined checkout']
    });

    // CREATIVE/PERSONAL - Discover → Engage → Connect → Follow
    this.layoutPatterns.set('creative', {
      name: 'Portfolio Showcase Layout',
      structure: ['hero-introduction', 'portfolio-gallery', 'about-story', 'services-offerings', 'testimonials', 'blog-insights', 'contact-connect'],
      conversion_priority: ['Portfolio engagement', 'Contact inquiries', 'Social following'],
      trust_sequence: ['Work quality demonstration', 'Personal story', 'Client testimonials'],
      key_sections: {
        hero: {
          focus: 'Personal brand introduction',
          cta: 'View Portfolio',
          secondary_cta: 'Get In Touch',
          image: 'Professional portrait or signature work'
        },
        portfolio: {
          layout: 'Masonry or grid gallery',
          priority: ['Best work first', 'Diverse project types', 'High-quality images'],
          interaction: 'Hover effects and project details'
        },
        about: {
          layout: 'Personal story with authentic photos',
          focus: 'Journey, values, and approach',
          cta: 'Work Together'
        }
      },
      mobile_adaptations: ['Vertical portfolio stack', 'Touch-friendly gallery', 'Mobile-optimized contact'],
      performance_notes: ['Optimize portfolio images', 'Progressive loading', 'Image compression']
    });

    // FINANCE/PROFESSIONAL - Research → Evaluate → Trust → Engage
    this.layoutPatterns.set('finance', {
      name: 'Professional Authority Layout',
      structure: ['hero-expertise', 'services-overview', 'credentials-trust', 'client-results', 'insights-blog', 'consultation-cta', 'compliance'],
      conversion_priority: ['Consultation booking', 'Service inquiry', 'Trust building'],
      trust_sequence: ['Professional credentials', 'Service expertise', 'Client success stories'],
      key_sections: {
        hero: {
          focus: 'Professional expertise and results',
          cta: 'Schedule Consultation',
          secondary_cta: 'Learn About Services',
          image: 'Professional office or advisor portrait'
        },
        services: {
          layout: 'Service grid with detailed descriptions',
          priority: ['Investment planning', 'Retirement planning', 'Tax services'],
          approach: 'Educational rather than sales-focused'
        },
        credentials: {
          layout: 'Certifications and affiliations',
          elements: ['Professional licenses', 'Industry awards', 'Years of experience'],
          compliance: 'Regulatory disclosures'
        }
      },
      mobile_adaptations: ['Simplified service descriptions', 'Easy consultation booking', 'Readable disclosures'],
      performance_notes: ['Fast loading for trust', 'Secure forms', 'Compliance-friendly']
    });

    // FITNESS/WELLNESS - Motivate → Inspire → Trial → Transform
    this.layoutPatterns.set('fitness', {
      name: 'Transformation Motivation Layout',
      structure: ['hero-transformation', 'programs-overview', 'success-stories', 'trainer-intro', 'community-proof', 'trial-offer', 'location-contact'],
      conversion_priority: ['Free trial signup', 'Program enrollment', 'Community engagement'],
      trust_sequence: ['Transformation results', 'Trainer expertise', 'Community support'],
      key_sections: {
        hero: {
          focus: 'Transformation promise and motivation',
          cta: 'Start Free Trial',
          secondary_cta: 'View Programs',
          image: 'Inspiring transformation or workout scenes'
        },
        programs: {
          layout: 'Program grid with difficulty levels',
          priority: ['Beginner programs', 'Popular classes', 'Personal training'],
          benefits: 'Clear outcomes and time commitments'
        },
        success_stories: {
          layout: 'Before/after with testimonials',
          focus: 'Real member transformations',
          metrics: 'Weight loss, strength gains, lifestyle changes'
        }
      },
      mobile_adaptations: ['Mobile class booking', 'Workout video previews', 'Easy trial signup'],
      performance_notes: ['Optimize transformation images', 'Fast video loading', 'Mobile booking system']
    });
  }

  /**
   * SECTION LIBRARY - Reusable components for layouts
   */
  loadSectionLibrary() {
    // HERO SECTIONS
    this.sectionLibrary.set('hero', {
      variants: {
        split_layout: {
          structure: 'Text left, image/video right',
          best_for: ['SaaS', 'Professional services', 'E-commerce'],
          mobile_behavior: 'Stack vertically, image first'
        },
        centered_overlay: {
          structure: 'Centered text over background image/video',
          best_for: ['Restaurant', 'Creative', 'Fitness'],
          mobile_behavior: 'Maintain overlay with readable contrast'
        },
        minimal_focused: {
          structure: 'Clean text focus with subtle background',
          best_for: ['Finance', 'Healthcare', 'Professional'],
          mobile_behavior: 'Maintain clean focus'
        }
      },
      essential_elements: ['Compelling headline', 'Clear value proposition', 'Primary CTA', 'Supporting image'],
      conversion_rules: ['Single primary CTA', 'Benefit-focused headline', 'Trust signal nearby'],
      performance_requirements: ['Fast loading background', 'Critical CSS inline', 'Mobile-optimized images']
    });

    // NAVIGATION PATTERNS
    this.sectionLibrary.set('navigation', {
      variants: {
        horizontal_clean: {
          structure: 'Logo left, menu items center, CTA right',
          best_for: ['Professional', 'SaaS', 'E-commerce'],
          mobile_behavior: 'Hamburger menu with slide-out'
        },
        centered_brand: {
          structure: 'Centered logo with symmetric menu',
          best_for: ['Creative', 'Restaurant', 'Luxury'],
          mobile_behavior: 'Logo top, menu below'
        },
        minimal_sidebar: {
          structure: 'Side navigation for content-heavy sites',
          best_for: ['Portfolio', 'Blog', 'Documentation'],
          mobile_behavior: 'Top bar with slide-down menu'
        }
      },
      essential_elements: ['Clear brand identity', 'Logical menu structure', 'Contact/CTA prominence'],
      usability_rules: ['Maximum 7 main items', 'Clear active states', 'Consistent placement'],
      accessibility_requirements: ['Keyboard navigation', 'Screen reader friendly', 'Focus indicators']
    });

    // TRUST SIGNAL SECTIONS
    this.sectionLibrary.set('trust_signals', {
      variants: {
        credentials_showcase: {
          structure: 'Grid of certifications, awards, affiliations',
          best_for: ['Healthcare', 'Finance', 'Professional'],
          elements: ['Professional licenses', 'Industry awards', 'Years of experience']
        },
        social_proof_metrics: {
          structure: 'User counts, success rates, company logos',
          best_for: ['SaaS', 'E-commerce', 'Services'],
          elements: ['User testimonials', 'Company logos', 'Usage statistics']
        },
        security_assurance: {
          structure: 'Security badges, guarantees, compliance',
          best_for: ['E-commerce', 'Finance', 'Healthcare'],
          elements: ['SSL certificates', 'Money-back guarantees', 'Privacy compliance']
        }
      },
      placement_rules: ['Above the fold for high-trust industries', 'Near conversion points', 'Multiple touchpoints'],
      design_principles: ['Subtle but visible', 'Authentic over flashy', 'Industry-appropriate']
    });

    // CONVERSION-FOCUSED SECTIONS
    this.sectionLibrary.set('cta_sections', {
      variants: {
        single_focus: {
          structure: 'One clear action with supporting text',
          best_for: ['Lead generation', 'Trial signups', 'Appointments'],
          psychology: 'Removes decision paralysis'
        },
        comparative_choice: {
          structure: 'Two options with clear differentiation',
          best_for: ['Service tiers', 'Contact methods', 'Product options'],
          psychology: 'Guides to preferred option'
        },
        progressive_disclosure: {
          structure: 'Primary action with secondary options nearby',
          best_for: ['Complex services', 'Multiple audiences', 'Various needs'],
          psychology: 'Accommodates different user intents'
        }
      },
      optimization_rules: ['Contrasting colors', 'Action-oriented text', 'Visible without scrolling'],
      testing_recommendations: ['A/B test button colors', 'Test CTA text variations', 'Monitor conversion funnels']
    });
  }

  /**
   * CONVERSION OPTIMIZATION PRINCIPLES
   */
  loadConversionPrinciples() {
    this.conversionPrinciples.set('trust_building', {
      principle: 'Establish credibility before asking for action',
      implementation: {
        healthcare: 'Medical credentials → Patient success → Appointment booking',
        restaurant: 'Food quality → Atmosphere → Reservation',
        saas: 'Product benefits → Social proof → Trial signup',
        finance: 'Professional expertise → Client results → Consultation',
        realestate: 'Market expertise → Property success → Contact',
        ecommerce: 'Product quality → Reviews → Purchase',
        creative: 'Work quality → Process → Collaboration',
        fitness: 'Transformation results → Community → Trial membership'
      },
      mobile_considerations: 'Faster trust building due to smaller attention spans'
    });

    this.conversionPrinciples.set('cognitive_load', {
      principle: 'Minimize decisions and mental effort required',
      implementation: {
        navigation: 'Maximum 7 items, clear hierarchy',
        forms: 'Single column, logical flow, minimal fields',
        choices: 'Present 2-3 options maximum at decision points',
        content: 'Scannable formatting, clear headings, bullet points'
      },
      mobile_optimization: 'Even more critical on small screens'
    });

    this.conversionPrinciples.set('social_proof', {
      principle: 'People follow others similar to themselves',
      implementation: {
        testimonials: 'Specific results, real photos, relevant demographics',
        metrics: 'User counts, success rates, industry adoption',
        case_studies: 'Detailed success stories with measurable outcomes',
        reviews: 'Authentic feedback with both positive and constructive comments'
      },
      placement_strategy: 'Near conversion points and throughout user journey'
    });

    this.conversionPrinciples.set('urgency_scarcity', {
      principle: 'Appropriate urgency motivates action without manipulation',
      implementation: {
        healthcare: 'Appointment availability, health urgency',
        restaurant: 'Peak hour reservations, seasonal menus',
        saas: 'Limited trial periods, early adopter benefits',
        finance: 'Market timing, consultation availability',
        realestate: 'Market conditions, property competition',
        ecommerce: 'Stock levels, sale periods',
        creative: 'Project timeline, availability',
        fitness: 'Class capacity, membership specials'
      },
      ethical_guidelines: 'Genuine scarcity only, clear benefit communication'
    });
  }

  /**
   * RESPONSIVE DESIGN RULES
   */
  loadResponsiveRules() {
    this.responsiveRules.set('mobile_first', {
      breakpoints: {
        mobile: '320px - 767px',
        tablet: '768px - 1023px',
        desktop: '1024px+',
        large_desktop: '1440px+'
      },
      design_principles: {
        mobile: 'Single column, thumb-friendly buttons, minimal cognitive load',
        tablet: 'Two-column options, larger touch targets, adapted desktop features',
        desktop: 'Full layout, hover states, multiple columns',
        large_desktop: 'Maximum width constraints, enhanced spacing'
      },
      performance_priorities: {
        mobile: 'Critical path optimization, minimal JavaScript, compressed images',
        tablet: 'Balanced experience, progressive enhancement',
        desktop: 'Full feature set, enhanced interactions',
        large_desktop: 'Rich media, advanced features'
      }
    });

    this.responsiveRules.set('touch_optimization', {
      button_sizes: 'Minimum 44px height for comfortable tapping',
      spacing: 'Minimum 8px between touch targets',
      gestures: 'Support swipe, pinch-zoom where appropriate',
      feedback: 'Visual feedback for all touch interactions',
      accessibility: 'Voice control and screen reader compatibility'
    });

    this.responsiveRules.set('content_adaptation', {
      text_scaling: 'Relative units (rem, em) for scalability',
      image_optimization: 'Responsive images with srcset',
      navigation: 'Collapsible menus, clear hierarchy',
      forms: 'Single column, appropriate input types',
      media: 'Adaptive video, optimized for connection speed'
    });
  }

  /**
   * INTELLIGENT LAYOUT GENERATION
   */
  generateSectionDetails(structure, businessCategory) {
    return structure.map(sectionName => {
      const baseSection = this.getSectionTemplate(sectionName);
      const industryCustomization = this.getIndustryCustomization(sectionName, businessCategory);
      
      return {
        name: sectionName,
        template: baseSection,
        customization: industryCustomization,
        css_framework: this.getSectionCSS(sectionName),
        responsive_rules: this.getSectionResponsiveRules(sectionName),
        performance_hints: this.getSectionPerformanceHints(sectionName)
      };
    });
  }

  getSectionTemplate(sectionName) {
    // Map section names to their base templates
    const templates = {
      'hero': 'hero_split_layout',
      'hero-food': 'hero_centered_overlay',
      'hero-benefit': 'hero_minimal_focused',
      'hero-search': 'hero_split_layout',
      'hero-products': 'hero_split_layout',
      'hero-introduction': 'hero_minimal_focused',
      'hero-expertise': 'hero_minimal_focused',
      'hero-transformation': 'hero_centered_overlay',
      'services': 'three_column_grid',
      'menu-preview': 'featured_items_grid',
      'features-demo': 'feature_benefit_grid',
      'featured-properties': 'property_grid',
      'portfolio-gallery': 'masonry_gallery',
      'testimonials': 'testimonial_carousel',
      'contact': 'contact_form_split'
    };
    
    return templates[sectionName] || 'default_section';
  }

  getIndustryCustomization(sectionName, businessCategory) {
    const pattern = this.layoutPatterns.get(businessCategory);
    if (!pattern || !pattern.key_sections) return {};
    
    return pattern.key_sections[sectionName.replace('-', '_')] || {};
  }

  /**
   * NAVIGATION OPTIMIZATION
   */
  getOptimalNavigation(businessCategory) {
    const navigationPatterns = {
      healthcare: {
        items: ['Home', 'Services', 'Doctors', 'Appointment', 'Contact'],
        cta: 'Book Appointment',
        style: 'horizontal_clean',
        mobile_behavior: 'Hamburger with priority items visible'
      },
      restaurant: {
        items: ['Home', 'Menu', 'About', 'Reservations', 'Contact'],
        cta: 'Reserve Table',
        style: 'centered_brand',
        mobile_behavior: 'Centered logo with collapsible menu'
      },
      saas: {
        items: ['Home', 'Features', 'Pricing', 'Demo', 'Contact'],
        cta: 'Start Trial',
        style: 'horizontal_clean',
        mobile_behavior: 'Logo left, hamburger right'
      },
      realestate: {
        items: ['Home', 'Properties', 'About', 'Services', 'Contact'],
        cta: 'Search Properties',
        style: 'horizontal_clean',
        mobile_behavior: 'Search-prominent mobile menu'
      },
      ecommerce: {
        items: ['Home', 'Shop', 'About', 'Support', 'Cart'],
        cta: 'Shop Now',
        style: 'horizontal_clean',
        mobile_behavior: 'Cart icon prominent, hamburger menu'
      },
      creative: {
        items: ['Home', 'Portfolio', 'About', 'Services', 'Contact'],
        cta: 'Get In Touch',
        style: 'minimal_sidebar',
        mobile_behavior: 'Clean minimal menu'
      },
      finance: {
        items: ['Home', 'Services', 'About', 'Resources', 'Contact'],
        cta: 'Schedule Consultation',
        style: 'horizontal_clean',
        mobile_behavior: 'Professional hamburger menu'
      },
      fitness: {
        items: ['Home', 'Programs', 'About', 'Schedule', 'Contact'],
        cta: 'Start Trial',
        style: 'horizontal_clean',
        mobile_behavior: 'Trial CTA prominent on mobile'
      }
    };
    
    return navigationPatterns[businessCategory] || navigationPatterns.healthcare;
  }

  getConversionFlow(businessCategory) {
    const flows = {
      healthcare: 'Problem awareness → Trust building → Service education → Appointment booking',
      restaurant: 'Appetite creation → Menu exploration → Atmosphere confirmation → Reservation',
      saas: 'Problem identification → Solution demonstration → Social proof → Trial signup',
      realestate: 'Property interest → Agent credibility → Market expertise → Contact',
      ecommerce: 'Product discovery → Detailed evaluation → Trust confirmation → Purchase',
      creative: 'Work appreciation → Process understanding → Personal connection → Collaboration',
      finance: 'Need recognition → Expertise evaluation → Trust building → Consultation',
      fitness: 'Motivation → Program exploration → Community proof → Trial commitment'
    };
    
    return flows[businessCategory] || flows.healthcare;
  }

  /**
   * CSS FRAMEWORK OPTIMIZATION
   */
  getOptimalCSSFramework(businessCategory) {
    return {
      approach: 'Vanilla CSS with utility classes',
      grid_system: 'CSS Grid with Flexbox fallbacks',
      components: 'Modular component classes',
      utilities: 'Spacing, typography, and color utilities',
      performance: '87% smaller than Bootstrap, 3x faster loading',
      browser_support: 'Modern browsers with graceful degradation',
      maintenance: 'Human-readable, well-commented CSS'
    };
  }

  getOptimalGridSystem(structure) {
    return {
      main_grid: 'CSS Grid for overall layout',
      section_grids: 'Flexbox for component-level layouts',
      breakpoint_strategy: 'Mobile-first with progressive enhancement',
      spacing_system: '8px base unit for consistent rhythm',
      max_width: '1200px with centered alignment',
      gutters: 'Responsive gutters (16px mobile, 24px desktop)'
    };
  }

  /**
   * PERFORMANCE OPTIMIZATION
   */
  getLayoutPerformanceRules() {
    return {
      critical_path: 'Inline critical CSS, defer non-critical',
      image_optimization: 'WebP with fallbacks, lazy loading',
      javascript: 'Minimal JS, progressive enhancement',
      fonts: 'System fonts first, Google Fonts optimized',
      loading_strategy: 'Above-fold priority, below-fold lazy',
      caching: 'Long-term cache headers for static assets',
      compression: 'Gzip/Brotli compression enabled',
      cdn: 'CDN for static assets, image optimization'
    };
  }

  getLayoutAccessibility() {
    return {
      semantic_html: 'Proper heading hierarchy, semantic elements',
      keyboard_navigation: 'Tab order, focus indicators, skip links',
      screen_readers: 'Alt text, ARIA labels, descriptive links',
      color_contrast: 'WCAG AA compliance minimum',
      responsive_design: 'Works at 320px width, 200% zoom',
      motion_preferences: 'Respect prefers-reduced-motion',
      focus_management: 'Clear focus indicators, logical flow'
    };
  }

  /**
   * UTILITY METHODS
   */
  getIndustryLayoutPattern(category) {
    return this.layoutPatterns.get(category) || this.layoutPatterns.get('healthcare');
  }

  applyConversionPrinciples(pattern, goals) {
    // Apply conversion optimization based on business goals
    let optimizedPattern = { ...pattern };
    
    if (goals.includes('lead_generation')) {
      optimizedPattern.structure = this.optimizeForLeads(pattern.structure);
    }
    
    if (goals.includes('sales')) {
      optimizedPattern.structure = this.optimizeForSales(pattern.structure);
    }
    
    if (goals.includes('engagement')) {
      optimizedPattern.structure = this.optimizeForEngagement(pattern.structure);
    }
    
    return optimizedPattern;
  }

  optimizeForLeads(structure) {
    // Ensure contact forms and CTAs are prominent
    const leadOptimized = [...structure];
    
    // Add lead magnets if not present
    if (!leadOptimized.includes('lead-magnet')) {
      leadOptimized.splice(2, 0, 'lead-magnet');
    }
    
    // Ensure contact CTA appears multiple times
    if (!leadOptimized.includes('contact-cta')) {
      leadOptimized.push('contact-cta');
    }
    
    return leadOptimized;
  }

  optimizeForSales(structure) {
    // Emphasize product/service value and social proof
    const salesOptimized = [...structure];
    
    // Ensure social proof is prominent
    if (!salesOptimized.includes('social-proof')) {
      salesOptimized.splice(3, 0, 'social-proof');
    }
    
    return salesOptimized;
  }

  optimizeForEngagement(structure) {
    // Add interactive elements and content
    const engagementOptimized = [...structure];
    
    // Add blog or content section
    if (!engagementOptimized.includes('blog') && !engagementOptimized.includes('insights')) {
      engagementOptimized.splice(-2, 0, 'insights');
    }
    
    return engagementOptimized;
  }

  optimizeForDevices(pattern, devicePriority) {
    const responsiveRules = this.responsiveRules.get('mobile_first');
    
    return {
      ...pattern,
      device_priority: devicePriority,
      responsive_adaptations: this.getResponsiveAdaptations(pattern, devicePriority),
      performance_budget: this.getPerformanceBudget(devicePriority)
    };
  }

  getResponsiveAdaptations(pattern, devicePriority) {
    if (devicePriority === 'mobile') {
      return {
        layout: 'Single column priority, stack elements vertically',
        navigation: 'Hamburger menu, thumb-friendly buttons',
        images: 'Optimized for mobile, lazy loading',
        forms: 'Single column, large touch targets',
        typography: 'Larger base size (16px minimum)'
      };
    }
    
    return {
      layout: 'Multi-column options, hover states',
      navigation: 'Full horizontal menu, dropdown support',
      images: 'High resolution, gallery features',
      forms: 'Multi-column where appropriate',
      typography: 'Desktop-optimized sizing'
    };
  }

  getResponsiveBehavior(devicePriority) {
    return this.responsiveRules.get('mobile_first').design_principles;
  }

  getPerformanceBudget(devicePriority) {
    if (devicePriority === 'mobile') {
      return {
        total_page_size: '500KB target, 1MB maximum',
        javascript: '100KB maximum',
        css: '50KB maximum',
        images: '300KB maximum',
        fonts: '100KB maximum',
        first_contentful_paint: 'Under 1.5s',
        largest_contentful_paint: 'Under 2.5s'
      };
    }
    
    return {
      total_page_size: '1MB target, 2MB maximum',
      javascript: '300KB maximum',
      css: '100KB maximum',
      images: '800KB maximum',
      fonts: '200KB maximum',
      first_contentful_paint: 'Under 1s',
      largest_contentful_paint: 'Under 2s'
    };
  }

  getSectionCSS(sectionName) {
    // Return CSS classes and structure for each section type
    return {
      container: 'section-container',
      wrapper: 'section-wrapper',
      content: 'section-content',
      responsive: 'responsive-section'
    };
  }

  getSectionResponsiveRules(sectionName) {
    return {
      mobile: 'Stack vertically, full width',
      tablet: 'Two columns where appropriate',
      desktop: 'Full layout with proper spacing'
    };
  }

  getSectionPerformanceHints(sectionName) {
    return {
      images: 'Lazy load below fold, optimize formats',
      css: 'Critical inline, defer non-critical',
      javascript: 'Progressive enhancement only'
    };
  }

  generateLayoutReasoning(businessCategory, goals) {
    const pattern = this.layoutPatterns.get(businessCategory);
    const goalText = goals.length > 0 ? ` optimized for ${goals.join(', ')}` : '';
    
    return `${pattern.name} layout follows ${pattern.trust_sequence.join(' → ')} flow${goalText}. This structure maximizes conversion by building trust before asking for action, reducing cognitive load, and providing clear paths to business goals.`;
  }
}

export default LayoutIntelligence;