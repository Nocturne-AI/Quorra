// QUORRA Sacred Typography System
// ✍️ Divine fonts blessed by the Goddess of Smithing

export const FONT_FAMILIES = {
  // 🔥 PRIMARY BRAND FONTS
  primary: {
    name: 'Inter',
    fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    full: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    description: 'Clean, modern sans-serif for divine clarity',
    use: 'Body text, UI elements, navigation'
  },
  
  // 👑 DIVINE DISPLAY FONTS
  heading: {
    name: 'Playfair Display',
    fallback: 'Georgia, "Times New Roman", Times, serif',
    full: '"Playfair Display", Georgia, "Times New Roman", Times, serif',
    description: 'Elegant serif for goddess-level authority',
    use: 'Main headings, hero titles, sacred announcements'
  },
  
  // ⚡ ACCENT & SPECIAL FONTS
  accent: {
    name: 'Crimson Text',
    fallback: 'Georgia, "Times New Roman", Times, serif',
    full: '"Crimson Text", Georgia, "Times New Roman", Times, serif',
    description: 'Warm serif for storytelling and emphasis',
    use: 'Quotes, testimonials, mythological copy'
  },
  
  // 🛠️ TECHNICAL FONTS
  monospace: {
    name: 'JetBrains Mono',
    fallback: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace',
    full: '"JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace',
    description: 'Sacred code font for divine development',
    use: 'Code snippets, technical documentation'
  }
};

export const FONT_WEIGHTS = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};

export const FONT_SIZES = {
  // 📱 MOBILE-FIRST RESPONSIVE SIZES
  xs: {
    mobile: '0.75rem',    // 12px
    tablet: '0.75rem',    
    desktop: '0.75rem',
    use: 'Fine print, captions, metadata'
  },
  
  sm: {
    mobile: '0.875rem',   // 14px
    tablet: '0.875rem',   
    desktop: '0.875rem',
    use: 'Small body text, labels, secondary info'
  },
  
  base: {
    mobile: '1rem',       // 16px
    tablet: '1rem',       
    desktop: '1rem',
    use: 'Primary body text, paragraphs'
  },
  
  lg: {
    mobile: '1.125rem',   // 18px
    tablet: '1.125rem',   
    desktop: '1.125rem',
    use: 'Large body text, intro paragraphs'
  },
  
  xl: {
    mobile: '1.25rem',    // 20px
    tablet: '1.25rem',    
    desktop: '1.25rem',
    use: 'Small headings, emphasis text'
  },
  
  '2xl': {
    mobile: '1.5rem',     // 24px
    tablet: '1.5rem',     
    desktop: '1.5rem',
    use: 'Section headings, card titles'
  },
  
  '3xl': {
    mobile: '1.875rem',   // 30px
    tablet: '1.875rem',   
    desktop: '1.875rem',
    use: 'Page headings, major sections'
  },
  
  '4xl': {
    mobile: '2.25rem',    // 36px
    tablet: '2.5rem',     // 40px
    desktop: '2.25rem',   
    use: 'Hero headings, landing page titles'
  },
  
  '5xl': {
    mobile: '3rem',       // 48px
    tablet: '3.5rem',     // 56px
    desktop: '3rem',      
    use: 'Major hero titles, brand statements'
  },
  
  '6xl': {
    mobile: '3.75rem',    // 60px
    tablet: '4.5rem',     // 72px
    desktop: '3.75rem',   
    use: 'Massive display text, goddess proclamations'
  }
};

export const LINE_HEIGHTS = {
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

export const LETTER_SPACING = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

export const TYPOGRAPHY_SCALE = {
  // 🎯 SEMANTIC TYPOGRAPHY COMBINATIONS
  
  // 📰 HEADINGS
  h1: {
    family: FONT_FAMILIES.heading.full,
    size: FONT_SIZES['5xl'],
    weight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.tight,
    use: 'Page titles, hero headings'
  },
  
  h2: {
    family: FONT_FAMILIES.heading.full,
    size: FONT_SIZES['4xl'],
    weight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.tight,
    use: 'Section headings, major topics'
  },
  
  h3: {
    family: FONT_FAMILIES.primary.full,
    size: FONT_SIZES['3xl'],
    weight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.snug,
    letterSpacing: LETTER_SPACING.normal,
    use: 'Subsection headings, card titles'
  },
  
  h4: {
    family: FONT_FAMILIES.primary.full,
    size: FONT_SIZES['2xl'],
    weight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.snug,
    letterSpacing: LETTER_SPACING.normal,
    use: 'Component headings, list headers'
  },
  
  h5: {
    family: FONT_FAMILIES.primary.full,
    size: FONT_SIZES.xl,
    weight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
    use: 'Small headings, emphasis blocks'
  },
  
  h6: {
    family: FONT_FAMILIES.primary.full,
    size: FONT_SIZES.lg,
    weight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.wide,
    use: 'Micro headings, labels'
  },
  
  // 📝 BODY TEXT
  bodyLarge: {
    family: FONT_FAMILIES.primary.full,
    size: FONT_SIZES.lg,
    weight: FONT_WEIGHTS.regular,
    lineHeight: LINE_HEIGHTS.relaxed,
    letterSpacing: LETTER_SPACING.normal,
    use: 'Hero descriptions, intro paragraphs'
  },
  
  body: {
    family: FONT_FAMILIES.primary.full,
    size: FONT_SIZES.base,
    weight: FONT_WEIGHTS.regular,
    lineHeight: LINE_HEIGHTS.relaxed,
    letterSpacing: LETTER_SPACING.normal,
    use: 'Standard body text, articles'
  },
  
  bodySmall: {
    family: FONT_FAMILIES.primary.full,
    size: FONT_SIZES.sm,
    weight: FONT_WEIGHTS.regular,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
    use: 'Secondary information, captions'
  },
  
  // 🎨 SPECIAL ELEMENTS
  quote: {
    family: FONT_FAMILIES.accent.full,
    size: FONT_SIZES.xl,
    weight: FONT_WEIGHTS.regular,
    lineHeight: LINE_HEIGHTS.relaxed,
    letterSpacing: LETTER_SPACING.normal,
    use: 'Testimonials, featured quotes'
  },
  
  button: {
    family: FONT_FAMILIES.primary.full,
    size: FONT_SIZES.base,
    weight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.wide,
    use: 'Buttons, CTAs, interactive elements'
  },
  
  label: {
    family: FONT_FAMILIES.primary.full,
    size: FONT_SIZES.sm,
    weight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.wide,
    use: 'Form labels, input placeholders'
  },
  
  code: {
    family: FONT_FAMILIES.monospace.full,
    size: FONT_SIZES.sm,
    weight: FONT_WEIGHTS.regular,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
    use: 'Code snippets, technical text'
  }
};

export const GOOGLE_FONTS_CONFIG = {
  // 🌐 OPTIMIZED GOOGLE FONTS LOADING
  families: [
    {
      name: 'Inter',
      weights: [300, 400, 500, 600, 700],
      display: 'swap',
      preload: true // Critical for UI
    },
    {
      name: 'Playfair Display',
      weights: [400, 600, 700],
      display: 'swap',
      preload: false // Non-critical
    },
    {
      name: 'Crimson Text',
      weights: [400, 600],
      display: 'swap',
      preload: false // Accent only
    },
    {
      name: 'JetBrains Mono',
      weights: [400, 500],
      display: 'swap',
      preload: false // Technical content only
    }
  ],
  
  // Generate optimized Google Fonts URL
  getUrl() {
    const families = this.families
      .map(font => `family=${font.name.replace(' ', '+')}:wght@${font.weights.join(';')}`)
      .join('&');
    
    return `https://fonts.googleapis.com/css2?${families}&display=swap`;
  }
};

export const RESPONSIVE_BREAKPOINTS = {
  // 📱 DEVICE-SPECIFIC TYPOGRAPHY ADJUSTMENTS
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
};

// 🎯 UTILITY FUNCTIONS
export const getTypographyStyle = (variant) => {
  const style = TYPOGRAPHY_SCALE[variant];
  if (!style) return TYPOGRAPHY_SCALE.body;
  
  return {
    fontFamily: style.family,
    fontSize: typeof style.size === 'object' ? style.size.mobile : style.size,
    fontWeight: style.weight,
    lineHeight: style.lineHeight,
    letterSpacing: style.letterSpacing,
  };
};

export const getResponsiveFontSize = (sizeKey, breakpoint = 'mobile') => {
  const size = FONT_SIZES[sizeKey];
  return typeof size === 'object' ? size[breakpoint] : size;
};

export const generateTypographyCSS = () => {
  let css = '';
  
  Object.entries(TYPOGRAPHY_SCALE).forEach(([key, style]) => {
    css += `.text-${key} {\n`;
    css += `  font-family: ${style.family};\n`;
    css += `  font-size: ${typeof style.size === 'object' ? style.size.mobile : style.size};\n`;
    css += `  font-weight: ${style.weight};\n`;
    css += `  line-height: ${style.lineHeight};\n`;
    css += `  letter-spacing: ${style.letterSpacing};\n`;
    css += `}\n\n`;
    
    // Add tablet and desktop variants
    if (typeof style.size === 'object') {
      css += `@media (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {\n`;
      css += `  .text-${key} { font-size: ${style.size.tablet}; }\n`;
      css += `}\n\n`;
      
      css += `@media (min-width: ${RESPONSIVE_BREAKPOINTS.desktop}) {\n`;
      css += `  .text-${key} { font-size: ${style.size.desktop}; }\n`;
      css += `}\n\n`;
    }
  });
  
  return css;
};

export default {
  FONT_FAMILIES,
  FONT_WEIGHTS,
  FONT_SIZES,
  LINE_HEIGHTS,
  LETTER_SPACING,
  TYPOGRAPHY_SCALE,
  GOOGLE_FONTS_CONFIG,
  RESPONSIVE_BREAKPOINTS,
  getTypographyStyle,
  getResponsiveFontSize,
  generateTypographyCSS
};