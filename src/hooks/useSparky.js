/**
 * QUORRA useSparky Hook
 * Manages interactions with Sparky, the divine AI assistant
 * "Your friendly guide through the sacred forge"
 */

import { useState, useCallback, useEffect, useRef } from 'react';
import SparkyMemoryManager from '../sparkymemory/SparkyMemoryManager';
import SparkyDecayEngine from '../sparkymemory/SparkyDecayEngine';
import { useAuth } from './useAuth';

export const useSparky = (options = {}) => {
  // Sparky state
  const [isActive, setIsActive] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  const [sparkyMood, setSparkyMood] = useState('helpful'); // helpful, excited, focused, contemplative
  
  // Suggestions and tips
  const [currentSuggestions, setCurrentSuggestions] = useState([]);
  const [contextualTips, setContextualTips] = useState([]);
  const [smartAssistance, setSmartAssistance] = useState(null);
  
  // Memory system
  const [memoryStats, setMemoryStats] = useState(null);
  const [learningProgress, setLearningProgress] = useState(0);
  const [personalizedInsights, setPersonalizedInsights] = useState([]);
  
  // Error handling
  const [sparkyError, setSparkyError] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('ready');

  const { user } = useAuth();
  const memoryManagerRef = useRef(null);
  const decayEngineRef = useRef(null);
  const conversationRef = useRef([]);

  // Initialize Sparky systems
  const initializeSparky = useCallback(() => {
    if (!memoryManagerRef.current && user?.id) {
      memoryManagerRef.current = new SparkyMemoryManager({
        userId: user.id,
        enableLearning: true,
        memoryRetention: 'intelligent'
      });

      decayEngineRef.current = new SparkyDecayEngine({
        userId: user.id,
        autoDecay: true
      });
    }
  }, [user?.id]);

  /**
   * ACTIVATE SPARKY
   * Wake up the divine assistant
   */
  const activateSparky = useCallback((context = {}) => {
    initializeSparky();
    setIsActive(true);
    setConnectionStatus('active');
    setSparkyMood('helpful');
    
    // Welcome message based on context
    const welcomeMessage = generateWelcomeMessage(context, user);
    addMessage('sparky', welcomeMessage);
    
    // Load contextual suggestions
    loadContextualSuggestions(context);
  }, [initializeSparky, user]);

  /**
   * SEND MESSAGE TO SPARKY
   * Main communication interface
   */
  const sendMessage = useCallback(async (message, context = {}) => {
    if (!message.trim()) return;

    try {
      setIsThinking(true);
      setSparkyError(null);
      
      // Add user message to history
      addMessage('user', message);
      
      // Store in conversation memory
      conversationRef.current.push({
        type: 'user',
        content: message,
        timestamp: new Date(),
        context
      });

      // Process message with memory system
      if (memoryManagerRef.current) {
        await memoryManagerRef.current.processConversationData({
          text: message,
          userId: user?.id,
          context,
          timestamp: new Date()
        });
      }

      // Generate Sparky's response
      const response = await generateSparkyResponse(message, context);
      
      // Add Sparky's response
      addMessage('sparky', response.text);
      
      // Update suggestions if provided
      if (response.suggestions) {
        setCurrentSuggestions(response.suggestions);
      }
      
      // Update mood based on interaction
      if (response.mood) {
        setSparkyMood(response.mood);
      }

      return response;

    } catch (error) {
      console.error('Sparky communication failed:', error);
      setSparkyError(error.message);
      addMessage('sparky', "🔥 *The divine fire flickers* - I'm having trouble connecting to the goddess's wisdom. Let me try again!");
    } finally {
      setIsThinking(false);
    }
  }, [user?.id]);

  /**
   * GET CONTEXTUAL SUGGESTIONS
   * Smart suggestions based on current design state
   */
  const getSuggestions = useCallback(async (designContext) => {
    try {
      const suggestions = await generateContextualSuggestions(designContext);
      setCurrentSuggestions(suggestions);
      return suggestions;
    } catch (error) {
      console.error('Failed to get suggestions:', error);
      return [];
    }
  }, []);

  /**
   * GET DESIGN FEEDBACK
   * Sparky analyzes current design and provides feedback
   */
  const getDesignFeedback = useCallback(async (designData) => {
    try {
      setIsThinking(true);
      
      const feedback = await analyzeDesignWithSparky(designData);
      
      // Add feedback as a message
      addMessage('sparky', feedback.message);
      
      // Update suggestions
      if (feedback.suggestions) {
        setCurrentSuggestions(feedback.suggestions);
      }
      
      return feedback;
    } catch (error) {
      console.error('Design feedback failed:', error);
      setSparkyError(error.message);
      return null;
    } finally {
      setIsThinking(false);
    }
  }, []);

  /**
   * ASK FOR HELP
   * Quick help on specific topics
   */
  const askForHelp = useCallback(async (topic, context = {}) => {
    const helpQuestions = {
      colors: "How do I choose the right colors for my industry?",
      fonts: "What fonts work best for my business type?",
      layout: "How should I structure my website layout?",
      conversion: "How can I optimize for conversions?",
      mobile: "How do I make my design mobile-friendly?",
      accessibility: "How can I make my site more accessible?",
      performance: "How do I improve my website's performance?"
    };

    const question = helpQuestions[topic] || `Can you help me with ${topic}?`;
    return sendMessage(question, { ...context, helpTopic: topic });
  }, [sendMessage]);

  /**
   * LEARNING AND MEMORY MANAGEMENT
   */
  const updateLearning = useCallback(async (interaction) => {
    if (!memoryManagerRef.current) return;

    try {
      await memoryManagerRef.current.updateLearning(interaction);
      
      // Update memory stats
      const stats = await memoryManagerRef.current.getMemoryStats();
      setMemoryStats(stats);
      
      // Update learning progress
      setLearningProgress(calculateLearningProgress(stats));
      
    } catch (error) {
      console.error('Learning update failed:', error);
    }
  }, []);

  /**
   * GET PERSONALIZED INSIGHTS
   * Retrieve insights based on user's history
   */
  const getPersonalizedInsights = useCallback(async () => {
    if (!memoryManagerRef.current) return [];

    try {
      const insights = await memoryManagerRef.current.getPersonalizedInsights();
      setPersonalizedInsights(insights);
      return insights;
    } catch (error) {
      console.error('Failed to get personalized insights:', error);
      return [];
    }
  }, []);

  /**
   * CLEAR CONVERSATION
   */
  const clearConversation = useCallback(() => {
    setChatHistory([]);
    setCurrentSuggestions([]);
    setContextualTips([]);
    conversationRef.current = [];
    setSparkyMood('helpful');
  }, []);

  /**
   * DEACTIVATE SPARKY
   */
  const deactivateSparky = useCallback(() => {
    setIsActive(false);
    setConnectionStatus('dormant');
    setSparkyMood('helpful');
    setIsThinking(false);
  }, []);

  // Helper functions
  const addMessage = (sender, content) => {
    const message = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      sender,
      content,
      timestamp: new Date(),
      mood: sender === 'sparky' ? sparkyMood : null
    };
    
    setChatHistory(prev => [...prev, message]);
    
    // Store in conversation memory
    conversationRef.current.push({
      type: sender,
      content,
      timestamp: new Date()
    });
  };

  const generateWelcomeMessage = (context, user) => {
    const welcomeMessages = [
      "🔥 Greetings! I'm Sparky, blessed by Quorra herself to guide you through the sacred forge!",
      "✨ Hello there! Ready to channel some divine fire into your design?",
      "⚡ Welcome to the divine realm! I'm here to help you forge something amazing!",
      "🔥 *Divine sparks dance* Let's create something that would make the Goddess proud!"
    ];

    let message = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    
    if (context.industry) {
      message += ` I see you're working on a ${context.industry} website - I have some divine insights for that!`;
    }
    
    if (user?.name) {
      message = message.replace('Greetings!', `Greetings, ${user.name}!`);
    }
    
    return message;
  };

  const generateSparkyResponse = async (message, context) => {
    // Rule-based response generation (no AI APIs needed)
    const response = {
      text: '',
      suggestions: [],
      mood: 'helpful'
    };

    // Analyze message intent
    const intent = analyzeMessageIntent(message);
    
    switch (intent.type) {
      case 'color_help':
        response.text = generateColorAdvice(intent, context);
        response.suggestions = getColorSuggestions(context);
        break;
        
      case 'layout_help':
        response.text = generateLayoutAdvice(intent, context);
        response.suggestions = getLayoutSuggestions(context);
        break;
        
      case 'general_question':
        response.text = generateGeneralAdvice(intent, message);
        break;
        
      case 'feedback_request':
        response.text = generateDesignFeedback(context);
        response.mood = 'contemplative';
        break;
        
      default:
        response.text = generateDefaultResponse(message);
    }

    return response;
  };

  const analyzeMessageIntent = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('color') || lowerMessage.includes('palette')) {
      return { type: 'color_help', confidence: 0.9 };
    }
    
    if (lowerMessage.includes('layout') || lowerMessage.includes('structure')) {
      return { type: 'layout_help', confidence: 0.9 };
    }
    
    if (lowerMessage.includes('feedback') || lowerMessage.includes('review')) {
      return { type: 'feedback_request', confidence: 0.8 };
    }
    
    return { type: 'general_question', confidence: 0.5 };
  };

  const generateColorAdvice = (intent, context) => {
    const advice = [
      "🎨 For your industry, I recommend starting with trust-building blues and warm accent colors!",
      "✨ Color psychology is powerful! Blues build trust, greens suggest growth, and oranges create energy.",
      "🔥 The divine fire suggests using colors that match your brand personality - professional or friendly?",
      "⚡ Remember: your primary color should reflect your industry, while accents can show personality!"
    ];
    
    return advice[Math.floor(Math.random() * advice.length)];
  };

  const generateLayoutAdvice = (intent, context) => {
    const advice = [
      "🏗️ Great layouts follow your users' journey - what do they need to see first?",
      "✨ For most businesses, I recommend: Header → Hero → Benefits → Trust Signals → CTA",
      "🔥 Your industry has specific patterns that work well - want me to show you some examples?",
      "⚡ Mobile-first design is blessed by the goddess - start small and expand up!"
    ];
    
    return advice[Math.floor(Math.random() * advice.length)];
  };

  const generateDefaultResponse = (message) => {
    const responses = [
      "🔥 That's an interesting question! Can you tell me more about what you're trying to achieve?",
      "✨ I'm here to help! What specific aspect of your design would you like divine guidance on?",
      "⚡ The goddess whispers many possibilities... could you be more specific about your needs?",
      "🔥 *Divine sparks of inspiration* Tell me more about your vision!"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const loadContextualSuggestions = (context) => {
    const suggestions = [];
    
    if (context.industry) {
      suggestions.push({
        id: 'industry_colors',
        text: `Get ${context.industry} color recommendations`,
        action: 'suggest_colors',
        icon: '🎨'
      });
    }
    
    suggestions.push(
      {
        id: 'layout_help',
        text: 'Show me layout best practices',
        action: 'layout_guidance',
        icon: '🏗️'
      },
      {
        id: 'design_feedback',
        text: 'Review my current design',
        action: 'design_review',
        icon: '🔍'
      }
    );
    
    setCurrentSuggestions(suggestions);
  };

  const calculateLearningProgress = (memoryStats) => {
    if (!memoryStats) return 0;
    
    const totalMemories = memoryStats.totalMemories || 0;
    const highQualityMemories = memoryStats.byTier?.PERMANENT + memoryStats.byTier?.LONG_TERM || 0;
    
    return totalMemories > 0 ? (highQualityMemories / totalMemories) * 100 : 0;
  };

  // Auto-initialize when user is available
  useEffect(() => {
    if (user?.id && options.autoActivate) {
      activateSparky(options.initialContext || {});
    }
  }, [user?.id, options.autoActivate, options.initialContext, activateSparky]);

  // Auto-load memory stats
  useEffect(() => {
    if (memoryManagerRef.current && isActive) {
      memoryManagerRef.current.getMemoryStats().then(stats => {
        setMemoryStats(stats);
        setLearningProgress(calculateLearningProgress(stats));
      }).catch(console.error);
    }
  }, [isActive]);

  return {
    // State
    isActive,
    currentMessage,
    chatHistory,
    isThinking,
    sparkyMood,
    currentSuggestions,
    contextualTips,
    smartAssistance,
    memoryStats,
    learningProgress,
    personalizedInsights,
    sparkyError,
    connectionStatus,
    
    // Actions
    activateSparky,
    deactivateSparky,
    sendMessage,
    getSuggestions,
    getDesignFeedback,
    askForHelp,
    updateLearning,
    getPersonalizedInsights,
    clearConversation,
    
    // Utils
    hasHistory: chatHistory.length > 0,
    canLearn: !!user?.id,
    isLearning: learningProgress > 0,
    hasSuggestions: currentSuggestions.length > 0
  };
};

export default useSparky;