/**
 * QUORRA DIVINE MODAL COMPONENT
 * Sacred modal overlay with goddess-blessed interactions
 * 
 * Features:
 * - Divine overlay with sacred backdrop
 * - Intelligent focus management and accessibility
 * - Sacred animations and transitions
 * - Keyboard navigation (ESC, Tab trap)
 * - Portal rendering for proper z-index
 * - Multiple sizes and variants
 * - Sparky integration ready
 */

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({
  children,
  open = false,
  onClose,
  title,
  footer,
  size = 'medium',
  variant = 'default',
  centered = true,
  closable = true,
  maskClosable = true,
  keyboard = true,
  destroyOnClose = false,
  zIndex = 1000,
  className = '',
  style = {},
  bodyStyle = {},
  maskStyle = {},
  wrapClassName = '',
  afterClose,
  afterOpen,
  getContainer,
  forceRender = false,
  ...props
}) => {
  const [visible, setVisible] = useState(open);
  const [animating, setAnimating] = useState(false);
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);
  const [container, setContainer] = useState(null);

  // Initialize container
  useEffect(() => {
    if (getContainer) {
      setContainer(getContainer());
    } else {
      setContainer(document.body);
    }
  }, [getContainer]);

  // Handle open/close state changes
  useEffect(() => {
    if (open) {
      openModal();
    } else {
      closeModal();
    }
  }, [open]);

  // Divine modal opening
  const openModal = useCallback(() => {
    if (visible) return;

    setAnimating(true);
    setVisible(true);
    
    // Store currently focused element
    previousActiveElement.current = document.activeElement;
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = getScrollbarWidth() + 'px';
    
    // Focus management
    setTimeout(() => {
      if (modalRef.current) {
        const focusableElement = modalRef.current.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElement) {
          focusableElement.focus();
        } else {
          modalRef.current.focus();
        }
      }
      setAnimating(false);
      if (afterOpen) afterOpen();
    }, 100);
  }, [visible, afterOpen]);

  // Divine modal closing
  const closeModal = useCallback(() => {
    if (!visible) return;

    setAnimating(true);
    
    setTimeout(() => {
      setVisible(false);
      setAnimating(false);
      
      // Restore body scroll
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      
      // Restore focus
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
      
      if (afterClose) afterClose();
    }, 200);
  }, [visible, afterClose]);

  // Handle sacred escape key
  const handleKeyDown = useCallback((event) => {
    if (!keyboard) return;
    
    if (event.key === 'Escape' && closable) {
      event.preventDefault();
      onClose?.();
    }
    
    // Focus trap
    if (event.key === 'Tab') {
      trapFocus(event);
    }
  }, [keyboard, closable, onClose]);

  // Sacred focus trap
  const trapFocus = (event) => {
    if (!modalRef.current) return;
    
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }
  };

  // Handle backdrop click
  const handleBackdropClick = (event) => {
    if (!maskClosable || !closable) return;
    
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  // Handle close button click
  const handleClose = () => {
    if (closable) {
      onClose?.();
    }
  };

  // Get scrollbar width for body padding
  const getScrollbarWidth = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;';
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  // Add event listeners
  useEffect(() => {
    if (visible) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [visible, handleKeyDown]);

  // Don't render if not visible and destroyOnClose is true
  if (!visible && !animating && destroyOnClose) {
    return null;
  }

  // Don't render if not forceRender and not open
  if (!forceRender && !open && !visible) {
    return null;
  }

  // Generate divine CSS classes
  const wrapClasses = [
    'quorra-modal-wrap',
    centered && 'quorra-modal-wrap--centered',
    wrapClassName
  ].filter(Boolean).join(' ');

  const modalClasses = [
    'quorra-modal',
    `quorra-modal--${size}`,
    `quorra-modal--${variant}`,
    visible && 'quorra-modal--visible',
    animating && 'quorra-modal--animating',
    className
  ].filter(Boolean).join(' ');

  const maskClasses = [
    'quorra-modal-mask',
    visible && 'quorra-modal-mask--visible'
  ].filter(Boolean).join(' ');

  // Sacred modal content
  const modalContent = (
    <div 
      className={wrapClasses}
      style={{ zIndex, ...style }}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'quorra-modal-title' : undefined}
      {...props}
    >
      {/* Sacred backdrop */}
      <div 
        className={maskClasses}
        style={maskStyle}
        aria-hidden="true"
      />
      
      {/* Divine modal container */}
      <div 
        ref={modalRef}
        className={modalClasses}
        style={bodyStyle}
        tabIndex={-1}
      >
        {/* Sacred header */}
        {(title || closable) && (
          <div className="quorra-modal__header">
            {title && (
              <h2 id="quorra-modal-title" className="quorra-modal__title">
                {title}
              </h2>
            )}
            {closable && (
              <button
                type="button"
                className="quorra-modal__close"
                onClick={handleClose}
                aria-label="Close modal"
              >
                <span className="quorra-modal__close-icon" aria-hidden="true">×</span>
              </button>
            )}
          </div>
        )}
        
        {/* Divine body */}
        <div className="quorra-modal__body">
          {children}
        </div>
        
        {/* Sacred footer */}
        {footer && (
          <div className="quorra-modal__footer">
            {footer}
          </div>
        )}
        
        {/* Divine glow effect */}
        <div className="quorra-modal__glow" aria-hidden="true" />
      </div>
    </div>
  );

  // Render through portal if container is available
  return container ? createPortal(modalContent, container) : null;
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.node,
  footer: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'fullscreen']),
  variant: PropTypes.oneOf(['default', 'divine', 'success', 'warning', 'danger']),
  centered: PropTypes.bool,
  closable: PropTypes.bool,
  maskClosable: PropTypes.bool,
  keyboard: PropTypes.bool,
  destroyOnClose: PropTypes.bool,
  zIndex: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  bodyStyle: PropTypes.object,
  maskStyle: PropTypes.object,
  wrapClassName: PropTypes.string,
  afterClose: PropTypes.func,
  afterOpen: PropTypes.func,
  getContainer: PropTypes.func,
  forceRender: PropTypes.bool
};

// Divine modal variants for easy access
Modal.confirm = (config) => {
  return new Promise((resolve) => {
    // Implementation for confirmation modal
    // This would create a confirmation dialog
  });
};

Modal.info = (config) => {
  // Implementation for info modal
};

Modal.success = (config) => {
  // Implementation for success modal
};

Modal.warning = (config) => {
  // Implementation for warning modal
};

Modal.error = (config) => {
  // Implementation for error modal
};

export default Modal;