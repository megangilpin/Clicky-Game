import React from "react";
import "./Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// const styles = {
//   headerStyle: {
//     background: "red"
//   },
//   headingStyle: {
//     fontSize: 100
//   }
// };

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header className="header">
      <h1>Color Memory Game</h1>
      <p className="text-center">Click on a color square to earn points, but don't click on any more than once!</p>
    </header>
  );
}

export default Header;
