import React, { useState, useRef, useEffect } from 'react';
import './SparkyChat.css';

/**
 * QUORRA SPARKY CHAT COMPONENT
 * Divine AI assistant chat interface blessed by the Goddess of Smithing
 * Integrated with Sparky memory system for contextual design help
 */

const SparkyChat = ({ 
  isOpen = false,
  onToggle,
  onSendMessage,
  messages = [],
  isTyping = false,
  placeholder = "Ask Sparky about your design...",
  maxHeight = "500px",
  position = "bottom-right", // bottom-right, bottom-left, sidebar
  style = {},
  className = "",
  ...props 
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current && isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && onSendMessage) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const chatClasses = [
    'quorra-sparky-chat',
    `quorra-sparky-chat--${position}`,
    isOpen ? 'quorra-sparky-chat--open' : '',
    isMinimized ? 'quorra-sparky-chat--minimized' : '',
    className
  ].filter(Boolean).join(' ');

  if (!isOpen && position !== 'sidebar') {
    return (
      <button 
        className="quorra-sparky-trigger"
        onClick={onToggle}
        aria-label="Open Sparky AI Assistant"
      >
        <span className="quorra-sparky-icon">⚡</span>
        <span className="quorra-sparky-pulse"></span>
      </button>
    );
  }

  return (
    <div 
      className={chatClasses}
      style={{ maxHeight: isMinimized ? 'auto' : maxHeight, ...style }}
      {...props}
    >
      {/* Chat Header */}
      <div className="quorra-sparky-header">
        <div className="quorra-sparky-brand">
          <div className="quorra-sparky-avatar">
            <span className="quorra-sparky-flame">⚡</span>
          </div>
          <div className="quorra-sparky-info">
            <div className="quorra-sparky-name">Sparky</div>
            <div className="quorra-sparky-status">
              <span className="quorra-status-dot"></span>
              Divine AI Assistant
            </div>
          </div>
        </div>
        
        <div className="quorra-sparky-controls">
          <button 
            className="quorra-sparky-control"
            onClick={toggleMinimize}
            aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
          >
            {isMinimized ? '▲' : '▼'}
          </button>
          {position !== 'sidebar' && (
            <button 
              className="quorra-sparky-control"
              onClick={onToggle}
              aria-label="Close chat"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Chat Messages */}
      {!isMinimized && (
        <>
          <div className="quorra-sparky-messages">
            {messages.length === 0 ? (
              <div className="quorra-sparky-welcome">
                <div className="quorra-welcome-icon">🔥</div>
                <div className="quorra-welcome-title">Divine Assistance Awaits</div>
                <div className="quorra-welcome-text">
                  Ask me about your design, components, or anything about building your website!
                </div>
                <div className="quorra-welcome-suggestions">
                  <button 
                    className="quorra-suggestion"
                    onClick={() => onSendMessage && onSendMessage("How do I make my hero section more engaging?")}
                  >
                    💡 Hero section tips
                  </button>
                  <button 
                    className="quorra-suggestion"
                    onClick={() => onSendMessage && onSendMessage("What colors work well for my industry?")}
                  >
                    🎨 Color suggestions
                  </button>
                  <button 
                    className="quorra-suggestion"
                    onClick={() => onSendMessage && onSendMessage("Help me improve my navigation")}
                  >
                    🧭 Navigation help
                  </button>
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div 
                  key={index}
                  className={`quorra-message quorra-message--${message.type}`}
                >
                  {message.type === 'sparky' && (
                    <div className="quorra-message-avatar">
                      <span className="quorra-avatar-flame">⚡</span>
                    </div>
                  )}
                  
                  <div className="quorra-message-content">
                    <div className="quorra-message-text">
                      {message.text}
                    </div>
                    
                    {message.suggestions && message.suggestions.length > 0 && (
                      <div className="quorra-message-suggestions">
                        {message.suggestions.map((suggestion, idx) => (
                          <button 
                            key={idx}
                            className="quorra-suggestion"
                            onClick={() => onSendMessage && onSendMessage(suggestion)}
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {message.codeExample && (
                      <div className="quorra-code-example">
                        <div className="quorra-code-header">
                          <span>Divine Code Example</span>
                          <button className="quorra-copy-code">📋</button>
                        </div>
                        <pre className="quorra-code-block">
                          <code>{message.codeExample}</code>
                        </pre>
                      </div>
                    )}
                    
                    <div className="quorra-message-time">
                      {message.timestamp || new Date().toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </div>
              ))
            )}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="quorra-message quorra-message--sparky">
                <div className="quorra-message-avatar">
                  <span className="quorra-avatar-flame">⚡</span>
                </div>
                <div className="quorra-message-content">
                  <div className="quorra-typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form className="quorra-sparky-input" onSubmit={handleSubmit}>
            <div className="quorra-input-container">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                className="quorra-chat-textarea"
                rows={1}
                style={{
                  minHeight: '44px',
                  maxHeight: '120px',
                  resize: 'none'
                }}
              />
              <button 
                type="submit"
                className="quorra-send-button"
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                <span className="quorra-send-icon">➤</span>
              </button>
            </div>
            <div className="quorra-input-hint">
              Press Enter to send, Shift+Enter for new line
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default SparkyChat;