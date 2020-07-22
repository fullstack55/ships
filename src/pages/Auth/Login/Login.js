import React from "react";
import { Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import LeftSide from "../components/LeftSide";
import { login } from "../../../store/auth-reducer";
import Checkbox from "../../../components/common/checkbox/checkbox";
import InputField from "../../../components/common/input-field/input-field";
import Button from "../../../components/common/button/button";
import "./Login.sass";

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const onLogin = () => {
    dispatch(login());
  };

  if (isAuth) return <Redirect to="/home" />;

  return (
    <Row className="Login" noGutters>
      <Col lg={5} md={7} xs={12}>
        <LeftSide />
      </Col>
      <Col lg={7} md={5} xs={12} className="d-flex justify-content-center">
        <div className="Login__inputbox text-center">
          <h4>Login</h4>

          <div className="Login__input mt-4">
            <InputField
              label="Username"
              placeholder="Compania Nacional Registro..."
            />
          </div>
          <div className="Login__input mt-4">
            <InputField label="password" placeholder="Text" type="password" />
          </div>
          <div className="Login__input mt-4">
            <InputField
              label="Minutes to stay logged in:"
              placeholder="Text"
              type="password"
            />
            <Checkbox
              className="login-column__checkbox mt-4"
              label="Always stay logged in"
              checked={true}
            />
            <Button onClick={onLogin} className="login-column__button">
              Login
            </Button>
            <div className="mt-4">
              <Link to="/login/identify"> Forgot your account</Link>
            </div>
            <div className="Login__join">
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
        </div>
      </Col>
    </Row>
  );
};

export default Login;
