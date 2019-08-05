import React, { Component } from "react";
import Cardgroup from "./components/cardgroup";
import Navbar from 'react-bootstrap/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <h1>Clicky Game!</h1>
          <h1> Click an Image to Begin</h1>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Current Score:</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">High Score:</a>
              </li>
            </ul>
          </div>
        </Navbar>
        <Cardgroup />
      </div >
    );
  }
}

export default App;
