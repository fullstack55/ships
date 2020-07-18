import React, { useRef } from "react";
import "./upload.sass";

const Upload = () => {
  const inputRef = useRef(null);
  const isTouchable = window.innerWidth <= 960;

  return (
    <>
      <div className="header__actions-text">
        {isTouchable
          ? "Start now!"
          : "Shipspoting lets you share your best photos with millions enthusiasts."}
      </div>
      <div
        className="header__actions-button-container"
        onClick={() => inputRef.current.click()}
      >
        <span className="header__actions-button-text">Upload photo</span>{" "}
        <input
          ref={inputRef}
          type="file"
          className="header__actions-file-input"
        />
      </div>
    </>
  );
};

export default Upload;
