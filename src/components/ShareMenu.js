import React from "react";
import CloseShareMenuIcon from "./CloseShareMenuIcon";

const styles = {
  overlay: {
    height: "100%",
    top: 30,
    right: 30,
    left: 30,
    bottom: 0,
    zIndex: 1000,
    position: "absolute",
    justifyContent: "center",
    padding: "30px 0",
    background: "lightgrey",
    boxShadow: `0 2px 4px 0 rgba(0,0,0,0.15)`
  }
};

const ShareMenu = props => {
  return (
    <div style={styles.overlay}>
      <CloseShareMenuIcon onClick={props.onClick} />
      <div>
        <ul>
          <li>Share on FB</li>
          <li>Download Image</li>
        </ul>
      </div>
      <img width="200" height="200" alt="" src={props.src} />
    </div>
  );
};

export default ShareMenu;
