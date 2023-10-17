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
        <Link to="/circuscowgirl" style={{ textDecoration: 'none', color: 'white' }}>
          <h1 className="main-title">Kansas Carradine</h1>
        </Link>
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
            <Link to="/heartmath" style={{ textDecoration: 'none', color: 'white' }}>
              HeartMath
            </Link>
          </li>
          <li className="link">
            <Link to="/horsemanship" style={{ textDecoration: 'none', color: 'white' }}>
              Horsemanship
            </Link>
          </li>
          <li className="link">
            <Link to="/media" style={{ textDecoration: 'none', color: 'white' }}>
              Media
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
