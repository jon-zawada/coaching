import React from 'react';

const Nav = () => (
  <div className="nav-container">
    <nav className="nav-bar">
      <h3 className="nav-title">Navigation</h3>
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="book">Book</a></li>
        <li><a href="faq">FAQ</a></li>
      </ul>
    </nav>
  </div>
);

export default Nav;
