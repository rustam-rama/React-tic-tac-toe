import React, { useState } from 'react';
import Square from './Field';

const Board = ({ squares, onClick, winLine }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square 
          key={index} 
          value={square} 
          onClick={() => onClick(index)}
          isWinner={winLine?.includes(index)} 
        />
      ))}
    </div>
  );
};

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares).winner) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
    
    if (newSquares.every(square => square !== null) && !calculateWinner(newSquares).winner) {
      setIsDraw(true);
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setIsDraw(false);
  };

  const { winner, line: winLine } = calculateWinner(squares);
  const status = winner 
    ? `Победитель: ${winner}` 
    : isDraw 
    ? 'Ничья!' 
    : `Ходит игрок: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className={`game-status ${winner ? 'winner' : ''}`}>{status}</div>
      <Board 
        squares={squares} 
        onClick={handleClick}
        winLine={winLine}
      />
      <button className="reset-button" onClick={resetGame}>
        Начать заново
      </button>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
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
