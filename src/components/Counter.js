import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input:""
    };
  }
  clickAddNew=() => {
    this.props.onUpdate(this.state.input)
    this.setState({input:""})
  }
  render() {
    return (
      <div>
        <button onClick ={this.clickAddNew}>add new</button>
        <input type="text"></input>
        <form className="App" ></form>
      </div>
    );
  }
}

export default Counter;