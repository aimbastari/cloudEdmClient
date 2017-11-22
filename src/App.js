import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PipelineContainer from './PipelineContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cloud EDM</h1>
        </header>
        <p className="App-intro">
          <PipelineContainer />
        </p>
      </div>
    );
  }
}

export default App;
