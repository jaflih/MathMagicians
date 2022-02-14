import React from 'react';
import Header from '../components/Header';

export default function Quote() {
  return (
    <section className="quote">
      <Header />
      <div>
        <span className="Lettrine">M</span>
        athematics is not about numbers, equations, computations, or algorithms : it is about
        understanding. -
        {' '}
        <span className="author">William Paul Thurston</span>
      </div>
    </section>
  );
}
