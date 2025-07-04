import React from 'react';

const QuorraLandingPage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #71717a, #27272a, #3f3f46)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Sacred Bronze Embers Background */}
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
          background: '#D97706',
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
          background: '#FBBF24',
          borderRadius: '50%',
          opacity: '0.3',
          animation: 'pulse 2s infinite',
          animationDelay: '1s',
          bottom: '30%',
          left: '10%'
        }}></div>
        <div style={{
          position: 'absolute',
          width: '4px',
          height: '4px',
          background: '#B45309',
          borderRadius: '50%',
          opacity: '0.5',
          animation: 'pulse 2s infinite',
          animationDelay: '1.5s',
          bottom: '15%',
          right: '25%'
        }}></div>
        <div style={{
          position: 'absolute',
          width: '8px',
          height: '8px',
          background: '#92400E',
          borderRadius: '50%',
          opacity: '0.35',
          animation: 'pulse 2s infinite',
          animationDelay: '2s',
          top: '60%',
          right: '8%'
        }}></div>
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'relative',
        zIndex: '10',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img 
            src="/images/logos/quorra-icon.png" 
            alt="Quorra Logo" 
            style={{ height: '32px' }}
          />
        </div>
        <div style={{ 
          display: 'none',
          gap: '32px'
        }} className="hidden md:flex">
          <a href="#features" style={{ 
            color: '#FED7AA',
            textDecoration: 'none',
            transition: 'color 0.3s'
          }} onMouseOver={(e) => e.target.style.color = '#CA8A04'} onMouseOut={(e) => e.target.style.color = '#FED7AA'}>
            Features
          </a>
          <a href="/pricingpage" style={{ 
            color: '#FED7AA',
            textDecoration: 'none',
            transition: 'color 0.3s'
          }} onMouseOver={(e) => e.target.style.color = '#CA8A04'} onMouseOut={(e) => e.target.style.color = '#FED7AA'}>
            Pricing
          </a>
          <a href="#sparky" style={{ 
            color: '#FED7AA',
            textDecoration: 'none',
            transition: 'color 0.3s'
          }} onMouseOver={(e) => e.target.style.color = '#CA8A04'} onMouseOut={(e) => e.target.style.color = '#FED7AA'}>
            How It Works
          </a>
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button 
            onClick={() => window.location.href = '/login'}
            style={{
              background: 'transparent',
              border: '1px solid #CA8A04',
              padding: '8px 24px',
              borderRadius: '8px',
              color: '#FED7AA',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }} onMouseOver={(e) => {
              e.target.style.borderColor = '#B45309';
              e.target.style.color = '#CA8A04';
            }} onMouseOut={(e) => {
              e.target.style.borderColor = '#CA8A04';
              e.target.style.color = '#FED7AA';
            }}>
            Login
          </button>
          <button 
            onClick={() => window.location.href = '/signup'}
            style={{
              background: 'linear-gradient(to right, #CA8A04, #92400E)',
              border: '1px solid #B45309',
              padding: '8px 24px',
              borderRadius: '8px',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }} onMouseOver={(e) => {
              e.target.style.background = 'linear-gradient(to right, #B45309, #78350F)';
            }} onMouseOut={(e) => {
              e.target.style.background = 'linear-gradient(to right, #CA8A04, #92400E)';
            }}>
            Start Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        zIndex: '10',
        textAlign: 'center',
        padding: '80px 24px'
      }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          {/* QUORRA Logo */}
          <div style={{ marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              fontSize: '120px',
              fontWeight: '700',
              fontFamily: 'Georgia, serif',
              background: 'linear-gradient(45deg, #CA8A04, #FBBF24, #92400E)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '8px',
              marginBottom: '20px',
              lineHeight: '1'
            }}>
              QUORRA
            </div>
            <div style={{
              width: '200px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #CA8A04, #FBBF24, #CA8A04, transparent)',
              margin: '20px auto',
              borderRadius: '2px',
              boxShadow: '0 2px 8px rgba(202, 138, 4, 0.3)'
            }}></div>
            <div style={{
              fontSize: '28px',
              fontWeight: '400',
              fontFamily: 'Georgia, serif',
              background: 'linear-gradient(45deg, #D97706, #CA8A04)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginTop: '20px'
            }}>
              Forge the Future
            </div>
          </div>
        
          {/* Blessed by the Goddess */}
          <p style={{
            color: '#FDBA74',
            fontSize: '18px',
            marginBottom: '16px'
          }}>
            Blessed by the Goddess of Smithing
          </p>

          {/* Hero Subtitle */}
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '32px',
            color: 'white',
            lineHeight: '1.2'
          }}>
            Channel the <span style={{
              background: 'linear-gradient(to right, #CA8A04, #92400E)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Divine Fire</span> of Clean Code
          </h2>

          {/* Value Proposition */}
          <p style={{
            fontSize: '24px',
            color: '#d1d5db',
            marginBottom: '48px',
            lineHeight: '1.6',
            maxWidth: '768px',
            margin: '0 auto 48px auto'
          }}>
            Transform visual designs into 87% smaller CSS that loads 3x faster than frameworks. 
            Design like Canva, export like a divine developer.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: '64px',
            alignItems: 'center'
          }}>
            <button 
              onClick={() => window.location.href = '/templatespage'}
              style={{
                background: 'linear-gradient(to right, #CA8A04, #92400E)',
                border: '1px solid #B45309',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s'
              }} onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(to right, #B45309, #78350F)';
              }} onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(to right, #CA8A04, #92400E)';
              }}>
              <span>🔥</span>
              <span>Start Creating with Divine AI</span>
            </button>
            <button 
              onClick={() => window.location.href = '#sparky'}
              style={{
                border: '1px solid #CA8A04',
                background: 'transparent',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.3s'
              }} onMouseOver={(e) => {
                e.target.style.background = 'rgba(202, 138, 4, 0.1)';
              }} onMouseOut={(e) => {
                e.target.style.background = 'transparent';
              }}>
              <span>✨</span>
              <span>See How Sparky Works</span>
            </button>
          </div>

          {/* Social Proof */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            textAlign: 'center'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ color: '#CA8A04', fontSize: '32px', marginBottom: '8px' }}>⚡</div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#FDBA74' }}>1,000+</div>
              <div style={{ color: '#9ca3af' }}>divine craftspeople</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ color: '#CA8A04', fontSize: '32px', marginBottom: '8px' }}>⭐</div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#FDBA74' }}>4.9/5</div>
              <div style={{ color: '#9ca3af' }}>blessed rating</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ color: '#CA8A04', fontSize: '32px', marginBottom: '8px' }}>🔥</div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#FDBA74' }}>10,000+</div>
              <div style={{ color: '#9ca3af' }}>websites forged</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{
        position: 'relative',
        zIndex: '10',
        padding: '80px 24px'
      }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #CA8A04, #92400E)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '32px',
            textAlign: 'center'
          }}>
            ABOUT US
          </h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{ maxWidth: '800px', textAlign: 'center' }}>
              <p style={{
                fontSize: '20px',
                color: '#d1d5db',
                lineHeight: '1.6'
              }}>
                Quorra is dedicated to forging innovation through technology, design, 
                and resilience. We believe that creating beautiful, functional websites shouldn't require wrestling with 
                complex frameworks or memorizing arcane CSS incantations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        position: 'relative',
        zIndex: '10',
        padding: '80px 24px'
      }} id="features">
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #CA8A04, #92400E)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '64px',
            textAlign: 'center'
          }}>
            FEATURES
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {/* AI-Powered Creation */}
            <div style={{
              border: '1px solid rgba(202, 138, 4, 0.3)',
              borderRadius: '8px',
              padding: '32px',
              background: 'linear-gradient(to bottom right, rgba(202, 138, 4, 0.1), rgba(146, 64, 14, 0.1))',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }} onMouseOver={(e) => {
              e.target.style.borderColor = 'rgba(202, 138, 4, 0.5)';
              e.target.style.transform = 'translateY(-5px)';
            }} onMouseOut={(e) => {
              e.target.style.borderColor = 'rgba(202, 138, 4, 0.3)';
              e.target.style.transform = 'translateY(0)';
            }}>
              <div style={{
                marginBottom: '16px',
                display: 'flex',
                justifyContent: 'center',
                transition: 'transform 0.3s'
              }}>
                <img 
                  src="/images/icons/hammer-icon.png" 
                  alt="AI-Powered Creation" 
                  style={{ width: '64px', height: '64px' }}
                />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#FDBA74',
                marginBottom: '16px',
                textAlign: 'center'
              }}>
                AI-Powered Creation
              </h3>
              <p style={{
                color: '#9ca3af',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                Sparky generates custom designs based on your industry and brand personality - no templates needed.
              </p>
            </div>

            {/* Blazing Fast */}
            <div style={{
              border: '1px solid rgba(202, 138, 4, 0.3)',
              borderRadius: '8px',
              padding: '32px',
              background: 'linear-gradient(to bottom right, rgba(202, 138, 4, 0.1), rgba(146, 64, 14, 0.1))',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }} onMouseOver={(e) => {
              e.target.style.borderColor = 'rgba(202, 138, 4, 0.5)';
              e.target.style.transform = 'translateY(-5px)';
            }} onMouseOut={(e) => {
              e.target.style.borderColor = 'rgba(202, 138, 4, 0.3)';
              e.target.style.transform = 'translateY(0)';
            }}>
              <div style={{
                marginBottom: '16px',
                display: 'flex',
                justifyContent: 'center',
                transition: 'transform 0.3s'
              }}>
                <img 
                  src="/images/icons/anvil-icon.png" 
                  alt="Anvil - Blazing Fast" 
                  style={{ width: '64px', height: '64px' }}
                />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#FDBA74',
                marginBottom: '16px',
                textAlign: 'center'
              }}>
                Blazing Fast
              </h3>
              <p style={{
                color: '#9ca3af',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                Generate clean CSS that loads 3x faster than traditional frameworks with 87% smaller file sizes.
              </p>
            </div>

            {/* Industry Intelligence */}
            <div style={{
              border: '1px solid rgba(202, 138, 4, 0.3)',
              borderRadius: '8px',
              padding: '32px',
              background: 'linear-gradient(to bottom right, rgba(202, 138, 4, 0.1), rgba(146, 64, 14, 0.1))',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }} onMouseOver={(e) => {
              e.target.style.borderColor = 'rgba(202, 138, 4, 0.5)';
              e.target.style.transform = 'translateY(-5px)';
            }} onMouseOut={(e) => {
              e.target.style.borderColor = 'rgba(202, 138, 4, 0.3)';
              e.target.style.transform = 'translateY(0)';
            }}>
              <div style={{
                marginBottom: '16px',
                display: 'flex',
                justifyContent: 'center',
                transition: 'transform 0.3s'
              }}>
                <img 
                  src="/images/icons/foundry-icon.png" 
                  alt="Industry Intelligence" 
                  style={{ width: '64px', height: '64px' }}
                />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#FDBA74',
                marginBottom: '16px',
                textAlign: 'center'
              }}>
                Industry Intelligence
              </h3>
              <p style={{
                color: '#9ca3af',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                15+ industries with specific conversion patterns, color psychology, and best practices built-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sparky Intelligence Section */}
      <section style={{
        position: 'relative',
        zIndex: '10',
        padding: '80px 24px',
        background: 'linear-gradient(to bottom, transparent, rgba(202, 138, 4, 0.05), transparent)'
      }} id="sparky">
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #CA8A04, #92400E)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '32px',
            textAlign: 'center'
          }}>
            INTELLIGENT CUSTOM CREATION
          </h2>
          
          <p style={{
            fontSize: '24px',
            color: '#d1d5db',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 64px auto',
            lineHeight: '1.6'
          }}>
            Sparky doesn't use templates - he creates unique designs blessed with divine intelligence for your specific needs
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            marginBottom: '64px'
          }}>
            {/* Step 1 */}
            <div style={{
              textAlign: 'center',
              padding: '32px'
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px'
              }}>🎯</div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#FDBA74',
                marginBottom: '16px'
              }}>
                Choose Your Industry
              </h3>
              <p style={{
                color: '#9ca3af',
                lineHeight: '1.6'
              }}>
                Select from 15+ industries, each with unique conversion psychology patterns
              </p>
            </div>

            {/* Step 2 */}
            <div style={{
              textAlign: 'center',
              padding: '32px'
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px'
              }}>💬</div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#FDBA74',
                marginBottom: '16px'
              }}>
                Define Your Brand
              </h3>
              <p style={{
                color: '#9ca3af',
                lineHeight: '1.6'
              }}>
                Tell Sparky about your brand personality, audience, and business goals
              </p>
            </div>

            {/* Step 3 */}
            <div style={{
              textAlign: 'center',
              padding: '32px'
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px'
              }}>✨</div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#FDBA74',
                marginBottom: '16px'
              }}>
                Get Custom Designs
              </h3>
              <p style={{
                color: '#9ca3af',
                lineHeight: '1.6'
              }}>
                Receive AI-generated designs specifically crafted for your unique needs
              </p>
            </div>
          </div>

          {/* Comparison */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {/* Old Way */}
            <div style={{
              border: '1px solid rgba(146, 64, 14, 0.3)',
              borderRadius: '8px',
              padding: '32px',
              background: 'rgba(146, 64, 14, 0.05)'
            }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#92400E',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>❌</span> Traditional Templates
              </h4>
              <ul style={{
                color: '#9ca3af',
                lineHeight: '2',
                listStyle: 'none',
                padding: '0'
              }}>
                <li>• Generic designs</li>
                <li>• Limited customization</li>
                <li>• One-size-fits-all approach</li>
                <li>• No industry intelligence</li>
              </ul>
            </div>

            {/* Quorra Way */}
            <div style={{
              border: '1px solid rgba(202, 138, 4, 0.3)',
              borderRadius: '8px',
              padding: '32px',
              background: 'rgba(202, 138, 4, 0.05)'
            }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#CA8A04',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>🔥</span> Quorra AI Creation
              </h4>
              <ul style={{
                color: '#d1d5db',
                lineHeight: '2',
                listStyle: 'none',
                padding: '0'
              }}>
                <li>• Unique to your business</li>
                <li>• Industry-specific patterns</li>
                <li>• Brand personality aware</li>
                <li>• Conversion optimized</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        position: 'relative',
        zIndex: '10',
        padding: '80px 24px'
      }}>
        <div style={{
          maxWidth: '1024px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '32px'
          }}>
            Ready to Forge Your Path?
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#d1d5db',
            marginBottom: '48px'
          }}>
            Join thousands of developers who have embraced the divine fire of clean code.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <button 
              onClick={() => window.location.href = '/templatespage'}
              style={{
                background: 'linear-gradient(to right, #CA8A04, #92400E)',
                border: '1px solid #B45309',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                color: 'white',
                cursor: 'pointer',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s'
              }} onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(to right, #B45309, #78350F)';
              }} onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(to right, #CA8A04, #92400E)';
              }}>
              Start Building
            </button>
            <button 
              onClick={() => window.location.href = '/settingspage'}
              style={{
                border: '1px solid #CA8A04',
                background: 'transparent',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }} onMouseOver={(e) => {
                e.target.style.background = 'rgba(202, 138, 4, 0.1)';
              }} onMouseOut={(e) => {
                e.target.style.background = 'transparent';
              }}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        position: 'relative',
        zIndex: '10',
        borderTop: '1px solid rgba(202, 138, 4, 0.3)',
        padding: '48px 24px'
      }}>
        <div style={{
          maxWidth: '1152px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #CA8A04, #92400E)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px'
          }}>
            QUORRA
          </div>
          <p style={{ color: '#9ca3af' }}>
            Channel the Goddess of Smithing. Forge the Future.
          </p>
        </div>
      </footer>

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

export default QuorraLandingPage;