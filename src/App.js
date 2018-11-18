import React, { Component } from "react";
import "./App.css";
import { Bat } from "./icons/animals";
import * as icons from "./icons/animals";

const ClipBoard = props => {
  return Object.keys(icons).map((icon, i) => {
    const C = icons[icon];

    return (
      <div
        value={icon}
        name={icon}
        onClick={props.onClick}
        key={i}
        style={{ padding: 12 }}
      >
        <C
          onClick={props.onClick}
          name={icon}
          value={icon}
          index={i}
          size="25"
          foregroundColor="black"
        />
      </div>
    );
  });
};

const LargeImage = props => {
  return Object.keys(icons).map((icon, i) => {
    const C = icons[icon];
    const iconic =
      props.icon === icon ? (
        <C
          key={i}
          name={icon}
          index={i}
          size="250"
          foregroundColor="red"
          stroke="blue"
        />
      ) : null;
    return iconic;
  });
};

class App extends Component {
  state = {
    icon: "Bat"
  };

  onClick = event => {
    console.log(event.currentTarget.attributes[0].value);
    this.setState({ icon: event.currentTarget.attributes[0].value });
  };

  render() {
    return (
      <div className="App">
        <LargeImage icon={this.state.icon} />
        <div style={cell}>
          <ClipBoard onClick={this.onClick} />
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
