import React, { useState } from "react";
import LoginLeftColumn from "../../components/common/login-left-column/login-left-column";
import RightLoginColumn from "../../components/common/right-login-column/right-login-column";
import InputField from "../../components/common/input-field/input-field";
import "./login.sass";
import Checkbox from "../../components/common/checkbox/checkbox";
import Button from "../../components/common/button/button";
import Link from "../../components/common/login-link/link";
import scrollToTop from "../../hooks/scroll-to-top";
import { connect } from "react-redux";
import { login } from "../../store/auth-reducer";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const LoginPage = ({ login, isAuth }) => {
  const [check, setCheck] = useState(true);
  scrollToTop();

  if (isAuth) return <Redirect to="/" />;

  return (
    <div className="login-page">
      <LoginLeftColumn />
      <RightLoginColumn
        classNames={{ title: "login-column__title" }}
        title="Login"
      >
        <div className="login-column">
          <InputField label="Username" className="login-column__input" />
          <InputField
            label="Password"
            className="login-column__input"
            type="password"
          />
          <InputField
            label="Minutes to stay logged in:"
            className="login-column__input"
          />
          <Checkbox
            className="login-column__checkbox"
            label="Always stay logged in"
            checked={check}
            onChange={() => setCheck(!check)}
          />
          <Button onClick={login} className="login-column__button">
            Login
          </Button>
          <Link to="/login/identify"> Forgot your account</Link>
          <div className="login-column__link-container">
            <span className="login-column__link_text">
              Don&#39;t have an account?
            </span>
            <Link
              to="/register"
              classNames={{
                root: "login-column__link",
                text: "login-column__link_text",
              }}
            >
              {" "}
              Join
            </Link>
          </div>
        </div>
      </RightLoginColumn>
    </div>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func,
  isAuth: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, { login })(LoginPage);
