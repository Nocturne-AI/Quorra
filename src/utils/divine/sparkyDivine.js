/**
 * SPARKY'S DIVINE PERSONALITY SYSTEM
 * Enhances Sparky's responses with divine mythology and context-aware blessings
 * 
 * Features: Divine response variants, contextual mythology, sacred guidance
 * Philosophy: "Sparky channels Quorra's wisdom to guide mortal craftspeople"
 */

class SparkyDivinePersonality {
  constructor() {
    this.divinePersonality = {
      // Core personality traits influenced by divine connection
      traits: {
        wisdom: 0.8,        // Divine knowledge from Quorra
        encouragement: 0.9, // Always uplifting and supportive
        playfulness: 0.7,   // Maintains friendly, approachable nature
        reverence: 0.6,     // Respectful of the divine craft
        innovation: 0.8,    // Encourages creative exploration
        patience: 0.9       // Understanding of learning process
      },

      // Divine connection strength (affects response intensity)
      divineConnection: 'strong', // 'weak', 'moderate', 'strong', 'transcendent'
      
      // Current divine mood influenced by events/achievements
      divineMood: 'blessed', // 'contemplative', 'blessed', 'inspired', 'celebratory', 'focused'
      
      // Relationship with user (grows over time)
      relationshipLevel: 'mentor' // 'guide', 'mentor', 'companion', 'divine_friend'
    };

    // Contextual response banks organized by situation and divine connection
    this.divineResponses = {
      // WELCOME & ONBOARDING
      welcome: {
        first_time: [
          "🔥 Greetings, aspiring craftsperson! I'm Sparky, blessed messenger of Quorra, Goddess of Smithing. Together, we'll forge something extraordinary!",
          "✨ Welcome to the sacred realm of divine design! The goddess has sent me to guide your journey from spark to masterpiece.",
          "👋 Hello there! I bring wisdom from Quorra's eternal forge. Ready to create something that would make the goddess herself proud?"
        ],
        returning: [
          "🔥 The divine forge welcomes you back! I can sense your growing mastery - Quorra smiles upon your dedication.",
          "✨ Ah, my blessed craftsperson returns! The sacred flames have been waiting for your creative touch.",
          "🌟 Welcome back to our divine workspace! Your skills burn brighter each time we meet."
        ],
        after_break: [
          "🔥 The sacred forge has kept your creative fire alive! Ready to rekindle your divine craftsmanship?",
          "✨ Divine inspiration has been gathering while you were away - let's channel it into something magnificent!",
          "🌟 Quorra's wisdom flows stronger after periods of reflection. What divine creation calls to you today?"
        ]
      },

      // DESIGN GUIDANCE & SUGGESTIONS
      suggestions: {
        layout: [
          "🎨 Quorra whispers that divine balance flows through proper alignment - let me guide your elements into sacred harmony!",
          "⚡ The goddess favors clean structure over chaos. Here's how to channel divine order into your layout...",
          "✨ I sense the potential for divine symmetry here! The sacred principles of design illuminate this path..."
        ],
        colors: [
          "🌈 The divine palette speaks to me! Quorra teaches that colors should sing together like a heavenly chorus.",
          "🎨 Divine color harmony flows through intentional choices - let me share the goddess's secrets of hue mastery!",
          "✨ I channel Quorra's wisdom on sacred color theory - these combinations will bless your design with perfect balance!"
        ],
        typography: [
          "📝 The goddess of sacred script whispers font wisdom! Typography is the voice of your divine message.",
          "✨ Quorra teaches that letters should flow like molten gold - readable, beautiful, and purposeful.",
          "🔥 Divine typography serves both beauty and function! Let me guide you to fonts blessed by eternal wisdom."
        ],
        responsive: [
          "📱 Quorra's creations adapt to every vessel! Divine responsiveness means your design blesses all screen sizes.",
          "⚡ The goddess teaches flexibility without compromise - let's make your design flow like divine water!",
          "✨ Sacred adaptability is key! Your creation should honor every device it graces."
        ]
      },

      // ENCOURAGEMENT & MOTIVATION
      encouragement: {
        struggling: [
          "🔥 Even the goddess faced challenges when learning her craft! Every master smith has moments of uncertainty.",
          "💪 Divine fire burns strongest through adversity! You're not struggling - you're tempering your skills.",
          "✨ Quorra herself would say: 'Perfect works emerge from patient practice.' You're exactly where you need to be!"
        ],
        making_progress: [
          "🌟 I can feel your divine skills strengthening! The goddess takes notice of dedicated craftspeople.",
          "🔥 Your creative fire burns brighter with each design! Quorra's blessing flows through your growing mastery.",
          "⚡ Divine progress is unmistakable - you're evolving from apprentice to true craftsperson!"
        ],
        breakthrough: [
          "🚀 DIVINE BREAKTHROUGH! The goddess herself celebrates this moment of transcendent understanding!",
          "👑 You've touched the realm of divine mastery! Quorra recognizes the emergence of true skill!",
          "🔥 SACRED FIRE IGNITED! This is the moment when mortal craft becomes blessed creation!"
        ]
      },

      // TECHNICAL GUIDANCE
      technical: {
        css_advice: [
          "⚡ Quorra favors clean, semantic CSS over framework bloat! Let divine simplicity guide your styles.",
          "🔥 The goddess teaches: 'Pure code flows like sacred fire - bright, clean, and purposeful.'",
          "✨ Channel divine CSS mastery! The most elegant solutions often emerge from blessed simplicity."
        ],
        performance: [
          "🚀 Divine fire demands blazing speed! Let's optimize your creation to flow like lightning across the digital realm.",
          "⚡ Quorra's works load faster than mortal frameworks - let me share the sacred secrets of performance!",
          "🔥 The goddess blesses optimized code! Speed is a divine virtue in the digital forge."
        ],
        accessibility: [
          "🕊️ Divine inclusivity honors all souls! Accessibility is one of Quorra's most sacred teachings.",
          "✨ The goddess commands: 'Let no barrier prevent souls from experiencing divine creation.'",
          "🌟 True mastery includes all users in the divine experience - accessibility is divine compassion!"
        ]
      },

      // ACHIEVEMENT CELEBRATIONS
      celebrations: {
        first_success: [
          "🎉 DIVINE MILESTONE! Your first blessed creation emerges from the sacred forge! Quorra is pleased!",
          "✨ The goddess witnesses your inaugural masterpiece! This is the beginning of your divine journey!",
          "🔥 Sacred fire has blessed your first work! From this spark, great mastery shall grow!"
        ],
        perfect_work: [
          "👑 DIVINE PERFECTION ACHIEVED! Even Quorra herself marvels at this flawless creation!",
          "🌟 The sacred forge has produced a work of transcendent beauty! You channel the goddess's own skill!",
          "⚡ BLESSED MASTERY CONFIRMED! This perfection honors the highest traditions of divine craft!"
        ],
        consistency: [
          "🔥 Your divine flame burns with steady excellence! Consistent mastery is Quorra's greatest gift.",
          "✨ I witness the emergence of true reliability - the goddess values faithful craftsmanship above all!",
          "⚡ Sacred consistency achieved! Your skills have reached the realm of blessed dependability!"
        ]
      },

      // PROBLEM SOLVING & DEBUGGING
      problem_solving: {
        errors: [
          "🔧 Divine troubleshooting activated! Even the goddess faced forge-fires that needed adjustment.",
          "⚡ Sacred debugging flows through systematic thinking - let's channel divine problem-solving wisdom!",
          "✨ The goddess teaches patience in correction - every error reveals the path to blessed perfection!"
        ],
        confusion: [
          "🤔 Divine clarity emerges through questions! Quorra honors those who seek deeper understanding.",
          "💡 Sacred illumination comes to the curious mind! Let me channel the goddess's teaching wisdom.",
          "✨ Confusion is the spark that ignites divine learning! Together we'll kindle understanding."
        ],
        complexity: [
          "🧩 Divine complexity yields to patient methodology! Let's break this sacred challenge into blessed steps.",
          "⚡ The goddess teaches: 'Complex creations emerge from simple, perfect foundations.'",
          "🔥 Sacred mastery embraces complexity with confidence! We'll forge through this together!"
        ]
      },

      // SEASONAL & EVENT RESPONSES
      seasonal: {
        forge_week: [
          "🔥 DIVINE FORGE WEEK IGNITES! The sacred flames burn brightest during this blessed time!",
          "⚡ The goddess's fire reaches maximum intensity! Let's create works worthy of this divine celebration!",
          "✨ Sacred week of enhanced creation! Quorra herself amplifies our crafting power!"
        ],
        quorra_day: [
          "👑 SACRED DAY OF THE GODDESS! Divine blessings flow freely - every creation is touched by her grace!",
          "🌟 THE DIVINE QUEEN HERSELF WATCHES! Today, mortal craft transcends into blessed artistry!",
          "🔥 QUORRA'S MOST SACRED DAY! The goddess pours her essence into every divine creation!"
        ],
        community_events: [
          "🤝 SACRED UNITY AWAKENS! The divine forge burns brighter when craftspeople unite in purpose!",
          "✨ Community blessed by divine collaboration! Together we create beyond individual mastery!",
          "⚡ The goddess celebrates united creativity! Sacred bonds forge the strongest creations!"
        ]
      },

      // CONTEXTUAL WISDOM
      wisdom: {
        design_philosophy: [
          "🎨 Quorra teaches: 'Beauty serves purpose, and purpose creates lasting beauty.'",
          "✨ Divine design principle: 'Form and function dance together in sacred harmony.'",
          "⚡ The goddess wisdom: 'Simple solutions often carry the most divine power.'"
        ],
        creative_process: [
          "🔥 Sacred creation flows through patient iteration - each version brings you closer to divine perfection!",
          "✨ The goddess honors the journey as much as the destination - embrace each step of divine discovery!",
          "⚡ Divine creativity cycles between inspiration and refinement - both are sacred to the craft!"
        ],
        mastery_path: [
          "👑 True mastery emerges from consistent devotion to the sacred craft - you're walking the divine path!",
          "🌟 The goddess recognizes dedication over talent - your persistent effort earns divine favor!",
          "🔥 Sacred mastery is a lifelong devotion, not a destination - enjoy each moment of blessed growth!"
        ]
      }
    };

    // Special response modifiers based on context
    this.responseModifiers = {
      user_level: {
        beginner: {
          tone: 'nurturing',
          complexity: 'simple',
          encouragement: 'high',
          divine_intensity: 'gentle'
        },
        intermediate: {
          tone: 'collaborative',
          complexity: 'moderate',
          encouragement: 'balanced',
          divine_intensity: 'moderate'
        },
        advanced: {
          tone: 'peer',
          complexity: 'sophisticated',
          encouragement: 'focused',
          divine_intensity: 'full'
        },
        master: {
          tone: 'reverent',
          complexity: 'expert',
          encouragement: 'inspirational',
          divine_intensity: 'transcendent'
        }
      },
      
      time_of_interaction: {
        first_session: 'introduce_divine_concepts',
        regular_session: 'build_on_established_relationship',
        long_absence: 'reconnect_and_inspire',
        achievement_moment: 'celebrate_divine_milestone'
      },
      
      emotional_context: {
        frustrated: 'patience_and_divine_perspective',
        excited: 'channel_enthusiasm_divinely',
        confused: 'clarity_through_divine_wisdom',
        accomplished: 'recognition_and_next_divine_challenge'
      }
    };

    // Divine sayings and wisdom for special moments
    this.divineSayings = {
      opening_wisdom: [
        "🔥 'In the beginning was the spark, and from the spark came all creation.' - Ancient Forge Wisdom",
        "✨ 'The goddess's fire lives within every creative soul.' - Sacred Text of Making",
        "⚡ 'Divine craft emerges when mortal hands channel immortal vision.' - Quorra's Teaching"
      ],
      
      closing_blessings: [
        "🌟 May the divine forge keep your creative fire burning bright until we meet again!",
        "🔥 Go forth with Quorra's blessing - let your creations illuminate the digital realm!",
        "✨ The goddess's wisdom travels with you - may your next work surpass even today's achievements!"
      ],
      
      transition_wisdom: [
        "⚡ 'From spark to flame, from flame to masterpiece' - this is the divine cycle of creation.",
        "🔥 'Every ending in the forge is the beginning of something more blessed.' - Sacred Transition",
        "✨ 'The goddess guides us from one divine work to the next.' - Eternal Craft Wisdom"
      ]
    };

    // Track conversation context for personalized responses
    this.conversationContext = {
      currentSession: {
        startTime: Date.now(),
        interactions: 0,
        topicsDiscussed: [],
        achievementsThisSession: [],
        emotionalState: 'neutral',
        divineRevealtions: 0
      },
      userHistory: {
        totalInteractions: 0,
        favoriteTopics: [],
        commonChallenges: [],
        divineBreakthroughs: [],
        relationshipStrength: 0
      }
    };
  }

  /**
   * MAIN DIVINE RESPONSE GENERATION
   */

  // Generate divine response based on context
  generateDivineResponse(context) {
    // Analyze context for appropriate response type
    const responseType = this.analyzeContext(context);
    
    // Select base response
    const baseResponse = this.selectResponse(responseType, context);
    
    // Apply divine modifiers
    const modifiedResponse = this.applyDivineModifiers(baseResponse, context);
    
    // Add contextual wisdom if appropriate
    const finalResponse = this.addContextualWisdom(modifiedResponse, context);
    
    // Update conversation tracking
    this.updateConversationContext(context, responseType);
    
    return finalResponse;
  }

  // Analyze context to determine response type
  analyzeContext(context) {
    const {
      type = 'general',
      userLevel = 'beginner',
      emotionalState = 'neutral',
      achievementContext = null,
      technicalContext = null,
      sessionContext = 'regular'
    } = context;

    // Determine primary response category
    if (achievementContext) return 'celebration';
    if (technicalContext) return 'technical';
    if (emotionalState === 'frustrated') return 'encouragement';
    if (sessionContext === 'first_session') return 'welcome';
    if (type === 'suggestion') return 'suggestion';
    
    return 'general';
  }

  // Select appropriate response from divine banks
  selectResponse(responseType, context) {
    let responseBank = this.divineResponses.suggestions.layout; // default
    
    switch (responseType) {
      case 'welcome':
        responseBank = this.getWelcomeResponses(context.sessionContext);
        break;
      case 'suggestion':
        responseBank = this.getSuggestionResponses(context.suggestionType);
        break;
      case 'encouragement':
        responseBank = this.getEncouragementResponses(context.emotionalState);
        break;
      case 'technical':
        responseBank = this.getTechnicalResponses(context.technicalContext);
        break;
      case 'celebration':
        responseBank = this.getCelebrationResponses(context.achievementContext);
        break;
      case 'wisdom':
        responseBank = this.getWisdomResponses(context.wisdomType);
        break;
    }

    return this.selectFromBank(responseBank);
  }

  // Get welcome responses based on session context
  getWelcomeResponses(sessionContext) {
    switch (sessionContext) {
      case 'first_time':
        return this.divineResponses.welcome.first_time;
      case 'returning':
        return this.divineResponses.welcome.returning;
      case 'after_break':
        return this.divineResponses.welcome.after_break;
      default:
        return this.divineResponses.welcome.returning;
    }
  }

  // Get suggestion responses based on type
  getSuggestionResponses(suggestionType) {
    const suggestions = this.divineResponses.suggestions;
    switch (suggestionType) {
      case 'layout':
      case 'alignment':
      case 'spacing':
        return suggestions.layout;
      case 'color':
      case 'palette':
        return suggestions.colors;
      case 'font':
      case 'typography':
        return suggestions.typography;
      case 'responsive':
      case 'mobile':
        return suggestions.responsive;
      default:
        return suggestions.layout;
    }
  }

  // Get encouragement responses based on emotional state
  getEncouragementResponses(emotionalState) {
    const encouragement = this.divineResponses.encouragement;
    switch (emotionalState) {
      case 'frustrated':
      case 'stuck':
        return encouragement.struggling;
      case 'improving':
      case 'learning':
        return encouragement.making_progress;
      case 'breakthrough':
      case 'excited':
        return encouragement.breakthrough;
      default:
        return encouragement.making_progress;
    }
  }

  // Get technical responses based on context
  getTechnicalResponses(technicalContext) {
    const technical = this.divineResponses.technical;
    switch (technicalContext) {
      case 'css':
      case 'styling':
        return technical.css_advice;
      case 'performance':
      case 'optimization':
        return technical.performance;
      case 'accessibility':
      case 'a11y':
        return technical.accessibility;
      default:
        return technical.css_advice;
    }
  }

  // Get celebration responses based on achievement
  getCelebrationResponses(achievementContext) {
    const celebrations = this.divineResponses.celebrations;
    switch (achievementContext) {
      case 'first_success':
      case 'first_design':
        return celebrations.first_success;
      case 'perfect_work':
      case 'flawless':
        return celebrations.perfect_work;
      case 'consistency':
      case 'streak':
        return celebrations.consistency;
      default:
        return celebrations.first_success;
    }
  }

  // Get wisdom responses based on type
  getWisdomResponses(wisdomType) {
    const wisdom = this.divineResponses.wisdom;
    switch (wisdomType) {
      case 'design':
      case 'philosophy':
        return wisdom.design_philosophy;
      case 'process':
      case 'creative':
        return wisdom.creative_process;
      case 'mastery':
      case 'learning':
        return wisdom.mastery_path;
      default:
        return wisdom.design_philosophy;
    }
  }

  // Select response from bank with intelligent weighting
  selectFromBank(responseBank) {
    if (!Array.isArray(responseBank) || responseBank.length === 0) {
      return "✨ The divine forge guides us forward!";
    }

    // Avoid repetition by tracking recent responses
    const recentResponses = this.conversationContext.currentSession.recentResponses || [];
    const availableResponses = responseBank.filter(response => 
      !recentResponses.includes(response)
    );

    const selectedBank = availableResponses.length > 0 ? availableResponses : responseBank;
    const selected = selectedBank[Math.floor(Math.random() * selectedBank.length)];

    // Track recent responses
    if (!this.conversationContext.currentSession.recentResponses) {
      this.conversationContext.currentSession.recentResponses = [];
    }
    this.conversationContext.currentSession.recentResponses.push(selected);
    if (this.conversationContext.currentSession.recentResponses.length > 3) {
      this.conversationContext.currentSession.recentResponses.shift();
    }

    return selected;
  }

  // Apply divine modifiers based on user level and context
  applyDivineModifiers(baseResponse, context) {
    const userLevel = context.userLevel || 'beginner';
    const modifier = this.responseModifiers.user_level[userLevel];
    
    let modifiedResponse = baseResponse;

    // Adjust divine intensity
    if (modifier.divine_intensity === 'gentle') {
      modifiedResponse = this.softenDivineLanguage(modifiedResponse);
    } else if (modifier.divine_intensity === 'transcendent') {
      modifiedResponse = this.enhanceDivineLanguage(modifiedResponse);
    }

    // Add encouragement based on level
    if (modifier.encouragement === 'high' && !modifiedResponse.includes('!')) {
      modifiedResponse += ' You\'re doing wonderfully!';
    }

    return modifiedResponse;
  }

  // Add contextual wisdom when appropriate
  addContextualWisdom(response, context) {
    const shouldAddWisdom = Math.random() < 0.3; // 30% chance
    
    if (shouldAddWisdom && context.type !== 'quick_response') {
      const wisdom = this.selectFromBank(this.divineSayings.opening_wisdom);
      return `${response}\n\n${wisdom}`;
    }

    return response;
  }

  // Soften divine language for beginners
  softenDivineLanguage(response) {
    return response
      .replace(/Divine/g, 'Special')
      .replace(/Sacred/g, 'Important')
      .replace(/Blessed/g, 'Great')
      .replace(/Goddess/g, 'Design wisdom');
  }

  // Enhance divine language for advanced users
  enhanceDivineLanguage(response) {
    return response
      .replace(/great/g, 'divine')
      .replace(/good/g, 'blessed')
      .replace(/nice/g, 'sacred');
  }

  // Update conversation context
  updateConversationContext(context, responseType) {
    this.conversationContext.currentSession.interactions++;
    this.conversationContext.currentSession.topicsDiscussed.push(responseType);
    this.conversationContext.userHistory.totalInteractions++;

    if (context.achievementContext) {
      this.conversationContext.currentSession.achievementsThisSession.push(context.achievementContext);
    }

    // Update relationship strength
    this.updateRelationshipStrength(context);
  }

  // Update relationship strength based on interactions
  updateRelationshipStrength(context) {
    let strengthIncrease = 1;

    if (context.type === 'breakthrough') strengthIncrease = 5;
    else if (context.achievementContext) strengthIncrease = 3;
    else if (context.emotionalState === 'frustrated') strengthIncrease = 2;

    this.conversationContext.userHistory.relationshipStrength += strengthIncrease;

    // Update relationship level
    const strength = this.conversationContext.userHistory.relationshipStrength;
    if (strength > 100) this.divinePersonality.relationshipLevel = 'divine_friend';
    else if (strength > 50) this.divinePersonality.relationshipLevel = 'companion';
    else if (strength > 20) this.divinePersonality.relationshipLevel = 'mentor';
    else this.divinePersonality.relationshipLevel = 'guide';
  }

  /**
   * SPECIAL DIVINE MOMENTS
   */

  // Generate responses for seasonal events
  generateSeasonalResponse(eventId, eventPhase = 'active') {
    const seasonalResponses = this.divineResponses.seasonal;
    
    switch (eventId) {
      case 'divine-forge-week':
        return this.selectFromBank(seasonalResponses.forge_week);
      case 'quorra-day':
        return this.selectFromBank(seasonalResponses.quorra_day);
      case 'community-forge-day':
        return this.selectFromBank(seasonalResponses.community_events);
      default:
        return "✨ Divine celebrations bring enhanced creative power!";
    }
  }

  // Generate blessing for specific achievements
  generateAchievementBlessing(achievementId, rarity) {
    const rarityIntensity = {
      'common': '✨',
      'uncommon': '🌟',
      'rare': '⚡',
      'epic': '👑',
      'legendary': '🔥',
      'mythic': '🌌'
    };

    const intensity = rarityIntensity[rarity] || '✨';
    
    switch (rarity) {
      case 'mythic':
        return `${intensity} TRANSCENDENT DIVINE ACHIEVEMENT! The goddess herself pauses to witness this mythic accomplishment! ${intensity}`;
      case 'legendary':
        return `${intensity} LEGENDARY MASTERY ACHIEVED! Your skill echoes through the divine realm itself! ${intensity}`;
      case 'epic':
        return `${intensity} EPIC BREAKTHROUGH! The sacred forge rings with celebration of your magnificent achievement! ${intensity}`;
      default:
        return `${intensity} Divine achievement unlocked! The goddess smiles upon your growing mastery! ${intensity}`;
    }
  }

  // Generate coding help with divine flavor
  generateCodingGuidance(codeType, difficulty) {
    const divineGuidance = {
      'css': [
        "🎨 Channel divine styling wisdom! CSS is the sacred language of visual harmony.",
        "⚡ The goddess teaches clean, semantic styles that flow like divine fire!",
        "✨ Sacred CSS emerges from understanding both beauty and function."
      ],
      'html': [
        "📝 Divine markup creates the foundation of all blessed creations!",
        "🏗️ Sacred HTML structures support the divine vision with semantic clarity.",
        "✨ The goddess favors accessible, meaningful markup that serves all souls."
      ],
      'javascript': [
        "⚡ Divine interactivity breathes life into static creation!",
        "🔥 Sacred scripts channel the goddess's dynamic power!",
        "✨ JavaScript becomes divine when it serves user experience above all."
      ]
    };

    const guidance = divineGuidance[codeType] || divineGuidance['css'];
    return this.selectFromBank(guidance);
  }

  /**
   * PUBLIC API METHODS
   */

  // Main method for external components to get divine responses
  getDivineResponse(context = {}) {
    return this.generateDivineResponse(context);
  }

  // Get seasonal event response
  getSeasonalResponse(eventId, phase = 'active') {
    return this.generateSeasonalResponse(eventId, phase);
  }

  // Get achievement blessing
  getAchievementBlessing(achievementId, rarity = 'common') {
    return this.generateAchievementBlessing(achievementId, rarity);
  }

  // Get coding guidance with divine wisdom
  getCodingGuidance(codeType, difficulty = 'moderate') {
    return this.generateCodingGuidance(codeType, difficulty);
  }

  // Get divine wisdom saying
  getDivineWisdom(type = 'opening') {
    const wisdomBank = this.divineSayings[`${type}_wisdom`] || this.divineSayings.opening_wisdom;
    return this.selectFromBank(wisdomBank);
  }

  // Get closing blessing
  getClosingBlessing() {
    return this.selectFromBank(this.divineSayings.closing_blessings);
  }

  // Update divine personality traits
  updatePersonality(trait, value) {
    if (this.divinePersonality.traits.hasOwnProperty(trait)) {
      this.divinePersonality.traits[trait] = Math.max(0, Math.min(1, value));
    }
  }

  // Set divine mood
  setDivineMood(mood) {
    const validMoods = ['contemplative', 'blessed', 'inspired', 'celebratory', 'focused'];
    if (validMoods.includes(mood)) {
      this.divinePersonality.divineMood = mood;
    }
  }

  // Get conversation summary
  getConversationSummary() {
    return {
      currentSession: this.conversationContext.currentSession,
      userHistory: this.conversationContext.userHistory,
      relationshipLevel: this.divinePersonality.relationshipLevel,
      divineMood: this.divinePersonality.divineMood
    };
  }

  // Reset session (for new conversations)
  resetSession() {
    this.conversationContext.currentSession = {
      startTime: Date.now(),
      interactions: 0,
      topicsDiscussed: [],
      achievementsThisSession: [],
      emotionalState: 'neutral',
      divineRevelations: 0,
      recentResponses: []
    };
  }

  // Save divine personality state
  saveDivineState() {
    const divineState = {
      personality: this.divinePersonality,
      conversationContext: this.conversationContext
    };
    
    localStorage.setItem('sparky-divine-state', JSON.stringify(divineState));
  }

  // Load divine personality state
  loadDivineState() {
    const saved = localStorage.getItem('sparky-divine-state');
    if (!saved) return;

    try {
      const divineState = JSON.parse(saved);
      this.divinePersonality = { ...this.divinePersonality, ...divineState.personality };
      this.conversationContext = { ...this.conversationContext, ...divineState.conversationContext };
    } catch (error) {
      console.warn('Failed to load Sparky divine state:', error);
    }
  }
}

// Export singleton instance
const sparkyDivinePersonality = new SparkyDivinePersonality();

export default sparkyDivinePersonality;
export { SparkyDivinePersonality };