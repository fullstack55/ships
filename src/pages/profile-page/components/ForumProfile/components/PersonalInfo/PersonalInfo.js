import React from "react";
import { Row, Col } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import Typography from "../../../../../../components/common/typography/typography";
import Paper from "../../../../../../components/common/paper/paper";
import InputField from "../../../../../../components/common/input-field/input-field";
import Select from "../../../../../../components/common/select-with-label/select-with-label";
import BasicButton from "../../../../../../components/common/BasicButton";
import TextArea from "../../../../../../components/common/text-area/text-area";
import "./PersonalInfo.sass";

const PersonalInfo = () => {
  const isDesktop = useMediaQuery({ minWidth: 961 });
  const isTabletOrMoble = useMediaQuery({ maxWidth: 960 });
  const isDefault = useMediaQuery({ minWidth: 561 });
  const isTinyMobile = useMediaQuery({ maxWidth: 560 });
  return (
    <div className="PersonalInfo">
      <Paper className={"PersonalInfo__paper"}>
        <Typography firstText="Personal" secondText="Info" />
        <Row className="mt-3">
          <Col lg={5} md={5} xs={12} className="d-flex">
            {isDefault && (
              <Row noGutters>
                <Col>
                  <InputField
                    label="Birthdate:"
                    value="1989"
                    className="PersonalInfo__birthdate"
                  />
                </Col>
                <Col
                  className="d-flex justify-content-center align-items-center mt-3 text-secondary"
                  lg={1}
                  sm={1}
                >
                  -
                </Col>
                <Col>
                  <InputField
                    value="02"
                    nolabelPadding={28}
                    className="PersonalInfo__birthdate"
                  />
                </Col>
                <Col
                  className="d-flex justify-content-center align-items-center mt-3 text-secondary"
                  lg={1}
                  sm={1}
                >
                  -
                </Col>
                <Col>
                  <InputField
                    value="14"
                    nolabelPadding={28}
                    className="PersonalInfo__birthdate"
                  />
                </Col>
                <Col xs={12}>
                  <h6 className="mt-2">Year (YYYY) - Month (MM) - Day (DD)</h6>
                </Col>
              </Row>
            )}
          </Col>
          {isTinyMobile && (
            <>
              <Col>
                <Row noGutters>
                  <Col>
                    <InputField
                      label="Birthdate:"
                      value="1989"
                      className="PersonalInfo__birthdate"
                    />
                  </Col>
                </Row>
                <Row noGutters>
                  <Col>
                    <InputField
                      value="02"
                      nolabelPadding={28}
                      className="PersonalInfo__birthdate"
                    />
                  </Col>
                </Row>
                <Row noGutters>
                  <Col>
                    <InputField
                      value="14"
                      nolabelPadding={28}
                      className="PersonalInfo__birthdate"
                    />
                  </Col>
                </Row>
                <h6 className="mt-2">Year (YYYY) - Month (MM) - Day (DD)</h6>
              </Col>
            </>
          )}
          <Col lg={7} md={7} xs={12}>
            <Row>
              <Col lg={6} sm={12} className="mt-md-0 mt-3">
                <InputField label="Location:" value="Your text" />
              </Col>
              {isDesktop && (
                <Col>
                  <Select
                    options={[
                      {
                        value: "Male",
                        label: "Male",
                      },
                      {
                        value: "Female",
                        label: "Female",
                      },
                    ]}
                    label="Gender:"
                  />
                </Col>
              )}
            </Row>
          </Col>
        </Row>
        {isTabletOrMoble && (
          <Row className="mt-2">
            <Col>
              <Select
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  {
                    value: "Female",
                    label: "Female",
                  },
                ]}
                label="Gender:"
              />
            </Col>
          </Row>
        )}
        <hr />
        <Row>
          <Col lg={3} md={6}>
            <InputField label="ICQ:" placeholder="Your Text" />
            <h6 className="mt-2">This is your ICQ number.</h6>
          </Col>
          <Col lg={3} md={6}>
            <InputField label="AIM:" placeholder="Your Text" />
            <h6 className="mt-2">
              This is your AOL Instant Messenger nickname.
            </h6>
          </Col>
          <Col lg={3} md={6} className="mt-md-2">
            <InputField label="MSN:" placeholder="Your Text" />
            <h6 className="mt-2">Your MSN messenger email address.</h6>
          </Col>
          <Col lg={3} md={6} className="mt-md-2">
            <InputField label="YIM:" placeholder="Your Text" />
            <h6 className="mt-2">
              This is your Yahoo! Instant Messenger nickname.
            </h6>
          </Col>
        </Row>
        <hr />
        <Row className="mt-4">
          <Col xs={12}>
            <TextArea label="Custom title:" placeholder="Select" />
          </Col>
          <Col className="mt-4">
            <TextArea label="Signature:" placeholder="Select" />
            <h6 className="mt-2">
              Signatures are displayed at the bottom of each post or personal
              message. BBC code and smileys may be used in your signature.
            </h6>
            <h6 className="mt-2 PersonalInfo__special">
              Max 300; characters remaining: 300
            </h6>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6} xs={12}>
            <InputField label="website title:" placeholder="Your Text" />
            <h6 className="mt-2">
              This must be included if you specify a URL below.
            </h6>
          </Col>
          <Col md={6} xs={12}>
            <InputField label="Webiste URL:" placeholder="Your Text" />
            <h6 className="mt-2">This must be a complete URL.</h6>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <BasicButton text="Change profile" color="primary" outline={true} />
          </Col>
        </Row>
      </Paper>
    </div>
  );
};

export default PersonalInfo;
