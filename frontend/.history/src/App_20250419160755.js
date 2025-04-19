import React from 'react';
import './App.css';
import Calculator from './Calculator'; // Assicurati che il percorso sia corretto

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
