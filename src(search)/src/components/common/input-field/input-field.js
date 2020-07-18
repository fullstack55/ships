import React from "react";
import "./input-field.sass";
import PropTypes from "prop-types";

const InputField = ({
  hint,
  classes,
  className,
  label,
  subLabel,
  subLabelIcon,
  value,
  onChange,
  type,
  firstChild,
  lastChild,
  placeholder,
  nolabelPadding,
}) => {
  const rootClass = classes ? classes.root : "";
  const hintClass = classes ? classes.hint : "";
  const labelClass = classes ? classes.label : "";

  const first = firstChild ? (
    <span className={"pseudo pseudo-first"}>{firstChild}</span>
  ) : null;
  const last = lastChild ? (
    <span className={"pseudo pseudo-last"}>{lastChild}</span>
  ) : null;

  return (
    <div className={`input-field ${className} ${rootClass}`}>
      {first}
      {last}
      {label ? (
        <label className={`input-field__label ${labelClass}`} htmlFor={label}>
          {label}
        </label>
      ) : (
        <div style={{ paddingTop: nolabelPadding }}></div>
      )}
      {subLabel && (
        <h6 className="mb-3">
          {subLabelIcon && subLabelIcon}
          {subLabel}
        </h6>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={label}
        placeholder={placeholder}
        className="input-field__input"
      />
      <div className={`input-field__hint ${hintClass}`}>{hint}</div>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  hint: PropTypes.string,
  type: PropTypes.string,
  firstChild: PropTypes.string,
  lastChild: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputField;
