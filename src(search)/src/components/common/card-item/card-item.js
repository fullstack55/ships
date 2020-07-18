import React from "react";
import PropTypes from "prop-types";
import clockIcon from "../../../assets/images/desktop/summary/clockIcon.png";
import "./card-item.sass";

const CardItem = ({
  withClock,
  classes,
  className,
  imgSrc,
  alt,
  value,
  label,
  backgroundColor,
}) => {
  const { rootCls, topTextCls, imgCls, labelCls } = { ...classes };
  return (
    <div
      className={`card-item ${className} ${rootCls}`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={`card-item__image ${imgCls}`}>
        <img src={imgSrc} alt={alt} />
      </div>
      <div>
        <span className={`card-item__text card-item__value ${topTextCls}`}>
          {value}
          {withClock && (
            <span className="card-item__clock-img">
              <img src={clockIcon} alt="clock" />
            </span>
          )}
        </span>
        <span className={`card-item__text card-item__label ${labelCls}`}>
          {label}
        </span>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  withClock: PropTypes.bool,
  className: PropTypes.string,
  classes: PropTypes.object,
  imgSrc: PropTypes.string,
  alt: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
};

export default CardItem;
