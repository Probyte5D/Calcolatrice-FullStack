import React from 'react';


import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();  // usa useNavigate

  const handleClick = () => {
    navigate('/calculator');  // Navigazione con useNavigate
  };

  return (
    <div className="home-page">
      <h1>Benvenuto nella Calcolatrice React!</h1>
      <p>
        Questa è una calcolatrice interattiva creata con React e Spring Boot. 
        Clicca qui sotto per iniziare a calcolare!
      </p>
      <button onClick={handleClick}>Vai alla Calcolatrice</button>
      
  
    </div>
  );
}

export default HomePage;
