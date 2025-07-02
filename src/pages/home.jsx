import React from 'react';

const QuorraLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Floating Embers Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-orange-500 rounded-full opacity-60 animate-pulse" style={{top: '10%', left: '20%'}}></div>
        <div className="absolute w-1 h-1 bg-red-500 rounded-full opacity-40 animate-pulse" style={{top: '25%', right: '15%', animationDelay: '0.5s'}}></div>
        <div className="absolute w-3 h-3 bg-yellow-500 rounded-full opacity-30 animate-pulse" style={{bottom: '30%', left: '10%', animationDelay: '1s'}}></div>
        <div className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-50 animate-pulse" style={{bottom: '15%', right: '25%', animationDelay: '1.5s'}}></div>
        <div className="absolute w-2 h-2 bg-red-400 rounded-full opacity-35 animate-pulse" style={{top: '60%', right: '8%', animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center space-x-4">
          <img src="/images/logos/quorra-logo-dark.png" alt="Quorra Logo" className="h-8" />
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-orange-200 hover:text-orange-400 transition-colors">Features</a>
          <a href="#pricing" className="text-orange-200 hover:text-orange-400 transition-colors">Pricing</a>
          <a href="#docs" className="text-orange-200 hover:text-orange-400 transition-colors">Docs</a>
        </div>
        <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-2 rounded-lg border border-orange-400 transition-all">
          Start Creating
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Divine Fire Q Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/images/logos/quorra-icon.png" 
                alt="Quorra Divine Fire Logo"
                className="w-32 h-32 drop-shadow-2xl hover:scale-105 transition-transform"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-orange-400 via-red-500 to-orange-600 rounded-full blur-lg opacity-60 -z-10"></div>
            </div>
          </div>

          {/* Blessed by the Goddess */}
          <p className="text-orange-300 text-lg mb-4">Blessed by the Goddess of Smithing</p>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-red-400">
            QUORRA
          </h1>
          <p className="text-2xl md:text-3xl text-orange-200 mb-4 font-light tracking-wide">
            FORGE THE FUTURE
          </p>

          {/* Hero Subtitle */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
            Channel the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Divine Fire</span> of Clean Code
          </h2>

          {/* Value Proposition */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Transform visual designs into 87% smaller CSS that loads 3x faster than frameworks. 
            Design like Canva, export like a divine developer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-lg text-lg font-semibold border border-orange-400 transition-all shadow-lg flex items-center justify-center space-x-2">
              <span>🔥</span>
              <span>Start Forging Free</span>
            </button>
            <button className="border border-orange-400 hover:bg-orange-500/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center space-x-2">
              <span>▶</span>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-orange-400 text-2xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-orange-300">1,000+</div>
              <div className="text-gray-400">divine craftspeople</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-orange-400 text-2xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-orange-300">4.9/5</div>
              <div className="text-gray-400">blessed rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-orange-400 text-2xl mb-2">🔥</div>
              <div className="text-2xl font-bold text-orange-300">10,000+</div>
              <div className="text-gray-400">websites forged</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-8 text-center">
            ABOUT US
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Quorra is dedicated to forging innovation through technology, design, and resilience. 
                We believe that creating beautiful, functional websites shouldn't require wrestling with 
                complex frameworks or memorizing arcane CSS incantations.
              </p>
            </div>
            <div className="relative">
              {/* Floating embers around this section */}
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full opacity-60 animate-pulse" style={{top: '10%', right: '20%'}}></div>
              <div className="absolute w-2 h-2 bg-red-500 rounded-full opacity-40 animate-pulse" style={{bottom: '20%', left: '10%', animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6" id="features">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-16 text-center">
            FEATURES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Secure Framework */}
            <div className="border border-orange-500/30 rounded-lg p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 hover:border-orange-400/50 transition-all group">
              <div className="mb-4 group-hover:scale-110 transition-transform flex justify-center">
                <img src="/images/icons/tiers/hammer-icon.png" alt="Hammer - Secure Framework" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-orange-300 mb-4">Secure Framework</h3>
              <p className="text-gray-400 leading-relaxed">
                Built with enterprise-grade security and performance optimization from the ground up.
              </p>
            </div>

            {/* Blazing Fast */}
            <div className="border border-orange-500/30 rounded-lg p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 hover:border-orange-400/50 transition-all group">
              <div className="mb-4 group-hover:scale-110 transition-transform flex justify-center">
                <img src="/images/icons/tiers/anvil-icon.png" alt="Anvil - Blazing Fast" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-orange-300 mb-4">Blazing Fast</h3>
              <p className="text-gray-400 leading-relaxed">
                Generate clean CSS that loads 3x faster than traditional frameworks with 87% smaller file sizes.
              </p>
            </div>

            {/* Heat-forged Performance */}
            <div className="border border-orange-500/30 rounded-lg p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 hover:border-orange-400/50 transition-all group">
              <div className="mb-4 group-hover:scale-110 transition-transform flex justify-center">
                <img src="/images/icons/tiers/foundry-icon.png" alt="Foundry - Heat-forged Performance" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-orange-300 mb-4">Heat-forged Performance</h3>
              <p className="text-gray-400 leading-relaxed">
                Optimized through divine fire for maximum performance and minimal resource usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Forge Your Path?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of developers who have embraced the divine fire of clean code.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-lg text-lg font-semibold border border-orange-400 transition-all shadow-lg">
              Start Building
            </button>
            <button className="border border-orange-400 hover:bg-orange-500/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-orange-500/30 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4">
            QUORRA
          </div>
          <p className="text-gray-400">
            Channel the Goddess of Smithing. Forge the Future.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default QuorraLandingPage;