import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
      <p>&copy; 2024 Macro Matrix. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
