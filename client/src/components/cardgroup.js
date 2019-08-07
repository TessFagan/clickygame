import React from "react";
import Wrapper from "./Wrapper/wrapper";
import PictureCard from "./picturecard";
import friends from "./friends.json";

function Cardgroup() {
  const pictureCards = friends.map(friend => <PictureCard
    name={friend.name}
    image={friend.image}
  />);
  return (
    <div>
      <Wrapper>
        {pictureCards}
      </Wrapper>
    </div>
  );
}

export default Cardgroup;
