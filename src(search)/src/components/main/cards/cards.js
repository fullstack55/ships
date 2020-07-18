import React, { useState } from "react";
import "./cards.sass";
import ship1 from "../../../assets/images/desktop/main/ship1.jpg";
import ship2 from "../../../assets/images/desktop/main/ship2.jpg";
import ship3 from "../../../assets/images/desktop/main/ship3.jpg";
import Card from "./card/card";

const Cards = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (number) => {
    if (selectedImage === number) setSelectedImage(null);
    else setSelectedImage(number);
  };

  return (
    <div className="container1">
      <div className="main__cards">
        <Card
          likesNumber={10}
          imgSrc={ship1}
          imageNumber={1}
          selectedImage={selectedImage}
          handleClick={handleClick}
        />
        <Card
          likesNumber={10}
          imgSrc={ship2}
          imageNumber={2}
          selectedImage={selectedImage}
          handleClick={handleClick}
        />
        <Card
          likesNumber={10}
          imgSrc={ship3}
          imageNumber={3}
          selectedImage={selectedImage}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Cards;
