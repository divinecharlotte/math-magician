/* eslint-disable */
import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
     obj: {
        total: null,
        next: null,
        operation: null,
      }
    };
  }

handleClick = (buttonName)=>this.setState(({obj})=>({obj:calculate(obj,buttonName)}));

  render() {
    return (
      <div className="calculator-main-cont">
        
        <div className="calculator-output">{this.state.obj.next || this.state.obj.total || 0}</div>
        <div className="calculator-wrapper">
          <div className="calculator-numbers-cont">
            <div className="calculator-numbers">
              <button onClick={()=>this.handleClick("AC")}>AC</button>
              <button onClick={()=>this.handleClick("+/-")}>+/-</button>
              <button onClick={()=>this.handleClick('%')}>%</button>
            </div>
            <div className="calculator-numbers">
              <button onClick={()=>this.handleClick('7')}>7</button>
              <button onClick={()=>this.handleClick('8')}>8</button>
              <button onClick={()=>this.handleClick('9')}>9</button>
            </div>
            <div className="calculator-numbers">
              <button onClick={()=>this.handleClick('4')}>4</button>
              <button onClick={()=>this.handleClick('5')}>5</button>
              <button onClick={()=>this.handleClick('6')}>6</button>
            </div>
            <div className="calculator-numbers">
              <button  onClick={()=>this.handleClick("1")}>1</button>
              <button  onClick={()=>this.handleClick("2")}>2</button>
              <button onClick={()=>this.handleClick('3')}>3</button>
            </div>
            <div className="calculator-numbers">
              <button onClick={()=>this.handleClick('0')}>0</button>
              <button onClick={()=>this.handleClick('.')}>.</button>
            </div>
          </div>
          <div className="calculator-symbol-cont">
            <button onClick={()=>this.handleClick('÷')}>÷</button>
            <button onClick={()=>this.handleClick('x')}>×</button>
            <button onClick={()=>this.handleClick('-')}>-</button>
            <button  onClick={()=>this.handleClick("+")}>+</button>
            <button  onClick={()=>this.handleClick("=")}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;