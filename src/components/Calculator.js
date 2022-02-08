import React from 'react';
import '../logic/operate';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
    this.calculObj = {};
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick = (event) => {
    this.calculObj = calculate(this.calculObj, event.target.innerText);

    this.setState({
      result: this.calculObj.next === null && this.calculObj.operation === null
        ? this.calculObj.total
        : this.calculObj.next,
    });
  };

  handleKeyDown = () => {};

  render() {
    const { result } = this.state;

    return (
      <div className="calculator">
        <div className="result">{result}</div>
        <div className="keyboard" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          AC
        </div>
        <div className="keyboard" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          +/-
        </div>
        <div className="keyboard" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          %
        </div>
        <div className="keyboard orange" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          ÷
        </div>
        <div className="keyboard" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          7
        </div>
        <div className="keyboard" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          8
        </div>
        <div className="keyboard" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          9
        </div>
        <div className="keyboard orange" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          x
        </div>
        <div className="keyboard" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          4
        </div>
        <div className="keyboard" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          5
        </div>
        <div className="keyboard" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          6
        </div>
        <div className="keyboard orange" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          -
        </div>
        <div className="keyboard" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          1
        </div>
        <div className="keyboard" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          2
        </div>
        <div className="keyboard" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          3
        </div>
        <div className="keyboard orange" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          +
        </div>
        <div className="zero" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          0
        </div>
        <div className="keyboard" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          .
        </div>
        <div className="keyboard orange" onClick={this.handleClick} onKeyDown={this.handleKeyDown} role="button" tabIndex={-1}>
          =
        </div>
      </div>
    );
  }
}

export default Calculator;
