import React, { Component } from 'react';
import Register from './components/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello
          <Register/>
        </header>
      </div>
    );
  }
}

export default App;
