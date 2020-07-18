import React, { useState } from "react";
import "./checkbox.sass";
import PropTypes from "prop-types";

const Checkbox = ({ className, label, name, icon, checked }) => {
  const [checkstatus, setChecked] = useState(checked);
  return (
    <div className={`checkbox ${className}`}>
      <input
        name={name}
        checked={checkstatus}
        onChange={() => setChecked(!checkstatus)}
        className="checkbox__input"
        type="checkbox"
      />
      <label className="checkbox__label">
        <span onClick={() => setChecked(!checkstatus)} />
        {icon && <img src={icon} alt="icon" className="mr-2" />}
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  name: PropTypes.string,
};

export default Checkbox;
