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
    colors
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const colors = this.state.colors.filter(color => color.id !== id);
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
              removeFriend={this.removeFriend}
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
