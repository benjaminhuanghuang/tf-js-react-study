import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Linear from './components/Linear';
import DigitalPredictor from './components/DigitalPredictor';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Linear} />
            <Route path="/digitalProdictor" component={DigitalPredictor} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
