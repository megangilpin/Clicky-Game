import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar sticky-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <h4 >Color Click Game</h4>
        </div>
        {/* <div>some new stuff</div> */}
        <ul className="nav navbar-nav text-right">
          <li>Current Score: {props.score}</li>
          <li>Top Score: {props.topScore}</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
