import React from 'react';
import PropTypes from 'prop-types';
import Square from '../../Square/Square';

const FieldLayout = ({ squares, onClick, winLine }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onClick(index)}
          isWinner={winLine ? winLine.includes(index) : false}
        />
      ))}
    </div>
  );
};

FieldLayout.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  winLine: PropTypes.arrayOf(PropTypes.number)
};

export default FieldLayout;
