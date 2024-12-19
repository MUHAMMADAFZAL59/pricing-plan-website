import React from 'react';
import '../styles/Header.css';

const Header = ({ setIsDarkMode }) => {
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode'); 
  };

  return (
    <header className="header">
      <img
        src="/assests/bugdev.png"
        alt="Logo"
        className="logo"
      />
      <div className="header-right">
        <button className="get-started">Get Started</button>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {document.body.classList.contains('dark-mode') ? (
            <>
              <span className="icon sun-icon">&#9728;</span> Light Mode
            </>
          ) : (
            <>
              <span className="icon moon-icon">&#9790;</span> Dark Mode
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
