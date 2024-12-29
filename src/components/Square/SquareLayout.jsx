import React from 'react';
import PropTypes from 'prop-types';

const SquareLayout = ({ value, onClick, isWinner }) => {
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

SquareLayout.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isWinner: PropTypes.bool
};

export default SquareLayout;