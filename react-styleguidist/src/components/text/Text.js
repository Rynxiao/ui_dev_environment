import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};


/** Text with different child */
const Text = ({ children, style }) => (
  <span style={{...styles, ...style}} type="button">
    {children}
  </span>
);

Text.displayName = 'Text';
Text.propTypes = {
  /** Text children */
  children: PropTypes.node.isRequired | PropTypes.string,
  /** Custom Styles */
  style: PropTypes.shape({}),
};
Text.defaultProps = {
  children: 'Default Text',
  style: {},
};

export default Text;
