import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Kansas Carradine</h1>
      <div className="nav-bar">
        <ul className="nav-links">
          <li className="link">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              About
            </Link>
          </li>
          <li className="link">
            <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
              Classes
            </Link>
          </li>
          <li className="link">
            <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
              Events
            </Link>
          </li>
          <li className="link">
            <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
              Media
            </Link>
          </li>
          <li className="link">
            <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
