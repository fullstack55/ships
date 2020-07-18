import React, { useState } from "react";
import LoginLeftColumn from "../../components/common/login-left-column/login-left-column";
import RightLoginColumn from "../../components/common/right-login-column/right-login-column";
import "./register.sass";
import InputField from "../../components/common/input-field/input-field";
import Checkbox from "../../components/common/checkbox/checkbox";
import scrollToTop from "../../hooks/scroll-to-top";
import Button from "../../components/common/button/button";
import Link from "../../components/common/login-link/link";

const RegisterPage = () => {
  const [checked, setChecked] = useState(false);

  scrollToTop();

  return (
    <div className="login-page">
      <LoginLeftColumn />
      <RightLoginColumn
        title="Register"
        classNames={{ title: "register-column__title" }}
      >
        <div className="register-column">
          <InputField
            value={""}
            label={"Choose username:"}
            className="login-column__input"
          />
          <InputField
            value={""}
            label={"Email:"}
            className="login-column__input"
          />
          <Checkbox
            label="Hide email address from public"
            className="register-column__checkbox"
            checked={false}
          />

          <div className="register-column__passwords">
            <InputField
              value={""}
              label={"Choose password:"}
              type="password"
              className="register-column__password"
            />
            <InputField
              value={""}
              label={"Verify password:"}
              type="password"
              className="register-column__password"
            />
          </div>
          <div className="register-column__verification">
            <div className="register-column__verification_visual">
              <InputField
                classes={{
                  root: "register-column__verification_visual_input",
                  hint: "register-column__verification_hint",
                  label: "register-column__verification_label",
                }}
                value={""}
                label={"Visual verification:"}
                // hint={"Listen to the letters"}
              />
              <InputField
                className="register-column__verification_visual_input"
                value={""}
                // hint={"The letters shown in the picture"}
              />
            </div>
            <InputField
              className="register-column__password"
              value={""}
              label={"Are you bot"}
            />
          </div>
          <div className="register__hint d-flex align-items-center mt-2">
            <h6>Listen to the letters</h6>
            <h6 className="ml-5">The letters shown in the picture</h6>
          </div>
          <Checkbox
            label={"I agree"}
            className="register-column__checkbox_2"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <Button className="login-column__button">Register</Button>
          <div className="register-column__link-container">
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
      </RightLoginColumn>
    </div>
  );
};

export default RegisterPage;
