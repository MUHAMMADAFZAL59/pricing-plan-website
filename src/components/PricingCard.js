import React from 'react';
import '../styles/PricingCard.css';

const PricingCard = ({ plan, price, features, link }) => {
  
  const isDarkMode = document.body.classList.contains('dark-mode');
     
  return (
    <div className={`pricing-card ${isDarkMode ? 'dark' : ''}`}>
      <div className="card-header">
        <h6>{plan}</h6>
      </div>
      <p>Discover Brevo</p>
      <div className="card-price">
        <h4>{price}</h4>
        <span>/month</span>
      </div>
      <button className="card-button">Sign Up</button>
      <div className="card-features">
        <span>Everything in Free:</span>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <a href="https://www.brevo.com/pricing/marketing-platform/see-all-features/" className="card-link">
        See all features
      </a>
    </div>
  );
};

export default PricingCard;
