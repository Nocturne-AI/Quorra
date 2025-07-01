// QUORRA Sacred Component Library
// 🛠️ Divine building blocks blessed by the Goddess of Smithing

export const COMPONENT_CATEGORIES = {
  // 🎨 LAYOUT FOUNDATIONS
  layout: {
    name: 'Layout Foundations',
    description: 'Sacred structures that frame divine content',
    icon: 'layout-dashboard',
    components: [
      'container', 'grid', 'flexbox', 'section', 'header', 'footer', 'sidebar'
    ]
  },
  
  // 🧭 NAVIGATION ELEMENTS
  navigation: {
    name: 'Navigation Elements',
    description: 'Pathways that guide divine journeys',
    icon: 'navigation',
    components: [
      'navbar', 'breadcrumbs', 'pagination', 'tabs', 'menu', 'dropdown'
    ]
  },
  
  // 🎯 CONTENT BLOCKS
  content: {
    name: 'Content Blocks',
    description: 'Vessels for sacred knowledge and wisdom',
    icon: 'file-text',
    components: [
      'hero', 'card', 'testimonial', 'feature', 'pricing', 'faq', 'blog-post'
    ]
  },
  
  // 📝 FORM ELEMENTS
  forms: {
    name: 'Form Elements',
    description: 'Sacred vessels for gathering divine information',
    icon: 'form-input',
    components: [
      'input', 'textarea', 'select', 'checkbox', 'radio', 'button', 'form'
    ]
  },
  
  // 📊 DATA DISPLAY
  data: {
    name: 'Data Display',
    description: 'Divine instruments for revealing patterns',
    icon: 'bar-chart',
    components: [
      'table', 'chart', 'graph', 'stats', 'progress', 'timeline'
    ]
  },
  
  // 🎭 INTERACTIVE ELEMENTS
  interactive: {
    name: 'Interactive Elements',
    description: 'Sacred tools for divine engagement',
    icon: 'cursor-pointer',
    components: [
      'modal', 'tooltip', 'accordion', 'slider', 'carousel', 'lightbox'
    ]
  }
};

export const SACRED_COMPONENTS = {
  // 🎨 HERO SECTIONS
  hero: {
    name: 'Divine Hero',
    category: 'content',
    description: 'Sacred proclamation that commands attention',
    
    variants: {
      // 🔥 FULL-SCREEN POWER
      fullscreen: {
        name: 'Goddess Proclamation',
        layout: 'Full viewport height with centered content',
        bestFor: ['landing-pages', 'brand-announcements'],
        structure: ['background-image', 'title', 'subtitle', 'cta-primary', 'cta-secondary']
      },
      
      // ⚡ SPLIT CONTENT
      split: {
        name: 'Divine Balance',
        layout: '50/50 content and visual split',
        bestFor: ['product-showcases', 'service-explanations'],
        structure: ['title', 'description', 'cta', 'hero-image']
      },
      
      // 🌟 MINIMAL ELEGANCE
      minimal: {
        name: 'Sacred Simplicity',
        layout: 'Clean centered content, minimal distractions',
        bestFor: ['professional-services', 'consultation-based'],
        structure: ['title', 'subtitle', 'single-cta']
      }
    },
    
    // Industry adaptations
    industryAdaptations: {
      healthcare: 'Compassionate messaging with trust-building elements',
      technology: 'Feature benefits with trial/demo CTAs',
      restaurant: 'Appetite appeal with reservation CTAs',
      finance: 'Authority messaging with consultation CTAs',
      ecommerce: 'Product showcases with purchase CTAs'
    }
  },

  // 🧭 NAVIGATION SYSTEMS
  navbar: {
    name: 'Sacred Navigation',
    category: 'navigation',
    description: 'Divine pathways for website exploration',
    
    variants: {
      horizontal: {
        name: 'Divine Horizon',
        layout: 'Traditional horizontal navigation bar',
        bestFor: ['desktop-first', 'professional-sites'],
        structure: ['logo', 'menu-items', 'cta-button']
      },
      
      sidebar: {
        name: 'Sacred Scroll',
        layout: 'Vertical sidebar navigation',
        bestFor: ['dashboards', 'content-heavy'],
        structure: ['logo', 'navigation-tree', 'user-info']
      },
      
      mobile_first: {
        name: 'Divine Mobility',
        layout: 'Hamburger menu optimized for mobile',
        bestFor: ['mobile-heavy', 'local-services'],
        structure: ['logo', 'hamburger-menu', 'mobile-cta']
      }
    }
  },

  // 🎯 CALL-TO-ACTION BUTTONS
  cta_button: {
    name: 'Divine Call to Action',
    category: 'interactive',
    description: 'Sacred summons that inspire divine action',
    
    variants: {
      primary: {
        name: 'Fire of Conversion',
        style: 'Bold gradient, maximum attention',
        psychology: 'Primary action, highest conversion goal',
        usage: ['main-cta', 'purchase', 'signup', 'book-now']
      },
      
      secondary: {
        name: 'Ember of Interest',
        style: 'Outline or subtle fill, supporting action',
        psychology: 'Secondary exploration, nurturing interest',
        usage: ['learn-more', 'browse', 'explore', 'watch-demo']
      },
      
      ghost: {
        name: 'Whisper of Possibility',
        style: 'Text-only with hover effects',
        psychology: 'Minimal commitment, gentle guidance',
        usage: ['navigation', 'footer-links', 'subtle-actions']
      }
    },
    
    industryCustomization: {
      healthcare: {
        primary: 'Book Appointment',
        secondary: 'Learn About Services',
        colors: 'Trust blue with healing accent'
      },
      technology: {
        primary: 'Start Free Trial',
        secondary: 'Watch Demo',
        colors: 'Innovation purple with tech blue'
      },
      restaurant: {
        primary: 'Reserve Table',
        secondary: 'View Menu',
        colors: 'Appetite red with warm orange'
      }
    }
  },

  // 🎭 TESTIMONIAL BLOCKS
  testimonial: {
    name: 'Sacred Testimonials',
    category: 'content',
    description: 'Divine validation through mortal voices',
    
    variants: {
      card_grid: {
        name: 'Chorus of Praise',
        layout: 'Grid of testimonial cards',
        bestFor: ['multiple-testimonials', 'social-proof'],
        structure: ['avatar', 'quote', 'name', 'title', 'rating']
      },
      
      featured: {
        name: 'Divine Endorsement',
        layout: 'Single large testimonial with emphasis',
        bestFor: ['hero-sections', 'key-testimonials'],
        structure: ['large-quote', 'customer-photo', 'credentials', 'logo']
      },
      
      carousel: {
        name: 'Sacred Rotation',
        layout: 'Rotating testimonials with smooth transitions',
        bestFor: ['space-limited', 'multiple-stories'],
        structure: ['quote-slider', 'customer-info', 'navigation-dots']
      }
    }
  },

  // 💰 PRICING TABLES
  pricing: {
    name: 'Sacred Pricing Tiers',
    category: 'content',
    description: 'Divine value exchange made transparent',
    
    tiers: {
      ember: {
        name: 'Ember',
        subtitle: 'The Divine Spark',
        position: 'Free tier to attract trials',
        styling: 'Orange gradient with spark effects'
      },
      
      hammer: {
        name: 'Hammer',
        subtitle: "Quorra's Sacred Tool",
        position: 'Most popular mid-tier',
        styling: 'Red gradient with popular badge'
      },
      
      anvil: {
        name: 'Anvil',
        subtitle: 'Her Blessed Workspace',
        position: 'Professional power tier',
        styling: 'Amber gradient with premium feel'
      },
      
      foundry: {
        name: 'Foundry',
        subtitle: 'Her Divine Realm',
        position: 'Enterprise solution',
        styling: 'Full fire gradient with crown'
      }
    },
    
    structure: ['tier-icon', 'tier-name', 'subtitle', 'price', 'billing-period', 'features-list', 'cta-button', 'additional-info']
  },

  // 📝 FORM COMPONENTS
  contact_form: {
    name: 'Sacred Communication',
    category: 'forms',
    description: 'Divine vessels for mortal messages',
    
    variants: {
      simple: {
        name: 'Swift Message',
        fields: ['name', 'email', 'message'],
        bestFor: ['quick-contact', 'general-inquiries']
      },
      
      detailed: {
        name: 'Comprehensive Inquiry',
        fields: ['name', 'email', 'phone', 'company', 'service-interest', 'message'],
        bestFor: ['business-inquiries', 'consultation-requests']
      },
      
      appointment: {
        name: 'Sacred Booking',
        fields: ['name', 'email', 'phone', 'service-type', 'preferred-date', 'message'],
        bestFor: ['healthcare', 'legal', 'professional-services']
      }
    }
  },

  // 🏢 FEATURE BLOCKS
  feature: {
    name: 'Divine Features',
    category: 'content',
    description: 'Sacred powers and capabilities revealed',
    
    layouts: {
      three_column: {
        name: 'Trinity of Power',
        structure: 'Three equal columns with icons',
        bestFor: ['core-features', 'service-overview']
      },
      
      alternating: {
        name: 'Divine Dance',
        structure: 'Alternating image-text blocks',
        bestFor: ['detailed-explanations', 'step-by-step']
      },
      
      centered: {
        name: 'Sacred Focus',
        structure: 'Single centered feature with emphasis',
        bestFor: ['key-differentiator', 'main-benefit']
      }
    }
  }
};

export const COMPONENT_SIZING = {
  // 📏 RESPONSIVE SCALING SYSTEM
  
  containers: {
    small: { maxWidth: '640px', padding: '1rem' },
    medium: { maxWidth: '768px', padding: '1.5rem' },
    large: { maxWidth: '1024px', padding: '2rem' },
    xlarge: { maxWidth: '1280px', padding: '2.5rem' },
    full: { maxWidth: '100%', padding: '1rem' }
  },
  
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  },
  
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px'
  }
};

export const ANIMATION_PRESETS = {
  // ✨ SACRED MOTION PATTERNS
  
  fadeIn: {
    name: 'Divine Manifestation',
    keyframes: 'opacity: 0 → 1',
    duration: '0.6s',
    easing: 'ease-out',
    use: 'Element entrance, content loading'
  },
  
  slideUp: {
    name: 'Ascension',
    keyframes: 'transform: translateY(30px) → translateY(0)',
    duration: '0.8s',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    use: 'Card reveals, content sections'
  },
  
  scaleIn: {
    name: 'Divine Growth',
    keyframes: 'transform: scale(0.8) → scale(1)',
    duration: '0.5s',
    easing: 'ease-out',
    use: 'Button interactions, modal appearances'
  },
  
  fireGlow: {
    name: 'Sacred Flame',
    keyframes: 'box-shadow: 0 0 10px color → 0 0 20px color',
    duration: '2s',
    easing: 'ease-in-out',
    iteration: 'infinite alternate',
    use: 'CTA buttons, important elements'
  }
};

export const ACCESSIBILITY_STANDARDS = {
  // ♿ DIVINE INCLUSIVITY REQUIREMENTS
  
  colorContrast: {
    normal: 4.5, // AA standard
    large: 3,    // AA standard for large text
    enhanced: 7  // AAA standard
  },
  
  focusStates: {
    ring: '2px solid #3B82F6',
    ringOffset: '2px',
    outline: 'none'
  },
  
  semanticMarkup: {
    headings: 'Proper h1-h6 hierarchy',
    landmarks: 'nav, main, aside, footer',
    lists: 'ul, ol for structured content',
    buttons: 'button element for interactions'
  },
  
  interactionTargets: {
    minSize: '44px', // Touch target minimum
    spacing: '8px'   // Between interactive elements
  }
};

// 🎯 UTILITY FUNCTIONS
export const getComponent = (componentName) => 
  SACRED_COMPONENTS[componentName] || null;

export const getComponentsByCategory = (category) => 
  Object.entries(SACRED_COMPONENTS)
    .filter(([key, component]) => component.category === category)
    .reduce((acc, [key, component]) => ({ ...acc, [key]: component }), {});

export const getIndustryComponent = (componentName, industry) => {
  const component = getComponent(componentName);
  if (!component) return null;
  
  const industryAdaptation = component.industryAdaptations?.[industry];
  return industryAdaptation ? { ...component, adaptation: industryAdaptation } : component;
};

export const generateComponentCSS = (componentName, variant = 'default') => {
  const component = getComponent(componentName);
  if (!component) return '';
  
  // Return basic CSS structure for component
  return `
    .${componentName} {
      /* Base styles */
    }
    
    .${componentName}--${variant} {
      /* Variant styles */
    }
  `;
};

export const getAnimationCSS = (animationName) => {
  const animation = ANIMATION_PRESETS[animationName];
  if (!animation) return '';
  
  return `
    animation: ${animationName} ${animation.duration} ${animation.easing} ${animation.iteration || 'once'};
  `;
};

export default {
  COMPONENT_CATEGORIES,
  SACRED_COMPONENTS,
  COMPONENT_SIZING,
  ANIMATION_PRESETS,
  ACCESSIBILITY_STANDARDS,
  getComponent,
  getComponentsByCategory,
  getIndustryComponent,
  generateComponentCSS,
  getAnimationCSS
};