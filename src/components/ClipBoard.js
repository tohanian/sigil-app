import React, { useState } from "react";
import * as icons from "../icons/animals";
import * as keyboardAnimals from "../icons/keyboardAnimals";
import * as colorz from "../icons/ColorSwatches";
import * as fonts from "../icons/fonts";
import css from "../App.css";

const OptionSet = props => {
  const optionSets = {
    sigilOptions: <SigilOptions {...props} />,
    swatchOptions: <SwatchOptions {...props} />,
    bannerOptions: <BannerOptions {...props} />,
    textOptions: <TextOptions {...props} />,
    fontOptions: <FontOptions {...props} />,
    fontColor: <FontColor {...props} />,
    outlineOptions: <OutlineOptions {...props} />
  };
  if (props.optionSet) {
    return optionSets[props.optionSet];
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      <SigilOptions {...props} />
    </div>
  );
};

const FontOptions = props => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {Object.keys(fonts).map((font, i) => {
      const C = fonts[font];
      return (
        <div
          value={font}
          onClick={props.onFontSelect}
          key={i}
          style={{ padding: 12, cursor: "pointer" }}
        >
          <C
            onClick={props.onFontSelect}
            name={font}
            key={i}
            value="icon"
            index={i}
            size="25"
            foregroundColor="black"
          />
        </div>
      );
    })}
  </div>
);

const SigilOptions = props => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {Object.keys(keyboardAnimals).map((icon, i) => {
      const C = keyboardAnimals[icon];

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
    })}
  </div>
);

const SwatchOptions = props => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {Object.keys(colorz).map((color, i) => {
      const C = colorz[color];
      const A = window.colors[color];
      return (
        <div
          value={A}
          className="color"
          onClick={props.onClick}
          key={i}
          style={{ padding: 8, cursor: "pointer" }}
        >
          <C
            onClick={props.onClick}
            className="color"
            key={i}
            value={A}
            index={i}
            size="25"
            foregroundColor="black"
          />
        </div>
      );
    })}
  </div>
);

const OutlineOptions = props => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {Object.keys(colorz).map((color, i) => {
      const C = colorz[color];
      const A = window.colors[color];
      return (
        <div
          value={A}
          className="color"
          onClick={props.onOutlineClick}
          key={i}
          style={{ padding: 8, cursor: "pointer" }}
        >
          <C
            onClick={props.onOutlineClick}
            className="color"
            key={i}
            value={A}
            index={i}
            foregroundColor="black"
          />
        </div>
      );
    })}
  </div>
);

const FontColor = props => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {Object.keys(colorz).map((color, i) => {
      const C = colorz[color];
      const A = window.colors[color];
      return (
        <div
          value={A}
          className="color"
          onClick={props.onFontColorClick}
          key={i}
          style={{ padding: 8, cursor: "pointer" }}
        >
          <C
            onClick={props.onFontColorClick}
            className="color"
            key={i}
            value={A}
            index={i}
            foregroundColor="black"
          />
        </div>
      );
    })}
  </div>
);

const BannerOptions = props => {
  return <input onChange={props.onHouseTextChange} />;
};

const TextOptions = props => {
  return <input onChange={props.onChange} />;
};

const Selectors = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <div
        style={{
          width: "20px",
          margin: "10px"
        }}
        onClick={props.onClick("previous")}
      >
        <i
          className="fa fa-chevron-left"
          style={{ cursor: "pointer" }}
          aria-hidden="true"
        />
      </div>
      <div style={{ marginTop: 5 }}> {props.name} </div>
      <div
        style={{
          width: "20px",
          margin: "10px"
        }}
        onClick={props.onClick("next")}
      >
        <i
          className="fa fa-chevron-right"
          style={{ cursor: "pointer" }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

const ClipBoard = props => {
  const [option, setOption] = useState("sigilOptions");
  const [name, setName] = useState("Sigil");
  const selectorOnClick = selection => () => {
    switch (option) {
      case "sigilOptions":
        if (selection === "next") {
          setOption("swatchOptions");
          setName("Swatch");
        } else {
          setOption("fontColor");
          setName("Font Color");
        }
        break;
      case "bannerOptions":
        if (selection === "previous") {
          setOption("outlineOptions");
          setName("Outline");
        } else {
          setOption("textOptions");
          setName("Slogan Text");
        }
        break;
      case "swatchOptions":
        if (selection === "previous") {
          setOption("sigilOptions");
          setName("Sigil");
        } else {
          setOption("outlineOptions");
          setName("Outline Color");
        }
        break;
      case "outlineOptions":
        if (selection === "previous") {
          setOption("swatchOptions");
          setName("Swatch");
        } else {
          setOption("bannerOptions");
          setName("Banner Text");
        }
        break;
      case "textOptions":
        if (selection === "previous") {
          setOption("bannerOptions");
          setName("Banner Text");
        } else {
          setOption("fontOptions");
          setName("Font");
        }
        break;
      case "fontOptions":
        if (selection === "previous") {
          setOption("textOptions");
          setName("Slogan Text");
        } else {
          setOption("fontColor");
          setName("Font Color");
        }
        break;
      case "fontColor":
        if (selection === "previous") {
          setOption("fontOptions");
          setName("Font");
        } else {
          setOption("sigilOptions");
          setName("Sigil");
        }
        break;
      default:
        break;
    }
  };

  return (
    <div style={cell}>
      <Selectors name={name} onClick={selectorOnClick} option={option} />
      <div style={{ marginLeft: "6px", marginRight: "6px" }}>
        <OptionSet {...props} optionSet={option} />
      </div>
    </div>
  );
};

const cell = {
  borderRadius: 4,
  background: "#DDDDDD",
  alignItems: "center",
  paddingTop: "10px",
  width: "100%",
  height: "30%",
  position: "fixed",
  overflow: "scroll",
  bottom: 0,
  left: 0,
  right: 0
};

export default ClipBoard;
