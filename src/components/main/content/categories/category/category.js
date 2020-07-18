import React from "react";
import PropTypes from "prop-types";
import "./category.sass";

const Category = ({ imgSrc, name }) => (
  <div className="category">
    <img src={imgSrc} alt={name} className="category__image" />
    <div className="category__name">{name}</div>
  </div>
);

Category.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string,
};

export default Category;
