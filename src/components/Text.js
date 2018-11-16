import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func
};

class Text extends Component {
  state = { value: '' };

  render() {
    return (
      <div
        className={`text ${this.props.name}`}
        onClick={this.props.onClick}
        style={{ fontSize: '20px' }}
      >
        {this.props.active ? (
          <input
            onChange={e => this.setState({ value: e.target.value })}
            type="text"
            value={this.state.value}
            autoFocus
          />
        ) : (
          <span>{this.state.value ? this.state.value : 'Enter House'}</span>
        )}
      </div>
    );
  }
}

Text.propTypes = propTypes;

export default Text;
