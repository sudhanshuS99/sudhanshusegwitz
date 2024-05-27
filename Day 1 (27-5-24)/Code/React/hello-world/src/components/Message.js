import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you",
    });
  }

  render() {
    // return <h1>Hello Segwitz (Class Component)</h1>
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Work</button>
      </div>
    );
  }
}

export default Message;
