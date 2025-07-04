import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';
import { Menu, X, Flame, User, LogOut, Settings, Crown } from 'lucide-react';

// Main Navigation Header Component
const QuorraHeader = () => {
  const { user, isAuthenticated, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-amber-500/20 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">QUORRA</span>
            <span className="text-xs text-amber-400 hidden sm:block">Goddess of Smithing</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/templatespage" className="text-gray-300 hover:text-amber-400 transition-colors">
              Templates
            </Link>
            <Link href="/editor" className="text-gray-300 hover:text-amber-400 transition-colors">
              Editor
            </Link>
            <Link href="/pricingpage" className="text-gray-300 hover:text-amber-400 transition-colors">
              Pricing
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Dashboard
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors">
                    <User className="w-4 h-4" />
                    <span>{user?.email?.split('@')[0] || 'User'}</span>
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 border border-amber-500/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <Link href="/settingspage" className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-amber-400 hover:bg-gray-700/50 transition-colors">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </Link>
                    <button onClick={handleSignOut} className="flex items-center space-x-2 w-full px-4 py-3 text-gray-300 hover:text-amber-400 hover:bg-gray-700/50 transition-colors">
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Login
                </Link>
                <Link href="/signup" className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-amber-500 hover:to-orange-400 transition-all">
                  Channel Divine Fire
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-amber-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-amber-500/20 py-4">
            <div className="space-y-4">
              <Link href="/templatespage" className="block text-gray-300 hover:text-amber-400 transition-colors px-4 py-2">
                Templates
              </Link>
              <Link href="/editor" className="block text-gray-300 hover:text-amber-400 transition-colors px-4 py-2">
                Editor
              </Link>
              <Link href="/pricingpage" className="block text-gray-300 hover:text-amber-400 transition-colors px-4 py-2">
                Pricing
              </Link>
              
              {isAuthenticated ? (
                <div className="space-y-2 px-4">
                  <Link href="/dashboard" className="block text-gray-300 hover:text-amber-400 transition-colors py-2">
                    Dashboard
                  </Link>
                  <Link href="/settingspage" className="block text-gray-300 hover:text-amber-400 transition-colors py-2">
                    Settings
                  </Link>
                  <button onClick={handleSignOut} className="block text-gray-300 hover:text-amber-400 transition-colors py-2">
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="space-y-2 px-4">
                  <Link href="/login" className="block text-gray-300 hover:text-amber-400 transition-colors py-2">
                    Login
                  </Link>
                  <Link href="/signup" className="block bg-gradient-to-r from-amber-600 to-orange-500 text-white px-4 py-2 rounded-lg text-center">
                    Channel Divine Fire
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Call-to-Action Button Component
const QuorraCTA = ({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'md',
  icon: Icon,
  onClick,
  disabled = false 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-amber-600 to-orange-500 text-white hover:from-amber-500 hover:to-orange-400 shadow-lg hover:shadow-xl",
    secondary: "border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white",
    ghost: "text-amber-400 hover:text-amber-300 hover:bg-amber-500/10"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]}`;

  const content = (
    <>
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
};

// Footer Component
const QuorraFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">QUORRA</span>
            </div>
            <p className="text-gray-400 text-sm">
              Blessed by the Goddess of Smithing. Channel divine fire to forge perfect websites with clean, performance-optimized code.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-amber-400 font-semibold">Sacred Tools</h3>
            <div className="space-y-2">
              <Link href="/templatespage" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Templates
              </Link>
              <Link href="/editor" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Visual Editor
              </Link>
              <Link href="/pricingpage" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Sacred Tiers
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-amber-400 font-semibold">Divine Wisdom</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">
                About Quorra
              </a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Divine Blog
              </a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Support
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-amber-400 font-semibold">Sacred Laws</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Quorra. Blessed by divine fire. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-amber-400 text-sm">Channel the Divine Fire</span>
            <Crown className="w-4 h-4 text-amber-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

// Page Layout Wrapper
const QuorraLayout = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {showHeader && <QuorraHeader />}
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <QuorraFooter />}
    </div>
  );
};

// Demo Usage Examples
const NavigationDemo = () => {
  return (
    <QuorraLayout>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Divine Navigation <span className="text-amber-400">System</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Complete navigation system for the Goddess of Smithing's realm
          </p>
        </div>

        {/* CTA Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-amber-400 font-semibold">Primary CTAs</h3>
            <div className="space-y-3">
              <QuorraCTA href="/signup" icon={Crown}>
                Channel Divine Fire
              </QuorraCTA>
              <QuorraCTA href="/editor" size="lg">
                Start Forging
              </QuorraCTA>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-amber-400 font-semibold">Secondary CTAs</h3>
            <div className="space-y-3">
              <QuorraCTA href="/templatespage" variant="secondary">
                Browse Templates
              </QuorraCTA>
              <QuorraCTA href="/pricingpage" variant="secondary" size="sm">
                View Sacred Tiers
              </QuorraCTA>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-amber-400 font-semibold">Ghost CTAs</h3>
            <div className="space-y-3">
              <QuorraCTA href="/login" variant="ghost">
                Sign In
              </QuorraCTA>
              <QuorraCTA href="#" variant="ghost" size="sm">
                Learn More
              </QuorraCTA>
            </div>
          </div>
        </div>

        {/* Navigation Features */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/20">
          <h3 className="text-xl font-semibold text-white mb-4">Navigation Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300">Responsive mobile menu</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300">User authentication states</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300">Divine fire branding</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300">Hover animations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300">Dropdown user menu</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300">Complete footer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </QuorraLayout>
  );
};

export default NavigationDemo;
export { QuorraHeader, QuorraFooter, QuorraCTA, QuorraLayout };