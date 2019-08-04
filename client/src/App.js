import React, { Component } from "react";
import Cardgroup from "./components/cardgroup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Clicky Game</h1>

        <Cardgroup />

      </div>
    );
  }
}

export default App;
