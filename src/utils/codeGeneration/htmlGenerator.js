/**
 * QUORRA HTML Generator
 * Divine code generation - transforms visual designs into semantic, accessible HTML
 * 
 * Generates: Clean, semantic HTML with proper structure and accessibility
 * Powers: Export functionality and live preview generation
 */

class QuorraHTMLGenerator {
  constructor(options = {}) {
    this.config = {
      outputFormat: 'html5',        // 'html5', 'xhtml', 'html4'
      accessibility: 'AA',          // 'A', 'AA', 'AAA'
      semanticLevel: 'high',        // 'low', 'medium', 'high'
      indentation: '  ',            // 2 spaces default
      selfClosingTags: true,        // Use self-closing tags for void elements
      includeComments: true,        // Add helpful comments
      optimizeForSEO: true,         // Include SEO-friendly attributes
      ...options
    };

    // HTML5 semantic element mapping
    this.semanticMapping = {
      'page-header': 'header',
      'main-content': 'main', 
      'page-footer': 'footer',
      'navigation': 'nav',
      'content-section': 'section',
      'sidebar': 'aside',
      'article-content': 'article',
      'figure-container': 'figure',
      'form-container': 'form'
    };

    // Void elements that should self-close
    this.voidElements = new Set([
      'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 
      'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'
    ]);

    // Element hierarchy for proper nesting
    this.elementHierarchy = {
      'html': ['head', 'body'],
      'head': ['title', 'meta', 'link', 'style', 'script'],
      'body': ['header', 'main', 'footer', 'nav', 'section', 'aside', 'div'],
      'header': ['h1', 'h2', 'h3', 'nav', 'div', 'p'],
      'main': ['section', 'article', 'div', 'h1', 'h2', 'h3'],
      'footer': ['div', 'p', 'nav', 'address'],
      'section': ['h2', 'h3', 'h4', 'p', 'div', 'article'],
      'article': ['h1', 'h2', 'h3', 'p', 'div', 'figure']
    };

    this.generationStats = {
      elementsGenerated: 0,
      semanticElementsUsed: 0,
      accessibilityFeatures: 0,
      totalLines: 0
    };
  }

  /**
   * MAIN HTML GENERATION METHOD
   * Converts design specification into complete HTML document
   */
  async generateHTML(designSpec) {
    console.log('🔥 QUORRA: Forging divine HTML from design essence...');
    
    try {
      // Reset stats for new generation
      this.resetGenerationStats();

      // Validate and prepare design specification
      const validatedSpec = await this.validateDesignSpec(designSpec);
      
      // Generate document structure
      const documentStructure = await this.generateDocumentStructure(validatedSpec);
      
      // Generate HTML content
      const htmlContent = await this.generateHTMLContent(documentStructure);
      
      // Apply semantic optimization
      const semanticHTML = await this.applySemanticOptimization(htmlContent);
      
      // Apply accessibility enhancements
      const accessibleHTML = await this.applyAccessibilityEnhancements(semanticHTML);
      
      // Format and optimize final output
      const formattedHTML = await this.formatHTML(accessibleHTML);
      
      // Generate metadata
      const metadata = this.generateHTMLMetadata(validatedSpec);

      console.log('✨ QUORRA: Divine HTML crafted successfully!');
      
      return {
        html: formattedHTML,
        metadata: metadata,
        stats: this.generationStats,
        structure: documentStructure,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error('⚡ QUORRA: HTML forging interrupted:', error);
      throw new QuorraHTMLError('Failed to generate divine HTML', error);
    }
  }

  /**
   * DOCUMENT STRUCTURE GENERATION
   * Creates semantic document outline based on content and design
   */
  async generateDocumentStructure(designSpec) {
    const {
      content,
      layout,
      industry,
      accessibility,
      seoRequirements
    } = designSpec;

    // Determine page structure based on content and industry
    const pageStructure = this.determinePageStructure(content, industry);
    
    // Generate semantic hierarchy
    const semanticHierarchy = this.generateSemanticHierarchy(pageStructure);
    
    // Add accessibility requirements
    const accessibilityStructure = this.addAccessibilityStructure(semanticHierarchy, accessibility);
    
    // Optimize for SEO
    const seoOptimizedStructure = this.optimizeStructureForSEO(accessibilityStructure, seoRequirements);

    return {
      doctype: '<!DOCTYPE html>',
      htmlElement: this.generateHTMLElement(designSpec.language || 'en'),
      head: this.generateHeadStructure(designSpec),
      body: seoOptimizedStructure,
      semanticElements: this.extractSemanticElements(seoOptimizedStructure)
    };
  }

  /**
   * HTML CONTENT GENERATION
   * Converts design elements into proper HTML markup
   */
  async generateHTMLContent(documentStructure) {
    let htmlContent = '';
    
    // Add doctype
    htmlContent += documentStructure.doctype + '\n';
    
    // Add opening HTML tag
    htmlContent += documentStructure.htmlElement + '\n';
    
    // Generate head section
    htmlContent += this.generateHeadSection(documentStructure.head);
    
    // Generate body section
    htmlContent += this.generateBodySection(documentStructure.body);
    
    // Close HTML tag
    htmlContent += '</html>';

    return htmlContent;
  }

  /**
   * HEAD SECTION GENERATION
   */
  generateHeadSection(headStructure) {
    let headHTML = this.indent(1) + '<head>\n';
    
    // Essential meta tags
    headHTML += this.generateEssentialMeta(headStructure);
    
    // SEO meta tags
    if (headStructure.seo) {
      headHTML += this.generateSEOMeta(headStructure.seo);
    }
    
    // Social media meta tags
    if (headStructure.social) {
      headHTML += this.generateSocialMeta(headStructure.social);
    }
    
    // CSS links
    if (headStructure.stylesheets) {
      headHTML += this.generateStylesheetLinks(headStructure.stylesheets);
    }
    
    // Preload critical resources
    if (headStructure.preloads) {
      headHTML += this.generatePreloadLinks(headStructure.preloads);
    }
    
    headHTML += this.indent(1) + '</head>\n';
    
    return headHTML;
  }

  generateEssentialMeta(headStructure) {
    let metaHTML = '';
    
    // Charset (always first)
    metaHTML += this.indent(2) + '<meta charset="UTF-8">\n';
    
    // Viewport
    metaHTML += this.indent(2) + '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
    
    // Title
    const title = headStructure.title || 'Untitled Page';
    metaHTML += this.indent(2) + `<title>${this.escapeHTML(title)}</title>\n`;
    
    // Description
    if (headStructure.description) {
      metaHTML += this.indent(2) + `<meta name="description" content="${this.escapeHTML(headStructure.description)}">\n`;
    }
    
    // Keywords (if provided)
    if (headStructure.keywords && headStructure.keywords.length > 0) {
      metaHTML += this.indent(2) + `<meta name="keywords" content="${headStructure.keywords.join(', ')}">\n`;
    }
    
    // Author
    if (headStructure.author) {
      metaHTML += this.indent(2) + `<meta name="author" content="${this.escapeHTML(headStructure.author)}">\n`;
    }
    
    return metaHTML;
  }

  generateSEOMeta(seoData) {
    let seoHTML = '';
    
    if (this.config.includeComments) {
      seoHTML += this.indent(2) + '<!-- SEO Meta Tags -->\n';
    }
    
    // Canonical URL
    if (seoData.canonicalUrl) {
      seoHTML += this.indent(2) + `<link rel="canonical" href="${seoData.canonicalUrl}">\n`;
    }
    
    // Robots
    const robots = seoData.robots || 'index, follow';
    seoHTML += this.indent(2) + `<meta name="robots" content="${robots}">\n`;
    
    // Language and locale
    if (seoData.language) {
      seoHTML += this.indent(2) + `<meta name="language" content="${seoData.language}">\n`;
    }
    
    return seoHTML;
  }

  generateSocialMeta(socialData) {
    let socialHTML = '';
    
    if (this.config.includeComments) {
      socialHTML += this.indent(2) + '<!-- Social Media Meta Tags -->\n';
    }
    
    // Open Graph
    if (socialData.openGraph) {
      const og = socialData.openGraph;
      socialHTML += this.indent(2) + `<meta property="og:title" content="${this.escapeHTML(og.title || '')}">\n`;
      socialHTML += this.indent(2) + `<meta property="og:description" content="${this.escapeHTML(og.description || '')}">\n`;
      socialHTML += this.indent(2) + `<meta property="og:type" content="${og.type || 'website'}">\n`;
      
      if (og.url) {
        socialHTML += this.indent(2) + `<meta property="og:url" content="${og.url}">\n`;
      }
      if (og.image) {
        socialHTML += this.indent(2) + `<meta property="og:image" content="${og.image}">\n`;
      }
    }
    
    // Twitter Card
    if (socialData.twitter) {
      const twitter = socialData.twitter;
      socialHTML += this.indent(2) + `<meta name="twitter:card" content="${twitter.card || 'summary'}">\n`;
      
      if (twitter.site) {
        socialHTML += this.indent(2) + `<meta name="twitter:site" content="${twitter.site}">\n`;
      }
      if (twitter.creator) {
        socialHTML += this.indent(2) + `<meta name="twitter:creator" content="${twitter.creator}">\n`;
      }
    }
    
    return socialHTML;
  }

  /**
   * BODY SECTION GENERATION
   */
  generateBodySection(bodyStructure) {
    let bodyHTML = this.indent(1) + '<body>\n';
    
    // Generate skip navigation for accessibility
    if (this.config.accessibility !== 'none') {
      bodyHTML += this.generateSkipNavigation();
    }
    
    // Generate main content structure
    bodyHTML += this.generateContentStructure(bodyStructure, 2);
    
    // Generate scripts section
    if (bodyStructure.scripts) {
      bodyHTML += this.generateScriptTags(bodyStructure.scripts);
    }
    
    bodyHTML += this.indent(1) + '</body>\n';
    
    return bodyHTML;
  }

  generateSkipNavigation() {
    let skipHTML = '';
    
    if (this.config.includeComments) {
      skipHTML += this.indent(2) + '<!-- Skip Navigation for Accessibility -->\n';
    }
    
    skipHTML += this.indent(2) + '<a href="#main-content" class="skip-nav">Skip to main content</a>\n';
    
    this.generationStats.accessibilityFeatures++;
    
    return skipHTML;
  }

  generateContentStructure(structure, indentLevel) {
    let contentHTML = '';
    
    for (const element of structure) {
      contentHTML += this.generateElement(element, indentLevel);
    }
    
    return contentHTML;
  }

  generateElement(element, indentLevel) {
    const {
      type,
      semanticType,
      attributes = {},
      content,
      children = [],
      accessibility = {}
    } = element;

    // Determine semantic tag
    const tagName = this.getSemanticTag(type, semanticType);
    
    // Build attributes
    const attrs = this.buildAttributes(attributes, accessibility, element);
    
    // Generate opening tag
    let elementHTML = this.indent(indentLevel) + `<${tagName}${attrs}`;
    
    // Handle void elements
    if (this.voidElements.has(tagName)) {
      elementHTML += this.config.selfClosingTags ? ' />' : '>';
      elementHTML += '\n';
      this.generationStats.elementsGenerated++;
      return elementHTML;
    }
    
    elementHTML += '>\n';
    
    // Add content
    if (content) {
      if (typeof content === 'string') {
        elementHTML += this.indent(indentLevel + 1) + this.escapeHTML(content) + '\n';
      } else {
        elementHTML += this.generateContentStructure([content], indentLevel + 1);
      }
    }
    
    // Add children
    if (children.length > 0) {
      elementHTML += this.generateContentStructure(children, indentLevel + 1);
    }
    
    // Closing tag
    elementHTML += this.indent(indentLevel) + `</${tagName}>\n`;
    
    // Update stats
    this.generationStats.elementsGenerated++;
    if (this.isSemanticElement(tagName)) {
      this.generationStats.semanticElementsUsed++;
    }
    
    return elementHTML;
  }

  /**
   * SEMANTIC OPTIMIZATION
   */
  applySemanticOptimization(htmlContent) {
    // Replace generic divs with semantic elements where appropriate
    let optimizedHTML = htmlContent;
    
    // Header optimization
    optimizedHTML = optimizedHTML.replace(
      /<div class="header"/g,
      '<header class="header"'
    );
    
    // Main content optimization
    optimizedHTML = optimizedHTML.replace(
      /<div class="main(-content)?"/g,
      '<main class="main-content"'
    );
    
    // Footer optimization
    optimizedHTML = optimizedHTML.replace(
      /<div class="footer"/g,
      '<footer class="footer"'
    );
    
    // Navigation optimization
    optimizedHTML = optimizedHTML.replace(
      /<div class="nav(igation)?"/g,
      '<nav class="navigation"'
    );
    
    // Section optimization
    optimizedHTML = optimizedHTML.replace(
      /<div class="section"/g,
      '<section class="section"'
    );
    
    return optimizedHTML;
  }

  /**
   * ACCESSIBILITY ENHANCEMENTS
   */
  applyAccessibilityEnhancements(htmlContent) {
    let accessibleHTML = htmlContent;
    
    // Add ARIA landmarks
    accessibleHTML = this.addARIALandmarks(accessibleHTML);
    
    // Enhance form accessibility
    accessibleHTML = this.enhanceFormAccessibility(accessibleHTML);
    
    // Add image alt attributes
    accessibleHTML = this.enhanceImageAccessibility(accessibleHTML);
    
    // Add heading hierarchy validation
    accessibleHTML = this.optimizeHeadingHierarchy(accessibleHTML);
    
    return accessibleHTML;
  }

  addARIALandmarks(htmlContent) {
    let enhancedHTML = htmlContent;
    
    // Add main landmark
    enhancedHTML = enhancedHTML.replace(
      /<main/g,
      '<main role="main" id="main-content"'
    );
    
    // Add navigation landmarks
    enhancedHTML = enhancedHTML.replace(
      /<nav/g,
      '<nav role="navigation"'
    );
    
    // Add banner and contentinfo
    enhancedHTML = enhancedHTML.replace(
      /<header class="header"/g,
      '<header class="header" role="banner"'
    );
    
    enhancedHTML = enhancedHTML.replace(
      /<footer class="footer"/g,
      '<footer class="footer" role="contentinfo"'
    );
    
    this.generationStats.accessibilityFeatures += 4;
    
    return enhancedHTML;
  }

  /**
   * UTILITY METHODS
   */
  validateDesignSpec(designSpec) {
    if (!designSpec) {
      throw new QuorraHTMLError('Design specification is required');
    }

    // Ensure required properties exist
    const validatedSpec = {
      content: designSpec.content || {},
      layout: designSpec.layout || {},
      industry: designSpec.industry || 'general',
      accessibility: designSpec.accessibility || this.config.accessibility,
      seoRequirements: designSpec.seoRequirements || {},
      language: designSpec.language || 'en',
      ...designSpec
    };

    return validatedSpec;
  }

  determinePageStructure(content, industry) {
    // Industry-specific page structures
    const industryStructures = {
      'healthcare': ['header', 'hero', 'services', 'about', 'contact', 'footer'],
      'ecommerce': ['header', 'hero', 'products', 'features', 'testimonials', 'footer'],
      'portfolio': ['header', 'hero', 'work', 'about', 'contact', 'footer'],
      'saas': ['header', 'hero', 'features', 'pricing', 'testimonials', 'footer'],
      'restaurant': ['header', 'hero', 'menu', 'about', 'location', 'footer']
    };

    return industryStructures[industry] || ['header', 'main', 'footer'];
  }

  generateSemanticHierarchy(pageStructure) {
    return pageStructure.map(section => ({
      type: 'section',
      semanticType: this.semanticMapping[section] || 'section',
      className: section,
      id: section.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase(),
      attributes: {
        class: section
      }
    }));
  }

  getSemanticTag(type, semanticType) {
    return semanticType || this.semanticMapping[type] || type || 'div';
  }

  buildAttributes(attributes, accessibility, element) {
    let attrString = '';
    
    // Standard attributes
    for (const [key, value] of Object.entries(attributes)) {
      if (value !== null && value !== undefined) {
        attrString += ` ${key}="${this.escapeAttribute(value)}"`;
      }
    }
    
    // Accessibility attributes
    for (const [key, value] of Object.entries(accessibility)) {
      if (value !== null && value !== undefined) {
        attrString += ` ${key}="${this.escapeAttribute(value)}"`;
      }
    }
    
    return attrString;
  }

  isSemanticElement(tagName) {
    const semanticElements = new Set([
      'header', 'main', 'footer', 'nav', 'section', 'aside', 
      'article', 'figure', 'figcaption', 'details', 'summary'
    ]);
    
    return semanticElements.has(tagName);
  }

  generateHTMLElement(language) {
    return `<html lang="${language}">`;
  }

  generateHeadStructure(designSpec) {
    return {
      title: designSpec.title || 'Untitled Page',
      description: designSpec.description,
      keywords: designSpec.keywords,
      author: designSpec.author,
      seo: designSpec.seoRequirements,
      social: designSpec.socialMeta,
      stylesheets: designSpec.stylesheets || ['styles.css'],
      preloads: designSpec.preloads || []
    };
  }

  generateStylesheetLinks(stylesheets) {
    let linksHTML = '';
    
    if (this.config.includeComments) {
      linksHTML += this.indent(2) + '<!-- Stylesheets -->\n';
    }
    
    for (const stylesheet of stylesheets) {
      if (typeof stylesheet === 'string') {
        linksHTML += this.indent(2) + `<link rel="stylesheet" href="${stylesheet}">\n`;
      } else {
        const { href, media = 'all', crossorigin } = stylesheet;
        let linkTag = `<link rel="stylesheet" href="${href}" media="${media}"`;
        if (crossorigin) {
          linkTag += ` crossorigin="${crossorigin}"`;
        }
        linkTag += '>\n';
        linksHTML += this.indent(2) + linkTag;
      }
    }
    
    return linksHTML;
  }

  generatePreloadLinks(preloads) {
    let preloadHTML = '';
    
    if (preloads.length > 0 && this.config.includeComments) {
      preloadHTML += this.indent(2) + '<!-- Resource Preloads -->\n';
    }
    
    for (const preload of preloads) {
      const { href, as, type, crossorigin } = preload;
      let preloadTag = `<link rel="preload" href="${href}" as="${as}"`;
      
      if (type) {
        preloadTag += ` type="${type}"`;
      }
      if (crossorigin) {
        preloadTag += ` crossorigin="${crossorigin}"`;
      }
      
      preloadTag += '>\n';
      preloadHTML += this.indent(2) + preloadTag;
    }
    
    return preloadHTML;
  }

  generateScriptTags(scripts) {
    let scriptsHTML = '';
    
    if (this.config.includeComments) {
      scriptsHTML += this.indent(2) + '<!-- Scripts -->\n';
    }
    
    for (const script of scripts) {
      if (typeof script === 'string') {
        scriptsHTML += this.indent(2) + `<script src="${script}"></script>\n`;
      } else {
        const { src, type = 'text/javascript', async, defer, integrity } = script;
        let scriptTag = `<script src="${src}" type="${type}"`;
        
        if (async) scriptTag += ' async';
        if (defer) scriptTag += ' defer';
        if (integrity) scriptTag += ` integrity="${integrity}"`;
        
        scriptTag += '></script>\n';
        scriptsHTML += this.indent(2) + scriptTag;
      }
    }
    
    return scriptsHTML;
  }

  formatHTML(htmlContent) {
    // Clean up extra whitespace
    let formatted = htmlContent.replace(/^\s*\n/gm, '');
    
    // Ensure proper line endings
    formatted = formatted.replace(/\r\n/g, '\n');
    
    // Update stats
    this.generationStats.totalLines = formatted.split('\n').length;
    
    return formatted;
  }

  generateHTMLMetadata(designSpec) {
    return {
      title: designSpec.title,
      language: designSpec.language || 'en',
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0',
      generator: 'Quorra - Divine Code Generator',
      accessibility: this.config.accessibility,
      semantic: this.config.semanticLevel,
      industry: designSpec.industry
    };
  }

  indent(level) {
    return this.config.indentation.repeat(level);
  }

  escapeHTML(text) {
    if (typeof text !== 'string') return text;
    
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  escapeAttribute(value) {
    if (typeof value !== 'string') return value;
    
    return value
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  resetGenerationStats() {
    this.generationStats = {
      elementsGenerated: 0,
      semanticElementsUsed: 0,
      accessibilityFeatures: 0,
      totalLines: 0
    };
  }

  /**
   * PUBLIC API METHODS
   */
  
  // Generate HTML for a specific component
  async generateComponentHTML(component) {
    const htmlFragment = this.generateElement(component, 0);
    return {
      html: htmlFragment.trim(),
      stats: {
        elements: 1,
        semantic: this.isSemanticElement(component.type || 'div')
      }
    };
  }

  // Generate HTML snippet without full document structure
  async generateHTMLSnippet(elements) {
    let snippetHTML = '';
    
    for (const element of elements) {
      snippetHTML += this.generateElement(element, 0);
    }
    
    return {
      html: snippetHTML.trim(),
      stats: {
        elements: elements.length,
        semantic: elements.filter(el => this.isSemanticElement(el.type)).length
      }
    };
  }

  // Validate HTML structure
  validateHTMLStructure(htmlContent) {
    const issues = [];
    
    // Check for proper DOCTYPE
    if (!htmlContent.includes('<!DOCTYPE html>')) {
      issues.push('Missing DOCTYPE declaration');
    }
    
    // Check for required meta tags
    if (!htmlContent.includes('<meta charset="UTF-8">')) {
      issues.push('Missing charset meta tag');
    }
    
    if (!htmlContent.includes('<meta name="viewport"')) {
      issues.push('Missing viewport meta tag');
    }
    
    // Check for semantic structure
    if (!htmlContent.includes('<main')) {
      issues.push('Missing main element');
    }
    
    return {
      valid: issues.length === 0,
      issues: issues,
      score: Math.max(0, 100 - (issues.length * 20))
    };
  }
}

/**
 * Custom error class for HTML generation errors
 */
class QuorraHTMLError extends Error {
  constructor(message, originalError = null) {
    super(message);
    this.name = 'QuorraHTMLError';
    this.originalError = originalError;
    this.timestamp = new Date().toISOString();
  }
}

// Export singleton instance and class
const quorraHTMLGenerator = new QuorraHTMLGenerator();

export default quorraHTMLGenerator;
export { QuorraHTMLGenerator, QuorraHTMLError };