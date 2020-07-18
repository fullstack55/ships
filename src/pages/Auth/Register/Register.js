import React from "react";
import { Row, Col } from "reactstrap";
// import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import LeftSide from "../components/LeftSide";
import Checkbox from "../../../components/common/checkbox/checkbox";
import InputField from "../../../components/common/input-field/input-field";
import Button from "../../../components/common/button/button";
import "./Register.sass";

// const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 960 });
//   return isMobile ? children : null;
// };

// const Default = ({ children }) => {
//   const isNotMobile = useMediaQuery({ minWidth: 961 });
//   return isNotMobile ? children : null;
// };

const Register = () => {
  return (
    <Row className="Register" noGutters>
      <Col lg={4} md={6} sm={12}>
        <LeftSide />
      </Col>
      <Col lg={8} md={6} sm={12} className="d-flex justify-content-center">
        <div className="Register__inputbox text-center">
          <h4>Register</h4>

          <div className="Register__input mt-4">
            <InputField
              label="Choose username"
              placeholder="Compania Nacional Registro..."
            />
          </div>

          <div className="Register__input mt-4">
            <InputField label="Email" placeholder="Text" />
          </div>
          <div className="mt-3 Register__emailCheckbox">
            <Checkbox label="Hide email address from public" checked={true} />
          </div>
          <Row noGutters className="mt-3">
            <Col xl={8} lg={6} md={6} className=" mb-3">
              <InputField label="Choose Password" placeholder="Text" />
            </Col>
            <Col xl={4} lg={6} md={6} className="pl-1">
              <InputField label="Verify Password" placeholder="Text" />
            </Col>
          </Row>
          <Row noGutters className="mt-3">
            <Col xl={4} lg={6} md={6}>
              <InputField label="Visual verification" placeholder="Text" />
            </Col>
            <Col xl={4} lg={6} md={6} className="pl-1">
              <InputField nolabelPadding={30} placeholder="Text" />
            </Col>
            <Col
              xl={4}
              lg={12}
              sm={12}
              className="pl-1 mt-lg-2 mt-sm-2 mt-2 mt-xl-0"
            >
              <InputField label="Are You Bot?" placeholder="Hmm..." />
            </Col>
          </Row>
          {/* <Default>
            <Row className="hintbox">
              <Col lg={4} className="text-left">
                <h6 className="italic_text">Listen to the Letters</h6>
              </Col>
              <Col lg={8} className="text-left">
                <h6>The letters shown in the picture</h6>
              </Col>
            </Row>
          </Default> */}

          <div className="Register__input mt-4">
            <Checkbox
              className="login-column__checkbox mt-4"
              label="I Agree"
              checked={true}
            />
            <Button className="login-column__button">Register</Button>
            <div className="mt-4">
              <Link to="/login/identify"> Forgot your account</Link>
            </div>
            <div className="Register__join">
              <span className="login-column__link_text">
                Already have an account?
              </span>
              <Link
                to="/login"
                classNames={{
                  root: "login-column__link",
                  text: "login-column__link_text",
                }}
              >
                {" "}
                Login
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
