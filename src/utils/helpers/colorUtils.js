/**
 * QUORRA COLOR UTILITIES
 * Divine color manipulation, psychology, and palette generation
 * 
 * Features: Color conversion, harmony analysis, accessibility checking, divine palette generation
 * Philosophy: "Colors are the sacred language through which designs speak to souls"
 */

class QuorraColorUtils {
  constructor() {
    // Divine color psychology mappings
    this.colorPsychology = {
      // Primary color associations
      red: {
        emotions: ['passion', 'energy', 'urgency', 'power', 'love', 'danger'],
        industries: ['food', 'entertainment', 'emergency', 'sports'],
        accessibility: { requires_high_contrast: true },
        divine_meaning: 'Fire of creation and passionate craft'
      },
      orange: {
        emotions: ['creativity', 'enthusiasm', 'warmth', 'energy', 'friendliness'],
        industries: ['creative', 'fitness', 'food', 'technology'],
        accessibility: { requires_dark_background: true },
        divine_meaning: 'Divine flame that inspires innovation'
      },
      yellow: {
        emotions: ['happiness', 'optimism', 'clarity', 'energy', 'caution'],
        industries: ['children', 'food', 'travel', 'warning_systems'],
        accessibility: { requires_dark_background: true },
        divine_meaning: 'Sacred light of wisdom and enlightenment'
      },
      green: {
        emotions: ['growth', 'nature', 'stability', 'freshness', 'prosperity'],
        industries: ['healthcare', 'environment', 'finance', 'organic'],
        accessibility: { good_contrast_range: true },
        divine_meaning: 'Life force flowing through all divine creation'
      },
      blue: {
        emotions: ['trust', 'stability', 'calmness', 'professionalism', 'loyalty'],
        industries: ['technology', 'finance', 'healthcare', 'corporate'],
        accessibility: { excellent_contrast: true },
        divine_meaning: 'Waters of divine wisdom and eternal trust'
      },
      purple: {
        emotions: ['luxury', 'creativity', 'mystery', 'spirituality', 'royalty'],
        industries: ['luxury', 'beauty', 'creative', 'spiritual'],
        accessibility: { contrast_varies: true },
        divine_meaning: 'Royal essence of divine transformation'
      },
      pink: {
        emotions: ['compassion', 'nurturing', 'femininity', 'softness', 'love'],
        industries: ['beauty', 'healthcare', 'children', 'wellness'],
        accessibility: { requires_careful_usage: true },
        divine_meaning: 'Gentle touch of divine compassion'
      },
      brown: {
        emotions: ['earthiness', 'stability', 'reliability', 'warmth', 'comfort'],
        industries: ['food', 'construction', 'outdoor', 'traditional'],
        accessibility: { good_for_backgrounds: true },
        divine_meaning: 'Sacred earth from which all creation springs'
      },
      black: {
        emotions: ['elegance', 'power', 'sophistication', 'mystery', 'authority'],
        industries: ['luxury', 'technology', 'fashion', 'professional'],
        accessibility: { perfect_contrast: true },
        divine_meaning: 'Void of infinite potential and divine mystery'
      },
      white: {
        emotions: ['purity', 'cleanliness', 'simplicity', 'peace', 'freshness'],
        industries: ['healthcare', 'technology', 'luxury', 'minimal'],
        accessibility: { perfect_background: true },
        divine_meaning: 'Pure light of divine clarity and truth'
      },
      gray: {
        emotions: ['neutrality', 'balance', 'sophistication', 'calmness', 'reliability'],
        industries: ['technology', 'corporate', 'automotive', 'industrial'],
        accessibility: { versatile_contrast: true },
        divine_meaning: 'Balanced wisdom between light and shadow'
      }
    };

    // Divine color harmonies based on color theory
    this.harmonyTypes = {
      monochromatic: {
        name: 'Divine Unity',
        description: 'Single hue with divine variations in lightness and saturation',
        generate: (baseColor) => this.generateMonochromatic(baseColor)
      },
      analogous: {
        name: 'Sacred Neighbors',
        description: 'Adjacent colors that flow in divine harmony',
        generate: (baseColor) => this.generateAnalogous(baseColor)
      },
      complementary: {
        name: 'Divine Opposition',
        description: 'Opposite colors that create sacred balance',
        generate: (baseColor) => this.generateComplementary(baseColor)
      },
      triadic: {
        name: 'Trinity Harmony',
        description: 'Three colors in divine equilibrium',
        generate: (baseColor) => this.generateTriadic(baseColor)
      },
      splitComplementary: {
        name: 'Balanced Wisdom',
        description: 'Base color with two neighbors of its complement',
        generate: (baseColor) => this.generateSplitComplementary(baseColor)
      },
      tetradic: {
        name: 'Four Pillars',
        description: 'Four colors in divine rectangular harmony',
        generate: (baseColor) => this.generateTetradic(baseColor)
      }
    };

    // WCAG accessibility standards
    this.accessibilityStandards = {
      AA_NORMAL: 4.5,
      AA_LARGE: 3.0,
      AAA_NORMAL: 7.0,
      AAA_LARGE: 4.5
    };

    // Divine brand color presets
    this.divineBrandColors = {
      quorra_primary: '#FF6B35',
      quorra_secondary: '#FFD700', 
      quorra_dark: '#2A2D3A',
      quorra_light: '#FFF8F0',
      divine_fire: '#FF4500',
      sacred_blue: '#4169E1',
      blessed_green: '#32CD32',
      holy_purple: '#9370DB',
      eternal_gold: '#FFD700'
    };
  }

  /**
   * COLOR CONVERSION METHODS
   */

  // Convert hex to RGB
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  // Convert RGB to hex
  rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  // Convert RGB to HSL
  rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
  }

  // Convert HSL to RGB
  hslToRgb(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;

    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    let r, g, b;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    };
  }

  // Convert hex to HSL
  hexToHsl(hex) {
    const rgb = this.hexToRgb(hex);
    return rgb ? this.rgbToHsl(rgb.r, rgb.g, rgb.b) : null;
  }

  // Convert HSL to hex
  hslToHex(h, s, l) {
    const rgb = this.hslToRgb(h, s, l);
    return this.rgbToHex(rgb.r, rgb.g, rgb.b);
  }

  /**
   * COLOR HARMONY GENERATION
   */

  // Generate monochromatic palette
  generateMonochromatic(baseColor, variations = 5) {
    const hsl = this.hexToHsl(baseColor);
    if (!hsl) return [];

    const palette = [];
    const lightnesStep = 80 / (variations - 1);

    for (let i = 0; i < variations; i++) {
      const lightness = 10 + (i * lightnesStep);
      palette.push({
        hex: this.hslToHex(hsl.h, hsl.s, lightness),
        name: `Divine Shade ${i + 1}`,
        lightness: lightness,
        role: this.getLightnessRole(lightness)
      });
    }

    return palette;
  }

  // Generate analogous palette
  generateAnalogous(baseColor, count = 5) {
    const hsl = this.hexToHsl(baseColor);
    if (!hsl) return [];

    const palette = [];
    const hueStep = 30; // 30 degrees for analogous colors

    for (let i = 0; i < count; i++) {
      const hueOffset = (i - Math.floor(count / 2)) * hueStep;
      const newHue = (hsl.h + hueOffset + 360) % 360;
      
      palette.push({
        hex: this.hslToHex(newHue, hsl.s, hsl.l),
        name: `Sacred Harmony ${i + 1}`,
        hue: newHue,
        relationship: 'analogous'
      });
    }

    return palette;
  }

  // Generate complementary palette
  generateComplementary(baseColor) {
    const hsl = this.hexToHsl(baseColor);
    if (!hsl) return [];

    const complementHue = (hsl.h + 180) % 360;

    return [
      {
        hex: baseColor,
        name: 'Divine Primary',
        role: 'primary',
        relationship: 'base'
      },
      {
        hex: this.hslToHex(complementHue, hsl.s, hsl.l),
        name: 'Sacred Complement',
        role: 'accent',
        relationship: 'complementary'
      },
      // Add supporting neutral
      {
        hex: this.hslToHex(hsl.h, hsl.s * 0.2, 50),
        name: 'Divine Neutral',
        role: 'neutral',
        relationship: 'supporting'
      }
    ];
  }

  // Generate triadic palette
  generateTriadic(baseColor) {
    const hsl = this.hexToHsl(baseColor);
    if (!hsl) return [];

    return [
      {
        hex: baseColor,
        name: 'Trinity Primary',
        role: 'primary',
        position: 0
      },
      {
        hex: this.hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l),
        name: 'Trinity Secondary',
        role: 'secondary',
        position: 120
      },
      {
        hex: this.hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l),
        name: 'Trinity Tertiary',
        role: 'accent',
        position: 240
      }
    ];
  }

  // Generate split complementary palette
  generateSplitComplementary(baseColor) {
    const hsl = this.hexToHsl(baseColor);
    if (!hsl) return [];

    const complementHue = (hsl.h + 180) % 360;

    return [
      {
        hex: baseColor,
        name: 'Balanced Primary',
        role: 'primary'
      },
      {
        hex: this.hslToHex((complementHue - 30 + 360) % 360, hsl.s, hsl.l),
        name: 'Wisdom Left',
        role: 'secondary'
      },
      {
        hex: this.hslToHex((complementHue + 30) % 360, hsl.s, hsl.l),
        name: 'Wisdom Right',
        role: 'accent'
      }
    ];
  }

  // Generate tetradic palette
  generateTetradic(baseColor) {
    const hsl = this.hexToHsl(baseColor);
    if (!hsl) return [];

    return [
      {
        hex: baseColor,
        name: 'Pillar One',
        role: 'primary',
        position: 0
      },
      {
        hex: this.hslToHex((hsl.h + 90) % 360, hsl.s, hsl.l),
        name: 'Pillar Two',
        role: 'secondary',
        position: 90
      },
      {
        hex: this.hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l),
        name: 'Pillar Three',
        role: 'complement',
        position: 180
      },
      {
        hex: this.hslToHex((hsl.h + 270) % 360, hsl.s, hsl.l),
        name: 'Pillar Four',
        role: 'accent',
        position: 270
      }
    ];
  }

  /**
   * ACCESSIBILITY & CONTRAST METHODS
   */

  // Calculate relative luminance
  getRelativeLuminance(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  // Calculate contrast ratio between two colors
  getContrastRatio(color1, color2) {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);
    
    if (!rgb1 || !rgb2) return 0;

    const lum1 = this.getRelativeLuminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = this.getRelativeLuminance(rgb2.r, rgb2.g, rgb2.b);

    const lighter = Math.max(lum1, lum2);
    const darker = Math.min(lum1, lum2);

    return (lighter + 0.05) / (darker + 0.05);
  }

  // Check WCAG compliance
  checkWCAGCompliance(foreground, background, level = 'AA', size = 'normal') {
    const contrast = this.getContrastRatio(foreground, background);
    const thresholdKey = `${level}_${size.toUpperCase()}`;
    const threshold = this.accessibilityStandards[thresholdKey];

    return {
      contrast: contrast,
      threshold: threshold,
      passes: contrast >= threshold,
      level: level,
      size: size,
      rating: this.getContrastRating(contrast)
    };
  }

  // Get contrast rating
  getContrastRating(ratio) {
    if (ratio >= 7) return 'excellent';
    if (ratio >= 4.5) return 'good';
    if (ratio >= 3) return 'adequate';
    return 'poor';
  }

  // Suggest accessible colors
  makeAccessible(foreground, background, targetLevel = 'AA', size = 'normal') {
    const compliance = this.checkWCAGCompliance(foreground, background, targetLevel, size);
    
    if (compliance.passes) {
      return { color: foreground, modified: false, compliance };
    }

    // Try adjusting lightness to meet contrast requirements
    const fgHsl = this.hexToHsl(foreground);
    const bgHsl = this.hexToHsl(background);
    
    if (!fgHsl || !bgHsl) return { color: foreground, modified: false, compliance };

    // Determine if we should make foreground lighter or darker
    const shouldDarken = bgHsl.l > 50;
    const step = shouldDarken ? -5 : 5;
    
    for (let adjustment = step; Math.abs(adjustment) <= 90; adjustment += step) {
      const newLightness = Math.max(0, Math.min(100, fgHsl.l + adjustment));
      const adjustedColor = this.hslToHex(fgHsl.h, fgHsl.s, newLightness);
      
      const newCompliance = this.checkWCAGCompliance(adjustedColor, background, targetLevel, size);
      
      if (newCompliance.passes) {
        return {
          color: adjustedColor,
          modified: true,
          adjustment: adjustment,
          compliance: newCompliance
        };
      }
    }

    // If we can't fix it by adjusting lightness, try high contrast alternatives
    return {
      color: shouldDarken ? '#000000' : '#FFFFFF',
      modified: true,
      fallback: true,
      compliance: this.checkWCAGCompliance(
        shouldDarken ? '#000000' : '#FFFFFF', 
        background, 
        targetLevel, 
        size
      )
    };
  }

  /**
   * COLOR PSYCHOLOGY & ANALYSIS
   */

  // Analyze color psychology
  analyzeColorPsychology(color) {
    const hsl = this.hexToHsl(color);
    if (!hsl) return null;

    const dominantHue = this.getDominantHue(hsl.h);
    const psychology = this.colorPsychology[dominantHue];

    return {
      dominantHue,
      psychology,
      saturation: {
        level: this.getSaturationLevel(hsl.s),
        meaning: this.getSaturationMeaning(hsl.s)
      },
      lightness: {
        level: this.getLightnessLevel(hsl.l),
        meaning: this.getLightnessMeaning(hsl.l)
      },
      temperature: this.getColorTemperature(hsl.h),
      recommendations: this.getColorRecommendations(dominantHue, hsl)
    };
  }

  // Get dominant hue category
  getDominantHue(hue) {
    if (hue >= 345 || hue < 15) return 'red';
    if (hue >= 15 && hue < 45) return 'orange';
    if (hue >= 45 && hue < 75) return 'yellow';
    if (hue >= 75 && hue < 165) return 'green';
    if (hue >= 165 && hue < 255) return 'blue';
    if (hue >= 255 && hue < 285) return 'purple';
    if (hue >= 285 && hue < 315) return 'pink';
    if (hue >= 315 && hue < 345) return 'red';
    return 'neutral';
  }

  // Get color temperature
  getColorTemperature(hue) {
    if (hue >= 60 && hue <= 180) return 'cool';
    if (hue >= 240 && hue <= 300) return 'cool';
    return 'warm';
  }

  // Get saturation level and meaning
  getSaturationLevel(saturation) {
    if (saturation < 20) return 'very_low';
    if (saturation < 40) return 'low';
    if (saturation < 60) return 'moderate';
    if (saturation < 80) return 'high';
    return 'very_high';
  }

  getSaturationMeaning(saturation) {
    if (saturation < 20) return 'Muted, professional, subtle';
    if (saturation < 40) return 'Calm, sophisticated, restrained';
    if (saturation < 60) return 'Balanced, versatile, pleasant';
    if (saturation < 80) return 'Vibrant, energetic, attention-grabbing';
    return 'Intense, bold, highly stimulating';
  }

  // Get lightness level and meaning
  getLightnessLevel(lightness) {
    if (lightness < 20) return 'very_dark';
    if (lightness < 40) return 'dark';
    if (lightness < 60) return 'medium';
    if (lightness < 80) return 'light';
    return 'very_light';
  }

  getLightnessMeaning(lightness) {
    if (lightness < 20) return 'Dramatic, mysterious, powerful';
    if (lightness < 40) return 'Serious, professional, grounding';
    if (lightness < 60) return 'Balanced, readable, versatile';
    if (lightness < 80) return 'Gentle, approachable, calming';
    return 'Airy, clean, minimalist';
  }

  // Get lightness role
  getLightnessRole(lightness) {
    if (lightness < 30) return 'text';
    if (lightness < 50) return 'accent';
    if (lightness < 70) return 'secondary';
    return 'background';
  }

  // Get color recommendations
  getColorRecommendations(dominantHue, hsl) {
    const psychology = this.colorPsychology[dominantHue];
    if (!psychology) return {};

    return {
      suitableIndustries: psychology.industries,
      emotionalImpact: psychology.emotions,
      accessibilityNotes: psychology.accessibility,
      divineSignificance: psychology.divine_meaning,
      usageGuidelines: this.getUsageGuidelines(dominantHue, hsl)
    };
  }

  // Get usage guidelines
  getUsageGuidelines(dominantHue, hsl) {
    const guidelines = [];

    if (hsl.s > 80) {
      guidelines.push('High saturation - use sparingly for accents');
    }
    if (hsl.l < 30) {
      guidelines.push('Dark color - excellent for text on light backgrounds');
    }
    if (hsl.l > 80) {
      guidelines.push('Light color - perfect for backgrounds and spacious designs');
    }
    if (dominantHue === 'red' && hsl.s > 50) {
      guidelines.push('Attention-grabbing - ideal for CTAs and urgent messages');
    }
    if (dominantHue === 'blue') {
      guidelines.push('Trust-building - excellent for primary brand colors');
    }

    return guidelines;
  }

  /**
   * DIVINE PALETTE GENERATION
   */

  // Generate industry-specific divine palette
  generateIndustryPalette(industry, baseColor = null) {
    const industryConfigs = {
      healthcare: {
        primary: baseColor || '#2563EB',
        psychology: ['trust', 'calm', 'professional'],
        harmony: 'analogous',
        accessibility: 'AA',
        divineTheme: 'healing_waters'
      },
      technology: {
        primary: baseColor || '#3B82F6',
        psychology: ['innovation', 'trust', 'efficiency'],
        harmony: 'complementary',
        accessibility: 'AA',
        divineTheme: 'digital_fire'
      },
      finance: {
        primary: baseColor || '#1E40AF',
        psychology: ['trust', 'stability', 'authority'],
        harmony: 'monochromatic',
        accessibility: 'AAA',
        divineTheme: 'eternal_foundation'
      },
      restaurant: {
        primary: baseColor || '#F97316',
        psychology: ['appetite', 'warmth', 'comfort'],
        harmony: 'analogous',
        accessibility: 'AA',
        divineTheme: 'sacred_feast'
      },
      creative: {
        primary: baseColor || '#8B5CF6',
        psychology: ['creativity', 'inspiration', 'uniqueness'],
        harmony: 'triadic',
        accessibility: 'AA',
        divineTheme: 'artistic_spirit'
      }
    };

    const config = industryConfigs[industry];
    if (!config) return this.generateBasicPalette(baseColor);

    const harmonyGenerator = this.harmonyTypes[config.harmony];
    const palette = harmonyGenerator.generate(config.primary);

    return {
      industry,
      theme: config.divineTheme,
      psychology: config.psychology,
      palette: palette.map(color => ({
        ...color,
        accessibility: this.checkWCAGCompliance(color.hex, '#FFFFFF', config.accessibility.split('')[0], 'normal')
      })),
      accessibility: config.accessibility,
      recommendations: this.getIndustryRecommendations(industry, config)
    };
  }

  // Generate basic divine palette
  generateBasicPalette(baseColor) {
    const primary = baseColor || this.divineBrandColors.quorra_primary;
    const complementary = this.generateComplementary(primary);
    
    return {
      theme: 'divine_basic',
      palette: complementary,
      accessibility: 'AA'
    };
  }

  // Get industry-specific recommendations
  getIndustryRecommendations(industry, config) {
    const baseRecommendations = {
      primary_usage: 'Headers, navigation, primary CTAs',
      secondary_usage: 'Subheadings, secondary buttons, accents',
      neutral_usage: 'Body text, backgrounds, borders',
      accessibility: `Maintain ${config.accessibility} compliance for all text`
    };

    const industrySpecific = {
      healthcare: {
        ...baseRecommendations,
        special_note: 'Avoid red for non-emergency elements to prevent anxiety'
      },
      finance: {
        ...baseRecommendations,
        special_note: 'Use blue and green to convey trust and growth'
      },
      restaurant: {
        ...baseRecommendations,
        special_note: 'Warm colors stimulate appetite, avoid blue for food elements'
      }
    };

    return industrySpecific[industry] || baseRecommendations;
  }

  /**
   * COLOR MANIPULATION METHODS
   */

  // Lighten color by percentage
  lighten(color, percentage) {
    const hsl = this.hexToHsl(color);
    if (!hsl) return color;

    const newLightness = Math.min(100, hsl.l + percentage);
    return this.hslToHex(hsl.h, hsl.s, newLightness);
  }

  // Darken color by percentage
  darken(color, percentage) {
    const hsl = this.hexToHsl(color);
    if (!hsl) return color;

    const newLightness = Math.max(0, hsl.l - percentage);
    return this.hslToHex(hsl.h, hsl.s, newLightness);
  }

  // Saturate color by percentage
  saturate(color, percentage) {
    const hsl = this.hexToHsl(color);
    if (!hsl) return color;

    const newSaturation = Math.min(100, hsl.s + percentage);
    return this.hslToHex(hsl.h, newSaturation, hsl.l);
  }

  // Desaturate color by percentage
  desaturate(color, percentage) {
    const hsl = this.hexToHsl(color);
    if (!hsl) return color;

    const newSaturation = Math.max(0, hsl.s - percentage);
    return this.hslToHex(hsl.h, newSaturation, hsl.l);
  }

  // Mix two colors
  mix(color1, color2, ratio = 0.5) {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);
    
    if (!rgb1 || !rgb2) return color1;

    const mixed = {
      r: Math.round(rgb1.r * (1 - ratio) + rgb2.r * ratio),
      g: Math.round(rgb1.g * (1 - ratio) + rgb2.g * ratio),
      b: Math.round(rgb1.b * (1 - ratio) + rgb2.b * ratio)
    };

    return this.rgbToHex(mixed.r, mixed.g, mixed.b);
  }

  // Get color tints (lighter variations)
  getTints(color, count = 5) {
    const tints = [];
    const step = 80 / count;

    for (let i = 1; i <= count; i++) {
      tints.push({
        hex: this.lighten(color, step * i),
        name: `Tint ${i}`,
        percentage: step * i
      });
    }

    return tints;
  }

  // Get color shades (darker variations)
  getShades(color, count = 5) {
    const shades = [];
    const step = 80 / count;

    for (let i = 1; i <= count; i++) {
      shades.push({
        hex: this.darken(color, step * i),
        name: `Shade ${i}`,
        percentage: step * i
      });
    }

    return shades;
  }

  /**
   * PUBLIC API METHODS
   */

  // Main method for generating divine color palettes
  generateDivinePalette(options = {}) {
    const {
      baseColor = this.divineBrandColors.quorra_primary,
      industry = 'creative',
      harmonyType = 'complementary',
      accessibility = 'AA',
      count = 5
    } = options;

    if (industry) {
      return this.generateIndustryPalette(industry, baseColor);
    }

    const harmonyGenerator = this.harmonyTypes[harmonyType];
    if (!harmonyGenerator) {
      throw new Error(`Unknown harmony type: ${harmonyType}`);
    }

    return {
      baseColor,
      harmonyType,
      palette: harmonyGenerator.generate(baseColor, count),
      accessibility: accessibility
    };
  }

  // Analyze multiple colors for harmony
  analyzeColorHarmony(colors) {
    if (!Array.isArray(colors) || colors.length < 2) {
      return { harmonious: false, reason: 'Need at least 2 colors' };
    }

    const hslColors = colors.map(color => this.hexToHsl(color)).filter(Boolean);
    if (hslColors.length !== colors.length) {
      return { harmonious: false, reason: 'Invalid color format detected' };
    }

    // Analyze hue relationships
    const hues = hslColors.map(hsl => hsl.h);
    const harmonyAnalysis = this.analyzeHueRelationships(hues);

    // Check saturation and lightness consistency
    const saturations = hslColors.map(hsl => hsl.s);
    const lightnesses = hslColors.map(hsl => hsl.l);

    return {
      harmonious: harmonyAnalysis.harmonious,
      harmonyType: harmonyAnalysis.type,
      hueAnalysis: harmonyAnalysis,
      saturationRange: { min: Math.min(...saturations), max: Math.max(...saturations) },
      lightnessRange: { min: Math.min(...lightnesses), max: Math.max(...lightnesses) },
      recommendations: this.getHarmonyRecommendations(harmonyAnalysis)
    };
  }

  // Analyze hue relationships
  analyzeHueRelationships(hues) {
    if (hues.length === 2) {
      const diff = Math.abs(hues[1] - hues[0]);
      const normalizedDiff = Math.min(diff, 360 - diff);
      
      if (normalizedDiff < 30) return { harmonious: true, type: 'analogous' };
      if (normalizedDiff > 150 && normalizedDiff < 210) return { harmonious: true, type: 'complementary' };
      return { harmonious: false, type: 'none' };
    }

    // For more complex analysis with multiple colors
    return { harmonious: true, type: 'complex' };
  }

  // Get harmony recommendations
  getHarmonyRecommendations(harmonyAnalysis) {
    if (!harmonyAnalysis.harmonious) {
      return [
        'Consider using colors that follow color theory principles',
        'Try analogous colors (adjacent on color wheel) for subtle harmony',
        'Or use complementary colors (opposite on color wheel) for vibrant contrast'
      ];
    }

    return [
      `Excellent ${harmonyAnalysis.type} color harmony detected`,
      'Colors work well together and create pleasing visual balance',
      'Consider accessibility when using these colors for text and backgrounds'
    ];
  }

  // Get divine color by name
  getDivineColor(colorName) {
    return this.divineBrandColors[colorName] || null;
  }

  // Get all divine colors
  getAllDivineColors() {
    return { ...this.divineBrandColors };
  }

  // Check if color is divine brand color
  isDivineBrandColor(color) {
    return Object.values(this.divineBrandColors).includes(color.toUpperCase());
  }

  // Format color for CSS usage
  formatForCSS(color, alpha = 1) {
    const rgb = this.hexToRgb(color);
    if (!rgb) return color;

    if (alpha === 1) {
      return color;
    }

    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
  }

  // Generate CSS custom properties
  generateCSSProperties(palette, prefix = '--divine') {
    const properties = [];
    
    palette.forEach((color, index) => {
      const name = color.name ? color.name.toLowerCase().replace(/\s+/g, '-') : `color-${index + 1}`;
      properties.push(`${prefix}-${name}: ${color.hex};`);
    });

    return properties.join('\n');
  }
}

// Export singleton instance
const quorraColorUtils = new QuorraColorUtils();

export default quorraColorUtils;
export { QuorraColorUtils };