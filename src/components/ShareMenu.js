import React from 'react';

const ShareMenu = props => {
  return (
    <ul>
      <li>Share on FB</li>
      <li onClick={props.convertToPng}>Get Image</li>
    </ul>
  );
};

export default ShareMenu;
