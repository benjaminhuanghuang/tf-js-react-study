import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DigitalPredictor from './components/DigitalPredictor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DigitalPredictor />
      </div>
    );
  }
}

export default App;
