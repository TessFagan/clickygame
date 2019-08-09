import React, { Component } from "react";
import Cardgroup from "./components/cardgroup";
import Navbar from 'react-bootstrap/Navbar'
import Instructions from "./components/instructions";

class App extends Component {

  state = {
    currentscore: 0,
    clicked: [],
    clickedArray: [],
  };

  // made an array to store each id of whats been clicked. then i will check against whats in the array

  handleClick = (e) => {
    console.log("YO" + e.target.id)
    if (this.state.clickedArray.indexOf(e.target.id) > -1 === false) {
      console.log("hasnt been clicked before")
      console.log(this.state.clickedArray.indexOf(e.target.id))
      // Cardgroup.shuffle()
      this.setState({
        currentscore: this.state.currentscore + 1,
        clicked: e.target.id,
        clickedArray: this.state.clickedArray.concat(e.target.id)
      });
    }
    else {
      console.log("already clicked")
      this.setState({
        currentscore: 0,
        clicked: [],
        clickedArray: []
      });
    }
  };

  shuffle = (pictureCards) => {
    var i,
      j,
      temp;
    for (i = pictureCards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = pictureCards[i];
      pictureCards[i] = pictureCards[j];
      pictureCards[j] = temp;
    }
    return pictureCards;
  };

  render() {

    return (
      <div className="App">
        <Navbar>
          <h1>Clicky Game!</h1>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link">Current Score: {this.state.currentscore}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">ClickedArray:{this.state.clickedArray}</a>
              </li>
            </ul>
          </div>
        </Navbar>
        <Instructions />
        <Cardgroup handleClick={this.handleClick} shuffle={this.shuffle} />
      </div >
    );
  }
}

export default App;
