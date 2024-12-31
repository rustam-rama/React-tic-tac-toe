import React, { StrictMode } from 'react';
import './Game.css';
import Game from './components/Game/Game';

function App() {
  return (
    <StrictMode>
      <div className="app">
        <Game />
      </div>
    </StrictMode>
  );
}

export default App;

