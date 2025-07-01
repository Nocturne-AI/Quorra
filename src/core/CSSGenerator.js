/**
 * QUORRA CSS GENERATOR
 * Transforms visual designs into clean, optimized CSS
 * Blessed by the Goddess of Smithing for divine code generation
 */

import { ColorIntelligence } from '../intelligence/ColorIntelligence.js';
import { TypographyIntelligence } from '../intelligence/TypographyIntelligence.js';
import { LayoutIntelligence } from '../intelligence/LayoutIntelligence.js';

export class CSSGenerator {
  constructor() {
    this.colorIntelligence = new ColorIntelligence();
    this.typographyIntelligence = new TypographyIntelligence();
    this.layoutIntelligence = new LayoutIntelligence();
  }

  /**
   * MAIN GENERATION METHOD
   * Converts design data into clean CSS
   */
  async generateCSS(designData, options = {}) {
    const {
      industry = 'general',
      brandPersonality = 'professional',
      targetDevice = 'responsive',
      performanceLevel = 'optimized'
    } = options;

    try {
      // Extract design components
      const components = this.extractComponents(designData);
      
      // Generate CSS sections
      const cssBlocks = {
        reset: this.generateReset(),
        variables: await this.generateCSSVariables(designData, industry, brandPersonality),
        typography: await this.generateTypography(designData, industry, brandPersonality),
        layout: this.generateLayout(components, targetDevice),
        components: this.generateComponentStyles(components, industry),
        utilities: this.generateUtilities(),
        responsive: this.generateResponsiveRules(components, targetDevice)
      };

      // Combine and optimize
      const finalCSS = this.combineAndOptimize(cssBlocks, performanceLevel);

      return {
        css: finalCSS,
        stats: this.generateStats(finalCSS),
        performance: this.analyzePerformance(finalCSS),
        meta: {
          industry,
          brandPersonality,
          generatedAt: new Date().toISOString(),
          generator: 'QUORRA Divine CSS Engine v1.0'
        }
      };

    } catch (error) {
      console.error('CSS Generation Error:', error);
      throw new Error(`Divine fire interrupted: ${error.message}`);
    }
  }

  /**
   * CSS VARIABLES GENERATION
   * Creates design system variables
   */
  async generateCSSVariables(designData, industry, brandPersonality) {
    const colors = await this.colorIntelligence.generatePalette(industry, brandPersonality);
    const typography = await this.typographyIntelligence.generateFontSystem(industry, brandPersonality);
    const spacing = this.layoutIntelligence.generateSpacingSystem();

    return `
/* QUORRA CSS Variables - Divine Design System */
:root {
  /* Divine Fire Colors */
  --color-primary: ${colors.primary};
  --color-secondary: ${colors.secondary};
  --color-accent: ${colors.accent};
  --color-neutral: ${colors.neutral};
  --color-background: ${colors.background};
  
  /* Sacred Typography */
  --font-heading: ${typography.heading};
  --font-body: ${typography.body};
  --font-accent: ${typography.accent};
  
  /* Divine Spacing */
  --space-xs: ${spacing.xs};
  --space-sm: ${spacing.sm};
  --space-md: ${spacing.md};
  --space-lg: ${spacing.lg};
  --space-xl: ${spacing.xl};
  
  /* Sacred Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  /* Divine Animations */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;
}`;
  }

  /**
   * TYPOGRAPHY GENERATION
   * Creates blessed font styles
   */
  async generateTypography(designData, industry, brandPersonality) {
    const typography = await this.typographyIntelligence.generateFontSystem(industry, brandPersonality);
    
    return `
/* QUORRA Typography - Divine Font Hierarchy */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-neutral);
  margin: 0 0 var(--space-md) 0;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1.125rem; }

body, p, div {
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-neutral);
}

.text-accent {
  font-family: var(--font-accent);
  font-weight: 400;
}

/* Sacred Text Utilities */
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-accent-color { color: var(--color-accent); }`;
  }

  /**
   * LAYOUT GENERATION
   * Creates divine layout systems
   */
  generateLayout(components, targetDevice) {
    return `
/* QUORRA Layout - Sacred Structure */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.grid {
  display: grid;
  gap: var(--space-md);
}

.flex {
  display: flex;
  gap: var(--space-md);
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Divine Grid Systems */
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* Sacred Spacing */
.p-xs { padding: var(--space-xs); }
.p-sm { padding: var(--space-sm); }
.p-md { padding: var(--space-md); }
.p-lg { padding: var(--space-lg); }
.p-xl { padding: var(--space-xl); }

.m-xs { margin: var(--space-xs); }
.m-sm { margin: var(--space-sm); }
.m-md { margin: var(--space-md); }
.m-lg { margin: var(--space-lg); }
.m-xl { margin: var(--space-xl); }`;
  }

  /**
   * COMPONENT STYLES GENERATION
   * Creates blessed component styles
   */
  generateComponentStyles(components, industry) {
    let styles = `
/* QUORRA Components - Divine Elements */

/* Sacred Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: 8px;
  font-family: var(--font-body);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition-normal);
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: var(--color-secondary);
  color: white;
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}

/* Divine Cards */
.card {
  background: var(--color-background);
  border-radius: 12px;
  padding: var(--space-lg);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

/* Sacred Forms */
.form-group {
  margin-bottom: var(--space-md);
}

.form-label {
  display: block;
  margin-bottom: var(--space-xs);
  font-weight: 500;
  color: var(--color-neutral);
}

.form-input {
  width: 100%;
  padding: var(--space-sm);
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: var(--font-body);
  transition: var(--transition-fast);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(var(--color-primary), 0.1);
}`;

    // Add component-specific styles
    components.forEach(component => {
      styles += this.generateComponentCSS(component, industry);
    });

    return styles;
  }

  /**
   * RESPONSIVE RULES GENERATION
   * Creates mobile-first responsive design
   */
  generateResponsiveRules(components, targetDevice) {
    return `
/* QUORRA Responsive - Divine Adaptability */

/* Mobile First (default) */
.grid-2,
.grid-3,
.grid-4 {
  grid-template-columns: 1fr;
}

.container {
  padding: 0 var(--space-sm);
}

/* Tablet Forge */
@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-md);
  }
  
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  h1 { font-size: 3rem; }
  h2 { font-size: 2.25rem; }
}

/* Desktop Anvil */
@media (min-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .grid-4 {
    grid-template-columns: repeat(4, 1fr);
  }
  
  h1 { font-size: 3.5rem; }
}

/* Large Screen Foundry */
@media (min-width: 1280px) {
  .container {
    padding: 0 var(--space-lg);
  }
}`;
  }

  /**
   * CSS RESET GENERATION
   * Creates clean foundation
   */
  generateReset() {
    return `
/* QUORRA Reset - Divine Foundation */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  background: var(--color-background);
  color: var(--color-neutral);
  font-family: var(--font-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}`;
  }

  /**
   * UTILITY CLASSES GENERATION
   */
  generateUtilities() {
    return `
/* QUORRA Utilities - Divine Helpers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.hidden { display: none !important; }
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }

.w-full { width: 100%; }
.h-full { height: 100%; }

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.rounded { border-radius: 8px; }
.rounded-lg { border-radius: 12px; }
.rounded-full { border-radius: 50%; }

.shadow { box-shadow: var(--shadow-md); }
.shadow-lg { box-shadow: var(--shadow-lg); }`;
  }

  /**
   * HELPER METHODS
   */
  extractComponents(designData) {
    // Extract components from design data
    return designData.components || [];
  }

  generateComponentCSS(component, industry) {
    // Generate specific CSS for each component
    return `
/* ${component.type} Component */
.${component.type} {
  /* Auto-generated styles */
}`;
  }

  combineAndOptimize(cssBlocks, performanceLevel) {
    const combinedCSS = Object.values(cssBlocks).join('\n\n');
    
    if (performanceLevel === 'optimized') {
      return this.optimizeCSS(combinedCSS);
    }
    
    return combinedCSS;
  }

  optimizeCSS(css) {
    // Remove comments and optimize
    return css
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Normalize whitespace
      .replace(/;\s*}/g, '}') // Remove unnecessary semicolons
      .trim();
  }

  generateStats(css) {
    return {
      size: css.length,
      gzipEstimate: Math.floor(css.length * 0.3), // Rough estimate
      rules: (css.match(/{/g) || []).length,
      selectors: (css.match(/[^{}]+{/g) || []).length
    };
  }

  analyzePerformance(css) {
    const stats = this.generateStats(css);
    
    return {
      score: stats.size < 50000 ? 'Excellent' : stats.size < 100000 ? 'Good' : 'Needs Optimization',
      recommendations: this.getPerformanceRecommendations(stats),
      comparison: {
        vsBootstrap: `${Math.floor((1 - stats.size / 150000) * 100)}% smaller`,
        vsTailwind: `${Math.floor((1 - stats.size / 200000) * 100)}% smaller`
      }
    };
  }

  getPerformanceRecommendations(stats) {
    const recommendations = [];
    
    if (stats.size > 100000) {
      recommendations.push('Consider splitting CSS into multiple files');
    }
    
    if (stats.rules > 1000) {
      recommendations.push('Consolidate similar rules');
    }
    
    return recommendations;
  }
}

export default CSSGenerator;