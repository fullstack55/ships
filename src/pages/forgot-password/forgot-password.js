import "./forgot-password.sass";
import scrollToTop from "../../hooks/scroll-to-top";
import React from "react";
import LoginLeftColumn from "../../components/common/login-left-column/login-left-column";
import RightLoginColumn from "../../components/common/right-login-column/right-login-column";
import InputField from "../../components/common/input-field/input-field";
import Checkbox from "../../components/common/checkbox/checkbox";
import Button from "../../components/common/button/button";

const ForgotPasswordPage = () => {
  scrollToTop();

  return (
    <div className="login-page">
      <LoginLeftColumn />
      <RightLoginColumn
        title="Password Reminder"
        classNames={{ title: "forgot-password-column__title" }}
      >
        <div className="forgot-password-column">
          <div className="forgot-password-column__info">
            <div className="forgot-password-column__info_text">
              You can&#39;t retrieve your password, but you can set a new one by
              following a link sent to you by email. You also have the option of
              setting a new password by answering your secret question.
            </div>
          </div>
          <InputField label="Username/Email:" />
          <Checkbox className="forgot-password-column__checkbox" checked={false} label={"Ask me my question"} />
          <Button>Send</Button>
        </div>
      </RightLoginColumn>
    </div>
  );
};

export default ForgotPasswordPage;
