import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // Simple signup for now
    localStorage.setItem('quorra_auth', 'true');
    localStorage.setItem('quorra_user', email);
    window.location.href = '/dashboard';
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #18181b, #1c1917, #451a03)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Floating Embers Background - Same as homepage */}
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
          background: '#ef4444',
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
          background: '#A16207',
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
          background: '#fb923c',
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
          background: '#f87171',
          borderRadius: '50%',
          opacity: '0.35',
          animation: 'pulse 2s infinite',
          animationDelay: '2s',
          top: '60%',
          right: '8%'
        }}></div>
      </div>

      {/* Signup Box */}
      <div style={{
        position: 'relative',
        zIndex: '10',
        background: 'linear-gradient(to bottom right, rgba(41, 37, 36, 0.8), rgba(24, 24, 27, 0.8))',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(202, 138, 4, 0.3)',
        borderRadius: '16px',
        padding: '48px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img 
            src="/images/logos/quorra-logo.png" 
            alt="Quorra Logo" 
            style={{ 
              height: '48px', 
              margin: '0 auto',
              filter: 'drop-shadow(0 0 8px rgba(251, 146, 60, 0.3))'
            }}
            onError={(e) => {
              // Fallback to text if logo fails
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{ 
            display: 'none',
            fontSize: '32px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #CA8A04, #391700)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px'
          }}>
            QUORRA
          </div>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginTop: '16px',
            background: 'linear-gradient(to right, #fb923c, #ef4444)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Join the Forge
          </h1>
          <p style={{ color: '#9ca3af', marginTop: '8px' }}>
            Begin your journey with the Goddess of Smithing
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '24px',
            color: '#fca5a5',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        {/* Signup Fields */}
        <div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              color: '#fbbf24',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(41, 37, 36, 0.5)',
                border: '1px solid rgba(202, 138, 4, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#CA8A04';
                e.target.style.boxShadow = '0 0 0 3px rgba(202, 138, 4, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(202, 138, 4, 0.3)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              color: '#fdba74',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(251, 146, 60, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(251, 146, 60, 0.6)';
                e.target.style.boxShadow = '0 0 0 3px rgba(251, 146, 60, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(251, 146, 60, 0.3)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              color: '#fdba74',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(251, 146, 60, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(251, 146, 60, 0.6)';
                e.target.style.boxShadow = '0 0 0 3px rgba(251, 146, 60, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(251, 146, 60, 0.3)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <button
            onClick={handleSignup}
            style={{
              width: '100%',
              background: 'linear-gradient(to right, #CA8A04, #391700)',
              border: '1px solid #CA8A04',
              padding: '12px 24px',
              borderRadius: '8px',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              marginBottom: '24px'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'linear-gradient(to right, #A16207, #1C0701)';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 8px 16px rgba(202, 138, 4, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'linear-gradient(to right, #CA8A04, #391700)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Start Forging Free
          </button>
        </div>

        {/* Login link */}
        <p style={{ textAlign: 'center', color: '#9ca3af' }}>
          Already have an account?{' '}
          <a 
            href="/login"
            style={{
              color: '#CA8A04',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.color = '#A16207'}
            onMouseOut={(e) => e.target.style.color = '#CA8A04'}
          >
            Sign In
          </a>
        </p>

        {/* Divine Blessing */}
        <div style={{
          marginTop: '24px',
          padding: '16px',
          background: 'rgba(202, 138, 4, 0.05)',
          border: '1px solid rgba(202, 138, 4, 0.2)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '12px',
            color: '#CA8A04',
            fontWeight: '600',
            marginBottom: '4px'
          }}>
            🔥 Divine Welcome Gift
          </div>
          <div style={{ fontSize: '12px', color: '#9ca3af' }}>
            Start with Ember tier (FREE) and upgrade anytime
          </div>
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

export default SignupPage;