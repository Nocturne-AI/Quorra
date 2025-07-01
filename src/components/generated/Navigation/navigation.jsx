import React, { useState, useEffect } from 'react';
import './Navigation.css';

/**
 * QUORRA DIVINE NAVIGATION COMPONENT
 * Sacred website navigation blessed by the Goddess of Smithing
 * Generated component for user websites
 */

const Navigation = ({ 
  logo = "🔥 Divine Site",
  logoImage = null,
  logoLink = "/",
  links = [
    { text: "Home", href: "#home", active: true },
    { text: "About", href: "#about" },
    { text: "Services", href: "#services" },
    { text: "Portfolio", href: "#portfolio" },
    { text: "Contact", href: "#contact" }
  ],
  ctaButton = {
    text: "Get Started",
    href: "#get-started",
    onClick: null
  },
  variant = "default", // default, transparent, solid
  position = "fixed", // fixed, sticky, static
  background = "white",
  style = {},
  className = "",
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for transparent/fixed navigation
  useEffect(() => {
    if (position === 'fixed' && variant === 'transparent') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [position, variant]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.quorra-nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navClasses = [
    'quorra-nav',
    `quorra-nav--${variant}`,
    `quorra-nav--${position}`,
    isScrolled ? 'quorra-nav--scrolled' : '',
    isOpen ? 'quorra-nav--open' : '',
    className
  ].filter(Boolean).join(' ');

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={navClasses}
      style={{
        backgroundColor: variant === 'solid' ? background : undefined,
        ...style
      }}
      {...props}
    >
      <div className="quorra-nav__container">
        {/* Logo Section */}
        <div className="quorra-nav__brand">
          <a href={logoLink} className="quorra-nav__logo">
            {logoImage ? (
              <img src={logoImage} alt={logo} className="quorra-nav__logo-image" />
            ) : (
              <span className="quorra-nav__logo-text">{logo}</span>
            )}
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="quorra-nav__links">
          {links.map((link, index) => (
            <li key={index} className="quorra-nav__item">
              <a 
                href={link.href}
                onClick={link.onClick}
                className={`quorra-nav__link ${link.active ? 'quorra-nav__link--active' : ''}`}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        {ctaButton && (
          <div className="quorra-nav__cta">
            <a 
              href={ctaButton.href}
              onClick={ctaButton.onClick}
              className="quorra-nav__cta-button"
            >
              {ctaButton.text}
            </a>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button 
          className="quorra-nav__mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className={`quorra-hamburger ${isOpen ? 'quorra-hamburger--open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="quorra-nav__mobile-menu">
        <ul className="quorra-nav__mobile-links">
          {links.map((link, index) => (
            <li key={index} className="quorra-nav__mobile-item">
              <a 
                href={link.href}
                onClick={(e) => {
                  if (link.onClick) link.onClick(e);
                  handleLinkClick();
                }}
                className={`quorra-nav__mobile-link ${link.active ? 'quorra-nav__mobile-link--active' : ''}`}
              >
                {link.text}
              </a>
            </li>
          ))}
          
          {/* Mobile CTA */}
          {ctaButton && (
            <li className="quorra-nav__mobile-item quorra-nav__mobile-item--cta">
              <a 
                href={ctaButton.href}
                onClick={(e) => {
                  if (ctaButton.onClick) ctaButton.onClick(e);
                  handleLinkClick();
                }}
                className="quorra-nav__mobile-cta"
              >
                {ctaButton.text}
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;