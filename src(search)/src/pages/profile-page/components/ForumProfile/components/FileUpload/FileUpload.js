/* eslint-disable react/no-unknown-property */
import React from "react";

import "./FileUpload.sass";

const FileUpload = () => {
  return (
    <div className="FileUpload">
      <label for="file-upload" className="FileUpload__label">
        Select File
      </label>
      <input type="file" id="file-upload" />
      <h6 className="d-inline-block ml-3">merlin_16...Jumbo.jpg</h6>
    </div>
  );
};

export default FileUpload;
