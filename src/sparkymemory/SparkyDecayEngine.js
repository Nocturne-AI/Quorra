/**
 * SPARKY MEMORY DECAY ENGINE
 * Automatically manages memory lifecycle with intelligent scoring and decay
 */

class SparkyDecayEngine {
  constructor(options = {}) {
    // Memory tier configuration
    this.config = {
      memoryTiers: {
        PERMANENT: { threshold: 8, retention: 'permanent', decayRate: 0 },
        LONG_TERM: { threshold: 5, retention: '6_months', decayRate: 0.1 },
        MEDIUM_TERM: { threshold: 2, retention: '1_month', decayRate: 0.3 },
        DISPOSABLE: { threshold: 0, retention: '1_session', decayRate: 1.0 }
      },
      
      // Scoring weights for different signal types
      weights: {
        userCorrections: 3,
        emotionalIntensity: 3,
        multipleReferences: 3,
        workflowImpact: 3,
        explicitGoals: 3,
        buildingOnIdeas: 2,
        technicalPreferences: 2,
        problemPatterns: 2,
        personalContext: 2,
        casualMentions: 1,
        backgroundContext: 1,
        outdatedInfo: -2,
        contradictions: -2,
        resolvedIssues: -2
      },
      
      // Decay system configuration
      decay: {
        baseDecayRate: 0.05,
        accessBoost: 0.2,
        reinforcementBoost: 0.5,
        minimumScore: -5,
        decayInterval: 7 * 24 * 60 * 60 * 1000, // 1 week in milliseconds
        protectedTypes: ['BREAKTHROUGH_MOMENT', 'CORRECTION_DETECTED']
      },
      
      stalenessThresholdDays: 30,
      ...options
    };

    // Memory storage and tracking
    this.memoryStore = new Map();
    this.conversationHistory = new Map();
    this.keyPhraseTracker = new Map();
    
    // Keywords for special detection
    this.breakthroughKeywords = [
      'breakthrough', 'realized', 'discovered', 'finally understand',
      'changed everything', 'game changer', 'aha moment', 'clicked'
    ];

    this.emotionalIntensityWords = [
      'love', 'hate', 'amazing', 'terrible', 'frustrated', 'excited',
      'brilliant', 'stupid', 'revolutionary', 'impossible', 'perfect'
    ];

    // Start the decay engine
    this.startDecayEngine();
  }

  /**
   * DECAY ENGINE - Runs automatically every week
   */
  startDecayEngine() {
    setInterval(() => {
      this.runDecayProcess();
    }, this.config.decay.decayInterval);
  }

  runDecayProcess() {
    const now = new Date();
    const decaysApplied = [];

    for (const [memoryId, memory] of this.memoryStore.entries()) {
      const daysSinceLastAccess = (now - memory.lastAccessed) / (24 * 60 * 60 * 1000);
      const weeksSinceLastAccess = daysSinceLastAccess / 7;

      // Get decay rate for this memory's tier
      const tierDecayRate = this.config.memoryTiers[memory.tier]?.decayRate || this.config.decay.baseDecayRate;
      const decayAmount = tierDecayRate * weeksSinceLastAccess;

      // Check if memory is protected from decay
      const isProtected = memory.signals.some(signal =>
        this.config.decay.protectedTypes.includes(signal)
      );

      if (!isProtected) {
        const oldScore = memory.currentScore;
        
        // Apply decay
        memory.currentScore = Math.max(
          memory.currentScore - decayAmount,
          this.config.decay.minimumScore
        );

        // Update tier if score changed significantly
        const newTier = this.determineTier(memory.currentScore);
        if (newTier !== memory.tier) {
          memory.tier = newTier;
          memory.tierChangeDate = now;
        }

        // Mark for deletion if score too low
        if (memory.currentScore <= this.config.decay.minimumScore) {
          memory.markedForDeletion = true;
          memory.deletionDate = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000)); // 1 week grace period
        }

        decaysApplied.push({
          memoryId,
          oldScore,
          newScore: memory.currentScore,
          oldTier: memory.tier,
          newTier,
          decayAmount,
          weeksSinceAccess: weeksSinceLastAccess
        });
      }
    }

    // Clean up marked memories
    const purgedCount = this.purgeMarkedMemories().length;
    
    return {
      processed: this.memoryStore.size,
      decayed: decaysApplied.length,
      purged: purgedCount,
      timestamp: now,
      details: decaysApplied
    };
  }

  /**
   * MEMORY ACCESS - Boosts memory when retrieved
   */
  accessMemory(memoryId) {
    if (!this.memoryStore.has(memoryId)) return null;

    const memory = this.memoryStore.get(memoryId);
    memory.lastAccessed = new Date();
    memory.accessCount += 1;
    
    // Boost score for being accessed
    memory.currentScore += this.config.decay.accessBoost;

    // Update tier if boosted enough
    const newTier = this.determineTier(memory.currentScore);
    if (newTier !== memory.tier) {
      memory.tier = newTier;
      memory.tierChangeDate = new Date();
    }

    // Remove deletion mark if present
    if (memory.markedForDeletion) {
      memory.markedForDeletion = false;
      delete memory.deletionDate;
    }

    return memory;
  }

  /**
   * MEMORY REINFORCEMENT - Strengthens related memories
   */
  reinforceMemory(memoryId, reinforcementStrength = 1.0) {
    if (!this.memoryStore.has(memoryId)) return null;

    const memory = this.memoryStore.get(memoryId);
    const boostAmount = this.config.decay.reinforcementBoost * reinforcementStrength;
    
    memory.currentScore += boostAmount;
    memory.lastReinforced = new Date();
    memory.reinforcementCount += 1;

    // Update tier if reinforced enough
    const newTier = this.determineTier(memory.currentScore);
    if (newTier !== memory.tier) {
      memory.tier = newTier;
      memory.tierChangeDate = new Date();
    }

    return memory;
  }

  /**
   * MEMORY SCORING - Core intelligence for determining importance
   */
  scoreConversationData(data) {
    let score = 0;
    const analysis = {
      id: data.id || null,
      text: data.text,
      timestamp: data.timestamp,
      userId: data.userId,
      rawScore: 0,
      tier: null,
      signals: [],
      scoreBreakdown: {}
    };

    this.updateConversationHistory(data);

    // HIGH VALUE SIGNALS (3 points each)
    const corrections = this.checkUserCorrections(data);
    if (corrections) {
      score += corrections * this.config.weights.userCorrections;
      analysis.signals.push('CORRECTION_DETECTED');
      analysis.scoreBreakdown.corrections = corrections * this.config.weights.userCorrections;
    }

    const emotionalIntensity = this.checkEmotionalIntensity(data);
    if (emotionalIntensity) {
      score += emotionalIntensity * this.config.weights.emotionalIntensity;
      analysis.signals.push('EMOTIONAL_INTENSITY');
      analysis.scoreBreakdown.emotionalIntensity = emotionalIntensity * this.config.weights.emotionalIntensity;
    }

    const multipleRefs = this.checkMultipleReferences(data);
    if (multipleRefs) {
      score += multipleRefs * this.config.weights.multipleReferences;
      analysis.signals.push('MULTIPLE_REFERENCES');
      analysis.scoreBreakdown.multipleReferences = multipleRefs * this.config.weights.multipleReferences;
    }

    const workflowImpact = this.checkWorkflowImpact(data);
    if (workflowImpact) {
      score += workflowImpact * this.config.weights.workflowImpact;
      analysis.signals.push('WORKFLOW_IMPACT');
      analysis.scoreBreakdown.workflowImpact = workflowImpact * this.config.weights.workflowImpact;
    }

    const explicitGoals = this.checkExplicitGoals(data);
    if (explicitGoals) {
      score += explicitGoals * this.config.weights.explicitGoals;
      analysis.signals.push('EXPLICIT_GOALS');
      analysis.scoreBreakdown.explicitGoals = explicitGoals * this.config.weights.explicitGoals;
    }

    // MEDIUM VALUE SIGNALS (2 points each)
    const buildingOnIdeas = this.checkBuildingOnIdeas(data);
    if (buildingOnIdeas) {
      score += buildingOnIdeas * this.config.weights.buildingOnIdeas;
      analysis.signals.push('BUILDING_ON_IDEAS');
      analysis.scoreBreakdown.buildingOnIdeas = buildingOnIdeas * this.config.weights.buildingOnIdeas;
    }

    const techPrefs = this.checkTechnicalPreferences(data);
    if (techPrefs) {
      score += techPrefs * this.config.weights.technicalPreferences;
      analysis.signals.push('TECHNICAL_PREFERENCES');
      analysis.scoreBreakdown.technicalPreferences = techPrefs * this.config.weights.technicalPreferences;
    }

    // DEMOTION TRIGGERS (negative points)
    const outdatedInfo = this.checkOutdatedInfo(data);
    if (outdatedInfo) {
      score += outdatedInfo * this.config.weights.outdatedInfo;
      analysis.signals.push('OUTDATED_INFO');
      analysis.scoreBreakdown.outdatedInfo = outdatedInfo * this.config.weights.outdatedInfo;
    }

    const contradictions = this.checkContradictions(data);
    if (contradictions) {
      score += contradictions * this.config.weights.contradictions;
      analysis.signals.push('CONTRADICTION_DETECTED');
      analysis.scoreBreakdown.contradictions = contradictions * this.config.weights.contradictions;
    }

    // SPECIAL RULES
    if (this.isBreakthroughMoment(data)) {
      score = Math.max(score, this.config.memoryTiers.PERMANENT.threshold);
      analysis.signals.push('BREAKTHROUGH_MOMENT');
    }

    analysis.rawScore = score;
    analysis.tier = this.determineTier(score);
    return analysis;
  }

  /**
   * PATTERN DETECTION METHODS
   */
  checkUserCorrections(data) {
    const correctionPatterns = [
      /actually,?\s*i\s*(prefer|like|want|need)/i,
      /no,?\s*i\s*(prefer|like|want|need)/i,
      /that's not right/i,
      /i'd rather/i,
      /instead of.*i want/i
    ];
    return correctionPatterns.some(pattern => pattern.test(data.text)) ? 1 : 0;
  }

  checkEmotionalIntensity(data) {
    const text = data.text.toLowerCase();
    const emotionalWords = this.emotionalIntensityWords.filter(word => text.includes(word));
    const exclamationCount = (data.text.match(/!/g) || []).length;
    return (emotionalWords.length >= 2 || exclamationCount >= 2) ? 1 : 0;
  }

  checkMultipleReferences(data) {
    const userId = data.userId;
    const userHistory = this.conversationHistory.get(userId) || [];
    
    // Check if this topic has been mentioned before
    const keywords = this.extractKeywords(data.text);
    let referenceCount = 0;
    
    for (const historyItem of userHistory.slice(-10)) { // Last 10 conversations
      const historyKeywords = this.extractKeywords(historyItem.text);
      const overlap = keywords.filter(keyword => historyKeywords.includes(keyword));
      if (overlap.length > 0) referenceCount++;
    }
    
    return referenceCount >= 2 ? 1 : 0;
  }

  checkWorkflowImpact(data) {
    const workflowPatterns = [
      /i work best/i,
      /helps me when/i,
      /i prefer.*because/i,
      /don't like.*when/i,
      /frustrating when/i,
      /easier if/i
    ];
    return workflowPatterns.some(pattern => pattern.test(data.text)) ? 1 : 0;
  }

  checkExplicitGoals(data) {
    const goalPatterns = [
      /i want to/i,
      /my goal is/i,
      /i'm trying to/i,
      /i need to/i,
      /planning to/i,
      /hoping to/i
    ];
    return goalPatterns.some(pattern => pattern.test(data.text)) ? 1 : 0;
  }

  checkBuildingOnIdeas(data) {
    const buildingPatterns = [
      /also/i,
      /and another thing/i,
      /speaking of/i,
      /that reminds me/i,
      /along those lines/i
    ];
    return buildingPatterns.some(pattern => pattern.test(data.text)) ? 1 : 0;
  }

  checkTechnicalPreferences(data) {
    const techPatterns = [
      /i prefer.*css/i,
      /i like.*framework/i,
      /always use/i,
      /never use/i,
      /better than/i,
      /instead of.*i use/i
    ];
    return techPatterns.some(pattern => pattern.test(data.text)) ? 1 : 0;
  }

  checkOutdatedInfo(data) {
    // Check for mentions of outdated technologies or practices
    const outdatedPatterns = [
      /table.*layout/i,
      /font.*tag/i,
      /flash/i,
      /internet explorer/i
    ];
    return outdatedPatterns.some(pattern => pattern.test(data.text)) ? 1 : 0;
  }

  checkContradictions(data) {
    const userId = data.userId;
    const userHistory = this.conversationHistory.get(userId) || [];
    
    // Simple contradiction detection - look for opposing statements
    const currentText = data.text.toLowerCase();
    
    for (const historyItem of userHistory.slice(-5)) { // Check last 5 conversations
      const historyText = historyItem.text.toLowerCase();
      
      // Check for direct contradictions
      if (currentText.includes('i prefer') && historyText.includes('i don\'t like')) {
        const currentPref = this.extractPreference(currentText);
        const historyPref = this.extractPreference(historyText);
        if (currentPref && historyPref && currentPref === historyPref) {
          return 1;
        }
      }
    }
    
    return 0;
  }

  isBreakthroughMoment(data) {
    const text = data.text.toLowerCase();
    return this.breakthroughKeywords.some(keyword => text.includes(keyword)) &&
           this.checkEmotionalIntensity(data);
  }

  /**
   * UTILITY METHODS
   */
  determineTier(score) {
    const tiers = this.config.memoryTiers;
    if (score >= tiers.PERMANENT.threshold) return 'PERMANENT';
    if (score >= tiers.LONG_TERM.threshold) return 'LONG_TERM';
    if (score >= tiers.MEDIUM_TERM.threshold) return 'MEDIUM_TERM';
    return 'DISPOSABLE';
  }

  purgeMarkedMemories() {
    const now = new Date();
    const purged = [];

    for (const [memoryId, memory] of this.memoryStore.entries()) {
      if (memory.markedForDeletion && memory.deletionDate && now >= memory.deletionDate) {
        this.memoryStore.delete(memoryId);
        purged.push(memoryId);
      }
    }

    return purged;
  }

  storeMemory(analysis, memoryId = null) {
    const id = memoryId || `mem_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date();

    const memory = {
      id,
      userId: analysis.userId,
      originalScore: analysis.rawScore,
      currentScore: analysis.rawScore,
      tier: analysis.tier,
      text: analysis.text,
      signals: analysis.signals,
      scoreBreakdown: analysis.scoreBreakdown,
      createdDate: now,
      lastAccessed: now,
      lastReinforced: now,
      tierChangeDate: now,
      accessCount: 0,
      reinforcementCount: 0,
      markedForDeletion: false,
      deletionDate: null
    };

    this.memoryStore.set(id, memory);
    return memory;
  }

  updateConversationHistory(data) {
    const userId = data.userId;
    const history = this.conversationHistory.get(userId) || [];
    
    history.push({
      timestamp: data.timestamp,
      text: data.text,
      id: data.id
    });
    
    // Keep last 50 conversations
    if (history.length > 50) {
      history.shift();
    }
    
    this.conversationHistory.set(userId, history);
  }

  extractKeywords(text) {
    // Simple keyword extraction
    const words = text.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3);
    
    return [...new Set(words)]; // Remove duplicates
  }

  extractPreference(text) {
    // Extract what the user prefers from text like "i prefer blue"
    const prefMatch = text.match(/i (?:prefer|like) (\w+)/i);
    return prefMatch ? prefMatch[1] : null;
  }

  getDecayStats() {
    const stats = {
      totalMemories: this.memoryStore.size,
      byTier: { PERMANENT: 0, LONG_TERM: 0, MEDIUM_TERM: 0, DISPOSABLE: 0 },
      markedForDeletion: 0,
      averageScore: 0,
      oldestMemory: null,
      mostAccessed: null
    };

    let totalScore = 0;
    let oldestDate = new Date();
    let mostAccessedCount = 0;

    for (const memory of this.memoryStore.values()) {
      stats.byTier[memory.tier] += 1;
      if (memory.markedForDeletion) stats.markedForDeletion += 1;
      totalScore += memory.currentScore;

      if (memory.createdDate < oldestDate) {
        oldestDate = memory.createdDate;
        stats.oldestMemory = memory.id;
      }

      if (memory.accessCount > mostAccessedCount) {
        mostAccessedCount = memory.accessCount;
        stats.mostAccessed = memory.id;
      }
    }

    stats.averageScore = totalScore / this.memoryStore.size || 0;
    return stats;
  }

  // Manual methods for testing and management
  forceDecay() {
    return this.runDecayProcess();
  }

  getMemory(memoryId) {
    return this.memoryStore.get(memoryId);
  }

  getAllMemories(userId = null) {
    if (userId) {
      return Array.from(this.memoryStore.values()).filter(memory => memory.userId === userId);
    }
    return Array.from(this.memoryStore.values());
  }

  deleteMemory(memoryId) {
    return this.memoryStore.delete(memoryId);
  }

  clearUserMemories(userId) {
    const deleted = [];
    for (const [memoryId, memory] of this.memoryStore.entries()) {
      if (memory.userId === userId) {
        this.memoryStore.delete(memoryId);
        deleted.push(memoryId);
      }
    }
    return deleted;
  }
}

export default SparkyDecayEngine;