import React from 'react';

const Square = ({ value, onClick, isWinner }) => {
  return (
    <button 
      className={`square ${isWinner ? 'winner' : ''}`}
      onClick={onClick}
      aria-label={value ? `Поле занято ${value}` : 'Пустое поле'}
    >
      {value}
    </button>
  );
};

export default Square;
