import React from "react";
import PropTypes from "prop-types";
import "./button.sass";

const Button = ({ className, variant, children, onClick }) => {
  const variantClass =
    variant === "secondary" ? "button_secondary" : "button_primary";
  return (
    <button className={`button ${variantClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
