import React from "react";
import PropTypes from "prop-types";
import "./photographer.sass";

const Photographer = ({
  place,
  postsNumber,
  likesNumber,
  shipPhotosNumber,
  name,
  location,
  imgSrc,
}) => {
  return (
    <div className={"photographer"}>
      <div className={"photographer-header"}>
        <div className={"photographer-header__info"}>
          <img src={imgSrc} />
          <div className={"photographer-header__text"}>
            <div className={"photographer-header__text-name"}>{name}</div>
            <div className={"photographer-header__text-location"}>{location}</div>
          </div>
        </div>
        <div className="photographer-place__number">{place}</div>
      </div>
      <div className={"photographer-stats"}>
        <div>
          <div className={"photographer-stats-number"}>{postsNumber}</div>
          <div className={"photographer-stats-name"}>Posts</div>
        </div>
        <div>
          <div className={"photographer-stats-number"}>{likesNumber}</div>
          <div className={"photographer-stats-name"}>Likes</div>
        </div>
        <div>
          <div className={"photographer-stats-number"}>{shipPhotosNumber}</div>
          <div className={"photographer-stats-name"}>Ship photos</div>
        </div>
      </div>
    </div>
  );
};

Photographer.propTypes = {
  postsNumber: PropTypes.string,
  likesNumber: PropTypes.string,
  shipPhotosNumber: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  imgSrc: PropTypes.string,
  place: PropTypes.number,
};

export default Photographer;
