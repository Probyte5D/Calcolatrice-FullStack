import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator'; // Assicurati che il percorso sia corretto
import HomePage from './components/HomePage'; // Assicurati che il percorso sia corretto

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/calculator" component={Calculator} />
    </Switch>
  </Router>
  );
}

export default App;
