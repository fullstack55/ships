import React from "react";
import PropTypes from "prop-types";
import "./photo.sass";

const Photo = ({
  photoNumber,
  selectedPhoto,
  handleClick,
  likesNumber,
  imgSrc,
  text,
}) => {
  return (
    <div className="card">
      <img
        src={imgSrc}
        className={`card__image ${
          photoNumber === selectedPhoto ? "main__card-image_selected" : ""
        }`}
      />
      <div
        className={`main__card-image-text photo__text ${
          photoNumber === selectedPhoto ? "main__card-image-info photo__text_position" : ""
        }`}
      >
        {text}
      </div>
      {likesNumber && <span className="card__like">{likesNumber}</span>}

      <a
        className="main__card-button photo__button"
        onClick={() => handleClick(photoNumber)}
      >
        {photoNumber === selectedPhoto ? "Hide info" : "View info"}
      </a>
      <span className="card__like">{likesNumber}</span>
    </div>
  );
};

Photo.propTypes = {
  photoNumber: PropTypes.number,
  handleClick: PropTypes.func,
  selectedPhoto: PropTypes.number,
  likesNumber: PropTypes.number,
  imgSrc: PropTypes.string,
  text: PropTypes.element,
};

export default Photo;
