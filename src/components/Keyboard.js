import React from 'react';
import PropTypes from 'prop-types';

const Keyboard = ({
  value, classes, clickCallback, keydownCallback,
}) => (
  <div className={classes} onClick={clickCallback} onKeyDown={keydownCallback} role="button" tabIndex={-1}>
    {value}
  </div>
);

Keyboard.defaultProps = {
  classes: 'keyboard',
};

Keyboard.propTypes = {
  value: PropTypes.string.isRequired,
  classes: PropTypes.string,
  clickCallback: PropTypes.func.isRequired,
  keydownCallback: PropTypes.func.isRequired,
};

export default Keyboard;
