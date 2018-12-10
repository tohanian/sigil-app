import React, { Component } from "react";
import "./App.css";
import * as icons from "./icons/animals";
import canvg from "canvg";
import { svgAsPngUri } from "save-svg-as-png";

// Components
import ClipBoard from "./components/ClipBoard";
import ShareIcon from "./components/ShareIcon";
import ShareMenu from "./components/ShareMenu";
import CloseShareMenuIcon from "./components/CloseShareMenuIcon";

const LargeImage = props => {
  return Object.keys(icons).map((icon, i) => {
    const Icon = icons[icon];
    const iconic =
      props.icon === icon ? (
        <Icon
          key={i}
          name={icon}
          value={`icon-${1}`}
          index={i}
          size="250"
          houseText={props.houseText}
          fontClassName={props.fontClassName}
          sloganText={props.sloganText}
          foregroundColor={props.foregroundColor}
          stroke={props.stroke}
          textColor={props.textColor}
        />
      ) : null;
    return iconic;
  });
};

const Header = props => {
  return <div className="App-header"> SIGILS </div>;
};

class App extends Component {
  constructor() {
    super();
    window.colors = {
      red: "#FF4136",
      orange: "#FF851B",
      yellow: "#FFDC00",
      lime: "#01FF70",
      green: "#2ECC40",
      olive: "#3D9970",
      aqua: "#7FDBFF",
      teal: "#39CCCC",
      blue: "#0074D9",
      navy: "#001f3f",
      fuschia: "#F012BE",
      purple: "#B10DC9",
      black: "#111111",
      maroon: "#85144b",
      gray: "#AAAAAA",
      white: "white"
    };
    this.state = {
      icon: "Cat",
      text: "Coolio",
      shareMenu: false,
      sigilPng: null,
      color: "red",
      fontClassName: null,
      stroke: null,
      houseText: "HOUSE RUDASHEVSKI",
      textColor: null
    };
  }

  onClick = event => {
    this.setState({
      [event.currentTarget.attributes[1].value]:
        event.currentTarget.attributes[0].value
    });
  };

  onOutlineClick = event => {
    this.setState({ stroke: event.currentTarget.attributes[0].value });
  };

  convertToPng = () => {
    const that = this;
    const svg = document.querySelector("svg");
    svgAsPngUri(svg, {}, function(uri) {
      that.setState({ sigilPng: uri });
    });
  };

  onChange = event => {
    this.setState({ text: event.target.value });
  };

  onHouseTextChange = event => {
    this.setState({ houseText: event.target.value });
  };

  onFontSelect = event => {
    this.setState({ fontClassName: event.target.className });
  };

  onFontColorClick = event => {
    this.setState({ textColor: event.currentTarget.attributes[0].value });
  };

  render() {
    const {
      text,
      icon,
      color,
      fontClassName,
      stroke,
      houseText,
      textColor
    } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="App">
          <LargeImage
            fontClassName={fontClassName}
            foregroundColor={color}
            sloganText={text}
            icon={icon}
            stroke={stroke}
            houseText={houseText}
            textColor={textColor}
          />
          <ClipBoard
            onFontSelect={this.onFontSelect}
            onChange={this.onChange}
            onClick={this.onClick}
            onOutlineClick={this.onOutlineClick}
            onHouseTextChange={this.onHouseTextChange}
            onFontColorClick={this.onFontColorClick}
          />
          {this.state.shareMenu ? (
            <ShareMenu
              onClick={() => this.setState({ shareMenu: false })}
              convertToPng={this.convertToPng}
              src={this.state.sigilPng}
            />
          ) : null}
          <ShareIcon
            onClick={() =>
              this.setState({ shareMenu: true }, this.convertToPng)
            }
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
