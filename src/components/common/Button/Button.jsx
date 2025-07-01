/**
 * QUORRA DIVINE BUTTON COMPONENT
 * Sacred button with goddess-blessed styling and divine interactions
 * 
 * Features:
 * - Divine color variants following Quorra brand palette
 * - Sacred hover and focus interactions
 * - Intelligent size and style variants
 * - Accessibility-first design with ARIA support
 * - Performance-optimized animations
 * - Sparky integration ready
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  onClick,
  type = 'button',
  className = '',
  style = {},
  'aria-label': ariaLabel,
  ...props
}, ref) => {
  
  // Generate divine CSS classes
  const buttonClasses = [
    'quorra-button',
    `quorra-button--${variant}`,
    `quorra-button--${size}`,
    disabled && 'quorra-button--disabled',
    loading && 'quorra-button--loading',
    fullWidth && 'quorra-button--full-width',
    icon && 'quorra-button--with-icon',
    className
  ].filter(Boolean).join(' ');

  // Handle divine click with sacred wisdom
  const handleClick = (event) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    
    // Add divine click animation
    const button = event.currentTarget;
    button.classList.add('quorra-button--clicked');
    setTimeout(() => {
      button.classList.remove('quorra-button--clicked');
    }, 200);
    
    // Execute divine callback
    if (onClick) {
      onClick(event);
    }
  };

  // Sacred loading spinner
  const LoadingSpinner = () => (
    <div className="quorra-button__spinner" aria-hidden="true">
      <div className="quorra-button__spinner-circle"></div>
    </div>
  );

  // Divine icon rendering
  const renderIcon = () => {
    if (!icon) return null;
    
    return (
      <span className={`quorra-button__icon quorra-button__icon--${iconPosition}`}>
        {typeof icon === 'string' ? <i className={icon} /> : icon}
      </span>
    );
  };

  return (
    <button
      ref={ref}
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      style={style}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {iconPosition === 'left' && renderIcon()}
      
      <span className="quorra-button__content">
        {children}
      </span>
      
      {iconPosition === 'right' && renderIcon()}
      
      {/* Divine fire effect overlay */}
      <div className="quorra-button__fire-effect" aria-hidden="true"></div>
    </button>
  );
});

Button.displayName = 'QuorraButton';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',      // Divine fire gradient
    'secondary',    // Sacred bronze  
    'tertiary',     // Sacred copper
    'success',      // Blessed green
    'warning',      // Sacred amber
    'danger',       // Divine red
    'ghost',        // Transparent with divine border
    'divine'        // Special goddess variant
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  style: PropTypes.object,
  'aria-label': PropTypes.string
};

// Divine button variants for easy access
Button.Primary = (props) => <Button variant="primary" {...props} />;
Button.Secondary = (props) => <Button variant="secondary" {...props} />;
Button.Tertiary = (props) => <Button variant="tertiary" {...props} />;
Button.Success = (props) => <Button variant="success" {...props} />;
Button.Warning = (props) => <Button variant="warning" {...props} />;
Button.Danger = (props) => <Button variant="danger" {...props} />;
Button.Ghost = (props) => <Button variant="ghost" {...props} />;
Button.Divine = (props) => <Button variant="divine" {...props} />;

export default Button;