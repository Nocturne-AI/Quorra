import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, Code, Palette, Users, Star, CheckCircle, Play, ChevronDown, Shield, Flame } from 'lucide-react';

const QuorraHomepage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [fireParticles, setFireParticles] = useState([]);

  // Create floating fire particles effect
  useEffect(() => {
    const particles = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 3
      });
    }
    setFireParticles(particles);
  }, []);

  const features = [
    {
      icon: <Shield className="w-12 h-12 text-orange-400" />,
      title: "Secure Framework",
      description: "Built with divine protection and enterprise-grade security. Your digital forge is protected by the goddess herself."
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-400" />,
      title: "Blazing Fast",
      description: "Powered by divine fire for lightning-fast performance. 87% smaller CSS that loads 3x faster than frameworks."
    },
    {
      icon: <Flame className="w-12 h-12 text-orange-400" />,
      title: "Heat-forged Performance",
      description: "Tempered in the sacred forge for maximum optimization. Clean code blessed by Quorra's divine craftsmanship."
    }
  ];

  const industries = [
    { 
      name: "Healthcare", 
      icon: "/src/assets/images/icons/industries/healthcare.png", 
      count: "2.1K+" 
    },
    { 
      name: "Restaurants", 
      icon: "/src/assets/images/icons/industries/restaurant.png", 
      count: "1.8K+" 
    },
    { 
      name: "Technology", 
      icon: "/src/assets/images/icons/industries/technology.png", 
      count: "3.2K+" 
    },
    { 
      name: "E-commerce", 
      icon: "/src/assets/images/icons/industries/ecommerce.png", 
      count: "2.7K+" 
    },
    { 
      name: "Finance", 
      icon: "/src/assets/images/icons/industries/finance.png", 
      count: "1.4K+" 
    },
    { 
      name: "Real Estate", 
      icon: "/src/assets/images/icons/industries/realestate.png", 
      count: "1.9K+" 
    },
    { 
      name: "Education", 
      icon: "/src/assets/images/icons/industries/education.png", 
      count: "1.3K+" 
    },
    { 
      name: "Fitness", 
      icon: "/src/assets/images/icons/industries/fitness.png", 
      count: "1.1K+" 
    },
    { 
      name: "Non-Profit", 
      icon: "/src/assets/images/icons/industries/nonprofit.png", 
      count: "950+" 
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Restaurant Owner",
      business: "Golden Lotus Bistro",
      quote: "QUORRA transformed my vision into a website that captures the soul of my restaurant. Reservations increased 340% in just two months.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b67de8f8?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Healthcare Practice",
      business: "Wellness Medical Group",
      quote: "The AI understood exactly what patients need to feel comfortable. Our appointment bookings tripled, and patients say the site feels 'caring and professional.'",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Emily Davidson",
      role: "Tech Startup",
      business: "FlowMetrics SaaS",
      quote: "I was amazed how QUORRA generated a site that perfectly showcased our product features. We got our first enterprise client within weeks of launch.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Volcanic Dark Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900/20 -z-10" />
      
      {/* Floating Fire Particles */}
      <div className="fixed inset-0 pointer-events-none -z-5">
        {fireParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-orange-400 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              boxShadow: '0 0 6px #ff8c42, 0 0 12px #ff6b35'
            }}
          />
        ))}
      </div>

      {/* Lava Crack Effects */}
      <div className="fixed top-20 left-10 w-1 h-32 bg-gradient-to-b from-orange-500 to-red-600 opacity-60 blur-sm -z-5" 
           style={{ boxShadow: '0 0 20px #ff8c42' }} />
      <div className="fixed top-40 right-15 w-1 h-24 bg-gradient-to-b from-orange-500 to-red-600 opacity-40 blur-sm -z-5"
           style={{ boxShadow: '0 0 15px #ff6b35' }} />
      <div className="fixed bottom-32 left-3/4 w-1 h-28 bg-gradient-to-b from-orange-500 to-red-600 opacity-50 blur-sm -z-5"
           style={{ boxShadow: '0 0 18px #ff8c42' }} />

      {/* Navigation */}
      <nav className="relative z-50 bg-black/80 backdrop-blur-lg border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img 
                src="/src/assets/images/logos/quorra-logo-dark.png" 
                alt="QUORRA - Goddess of Smithing"
                className="w-10 h-10"
                style={{ filter: 'drop-shadow(0 0 8px #ff8c42)' }}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">QUORRA</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-orange-400 transition-colors">Features</a>
              <a href="#templates" className="text-gray-300 hover:text-orange-400 transition-colors">Templates</a>
              <a href="#pricing" className="text-gray-300 hover:text-orange-400 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">About</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-gray-300 hover:text-white transition-colors">Sign In</button>
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-lg hover:from-orange-500 hover:to-red-500 transition-all duration-200 font-medium border border-orange-500/50">
                Start Creating
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Fire Glow */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Epic Flaming Q Logo */}
          <div className="mb-12">
            <div className="relative inline-block">
              {/* Main Q Logo */}
              <div className="w-48 h-48 mx-auto relative">
                {/* Outer Fire Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-red-600 blur-md opacity-80 animate-pulse" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-orange-400 to-red-500 blur-sm opacity-60" />
                
                {/* Q Letter */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-orange-600 to-red-700 flex items-center justify-center border-4 border-orange-400/50"
                     style={{ boxShadow: '0 0 50px #ff8c42, inset 0 0 30px rgba(255, 107, 53, 0.3)' }}>
                  <span className="text-8xl font-bold text-white drop-shadow-2xl">Q</span>
                  {/* Lava Cracks on Q */}
                  <div className="absolute inset-4 rounded-full border-2 border-orange-300/30" />
                  <div className="absolute top-8 left-12 w-16 h-1 bg-orange-300/50 blur-sm" />
                  <div className="absolute bottom-12 right-8 w-12 h-1 bg-orange-300/40 blur-sm" />
                </div>
                
                {/* Floating Fire Particles around Q */}
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                <div className="absolute top-8 -left-6 w-2 h-2 bg-orange-300 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>

          {/* QUORRA Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
              QUORRA
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-orange-300 mb-12 font-semibold tracking-wider">
            FORGE THE FUTURE
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-orange-500 hover:to-red-500 transition-all duration-200 border-2 border-orange-500/50 shadow-2xl">
              Get Started
            </button>
            <button className="border-2 border-orange-500 text-orange-400 px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-500/10 transition-all duration-200 shadow-xl">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            ABOUT US
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Quorra is dedicated to forging innovation through technology, design, and resilience. 
            Channel the divine fire of clean code and transform your digital vision into reality.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              FEATURES
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl p-8 border-2 border-orange-900/30 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-orange-400 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Showcase */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Sacred Domains Mastered
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Divine intelligence trained on 15+ industries, each with unique conversion psychology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/60 to-black/60 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200 border border-orange-900/30 backdrop-blur-sm">
                <div className="mb-3 flex justify-center">
                  <img 
                    src={industry.icon} 
                    alt={industry.name}
                    className="w-12 h-12 object-contain"
                    style={{ filter: 'drop-shadow(0 0 8px #ff8c42)' }}
                  />
                </div>
                <h3 className="text-orange-400 font-semibold mb-1">{industry.name}</h3>
                <p className="text-gray-400 text-sm">{industry.count} blessed</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Tiers Pricing */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Sacred Tiers of Power
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the divine blessing that matches your creative ambitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ember Tier */}
            <div className="bg-gradient-to-br from-gray-800/60 to-black/60 rounded-xl p-6 border border-orange-900/30 backdrop-blur-sm relative overflow-hidden">
              <div className="text-center mb-6">
                <img 
                  src="/src/assets/images/icons/tiers/ember-icon.png" 
                  alt="Ember - The Divine Spark"
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ filter: 'drop-shadow(0 0 12px #ff8c42)' }}
                />
                <h3 className="text-2xl font-bold text-orange-400 mb-2">Ember</h3>
                <p className="text-gray-400 text-sm mb-4">The Divine Spark</p>
                <div className="text-3xl font-bold text-white">FREE</div>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>• 1 active project</li>
                <li>• Full visual editor</li>
                <li>• All industry intelligence</li>
                <li>• Sparky AI access</li>
                <li>• Clean CSS export</li>
              </ul>
            </div>

            {/* Hammer Tier */}
            <div className="bg-gradient-to-br from-gray-800/60 to-black/60 rounded-xl p-6 border-2 border-orange-500/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">Popular</div>
              <div className="text-center mb-6">
                <img 
                  src="/src/assets/images/icons/tiers/hammer-icon.png" 
                  alt="Hammer - Sacred Tool"
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ filter: 'drop-shadow(0 0 12px #ff8c42)' }}
                />
                <h3 className="text-2xl font-bold text-orange-400 mb-2">Hammer</h3>
                <p className="text-gray-400 text-sm mb-4">Sacred Tool</p>
                <div className="text-3xl font-bold text-white">$35<span className="text-lg text-gray-400">/mo</span></div>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>• 10 active projects</li>
                <li>• Full visual editor</li>
                <li>• All industry intelligence</li>
                <li>• Full Sparky AI access</li>
                <li>• Clean CSS export</li>
                <li>• Version history (30 days)</li>
              </ul>
            </div>

            {/* Anvil Tier */}
            <div className="bg-gradient-to-br from-gray-800/60 to-black/60 rounded-xl p-6 border border-orange-900/30 backdrop-blur-sm relative overflow-hidden">
              <div className="text-center mb-6">
                <img 
                  src="/src/assets/images/icons/tiers/anvil-icon.png" 
                  alt="Anvil - Blessed Workspace"
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ filter: 'drop-shadow(0 0 12px #ff8c42)' }}
                />
                <h3 className="text-2xl font-bold text-orange-400 mb-2">Anvil</h3>
                <p className="text-gray-400 text-sm mb-4">Blessed Workspace</p>
                <div className="text-3xl font-bold text-white">$59<span className="text-lg text-gray-400">/mo</span></div>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>• 25 active projects</li>
                <li>• Advanced CSS features</li>
                <li>• Priority support</li>
                <li>• Version history (90 days)</li>
                <li>• Advanced export options</li>
              </ul>
            </div>

            {/* Foundry Tier */}
            <div className="bg-gradient-to-br from-gray-800/60 to-black/60 rounded-xl p-6 border border-orange-900/30 backdrop-blur-sm relative overflow-hidden">
              <div className="text-center mb-6">
                <img 
                  src="/src/assets/images/icons/tiers/foundry-icon.png" 
                  alt="Foundry - Divine Realm"
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ filter: 'drop-shadow(0 0 12px #ff8c42)' }}
                />
                <h3 className="text-2xl font-bold text-orange-400 mb-2">Foundry</h3>
                <p className="text-gray-400 text-sm mb-4">Divine Realm</p>
                <div className="text-3xl font-bold text-white">$129<span className="text-lg text-gray-400">/mo</span></div>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>• Unlimited projects</li>
                <li>• Team collaboration (5 users)</li>
                <li>• API access</li>
                <li>• Dedicated support</li>
                <li>• Unlimited version history</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Blessed by Divine Creation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real craftspeople sharing their transformation stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/60 to-black/60 rounded-xl p-6 border border-orange-900/30 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-orange-500/30"
                  />
                  <div>
                    <h4 className="text-orange-400 font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-orange-300 text-sm">{testimonial.business}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Ready to Forge Your Path?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-4 rounded-lg font-bold text-xl hover:from-orange-500 hover:to-red-500 transition-all duration-200 border-2 border-orange-500/50 shadow-2xl">
              Start Building
            </button>
            <button className="border-2 border-orange-500 text-orange-400 px-12 py-4 rounded-lg font-bold text-xl hover:bg-orange-500/10 transition-all duration-200 shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-orange-500/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/src/assets/images/logos/quorra-logo-dark.png" 
                  alt="QUORRA"
                  className="w-8 h-8"
                  style={{ filter: 'drop-shadow(0 0 6px #ff8c42)' }}
                />
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">QUORRA</span>
              </div>
              <p className="text-gray-400">
                Goddess of Smithing, forging the future of web creation through divine intelligence.
              </p>
            </div>
            
            <div>
              <h4 className="text-orange-400 font-semibold mb-4">Sacred Domains</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Restaurants</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">E-commerce</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-orange-400 font-semibold mb-4">Divine Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">AI Templates</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Sparky Assistant</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Design Intelligence</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Clean Code Export</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-orange-400 font-semibold mb-4">Sacred Tiers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Ember (Free)</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Hammer ($35/mo)</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Anvil ($59/mo)</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Foundry ($129/mo)</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-orange-500/20 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 QUORRA. Blessed by the Goddess of Smithing. Forge the Future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuorraHomepage;