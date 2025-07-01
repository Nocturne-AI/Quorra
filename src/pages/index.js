/**
 * QUORRA LANDING PAGE
 * Divine gateway to the Goddess of Smithing
 * "Channel the divine fire of clean code generation"
 */

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Flame, 
  Code, 
  Zap, 
  Shield, 
  Sparkles, 
  ArrowRight,
  Play,
  Star,
  Users,
  Clock,
  Download
} from 'lucide-react';

const QuorraLandingPage = () => {
  const router = useRouter();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "QUORRA generated CSS that was 89% smaller than our Bootstrap site. Performance went through the roof!",
      author: "Sarah Chen",
      role: "Frontend Developer",
      company: "TechFlow",
      rating: 5
    },
    {
      text: "Finally, a visual builder that produces code I'm not embarrassed to show other developers.",
      author: "Marcus Rodriguez",
      role: "Full-Stack Developer", 
      company: "Indie Studio",
      rating: 5
    },
    {
      text: "From design to deployment in 15 minutes. The divine fire is real - this tool is magical.",
      author: "Emily Watson",
      role: "Designer",
      company: "Creative Agency",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Divine Fire Generation",
      description: "Transform visual designs into clean, optimized CSS with goddess-level precision",
      color: "text-orange-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "87% Smaller CSS",
      description: "Generate framework-free code that loads 3x faster than Bootstrap or Tailwind",
      color: "text-blue-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Sparky AI Assistant",
      description: "Your divine messenger guides you through design decisions with intelligent suggestions",
      color: "text-purple-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Industry Intelligence",
      description: "Automatic patterns for 16+ business types - from healthcare to e-commerce",
      color: "text-green-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Ember",
      icon: "🔥",
      price: "Free",
      description: "The divine spark that starts creation",
      features: [
        "1 active project",
        "Full visual editor",
        "All industry intelligence",
        "Sparky AI access",
        "Clean CSS export"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Hammer",
      icon: "🔨",
      price: "$35",
      period: "/month",
      description: "Quorra's sacred tool for professionals",
      features: [
        "10 active projects",
        "Full visual editor",
        "All industry intelligence", 
        "Sparky AI access",
        "Priority support",
        "Version history (30 days)"
      ],
      cta: "Start Creating",
      popular: true
    },
    {
      name: "Anvil",
      icon: "⚖️",
      price: "$59",
      period: "/month",
      description: "Her blessed workspace for advanced users",
      features: [
        "25 active projects",
        "Advanced CSS features",
        "Custom code injection",
        "Priority support",
        "Version history (90 days)",
        "Advanced export options"
      ],
      cta: "Go Pro",
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>QUORRA - Channel the Goddess of Smithing | Divine Website Builder</title>
        <meta name="description" content="Transform visual designs into clean, optimized CSS with QUORRA. Generate framework-free code that's 87% smaller and 3x faster than traditional solutions." />
        <meta name="keywords" content="website builder, visual design, clean CSS, code generation, web development, no-code" />
        <meta property="og:title" content="QUORRA - Divine Website Builder" />
        <meta property="og:description" content="Channel the divine fire of clean code generation" />
        <meta property="og:image" content="/images/quorra-og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        
        {/* Navigation */}
        <nav className="relative z-50 px-4 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">Q</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                QUORRA
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-300 hover:text-orange-400 transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-orange-400 transition-colors">
                Pricing
              </Link>
              <Link href="/docs" className="text-gray-300 hover:text-orange-400 transition-colors">
                Docs
              </Link>
              <button 
                onClick={() => router.push('/editor')}
                className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105"
              >
                Start Creating
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative px-4 py-20">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Divine blessing badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-8">
                <Flame className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-orange-300">Blessed by the Goddess of Smithing</span>
              </div>

              {/* Main headline */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Channel the
                <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                  Divine Fire
                </span>
                of Clean Code
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform visual designs into <span className="text-orange-400 font-semibold">87% smaller CSS</span> that loads 
                <span className="text-orange-400 font-semibold"> 3x faster</span> than frameworks. 
                Design like Canva, export like a divine developer.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button 
                  onClick={() => router.push('/editor')}
                  className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/25"
                >
                  <span className="flex items-center gap-2">
                    <Flame className="w-5 h-5" />
                    Start Forging Free
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
                
                <button className="border border-gray-600 px-8 py-4 rounded-lg font-semibold text-lg hover:border-orange-400 hover:text-orange-400 transition-all">
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </span>
                </button>
              </div>

              {/* Social proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>1,000+ divine craftspeople</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>4.9/5 blessed rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>10,000+ websites forged</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sacred Tools of the
                <span className="block text-orange-400">Divine Forge</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every feature blessed by Quorra herself for maximum performance and divine user experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all hover:transform hover:scale-105"
                >
                  <div className={`${feature.color} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              Blessed by Divine
              <span className="text-orange-400"> Craftspeople</span>
            </h2>
            
            <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="flex justify-center mb-4">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-300 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-orange-400">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                </div>
              </div>
              
              {/* Testimonial indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-orange-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sacred Pricing
                <span className="block text-orange-400">Blessed by Quorra</span>
              </h2>
              <p className="text-xl text-gray-300">
                Choose your path in the divine forge
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border transition-all hover:transform hover:scale-105 ${
                    tier.popular 
                      ? 'border-orange-500 shadow-lg shadow-orange-500/25' 
                      : 'border-gray-700 hover:border-orange-500/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{tier.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-orange-400 mb-2">
                      {tier.price}
                      {tier.period && <span className="text-lg text-gray-400">{tier.period}</span>}
                    </div>
                    <p className="text-gray-400 text-sm">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Zap className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => router.push('/editor')}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      tier.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
                        : 'border border-gray-600 hover:border-orange-400 hover:text-orange-400'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Channel
                <span className="block text-orange-400">Divine Fire?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers and designers who've discovered the power of clean, divine code generation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => router.push('/editor')}
                  className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Flame className="w-5 h-5" />
                    Start Your Divine Journey
                  </span>
                </button>
                
                <button className="border border-gray-600 px-8 py-4 rounded-lg font-semibold text-lg hover:border-orange-400 hover:text-orange-400 transition-all">
                  Schedule a Divine Demo
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                ⚡ No credit card required • 🔥 Start creating in 30 seconds • ✨ Cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold">Q</span>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  QUORRA
                </span>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-orange-400 transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-orange-400 transition-colors">
                  Terms
                </Link>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            
            <div className="text-center text-sm text-gray-500 mt-8 pt-8 border-t border-gray-800">
              🔥 Blessed by Quorra, Goddess of Smithing • Forge the Future • © 2025
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default QuorraLandingPage;