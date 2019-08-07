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
    picturestatus: [
      { id: 1, clicked: friends[0].clicked },
      { id: 2, clicked: friends[1].clicked },
      { id: 3, clicked: friends[2].clicked },
      { id: 4, clicked: friends[3].clicked },
      { id: 5, clicked: friends[4].clicked },
      { id: 6, clicked: friends[5].clicked },
      { id: 7, clicked: friends[6].clicked },
      { id: 8, clicked: friends[7].clicked },
      { id: 9, clicked: friends[8].clicked },
      { id: 10, clicked: friends[9].clicked },
      { id: 11, clicked: friends[10].clicked },
      { id: 12, clicked: friends[11].clicked }
    ]
  };

  handleClick = () => {
    this.setState({ currentscore: this.state.currentscore + 1 });
    console.log("clicked")
    console.log(this.state.picturestatus[0])
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
          <Cardgroup handleClick={this.handleClick} />
        </Wrapper>
      </div >
    );
  }
}

export default App;
