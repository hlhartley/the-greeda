import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <div className="text">
          Hello
        </div>
      </div>
    );
  }
}

export default App;
