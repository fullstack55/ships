/* eslint-disable react/prop-types */
import React, {useState} from "react";
import Navbar from "./navbar/navbar";
import "./header.sass";
import Tabs from "./tabs/tabs";
import Upload from "./upload/upload";
import Search from "./search/search";
import HeaderTop from "../common/header-top/header-top";

const Header = ({ info = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="header">
      <div className="container1">
        <HeaderTop open={() => setMenuOpen(true)}/>
        <Navbar className={ menuOpen ? "header__navbar_show" : "header__navbar_hidden"}  close={() => setMenuOpen(false)} />
        {info && (
          <div className="header__info">
            <div className="header__info-1">
              <span className="header__info-1-1">The Best </span>
              <span className="header__info-1-2">
                Ship Information, Ship Photos and Shipping News!
              </span>
            </div>
            <div className="header__info-2">
              <span className="header__info-2-1">2,634,133 </span>
              <span className="header__info-2-2">photos online!</span>
            </div>
          </div>
        )}
      </div>

      <hr className="divider_header" />

      <div className="container1">
        <Tabs
          render={(tab) => (
            <div className="header__actions">
              {
                {
                  0: <Upload />,
                  1: <Search />,
                }[tab]
              }
            </div>
          )}
        />
      </div>
    </header>
  );
};

export default Header;
