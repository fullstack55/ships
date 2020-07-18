import React from "react";
import PropTypes from "prop-types";
import "./card.sass";

const Card = ({
  selectedImage,
  likesNumber,
  imgSrc,
  imageNumber,
  handleClick,
}) => {
  const renderTitle = () =>
    ({
      1: (
        <>
          <span className="card-title-1">Most Viewed</span> Last 24 Hours
        </>
      ),
      2: (
        <>
          <span className="card-title-1">Most Viewed</span> Last Week
        </>
      ),
      3: (
        <>
          <span className="card-title-1">Latest</span> Photo
        </>
      ),
    }[imageNumber]);

  return (
    <div className="main__card">
      <div className={"card-title"}>{renderTitle()}</div>
      <img
        src={imgSrc}
        className={`main__card-image ${
          imageNumber === selectedImage ? "main__card-image_selected" : ""
        }`}
      />
      <div
        className={`main__card-image-text ${
          imageNumber === selectedImage ? "main__card-image-info" : ""
        }`}
      >
        <span className="main__card__image-text_small">© Captain Johan</span>
        <br /> <span className="main__card__image-text_small">
          Ship name:
        </span>{" "}
        Coral Leader
        <br /> <span className="main__card__image-text_small">
          Ship type:
        </span>{" "}
        Cargo
      </div>
      <a
        className="main__card-button"
        onClick={() => handleClick(imageNumber)}
      >
        {imageNumber === selectedImage ? "Hide info" : "View info"}
      </a>
      <span className="card__like">{likesNumber}</span>
    </div>
  );
};

Card.propTypes = {
  selectedImage: PropTypes.number,
  likesNumber: PropTypes.number,
  imgSrc: PropTypes.string,
  imageNumber: PropTypes.number,
  handleClick: PropTypes.func,
};

export default Card;
