import React, { Component } from 'react';
import './App.css';
import * as icons from './icons/animals';

// Components
import ClipBoard from './components/ClipBoard';
import ShareIcon from './components/ShareIcon';
import ShareMenu from './components/ShareMenu';
import CloseShareMenuIcon from './components/CloseShareMenuIcon';

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
    text: 'Coolio',
    shareMenu: false
  };

  onClick = event => {
    this.setState({ icon: event.currentTarget.attributes[0].value });
  };

  render() {
    return (
      <div className="App" style={{ position: 'relative' }}>
        <LargeImage text={this.state.text} icon={this.state.icon} />
        <ClipBoard onClick={this.onClick} />
        {this.state.shareMenu ? <ShareMenu /> : null}
        <ShareIcon onClick={() => this.setState({ shareMenu: true })} />
        {this.state.shareMenu ? (
          <CloseShareMenuIcon
            onClick={() => this.setState({ shareMenu: false })}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
