import React from "react";
import * as icons from "../icons/animals";

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
        name={icon}
        onClick={props.onClick}
        key={i}
        style={{ padding: 12, cursor: "pointer" }}
      >
        <C
          onClick={props.onClick}
          name={icon}
          key={i}
          value={icon}
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
