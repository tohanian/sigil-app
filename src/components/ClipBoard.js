import React from "react";
import * as icons from "../icons/animals";
import * as colors from "../icons/ColorSwatches";

const ItemSet = props => {
  const itemSets = {
    sigilOptions: <SigilOptions {...props} />,
    bannerOptions: <BannerOptions {...props} />,
    textOptions: <TextOptions {...props} />
  };
  if (props.itemSet) {
    return itemSets[props.itemSet];
  }
  return <SigilOptions {...props} />;
};

const SigilOptions = props =>
  Object.keys(icons).map((icon, i) => {
    const C = icons[icon];

    return (
      <div
        value={icon}
        className="icon"
        onClick={props.onClick}
        key={i}
        style={{ padding: 12, cursor: "pointer" }}
      >
        <C
          onClick={props.onClick}
          name={icon}
          className="icon"
          key={i}
          value="icon"
          index={i}
          size="25"
          foregroundColor="black"
        />
      </div>
    );
  });

export const SwatchOptions = props =>
  Object.keys(colors).map((color, i) => {
    const C = colors[color];
    return (
      <div
        value={color}
        className="color"
        onClick={props.onClick}
        key={i}
        style={{ padding: 6, cursor: "pointer" }}
      >
        <C
          onClick={props.onClick}
          className="color"
          key={i}
          value={color}
          index={i}
          size="25"
          foregroundColor="black"
        />
      </div>
    );
  });

const BannerOptions = props => <div>Banner Options</div>;

const TextOptions = props => <div>Text Options</div>;

const ClipBoard = props => {
  return <ItemSet {...props} />;
};

export default ClipBoard;
