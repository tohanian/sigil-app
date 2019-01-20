import React from "react";

const ShareIcon = props => {
  return (
    <div style={shareIconStyles}>
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "90%"
        }}
        onClick={props.onClick}
      >
        <i className="fa fa-share-square-o fa-1x" aria-hidden="true" />
      </div>
    </div>
  );
};

const shareIconStyles = {};

export default ShareIcon;
