import React, { Component } from 'react'

class Textfield extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    }
  }

  render() {
    return (
      <div>
        <textarea id="english"></textarea>
        <textarea id="aurebesh"></textarea>
      </div>
    )
  }
}

export default Textfield
