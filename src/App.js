import React, { Component } from "react";
import "./App.css";

const Button = ({ handleClick }) => (
  <button onClick={handleClick}>
    <img
      src="https://i.guim.co.uk/img/media/e312f87e6ea1d5efb85ec197ad37908ff383ec7f/395_426_3771_3771/master/3771.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=8ffb5d734dfbcf1636e472e627baa8a6"
      alt="Click Here!"
    />
  </button>
);

class App extends Component {
  state = { numberOfScones: 0 };

  handleClick = () => {
    console.log("Hello");
    this.setState(state => {
      return { numberOfScones: state.numberOfScones + 1 };
    });
  };

  render() {
    return (
      <div className="container">
        <h1> Scone Clicker </h1>
        <Button handleClick={this.handleClick} />
        <h2> {this.state.numberOfScones} </h2>
      </div>
    );
  }
}

export default App;
