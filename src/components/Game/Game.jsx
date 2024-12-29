import React, { useState } from 'react';
import GameLayout from './GameLayout';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (index) => {
    if (squares[index] || isGameEnded || isDraw) {
      return;
    }
    
    const newSquares = squares.slice();
    newSquares[index] = currentPlayer;
    setSquares(newSquares);

    const { winner } = calculateWinner(newSquares);
    
    if (winner) {
      setIsGameEnded(true);
    } else if (newSquares.every(square => square !== null)) {
      setIsDraw(true);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
  };

  const { winner, line: winLine } = calculateWinner(squares);

  return (
    <GameLayout
      squares={squares}
      currentPlayer={winner || currentPlayer}  
      isGameEnded={!!winner}  
      isDraw={isDraw}
      winLine={winLine}
      onSquareClick={handleClick}
      onReset={resetGame}
    />
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: lines[i]
      };
    }
  }
  return { winner: null, line: null };
}

export default Game;