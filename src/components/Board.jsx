import React from 'react';
import Square from './Square';

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

export default Board;