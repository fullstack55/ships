import React from "react";
import "./LeftSide.sass";
import Socials from "../../../../components/common/socials/socials";
import logo from "../../../../assets/images/desktop/login/logo.png";
const LeftSide = () => {
  return (
    <div className="LeftSide">
      <h5>WELCOME TO</h5>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <h2>SHIPSPOTTING.COM</h2>
      <h6>
        Shipspoting lets you share your best photos and videos
        <br />
          with millions enthusiasts
      </h6>
      <Socials className="LeftSide__social" />
    </div>
  );
};

export default LeftSide;
