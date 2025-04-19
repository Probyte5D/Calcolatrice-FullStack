import React from 'react';
import { useHistory } from 'react-router-dom'; // Usato per navigare tra le pagine

function HomePage() {
  const history = useHistory();

  const goToCalculator = () => {
    history.push('/calculator'); // Naviga verso la calcolatrice
  };

  return (
    <div className="home-page">
      <h1>Benvenuto nella Calcolatrice React!</h1>
      <p>
        Questa è una calcolatrice interattiva creata con React e Spring Boot. 
        Clicca qui sotto per iniziare a calcolare!
      </p>
      <button className="btn btn-primary" onClick={goToCalculator}>
        Vai alla Calcolatrice
      </button>
    </div>
  );
}

export default HomePage;
