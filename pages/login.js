import React, { useState } from 'react';
import { QuorraLayout } from '../src/components/QuorraNavigation';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple login for now - we'll add real auth later
    if (email && password) {
      // Store that user is logged in
      localStorage.setItem('quorra_auth', 'true');
      localStorage.setItem('quorra_user', email);
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } else {
      setError('Please enter email and password');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #71717a, #27272a, #3f3f46)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
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

      {/* Login Box with Divine Bronze Styling */}
      <div style={{
        position: 'relative',
        zIndex: '10',
        background: 'linear-gradient(to bottom right, rgba(63, 63, 70, 0.8), rgba(39, 39, 42, 0.8))',
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
            src="/images/logos/quorra-icon.png" 
            alt="Quorra Logo" 
            style={{ height: '48px', margin: '0 auto' }}
          />
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginTop: '16px',
            background: 'linear-gradient(to right, #CA8A04, #92400E)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Welcome Back
          </h1>
          <p style={{ color: '#a1a1aa', marginTop: '8px' }}>
            Channel the divine fire once more
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: 'rgba(146, 64, 14, 0.1)',
            border: '1px solid rgba(146, 64, 14, 0.3)',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '24px',
            color: '#FED7AA',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        {/* Login Form */}
        <div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              color: '#FBBF24',
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
                background: 'rgba(63, 63, 70, 0.5)',
                border: '1px solid rgba(202, 138, 4, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(202, 138, 4, 0.6)';
                e.target.style.boxShadow = '0 0 0 3px rgba(202, 138, 4, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(202, 138, 4, 0.3)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              color: '#FBBF24',
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
                background: 'rgba(63, 63, 70, 0.5)',
                border: '1px solid rgba(202, 138, 4, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(202, 138, 4, 0.6)';
                e.target.style.boxShadow = '0 0 0 3px rgba(202, 138, 4, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(202, 138, 4, 0.3)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              background: 'linear-gradient(to right, #CA8A04, #92400E)',
              border: '1px solid #B45309',
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
              e.target.style.background = 'linear-gradient(to right, #B45309, #78350F)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'linear-gradient(to right, #CA8A04, #92400E)';
            }}
          >
            Enter the Forge
          </button>
        </div>

        {/* Sign up link */}
        <p style={{ textAlign: 'center', color: '#a1a1aa' }}>
          New to the forge?{' '}
          <a 
            href="/signup"
            style={{
              color: '#CA8A04',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.color = '#B45309'}
            onMouseOut={(e) => e.target.style.color = '#CA8A04'}
          >
            Create Account
          </a>
        </p>
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

export default LoginPage;