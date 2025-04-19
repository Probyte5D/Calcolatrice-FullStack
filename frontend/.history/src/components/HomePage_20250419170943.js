import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/calculator');  // Navigazione con useNavigate
  };

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <h1>Calcolatrice React</h1>
        <p>Una calcolatrice moderna e interattiva per tutti i tuoi calcoli!</p>
      </header>

      {/* Corpo della homepage */}
      <div className="content">
        <p>
          Clicca il bottone qui sotto per iniziare a calcolare con la nostra calcolatrice React. 
          Facile, veloce, e funzionale!
        </p>
        <button onClick={handleClick} className="btn-go-to-calculator">
          Vai alla Calcolatrice
        </button>
      </div>

      {/* Footer (Opzionale) */}
      <footer className="footer">
        <p>&copy; 2025 Calcolatrice React - Creato con React & Spring Boot</p>
      </footer>
    </div>
  );
}

export default HomePage;
