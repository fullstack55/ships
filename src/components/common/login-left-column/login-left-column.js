import React from "react";
import logo from "../../../assets/images/desktop/login/logo.png";
import "./login-left-column.sass";
import Socials from "../socials/socials";

const LoginLeftColumn = () => (
  <div className="left-column">
    <div className="left-column__text left-column__text_1 left-column__text_blue left-column__text_size_m">
      WELCOME TO
    </div>
    <img src={logo} alt={"shipspotting"} />
    <div className="left-column__text left-column__text_2 left-column__text_white left-column__text_size_l">
      SHIPSPOTTING.COM
    </div>
    <div className="left-column__text left-column__text_light left-column__text_size_s">
      Shipspoting lets you share your best photos and videos <br /> with
      millions enthusiasts
    </div>
    <Socials className="left-column__socials" />
  </div>
);

export default LoginLeftColumn;
