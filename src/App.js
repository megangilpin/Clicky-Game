import React, { Component } from "react";
import Navbar from "./components/Navbar";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import Section from "./components/Section";
import ColorCard from "./components/ColorCard";
import Wrapper from "./components/Wrapper";
import colors from "./colors.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    colors,
    score: 0,
    topScore: 0,
    guessedColor: [],
  };

  checksTopScore = () => {
   
  }

  checkGuess = (id) => {
    console.log(this.state.guessedColor)
    const guessedColor = this.state.guessedColor
    if(guessedColor.includes(id)) {
      alert("You've already clicked on that square, try again")
      if(this.state.score > this.state.topScore){
        this.setState({
          topScore: this.state.score,
          score: 0,
          guessedColor:[]
        })
      } else {
      this.setState({
        score: 0,
        guessedColor: []
      })}
    } else {
      guessedColor.push(id)
      this.setState({ 
        score: this.state.score + 1,
        guessedColor: guessedColor,
      });
      this.shuffleCards()
    };
  }

  shuffleCards = () => {
    // Uses Fisher-Yates shuffle to reorder array
    for (let i = this.state.colors.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    // Set this.state.friends equal to the new friends array
    this.setState({ colors });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore} />
        <Header />
        <Wrapper>
          {this.state.colors.map(color => (
            <ColorCard
              checkGuess={this.checkGuess}
              id={color.id}
              key={color.id}
              name={color.name}
              image={color.image}
              occupation={color.occupation}
              location={color.location}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
