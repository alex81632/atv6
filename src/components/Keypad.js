import React from 'react';

const Keypad = ({ onNumberClick, onOperatorClick, onCalculateResult, onClearAll }) => {
  const handleClick = (value) => {
    if (Number.isInteger(value)) {
        onNumberClick(value);
    } else if (value === '=') {
        onCalculateResult();
    } else if (value === 'C') {
        onClearAll();
    } else {
        console.log(value);
        onOperatorClick(value);
    }
  };

  return (
    <div className="keypad">
      <div className="key-row">
        <button onClick={() => handleClick(7)}>7</button>
        <button onClick={() => handleClick(8)}>8</button>
        <button onClick={() => handleClick(9)}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
      <div className="key-row">
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
      </div>
      <div className="key-row">
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
      </div>
      <div className="key-row">
        <button onClick={() => handleClick(0)}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={onCalculateResult}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
      <div className="key-row">
        <button onClick={onClearAll}>C</button>
      </div>
    </div>
  );
};

export default Keypad;
