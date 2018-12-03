import React, { Component } from 'react';
import './App.css';
import CounterGroup from './components/CounterGroup.js'
import Counter from './components/Counter.js';


class App extends Component {
  render() {
    return (
      <div>
      <CounterGroup/>
      <Counter/>
      </div>
    );
  }
}

export default App;