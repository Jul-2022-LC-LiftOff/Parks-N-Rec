import React from 'react'
import ParkImg from './components/ParkPage/ParkImg'
import AboutPark from './components/ParkPage/AboutPark'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

    <ParkImg />

    <br />

    <h1>About parkName </h1>

    <AboutPark />
      </header>
    </div>
  );
}

export default App;
