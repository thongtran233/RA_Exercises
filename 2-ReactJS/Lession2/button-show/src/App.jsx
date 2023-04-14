import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text1: "Hi everyone",
      text2: "This text has changed",
    };
  }

  clickHandler = () => {
    this.setState((curState) => {
      let text = curState.text1;
      return {
        text1: curState.text2,
        text2: text,
      };
    });
  };

  render() {
    const { text1 } = this.state;
    return (
      <div>
        <p>{text1}</p>
        <button onClick={this.clickHandler}>Click to change text</button>
      </div>
    );
  }
}
