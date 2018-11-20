import React from 'react';

const ShareIcon = props => {
  return (
    <div style={shareIconStyles}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%)`
        }}
        onClick={props.onClick}
      >
        <i className="fa fa-share-square-o fa-2x" aria-hidden="true" />
      </div>
    </div>
  );
};

const shareIconStyles = {
  width: '50px',
  height: '50px',
  position: 'fixed',
  bottom: 0,
  right: 0
};

export default ShareIcon;
