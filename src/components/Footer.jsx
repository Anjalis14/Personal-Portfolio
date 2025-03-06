import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Anjali Sharma. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/Anjalis14" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github
          </a>
          <a href="https://www.linkedin.com/in/anjalisharma2004/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;