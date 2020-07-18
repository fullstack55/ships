import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ title, className }) => {
  const splittedTitle = title.split(" ");

  return (
    <div className={`section__title ${className}`}>
      <span className={"section__title-bold"}>{splittedTitle[0]}</span>{" "}
      {splittedTitle[1]}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
    className: PropTypes.string
};

export default SectionTitle;
