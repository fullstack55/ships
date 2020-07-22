import React from "react";
import "./navbar.sass";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import NavList from "../../common/nav-list/nav-list";

const Navbar = ({ className, close }) => {

  return (
    <nav className={`nav1 ${className}`}>
      <button className="header__top-button navbar1-menu__top-button"  onClick={close}/>
      <ul className="navbar1-menu">
        <li className="navbar1-menu__item">
          <NavLink
            to={`/home`}
            className="navbar1-menu__link"
            activeClassName="navbar1-menu__link_active"
          >
            Home
          </NavLink>
        </li>
        <li className="navbar1-menu__item">
          <NavList
            label={"Photos"}
            redirects={[
              { label: "Photo Index", to: "/photos/index" },
              { label: "Most Popular", to: "/photos/most-popular" },
              { label: "New Photos", to: "/photos/new" },
              { label: "Categories", to: "/photos/categories" },
              { label: "Photo Search", to: "/photos/search" },
            ]}
          />
        </li>
        <li className="navbar1-menu__item">
          <NavLink
            to={`/videos`}
            className="navbar1-menu__link"
            activeClassName="navbar1-menu__link_active"
          >
            Videos
          </NavLink>
        </li>
        <li className="navbar1-menu__item">
          <NavLink
            to={`/ships`}
            className="navbar1-menu__link"
            activeClassName="navbar1-menu__link_active"
          >
            Ships
          </NavLink>
        </li>
        <li className="navbar1-menu__item">
          <NavLink
            to={`/ais`}
            className="navbar1-menu__link"
            activeClassName="navbar1-menu__link_active"
          >
            AIS
          </NavLink>
        </li>
        <li className="navbar1-menu__item">
          <NavList
            label={"Forum"}
            redirects={[
              { label: "Forum", to: "/forum/forums" },
              { label: "Members", to: "/forum/memberlist" },
              { label: "Help", to: "/forum/help" },
              { label: "Froum Search", to: "/forum/search" },
            ]}
          />
        </li>
        <li className="navbar1-menu__item">
          <NavLink
            to={`/news`}
            className="navbar1-menu__link"
            activeClassName="navbar1-menu__link_active"
          >
            News
          </NavLink>
        </li>
        <li className="navbar1-menu__item">
          <NavLink
            to={`/support`}
            className="navbar1-menu__link"
            activeClassName="navbar1-menu__link_active"
          >
            Support
          </NavLink>
        </li>
        <li className="navbar1-menu__item">
          <NavLink
            to={`/contact`}
            className="navbar1-menu__link"
            activeClassName="navbar1-menu__link_active"
          >
            Contact
          </NavLink>
        </li>
        <li className="navbar1-menu__item">
          <NavLink
            to="/shiptrax"
            className="navbar1-menu__link"
            activeClassName="navbar1-menu__link_active"
          >
            Shiptrax
          </NavLink>
        </li>
      </ul>
      <div className="socials navbar1-menu__socials undefined">
        <a className="socials__link socials__link_fb" href="#"></a>
        <a className="socials__link socials__link_twitter" href="#"></a>
        <a className="socials__link socials__link_youtobe" href="#"></a>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  close: PropTypes.func,
};

export default Navbar;
