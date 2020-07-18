import React from "react";
import PropTypes from "prop-types";
import "./topic.sass";

const Topic = ({ title, time }) => (
  <div className="topic">
    <div className="topic__title">{title}</div>
    <div className="topic__time">{time}</div>
  </div>
);

Topic.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
};

export default Topic;
