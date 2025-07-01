import React, { useState } from 'react';
import { Check, X, Star, Sparkles, ArrowRight, Zap, Users, Crown, Shield, Calendar } from 'lucide-react';

const QuorraPricing = () => {
  const [billingCycle, setBillingCycle] = useState('annual'); // monthly or annual
  const [selectedTier, setSelectedTier] = useState('hammer');

  const tiers = [
    {
      id: 'ember',
      name: 'Ember',
      subtitle: 'The Divine Spark',
      description: 'Full capabilities, limited scale - perfect for testing the divine fire',
      icon: '/src/assets/images/icons/ember-icon.png',
      iconAlt: '🔥',
      monthlyPrice: 0,
      annualPrice: 0,
      color: 'gray',
      popular: false,
      features: {
        projects: '1 active project',
        editor: 'Full visual editor with all components',
        toolkit: 'Complete design toolkit (forms, navigation, media, animations)',
        intelligence: 'All Industry Intelligence (experience every industry)',
        sparky: 'Full Sparky AI access (experience divine guidance)',
        export: 'Clean CSS export (see the quality output)',
        support: 'Community support',
        access: 'Complete feature access - just project limited'
      },
      limits: ['1 active project', 'Community support only', 'QUORRA watermark on exports'],
      benefits: ['Perfect for testing', 'Full feature access', 'Experience divine guidance']
    },
    {
      id: 'hammer',
      name: 'Hammer',
      subtitle: 'Quorra\'s Sacred Tool',
      description: 'For professional freelancers and solo developers',
      icon: '/src/assets/images/icons/hammer-icon.png',
      iconAlt: '🔨',
      monthlyPrice: 35,
      annualPrice: 29,
      color: 'orange',
      popular: true,
      features: {
        projects: '10 active projects',
        editor: 'Full visual editor with all components',
        toolkit: 'Complete design toolkit',
        intelligence: 'All Industry Intelligence',
        sparky: 'Full Sparky AI access',
        export: 'Clean CSS export (no watermarks)',
        support: 'Standard support',
        history: 'Version history (30 days)'
      },
      limits: ['10 project limit', 'Standard support response'],
      benefits: ['Most popular choice', 'Professional features', 'No watermarks']
    },
    {
      id: 'anvil',
      name: 'Anvil',
      subtitle: 'Her Blessed Workspace',
      description: 'For solo professionals and advanced users',
      icon: '/src/assets/images/icons/anvil-icon.png',
      iconAlt: '⚖️',
      monthlyPrice: 59,
      annualPrice: 49,
      color: 'amber',
      popular: false,
      features: {
        projects: '25 active projects',
        editor: 'Full visual editor with all components',
        toolkit: 'Complete design toolkit',
        intelligence: 'All Industry Intelligence',
        sparky: 'Full Sparky AI access',
        export: 'Clean CSS export (no watermarks)',
        advanced: 'Advanced CSS features (custom code injection)',
        support: 'Priority support',
        history: 'Version history (90 days)',
        exports: 'Advanced export options'
      },
      limits: ['25 project limit'],
      benefits: ['Advanced features', 'Priority support', 'Custom code injection']
    },
    {
      id: 'foundry',
      name: 'Foundry',
      subtitle: 'Her Divine Realm',
      description: 'For agencies and teams',
      icon: '/src/assets/images/icons/foundry-icon.png',
      iconAlt: '🏭',
      monthlyPrice: 129,
      annualPrice: 99,
      color: 'gradient',
      popular: false,
      features: {
        projects: 'Unlimited projects',
        editor: 'Full visual editor with all components',
        toolkit: 'Complete design toolkit',
        intelligence: 'All Industry Intelligence',
        team: 'Team collaboration (up to 5 team members)',
        sparky: 'Full Sparky AI team access',
        integrations: 'Advanced integrations (Figma, Sketch import)',
        api: 'API access for custom workflows',
        support: 'Dedicated support + account manager',
        history: 'Unlimited version history',
        permissions: 'Advanced permissions and user management'
      },
      limits: ['5 team member limit'],
      benefits: ['Unlimited projects', 'Team collaboration', 'Dedicated support']
    }
  ];

  const getTierColors = (tier) => {
    switch (tier.color) {
      case 'gray':
        return {
          bg: 'from-gray-800 to-gray-900',
          border: 'border-gray-600',
          button: 'from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600',
          accent: 'text-gray-400'
        };
      case 'orange':
        return {
          bg: 'from-orange-800 to-red-900',
          border: 'border-orange-500',
          button: 'from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500',
          accent: 'text-orange-400'
        };
      case 'amber':
        return {
          bg: 'from-amber-800 to-orange-900',
          border: 'border-amber-500',
          button: 'from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500',
          accent: 'text-amber-400'
        };
      case 'gradient':
        return {
          bg: 'from-orange-700 to-red-800',
          border: 'border-red-500',
          button: 'from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500',
          accent: 'text-red-400'
        };
      default:
        return {
          bg: 'from-gray-800 to-gray-900',
          border: 'border-gray-600',
          button: 'from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500',
          accent: 'text-orange-400'
        };
    }
  };

  const getSavingsText = (tier) => {
    if (tier.monthlyPrice === 0) return null;
    const monthlyCost = tier.monthlyPrice * 12;
    const annualCost = tier.annualPrice * 12;
    const savings = monthlyCost - annualCost;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { savings, percentage };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-lg border-b border-orange-500/20">
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
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img 
              src="/src/assets/images/logos/quorra-logo-dark.png" 
              alt="QUORRA - Goddess of Smithing"
              className="w-20 h-20 mx-auto mb-6"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sacred <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Tiers</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose your divine path. Each tier blessed by the Goddess of Smithing with increasing power and sacred tools.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-16 h-8 bg-gray-700 rounded-full transition-colors focus:outline-none"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-8' : ''
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            {billingCycle === 'annual' && (
              <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Save up to 17%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiers.map((tier) => {
              const colors = getTierColors(tier);
              const savings = getSavingsText(tier);
              const price = billingCycle === 'annual' ? tier.annualPrice : tier.monthlyPrice;
              
              return (
                <div
                  key={tier.id}
                  className={`relative bg-gradient-to-br ${colors.bg} rounded-2xl p-8 border-2 ${
                    tier.popular ? colors.border : 'border-gray-700'
                  } hover:border-orange-500/50 transition-all duration-300 ${
                    tier.popular ? 'scale-105 shadow-2xl shadow-orange-500/20' : 'hover:scale-105'
                  }`}
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Crown className="w-4 h-4" />
                      Most Popular
                    </div>
                  )}

                  {/* Tier Icon */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-black/30 rounded-xl">
                      <img 
                        src={tier.icon} 
                        alt={tier.name}
                        className="w-16 h-16 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div className="text-4xl hidden">{tier.iconAlt}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className={`text-sm ${colors.accent} font-medium mb-2`}>{tier.subtitle}</p>
                    <p className="text-gray-400 text-sm">{tier.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    {price === 0 ? (
                      <div className="text-4xl font-bold text-white">Free</div>
                    ) : (
                      <div>
                        <div className="text-4xl font-bold text-white">
                          ${price}
                          <span className="text-lg text-gray-400 font-normal">/mo</span>
                        </div>
                        {billingCycle === 'annual' && savings && (
                          <div className="text-sm text-green-400 mt-1">
                            Save ${savings.savings}/year ({savings.percentage}% off)
                          </div>
                        )}
                        {billingCycle === 'annual' && (
                          <div className="text-sm text-gray-400 mt-1">
                            Billed ${price * 12} annually
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {Object.entries(tier.features).map(([key, feature]) => (
                      <div key={key} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    className={`w-full bg-gradient-to-r ${colors.button} text-white py-3 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg`}
                    onClick={() => setSelectedTier(tier.id)}
                  >
                    {tier.id === 'ember' ? (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Start Free
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        Choose {tier.name}
                      </>
                    )}
                  </button>

                  {/* Benefits */}
                  {tier.benefits.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-600">
                      <div className="text-xs text-gray-400 font-medium mb-2">Key Benefits:</div>
                      <ul className="space-y-1">
                        {tier.benefits.map((benefit, index) => (
                          <li key={index} className="text-xs text-gray-300 flex items-center gap-2">
                            <Star className="w-3 h-3 text-yellow-400" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Sacred Powers Comparison
            </h2>
            <p className="text-xl text-gray-300">
              All tiers blessed with divine intelligence, differing only in scale and support
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="text-left p-6 text-white font-semibold">Sacred Features</th>
                    {tiers.map(tier => (
                      <th key={tier.id} className="text-center p-6 text-white font-semibold">
                        <div className="flex flex-col items-center gap-2">
                          <img 
                            src={tier.icon} 
                            alt={tier.name}
                            className="w-8 h-8"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          <span className="hidden text-2xl">{tier.iconAlt}</span>
                          {tier.name}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="p-6 text-gray-300">Active Projects</td>
                    <td className="p-6 text-center text-white">1</td>
                    <td className="p-6 text-center text-white">10</td>
                    <td className="p-6 text-center text-white">25</td>
                    <td className="p-6 text-center text-white">Unlimited</td>
                  </tr>
                  <tr className="bg-gray-800/50">
                    <td className="p-6 text-gray-300">Full Visual Editor</td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-300">Industry Intelligence (15+ sectors)</td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-800/50">
                    <td className="p-6 text-gray-300">Sparky AI Assistant</td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-300">Clean CSS Export</td>
                    <td className="p-6 text-center text-gray-400">With watermark</td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-800/50">
                    <td className="p-6 text-gray-300">Team Collaboration</td>
                    <td className="p-6 text-center"><X className="w-5 h-5 text-gray-500 mx-auto" /></td>
                    <td className="p-6 text-center"><X className="w-5 h-5 text-gray-500 mx-auto" /></td>
                    <td className="p-6 text-center"><X className="w-5 h-5 text-gray-500 mx-auto" /></td>
                    <td className="p-6 text-center text-white">5 members</td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-300">Support Level</td>
                    <td className="p-6 text-center text-gray-400">Community</td>
                    <td className="p-6 text-center text-white">Standard</td>
                    <td className="p-6 text-center text-white">Priority</td>
                    <td className="p-6 text-center text-white">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Divine Guidance
            </h2>
            <p className="text-xl text-gray-300">
              Sparky answers the most sacred questions about QUORRA's tiers
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <img 
                  src="/src/assets/images/sparky-ai-helpful.png" 
                  alt="Sparky"
                  className="w-10 h-10 mt-1"
                />
                <div>
                  <h3 className="text-white font-semibold mb-2">Can I upgrade or downgrade anytime?</h3>
                  <p className="text-gray-300">
                    Absolutely! Your divine journey can evolve. Upgrade instantly for more power, 
                    or downgrade at your next billing cycle. All your creations remain blessed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <img 
                  src="/src/assets/images/sparky-ai-helpful.png" 
                  alt="Sparky"
                  className="w-10 h-10 mt-1"
                />
                <div>
                  <h3 className="text-white font-semibold mb-2">What happens to my projects if I downgrade?</h3>
                  <p className="text-gray-300">
                    Your projects remain safe in the sacred realm. If you exceed limits, 
                    older projects become read-only until you upgrade or manage your active count.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <img 
                  src="/src/assets/images/sparky-ai-helpful.png" 
                  alt="Sparky"
                  className="w-10 h-10 mt-1"
                />
                <div>
                  <h3 className="text-white font-semibold mb-2">Do you offer student or non-profit discounts?</h3>
                  <p className="text-gray-300">
                    The Goddess of Smithing blesses students and noble causes! Contact our sacred 
                    support team with verification for special divine pricing.
                  </p>
                </div>
              </div>
            </div>
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
            Ready to Choose Your Sacred Path?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Start with Ember to test the divine fire, or choose your tier to begin 
            forging websites blessed with AI intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-500 hover:to-red-500 transition-all duration-200 flex items-center gap-2 mx-auto">
              <Sparkles className="w-6 h-6" />
              Start Free with Ember
            </button>
            <button className="border border-orange-500 text-orange-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-500/10 transition-all duration-200">
              Compare All Tiers
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src="/src/assets/images/logos/quorra-logo-dark.png" 
                alt="QUORRA"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white">QUORRA</span>
            </div>
            <p className="text-gray-400">
              © 2025 QUORRA. Blessed by the Goddess of Smithing. Forge the Future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuorraPricing;