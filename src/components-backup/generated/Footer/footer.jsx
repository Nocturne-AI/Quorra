import React from 'react';
import './Footer.css';

/**
 * QUORRA DIVINE FOOTER COMPONENT
 * Sacred website footer blessed by the Goddess of Smithing
 * Generated component for user websites
 */

const Footer = ({ 
  logo = "🔥 Divine Site",
  logoImage = null,
  companyName = "Your Divine Company",
  tagline = "Forged with divine fire",
  description = "Creating beautiful digital experiences blessed by the Goddess of Smithing.",
  year = new Date().getFullYear(),
  links = {
    company: [
      { text: "About Us", href: "/about" },
      { text: "Our Story", href: "/story" },
      { text: "Careers", href: "/careers" },
      { text: "Press", href: "/press" }
    ],
    services: [
      { text: "Web Design", href: "/services/design" },
      { text: "Development", href: "/services/development" },
      { text: "Consulting", href: "/services/consulting" },
      { text: "Support", href: "/services/support" }
    ],
    legal: [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms of Service", href: "/terms" },
      { text: "Cookie Policy", href: "/cookies" },
      { text: "GDPR", href: "/gdpr" }
    ]
  },
  socialLinks = [
    { icon: "📧", href: "mailto:hello@example.com", label: "Email", platform: "email" },
    { icon: "🐦", href: "https://twitter.com", label: "Twitter", platform: "twitter" },
    { icon: "📘", href: "https://facebook.com", label: "Facebook", platform: "facebook" },
    { icon: "📷", href: "https://instagram.com", label: "Instagram", platform: "instagram" },
    { icon: "💼", href: "https://linkedin.com", label: "LinkedIn", platform: "linkedin" }
  ],
  newsletter = {
    enabled: true,
    title: "Divine Updates",
    description: "Get blessed with our latest divine creations and insights.",
    placeholder: "Enter your sacred email...",
    buttonText: "Subscribe"
  },
  variant = "default", // default, minimal, rich
  backgroundColor = null,
  textColor = null,
  onNewsletterSubmit,
  style = {},
  className = "",
  ...props 
}) => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (onNewsletterSubmit) {
      onNewsletterSubmit(email);
    }
    e.target.reset();
  };

  const footerClasses = [
    'quorra-footer',
    `quorra-footer--${variant}`,
    className
  ].filter(Boolean).join(' ');

  const footerStyle = {
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor }),
    ...style
  };

  return (
    <footer 
      className={footerClasses}
      style={footerStyle}
      {...props}
    >
      <div className="quorra-footer__container">
        
        {/* Main Footer Content */}
        <div className="quorra-footer__main">
          
          {/* Brand Section */}
          <div className="quorra-footer__brand">
            <div className="quorra-footer__logo">
              {logoImage ? (
                <img src={logoImage} alt={companyName} className="quorra-footer__logo-image" />
              ) : (
                <span className="quorra-footer__logo-text">{logo}</span>
              )}
            </div>
            
            <div className="quorra-footer__brand-info">
              <div className="quorra-footer__company-name">{companyName}</div>
              {tagline && (
                <div className="quorra-footer__tagline">{tagline}</div>
              )}
              {description && variant === 'rich' && (
                <p className="quorra-footer__description">{description}</p>
              )}
            </div>

            {/* Social Links */}
            <div className="quorra-footer__social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className={`quorra-footer__social-link quorra-footer__social-link--${social.platform}`}
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {variant !== 'minimal' && (
            <div className="quorra-footer__links">
              {Object.entries(links).map(([category, categoryLinks]) => (
                <div key={category} className="quorra-footer__link-group">
                  <h4 className="quorra-footer__link-title">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                  <ul className="quorra-footer__link-list">
                    {categoryLinks.map((link, index) => (
                      <li key={index} className="quorra-footer__link-item">
                        <a 
                          href={link.href}
                          className="quorra-footer__link"
                          target={link.href.startsWith('http') ? '_blank' : '_self'}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Newsletter Section */}
          {newsletter.enabled && variant === 'rich' && (
            <div className="quorra-footer__newsletter">
              <h4 className="quorra-footer__newsletter-title">
                {newsletter.title}
              </h4>
              <p className="quorra-footer__newsletter-description">
                {newsletter.description}
              </p>
              <form 
                className="quorra-footer__newsletter-form"
                onSubmit={handleNewsletterSubmit}
              >
                <div className="quorra-footer__newsletter-input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={newsletter.placeholder}
                    className="quorra-footer__newsletter-input"
                    required
                  />
                  <button 
                    type="submit"
                    className="quorra-footer__newsletter-button"
                  >
                    {newsletter.buttonText}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Footer Bottom */}
        <div className="quorra-footer__bottom">
          <div className="quorra-footer__copyright">
            <span>© {year} {companyName}. All rights reserved.</span>
            <span className="quorra-footer__blessed">Blessed by Quorra's divine fire.</span>
          </div>
          
          {variant === 'minimal' && (
            <div className="quorra-footer__minimal-links">
              {links.legal?.slice(0, 3).map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="quorra-footer__minimal-link"
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;