import React from 'react';
import PropTypes from 'prop-types';
import FieldLayout from './FieldLayout';

const Field = ({ squares, onClick, winLine }) => {
  return <FieldLayout squares={squares} onClick={onClick} winLine={winLine} />;
};

Field.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  winLine: PropTypes.arrayOf(PropTypes.number)
};

export default Field;