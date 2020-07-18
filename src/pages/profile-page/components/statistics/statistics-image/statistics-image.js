import React from "react";
import PropTypes from "prop-types";
import "./statistics-image.sass";

const StatisticsImage = ({ imgSrc, tooltipSrc, alt, likesNumber }) => (
  <div className="statistics__img">
    <img src={imgSrc} alt={alt} />
    {tooltipSrc && (
      <span className="statistics__img-tooltip">
        <img
          className="statistics__img-tooltip-img"
          src={tooltipSrc}
          alt={"tooltip"}
        />
        {likesNumber}
      </span>
    )}
  </div>
);

StatisticsImage.propTypes = {
  imgSrc: PropTypes.string,
  tooltipSrc: PropTypes.string,
  alt: PropTypes.string,
  likesNumber: PropTypes.string,
};

export default StatisticsImage;
