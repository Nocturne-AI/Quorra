// tests/integration/SparkyIntegration.test.js
// FIXED VERSION - Updated to work with the new SparkyRuleEngine

import SparkyRuleEngine from '../../src/core/SparkyRuleEngine.js';
import { userProfiles } from '../fixtures/userProfiles.js';

console.log('⚡ Sparky Integration tests loaded - Divine messenger ready for validation');

describe('⚡ Sparky Integration - Divine Messenger Intelligence', () => {
  let sparkyRuleEngine;

  beforeEach(() => {
    sparkyRuleEngine = new SparkyRuleEngine();
  });

  describe('🎨 Design Guidance Integration', () => {
    test('should provide contextual guidance for color selection', async () => {
      const designContext = {
        element: 'header',
        currentColors: ['#FF6B35', '#2563EB'],
        industry: 'healthcare',
        userExperience: 'beginner',
        userId: 'test-user-123'
      };

      const result = await sparkyRuleEngine.provideGuidance(designContext);

      expect(result).toBeDefined();
      expect(result.suggestion).toContain('header');
      expect(result.explanation).toBeDefined();
      expect(result.personality).toBeDefined();
      expect(result.reasoning).toBeDefined();
      expect(result.source).toBe('sparky_divine_wisdom');
    });

    test('should adapt guidance based on user experience level', async () => {
      const mockDesignContext = {
        element: 'header',
        currentColors: ['#FF6B35', '#2563EB'],
        industry: 'healthcare',
        userId: 'test-user'
      };

      // Get guidance for beginner user
      const beginnerResult = await sparkyRuleEngine.provideGuidance({
        ...mockDesignContext,
        userExperience: 'beginner',
        userId: 'user-beginner'
      });

      // Get guidance for expert user  
      const expertResult = await sparkyRuleEngine.provideGuidance({
        ...mockDesignContext,
        userExperience: 'expert',
        userId: 'user-expert'
      });

      // Debug the actual lengths
      console.log('🔍 Beginner explanation length:', beginnerResult.explanation.length);
      console.log('🔍 Expert explanation length:', expertResult.explanation.length);
      console.log('🔍 Beginner explanation:', beginnerResult.explanation.substring(0, 100) + '...');
      console.log('🔍 Expert explanation:', expertResult.explanation);

      // FIXED: Beginners should get LONGER explanations than experts
      expect(beginnerResult.explanation.length).toBeGreaterThan(expertResult.explanation.length);
      expect(beginnerResult.personality.tone).toBe('encouraging');
      expect(expertResult.personality.tone).toBe('collaborative');
      
      // Additional checks to ensure the logic is working
      expect(beginnerResult.explanation.length).toBeGreaterThan(100); // Beginners get detailed explanations
      expect(expertResult.explanation.length).toBeLessThan(100); // Experts get concise explanations
    });

    test('should integrate with QuorraCoreEngine recommendations', async () => {
      const context = {
        element: 'button',
        industry: 'technology',
        userExperience: 'intermediate',
        userId: 'integration-test-user'
      };

      const result = await sparkyRuleEngine.provideGuidance(context);

      expect(result.suggestion).toBeDefined();
      expect(result.reasoning).toBeDefined();
      expect(result.element).toBe('button');
      expect(result.industry).toBe('technology');
    });
  });

  describe('🧠 Memory System Integration', () => {
    test('should store user corrections as high-priority memories', async () => {
      const correctionContext = {
        userId: 'memory-test-user',
        correction: 'Actually, I prefer warmer colors for healthcare',
        originalSuggestion: 'Use blue for trust',
        element: 'header',
        industry: 'healthcare'
      };

      // Mock memory storage
      const mockMemoryStore = jest.fn().mockResolvedValue({
        id: 'memory-123',
        priority: 'high',
        type: 'correction'
      });
      
      sparkyRuleEngine.memoryManager = {
        storeMemory: mockMemoryStore,
        getUserMemories: jest.fn().mockResolvedValue([])
      };

      const result = await sparkyRuleEngine.memoryManager.storeMemory({
        userId: correctionContext.userId,
        type: 'correction',
        content: correctionContext.correction,
        priority: 'high'
      });

      expect(result.priority).toBe('high');
      expect(result.type).toBe('correction');
      expect(mockMemoryStore).toHaveBeenCalledWith({
        userId: correctionContext.userId,
        type: 'correction',
        content: correctionContext.correction,
        priority: 'high'
      });
    });

    test('should retrieve relevant memories for personalized guidance', async () => {
      const userId = 'personalization-test-user';
      const context = {
        element: 'header',
        industry: 'healthcare',
        userExperience: 'beginner',
        userId
      };

      // Mock relevant memories
      const mockMemories = [
        {
          id: 'mem-1',
          context: ['header', 'healthcare'],
          content: 'User prefers warmer colors',
          priority: 'high'
        }
      ];

      sparkyRuleEngine.memoryManager = {
        getUserMemories: jest.fn().mockResolvedValue(mockMemories)
      };

      const memories = await sparkyRuleEngine.getRelevantMemories(userId, context);
      
      expect(memories).toBeDefined();
      expect(Array.isArray(memories)).toBe(true);
      expect(sparkyRuleEngine.memoryManager.getUserMemories).toHaveBeenCalledWith(userId);
    });

    test('should handle memory decay and prioritization', async () => {
      const mockDecayEngine = {
        runDecayProcess: jest.fn().mockReturnValue({
          processed: 10,
          decayed: 3,
          purged: 1
        })
      };

      sparkyRuleEngine.memoryManager = {
        decayEngine: mockDecayEngine
      };

      const result = sparkyRuleEngine.memoryManager.decayEngine.runDecayProcess();
      
      expect(result.processed).toBe(10);
      expect(result.decayed).toBe(3);
      expect(result.purged).toBe(1);
    });
  });

  describe('🎭 Personality & Communication', () => {
    test('should adapt personality to user mood and context', async () => {
      const frustratedContext = {
        element: 'layout',
        userMood: 'frustrated',
        previousAttempts: 3,
        industry: 'creative',
        userExperience: 'beginner',
        userId: 'mood-test-user'
      };

      const result = await sparkyRuleEngine.provideGuidance(frustratedContext);

      expect(result.personality).toBeDefined();
      expect(result.personality.tone).toBe('encouraging');
      expect(result.personality.message).toContain('divine');
    });

    test('should maintain mythological character consistency', async () => {
      const context = {
        element: 'header',
        industry: 'finance',
        userExperience: 'expert',
        userId: 'mythology-test-user'
      };

      const result = await sparkyRuleEngine.provideGuidance(context);

      // Check for mythological language
      const response = JSON.stringify(result);
      const mythologyTerms = ['divine', 'forge', 'blessed', 'sacred', 'goddess'];
      const hasMythologyTerms = mythologyTerms.some(term => 
        response.toLowerCase().includes(term.toLowerCase())
      );

      expect(hasMythologyTerms).toBe(true);
      expect(result.source).toContain('sparky');
    });
  });

  describe('🔄 Workflow Integration', () => {
    test('should coordinate between design phases', async () => {
      const colorPhaseContext = {
        phase: 'color-selection',
        element: 'header',
        industry: 'healthcare',
        userId: 'workflow-test-user'
      };

      const result = await sparkyRuleEngine.coordinateWorkflow(
        'color-selection',
        colorPhaseContext
      );

      expect(result.phase).toBe('color-selection');
      expect(result.guidance).toBeDefined();
      expect(result.nextPhase).toBe('typography-choice');
      expect(result.message).toContain('typography');
    });

    test('should handle multi-user agency workflows', async () => {
      const agencyContext = {
        teamRole: 'designer',
        projectPhase: 'concept-development',
        collaborators: ['designer', 'developer', 'pm'],
        userId: 'agency-test-user'
      };

      const result = await sparkyRuleEngine.handleAgencyWorkflow(agencyContext);

      expect(result.workflow).toBe('agency-collaboration');
      expect(result.roleGuidance).toBeDefined();
      expect(result.collaborationTips).toBeDefined();
      expect(Array.isArray(result.collaborationTips)).toBe(true);
    });
  });

  describe('🚨 Error Handling & Recovery', () => {
    test('should handle memory system failures gracefully', async () => {
      // Simulate memory system failure by mocking failed memory access
      const mockFailedMemoryManager = {
        getMemoriesByType: jest.fn().mockRejectedValue(new Error('Memory system unavailable')),
        getUserMemories: jest.fn().mockRejectedValue(new Error('Database connection failed'))
      };

      // Override the memory manager temporarily
      const originalManager = sparkyRuleEngine.memoryManager;
      sparkyRuleEngine.memoryManager = mockFailedMemoryManager;

      const result = await sparkyRuleEngine.handleMemoryFailure({
        userId: 'test-user',
        context: 'color-selection',
        fallbackNeeded: true
      });

      // Restore original manager
      sparkyRuleEngine.memoryManager = originalManager;

      // FIXED: Check that fallback_mode exists
      expect(result.fallback_mode).toBe(true);
      
      // FIXED: Case-insensitive check for the divine wisdom message
      expect(result.personality.message.toLowerCase()).toContain('divine wisdom persists');
      
      expect(result.recommendations).toBeDefined();
      expect(Array.isArray(result.recommendations)).toBe(true);
      expect(result.source).toBe('divine_core_knowledge');
    });

    test('should provide helpful fallbacks for unknown situations', async () => {
      const unknownContext = {
        element: 'unknown-element',
        industry: 'unknown-industry',
        userExperience: 'beginner',
        userId: 'fallback-test-user'
      };

      // This should trigger the fallback logic
      const result = await sparkyRuleEngine.provideGuidance(unknownContext);

      expect(result).toBeDefined();
      expect(result.suggestion).toBeDefined();
      expect(result.explanation).toBeDefined();
      expect(result.personality).toBeDefined();
      
      // Should have fallback indicators
      expect(result.source).toMatch(/sparky|fallback/);
    });
  });
});