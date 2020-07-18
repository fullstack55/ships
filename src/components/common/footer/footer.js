import React from "react";
import "./footer.sass";
import Socials from "../socials/socials";

const Footer = () => (
  <div className="footer">
    <div className="container1">
      <div className="footer__content">
        <div>Copyright © 2020 All rights reserved</div>
        <Socials />
        <div className="footer__terms">
          <div>Terms and Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
