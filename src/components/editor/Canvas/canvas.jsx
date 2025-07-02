import React, { useState, useRef, useCallback } from 'react';
import './Canvas.css';

/**
 * QUORRA DIVINE CANVAS COMPONENT
 * Sacred design workspace blessed by the Goddess of Smithing
 * Features: Drag & Drop, Element Selection, Responsive Preview
 */

const Canvas = ({ 
  elements = [], 
  selectedElement = null,
  onElementSelect,
  onElementUpdate,
  onElementAdd,
  deviceMode = 'desktop',
  showGrid = true 
}) => {
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Handle element drag start
  const handleMouseDown = useCallback((e, elementId) => {
    e.preventDefault();
    e.stopPropagation();
    
    const element = elements.find(el => el.id === elementId);
    if (!element) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    setIsDragging(elementId);
    onElementSelect(elementId);
  }, [elements, onElementSelect]);

  // Handle element drag
  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;

    const canvasRect = canvasRef.current.getBoundingClientRect();
    const newX = e.clientX - canvasRect.left - dragOffset.x;
    const newY = e.clientY - canvasRect.top - dragOffset.y;

    onElementUpdate(isDragging, {
      position: {
        x: Math.max(0, newX),
        y: Math.max(0, newY)
      }
    });
  }, [isDragging, dragOffset, onElementUpdate]);

  // Handle drag end
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setDragOffset({ x: 0, y: 0 });
  }, []);

  // Handle canvas click (deselect)
  const handleCanvasClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onElementSelect(null);
    }
  }, [onElementSelect]);

  // Handle drop from component library
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData('componentType');
    
    if (componentType) {
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - canvasRect.left;
      const y = e.clientY - canvasRect.top;

      const newElement = {
        id: `element_${Date.now()}`,
        type: componentType,
        position: { x, y },
        size: { width: 200, height: 100 },
        styles: {},
        content: getDefaultContent(componentType)
      };

      onElementAdd(newElement);
    }
  }, [onElementAdd]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  // Get default content for component types
  const getDefaultContent = (type) => {
    const defaults = {
      text: 'Text Element',
      heading: 'Heading',
      button: 'Button',
      image: 'Image',
      container: 'Container'
    };
    return defaults[type] || 'Element';
  };

  // Render element handles for selected element
  const renderElementHandles = (element) => {
    if (!element || selectedElement !== element.id) return null;

    return (
      <div 
        className="quorra-element__handles"
        style={{
          left: element.position.x,
          top: element.position.y,
          width: element.size.width,
          height: element.size.height
        }}
      >
        <div className="quorra-handle quorra-handle--tl" style={{ top: -4, left: -4 }} />
        <div className="quorra-handle quorra-handle--tr" style={{ top: -4, right: -4 }} />
        <div className="quorra-handle quorra-handle--bl" style={{ bottom: -4, left: -4 }} />
        <div className="quorra-handle quorra-handle--br" style={{ bottom: -4, right: -4 }} />
      </div>
    );
  };

  return (
    <div className={`quorra-canvas quorra-canvas--${deviceMode} ${showGrid ? 'quorra-canvas--grid' : ''}`}>
      <div className="quorra-canvas__controls">
        <div className="quorra-canvas__zoom">
          <button className="quorra-canvas__zoom-btn">-</button>
          <span className="quorra-canvas__zoom-level">100%</span>
          <button className="quorra-canvas__zoom-btn">+</button>
        </div>
        <div className="quorra-canvas__device-info">
          {deviceMode === 'mobile' && '📱 Mobile (375px)'}
          {deviceMode === 'tablet' && '📊 Tablet (768px)'}
          {deviceMode === 'desktop' && '🖥️ Desktop (1200px)'}
        </div>
      </div>

      <div 
        ref={canvasRef}
        className="quorra-canvas__workspace"
        onClick={handleCanvasClick}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {elements.map((element) => (
          <div
            key={element.id}
            className={`quorra-element ${selectedElement === element.id ? 'quorra-element--selected' : ''}`}
            style={{
              left: element.position.x,
              top: element.position.y,
              width: element.size.width,
              height: element.size.height,
              ...element.styles
            }}
            onMouseDown={(e) => handleMouseDown(e, element.id)}
          >
            <div className="quorra-element__content">
              {element.content}
            </div>
            {renderElementHandles(element)}
          </div>
        ))}

        {elements.length === 0 && (
          <div className="quorra-canvas__empty">
            <div className="quorra-canvas__empty-icon">🔥</div>
            <div className="quorra-canvas__empty-title">Divine Canvas Awaits</div>
            <div className="quorra-canvas__empty-text">
              Drag components from the library to start forging your masterpiece
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Canvas;