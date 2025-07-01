/**
 * QUORRA MEMORY TYPES & CLASSIFICATIONS
 * Sacred memory classification system for divine intelligence
 * 
 * Features:
 * - Divine memory tier system with retention policies
 * - Sacred signal classification for importance detection
 * - Memory category system for intelligent organization
 * - Divine blessing levels and thresholds
 * - Sacred pattern recognition types
 * - Intelligent learning classifications
 */

/**
 * 🔥 DIVINE MEMORY TIERS
 * Sacred hierarchy of memory importance and retention
 */
export const MemoryTiers = {
  PERMANENT: {
    name: 'Permanent',
    threshold: 8,
    retention: 'permanent',
    decayRate: 0,
    value: 4,
    description: 'Divine memories blessed with eternal significance',
    color: '#FF6B35', // Divine fire
    icon: '🔥'
  },
  
  LONG_TERM: {
    name: 'Long Term',
    threshold: 5,
    retention: '6_months',
    decayRate: 0.1,
    value: 3,
    description: 'Sacred memories with lasting importance',
    color: '#CD7F32', // Sacred bronze
    icon: '⚡'
  },
  
  MEDIUM_TERM: {
    name: 'Medium Term',
    threshold: 2,
    retention: '1_month',
    decayRate: 0.3,
    value: 2,
    description: 'Blessed memories with moderate significance',
    color: '#E77C47', // Sacred copper
    icon: '🌟'
  },
  
  DISPOSABLE: {
    name: 'Disposable',
    threshold: 0,
    retention: '1_session',
    decayRate: 1.0,
    value: 1,
    description: 'Temporary memories for immediate context',
    color: '#6B7280', // Sacred gray
    icon: '💫'
  }
};

/**
 * ⚡ SACRED MEMORY SIGNALS
 * Divine patterns that indicate memory importance
 */
export const MemorySignals = {
  // HIGH IMPORTANCE SIGNALS (3+ points)
  USER_CORRECTION: {
    name: 'User Correction',
    weight: 3,
    description: 'User corrected or clarified a preference',
    priority: 'critical',
    category: 'user_feedback',
    divineBlessing: '🔥 Sacred Correction'
  },
  
  BREAKTHROUGH_MOMENT: {
    name: 'Breakthrough Moment',
    weight: 3,
    description: 'User had an "aha" moment or breakthrough',
    priority: 'critical',
    category: 'learning',
    divineBlessing: '⚡ Divine Revelation'
  },
  
  TECHNICAL_PREFERENCES: {
    name: 'Technical Preferences',
    weight: 3,
    description: 'Strong technical preference expressed',
    priority: 'high',
    category: 'preferences',
    divineBlessing: '🛠️ Sacred Craft'
  },
  
  // MEDIUM IMPORTANCE SIGNALS (2 points)
  DESIGN_PREFERENCES: {
    name: 'Design Preferences',
    weight: 2,
    description: 'User expressed design style preferences',
    priority: 'high',
    category: 'preferences',
    divineBlessing: '🎨 Creative Blessing'
  },
  
  INDUSTRY_CONTEXT: {
    name: 'Industry Context',
    weight: 2,
    description: 'User provided industry or business context',
    priority: 'high',
    category: 'context',
    divineBlessing: '🏢 Professional Insight'
  },
  
  PERFORMANCE_CONCERN: {
    name: 'Performance Concern',
    weight: 2,
    description: 'User expressed performance or speed concerns',
    priority: 'high',
    category: 'technical',
    divineBlessing: '🚀 Speed Blessing'
  },
  
  PROJECT_CONTEXT: {
    name: 'Project Context',
    weight: 2,
    description: 'Information about current project or goals',
    priority: 'medium',
    category: 'context',
    divineBlessing: '🎯 Project Guidance'
  },
  
  // LEARNING & GROWTH SIGNALS (1-2 points)
  LEARNING_MOMENT: {
    name: 'Learning Moment',
    weight: 1.5,
    description: 'User learned something new or gained understanding',
    priority: 'medium',
    category: 'learning',
    divineBlessing: '📚 Knowledge Blessing'
  },
  
  PATTERN_RECOGNITION: {
    name: 'Pattern Recognition',
    weight: 1.5,
    description: 'Repeated behavior or preference pattern detected',
    priority: 'medium',
    category: 'patterns',
    divineBlessing: '🔍 Pattern Blessing'
  },
  
  EMOTIONAL_INTENSITY: {
    name: 'Emotional Intensity',
    weight: 1.5,
    description: 'Strong emotional response or excitement',
    priority: 'medium',
    category: 'emotional',
    divineBlessing: '💖 Emotional Connection'
  },
  
  // CONTEXTUAL SIGNALS (1 point)
  WORKFLOW_IMPACT: {
    name: 'Workflow Impact',
    weight: 1,
    description: 'Information affecting user workflow or process',
    priority: 'medium',
    category: 'workflow',
    divineBlessing: '⚙️ Flow Blessing'
  },
  
  GOAL_STATEMENT: {
    name: 'Goal Statement',
    weight: 1,
    description: 'User stated specific goals or objectives',
    priority: 'medium',
    category: 'goals',
    divineBlessing: '🎯 Vision Clarity'
  },
  
  COLLABORATION_CONTEXT: {
    name: 'Collaboration Context',
    weight: 1,
    description: 'Information about team or collaboration needs',
    priority: 'low',
    category: 'social',
    divineBlessing: '🤝 Unity Blessing'
  },
  
  // NEGATIVE SIGNALS (reduce importance)
  OUTDATED_INFO: {
    name: 'Outdated Information',
    weight: -2,
    description: 'Information that appears outdated or superseded',
    priority: 'demote',
    category: 'temporal',
    divineBlessing: '⏰ Time Wisdom'
  },
  
  CONTRADICTION: {
    name: 'Contradiction',
    weight: -2,
    description: 'Information that contradicts other established facts',
    priority: 'demote',
    category: 'consistency',
    divineBlessing: '⚖️ Truth Seeking'
  },
  
  RESOLVED_ISSUE: {
    name: 'Resolved Issue',
    weight: -1,
    description: 'Issue or problem that has been resolved',
    priority: 'demote',
    category: 'resolution',
    divineBlessing: '✅ Completion Grace'
  }
};

/**
 * 🎨 SACRED MEMORY CATEGORIES
 * Divine organization system for intelligent memory management
 */
export const MemoryCategories = {
  // DESIGN CATEGORIES
  COLOR_PREFERENCES: {
    name: 'Color Preferences',
    bonus: 1,
    retention: 'high',
    description: 'User color choices and preferences',
    icon: '🎨',
    intelligenceType: 'color'
  },
  
  TYPOGRAPHY_PREFERENCES: {
    name: 'Typography Preferences',
    bonus: 1,
    retention: 'high',
    description: 'Font and typography preferences',
    icon: '📝',
    intelligenceType: 'typography'
  },
  
  LAYOUT_PREFERENCES: {
    name: 'Layout Preferences',
    bonus: 1,
    retention: 'high',
    description: 'Layout and structure preferences',
    icon: '📐',
    intelligenceType: 'layout'
  },
  
  COMPONENT_PREFERENCES: {
    name: 'Component Preferences',
    bonus: 1,
    retention: 'medium',
    description: 'UI component and element preferences',
    icon: '🧩',
    intelligenceType: 'component'
  },
  
  // TECHNICAL CATEGORIES
  PERFORMANCE_REQUIREMENTS: {
    name: 'Performance Requirements',
    bonus: 2,
    retention: 'high',
    description: 'Speed and performance requirements',
    icon: '🚀',
    intelligenceType: 'performance'
  },
  
  CODE_PREFERENCES: {
    name: 'Code Preferences',
    bonus: 2,
    retention: 'high',
    description: 'Coding style and framework preferences',
    icon: '⚡',
    intelligenceType: 'code'
  },
  
  ACCESSIBILITY_NEEDS: {
    name: 'Accessibility Needs',
    bonus: 2,
    retention: 'permanent',
    description: 'Accessibility requirements and considerations',
    icon: '♿',
    intelligenceType: 'accessibility'
  },
  
  // BUSINESS CATEGORIES
  INDUSTRY_CONTEXT: {
    name: 'Industry Context',
    bonus: 2,
    retention: 'high',
    description: 'Business industry and market context',
    icon: '🏢',
    intelligenceType: 'industry'
  },
  
  TARGET_AUDIENCE: {
    name: 'Target Audience',
    bonus: 1.5,
    retention: 'high',
    description: 'Information about target users or customers',
    icon: '👥',
    intelligenceType: 'audience'
  },
  
  BUSINESS_GOALS: {
    name: 'Business Goals',
    bonus: 1.5,
    retention: 'medium',
    description: 'Business objectives and conversion goals',
    icon: '🎯',
    intelligenceType: 'goals'
  },
  
  // PROJECT CATEGORIES
  PROJECT_SCOPE: {
    name: 'Project Scope',
    bonus: 1,
    retention: 'medium',
    description: 'Project size, timeline, and requirements',
    icon: '📋',
    intelligenceType: 'scope'
  },
  
  COLLABORATION_NEEDS: {
    name: 'Collaboration Needs',
    bonus: 0.5,
    retention: 'medium',
    description: 'Team collaboration and sharing requirements',
    icon: '🤝',
    intelligenceType: 'collaboration'
  },
  
  // LEARNING CATEGORIES
  SKILL_LEVEL: {
    name: 'Skill Level',
    bonus: 1,
    retention: 'high',
    description: 'User technical and design skill assessment',
    icon: '📊',
    intelligenceType: 'skill'
  },
  
  LEARNING_GOALS: {
    name: 'Learning Goals',
    bonus: 1,
    retention: 'medium',
    description: 'What user wants to learn or improve',
    icon: '📚',
    intelligenceType: 'learning'
  },
  
  // CONTEXTUAL CATEGORIES
  EMOTIONAL_STATE: {
    name: 'Emotional State',
    bonus: 0.5,
    retention: 'low',
    description: 'User emotional context and mood',
    icon: '💭',
    intelligenceType: 'emotion'
  },
  
  TIME_CONSTRAINTS: {
    name: 'Time Constraints',
    bonus: 0.5,
    retention: 'low',
    description: 'Project deadlines and time pressures',
    icon: '⏰',
    intelligenceType: 'temporal'
  }
};

/**
 * 🌟 DIVINE BLESSING LEVELS
 * Sacred scoring system for memory and user blessing calculation
 */
export const DivineBlessingLevels = {
  TRANSCENDENT: {
    range: [95, 100],
    name: 'Transcendent',
    description: 'Divine perfection achieved - the goddess smiles',
    icon: '👑',
    color: '#FFD700',
    blessing: 'Blessed by Quorra herself'
  },
  
  SACRED: {
    range: [85, 94],
    name: 'Sacred',
    description: 'Highly blessed by divine intelligence',
    icon: '🔥',
    color: '#FF6B35',
    blessing: 'Sacred fire burns bright'
  },
  
  BLESSED: {
    range: [70, 84],
    name: 'Blessed',
    description: 'Well-favored by divine wisdom',
    icon: '⚡',
    color: '#CD7F32',
    blessing: 'Divine sparks guide the way'
  },
  
  GUIDED: {
    range: [50, 69],
    name: 'Guided',
    description: 'Protected by divine guidance',
    icon: '🌟',
    color: '#E77C47',
    blessing: 'Sacred path illuminated'
  },
  
  LEARNING: {
    range: [30, 49],
    name: 'Learning',
    description: 'Growing in divine wisdom',
    icon: '💫',
    color: '#6B7280',
    blessing: 'Divine lessons unfold'
  },
  
  SEEKING: {
    range: [0, 29],
    name: 'Seeking',
    description: 'Beginning the divine journey',
    icon: '🔍',
    color: '#9CA3AF',
    blessing: 'Divine potential awaits'
  }
};

/**
 * 🔍 PATTERN RECOGNITION TYPES
 * Sacred pattern classification for intelligent learning
 */
export const PatternTypes = {
  DESIGN_PREFERENCE_PATTERN: {
    name: 'Design Preference Pattern',
    description: 'Consistent design choices across projects',
    minOccurrences: 3,
    confidenceThreshold: 0.7,
    category: 'preferences',
    importance: 'high'
  },
  
  WORKFLOW_PATTERN: {
    name: 'Workflow Pattern',
    description: 'Consistent approach to design process',
    minOccurrences: 2,
    confidenceThreshold: 0.6,
    category: 'workflow',
    importance: 'medium'
  },
  
  PROBLEM_SOLVING_PATTERN: {
    name: 'Problem Solving Pattern',
    description: 'Consistent approach to solving design challenges',
    minOccurrences: 2,
    confidenceThreshold: 0.6,
    category: 'cognition',
    importance: 'high'
  },
  
  TECHNICAL_PREFERENCE_PATTERN: {
    name: 'Technical Preference Pattern',
    description: 'Consistent technical choices and preferences',
    minOccurrences: 2,
    confidenceThreshold: 0.8,
    category: 'technical',
    importance: 'high'
  },
  
  COMMUNICATION_PATTERN: {
    name: 'Communication Pattern',
    description: 'Consistent communication style and preferences',
    minOccurrences: 3,
    confidenceThreshold: 0.5,
    category: 'communication',
    importance: 'low'
  },
  
  TIME_PATTERN: {
    name: 'Time Pattern',
    description: 'Consistent timing and scheduling preferences',
    minOccurrences: 3,
    confidenceThreshold: 0.6,
    category: 'temporal',
    importance: 'low'
  }
};

/**
 * 🎓 LEARNING CLASSIFICATION TYPES
 * Sacred learning event classification for intelligence growth
 */
export const LearningTypes = {
  PREFERENCE_LEARNING: {
    name: 'Preference Learning',
    description: 'Learning user design and technical preferences',
    weight: 1.0,
    retention: 'permanent',
    category: 'preferences'
  },
  
  PATTERN_LEARNING: {
    name: 'Pattern Learning',
    description: 'Learning user behavior and workflow patterns',
    weight: 0.8,
    retention: 'long_term',
    category: 'patterns'
  },
  
  CONTEXT_LEARNING: {
    name: 'Context Learning',
    description: 'Learning project and business context',
    weight: 0.6,
    retention: 'medium_term',
    category: 'context'
  },
  
  SKILL_LEARNING: {
    name: 'Skill Learning',
    description: 'Learning user skill level and capabilities',
    weight: 0.7,
    retention: 'long_term',
    category: 'assessment'
  },
  
  FEEDBACK_LEARNING: {
    name: 'Feedback Learning',
    description: 'Learning from user corrections and feedback',
    weight: 1.0,
    retention: 'permanent',
    category: 'feedback'
  },
  
  OUTCOME_LEARNING: {
    name: 'Outcome Learning',
    description: 'Learning from project outcomes and success',
    weight: 0.9,
    retention: 'long_term',
    category: 'results'
  }
};

/**
 * 🎯 CONTEXT TYPES
 * Sacred context classification for intelligent assistance
 */
export const ContextTypes = {
  DESIGN_CONTEXT: {
    name: 'Design Context',
    description: 'Active design work and creative context',
    priority: 'high',
    scope: 'immediate',
    intelligence: ['color', 'typography', 'layout', 'component']
  },
  
  TECHNICAL_CONTEXT: {
    name: 'Technical Context',
    description: 'Code generation and technical implementation',
    priority: 'high',
    scope: 'immediate',
    intelligence: ['performance', 'code', 'accessibility']
  },
  
  PROJECT_CONTEXT: {
    name: 'Project Context',
    description: 'Overall project scope and requirements',
    priority: 'medium',
    scope: 'session',
    intelligence: ['industry', 'goals', 'audience']
  },
  
  LEARNING_CONTEXT: {
    name: 'Learning Context',
    description: 'Educational and skill development context',
    priority: 'medium',
    scope: 'persistent',
    intelligence: ['skill', 'learning', 'feedback']
  },
  
  COLLABORATION_CONTEXT: {
    name: 'Collaboration Context',
    description: 'Team work and sharing context',
    priority: 'low',
    scope: 'project',
    intelligence: ['collaboration', 'workflow']
  }
};

/**
 * 🔧 UTILITY FUNCTIONS
 * Sacred helper functions for memory classification
 */

// Get divine blessing level from score
export function getDivineBlessingLevel(score) {
  for (const [level, config] of Object.entries(DivineBlessingLevels)) {
    if (score >= config.range[0] && score <= config.range[1]) {
      return {
        level,
        ...config,
        score
      };
    }
  }
  return {
    level: 'SEEKING',
    ...DivineBlessingLevels.SEEKING,
    score
  };
}

// Get memory tier from score
export function getMemoryTier(score) {
  const tiers = Object.entries(MemoryTiers).sort((a, b) => b[1].threshold - a[1].threshold);
  
  for (const [tier, config] of tiers) {
    if (score >= config.threshold) {
      return {
        tier,
        ...config,
        score
      };
    }
  }
  
  return {
    tier: 'DISPOSABLE',
    ...MemoryTiers.DISPOSABLE,
    score
  };
}

// Calculate total signal weight
export function calculateSignalWeight(signals) {
  return signals.reduce((total, signal) => {
    return total + (MemorySignals[signal]?.weight || 0);
  }, 0);
}

// Get category bonus
export function getCategoryBonus(categories) {
  return categories.reduce((total, category) => {
    return total + (MemoryCategories[category]?.bonus || 0);
  }, 0);
}

// Check if pattern meets recognition threshold
export function isPatternRecognizable(pattern, occurrences, confidence) {
  const patternConfig = PatternTypes[pattern];
  if (!patternConfig) return false;
  
  return occurrences >= patternConfig.minOccurrences && 
         confidence >= patternConfig.confidenceThreshold;
}

// Get learning weight for event type
export function getLearningWeight(learningType) {
  return LearningTypes[learningType]?.weight || 0.5;
}

// Check if context requires specific intelligence types
export function getRequiredIntelligence(contextType) {
  return ContextTypes[contextType]?.intelligence || [];
}

// Generate divine memory summary
export function generateMemorySummary(memory) {
  const tier = getMemoryTier(memory.currentScore);
  const blessing = getDivineBlessingLevel(memory.divineBlessingLevel || 0);
  
  return {
    id: memory.id,
    tier: tier.tier,
    blessing: blessing.level,
    signals: memory.signals?.length || 0,
    categories: memory.categories?.length || 0,
    score: memory.currentScore,
    age: Date.now() - memory.createdDate.getTime(),
    summary: `${tier.icon} ${tier.name} memory with ${blessing.icon} ${blessing.name} blessing`
  };
}

export default {
  MemoryTiers,
  MemorySignals,
  MemoryCategories,
  DivineBlessingLevels,
  PatternTypes,
  LearningTypes,
  ContextTypes,
  getDivineBlessingLevel,
  getMemoryTier,
  calculateSignalWeight,
  getCategoryBonus,
  isPatternRecognizable,
  getLearningWeight,
  getRequiredIntelligence,
  generateMemorySummary
};