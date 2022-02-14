import React from 'react';
import Calculator from '../components/Calculator';
import Header from '../components/Header';

const CalculatorContainer = () => (
  <section>
    <Header />
    <div className="calcul">
      <h2>Let&apos;s do some math!</h2>
      <Calculator />
    </div>
  </section>
);

export default CalculatorContainer;
