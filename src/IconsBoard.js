import React, { Component } from 'react';
import * as icons from './icons/animals';

export const ClipBoard = () => {(
  {Object.keys(icons).map((icon, i) => {
  const C = icons[icon];

  return (
      <div style={cell}>
        <span style={{ padding: 12 }}>
          <C />
        </span>
        {icon}
      </div>
  )
})}
)}

const cell = {
  borderRadius: 4,
  background: 'white',
  margin: 12,
  padding: 12,
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 200,
};
