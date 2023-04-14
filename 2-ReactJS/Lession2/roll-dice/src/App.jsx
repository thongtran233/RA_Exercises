import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Button, Dice } from "./RollDice";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isDisable: false,
      isShaking: false,
      firstDice: "one",
      secondDice: "six",
    };

    this.clickEvent = this.clickEvent.bind(this);
  }

  buttonDisableOneMinute() {
    this.setState((curState) => {
      let result = true;
      setTimeout(() => {
        result = false;
        this.setState({ isDisable: result, isShaking: result });
      }, 1000);

      return {
        isDisable: result,
        isShaking: result,
      };
    });
  }

  rollDice() {
    let firstRandomNum = Math.floor(Math.random() * 6) + 1;
    let secondRandomNum = Math.floor(Math.random() * 6) + 1;
    let diceArr = ["one", "two", "three", "four", "five", "six"];

    this.setState({
      firstDice: diceArr[firstRandomNum - 1],
      secondDice: diceArr[secondRandomNum - 1],
    });
  }

  clickEvent() {
    this.buttonDisableOneMinute();
    setTimeout(() => this.rollDice(), 1000);
  }

  render() {
    const { isDisable, isShaking, firstDice, secondDice } = this.state;
    let buttonContent = isShaking ? "Rolling..." : "Roll the Dice!";
    return (
      <div className="App">
        <Dice diceNum={firstDice} shaking={isShaking ? "shaking" : ""} />
        <Dice diceNum={secondDice} shaking={isShaking ? "shaking" : ""} />
        <br />
        <Button
          disable={isDisable ? "disabled" : ""}
          event={this.clickEvent}
          buttonContent={buttonContent}
          className={isDisable ? "rolling" : ""}
        />
      </div>
    );
  }
}
