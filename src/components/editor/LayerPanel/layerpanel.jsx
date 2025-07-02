import React, { useState, useCallback } from 'react';
import './LayerPanel.css';

/**
 * QUORRA DIVINE LAYER PANEL
 * Sacred element hierarchy blessed by the Goddess of Smithing
 * Features: Layer management, visibility control, reordering, grouping
 */

const LayerPanel = ({ 
  elements = [],
  selectedElement = null,
  onElementSelect,
  onElementsReorder,
  onElementVisibilityToggle,
  onElementLock,
  onElementGroup,
  onElementUngroup,
  onElementDelete
}) => {
  const [draggedLayer, setDraggedLayer] = useState(null);
  const [expandedGroups, setExpandedGroups] = useState(new Set());
  const [showContextMenu, setShowContextMenu] = useState(null);

  // Get element icon based on type
  const getElementIcon = (type) => {
    const icons = {
      container: '📦',
      section: '📋',
      heading: '📰',
      text: '📄',
      paragraph: '📃',
      button: '🔘',
      image: '🖼️',
      video: '🎥',
      input: '📝',
      navbar: '📍',
      grid: '⚏',
      flexbox: '🔄',
      divider: '➖',
      spacer: '⚪',
      icon: '✨',
      link: '🔗',
      list: '📝',
      quote: '💬',
      code: '💻'
    };
    return icons[type] || '⬜';
  };

  // Get element name with fallback
  const getElementName = (element) => {
    if (element.name) return element.name;
    if (element.content && element.content.length < 20) return element.content;
    return `${element.type.charAt(0).toUpperCase() + element.type.slice(1)} Element`;
  };

  // Handle layer click
  const handleLayerClick = useCallback((elementId, event) => {
    event.stopPropagation();
    if (onElementSelect) {
      onElementSelect(elementId);
    }
  }, [onElementSelect]);

  // Handle visibility toggle
  const handleVisibilityToggle = useCallback((elementId, event) => {
    event.stopPropagation();
    if (onElementVisibilityToggle) {
      onElementVisibilityToggle(elementId);
    }
  }, [onElementVisibilityToggle]);

  // Handle lock toggle
  const handleLockToggle = useCallback((elementId, event) => {
    event.stopPropagation();
    if (onElementLock) {
      onElementLock(elementId);
    }
  }, [onElementLock]);

  // Handle drag start
  const handleDragStart = useCallback((event, elementId) => {
    setDraggedLayer(elementId);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', elementId);
    
    // Add visual feedback
    event.target.style.opacity = '0.5';
  }, []);

  // Handle drag end
  const handleDragEnd = useCallback((event) => {
    event.target.style.opacity = '1';
    setDraggedLayer(null);
  }, []);

  // Handle drag over
  const handleDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  // Handle drop
  const handleDrop = useCallback((event, targetElementId) => {
    event.preventDefault();
    const draggedElementId = event.dataTransfer.getData('text/plain');
    
    if (draggedElementId && draggedElementId !== targetElementId && onElementsReorder) {
      const draggedIndex = elements.findIndex(el => el.id === draggedElementId);
      const targetIndex = elements.findIndex(el => el.id === targetElementId);
      
      if (draggedIndex !== -1 && targetIndex !== -1) {
        onElementsReorder(draggedIndex, targetIndex);
      }
    }
  }, [elements, onElementsReorder]);

  // Handle context menu
  const handleContextMenu = useCallback((event, elementId) => {
    event.preventDefault();
    event.stopPropagation();
    setShowContextMenu({
      elementId,
      x: event.clientX,
      y: event.clientY
    });
  }, []);

  // Close context menu
  const closeContextMenu = useCallback(() => {
    setShowContextMenu(null);
  }, []);

  // Handle context menu actions
  const handleContextAction = useCallback((action, elementId) => {
    switch (action) {
      case 'duplicate':
        // Handle duplication
        break;
      case 'delete':
        if (onElementDelete) {
          onElementDelete(elementId);
        }
        break;
      case 'group':
        if (onElementGroup) {
          onElementGroup([elementId]);
        }
        break;
      case 'ungroup':
        if (onElementUngroup) {
          onElementUngroup(elementId);
        }
        break;
      default:
        break;
    }
    closeContextMenu();
  }, [onElementDelete, onElementGroup, onElementUngroup]);

  // Sort elements by z-index (highest first)
  const sortedElements = [...elements].sort((a, b) => {
    const aZIndex = a.styles?.zIndex || 0;
    const bZIndex = b.styles?.zIndex || 0;
    return bZIndex - aZIndex;
  });

  return (
    <div className="quorra-layer-panel" onClick={closeContextMenu}>
      {/* Sacred Header */}
      <div className="quorra-panel-header">
        <div className="quorra-panel-title">
          <span className="quorra-panel-icon">📋</span>
          <span>Layers</span>
        </div>
        <div className="quorra-panel-actions">
          <button 
            className="quorra-panel-button"
            title="Group Selected"
            onClick={() => onElementGroup && onElementGroup([selectedElement])}
            disabled={!selectedElement}
          >
            📁
          </button>
          <button 
            className="quorra-panel-button"
            title="Lock All"
          >
            🔒
          </button>
        </div>
      </div>

      {/* Layers List */}
      <div className="quorra-layers-list">
        {sortedElements.length === 0 ? (
          <div className="quorra-layers-empty">
            <div className="quorra-empty-icon">📋</div>
            <div className="quorra-empty-title">No Divine Layers</div>
            <div className="quorra-empty-text">
              Add elements to the canvas to see them here
            </div>
          </div>
        ) : (
          sortedElements.map((element, index) => (
            <div
              key={element.id}
              className={`quorra-layer-item ${
                selectedElement === element.id ? 'quorra-layer-item--selected' : ''
              } ${element.isVisible === false ? 'quorra-layer-item--hidden' : ''} ${
                element.isLocked ? 'quorra-layer-item--locked' : ''
              }`}
              onClick={(e) => handleLayerClick(element.id, e)}
              onContextMenu={(e) => handleContextMenu(e, element.id)}
              onDragStart={(e) => handleDragStart(e, element.id)}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, element.id)}
              draggable={!element.isLocked}
            >
              {/* Layer Icon */}
              <div className="quorra-layer-icon">
                <span className="quorra-element-icon">
                  {getElementIcon(element.type)}
                </span>
              </div>

              {/* Layer Info */}
              <div className="quorra-layer-info">
                <div className="quorra-layer-name">
                  {getElementName(element)}
                </div>
                <div className="quorra-layer-meta">
                  <span className="quorra-layer-type">{element.type}</span>
                  <span className="quorra-layer-position">
                    {Math.round(element.position.x)}, {Math.round(element.position.y)}
                  </span>
                </div>
              </div>

              {/* Layer Controls */}
              <div className="quorra-layer-controls">
                {/* Visibility Toggle */}
                <button
                  className={`quorra-layer-control ${
                    element.isVisible === false ? 'quorra-layer-control--off' : ''
                  }`}
                  onClick={(e) => handleVisibilityToggle(element.id, e)}
                  title={element.isVisible === false ? 'Show Layer' : 'Hide Layer'}
                >
                  {element.isVisible === false ? '👁️‍🗨️' : '👁️'}
                </button>

                {/* Lock Toggle */}
                <button
                  className={`quorra-layer-control ${
                    element.isLocked ? 'quorra-layer-control--on' : ''
                  }`}
                  onClick={(e) => handleLockToggle(element.id, e)}
                  title={element.isLocked ? 'Unlock Layer' : 'Lock Layer'}
                >
                  {element.isLocked ? '🔒' : '🔓'}
                </button>
              </div>

              {/* Z-Index Indicator */}
              {(element.styles?.zIndex || 0) !== 0 && (
                <div className="quorra-layer-zindex">
                  z:{element.styles.zIndex}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Context Menu */}
      {showContextMenu && (
        <>
          <div className="quorra-context-overlay" onClick={closeContextMenu} />
          <div
            className="quorra-context-menu"
            style={{
              left: showContextMenu.x,
              top: showContextMenu.y
            }}
          >
            <button
              className="quorra-context-item"
              onClick={() => handleContextAction('duplicate', showContextMenu.elementId)}
            >
              <span className="quorra-context-icon">📋</span>
              <span>Duplicate</span>
              <span className="quorra-context-shortcut">Ctrl+D</span>
            </button>
            <button
              className="quorra-context-item"
              onClick={() => handleContextAction('group', showContextMenu.elementId)}
            >
              <span className="quorra-context-icon">📁</span>
              <span>Group</span>
              <span className="quorra-context-shortcut">Ctrl+G</span>
            </button>
            <div className="quorra-context-divider" />
            <button
              className="quorra-context-item"
              onClick={() => handleContextAction('moveToFront', showContextMenu.elementId)}
            >
              <span className="quorra-context-icon">⬆️</span>
              <span>Bring to Front</span>
            </button>
            <button
              className="quorra-context-item"
              onClick={() => handleContextAction('moveToBack', showContextMenu.elementId)}
            >
              <span className="quorra-context-icon">⬇️</span>
              <span>Send to Back</span>
            </button>
            <div className="quorra-context-divider" />
            <button
              className="quorra-context-item quorra-context-item--danger"
              onClick={() => handleContextAction('delete', showContextMenu.elementId)}
            >
              <span className="quorra-context-icon">🗑️</span>
              <span>Delete</span>
              <span className="quorra-context-shortcut">Del</span>
            </button>
          </div>
        </>
      )}

      {/* Layer Stats */}
      <div className="quorra-layer-stats">
        <div className="quorra-stats-item">
          <span className="quorra-stats-label">Total:</span>
          <span className="quorra-stats-value">{elements.length}</span>
        </div>
        <div className="quorra-stats-item">
          <span className="quorra-stats-label">Selected:</span>
          <span className="quorra-stats-value">{selectedElement ? 1 : 0}</span>
        </div>
        <div className="quorra-stats-item">
          <span className="quorra-stats-label">Hidden:</span>
          <span className="quorra-stats-value">
            {elements.filter(el => el.isVisible === false).length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LayerPanel;