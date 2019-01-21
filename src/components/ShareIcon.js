import React from "react";

const ShareIcon = props => (
  <img
    style={{ marginLeft: 10, bottom: 0 }}
    onClick={props.onClick}
    src={require("./share-icon.png")}
  />
);

export default ShareIcon;
