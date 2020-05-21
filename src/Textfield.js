import React, { Component } from 'react';
import './App.css';

class Textfield extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({inputText: event.target.value});
  }

  render() {
    return (
      <div>
        <textarea id="english" onChange={this.handleChange}></textarea>
        <textarea id="aurebesh" value={this.state.inputText}></textarea>
      </div>
    );
  }
}

export default Textfield
