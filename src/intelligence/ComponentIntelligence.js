/**
 * FORGE COMPONENT INTELLIGENCE
 * Location: src/intelligence/ComponentIntelligence.js
 * UI component patterns optimized for conversion and performance
 * Industry-specific component variations with clean CSS generation
 */

class ComponentIntelligence {
  constructor() {
    this.componentLibrary = new Map();
    this.componentVariations = new Map();
    this.performanceRules = new Map();
    this.accessibilityRules = new Map();
    this.initializeComponentIntelligence();
  }

  initializeComponentIntelligence() {
    this.loadComponentLibrary();
    this.loadIndustryVariations();
    this.loadPerformanceRules();
    this.loadAccessibilityRules();
  }

  /**
   * MAIN FUNCTION: Generate optimal components for business
   */
  generateOptimalComponents(businessCategory, componentType, requirements = {}) {
    const baseComponent = this.getBaseComponent(componentType);
    const industryVariation = this.getIndustryVariation(componentType, businessCategory);
    const optimizedComponent = this.applyOptimizations(baseComponent, industryVariation, requirements);
    
    return {
      component: optimizedComponent,
      html: this.generateHTML(optimizedComponent),
      css: this.generateCSS(optimizedComponent),
      javascript: this.generateJavaScript(optimizedComponent),
      accessibility: this.getAccessibilityFeatures(optimizedComponent),
      performance: this.getPerformanceOptimizations(optimizedComponent),
      responsive: this.getResponsiveBehavior(optimizedComponent),
      testing: this.getTestingGuidance(optimizedComponent),
      reasoning: this.generateComponentReasoning(businessCategory, componentType)
    };
  }

  /**
   * CORE COMPONENT LIBRARY
   */
  loadComponentLibrary() {
    // BUTTON COMPONENTS
    this.componentLibrary.set('button', {
      name: 'Button',
      variants: ['primary', 'secondary', 'outline', 'text', 'icon'],
      base_structure: {
        element: 'button',
        attributes: ['type', 'disabled', 'aria-label'],
        states: ['default', 'hover', 'active', 'disabled', 'loading'],
        accessibility: ['focus-visible', 'keyboard-nav', 'screen-reader']
      },
      css_properties: {
        display: 'inline-flex',
        align_items: 'center',
        justify_content: 'center',
        padding: 'var(--button-padding)',
        border: 'var(--button-border)',
        border_radius: 'var(--button-radius)',
        font_family: 'var(--font-body)',
        font_weight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      },
      performance_considerations: ['Avoid complex animations', 'Use CSS transforms', 'Minimize repaints']
    });

    // HERO SECTION COMPONENTS
    this.componentLibrary.set('hero', {
      name: 'Hero Section',
      variants: ['split', 'centered', 'overlay', 'minimal'],
      base_structure: {
        element: 'section',
        attributes: ['role="banner"', 'aria-labelledby'],
        children: ['heading', 'subheading', 'cta_buttons', 'supporting_image'],
        accessibility: ['heading-hierarchy', 'alt-text', 'color-contrast']
      },
      css_properties: {
        display: 'flex',
        align_items: 'center',
        min_height: '60vh',
        padding: 'var(--section-padding)',
        background: 'var(--hero-background)',
        color: 'var(--hero-text)'
      },
      performance_considerations: ['Optimize hero images', 'Critical CSS inline', 'Lazy load below-fold']
    });

    // NAVIGATION COMPONENTS
    this.componentLibrary.set('navigation', {
      name: 'Navigation',
      variants: ['horizontal', 'sidebar', 'mobile', 'dropdown'],
      base_structure: {
        element: 'nav',
        attributes: ['role="navigation"', 'aria-label'],
        children: ['logo', 'menu_items', 'cta_button', 'mobile_toggle'],
        accessibility: ['skip-links', 'keyboard-nav', 'aria-expanded']
      },
      css_properties: {
        display: 'flex',
        align_items: 'center',
        justify_content: 'space-between',
        padding: 'var(--nav-padding)',
        background: 'var(--nav-background)',
        border_bottom: 'var(--nav-border)'
      },
      performance_considerations: ['Minimal JavaScript', 'CSS-only dropdowns preferred', 'Fast mobile toggle']
    });

    // CARD COMPONENTS
    this.componentLibrary.set('card', {
      name: 'Card',
      variants: ['product', 'service', 'testimonial', 'blog', 'team'],
      base_structure: {
        element: 'article',
        attributes: ['role="article"', 'aria-labelledby'],
        children: ['image', 'header', 'content', 'footer', 'cta'],
        accessibility: ['heading-structure', 'image-alt', 'link-purpose']
      },
      css_properties: {
        display: 'flex',
        flex_direction: 'column',
        background: 'var(--card-background)',
        border_radius: 'var(--card-radius)',
        box_shadow: 'var(--card-shadow)',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      },
      performance_considerations: ['Optimize card images', 'Avoid expensive shadows', 'Efficient hover effects']
    });

    // FORM COMPONENTS
    this.componentLibrary.set('form', {
      name: 'Form',
      variants: ['contact', 'newsletter', 'appointment', 'checkout', 'search'],
      base_structure: {
        element: 'form',
        attributes: ['method', 'action', 'novalidate', 'aria-labelledby'],
        children: ['fieldsets', 'inputs', 'labels', 'submit_button', 'error_messages'],
        accessibility: ['label-association', 'error-announcement', 'validation-feedback']
      },
      css_properties: {
        display: 'flex',
        flex_direction: 'column',
        gap: 'var(--form-gap)',
        max_width: 'var(--form-max-width)',
        padding: 'var(--form-padding)',
        background: 'var(--form-background)'
      },
      performance_considerations: ['Client-side validation', 'Progressive enhancement', 'Fast submission feedback']
    });

    // GALLERY COMPONENTS
    this.componentLibrary.set('gallery', {
      name: 'Gallery',
      variants: ['grid', 'masonry', 'carousel', 'lightbox'],
      base_structure: {
        element: 'section',
        attributes: ['role="img"', 'aria-label'],
        children: ['images', 'captions', 'navigation', 'controls'],
        accessibility: ['image-descriptions', 'keyboard-controls', 'focus-management']
      },
      css_properties: {
        display: 'grid',
        grid_template_columns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'var(--gallery-gap)',
        padding: 'var(--gallery-padding)'
      },
      performance_considerations: ['Lazy loading', 'Image optimization', 'Progressive enhancement']
    });

    // TESTIMONIAL COMPONENTS
    this.componentLibrary.set('testimonial', {
      name: 'Testimonial',
      variants: ['single', 'carousel', 'grid', 'featured'],
      base_structure: {
        element: 'blockquote',
        attributes: ['cite', 'aria-label'],
        children: ['quote', 'author', 'photo', 'credentials', 'rating'],
        accessibility: ['quote-attribution', 'image-alt', 'rating-description']
      },
      css_properties: {
        display: 'flex',
        flex_direction: 'column',
        padding: 'var(--testimonial-padding)',
        background: 'var(--testimonial-background)',
        border_radius: 'var(--testimonial-radius)',
        position: 'relative'
      },
      performance_considerations: ['Optimize author photos', 'Minimal animations', 'Fast carousel transitions']
    });
  }

  /**
   * INDUSTRY-SPECIFIC COMPONENT VARIATIONS
   */
  loadIndustryVariations() {
    // HEALTHCARE BUTTON VARIATIONS
    this.componentVariations.set('healthcare-button', {
      primary: {
        background: '#2563EB', // Trust blue
        color: '#FFFFFF',
        border: 'none',
        border_radius: '0.5rem',
        padding: '0.875rem 2rem',
        font_weight: '600',
        box_shadow: '0 2px 4px rgba(37, 99, 235, 0.2)',
        hover: {
          background: '#1E40AF',
          transform: 'translateY(-1px)',
          box_shadow: '0 4px 8px rgba(37, 99, 235, 0.3)'
        },
        text_examples: ['Book Appointment', 'Schedule Consultation', 'Get Care Now'],
        accessibility: 'High contrast, clear purpose, medical urgency appropriate'
      },
      secondary: {
        background: 'transparent',
        color: '#2563EB',
        border: '2px solid #2563EB',
        border_radius: '0.5rem',
        padding: '0.875rem 2rem',
        font_weight: '500',
        hover: {
          background: '#2563EB',
          color: '#FFFFFF'
        },
        text_examples: ['Learn More', 'View Services', 'Read About Us'],
        accessibility: 'Clear contrast, secondary action indication'
      }
    });

    // RESTAURANT BUTTON VARIATIONS
    this.componentVariations.set('restaurant-button', {
      primary: {
        background: '#F97316', // Appetite orange
        color: '#FFFFFF',
        border: 'none',
        border_radius: '0.75rem',
        padding: '1rem 2.5rem',
        font_weight: '600',
        box_shadow: '0 3px 6px rgba(249, 115, 22, 0.3)',
        hover: {
          background: '#EA580C',
          transform: 'translateY(-2px)',
          box_shadow: '0 6px 12px rgba(249, 115, 22, 0.4)'
        },
        text_examples: ['Reserve Table', 'Order Now', 'Book Dining'],
        accessibility: 'Appetite-stimulating color, clear dining action'
      },
      secondary: {
        background: 'transparent',
        color: '#92400E',
        border: '2px solid #92400E',
        border_radius: '0.75rem',
        padding: '1rem 2.5rem',
        font_weight: '500',
        hover: {
          background: '#92400E',
          color: '#FFFFFF'
        },
        text_examples: ['View Menu', 'See Location', 'Call Restaurant'],
        accessibility: 'Earth tone secondary, supporting action'
      }
    });

    // SAAS BUTTON VARIATIONS
    this.componentVariations.set('saas-button', {
      primary: {
        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        color: '#FFFFFF',
        border: 'none',
        border_radius: '0.625rem',
        padding: '0.875rem 2rem',
        font_weight: '600',
        box_shadow: '0 4px 14px rgba(99, 102, 241, 0.3)',
        hover: {
          transform: 'translateY(-2px)',
          box_shadow: '0 6px 20px rgba(99, 102, 241, 0.4)'
        },
        text_examples: ['Start Free Trial', 'Get Started', 'Try Now'],
        accessibility: 'Innovation gradient, trial-focused language'
      },
      secondary: {
        background: 'transparent',
        color: '#6366F1',
        border: '2px solid #6366F1',
        border_radius: '0.625rem',
        padding: '0.875rem 2rem',
        font_weight: '500',
        hover: {
          background: '#6366F1',
          color: '#FFFFFF'
        },
        text_examples: ['Watch Demo', 'Learn More', 'See Features'],
        accessibility: 'Tech blue secondary, exploration action'
      }
    });

    // HERO SECTION VARIATIONS
    this.componentVariations.set('healthcare-hero', {
      structure: 'split_layout',
      content: {
        headline: 'Compassionate Care, Every Step of the Way',
        subheadline: 'Comprehensive healthcare for [Location] and surrounding communities',
        primary_cta: 'Book Appointment',
        secondary_cta: 'Learn More',
        trust_signals: ['Licensed Physicians', '5-Star Rated', 'Telehealth Available']
      },
      styling: {
        background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)',
        text_color: '#1F2937',
        accent_color: '#2563EB',
        image: 'Doctor-patient interaction in clean medical environment'
      },
      mobile_adaptations: 'Stack vertically, emphasize appointment booking'
    });

    this.componentVariations.set('restaurant-hero', {
      structure: 'centered_overlay',
      content: {
        headline: 'Exceptional Dining Experience',
        subheadline: 'Fresh ingredients, authentic flavors, memorable moments',
        primary_cta: 'Reserve Table',
        secondary_cta: 'View Menu',
        atmosphere_indicators: ['Fine Dining', 'Seasonal Menu', 'Wine Selection']
      },
      styling: {
        background: 'Hero food photography with subtle dark overlay',
        text_color: '#FFFFFF',
        accent_color: '#F97316',
        typography: 'Elegant serif for fine dining feel'
      },
      mobile_adaptations: 'Maintain overlay readability, prominent reservation CTA'
    });

    this.componentVariations.set('saas-hero', {
      structure: 'split_layout',
      content: {
        headline: 'Boost Productivity. Simplify Workflows.',
        subheadline: 'All-in-one platform for task management, collaboration, and analytics',
        primary_cta: 'Start Free Trial',
        secondary_cta: 'Watch Demo',
        proof_points: ['2K+ teams', '4.8/5 rating', 'Free 14-day trial']
      },
      styling: {
        background: 'Clean white with subtle tech patterns',
        text_color: '#1F2937',
        accent_color: '#6366F1',
        image: 'Clean product interface screenshots'
      },
      mobile_adaptations: 'Simplified feature presentation, trial CTA prominence'
    });

    // FORM VARIATIONS
    this.componentVariations.set('healthcare-appointment-form', {
      fields: [
        { type: 'text', name: 'name', label: 'Full Name', required: true },
        { type: 'email', name: 'email', label: 'Email Address', required: true },
        { type: 'tel', name: 'phone', label: 'Phone Number', required: true },
        { type: 'select', name: 'service', label: 'Select Service', required: true },
        { type: 'select', name: 'doctor', label: 'Preferred Doctor', required: false },
        { type: 'date', name: 'date', label: 'Preferred Date', required: true },
        { type: 'textarea', name: 'message', label: 'Additional Information', required: false }
      ],
      styling: {
        layout: 'single_column',
        spacing: '1.5rem',
        border_radius: '0.5rem',
        background: '#FFFFFF',
        border: '1px solid #E5E7EB'
      },
      validation: {
        real_time: true,
        accessibility: 'Screen reader announcements',
        error_styling: 'Red border with descriptive message'
      },
      submit_button: {
        text: 'Request Appointment',
        style: 'healthcare-button-primary',
        loading_state: 'Submitting Request...'
      }
    });

    this.componentVariations.set('restaurant-reservation-form', {
      fields: [
        { type: 'text', name: 'name', label: 'Name', required: true },
        { type: 'email', name: 'email', label: 'Email', required: true },
        { type: 'tel', name: 'phone', label: 'Phone', required: true },
        { type: 'date', name: 'date', label: 'Date', required: true },
        { type: 'time', name: 'time', label: 'Time', required: true },
        { type: 'number', name: 'guests', label: 'Number of Guests', required: true, min: 1, max: 12 },
        { type: 'textarea', name: 'requests', label: 'Special Requests', required: false }
      ],
      styling: {
        layout: 'two_column_responsive',
        spacing: '1.25rem',
        border_radius: '0.75rem',
        background: '#FFFBEB',
        border: '1px solid #F3E8FF'
      },
      submit_button: {
        text: 'Reserve Table',
        style: 'restaurant-button-primary',
        loading_state: 'Confirming Reservation...'
      }
    });
  }

  /**
   * PERFORMANCE OPTIMIZATION RULES
   */
  loadPerformanceRules() {
    this.performanceRules.set('css_optimization', {
      principles: [
        'Use CSS custom properties for theming',
        'Minimize specificity conflicts',
        'Avoid deep nesting',
        'Use efficient selectors',
        'Leverage CSS containment'
      ],
      size_targets: {
        component_css: '< 5KB per component',
        total_css: '< 50KB for entire page',
        critical_css: '< 10KB above-the-fold'
      },
      loading_strategy: {
        critical: 'Inline critical component CSS',
        non_critical: 'Load asynchronously',
        unused: 'Eliminate unused styles'
      }
    });

    this.performanceRules.set('javascript_optimization', {
      principles: [
        'Progressive enhancement over JavaScript dependence',
        'Use modern browser APIs',
        'Minimize DOM manipulation',
        'Implement lazy loading',
        'Avoid heavy framework dependencies'
      ],
      size_targets: {
        component_js: '< 2KB per interactive component',
        total_js: '< 100KB for entire page',
        critical_js: '< 20KB above-the-fold'
      },
      loading_strategy: {
        critical: 'Inline essential scripts',
        interactive: 'Load on user interaction',
        enhancement: 'Load asynchronously'
      }
    });

    this.performanceRules.set('image_optimization', {
      formats: ['WebP with JPEG fallback', 'AVIF for supported browsers'],
      responsive: 'Use srcset for different screen sizes',
      lazy_loading: 'Native lazy loading with intersection observer fallback',
      compression: 'Optimize for web while maintaining quality',
      sizing: 'Proper width/height attributes to prevent layout shift'
    });
  }

  /**
   * ACCESSIBILITY RULES
   */
  loadAccessibilityRules() {
    this.accessibilityRules.set('wcag_compliance', {
      level: 'AA',
      requirements: {
        color_contrast: '4.5:1 for normal text, 3:1 for large text',
        keyboard_navigation: 'All interactive elements keyboard accessible',
        screen_readers: 'Proper ARIA labels and semantic HTML',
        focus_management: 'Visible focus indicators and logical tab order',
        responsive_design: 'Works at 320px width and 200% zoom'
      }
    });

    this.accessibilityRules.set('component_specific', {
      buttons: {
        requirements: ['Clear purpose in text or aria-label', 'Minimum 44x44px touch target', 'Disabled state indication'],
        aria_attributes: ['aria-pressed for toggle buttons', 'aria-expanded for disclosure buttons'],
        keyboard_support: ['Enter and Space key activation', 'Escape for dismissal where appropriate']
      },
      forms: {
        requirements: ['Associated labels', 'Error identification', 'Success confirmation'],
        aria_attributes: ['aria-invalid for errors', 'aria-describedby for hints', 'aria-required for required fields'],
        keyboard_support: ['Logical tab order', 'Submit on Enter', 'Clear error navigation']
      },
      navigation: {
        requirements: ['Skip links', 'Clear hierarchy', 'Current page indication'],
        aria_attributes: ['aria-current for active page', 'aria-expanded for dropdowns', 'aria-label for nav regions'],
        keyboard_support: ['Arrow key navigation', 'Escape to close menus', 'Tab to next section']
      }
    });
  }

  /**
   * HTML GENERATION
   */
  generateHTML(component) {
    const htmlTemplates = {
      'button': this.generateButtonHTML(component),
      'hero': this.generateHeroHTML(component),
      'navigation': this.generateNavigationHTML(component),
      'card': this.generateCardHTML(component),
      'form': this.generateFormHTML(component),
      'gallery': this.generateGalleryHTML(component),
      'testimonial': this.generateTestimonialHTML(component)
    };
    
    return htmlTemplates[component.type] || `<!-- ${component.type} component -->`;
  }

  generateButtonHTML(component) {
    const variant = component.variant || 'primary';
    const text = component.text || 'Button';
    const ariaLabel = component.ariaLabel || component.text;
    
    return `<button 
      type="button" 
      class="btn btn-${variant} ${component.cssClass || ''}"
      aria-label="${ariaLabel}"
      ${component.disabled ? 'disabled' : ''}
    >
      ${component.icon ? `<span class="btn-icon">${component.icon}</span>` : ''}
      <span class="btn-text">${text}</span>
      ${component.loading ? '<span class="btn-spinner" aria-hidden="true"></span>' : ''}
    </button>`;
  }

  generateHeroHTML(component) {
    return `<section class="hero hero-${component.variant}" role="banner" aria-labelledby="hero-heading">
      <div class="hero-container">
        <div class="hero-content">
          <h1 id="hero-heading" class="hero-headline">${component.headline}</h1>
          <p class="hero-subheadline">${component.subheadline}</p>
          ${component.trustSignals ? `
            <div class="hero-trust-signals">
              ${component.trustSignals.map(signal => `<span class="trust-signal">${signal}</span>`).join('')}
            </div>
          ` : ''}
          <div class="hero-actions">
            <button type="button" class="btn btn-primary btn-lg">${component.primaryCTA}</button>
            ${component.secondaryCTA ? `<button type="button" class="btn btn-outline btn-lg">${component.secondaryCTA}</button>` : ''}
          </div>
        </div>
        ${component.image ? `
          <div class="hero-image">
            <img src="${component.image.src}" alt="${component.image.alt}" loading="eager" />
          </div>
        ` : ''}
      </div>
    </section>`;
  }

  generateFormHTML(component) {
    return `<form class="form form-${component.variant}" method="post" novalidate aria-labelledby="form-heading">
      <h2 id="form-heading" class="form-heading">${component.heading}</h2>
      ${component.fields.map(field => this.generateFieldHTML(field)).join('')}
      <button type="submit" class="btn btn-primary btn-lg form-submit">
        ${component.submitText}
      </button>
    </form>`;
  }

  generateFieldHTML(field) {
    const inputId = `field-${field.name}`;
    const errorId = `error-${field.name}`;
    
    return `<div class="form-field">
      <label for="${inputId}" class="form-label">
        ${field.label}
        ${field.required ? '<span class="required" aria-label="required">*</span>' : ''}
      </label>
      ${this.generateInputHTML(field, inputId, errorId)}
      <div id="${errorId}" class="form-error" role="alert" aria-live="polite"></div>
    </div>`;
  }

  generateInputHTML(field, inputId, errorId) {
    const baseAttributes = `
      id="${inputId}"
      name="${field.name}"
      class="form-input"
      ${field.required ? 'required' : ''}
      aria-describedby="${errorId}"
      ${field.placeholder ? `placeholder="${field.placeholder}"` : ''}
    `;
    
    switch (field.type) {
      case 'textarea':
        return `<textarea ${baseAttributes} rows="4">${field.value || ''}</textarea>`;
      case 'select':
        return `<select ${baseAttributes}>
          <option value="">Choose...</option>
          ${field.options?.map(option => `<option value="${option.value}">${option.label}</option>`).join('') || ''}
        </select>`;
      default:
        return `<input type="${field.type}" ${baseAttributes} value="${field.value || ''}" 
          ${field.min ? `min="${field.min}"` : ''}
          ${field.max ? `max="${field.max}"` : ''} />`;
    }
  }

  /**
   * CSS GENERATION
   */
  generateCSS(component) {
    const cssTemplates = {
      'button': this.generateButtonCSS(component),
      'hero': this.generateHeroCSS(component),
      'navigation': this.generateNavigationCSS(component),
      'card': this.generateCardCSS(component),
      'form': this.generateFormCSS(component),
      'gallery': this.generateGalleryCSS(component),
      'testimonial': this.generateTestimonialCSS(component)
    };
    
    return cssTemplates[component.type] || `/* ${component.type} component styles */`;
  }

  generateButtonCSS(component) {
    const variation = this.componentVariations.get(`${component.industry}-button`);
    const style = variation?.[component.variant] || variation?.primary;
    
    return `
/* Button Component - ${component.industry} ${component.variant} */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
}

.btn-${component.variant} {
  background: ${style?.background};
  color: ${style?.color};
  border: ${style?.border || 'none'};
  border-radius: ${style?.border_radius};
  padding: ${style?.padding};
  ${style?.box_shadow ? `box-shadow: ${style.box_shadow};` : ''}
}

.btn-${component.variant}:hover:not(:disabled) {
  ${style?.hover?.background ? `background: ${style.hover.background};` : ''}
  ${style?.hover?.color ? `color: ${style.hover.color};` : ''}
  ${style?.hover?.transform ? `transform: ${style.hover.transform};` : ''}
  ${style?.hover?.box_shadow ? `box-shadow: ${style.hover.box_shadow};` : ''}
}

.btn-${component.variant}:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-${component.variant}:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

/* Size variations */
.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

/* Loading state */
.btn-spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .btn {
    min-height: 44px; /* Touch target size */
    padding: 0.875rem 1.5rem;
  }
}`;
  }

  generateHeroCSS(component) {
    const variation = this.componentVariations.get(`${component.industry}-hero`);
    
    return `
/* Hero Section - ${component.industry} */
.hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  padding: var(--section-padding, 4rem 2rem);
  background: ${variation?.styling?.background || 'var(--hero-background)'};
  color: ${variation?.styling?.text_color || 'var(--hero-text)'};
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-headline {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.hero-subheadline {
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  line-height: 1.6;
  opacity: 0.9;
  margin: 0;
}

.hero-trust-signals {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.trust-signal {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-actions {
    justify-content: center;
  }
}

/* Centered overlay variant */
.hero.hero-centered {
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;
}

.hero.hero-centered::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
}

.hero.hero-centered .hero-container {
  position: relative;
  z-index: 1;
  grid-template-columns: 1fr;
  max-width: 600px;
}`;
  }

  generateFormCSS(component) {
    return `
/* Form Component - ${component.industry} */
.form {
  max-width: ${component.maxWidth || '600px'};
  margin: 0 auto;
  padding: 2rem;
  background: var(--form-background, #FFFFFF);
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-heading {
  font-family: var(--font-heading);
  font-size: 1.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-field {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-color, #374151);
}

.required {
  color: #EF4444;
  margin-left: 0.25rem;
}

.form-input,
.form-input select,
.form-input textarea {
  width: 100%;
  padding: 0.875rem;
  border: 2px solid #E5E7EB;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: var(--font-body);
  transition: border-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color, #3B82F6);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input[aria-invalid="true"] {
  border-color: #EF4444;
}

.form-error {
  color: #EF4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  min-height: 1.25rem;
}

.form-submit {
  width: 100%;
  margin-top: 1rem;
}

/* Two column responsive layout */
.form.form-two-column {
  max-width: 800px;
}

.form.form-two-column .form-field {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form.form-two-column .form-field.full-width {
  grid-template-columns: 1fr;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .form {
    padding: 1.5rem;
  }
  
  .form.form-two-column .form-field {
    grid-template-columns: 1fr;
  }
}`;
  }

  /**
   * JAVASCRIPT GENERATION
   */
  generateJavaScript(component) {
    if (!component.interactive) return '// No JavaScript required';
    
    const jsTemplates = {
      'button': this.generateButtonJS(component),
      'form': this.generateFormJS(component),
      'navigation': this.generateNavigationJS(component),
      'gallery': this.generateGalleryJS(component)
    };
    
    return jsTemplates[component.type] || `// ${component.type} JavaScript`;
  }

  generateButtonJS(component) {
    if (!component.loading && !component.onClick) return '// Static button, no JavaScript needed';
    
    return `
// Button Component JavaScript - ${component.industry}
class ButtonComponent {
  constructor(element) {
    this.element = element;
    this.originalText = element.querySelector('.btn-text').textContent;
    this.init();
  }
  
  init() {
    this.element.addEventListener('click', this.handleClick.bind(this));
  }
  
  async handleClick(event) {
    if (this.element.disabled) return;
    
    ${component.loading ? 'this.setLoading(true);' : ''}
    
    try {
      ${component.onClick ? `await ${component.onClick}(event);` : ''}
    } catch (error) {
      console.error('Button action failed:', error);
    } finally {
      ${component.loading ? 'this.setLoading(false);' : ''}
    }
  }
  
  setLoading(isLoading) {
    const textEl = this.element.querySelector('.btn-text');
    const spinnerEl = this.element.querySelector('.btn-spinner');
    
    this.element.disabled = isLoading;
    
    if (isLoading) {
      textEl.textContent = '${component.loadingText || 'Loading...'}';
      if (spinnerEl) spinnerEl.style.display = 'inline-block';
    } else {
      textEl.textContent = this.originalText;
      if (spinnerEl) spinnerEl.style.display = 'none';
    }
  }
}

// Initialize all buttons
document.querySelectorAll('.btn[data-interactive]').forEach(btn => {
  new ButtonComponent(btn);
});`;
  }

  generateFormJS(component) {
    return `
// Form Component JavaScript - ${component.industry}
class FormComponent {
  constructor(element) {
    this.element = element;
    this.fields = new Map();
    this.init();
  }
  
  init() {
    this.setupValidation();
    this.setupSubmission();
    this.setupAccessibility();
  }
  
  setupValidation() {
    const inputs = this.element.querySelectorAll('.form-input');
    
    inputs.forEach(input => {
      this.fields.set(input.name, {
        element: input,
        errorElement: document.getElementById(\`error-\${input.name}\`)
      });
      
      // Real-time validation
      input.addEventListener('blur', () => this.validateField(input.name));
      input.addEventListener('input', () => this.clearFieldError(input.name));
    });
  }
  
  setupSubmission() {
    this.element.addEventListener('submit', this.handleSubmit.bind(this));
  }
  
  setupAccessibility() {
    // Ensure error announcements for screen readers
    this.element.setAttribute('novalidate', '');
  }
  
  async handleSubmit(event) {
    event.preventDefault();
    
    if (!this.validateAllFields()) {
      this.focusFirstError();
      return;
    }
    
    const submitButton = this.element.querySelector('.form-submit');
    const originalText = submitButton.textContent;
    
    try {
      submitButton.disabled = true;
      submitButton.textContent = '${component.submittingText || 'Submitting...'}';
      
      const formData = new FormData(this.element);
      const result = await this.submitForm(formData);
      
      this.handleSuccess(result);
    } catch (error) {
      this.handleError(error);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  }
  
  validateField(fieldName) {
    const field = this.fields.get(fieldName);
    if (!field) return true;
    
    const value = field.element.value.trim();
    const errors = [];
    
    // Required field validation
    if (field.element.hasAttribute('required') && !value) {
      errors.push(\`\${this.getFieldLabel(fieldName)} is required\`);
    }
    
    // Type-specific validation
    if (value) {
      switch (field.element.type) {
        case 'email':
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errors.push('Please enter a valid email address');
          }
          break;
        case 'tel':
          if (!/^[\d\s\-\(\)\+]+$/.test(value)) {
            errors.push('Please enter a valid phone number');
          }
          break;
        case 'date':
          const selectedDate = new Date(value);
          const today = new Date();
          if (selectedDate <= today) {
            errors.push('Please select a future date');
          }
          break;
      }
    }
    
    this.setFieldError(fieldName, errors[0] || '');
    return errors.length === 0;
  }
  
  validateAllFields() {
    let isValid = true;
    
    for (const fieldName of this.fields.keys()) {
      if (!this.validateField(fieldName)) {
        isValid = false;
      }
    }
    
    return isValid;
  }
  
  setFieldError(fieldName, error) {
    const field = this.fields.get(fieldName);
    if (!field) return;
    
    field.errorElement.textContent = error;
    field.element.setAttribute('aria-invalid', error ? 'true' : 'false');
    
    if (error) {
      field.element.classList.add('error');
    } else {
      field.element.classList.remove('error');
    }
  }
  
  clearFieldError(fieldName) {
    this.setFieldError(fieldName, '');
  }
  
  focusFirstError() {
    for (const field of this.fields.values()) {
      if (field.element.getAttribute('aria-invalid') === 'true') {
        field.element.focus();
        break;
      }
    }
  }
  
  getFieldLabel(fieldName) {
    const label = this.element.querySelector(\`label[for="field-\${fieldName}"]\`);
    return label ? label.textContent.replace('*', '').trim() : fieldName;
  }
  
  async submitForm(formData) {
    // Implement form submission logic
    const response = await fetch(this.element.action || '/api/submit', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error('Submission failed');
    }
    
    return response.json();
  }
  
  handleSuccess(result) {
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.textContent = '${component.successMessage || 'Form submitted successfully!'}';
    successMessage.setAttribute('role', 'alert');
    
    this.element.parentNode.insertBefore(successMessage, this.element);
    this.element.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => successMessage.remove(), 5000);
  }
  
  handleError(error) {
    // Show error message
    const errorMessage = document.createElement('div');
    errorMessage.className = 'form-error-general';
    errorMessage.textContent = '${component.errorMessage || 'Please try again or contact us directly.'}';
    errorMessage.setAttribute('role', 'alert');
    
    this.element.parentNode.insertBefore(errorMessage, this.element);
    
    // Remove error message after 5 seconds
    setTimeout(() => errorMessage.remove(), 5000);
  }
}

// Initialize all forms
document.querySelectorAll('.form').forEach(form => {
  new FormComponent(form);
});`;
  }

  /**
   * UTILITY METHODS
   */
  getBaseComponent(componentType) {
    return this.componentLibrary.get(componentType) || this.componentLibrary.get('button');
  }

  getIndustryVariation(componentType, businessCategory) {
    const key = `${businessCategory}-${componentType}`;
    return this.componentVariations.get(key) || {};
  }

  applyOptimizations(baseComponent, industryVariation, requirements) {
    return {
      ...baseComponent,
      ...industryVariation,
      ...requirements,
      type: baseComponent.name.toLowerCase(),
      industry: requirements.industry || 'general',
      variant: requirements.variant || 'primary',
      interactive: requirements.interactive || false,
      performance_optimized: true,
      accessibility_compliant: true
    };
  }

  getAccessibilityFeatures(component) {
    const rules = this.accessibilityRules.get('component_specific');
    const componentRules = rules[component.type] || {};
    
    return {
      wcag_compliance: 'AA',
      features: componentRules.requirements || [],
      aria_attributes: componentRules.aria_attributes || [],
      keyboard_support: componentRules.keyboard_support || [],
      testing_checklist: [
        'Test with keyboard navigation',
        'Test with screen reader',
        'Verify color contrast ratios',
        'Test at 200% zoom level',
        'Validate HTML semantics'
      ]
    };
  }

  getPerformanceOptimizations(component) {
    return {
      css_size: this.estimateCSSSize(component),
      js_size: this.estimateJSSize(component),
      loading_strategy: this.getLoadingStrategy(component),
      image_optimization: component.images ? this.getImageOptimizations() : 'No images',
      caching_strategy: 'Long-term cache with versioning',
      compression: 'Gzip/Brotli recommended'
    };
  }

  estimateCSSSize(component) {
    const baseSizes = {
      'button': '2KB',
      'hero': '4KB', 
      'navigation': '3KB',
      'card': '3KB',
      'form': '5KB',
      'gallery': '4KB',
      'testimonial': '3KB'
    };
    
    return baseSizes[component.type] || '3KB';
  }

  estimateJSSize(component) {
    if (!component.interactive) return '0KB';
    
    const baseSizes = {
      'button': '1KB',
      'navigation': '2KB',
      'form': '4KB',
      'gallery': '3KB'
    };
    
    return baseSizes[component.type] || '1KB';
  }

  getLoadingStrategy(component) {
    const strategies = {
      'button': 'Critical CSS inline, no JS unless interactive',
      'hero': 'Critical CSS inline, lazy load background images',
      'navigation': 'Critical CSS inline, progressive enhancement JS',
      'form': 'Critical CSS inline, defer validation JS',
      'gallery': 'Critical CSS inline, lazy load images and JS',
      'testimonial': 'Defer non-critical CSS, lazy load images'
    };
    
    return strategies[component.type] || 'Standard loading strategy';
  }

  getImageOptimizations() {
    return {
      formats: 'WebP with JPEG fallback',
      responsive: 'srcset for different screen sizes',
      lazy_loading: 'Native lazy loading with intersection observer',
      compression: 'Optimized for web quality',
      sizing: 'Proper dimensions to prevent layout shift'
    };
  }

  getResponsiveBehavior(component) {
    const behaviors = {
      'button': {
        mobile: 'Full width on mobile, minimum 44px height',
        tablet: 'Inline sizing with adequate spacing',
        desktop: 'Optimal sizing with hover states'
      },
      'hero': {
        mobile: 'Stack content vertically, optimize image',
        tablet: 'Maintain grid with adjusted spacing',
        desktop: 'Full side-by-side layout'
      },
      'navigation': {
        mobile: 'Hamburger menu with slide-out',
        tablet: 'Collapsible menu with key items visible',
        desktop: 'Full horizontal menu with dropdowns'
      },
      'form': {
        mobile: 'Single column, large touch targets',
        tablet: 'Maintain single column with better spacing',
        desktop: 'Two-column option for shorter forms'
      }
    };
    
    return behaviors[component.type] || behaviors.button;
  }

  getTestingGuidance(component) {
    return {
      functionality: [
        'Test all interactive states',
        'Verify form validation',
        'Test loading states',
        'Verify error handling'
      ],
      accessibility: [
        'Keyboard navigation testing',
        'Screen reader testing',
        'Color contrast verification',
        'Focus management testing'
      ],
      performance: [
        'Measure CSS/JS bundle size',
        'Test loading speed',
        'Verify lazy loading',
        'Check for layout shift'
      ],
      responsive: [
        'Test on mobile devices',
        'Test at different zoom levels',
        'Verify touch target sizes',
        'Test landscape/portrait modes'
      ]
    };
  }

  generateComponentReasoning(businessCategory, componentType) {
    const industryReasons = {
      healthcare: 'Medical websites require trust-building colors, clear accessibility, and urgent action CTAs.',
      restaurant: 'Food service needs appetite-stimulating colors, reservation-focused CTAs, and atmospheric design.',
      saas: 'Technology platforms need innovation-focused colors, trial-driven CTAs, and clean interfaces.',
      realestate: 'Property websites need authority colors, search-focused CTAs, and professional credibility.',
      ecommerce: 'Retail sites need conversion-optimized colors, purchase-driven CTAs, and trust signals.',
      creative: 'Portfolio sites need expressive colors, engagement-focused CTAs, and personal branding.',
      finance: 'Financial sites need authority colors, consultation-driven CTAs, and regulatory compliance.',
      fitness: 'Wellness sites need energy colors, trial-focused CTAs, and motivation-driven design.'
    };
    
    const componentReasons = {
      button: 'Button design optimized for industry-specific conversion psychology and accessibility.',
      hero: 'Hero section designed to immediately communicate value and guide users to primary action.',
      navigation: 'Navigation optimized for user journey and conversion flow specific to industry.',
      form: 'Form designed for industry-specific data collection with optimal conversion rates.',
      card: 'Card component optimized for information hierarchy and visual engagement.',
      gallery: 'Gallery optimized for visual storytelling and user engagement.',
      testimonial: 'Testimonial component designed to build trust and social proof.'
    };
    
    return `${industryReasons[businessCategory] || 'Component optimized for professional credibility.'} ${componentReasons[componentType] || 'Component follows industry best practices.'}`;
  }
}

export default ComponentIntelligence;