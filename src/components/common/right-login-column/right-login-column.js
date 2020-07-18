import React from "react";
import "./right-login-column.sass";
import PropTypes from "prop-types";

const RightLoginColumn = ({ classNames, className, children, title }) => {
  const rootClass = classNames ? classNames.root : "";
  const titleClass = classNames ? classNames.title : "";

  return (
    <div className={`right-column ${className} ${rootClass}`}>
      <div className={`right-column__title ${titleClass}`}>{title}</div>
      {children}
    </div>
  );
};

RightLoginColumn.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.object,
};

export default RightLoginColumn;
