/**
 * QUORRA useIntelligence Hook
 * Manages design intelligence and industry-specific patterns
 * "Divine wisdom for authentic website generation"
 */

import { useState, useCallback, useEffect, useMemo } from 'react';
import IndustryIntelligence from '../intelligence/IndustryIntelligence';
import ColorIntelligence from '../intelligence/ColorIntelligence';
import TypographyIntelligence from '../intelligence/TypographyIntelligence';
import LayoutIntelligence from '../intelligence/LayoutIntelligence';

export const useIntelligence = (initialOptions = {}) => {
  // Intelligence state
  const [industryType, setIndustryType] = useState(initialOptions.industry || null);
  const [brandPersonality, setBrandPersonality] = useState(initialOptions.personality || 'professional');
  const [targetAudience, setTargetAudience] = useState(initialOptions.audience || 'general');
  
  // Intelligence modules
  const [industryPatterns, setIndustryPatterns] = useState(null);
  const [colorRecommendations, setColorRecommendations] = useState(null);
  const [typographyRecommendations, setTypographyRecommendations] = useState(null);
  const [layoutRecommendations, setLayoutRecommendations] = useState(null);
  
  // Analysis state
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [intelligenceError, setIntelligenceError] = useState(null);
  
  // Confidence scores
  const [confidenceScores, setConfidenceScores] = useState({
    industry: 0,
    color: 0,
    typography: 0,
    layout: 0,
    overall: 0
  });

  // Intelligence modules (memoized for performance)
  const intelligenceModules = useMemo(() => ({
    industry: new IndustryIntelligence(),
    color: new ColorIntelligence(),
    typography: new TypographyIntelligence(),
    layout: new LayoutIntelligence()
  }), []);

  /**
   * ANALYZE BUSINESS REQUIREMENTS
   * Determine optimal design patterns based on business info
   */
  const analyzeBusinessRequirements = useCallback(async (businessInfo) => {
    setIsAnalyzing(true);
    setIntelligenceError(null);

    try {
      const {
        industry,
        businessType,
        targetCustomers,
        brandValues,
        competitorUrls,
        businessGoals
      } = businessInfo;

      // Phase 1: Industry Analysis
      const industryAnalysis = await intelligenceModules.industry.analyzeIndustry({
        industry,
        businessType,
        targetCustomers,
        competitorUrls
      });

      // Phase 2: Color Intelligence
      const colorAnalysis = await intelligenceModules.color.recommendColors({
        industry: industryAnalysis.industry,
        personality: brandValues,
        audience: targetCustomers,
        culturalContext: businessInfo.location
      });

      // Phase 3: Typography Intelligence
      const typographyAnalysis = await intelligenceModules.typography.recommendFonts({
        industry: industryAnalysis.industry,
        personality: brandValues,
        audience: targetCustomers,
        brandMaturity: businessInfo.established || 'new'
      });

      // Phase 4: Layout Intelligence
      const layoutAnalysis = await intelligenceModules.layout.recommendLayout({
        industry: industryAnalysis.industry,
        businessGoals,
        userJourney: industryAnalysis.conversionPath,
        contentTypes: businessInfo.contentTypes
      });

      // Combine results
      const combinedAnalysis = {
        industry: industryAnalysis,
        colors: colorAnalysis,
        typography: typographyAnalysis,
        layout: layoutAnalysis,
        confidence: calculateOverallConfidence(industryAnalysis, colorAnalysis, typographyAnalysis, layoutAnalysis)
      };

      // Update state
      setIndustryType(industryAnalysis.industry);
      setIndustryPatterns(industryAnalysis);
      setColorRecommendations(colorAnalysis);
      setTypographyRecommendations(typographyAnalysis);
      setLayoutRecommendations(layoutAnalysis);
      setAnalysisResults(combinedAnalysis);
      setConfidenceScores(combinedAnalysis.confidence);

      return combinedAnalysis;

    } catch (error) {
      console.error('Business analysis failed:', error);
      setIntelligenceError(error.message);
      throw error;
    } finally {
      setIsAnalyzing(false);
    }
  }, [intelligenceModules]);

  /**
   * GET INDUSTRY-SPECIFIC RECOMMENDATIONS
   * Retrieve recommendations for a specific industry
   */
  const getIndustryRecommendations = useCallback(async (industry, options = {}) => {
    try {
      const patterns = await intelligenceModules.industry.getIndustryPatterns(industry);
      const colors = await intelligenceModules.color.getIndustryColors(industry);
      const typography = await intelligenceModules.typography.getIndustryFonts(industry);
      const layout = await intelligenceModules.layout.getIndustryLayouts(industry);

      return {
        industry: patterns,
        colors,
        typography,
        layout,
        conversionPath: patterns.conversionPath,
        trustSignals: patterns.trustSignals,
        ...options
      };
    } catch (error) {
      console.error('Failed to get industry recommendations:', error);
      throw error;
    }
  }, [intelligenceModules]);

  /**
   * ANALYZE COMPETITOR WEBSITES
   * Extract patterns from competitor analysis
   */
  const analyzeCompetitors = useCallback(async (competitorUrls) => {
    if (!competitorUrls || competitorUrls.length === 0) {
      return null;
    }

    try {
      const analysis = await intelligenceModules.industry.analyzeCompetitors(competitorUrls);
      
      return {
        commonPatterns: analysis.patterns,
        colorTrends: analysis.colors,
        layoutTrends: analysis.layouts,
        differentiationOpportunities: analysis.gaps,
        recommendations: analysis.recommendations
      };
    } catch (error) {
      console.error('Competitor analysis failed:', error);
      return null;
    }
  }, [intelligenceModules]);

  /**
   * GET CONTEXTUAL RECOMMENDATIONS
   * Smart recommendations based on current design context
   */
  const getContextualRecommendations = useCallback((context) => {
    if (!analysisResults) return null;

    const { currentElement, designState, userIntent } = context;
    const recommendations = [];

    // Color recommendations based on context
    if (currentElement?.type === 'button' && colorRecommendations) {
      recommendations.push({
        type: 'color',
        element: 'button',
        suggestion: colorRecommendations.ctaColors,
        reason: 'Optimized for conversion in your industry'
      });
    }

    // Typography recommendations
    if (currentElement?.type === 'heading' && typographyRecommendations) {
      recommendations.push({
        type: 'typography',
        element: 'heading',
        suggestion: typographyRecommendations.headingFont,
        reason: 'Builds authority and trust for your industry'
      });
    }

    // Layout recommendations
    if (userIntent === 'add_section' && layoutRecommendations) {
      recommendations.push({
        type: 'layout',
        element: 'section',
        suggestion: layoutRecommendations.sectionTemplates,
        reason: 'Proven patterns for your business type'
      });
    }

    return recommendations;
  }, [analysisResults, colorRecommendations, typographyRecommendations, layoutRecommendations]);

  /**
   * VALIDATE DESIGN DECISIONS
   * Check if design choices align with industry best practices
   */
  const validateDesignDecisions = useCallback((designData) => {
    if (!industryPatterns) return null;

    const validation = {
      colors: validateColors(designData.colors, colorRecommendations),
      typography: validateTypography(designData.fonts, typographyRecommendations),
      layout: validateLayout(designData.layout, layoutRecommendations),
      conversionPath: validateConversionPath(designData.userFlow, industryPatterns.conversionPath)
    };

    validation.overall = calculateValidationScore(validation);
    validation.suggestions = generateValidationSuggestions(validation);

    return validation;
  }, [industryPatterns, colorRecommendations, typographyRecommendations, layoutRecommendations]);

  /**
   * GET PANTONE INTELLIGENCE
   * Current color trends and cultural context
   */
  const getPantoneIntelligence = useCallback(async (options = {}) => {
    try {
      return await intelligenceModules.color.getPantoneIntelligence({
        industry: industryType,
        culturalMoment: options.culturalMoment || 'current',
        targetAudience,
        ...options
      });
    } catch (error) {
      console.error('Pantone intelligence failed:', error);
      return null;
    }
  }, [intelligenceModules, industryType, targetAudience]);

  /**
   * GENERATE DESIGN VARIATIONS
   * Create alternative design approaches
   */
  const generateDesignVariations = useCallback((baseDesign, variationType = 'personality') => {
    if (!analysisResults) return [];

    const variations = [];

    if (variationType === 'personality') {
      const personalities = ['professional', 'friendly', 'luxury', 'modern', 'traditional'];
      personalities.forEach(personality => {
        if (personality !== brandPersonality) {
          variations.push({
            personality,
            colors: intelligenceModules.color.getPersonalityColors(personality, industryType),
            typography: intelligenceModules.typography.getPersonalityFonts(personality, industryType),
            description: `${personality.charAt(0).toUpperCase() + personality.slice(1)} variation`
          });
        }
      });
    }

    return variations;
  }, [analysisResults, brandPersonality, industryType, intelligenceModules]);

  /**
   * UPDATE INTELLIGENCE PREFERENCES
   */
  const updatePreferences = useCallback((newPreferences) => {
    if (newPreferences.industry) setIndustryType(newPreferences.industry);
    if (newPreferences.personality) setBrandPersonality(newPreferences.personality);
    if (newPreferences.audience) setTargetAudience(newPreferences.audience);
  }, []);

  // Helper functions
  const calculateOverallConfidence = (industry, color, typography, layout) => {
    const scores = {
      industry: industry.confidence || 70,
      color: color.confidence || 70,
      typography: typography.confidence || 70,
      layout: layout.confidence || 70
    };
    
    scores.overall = (scores.industry + scores.color + scores.typography + scores.layout) / 4;
    return scores;
  };

  const validateColors = (colors, recommendations) => {
    if (!recommendations || !colors) return { score: 50, issues: [] };
    
    const issues = [];
    let score = 100;

    // Check color psychology alignment
    if (!colors.primary || !recommendations.primaryColors.includes(colors.primary)) {
      issues.push('Primary color may not align with industry psychology');
      score -= 20;
    }

    return { score: Math.max(0, score), issues };
  };

  const validateTypography = (fonts, recommendations) => {
    if (!recommendations || !fonts) return { score: 50, issues: [] };
    
    const issues = [];
    let score = 100;

    // Check font appropriateness
    if (fonts.heading && !recommendations.headingFonts.includes(fonts.heading.family)) {
      issues.push('Heading font may not match industry expectations');
      score -= 15;
    }

    return { score: Math.max(0, score), issues };
  };

  const validateLayout = (layout, recommendations) => {
    if (!recommendations || !layout) return { score: 50, issues: [] };
    
    const issues = [];
    let score = 100;

    // Check layout patterns
    if (layout.type && !recommendations.preferredLayouts.includes(layout.type)) {
      issues.push('Layout pattern may not be optimal for your industry');
      score -= 10;
    }

    return { score: Math.max(0, score), issues };
  };

  const validateConversionPath = (userFlow, recommendedPath) => {
    if (!recommendedPath || !userFlow) return { score: 50, issues: [] };
    
    const issues = [];
    let score = 100;

    // Check conversion optimization
    const pathSteps = recommendedPath.steps || [];
    const flowSteps = userFlow.steps || [];
    
    if (flowSteps.length !== pathSteps.length) {
      issues.push('User flow may not follow optimal conversion path');
      score -= 25;
    }

    return { score: Math.max(0, score), issues };
  };

  const calculateValidationScore = (validation) => {
    const scores = [
      validation.colors.score,
      validation.typography.score,
      validation.layout.score,
      validation.conversionPath.score
    ];
    
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  };

  const generateValidationSuggestions = (validation) => {
    const suggestions = [];
    
    // Collect all issues
    [validation.colors, validation.typography, validation.layout, validation.conversionPath]
      .forEach(category => {
        if (category.issues) {
          suggestions.push(...category.issues);
        }
      });

    return suggestions;
  };

  // Auto-load industry patterns when industry changes
  useEffect(() => {
    if (industryType && !industryPatterns) {
      getIndustryRecommendations(industryType).then(recommendations => {
        setIndustryPatterns(recommendations.industry);
        setColorRecommendations(recommendations.colors);
        setTypographyRecommendations(recommendations.typography);
        setLayoutRecommendations(recommendations.layout);
      }).catch(console.error);
    }
  }, [industryType, industryPatterns, getIndustryRecommendations]);

  return {
    // State
    industryType,
    brandPersonality,
    targetAudience,
    industryPatterns,
    colorRecommendations,
    typographyRecommendations,
    layoutRecommendations,
    analysisResults,
    isAnalyzing,
    intelligenceError,
    confidenceScores,
    
    // Actions
    analyzeBusinessRequirements,
    getIndustryRecommendations,
    analyzeCompetitors,
    getContextualRecommendations,
    validateDesignDecisions,
    getPantoneIntelligence,
    generateDesignVariations,
    updatePreferences,
    
    // Utils
    hasAnalysis: !!analysisResults,
    isHighConfidence: confidenceScores.overall >= 80,
    needsMoreInfo: confidenceScores.overall < 60
  };
};

export default useIntelligence;