import React from "react";

const ShareIcon = props => {
  return (
    <div style={{ display: "block" }} onClick={props.onClick}>
      <i className="fa fa-share-square-o fa-1x" aria-hidden="true" />
    </div>
  );
};

export default ShareIcon;
