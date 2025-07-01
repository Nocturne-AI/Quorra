import React, { useState, useEffect } from 'react';
import './SparkyPanel.css';

/**
 * QUORRA SPARKY PANEL COMPONENT
 * Divine AI assistant panel blessed by the Goddess of Smithing
 * Integrated contextual help panel for the visual editor
 */

const SparkyPanel = ({ 
  selectedElement = null,
  currentContext = 'general', // general, component, styling, layout
  suggestions = [],
  tips = [],
  isVisible = true,
  onApplySuggestion,
  onDismissTip,
  onContextChange,
  style = {},
  className = "",
  ...props 
}) => {
  const [activeTab, setActiveTab] = useState('suggestions');
  const [isMinimized, setIsMinimized] = useState(false);

  // Context-aware content based on current editor state
  const getContextualContent = () => {
    const content = {
      general: {
        title: "Divine Guidance",
        icon: "🔥",
        description: "General design wisdom from Quorra"
      },
      component: {
        title: "Component Mastery",
        icon: "📦",
        description: `Optimizing your ${selectedElement?.type || 'component'}`
      },
      styling: {
        title: "Sacred Styling",
        icon: "🎨",
        description: "Divine fire color and style guidance"
      },
      layout: {
        title: "Layout Harmony",
        icon: "📐",
        description: "Perfect positioning blessed by Quorra"
      }
    };

    return content[currentContext] || content.general;
  };

  const contextContent = getContextualContent();

  const tabs = [
    { id: 'suggestions', name: 'Suggestions', icon: '💡', count: suggestions.length },
    { id: 'tips', name: 'Tips', icon: '✨', count: tips.length },
    { id: 'insights', name: 'Insights', icon: '🔮', count: 0 }
  ];

  const panelClasses = [
    'quorra-sparky-panel',
    isVisible ? 'quorra-sparky-panel--visible' : '',
    isMinimized ? 'quorra-sparky-panel--minimized' : '',
    className
  ].filter(Boolean).join(' ');

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div 
      className={panelClasses}
      style={style}
      {...props}
    >
      {/* Panel Header */}
      <div className="quorra-sparky-panel-header">
        <div className="quorra-panel-brand">
          <div className="quorra-panel-icon">{contextContent.icon}</div>
          <div className="quorra-panel-info">
            <div className="quorra-panel-title">{contextContent.title}</div>
            <div className="quorra-panel-description">{contextContent.description}</div>
          </div>
        </div>
        
        <div className="quorra-panel-controls">
          <button 
            className="quorra-panel-control"
            onClick={toggleMinimize}
            aria-label={isMinimized ? "Expand panel" : "Minimize panel"}
          >
            {isMinimized ? '▲' : '▼'}
          </button>
        </div>
      </div>

      {/* Panel Content */}
      {!isMinimized && (
        <>
          {/* Context Tabs */}
          <div className="quorra-panel-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`quorra-panel-tab ${activeTab === tab.id ? 'quorra-panel-tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="quorra-tab-icon">{tab.icon}</span>
                <span className="quorra-tab-name">{tab.name}</span>
                {tab.count > 0 && (
                  <span className="quorra-tab-badge">{tab.count}</span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="quorra-panel-content">
            
            {/* Suggestions Tab */}
            {activeTab === 'suggestions' && (
              <div className="quorra-suggestions">
                {suggestions.length > 0 ? (
                  suggestions.map((suggestion, index) => (
                    <div key={index} className="quorra-suggestion-card">
                      <div className="quorra-suggestion-header">
                        <div className="quorra-suggestion-icon">{suggestion.icon || '💡'}</div>
                        <div className="quorra-suggestion-title">{suggestion.title}</div>
                        <div className="quorra-suggestion-priority">
                          {suggestion.priority === 'high' && '🔥'}
                          {suggestion.priority === 'medium' && '⚡'}
                          {suggestion.priority === 'low' && '✨'}
                        </div>
                      </div>
                      
                      <div className="quorra-suggestion-description">
                        {suggestion.description}
                      </div>
                      
                      {suggestion.action && (
                        <button 
                          className="quorra-suggestion-action"
                          onClick={() => onApplySuggestion && onApplySuggestion(suggestion)}
                        >
                          {suggestion.action}
                        </button>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="quorra-empty-state">
                    <div className="quorra-empty-icon">💡</div>
                    <div className="quorra-empty-title">Divine Wisdom Awaits</div>
                    <div className="quorra-empty-text">
                      Select an element or start designing to receive blessed suggestions from Quorra
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tips Tab */}
            {activeTab === 'tips' && (
              <div className="quorra-tips">
                {tips.length > 0 ? (
                  tips.map((tip, index) => (
                    <div key={index} className="quorra-tip-card">
                      <div className="quorra-tip-header">
                        <div className="quorra-tip-icon">{tip.icon || '✨'}</div>
                        <div className="quorra-tip-category">{tip.category}</div>
                        <button 
                          className="quorra-tip-dismiss"
                          onClick={() => onDismissTip && onDismissTip(tip.id)}
                          aria-label="Dismiss tip"
                        >
                          ✕
                        </button>
                      </div>
                      
                      <div className="quorra-tip-title">{tip.title}</div>
                      <div className="quorra-tip-description">{tip.description}</div>
                      
                      {tip.learnMore && (
                        <a 
                          href={tip.learnMore}
                          className="quorra-tip-learn-more"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn More →
                        </a>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="quorra-empty-state">
                    <div className="quorra-empty-icon">✨</div>
                    <div className="quorra-empty-title">All Caught Up!</div>
                    <div className="quorra-empty-text">
                      You've mastered all available tips. Keep designing with divine confidence!
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Insights Tab */}
            {activeTab === 'insights' && (
              <div className="quorra-insights">
                <div className="quorra-insight-card">
                  <div className="quorra-insight-header">
                    <div className="quorra-insight-icon">📊</div>
                    <div className="quorra-insight-title">Design Performance</div>
                  </div>
                  <div className="quorra-insight-metrics">
                    <div className="quorra-metric">
                      <div className="quorra-metric-value">95%</div>
                      <div className="quorra-metric-label">Divine Score</div>
                    </div>
                    <div className="quorra-metric">
                      <div className="quorra-metric-value">3.2s</div>
                      <div className="quorra-metric-label">Load Time</div>
                    </div>
                    <div className="quorra-metric">
                      <div className="quorra-metric-value">12KB</div>
                      <div className="quorra-metric-label">CSS Size</div>
                    </div>
                  </div>
                </div>

                <div className="quorra-insight-card">
                  <div className="quorra-insight-header">
                    <div className="quorra-insight-icon">🎯</div>
                    <div className="quorra-insight-title">Conversion Optimization</div>
                  </div>
                  <div className="quorra-insight-description">
                    Your call-to-action placement follows divine conversion patterns. 
                    Consider testing the button color against your brand palette.
                  </div>
                </div>

                <div className="quorra-insight-card">
                  <div className="quorra-insight-header">
                    <div className="quorra-insight-icon">♿</div>
                    <div className="quorra-insight-title">Accessibility</div>
                  </div>
                  <div className="quorra-insight-description">
                    Excellent color contrast and keyboard navigation. 
                    Your design is blessed with inclusive accessibility.
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SparkyPanel;