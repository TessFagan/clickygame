import React from "react";
import friends from "./friends.json";
import "./style.css";

function Cardgroup(props) {


  const pictureCards = friends.map(friend =>
    <div className="card" onClick={props.handleClick} state={props.state} key={friend.id}>
      <div className="img-container">
        <img
          alt={friend.name}
          src={friend.image}
          id={friend.id}
          clicked={friend.clicked}
        />
      </div>
    </div>);


  console.log(pictureCards)

  return (

    <div className="wrapper">
      {pictureCards}
    </div >
  );
}

export default Cardgroup;
