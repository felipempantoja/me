import React, { Component } from 'react';

import Header from './components/header/Header'
import { Features, Projects, Steps } from './components/sections'

import 'normalize.css';
import 'ionicons/dist/css/ionicons.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Features />
        <Projects />
        <Steps />
      </div>
    );
  }
}

export default App;
