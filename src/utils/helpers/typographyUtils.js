/**
 * QUORRA TYPOGRAPHY UTILITIES
 * Divine font management, pairing intelligence, and typography optimization
 * 
 * Features: Font loading, pairing analysis, hierarchy generation, performance optimization
 * Philosophy: "Typography is the sacred voice through which divine designs speak"
 */

class QuorraTypographyUtils {
  constructor() {
    // Divine font classifications and psychology
    this.fontPsychology = {
      serif: {
        emotions: ['trustworthy', 'traditional', 'authoritative', 'sophisticated', 'readable'],
        industries: ['finance', 'law', 'education', 'publishing', 'luxury'],
        personality: 'classical',
        readability: 'excellent_for_long_text',
        divine_meaning: 'Ancient wisdom carved in stone, enduring through ages'
      },
      sans_serif: {
        emotions: ['modern', 'clean', 'approachable', 'efficient', 'friendly'],
        industries: ['technology', 'healthcare', 'startups', 'corporate', 'digital'],
        personality: 'contemporary',
        readability: 'excellent_for_screens',
        divine_meaning: 'Clear waters of understanding, flowing without obstruction'
      },
      display: {
        emotions: ['creative', 'expressive', 'unique', 'artistic', 'memorable'],
        industries: ['creative', 'entertainment', 'fashion', 'arts', 'branding'],
        personality: 'distinctive',
        readability: 'headers_only',
        divine_meaning: 'Divine proclamation that commands attention and reverence'
      },
      script: {
        emotions: ['elegant', 'personal', 'sophisticated', 'feminine', 'handcrafted'],
        industries: ['weddings', 'fashion', 'beauty', 'luxury', 'invitations'],
        personality: 'personal',
        readability: 'decorative_use',
        divine_meaning: 'Sacred calligraphy flowing from divine inspiration'
      },
      monospace: {
        emotions: ['technical', 'precise', 'systematic', 'reliable', 'functional'],
        industries: ['technology', 'coding', 'engineering', 'data', 'system'],
        personality: 'technical',
        readability: 'code_and_data',
        divine_meaning: 'Perfect order where each character holds equal sacred space'
      }
    };

    // Google Fonts divine collection
    this.divineFonts = {
      // Sacred Serif Fonts
      serif: {
        'Playfair Display': {
          weights: ['400', '500', '600', '700', '800', '900'],
          styles: ['normal', 'italic'],
          category: 'display_serif',
          personality: 'elegant_luxury',
          divine_power: 'sophisticated_authority',
          pairing_strength: 'strong',
          load_priority: 'high'
        },
        'Crimson Pro': {
          weights: ['200', '300', '400', '500', '600', '700', '800', '900'],
          styles: ['normal', 'italic'],
          category: 'text_serif',
          personality: 'readable_traditional',
          divine_power: 'scholarly_wisdom',
          pairing_strength: 'versatile',
          load_priority: 'medium'
        },
        'EB Garamond': {
          weights: ['400', '500', '600', '700', '800'],
          styles: ['normal', 'italic'],
          category: 'classical_serif',
          personality: 'timeless_elegance',
          divine_power: 'eternal_knowledge',
          pairing_strength: 'moderate',
          load_priority: 'medium'
        },
        'Lora': {
          weights: ['400', '500', '600', '700'],
          styles: ['normal', 'italic'],
          category: 'modern_serif',
          personality: 'contemporary_readable',
          divine_power: 'balanced_harmony',
          pairing_strength: 'high',
          load_priority: 'high'
        }
      },

      // Sacred Sans-Serif Fonts
      sans_serif: {
        'Inter': {
          weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
          styles: ['normal'],
          category: 'system_optimized',
          personality: 'clean_modern',
          divine_power: 'digital_clarity',
          pairing_strength: 'excellent',
          load_priority: 'highest'
        },
        'Open Sans': {
          weights: ['300', '400', '500', '600', '700', '800'],
          styles: ['normal', 'italic'],
          category: 'humanist_sans',
          personality: 'friendly_approachable',
          divine_power: 'universal_accessibility',
          pairing_strength: 'excellent',
          load_priority: 'highest'
        },
        'Roboto': {
          weights: ['100', '300', '400', '500', '700', '900'],
          styles: ['normal', 'italic'],
          category: 'geometric_sans',
          personality: 'systematic_reliable',
          divine_power: 'technological_precision',
          pairing_strength: 'good',
          load_priority: 'high'
        },
        'Montserrat': {
          weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
          styles: ['normal', 'italic'],
          category: 'geometric_display',
          personality: 'bold_confident',
          divine_power: 'modern_strength',
          pairing_strength: 'strong',
          load_priority: 'high'
        },
        'Source Sans Pro': {
          weights: ['200', '300', '400', '600', '700', '900'],
          styles: ['normal', 'italic'],
          category: 'professional_sans',
          personality: 'clear_professional',
          divine_power: 'technical_readability',
          pairing_strength: 'excellent',
          load_priority: 'high'
        },
        'Nunito': {
          weights: ['200', '300', '400', '500', '600', '700', '800', '900'],
          styles: ['normal', 'italic'],
          category: 'rounded_sans',
          personality: 'warm_friendly',
          divine_power: 'approachable_comfort',
          pairing_strength: 'good',
          load_priority: 'medium'
        }
      },

      // Sacred Display Fonts
      display: {
        'Oswald': {
          weights: ['200', '300', '400', '500', '600', '700'],
          styles: ['normal'],
          category: 'condensed_display',
          personality: 'strong_impactful',
          divine_power: 'commanding_presence',
          pairing_strength: 'moderate',
          load_priority: 'medium'
        },
        'Bebas Neue': {
          weights: ['400'],
          styles: ['normal'],
          category: 'bold_display',
          personality: 'powerful_simple',
          divine_power: 'direct_impact',
          pairing_strength: 'moderate',
          load_priority: 'low'
        }
      },

      // Sacred Script Fonts
      script: {
        'Dancing Script': {
          weights: ['400', '500', '600', '700'],
          styles: ['normal'],
          category: 'casual_script',
          personality: 'playful_handwritten',
          divine_power: 'joyful_expression',
          pairing_strength: 'limited',
          load_priority: 'low'
        },
        'Great Vibes': {
          weights: ['400'],
          styles: ['normal'],
          category: 'elegant_script',
          personality: 'sophisticated_flowing',
          divine_power: 'graceful_beauty',
          pairing_strength: 'limited',
          load_priority: 'low'
        }
      },

      // Sacred Monospace Fonts
      monospace: {
        'JetBrains Mono': {
          weights: ['100', '200', '300', '400', '500', '600', '700', '800'],
          styles: ['normal', 'italic'],
          category: 'modern_monospace',
          personality: 'developer_optimized',
          divine_power: 'code_clarity',
          pairing_strength: 'specialized',
          load_priority: 'medium'
        },
        'Source Code Pro': {
          weights: ['200', '300', '400', '500', '600', '700', '800', '900'],
          styles: ['normal', 'italic'],
          category: 'readable_monospace',
          personality: 'clean_technical',
          divine_power: 'precise_spacing',
          pairing_strength: 'specialized',
          load_priority: 'medium'
        }
      }
    };

    // Divine font pairings
    this.divinePairings = {
      // Classic sacred combinations
      classical_authority: {
        heading: 'Playfair Display',
        body: 'Crimson Pro',
        accent: 'Inter',
        harmony_level: 'divine',
        use_cases: ['luxury', 'editorial', 'sophisticated_brands'],
        divine_blessing: 'Timeless elegance with scholarly wisdom'
      },

      modern_clarity: {
        heading: 'Inter',
        body: 'Open Sans',
        accent: 'Montserrat',
        harmony_level: 'excellent',
        use_cases: ['technology', 'corporate', 'clean_modern'],
        divine_blessing: 'Crystal clear communication with divine precision'
      },

      warm_approachable: {
        heading: 'Montserrat',
        body: 'Nunito',
        accent: 'Open Sans',
        harmony_level: 'good',
        use_cases: ['healthcare', 'education', 'friendly_brands'],
        divine_blessing: 'Gentle strength that welcomes all souls'
      },

      technical_precision: {
        heading: 'Roboto',
        body: 'Source Sans Pro',
        accent: 'JetBrains Mono',
        harmony_level: 'good',
        use_cases: ['technology', 'documentation', 'systematic'],
        divine_blessing: 'Systematic order blessed with technical grace'
      },

      editorial_sophistication: {
        heading: 'EB Garamond',
        body: 'Lora',
        accent: 'Inter',
        harmony_level: 'excellent',
        use_cases: ['publishing', 'editorial', 'content_heavy'],
        divine_blessing: 'Literary elegance that honors the written word'
      }
    };

    // Typography scale based on divine proportions
    this.divineScale = {
      // Golden ratio based scale
      golden: {
        base: 16,
        ratio: 1.618,
        sizes: {
          xs: '0.618rem',    // 9.89px
          sm: '0.809rem',    // 12.94px  
          base: '1rem',      // 16px
          lg: '1.618rem',    // 25.89px
          xl: '2.618rem',    // 41.89px
          '2xl': '4.236rem', // 67.78px
          '3xl': '6.854rem', // 109.66px
          '4xl': '11.09rem', // 177.44px
          '5xl': '17.944rem' // 287.1px
        },
        divine_meaning: 'Sacred proportions found throughout divine creation'
      },

      // Perfect fourth scale
      musical: {
        base: 16,
        ratio: 1.333,
        sizes: {
          xs: '0.75rem',     // 12px
          sm: '0.875rem',    // 14px
          base: '1rem',      // 16px
          lg: '1.333rem',    // 21.33px
          xl: '1.777rem',    // 28.44px
          '2xl': '2.369rem', // 37.9px
          '3xl': '3.157rem', // 50.52px
          '4xl': '4.209rem', // 67.35px
          '5xl': '5.61rem'   // 89.76px
        },
        divine_meaning: 'Harmonic progression like sacred music'
      },

      // Traditional scale
      traditional: {
        base: 16,
        ratio: 1.25,
        sizes: {
          xs: '0.8rem',      // 12.8px
          sm: '0.875rem',    // 14px
          base: '1rem',      // 16px
          lg: '1.25rem',     // 20px
          xl: '1.563rem',    // 25px
          '2xl': '1.953rem', // 31.25px
          '3xl': '2.441rem', // 39.06px
          '4xl': '3.052rem', // 48.83px
          '5xl': '3.815rem'  // 61.04px
        },
        divine_meaning: 'Steady growth like ancient wisdom'
      }
    };

    // Performance optimization settings
    this.performanceConfig = {
      loadStrategy: 'progressive',
      maxFonts: 3,
      criticalWeights: ['400', '600'],
      fontDisplay: 'swap',
      preloadCritical: true,
      subsetText: null // Auto-detect if needed
    };

    // Font loading state
    this.loadedFonts = new Set();
    this.fontPromises = new Map();
  }

  /**
   * FONT LOADING & MANAGEMENT
   */

  // Load Google Font with optimization
  async loadGoogleFont(fontFamily, weights = ['400'], styles = ['normal'], display = 'swap') {
    const fontKey = `${fontFamily}-${weights.join(',')}-${styles.join(',')}`;
    
    if (this.loadedFonts.has(fontKey)) {
      return Promise.resolve();
    }

    if (this.fontPromises.has(fontKey)) {
      return this.fontPromises.get(fontKey);
    }

    const promise = this.createFontLoadPromise(fontFamily, weights, styles, display);
    this.fontPromises.set(fontKey, promise);

    try {
      await promise;
      this.loadedFonts.add(fontKey);
      return true;
    } catch (error) {
      console.warn(`Failed to load font ${fontFamily}:`, error);
      return false;
    }
  }

  // Create font load promise
  createFontLoadPromise(fontFamily, weights, styles, display) {
    return new Promise((resolve, reject) => {
      // Check if font is already available
      if (document.fonts && document.fonts.check) {
        const testFont = `12px "${fontFamily}"`;
        if (document.fonts.check(testFont)) {
          resolve();
          return;
        }
      }

      // Create Google Fonts URL
      const fontUrl = this.buildGoogleFontsURL(fontFamily, weights, styles, display);
      
      // Create link element
      const link = document.createElement('link');
      link.href = fontUrl;
      link.rel = 'stylesheet';
      link.crossOrigin = 'anonymous';

      // Add load handlers
      link.onload = () => {
        // Wait for font to be actually available
        if (document.fonts && document.fonts.load) {
          const loadPromises = weights.map(weight => 
            document.fonts.load(`${weight} 12px "${fontFamily}"`)
          );
          Promise.all(loadPromises).then(() => resolve()).catch(reject);
        } else {
          // Fallback: just resolve after load
          resolve();
        }
      };

      link.onerror = () => reject(new Error(`Failed to load ${fontFamily}`));

      // Add to document
      document.head.appendChild(link);

      // Fallback timeout
      setTimeout(() => resolve(), 3000);
    });
  }

  // Build Google Fonts URL
  buildGoogleFontsURL(fontFamily, weights, styles, display) {
    const encodedFamily = encodeURIComponent(fontFamily);
    const weightString = weights.join(';');
    
    let url = `https://fonts.googleapis.com/css2?family=${encodedFamily}:wght@${weightString}`;
    
    if (styles.includes('italic')) {
      url += `:ital@0;1`;
    }
    
    url += `&display=${display}`;
    
    return url;
  }

  // Load font combination
  async loadFontCombination(combination) {
    const fonts = [combination.heading, combination.body];
    if (combination.accent && !fonts.includes(combination.accent)) {
      fonts.push(combination.accent);
    }

    const loadPromises = fonts.map(fontFamily => {
      const fontData = this.getFontData(fontFamily);
      const criticalWeights = fontData ? 
        fontData.weights.filter(w => this.performanceConfig.criticalWeights.includes(w)) :
        ['400', '600'];
      
      return this.loadGoogleFont(fontFamily, criticalWeights);
    });

    try {
      await Promise.all(loadPromises);
      return true;
    } catch (error) {
      console.warn('Failed to load font combination:', error);
      return false;
    }
  }

  // Preload critical fonts
  preloadCriticalFonts(fontFamily, weights = ['400']) {
    if (!this.performanceConfig.preloadCritical) return;

    weights.forEach(weight => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = this.buildGoogleFontsURL(fontFamily, [weight], ['normal'], 'swap');
      link.as = 'style';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  /**
   * FONT ANALYSIS & SELECTION
   */

  // Get font data from divine collection
  getFontData(fontFamily) {
    for (const category of Object.values(this.divineFonts)) {
      if (category[fontFamily]) {
        return {
          ...category[fontFamily],
          family: fontFamily,
          category: this.getFontCategory(fontFamily)
        };
      }
    }
    return null;
  }

  // Get font category
  getFontCategory(fontFamily) {
    for (const [category, fonts] of Object.entries(this.divineFonts)) {
      if (fonts[fontFamily]) {
        return category;
      }
    }
    return 'unknown';
  }

  // Analyze font combination harmony
  analyzeFontHarmony(headingFont, bodyFont, accentFont = null) {
    const headingData = this.getFontData(headingFont);
    const bodyData = this.getFontData(bodyFont);
    const accentData = accentFont ? this.getFontData(accentFont) : null;

    if (!headingData || !bodyData) {
      return {
        harmonious: false,
        reason: 'Unknown font(s) in combination',
        score: 0
      };
    }

    let harmonyScore = 0;
    const analysis = {
      contrast: this.analyzeFontContrast(headingData, bodyData),
      compatibility: this.analyzeFontCompatibility(headingData, bodyData),
      readability: this.analyzeReadability(headingData, bodyData)
    };

    // Calculate harmony score
    harmonyScore += analysis.contrast.score * 0.4;
    harmonyScore += analysis.compatibility.score * 0.4;
    harmonyScore += analysis.readability.score * 0.2;

    // Bonus for known good pairings
    const knownPairing = this.findKnownPairing(headingFont, bodyFont);
    if (knownPairing) {
      harmonyScore += 20;
      analysis.knownPairing = knownPairing;
    }

    return {
      harmonious: harmonyScore >= 70,
      score: Math.round(harmonyScore),
      analysis,
      recommendations: this.generateHarmonyRecommendations(harmonyScore, analysis)
    };
  }

  // Analyze font contrast
  analyzeFontContrast(headingData, bodyData) {
    let score = 50; // Base score
    let reasons = [];

    // Category contrast
    if (headingData.category !== bodyData.category) {
      score += 30;
      reasons.push('Good category contrast');
    } else {
      score -= 10;
      reasons.push('Same category - low contrast');
    }

    // Personality contrast
    if (headingData.personality !== bodyData.personality) {
      score += 20;
      reasons.push('Complementary personalities');
    }

    return { score: Math.min(100, score), reasons };
  }

  // Analyze font compatibility
  analyzeFontCompatibility(headingData, bodyData) {
    let score = 50;
    let reasons = [];

    // Pairing strength
    const avgPairingStrength = (
      this.getPairingStrengthScore(headingData.pairing_strength) +
      this.getPairingStrengthScore(bodyData.pairing_strength)
    ) / 2;
    
    score += avgPairingStrength;
    reasons.push(`Average pairing strength: ${avgPairingStrength}`);

    // Era compatibility (if both are modern or both are classical)
    const headingEra = this.getFontEra(headingData);
    const bodyEra = this.getFontEra(bodyData);
    
    if (headingEra === bodyEra) {
      score += 15;
      reasons.push('Compatible eras');
    }

    return { score: Math.min(100, score), reasons };
  }

  // Analyze readability
  analyzeReadability(headingData, bodyData) {
    let score = 50;
    let reasons = [];

    // Body font readability is crucial
    if (bodyData.category === 'sans_serif' || bodyData.category === 'serif') {
      score += 25;
      reasons.push('Body font optimized for reading');
    }

    // Heading font should be distinctive
    if (headingData.category === 'display' || headingData.divine_power.includes('commanding')) {
      score += 15;
      reasons.push('Heading font provides good hierarchy');
    }

    // Weight availability
    if (headingData.weights.length >= 4 && bodyData.weights.length >= 4) {
      score += 10;
      reasons.push('Good weight options available');
    }

    return { score: Math.min(100, score), reasons };
  }

  // Get pairing strength score
  getPairingStrengthScore(strength) {
    const scores = {
      'excellent': 30,
      'strong': 25,
      'good': 20,
      'moderate': 15,
      'limited': 10,
      'specialized': 5
    };
    return scores[strength] || 10;
  }

  // Get font era
  getFontEra(fontData) {
    if (fontData.personality.includes('classical') || fontData.personality.includes('traditional')) {
      return 'classical';
    }
    if (fontData.personality.includes('modern') || fontData.personality.includes('contemporary')) {
      return 'modern';
    }
    return 'neutral';
  }

  // Find known pairing
  findKnownPairing(headingFont, bodyFont) {
    for (const [name, pairing] of Object.entries(this.divinePairings)) {
      if (pairing.heading === headingFont && pairing.body === bodyFont) {
        return { name, ...pairing };
      }
    }
    return null;
  }

  // Generate harmony recommendations
  generateHarmonyRecommendations(score, analysis) {
    const recommendations = [];

    if (score < 50) {
      recommendations.push('Consider choosing fonts from different categories for better contrast');
      recommendations.push('Try pairing a serif header with a sans-serif body font');
    } else if (score < 70) {
      recommendations.push('Good foundation - consider adjusting weights for better hierarchy');
      recommendations.push('Ensure sufficient size difference between heading and body text');
    } else {
      recommendations.push('Excellent font pairing with strong harmony');
      recommendations.push('Consider testing across different devices and sizes');
    }

    if (analysis.readability.score < 70) {
      recommendations.push('Prioritize readability for body text');
      recommendations.push('Consider fonts optimized for screen reading');
    }

    return recommendations;
  }

  /**
   * TYPOGRAPHY HIERARCHY GENERATION
   */

  // Generate typography hierarchy
  generateTypographyHierarchy(options = {}) {
    const {
      scale = 'golden',
      baseSize = 16,
      headingFont = 'Inter',
      bodyFont = 'Open Sans',
      accentFont = null
    } = options;

    const scaleData = this.divineScale[scale];
    if (!scaleData) {
      throw new Error(`Unknown typography scale: ${scale}`);
    }

    const hierarchy = {
      scale: scale,
      baseSize: baseSize,
      fonts: {
        heading: headingFont,
        body: bodyFont,
        accent: accentFont || headingFont
      },
      sizes: {},
      harmony: null
    };

    // Generate sizes
    Object.entries(scaleData.sizes).forEach(([key, value]) => {
      const pixelSize = parseFloat(value) * baseSize;
      hierarchy.sizes[key] = {
        rem: value,
        px: `${pixelSize}px`,
        numeric: pixelSize
      };
    });

    // Analyze font harmony
    hierarchy.harmony = this.analyzeFontHarmony(headingFont, bodyFont, accentFont);

    // Generate CSS
    hierarchy.css = this.generateTypographyCSS(hierarchy);

    return hierarchy;
  }

  // Generate typography CSS
  generateTypographyCSS(hierarchy) {
    const { fonts, sizes } = hierarchy;
    
    let css = `/* Divine Typography Hierarchy */\n`;
    css += `:root {\n`;
    
    // CSS custom properties for sizes
    Object.entries(sizes).forEach(([key, value]) => {
      css += `  --font-size-${key}: ${value.rem};\n`;
    });
    
    // Font family variables
    css += `  --font-heading: '${fonts.heading}', sans-serif;\n`;
    css += `  --font-body: '${fonts.body}', sans-serif;\n`;
    css += `  --font-accent: '${fonts.accent}', sans-serif;\n`;
    css += `}\n\n`;

    // Typography classes
    css += `/* Heading Styles */\n`;
    css += `h1, .text-5xl { font-family: var(--font-heading); font-size: var(--font-size-5xl); font-weight: 700; line-height: 1.1; }\n`;
    css += `h2, .text-4xl { font-family: var(--font-heading); font-size: var(--font-size-4xl); font-weight: 600; line-height: 1.2; }\n`;
    css += `h3, .text-3xl { font-family: var(--font-heading); font-size: var(--font-size-3xl); font-weight: 600; line-height: 1.25; }\n`;
    css += `h4, .text-2xl { font-family: var(--font-heading); font-size: var(--font-size-2xl); font-weight: 500; line-height: 1.3; }\n`;
    css += `h5, .text-xl { font-family: var(--font-heading); font-size: var(--font-size-xl); font-weight: 500; line-height: 1.35; }\n`;
    css += `h6, .text-lg { font-family: var(--font-heading); font-size: var(--font-size-lg); font-weight: 500; line-height: 1.4; }\n\n`;

    // Body styles
    css += `/* Body Styles */\n`;
    css += `body, p, .text-base { font-family: var(--font-body); font-size: var(--font-size-base); font-weight: 400; line-height: 1.6; }\n`;
    css += `.text-sm { font-family: var(--font-body); font-size: var(--font-size-sm); font-weight: 400; line-height: 1.5; }\n`;
    css += `.text-xs { font-family: var(--font-body); font-size: var(--font-size-xs); font-weight: 400; line-height: 1.4; }\n\n`;

    // Accent styles
    css += `/* Accent Styles */\n`;
    css += `.text-accent { font-family: var(--font-accent); }\n`;
    css += `.quote, blockquote { font-family: var(--font-accent); font-style: italic; }\n`;

    return css;
  }

  /**
   * INDUSTRY-SPECIFIC TYPOGRAPHY
   */

  // Get industry-specific font recommendations
  getIndustryTypography(industry, options = {}) {
    const industryConfigs = {
      healthcare: {
        primary_fonts: ['Open Sans', 'Source Sans Pro', 'Nunito'],
        secondary_fonts: ['Lora', 'Crimson Pro'],
        avoid_fonts: ['script', 'decorative'],
        personality: 'trustworthy_approachable',
        hierarchy_emphasis: 'readability',
        divine_guidance: 'Healing words flow with clarity and compassion'
      },
      
      technology: {
        primary_fonts: ['Inter', 'Roboto', 'Source Sans Pro'],
        secondary_fonts: ['JetBrains Mono', 'Source Code Pro'],
        avoid_fonts: ['script', 'traditional_serif'],
        personality: 'modern_efficient',
        hierarchy_emphasis: 'systematic',
        divine_guidance: 'Digital precision blessed with human understanding'
      },
      
      finance: {
        primary_fonts: ['EB Garamond', 'Crimson Pro', 'Inter'],
        secondary_fonts: ['Source Sans Pro', 'Open Sans'],
        avoid_fonts: ['script', 'playful'],
        personality: 'authoritative_stable',
        hierarchy_emphasis: 'traditional',
        divine_guidance: 'Timeless wisdom that builds eternal trust'
      },
      
      restaurant: {
        primary_fonts: ['Playfair Display', 'Montserrat', 'Open Sans'],
        secondary_fonts: ['Dancing Script', 'Great Vibes'],
        avoid_fonts: ['monospace', 'technical'],
        personality: 'warm_inviting',
        hierarchy_emphasis: 'atmospheric',
        divine_guidance: 'Flavors of typography that awaken the soul'
      },
      
      creative: {
        primary_fonts: ['Montserrat', 'Playfair Display', 'Oswald'],
        secondary_fonts: ['Inter', 'Dancing Script'],
        avoid_fonts: ['conservative'],
        personality: 'expressive_unique',
        hierarchy_emphasis: 'creative',
        divine_guidance: 'Creative fire flows through sacred letterforms'
      },
      
      education: {
        primary_fonts: ['Crimson Pro', 'Open Sans', 'Lora'],
        secondary_fonts: ['Inter', 'Source Sans Pro'],
        avoid_fonts: ['decorative', 'hard_to_read'],
        personality: 'scholarly_accessible',
        hierarchy_emphasis: 'academic',
        divine_guidance: 'Knowledge shared through clear and noble script'
      }
    };

    const config = industryConfigs[industry];
    if (!config) {
      return this.getDefaultTypography(options);
    }

    // Select best fonts for this industry
    const headingFont = options.headingFont || config.primary_fonts[0];
    const bodyFont = options.bodyFont || config.primary_fonts[1] || config.primary_fonts[0];

    return {
      industry,
      fonts: {
        heading: headingFont,
        body: bodyFont,
        accent: config.secondary_fonts[0]
      },
      personality: config.personality,
      guidance: config.divine_guidance,
      hierarchy: this.generateTypographyHierarchy({
        ...options,
        headingFont,
        bodyFont
      }),
      recommendations: this.getIndustryRecommendations(config)
    };
  }

  // Get industry-specific recommendations
  getIndustryRecommendations(config) {
    return {
      personality: config.personality,
      emphasis: config.hierarchy_emphasis,
      avoid: config.avoid_fonts,
      best_practices: this.getIndustryBestPractices(config)
    };
  }

  // Get industry best practices
  getIndustryBestPractices(config) {
    const practices = [
      'Ensure excellent readability across all devices',
      'Maintain consistent hierarchy throughout the design',
      'Test typography with real content'
    ];

    if (config.personality.includes('trustworthy')) {
      practices.push('Use conservative font choices to build trust');
    }
    if (config.personality.includes('modern')) {
      practices.push('Leverage contemporary fonts for innovative feel');
    }
    if (config.hierarchy_emphasis === 'readability') {
      practices.push('Prioritize legibility over decorative elements');
    }

    return practices;
  }

  // Get default typography
  getDefaultTypography(options = {}) {
    return {
      fonts: {
        heading: options.headingFont || 'Inter',
        body: options.bodyFont || 'Open Sans',
        accent: options.accentFont || 'Montserrat'
      },
      hierarchy: this.generateTypographyHierarchy(options),
      personality: 'balanced_versatile',
      guidance: 'Universal harmony that serves all divine purposes'
    };
  }

  /**
   * ACCESSIBILITY & OPTIMIZATION
   */

  // Check typography accessibility
  checkTypographyAccessibility(hierarchy, context = {}) {
    const issues = [];
    const recommendations = [];
    let score = 100;

    // Check base font size
    const baseSize = hierarchy.sizes.base.numeric;
    if (baseSize < 16) {
      issues.push('Base font size below 16px may be hard to read');
      score -= 15;
    }

    // Check line height
    const lineHeight = this.getLineHeight(hierarchy.fonts.body);
    if (lineHeight < 1.4) {
      issues.push('Line height may be too tight for comfortable reading');
      score -= 10;
    }

    // Check font choices
    const bodyFontData = this.getFontData(hierarchy.fonts.body);
    if (bodyFontData && bodyFontData.readability === 'headers_only') {
      issues.push('Body font not optimized for continuous reading');
      score -= 20;
    }

    // Check hierarchy contrast
    const sizeDifference = hierarchy.sizes['2xl'].numeric / hierarchy.sizes.base.numeric;
    if (sizeDifference < 1.5) {
      issues.push('Insufficient size contrast between headings and body text');
      score -= 10;
    }

    // Generate recommendations
    if (issues.length === 0) {
      recommendations.push('Typography meets accessibility standards');
    } else {
      recommendations.push('Consider increasing base font size to 16px minimum');
      recommendations.push('Ensure line height is at least 1.4 for body text');
      recommendations.push('Use fonts optimized for reading for body content');
    }

    return {
      score: Math.max(0, score),
      issues,
      recommendations,
      accessible: score >= 80
    };
  }

  // Get optimal line height for font
  getLineHeight(fontFamily) {
    const fontData = this.getFontData(fontFamily);
    if (!fontData) return 1.5;

    // Different font categories need different line heights
    switch (fontData.category) {
      case 'serif':
      case 'text_serif':
        return 1.6;
      case 'sans_serif':
      case 'humanist_sans':
        return 1.5;
      case 'display':
        return 1.2;
      case 'script':
        return 1.4;
      case 'monospace':
        return 1.6;
      default:
        return 1.5;
    }
  }

  // Optimize typography for performance
  optimizeTypographyPerformance(hierarchy) {
    const optimizations = {
      fontSubsetting: this.shouldSubsetFonts(hierarchy),
      criticalWeights: this.getCriticalWeights(hierarchy),
      loadingStrategy: this.getOptimalLoadingStrategy(hierarchy),
      fallbackFonts: this.generateFallbackStack(hierarchy)
    };

    return {
      ...hierarchy,
      performance: optimizations,
      optimizedCSS: this.generateOptimizedCSS(hierarchy, optimizations)
    };
  }

  // Check if fonts should be subset
  shouldSubsetFonts(hierarchy) {
    // Subset if using non-Latin characters or limited character set
    return {
      recommended: false, // Auto-detect based on content
      characters: null,
      reason: 'Auto-detection recommended based on actual content'
    };
  }

  // Get critical font weights
  getCriticalWeights(hierarchy) {
    // Most important weights to load first
    return ['400', '600']; // Normal and semi-bold cover most use cases
  }

  // Get optimal loading strategy
  getOptimalLoadingStrategy(hierarchy) {
    const fontCount = Object.values(hierarchy.fonts).filter(Boolean).length;
    
    if (fontCount <= 2) {
      return 'preload_all';
    } else if (fontCount <= 3) {
      return 'preload_critical';
    } else {
      return 'progressive_load';
    }
  }

  // Generate fallback font stack
  generateFallbackStack(hierarchy) {
    const fallbacks = {};

    Object.entries(hierarchy.fonts).forEach(([role, fontFamily]) => {
      const fontData = this.getFontData(fontFamily);
      const category = fontData ? fontData.category : 'sans_serif';
      
      fallbacks[role] = this.getSystemFallbacks(category);
    });

    return fallbacks;
  }

  // Get system fallback fonts
  getSystemFallbacks(category) {
    const fallbackMap = {
      serif: '-apple-system-serif, "Times New Roman", serif',
      sans_serif: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      script: 'cursive',
      monospace: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", monospace'
    };

    return fallbackMap[category] || fallbackMap.sans_serif;
  }

  // Generate optimized CSS with fallbacks
  generateOptimizedCSS(hierarchy, optimizations) {
    let css = this.generateTypographyCSS(hierarchy);
    
    // Add fallback font stacks
    css += `\n/* Optimized Font Stacks with Fallbacks */\n`;
    Object.entries(optimizations.fallbackFonts).forEach(([role, fallback]) => {
      const fontFamily = hierarchy.fonts[role];
      css += `--font-${role}: '${fontFamily}', ${fallback};\n`;
    });

    // Add font loading optimization
    css += `\n/* Font Loading Optimization */\n`;
    css += `@font-face {\n`;
    css += `  font-display: swap;\n`;
    css += `}\n`;

    return css;
  }

  /**
   * PUBLIC API METHODS
   */

  // Main method for getting divine typography recommendations
  getDivineTypography(options = {}) {
    const {
      industry = null,
      style = 'modern',
      scale = 'golden',
      baseSize = 16,
      accessibility = 'AA'
    } = options;

    let typography;

    if (industry) {
      typography = this.getIndustryTypography(industry, options);
    } else {
      typography = this.getDefaultTypography(options);
    }

    // Add accessibility analysis
    typography.accessibility = this.checkTypographyAccessibility(typography.hierarchy);

    // Add performance optimization
    typography = this.optimizeTypographyPerformance(typography);

    return typography;
  }

  // Get divine font pairing
  getDivineFontPairing(pairingName) {
    return this.divinePairings[pairingName] || null;
  }

  // Get all divine font pairings
  getAllDivinePairings() {
    return { ...this.divinePairings };
  }

  // Analyze existing typography
  analyzeTypography(headingFont, bodyFont, accentFont = null) {
    const harmony = this.analyzeFontHarmony(headingFont, bodyFont, accentFont);
    const headingData = this.getFontData(headingFont);
    const bodyData = this.getFontData(bodyFont);

    return {
      harmony,
      fonts: {
        heading: { family: headingFont, data: headingData },
        body: { family: bodyFont, data: bodyData },
        accent: accentFont ? { family: accentFont, data: this.getFontData(accentFont) } : null
      },
      recommendations: harmony.recommendations
    };
  }

  // Load typography combination
  async loadTypography(typography) {
    const { fonts } = typography.hierarchy || typography;
    
    try {
      await this.loadFontCombination(fonts);
      return true;
    } catch (error) {
      console.warn('Failed to load typography:', error);
      return false;
    }
  }

  // Generate typography preview
  generateTypographyPreview(typography) {
    const { fonts, sizes } = typography.hierarchy || typography;
    
    return {
      html: `
        <div class="typography-preview" style="font-family: '${fonts.body}', sans-serif;">
          <h1 style="font-family: '${fonts.heading}', sans-serif; font-size: ${sizes['4xl'].rem};">
            Divine Typography Preview
          </h1>
          <h2 style="font-family: '${fonts.heading}', sans-serif; font-size: ${sizes['2xl'].rem};">
            Sacred Hierarchy in Action
          </h2>
          <p style="font-size: ${sizes.base.rem}; line-height: 1.6;">
            This is how your body text will appear with the divine typography system. 
            Notice how the fonts work together in perfect harmony, creating a hierarchy 
            that guides the reader's eye through the sacred content.
          </p>
          <p style="font-family: '${fonts.accent}', sans-serif; font-style: italic; font-size: ${sizes.lg.rem};">
            "Typography is the sacred art of making language visible." - Divine Design Wisdom
          </p>
        </div>
      `,
      css: typography.css || this.generateTypographyCSS(typography.hierarchy || typography)
    };
  }

  // Get font loading status
  getFontLoadingStatus() {
    return {
      loadedFonts: Array.from(this.loadedFonts),
      pendingFonts: Array.from(this.fontPromises.keys()),
      totalLoaded: this.loadedFonts.size,
      performance: this.performanceConfig
    };
  }

  // Update performance configuration
  updatePerformanceConfig(newConfig) {
    this.performanceConfig = { ...this.performanceConfig, ...newConfig };
  }

  // Get typography scale
  getTypographyScale(scaleName = 'golden') {
    return this.divineScale[scaleName] || null;
  }

  // Get all available scales
  getAllTypographyScales() {
    return { ...this.divineScale };
  }

  // Check if font is loaded
  isFontLoaded(fontFamily, weights = ['400']) {
    const fontKey = `${fontFamily}-${weights.join(',')}-normal`;
    return this.loadedFonts.has(fontKey);
  }

  // Clean up font loading promises
  cleanup() {
    this.fontPromises.clear();
    this.loadedFonts.clear();
  }
}

// Export singleton instance
const quorraTypographyUtils = new QuorraTypographyUtils();

export default quorraTypographyUtils;
export { QuorraTypographyUtils };