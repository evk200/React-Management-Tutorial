import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="gray-background">
          <img src={logo} className="" alt="logo" />
          <h2>Let's develop management system!</h2>
        </header>
      </div>
    );
  }
}

export default App;
