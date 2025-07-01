/**
 * QUORRA Code Validators
 * Divine code quality assurance - ensures generated code meets the highest standards
 * 
 * Validates: HTML structure, CSS quality, accessibility compliance, performance standards
 * Powers: Code quality scores, issue detection, optimization recommendations
 */

class QuorraCodeValidators {
  constructor(options = {}) {
    this.config = {
      validationLevel: 'strict',      // 'permissive', 'standard', 'strict'
      accessibilityStandard: 'AA',    // 'A', 'AA', 'AAA'
      performanceThresholds: {
        cssSize: 50000,               // 50KB max
        htmlSize: 100000,             // 100KB max
        selectors: 1000,              // Max CSS selectors
        nesting: 4                    // Max CSS nesting depth
      },
      browserSupport: 'modern',       // 'legacy', 'modern', 'cutting-edge'
      seoRequirements: 'standard',    // 'basic', 'standard', 'comprehensive'
      codeStyle: 'quorra',           // 'quorra', 'standard', 'custom'
      ...options
    };

    // Validation rule sets
    this.validationRules = {
      html: this.initializeHTMLRules(),
      css: this.initializeCSSRules(),
      accessibility: this.initializeAccessibilityRules(),
      performance: this.initializePerformanceRules(),
      seo: this.initializeSEORules()
    };

    // Error severity levels
    this.severityLevels = {
      ERROR: 'error',       // Must fix - breaks functionality
      WARNING: 'warning',   // Should fix - degrades experience
      INFO: 'info',         // Could improve - optimization opportunity
      SUCCESS: 'success'    // Validation passed
    };

    // Validation results tracking
    this.validationResults = {
      html: { errors: [], warnings: [], info: [], score: 0 },
      css: { errors: [], warnings: [], info: [], score: 0 },
      accessibility: { errors: [], warnings: [], info: [], score: 0 },
      performance: { errors: [], warnings: [], info: [], score: 0 },
      seo: { errors: [], warnings: [], info: [], score: 0 },
      overall: { score: 0, grade: 'F' }
    };
  }

  /**
   * MAIN VALIDATION ORCHESTRATOR
   * Validates complete code bundle and returns comprehensive report
   */
  async validateCode(codeBundle) {
    console.log('🔥 QUORRA: Validating divine code quality...');
    
    try {
      const { html, css, metadata = {} } = codeBundle;
      
      // Reset validation results
      this.resetValidationResults();
      
      // Validate HTML structure and quality
      const htmlValidation = await this.validateHTML(html);
      
      // Validate CSS structure and performance
      const cssValidation = await this.validateCSS(css);
      
      // Validate accessibility compliance
      const accessibilityValidation = await this.validateAccessibility(html, css);
      
      // Validate performance characteristics
      const performanceValidation = await this.validatePerformance(html, css);
      
      // Validate SEO optimization
      const seoValidation = await this.validateSEO(html, metadata);
      
      // Calculate overall scores and grades
      const overallScore = this.calculateOverallScore();
      
      // Generate comprehensive validation report
      const validationReport = this.generateValidationReport();
      
      // Generate recommendations for improvements
      const recommendations = this.generateRecommendations();

      console.log('✨ QUORRA: Code validation completed with divine precision!');
      
      return {
        valid: overallScore >= 80, // 80+ is considered valid
        score: overallScore,
        grade: this.calculateGrade(overallScore),
        results: this.validationResults,
        report: validationReport,
        recommendations: recommendations,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error('⚡ QUORRA: Code validation interrupted:', error);
      throw new QuorraValidationError('Failed to validate divine code', error);
    }
  }

  /**
   * HTML VALIDATION
   * Validates HTML structure, semantics, and best practices
   */
  async validateHTML(html) {
    console.log('📄 Validating HTML structure...');
    
    const htmlResults = this.validationResults.html;
    
    // Document structure validation
    this.validateDocumentStructure(html, htmlResults);
    
    // Semantic HTML validation
    this.validateSemanticStructure(html, htmlResults);
    
    // HTML syntax validation
    this.validateHTMLSyntax(html, htmlResults);
    
    // Attribute validation
    this.validateHTMLAttributes(html, htmlResults);
    
    // Content validation
    this.validateHTMLContent(html, htmlResults);
    
    // Calculate HTML score
    htmlResults.score = this.calculateCategoryScore('html');
    
    return htmlResults;
  }

  validateDocumentStructure(html, results) {
    // Check for DOCTYPE declaration
    if (!html.includes('<!DOCTYPE html>')) {
      results.errors.push({
        type: 'missing_doctype',
        message: 'Missing HTML5 DOCTYPE declaration',
        line: 1,
        severity: this.severityLevels.ERROR,
        fix: 'Add <!DOCTYPE html> at the beginning of the document'
      });
    }

    // Check for html element with lang attribute
    if (!html.match(/<html[^>]*lang=/i)) {
      results.errors.push({
        type: 'missing_lang',
        message: 'Missing language attribute on html element',
        severity: this.severityLevels.ERROR,
        fix: 'Add lang="en" (or appropriate language) to <html> element'
      });
    }

    // Check for required meta tags
    if (!html.includes('<meta charset="UTF-8">') && !html.includes('<meta charset="utf-8">')) {
      results.errors.push({
        type: 'missing_charset',
        message: 'Missing charset meta tag',
        severity: this.severityLevels.ERROR,
        fix: 'Add <meta charset="UTF-8"> in the head section'
      });
    }

    if (!html.includes('name="viewport"')) {
      results.errors.push({
        type: 'missing_viewport',
        message: 'Missing viewport meta tag for responsive design',
        severity: this.severityLevels.WARNING,
        fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1.0">'
      });
    }

    // Check for title element
    if (!html.includes('<title>')) {
      results.errors.push({
        type: 'missing_title',
        message: 'Missing title element',
        severity: this.severityLevels.ERROR,
        fix: 'Add a descriptive <title> element in the head section'
      });
    }

    // Check for proper head/body structure
    const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    
    if (!headMatch) {
      results.errors.push({
        type: 'missing_head',
        message: 'Missing or malformed head element',
        severity: this.severityLevels.ERROR,
        fix: 'Ensure proper <head> and </head> tags'
      });
    }

    if (!bodyMatch) {
      results.errors.push({
        type: 'missing_body',
        message: 'Missing or malformed body element',
        severity: this.severityLevels.ERROR,
        fix: 'Ensure proper <body> and </body> tags'
      });
    }
  }

  validateSemanticStructure(html, results) {
    // Check for semantic HTML5 elements
    const semanticElements = ['header', 'nav', 'main', 'section', 'article', 'aside', 'footer'];
    const foundSemanticElements = semanticElements.filter(element => 
      html.includes(`<${element}`) || html.includes(`<${element} `)
    );

    if (foundSemanticElements.length === 0) {
      results.warnings.push({
        type: 'no_semantic_elements',
        message: 'No semantic HTML5 elements found',
        severity: this.severityLevels.WARNING,
        fix: 'Use semantic elements like <header>, <main>, <nav>, <section>, <footer> instead of generic <div> elements'
      });
    }

    // Check for proper heading hierarchy
    this.validateHeadingHierarchy(html, results);

    // Check for main element
    const mainCount = (html.match(/<main[^>]*>/gi) || []).length;
    if (mainCount === 0) {
      results.warnings.push({
        type: 'missing_main',
        message: 'Missing main element for primary content',
        severity: this.severityLevels.WARNING,
        fix: 'Wrap your primary page content in a <main> element'
      });
    } else if (mainCount > 1) {
      results.errors.push({
        type: 'multiple_main',
        message: 'Multiple main elements found (only one allowed)',
        severity: this.severityLevels.ERROR,
        fix: 'Use only one <main> element per page'
      });
    }

    // Check for skip navigation
    if (!html.includes('skip') && !html.includes('#main')) {
      results.info.push({
        type: 'missing_skip_nav',
        message: 'Consider adding skip navigation for accessibility',
        severity: this.severityLevels.INFO,
        fix: 'Add <a href="#main-content" class="skip-nav">Skip to main content</a>'
      });
    }
  }

  validateHeadingHierarchy(html, results) {
    const headingRegex = /<h([1-6])[^>]*>/gi;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(html)) !== null) {
      headings.push(parseInt(match[1]));
    }

    if (headings.length === 0) {
      results.warnings.push({
        type: 'no_headings',
        message: 'No heading elements found',
        severity: this.severityLevels.WARNING,
        fix: 'Add appropriate heading elements (h1-h6) for content structure'
      });
      return;
    }

    // Check if starts with h1
    if (headings[0] !== 1) {
      results.warnings.push({
        type: 'missing_h1',
        message: 'Page should start with an h1 element',
        severity: this.severityLevels.WARNING,
        fix: 'Add an h1 element as the main page heading'
      });
    }

    // Check for skipped heading levels
    for (let i = 1; i < headings.length; i++) {
      const current = headings[i];
      const previous = headings[i - 1];
      
      if (current > previous + 1) {
        results.warnings.push({
          type: 'skipped_heading_level',
          message: `Heading level skipped: h${previous} to h${current}`,
          severity: this.severityLevels.WARNING,
          fix: 'Use consecutive heading levels (h1, h2, h3, etc.) without skipping'
        });
      }
    }
  }

  /**
   * CSS VALIDATION
   * Validates CSS structure, performance, and best practices
   */
  async validateCSS(css) {
    console.log('🎨 Validating CSS quality...');
    
    const cssResults = this.validationResults.css;
    
    // CSS syntax validation
    this.validateCSSSyntax(css, cssResults);
    
    // Performance validation
    this.validateCSSPerformance(css, cssResults);
    
    // Best practices validation
    this.validateCSSBestPractices(css, cssResults);
    
    // Modern CSS features validation
    this.validateModernCSS(css, cssResults);
    
    // Calculate CSS score
    cssResults.score = this.calculateCategoryScore('css');
    
    return cssResults;
  }

  validateCSSSyntax(css, results) {
    // Check for unmatched braces
    const openBraces = (css.match(/{/g) || []).length;
    const closeBraces = (css.match(/}/g) || []).length;
    
    if (openBraces !== closeBraces) {
      results.errors.push({
        type: 'unmatched_braces',
        message: `Unmatched CSS braces: ${openBraces} opening, ${closeBraces} closing`,
        severity: this.severityLevels.ERROR,
        fix: 'Ensure all CSS rules have matching opening and closing braces'
      });
    }

    // Check for missing semicolons (basic check)
    const ruleRegex = /\{([^}]+)\}/g;
    let match;
    
    while ((match = ruleRegex.exec(css)) !== null) {
      const ruleContent = match[1].trim();
      const declarations = ruleContent.split(';').filter(decl => decl.trim());
      
      declarations.forEach(declaration => {
        const trimmed = declaration.trim();
        if (trimmed && !trimmed.includes(':')) {
          results.warnings.push({
            type: 'invalid_declaration',
            message: `Invalid CSS declaration: "${trimmed}"`,
            severity: this.severityLevels.WARNING,
            fix: 'Ensure all CSS declarations have property: value format'
          });
        }
      });
    }

    // Check for duplicate properties in same rule
    this.checkDuplicateProperties(css, results);
  }

  validateCSSPerformance(css, results) {
    const cssSize = new Blob([css]).size;
    
    // Check file size
    if (cssSize > this.config.performanceThresholds.cssSize) {
      results.warnings.push({
        type: 'large_css_file',
        message: `CSS file is ${Math.round(cssSize / 1024)}KB (recommended: <${Math.round(this.config.performanceThresholds.cssSize / 1024)}KB)`,
        severity: this.severityLevels.WARNING,
        fix: 'Consider splitting CSS, removing unused styles, or optimizing selectors'
      });
    }

    // Check selector count
    const selectorCount = (css.match(/[^{}]+(?=\s*\{)/g) || []).length;
    if (selectorCount > this.config.performanceThresholds.selectors) {
      results.warnings.push({
        type: 'too_many_selectors',
        message: `High selector count: ${selectorCount} (recommended: <${this.config.performanceThresholds.selectors})`,
        severity: this.severityLevels.WARNING,
        fix: 'Combine similar selectors or use more efficient CSS architecture'
      });
    }

    // Check for expensive selectors
    this.checkExpensiveSelectors(css, results);

    // Check for unused vendor prefixes
    this.checkVendorPrefixes(css, results);
  }

  validateCSSBestPractices(css, results) {
    // Check for use of CSS custom properties
    if (!css.includes('--') && css.length > 1000) {
      results.info.push({
        type: 'no_custom_properties',
        message: 'Consider using CSS custom properties for better maintainability',
        severity: this.severityLevels.INFO,
        fix: 'Use CSS custom properties (--variable-name) for repeated values'
      });
    }

    // Check for magic numbers
    this.checkMagicNumbers(css, results);

    // Check for consistent naming conventions
    this.checkNamingConventions(css, results);

    // Check for organization and comments
    if (!css.includes('/*') && css.length > 2000) {
      results.info.push({
        type: 'no_comments',
        message: 'Large CSS file without comments',
        severity: this.severityLevels.INFO,
        fix: 'Add comments to organize and explain complex CSS sections'
      });
    }
  }

  /**
   * ACCESSIBILITY VALIDATION
   * Validates WCAG compliance and inclusive design
   */
  async validateAccessibility(html, css) {
    console.log('♿ Validating accessibility compliance...');
    
    const a11yResults = this.validationResults.accessibility;
    
    // Image accessibility
    this.validateImageAccessibility(html, a11yResults);
    
    // Form accessibility
    this.validateFormAccessibility(html, a11yResults);
    
    // Color contrast (basic CSS analysis)
    this.validateColorContrast(css, a11yResults);
    
    // ARIA usage
    this.validateARIA(html, a11yResults);
    
    // Keyboard navigation
    this.validateKeyboardNavigation(html, css, a11yResults);
    
    // Calculate accessibility score
    a11yResults.score = this.calculateCategoryScore('accessibility');
    
    return a11yResults;
  }

  validateImageAccessibility(html, results) {
    // Find all img elements
    const imgRegex = /<img[^>]*>/gi;
    const images = html.match(imgRegex) || [];
    
    images.forEach((img, index) => {
      // Check for alt attribute
      if (!img.includes('alt=')) {
        results.errors.push({
          type: 'missing_alt',
          message: `Image ${index + 1} missing alt attribute`,
          severity: this.severityLevels.ERROR,
          fix: 'Add descriptive alt text: alt="description of image"'
        });
      } else {
        // Check for empty alt on decorative images
        const altMatch = img.match(/alt=["']([^"']*)["']/);
        if (altMatch && altMatch[1] === '' && !img.includes('role="presentation"')) {
          results.info.push({
            type: 'empty_alt_without_role',
            message: `Image ${index + 1} has empty alt but no role="presentation"`,
            severity: this.severityLevels.INFO,
            fix: 'For decorative images, add role="presentation" or provide descriptive alt text'
          });
        }
      }

      // Check for width/height to prevent layout shift
      if (!img.includes('width=') || !img.includes('height=')) {
        results.info.push({
          type: 'missing_dimensions',
          message: `Image ${index + 1} missing width/height attributes`,
          severity: this.severityLevels.INFO,
          fix: 'Add width and height attributes to prevent layout shift'
        });
      }
    });
  }

  validateFormAccessibility(html, results) {
    // Find form elements
    const inputRegex = /<input[^>]*>/gi;
    const inputs = html.match(inputRegex) || [];
    
    inputs.forEach((input, index) => {
      const inputType = input.match(/type=["']([^"']*)["']/);
      const hasLabel = html.includes(`for="${this.extractId(input)}"`) || 
                      input.includes('aria-label=') || 
                      input.includes('aria-labelledby=');
      
      if (!hasLabel && (!inputType || !['hidden', 'submit', 'button'].includes(inputType[1]))) {
        results.errors.push({
          type: 'missing_label',
          message: `Input ${index + 1} missing associated label`,
          severity: this.severityLevels.ERROR,
          fix: 'Add <label for="input-id"> or aria-label attribute'
        });
      }
    });

    // Check for form validation
    if (html.includes('<form') && !html.includes('novalidate')) {
      const hasRequiredFields = html.includes('required');
      if (hasRequiredFields && !html.includes('aria-describedby')) {
        results.info.push({
          type: 'form_validation_enhancement',
          message: 'Consider adding error message associations for form validation',
          severity: this.severityLevels.INFO,
          fix: 'Use aria-describedby to associate error messages with form fields'
        });
      }
    }
  }

  /**
   * PERFORMANCE VALIDATION
   * Validates loading speed and runtime performance
   */
  async validatePerformance(html, css) {
    console.log('⚡ Validating performance characteristics...');
    
    const perfResults = this.validationResults.performance;
    
    // Bundle size analysis
    this.validateBundleSize(html, css, perfResults);
    
    // Resource loading optimization
    this.validateResourceLoading(html, perfResults);
    
    // Critical rendering path
    this.validateCriticalRenderingPath(html, css, perfResults);
    
    // Image optimization
    this.validateImageOptimization(html, perfResults);
    
    // Calculate performance score
    perfResults.score = this.calculateCategoryScore('performance');
    
    return perfResults;
  }

  validateBundleSize(html, css, results) {
    const htmlSize = new Blob([html]).size;
    const cssSize = new Blob([css]).size;
    const totalSize = htmlSize + cssSize;
    
    if (totalSize > 150000) { // 150KB threshold
      results.warnings.push({
        type: 'large_bundle',
        message: `Total bundle size: ${Math.round(totalSize / 1024)}KB (recommended: <150KB)`,
        severity: this.severityLevels.WARNING,
        fix: 'Optimize CSS, minify code, or implement code splitting'
      });
    }

    // Compare against framework sizes
    const frameworkSaving = ((150000 - totalSize) / 150000) * 100;
    if (frameworkSaving > 70) {
      results.info.push({
        type: 'excellent_size_optimization',
        message: `Excellent! ${Math.round(frameworkSaving)}% smaller than typical framework bundles`,
        severity: this.severityLevels.SUCCESS,
        benefit: 'Faster loading and better user experience'
      });
    }
  }

  validateResourceLoading(html, results) {
    // Check for preconnect links
    if (html.includes('fonts.googleapis.com') && !html.includes('rel="preconnect"')) {
      results.warnings.push({
        type: 'missing_preconnect',
        message: 'Missing preconnect for Google Fonts',
        severity: this.severityLevels.WARNING,
        fix: 'Add <link rel="preconnect" href="https://fonts.googleapis.com">'
      });
    }

    // Check for font-display
    if (html.includes('fonts.googleapis.com') && !html.includes('display=swap')) {
      results.warnings.push({
        type: 'missing_font_display',
        message: 'Missing font-display optimization',
        severity: this.severityLevels.WARNING,
        fix: 'Add &display=swap to Google Fonts URLs'
      });
    }

    // Check for lazy loading
    const imageCount = (html.match(/<img[^>]*>/g) || []).length;
    const lazyImages = (html.match(/loading=["']lazy["']/g) || []).length;
    
    if (imageCount > 3 && lazyImages === 0) {
      results.info.push({
        type: 'no_lazy_loading',
        message: 'Consider adding lazy loading for below-fold images',
        severity: this.severityLevels.INFO,
        fix: 'Add loading="lazy" to images not immediately visible'
      });
    }
  }

  /**
   * SEO VALIDATION
   * Validates search engine optimization
   */
  async validateSEO(html, metadata) {
    console.log('🔍 Validating SEO optimization...');
    
    const seoResults = this.validationResults.seo;
    
    // Meta tags validation
    this.validateSEOMetaTags(html, seoResults);
    
    // Content structure validation
    this.validateSEOContent(html, seoResults);
    
    // Technical SEO validation
    this.validateTechnicalSEO(html, seoResults);
    
    // Calculate SEO score
    seoResults.score = this.calculateCategoryScore('seo');
    
    return seoResults;
  }

  validateSEOMetaTags(html, results) {
    // Check for meta description
    if (!html.includes('name="description"')) {
      results.warnings.push({
        type: 'missing_meta_description',
        message: 'Missing meta description',
        severity: this.severityLevels.WARNING,
        fix: 'Add <meta name="description" content="Page description">'
      });
    }

    // Check for Open Graph tags
    if (!html.includes('property="og:')) {
      results.info.push({
        type: 'missing_open_graph',
        message: 'No Open Graph meta tags found',
        severity: this.severityLevels.INFO,
        fix: 'Add Open Graph tags for better social media sharing'
      });
    }

    // Check for canonical URL
    if (!html.includes('rel="canonical"')) {
      results.info.push({
        type: 'missing_canonical',
        message: 'No canonical URL specified',
        severity: this.severityLevels.INFO,
        fix: 'Add <link rel="canonical" href="page-url"> to prevent duplicate content issues'
      });
    }
  }

  /**
   * UTILITY METHODS
   */
  
  resetValidationResults() {
    this.validationResults = {
      html: { errors: [], warnings: [], info: [], score: 0 },
      css: { errors: [], warnings: [], info: [], score: 0 },
      accessibility: { errors: [], warnings: [], info: [], score: 0 },
      performance: { errors: [], warnings: [], info: [], score: 0 },
      seo: { errors: [], warnings: [], info: [], score: 0 },
      overall: { score: 0, grade: 'F' }
    };
  }

  calculateCategoryScore(category) {
    const results = this.validationResults[category];
    const errors = results.errors.length;
    const warnings = results.warnings.length;
    const info = results.info.length;
    
    // Start with perfect score
    let score = 100;
    
    // Deduct points for issues
    score -= errors * 15;      // Major deduction for errors
    score -= warnings * 5;     // Medium deduction for warnings
    score -= info * 1;         // Minor deduction for info items
    
    return Math.max(0, score);
  }

  calculateOverallScore() {
    const categories = ['html', 'css', 'accessibility', 'performance', 'seo'];
    const weights = { html: 0.25, css: 0.25, accessibility: 0.2, performance: 0.2, seo: 0.1 };
    
    let weightedScore = 0;
    categories.forEach(category => {
      weightedScore += this.validationResults[category].score * weights[category];
    });
    
    this.validationResults.overall.score = Math.round(weightedScore);
    return this.validationResults.overall.score;
  }

  calculateGrade(score) {
    if (score >= 95) return 'A+';
    if (score >= 90) return 'A';
    if (score >= 85) return 'A-';
    if (score >= 80) return 'B+';
    if (score >= 75) return 'B';
    if (score >= 70) return 'B-';
    if (score >= 65) return 'C+';
    if (score >= 60) return 'C';
    if (score >= 55) return 'C-';
    if (score >= 50) return 'D';
    return 'F';
  }

  generateValidationReport() {
    const totalIssues = Object.values(this.validationResults)
      .filter(result => result.errors)
      .reduce((total, result) => 
        total + result.errors.length + result.warnings.length + result.info.length, 0
      );

    return {
      summary: {
        overallScore: this.validationResults.overall.score,
        grade: this.calculateGrade(this.validationResults.overall.score),
        totalIssues: totalIssues,
        critical: this.countIssuesBySeverity('error'),
        warnings: this.countIssuesBySeverity('warning'),
        suggestions: this.countIssuesBySeverity('info')
      },
      categoryScores: {
        html: this.validationResults.html.score,
        css: this.validationResults.css.score,
        accessibility: this.validationResults.accessibility.score,
        performance: this.validationResults.performance.score,
        seo: this.validationResults.seo.score
      },
      detailedResults: this.validationResults
    };
  }

  generateRecommendations() {
    const recommendations = [];
    
    // High-priority recommendations based on errors
    Object.entries(this.validationResults).forEach(([category, results]) => {
      if (results.errors) {
        results.errors.forEach(error => {
          recommendations.push({
            priority: 'high',
            category: category,
            type: error.type,
            message: error.message,
            fix: error.fix,
            impact: 'Fixes critical issue'
          });
        });
      }
    });

    // Medium-priority recommendations based on warnings
    Object.entries(this.validationResults).forEach(([category, results]) => {
      if (results.warnings && recommendations.length < 10) {
        results.warnings.forEach(warning => {
          recommendations.push({
            priority: 'medium',
            category: category,
            type: warning.type,
            message: warning.message,
            fix: warning.fix,
            impact: 'Improves user experience'
          });
        });
      }
    });

    return recommendations.slice(0, 10); // Limit to top 10 recommendations
  }

  countIssuesBySeverity(severity) {
    return Object.values(this.validationResults)
      .filter(result => result.errors)
      .reduce((total, result) => {
        const issues = [...result.errors, ...result.warnings, ...result.info];
        return total + issues.filter(issue => issue.severity === severity).length;
      }, 0);
  }

  // Placeholder methods for complex validations
  checkDuplicateProperties(css, results) {
    // Implementation for detecting duplicate CSS properties
  }

  checkExpensiveSelectors(css, results) {
    // Check for performance-heavy selectors
    const expensivePatterns = [
      /\*[^{]*\{/g,                    // Universal selector
      /[^{]*\[[^=]*\*=[^{]*\{/g,       // Attribute selectors with *=
      /[^{]*:nth-child\([^)]*\)[^{]*\{/g // Complex nth-child
    ];

    expensivePatterns.forEach(pattern => {
      const matches = css.match(pattern);
      if (matches && matches.length > 5) {
        results.info.push({
          type: 'expensive_selectors',
          message: 'Consider optimizing complex selectors for better performance',
          severity: this.severityLevels.INFO,
          fix: 'Use simpler, more specific selectors'
        });
      }
    });
  }

  checkVendorPrefixes(css, results) {
    const outdatedPrefixes = ['-moz-border-radius', '-webkit-border-radius'];
    outdatedPrefixes.forEach(prefix => {
      if (css.includes(prefix)) {
        results.info.push({
          type: 'outdated_vendor_prefix',
          message: `Outdated vendor prefix found: ${prefix}`,
          severity: this.severityLevels.INFO,
          fix: 'Remove outdated vendor prefixes for modern browsers'
        });
      }
    });
  }

  checkMagicNumbers(css, results) {
    // Look for hardcoded pixel values that might be magic numbers
    const pixelValues = css.match(/:\s*\d+px/g) || [];
    const uniqueValues = [...new Set(pixelValues)];
    
    if (uniqueValues.length > 20) {
      results.info.push({
        type: 'many_magic_numbers',
        message: 'Consider using a consistent spacing scale',
        severity: this.severityLevels.INFO,
        fix: 'Use CSS custom properties for repeated values'
      });
    }
  }

  checkNamingConventions(css, results) {
    // Basic check for consistent naming (BEM, camelCase, etc.)
    const classNames = css.match(/\.([a-zA-Z][a-zA-Z0-9_-]*)/g) || [];
    const hasKebabCase = classNames.some(name => name.includes('-'));
    const hasCamelCase = classNames.some(name => /[a-z][A-Z]/.test(name));
    
    if (hasKebabCase && hasCamelCase && classNames.length > 10) {
      results.info.push({
        type: 'inconsistent_naming',
        message: 'Mixed naming conventions found',
        severity: this.severityLevels.INFO,
        fix: 'Use consistent naming convention (kebab-case recommended)'
      });
    }
  }

  extractId(element) {
    const idMatch = element.match(/id=["']([^"']*)["']/);
    return idMatch ? idMatch[1] : null;
  }

  validateCriticalRenderingPath(html, css, results) {
    // Check if CSS is inlined or external
    const hasInlinedCSS = html.includes('<style>');
    const hasExternalCSS = html.includes('rel="stylesheet"');
    
    if (hasExternalCSS && !hasInlinedCSS && css.length > 10000) {
      results.info.push({
        type: 'no_critical_css',
        message: 'Consider inlining critical CSS for faster rendering',
        severity: this.severityLevels.INFO,
        fix: 'Inline above-the-fold CSS and load the rest asynchronously'
      });
    }
  }

  validateImageOptimization(html, results) {
    // Check for modern image formats
    if (html.includes('.jpg') || html.includes('.png')) {
      results.info.push({
        type: 'image_format_optimization',
        message: 'Consider using modern image formats (WebP, AVIF)',
        severity: this.severityLevels.INFO,
        fix: 'Use WebP or AVIF formats with fallbacks for better compression'
      });
    }
  }

  validateColorContrast(css, results) {
    // Basic contrast warning (would need more sophisticated analysis)
    if (css.includes('color:') && css.includes('background')) {
      results.info.push({
        type: 'contrast_check_needed',
        message: 'Verify color contrast meets WCAG standards',
        severity: this.severityLevels.INFO,
        fix: 'Ensure 4.5:1 contrast ratio for normal text, 3:1 for large text'
      });
    }
  }

  validateARIA(html, results) {
    // Check for ARIA landmarks
    const hasARIALandmarks = html.includes('role=') || html.includes('aria-');
    if (!hasARIALandmarks && html.length > 5000) {
      results.info.push({
        type: 'missing_aria',
        message: 'Consider adding ARIA landmarks and labels',
        severity: this.severityLevels.INFO,
        fix: 'Add appropriate ARIA attributes for better screen reader support'
      });
    }
  }

  validateKeyboardNavigation(html, css, results) {
    // Check for focus styles
    if (!css.includes(':focus') && !css.includes('focus-visible')) {
      results.warnings.push({
        type: 'missing_focus_styles',
        message: 'No focus styles found',
        severity: this.severityLevels.WARNING,
        fix: 'Add :focus styles for keyboard navigation'
      });
    }
  }

  validateSEOContent(html, results) {
    // Check for h1 tag
    const h1Count = (html.match(/<h1[^>]*>/g) || []).length;
    if (h1Count === 0) {
      results.warnings.push({
        type: 'missing_h1',
        message: 'No h1 tag found',
        severity: this.severityLevels.WARNING,
        fix: 'Add an h1 tag with the main page topic'
      });
    } else if (h1Count > 1) {
      results.warnings.push({
        type: 'multiple_h1',
        message: 'Multiple h1 tags found',
        severity: this.severityLevels.WARNING,
        fix: 'Use only one h1 tag per page'
      });
    }
  }

  validateTechnicalSEO(html, results) {
    // Check for robots meta tag
    if (html.includes('noindex') || html.includes('nofollow')) {
      results.info.push({
        type: 'robots_directives',
        message: 'Robots directives found - ensure they are intentional',
        severity: this.severityLevels.INFO,
        fix: 'Review robots meta tags for production deployment'
      });
    }
  }

  // Initialize rule sets (placeholder methods)
  initializeHTMLRules() { return {}; }
  initializeCSSRules() { return {}; }
  initializeAccessibilityRules() { return {}; }
  initializePerformanceRules() { return {}; }
  initializeSEORules() { return {}; }

  /**
   * PUBLIC API METHODS
   */
  
  // Quick validation for specific aspects
  async validateHTMLOnly(html) {
    return this.validateHTML(html);
  }

  async validateCSSOnly(css) {
    return this.validateCSS(css);
  }

  async validateAccessibilityOnly(html, css) {
    return this.validateAccessibility(html, css);
  }

  // Get validation summary
  getValidationSummary() {
    return {
      score: this.validationResults.overall.score,
      grade: this.calculateGrade(this.validationResults.overall.score),
      issues: this.countIssuesBySeverity('error') + this.countIssuesBySeverity('warning'),
      recommendations: this.generateRecommendations().length
    };
  }

  // Check if code meets quality standards
  meetsQualityStandards() {
    return this.validationResults.overall.score >= 80;
  }
}

/**
 * Custom error class for validation errors
 */
class QuorraValidationError extends Error {
  constructor(message, originalError = null) {
    super(message);
    this.name = 'QuorraValidationError';
    this.originalError = originalError;
    this.timestamp = new Date().toISOString();
  }
}

// Export singleton instance and class
const quorraCodeValidators = new QuorraCodeValidators();

export default quorraCodeValidators;
export { QuorraCodeValidators, QuorraValidationError };