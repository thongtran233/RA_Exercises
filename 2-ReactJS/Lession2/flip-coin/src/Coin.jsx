import React from "react";

export default function Coin(props) {
  return <img src={props.info.imgSrc} alt={props.info.name} />;
}
