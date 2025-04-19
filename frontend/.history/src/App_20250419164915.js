import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator'; // Assicurati che il percorso sia corretto
import HomePage from './components/HomePage'; // Assicurati che il percorso sia corretto

function App() {
  return (
    <Router>
    <Routes>
      {/* Usando 'element' invece di 'component' */}
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </Router>
  );
}

export default App;
