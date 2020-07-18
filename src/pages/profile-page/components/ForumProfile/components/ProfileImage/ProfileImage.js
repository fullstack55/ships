import React from "react";
import { Row, Col } from "reactstrap";
import Typography from "../../../../../../components/common/typography/typography";
import Paper from "../../../../../../components/common/paper/paper";
import BasicRadio from "../../../../../../components/common/BasicRadio";
import TextArea from "../../../../../../components/common/text-area/text-area";
import InputField from "../../../../../../components/common/input-field/input-field";
import FileUpload from "../FileUpload";

import layer from "../../../../../../assets/images/desktop/profile/layer.png";

import "./ProfileImage.sass";

const ProfileImage = () => {
  return (
    <div className="ProfileImage">
      <Paper className={"PersonalInfo__paper"}>
        <Typography firstText="Profile" secondText="Image" />
        <Row className="m-4 m-sm-2">
          <Col md={4} xs={12}>
            <BasicRadio
              id="picture"
              name="profile_image"
              label="Personalized Picture:"
              checked
            />
            <img src={layer} alt="layer" />
          </Col>
          <Col md={4} xs={12} className="mt-3 mt-md-0">
            <select
              className="ProfileImage__listbox"
              name="credit_card"
              size="3"
            >
              <option value="Visa">(No pic)</option>
              <option value="Mastercard">Actors</option>
              <option value="American Express">Musicians</option>
            </select>
          </Col>
          <Col md={4} xs={12} className="mt-3 mt-md-0">
            <select
              className="ProfileImage__listbox"
              name="credit_card"
              size="3"
            >
              <option value="Visa">Brad Pitt</option>
              <option value="Mastercard">Bruce Campbell</option>
              <option value="American Express">Bruce Willis</option>
              <option value="American Express">Cameron Diaz</option>
              <option value="American Express">Charisma Carpenter</option>
              <option value="American Express">Christopher Lambert</option>
            </select>
          </Col>
        </Row>
        <Row className="m-4 mt-5 mx-sm-2">
          <Col lg={4} md={4} xs={12}>
            <BasicRadio
              id="picture"
              name="profile_image"
              label="I have my own pic:"
            />
            <h6>
              Specify your own avatar by URL.{" "}
              <strong>(ex: http://www.mypage.com/mypic.gif)</strong>
            </h6>
          </Col>
          <Col lg={8} md={8} xs={12} className="mt-3 mt-md-0">
            <InputField placeholder="http://" />
          </Col>
        </Row>
        <Row className="m-4 mt-5 align-items-center mx-sm-2">
          <Col lg={4} md={4} xs={12}>
            <BasicRadio
              id="picture"
              name="profile_image"
              label="I will upload my own picture:"
            />
          </Col>
          <Col lg={8} md={8}>
            <FileUpload />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextArea label="Personal Text:" placeholder="Select" />
          </Col>
        </Row>
      </Paper>
    </div>
  );
};

export default ProfileImage;
