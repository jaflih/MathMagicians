import React from 'react';
import '../logic/operate';
import calculate from '../logic/calculate';
import Keyboard from './Keyboard';

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
      result: (this.calculObj.next === null && this.calculObj.operation === null)
        ? this.calculObj.total : this.calculObj.next,
    });
  };

  handleKeyDown = () => {};

  render() {
    const { result } = this.state;

    return (
      <div className="calculator">
        <div className="result">{result}</div>
        <Keyboard value="AC" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard value="+/-" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard value="%" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard classes="keyboard orange" value="÷" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard value="7" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard value="8" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard value="9" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard classes="keyboard orange" value="x" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard value="4" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard value="5" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard value="6" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard classes="keyboard orange" value="-" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard value="1" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard value="2" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard value="3" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard classes="keyboard orange" value="+" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard classes="zero" value="0" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard value="." clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
        <Keyboard classes="keyboard orange" value="=" clickCallback={this.handleClick} keydownCallback={this.handleKeyDown} />
      </div>
    );
  }
}

export default Calculator;
