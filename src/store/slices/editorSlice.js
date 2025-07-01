import React, { useState, useEffect } from 'react';
import { Flame, Zap, Crown, Hammer, Shield, Sparkles, ChevronRight, Star, Users, Code, Palette } from 'lucide-react';

const QuorraApp = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [sparkleEffect, setSparkleEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkleEffect(true);
      setTimeout(() => setSparkleEffect(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Navigation Component
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Q</span>
            </div>
            <span className="text-white font-bold text-xl">QUORRA</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => setActiveSection('home')}
              className={`text-gray-300 hover:text-orange-400 transition-colors ${activeSection === 'home' ? 'text-orange-400' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveSection('features')}
              className={`text-gray-300 hover:text-orange-400 transition-colors ${activeSection === 'features' ? 'text-orange-400' : ''}`}
            >
              Features
            </button>
            <button 
              onClick={() => setActiveSection('pricing')}
              className={`text-gray-300 hover:text-orange-400 transition-colors ${activeSection === 'pricing' ? 'text-orange-400' : ''}`}
            >
              Pricing
            </button>
            <button 
              onClick={() => setActiveSection('demo')}
              className={`text-gray-300 hover:text-orange-400 transition-colors ${activeSection === 'demo' ? 'text-orange-400' : ''}`}
            >
              Demo
            </button>
          </div>

          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform">
            Channel Divine Fire
          </button>
        </div>
      </div>
    </nav>
  );

  // Hero Section
  const HeroSection = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900/20 flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-orange-400 rounded-full animate-pulse ${sparkleEffect ? 'opacity-100' : 'opacity-30'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Crown className="w-8 h-8 text-orange-400" />
              <span className="text-orange-400 font-medium">Blessed by the Goddess of Smithing</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Channel the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 block">
                Divine Fire
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Transform your designs into clean, blazing-fast websites with the sacred tools of Quorra. 
              No frameworks, no bloat—just divine craftsmanship that generates code 3x faster and 87% smaller.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Flame className="w-5 h-5" />
                Forge Your Website
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-xl font-semibold hover:bg-orange-500/10 transition-colors flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                See Divine Demo
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">3x</div>
                <div className="text-gray-400">Faster Loading</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">87%</div>
                <div className="text-gray-400">Smaller Code</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">0</div>
                <div className="text-gray-400">Dependencies</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Divine Forge Representation */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl p-8 backdrop-blur-sm border border-orange-500/30">
                <div className="space-y-6">
                  {/* Sparky Assistant */}
                  <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Sparky AI</div>
                      <div className="text-gray-400 text-sm">Divine Guidance Active</div>
                    </div>
                  </div>

                  {/* Code Generation Visualization */}
                  <div className="space-y-3">
                    <div className="text-white font-medium flex items-center gap-2">
                      <Code className="w-4 h-4 text-orange-400" />
                      Sacred Code Forge
                    </div>
                    <div className="bg-gray-800/70 rounded-lg p-3 font-mono text-sm">
                      <div className="text-orange-400">.divine-button &#123;</div>
                      <div className="text-gray-300 ml-4">background: linear-gradient(...);</div>
                      <div className="text-gray-300 ml-4">transition: transform 0.3s;</div>
                      <div className="text-orange-400">&#125;</div>
                    </div>
                  </div>

                  {/* Performance Indicators */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 text-center">
                      <div className="text-green-400 font-bold">2.1s</div>
                      <div className="text-gray-400 text-xs">Load Time</div>
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 text-center">
                      <div className="text-blue-400 font-bold">15KB</div>
                      <div className="text-gray-400 text-xs">CSS Size</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Sacred Tools */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3 animate-bounce">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-3 animate-pulse">
                <Flame className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Features Section
  const FeaturesSection = () => {
    const features = [
      {
        icon: Flame,
        title: "Divine Fire Engine",
        description: "AI-powered code generation that produces clean, framework-free CSS with divine precision",
        color: "from-orange-500 to-red-500"
      },
      {
        icon: Zap,
        title: "Sparky AI Assistant",
        description: "Your divine messenger providing intelligent design guidance and optimization suggestions",
        color: "from-yellow-500 to-orange-500"
      },
      {
        icon: Shield,
        title: "Sacred Performance",
        description: "87% smaller bundles and 3x faster loading times compared to framework-heavy alternatives",
        color: "from-blue-500 to-purple-500"
      },
      {
        icon: Palette,
        title: "Industry Intelligence",
        description: "16+ business categories with psychology-driven color and typography recommendations",
        color: "from-purple-500 to-pink-500"
      },
      {
        icon: Code,
        title: "Clean Code Blessing",
        description: "Generate semantic HTML and maintainable CSS that developers love to work with",
        color: "from-green-500 to-blue-500"
      },
      {
        icon: Users,
        title: "Divine Collaboration",
        description: "Team features blessed for agencies and collaborative divine craftspeople",
        color: "from-pink-500 to-red-500"
      }
    ];

    return (
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Tools of Creation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Blessed by Quorra with divine intelligence that transforms visual design into perfect, performance-optimized code
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-orange-200">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Pricing Section
  const PricingSection = () => {
    const tiers = [
      {
        name: "Ember",
        icon: "🔥",
        price: "Free",
        description: "The divine spark that starts creation",
        features: ["1 active project", "Full visual editor", "All Industry Intelligence", "Sparky AI access", "Clean CSS export"],
        buttonText: "Start Your Journey",
        popular: false
      },
      {
        name: "Hammer",
        icon: "🔨",
        price: "$35",
        period: "/month",
        description: "Quorra's sacred tool",
        features: ["10 active projects", "Full design toolkit", "Version history (30 days)", "Standard support", "No watermarks"],
        buttonText: "Wield the Hammer",
        popular: true
      },
      {
        name: "Anvil",
        icon: "⚖️",
        price: "$59",
        period: "/month",
        description: "Her blessed workspace",
        features: ["25 active projects", "Advanced CSS features", "Version history (90 days)", "Priority support", "Custom code injection"],
        buttonText: "Claim the Anvil",
        popular: false
      },
      {
        name: "Foundry",
        icon: "🏭",
        price: "$129",
        period: "/month",
        description: "Her divine realm",
        features: ["Unlimited projects", "Team collaboration (5 members)", "API access", "Dedicated support", "Advanced integrations"],
        buttonText: "Enter the Foundry",
        popular: false
      }
    ];

    return (
      <div className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Sacred Tier Blessings</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your level of divine power. All blessed by Quorra with the same sacred tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiers.map((tier, index) => (
              <div key={index} className={`bg-gray-800 rounded-2xl p-8 relative ${tier.popular ? 'ring-2 ring-orange-500 scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">{tier.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-6">{tier.description}</p>
                  <div className="text-white">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.period && <span className="text-gray-400">{tier.period}</span>}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-105' 
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {tier.buttonText}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">
              All tiers blessed with the same divine intelligence. Scale as your craft grows.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Demo Section
  const DemoSection = () => (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Witness Divine Creation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Quorra's divine fire transforms visual design into blazing-fast, clean code
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sparky's Divine Guidance</h3>
                  <p className="text-gray-400">Your AI assistant channels Quorra's wisdom</p>
                </div>
              </div>

              <div className="bg-gray-700/50 rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">S</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white">
                      "I see you're creating a healthcare website. Let me channel Quorra's healing wisdom..."
                    </p>
                    <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm">
                      <div className="text-orange-400">/* Divine healing palette */</div>
                      <div className="text-blue-400">--primary: #2563EB; /* Trust blue */</div>
                      <div className="text-green-400">--accent: #FFBE98;  /* Healing peach */</div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2">
                <Flame className="w-5 h-5" />
                Try Divine Demo
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-700/30 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-4">Performance Blessing</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Traditional Framework</span>
                    <span className="text-red-400">847KB • 8.2s</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Quorra Blessed</span>
                    <span className="text-green-400">110KB • 2.1s</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '13%' }}></div>
                  </div>
                </div>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
                <div className="text-3xl font-bold text-orange-400">87% Smaller</div>
                <div className="text-gray-300">Code blessed by divine optimization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <HeroSection />
            <FeaturesSection />
          </>
        );
      case 'features':
        return <FeaturesSection />;
      case 'pricing':
        return <PricingSection />;
      case 'demo':
        return <DemoSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20">
        {renderContent()}
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <span className="text-2xl font-bold">QUORRA</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Channel the divine fire of clean code generation. Blessed by Quorra, Goddess of Smithing.
            </p>
            <div className="flex justify-center gap-6">
              <button className="text-gray-400 hover:text-orange-400 transition-colors">Documentation</button>
              <button className="text-gray-400 hover:text-orange-400 transition-colors">Support</button>
              <button className="text-gray-400 hover:text-orange-400 transition-colors">Community</button>
            </div>
            <div className="border-t border-gray-800 pt-8 text-gray-500 text-sm">
              © 2025 Quorra. All divine rights reserved. Forge the future.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuorraApp;