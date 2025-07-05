import React, { useState } from 'react';
import './ComponentLibrary.css';
"use client";

import React from 'react';
/**
 * QUORRA DIVINE COMPONENT LIBRARY
 * Sacred collection of blessed UI components
 * Organized by divine categories for the Goddess of Smithing
 */

const ComponentLibrary = ({ onComponentDrag, searchTerm = '', onSearch }) => {
  const [expandedCategories, setExpandedCategories] = useState(['layout', 'content']);
  const [draggedComponent, setDraggedComponent] = useState(null);

  // Divine component categories blessed by Quorra
  const componentCategories = [
    {
      id: 'layout',
      name: 'Sacred Layout',
      icon: '🏛️',
      description: 'Divine structural elements',
      components: [
        { id: 'container', name: 'Container', icon: '📦', description: 'Sacred wrapper element' },
        { id: 'section', name: 'Section', icon: '📋', description: 'Divine content section' },
        { id: 'grid', name: 'Grid', icon: '⚏', description: 'Blessed grid system' },
        { id: 'flexbox', name: 'Flexbox', icon: '🔄', description: 'Flexible divine layout' },
        { id: 'divider', name: 'Divider', icon: '➖', description: 'Sacred separator' },
        { id: 'spacer', name: 'Spacer', icon: '⚪', description: 'Divine spacing element' }
      ]
    },
    {
      id: 'content',
      name: 'Divine Content',
      icon: '📝',
      description: 'Sacred text and media',
      components: [
        { id: 'heading', name: 'Heading', icon: '📰', description: 'Divine title element' },
        { id: 'text', name: 'Text', icon: '📄', description: 'Sacred text content' },
        { id: 'paragraph', name: 'Paragraph', icon: '📃', description: 'Blessed text block' },
        { id: 'quote', name: 'Quote', icon: '💬', description: 'Divine quotation' },
        { id: 'list', name: 'List', icon: '📝', description: 'Sacred item list' },
        { id: 'code', name: 'Code', icon: '💻', description: 'Divine code block' }
      ]
    },
    {
      id: 'media',
      name: 'Sacred Media',
      icon: '🎨',
      description: 'Divine visual elements',
      components: [
        { id: 'image', name: 'Image', icon: '🖼️', description: 'Sacred visual element' },
        { id: 'video', name: 'Video', icon: '🎥', description: 'Divine moving picture' },
        { id: 'icon', name: 'Icon', icon: '✨', description: 'Blessed symbol' },
        { id: 'avatar', name: 'Avatar', icon: '👤', description: 'Divine profile image' },
        { id: 'gallery', name: 'Gallery', icon: '🖼️', description: 'Sacred image collection' },
        { id: 'logo', name: 'Logo', icon: '🔥', description: 'Divine brand symbol' }
      ]
    },
    {
      id: 'interactive',
      name: 'Divine Interactions',
      icon: '⚡',
      description: 'Sacred user controls',
      components: [
        { id: 'button', name: 'Button', icon: '🔘', description: 'Divine action trigger' },
        { id: 'link', name: 'Link', icon: '🔗', description: 'Sacred navigation' },
        { id: 'input', name: 'Input', icon: '📝', description: 'Divine text field' },
        { id: 'textarea', name: 'Textarea', icon: '📄', description: 'Sacred text area' },
        { id: 'select', name: 'Select', icon: '📋', description: 'Divine dropdown' },
        { id: 'checkbox', name: 'Checkbox', icon: '☑️', description: 'Sacred choice box' },
        { id: 'radio', name: 'Radio', icon: '⚪', description: 'Divine option button' },
        { id: 'slider', name: 'Slider', icon: '🎚️', description: 'Sacred range control' }
      ]
    },
    {
      id: 'navigation',
      name: 'Sacred Navigation',
      icon: '🧭',
      description: 'Divine wayfinding',
      components: [
        { id: 'navbar', name: 'Navbar', icon: '📍', description: 'Divine navigation bar' },
        { id: 'breadcrumb', name: 'Breadcrumb', icon: '🗂️', description: 'Sacred path trail' },
        { id: 'pagination', name: 'Pagination', icon: '📄', description: 'Divine page control' },
        { id: 'tabs', name: 'Tabs', icon: '📑', description: 'Sacred content tabs' },
        { id: 'menu', name: 'Menu', icon: '☰', description: 'Divine option menu' },
        { id: 'sidebar', name: 'Sidebar', icon: '📎', description: 'Sacred side panel' }
      ]
    },
    {
      id: 'feedback',
      name: 'Divine Feedback',
      icon: '💫',
      description: 'Sacred user notifications',
      components: [
        { id: 'alert', name: 'Alert', icon: '⚠️', description: 'Divine warning message' },
        { id: 'toast', name: 'Toast', icon: '🍞', description: 'Sacred notification' },
        { id: 'modal', name: 'Modal', icon: '🪟', description: 'Divine dialog window' },
        { id: 'tooltip', name: 'Tooltip', icon: '💭', description: 'Sacred hint bubble' },
        { id: 'popover', name: 'Popover', icon: '💬', description: 'Divine info popup' },
        { id: 'progress', name: 'Progress', icon: '📊', description: 'Sacred progress bar' }
      ]
    }
  ];

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Handle component drag start
  const handleDragStart = (e, component) => {
    setDraggedComponent(component);
    e.dataTransfer.setData('componentType', component.id);
    e.dataTransfer.setData('componentData', JSON.stringify(component));
    e.dataTransfer.effectAllowed = 'copy';

    // Add visual feedback
    e.target.style.opacity = '0.5';
    
    if (onComponentDrag) {
      onComponentDrag(component, 'start');
    }
  };

  // Handle drag end
  const handleDragEnd = (e) => {
    e.target.style.opacity = '1';
    setDraggedComponent(null);
    
    if (onComponentDrag) {
      onComponentDrag(null, 'end');
    }
  };

  // Filter components based on search
  const filterComponents = (components) => {
    if (!searchTerm) return components;
    return components.filter(component => 
      component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Filter categories that have matching components
  const filteredCategories = componentCategories.filter(category => {
    const filteredComponents = filterComponents(category.components);
    return filteredComponents.length > 0;
  });

  return (
    <div className="quorra-component-library">
      {/* Sacred Header */}
      <div className="quorra-panel-header">
        <div className="quorra-panel-title">
          <span className="quorra-panel-icon">📚</span>
          <span>Component Library</span>
        </div>
        <span className="quorra-panel-badge">{componentCategories.reduce((acc, cat) => acc + cat.components.length, 0)}</span>
      </div>

      {/* Divine Search */}
      <div className="quorra-search-container">
        <input
          type="text"
          className="quorra-search-input"
          placeholder="Search divine components..."
          value={searchTerm}
          onChange={(e) => onSearch && onSearch(e.target.value)}
        />
        <span className="quorra-search-icon">🔍</span>
      </div>

      {/* Sacred Categories */}
      <div className="quorra-categories">
        {filteredCategories.map(category => {
          const isExpanded = expandedCategories.includes(category.id);
          const filteredComponents = filterComponents(category.components);

          return (
            <div key={category.id} className="quorra-component-category">
              <div 
                className="quorra-category-header"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="quorra-category-info">
                  <span className="quorra-category-icon">{category.icon}</span>
                  <div className="quorra-category-details">
                    <span className="quorra-category-name">{category.name}</span>
                    <span className="quorra-category-description">{category.description}</span>
                  </div>
                </div>
                <div className="quorra-category-controls">
                  <span className="quorra-category-count">{filteredComponents.length}</span>
                  <span className={`quorra-category-chevron ${isExpanded ? 'quorra-category-chevron--expanded' : ''}`}>
                    ▼
                  </span>
                </div>
              </div>

              {isExpanded && (
                <div className="quorra-component-grid">
                  {filteredComponents.map(component => (
                    <div
                      key={component.id}
                      className="quorra-component-item"
                      draggable="true"
                      onDragStart={(e) => handleDragStart(e, component)}
                      onDragEnd={handleDragEnd}
                      title={component.description}
                    >
                      <span className="quorra-component-icon">{component.icon}</span>
                      <span className="quorra-component-name">{component.name}</span>
                      <div className="quorra-component-overlay">
                        <span className="quorra-drag-hint">Drag to Canvas</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Empty state for search */}
      {filteredCategories.length === 0 && searchTerm && (
        <div className="quorra-empty-search">
          <div className="quorra-empty-icon">🔍</div>
          <div className="quorra-empty-title">No Divine Components Found</div>
          <div className="quorra-empty-text">
            Try adjusting your search or explore different categories
          </div>
        </div>
      )}

      {/* Divine Footer */}
      <div className="quorra-library-footer">
        <div className="quorra-footer-stats">
          <span>🔥 Blessed by Quorra</span>
          <span>{componentCategories.reduce((acc, cat) => acc + cat.components.length, 0)} Divine Components</span>
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary;