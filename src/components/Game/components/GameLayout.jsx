import React from 'react';
import PropTypes from 'prop-types';
import Field from '../../Field/Field';
import Information from '../../Information/Information';

const GameLayout = ({
  squares,
  currentPlayer,
  isGameEnded,
  isDraw,
  winLine,
  onSquareClick,
  onReset
}) => {
  return (
    <div className="game">
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field
        squares={squares}
        onClick={onSquareClick}
        winLine={winLine}
      />
      <button className="reset-button" onClick={onReset}>
        Начать заново
      </button>
    </div>
  );
};

GameLayout.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
  winLine: PropTypes.arrayOf(PropTypes.number),
  onSquareClick: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default GameLayout;