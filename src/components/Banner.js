import React, { Component } from 'react';

// Components
import Text from './Text';

class Banner extends Component {
  state = { selected: 'house' };

  render() {
    return (
      <div
        className="banner"
        onClick={e => {
          if (e.target.className === 'banner') {
            this.setState({ selected: 'none' });
          }
        }}
        style={{ width: '200px', height: '500px', border: '1px solid black' }}
      >
        <Text
          active={this.state.selected === 'house'}
          name="house"
          onClick={e => {
            this.setState({ selected: 'house' });
          }}
        />
      </div>
    );
  }
}

export default Banner;
