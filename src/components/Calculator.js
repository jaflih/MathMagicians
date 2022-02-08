import React, { useState } from 'react';
import '../logic/operate';
import calculate from '../logic/calculate';
import Keyboard from './Keyboard';

const Calculator = () => {
  const [calculObj, setCalculObj] = useState({});
  const [result, setResult] = useState(0);

  const handleClick = (event) => {
    const newCalObj = calculate(calculObj, event.target.innerText);
    setCalculObj(newCalObj);
    setResult(newCalObj.next === null && newCalObj.operation === null
      ? newCalObj.total : newCalObj.next);
  };

  const handleKeyDown = () => {};

  return (
    <div className="calculator">
      <div className="result">{result}</div>
      <Keyboard value="AC" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard value="+/-" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard value="%" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard classes="keyboard orange" value="÷" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard value="7" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard value="8" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard value="9" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard classes="keyboard orange" value="x" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard value="4" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard value="5" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard value="6" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard classes="keyboard orange" value="-" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard value="1" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard value="2" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard value="3" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard classes="keyboard orange" value="+" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard classes="zero" value="0" clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard value="." clickCallback={handleClick} keydownCallback={handleKeyDown} />
      <Keyboard classes="keyboard orange" value="=" clickCallback={handleClick} keydownCallback={handleKeyDown} />
    </div>
  );
};

export default Calculator;
