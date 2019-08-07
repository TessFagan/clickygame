import React from "react";
import friends from "./friends.json";
import "./style.css";

function Cardgroup(props) {


  const pictureCards = friends.map(friend =>
    <div className="card" onClick={props.handleClick}>
      <div className="img-container">
        <img
          key={friend.id}
          alt={friend.name}
          src={friend.image}
          id={friend.id}
        />
      </div>
    </div>);

  friends.map(function (friend) { console.log(friend) });



  console.log(pictureCards)

  return (

    <div className="wrapper">
      {pictureCards}
    </div >
  );
}

export default Cardgroup;
