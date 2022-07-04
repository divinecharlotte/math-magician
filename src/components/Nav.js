// eslint-disable-line
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: '#ddd2e0',
  };
  return (
    <nav className="navigation">
      <h3>Math Magician</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/Calculator">
          <li>Calculator</li>
        </Link>
        <Link style={navStyle} to="/Quote">
          <li>Quote</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
