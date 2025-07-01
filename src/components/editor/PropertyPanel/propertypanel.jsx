import React, { useState, useEffect } from 'react';
import './PropertyPanel.css';

/**
 * QUORRA DIVINE PROPERTY PANEL
 * Sacred element configuration blessed by the Goddess of Smithing
 * Features: Style editing, Content editing, Layout controls
 */

const PropertyPanel = ({ 
  selectedElement,
  onElementUpdate,
  onElementDelete
}) => {
  const [activeSection, setActiveSection] = useState('content');
  const [localStyles, setLocalStyles] = useState({});

  // Update local styles when selected element changes
  useEffect(() => {
    if (selectedElement) {
      setLocalStyles(selectedElement.styles || {});
    }
  }, [selectedElement]);

  // Handle style updates
  const handleStyleChange = (property, value) => {
    const newStyles = { ...localStyles, [property]: value };
    setLocalStyles(newStyles);
    
    if (onElementUpdate && selectedElement) {
      onElementUpdate(selectedElement.id, { styles: newStyles });
    }
  };

  // Handle content updates
  const handleContentChange = (content) => {
    if (onElementUpdate && selectedElement) {
      onElementUpdate(selectedElement.id, { content });
    }
  };

  // Handle position/size updates
  const handleTransformChange = (property, value) => {
    if (onElementUpdate && selectedElement) {
      const numericValue = parseFloat(value) || 0;
      
      if (property === 'x' || property === 'y') {
        onElementUpdate(selectedElement.id, {
          position: {
            ...selectedElement.position,
            [property]: numericValue
          }
        });
      } else if (property === 'width' || property === 'height') {
        onElementUpdate(selectedElement.id, {
          size: {
            ...selectedElement.size,
            [property]: numericValue
          }
        });
      }
    }
  };

  // Property sections
  const sections = [
    { id: 'content', name: 'Content', icon: '📝' },
    { id: 'style', name: 'Style', icon: '🎨' },
    { id: 'layout', name: 'Layout', icon: '📐' },
    { id: 'effects', name: 'Effects', icon: '✨' }
  ];

  if (!selectedElement) {
    return (
      <div className="quorra-property-panel">
        <div className="quorra-panel-header">
          <span>Properties</span>
        </div>
        <div className="quorra-property-empty">
          <div className="quorra-empty-icon">🎯</div>
          <div className="quorra-empty-title">No Element Selected</div>
          <div className="quorra-empty-text">
            Select an element on the canvas to edit its divine properties
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quorra-property-panel">
      {/* Sacred Header */}
      <div className="quorra-panel-header">
        <div className="quorra-panel-title">
          <span>Properties</span>
          <span className="quorra-element-type">{selectedElement.type}</span>
        </div>
        <button 
          className="quorra-delete-button"
          onClick={() => onElementDelete && onElementDelete(selectedElement.id)}
          title="Delete Element"
        >
          🗑️
        </button>
      </div>

      {/* Element Info */}
      <div className="quorra-element-info">
        <div className="quorra-element-id">ID: {selectedElement.id}</div>
        <div className="quorra-element-coords">
          ({Math.round(selectedElement.position.x)}, {Math.round(selectedElement.position.y)})
        </div>
      </div>

      {/* Section Tabs */}
      <div className="quorra-section-tabs">
        {sections.map(section => (
          <button
            key={section.id}
            className={`quorra-section-tab ${activeSection === section.id ? 'quorra-section-tab--active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="quorra-tab-icon">{section.icon}</span>
            <span className="quorra-tab-name">{section.name}</span>
          </button>
        ))}
      </div>

      {/* Content Section */}
      {activeSection === 'content' && (
        <div className="quorra-property-section">
          <div className="quorra-form-group">
            <label className="quorra-label">Content</label>
            {selectedElement.type === 'text' || selectedElement.type === 'heading' ? (
              <textarea
                className="quorra-textarea"
                value={selectedElement.content || ''}
                onChange={(e) => handleContentChange(e.target.value)}
                placeholder="Enter your divine text..."
                rows={3}
              />
            ) : selectedElement.type === 'button' ? (
              <input
                type="text"
                className="quorra-input"
                value={selectedElement.content || ''}
                onChange={(e) => handleContentChange(e.target.value)}
                placeholder="Button text..."
              />
            ) : selectedElement.type === 'image' ? (
              <div className="quorra-image-controls">
                <input
                  type="text"
                  className="quorra-input"
                  value={selectedElement.src || ''}
                  onChange={(e) => handleContentChange(e.target.value)}
                  placeholder="Image URL..."
                />
                <input
                  type="text"
                  className="quorra-input"
                  value={selectedElement.alt || ''}
                  onChange={(e) => handleContentChange(e.target.value)}
                  placeholder="Alt text..."
                />
              </div>
            ) : (
              <input
                type="text"
                className="quorra-input"
                value={selectedElement.content || ''}
                onChange={(e) => handleContentChange(e.target.value)}
                placeholder="Element content..."
              />
            )}
          </div>
        </div>
      )}

      {/* Style Section */}
      {activeSection === 'style' && (
        <div className="quorra-property-section">
          {/* Typography */}
          <div className="quorra-property-group">
            <div className="quorra-property-group-header">
              <span className="quorra-property-group-icon">🔤</span>
              <span>Typography</span>
            </div>
            <div className="quorra-property-grid">
              <div className="quorra-form-group">
                <label className="quorra-label">Font Size</label>
                <input
                  type="range"
                  className="quorra-slider"
                  min="8"
                  max="72"
                  value={parseInt(localStyles.fontSize) || 16}
                  onChange={(e) => handleStyleChange('fontSize', `${e.target.value}px`)}
                />
                <span className="quorra-slider-value">{parseInt(localStyles.fontSize) || 16}px</span>
              </div>
              <div className="quorra-form-group">
                <label className="quorra-label">Font Weight</label>
                <select
                  className="quorra-select"
                  value={localStyles.fontWeight || 'normal'}
                  onChange={(e) => handleStyleChange('fontWeight', e.target.value)}
                >
                  <option value="300">Light</option>
                  <option value="normal">Normal</option>
                  <option value="500">Medium</option>
                  <option value="600">Semibold</option>
                  <option value="700">Bold</option>
                  <option value="900">Black</option>
                </select>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="quorra-property-group">
            <div className="quorra-property-group-header">
              <span className="quorra-property-group-icon">🎨</span>
              <span>Colors</span>
            </div>
            <div className="quorra-color-grid">
              <div className="quorra-form-group">
                <label className="quorra-label">Text Color</label>
                <div className="quorra-color-input-group">
                  <input
                    type="color"
                    className="quorra-color-picker"
                    value={localStyles.color || '#000000'}
                    onChange={(e) => handleStyleChange('color', e.target.value)}
                  />
                  <input
                    type="text"
                    className="quorra-color-text"
                    value={localStyles.color || '#000000'}
                    onChange={(e) => handleStyleChange('color', e.target.value)}
                  />
                </div>
              </div>
              <div className="quorra-form-group">
                <label className="quorra-label">Background</label>
                <div className="quorra-color-input-group">
                  <input
                    type="color"
                    className="quorra-color-picker"
                    value={localStyles.backgroundColor || '#ffffff'}
                    onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                  />
                  <input
                    type="text"
                    className="quorra-color-text"
                    value={localStyles.backgroundColor || '#ffffff'}
                    onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Spacing */}
          <div className="quorra-property-group">
            <div className="quorra-property-group-header">
              <span className="quorra-property-group-icon">📐</span>
              <span>Spacing</span>
            </div>
            <div className="quorra-spacing-grid">
              <div className="quorra-form-group">
                <label className="quorra-label">Padding</label>
                <input
                  type="range"
                  className="quorra-slider"
                  min="0"
                  max="50"
                  value={parseInt(localStyles.padding) || 0}
                  onChange={(e) => handleStyleChange('padding', `${e.target.value}px`)}
                />
                <span className="quorra-slider-value">{parseInt(localStyles.padding) || 0}px</span>
              </div>
              <div className="quorra-form-group">
                <label className="quorra-label">Margin</label>
                <input
                  type="range"
                  className="quorra-slider"
                  min="0"
                  max="50"
                  value={parseInt(localStyles.margin) || 0}
                  onChange={(e) => handleStyleChange('margin', `${e.target.value}px`)}
                />
                <span className="quorra-slider-value">{parseInt(localStyles.margin) || 0}px</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Layout Section */}
      {activeSection === 'layout' && (
        <div className="quorra-property-section">
          {/* Position & Size */}
          <div className="quorra-property-group">
            <div className="quorra-property-group-header">
              <span className="quorra-property-group-icon">📍</span>
              <span>Position & Size</span>
            </div>
            <div className="quorra-transform-grid">
              <div className="quorra-form-group">
                <label className="quorra-label">X</label>
                <input
                  type="number"
                  className="quorra-input quorra-input--small"
                  value={Math.round(selectedElement.position.x)}
                  onChange={(e) => handleTransformChange('x', e.target.value)}
                />
              </div>
              <div className="quorra-form-group">
                <label className="quorra-label">Y</label>
                <input
                  type="number"
                  className="quorra-input quorra-input--small"
                  value={Math.round(selectedElement.position.y)}
                  onChange={(e) => handleTransformChange('y', e.target.value)}
                />
              </div>
              <div className="quorra-form-group">
                <label className="quorra-label">Width</label>
                <input
                  type="number"
                  className="quorra-input quorra-input--small"
                  value={Math.round(selectedElement.size.width)}
                  onChange={(e) => handleTransformChange('width', e.target.value)}
                />
              </div>
              <div className="quorra-form-group">
                <label className="quorra-label">Height</label>
                <input
                  type="number"
                  className="quorra-input quorra-input--small"
                  value={Math.round(selectedElement.size.height)}
                  onChange={(e) => handleTransformChange('height', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Border & Radius */}
          <div className="quorra-property-group">
            <div className="quorra-property-group-header">
              <span className="quorra-property-group-icon">⬜</span>
              <span>Border & Radius</span>
            </div>
            <div className="quorra-property-grid">
              <div className="quorra-form-group">
                <label className="quorra-label">Border Radius</label>
                <input
                  type="range"
                  className="quorra-slider"
                  min="0"
                  max="50"
                  value={parseInt(localStyles.borderRadius) || 0}
                  onChange={(e) => handleStyleChange('borderRadius', `${e.target.value}px`)}
                />
                <span className="quorra-slider-value">{parseInt(localStyles.borderRadius) || 0}px</span>
              </div>
              <div className="quorra-form-group">
                <label className="quorra-label">Border Width</label>
                <input
                  type="range"
                  className="quorra-slider"
                  min="0"
                  max="10"
                  value={parseInt(localStyles.borderWidth) || 0}
                  onChange={(e) => handleStyleChange('borderWidth', `${e.target.value}px`)}
                />
                <span className="quorra-slider-value">{parseInt(localStyles.borderWidth) || 0}px</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Effects Section */}
      {activeSection === 'effects' && (
        <div className="quorra-property-section">
          {/* Shadow & Opacity */}
          <div className="quorra-property-group">
            <div className="quorra-property-group-header">
              <span className="quorra-property-group-icon">✨</span>
              <span>Divine Effects</span>
            </div>
            <div className="quorra-property-grid">
              <div className="quorra-form-group">
                <label className="quorra-label">Opacity</label>
                <input
                  type="range"
                  className="quorra-slider"
                  min="0"
                  max="1"
                  step="0.1"
                  value={localStyles.opacity || 1}
                  onChange={(e) => handleStyleChange('opacity', e.target.value)}
                />
                <span className="quorra-slider-value">{Math.round((localStyles.opacity || 1) * 100)}%</span>
              </div>
              <div className="quorra-form-group">
                <label className="quorra-label">Shadow</label>
                <select
                  className="quorra-select"
                  value={localStyles.boxShadow ? 'shadow' : 'none'}
                  onChange={(e) => handleStyleChange('boxShadow', 
                    e.target.value === 'shadow' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'
                  )}
                >
                  <option value="none">None</option>
                  <option value="shadow">Divine Shadow</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyPanel;