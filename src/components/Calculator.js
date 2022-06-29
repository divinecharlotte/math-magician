import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    obj: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const handleClick = (buttonName) => setState(({ obj }) => ({ obj: calculate(obj, buttonName) }));

  return (
    <div className="calculator-main-cont">

      <div className="calculator-output">{state.obj.next || state.obj.total || 0}</div>
      <div className="calculator-wrapper">
        <div className="calculator-numbers-cont">
          <div className="calculator-numbers">
            <button type="button" onClick={() => handleClick('AC')}>AC</button>
            <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
            <button type="button" onClick={() => handleClick('%')}>%</button>
          </div>
          <div className="calculator-numbers">
            <button type="button" onClick={() => handleClick('7')}>7</button>
            <button type="button" onClick={() => handleClick('8')}>8</button>
            <button type="button" onClick={() => handleClick('9')}>9</button>
          </div>
          <div className="calculator-numbers">
            <button type="button" onClick={() => handleClick('4')}>4</button>
            <button type="button" onClick={() => handleClick('5')}>5</button>
            <button type="button" onClick={() => handleClick('6')}>6</button>
          </div>
          <div className="calculator-numbers">
            <button type="button" onClick={() => handleClick('1')}>1</button>
            <button type="button" onClick={() => handleClick('2')}>2</button>
            <button type="button" onClick={() => handleClick('3')}>3</button>
          </div>
          <div className="calculator-numbers">
            <button type="button" onClick={() => handleClick('0')}>0</button>
            <button type="button" onClick={() => handleClick('.')}>.</button>
          </div>
        </div>
        <div className="calculator-symbol-cont">
          <button type="button" onClick={() => handleClick('÷')}>÷</button>
          <button type="button" onClick={() => handleClick('x')}>×</button>
          <button type="button" onClick={() => handleClick('-')}>-</button>
          <button type="button" onClick={() => handleClick('+')}>+</button>
          <button type="button" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
