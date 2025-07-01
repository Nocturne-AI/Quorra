import React, { useState, useEffect, useRef } from 'react';
import './sparkytips.css';

const SparkyTips = ({ 
  autoShow = true,
  showInterval = 12000,
  position = 'bottom-right',
  context = 'general'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const intervalRef = useRef(null);

  // Context-aware tips for Forge
  const tipsByContext = {
    general: [
      {
        title: "Clean CSS Magic",
        message: "I generate vanilla CSS that's 87% smaller than framework alternatives. Your sites load 3x faster!",
        icon: "⚡",
        type: "performance"
      },
      {
        title: "Smart Layout Detection", 
        message: "I can detect when you want flexbox vs CSS Grid and apply the most efficient layout automatically.",
        icon: "🎯",
        type: "layout"
      },
      {
        title: "Mobile-First Design",
        message: "Every design I help create is mobile-optimized by default. No extra work needed!",
        icon: "📱",
        type: "responsive"
      }
    ],
    cards: [
      {
        title: "Card Performance Tip",
        message: "The cards you're building use optimized CSS Grid. They'll load instantly and look perfect on mobile!",
        icon: "🃏",
        type: "performance"
      },
      {
        title: "Accessibility Built-in",
        message: "Your cards include proper focus states and keyboard navigation. Screen readers will love them!",
        icon: "♿",
        type: "accessibility"
      },
      {
        title: "Hover Effects Done Right",
        message: "I've added subtle hover animations that enhance UX without impacting performance.",
        icon: "✨",
        type: "interaction"
      }
    ],
    editing: [
      {
        title: "Drag & Drop Pro Tip",
        message: "Hold Shift while dragging for precise positioning. Use Ctrl+D to duplicate elements quickly!",
        icon: "🎨",
        type: "workflow"
      },
      {
        title: "Smart Spacing",
        message: "I'll suggest consistent spacing as you design. Your layouts will feel professionally crafted!",
        icon: "📐",
        type: "design"
      },
      {
        title: "Export Ready Code",
        message: "Every change generates production-ready CSS. No cleanup needed - just copy and deploy!",
        icon: "🚀",
        type: "export"
      }
    ],
    performance: [
      {
        title: "Bundle Size Matters",
        message: "Your current design will generate only 12KB of CSS vs 180KB with Bootstrap. That's 15x smaller!",
        icon: "📦",
        type: "performance"
      },
      {
        title: "Font Loading Optimization",
        message: "Use system fonts when possible, or I'll help you load web fonts efficiently without blocking render.",
        icon: "🔤",
        type: "fonts"
      },
      {
        title: "Image Optimization",
        message: "WebP images load 30% faster than PNG. I'll remind you to optimize for better Core Web Vitals!",
        icon: "🖼️",
        type: "images"
      }
    ]
  };

  const currentTips = tipsByContext[context] || tipsByContext.general;

  // Auto-show tips periodically
  useEffect(() => {
    if (autoShow && !hasInteracted) {
      intervalRef.current = setInterval(() => {
        setIsVisible(true);
        setCurrentTip((prev) => (prev + 1) % currentTips.length);
      }, showInterval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [autoShow, hasInteracted, showInterval, currentTips.length]);

  // Auto-hide after 6 seconds if not interacted
  useEffect(() => {
    if (isVisible && !hasInteracted) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);

      return () => clearTimeout(hideTimer);
    }
  }, [isVisible, hasInteracted]);

  const handleShowTip = () => {
    setIsVisible(true);
    setHasInteracted(true);
    setIsExpanded(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsExpanded(false);
  };

  const handleNextTip = () => {
    setCurrentTip((prev) => (prev + 1) % currentTips.length);
    setHasInteracted(true);
  };

  const handlePrevTip = () => {
    setCurrentTip((prev) => (prev - 1 + currentTips.length) % currentTips.length);
    setHasInteracted(true);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    setHasInteracted(true);
  };

  const getTipTypeClass = (type) => {
    const typeClasses = {
      performance: 'tip-performance',
      layout: 'tip-layout', 
      responsive: 'tip-responsive',
      accessibility: 'tip-accessibility',
      interaction: 'tip-interaction',
      workflow: 'tip-workflow',
      design: 'tip-design',
      export: 'tip-export',
      fonts: 'tip-fonts',
      images: 'tip-images'
    };
    return typeClasses[type] || '';
  };

  if (currentTips.length === 0) return null;

  const currentTipData = currentTips[currentTip];

  return (
    <>
      {/* Sparky Button - always visible */}
      <button 
        className={`sparky-button ${position}`}
        onClick={handleShowTip}
        title="Get tips from Sparky"
        aria-label="Show Sparky tips"
      >
        <span className="sparky-icon">🤖</span>
        <span className="sparky-label">Sparky</span>
        {!hasInteracted && (
          <span className="sparky-pulse"></span>
        )}
      </button>

      {/* Sparky Tips Panel */}
      {isVisible && (
        <div className={`sparky-tips ${position} ${isExpanded ? 'expanded' : ''}`}>
          <div className={`sparky-tip ${getTipTypeClass(currentTipData.type)}`}>
            <div className="sparky-header">
              <div className="sparky-avatar">
                <span className="sparky-face">🤖</span>
                <span className="sparky-status"></span>
              </div>
              <div className="sparky-title">
                <h4>Sparky Says</h4>
                <span className="sparky-context">{context}</span>
              </div>
              <button 
                className="sparky-close" 
                onClick={handleDismiss}
                aria-label="Dismiss tip"
              >
                ×
              </button>
            </div>
            
            <div className="sparky-content">
              <div className="tip-header">
                <span className="tip-icon">{currentTipData.icon}</span>
                <h5 className="tip-title">{currentTipData.title}</h5>
                <span className="tip-type">{currentTipData.type}</span>
              </div>
              
              <p className="tip-message">{currentTipData.message}</p>
              
              {isExpanded && (
                <div className="tip-details">
                  <div className="tip-stats">
                    <div className="stat">
                      <span className="stat-value">87%</span>
                      <span className="stat-label">Smaller CSS</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">3x</span>
                      <span className="stat-label">Faster Loading</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="sparky-actions">
              <div className="tip-navigation">
                <button 
                  className="nav-button"
                  onClick={handlePrevTip}
                  disabled={currentTips.length <= 1}
                  aria-label="Previous tip"
                >
                  ←
                </button>
                <span className="tip-counter">
                  {currentTip + 1} of {currentTips.length}
                </span>
                <button 
                  className="nav-button"
                  onClick={handleNextTip}
                  disabled={currentTips.length <= 1}
                  aria-label="Next tip"
                >
                  →
                </button>
              </div>
              
              <div className="action-buttons">
                <button 
                  className="action-button secondary"
                  onClick={handleExpand}
                >
                  {isExpanded ? 'Less' : 'More'}
                </button>
                <button 
                  className="action-button primary"
                  onClick={handleNextTip}
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// HOC for context-aware tips
export const withSparkyTips = (WrappedComponent, context = 'general') => {
  return function WithSparkyTipsComponent(props) {
    return (
      <>
        <WrappedComponent {...props} />
        <SparkyTips context={context} />
      </>
    );
  };
};

// Hook for programmatic tip control
export const useSparkyTips = () => {
  const [tipContext, setTipContext] = useState('general');
  
  const showTip = (message, type = 'info') => {
    // Dispatch custom event for manual tips
    window.dispatchEvent(new CustomEvent('sparky:show-tip', {
      detail: { message, type }
    }));
  };
  
  const changeTipContext = (newContext) => {
    setTipContext(newContext);
  };
  
  return {
    showTip,
    changeTipContext,
    currentContext: tipContext
  };
};

export default SparkyTips;