import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: "",
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
