import React from "react";
import friends from "./friends.json";
import "./style.css";

function Cardgroup(props) {

  const pictureCards = friends.map(friend =>
    <div className="card" onClick={props.handleClick} key={friend.id}>
      <div className="img-container">
        <img
          alt={friend.name}
          src={friend.image}
          id={friend.id}
        />
      </div>
    </div>);

  console.log("picture" + pictureCards.length)

  return (
    <div className="wrapper">
      {pictureCards}
    </div >
  );
}

export default Cardgroup;
