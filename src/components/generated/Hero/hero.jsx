import React from 'react';
import './Hero.css';

/**
 * QUORRA DIVINE HERO COMPONENT
 * Sacred website hero section blessed by the Goddess of Smithing
 * Generated component for user websites
 */

const Hero = ({ 
  title = "Forge Your Digital Dreams",
  subtitle = "Create stunning websites with divine simplicity and zero code complexity",
  primaryCta = {
    text: "Start Creating",
    href: "#get-started",
    onClick: null
  },
  secondaryCta = {
    text: "Watch Demo",
    href: "#demo",
    onClick: null
  },
  backgroundImage = null,
  backgroundVideo = null,
  overlay = true,
  textAlign = "center", // left, center, right
  contentPosition = "center", // top, center, bottom
  style = {},
  className = "",
  ...props 
}) => {
  const heroClasses = [
    'quorra-hero',
    `quorra-hero--text-${textAlign}`,
    `quorra-hero--content-${contentPosition}`,
    overlay && backgroundImage ? 'quorra-hero--with-overlay' : '',
    className
  ].filter(Boolean).join(' ');

  const backgroundStyle = {
    ...(backgroundImage && { 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }),
    ...style
  };

  return (
    <section 
      className={heroClasses}
      style={backgroundStyle}
      {...props}
    >
      {/* Background Video */}
      {backgroundVideo && (
        <video 
          className="quorra-hero__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      {overlay && (backgroundImage || backgroundVideo) && (
        <div className="quorra-hero__overlay" />
      )}

      {/* Content Container */}
      <div className="quorra-hero__container">
        <div className="quorra-hero__content">
          <h1 className="quorra-hero__title">
            {title}
          </h1>
          
          {subtitle && (
            <p className="quorra-hero__subtitle">
              {subtitle}
            </p>
          )}

          <div className="quorra-hero__actions">
            {primaryCta && (
              <a 
                href={primaryCta.href}
                onClick={primaryCta.onClick}
                className="quorra-hero__cta quorra-hero__cta--primary"
              >
                {primaryCta.text}
              </a>
            )}
            
            {secondaryCta && (
              <a 
                href={secondaryCta.href}
                onClick={secondaryCta.onClick}
                className="quorra-hero__cta quorra-hero__cta--secondary"
              >
                {secondaryCta.text}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="quorra-hero__scroll-indicator">
        <div className="quorra-scroll-arrow">
          <span>⌄</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;