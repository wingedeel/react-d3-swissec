import React from 'react'

const Swatch = ({ color, width, x }) => (
  <rect 
  	width={width} 
  	height="20" 
  	x={x} 
  	y="0" 
  	style={{fill: color}} />
);

export default Swatch