import React, { Component } from 'react';
import './App.css';
import * as icons from './icons/animals';

// Components
import ClipBoard from './components/ClipBoard';

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
          foregroundColor="red"
          stroke="blue"
        />
      ) : null;
    return iconic;
  });
};

class App extends Component {
  state = {
    icon: 'Bat',
    text: 'Coolio'
  };

  onClick = event => {
    this.setState({ icon: event.currentTarget.attributes[0].value });
  };

  render() {
    return (
      <div className="App">
        <LargeImage text={this.state.text} icon={this.state.icon} />
        <ClipBoard onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
