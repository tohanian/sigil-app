import React from "react";

const ShareIcon = props => {
  return (
    <i
      onClick={props.onClick}
      className="fa fa-share-square-o fa-1x"
      aria-hidden="true"
    />
  );
};

export default ShareIcon;
