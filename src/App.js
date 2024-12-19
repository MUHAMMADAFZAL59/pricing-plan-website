import React, { useState } from 'react';
import Header from './components/Header';
import PricingCardList from './components/PricingCardList';
import './styles/App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <video className="video-background" autoPlay loop muted>
        <source
          src={isDarkMode ? '/assests/animation2.mp4' : '/assests/animation3.mp4'}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Header setIsDarkMode={setIsDarkMode} />
      <PricingCardList />
    </div>
  );
};

export default App;
