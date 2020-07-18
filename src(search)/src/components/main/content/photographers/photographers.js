import React from "react";
import "../content.sass";
import "./photographers.sass";
import Photographer from "./photographer/photographer";
import avatar1 from "../../../../assets/images/desktop/main/content/photographers/avatars/avatar1.png";
import avatar2 from "../../../../assets/images/desktop/main/content/photographers/avatars/avatar2.png";
import avatar3 from "../../../../assets/images/desktop/main/content/photographers/avatars/avatar3.png";
import avatar4 from "../../../../assets/images/desktop/main/content/photographers/avatars/avatar4.png";
import avatar5 from "../../../../assets/images/desktop/main/content/photographers/avatars/avatar5.png";
import avatar6 from "../../../../assets/images/desktop/main/content/photographers/avatars/avatar6.png";
import avatar7 from "../../../../assets/images/desktop/main/content/photographers/avatars/avatar7.png";
import avatar8 from "../../../../assets/images/desktop/main/content/photographers/avatars/avatar8.png";
import SectionTitle from "../../../common/section-title/section-title";

const Photographers = () => {
  return (
    <div className="photographers__wrapper">
      <SectionTitle
        title={"Top photographers"}
        className={"section__title-photographers"}
      />
      <div className={"photographers"}>
        <Photographer
          imgSrc={avatar1}
          name={"Clyde Dickens"}
          location={"Sydney, Australia"}
          postsNumber={"4,500"}
          likesNumber={"1,000"}
          shipPhotosNumber={"10,312"}
          place={1}
        />
        <Photographer
          imgSrc={avatar2}
          name={"Folke Österman"}
          location={"LEDIG"}
          postsNumber={"2,321"}
          likesNumber={"900"}
          shipPhotosNumber={"9,345"}
          place={2}
        />
        <Photographer
          imgSrc={avatar3}
          name={"Jens Smit"}
          location={"Sydney, Australia"}
          postsNumber={"2,100"}
          likesNumber={"678"}
          shipPhotosNumber={"6,100"}
          place={3}
        />
        <Photographer
          imgSrc={avatar4}
          name={"Clyde Dickens"}
          location={"Sydney, Australia"}
          postsNumber={"1,200"}
          likesNumber={"800"}
          shipPhotosNumber={"4,659"}
          place={4}
        />
        <Photographer
          imgSrc={avatar5}
          name={"Clyde Dickens"}
          location={"Sydney, Australia"}
          postsNumber={"4,500"}
          likesNumber={"1,000"}
          shipPhotosNumber={"10,312"}
          place={5}
        />
        <Photographer
          imgSrc={avatar6}
          name={"Folke Österman"}
          location={"LEDIG"}
          postsNumber={"2,321"}
          likesNumber={"900"}
          shipPhotosNumber={"9,345"}
          place={6}
        />
        <Photographer
          imgSrc={avatar7}
          name={"Jens Smit"}
          location={"Sydney, Australia"}
          postsNumber={"2,100"}
          likesNumber={"678"}
          shipPhotosNumber={"6,100"}
          place={7}
        />
        <Photographer
          imgSrc={avatar8}
          name={"Clyde Dickens"}
          location={"Sydney, Australia"}
          postsNumber={"1,200"}
          likesNumber={"800"}
          shipPhotosNumber={"4,659"}
          place={8}
        />
      </div>
    </div>
  );
};

export default Photographers;
