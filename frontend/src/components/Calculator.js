import React, { useState } from 'react';
import './Calculator.css'; // Assicurati di avere il CSS con gli stili dei temi
import { AiFillCalculator } from 'react-icons/ai';
import { FaEquals, FaPlus, FaMinus, FaTimes, FaDivide, FaBackspace } from 'react-icons/fa';

function Calculator() {
    const [display, setDisplay] = useState('');
    const [error, setError] = useState('');
    const [theme, setTheme] = useState('light'); // Tema di default

    const appendNumber = (num) => setDisplay(display + num);
    const appendOperator = (op) => setDisplay(display + op);
    const clearDisplay = () => { setDisplay(''); setError(''); };

    // Cambia tema
    const changeTheme = (newTheme) => setTheme(newTheme);

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
                setError('');
            })
            .catch(error => {
                setError("Errore: " + error.message);
            });
    };

    return (
        <div className={`d-flex justify-content-center align-items-center vh-100 ${theme}-theme`}>
            <div className="calculator p-4 rounded shadow-lg" style={{ width: '320px' }}>
                {/* Titolo con icona */}
                <h2 className="calculator-title">
                    <AiFillCalculator style={{ marginRight: '10px', color: '#f1c40f' }} />
                    Calcolatrice
                </h2>

                {/* Selettore di tema */}
                <div className="theme-selector d-flex justify-content-center gap-3 my-3">
  <button onClick={() => changeTheme('light')} className="btn">Light</button>
  <button onClick={() => changeTheme('dark')} className="btn">Dark</button>
  <button onClick={() => changeTheme('colorful')} className="btn">Colorful</button>
</div>

                {error && <div className="alert alert-danger">{error}</div>}
                <input type="text" value={display} readOnly className="form-control mb-3 fs-4 text-end" />
                
                <div className="d-grid gap-2">
                    <div className="d-flex justify-content-between mb-2">
                        {[1, 2, 3].map(n => (
                            <button key={n} className="btn modern-btn flex-fill mx-1" onClick={() => appendNumber(n.toString())}>{n}</button>
                        ))}
                        <button className="btn modern-btn-operator" onClick={() => appendOperator('+')}><FaPlus /></button>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        {[4, 5, 6].map(n => (
                            <button key={n} className="btn modern-btn flex-fill mx-1" onClick={() => appendNumber(n.toString())}>{n}</button>
                        ))}
                        <button className="btn modern-btn-operator" onClick={() => appendOperator('-')}><FaMinus /></button>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        {[7, 8, 9].map(n => (
                            <button key={n} className="btn modern-btn flex-fill mx-1" onClick={() => appendNumber(n.toString())}>{n}</button>
                        ))}
                        <button className="btn modern-btn-operator" onClick={() => appendOperator('*')}><FaTimes /></button>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn modern-btn flex-fill mx-1" onClick={() => appendNumber('0')}>0</button>
                        <button className="btn modern-btn-clear flex-fill mx-1" onClick={clearDisplay}><FaBackspace /></button>
                        <button className="btn modern-btn-equal flex-fill mx-1" onClick={calculate}><FaEquals /></button>
                       
                        <button className="btn modern-btn-operator" onClick={() => appendOperator('/')}><FaDivide /></button>
                        <button className="btn modern-btn-clear flex-fill mx-1" onClick={clearDisplay}>C</button>  {/* Cancellazione del display */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
