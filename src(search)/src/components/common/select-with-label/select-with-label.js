import React, { useState } from "react";
import classnames from "classnames";
import "./select-with-label.sass";
import PropTypes from "prop-types";

const Select = ({
  options = [],
  className,
  label,
  placeholder,
  nolabelPadding,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classnames("select-with-label", className)}>
      {label ? (
        <label htmlFor={label}>{label}</label>
      ) : (
        <div style={{ paddingTop: nolabelPadding }}></div>
      )}

      <select value={value || placeholder} onChange={handleChange}>
        <option value={placeholder} disabled hidden>
          {placeholder}
        </option>
        {options.map((element, index) => (
          <option key={index} label={element.label} value={element.value} />
        ))}
      </select>
      <span className="select-with-label-arrow" />
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  nolabelPadding: PropTypes.number,
};

export default Select;
