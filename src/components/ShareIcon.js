import React from "react";

const ShareIcon = props => {
  return (
    <div style={shareIconStyles}>
      <div
        style={{
          position: "absolute",
          top: "62%",
          left: "90%"
        }}
        onClick={props.onClick}
      >
        <i className="fa fa-share-square-o fa-2x" aria-hidden="true" />
      </div>
    </div>
  );
};

const shareIconStyles = {
  width: "50px",
  height: "50px"
};

export default ShareIcon;
