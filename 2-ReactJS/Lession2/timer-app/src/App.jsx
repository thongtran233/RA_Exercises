import "./App.css";

import React, { Component } from "react";
import Buttons from "./Buttons";
import Timer from "./Timer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      isCounting: false,
      countId: 0,
    };
  }

  count(isCount) {
    let countStart = null;

    if (isCount) {
      countStart = setInterval(() => {
        let timeCount = this.state.timer;
        timeCount++;
        this.setState({ timer: timeCount, countId: countStart });
      }, 1000);
    } else {
      clearInterval(this.state.countId);
    }
  }

  start = () => {
    this.setState({ isCounting: true });
    this.count(true);
  };

  stop = () => {
    this.setState({ isCounting: false });
    this.count(false);
  };
  reset = () => {
    this.setState({ timer: 0 });
  };

  render() {
    const { timer } = this.state;
    return (
      <div>
        <Timer time={timer} />
        <Buttons event={this.start} name="Start" />
        <Buttons event={this.stop} name="Stop" />
        <Buttons event={this.reset} name="Reset" />
      </div>
    );
  }
}
