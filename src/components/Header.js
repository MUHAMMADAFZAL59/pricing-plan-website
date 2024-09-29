import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/logo.png" alt="Macro Matrix Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/company">Company</Link></li>
          <li><Link to="/apps">Apps</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
