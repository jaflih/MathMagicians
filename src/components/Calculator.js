import React from 'react';
import '../logic/operate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {};

  handleKeyDown = () => {};

  render() {
    return (
      <div className="calculator">
        <div className="result">0</div>
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
