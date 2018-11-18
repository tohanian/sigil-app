import React from 'react';

const CloseShareMenuIcon = props => {
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
        <i className="fa fa-times fa-lg" aria-hidden="true" />
      </div>
    </div>
  );
};

const shareIconStyles = {
  width: '50px',
  height: '50px',
  position: 'fixed',
  top: 0,
  left: 0
};

export default CloseShareMenuIcon;
