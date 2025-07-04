import React, { useState } from 'react';
import { Check, X, Star, Sparkles, ArrowRight, Zap, Users, Crown, Shield, Calendar } from 'lucide-react';
import { QuorraLayout } from '../src/components/QuorraNavigation';
const QuorraPricing = () => {
  const [billingCycle, setBillingCycle] = useState('annual'); // monthly or annual
  const [selectedTier, setSelectedTier] = useState('hammer');

  const tiers = [
    {
      id: 'ember',
      name: 'Ember',
      subtitle: 'The Divine Spark',
      description: 'Full capabilities, limited scale - perfect for testing the divine fire',
      icon: '/images/icons/tiers/ember-icon.png',
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
      icon: '/images/icons/tiers/hammer-icon.png',
      iconAlt: '🔨',
      monthlyPrice: 35,
      annualPrice: 29,
      color: 'bronze',
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
      icon: '/images/icons/tiers/anvil-icon.png',
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
      icon: '/images/icons/tiers/foundry-icon.png',
      iconAlt: '🏭',
      monthlyPrice: 129,
      annualPrice: 99,
      color: 'divine',
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
          bg: 'linear-gradient(to bottom right, rgba(75, 85, 99, 0.2), rgba(55, 65, 81, 0.2))',
          border: 'rgba(156, 163, 175, 0.3)',
          borderHover: 'rgba(156, 163, 175, 0.5)',
          button: 'linear-gradient(to right, #6b7280, #4b5563)',
          buttonHover: 'linear-gradient(to right, #4b5563, #374151)',
          accent: '#9ca3af'
        };
      case 'bronze':
        return {
          bg: 'linear-gradient(to bottom right, rgba(202, 138, 4, 0.1), rgba(57, 23, 0, 0.1))',
          border: 'rgba(202, 138, 4, 0.3)',
          borderHover: 'rgba(202, 138, 4, 0.5)',
          button: 'linear-gradient(to right, #CA8A04, #391700)',
          buttonHover: 'linear-gradient(to right, #A16207, #1C0701)',
          accent: '#CA8A04'
        };
      case 'amber':
        return {
          bg: 'linear-gradient(to bottom right, rgba(251, 191, 36, 0.1), rgba(202, 138, 4, 0.1))',
          border: 'rgba(251, 191, 36, 0.3)',
          borderHover: 'rgba(251, 191, 36, 0.5)',
          button: 'linear-gradient(to right, #fbbf24, #CA8A04)',
          buttonHover: 'linear-gradient(to right, #f59e0b, #A16207)',
          accent: '#fbbf24'
        };
      case 'divine':
        return {
          bg: 'linear-gradient(to bottom right, rgba(202, 138, 4, 0.15), rgba(57, 23, 0, 0.15))',
          border: 'rgba(202, 138, 4, 0.4)',
          borderHover: 'rgba(202, 138, 4, 0.6)',
          button: 'linear-gradient(to right, #CA8A04, #391700)',
          buttonHover: 'linear-gradient(to right, #A16207, #1C0701)',
          accent: '#CA8A04'
        };
      default:
        return {
          bg: 'linear-gradient(to bottom right, rgba(75, 85, 99, 0.2), rgba(55, 65, 81, 0.2))',
          border: 'rgba(156, 163, 175, 0.3)',
          borderHover: 'rgba(156, 163, 175, 0.5)',
          button: 'linear-gradient(to right, #CA8A04, #391700)',
          buttonHover: 'linear-gradient(to right, #A16207, #1C0701)',
          accent: '#CA8A04'
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
    <QuorraLayout>
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #18181b, #1c1917, #451a03)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
  
      {/* Floating Embers Background */}
      <div style={{ position: 'absolute', inset: '0', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          width: '8px',
          height: '8px',
          background: '#CA8A04',
          borderRadius: '50%',
          opacity: '0.6',
          animation: 'pulse 2s infinite',
          top: '10%',
          left: '20%'
        }}></div>
        <div style={{
          position: 'absolute',
          width: '4px',
          height: '4px',
          background: '#A16207',
          borderRadius: '50%',
          opacity: '0.4',
          animation: 'pulse 2s infinite',
          animationDelay: '0.5s',
          top: '25%',
          right: '15%'
        }}></div>
        <div style={{
          position: 'absolute',
          width: '12px',
          height: '12px',
          background: '#fbbf24',
          borderRadius: '50%',
          opacity: '0.3',
          animation: 'pulse 2s infinite',
          animationDelay: '1s',
          bottom: '30%',
          left: '10%'
        }}></div>
      </div>

      {/* Header */}
      <header style={{
        position: 'relative',
        zIndex: '10',
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(202, 138, 4, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img 
                src="/images/logos/quorra-icon.png" 
                alt="QUORRA - Goddess of Smithing"
                style={{ width: '40px', height: '40px' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div style={{
                display: 'none',
                fontSize: '24px',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #CA8A04, #391700)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                QUORRA
              </div>
            </div>
            
            <div style={{ display: 'none', alignItems: 'center', gap: '32px' }} className="hidden md:flex">
              <a href="#features" style={{ 
                color: '#fbbf24',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }} onMouseOver={(e) => e.target.style.color = '#CA8A04'} onMouseOut={(e) => e.target.style.color = '#fbbf24'}>
                Features
              </a>
              <a href="#templates" style={{ 
                color: '#fbbf24',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }} onMouseOver={(e) => e.target.style.color = '#CA8A04'} onMouseOut={(e) => e.target.style.color = '#fbbf24'}>
                Templates
              </a>
              <a href="#pricing" style={{ 
                color: '#fbbf24',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }} onMouseOver={(e) => e.target.style.color = '#CA8A04'} onMouseOut={(e) => e.target.style.color = '#fbbf24'}>
                Pricing
              </a>
              <a href="#about" style={{ 
                color: '#fbbf24',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }} onMouseOver={(e) => e.target.style.color = '#CA8A04'} onMouseOut={(e) => e.target.style.color = '#fbbf24'}>
                About
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button style={{
                color: '#fbbf24',
                background: 'transparent',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'color 0.3s'
              }} onMouseOver={(e) => e.target.style.color = '#CA8A04'} onMouseOut={(e) => e.target.style.color = '#fbbf24'}>
                Sign In
              </button>
              <button style={{
                background: 'linear-gradient(to right, #CA8A04, #391700)',
                border: '1px solid #CA8A04',
                padding: '8px 24px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }} onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(to right, #A16207, #1C0701)';
              }} onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(to right, #CA8A04, #391700)';
              }}>
                Start Creating
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ position: 'relative', zIndex: '10', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '32px' }}>
            <img 
              src="/images/logos/quorra-icon.png" 
              alt="QUORRA - Goddess of Smithing"
              style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 24px',
                filter: 'drop-shadow(0 0 12px rgba(202, 138, 4, 0.3))'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div style={{
              display: 'none',
              fontSize: '80px',
              marginBottom: '24px'
            }}>🔥</div>
          </div>

          <h1 style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '24px'
          }}>
            Sacred <span style={{
              background: 'linear-gradient(to right, #CA8A04, #391700)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Tiers</span>
          </h1>
          
          <p style={{
            fontSize: '20px',
            color: '#d1d5db',
            marginBottom: '32px',
            maxWidth: '768px',
            margin: '0 auto 32px',
            lineHeight: '1.6'
          }}>
            Choose your divine path. Each tier blessed by the Goddess of Smithing with increasing power and sacred tools.
          </p>

          {/* Billing Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '48px' }}>
            <span style={{
              fontSize: '18px',
              color: billingCycle === 'monthly' ? 'white' : '#9ca3af'
            }}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              style={{
                position: 'relative',
                width: '64px',
                height: '32px',
                background: '#4b5563',
                borderRadius: '999px',
                transition: 'background 0.3s',
                cursor: 'pointer',
                border: 'none',
                outline: 'none'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '4px',
                  left: billingCycle === 'annual' ? '36px' : '4px',
                  width: '24px',
                  height: '24px',
                  background: 'linear-gradient(to right, #CA8A04, #391700)',
                  borderRadius: '50%',
                  transition: 'left 0.3s'
                }}
              />
            </button>
            <span style={{
              fontSize: '18px',
              color: billingCycle === 'annual' ? 'white' : '#9ca3af'
            }}>
              Annual
            </span>
            {billingCycle === 'annual' && (
              <span style={{
                background: 'linear-gradient(to right, #CA8A04, #391700)',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Save up to 17%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ position: 'relative', zIndex: '10', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {tiers.map((tier) => {
              const colors = getTierColors(tier);
              const savings = getSavingsText(tier);
              const price = billingCycle === 'annual' ? tier.annualPrice : tier.monthlyPrice;
              
              return (
                <div
                  key={tier.id}
                  style={{
                    position: 'relative',
                    background: colors.bg,
                    borderRadius: '16px',
                    padding: '32px',
                    border: `2px solid ${tier.popular ? colors.borderHover : colors.border}`,
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    transform: tier.popular ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: tier.popular ? '0 20px 25px -5px rgba(0, 0, 0, 0.3)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = colors.borderHover;
                    if (!tier.popular) e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = tier.popular ? colors.borderHover : colors.border;
                    if (!tier.popular) e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div style={{
                      position: 'absolute',
                      top: '-16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(to right, #CA8A04, #391700)',
                      color: 'white',
                      padding: '8px 24px',
                      borderRadius: '999px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <Crown style={{ width: '16px', height: '16px' }} />
                      Most Popular
                    </div>
                  )}

                  {/* Tier Icon */}
                  <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: '12px',
                      border: `1px solid ${colors.border}`
                    }}>
                      <img 
                        src={tier.icon} 
                        alt={tier.name}
                        style={{ 
                          width: '64px', 
                          height: '64px', 
                          objectFit: 'contain',
                          filter: 'brightness(1.2) contrast(1.1)'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div style={{ fontSize: '36px', display: 'none' }}>{tier.iconAlt}</div>
                    </div>
                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>{tier.name}</h3>
                    <p style={{ fontSize: '14px', color: colors.accent, fontWeight: '500', marginBottom: '8px' }}>{tier.subtitle}</p>
                    <p style={{ color: '#9ca3af', fontSize: '14px' }}>{tier.description}</p>
                  </div>

                  {/* Pricing */}
                  <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    {price === 0 ? (
                      <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'white' }}>Free</div>
                    ) : (
                      <div>
                        <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'white' }}>
                          ${price}
                          <span style={{ fontSize: '18px', color: '#9ca3af', fontWeight: 'normal' }}>/mo</span>
                        </div>
                        {billingCycle === 'annual' && savings && (
                          <div style={{ fontSize: '14px', color: '#10b981', marginTop: '4px' }}>
                            Save ${savings.savings}/year ({savings.percentage}% off)
                          </div>
                        )}
                        {billingCycle === 'annual' && (
                          <div style={{ fontSize: '14px', color: '#9ca3af', marginTop: '4px' }}>
                            Billed ${price * 12} annually
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div style={{ marginBottom: '32px' }}>
                    {Object.entries(tier.features).map(([key, feature]) => (
                      <div key={key} style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '12px' }}>
                        <Check style={{ width: '20px', height: '20px', color: '#10b981', marginTop: '2px', flexShrink: '0' }} />
                        <span style={{ color: '#d1d5db', fontSize: '14px' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    style={{
                      width: '100%',
                      background: colors.button,
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '12px',
                      fontWeight: 'bold',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '16px'
                    }}
                    onClick={() => setSelectedTier(tier.id)}
                    onMouseOver={(e) => {
                      e.target.style.background = colors.buttonHover;
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = colors.button;
                    }}
                  >
                    {tier.id === 'ember' ? (
                      <>
                        <Sparkles style={{ width: '20px', height: '20px' }} />
                        Start Free
                      </>
                    ) : (
                      <>
                        <Zap style={{ width: '20px', height: '20px' }} />
                        Choose {tier.name}
                      </>
                    )}
                  </button>

                  {/* Benefits */}
                  {tier.benefits.length > 0 && (
                    <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(156, 163, 175, 0.2)' }}>
                      <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '500', marginBottom: '8px' }}>Key Benefits:</div>
                      <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                        {tier.benefits.map((benefit, index) => (
                          <li key={index} style={{ fontSize: '12px', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <Star style={{ width: '12px', height: '12px', color: '#fbbf24' }} />
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
      <section style={{
        position: 'relative',
        zIndex: '10',
        padding: '80px 24px',
        background: 'linear-gradient(to bottom, transparent, rgba(202, 138, 4, 0.05), transparent)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px'
            }}>
              Sacred Powers Comparison
            </h2>
            <p style={{ fontSize: '20px', color: '#d1d5db' }}>
              All tiers blessed with divine intelligence, differing only in scale and support
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(to bottom right, rgba(41, 37, 36, 0.5), rgba(24, 24, 27, 0.5))',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(202, 138, 4, 0.2)'
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: 'rgba(41, 37, 36, 0.5)' }}>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '24px', color: 'white', fontWeight: '600' }}>Sacred Features</th>
                    {tiers.map(tier => (
                      <th key={tier.id} style={{ textAlign: 'center', padding: '24px', color: 'white', fontWeight: '600' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                          <img 
                            src={tier.icon} 
                            alt={tier.name}
                            style={{ width: '32px', height: '32px' }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          <span style={{ display: 'none', fontSize: '24px' }}>{tier.iconAlt}</span>
                          {tier.name}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '24px', color: '#d1d5db' }}>Active Projects</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: 'white' }}>1</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: 'white' }}>10</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: 'white' }}>25</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: 'white' }}>Unlimited</td>
                  </tr>
                  <tr style={{ background: 'rgba(41, 37, 36, 0.3)' }}>
                    <td style={{ padding: '24px', color: '#d1d5db' }}>Full Visual Editor</td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '24px', color: '#d1d5db' }}>Industry Intelligence (15+ sectors)</td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                  </tr>
                  <tr style={{ background: 'rgba(41, 37, 36, 0.3)' }}>
                    <td style={{ padding: '24px', color: '#d1d5db' }}>Sparky AI Assistant</td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '24px', color: '#d1d5db' }}>Clean CSS Export</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: '#9ca3af' }}>With watermark</td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} /></td>
                  </tr>
                  <tr style={{ background: 'rgba(41, 37, 36, 0.3)' }}>
                    <td style={{ padding: '24px', color: '#d1d5db' }}>Team Collaboration</td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><X style={{ width: '20px', height: '20px', color: '#6b7280', margin: '0 auto' }} /></td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><X style={{ width: '20px', height: '20px', color: '#6b7280', margin: '0 auto' }} /></td>
                    <td style={{ padding: '24px', textAlign: 'center' }}><X style={{ width: '20px', height: '20px', color: '#6b7280', margin: '0 auto' }} /></td>
                    <td style={{ padding: '24px', textAlign: 'center', color: 'white' }}>5 members</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '24px', color: '#d1d5db' }}>Support Level</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: '#9ca3af' }}>Community</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: 'white' }}>Standard</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: 'white' }}>Priority</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: 'white' }}>Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ position: 'relative', zIndex: '10', padding: '80px 24px' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px'
            }}>
              Divine Guidance
            </h2>
            <p style={{ fontSize: '20px', color: '#d1d5db' }}>
              Sparky answers the most sacred questions about QUORRA's tiers
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{
              background: 'linear-gradient(to bottom right, rgba(41, 37, 36, 0.5), rgba(24, 24, 27, 0.5))',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid rgba(202, 138, 4, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
                <img 
                  src="/images/sparky-ai-helpful.png" 
                  alt="Sparky"
                  style={{ width: '40px', height: '40px', marginTop: '4px' }}
                />
                <div>
                  <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '8px' }}>Can I upgrade or downgrade anytime?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    Absolutely! Your divine journey can evolve. Upgrade instantly for more power, 
                    or downgrade at your next billing cycle. All your creations remain blessed.
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(to bottom right, rgba(41, 37, 36, 0.5), rgba(24, 24, 27, 0.5))',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid rgba(202, 138, 4, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
                <img 
                  src="/images/sparky-ai-helpful.png" 
                  alt="Sparky"
                  style={{ width: '40px', height: '40px', marginTop: '4px' }}
                />
                <div>
                  <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '8px' }}>What happens to my projects if I downgrade?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    Your projects remain safe in the sacred realm. If you exceed limits, 
                    older projects become read-only until you upgrade or manage your active count.
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(to bottom right, rgba(41, 37, 36, 0.5), rgba(24, 24, 27, 0.5))',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid rgba(202, 138, 4, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
                <img 
                  src="/images/sparky-ai-helpful.png" 
                  alt="Sparky"
                  style={{ width: '40px', height: '40px', marginTop: '4px' }}
                />
                <div>
                  <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '8px' }}>Do you offer student or non-profit discounts?</h3>
                  <p style={{ color: '#d1d5db' }}>
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
      <section style={{
        position: 'relative',
        zIndex: '10',
        padding: '80px 24px',
        background: 'linear-gradient(to right, rgba(41, 37, 36, 0.5), rgba(202, 138, 4, 0.1))'
      }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', textAlign: 'center' }}>
          <img 
            src="/images/logos/quorra-icon.png" 
            alt="QUORRA - Goddess of Smithing"
            style={{ 
              width: '96px', 
              height: '96px', 
              margin: '0 auto 32px',
              filter: 'drop-shadow(0 0 16px rgba(202, 138, 4, 0.4))'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{
            display: 'none',
            fontSize: '96px',
            marginBottom: '32px'
          }}>🔥</div>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '24px'
          }}>
            Ready to Choose Your Sacred Path?
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#d1d5db',
            marginBottom: '32px',
            lineHeight: '1.6'
          }}>
            Start with Ember to test the divine fire, or choose your tier to begin 
            forging websites blessed with AI intelligence.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <button style={{
              background: 'linear-gradient(to right, #CA8A04, #391700)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              fontWeight: 'bold',
              fontSize: '18px',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'linear-gradient(to right, #A16207, #1C0701)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'linear-gradient(to right, #CA8A04, #391700)';
            }}>
              <Sparkles style={{ width: '24px', height: '24px' }} />
              Start Free with Ember
            </button>
            <button style={{
              border: '1px solid #CA8A04',
              color: '#CA8A04',
              padding: '16px 32px',
              borderRadius: '12px',
              fontWeight: 'bold',
              fontSize: '18px',
              transition: 'all 0.2s',
              cursor: 'pointer',
              background: 'transparent'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(202, 138, 4, 0.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
            }}>
              Compare All Tiers
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        position: 'relative',
        zIndex: '10',
        background: 'rgba(24, 24, 27, 0.8)',
        borderTop: '1px solid rgba(202, 138, 4, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
              <img 
                src="/images/logos/quorra-icon.png" 
                alt="QUORRA"
                style={{ width: '32px', height: '32px' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span style={{
                display: 'none',
                fontSize: '20px',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #CA8A04, #391700)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>QUORRA</span>
            </div>
            <p style={{ color: '#9ca3af' }}>
              © 2025 QUORRA. Blessed by the Goddess of Smithing. Forge the Future.
            </p>
          </div>
        </div>
      </footer>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
      `}</style>
    </QuorraLayout>
  );
};

export default QuorraPricing;