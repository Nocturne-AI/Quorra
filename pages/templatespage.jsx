import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, Zap, Star, Clock, ChevronRight, Wand2 } from 'lucide-react';

const AICreationPage = () => {
  const [currentStep, setCurrentStep] = useState('category');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [brandPersonality, setBrandPersonality] = useState({});
  const [generatingProgress, setGeneratingProgress] = useState(0);

  const businessCategories = [
    {
      id: 'healthcare',
      name: 'Healthcare & Medical',
      icon: '/images/icons/industries/healthcare.png',
      description: 'Compassionate authority with trust-building elements',
      conversionType: 'Need → Trust → Care'
    },
    {
      id: 'restaurant',
      name: 'Restaurant & Food',
      icon: '/images/icons/industries/restaurant.png',
      description: 'Appetite-driven design with visual storytelling',
      conversionType: 'Appetite → Reservation'
    },
    {
      id: 'technology',
      name: 'SaaS & Technology',
      icon: '/images/icons/industries/technology.png',
      description: 'Feature demonstration with trial conversion',
      conversionType: 'Discovery → Trial → Adoption'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce & Retail',
      icon: '/images/icons/industries/ecommerce.png',
      description: 'Purchase optimization with demographic targeting',
      conversionType: 'Browse → Purchase'
    },
    {
      id: 'finance',
      name: 'Finance & Banking',
      icon: '/images/icons/industries/finance.png',
      description: 'Trust-based compliance and consultation',
      conversionType: 'Research → Evaluate → Trust → Engage'
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      icon: '/images/icons/industries/realestate.png',
      description: 'Property visualization and local expertise',
      conversionType: 'Browse → Visualize → Connect'
    },
    {
      id: 'professional',
      name: 'Professional Services',
      icon: '/images/icons/industries/professional.png',
      description: 'Authority-based consultation building',
      conversionType: 'Need → Research → Consultation'
    },
    {
      id: 'creative',
      name: 'Creative & Portfolio',
      icon: '/images/icons/industries/creative.png',
      description: 'Audience-building engagement focus',
      conversionType: 'Discover → Engage → Follow'
    },
    {
      id: 'nonprofit',
      name: 'Non-Profit & Charity',
      icon: '/images/icons/industries/nonprofit.png',
      description: 'Mission-driven donation optimization',
      conversionType: 'Discover → Connect → Act → Sustain'
    },
    {
      id: 'education',
      name: 'Education & Learning',
      icon: '/images/icons/industries/education.png',
      description: 'Institutional authority and student journey',
      conversionType: 'Explore → Evaluate → Apply → Enroll'
    },
    {
      id: 'elearning',
      name: 'E-learning & Courses',
      icon: '/images/icons/industries/elearning.png',
      description: 'Course-centric skill development',
      conversionType: 'Explore → Sample → Enroll → Complete'
    },
    {
      id: 'fitness',
      name: 'Fitness & Wellness',
      icon: '/images/icons/industries/fitness.png',
      description: 'Transformation-focused community building',
      conversionType: 'Motivate → Inspire → Trial → Transform'
    },
    {
      id: 'eventplanning',
      name: 'Event & Wedding Planning',
      icon: '/images/icons/industries/eventplanning.png',
      description: 'Portfolio-driven emotional storytelling',
      conversionType: 'Dream → Inspire → Plan → Book'
    },
    {
      id: 'industrial',
      name: 'Manufacturing & Industrial',
      icon: '/images/icons/industries/industrial.png',
      description: 'Technical specification and quality focus',
      conversionType: 'Research → Evaluate → Quote → Partner'
    },
    {
      id: 'localservices',
      name: 'Local Services',
      icon: '/images/icons/industries/localservices.png',
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
      features: ['Appointment Booking', 'Doctor Profiles', 'Trust Signals', 'Patient Testimonials'],
      aiReasoning: 'Combined healthcare trust patterns with warm personality for approachable authority'
    },
    {
      id: 2,
      name: 'Healing Sanctuary',
      style: 'Compassionate care with modern design',
      features: ['Service Overview', 'Calm Color Palette', 'Patient Journey', 'Contact Forms'],
      aiReasoning: 'Emphasized calming elements while maintaining professional medical credibility'
    },
    {
      id: 3,
      name: 'Wellness Expert',
      style: 'Premium healthcare with luxury touches',
      features: ['Executive Profiles', 'Premium Imagery', 'Consultation Booking', 'Credentials Display'],
      aiReasoning: 'Elevated professional design for high-end healthcare positioning'
    }
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentStep('personality');
  };

  const handleBlankCanvas = () => {
    window.location.href = '/editor';
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

  const styles = {
    emberEffect: {
      position: 'absolute',
      borderRadius: '50%',
      animation: 'pulse 2s infinite'
    }
  };

  // Category Selection Step
  if (currentStep === 'category') {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #1f2937, #000000, #1f2937)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating Embers */}
        <div style={{ position: 'absolute', inset: '0', pointerEvents: 'none' }}>
          <div style={{ ...styles.emberEffect, width: '8px', height: '8px', background: '#f97316', opacity: '0.6', top: '10%', left: '20%' }}></div>
          <div style={{ ...styles.emberEffect, width: '4px', height: '4px', background: '#ef4444', opacity: '0.4', animationDelay: '0.5s', top: '25%', right: '15%' }}></div>
          <div style={{ ...styles.emberEffect, width: '12px', height: '12px', background: '#eab308', opacity: '0.3', animationDelay: '1s', bottom: '30%', left: '10%' }}></div>
        </div>

        {/* Header */}
        <div style={{
          background: 'linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(0, 0, 0, 0.9))',
          borderBottom: '1px solid rgba(251, 146, 60, 0.3)'
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 16px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '12px',
                marginBottom: '24px' 
              }}>
                <img 
                  src="/images/sparky-ai-helpful.png" 
                  alt="Sparky - Your Divine AI Guide"
                  style={{ width: '48px', height: '48px' }}
                />
                <h1 style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(to right, #fb923c, #ef4444)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Channel Your Divine Vision
                </h1>
              </div>
              <p style={{ fontSize: '20px', color: '#d1d5db', maxWidth: '768px', margin: '0 auto' }}>
                I'm Sparky! I'll forge custom designs blessed with divine intelligence, 
                crafted specifically for your business and optimized for conversion.
              </p>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '48px 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
              Step 1: Choose Your Sacred Domain
            </h2>
            <p style={{ color: '#9ca3af' }}>
              Each business category has unique conversion patterns blessed by centuries of divine wisdom
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {businessCategories.map(category => (
              <div 
                key={category.id}
                onClick={() => handleCategorySelect(category)}
                style={{
                  background: 'linear-gradient(to bottom right, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(251, 146, 60, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(251, 146, 60, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(251, 146, 60, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    margin: '0 auto 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid rgba(251, 146, 60, 0.2)'
                  }}>
                    <img 
                      src={category.icon} 
                      alt={`${category.name} Icon`}
                      style={{ 
                        width: '48px', 
                        height: '48px',
                        objectFit: 'contain',
                        filter: 'brightness(1.2) contrast(1.1) drop-shadow(0 0 8px rgba(251, 146, 60, 0.3))'
                      }}
                      onError={(e) => {
                        // Fallback to emoji if custom icon fails to load
                        console.log(`Failed to load icon: ${category.icon}`);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ 
                      display: 'none',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      fontSize: '32px',
                      filter: 'brightness(1.2)'
                    }}>
                      {/* Fallback emojis */}
                      {category.id === 'healthcare' && '🏥'}
                      {category.id === 'restaurant' && '🍽️'}
                      {category.id === 'technology' && '💻'}
                      {category.id === 'ecommerce' && '🛍️'}
                      {category.id === 'finance' && '💰'}
                      {category.id === 'realestate' && '🏠'}
                      {category.id === 'professional' && '💼'}
                      {category.id === 'creative' && '🎨'}
                      {category.id === 'nonprofit' && '❤️'}
                      {category.id === 'education' && '📚'}
                      {category.id === 'elearning' && '💡'}
                      {category.id === 'fitness' && '💪'}
                      {category.id === 'eventplanning' && '💒'}
                      {category.id === 'industrial' && '🏭'}
                      {category.id === 'localservices' && '🔧'}
                    </div>
                  </div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#fdba74',
                    marginBottom: '8px'
                  }}>
                    {category.name}
                  </h3>
                  <p style={{
                    color: '#9ca3af',
                    fontSize: '14px',
                    marginBottom: '16px'
                  }}>
                    {category.description}
                  </p>
                  <div style={{
                    background: 'rgba(251, 146, 60, 0.1)',
                    border: '1px solid rgba(251, 146, 60, 0.3)',
                    borderRadius: '8px',
                    padding: '12px',
                    marginBottom: '16px'
                  }}>
                    <div style={{ fontSize: '12px', color: '#fb923c', fontWeight: '600', marginBottom: '4px' }}>
                      Conversion Psychology:
                    </div>
                    <div style={{ fontSize: '14px', color: '#fed7aa' }}>
                      {category.conversionType}
                    </div>
                  </div>
                  <button style={{
                    width: '100%',
                    background: 'linear-gradient(to right, #f97316, #ef4444)',
                    border: 'none',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s'
                  }}>
                    Select Domain
                    <ChevronRight style={{ width: '16px', height: '16px' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Blank Canvas Option */}
          <div style={{ marginTop: '48px', maxWidth: '640px', margin: '48px auto 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
                Or Channel Pure Divine Fire
              </h3>
              <p style={{ color: '#9ca3af' }}>
                Start with a blank canvas and let Sparky guide your creative vision
              </p>
            </div>
            
            <div 
              onClick={handleBlankCanvas}
              style={{
                background: 'linear-gradient(to right, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))',
                borderRadius: '16px',
                padding: '32px',
                border: '2px solid rgba(251, 146, 60, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(251, 146, 60, 0.8)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(251, 146, 60, 0.5)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(to right, #f97316, #ef4444)',
                  borderRadius: '50%'
                }}>
                  <Sparkles style={{ width: '40px', height: '40px', color: 'white' }} />
                </div>
                <h4 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '12px'
                }}>
                  Start from Scratch
                </h4>
                <p style={{ color: '#9ca3af', marginBottom: '24px' }}>
                  Channel the raw power of divine creation. I'll guide you through 
                  building your perfect website from pure inspiration.
                </p>
                <button style={{
                  background: 'linear-gradient(to right, #f97316, #ef4444)',
                  border: 'none',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Wand2 style={{ width: '20px', height: '20px' }} />
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
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #1f2937, #000000, #1f2937)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating Embers */}
        <div style={{ position: 'absolute', inset: '0', pointerEvents: 'none' }}>
          <div style={{ ...styles.emberEffect, width: '8px', height: '8px', background: '#f97316', opacity: '0.6', top: '10%', left: '20%' }}></div>
          <div style={{ ...styles.emberEffect, width: '4px', height: '4px', background: '#ef4444', opacity: '0.4', animationDelay: '0.5s', top: '25%', right: '15%' }}></div>
        </div>

        <div style={{
          background: 'linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(0, 0, 0, 0.9))',
          borderBottom: '1px solid rgba(251, 146, 60, 0.3)'
        }}>
          <div style={{ maxWidth: '768px', margin: '0 auto', padding: '64px 16px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
                <img 
                  src="/images/sparky-ai-helpful.png" 
                  alt="Sparky"
                  style={{ width: '32px', height: '32px' }}
                />
                <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>
                  Step 2: Define Your Brand Essence
                </h1>
              </div>
              <p style={{ color: '#9ca3af' }}>
                I'll channel these insights to forge your perfect design
              </p>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '48px 16px' }}>
          {!isComplete ? (
            <div style={{
              background: 'linear-gradient(to bottom right, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))',
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid rgba(251, 146, 60, 0.3)'
            }}>
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '14px', color: '#9ca3af' }}>
                    Question {currentQuestionIndex + 1} of {personalityQuestions.length}
                  </span>
                  <span style={{ fontSize: '14px', color: '#fb923c', fontWeight: '600' }}>
                    {selectedCategory.name}
                  </span>
                </div>
                <div style={{ width: '100%', background: 'rgba(55, 65, 81, 0.5)', borderRadius: '9999px', height: '8px' }}>
                  <div 
                    style={{
                      background: 'linear-gradient(to right, #f97316, #ef4444)',
                      height: '8px',
                      borderRadius: '9999px',
                      transition: 'width 0.3s',
                      width: `${((currentQuestionIndex + 1) / personalityQuestions.length) * 100}%`
                    }}
                  />
                </div>
              </div>

              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '32px' }}>
                {currentQuestion.question}
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                {currentQuestion.options.map(option => (
                  <button
                    key={option.id}
                    onClick={() => handlePersonalityAnswer(currentQuestion.id, option.id)}
                    style={{
                      padding: '24px',
                      border: '2px solid rgba(55, 65, 81, 0.5)',
                      borderRadius: '12px',
                      background: 'rgba(31, 41, 55, 0.5)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(251, 146, 60, 0.6)';
                      e.currentTarget.style.background = 'rgba(251, 146, 60, 0.1)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(55, 65, 81, 0.5)';
                      e.currentTarget.style.background = 'rgba(31, 41, 55, 0.5)';
                    }}
                  >
                    <h3 style={{ fontWeight: 'bold', color: '#fdba74', marginBottom: '8px' }}>
                      {option.label}
                    </h3>
                    <p style={{ color: '#9ca3af', fontSize: '14px' }}>
                      {option.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{
              background: 'linear-gradient(to bottom right, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center',
              border: '1px solid rgba(251, 146, 60, 0.3)'
            }}>
              <div style={{ marginBottom: '32px' }}>
                <Sparkles style={{ width: '64px', height: '64px', color: '#fb923c', margin: '0 auto 16px' }} />
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
                  Ready to Channel Divine Fire
                </h2>
                <p style={{ color: '#9ca3af' }}>
                  I'll now forge designs specifically blessed for your {selectedCategory.name} business
                </p>
              </div>

              <div style={{
                background: 'rgba(17, 24, 39, 0.6)',
                border: '1px solid rgba(251, 146, 60, 0.2)',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '32px'
              }}>
                <h3 style={{ fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>Your Divine Essence:</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', fontSize: '14px' }}>
                  {Object.entries(brandPersonality).map(([key, value]) => {
                    const question = personalityQuestions.find(q => q.id === key);
                    const answer = question.options.find(o => o.id === value);
                    return (
                      <div key={key} style={{ textAlign: 'center' }}>
                        <div style={{ fontWeight: '500', color: '#9ca3af' }}>{question.question.replace('?', '')}</div>
                        <div style={{ color: '#fb923c' }}>{answer.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button 
                onClick={startGeneration}
                style={{
                  background: 'linear-gradient(to right, #f97316, #ef4444)',
                  border: 'none',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Wand2 style={{ width: '20px', height: '20px' }} />
                Forge My Designs
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
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #1f2937, #000000, #1f2937)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '16px', textAlign: 'center' }}>
          <div style={{
            background: 'linear-gradient(to bottom right, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))',
            borderRadius: '16px',
            padding: '48px',
            border: '1px solid rgba(251, 146, 60, 0.3)'
          }}>
            <div style={{ marginBottom: '32px' }}>
              <img 
                src="/images/sparkworking.jpg" 
                alt="Sparky Working"
                style={{ width: '96px', height: '96px', margin: '0 auto 24px', borderRadius: '50%' }}
              />
              <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
                Channeling Divine Fire...
              </h2>
              <p style={{ color: '#9ca3af' }}>
                I'm forging designs blessed with your sacred essence
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <div style={{ width: '100%', background: 'rgba(55, 65, 81, 0.5)', borderRadius: '9999px', height: '12px', marginBottom: '16px' }}>
                <div 
                  style={{
                    background: 'linear-gradient(to right, #f97316, #ef4444)',
                    height: '12px',
                    borderRadius: '9999px',
                    transition: 'width 0.5s',
                    width: `${generatingProgress}%`,
                    position: 'relative'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    right: '0',
                    top: '0',
                    width: '24px',
                    height: '12px',
                    background: '#fbbf24',
                    borderRadius: '9999px',
                    animation: 'pulse 1s infinite'
                  }} />
                </div>
              </div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#fb923c' }}>
                {Math.round(generatingProgress)}%
              </div>
            </div>

            <div style={{ textAlign: 'left', space: 'y-2', fontSize: '14px', color: '#9ca3af' }}>
              <div style={{ marginBottom: '8px', color: generatingProgress > 20 ? '#fb923c' : '#9ca3af' }}>
                ✨ Analyzing {selectedCategory.name} conversion patterns...
              </div>
              <div style={{ marginBottom: '8px', color: generatingProgress > 40 ? '#fb923c' : '#9ca3af' }}>
                🎨 Applying divine color psychology...
              </div>
              <div style={{ marginBottom: '8px', color: generatingProgress > 60 ? '#fb923c' : '#9ca3af' }}>
                📝 Selecting blessed typography...
              </div>
              <div style={{ marginBottom: '8px', color: generatingProgress > 80 ? '#fb923c' : '#9ca3af' }}>
                🔥 Forging final designs...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results Step
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #1f2937, #000000, #1f2937)',
      color: 'white',
      position: 'relative'
    }}>
      <div style={{
        background: 'linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(0, 0, 0, 0.9))',
        borderBottom: '1px solid rgba(251, 146, 60, 0.3)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 16px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
              <Star style={{ width: '32px', height: '32px', color: '#fbbf24' }} />
              <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>
                Your Divine Designs Have Been Forged
              </h1>
            </div>
            <p style={{ color: '#9ca3af' }}>
              Blessed specifically for your {selectedCategory.name} business with divine intelligence
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          {generatedTemplates.map(template => (
            <div key={template.id} style={{
              background: 'linear-gradient(to bottom right, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(251, 146, 60, 0.3)'
            }}>
              <div style={{
                height: '192px',
                background: 'linear-gradient(to bottom right, rgba(55, 65, 81, 0.5), rgba(31, 41, 55, 0.5))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '64px', marginBottom: '8px' }}>🔥</div>
                  <p style={{ color: '#9ca3af', fontSize: '14px' }}>Design Preview</p>
                </div>
              </div>
              
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
                  {template.name}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '16px' }}>
                  {template.style}
                </p>

                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>Divine Features:</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {template.features.map((feature, index) => (
                      <span key={index} style={{
                        background: 'rgba(251, 146, 60, 0.2)',
                        color: '#fed7aa',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        border: '1px solid rgba(251, 146, 60, 0.3)'
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '8px',
                  padding: '12px',
                  marginBottom: '24px'
                }}>
                  <div style={{ fontSize: '12px', color: '#93c5fd', fontWeight: '600', marginBottom: '4px' }}>
                    🤖 Sparky's Reasoning:
                  </div>
                  <div style={{ fontSize: '12px', color: '#dbeafe' }}>
                    {template.aiReasoning}
                  </div>
                </div>

                <button style={{
                  width: '100%',
                  background: 'linear-gradient(to right, #f97316, #ef4444)',
                  border: 'none',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  Use This Design
                  <ArrowRight style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button 
            onClick={() => {
              setCurrentStep('category');
              setSelectedCategory(null);
              setBrandPersonality({});
              setGeneratingProgress(0);
            }}
            style={{
              border: '1px solid rgba(251, 146, 60, 0.5)',
              background: 'transparent',
              color: '#fb923c',
              padding: '12px 24px',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(251, 146, 60, 0.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
            }}
          >
            Forge Different Designs
          </button>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default AICreationPage;