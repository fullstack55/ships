import React from "react";
import PropTypes from "prop-types";
import "./paper.sass";

const Paper = ({ className, type, ...other }) => {
  const typeClass = type === "secondary" ? "paper_secondary" : "paper_first";
  return <div className={`paper ${typeClass} ${className}`} {...other} />;
};

Paper.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Paper;
