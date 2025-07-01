import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, Zap, Star, Clock, ChevronRight, Wand2 } from 'lucide-react';

const AITemplatesPage = () => {
  const [currentStep, setCurrentStep] = useState('category');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [brandPersonality, setBrandPersonality] = useState({});
  const [generatingProgress, setGeneratingProgress] = useState(0);

  const businessCategories = [
    {
      id: 'healthcare',
      name: 'Healthcare & Medical',
      icon: '/src/assets/images/icons/industries/healthcare.png',
      fallbackIcon: '🏥',
      description: 'Compassionate authority with trust-building elements',
      conversionType: 'Need → Trust → Care'
    },
    {
      id: 'restaurant',
      name: 'Restaurant & Food',
      icon: '/src/assets/images/icons/industries/restaurant.png',
      fallbackIcon: '🍽️',
      description: 'Appetite-driven design with visual storytelling',
      conversionType: 'Appetite → Reservation'
    },
    {
      id: 'technology',
      name: 'SaaS & Technology',
      icon: '/src/assets/images/icons/industries/technology.png',
      fallbackIcon: '💻',
      description: 'Feature demonstration with trial conversion',
      conversionType: 'Discovery → Trial → Adoption'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce & Retail',
      icon: '/src/assets/images/icons/industries/ecommerce.png',
      fallbackIcon: '🛍️',
      description: 'Purchase optimization with demographic targeting',
      conversionType: 'Browse → Purchase'
    },
    {
      id: 'finance',
      name: 'Finance & Banking',
      icon: '/src/assets/images/icons/industries/finance.png',
      fallbackIcon: '💰',
      description: 'Trust-based compliance and consultation',
      conversionType: 'Research → Evaluate → Trust → Engage'
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      icon: '/src/assets/images/icons/industries/realestate.png',
      fallbackIcon: '🏠',
      description: 'Property visualization and local expertise',
      conversionType: 'Browse → Visualize → Connect'
    },
    {
      id: 'professional',
      name: 'Professional Services',
      icon: '/src/assets/images/icons/industries/professionalservices.png',
      fallbackIcon: '💼',
      description: 'Authority-based consultation building',
      conversionType: 'Need → Research → Consultation'
    },
    {
      id: 'creative',
      name: 'Creative & Portfolio',
      icon: '/src/assets/images/icons/industries/creative.png',
      fallbackIcon: '🎨',
      description: 'Audience-building engagement focus',
      conversionType: 'Discover → Engage → Follow'
    },
    {
      id: 'nonprofit',
      name: 'Non-Profit & Charity',
      icon: '/src/assets/images/icons/industries/nonprofit.png',
      fallbackIcon: '❤️',
      description: 'Mission-driven donation optimization',
      conversionType: 'Discover → Connect → Act → Sustain'
    },
    {
      id: 'education',
      name: 'Education & Learning',
      icon: '/src/assets/images/icons/industries/education.png',
      fallbackIcon: '📚',
      description: 'Institutional authority and student journey',
      conversionType: 'Explore → Evaluate → Apply → Enroll'
    },
    {
      id: 'elearning',
      name: 'E-learning & Courses',
      icon: '/src/assets/images/icons/industries/elearning.png',
      fallbackIcon: '💻',
      description: 'Course-centric skill development',
      conversionType: 'Explore → Sample → Enroll → Complete'
    },
    {
      id: 'fitness',
      name: 'Fitness & Wellness',
      icon: '/src/assets/images/icons/industries/fitness.png',
      fallbackIcon: '💪',
      description: 'Transformation-focused community building',
      conversionType: 'Motivate → Inspire → Trial → Transform'
    },
    {
      id: 'eventplanning',
      name: 'Event & Wedding Planning',
      icon: '/src/assets/images/icons/industries/eventplanning.png',
      fallbackIcon: '💒',
      description: 'Portfolio-driven emotional storytelling',
      conversionType: 'Dream → Inspire → Plan → Book'
    },
    {
      id: 'industrial',
      name: 'Manufacturing & Industrial',
      icon: '/src/assets/images/icons/industries/industrial.png',
      fallbackIcon: '🏭',
      description: 'Technical specification and quality focus',
      conversionType: 'Research → Evaluate → Quote → Partner'
    },
    {
      id: 'localservices',
      name: 'Local Services',
      icon: '/src/assets/images/icons/industries/localservices.png',
      fallbackIcon: '🔧',
      description: 'Competence-based trust building',
      conversionType: 'Problem → Trust → Book'
    }
  ];

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

  const generatedTemplates = [
    {
      id: 1,
      name: 'Divine Authority',
      style: 'Professional healthcare with warm accents',
      preview: '/api/placeholder/400/300',
      features: ['Appointment Booking', 'Doctor Profiles', 'Trust Signals', 'Patient Testimonials'],
      aiReasoning: 'Combined healthcare trust patterns with warm personality for approachable authority'
    },
    {
      id: 2,
      name: 'Healing Sanctuary',
      style: 'Compassionate care with modern design',
      preview: '/api/placeholder/400/300',
      features: ['Service Overview', 'Calm Color Palette', 'Patient Journey', 'Contact Forms'],
      aiReasoning: 'Emphasized calming elements while maintaining professional medical credibility'
    },
    {
      id: 3,
      name: 'Wellness Expert',
      style: 'Premium healthcare with luxury touches',
      preview: '/api/placeholder/400/300',
      features: ['Executive Profiles', 'Premium Imagery', 'Consultation Booking', 'Credentials Display'],
      aiReasoning: 'Elevated professional design for high-end healthcare positioning'
    }
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentStep('personality');
  };

  const handleBlankCanvas = () => {
    // Navigate to the main editor/canvas
    console.log('Starting with blank canvas');
  };

  const handlePersonalityAnswer = (questionId, answerId) => {
    setBrandPersonality(prev => ({ ...prev, [questionId]: answerId }));
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

  // Category Selection Step
  if (currentStep === 'category') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-orange-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <div className="flex justify-center items-center gap-3 mb-6">
                <img 
                  src="/src/assets/images/logos/quorra-logo-light.png" 
                  alt="QUORRA - Goddess of Smithing"
                  className="w-16 h-16"
                />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Channel Your Vision
                </h1>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The Goddess of Smithing will forge templates blessed with divine intelligence, 
                crafted specifically for your business and optimized for conversion.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img 
                src="/src/assets/images/sparky-ai-helpful.png" 
                alt="Sparky - Your Divine AI Guide"
                className="w-8 h-8"
              />
              <h2 className="text-2xl font-bold text-white">
                Step 1: Choose Your Sacred Domain
              </h2>
            </div>
            <p className="text-gray-300">
              Each business category has unique conversion patterns blessed by centuries of divine wisdom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessCategories.map(category => (
              <div 
                key={category.id}
                onClick={() => handleCategorySelect(category)}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-orange-900/50 hover:border-orange-500/70 group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-black/30 rounded-xl">
                    <img 
                      src={category.icon} 
                      alt={category.name}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="text-4xl hidden">{category.fallbackIcon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="bg-orange-900/40 border border-orange-800/50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-orange-300 font-medium mb-1">Conversion Psychology:</div>
                    <div className="text-sm text-orange-200">{category.conversionType}</div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-xl font-medium group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg">
                    Select Domain
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Blank Canvas Option */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Or Channel Pure Divine Fire</h3>
              <p className="text-gray-400">
                Start with a blank canvas and let Quorra guide your creative vision
              </p>
            </div>
            
            <div 
              onClick={handleBlankCanvas}
              className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border-2 border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 rounded-full">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  Start from Scratch
                </h4>
                <p className="text-gray-400 mb-6">
                  Channel the raw power of divine creation. Sparky will guide you through 
                  building your perfect website from pure inspiration.
                </p>
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-medium hover:from-orange-500 hover:to-red-500 transition-all duration-200 flex items-center justify-center gap-2 mx-auto shadow-lg">
                  <Wand2 className="w-5 h-5" />
                  Begin Divine Creation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Personality Questions Step
  if (currentStep === 'personality') {
    const currentQuestionIndex = Object.keys(brandPersonality).length;
    const currentQuestion = personalityQuestions[currentQuestionIndex];
    const isComplete = Object.keys(brandPersonality).length === personalityQuestions.length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-orange-900">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <img 
                  src="/src/assets/images/sparky-ai-helpful.png" 
                  alt="Sparky - Your Divine AI Guide"
                  className="w-8 h-8"
                />
                <h1 className="text-3xl font-bold">
                  Step 2: Define Your Brand Essence
                </h1>
              </div>
              <p className="text-gray-300">
                Sparky will channel these insights to forge your perfect template
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          {!isComplete ? (
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-orange-900/50">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400">
                    Question {currentQuestionIndex + 1} of {personalityQuestions.length}
                  </span>
                  <span className="text-sm text-orange-400 font-medium">
                    {selectedCategory.name}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / personalityQuestions.length) * 100}%` }}
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
                    className="p-6 border-2 border-gray-700 rounded-xl hover:border-orange-500/70 hover:bg-orange-900/20 transition-all duration-200 text-left group bg-gray-800/50"
                  >
                    <h3 className="font-bold text-white mb-2 group-hover:text-orange-400">
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
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl text-center border border-orange-900/50">
              <div className="mb-8">
                <Sparkles className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Channel Divine Fire
                </h2>
                <p className="text-gray-300">
                  Quorra will now forge templates specifically blessed for your {selectedCategory.name} business
                </p>
              </div>

              <div className="bg-gray-900/60 border border-orange-900/30 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-white mb-4">Your Divine Essence:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  {Object.entries(brandPersonality).map(([key, value]) => {
                    const question = personalityQuestions.find(q => q.id === key);
                    const answer = question.options.find(o => o.id === value);
                    return (
                      <div key={key} className="text-center">
                        <div className="font-medium text-gray-300">{question.question.replace('?', '')}</div>
                        <div className="text-orange-400">{answer.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button 
                onClick={startGeneration}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-medium hover:from-orange-500 hover:to-red-500 transition-all duration-200 flex items-center justify-center gap-2 mx-auto shadow-lg"
              >
                <Wand2 className="w-5 h-5" />
                Forge My Templates
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Generation Progress Step
  if (currentStep === 'generating') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-orange-900 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 shadow-xl border border-orange-900/50">
            <div className="mb-8">
              <img 
                src="/src/assets/images/quorra-goddess.png" 
                alt="Quorra - Goddess of Smithing"
                className="w-24 h-24 mx-auto mb-6 opacity-90"
              />
              <h2 className="text-3xl font-bold text-white mb-4">
                Channeling Divine Fire...
              </h2>
              <p className="text-gray-300">
                The Goddess of Smithing is forging templates blessed with your sacred essence
              </p>
            </div>

            <div className="mb-8">
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500 relative"
                  style={{ width: `${generatingProgress}%` }}
                >
                  <div className="absolute right-0 top-0 w-6 h-3 bg-yellow-400 rounded-full animate-pulse" />
                </div>
              </div>
              <div className="text-2xl font-bold text-orange-400">
                {Math.round(generatingProgress)}%
              </div>
            </div>

            <div className="text-left space-y-2 text-sm text-gray-400">
              <div className={`${generatingProgress > 20 ? 'text-orange-400' : ''}`}>
                ✨ Analyzing {selectedCategory.name} conversion patterns...
              </div>
              <div className={`${generatingProgress > 40 ? 'text-orange-400' : ''}`}>
                🎨 Applying divine color psychology...
              </div>
              <div className={`${generatingProgress > 60 ? 'text-orange-400' : ''}`}>
                📝 Selecting blessed typography...
              </div>
              <div className={`${generatingProgress > 80 ? 'text-orange-400' : ''}`}>
                🔥 Forging final templates...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results Step
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-orange-900">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-8 h-8 text-yellow-400" />
              <h1 className="text-3xl font-bold">
                Your Divine Templates Have Been Forged
              </h1>
            </div>
            <p className="text-gray-300">
              Blessed specifically for your {selectedCategory.name} business with divine intelligence
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {generatedTemplates.map(template => (
            <div key={template.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-orange-900/50">
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800">
                <img 
                  src={template.preview} 
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
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
                      <span key={index} className="bg-orange-900/40 text-orange-300 px-2 py-1 rounded text-xs border border-orange-800/50">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-900/30 border border-blue-800/50 rounded-lg p-3 mb-6">
                  <div className="text-xs text-blue-300 font-medium mb-1">🤖 AI Reasoning:</div>
                  <div className="text-xs text-blue-200">{template.aiReasoning}</div>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-xl font-medium hover:from-orange-500 hover:to-red-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg">
                  Use This Template
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              setCurrentStep('category');
              setSelectedCategory(null);
              setBrandPersonality({});
              setGeneratingProgress(0);
            }}
            className="border border-orange-500 text-orange-400 px-6 py-3 rounded-xl hover:bg-orange-900/20 transition-colors"
          >
            Forge Different Templates
          </button>
        </div>
      </div>
    </div>
  );
};

export default AITemplatesPage;