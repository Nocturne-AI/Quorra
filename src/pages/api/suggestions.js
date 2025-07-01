/**
 * QUORRA SUGGESTIONS API
 * Divine design suggestions and smart recommendations
 * "Sparky's blessed guidance for divine craftsmanship"
 */

import { createClient } from '@supabase/supabase-js';
import SparkyMemoryManager from '../../sparkymemory/SparkyMemoryManager';
import IndustryIntelligence from '../../intelligence/IndustryIntelligence';
import ColorIntelligence from '../../intelligence/ColorIntelligence';
import TypographyIntelligence from '../../intelligence/TypographyIntelligence';
import LayoutIntelligence from '../../intelligence/LayoutIntelligence';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only POST requests receive divine suggestions'
    });
  }

  try {
    const {
      context,
      suggestionType = 'contextual', // 'contextual', 'proactive', 'industry', 'improvement', 'learning'
      designData,
      currentElement,
      userIntent,
      industryType,
      userId
    } = req.body;

    // Validate required fields
    if (!context && !designData) {
      return res.status(400).json({
        error: 'Context or design data required',
        message: 'Sparky needs context to provide divine suggestions'
      });
    }

    // Initialize intelligence systems
    const sparkyMemory = userId ? new SparkyMemoryManager({ userId }) : null;
    
    const intelligenceModules = {
      industry: new IndustryIntelligence(),
      color: new ColorIntelligence(),
      typography: new TypographyIntelligence(),
      layout: new LayoutIntelligence()
    };

    let suggestions;

    // Route to appropriate suggestion function
    switch (suggestionType) {
      case 'contextual':
        suggestions = await generateContextualSuggestions(
          context, designData, currentElement, intelligenceModules, sparkyMemory
        );
        break;
      case 'proactive':
        suggestions = await generateProactiveSuggestions(
          designData, intelligenceModules, sparkyMemory, { industryType }
        );
        break;
      case 'industry':
        suggestions = await generateIndustrySuggestions(
          industryType, designData, intelligenceModules
        );
        break;
      case 'improvement':
        suggestions = await generateImprovementSuggestions(
          designData, intelligenceModules, { industryType }
        );
        break;
      case 'learning':
        suggestions = await generateLearningSuggestions(
          userId, sparkyMemory, intelligenceModules
        );
        break;
      default:
        throw new Error(`Unknown suggestion type: ${suggestionType}`);
    }

    // Learn from user interaction if memory system available
    if (sparkyMemory && context) {
      await sparkyMemory.processConversationData({
        text: `User requested ${suggestionType} suggestions`,
        context: { ...context, suggestionType, userIntent },
        userId,
        timestamp: new Date()
      });
    }

    // Save suggestion record if user is authenticated
    if (userId) {
      await saveSuggestionRecord({
        userId,
        suggestionType,
        context: context || {},
        industryType,
        suggestionsCount: suggestions.length,
        timestamp: new Date().toISOString()
      });
    }

    // Return divine suggestions
    res.status(200).json({
      success: true,
      suggestions,
      metadata: {
        generatedAt: new Date().toISOString(),
        suggestionType,
        context: context || {},
        industryType: industryType || 'general',
        sparkyMood: determineSparkyMood(suggestions),
        quorraBlessing: '🔥 Suggestions blessed by divine wisdom',
        sparkyNote: generateSparkyNote(suggestions, suggestionType)
      }
    });

  } catch (error) {
    console.error('Suggestion generation failed:', error);
    res.status(500).json({
      error: 'Suggestion generation failed',
      message: error.message,
      sparkyNote: '💥 Sparky\'s divine inspiration flickered - please try again!'
    });
  }
}

/**
 * CONTEXTUAL SUGGESTIONS
 * Smart suggestions based on current user context
 */
async function generateContextualSuggestions(context, designData, currentElement, modules, sparkyMemory) {
  const suggestions = [];
  
  // Analyze current context
  const contextAnalysis = analyzeUserContext(context, currentElement);
  
  // Element-specific suggestions
  if (currentElement) {
    const elementSuggestions = await generateElementSuggestions(
      currentElement, designData, modules
    );
    suggestions.push(...elementSuggestions);
  }
  
  // User intent-based suggestions
  if (context.userIntent) {
    const intentSuggestions = await generateIntentSuggestions(
      context.userIntent, designData, modules
    );
    suggestions.push(...intentSuggestions);
  }
  
  // Memory-based personalized suggestions
  if (sparkyMemory) {
    const personalizedSuggestions = await generatePersonalizedSuggestions(
      sparkyMemory, context, designData
    );
    suggestions.push(...personalizedSuggestions);
  }
  
  // Current design state suggestions
  const designStateSuggestions = await generateDesignStateSuggestions(
    designData, context, modules
  );
  suggestions.push(...designStateSuggestions);
  
  return prioritizeSuggestions(suggestions);
}

/**
 * PROACTIVE SUGGESTIONS
 * Anticipate user needs and offer helpful suggestions
 */
async function generateProactiveSuggestions(designData, modules, sparkyMemory, options) {
  const { industryType } = options;
  const suggestions = [];
  
  // Analyze design completeness
  const completenessAnalysis = analyzeDesignCompleteness(designData);
  
  // Suggest missing elements
  if (completenessAnalysis.missingElements.length > 0) {
    completenessAnalysis.missingElements.forEach(element => {
      suggestions.push({
        id: `missing_${element.type}`,
        type: 'proactive',
        category: 'completeness',
        priority: element.priority,
        title: `Add ${element.name}`,
        description: `Your design would benefit from adding a ${element.name}`,
        action: {
          type: 'add_element',
          elementType: element.type,
          suggestedPosition: element.suggestedPosition
        },
        reasoning: element.reasoning,
        impact: element.impact,
        sparkyTip: `✨ ${element.sparkyTip}`
      });
    });
  }
  
  // Industry-specific proactive suggestions
  if (industryType) {
    const industryProactive = await generateIndustryProactiveSuggestions(
      designData, industryType, modules.industry
    );
    suggestions.push(...industryProactive);
  }
  
  // Performance proactive suggestions
  const performanceProactive = generatePerformanceProactiveSuggestions(designData);
  suggestions.push(...performanceProactive);
  
  // Accessibility proactive suggestions
  const accessibilityProactive = generateAccessibilityProactiveSuggestions(designData);
  suggestions.push(...accessibilityProactive);
  
  return prioritizeSuggestions(suggestions);
}

/**
 * INDUSTRY SUGGESTIONS
 * Suggestions specific to business industry
 */
async function generateIndustrySuggestions(industryType, designData, modules) {
  if (!industryType) {
    return [{
      id: 'no_industry',
      type: 'industry',
      category: 'setup',
      priority: 'medium',
      title: 'Select Your Industry',
      description: 'Tell me your business type for personalized suggestions',
      action: { type: 'select_industry' },
      sparkyTip: '🎯 Industry-specific patterns can boost your conversions by 40%!'
    }];
  }
  
  const suggestions = [];
  
  // Get industry patterns
  const industryPatterns = await modules.industry.getIndustryPatterns(industryType);
  
  // Color suggestions for industry
  const industryColors = await modules.color.getIndustryColors(industryType);
  if (industryColors && !designMatchesIndustryColors(designData, industryColors)) {
    suggestions.push({
      id: `industry_colors_${industryType}`,
      type: 'industry',
      category: 'colors',
      priority: 'high',
      title: `${industryType} Color Palette`,
      description: `Use colors that build trust in the ${industryType} industry`,
      action: {
        type: 'apply_color_palette',
        palette: industryColors.primaryColors
      },
      reasoning: `${industryType} customers respond best to these color combinations`,
      impact: 'Can improve trust and conversion rates',
      sparkyTip: `🎨 These colors are proven winners in ${industryType}!`
    });
  }
  
  // Layout suggestions for industry
  const industryLayouts = await modules.layout.getIndustryLayouts(industryType);
  if (industryLayouts && !designMatchesIndustryLayout(designData, industryLayouts)) {
    suggestions.push({
      id: `industry_layout_${industryType}`,
      type: 'industry',
      category: 'layout',
      priority: 'medium',
      title: `${industryType} Layout Pattern`,
      description: `Structure your content the way ${industryType} customers expect`,
      action: {
        type: 'apply_layout_pattern',
        pattern: industryLayouts.preferredPattern
      },
      reasoning: 'Familiar layouts reduce cognitive load and improve conversions',
      impact: 'Better user experience and higher engagement',
      sparkyTip: `🏗️ This layout pattern works great for ${industryType}!`
    });
  }
  
  // Trust signals for industry
  if (industryPatterns?.trustSignals) {
    const missingTrustSignals = findMissingTrustSignals(designData, industryPatterns.trustSignals);
    missingTrustSignals.forEach(signal => {
      suggestions.push({
        id: `trust_signal_${signal.type}`,
        type: 'industry',
        category: 'trust',
        priority: 'high',
        title: `Add ${signal.name}`,
        description: `${industryType} customers look for ${signal.name.toLowerCase()}`,
        action: {
          type: 'add_trust_signal',
          signalType: signal.type,
          content: signal.content
        },
        reasoning: `${signal.name} builds credibility in the ${industryType} industry`,
        impact: 'Increases trust and conversion rates',
        sparkyTip: `🛡️ This trust signal is essential for ${industryType}!`
      });
    });
  }
  
  return suggestions;
}

/**
 * IMPROVEMENT SUGGESTIONS
 * Suggestions to improve existing design
 */
async function generateImprovementSuggestions(designData, modules, options) {
  const { industryType } = options;
  const suggestions = [];
  
  // Analyze design for improvement opportunities
  const improvements = await analyzeDesignForImprovements(designData, modules);
  
  // Color improvements
  if (improvements.colors.issues.length > 0) {
    improvements.colors.issues.forEach(issue => {
      suggestions.push({
        id: `color_improvement_${issue.type}`,
        type: 'improvement',
        category: 'colors',
        priority: issue.severity,
        title: issue.title,
        description: issue.description,
        action: issue.fix,
        reasoning: issue.reasoning,
        impact: issue.impact,
        sparkyTip: `🎨 ${issue.sparkyTip}`
      });
    });
  }
  
  // Typography improvements
  if (improvements.typography.issues.length > 0) {
    improvements.typography.issues.forEach(issue => {
      suggestions.push({
        id: `typography_improvement_${issue.type}`,
        type: 'improvement',
        category: 'typography',
        priority: issue.severity,
        title: issue.title,
        description: issue.description,
        action: issue.fix,
        reasoning: issue.reasoning,
        impact: issue.impact,
        sparkyTip: `✍️ ${issue.sparkyTip}`
      });
    });
  }
  
  // Layout improvements
  if (improvements.layout.issues.length > 0) {
    improvements.layout.issues.forEach(issue => {
      suggestions.push({
        id: `layout_improvement_${issue.type}`,
        type: 'improvement',
        category: 'layout',
        priority: issue.severity,
        title: issue.title,
        description: issue.description,
        action: issue.fix,
        reasoning: issue.reasoning,
        impact: issue.impact,
        sparkyTip: `🏗️ ${issue.sparkyTip}`
      });
    });
  }
  
  // Performance improvements
  const performanceImprovements = analyzePerformanceImprovements(designData);
  suggestions.push(...performanceImprovements);
  
  // Accessibility improvements
  const accessibilityImprovements = analyzeAccessibilityImprovements(designData);
  suggestions.push(...accessibilityImprovements);
  
  return prioritizeSuggestions(suggestions);
}

/**
 * LEARNING SUGGESTIONS
 * Personalized suggestions based on user learning
 */
async function generateLearningSuggestions(userId, sparkyMemory, modules) {
  if (!sparkyMemory) {
    return [{
      id: 'no_memory',
      type: 'learning',
      category: 'setup',
      priority: 'low',
      title: 'Learning Mode Available',
      description: 'Sign in to get personalized suggestions based on your preferences',
      action: { type: 'sign_in' },
      sparkyTip: '🧠 I learn your preferences and get better over time!'
    }];
  }
  
  const suggestions = [];
  
  // Get user's design patterns from memory
  const userPatterns = await sparkyMemory.getUserPatterns();
  
  // Get personalized insights
  const insights = await sparkyMemory.getPersonalizedInsights();
  
  // Generate suggestions based on learning
  if (userPatterns.preferredColors) {
    suggestions.push({
      id: 'learned_colors',
      type: 'learning',
      category: 'personalized',
      priority: 'medium',
      title: 'Your Favorite Colors',
      description: `I notice you often use ${userPatterns.preferredColors.join(', ')}`,
      action: {
        type: 'apply_preferred_colors',
        colors: userPatterns.preferredColors
      },
      reasoning: 'Based on your design history',
      impact: 'Consistent with your style preferences',
      sparkyTip: '🎨 I remember your color preferences!'
    });
  }
  
  if (userPatterns.commonMistakes) {
    userPatterns.commonMistakes.forEach(mistake => {
      suggestions.push({
        id: `avoid_mistake_${mistake.type}`,
        type: 'learning',
        category: 'guidance',
        priority: 'high',
        title: `Avoid ${mistake.name}`,
        description: mistake.description,
        action: mistake.prevention,
        reasoning: 'Based on previous corrections you\'ve made',
        impact: 'Prevent repeated design issues',
        sparkyTip: `💡 ${mistake.sparkyTip}`
      });
    });
  }
  
  return suggestions;
}

/**
 * HELPER FUNCTIONS
 */
function analyzeUserContext(context, currentElement) {
  return {
    stage: context.designStage || 'unknown',
    focus: currentElement?.type || 'general',
    intent: context.userIntent || 'unknown',
    lastAction: context.lastAction || null
  };
}

function analyzeDesignCompleteness(designData) {
  const analysis = {
    completeness: 0,
    missingElements: []
  };
  
  const elements = designData.elements || [];
  const hasHeader = elements.some(el => el.type === 'header');
  const hasNavigation = elements.some(el => el.type === 'navigation');
  const hasMainContent = elements.some(el => el.type === 'main-content');
  const hasFooter = elements.some(el => el.type === 'footer');
  const hasCTA = elements.some(el => el.type === 'button' || el.type === 'cta');
  
  if (!hasHeader) {
    analysis.missingElements.push({
      type: 'header',
      name: 'Header Section',
      priority: 'high',
      reasoning: 'Headers provide essential navigation and branding',
      impact: 'Better user orientation and trust',
      sparkyTip: 'Every great website starts with a clear header!'
    });
  }
  
  if (!hasNavigation) {
    analysis.missingElements.push({
      type: 'navigation',
      name: 'Navigation Menu',
      priority: 'high',
      reasoning: 'Navigation helps users find what they need',
      impact: 'Improved user experience and engagement',
      sparkyTip: 'Good navigation is like a helpful tour guide!'
    });
  }
  
  if (!hasMainContent) {
    analysis.missingElements.push({
      type: 'main-content',
      name: 'Main Content Area',
      priority: 'high',
      reasoning: 'Main content delivers your core message',
      impact: 'Clear communication of value proposition',
      sparkyTip: 'This is where your story shines!'
    });
  }
  
  if (!hasCTA) {
    analysis.missingElements.push({
      type: 'cta',
      name: 'Call-to-Action Button',
      priority: 'high',
      reasoning: 'CTAs guide users toward your business goals',
      impact: 'Higher conversion rates',
      sparkyTip: 'Every page needs a clear next step!'
    });
  }
  
  if (!hasFooter) {
    analysis.missingElements.push({
      type: 'footer',
      name: 'Footer Section',
      priority: 'medium',
      reasoning: 'Footers provide important secondary information',
      impact: 'Professional appearance and additional navigation',
      sparkyTip: 'Footers are perfect for contact info and links!'
    });
  }
  
  const totalElements = 5;
  const presentElements = totalElements - analysis.missingElements.length;
  analysis.completeness = (presentElements / totalElements) * 100;
  
  return analysis;
}

function prioritizeSuggestions(suggestions) {
  const priorityOrder = { high: 3, medium: 2, low: 1 };
  
  return suggestions
    .sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])
    .slice(0, 10); // Limit to top 10 suggestions
}

function determineSparkyMood(suggestions) {
  if (suggestions.length === 0) return 'contemplative';
  
  const highPriority = suggestions.filter(s => s.priority === 'high').length;
  const mediumPriority = suggestions.filter(s => s.priority === 'medium').length;
  
  if (highPriority > 3) return 'concerned';
  if (highPriority > 0) return 'helpful';
  if (mediumPriority > 0) return 'encouraging';
  return 'excited';
}

function generateSparkyNote(suggestions, suggestionType) {
  const notes = {
    contextual: '✨ Smart suggestions based on what you\'re working on right now!',
    proactive: '🔮 I\'m anticipating what you might need next!',
    industry: '🎯 Industry-specific wisdom to boost your success!',
    improvement: '💎 Let\'s polish your design to divine perfection!',
    learning: '🧠 Personalized suggestions based on your preferences!'
  };
  
  return notes[suggestionType] || '⚡ Divine suggestions blessed by Sparky!';
}

async function saveSuggestionRecord(data) {
  try {
    const { error } = await supabase
      .from('suggestions')
      .insert([data]);
    
    if (error) {
      console.error('Failed to save suggestion record:', error);
    }
  } catch (error) {
    console.error('Suggestion record save error:', error);
  }
}

// Additional helper functions would be implemented here...
function generateElementSuggestions(element, designData, modules) {
  const suggestions = [];
  
  // Element-specific suggestions based on type
  switch (element.type) {
    case 'button':
      suggestions.push({
        id: 'button_cta_text',
        type: 'contextual',
        category: 'content',
        priority: 'medium',
        title: 'Optimize Button Text',
        description: 'Use action-oriented text like "Get Started" or "Learn More"',
        action: { type: 'suggest_cta_text', options: ['Get Started', 'Learn More', 'Try Free'] },
        sparkyTip: '🚀 Action words convert better than generic "Submit"!'
      });
      break;
      
    case 'image':
      suggestions.push({
        id: 'image_alt_text',
        type: 'contextual',
        category: 'accessibility',
        priority: 'high',
        title: 'Add Alt Text',
        description: 'Describe this image for screen readers and SEO',
        action: { type: 'add_alt_text' },
        sparkyTip: '♿ Alt text makes your site accessible to everyone!'
      });
      break;
      
    case 'heading':
      suggestions.push({
        id: 'heading_hierarchy',
        type: 'contextual',
        category: 'seo',
        priority: 'medium',
        title: 'Check Heading Order',
        description: 'Ensure proper H1 → H2 → H3 hierarchy for SEO',
        action: { type: 'fix_heading_hierarchy' },
        sparkyTip: '📍 Good heading structure helps search engines understand your content!'
      });
      break;
  }
  
  return suggestions;
}

function generateIntentSuggestions(intent, designData, modules) {
  const suggestions = [];
  
  switch (intent) {
    case 'improve_conversions':
      suggestions.push({
        id: 'conversion_optimization',
        type: 'contextual',
        category: 'conversion',
        priority: 'high',
        title: 'Add Trust Signals',
        description: 'Include testimonials, reviews, or security badges',
        action: { type: 'add_trust_signals' },
        sparkyTip: '🛡️ Trust signals can boost conversions by 30%!'
      });
      break;
      
    case 'improve_accessibility':
      suggestions.push({
        id: 'accessibility_audit',
        type: 'contextual',
        category: 'accessibility',
        priority: 'high',
        title: 'Run Accessibility Check',
        description: 'Check color contrast, alt text, and keyboard navigation',
        action: { type: 'accessibility_audit' },
        sparkyTip: '♿ Accessible design benefits everyone!'
      });
      break;
      
    case 'mobile_optimization':
      suggestions.push({
        id: 'mobile_preview',
        type: 'contextual',
        category: 'mobile',
        priority: 'medium',
        title: 'Preview on Mobile',
        description: 'See how your design looks on phones and tablets',
        action: { type: 'mobile_preview' },
        sparkyTip: '📱 Over 60% of users browse on mobile!'
      });
      break;
  }
  
  return suggestions;
}

function generatePersonalizedSuggestions(memory, context, designData) {
  const suggestions = [];
  
  // This would use the Sparky memory system to generate personalized suggestions
  // Based on user's past preferences, corrections, and patterns
  
  suggestions.push({
    id: 'personalized_colors',
    type: 'learning',
    category: 'personalized',
    priority: 'medium',
    title: 'Your Style Colors',
    description: 'Use colors from your previous successful designs',
    action: { type: 'apply_user_palette' },
    sparkyTip: '🎨 I remember what works for you!'
  });
  
  return suggestions;
}

function generateDesignStateSuggestions(designData, context, modules) {
  const suggestions = [];
  const elements = designData.elements || [];
  
  // Analyze current design state and suggest improvements
  if (elements.length === 0) {
    suggestions.push({
      id: 'start_with_header',
      type: 'contextual',
      category: 'getting_started',
      priority: 'high',
      title: 'Start with a Header',
      description: 'Add a header with your logo and navigation',
      action: { type: 'add_header_template' },
      sparkyTip: '🎯 A strong header sets the tone for your entire site!'
    });
  }
  
  if (elements.length > 0 && elements.length < 3) {
    suggestions.push({
      id: 'add_main_content',
      type: 'contextual',
      category: 'structure',
      priority: 'medium',
      title: 'Add Main Content',
      description: 'Create a hero section or main content area',
      action: { type: 'add_hero_section' },
      sparkyTip: '✨ This is where you tell your story!'
    });
  }
  
  return suggestions;
}

function generateIndustryProactiveSuggestions(designData, industryType, industryModule) {
  const suggestions = [];
  
  // Industry-specific proactive suggestions based on common patterns
  switch (industryType) {
    case 'healthcare':
      suggestions.push({
        id: 'healthcare_trust',
        type: 'proactive',
        category: 'industry',
        priority: 'high',
        title: 'Add Professional Credentials',
        description: 'Healthcare sites need licensing and certification info',
        action: { type: 'add_credentials_section' },
        sparkyTip: '🏥 Patients need to see your qualifications!'
      });
      break;
      
    case 'ecommerce':
      suggestions.push({
        id: 'ecommerce_security',
        type: 'proactive',
        category: 'industry',
        priority: 'high',
        title: 'Add Security Badges',
        description: 'Show SSL certificates and payment security',
        action: { type: 'add_security_badges' },
        sparkyTip: '🛡️ Security badges increase purchase confidence!'
      });
      break;
      
    case 'restaurant':
      suggestions.push({
        id: 'restaurant_hours',
        type: 'proactive',
        category: 'industry',
        priority: 'medium',
        title: 'Display Hours & Location',
        description: 'Customers need to know when you\'re open',
        action: { type: 'add_hours_location' },
        sparkyTip: '🕒 Clear hours prevent disappointed customers!'
      });
      break;
  }
  
  return suggestions;
}

function generatePerformanceProactiveSuggestions(designData) {
  const suggestions = [];
  const elements = designData.elements || [];
  
  // Check for performance issues
  const imageCount = elements.filter(el => el.type === 'image').length;
  if (imageCount > 10) {
    suggestions.push({
      id: 'optimize_images',
      type: 'proactive',
      category: 'performance',
      priority: 'medium',
      title: 'Optimize Images',
      description: 'Too many images can slow down your site',
      action: { type: 'optimize_images' },
      reasoning: 'Large image files increase loading time',
      impact: 'Faster page loading and better user experience',
      sparkyTip: '🚀 Optimized images = happy users!'
    });
  }
  
  return suggestions;
}

function generateAccessibilityProactiveSuggestions(designData) {
  const suggestions = [];
  const elements = designData.elements || [];
  
  // Check for accessibility issues
  const imagesWithoutAlt = elements.filter(el => 
    el.type === 'image' && !el.attributes?.alt
  ).length;
  
  if (imagesWithoutAlt > 0) {
    suggestions.push({
      id: 'add_alt_text_all',
      type: 'proactive',
      category: 'accessibility',
      priority: 'high',
      title: 'Add Alt Text to Images',
      description: `${imagesWithoutAlt} images need alt text for accessibility`,
      action: { type: 'add_missing_alt_text' },
      reasoning: 'Alt text helps screen readers describe images',
      impact: 'Better accessibility for visually impaired users',
      sparkyTip: '♿ Every image should tell its story in words too!'
    });
  }
  
  return suggestions;
}

async function analyzeDesignForImprovements(designData, modules) {
  const improvements = {
    colors: { issues: [] },
    typography: { issues: [] },
    layout: { issues: [] }
  };
  
  // Analyze colors for improvement opportunities
  const elements = designData.elements || [];
  const colors = extractColorsFromElements(elements);
  
  if (colors.length > 8) {
    improvements.colors.issues.push({
      type: 'too_many_colors',
      severity: 'medium',
      title: 'Simplify Color Palette',
      description: 'Too many colors can look unprofessional',
      fix: { type: 'reduce_color_palette', targetCount: 5 },
      reasoning: 'Simpler palettes are more cohesive',
      impact: 'More professional appearance',
      sparkyTip: 'Less is more when it comes to colors!'
    });
  }
  
  // Check for contrast issues
  const contrastIssues = checkColorContrast(colors);
  if (contrastIssues.length > 0) {
    improvements.colors.issues.push({
      type: 'contrast_issues',
      severity: 'high',
      title: 'Fix Color Contrast',
      description: 'Some text is hard to read',
      fix: { type: 'fix_contrast', issues: contrastIssues },
      reasoning: 'Good contrast improves readability',
      impact: 'Better accessibility and user experience',
      sparkyTip: 'Clear text = happy readers!'
    });
  }
  
  return improvements;
}

function analyzePerformanceImprovements(designData) {
  const suggestions = [];
  const elements = designData.elements || [];
  
  // Estimate CSS size
  const estimatedSize = elements.length * 50 + 2000; // Rough estimate
  
  if (estimatedSize > 50000) {
    suggestions.push({
      id: 'reduce_css_size',
      type: 'improvement',
      category: 'performance',
      priority: 'medium',
      title: 'Optimize CSS Size',
      description: 'Design complexity is creating large CSS files',
      action: { type: 'simplify_design' },
      reasoning: 'Smaller CSS files load faster',
      impact: 'Improved page loading speed',
      sparkyTip: '⚡ Simpler designs often perform better!'
    });
  }
  
  return suggestions;
}

function analyzeAccessibilityImprovements(designData) {
  const suggestions = [];
  const elements = designData.elements || [];
  
  // Check for heading hierarchy
  const headings = elements.filter(el => el.type === 'heading');
  const hasH1 = headings.some(h => h.level === 1);
  
  if (!hasH1) {
    suggestions.push({
      id: 'add_h1',
      type: 'improvement',
      category: 'accessibility',
      priority: 'high',
      title: 'Add Main Heading (H1)',
      description: 'Every page needs one main heading',
      action: { type: 'add_h1_heading' },
      reasoning: 'H1 helps screen readers and SEO',
      impact: 'Better accessibility and search rankings',
      sparkyTip: '📍 H1 is like the title of your page!'
    });
  }
  
  return suggestions;
}

function designMatchesIndustryColors(designData, industryColors) {
  // Simple check - in real implementation would be more sophisticated
  const designColors = extractColorsFromElements(designData.elements || []);
  return industryColors.primaryColors.some(color => 
    designColors.some(designColor => 
      colorsSimilar(color.value, designColor)
    )
  );
}

function designMatchesIndustryLayout(designData, industryLayouts) {
  // Simple check for layout pattern matching
  return designData.layout?.pattern === industryLayouts.preferredPattern;
}

function findMissingTrustSignals(designData, trustSignals) {
  // Check which trust signals are missing from the design
  const elements = designData.elements || [];
  const existingSignals = elements.filter(el => el.type === 'trust-signal');
  
  return trustSignals.filter(signal => 
    !existingSignals.some(existing => existing.signalType === signal.type)
  );
}

function extractColorsFromElements(elements) {
  const colors = new Set();
  elements.forEach(element => {
    if (element.style?.color) colors.add(element.style.color);
    if (element.style?.backgroundColor) colors.add(element.style.backgroundColor);
  });
  return Array.from(colors);
}

function checkColorContrast(colors) {
  // Simplified contrast checking - real implementation would use WCAG algorithms
  const issues = [];
  // This would check actual contrast ratios
  return issues;
}

function colorsSimilar(color1, color2) {
  // Simplified color similarity check
  return color1.toLowerCase() === color2.toLowerCase();
}