import React from "react";
import PropTypes from "prop-types";

const ReminderItem = ({ imgSrc, alt, title, value }) => (
  <div>
    <div>
      <img src={imgSrc} alt={alt} />
    </div>
    <div>
      <div>{title}</div>
      <div>{value}</div>
    </div>
  </div>
);

ReminderItem.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
};

export default ReminderItem;
