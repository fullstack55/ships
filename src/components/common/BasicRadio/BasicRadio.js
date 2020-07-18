/* eslint-disable react/no-unknown-property */
import React from "react";

import "./BasicRadio.sass";

const BasicRadio = ({ id, name, label, checked }) => {
  return (
    <div className="BasicRadio">
      <ul>
        <li>
          <input type="radio" id={id} name={name} checked={checked} />
          <label for={id}>{label}</label>
          <div className="check"></div>
        </li>
      </ul>
    </div>
  );
};

export default BasicRadio;
