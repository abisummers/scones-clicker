import React, { Component } from "react";
import "./App.css";

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

        <button onClick={this.handleClick}>Click Here!</button>

        <h2> {this.state.numberOfScones} </h2>
      </div>
    );
  }
}

export default App;
