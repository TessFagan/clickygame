import React from "react";
import Wrapper from "./Wrapper/wrapper";
// import Title from "./components/Title";
import PictureCard from "./picturecard";
import friends from "./friends.json";

function Cardgroup() {
  return (
    <div>
      <Wrapper>
        <PictureCard
          name={friends[0].name}
          image={friends[0].image}
        />
        <PictureCard
          name={friends[1].name}
          image={friends[1].image}
        />
        <PictureCard
          name={friends[2].name}
          image={friends[2].image}
        />
        <PictureCard
          name={friends[3].name}
          image={friends[3].image}
        />
        <PictureCard
          name={friends[4].name}
          image={friends[4].image}
        />
        <PictureCard
          name={friends[5].name}
          image={friends[5].image}
        />
        <PictureCard
          name={friends[6].name}
          image={friends[6].image}
        />
        <PictureCard
          name={friends[7].name}
          image={friends[7].image}
        />
        <PictureCard
          name={friends[8].name}
          image={friends[8].image}
        />
        <PictureCard
          name={friends[9].name}
          image={friends[9].image}
        />
        {/* <PictureCard
          name={friends[10].name}
          image={friends[10].image}
        />
        <PictureCard
          name={friends[11].name}
          image={friends[11].image}
        /> */}
      </Wrapper>
    </div>
  );
}

export default Cardgroup;
