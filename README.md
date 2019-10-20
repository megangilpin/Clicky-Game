# Color Click Game :crystal_ball:

 https://secure-citadel-28458.herokuapp.com/

  ![Color Click Game Demo](demo/colorClickGamemed.gif)

## Overview

React based memory game.

## Functionality Breakdown
Get the highest score by clicking each colored square once. Be careful though, with each click the squares will randomly rearrange on the page. If a color is clicked more than once the game starts over. 

## Technology Used
- React.js
- Bootstrap
- Node.js
- JavaScript
- JQuery

## Technical Approach

1. Create components for each part of the page:
      1. Header
      1. Footer
      1. Navbar
      1. Section
      1. ColorCard - to be used for each colored square
1. Create a json file to save below info for each color square:
      1. ID
      1. Name of color card ie: "Shades of Blue"
      1. Image URL 
1. Set up the App.js to import each component and json file
1. Set the state of App.js to take:
      1. Array of color cards form json file
      1. Current Score
      1. Top Score
      1. An array to keep track of all guessed colors
1. Create a function that uses Fisher-Yates to randomly rearrange the cards on the page
1. Create onclick function that checks if the color as been clicked, if not adds color to array of guessed colors, increases the score and calls the function to rearrange the colors.

