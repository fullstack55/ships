import React from "react";
import PropTypes from "prop-types";
import "./information-item.sass";

const InformationItem = ({ title, value }) => (
  <div className="information-item">
    <span className="information-item__title">{title}:</span>
    <div className="information-item__line" />
    <span className="information-item__value">{value}</span>
  </div>
);

InformationItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};

export default InformationItem;
