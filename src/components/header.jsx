import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="title-bar">
        <h1 className="title">Kansas Carradine</h1>
        <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`nav-bar ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li className="link">
            <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
              About
            </Link>
          </li>
          <li className="link">
            <Link to="/events" style={{ textDecoration: 'none', color: 'white' }}>
              Events
            </Link>
          </li>
          <li className="link">
            <Link to="/education" style={{ textDecoration: 'none', color: 'white' }}>
              Education
            </Link>
          </li>
          <li className="link">
            <Link to="/heartmath" style={{ textDecoration: 'none', color: 'white' }}>
              HeartMath
            </Link>
          </li>
          <li className="link">
            <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
              Contact
            </Link>
          </li>
        </ul>
        {mobileMenuOpen && <div className="backdrop" onClick={closeMobileMenu}></div>}
      </div>
    </div>
  );
};

export default Header;
