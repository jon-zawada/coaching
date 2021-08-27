import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav-container">
    <nav className="nav-bar">
      <h3 className="nav-title">Navigation</h3>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="book">Book</Link></li>
        <li><Link to="faq">FAQ</Link></li>
      </ul>
    </nav>
  </div>
);

export default Nav;
