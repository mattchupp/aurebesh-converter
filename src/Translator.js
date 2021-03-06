import React, { Component } from 'react';
import './App.css';

class Translator extends Component {
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
        <textarea id="english" onChange={this.handleChange} placeholder="Type some text"></textarea>
        <textarea id="aurebesh" value={this.state.inputText} disabled placeholder="Type some text"></textarea>
      </div>
    );
  }
}

export default Translator
