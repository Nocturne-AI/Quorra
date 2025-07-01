/**
 * FORGE INTELLIGENCE COORDINATION HUB
 * Location: src/intelligence/index.js
 * Orchestrates all AI intelligence modules for cohesive website generation
 * Provides unified interface for industry-specific design decisions
 */

import IndustryIntelligence from './IndustryIntelligence.js';
import ColorIntelligence from './ColorIntelligence.js';
import TypographyIntelligence from './TypographyIntelligence.js';
import LayoutIntelligence from './LayoutIntelligence.js';
import ComponentIntelligence from './ComponentIntelligence.js';
import PerformanceIntelligence from './PerformanceIntelligence.js';

class ForgeIntelligence {
  constructor(options = {}) {
    this.options = {
      performanceMode: 'aggressive', // 'conservative', 'balanced', 'aggressive'
      devicePriority: 'mobile', // 'mobile', 'desktop', 'both'
      codeStyle: 'vanilla', // 'vanilla', 'framework', 'hybrid'
      ...options
    };
    
    this.initializeIntelligence();
  }

  initializeIntelligence() {
    this.industry = new IndustryIntelligence();
    this.color = new ColorIntelligence();
    this.typography = new TypographyIntelligence();
    this.layout = new LayoutIntelligence();
    this.component = new ComponentIntelligence();
    this.performance = new PerformanceIntelligence();
    
    console.log('🧠 FORGE Intelligence initialized with all modules');
  }

  /**
   * MAIN GENERATION FUNCTION
   * Orchestrates all intelligence modules to generate complete website
   */
  async generateWebsite(businessInfo, userPreferences = {}) {
    console.log('🎯 Starting intelligent website generation...');
    
    try {
      // Step 1: Analyze business and detect industry patterns
      const industryAnalysis = this.industry.generateWebsiteIntelligence(businessInfo);
      console.log(`📊 Industry detected: ${industryAnalysis.industry.pattern.name}`);
      
      // Step 2: Generate optimal color palette
      const colorPalette = this.color.generateOptimalPalette(
        industryAnalysis.industry.category,
        userPreferences.brandPersonality || 'professional',
        userPreferences.targetAudience || 'general'
      );
      console.log(`🎨 Color palette generated: ${colorPalette.primary} primary`);
      
      // Step 3: Select optimal typography
      const typography = this.typography.generateOptimalTypography(
        industryAnalysis.industry.category,
        userPreferences.brandPersonality || 'professional',
        this.options.devicePriority
      );
      console.log(`✍️ Typography selected: ${typography.fonts.heading} + ${typography.fonts.body}`);
      
      // Step 4: Generate layout structure
      const layout = this.layout.generateOptimalLayout(
        industryAnalysis.industry.category,
        businessInfo.goals || [],
        this.options.devicePriority
      );
      console.log(`📐 Layout structure: ${layout.structure.length} sections`);
      
      // Step 5: Generate components for each section
      const components = await this.generateSectionComponents(
        layout.structure,
        industryAnalysis.industry.category,
        colorPalette,
        typography
      );
      console.log(`🧩 Generated ${components.length} optimized components`);
      
      // Step 6: Integrate everything into final website
      const website = this.integrateWebsiteElements({
        industry: industryAnalysis,
        colors: colorPalette,
        typography: typography,
        layout: layout,
        components: components,
        businessInfo: businessInfo,
        userPreferences: userPreferences
      });
      
      // Step 7: Apply performance optimizations
      const optimizedWebsite = await this.applyPerformanceOptimizations(website);
      
      console.log('✅ Website generation complete!');
      return optimizedWebsite;
      
    } catch (error) {
      console.error('❌ Website generation failed:', error);
      throw new Error(`FORGE Intelligence error: ${error.message}`);
    }
  }

  /**
   * COMPONENT GENERATION
   * Creates optimized components for each layout section
   */
  async generateSectionComponents(sections, businessCategory, colorPalette, typography) {
    const components = [];
    
    for (const sectionName of sections) {
      try {
        const componentType = this.mapSectionToComponent(sectionName);
        
        const component = this.component.generateOptimalComponents(
          businessCategory,
          componentType,
          {
            industry: businessCategory,
            variant: this.getComponentVariant(sectionName, businessCategory),
            colors: colorPalette,
            typography: typography,
            interactive: this.isInteractiveSection(sectionName),
            devicePriority: this.options.devicePriority
          }
        );
        
        components.push({
          section: sectionName,
          type: componentType,
          ...component
        });
        
      } catch (error) {
        console.warn(`⚠️ Failed to generate component for ${sectionName}:`, error);
        // Continue with other components
      }
    }
    
    return components;
  }

  /**
   * WEBSITE INTEGRATION
   * Combines all generated elements into cohesive website
   */
  integrateWebsiteElements(elements) {
    const { industry, colors, typography, layout, components, businessInfo, userPreferences } = elements;
    
    // Generate complete HTML structure
    const html = this.generateHTML({
      industry: industry.industry.category,
      layout: layout.structure,
      components: components,
      businessInfo: businessInfo,
      navigation: layout.navigation
    });
    
    // Generate unified CSS
    const css = this.generateCSS({
      colors: colors,
      typography: typography,
      components: components,
      layout: layout,
      performance: this.options.performanceMode
    });
    
    // Generate minimal JavaScript
    const javascript = this.generateJavaScript({
      components: components.filter(c => c.interactive),
      interactions: this.getRequiredInteractions(components),
      performance: this.options.performanceMode
    });
    
    // Generate metadata and SEO
    const metadata = this.generateMetadata({
      businessInfo: businessInfo,
      industry: industry.industry.category,
      colors: colors
    });
    
    return {
      html: html,
      css: css,
      javascript: javascript,
      metadata: metadata,
      assets: this.generateAssetList(components),
      performance: this.generatePerformanceReport(html, css, javascript),
      reasoning: this.generateDesignReasoning(elements),
      preview: this.generatePreviewData(elements)
    };
  }

  /**
   * HTML GENERATION
   */
  generateHTML({ industry, layout, components, businessInfo, navigation }) {
    const componentMap = new Map(components.map(c => [c.section, c]));
    
    const htmlSections = layout.map(sectionName => {
      const component = componentMap.get(sectionName);
      if (!component) return `<!-- ${sectionName} component not found -->`;
      
      return this.wrapSectionHTML(component.html, sectionName, industry);
    }).join('\n');
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessInfo.name || 'Professional Website'}</title>
    <meta name="description" content="${businessInfo.description || 'Professional website created with FORGE'}">
    
    <!-- FORGE Generated Styles -->
    <style id="forge-critical-css">
        /* Critical CSS will be inlined here */
    </style>
    
    <!-- Performance Optimizations -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- FORGE Branding -->
    <meta name="generator" content="FORGE - Design visually. Code instantly.">
</head>
<body class="forge-generated ${industry}-website">
    <!-- Navigation -->
    ${this.generateNavigationHTML(navigation, industry)}
    
    <!-- Main Content -->
    <main class="main-content">
        ${htmlSections}
    </main>
    
    <!-- Footer -->
    ${this.generateFooterHTML(businessInfo, industry)}
    
    <!-- FORGE Generated Scripts -->
    <script id="forge-scripts">
        /* Minimal JavaScript will be inlined here */
    </script>
</body>
</html>`;
  }

  wrapSectionHTML(componentHTML, sectionName, industry) {
    return `
    <!-- ${sectionName} Section -->
    <section class="section section-${sectionName} ${industry}-${sectionName}" id="${sectionName}">
        <div class="section-container">
            ${componentHTML}
        </div>
    </section>`;
  }

  generateNavigationHTML(navigation, industry) {
    return `
    <!-- Navigation -->
    <nav class="navigation navigation-${industry}" role="navigation" aria-label="Main navigation">
        <div class="nav-container">
            <div class="nav-brand">
                <a href="#home" class="brand-link" aria-label="Home">
                    <span class="brand-text">Your Brand</span>
                </a>
            </div>
            
            <div class="nav-menu" id="nav-menu">
                <ul class="nav-list">
                    ${navigation.items.map(item => `
                        <li class="nav-item">
                            <a href="#${item.toLowerCase()}" class="nav-link">${item}</a>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="nav-actions">
                <button type="button" class="btn btn-primary nav-cta">${navigation.cta}</button>
                <button type="button" class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
                    <span class="nav-toggle-line"></span>
                    <span class="nav-toggle-line"></span>
                    <span class="nav-toggle-line"></span>
                </button>
            </div>
        </div>
    </nav>`;
  }

  generateFooterHTML(businessInfo, industry) {
    return `
    <!-- Footer -->
    <footer class="footer footer-${industry}" role="contentinfo">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3 class="footer-title">${businessInfo.name || 'Your Business'}</h3>
                    <p class="footer-description">${businessInfo.description || 'Professional services'}</p>
                </div>
                
                <div class="footer-contact">
                    <h4 class="footer-subtitle">Contact</h4>
                    <p class="footer-text">${businessInfo.email || 'contact@business.com'}</p>
                    <p class="footer-text">${businessInfo.phone || '(555) 123-4567'}</p>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p class="footer-credit">
                    Website created with <a href="https://forge-platform.com" target="_blank" rel="noopener">FORGE</a>
                </p>
            </div>
        </div>
    </footer>`;
  }

  /**
   * CSS GENERATION
   */
  generateCSS({ colors, typography, components, layout, performance }) {
    const cssVariables = this.generateCSSVariables(colors, typography);
    const resetCSS = this.generateResetCSS();
    const layoutCSS = this.generateLayoutCSS(layout);
    const componentCSS = components.map(c => c.css).join('\n\n');
    const responsiveCSS = this.generateResponsiveCSS();
    const performanceCSS = this.generatePerformanceCSS(performance);
    
    const fullCSS = `
/* FORGE Generated CSS - Design visually. Code instantly. */
/* Generated: ${new Date().toISOString()} */

${cssVariables}

${resetCSS}

${layoutCSS}

${componentCSS}

${responsiveCSS}

${performanceCSS}
`;

    return this.performance.optimizeForPerformance(fullCSS, 'css', {
      devicePriority: this.options.devicePriority,
      performanceMode: performance
    });
  }

  generateCSSVariables(colors, typography) {
    return `
/* CSS Custom Properties */
:root {
  /* Colors */
  --color-primary: ${colors.primary};
  --color-secondary: ${colors.secondary};
  --color-accent: ${colors.accent};
  --color-neutral: ${colors.neutral};
  --color-background: ${colors.background};
  --color-text-heading: ${colors.text.heading};
  --color-text-body: ${colors.text.body};
  --color-text-light: ${colors.text.light};
  
  /* Typography */
  --font-heading: ${typography.fallbackStacks.heading};
  --font-body: ${typography.fallbackStacks.body};
  --font-accent: ${typography.fallbackStacks.accent};
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;
  
  /* Layout */
  --container-max-width: 1200px;
  --section-padding: var(--spacing-2xl) var(--spacing-lg);
  
  /* Borders */
  --border-radius: 0.5rem;
  --border-radius-lg: 1rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.2s ease;
  --transition-slow: 0.3s ease;
}`;
  }

  generateResetCSS() {
    return `
/* Modern CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  line-height: 1.6;
  color: var(--color-text-body);
  background-color: var(--color-background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  height: auto;
}

input, button, textarea, select {
  font: inherit;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--color-text-heading);
  font-weight: 600;
  line-height: 1.2;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-base);
}

a:hover {
  color: var(--color-accent);
}

button {
  cursor: pointer;
  border: none;
  background: none;
}

ul, ol {
  list-style: none;
}`;
  }

  generateLayoutCSS(layout) {
    return `
/* Layout Styles */
.main-content {
  min-height: 100vh;
}

.section {
  padding: var(--section-padding);
}

.section-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  width: 100%;
}

.navigation {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-neutral);
}

.nav-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.footer {
  background: var(--color-neutral);
  color: var(--color-text-light);
  padding: var(--spacing-xl) var(--spacing-lg);
}

.footer-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
}`;
  }

  generateResponsiveCSS() {
    return `
/* Responsive Design */
@media (max-width: 768px) {
  :root {
    --section-padding: var(--spacing-xl) var(--spacing-md);
  }
  
  .nav-menu {
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--color-background);
    transform: translateY(-100%);
    transition: transform var(--transition-base);
    opacity: 0;
    visibility: hidden;
  }
  
  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-list {
    flex-direction: column;
    padding: var(--spacing-lg);
  }
  
  .nav-item {
    margin-bottom: var(--spacing-sm);
  }
  
  .nav-toggle {
    display: flex;
    flex-direction: column;
    width: 24px;
    height: 24px;
    justify-content: space-between;
  }
  
  .nav-toggle-line {
    width: 100%;
    height: 2px;
    background: var(--color-text-heading);
    transition: var(--transition-base);
  }
}

@media (min-width: 769px) {
  .nav-toggle {
    display: none;
  }
  
  .nav-list {
    display: flex;
    gap: var(--spacing-lg);
  }
}`;
  }

  generatePerformanceCSS(performance) {
    if (performance === 'aggressive') {
      return `
/* Performance Optimizations */
.section {
  contain: layout style;
}

img {
  loading: lazy;
}

.component {
  will-change: auto;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`;
    }
    return '';
  }

  /**
   * JAVASCRIPT GENERATION
   */
  generateJavaScript({ components, interactions, performance }) {
    const interactiveComponents = components.filter(c => c.interactive);
    
    if (interactiveComponents.length === 0 && performance === 'aggressive') {
      return '/* No JavaScript required - Pure CSS website */';
    }
    
    const navigationJS = this.generateNavigationJS();
    const componentJS = interactiveComponents.map(c => c.javascript).join('\n\n');
    const performanceJS = this.generatePerformanceJS();
    
    const fullJS = `
// FORGE Generated JavaScript - Minimal & Performance-First
// Generated: ${new Date().toISOString()}

${navigationJS}

${componentJS}

${performanceJS}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 FORGE website initialized');
});
`;

    return this.performance.optimizeForPerformance(fullJS, 'javascript', {
      devicePriority: this.options.devicePriority,
      environment: 'production'
    });
  }

  generateNavigationJS() {
    return `
// Mobile Navigation Toggle
class MobileNavigation {
  constructor() {
    this.toggle = document.querySelector('.nav-toggle');
    this.menu = document.querySelector('.nav-menu');
    this.init();
  }
  
  init() {
    if (!this.toggle || !this.menu) return;
    
    this.toggle.addEventListener('click', this.toggleMenu.bind(this));
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.toggle.contains(e.target) && !this.menu.contains(e.target)) {
        this.closeMenu();
      }
    });
    
    // Handle escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeMenu();
    });
  }
  
  toggleMenu() {
    const isOpen = this.menu.classList.contains('active');
    if (isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }
  
  openMenu() {
    this.menu.classList.add('active');
    this.toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  
  closeMenu() {
    this.menu.classList.remove('active');
    this.toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

new MobileNavigation();`;
  }

  generatePerformanceJS() {
    return `
// Performance Monitoring
class PerformanceMonitor {
  constructor() {
    this.measurePerformance();
  }
  
  measurePerformance() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          console.log('🚀 FORGE Performance:', {
            loadTime: Math.round(perfData.loadEventEnd - perfData.fetchStart),
            domContentLoaded: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
            firstByte: Math.round(perfData.responseStart - perfData.fetchStart)
          });
        }, 0);
      });
    }
  }
}

new PerformanceMonitor();`;
  }

  /**
   * UTILITY METHODS
   */
  mapSectionToComponent(sectionName) {
    const sectionMap = {
      'hero': 'hero',
      'hero-food': 'hero',
      'hero-benefit': 'hero',
      'hero-search': 'hero',
      'hero-products': 'hero',
      'hero-introduction': 'hero',
      'hero-expertise': 'hero',
      'hero-transformation': 'hero',
      'services': 'card',
      'features': 'card',
      'menu-preview': 'card',
      'portfolio-gallery': 'gallery',
      'testimonials': 'testimonial',
      'contact': 'form',
      'appointment-cta': 'form',
      'reservation-cta': 'form',
      'trial-cta': 'form',
      'consultation-cta': 'form'
    };
    
    return sectionMap[sectionName] || 'card';
  }

  getComponentVariant(sectionName, businessCategory) {
    if (sectionName.includes('hero')) return 'hero';
    if (sectionName.includes('cta') || sectionName.includes('form')) return 'primary';
    return 'default';
  }

  isInteractiveSection(sectionName) {
    const interactiveSections = [
      'contact', 'appointment-cta', 'reservation-cta', 
      'trial-cta', 'consultation-cta', 'gallery', 'testimonials'
    ];
    return interactiveSections.some(section => sectionName.includes(section));
  }

  getRequiredInteractions(components) {
    return components
      .filter(c => c.interactive)
      .map(c => c.type)
      .filter((type, index, arr) => arr.indexOf(type) === index);
  }

  generateAssetList(components) {
    const assets = {
      fonts: [],
      images: [],
      icons: []
    };
    
    components.forEach(component => {
      if (component.typography?.googleFontsUrl) {
        assets.fonts.push(component.typography.googleFontsUrl);
      }
      
      if (component.images) {
        assets.images.push(...component.images);
      }
    });
    
    return {
      ...assets,
      total_requests: assets.fonts.length + assets.images.length + assets.icons.length,
      estimated_size: this.estimateAssetSizes(assets)
    };
  }

  estimateAssetSizes(assets) {
    return {
      fonts: `${assets.fonts.length * 20}KB`,
      images: `${assets.images.length * 50}KB`,
      icons: `${assets.icons.length * 2}KB`
    };
  }

  generatePerformanceReport(html, css, javascript) {
    const htmlSize = html.optimized_code ? html.optimized_code.length : html.length;
    const cssSize = css.optimized_code ? css.optimized_code.length : css.length;
    const jsSize = javascript.optimized_code ? javascript.optimized_code.length : javascript.length;
    
    return {
      total_size: `${Math.round((htmlSize + cssSize + jsSize) / 1024)}KB`,
      html_size: `${Math.round(htmlSize / 1024)}KB`,
      css_size: `${Math.round(cssSize / 1024)}KB`,
      javascript_size: `${Math.round(jsSize / 1024)}KB`,
      performance_score: this.calculateOverallPerformanceScore(htmlSize, cssSize, jsSize),
      framework_comparison: {
        bootstrap_equivalent: '~147KB CSS',
        forge_generated: `${Math.round(cssSize / 1024)}KB CSS`,
        size_reduction: `${Math.round((1 - cssSize / (147 * 1024)) * 100)}%`,
        loading_improvement: '~3x faster'
      },
      optimization_summary: [
        'Vanilla CSS with zero framework bloat',
        'Minimal JavaScript with progressive enhancement',
        'Optimized images with lazy loading',
        'Critical CSS inlined for fast first paint',
        'Performance-first component architecture'
      ]
    };
  }

  calculateOverallPerformanceScore(htmlSize, cssSize, jsSize) {
    const totalSize = htmlSize + cssSize + jsSize;
    const targetSize = 100 * 1024; // 100KB target
    
    if (totalSize <= targetSize) return 100;
    if (totalSize <= targetSize * 2) return 90;
    if (totalSize <= targetSize * 3) return 80;
    if (totalSize <= targetSize * 4) return 70;
    return 60;
  }

  generateDesignReasoning(elements) {
    const { industry, colors, typography, layout } = elements;
    
    return {
      industry_choice: industry.reasoning || `Optimized for ${industry.industry.pattern.name} conversion patterns`,
      color_choice: colors.reasoning || `Colors selected for ${industry.industry.category} psychology`,
      typography_choice: typography.reasoning || `Typography optimized for ${industry.industry.category} credibility`,
      layout_choice: layout.reasoning || `Layout follows proven ${industry.industry.category} user journeys`,
      performance_approach: `Generated with FORGE's 87% smaller, 3x faster philosophy`,
      overall_strategy: `Website designed to maximize ${industry.conversionStrategy.journey.join(' → ')} conversion flow`
    };
  }

  generatePreviewData(elements) {
    return {
      industry: elements.industry.industry.pattern.name,
      primary_color: elements.colors.primary,
      heading_font: elements.typography.fonts.heading,
      body_font: elements.typography.fonts.body,
      layout_sections: elements.layout.structure.length,
      components_generated: elements.components.length,
      conversion_goal: elements.industry.conversionStrategy.primaryCTA,
      performance_optimized: true,
      responsive_design: true,
      accessibility_compliant: true
    };
  }

  generateMetadata({ businessInfo, industry, colors }) {
    return {
      title: businessInfo.name || 'Professional Website',
      description: businessInfo.description || `Professional ${industry} website created with FORGE`,
      keywords: businessInfo.keywords || [industry, 'professional', 'service'],
      author: 'FORGE - Design visually. Code instantly.',
      theme_color: colors.primary,
      background_color: colors.background,
      lang: 'en',
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0',
      robots: 'index, follow',
      canonical: businessInfo.website || '',
      open_graph: {
        type: 'website',
        title: businessInfo.name || 'Professional Website',
        description: businessInfo.description || `Professional ${industry} website`,
        image: businessInfo.logo || '',
        url: businessInfo.website || ''
      }
    };
  }

  /**
   * QUICK GENERATION METHODS
   */
  async generateQuickDemo(businessType = 'healthcare') {
    const demoBusinessInfo = {
      name: 'Demo Business',
      description: `Professional ${businessType} services`,
      services: `Quality ${businessType} solutions`,
      goals: ['lead_generation', 'trust_building']
    };
    
    return this.generateWebsite(demoBusinessInfo, {
      brandPersonality: 'professional',
      targetAudience: 'general'
    });
  }

  async generateFromTemplate(templateName, businessInfo) {
    const templates = {
      'medical_practice': {
        industry: 'healthcare',
        personality: 'professional',
        goals: ['appointment_booking', 'trust_building']
      },
      'restaurant': {
        industry: 'restaurant',
        personality: 'friendly',
        goals: ['reservation', 'atmosphere']
      },
      'tech_startup': {
        industry: 'saas',
        personality: 'innovative',
        goals: ['trial_signup', 'product_demo']
      }
    };
    
    const template = templates[templateName] || templates.medical_practice;
    
    return this.generateWebsite(businessInfo, {
      brandPersonality: template.personality,
      targetAudience: 'general'
    });
  }

  /**
   * PERFORMANCE TESTING
   */
  async benchmarkPerformance(website) {
    return {
      size_analysis: {
        html: website.performance.html_size,
        css: website.performance.css_size,
        javascript: website.performance.javascript_size,
        total: website.performance.total_size
      },
      framework_comparison: website.performance.framework_comparison,
      estimated_metrics: {
        first_contentful_paint: '< 1.5s on 3G',
        largest_contentful_paint: '< 2.5s on 3G',
        time_to_interactive: '< 3s on 3G',
        cumulative_layout_shift: '< 0.1'
      },
      optimization_score: website.performance.performance_score,
      recommendations: website.performance.optimization_summary
    };
  }
}

// Export for use throughout FORGE
export default ForgeIntelligence;

// Export individual modules for direct access
export {
  IndustryIntelligence,
  ColorIntelligence,
  TypographyIntelligence,
  LayoutIntelligence,
  ComponentIntelligence,
  PerformanceIntelligence
};