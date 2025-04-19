import React from 'react';
import './App.css';
import Calculator from './components/Calculator'; // Assicurati che il percorso sia corretto
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator /> {/* Qui renderizzi il componente Calculator */}
      </header>
    </div>
  );
}

export default App;
