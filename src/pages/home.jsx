import React, { useState } from 'react';
import { ArrowRight, Sparkles, Zap, Code, Palette, Users, Star, CheckCircle, Play, ChevronDown } from 'lucide-react';

const QuorraHomepage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-orange-400" />,
      title: "AI-Powered Creation",
      description: "Channel divine intelligence to generate websites optimized for your specific industry and brand personality."
    },
    {
      icon: <Code className="w-8 h-8 text-orange-400" />,
      title: "Clean Code Blessing",
      description: "Export pristine HTML/CSS that's 87% smaller and 3x faster than framework-bloated alternatives."
    },
    {
      icon: <Palette className="w-8 h-8 text-orange-400" />,
      title: "Divine Design Intelligence",
      description: "Pantone-inspired color psychology and award-winning typography automatically applied to your vision."
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", count: "2.1K+" },
    { name: "Restaurants", icon: "🍽️", count: "1.8K+" },
    { name: "Technology", icon: "💻", count: "3.2K+" },
    { name: "E-commerce", icon: "🛍️", count: "2.7K+" },
    { name: "Finance", icon: "💰", count: "1.4K+" },
    { name: "Real Estate", icon: "🏠", count: "1.9K+" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Restaurant Owner",
      business: "Golden Lotus Bistro",
      quote: "QUORRA transformed my vision into a website that captures the soul of my restaurant. Reservations increased 340% in just two months.",
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Marcus Rodriguez",
      role: "Healthcare Practice",
      business: "Wellness Medical Group",
      quote: "The AI understood exactly what patients need to feel comfortable. Our appointment bookings tripled, and patients say the site feels 'caring and professional.'",
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Emily Davidson",
      role: "Tech Startup",
      business: "FlowMetrics SaaS",
      quote: "I was amazed how QUORRA generated a site that perfectly showcased our product features. We got our first enterprise client within weeks of launch.",
      avatar: "/api/placeholder/64/64"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
      {/* Navigation */}
      <nav className="relative z-50 bg-gray-900/80 backdrop-blur-lg border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img 
                src="/src/assets/images/logos/quorra-logo-dark.png" 
                alt="QUORRA - Goddess of Smithing"
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-white">QUORRA</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-orange-400 transition-colors">Features</a>
              <a href="#templates" className="text-gray-300 hover:text-orange-400 transition-colors">Templates</a>
              <a href="#pricing" className="text-gray-300 hover:text-orange-400 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">About</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-gray-300 hover:text-white transition-colors">Sign In</button>
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-lg hover:from-orange-500 hover:to-red-500 transition-all duration-200 font-medium">
                Start Creating
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-orange-900/30" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Logo */}
          <div className="mb-8">
            <img 
              src="/src/assets/images/logos/quorra-logo-dark.png" 
              alt="QUORRA - Goddess of Smithing"
              className="w-32 h-32 mx-auto mb-6"
            />
          </div>

          {/* Hero Content */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              FORGE
            </span>
            <br />
            <span className="text-white">THE FUTURE</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Channel the <span className="text-orange-400 font-semibold">Goddess of Smithing</span> to create 
            websites blessed with divine intelligence. AI-powered design that converts visitors into believers.
          </p>

          {/* Hero Stats */}
          <div className="flex justify-center items-center gap-8 mb-12 text-sm">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-400" />
              <span className="text-gray-300">3x Faster Loading</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-orange-400" />
              <span className="text-gray-300">87% Smaller Code</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-400" />
              <span className="text-gray-300">15+ Industries</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-500 hover:to-red-500 transition-all duration-200 flex items-center gap-2 shadow-xl">
              <Sparkles className="w-6 h-6" />
              Channel Divine Fire
              <ArrowRight className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setIsVideoPlaying(true)}
              className="border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-500/10 transition-all duration-200 flex items-center gap-2"
            >
              <Play className="w-6 h-6" />
              Watch the Magic
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Industry Showcase */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Sacred Domains Mastered
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Divine intelligence trained on 15+ industries, each with unique conversion psychology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200 border border-orange-900/30">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-white font-semibold mb-1">{industry.name}</h3>
                <p className="text-orange-400 text-sm">{industry.count} blessed</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Divine Powers Unleashed
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quorra's blessing transforms your vision into conversion-optimized reality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-orange-900/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sparky Introduction */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Meet Sparky, Your Divine Guide
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Sparky channels Quorra's wisdom to guide you through every step of creation. 
                From industry insights to color psychology, your AI companion ensures every 
                decision aligns with divine design principles.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-400" />
                  <span className="text-gray-300">Remembers your preferences and style</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-400" />
                  <span className="text-gray-300">Provides industry-specific guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-400" />
                  <span className="text-gray-300">Explains design decisions in real-time</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-8 border border-orange-500/30">
                <img 
                  src="/src/assets/images/sparky-ai-helpful.png" 
                  alt="Sparky - Your Divine AI Guide"
                  className="w-48 h-48 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Blessed by Divine Creation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real craftspeople sharing their transformation stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-orange-900/30">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-orange-400 text-sm">{testimonial.business}</p>
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
      <section className="py-20 bg-gradient-to-r from-gray-900 to-orange-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="/src/assets/images/logos/quorra-logo-dark.png" 
            alt="QUORRA - Goddess of Smithing"
            className="w-24 h-24 mx-auto mb-8"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Channel Divine Fire?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of blessed craftspeople who've transformed their vision into reality. 
            Your perfect website awaits the touch of divine intelligence.
          </p>
          <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-4 rounded-xl font-bold text-xl hover:from-orange-500 hover:to-red-500 transition-all duration-200 flex items-center gap-3 mx-auto shadow-2xl">
            <Sparkles className="w-6 h-6" />
            Begin Your Divine Journey
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/src/assets/images/logos/quorra-logo-dark.png" 
                  alt="QUORRA"
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold text-white">QUORRA</span>
              </div>
              <p className="text-gray-400">
                Goddess of Smithing, forging the future of web creation through divine intelligence.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Sacred Domains</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Restaurants</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">E-commerce</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Divine Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">AI Templates</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Sparky Assistant</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Design Intelligence</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Clean Code Export</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Sacred Tiers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Ember (Free)</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Hammer ($35/mo)</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Anvil ($59/mo)</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Foundry ($129/mo)</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
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