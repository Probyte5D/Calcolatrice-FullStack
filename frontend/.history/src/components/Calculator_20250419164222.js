import React, { useState } from 'react';
import './Calculator.css'; // Per aggiungere stile extra se vuoi

function Calculator() {
  const [display, setDisplay] = useState('');
  const [error, setError] = useState('');

  const appendNumber = (num) => {
    setDisplay(display + num);
  };

  const appendOperator = (op) => {
    setDisplay(display + op);
  };

  const clearDisplay = () => {
    setDisplay('');
    setError('');
  };

  const calculate = () => {
    const match = display.match(/(\d+)([+\-*/])(\d+)/);
    if (!match) {
      setError('Espressione non valida');
      return;
    }

    const op1 = parseFloat(match[1]);
    const operator = match[2];
    const op2 = parseFloat(match[3]);

    fetch("http://localhost:8080/api/calculator/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ op1, op2, operator })
    })
    .then(response => response.json())
    .then(result => {
      setDisplay(result.toString());
    })
    .catch(error => {
      setError("Errore: " + error.message);
    });
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>Calcolatrice</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <input type="text" value={display} readOnly className="form-control" />
        <div className="buttons mt-3">
          <button className="btn btn-primary" onClick={() => appendNumber('1')}>1</button>
          <button className="btn btn-primary" onClick={() => appendNumber('2')}>2</button>
          <button className="btn btn-primary" onClick={() => appendNumber('3')}>3</button>
          <button className="btn btn-warning" onClick={() => appendOperator('+')}>+</button>
          <button className="btn btn-primary" onClick={() => appendNumber('4')}>4</button>
          <button className="btn btn-primary" onClick={() => appendNumber('5')}>5</button>
          <button className="btn btn-primary" onClick={() => appendNumber('6')}>6</button>
          <button className="btn btn-warning" onClick={() => appendOperator('-')}>-</button>
          <button className="btn btn-primary" onClick={() => appendNumber('7')}>7</button>
          <button className="btn btn-primary" onClick={() => appendNumber('8')}>8</button>
          <button className="btn btn-primary" onClick={() => appendNumber('9')}>9</button>
          <button className="btn btn-warning" onClick={() => appendOperator('*')}>*</button>
          <button className="btn btn-primary" onClick={() => appendNumber('0')}>0</button>
          <button className="btn btn-danger" onClick={clearDisplay}>C</button>
          <button className="btn btn-success" onClick={calculate}>=</button>
          <button className="btn btn-warning" onClick={() => appendOperator('/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
