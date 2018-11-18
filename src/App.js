import React, { Component } from "react";
import "./App.css";
import * as icons from "./icons/animals";

// Components
import ClipBoard, { SwatchOptions } from "./components/ClipBoard";

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
          text={props.text}
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
    color: "red"
  };

  onClick = event => {
    this.setState({
      [event.currentTarget.attributes[1].value]:
        event.currentTarget.attributes[0].value
    });
  };

  render() {
    const { text, icon, color } = this.state;
    return (
      <div className="App">
        <LargeImage foregroundColor={color} text={text} icon={icon} />
        <div style={cell}>
          <ClipBoard onClick={this.onClick} />
          <SwatchOptions onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

const cell = {
  borderRadius: 4,
  background: "white",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  width: "100%"
};

export default App;
