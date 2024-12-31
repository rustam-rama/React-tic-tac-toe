import React from 'react';
import PropTypes from 'prop-types';

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
  let status;
  if (isGameEnded) {
    status = `Победитель: ${currentPlayer}`;
  } else if (isDraw) {
    status = 'Ничья!';
  } else {
    status = `Текущий игрок: ${currentPlayer}`;
  }

  return (
    <div className={`game-status ${isGameEnded ? 'winner' : ''}`}>
      {status}
    </div>
  );
};

InformationLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired
};

export default InformationLayout;
