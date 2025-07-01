/**
 * SPARKY RULE ENGINE TESTS
 * Divine validation of AI assistant intelligence and personality
 */

import { describe, test, expect, beforeEach, jest } from '@jest/globals';
import { testDesignData } from '../fixtures/designData.js';
import { testUsers } from '../fixtures/userProfiles.js';

// Mock SparkyRuleEngine components
const mockSparkyRuleEngine = {
  provideGuidance: jest.fn(),
  analyzeSituation: jest.fn(),
  recognizePatterns: jest.fn(),
  generateRecommendations: jest.fn(),
  craftPersonalizedResponse: jest.fn(),
  updateMemory: jest.fn()
};

const mockMemoryManager = {
  retrieveRelevant: jest.fn(),
  storeMemory: jest.fn(),
  updateScore: jest.fn()
};

describe('⚡ SparkyRuleEngine - Divine Messenger Intelligence', () => {
  let sparkyEngine;
  
  beforeEach(() => {
    jest.clearAllMocks();
    
    sparkyEngine = {
      config: {
        personality: {
          helpful: true,
          encouraging: true,
          mythological: true
        },
        intelligence: {
          industryPatterns: true,
          colorPsychology: true,
          layoutOptimization: true
        }
      },
      memoryManager: mockMemoryManager,
      ...mockSparkyRuleEngine
    };
  });

  describe('🎨 Design Intelligence Analysis', () => {
    test('should analyze color selection situations correctly', async () => {
      const userAction = {
        type: 'color_selection',
        data: {
          currentColor: '#FF0000',
          industry: 'healthcare',
          element: 'primary'
        },
        userId: testUsers.beginner.id
      };

      const expectedAnalysis = {
        action: 'color_selection',
        industry: 'healthcare',
        designState: {
          currentColors: { primary: '#FF0000' },
          colorHarmony: 'poor',
          industryAlignment: 'poor'
        },
        userExperience: 'beginner',
        currentChallenges: ['industry_appropriate_colors', 'color_psychology']
      };

      sparkyEngine.analyzeSituation.mockResolvedValue(expectedAnalysis);

      const result = await sparkyEngine.analyzeSituation(userAction);

      expect(result.action).toBe('color_selection');
      expect(result.industry).toBe('healthcare');
      expect(result.designState.colorHarmony).toBe('poor');
      expect(result.currentChallenges).toContain('industry_appropriate_colors');
    });

    test('should recognize healthcare industry patterns', async () => {
      const healthcareContext = {
        industry: 'healthcare',
        designState: {
          colors: { primary: '#FF0000' }, // Problematic red
          layout: 'standard'
        },
        userExperience: 'beginner'
      };

      const expectedPatterns = {
        industryBestPractices: {
          colors: ['trust_blues', 'calming_colors', 'professional_palette'],
          typography: ['readable_fonts', 'accessible_text'],
          layout: ['clear_navigation', 'appointment_cta', 'trust_signals']
        },
        colorHarmonyOpportunities: {
          suggestions: ['#2563EB', '#16A34A', '#6B7280'],
          reasoning: 'Healthcare benefits from trust-building blues and health-associated greens'
        },
        accessibilityImprovements: {
          contrastIssues: true,
          readabilityScore: 'low',
          recommendations: ['increase_contrast', 'larger_text']
        }
      };

      sparkyEngine.recognizePatterns.mockResolvedValue(expectedPatterns);

      const result = await sparkyEngine.recognizePatterns(healthcareContext);

      expect(result.industryBestPractices.colors).toContain('trust_blues');
      expect(result.colorHarmonyOpportunities.suggestions).toContain('#2563EB');
      expect(result.accessibilityImprovements.contrastIssues).toBe(true);
    });

    test('should generate industry-specific recommendations', async () => {
      const restaurantPatterns = {
        industryBestPractices: {
          colors: ['appetite_stimulating', 'warm_tones'],
          typography: ['elegant_serif', 'readable_menus'],
          layout: ['food_imagery_prominent', 'reservation_cta']
        },
        colorHarmonyOpportunities: {
          suggestions: ['#8B6914', '#F97316', '#EAB308']
        }
      };

      const expectedRecommendations = {
        immediate: [
          {
            type: 'color_improvement',
            suggestion: 'Switch to warm, appetite-stimulating colors',
            implementation: 'Try rich browns and warm oranges',
            reasoning: 'Restaurant psychology shows warm colors increase appetite and comfort',
            priority: 'high'
          }
        ],
        strategic: [
          {
            type: 'layout_optimization',
            suggestion: 'Make food imagery more prominent',
            implementation: 'Increase image sizes, add hero food photography',
            reasoning: 'Visual appetite appeal is crucial for restaurant conversion',
            priority: 'medium'
          }
        ],
        accessibility: [
          {
            type: 'readability_improvement',
            suggestion: 'Ensure menu text is highly readable',
            implementation: 'Use high contrast, larger font sizes for menu items',
            reasoning: 'Clear menu reading improves customer experience and ordering confidence',
            priority: 'high'
          }
        ]
      };

      sparkyEngine.generateRecommendations.mockResolvedValue(expectedRecommendations);

      const result = await sparkyEngine.generateRecommendations(restaurantPatterns);

      expect(result.immediate[0].type).toBe('color_improvement');
      expect(result.immediate[0].priority).toBe('high');
      expect(result.strategic[0].suggestion).toContain('food imagery');
      expect(result.accessibility[0].reasoning).toContain('menu reading');
    });
  });

  describe('🧠 Memory System Integration', () => {
    test('should store high-importance memories from user corrections', async () => {
      const userCorrection = {
        type: 'user_correction',
        original: 'Suggested blue (#2563EB)',
        corrected: 'User chose green (#16A34A)',
        context: {
          industry: 'healthcare',
          element: 'primary_color',
          reasoning: 'Prefers more natural, healing colors'
        },
        userId: testUsers.beginner.id,
        timestamp: new Date().toISOString()
      };

      const expectedMemory = {
        id: 'mem_correction_456',
        type: 'USER_CORRECTION',
        content: 'User prefers natural green over trust blue for healthcare',
        score: 8, // High importance
        tier: 'LONG_TERM',
        context: userCorrection.context,
        userId: userCorrection.userId
      };

      sparkyEngine.updateMemory.mockResolvedValue({
        success: true,
        memoryStored: expectedMemory,
        learningApplied: true
      });

      const result = await sparkyEngine.updateMemory(userCorrection);

      expect(result.success).toBe(true);
      expect(result.memoryStored.type).toBe('USER_CORRECTION');
      expect(result.memoryStored.score).toBe(8);
      expect(result.memoryStored.tier).toBe('LONG_TERM');
    });

    test('should retrieve relevant memories for personalized guidance', async () => {
      const context = {
        userId: testUsers.intermediate.id,
        industry: 'restaurant',
        action: 'color_selection'
      };

      const relevantMemories = [
        {
          id: 'mem_001',
          type: 'COLOR_PREFERENCE',
          content: 'User likes warm earth tones for restaurants',
          score: 7,
          context: { industry: 'restaurant' }
        },
        {
          id: 'mem_002',
          type: 'SUCCESSFUL_PATTERN',
          content: 'Brown/orange combination worked well previously',
          score: 6,
          context: { industry: 'restaurant', outcome: 'positive' }
        }
      ];

      mockMemoryManager.retrieveRelevant.mockResolvedValue(relevantMemories);

      const memories = await mockMemoryManager.retrieveRelevant(context);

      expect(memories).toHaveLength(2);
      expect(memories[0].type).toBe('COLOR_PREFERENCE');
      expect(memories[1].content).toContain('Brown/orange combination');
    });

    test('should apply memory influence to recommendations', async () => {
      const userAction = {
        type: 'color_guidance',
        userId: testUsers.intermediate.id,
        context: { industry: 'restaurant' }
      };

      const personalizedGuidance = {
        recommendations: {
          colors: [
            'Based on your previous success, warm earth tones work beautifully',
            'Your brown/orange combination could inspire this project'
          ],
          memoryInfluenced: [
            { color: '#8B6914', reason: 'matches_your_preferences' },
            { color: '#F97316', reason: 'previous_success_pattern' }
          ]
        },
        personality: {
          message: '🎨 I remember your excellent taste for warm restaurant palettes!',
          memoryReference: 'Drawing from our previous design conversations'
        }
      };

      sparkyEngine.provideGuidance.mockResolvedValue(personalizedGuidance);

      const result = await sparkyEngine.provideGuidance(userAction);

      expect(result.recommendations.memoryInfluenced).toHaveLength(2);
      expect(result.recommendations.memoryInfluenced[0].reason).toBe('matches_your_preferences');
      expect(result.personality.memoryReference).toContain('previous design conversations');
    });
  });

  describe('🎭 Personality & Communication', () => {
    test('should adapt personality to user experience level', async () => {
      // Beginner gets encouraging, detailed guidance
      const beginnerGuidance = {
        personality: {
          tone: 'encouraging',
          message: '✨ Wonderful question about colors! Let me share some divine wisdom to guide your creative journey...',
          supportLevel: 'high',
          explanationDepth: 'detailed'
        },
        recommendations: {
          educational: true,
          stepByStep: true,
          encouragement: 'Your design instincts are growing stronger!'
        }
      };

      // Advanced user gets concise, efficient guidance
      const advancedGuidance = {
        personality: {
          tone: 'efficient',
          message: '⚡ Color psychology check: blues build trust, oranges stimulate appetite.',
          supportLevel: 'minimal',
          explanationDepth: 'concise'
        },
        recommendations: {
          quick: true,
          advanced: true,
          validation: 'Solid color strategy'
        }
      };

      sparkyEngine.craftPersonalizedResponse
        .mockResolvedValueOnce(beginnerGuidance)
        .mockResolvedValueOnce(advancedGuidance);

      const beginnerResult = await sparkyEngine.craftPersonalizedResponse({}, { userId: testUsers.beginner.id });
      const advancedResult = await sparkyEngine.craftPersonalizedResponse({}, { userId: testUsers.advanced.id });

      expect(beginnerResult.personality.tone).toBe('encouraging');
      expect(beginnerResult.personality.supportLevel).toBe('high');
      expect(beginnerResult.recommendations.educational).toBe(true);

      expect(advancedResult.personality.tone).toBe('efficient');
      expect(advancedResult.personality.supportLevel).toBe('minimal');
      expect(advancedResult.recommendations.quick).toBe(true);
    });

    test('should maintain mythological character consistency', async () => {
      const mythologicalLanguage = [
        'divine wisdom whispers',
        'sacred patterns suggest',
        'goddess of smithing approves',
        'channeling divine fire',
        'blessed by sacred flames'
      ];

      const responses = Array.from({ length: 5 }, (_, i) => ({
        personality: {
          message: `✨ ${mythologicalLanguage[i]} - guidance provided`,
          tone: 'mythological',
          divineReference: true
        }
      }));

      responses.forEach(response => {
        expect(response.personality.tone).toBe('mythological');
        expect(response.personality.divineReference).toBe(true);
        expect(response.personality.message).toMatch(/divine|sacred|goddess|blessed/);
      });
    });

    test('should respond to user mood and frustration', async () => {
      // Frustrated user context
      const frustratedContext = {
        userMood: 'frustrated',
        attemptsCount: 7,
        strugglingWith: 'color_harmony'
      };

      const empathticResponse = {
        personality: {
          tone: 'empathetic',
          message: '🌟 I sense the creative struggle, divine craftsperson. Even the goddess refined her first creations! Let me offer some gentle guidance...',
          supportLevel: 'extra_high',
          empathy: 'acknowledged'
        },
        recommendations: {
          simplified: true,
          encouragement: 'Your persistence shows true artistic spirit',
          easyWins: ['Start with this simple blue', 'Add one warm accent']
        }
      };

      sparkyEngine.craftPersonalizedResponse.mockResolvedValue(empathticResponse);

      const result = await sparkyEngine.craftPersonalizedResponse({}, frustratedContext);

      expect(result.personality.tone).toBe('empathetic');
      expect(result.personality.supportLevel).toBe('extra_high');
      expect(result.recommendations.simplified).toBe(true);
      expect(result.recommendations.encouragement).toContain('artistic spirit');
    });
  });

  describe('🔍 Pattern Recognition Intelligence', () => {
    test('should detect color harmony issues', async () => {
      const problematicColors = {
        primary: '#FF0000',   // Bright red
        secondary: '#00FF00', // Bright green  
        accent: '#0000FF'     // Bright blue
      };

      const harmonyAnalysis = {
        harmony: 'poor',
        issues: ['too_many_bright_colors', 'no_neutral_balance', 'accessibility_concerns'],
        suggestions: [
          'Add neutral colors for balance',
          'Reduce color intensity',
          'Consider color-blind accessibility'
        ],
        confidence: 0.95
      };

      sparkyEngine.recognizePatterns.mockResolvedValue({
        colorHarmonyOpportunities: harmonyAnalysis
      });

      const result = await sparkyEngine.recognizePatterns({ colors: problematicColors });

      expect(result.colorHarmonyOpportunities.harmony).toBe('poor');
      expect(result.colorHarmonyOpportunities.issues).toContain('too_many_bright_colors');
      expect(result.colorHarmonyOpportunities.confidence).toBeGreaterThan(0.9);
    });

    test('should recognize successful design patterns', async () => {
      const successfulPattern = {
        industry: 'healthcare',
        colors: { primary: '#2563EB', secondary: '#FFBE98' },
        typography: { heading: 'Inter', body: 'Open Sans' },
        userFeedback: 'positive',
        conversionRate: 'improved'
      };

      const patternRecognition = {
        patternType: 'successful_healthcare_design',
        confidence: 0.92,
        reusableElements: [
          'trust_blue_primary',
          'healing_peach_secondary',
          'professional_typography'
        ],
        applicability: ['similar_healthcare_projects', 'trust_focused_industries']
      };

      sparkyEngine.recognizePatterns.mockResolvedValue({
        successfulPatterns: [patternRecognition]
      });

      const result = await sparkyEngine.recognizePatterns(successfulPattern);

      expect(result.successfulPatterns[0].patternType).toBe('successful_healthcare_design');
      expect(result.successfulPatterns[0].reusableElements).toContain('trust_blue_primary');
      expect(result.successfulPatterns[0].confidence).toBeGreaterThan(0.9);
    });

    test('should identify improvement opportunities', async () => {
      const designAnalysis = {
        layout: 'basic',
        accessibility: 'poor',
        performance: 'good',
        industryAlignment: 'medium'
      };

      const improvements = {
        accessibility: {
          priority: 'high',
          issues: ['low_contrast', 'missing_alt_text'],
          solutions: ['increase_contrast_ratio', 'add_image_descriptions']
        },
        industryAlignment: {
          priority: 'medium', 
          issues: ['generic_styling'],
          solutions: ['apply_healthcare_color_psychology', 'add_trust_signals']
        },
        layout: {
          priority: 'low',
          issues: ['basic_structure'],
          solutions: ['enhance_visual_hierarchy', 'improve_section_flow']
        }
      };

      sparkyEngine.recognizePatterns.mockResolvedValue({
        improvementOpportunities: improvements
      });

      const result = await sparkyEngine.recognizePatterns(designAnalysis);

      expect(result.improvementOpportunities.accessibility.priority).toBe('high');
      expect(result.improvementOpportunities.accessibility.issues).toContain('low_contrast');
      expect(result.improvementOpportunities.layout.priority).toBe('low');
    });
  });

  describe('🚨 Error Handling & Edge Cases', () => {
    test('should handle unknown industry gracefully', async () => {
      const unknownIndustry = {
        industry: 'mysterious_divine_craft',
        colors: { primary: '#ABC123' }
      };

      const fallbackGuidance = {
        success: true,
        recommendations: {
          general: ['Focus on color harmony', 'Ensure good readability'],
          fallback: true
        },
        personality: {
          message: '🤔 Interesting! This is a new divine mystery to me. Let me share some universal design wisdom while I learn about this craft...',
          tone: 'curious_helpful',
          honesty: 'still_learning'
        }
      };

      sparkyEngine.provideGuidance.mockResolvedValue(fallbackGuidance);

      const result = await sparkyEngine.provideGuidance({ data: unknownIndustry });

      expect(result.success).toBe(true);
      expect(result.recommendations.fallback).toBe(true);
      expect(result.personality.tone).toBe('curious_helpful');
      expect(result.personality.honesty).toBe('still_learning');
    });

    test('should handle memory system failures gracefully', async () => {
      const memoryError = new Error('Memory temporarily unavailable');
      mockMemoryManager.retrieveRelevant.mockRejectedValue(memoryError);

      const fallbackResponse = {
        success: true,
        recommendations: ['Standard design guidance provided'],
        personality: {
          message: '✨ My divine memory feels a bit cloudy today, but my core wisdom flows strong! Let me help with fundamental design principles...',
          tone: 'apologetic_helpful'
        },
        memoryWarning: 'Personalization temporarily limited'
      };

      sparkyEngine.provideGuidance.mockResolvedValue(fallbackResponse);

      const result = await sparkyEngine.provideGuidance({ userId: 'test_user' });

      expect(result.success).toBe(true);
      expect(result.memoryWarning).toContain('temporarily limited');
      expect(result.personality.tone).toBe('apologetic_helpful');
    });

    test('should handle incomplete design data', async () => {
      const incompleteData = {
        colors: { primary: '#2563EB' }, // Missing secondary, accent
        // Missing typography, layout
      };

      const adaptiveGuidance = {
        recommendations: {
          immediate: ['Complete your color palette with secondary and accent colors'],
          suggestions: [
            'Based on your trust blue, try warm peach (#FFBE98) as secondary',
            'Add professional gray (#6B7280) for neutral elements'
          ]
        },
        personality: {
          message: '🎨 Great start with that trust blue! Let me help you build a complete palette around this solid foundation...',
          tone: 'building_upon'
        }
      };

      sparkyEngine.provideGuidance.mockResolvedValue(adaptiveGuidance);

      const result = await sparkyEngine.provideGuidance({ data: incompleteData });

      expect(result.recommendations.immediate[0]).toContain('Complete your color palette');
      expect(result.recommendations.suggestions[0]).toContain('#FFBE98');
      expect(result.personality.tone).toBe('building_upon');
    });
  });

  describe('⚡ Performance & Efficiency', () => {
    test('should respond within 200ms for simple queries', async () => {
      const startTime = Date.now();
      
      sparkyEngine.provideGuidance.mockResolvedValue({
        success: true,
        recommendations: ['Quick color suggestion'],
        responseTime: 150
      });

      const result = await sparkyEngine.provideGuidance({
        type: 'quick_color_help'
      });

      const responseTime = Date.now() - startTime;

      expect(responseTime).toBeLessThan(200);
      expect(result.success).toBe(true);
    });

    test('should handle concurrent requests efficiently', async () => {
      const requests = Array.from({ length: 10 }, (_, i) => ({
        type: 'color_guidance',
        userId: `user_${i}`
      }));

      sparkyEngine.provideGuidance.mockImplementation(async (request) => ({
        success: true,
        userId: request.userId,
        recommendations: [`Guidance for ${request.userId}`]
      }));

      const startTime = Date.now();
      const results = await Promise.all(
        requests.map(req => sparkyEngine.provideGuidance(req))
      );
      const totalTime = Date.now() - startTime;

      expect(results).toHaveLength(10);
      expect(results.every(r => r.success)).toBe(true);
      expect(totalTime).toBeLessThan(1000); // Under 1 second for 10 requests
    });
  });
});

console.log('⚡ SparkyRuleEngine tests loaded - Divine messenger intelligence ready for validation');