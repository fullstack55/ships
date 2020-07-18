import React from "react";
import PropTypes from "prop-types";
import "./socials.sass";

const Socials = ({ className }) => (
  <div className={`socials ${className}`}>
    <a className="socials__link socials__link_fb" href="#" />
    <a className="socials__link socials__link_twitter" href="#" />
    <a className="socials__link socials__link_youtobe" href="#" />
  </div>
);

Socials.propTypes = {
  className: PropTypes.string,
};

export default Socials;
