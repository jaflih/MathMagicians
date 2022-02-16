import React, { useState } from 'react';
import '../logic/operate';
import calculate from '../logic/calculate';
import Keyboard from './Keyboard';

const Calculator = () => {
  const [calculObj, setCalculObj] = useState({});
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    const newCalObj = calculate(calculObj, value);
    setCalculObj(newCalObj);
    setResult(
      newCalObj.next === null && newCalObj.operation === null ? newCalObj.total : newCalObj.next,
    );
  };

  const handleKeyDown = () => {};

  return (
    <div className="calculator">
      <div className="result">{result}</div>
      <Keyboard
        value="AC"
        clickCallback={() => {
          handleClick('AC');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        value="+/-"
        clickCallback={() => {
          handleClick('+/-');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        value="%"
        clickCallback={() => {
          handleClick('%');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        classes="keyboard orange"
        value="÷"
        clickCallback={() => {
          handleClick('÷');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        value="7"
        clickCallback={() => {
          handleClick('7');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        value="8"
        clickCallback={() => {
          handleClick('8');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        value="9"
        clickCallback={() => {
          handleClick('9');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        classes="keyboard orange"
        value="x"
        clickCallback={() => {
          handleClick('x');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        value="4"
        clickCallback={() => {
          handleClick('4');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        value="5"
        clickCallback={() => {
          handleClick('5');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        value="6"
        clickCallback={() => {
          handleClick('6');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        classes="keyboard orange"
        value="-"
        clickCallback={() => {
          handleClick('-');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        value="1"
        clickCallback={() => {
          handleClick('1');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        value="2"
        clickCallback={() => {
          handleClick('2');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        value="3"
        clickCallback={() => {
          handleClick('3');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        classes="keyboard orange"
        value="+"
        clickCallback={() => {
          handleClick('+');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard
        classes="zero"
        value="0"
        clickCallback={() => {
          handleClick('0');
        }}
        keydownCallback={handleKeyDown}
      />
      <Keyboard value="." clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard
        classes="keyboard orange"
        value="="
        clickCallback={() => {
          handleClick('=');
        }}
        keydownCallback={handleKeyDown}
      />
    </div>
  );
};

export default Calculator;
