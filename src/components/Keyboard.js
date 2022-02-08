import React from 'react';
import PropTypes from 'prop-types';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      value, classes, clickCallback, keydownCallback,
    } = this.props;
    return (
      <div className={classes} onClick={clickCallback} onKeyDown={keydownCallback} role="button" tabIndex={-1}>
        {value}
      </div>
    );
  }
}

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
