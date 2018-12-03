import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super()
    this.state = {number: 0}
  }
  increase=() => {
    this.props.onUpdate(1)
    this.setState({number: this.state.number+1})
  }
  decrease=() => {
    this.props.onUpdate(-1)
    this.setState({number: this.state.number-1})
  }
  render() {
    return (
      <div>
        <button>add new</button>
        <input type="text"></input>
      </div>
    );
  }
}

export default Counter;