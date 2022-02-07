import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="result">0</div>
        <div className="keyboard">A/C</div>
        <div className="keyboard">+/-</div>
        <div className="keyboard">Pour</div>
        <div className="keyboard orange">%</div>
        <div className="keyboard">7</div>
        <div className="keyboard">8</div>
        <div className="keyboard">9</div>
        <div className="keyboard orange">X</div>
        <div className="keyboard">4</div>
        <div className="keyboard">5</div>
        <div className="keyboard">6</div>
        <div className="keyboard orange">-</div>
        <div className="keyboard">1</div>
        <div className="keyboard">2</div>
        <div className="keyboard">3</div>
        <div className="keyboard orange">+</div>
        <div className="zero">0</div>
        <div className="keyboard">.</div>
        <div className="keyboard orange">=</div>
      </div>
    );
  }
}
