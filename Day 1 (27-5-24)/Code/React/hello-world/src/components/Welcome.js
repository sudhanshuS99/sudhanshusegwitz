//using class components
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    const { state1, state2 } = this.state
      // return <h1>Hello Segwitz (Class Component)</h1>
      .return(
        <h1>
          Welcome {name} a.k.a {heroName} using class Component
        </h1>
      );
  }
}

export default Welcome;
