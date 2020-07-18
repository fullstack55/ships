import React, { useState } from "react";
import Photo from "./photo/photo";
import "./photos.sass";
import CoralLeader1 from "../../../assets/images/desktop/main/photos/CoralLeader1.jpg";
import CoralLeader2 from "../../../assets/images/desktop/main/photos/CoralLeader2.jpg";
import CoralLeader3 from "../../../assets/images/desktop/main/photos/CoralLeader3.jpg";
import CoralLeader4 from "../../../assets/images/desktop/main/photos/CoralLeader4.jpg";
import CoralLeader5 from "../../../assets/images/desktop/main/photos/CoralLeader5.jpg";
import CoralLeader6 from "../../../assets/images/desktop/main/photos/CoralLeader6.jpg";
import CoralLeader7 from "../../../assets/images/desktop/main/photos/CoralLeader7.jpg";
import CoralLeader8 from "../../../assets/images/desktop/main/photos/CoralLeader8.jpg";
import Kigoriak1 from "../../../assets/images/desktop/main/photos/Kigoriak1.jpg";
import Kigoriak2 from "../../../assets/images/desktop/main/photos/Kigoriak2.jpg";
import Kigoriak3 from "../../../assets/images/desktop/main/photos/Kigoriak3.jpg";
import Kigoriak4 from "../../../assets/images/desktop/main/photos/Kigoriak4.jpg";
import Kigoriak5 from "../../../assets/images/desktop/main/photos/Kigoriak5.jpg";
import Kigoriak6 from "../../../assets/images/desktop/main/photos/Kigoriak6.jpg";
import MscGulsun1 from "../../../assets/images/desktop/main/photos/MscGulsun1.jpg";
import MscGulsun2 from "../../../assets/images/desktop/main/photos/MscGulsun2.jpg";
import CarnivalEcstasy1 from "../../../assets/images/desktop/main/photos/CarnivalEcstasy1.jpg";
import CarnivalEcstasy2 from "../../../assets/images/desktop/main/photos/CarnivalEcstasy2.jpg";

const Photos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleClick = (number) => {
    if (selectedPhoto === number) setSelectedPhoto(null);
    else setSelectedPhoto(number);
  };

  return (
    <div>
      <div className="container1">
        <div className="card-title photos-title">
          <span className="card-title-1">Top </span>Photos
        </div>
        <div className="photos">
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={1}
            handleClick={handleClick}
            likesNumber={10}
            imgSrc={CoralLeader1}
            text={
              <>
                © Captain Johan <br /> Ship name: Coral Leader <br />
                Ship type: Cargo
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={2}
            handleClick={handleClick}
            likesNumber={130}
            imgSrc={Kigoriak1}
            text={
              <>
                © Gilmiyarov Evgeny
                <br />
                Ship name: KIGORIAK
                <br />
                Ship type: Supply Ships/Tug Supplies/AHTS
              </>
            }
          />

          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={3}
            handleClick={handleClick}
            likesNumber={10}
            imgSrc={CoralLeader2}
            text={
              <>
                © Captain Johan
                <br />
                Ship name: Coral Leader
                <br />
                Ship type: Cargo
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={4}
            handleClick={handleClick}
            likesNumber={10}
            imgSrc={MscGulsun1}
            text={
              <>
                © Captain Johan
                <br /> Ship name: Msc Gulsun
                <br /> Ship type: Cargo
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={5}
            handleClick={handleClick}
            likesNumber={8}
            imgSrc={Kigoriak2}
            text={
              <>
                © Gilmiyarov Evgeny
                <br />
                Ship name: KIGORIAK
                <br />
                Ship type: Supply Ships/Tug Supplies/AHTS
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={6}
            handleClick={handleClick}
            imgSrc={CarnivalEcstasy1}
            text={
              <>
                © Captain Johan
                <br />
                Ship name: Carnival Ecstasy
                <br />
                Ship type: Cruise Lines
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={7}
            handleClick={handleClick}
            likesNumber={10}
            imgSrc={CoralLeader3}
            text={
              <>
                © Captain Johan
                <br /> Ship name: Coral Leader
                <br /> Ship type: Cargo
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={8}
            handleClick={handleClick}
            likesNumber={130}
            imgSrc={Kigoriak3}
            text={
              <>
                © Gilmiyarov Evgeny
                <br />
                Ship name: KIGORIAK
                <br />
                Ship type: Supply Ships/Tug Supplies/AHTS
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={9}
            handleClick={handleClick}
            likesNumber={10}
            imgSrc={CoralLeader4}
            text={
              <>
                © Captain Johan
                <br />
                Ship name: Coral Leader
                <br />
                Ship type: Cargo
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={10}
            handleClick={handleClick}
            likesNumber={10}
            imgSrc={MscGulsun2}
            text={
              <>
                © Captain Johan
                <br />
                Ship name: Msc Gulsun
                <br />
                Ship type: Cargo
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={11}
            handleClick={handleClick}
            likesNumber={8}
            imgSrc={Kigoriak4}
            text={
              <>
                © Gilmiyarov Evgeny
                <br />
                Ship name: KIGORIAK
                <br />
                Ship type: Supply Ships/Tug Supplies/AHTS
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={12}
            handleClick={handleClick}
            likesNumber={10}
            imgSrc={CarnivalEcstasy2}
            text={
              <>
                © Captain Johan
                <br />
                Ship name: Carnival Ecstasy
                <br />
                Ship type: Cruise Lines
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={13}
            handleClick={handleClick}
            likesNumber={10}
            imgSrc={CoralLeader5}
            text={
              <>
                © Captain Johan
                <br />
                Ship name: Coral Leader
                <br />
                Ship type: Cargo
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={14}
            handleClick={handleClick}
            imgSrc={Kigoriak5}
            text={
              <>
                © Gilmiyarov Evgeny
                <br />
                Ship name: KIGORIAK
                <br />
                Ship type: Supply Ships/Tug Supplies/AHTS
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={15}
            handleClick={handleClick}
            likesNumber={10}
            imgSrc={CoralLeader6}
            text={
              <>
                © Captain Johan
                <br />
                Ship name: Coral Leader
                <br />
                Ship type: Cargo
              </>
            }
          />

          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={16}
            handleClick={handleClick}
            likesNumber={10}
            imgSrc={CoralLeader7}
            text={
              <>
                © Captain Johan
                <br />
                Ship name: Coral Leader
                <br />
                Ship type: Cargo
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={17}
            handleClick={handleClick}
            likesNumber={130}
            imgSrc={Kigoriak6}
            text={
              <>
                © Gilmiyarov Evgeny
                <br />
                Ship name: KIGORIAK
                <br />
                Ship type: Supply Ships/Tug Supplies/AHTS
              </>
            }
          />
          <Photo
            selectedPhoto={selectedPhoto}
            photoNumber={18}
            handleClick={handleClick}
            likesNumber={10}
            imgSrc={CoralLeader8}
            text={
              <>
                © Captain Johan
                <br />
                Ship name: Coral Leader
                <br />
                Ship type: Cargo
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Photos;
