import React from "react";
import "./page-title.sass";
import PropTypes from "prop-types";

const PageTitle = ({ main, secondary, subText, className }) => {
  return (
    <div className={`page-title-container ${className}`}>
      <h1>
        <strong>{main}</strong> {secondary}
        {subText && <small>{subText}</small>}
      </h1>
      {/* <div className="page-title main">{main}&nbsp;</div>
      <div className="page-title">{secondary}</div>
      { */}
      {/* {subText && <span className="page-title__subText ml-2">{subText}</span>} */}
    </div>
  );
};

PageTitle.propTypes = {
  main: PropTypes.string,
  secondary: PropTypes.string,
  className: PropTypes.string,
};

export default PageTitle;
