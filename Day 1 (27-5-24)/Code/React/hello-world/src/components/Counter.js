import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {}

  render() {
    return (
      <div>
        count - {this.state.count}
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
