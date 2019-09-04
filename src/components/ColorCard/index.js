import React from "react";
import "./style.css";

function ColorCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.checkGuess(props.id)} className="remove" />
      </div>
    </div>
  );
}

export default ColorCard;
