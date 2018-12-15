import React, { useState } from "react";
import * as icons from "../icons/animals";
import * as keyboardAnimals from "../icons/animals";
import * as colorz from "../icons/ColorSwatches";
import * as fonts from "../icons/fonts";
import css from "../App.css";

const OptionSet = props => {
  const optionSets = {
    sigilOptions: <SigilOptions {...props} />,
    swatchOptions: <SwatchOptions {...props} />,
    bannerOptions: <BannerOptions {...props} />,
    fontOptions: <FontOptions {...props} />,
    fontColor: <FontColor {...props} />,
    outlineOptions: <OutlineOptions {...props} />,
    backgroundOptions: <BackgroundOptions {...props} />
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
          style={{
            width: "calc(100vw/7)",
            height: "calc(100vw/7)",
            cursor: "pointer",
            position: "relative"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <C
              onClick={props.onClick}
              name={icon}
              className="icon"
              key={i}
              value="icon"
              index={i}
              size="40"
              foregroundColor="black"
              backgroundOpacity="0"
            />
          </div>
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
          style={{
            width: "calc(100vw/7)",
            height: "calc(100vw/7)",
            cursor: "pointer",
            position: "relative"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
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
        </div>
      );
    })}
  </div>
);

const BackgroundOptions = props => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {Object.keys(colorz).map((color, i) => {
      const C = colorz[color];
      const A = window.colors[color];
      return (
        <div
          value={A}
          className="color"
          onClick={props.onBackgroundClick}
          key={i}
          style={{
            width: "calc(100vw/7)",
            height: "calc(100vw/7)",
            cursor: "pointer",
            position: "relative"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <C
              onClick={props.onBackgroundClick}
              className="color"
              key={i}
              value={A}
              index={i}
              size="25"
              foregroundColor="black"
            />
          </div>
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
          style={{
            width: "calc(100vw/7)",
            height: "calc(100vw/7)",
            cursor: "pointer",
            position: "relative"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
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
          style={{
            width: "calc(100vw/7)",
            height: "calc(100vw/7)",
            cursor: "pointer",
            position: "relative"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
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
        </div>
      );
    })}
  </div>
);

const BannerOptions = props => {
  const [inputFocused, setFocus] = useState("none");
  const inputStyles = {
    padding: "8px 5px",
    fontSize: "20px",
    border: "none",
    borderRadius: 0,
    outline: "none",
    borderBottom: "2px solid darkgrey",
    textAlign: "center"
  };

  return (
    <div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{
            ...inputStyles,
            background: inputFocused === "bannerText" ? "lightgrey" : "none"
          }}
          onChange={props.onHouseTextChange}
          onFocus={() => setFocus("bannerText")}
          onBlur={() => setFocus("none")}
          placeholder="Banner Text"
        />
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{
            ...inputStyles,
            background: inputFocused === "sloganText" ? "lightgrey" : "none"
          }}
          onChange={props.onChange}
          onFocus={() => setFocus("sloganText")}
          onBlur={() => setFocus("none")}
          placeholder="Slogan Text"
        />
      </div>
    </div>
  );
};

const Selectors = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #d0d0d0",
        backgroundColor: "#f1f1f1"
      }}
    >
      <div
        style={{
          width: "20px",
          padding: "10px",
          border: "1px solid #d0d0d0",
          margin: "-1px"
        }}
        onClick={props.onClick("previous")}
      >
        <i
          className="fa fa-chevron-left"
          style={{ cursor: "pointer" }}
          aria-hidden="true"
        />
      </div>
      <div style={{ marginTop: 10 }}> {props.name} </div>
      <div
        style={{
          width: "20px",
          padding: "10px",
          border: "1px solid #d0d0d0",
          margin: "-1px"
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
          setOption("backgroundOptions");
          setName("Background Color");
        }
        break;
      case "bannerOptions":
        if (selection === "previous") {
          setOption("outlineOptions");
          setName("Outline");
        } else {
          setOption("fontOptions");
          setName("Font");
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
          setName("Text");
        }
        break;
      case "fontOptions":
        if (selection === "previous") {
          setOption("bannerOptions");
          setName("Text");
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
          setOption("backgroundOptions");
          setName("Background Color");
        }
        break;
      case "backgroundOptions":
        if (selection === "previous") {
          setOption("fontColor");
          setName("Font Color");
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
      <div style={{ height: 10 }} />
      <div style={{ height: "26vh", overflowY: "scroll" }}>
        <OptionSet {...props} optionSet={option} />
      </div>
    </div>
  );
};

const cell = {
  background: "#DDDDDD",
  alignItems: "center",
  width: "100%",
  height: "25%",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  boxShadow: "0px 2px 2px 0px rgba(0,0,0,0.28)",
  borderRadius: 4
};

export default ClipBoard;
