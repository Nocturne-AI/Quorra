// QUORRA Sacred Layout System
// 📐 Divine geometries and spatial harmonies

export const BREAKPOINTS = {
  // 📱 DIVINE DEVICE DIMENSIONS
  
  mobile: {
    min: '320px',
    max: '767px',
    description: 'Sacred handheld realm',
    gridColumns: 1,
    containerPadding: '1rem',
    fontSize: 'mobile'
  },
  
  tablet: {
    min: '768px',
    max: '1023px',
    description: 'Intermediate divine surface',
    gridColumns: 2,
    containerPadding: '1.5rem',
    fontSize: 'tablet'
  },
  
  desktop: {
    min: '1024px',
    max: '1439px',
    description: 'Primary crafting viewport',
    gridColumns: 3,
    containerPadding: '2rem',
    fontSize: 'desktop'
  },
  
  wide: {
    min: '1440px',
    max: '9999px',
    description: 'Expansive divine canvas',
    gridColumns: 4,
    containerPadding: '2.5rem',
    fontSize: 'desktop'
  }
};

export const GRID_SYSTEMS = {
  // 🗂️ SACRED GEOMETRIC FOUNDATIONS
  
  standard: {
    name: 'Divine Harmony',
    columns: 12,
    gutter: '1.5rem',
    maxWidth: '1200px',
    description: 'Classical 12-column grid for universal balance'
  },
  
  simple: {
    name: 'Sacred Simplicity',
    columns: 4,
    gutter: '2rem',
    maxWidth: '1000px',
    description: 'Clean 4-column grid for focused content'
  },
  
  complex: {
    name: 'Divine Complexity',
    columns: 16,
    gutter: '1rem',
    maxWidth: '1400px',
    description: 'Advanced 16-column grid for detailed layouts'
  },
  
  asymmetric: {
    name: 'Sacred Asymmetry',
    columns: 'custom',
    ratios: ['2fr', '1fr', '3fr'],
    gutter: '1.5rem',
    description: 'Custom ratio-based grid for unique designs'
  }
};

export const CONTAINER_SIZES = {
  // 🏺 DIVINE CONTENT VESSELS
  
  narrow: {
    name: 'Sacred Focus',
    maxWidth: '640px',
    padding: {
      mobile: '1rem',
      tablet: '1.5rem',
      desktop: '2rem'
    },
    use: 'Reading content, forms, focused experiences'
  },
  
  standard: {
    name: 'Divine Balance',
    maxWidth: '1024px',
    padding: {
      mobile: '1rem',
      tablet: '1.5rem',
      desktop: '2rem'
    },
    use: 'Most website content, general layouts'
  },
  
  wide: {
    name: 'Sacred Expanse',
    maxWidth: '1200px',
    padding: {
      mobile: '1rem',
      tablet: '2rem',
      desktop: '2.5rem'
    },
    use: 'Hero sections, featured content, galleries'
  },
  
  full: {
    name: 'Divine Infinity',
    maxWidth: '100%',
    padding: {
      mobile: '1rem',
      tablet: '1.5rem',
      desktop: '2rem'
    },
    use: 'Full-width sections, background elements'
  }
};

export const SPACING_SCALE = {
  // 📏 SACRED MEASUREMENTS
  
  // Base spacing units (rem)
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '0.75rem',    // 12px
  lg: '1rem',       // 16px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '2rem',    // 32px
  '4xl': '2.5rem',  // 40px
  '5xl': '3rem',    // 48px
  '6xl': '4rem',    // 64px
  '7xl': '5rem',    // 80px
  '8xl': '6rem',    // 96px
  
  // Semantic spacing
  component: '1rem',      // Between related elements
  section: '3rem',        // Between major sections
  page: '5rem',          // Between page sections
  
  // Industry-specific spacing
  healthcare: {
    comfortable: '2rem',   // Extra breathing room for readability
    accessible: '1.5rem'   // Touch-friendly spacing
  },
  
  technology: {
    compact: '1rem',       // Efficient space usage
    modern: '1.5rem'       // Clean, spacious feel
  },
  
  restaurant: {
    cozy: '1.25rem',       // Intimate spacing
    elegant: '2.5rem'      // Luxurious breathing room
  }
};

export const LAYOUT_PATTERNS = {
  // 🏗️ SACRED ARCHITECTURAL PATTERNS
  
  header_content_footer: {
    name: 'Divine Trinity',
    structure: ['header', 'main', 'footer'],
    description: 'Classic three-part webpage structure',
    minHeight: '100vh',
    headerHeight: 'auto',
    footerHeight: 'auto',
    mainFlex: '1',
    use: 'Standard websites, professional services'
  },
  
  sidebar_layout: {
    name: 'Sacred Aside',
    structure: ['header', 'sidebar + main', 'footer'],
    description: 'Content with persistent sidebar navigation',
    sidebarWidth: {
      mobile: '100%',
      tablet: '250px',
      desktop: '300px'
    },
    use: 'Dashboards, documentation, content-heavy sites'
  },
  
  hero_sections: {
    name: 'Divine Proclamation',
    structure: ['hero', 'content-sections', 'footer'],
    description: 'Large hero section followed by content blocks',
    heroHeight: {
      mobile: '60vh',
      tablet: '70vh',
      desktop: '80vh'
    },
    use: 'Landing pages, product showcases, brand sites'
  },
  
  card_grid: {
    name: 'Sacred Mosaic',
    structure: 'Responsive grid of content cards',
    description: 'Grid layout adapting to screen sizes',
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
      wide: 4
    },
    use: 'Portfolios, product catalogs, team pages'
  },
  
  split_screen: {
    name: 'Divine Duality',
    structure: 'Two equal content areas side by side',
    description: 'Balanced content presentation',
    ratio: '50:50',
    responsive: 'Stack on mobile',
    use: 'Comparisons, before/after, feature explanations'
  }
};

export const SECTION_TYPES = {
  // 📄 SACRED CONTENT SECTIONS
  
  hero: {
    name: 'Divine Herald',
    height: {
      full: '100vh',
      large: '80vh',
      medium: '60vh',
      compact: '40vh'
    },
    padding: {
      mobile: '2rem 1rem',
      tablet: '3rem 2rem',
      desktop: '4rem 2rem'
    },
    alignment: ['center', 'left', 'right'],
    backgroundOptions: ['image', 'gradient', 'solid', 'video']
  },
  
  content: {
    name: 'Sacred Wisdom',
    padding: {
      mobile: '2rem 1rem',
      tablet: '3rem 2rem',
      desktop: '4rem 2rem'
    },
    maxWidth: '800px',
    lineHeight: '1.6',
    use: 'Articles, about sections, detailed explanations'
  },
  
  features: {
    name: 'Divine Powers',
    layout: ['grid', 'list', 'alternating'],
    spacing: '2rem',
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3
    },
    use: 'Service listings, product features, capabilities'
  },
  
  testimonials: {
    name: 'Sacred Endorsements',
    layout: ['carousel', 'grid', 'single-featured'],
    padding: '3rem 2rem',
    backgroundColor: 'subtle',
    use: 'Customer feedback, social proof, reviews'
  },
  
  cta: {
    name: 'Divine Summons',
    padding: '4rem 2rem',
    alignment: 'center',
    emphasis: 'high',
    backgroundStyle: 'brand-gradient',
    use: 'Conversion sections, subscription prompts'
  }
};

export const RESPONSIVE_UTILITIES = {
  // 📱 DIVINE ADAPTABILITY HELPERS
  
  visibility: {
    mobileOnly: 'block md:hidden',
    tabletOnly: 'hidden md:block lg:hidden',
    desktopOnly: 'hidden lg:block',
    mobileHidden: 'hidden md:block',
    tabletHidden: 'block md:hidden lg:block'
  },
  
  flexbox: {
    mobile: 'flex-col',
    tablet: 'md:flex-row',
    desktop: 'lg:flex-row'
  },
  
  textAlignment: {
    mobile: 'text-center',
    tablet: 'md:text-left',
    desktop: 'lg:text-left'
  },
  
  spacing: {
    mobile: 'p-4',
    tablet: 'md:p-6',
    desktop: 'lg:p-8'
  }
};

export const INDUSTRY_LAYOUTS = {
  // 🏢 INDUSTRY-SPECIFIC SACRED PATTERNS
  
  healthcare: {
    priority: 'accessibility',
    spacing: 'generous',
    navigation: 'simple',
    sections: ['hero', 'services', 'doctors', 'testimonials', 'contact'],
    specialFeatures: ['appointment-booking', 'patient-portal-link']
  },
  
  technology: {
    priority: 'efficiency',
    spacing: 'compact',
    navigation: 'feature-rich',
    sections: ['hero', 'features', 'demo', 'pricing', 'testimonials'],
    specialFeatures: ['product-demo', 'trial-signup', 'api-docs']
  },
  
  restaurant: {
    priority: 'visual-appeal',
    spacing: 'atmospheric',
    navigation: 'minimal',
    sections: ['hero', 'menu-preview', 'about', 'gallery', 'contact'],
    specialFeatures: ['reservation-system', 'menu-display', 'photo-gallery']
  },
  
  finance: {
    priority: 'trust',
    spacing: 'professional',
    navigation: 'comprehensive',
    sections: ['hero', 'services', 'team', 'credentials', 'contact'],
    specialFeatures: ['calculator-tools', 'consultation-booking']
  },
  
  ecommerce: {
    priority: 'conversion',
    spacing: 'product-focused',
    navigation: 'category-based',
    sections: ['hero', 'featured-products', 'categories', 'testimonials'],
    specialFeatures: ['product-grid', 'shopping-cart', 'search-filter']
  }
};

export const LAYOUT_PERFORMANCE = {
  // ⚡ SACRED SPEED OPTIMIZATIONS
  
  criticalCSS: {
    aboveFold: 'Inline critical styles for immediate rendering',
    maxSize: '14KB',
    priority: ['layout', 'typography', 'hero-section']
  },
  
  lazyLoading: {
    images: 'Load images as they enter viewport',
    sections: 'Progressive section loading for long pages',
    threshold: '50px before viewport'
  },
  
  gridOptimization: {
    autoFit: 'grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))',
    autoFill: 'grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))',
    performance: 'Reduces layout shifts, improves responsiveness'
  }
};

// 🎯 UTILITY FUNCTIONS
export const getBreakpoint = (size) => BREAKPOINTS[size] || BREAKPOINTS.desktop;

export const getContainerSize = (size) => CONTAINER_SIZES[size] || CONTAINER_SIZES.standard;

export const getSpacing = (size) => SPACING_SCALE[size] || SPACING_SCALE.lg;

export const getLayoutPattern = (pattern) => LAYOUT_PATTERNS[pattern] || LAYOUT_PATTERNS.header_content_footer;

export const getIndustryLayout = (industry) => INDUSTRY_LAYOUTS[industry] || INDUSTRY_LAYOUTS.technology;

export const generateResponsiveCSS = (property, values) => {
  const breakpoints = Object.keys(BREAKPOINTS);
  let css = '';
  
  breakpoints.forEach((bp, index) => {
    if (values[bp]) {
      if (index === 0) {
        css += `${property}: ${values[bp]};\n`;
      } else {
        css += `@media (min-width: ${BREAKPOINTS[bp].min}) {\n`;
        css += `  ${property}: ${values[bp]};\n`;
        css += `}\n`;
      }
    }
  });
  
  return css;
};

export const calculateGrid = (columns, gutter) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, 1fr)`,
  gap: gutter,
  width: '100%'
});

export const getFlexLayout = (direction = 'row', wrap = 'wrap', justify = 'flex-start', align = 'stretch') => ({
  display: 'flex',
  flexDirection: direction,
  flexWrap: wrap,
  justifyContent: justify,
  alignItems: align
});

export const generateLayoutCSS = (layoutName) => {
  const layout = getLayoutPattern(layoutName);
  if (!layout) return '';
  
  return `
    .layout-${layoutName} {
      min-height: ${layout.minHeight || 'auto'};
      display: flex;
      flex-direction: column;
    }
    
    .layout-${layoutName} header {
      height: ${layout.headerHeight || 'auto'};
    }
    
    .layout-${layoutName} main {
      flex: ${layout.mainFlex || '1'};
    }
    
    .layout-${layoutName} footer {
      height: ${layout.footerHeight || 'auto'};
    }
  `;
};

export default {
  BREAKPOINTS,
  GRID_SYSTEMS,
  CONTAINER_SIZES,
  SPACING_SCALE,
  LAYOUT_PATTERNS,
  SECTION_TYPES,
  RESPONSIVE_UTILITIES,
  INDUSTRY_LAYOUTS,
  LAYOUT_PERFORMANCE,
  getBreakpoint,
  getContainerSize,
  getSpacing,
  getLayoutPattern,
  getIndustryLayout,
  generateResponsiveCSS,
  calculateGrid,
  getFlexLayout,
  generateLayoutCSS
};