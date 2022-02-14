import React from 'react';
import Navbar from './Navbar';

import '../css/header.css';

export default function Header() {
  return (
    <header className="header">
      <h1>
        Math
        {' '}
        <span>Magicians</span>
      </h1>
      <Navbar />
    </header>
  );
}
