import React, { Component } from "react";
import "./App.css";
import Coin from "./Coin";
import FrontImage from "./coinImage/front.jpg";
import BackImage from "./coinImage/back.jpg";

export default class App extends Component {
  static defaultProps = {
    coins: [
      { side: 1, name: "head", imgSrc: FrontImage },
      { side: 0, name: "tail", imgSrc: BackImage },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      currentFace: null,
      totalFlips: 0,
      head: 0,
    };
    this.clickEvent = this.clickEvent.bind(this);
  }

  flipCoin() {
    let number = Math.round(Math.random());
    let index = this.props.coins.findIndex((e) => e.side === number);
    let newFace = this.props.coins[index];
    this.setState((currentState) => {
      let headsCount = currentState.head + (number === 1 ? 1 : 0);

      return {
        currentFace: newFace,
        totalFlips: currentState.totalFlips + 1,
        head: headsCount,
      };
    });
  }

  clickEvent() {
    this.flipCoin();
    console.log(this.state);
  }

  render() {
    const { currentFace, totalFlips, head } = this.state;
    return (
      <div className="App">
        <h2>Let's flip a coin</h2>
        {currentFace && <Coin info={currentFace} />}
        {currentFace && (
          <p style={{ color: "red" }}>You got {currentFace.name}</p>
        )}
        <button onClick={this.clickEvent}>Flip me</button>
        <p>
          Out of {totalFlips} flips, there have been {head} heads and{" "}
          {totalFlips - head} tails
        </p>
      </div>
    );
  }
}
