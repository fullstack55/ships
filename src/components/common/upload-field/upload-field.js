import React from "react";
import "./upload-field.sass";
import PropTypes from "prop-types";

const UploadField = ({value, onChange, name, label, underLabel}) => {

  return (
    <div className={`upload-field`}>
      {
        underLabel
          ? <p className='upload-field__under-label'>{underLabel}</p>
          : null
      }
      <label className={`upload-field__label`} htmlFor={name}>
        {label}
      </label>
      <input
        type='file'
        // value={value}
        onChange={onChange}
        name={name}
        id={name}
        className="upload-field__input"
      />
      <p className={'upload-field__value'}>
        {
          value
            ? value
            : null
        }
      </p>
    </div>
  );
};

UploadField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  underLabel: PropTypes.string,
};

export default UploadField;
