import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div>
      <nav className="panel-bg">
        <div className="brand">
          <Link className="Bookstore-CMS" to="/">
            Bookstore CMS
          </Link>
          <Link to="/" className="books">
            BOOKS
          </Link>
          <Link to="categories" className="categories">
            CATEGORIES
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
