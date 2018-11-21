import React from "react";
import CloseShareMenuIcon from "./CloseShareMenuIcon";

const styles = {
  overlay: {
    height: "50%",
    top: 30,
    right: 30,
    left: 30,
    bottom: 0,
    zIndex: 1000,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    padding: "30px 0",
    background: "white",
    boxShadow: `0 2px 4px 0 rgba(0,0,0,0.15)`
  }
};

const ShareMenu = props => {
  return (
    <div style={styles.overlay}>
      <CloseShareMenuIcon onClick={props.onClick} />
      <ul>
        <li>Share on FB</li>
        <li onClick={props.convertToPng}>Get Image</li>
      </ul>
    </div>
  );
};

export default ShareMenu;
