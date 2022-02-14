import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className={(navData) => (navData.isActive ? 'active-style' : 'none')}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
