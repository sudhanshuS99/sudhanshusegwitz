import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  handleUsernameChange = (event) => {};

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
