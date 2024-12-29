import React from 'react';
import PropTypes from 'prop-types';
import InformationLayout from './InformationLayout';

const Information = ({ currentPlayer, isDraw, isGameEnded }) => {
  return (
    <InformationLayout 
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  );
};

Information.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
  isDraw: PropTypes.bool.isRequired,
  isGameEnded: PropTypes.bool.isRequired
};

export default Information;
