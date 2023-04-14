import "./App.css";
import "./Component/CompChill";
import "./Component/ToggleDisplay";

import React, { Component } from "react";
import CompChill from "./Component/CompChill";
import ToggleDisplay from "./Component/ToggleDisplay";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CompChill />
        <ToggleDisplay />
      </div>
    );
  }
}
