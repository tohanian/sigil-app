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
          fontClassName={props.fontClassName}
          sloganText={props.sloganText}
          foregroundColor={props.foregroundColor}
          stroke="blue"
        />
      ) : null;
    return iconic;
  });
};

class App extends Component {
  state = {
    icon: "Bat",
    text: "Coolio",
    shareMenu: false,
    sigilPng: null,
    color: "red",
    fontClassName: null
  };

  onClick = event => {
    this.setState({
      [event.currentTarget.attributes[1].value]:
        event.currentTarget.attributes[0].value
    });
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

  onFontSelect = event => {
    this.setState({ fontClassName: event.target.className });
  };

  render() {
    const { text, icon, color, fontClassName } = this.state;
    console.log(text);
    return (
      <div className="App" style={{ position: "relative" }}>
        <LargeImage
          fontClassName={fontClassName}
          foregroundColor={color}
          sloganText={text}
          icon={icon}
        />
        <ClipBoard
          onFontSelect={this.onFontSelect}
          onChange={this.onChange}
          onClick={this.onClick}
        />
        {this.state.shareMenu ? (
          <ShareMenu convertToPng={this.convertToPng} />
        ) : null}
        <ShareIcon onClick={() => this.setState({ shareMenu: true })} />
        {this.state.shareMenu ? (
          <CloseShareMenuIcon
            onClick={() => this.setState({ shareMenu: false })}
          />
        ) : null}
        <img src={this.state.sigilPng} />
      </div>
    );
  }
}

export default App;
