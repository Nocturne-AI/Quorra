/**
 * QUORRA VALIDATION UTILITIES
 * Divine code validation, quality assessment, and standards compliance
 * 
 * Features: HTML validation, CSS optimization, accessibility checking, performance analysis
 * Philosophy: "Divine code must be pure, accessible, and blessed with perfect standards"
 */

class QuorraValidationUtils {
  constructor() {
    // Divine code quality standards
    this.qualityStandards = {
      html: {
        semantic_markup: {
          weight: 0.25,
          description: 'Proper use of semantic HTML elements',
          divine_meaning: 'Structure that speaks truth to both humans and machines'
        },
        accessibility: {
          weight: 0.3,
          description: 'WCAG compliance and inclusive design',
          divine_meaning: 'Sacred accessibility welcomes all souls'
        },
        performance: {
          weight: 0.25,
          description: 'Optimized for speed and efficiency',
          divine_meaning: 'Swift as divine lightning, light as sacred fire'
        },
        maintainability: {
          weight: 0.2,
          description: 'Clean, readable, and well-structured',
          divine_meaning: 'Code that future craftspeople can understand and bless'
        }
      },

      css: {
        efficiency: {
          weight: 0.3,
          description: 'Minimal, non-redundant styles',
          divine_meaning: 'Pure essence without wasteful decoration'
        },
        organization: {
          weight: 0.25,
          description: 'Logical structure and naming',
          divine_meaning: 'Sacred order that reflects divine hierarchy'
        },
        responsiveness: {
          weight: 0.25,
          description: 'Adaptive design for all devices',
          divine_meaning: 'Flowing like divine water to fill any vessel'
        },
        browser_compatibility: {
          weight: 0.2,
          description: 'Works across all modern browsers',
          divine_meaning: 'Universal blessing that serves all digital realms'
        }
      }
    };

    // WCAG accessibility guidelines
    this.accessibilityGuidelines = {
      perceivable: {
        color_contrast: {
          AA: 4.5,
          AAA: 7.0,
          large_text_AA: 3.0,
          large_text_AAA: 4.5
        },
        alt_text: {
          required: true,
          descriptive: true,
          not_decorative: 'use_empty_alt'
        },
        text_spacing: {
          line_height: 1.5,
          paragraph_spacing: '2x font size',
          letter_spacing: '0.12x font size',
          word_spacing: '0.16x font size'
        }
      },

      operable: {
        keyboard_navigation: {
          focus_visible: true,
          logical_order: true,
          skip_links: true
        },
        timing: {
          no_time_limits: true,
          pauseable_content: true
        },
        seizures: {
          no_flashing: 'max 3 per second',
          no_red_flash: true
        }
      },

      understandable: {
        language: {
          page_language: true,
          section_language: true
        },
        navigation: {
          consistent: true,
          predictable: true
        },
        input: {
          labels: true,
          error_prevention: true,
          error_identification: true
        }
      },

      robust: {
        compatibility: {
          valid_html: true,
          assistive_technology: true
        }
      }
    };

    // Performance benchmarks
    this.performanceBenchmarks = {
      // Based on Core Web Vitals and divine standards
      loading: {
        first_contentful_paint: { good: 1.8, needs_improvement: 3.0 },
        largest_contentful_paint: { good: 2.5, needs_improvement: 4.0 },
        speed_index: { good: 3.4, needs_improvement: 5.8 }
      },
      
      interactivity: {
        first_input_delay: { good: 100, needs_improvement: 300 },
        total_blocking_time: { good: 200, needs_improvement: 600 },
        time_to_interactive: { good: 3.8, needs_improvement: 7.3 }
      },
      
      visual_stability: {
        cumulative_layout_shift: { good: 0.1, needs_improvement: 0.25 }
      },

      // Quorra-specific divine metrics
      divine_metrics: {
        css_size: { excellent: 30, good: 50, needs_work: 100 }, // KB
        html_elements: { clean: 150, acceptable: 300, bloated: 500 },
        dom_depth: { shallow: 10, moderate: 15, deep: 20 },
        unused_css: { minimal: 10, acceptable: 25, wasteful: 50 } // percentage
      }
    };

    // Code smells and anti-patterns
    this.codeSmells = {
      html: {
        div_soup: {
          pattern: /(<div[^>]*>.*?<\/div>.*?){10,}/gi,
          severity: 'medium',
          message: 'Excessive div usage - consider semantic alternatives',
          divine_guidance: 'Sacred structure flows through meaningful elements'
        },
        
        inline_styles: {
          pattern: /style\s*=\s*["'][^"']*["']/gi,
          severity: 'high',
          message: 'Inline styles detected - move to CSS for maintainability',
          divine_guidance: 'Separate concerns like divine realms - content from presentation'
        },
        
        missing_alt: {
          pattern: /<img(?![^>]*alt\s*=)[^>]*>/gi,
          severity: 'high',
          message: 'Images missing alt attributes',
          divine_guidance: 'Every image needs a voice for those who cannot see'
        },
        
        deprecated_tags: {
          pattern: /<(font|center|marquee|blink)[^>]*>/gi,
          severity: 'high',
          message: 'Deprecated HTML tags detected',
          divine_guidance: 'Ancient practices must give way to divine modern standards'
        },
        
        empty_elements: {
          pattern: /<(\w+)[^>]*>\s*<\/\1>/gi,
          severity: 'low',
          message: 'Empty elements detected',
          divine_guidance: 'Every element should serve a divine purpose'
        }
      },

      css: {
        important_overuse: {
          pattern: /!important/gi,
          severity: 'medium',
          message: 'Excessive use of !important',
          divine_guidance: 'True authority comes from proper cascade, not force'
        },
        
        duplicate_selectors: {
          pattern: /([^{]+\{[^}]*\})\s*\1/gi,
          severity: 'medium',
          message: 'Duplicate CSS rules detected',
          divine_guidance: 'Divine efficiency eliminates redundancy'
        },
        
        overly_specific: {
          pattern: /(\w+\s+){4,}/g,
          severity: 'low',
          message: 'Overly specific selectors',
          divine_guidance: 'Simplicity is the ultimate divine sophistication'
        },
        
        magic_numbers: {
          pattern: /:\s*\d+(\.\d+)?px(?!\s*;|\s*}|\s*\/)/g,
          severity: 'low',
          message: 'Consider using relative units instead of fixed pixels',
          divine_guidance: 'Flexibility flows like divine water to any container'
        },
        
        vendor_prefixes: {
          pattern: /-webkit-|-moz-|-ms-|-o-/gi,
          severity: 'low',
          message: 'Consider using autoprefixer for vendor prefixes',
          divine_guidance: 'Let divine tools handle browser compatibility automatically'
        }
      }
    };

    // SEO validation criteria
    this.seoStandards = {
      meta_tags: {
        title: { required: true, min_length: 30, max_length: 60 },
        description: { required: true, min_length: 120, max_length: 160 },
        viewport: { required: true, content: 'width=device-width, initial-scale=1' },
        charset: { required: true, recommended: 'UTF-8' }
      },
      
      structured_data: {
        schema_org: { recommended: true },
        open_graph: { recommended: true },
        twitter_cards: { recommended: true }
      },
      
      content_structure: {
        h1_tags: { count: 1, required: true },
        heading_hierarchy: { logical: true, no_skipping: true },
        internal_links: { recommended: true },
        external_links: { rel_noopener: true }
      }
    };

    // Divine code patterns (best practices)
    this.divinePatterns = {
      html: [
        {
          name: 'Semantic Hero Section',
          pattern: /<(header|section)[^>]*>.*?<h1[^>]*>.*?<\/h1>.*?<\/(header|section)>/gi,
          blessing: 'Sacred structure with proper heading hierarchy'
        },
        {
          name: 'Accessible Navigation',
          pattern: /<nav[^>]*>.*?<ul[^>]*>.*?<\/ul>.*?<\/nav>/gi,
          blessing: 'Divine navigation blessed with semantic structure'
        },
        {
          name: 'Descriptive Links',
          pattern: /<a[^>]*href[^>]*>(?!click here|read more|here)[^<]{10,}<\/a>/gi,
          blessing: 'Links that speak with divine clarity'
        }
      ],
      
      css: [
        {
          name: 'CSS Custom Properties',
          pattern: /--[\w-]+:\s*[^;]+/gi,
          blessing: 'Divine variables that bring harmony and consistency'
        },
        {
          name: 'Mobile-First Media Queries',
          pattern: /@media\s*\(min-width:/gi,
          blessing: 'Progressive enhancement blessed by divine mobile-first approach'
        },
        {
          name: 'Flexible Grid Systems',
          pattern: /display:\s*grid|display:\s*flex/gi,
          blessing: 'Modern layout blessed with divine flexibility'
        }
      ]
    };
  }

  /**
   * HTML VALIDATION METHODS
   */

  // Validate HTML structure and quality
  validateHTML(htmlString, options = {}) {
    const validation = {
      overall_score: 0,
      semantic_score: 0,
      accessibility_score: 0,
      performance_score: 0,
      maintainability_score: 0,
      issues: [],
      recommendations: [],
      divine_blessings: [],
      code_smells: []
    };

    // Parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    // Check for parsing errors
    const parsingErrors = this.checkHTMLParsingErrors(doc);
    if (parsingErrors.length > 0) {
      validation.issues.push(...parsingErrors);
    }

    // Validate semantic markup
    validation.semantic_score = this.validateSemanticMarkup(doc, validation);

    // Validate accessibility
    validation.accessibility_score = this.validateAccessibility(doc, validation);

    // Validate performance aspects
    validation.performance_score = this.validateHTMLPerformance(htmlString, doc, validation);

    // Validate maintainability
    validation.maintainability_score = this.validateHTMLMaintainability(htmlString, validation);

    // Detect code smells
    validation.code_smells = this.detectHTMLCodeSmells(htmlString);

    // Find divine patterns
    validation.divine_blessings = this.findDivineHTMLPatterns(htmlString);

    // Calculate overall score
    const weights = this.qualityStandards.html;
    validation.overall_score = Math.round(
      validation.semantic_score * weights.semantic_markup.weight +
      validation.accessibility_score * weights.accessibility.weight +
      validation.performance_score * weights.performance.weight +
      validation.maintainability_score * weights.maintainability.weight
    );

    // Generate recommendations
    validation.recommendations = this.generateHTMLRecommendations(validation);

    return validation;
  }

  // Check HTML parsing errors
  checkHTMLParsingErrors(doc) {
    const errors = [];
    
    // Check for parser errors in the document
    const parserErrors = doc.querySelectorAll('parsererror');
    parserErrors.forEach(error => {
      errors.push({
        type: 'parsing_error',
        severity: 'high',
        message: 'HTML parsing error detected',
        element: error.textContent
      });
    });

    return errors;
  }

  // Validate semantic markup
  validateSemanticMarkup(doc, validation) {
    let score = 0;
    const issues = [];

    // Check for semantic elements
    const semanticElements = ['header', 'nav', 'main', 'section', 'article', 'aside', 'footer'];
    const foundSemantic = semanticElements.filter(tag => doc.querySelector(tag));
    
    if (foundSemantic.length >= 3) {
      score += 40;
    } else {
      issues.push({
        type: 'semantic',
        severity: 'medium',
        message: `Only ${foundSemantic.length} semantic elements found. Consider using more: ${semanticElements.join(', ')}`
      });
    }

    // Check heading hierarchy
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length > 0) {
      const h1Count = doc.querySelectorAll('h1').length;
      if (h1Count === 1) {
        score += 20;
      } else {
        issues.push({
          type: 'heading_hierarchy',
          severity: h1Count === 0 ? 'high' : 'medium',
          message: `Found ${h1Count} h1 elements. Should have exactly 1.`
        });
      }

      // Check heading order
      const headingOrder = Array.from(headings).map(h => parseInt(h.tagName.slice(1)));
      if (this.isLogicalHeadingOrder(headingOrder)) {
        score += 20;
      } else {
        issues.push({
          type: 'heading_order',
          severity: 'medium',
          message: 'Heading hierarchy skips levels or is illogical'
        });
      }
    }

    // Check for landmark roles
    const landmarks = doc.querySelectorAll('[role="banner"], [role="navigation"], [role="main"], [role="contentinfo"]');
    if (landmarks.length > 0) {
      score += 10;
    }

    // Check lists for proper structure
    const lists = doc.querySelectorAll('ul, ol');
    const properLists = Array.from(lists).filter(list => 
      list.children.length > 0 && 
      Array.from(list.children).every(child => child.tagName === 'LI')
    );
    
    if (properLists.length === lists.length) {
      score += 10;
    } else {
      issues.push({
        type: 'list_structure',
        severity: 'low',
        message: 'Some lists contain non-li elements'
      });
    }

    validation.issues.push(...issues);
    return Math.min(100, score);
  }

  // Check if heading order is logical
  isLogicalHeadingOrder(headingOrder) {
    let currentLevel = 0;
    
    for (const level of headingOrder) {
      if (level === 1) {
        currentLevel = 1;
      } else if (level > currentLevel + 1) {
        return false; // Skipped a level
      } else {
        currentLevel = level;
      }
    }
    
    return true;
  }

  // Validate accessibility
  validateAccessibility(doc, validation) {
    let score = 0;
    const issues = [];

    // Check images for alt text
    const images = doc.querySelectorAll('img');
    const imagesWithAlt = doc.querySelectorAll('img[alt]');
    
    if (images.length === 0 || imagesWithAlt.length === images.length) {
      score += 25;
    } else {
      issues.push({
        type: 'accessibility',
        severity: 'high',
        message: `${images.length - imagesWithAlt.length} images missing alt attributes`
      });
    }

    // Check form labels
    const inputs = doc.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea, select');
    const labeledInputs = Array.from(inputs).filter(input => {
      return input.id && doc.querySelector(`label[for="${input.id}"]`) ||
             input.closest('label') ||
             input.getAttribute('aria-label') ||
             input.getAttribute('aria-labelledby');
    });

    if (inputs.length === 0 || labeledInputs.length === inputs.length) {
      score += 25;
    } else {
      issues.push({
        type: 'accessibility',
        severity: 'high',
        message: `${inputs.length - labeledInputs.length} form inputs missing proper labels`
      });
    }

    // Check for focus management
    const interactiveElements = doc.querySelectorAll('a, button, input, select, textarea, [tabindex]');
    const focusableElements = Array.from(interactiveElements).filter(el => 
      !el.hasAttribute('disabled') && 
      el.getAttribute('tabindex') !== '-1'
    );

    if (focusableElements.length > 0) {
      score += 15;
    }

    // Check language attribute
    const html = doc.documentElement;
    if (html && html.hasAttribute('lang')) {
      score += 15;
    } else {
      issues.push({
        type: 'accessibility',
        severity: 'medium',
        message: 'Missing lang attribute on html element'
      });
    }

    // Check for skip links
    const skipLinks = doc.querySelectorAll('a[href^="#"]');
    if (skipLinks.length > 0) {
      score += 10;
    }

    // Check color contrast (simplified - would need color analysis)
    score += 10; // Placeholder for color contrast check

    validation.issues.push(...issues);
    return Math.min(100, score);
  }

  // Validate HTML performance
  validateHTMLPerformance(htmlString, doc, validation) {
    let score = 0;
    const issues = [];

    // Check document size
    const htmlSize = new Blob([htmlString]).size;
    const benchmark = this.performanceBenchmarks.divine_metrics.html_elements;
    
    if (htmlSize < 50000) { // 50KB
      score += 30;
    } else if (htmlSize < 100000) { // 100KB
      score += 20;
    } else {
      issues.push({
        type: 'performance',
        severity: 'medium',
        message: `Large HTML size: ${Math.round(htmlSize / 1024)}KB. Consider optimization.`
      });
    }

    // Check DOM depth
    const maxDepth = this.calculateMaxDOMDepth(doc.body);
    if (maxDepth <= benchmark.shallow) {
      score += 25;
    } else if (maxDepth <= benchmark.moderate) {
      score += 15;
    } else {
      issues.push({
        type: 'performance',
        severity: 'low',
        message: `Deep DOM nesting: ${maxDepth} levels. Consider flattening structure.`
      });
    }

    // Check element count
    const elementCount = doc.querySelectorAll('*').length;
    if (elementCount <= benchmark.clean) {
      score += 25;
    } else if (elementCount <= benchmark.acceptable) {
      score += 15;
    } else {
      issues.push({
        type: 'performance',
        severity: 'medium',
        message: `High element count: ${elementCount}. Consider simplifying structure.`
      });
    }

    // Check for performance-critical elements
    const criticalResources = doc.querySelectorAll('script[src], link[rel="stylesheet"]');
    if (criticalResources.length <= 5) {
      score += 20;
    } else {
      issues.push({
        type: 'performance',
        severity: 'medium',
        message: `Many external resources: ${criticalResources.length}. Consider bundling.`
      });
    }

    validation.issues.push(...issues);
    return Math.min(100, score);
  }

  // Calculate maximum DOM depth
  calculateMaxDOMDepth(element, depth = 0) {
    if (!element || !element.children) return depth;
    
    let maxChildDepth = depth;
    for (const child of element.children) {
      const childDepth = this.calculateMaxDOMDepth(child, depth + 1);
      maxChildDepth = Math.max(maxChildDepth, childDepth);
    }
    
    return maxChildDepth;
  }

  // Validate HTML maintainability
  validateHTMLMaintainability(htmlString, validation) {
    let score = 0;
    const issues = [];

    // Check for inline styles
    const inlineStyleCount = (htmlString.match(/style\s*=/gi) || []).length;
    if (inlineStyleCount === 0) {
      score += 30;
    } else {
      issues.push({
        type: 'maintainability',
        severity: 'medium',
        message: `${inlineStyleCount} inline styles found. Move to external CSS.`
      });
    }

    // Check for proper indentation (simplified)
    const lines = htmlString.split('\n');
    const wellIndented = lines.filter(line => 
      line.trim() === '' || 
      /^\s*</.test(line) || 
      /^\s+\S/.test(line)
    ).length;
    
    if (wellIndented / lines.length > 0.8) {
      score += 25;
    } else {
      issues.push({
        type: 'maintainability',
        severity: 'low',
        message: 'Inconsistent indentation detected'
      });
    }

    // Check for comments and documentation
    const commentCount = (htmlString.match(/<!--.*?-->/g) || []).length;
    if (commentCount > 0) {
      score += 15;
    }

    // Check for consistent naming patterns
    const classNames = (htmlString.match(/class\s*=\s*["']([^"']*)["']/gi) || [])
      .map(match => match.match(/["']([^"']*)["']/)[1]);
    
    const hasConsistentNaming = this.checkNamingConsistency(classNames);
    if (hasConsistentNaming) {
      score += 30;
    } else {
      issues.push({
        type: 'maintainability',
        severity: 'low',
        message: 'Inconsistent class naming patterns detected'
      });
    }

    validation.issues.push(...issues);
    return Math.min(100, score);
  }

  // Check naming consistency
  checkNamingConsistency(names) {
    if (names.length === 0) return true;
    
    // Check for consistent pattern (kebab-case, camelCase, etc.)
    const kebabCase = names.filter(name => /^[a-z][a-z0-9-]*$/.test(name));
    const camelCase = names.filter(name => /^[a-z][a-zA-Z0-9]*$/.test(name));
    
    return (kebabCase.length / names.length > 0.8) || (camelCase.length / names.length > 0.8);
  }

  /**
   * CSS VALIDATION METHODS
   */

  // Validate CSS structure and quality
  validateCSS(cssString, options = {}) {
    const validation = {
      overall_score: 0,
      efficiency_score: 0,
      organization_score: 0,
      responsiveness_score: 0,
      compatibility_score: 0,
      issues: [],
      recommendations: [],
      divine_blessings: [],
      code_smells: [],
      metrics: {
        size: new Blob([cssString]).size,
        rules: 0,
        selectors: 0,
        properties: 0
      }
    };

    // Calculate CSS metrics
    validation.metrics = this.calculateCSSMetrics(cssString);

    // Validate efficiency
    validation.efficiency_score = this.validateCSSEfficiency(cssString, validation);

    // Validate organization
    validation.organization_score = this.validateCSSOrganization(cssString, validation);

    // Validate responsiveness
    validation.responsiveness_score = this.validateCSSResponsiveness(cssString, validation);

    // Validate browser compatibility
    validation.compatibility_score = this.validateCSSCompatibility(cssString, validation);

    // Detect code smells
    validation.code_smells = this.detectCSSCodeSmells(cssString);

    // Find divine patterns
    validation.divine_blessings = this.findDivineCSSPatterns(cssString);

    // Calculate overall score
    const weights = this.qualityStandards.css;
    validation.overall_score = Math.round(
      validation.efficiency_score * weights.efficiency.weight +
      validation.organization_score * weights.organization.weight +
      validation.responsiveness_score * weights.responsiveness.weight +
      validation.compatibility_score * weights.browser_compatibility.weight
    );

    // Generate recommendations
    validation.recommendations = this.generateCSSRecommendations(validation);

    return validation;
  }

  // Calculate CSS metrics
  calculateCSSMetrics(cssString) {
    const rules = (cssString.match(/[^{}]+\{[^{}]*\}/g) || []).length;
    const selectors = (cssString.match(/[^{}]+(?=\{)/g) || []).length;
    const properties = (cssString.match(/[^{}:]+:[^{}:;]+;/g) || []).length;
    
    return {
      size: new Blob([cssString]).size,
      rules,
      selectors,
      properties,
      lines: cssString.split('\n').length
    };
  }

  // Validate CSS efficiency
  validateCSSEfficiency(cssString, validation) {
    let score = 0;
    const issues = [];
    const metrics = validation.metrics;

    // Check file size
    const sizeKB = metrics.size / 1024;
    const benchmark = this.performanceBenchmarks.divine_metrics.css_size;
    
    if (sizeKB <= benchmark.excellent) {
      score += 40;
    } else if (sizeKB <= benchmark.good) {
      score += 25;
    } else if (sizeKB <= benchmark.needs_work) {
      score += 10;
    } else {
      issues.push({
        type: 'efficiency',
        severity: 'medium',
        message: `Large CSS file: ${sizeKB.toFixed(1)}KB. Consider optimization.`
      });
    }

    // Check for duplicate rules
    const duplicates = this.findDuplicateRules(cssString);
    if (duplicates.length === 0) {
      score += 20;
    } else {
      issues.push({
        type: 'efficiency',
        severity: 'medium',
        message: `${duplicates.length} duplicate CSS rules found`
      });
    }

    // Check for unused selectors (simplified)
    score += 20; // Placeholder - would need DOM analysis

    // Check for overly specific selectors
    const overlySpecific = this.findOverlySpecificSelectors(cssString);
    if (overlySpecific.length === 0) {
      score += 20;
    } else {
      issues.push({
        type: 'efficiency',
        severity: 'low',
        message: `${overlySpecific.length} overly specific selectors found`
      });
    }

    validation.issues.push(...issues);
    return Math.min(100, score);
  }

  // Find duplicate CSS rules
  findDuplicateRules(cssString) {
    const rules = cssString.match(/[^{}]+\{[^{}]*\}/g) || [];
    const duplicates = [];
    const seen = new Set();

    rules.forEach(rule => {
      const normalized = rule.replace(/\s+/g, ' ').trim();
      if (seen.has(normalized)) {
        duplicates.push(rule);
      } else {
        seen.add(normalized);
      }
    });

    return duplicates;
  }

  // Find overly specific selectors
  findOverlySpecificSelectors(cssString) {
    const selectors = cssString.match(/[^{}]+(?=\{)/g) || [];
    return selectors.filter(selector => {
      const parts = selector.trim().split(/\s+/);
      return parts.length > 4; // More than 4 parts is overly specific
    });
  }

  // Validate CSS organization
  validateCSSOrganization(cssString, validation) {
    let score = 0;
    const issues = [];

    // Check for CSS custom properties
    const customProperties = (cssString.match(/--[\w-]+:/g) || []).length;
    if (customProperties > 0) {
      score += 25;
    } else {
      issues.push({
        type: 'organization',
        severity: 'low',
        message: 'Consider using CSS custom properties for consistency'
      });
    }

    // Check for logical grouping (simplified)
    const hasComments = (cssString.match(/\/\*.*?\*\//g) || []).length > 0;
    if (hasComments) {
      score += 25;
    }

    // Check for consistent formatting
    const consistentFormatting = this.checkCSSFormatting(cssString);
    if (consistentFormatting) {
      score += 25;
    } else {
      issues.push({
        type: 'organization',
        severity: 'low',
        message: 'Inconsistent CSS formatting detected'
      });
    }

    // Check for meaningful class names
    const meaningfulNames = this.checkCSSNaming(cssString);
    if (meaningfulNames) {
      score += 25;
    } else {
      issues.push({
        type: 'organization',
        severity: 'medium',
        message: 'Consider using more descriptive class names'
      });
    }

    validation.issues.push(...issues);
    return Math.min(100, score);
  }

  // Check CSS formatting consistency
  checkCSSFormatting(cssString) {
    const lines = cssString.split('\n');
    const propertyLines = lines.filter(line => line.includes(':') && line.includes(';'));
    
    // Check if most property lines have consistent spacing
    const consistentSpacing = propertyLines.filter(line => 
      /:\s+/.test(line) || /:\s*/.test(line)
    );
    
    return consistentSpacing.length / propertyLines.length > 0.8;
  }

  // Check CSS naming conventions
  checkCSSNaming(cssString) {
    const classNames = (cssString.match(/\.([a-zA-Z][\w-]*)/g) || [])
      .map(match => match.slice(1));
    
    if (classNames.length === 0) return true;
    
    // Check for descriptive names (not just single letters or numbers)
    const descriptive = classNames.filter(name => 
      name.length > 2 && !/^\d+$/.test(name)
    );
    
    return descriptive.length / classNames.length > 0.8;
  }

  // Validate CSS responsiveness
  validateCSSResponsiveness(cssString, validation) {
    let score = 0;
    const issues = [];

    // Check for media queries
    const mediaQueries = (cssString.match(/@media[^{]+\{[^{}]*\}/g) || []).length;
    if (mediaQueries > 0) {
      score += 40;
    } else {
      issues.push({
        type: 'responsiveness',
        severity: 'high',
        message: 'No responsive media queries found'
      });
    }

    // Check for flexible units
    const flexibleUnits = (cssString.match(/\d+(\.\d+)?(rem|em|%|vw|vh|vmin|vmax)/g) || []).length;
    const fixedUnits = (cssString.match(/\d+(\.\d+)?px/g) || []).length;
    
    if (flexibleUnits > fixedUnits) {
      score += 30;
    } else {
      issues.push({
        type: 'responsiveness',
        severity: 'medium',
        message: 'Consider using more relative units (rem, em, %) instead of pixels'
      });
    }

    // Check for modern layout methods
    const modernLayout = /display:\s*(grid|flex)/gi.test(cssString);
    if (modernLayout) {
      score += 30;
    } else {
      issues.push({
        type: 'responsiveness',
        severity: 'medium',
        message: 'Consider using CSS Grid or Flexbox for modern layouts'
      });
    }

    validation.issues.push(...issues);
    return Math.min(100, score);
  }

  // Validate CSS browser compatibility
  validateCSSCompatibility(cssString, validation) {
    let score = 0;
    const issues = [];

    // Check for vendor prefixes
    const vendorPrefixes = (cssString.match(/-webkit-|-moz-|-ms-|-o-/g) || []).length;
    if (vendorPrefixes > 0) {
      score += 25;
    }

    // Check for modern CSS features that might need fallbacks
    const modernFeatures = [
      'grid-template-areas',
      'backdrop-filter',
      'clip-path',
      'object-fit'
    ];

    const usesModernFeatures = modernFeatures.some(feature => 
      cssString.includes(feature)
    );

    if (usesModernFeatures) {
      issues.push({
        type: 'compatibility',
        severity: 'low',
        message: 'Modern CSS features detected - ensure fallbacks for older browsers'
      });
      score += 25;
    } else {
      score += 50;
    }

    // Check for IE-specific hacks
    const ieHacks = /\*[\w-]+:|_[\w-]+:|\\\9/.test(cssString);
    if (!ieHacks) {
      score += 25;
    } else {
      issues.push({
        type: 'compatibility',
        severity: 'low',
        message: 'IE-specific CSS hacks detected - consider modern alternatives'
      });
    }

    validation.issues.push(...issues);
    return Math.min(100, score);
  }

  /**
   * CODE SMELL DETECTION
   */

  // Detect HTML code smells
  detectHTMLCodeSmells(htmlString) {
    const smells = [];
    
    Object.entries(this.codeSmells.html).forEach(([smellName, config]) => {
      const matches = htmlString.match(config.pattern);
      if (matches && matches.length > 0) {
        smells.push({
          name: smellName,
          severity: config.severity,
          count: matches.length,
          message: config.message,
          divine_guidance: config.divine_guidance,
          examples: matches.slice(0, 3) // Show first 3 examples
        });
      }
    });

    return smells;
  }

  // Detect CSS code smells
  detectCSSCodeSmells(cssString) {
    const smells = [];
    
    Object.entries(this.codeSmells.css).forEach(([smellName, config]) => {
      const matches = cssString.match(config.pattern);
      if (matches && matches.length > 0) {
        smells.push({
          name: smellName,
          severity: config.severity,
          count: matches.length,
          message: config.message,
          divine_guidance: config.divine_guidance,
          examples: matches.slice(0, 3)
        });
      }
    });

    return smells;
  }

  /**
   * DIVINE PATTERN DETECTION
   */

  // Find divine HTML patterns
  findDivineHTMLPatterns(htmlString) {
    const blessings = [];
    
    this.divinePatterns.html.forEach(pattern => {
      const matches = htmlString.match(pattern.pattern);
      if (matches && matches.length > 0) {
        blessings.push({
          name: pattern.name,
          count: matches.length,
          blessing: pattern.blessing
        });
      }
    });

    return blessings;
  }

  // Find divine CSS patterns
  findDivineCSSPatterns(cssString) {
    const blessings = [];
    
    this.divinePatterns.css.forEach(pattern => {
      const matches = cssString.match(pattern.pattern);
      if (matches && matches.length > 0) {
        blessings.push({
          name: pattern.name,
          count: matches.length,
          blessing: pattern.blessing
        });
      }
    });

    return blessings;
  }

  /**
   * RECOMMENDATION GENERATION
   */

  // Generate HTML recommendations
  generateHTMLRecommendations(validation) {
    const recommendations = [];
    
    if (validation.semantic_score < 70) {
      recommendations.push('Use more semantic HTML elements like <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>');
    }
    
    if (validation.accessibility_score < 80) {
      recommendations.push('Improve accessibility by adding alt text to images and proper labels to form elements');
    }
    
    if (validation.performance_score < 70) {
      recommendations.push('Optimize HTML structure by reducing DOM depth and element count');
    }
    
    if (validation.code_smells.length > 0) {
      recommendations.push('Address code quality issues: ' + 
        validation.code_smells.map(smell => smell.message).join(', '));
    }

    if (recommendations.length === 0) {
      recommendations.push('Excellent HTML quality! Your code is blessed with divine standards.');
    }

    return recommendations;
  }

  // Generate CSS recommendations
  generateCSSRecommendations(validation) {
    const recommendations = [];
    
    if (validation.efficiency_score < 70) {
      recommendations.push('Optimize CSS efficiency by removing duplicate rules and overly specific selectors');
    }
    
    if (validation.responsiveness_score < 80) {
      recommendations.push('Improve responsiveness with media queries and flexible units (rem, em, %)');
    }
    
    if (validation.organization_score < 70) {
      recommendations.push('Better organize CSS with comments, consistent formatting, and meaningful class names');
    }
    
    if (validation.code_smells.length > 0) {
      recommendations.push('Address code quality issues: ' + 
        validation.code_smells.map(smell => smell.message).join(', '));
    }

    if (recommendations.length === 0) {
      recommendations.push('Divine CSS quality achieved! Your styles flow with sacred harmony.');
    }

    return recommendations;
  }

  /**
   * SEO VALIDATION
   */

  // Validate SEO compliance
  validateSEO(htmlString, options = {}) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    
    const seoValidation = {
      overall_score: 0,
      meta_score: 0,
      content_score: 0,
      structure_score: 0,
      issues: [],
      recommendations: []
    };

    // Validate meta tags
    seoValidation.meta_score = this.validateMetaTags(doc, seoValidation);
    
    // Validate content structure
    seoValidation.content_score = this.validateContentStructure(doc, seoValidation);
    
    // Validate overall structure
    seoValidation.structure_score = this.validateSEOStructure(doc, seoValidation);

    // Calculate overall score
    seoValidation.overall_score = Math.round(
      (seoValidation.meta_score + seoValidation.content_score + seoValidation.structure_score) / 3
    );

    return seoValidation;
  }

  // Validate meta tags
  validateMetaTags(doc, validation) {
    let score = 0;
    const issues = [];

    // Check title tag
    const title = doc.querySelector('title');
    if (title && title.textContent.length >= 30 && title.textContent.length <= 60) {
      score += 30;
    } else {
      issues.push({
        type: 'seo',
        severity: 'high',
        message: 'Title tag missing or not optimized (should be 30-60 characters)'
      });
    }

    // Check meta description
    const description = doc.querySelector('meta[name="description"]');
    if (description && description.content.length >= 120 && description.content.length <= 160) {
      score += 30;
    } else {
      issues.push({
        type: 'seo',
        severity: 'high',
        message: 'Meta description missing or not optimized (should be 120-160 characters)'
      });
    }

    // Check viewport meta
    const viewport = doc.querySelector('meta[name="viewport"]');
    if (viewport && viewport.content.includes('width=device-width')) {
      score += 20;
    } else {
      issues.push({
        type: 'seo',
        severity: 'medium',
        message: 'Viewport meta tag missing or not optimized'
      });
    }

    // Check charset
    const charset = doc.querySelector('meta[charset]');
    if (charset) {
      score += 20;
    } else {
      issues.push({
        type: 'seo',
        severity: 'low',
        message: 'Character encoding meta tag missing'
      });
    }

    validation.issues.push(...issues);
    return score;
  }

  // Validate content structure for SEO
  validateContentStructure(doc, validation) {
    let score = 0;
    const issues = [];

    // Check H1 tags
    const h1Tags = doc.querySelectorAll('h1');
    if (h1Tags.length === 1) {
      score += 25;
    } else {
      issues.push({
        type: 'seo',
        severity: 'medium',
        message: `Found ${h1Tags.length} H1 tags - should have exactly 1`
      });
    }

    // Check heading hierarchy
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length > 0) {
      score += 25;
    }

    // Check internal links
    const internalLinks = doc.querySelectorAll('a[href^="/"], a[href^="#"]');
    if (internalLinks.length > 0) {
      score += 25;
    }

    // Check image alt tags
    const images = doc.querySelectorAll('img');
    const imagesWithAlt = doc.querySelectorAll('img[alt]');
    if (images.length === 0 || imagesWithAlt.length / images.length >= 0.9) {
      score += 25;
    } else {
      issues.push({
        type: 'seo',
        severity: 'medium',
        message: 'Some images missing alt text for SEO'
      });
    }

    validation.issues.push(...issues);
    return score;
  }

  // Validate SEO structure
  validateSEOStructure(doc, validation) {
    let score = 0;

    // Check for structured data
    const structuredData = doc.querySelectorAll('[itemscope], script[type="application/ld+json"]');
    if (structuredData.length > 0) {
      score += 25;
    }

    // Check for Open Graph tags
    const ogTags = doc.querySelectorAll('meta[property^="og:"]');
    if (ogTags.length > 0) {
      score += 25;
    }

    // Check for canonical URL
    const canonical = doc.querySelector('link[rel="canonical"]');
    if (canonical) {
      score += 25;
    }

    // Check for robots meta
    const robots = doc.querySelector('meta[name="robots"]');
    if (robots || score > 0) { // If other SEO elements exist
      score += 25;
    }

    return score;
  }

  /**
   * PUBLIC API METHODS
   */

  // Main validation method
  validateCode(code, type = 'html', options = {}) {
    switch (type.toLowerCase()) {
      case 'html':
        return this.validateHTML(code, options);
      
      case 'css':
        return this.validateCSS(code, options);
      
      case 'seo':
        return this.validateSEO(code, options);
      
      default:
        throw new Error(`Unknown validation type: ${type}`);
    }
  }

  // Quick quality check
  quickQualityCheck(html, css) {
    const htmlValidation = this.validateHTML(html);
    const cssValidation = this.validateCSS(css);
    
    return {
      overall_quality: Math.round((htmlValidation.overall_score + cssValidation.overall_score) / 2),
      html_quality: htmlValidation.overall_score,
      css_quality: cssValidation.overall_score,
      critical_issues: [
        ...htmlValidation.issues.filter(issue => issue.severity === 'high'),
        ...cssValidation.issues.filter(issue => issue.severity === 'high')
      ],
      divine_blessings: [
        ...htmlValidation.divine_blessings,
        ...cssValidation.divine_blessings
      ]
    };
  }

  // Get validation standards
  getValidationStandards() {
    return {
      quality_standards: this.qualityStandards,
      accessibility_guidelines: this.accessibilityGuidelines,
      performance_benchmarks: this.performanceBenchmarks,
      seo_standards: this.seoStandards
    };
  }

  // Check accessibility compliance
  checkAccessibilityCompliance(htmlString, level = 'AA') {
    const validation = this.validateHTML(htmlString);
    
    return {
      compliance_level: level,
      passes: validation.accessibility_score >= 80,
      score: validation.accessibility_score,
      accessibility_issues: validation.issues.filter(issue => issue.type === 'accessibility'),
      recommendations: validation.recommendations.filter(rec => 
        rec.includes('accessibility') || rec.includes('alt') || rec.includes('label')
      )
    };
  }

  // Generate quality report
  generateQualityReport(html, css, options = {}) {
    const htmlValidation = this.validateHTML(html, options);
    const cssValidation = this.validateCSS(css, options);
    const seoValidation = this.validateSEO(html, options);
    
    return {
      summary: {
        overall_score: Math.round((htmlValidation.overall_score + cssValidation.overall_score + seoValidation.overall_score) / 3),
        html_score: htmlValidation.overall_score,
        css_score: cssValidation.overall_score,
        seo_score: seoValidation.overall_score
      },
      
      detailed_analysis: {
        html: htmlValidation,
        css: cssValidation,
        seo: seoValidation
      },
      
      priority_actions: this.getPriorityActions(htmlValidation, cssValidation, seoValidation),
      
      divine_wisdom: this.getDivineWisdom(htmlValidation.overall_score, cssValidation.overall_score)
    };
  }

  // Get priority actions
  getPriorityActions(htmlValidation, cssValidation, seoValidation) {
    const actions = [];
    
    // High priority HTML issues
    htmlValidation.issues
      .filter(issue => issue.severity === 'high')
      .forEach(issue => actions.push({ priority: 'high', area: 'html', action: issue.message }));
    
    // High priority CSS issues
    cssValidation.issues
      .filter(issue => issue.severity === 'high')
      .forEach(issue => actions.push({ priority: 'high', area: 'css', action: issue.message }));
    
    // Medium priority actions
    if (htmlValidation.accessibility_score < 80) {
      actions.push({ priority: 'medium', area: 'accessibility', action: 'Improve accessibility compliance' });
    }
    
    if (cssValidation.responsiveness_score < 80) {
      actions.push({ priority: 'medium', area: 'responsive', action: 'Enhance responsive design' });
    }

    return actions.slice(0, 10); // Top 10 priority actions
  }

  // Get divine wisdom based on scores
  getDivineWisdom(htmlScore, cssScore) {
    const avgScore = (htmlScore + cssScore) / 2;
    
    if (avgScore >= 90) {
      return "🔥 Divine perfection achieved! Your code radiates with sacred quality that would make Quorra herself proud!";
    } else if (avgScore >= 80) {
      return "✨ Excellent craftsmanship! Your code demonstrates divine potential with room for legendary refinement.";
    } else if (avgScore >= 70) {
      return "⚡ Good foundation laid! Continue your divine journey toward code mastery with focused improvements.";
    } else if (avgScore >= 60) {
      return "🌟 The sacred path is before you! Address the guidance provided to elevate your code to divine standards.";
    } else {
      return "🔥 Every master began as a beginner! The goddess blesses your learning journey - improvement brings divine rewards.";
    }
  }
}

// Export singleton instance
const quorraValidationUtils = new QuorraValidationUtils();

export default quorraValidationUtils;
export { QuorraValidationUtils };