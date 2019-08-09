import React, { Component } from "react";
import Cardgroup from "./components/cardgroup";
import Navbar from 'react-bootstrap/Navbar'
import Instructions from "./components/instructions";
import Wrapper from "./components/wrapper";
import friends from "./components/friends.json";


class App extends Component {

  state = {
    currentscore: 0,
    highscore: 0,
    clicked: [],
    clickedArray: [],
  };

  // made an array to store each id of whats been clicked. then i will check against whats

  handleClick = (e) => {
    console.log("YO" + e.target.id)
    // let id = e.target.id
    // console.log(id)
    this.setState({
      currentscore: this.state.currentscore + 1,
      highscore: this.state.currentscore + 1,
      clicked: e.target.id,
      clickedArray: this.state.clickedArray.concat(e.target.id)
    });
    console.log(this.state.clicked)
    console.log(this.state.clickedArray)
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
                <a className="nav-link">High Score:{this.state.highscore}</a>
              </li>
            </ul>
          </div>
        </Navbar>
        <Instructions />
        <Wrapper>
          <Cardgroup handleClick={this.handleClick} state={this.state} name="tess" />
        </Wrapper>
      </div >
    );
  }
}

export default App;
