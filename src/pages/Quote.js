import React from 'react';
import Header from '../components/Header';

export default function Quote() {
  const authorStyle = { color: '#f5913e' };
  const lettrineStyle = {
    fontFamily: "'Architects Daughter', cursive",
    color: '#f5913e',
    fontSize: '30px',
  };

  return (
    <section className="quote">
      <Header />
      <div>
        <span style={lettrineStyle}>M</span>
        athematics is not about numbers, equations, computations, or algorithms : it is about
        understanding. -
        {' '}
        <span style={authorStyle}>William Paul Thurston</span>
      </div>
    </section>
  );
}
