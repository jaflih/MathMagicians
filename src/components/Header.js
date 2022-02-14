import React from 'react';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header>
      <h1>
        Math
        {' '}
        <span>Magicians</span>
      </h1>
      <Navbar />
    </header>
  );
}
