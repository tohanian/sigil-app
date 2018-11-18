import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Bat} from './icons/animals'
import * as icons from './icons/animals';

const ClipBoard = () => {
  return (Object.keys(icons).map((icon, i) => {
  const C = icons[icon];

  return (
        <span style={{ padding: 12 }}>
          <C size="25" foregroundColor="black"/>
        </span>
  )
}))}


class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'grey'}} className="App">
        <Bat stroke="blue" size="200px" foregroundColor="red"/>
        <div style={cell}>
        <ClipBoard/>
        </div>
      </div>
    );
  }
}

const cell = {
  borderRadius: 4,
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  overflow: 'scroll',
};
export default App;
