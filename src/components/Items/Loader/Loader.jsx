import React from 'react';
import {  Audio, Oval } from '@agney/react-loading';
import PropTypes from 'prop-types';

export const Loader = ({backgroundColor, width, label, ...props}) => {
  return (
    <Oval style={backgroundColor && { backgroundColor }}
    width={width}
    {...props}
    >
        {label}
    </Oval>
  );
}


Loader.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
 
  label: PropTypes.string.isRequired,
  
};

Loader.defaultProps = {
  backgroundColor: null,
  width:100
};