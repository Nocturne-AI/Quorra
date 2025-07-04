// src/utils/templateGenerator.js
// FULL TEMPLATE GENERATOR - USES YOUR EXISTING INTELLIGENCE SYSTEM
  class DynamicTemplateGenerator {
  constructor() {
    console.log('Template generator initialized successfully!');
  }

  /**
   * Generate 3 unique templates based on user selections
   */
  generateTemplates(selectedCategory, brandPersonality) {
    const industry = selectedCategory.id;
    const style = brandPersonality.style || 'professional';
    const audience = brandPersonality.audience || 'professionals';
    const priority = brandPersonality.priority || 'trust';

    console.log('Generating templates for:', { industry, style, audience, priority });

    // Get industry-specific intelligence
    const industryData = this.getIndustryIntelligence(industry);
    const colorPalette = this.getColorIntelligence(industry, style);
    const typography = this.getTypographyIntelligence(industry, style);

    // Generate 3 variations
    const templates = [
      this.generatePrimaryTemplate(industry, style, audience, priority, industryData, colorPalette, typography),
      this.generateSecondaryTemplate(industry, style, audience, priority, industryData, colorPalette, typography),
      this.generateAlternateTemplate(industry, style, audience, priority, industryData, colorPalette, typography)
    ];

    return templates;
  }

  /**
   * Get industry intelligence from your existing system
   */
  getIndustryIntelligence(industry) {
    // Use your existing industry intelligence
    const industryPatterns = {
      healthcare: {
        conversionPsychology: 'Need → Trust → Care',
        trustSignals: ['Licensed Physicians', 'Patient Reviews', 'Insurance Accepted', 'Board Certifications'],
        keyFeatures: ['Appointment Booking', 'Doctor Profiles', 'Patient Portal', 'Telehealth Services', 'Insurance Information', 'Emergency Contact'],
        designPrinciples: ['Trust Building', 'Accessibility', 'Compassionate Authority', 'Clean Design'],
        targetAudience: 'Patients seeking medical care',
        businessGoals: ['Build Trust', 'Generate Appointments', 'Showcase Expertise']
      },
      restaurant: {
        conversionPsychology: 'Appetite → Reservation',
        trustSignals: ['Chef Credentials', 'Food Photography', 'Customer Reviews', 'Health Ratings'],
        keyFeatures: ['Menu Gallery', 'Reservation System', 'Chef Story', 'Location & Hours', 'Food Photography', 'Online Ordering'],
        designPrinciples: ['Appetite Appeal', 'Visual Storytelling', 'Atmosphere Creation', 'Easy Booking'],
        targetAudience: 'Diners seeking food experiences',
        businessGoals: ['Drive Reservations', 'Showcase Food', 'Build Atmosphere']
      },
      technology: {
        conversionPsychology: 'Discovery → Trial → Adoption',
        trustSignals: ['Customer Logos', 'Security Badges', 'Feature Demos', 'User Reviews'],
        keyFeatures: ['Product Demo', 'Free Trial', 'Feature Matrix', 'API Documentation', 'Customer Success Stories', 'Integration Gallery'],
        designPrinciples: ['Innovation', 'Trust Building', 'Clear Value Prop', 'Trial Focus'],
        targetAudience: 'Business decision makers',
        businessGoals: ['Generate Trials', 'Demonstrate Value', 'Build Trust']
      },
      ecommerce: {
        conversionPsychology: 'Browse → Purchase',
        trustSignals: ['Customer Reviews', 'Secure Checkout', 'Return Policy', 'Security Badges'],
        keyFeatures: ['Product Gallery', 'Shopping Cart', 'Customer Reviews', 'Secure Checkout', 'Wishlist', 'Product Search'],
        designPrinciples: ['Conversion Optimization', 'Trust Building', 'Easy Shopping', 'Clear Pricing'],
        targetAudience: 'Online shoppers',
        businessGoals: ['Drive Sales', 'Build Trust', 'Optimize Conversion']
      },
      finance: {
        conversionPsychology: 'Research → Evaluate → Trust → Engage',
        trustSignals: ['Certifications', 'Security Measures', 'Track Record', 'Client Testimonials'],
        keyFeatures: ['Service Calculator', 'Consultation Booking', 'Portfolio Performance', 'Risk Assessment', 'Market Analysis', 'Security Information'],
        designPrinciples: ['Authority Building', 'Security Focus', 'Professional Design', 'Trust Signals'],
        targetAudience: 'Investors and financial service seekers',
        businessGoals: ['Build Authority', 'Generate Consultations', 'Demonstrate Expertise']
      },
      realestate: {
        conversionPsychology: 'Browse → Visualize → Connect',
        trustSignals: ['Sales Volume', 'Local Expertise', 'Client Success Stories', 'Market Knowledge'],
        keyFeatures: ['Property Search', 'Virtual Tours', 'Agent Profiles', 'Market Data', 'Mortgage Calculator', 'Neighborhood Information'],
        designPrinciples: ['Visual Focus', 'Local Expertise', 'Trust Building', 'Easy Search'],
        targetAudience: 'Property buyers and sellers',
        businessGoals: ['Generate Leads', 'Showcase Properties', 'Build Local Authority']
      }
    };

    return industryPatterns[industry] || industryPatterns.technology;
  }

  /**
   * Get color intelligence
   */
  getColorIntelligence(industry, style) {
    const colorMappings = {
      healthcare: {
        professional: { primary: '#2563EB', secondary: '#FFBE98', accent: '#16A34A', name: 'Caring Professional' },
        friendly: { primary: '#3B82F6', secondary: '#FED7AA', accent: '#22C55E', name: 'Warm Healthcare' },
        luxury: { primary: '#1E40AF', secondary: '#F59E0B', accent: '#059669', name: 'Premium Medical' }
      },
      restaurant: {
        professional: { primary: '#92400E', secondary: '#F97316', accent: '#EAB308', name: 'Appetite Appeal' },
        friendly: { primary: '#DC2626', secondary: '#F59E0B', accent: '#16A34A', name: 'Warm Dining' },
        luxury: { primary: '#7C2D12', secondary: '#D97706', accent: '#CA8A04', name: 'Fine Dining' }
      },
      technology: {
        professional: { primary: '#2563EB', secondary: '#8B5CF6', accent: '#059669', name: 'Tech Professional' },
        bold: { primary: '#7C3AED', secondary: '#06B6D4', accent: '#F59E0B', name: 'Innovation Edge' },
        friendly: { primary: '#3B82F6', secondary: '#10B981', accent: '#F97316', name: 'Approachable Tech' }
      },
      ecommerce: {
        professional: { primary: '#1E40AF', secondary: '#DC2626', accent: '#059669', name: 'Trust Commerce' },
        bold: { primary: '#DC2626', secondary: '#F59E0B', accent: '#7C3AED', name: 'Dynamic Retail' },
        luxury: { primary: '#000000', secondary: '#D97706', accent: '#FFFFFF', name: 'Luxury Retail' }
      }
    };

    const industryColors = colorMappings[industry] || colorMappings.technology;
    return industryColors[style] || industryColors.professional;
  }

  /**
   * Get typography intelligence
   */
  getTypographyIntelligence(industry, style) {
    const typographyMappings = {
      healthcare: {
        professional: { heading: 'Inter', body: 'Open Sans', accent: 'Lato' },
        friendly: { heading: 'Nunito', body: 'Source Sans Pro', accent: 'Crimson Text' }
      },
      restaurant: {
        professional: { heading: 'Montserrat', body: 'Open Sans', accent: 'Dancing Script' },
        luxury: { heading: 'Playfair Display', body: 'Crimson Text', accent: 'Inter' }
      },
      technology: {
        professional: { heading: 'Inter', body: 'Roboto', accent: 'Space Mono' },
        bold: { heading: 'Work Sans', body: 'Inter', accent: 'JetBrains Mono' }
      },
      finance: {
        professional: { heading: 'EB Garamond', body: 'Source Sans Pro', accent: 'Inter' },
        modern: { heading: 'Inter', body: 'Roboto', accent: 'Work Sans' }
      }
    };

    const industryTypo = typographyMappings[industry] || typographyMappings.technology;
    return industryTypo[style] || industryTypo.professional;
  }

  /**
   * Generate primary template - exactly matches user preferences
   */
  generatePrimaryTemplate(industry, style, audience, priority, industryData, colors, typography) {
    return {
      id: 1,
      name: this.generateTemplateName(industry, style, 'primary'),
      style: this.generateStyleDescription(industry, style, audience, 'primary'),
      features: this.selectFeatures(industryData.keyFeatures, priority, 'primary'),
      aiReasoning: `Perfect match for your ${style} ${industry} business. Combines proven ${industryData.conversionPsychology} patterns with ${style} aesthetics optimized for ${audience}.`,
      colors: colors,
      typography: typography,
      conversionFocus: industryData.conversionPsychology,
      recommended: true,
      trustSignals: industryData.trustSignals.slice(0, 3),
      designPrinciples: industryData.designPrinciples
    };
  }

  /**
   * Generate secondary template - slight style variation
   */
  generateSecondaryTemplate(industry, style, audience, priority, industryData, colors, typography) {
    const altStyle = this.getAlternativeStyle(style);
    const altColors = this.getColorIntelligence(industry, altStyle);
    const altTypography = this.getTypographyIntelligence(industry, altStyle);

    return {
      id: 2,
      name: this.generateTemplateName(industry, altStyle, 'secondary'),
      style: this.generateStyleDescription(industry, altStyle, audience, 'secondary'),
      features: this.selectFeatures(industryData.keyFeatures, priority, 'secondary'),
      aiReasoning: `Alternative ${altStyle} approach while maintaining ${industry} conversion effectiveness. Balances ${industryData.conversionPsychology} psychology with ${altStyle} design principles.`,
      colors: altColors,
      typography: altTypography,
      conversionFocus: industryData.conversionPsychology,
      trustSignals: this.shuffleArray(industryData.trustSignals).slice(0, 3),
      designPrinciples: industryData.designPrinciples
    };
  }

  /**
   * Generate alternate template - different audience focus
   */
  generateAlternateTemplate(industry, style, audience, priority, industryData, colors, typography) {
    const altAudience = this.getAlternativeAudience(audience);
    
    return {
      id: 3,
      name: this.generateTemplateName(industry, style, 'alternate'),
      style: this.generateStyleDescription(industry, style, altAudience, 'alternate'),
      features: this.selectFeatures(industryData.keyFeatures, priority, 'alternate'),
      aiReasoning: `Specialized variation targeting ${altAudience} while preserving ${industry} authority. Adapts ${industryData.conversionPsychology} flow for ${altAudience} preferences.`,
      colors: colors,
      typography: typography,
      conversionFocus: industryData.conversionPsychology,
      trustSignals: industryData.trustSignals.slice(1, 4),
      designPrinciples: industryData.designPrinciples
    };
  }

  /**
   * Generate template names
   */
  generateTemplateName(industry, style, variant) {
    const nameBank = {
      healthcare: {
        primary: ['Healing Authority', 'Medical Excellence', 'Care Provider'],
        secondary: ['Compassionate Care', 'Health Guardian', 'Wellness Expert'],
        alternate: ['Patient First', 'Medical Innovation', 'Health Sanctuary']
      },
      restaurant: {
        primary: ['Culinary Haven', 'Appetite Appeal', 'Dining Excellence'],
        secondary: ['Food Artistry', 'Flavor Journey', 'Culinary Heritage'],
        alternate: ['Taste Experience', 'Kitchen Stories', 'Dining Destination']
      },
      technology: {
        primary: ['Innovation Hub', 'Tech Solution', 'Digital Pioneer'],
        secondary: ['Smart Platform', 'Tech Excellence', 'Digital Edge'],
        alternate: ['Future Tech', 'Solution Master', 'Innovation Leader']
      },
      ecommerce: {
        primary: ['Shopping Haven', 'Retail Excellence', 'Commerce Hub'],
        secondary: ['Market Leader', 'Shopping Experience', 'Retail Innovation'],
        alternate: ['Customer First', 'Premium Retail', 'Shopping Destination']
      },
      finance: {
        primary: ['Financial Authority', 'Wealth Builder', 'Money Master'],
        secondary: ['Financial Guardian', 'Prosperity Partner', 'Wealth Advisor'],
        alternate: ['Financial Excellence', 'Trust Builder', 'Money Mentor']
      },
      realestate: {
        primary: ['Property Expert', 'Real Estate Pro', 'Home Finder'],
        secondary: ['Market Leader', 'Property Partner', 'Realty Excellence'],
        alternate: ['Home Authority', 'Property Master', 'Real Estate Guide']
      }
    };

    const industryNames = nameBank[industry] || nameBank.technology;
    const variantNames = industryNames[variant] || industryNames.primary;
    const baseName = variantNames[Math.floor(Math.random() * variantNames.length)];

    const styleModifiers = {
      luxury: 'Premium',
      professional: 'Professional', 
      friendly: 'Approachable',
      bold: 'Dynamic'
    };

    const modifier = styleModifiers[style] || 'Professional';
    return `${modifier} ${baseName}`;
  }

  /**
   * Generate style descriptions
   */
  generateStyleDescription(industry, style, audience, variant) {
    const descriptions = {
      primary: `${style} ${industry} design optimized for ${audience}`,
      secondary: `Alternative ${style} approach for ${industry} businesses`,
      alternate: `Specialized ${industry} design targeting ${audience}`
    };

    return descriptions[variant] || descriptions.primary;
  }

  /**
   * Select features based on priority and variant
   */
  selectFeatures(allFeatures, priority, variant) {
    let features = [...allFeatures];

    // Priority-based feature emphasis
    const priorityFeatures = {
      sales: ['Conversion Optimization', 'Sales Analytics', 'Purchase Flow'],
      leads: ['Lead Capture', 'Contact Forms', 'Email Integration'],
      trust: ['Testimonials', 'Credentials', 'Security Badges'],
      engagement: ['Social Integration', 'Community Features', 'Interactive Elements']
    };

    // Add priority-specific features
    if (priorityFeatures[priority]) {
      features = [...features, ...priorityFeatures[priority]];
    }

    // Vary by template variant
    if (variant === 'secondary') {
      features = this.shuffleArray(features);
    } else if (variant === 'alternate') {
      features = [...features.slice(2), ...features.slice(0, 2)];
    }

    return features.slice(0, 4);
  }

  /**
   * Helper methods
   */
  getAlternativeStyle(currentStyle) {
    const alternatives = {
      luxury: 'professional',
      professional: 'friendly', 
      friendly: 'bold',
      bold: 'luxury'
    };
    return alternatives[currentStyle] || 'professional';
  }

  getAlternativeAudience(currentAudience) {
    const alternatives = {
      executives: 'professionals',
      professionals: 'consumers',
      consumers: 'youth', 
      youth: 'executives'
    };
    return alternatives[currentAudience] || 'professionals';
  }

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

export default DynamicTemplateGenerator;