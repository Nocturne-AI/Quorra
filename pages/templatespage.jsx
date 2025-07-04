import React, { useState } from 'react';
import { QuorraLayout } from '../src/components/QuorraNavigation';

const TemplatesPage = () => {
  const [currentStep, setCurrentStep] = useState('category');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [brandPersonality, setBrandPersonality] = useState({});
  const [generatingProgress, setGeneratingProgress] = useState(0);

  // Business categories with proper conversion psychology
  const businessCategories = [
    {
      id: 'healthcare',
      name: 'Healthcare & Medical',
      icon: '🏥',
      description: 'Compassionate authority with trust-building elements',
      conversionType: 'Need → Trust → Care'
    },
    {
      id: 'restaurant',
      name: 'Restaurant & Food',
      icon: '🍽️',
      description: 'Appetite-driven design with visual storytelling',
      conversionType: 'Appetite → Reservation'
    },
    {
      id: 'technology',
      name: 'SaaS & Technology',
      icon: '💻',
      description: 'Feature demonstration with trial conversion',
      conversionType: 'Discovery → Trial → Adoption'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce & Retail',
      icon: '🛍️',
      description: 'Purchase optimization with demographic targeting',
      conversionType: 'Browse → Purchase'
    },
    {
      id: 'finance',
      name: 'Finance & Banking',
      icon: '💰',
      description: 'Trust-based compliance and consultation',
      conversionType: 'Research → Evaluate → Trust → Engage'
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      icon: '🏠',
      description: 'Property visualization and local expertise',
      conversionType: 'Browse → Visualize → Connect'
    },
    {
      id: 'professional',
      name: 'Professional Services',
      icon: '💼',
      description: 'Authority-based consultation building',
      conversionType: 'Need → Research → Consultation'
    },
    {
      id: 'creative',
      name: 'Creative & Portfolio',
      icon: '🎨',
      description: 'Audience-building engagement focus',
      conversionType: 'Discover → Engage → Follow'
    },
    {
      id: 'nonprofit',
      name: 'Non-Profit & Charity',
      icon: '❤️',
      description: 'Mission-driven donation optimization',
      conversionType: 'Discover → Connect → Act → Sustain'
    },
    {
      id: 'education',
      name: 'Education & Learning',
      icon: '📚',
      description: 'Institutional authority and student journey',
      conversionType: 'Explore → Evaluate → Apply → Enroll'
    },
    {
      id: 'elearning',
      name: 'E-learning & Courses',
      icon: '💡',
      description: 'Course-centric skill development',
      conversionType: 'Explore → Sample → Enroll → Complete'
    },
    {
      id: 'fitness',
      name: 'Fitness & Wellness',
      icon: '💪',
      description: 'Transformation-focused community building',
      conversionType: 'Motivate → Inspire → Trial → Transform'
    }
  ];

  // Brand personality questions
  const personalityQuestions = [
    {
      id: 'style',
      question: 'How should your brand feel?',
      options: [
        { id: 'luxury', label: 'Luxury & Premium', desc: 'Sophisticated, high-end, exclusive' },
        { id: 'professional', label: 'Professional & Trustworthy', desc: 'Clean, reliable, authoritative' },
        { id: 'friendly', label: 'Friendly & Approachable', desc: 'Warm, welcoming, accessible' },
        { id: 'bold', label: 'Bold & Innovative', desc: 'Cutting-edge, dynamic, disruptive' }
      ]
    },
    {
      id: 'audience',
      question: 'Who is your primary audience?',
      options: [
        { id: 'executives', label: 'Business Executives', desc: 'C-level, decision makers' },
        { id: 'professionals', label: 'Working Professionals', desc: '25-55, career-focused' },
        { id: 'consumers', label: 'General Consumers', desc: 'Broad market appeal' },
        { id: 'youth', label: 'Young Adults', desc: '18-35, digital natives' }
      ]
    },
    {
      id: 'priority',
      question: 'What is your main business goal?',
      options: [
        { id: 'sales', label: 'Drive Sales', desc: 'Convert visitors to customers' },
        { id: 'leads', label: 'Generate Leads', desc: 'Capture contact information' },
        { id: 'trust', label: 'Build Trust', desc: 'Establish credibility & authority' },
        { id: 'engagement', label: 'Increase Engagement', desc: 'Build community & following' }
      ]
    }
  ];

  // Navigation functions
  const handleCategorySelect = (category) => {
    console.log('Selected category:', category);
    setSelectedCategory(category);
    setCurrentStep('personality');
  };

  const handleBlankCanvas = () => {
    console.log('Navigating to editor for blank canvas');
    window.location.href = '/editor';
  };

  const handlePersonalityAnswer = (questionId, answerId) => {
    setBrandPersonality(prev => ({ 
      ...prev, 
      [questionId]: answerId 
    }));
  };

  const startGeneration = () => {
    setCurrentStep('generating');
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 25;
      if (progress >= 100) {
        progress = 100;
        setGeneratingProgress(100);
        setTimeout(() => setCurrentStep('results'), 500);
        clearInterval(interval);
      } else {
        setGeneratingProgress(progress);
      }
    }, 800);
  };

  const handleUseTemplate = (template) => {
    console.log('Using template:', template);
    
    // Store template data for editor
    localStorage.setItem('selectedTemplate', JSON.stringify({
      ...template,
      industry: selectedCategory.id,
      brandPersonality: brandPersonality,
      timestamp: new Date().toISOString()
    }));
    
    // Navigate to editor
    window.location.href = '/editor';
  };

  const handleStartOver = () => {
    setCurrentStep('category');
    setSelectedCategory(null);
    setBrandPersonality({});
    setGeneratingProgress(0);
  };

  // Generate templates based on selections
  const generateTemplates = () => {
    if (!selectedCategory || Object.keys(brandPersonality).length === 0) {
      return [];
    }

    return [
      {
        id: 1,
        name: `${brandPersonality.style === 'luxury' ? 'Premium' : 'Professional'} ${selectedCategory.name.split(' ')[0]} Authority`,
        style: `${brandPersonality.style} ${selectedCategory.name.toLowerCase()} with ${brandPersonality.audience} focus`,
        features: ['Trust Signals', 'Conversion Optimization', 'Mobile-First Design', 'Performance Optimized'],
        aiReasoning: `Combined ${selectedCategory.name.toLowerCase()} trust patterns with ${brandPersonality.style} personality for ${brandPersonality.audience} targeting ${brandPersonality.priority}.`
      },
      {
        id: 2,
        name: `Divine ${selectedCategory.name.split(' ')[0]} Experience`,
        style: `Conversion-optimized ${selectedCategory.name.toLowerCase()} design`,
        features: ['User Journey Optimization', 'Industry-Specific Features', 'Sacred Color Palette', 'Divine Typography'],
        aiReasoning: `Emphasized ${selectedCategory.conversionType} journey while maintaining ${brandPersonality.style} brand positioning.`
      },
      {
        id: 3,
        name: `Sacred ${selectedCategory.name.split(' ')[0]} Mastery`,
        style: `${brandPersonality.priority}-focused ${selectedCategory.name.toLowerCase()} approach`,
        features: ['Premium Components', 'Advanced Analytics', 'Custom Integrations', 'Sacred Forge Blessing'],
        aiReasoning: `Elevated ${brandPersonality.style} design for high-converting ${selectedCategory.name.toLowerCase()} positioning with ${brandPersonality.audience} appeal.`
      }
    ];
  };

  const generatedTemplates = generateTemplates();

  // STEP 1: Category Selection
  if (currentStep === 'category') {
    return (
      <QuorraLayout>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
          {/* Floating Divine Embers */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-2 h-2 bg-amber-500 opacity-60 rounded-full top-10 left-20 animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-orange-400 opacity-40 rounded-full top-32 right-16 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute w-3 h-3 bg-yellow-500 opacity-30 rounded-full bottom-40 left-10 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900/90 to-black/90 border-b border-amber-600/30">
            <div className="max-w-7xl mx-auto px-4 py-16">
              <div className="text-center">
                <div className="flex justify-center items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                    Channel Your Divine Vision
                  </h1>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  I'm Sparky! I'll forge custom designs blessed with divine intelligence, 
                  crafted specifically for your business and optimized for conversion.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Step 1: Choose Your Sacred Domain
              </h2>
              <p className="text-gray-400">
                Each business category has unique conversion patterns blessed by centuries of divine wisdom
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessCategories.map(category => (
                <div 
                  key={category.id}
                  onClick={() => handleCategorySelect(category)}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-amber-600/30 cursor-pointer transition-all duration-300 hover:border-amber-600/60 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/20"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-black/30 rounded-xl flex items-center justify-center border border-amber-600/20">
                      <span className="text-3xl filter brightness-110 drop-shadow-lg">{category.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-amber-200 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="bg-amber-900/20 border border-amber-600/30 rounded-lg p-3 mb-4">
                      <div className="text-xs text-amber-400 font-semibold mb-1">
                        Conversion Psychology:
                      </div>
                      <div className="text-sm text-amber-200">
                        {category.conversionType}
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-amber-600 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transform transition-all duration-200 flex items-center justify-center gap-2">
                      Select Domain
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Blank Canvas Option */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Or Channel Pure Divine Fire
                </h3>
                <p className="text-gray-400">
                  Start with a blank canvas and let Sparky guide your creative vision
                </p>
              </div>
              
              <div 
                onClick={handleBlankCanvas}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-8 border-2 border-amber-600/50 cursor-pointer hover:border-amber-600/80 hover:scale-105 transform transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-4xl text-white">✨</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">
                    Start from Scratch
                  </h4>
                  <p className="text-gray-400 mb-6">
                    Channel the raw power of divine creation. I'll guide you through 
                    building your perfect website from pure inspiration.
                  </p>
                  <button className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-4 px-8 rounded-lg text-lg font-semibold inline-flex items-center gap-2">
                    <span>🪄</span>
                    Begin Divine Creation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </QuorraLayout>
    );
  }

  // STEP 2: Personality Questions
  if (currentStep === 'personality') {
    const currentQuestionIndex = Object.keys(brandPersonality).length;
    const currentQuestion = personalityQuestions[currentQuestionIndex];
    const isComplete = Object.keys(brandPersonality).length === personalityQuestions.length;

    return (
      <QuorraLayout>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
          <div className="bg-gradient-to-r from-gray-900/90 to-black/90 border-b border-amber-600/30">
            <div className="max-w-4xl mx-auto px-4 py-16">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-sm">✨</span>
                  </div>
                  <h1 className="text-3xl font-bold text-white">
                    Step 2: Define Your Brand Essence
                  </h1>
                </div>
                <p className="text-gray-400">
                  I'll channel these insights to forge your perfect design
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 py-12">
            {!isComplete ? (
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-8 border border-amber-600/30">
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">
                      Question {currentQuestionIndex + 1} of {personalityQuestions.length}
                    </span>
                    <span className="text-sm text-amber-400 font-semibold">
                      {selectedCategory.name}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-amber-600 to-orange-500 h-2 rounded-full transition-all duration-300"
                      style={{width: `${((currentQuestionIndex + 1) / personalityQuestions.length) * 100}%`}}
                    />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-8">
                  {currentQuestion.question}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQuestion.options.map(option => (
                    <button
                      key={option.id}
                      onClick={() => handlePersonalityAnswer(currentQuestion.id, option.id)}
                      className="p-6 border-2 border-gray-600/50 rounded-xl bg-gray-800/50 cursor-pointer text-left transition-all duration-200 hover:border-amber-600/60 hover:bg-amber-900/10"
                    >
                      <h3 className="font-bold text-amber-200 mb-2">
                        {option.label}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {option.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-8 text-center border border-amber-600/30">
                <div className="mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 text-amber-400">
                    <span className="text-5xl">✨</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Ready to Channel Divine Fire
                  </h2>
                  <p className="text-gray-400">
                    I'll now forge designs specifically blessed for your {selectedCategory.name} business
                  </p>
                </div>

                <div className="bg-gray-900/60 border border-amber-600/20 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-white mb-4">Your Divine Essence:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    {Object.entries(brandPersonality).map(([key, value]) => {
                      const question = personalityQuestions.find(q => q.id === key);
                      const answer = question.options.find(o => o.id === value);
                      return (
                        <div key={key} className="text-center">
                          <div className="font-medium text-gray-400">{question.question.replace('?', '')}</div>
                          <div className="text-amber-400">{answer.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button 
                  onClick={startGeneration}
                  className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-4 px-8 rounded-lg text-lg font-semibold inline-flex items-center gap-2 hover:scale-105 transform transition-all duration-200"
                >
                  <span>🪄</span>
                  Forge My Designs
                </button>
              </div>
            )}
          </div>
        </div>
      </QuorraLayout>
    );
  }

  // STEP 3: Generation Progress
  if (currentStep === 'generating') {
    return (
      <QuorraLayout>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-12 border border-amber-600/30">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Channeling Divine Fire...
                </h2>
                <p className="text-gray-400">
                  I'm forging designs blessed with your sacred essence
                </p>
              </div>

              <div className="mb-8">
                <div className="w-full bg-gray-700/50 rounded-full h-3 mb-4">
                  <div 
                    className="bg-gradient-to-r from-amber-600 to-orange-500 h-3 rounded-full transition-all duration-500 relative"
                    style={{width: `${generatingProgress}%`}}
                  >
                    <div className="absolute right-0 top-0 w-6 h-3 bg-yellow-400 rounded-full animate-pulse" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-amber-400">
                  {Math.round(generatingProgress)}%
                </div>
              </div>

              <div className="text-left space-y-2 text-sm text-gray-400">
                <div className={generatingProgress > 20 ? 'text-amber-400' : ''}>
                  ✨ Analyzing {selectedCategory.name} conversion patterns...
                </div>
                <div className={generatingProgress > 40 ? 'text-amber-400' : ''}>
                  🎨 Applying divine color psychology...
                </div>
                <div className={generatingProgress > 60 ? 'text-amber-400' : ''}>
                  📝 Selecting blessed typography...
                </div>
                <div className={generatingProgress > 80 ? 'text-amber-400' : ''}>
                  🔥 Forging final designs...
                </div>
              </div>
            </div>
          </div>
        </div>
      </QuorraLayout>
    );
  }

  // STEP 4: Results
  return (
    <QuorraLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="bg-gradient-to-r from-gray-900/90 to-black/90 border-b border-amber-600/30">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-3xl">⭐</span>
                <h1 className="text-3xl font-bold text-white">
                  Your Divine Designs Have Been Forged
                </h1>
              </div>
              <p className="text-gray-400">
                Blessed specifically for your {selectedCategory.name} business with divine intelligence
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generatedTemplates.map(template => (
              <div key={template.id} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl overflow-hidden border border-amber-600/30">
                <div className="h-48 bg-gradient-to-br from-gray-700/50 to-gray-800/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🔥</div>
                    <p className="text-gray-400 text-sm">Design Preview</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {template.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {template.style}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">Divine Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {template.features.map((feature, index) => (
                        <span key={index} className="bg-amber-900/20 text-amber-200 px-2 py-1 rounded text-xs border border-amber-600/30">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-3 mb-6">
                    <div className="text-xs text-blue-400 font-semibold mb-1">
                      🤖 Sparky's Reasoning:
                    </div>
                    <div className="text-xs text-blue-200">
                      {template.aiReasoning}
                    </div>
                  </div>

                  <button 
                    onClick={() => handleUseTemplate(template)}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transform transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Use This Design
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={handleStartOver}
              className="border border-amber-600/50 bg-transparent text-amber-400 py-3 px-6 rounded-lg cursor-pointer transition-all duration-300 hover:bg-amber-900/20"
            >
              Forge Different Designs
            </button>
          </div>
        </div>
      </div>
    </QuorraLayout>
  );
};

export default TemplatesPage;