/**
 * QUORRA CORE ENGINE
 * "Canva for web" that generates readable, professional CSS
 * The real magic: Visual design → Clean CSS (no framework mess)
 */

import SparkyRuleEngine from './SparkyRuleEngine.js';

class QuorraCoreEngine {
  constructor(options = {}) {
    this.config = {
      // Core philosophy
      frameworkFree: true,
      cleanCSS: true,
      professionalOutput: true,
      
      // Performance targets
      maxFileSize: 50000, // 50KB max CSS
      loadTimeTarget: 1000, // 1 second
      compressionTarget: 80, // 80% smaller than frameworks
      
      // Code quality
      indentation: 2,
      semicolons: true,
      comments: true,
      semantic: true
    };

    // Initialize Sparky rule-based intelligence
    this.sparky = new SparkyRuleEngine({
      personalityMode: 'helpful',
      suggestionFrequency: 'smart'
    });

    // CSS generation intelligence
    this.cssGenerator = new CSSGenerator();
    this.htmlGenerator = new HTMLGenerator();
    this.optimizer = new CodeOptimizer();
  }

  /**
   * 🎨 CORE: Visual Design → Clean CSS
   */
  
  // Main engine: Transform visual design to professional code
  async generateFromDesign(designData) {
    console.log('🔥 Quorra Core Engine: Transforming design to divine code...');

    try {
      // Step 1: Analyze design with Sparky
      const analysis = this.sparky.analyzeDesign(designData);
      
      // Step 2: Generate semantic HTML structure
      const html = await this.htmlGenerator.generate(designData);
      
      // Step 3: Generate clean, optimized CSS
      const css = await this.cssGenerator.generate(designData, analysis);
      
      // Step 4: Optimize everything
      const optimized = await this.optimizer.optimize({ html, css }, analysis);
      
      // Step 5: Package for export
      const output = this.packageOutput(optimized, analysis);

      console.log('✨ Generation complete! Clean code blessed by Quorra.');
      
      return output;

    } catch (error) {
      console.error('🔥 Core engine error:', error);
      throw new Error('Divine generation failed');
    }
  }

  packageOutput(code, analysis) {
    const stats = this.calculateStats(code);
    
    return {
      // Generated code
      html: code.html,
      css: code.css,
      
      // Performance metrics
      stats: {
        cssSize: `${Math.round(code.css.length / 1024)}KB`,
        htmlSize: `${Math.round(code.html.length / 1024)}KB`,
        totalSize: `${Math.round((code.css.length + code.html.length) / 1024)}KB`,
        compressionVsBootstrap: `${stats.compressionRatio}% smaller`,
        estimatedLoadTime: `${stats.loadTime}ms`,
        performanceScore: stats.score
      },
      
      // Sparky insights
      sparkyInsights: {
        designScore: analysis.score,
        suggestions: analysis.suggestions.length,
        optimizations: analysis.optimizations?.length || 0,
        summary: analysis.summary
      },
      
      // Export options
      exports: {
        downloadZip: this.createZipExport(code),
        copyCSS: code.css,
        copyHTML: code.html,
        viewLive: this.createPreviewURL(code)
      },

      // Divine blessing
      divineBlessing: this.calculateDivineBlessing(stats, analysis)
    };
  }

  calculateStats(code) {
    const cssSize = code.css.length;
    const htmlSize = code.html.length;
    
    // Compare to Bootstrap (247KB CSS)
    const bootstrapSize = 247000;
    const compressionRatio = Math.round(((bootstrapSize - cssSize) / bootstrapSize) * 100);
    
    // Estimated load time (rough calculation)
    const loadTime = Math.round((cssSize + htmlSize) / 100); // 100 bytes per ms
    
    // Performance score
    let score = 100;
    if (cssSize > 30000) score -= 10; // -10 for large CSS
    if (loadTime > 1000) score -= 15; // -15 for slow load
    if (compressionRatio < 70) score -= 10; // -10 for poor compression
    
    return {
      cssSize,
      htmlSize,
      compressionRatio,
      loadTime,
      score: Math.max(score, 0)
    };
  }

  calculateDivineBlessing(stats, analysis) {
    let blessing = 0;
    
    // Performance blessing (40%)
    blessing += Math.min(40, stats.score * 0.4);
    
    // Code quality blessing (30%)
    blessing += Math.min(30, (analysis.score / 100) * 30);
    
    // Compression blessing (20%)
    blessing += Math.min(20, (stats.compressionRatio / 100) * 20);
    
    // Clean code blessing (10%)
    if (stats.cssSize < 50000) blessing += 10;
    
    return Math.round(blessing);
  }
}

/**
 * 🏗️ CSS GENERATOR - The Heart of Quorra
 */
class CSSGenerator {
  constructor() {
    this.baseCSS = this.generateBaseCSS();
  }

  async generate(designData, analysis) {
    console.log('🎨 Generating clean CSS...');

    let css = this.baseCSS;
    
    // Add layout styles
    css += this.generateLayoutCSS(designData.layout);
    
    // Add color styles
    css += this.generateColorCSS(designData.colors);
    
    // Add typography styles
    css += this.generateTypographyCSS(designData.typography);
    
    // Add component styles
    css += this.generateComponentCSS(designData.components);
    
    // Add responsive styles
    if (analysis.suggestions.some(s => s.type === 'responsive')) {
      css += this.generateResponsiveCSS(designData);
    }
    
    // Apply Sparky optimizations
    if (analysis.optimizations?.length > 0) {
      css = this.applySparkyOptimizations(css, analysis.optimizations);
    }
    
    // Final cleanup
    css = this.cleanupCSS(css);
    
    return css;
  }

  generateBaseCSS() {
    return `/* 🔥 Quorra Divine CSS - Blessed by the Goddess of Smithing */
/* Framework-free, performance-optimized, human-readable */

:root {
  /* Divine CSS Variables */
  --quorra-primary: #FF6B35;
  --quorra-secondary: #CD7F32;
  --quorra-accent: #E77C47;
  --quorra-text: #1F2937;
  --quorra-background: #FFFFFF;
}

/* Reset with purpose */
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--quorra-text);
  background-color: var(--quorra-background);
}

/* Divine utilities */
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

`;
  }

  generateLayoutCSS(layout) {
    if (!layout) return '';
    
    return `
/* 🏗️ Layout Styles - Divine Structure */
.container {
  max-width: ${layout.maxWidth || '1200px'};
  margin: 0 auto;
  padding: 0 1rem;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

`;
  }

  generateColorCSS(colors) {
    if (!colors) return '';
    
    return `
/* 🎨 Color Styles - Divine Palette */
.primary {
  background-color: ${colors.primary || 'var(--quorra-primary)'};
  color: white;
}

.secondary {
  background-color: ${colors.secondary || 'var(--quorra-secondary)'};
  color: white;
}

.accent {
  background-color: ${colors.accent || 'var(--quorra-accent)'};
  color: white;
}

`;
  }

  generateTypographyCSS(typography) {
    if (!typography) return '';
    
    return `
/* ✍️ Typography Styles - Divine Words */
h1, h2, h3, h4, h5, h6 {
  font-family: ${typography.headingFont || 'inherit'};
  font-weight: ${typography.headingWeight || '600'};
  line-height: 1.2;
  margin: 0 0 0.5em;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }

p {
  margin: 0 0 1rem;
}

`;
  }

  generateComponentCSS(components) {
    if (!components?.length) return '';
    
    let css = '\n/* 🧩 Component Styles - Divine Elements */\n';
    
    components.forEach(component => {
      switch (component.type) {
        case 'button':
          css += this.generateButtonCSS(component);
          break;
        case 'card':
          css += this.generateCardCSS(component);
          break;
        case 'navigation':
          css += this.generateNavigationCSS(component);
          break;
      }
    });
    
    return css;
  }

  generateButtonCSS(button) {
    return `
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--quorra-primary);
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background-color: var(--quorra-secondary);
  transform: translateY(-1px);
}

.btn:focus {
  outline: 2px solid var(--quorra-accent);
  outline-offset: 2px;
}

`;
  }

  generateResponsiveCSS(designData) {
    return `
/* 📱 Responsive Styles - Divine Adaptation */
@media (max-width: 768px) {
  .container {
    padding: 0 0.5rem;
  }
  
  h1 { font-size: 2rem; }
  h2 { font-size: 1.5rem; }
  
  .grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  h1 { font-size: 1.75rem; }
  h2 { font-size: 1.25rem; }
  
  .btn {
    width: 100%;
    text-align: center;
  }
}

`;
  }

  applySparkyOptimizations(css, optimizations) {
    let optimizedCSS = css;
    
    optimizations.forEach(opt => {
      switch (opt.type) {
        case 'redundant_rules':
          optimizedCSS = this.removeRedundantRules(optimizedCSS);
          break;
        case 'modernization':
          optimizedCSS = this.modernizeCSS(optimizedCSS);
          break;
      }
    });
    
    return optimizedCSS;
  }

  removeRedundantRules(css) {
    // Remove duplicate selectors and properties
    return css.replace(/(\{[^}]*\})\s*\1+/g, '$1');
  }

  modernizeCSS(css) {
    // Convert old patterns to modern CSS
    return css
      .replace(/float:\s*left/g, 'display: flex')
      .replace(/float:\s*right/g, 'display: flex; justify-content: flex-end');
  }

  cleanupCSS(css) {
    return css
      .replace(/\n\s*\n/g, '\n') // Remove empty lines
      .replace(/\s+/g, ' ') // Normalize whitespace
      .replace(/;\s*}/g, '}') // Remove unnecessary semicolons
      .trim();
  }
}

/**
 * 🏗️ HTML GENERATOR - Semantic Structure
 */
class HTMLGenerator {
  async generate(designData) {
    console.log('🏗️ Generating semantic HTML...');
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${designData.title || 'Quorra Divine Website'}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  ${this.generateBodyContent(designData)}
</body>
</html>`;
  }

  generateBodyContent(designData) {
    let html = '';
    
    // Generate semantic structure based on design
    if (designData.components) {
      html += this.generateComponents(designData.components);
    }
    
    return html;
  }

  generateComponents(components) {
    return components.map(component => {
      switch (component.type) {
        case 'header':
          return `<header class="site-header">${component.content}</header>`;
        case 'navigation':
          return this.generateNavigation(component);
        case 'main':
          return `<main class="main-content">${component.content}</main>`;
        case 'footer':
          return `<footer class="site-footer">${component.content}</footer>`;
        default:
          return `<div class="${component.type}">${component.content}</div>`;
      }
    }).join('\n  ');
  }

  generateNavigation(nav) {
    return `<nav class="navigation" role="navigation">
    <ul class="nav-list">
      ${nav.items?.map(item => 
        `<li><a href="${item.href}" class="nav-link">${item.text}</a></li>`
      ).join('\n      ') || ''}
    </ul>
  </nav>`;
  }
}

/**
 * ⚡ CODE OPTIMIZER - Divine Performance
 */
class CodeOptimizer {
  async optimize(code, analysis) {
    console.log('⚡ Optimizing code for divine performance...');
    
    return {
      html: this.optimizeHTML(code.html),
      css: this.optimizeCSS(code.css, analysis)
    };
  }

  optimizeHTML(html) {
    return html
      .replace(/>\s+</g, '><') // Remove whitespace between tags
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
  }

  optimizeCSS(css, analysis) {
    let optimized = css;
    
    // Apply Sparky suggestions
    if (analysis.optimizations) {
      optimized = this.applySparkyOptimizations(optimized, analysis.optimizations);
    }
    
    // Minify while keeping readability
    optimized = this.minifyCSS(optimized);
    
    return optimized;
  }

  minifyCSS(css) {
    return css
      .replace(/\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Normalize whitespace
      .replace(/;\s*}/g, '}') // Remove final semicolons
      .replace(/{\s*/g, '{') // Clean opening braces
      .replace(/}\s*/g, '}') // Clean closing braces
      .trim();
  }
}

export default QuorraCoreEngine;