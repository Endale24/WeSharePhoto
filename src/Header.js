import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/login" activeClassName="active">Login</NavLink>
        <NavLink to="/signup" activeClassName="active">Signup</NavLink>
        {/* Add more navigation links as needed */}
      </nav>
    </header>
  );
}

export default Header;
