import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FontAwesome";

function Button(props) {
  return (
    <button
      className={props.className}
      onClick={props.event}
      disabled={props.disable}
    >
      {props.buttonContent}
    </button>
  );
}

function Dice(props) {
  return (
    <>
      <FontAwesomeIcon
        icon={"fa-solid fa-dice-" + props.diceNum}
        size="8x"
        style={{ color: "#7B6CD3" }}
        className={"dice " + props.shaking}
      />
    </>
  );
}

export { Button, Dice };
