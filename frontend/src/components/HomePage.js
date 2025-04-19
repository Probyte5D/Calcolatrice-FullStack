import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { 
  FaCalculator, FaHome, FaEquals, FaBackspace, 
  FaPlus, FaMinus, FaDivide, FaTimes, FaArrowRight 
} from 'react-icons/fa';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/calculator');
  };

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <h1><FaCalculator style={{ marginRight: '10px' }} />Calcolatrice React!</h1>
        <p><FaEquals /> Una calcolatrice moderna e interattiva per tutti i tuoi calcoli!</p>
      </header>

      {/* Corpo */}
      <div className="content">
        <p>
          <FaPlus /> Addizioni, <FaMinus /> Sottrazioni, <FaTimes /> Moltiplicazioni e <FaDivide /> Divisioni — tutte a portata di click!
        </p>
        <button onClick={handleClick} className="btn-go-to-calculator">
          Vai alla Calcolatrice <FaArrowRight style={{ marginLeft: '8px' }} />
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
          <FaHome style={{ marginRight: '6px' }} />
          &copy; 2025 Calcolatrice React - Creato con React & Spring Boot
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
