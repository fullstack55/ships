import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./link.sass";

const Link = ({ className, classNames, to, children }) => {
  const rootClass = classNames ? classNames.root : "";
  const textClass = classNames ? classNames.text : "";
  return (
    <div className={`${className} ${rootClass}`}>
      <RouterLink className={`link ${textClass}`} to={to}>
        {children}
      </RouterLink>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  classNames: PropTypes.object,
  to: PropTypes.string,
  children: PropTypes.node,
};
export default Link;
