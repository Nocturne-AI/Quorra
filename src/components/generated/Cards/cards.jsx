import React, { useState } from 'react';
import './cards.css';

const Cards = ({ 
  items = [], 
  layout = 'grid', 
  columns = 'auto',
  gap = 'medium',
  onCardClick = null 
}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (item, index) => {
    setSelectedCard(index);
    if (onCardClick) {
      onCardClick(item, index);
    }
  };

  const getGridClasses = () => {
    const classes = ['cards-grid'];
    classes.push(`layout-${layout}`);
    classes.push(`gap-${gap}`);
    if (columns !== 'auto') {
      classes.push(`columns-${columns}`);
    }
    return classes.join(' ');
  };

  return (
    <div className="cards-container">
      <div className={getGridClasses()}>
        {items.map((item, index) => (
          <div 
            key={item.id || index}
            className={`card ${selectedCard === index ? 'selected' : ''} ${item.featured ? 'featured' : ''}`}
            onClick={() => handleCardClick(item, index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleCardClick(item, index);
              }
            }}
          >
            {item.badge && (
              <div className="card-badge">
                {item.badge}
              </div>
            )}
            
            {item.image && (
              <div className="card-image">
                <img 
                  src={item.image} 
                  alt={item.imageAlt || item.title || 'Card image'} 
                  loading="lazy"
                />
              </div>
            )}
            
            <div className="card-content">
              {item.category && (
                <span className="card-category">{item.category}</span>
              )}
              
              {item.title && (
                <h3 className="card-title">{item.title}</h3>
              )}
              
              {item.description && (
                <p className="card-description">{item.description}</p>
              )}
              
              {item.features && (
                <ul className="card-features">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="card-feature">
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="card-footer">
                {item.price && (
                  <div className="card-price">
                    {item.originalPrice && (
                      <span className="price-original">{item.originalPrice}</span>
                    )}
                    <span className="price-current">{item.price}</span>
                    {item.period && (
                      <span className="price-period">{item.period}</span>
                    )}
                  </div>
                )}
                
                {item.button && (
                  <button 
                    className={`card-button ${item.buttonStyle || 'primary'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (item.onButtonClick) {
                        item.onButtonClick(item, index);
                      }
                    }}
                  >
                    {item.button}
                  </button>
                )}
                
                {item.secondaryButton && (
                  <button 
                    className="card-button secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (item.onSecondaryClick) {
                        item.onSecondaryClick(item, index);
                      }
                    }}
                  >
                    {item.secondaryButton}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {items.length === 0 && (
        <div className="cards-empty">
          <p>No cards to display</p>
        </div>
      )}
    </div>
  );
};

export default Cards;