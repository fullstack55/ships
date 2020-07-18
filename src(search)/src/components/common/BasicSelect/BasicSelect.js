import React from "react";
import Select from "react-select";

import "./BasicSelect.sass";

const BasicSelect = ({ placeholder, className, options, ...props }) => {
  return (
    <div className="BasicSelect">
      <Select
        options={options}
        className={`${className}`}
        classNamePrefix="react-select"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default BasicSelect;
