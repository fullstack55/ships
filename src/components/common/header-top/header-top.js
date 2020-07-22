import DesktopLogo from "../../../assets/images/desktop/Logo.png";
import Navbar from "../../header/navbar/navbar";
import MobileLogo from "../../../assets/images/mobile/header__logo.png";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import messageIcon from "../../../assets/images/desktop/message_icon.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../../store/auth-reducer";

const HeaderTop = ({open, username, isAuth, logout }) => {
  const [userOpen, setUserOpen] = useState(false);

  const getLinks = () => {
    if (isAuth) {
      return (
        <React.Fragment>
          <p>WELCOME TO SHIPSPOTTING.COM</p>
          <div>
            <Link to="/profile/profile/summary" className="header__username">
              {username}
            </Link>
            <div className="header__message">
              <img src={messageIcon} alt="messages" />
            </div>
            <Link
              to={"/"}
              className="header__button header__button_logout"
              onClick={logout}
            >
              Log Out
            </Link>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <p>WELCOME TO SHIPSPOTTING.COM</p>
        <div>
          <Link to={"/login"} className="header__button header__button_login">
            LOG IN
          </Link>
          <Link
            to={"/register"}
            className="header__button header__button_register"
          >
            Sign Up
          </Link>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className={`header__top`}>
        <img src={DesktopLogo} alt={"Shipspotting"} />
        <Navbar className="header__navbar_xl" />
        <div className={userOpen ? "header__links_show" : "header__links"}>{getLinks()}</div>
      </div>
      <div className="header__top-mobile">
        <div className="header__top-top">
          <button className="header__top-button" onClick={open}/>
          <img src={MobileLogo} alt="Shipspotting" />
          <button className="header__top-person" onClick={() => setUserOpen(true)} />
        </div>
        <div className="header__title">SHIPSPOTTING.COM</div>
      </div>
    </React.Fragment>
  );
};

HeaderTop.propTypes = {
  isAuth: PropTypes.bool,
  username: PropTypes.string,
  logout: PropTypes.func,
  open: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  username: state.authReducer.username,
});

export default connect(mapStateToProps, { logout })(HeaderTop);
