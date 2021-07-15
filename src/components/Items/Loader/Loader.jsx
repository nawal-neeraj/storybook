import React from 'react';
import {  Audio, Oval } from '@agney/react-loading';

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


