import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="nav">
      <div className="navbar">
        <div>
          <Link className="brand" to="/">
            Bookstore CMS
          </Link>
          <Link to="/" className="nav-items">
            BOOKS
          </Link>
          <Link to="categories" className="nav-items">
            CATEGORIES
          </Link>
        </div>
      </div>
      <div>
        <div className="nav-items nav-icon">
          <i className="fas fa-user" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
