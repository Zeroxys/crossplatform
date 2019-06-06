import React from 'react';
import './App.css';
import background from '../public/images/LifeIsGigaaa.png'

function App() {
  return (
    <div className="mainContent">
      
      <p>I have something to tell you</p>
      <img src={background} className="logoGigaaa"></img> 
      <p>Tap anywhere on the screen if you're not available to listen</p>

    </div>
  );
}

export default App;
