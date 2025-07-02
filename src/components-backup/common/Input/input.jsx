/**
 * QUORRA DIVINE INPUT COMPONENT
 * Sacred input with goddess-blessed styling and intelligent validation
 * 
 * Features:
 * - Divine styling with Quorra brand colors
 * - Intelligent validation and error handling
 * - Sacred focus states and animations
 * - Accessibility-first design
 * - Multiple input types and variants
 * - Sparky integration for smart suggestions
 */

import React, { useState, useRef, forwardRef, useId } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = forwardRef(({
  label,
  type = 'text',
  value,
  defaultValue,
  placeholder,
  error,
  helperText,
  success,
  disabled = false,
  readOnly = false,
  required = false,
  fullWidth = false,
  size = 'medium',
  variant = 'outlined',
  startIcon,
  endIcon,
  onFocus,
  onBlur,
  onChange,
  onKeyDown,
  className = '',
  style = {},
  maxLength,
  minLength,
  pattern,
  autoComplete,
  autoFocus = false,
  'aria-describedby': ariaDescribedby,
  ...props
}, ref) => {
  
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(Boolean(value || defaultValue));
  const inputRef = useRef(null);
  const inputId = useId();
  const helperTextId = useId();
  const errorId = useId();

  // Combine refs
  const combinedRef = ref || inputRef;

  // Generate divine CSS classes
  const containerClasses = [
    'quorra-input',
    `quorra-input--${variant}`,
    `quorra-input--${size}`,
    focused && 'quorra-input--focused',
    hasValue && 'quorra-input--has-value',
    error && 'quorra-input--error',
    success && 'quorra-input--success',
    disabled && 'quorra-input--disabled',
    readOnly && 'quorra-input--readonly',
    fullWidth && 'quorra-input--full-width',
    startIcon && 'quorra-input--with-start-icon',
    endIcon && 'quorra-input--with-end-icon',
    className
  ].filter(Boolean).join(' ');

  // Handle divine focus with sacred wisdom
  const handleFocus = (event) => {
    setFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  // Handle divine blur with grace
  const handleBlur = (event) => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  // Handle divine change with intelligence
  const handleChange = (event) => {
    const newValue = event.target.value;
    setHasValue(Boolean(newValue));
    
    if (onChange) {
      onChange(event);
    }
  };

  // Handle divine key events
  const handleKeyDown = (event) => {
    // Divine Enter key handling
    if (event.key === 'Enter' && type !== 'textarea') {
      event.currentTarget.classList.add('quorra-input--divine-enter');
      setTimeout(() => {
        event.currentTarget.classList.remove('quorra-input--divine-enter');
      }, 200);
    }
    
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  // Sacred icon rendering
  const renderIcon = (icon, position) => {
    if (!icon) return null;
    
    return (
      <span className={`quorra-input__icon quorra-input__icon--${position}`}>
        {typeof icon === 'string' ? <i className={icon} /> : icon}
      </span>
    );
  };

  // Divine label rendering
  const renderLabel = () => {
    if (!label) return null;
    
    return (
      <label 
        htmlFor={inputId}
        className="quorra-input__label"
      >
        {label}
        {required && <span className="quorra-input__required" aria-label="required">*</span>}
      </label>
    );
  };

  // Sacred helper text rendering
  const renderHelperText = () => {
    if (error) {
      return (
        <div id={errorId} className="quorra-input__helper-text quorra-input__helper-text--error">
          <span className="quorra-input__error-icon" aria-hidden="true">⚠️</span>
          {error}
        </div>
      );
    }
    
    if (success) {
      return (
        <div className="quorra-input__helper-text quorra-input__helper-text--success">
          <span className="quorra-input__success-icon" aria-hidden="true">✨</span>
          {success}
        </div>
      );
    }
    
    if (helperText) {
      return (
        <div id={helperTextId} className="quorra-input__helper-text">
          {helperText}
        </div>
      );
    }
    
    return null;
  };

  // Generate ARIA attributes
  const ariaAttributes = {
    'aria-invalid': error ? 'true' : 'false',
    'aria-describedby': [
      error ? errorId : null,
      helperText && !error ? helperTextId : null,
      ariaDescribedby
    ].filter(Boolean).join(' ') || undefined
  };

  return (
    <div className={containerClasses} style={style}>
      {renderLabel()}
      
      <div className="quorra-input__field-container">
        {renderIcon(startIcon, 'start')}
        
        {type === 'textarea' ? (
          <textarea
            ref={combinedRef}
            id={inputId}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            maxLength={maxLength}
            minLength={minLength}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="quorra-input__field"
            rows={4}
            {...ariaAttributes}
            {...props}
          />
        ) : (
          <input
            ref={combinedRef}
            type={type}
            id={inputId}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            maxLength={maxLength}
            minLength={minLength}
            pattern={pattern}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="quorra-input__field"
            {...ariaAttributes}
            {...props}
          />
        )}
        
        {renderIcon(endIcon, 'end')}
        
        {/* Divine focus ring */}
        <div className="quorra-input__focus-ring" aria-hidden="true"></div>
      </div>
      
      {renderHelperText()}
    </div>
  );
});

Input.displayName = 'QuorraInput';

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'text', 'email', 'password', 'number', 'tel', 'url', 'search', 
    'date', 'time', 'datetime-local', 'month', 'week', 'color', 'textarea'
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  success: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  startIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  endIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  pattern: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  'aria-describedby': PropTypes.string
};

// Divine input variants for easy access
Input.Text = (props) => <Input type="text" {...props} />;
Input.Email = (props) => <Input type="email" {...props} />;
Input.Password = (props) => <Input type="password" {...props} />;
Input.Number = (props) => <Input type="number" {...props} />;
Input.Search = (props) => <Input type="search" {...props} />;
Input.Textarea = (props) => <Input type="textarea" {...props} />;

export default Input;