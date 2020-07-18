import React from "react";
import PropTypes from "prop-types";
import './text-area.sass'

const TextArea = ({value, onChange, label, placeholder, className}) => {
    return(
      <div className={className}>
          {
              label
                ? <label className={`text-area-label`} htmlFor={label}>
                    {label}
                </label>
                : null
          }
          <textarea
            value={value}
            onChange={onChange}
            name={label}
            className="text-area"
            placeholder={placeholder}
          />
      </div>

    )
};

TextArea.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.string
};

export default TextArea
