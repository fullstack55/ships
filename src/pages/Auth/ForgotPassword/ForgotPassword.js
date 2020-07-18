import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import LeftSide from "../components/LeftSide";
import Checkbox from "../../../components/common/checkbox/checkbox";
import InputField from "../../../components/common/input-field/input-field";
import Button from "../../../components/common/button/button";
import "./ForgotPassword.sass";

const ForgotPassword = ({ login }) => {
  return (
    <Row className="Login" noGutters>
      <Col lg={4} md={6} sm={12}>
        <LeftSide />
      </Col>
      <Col lg={8} md={6} sm={12} className="d-flex justify-content-center">
        <div className="ForgotPassword__inputbox text-center">
          <h4>Password reminder</h4>
          <div className="ForgotPassword__info">
            <div className="ForgotPassword__info_text">
              You can&#39;t retrieve your password, but you can set a new one by
              following a link sent to you by email. You also have the option of
              setting a new password by answering your secret question.
            </div>
          </div>
          <div className="ForgotPassword__input mt-4">
            <InputField
              label="Username/Email"
              placeholder="Compania Nacional Registro..."
            />
          </div>

          <div className="ForgotPassword__input mt-4">
            <Checkbox
              className="login-column__checkbox mt-4"
              label="Ask me my question"
              checked={true}
            />
            <Button onClick={login} className="login-column__button">
              SEND
            </Button>
            <div className="mt-4">
              <Link to="/login/identify"> Forgot your account</Link>
            </div>
            <div className="ForgotPassword__join">
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

export default ForgotPassword;
