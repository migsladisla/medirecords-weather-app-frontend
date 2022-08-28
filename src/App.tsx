import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to MediRecords Weather App
        </p>
        <a
          className="App-link"
          href="https://medirecords-weather-backend.herokuapp.com/weather-service/api/v1/weather/city/Manila?apiKey=1dd361173e70cbc9901d5578ad417903"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
