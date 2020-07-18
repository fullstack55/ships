import React from "react";
import "./tab-links.sass";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const TabLinks = ({ links }) => {
  return (
    <div className={"tab-link"}>
      {links.map((link) => (
        <>
          <NavLink
            to={`${link.to}/`}
            className="tab-link__link"
            activeClassName="tab-link__link_active"
          >
            {link.label}
          </NavLink>
          <span className={"tab-link__point"}>&bull;</span>
        </>
      ))}
    </div>
  );
};
TabLinks.propTypes = {
  links: PropTypes.array,
};
export default TabLinks;
