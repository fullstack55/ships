import React from "react";
import { useMediaQuery } from "react-responsive";
import "./FooterItem.sass";
const TabletAndDesktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 591 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isDesktop = useMediaQuery({ maxWidth: 590 });
  return isDesktop ? children : null;
};
const FooterItem = ({ icon, name, className }) => {
  return (
    <>
      <TabletAndDesktop>
        <div
          className={`d-flex justify-content-center align-items-center FooterItem ml-4 mr-4 ${className}`}
        >
          {icon}
          <h6 className="FooterItem__name ml-2">{name}</h6>
        </div>
      </TabletAndDesktop>
      <Mobile>
        <div className={`${className}`}>
          {icon}
          <h6 className="FooterItem__name">{name}</h6>
        </div>
      </Mobile>
    </>
  );
};

export default FooterItem;
