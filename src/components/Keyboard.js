import React from 'react';
import PropTypes from 'prop-types';

const Keyboard = ({
  value, classes, clickCallback, keydownCallback,
}) => (
  <div
    className={classes}
    onClick={clickCallback}
    onKeyDown={keydownCallback}
    role="button"
    tabIndex={-1}
  >
    {value}
  </div>
);

Keyboard.defaultProps = {
  classes: 'keyboard',
  value: '',
  clickCallback: null,
  keydownCallback: null,
};

Keyboard.propTypes = {
  value: PropTypes.string,
  classes: PropTypes.string,
  clickCallback: PropTypes.func,
  keydownCallback: PropTypes.func,
};

export default Keyboard;
