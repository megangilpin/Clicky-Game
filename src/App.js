import React, { Component } from "react";
import Navbar from "./components/Navbar";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import colors from "./colors.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    colors,
    score: 0,
    topScore: 0,
    guessColor: [],
  };

  shuffleCards = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    for (let i = colors.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    console.log("card clicked")
    // Set this.state.friends equal to the new friends array
    this.setState({ colors });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar />
        <Header />

        <Wrapper>
          {this.state.colors.map(color => (
            <FriendCard
              shuffleCard={this.shuffleCards}
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
