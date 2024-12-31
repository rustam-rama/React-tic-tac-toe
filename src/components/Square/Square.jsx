import React from 'react';
import PropTypes from 'prop-types';
import SquareLayout from './components/SquareLayout';

const Square = ({ value, onClick, isWinner }) => {
  return <SquareLayout value={value} onClick={onClick} isWinner={isWinner} />;
};

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isWinner: PropTypes.bool
};

export default Square;