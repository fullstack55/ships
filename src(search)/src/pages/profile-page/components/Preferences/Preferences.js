import React from "react";
import { Row, Col } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import Typography from "../../../../components/common/typography/typography";
import InfoNote from "../../../../components/common/info-note/info-note";
import Paper from "../../../../components/common/paper/paper";
import InputField from "../../../../components/common/input-field/input-field";
import Select from "../../../../components/common/select-with-label/select-with-label";
import Checkbox from "../../../../components/common/checkbox/checkbox";
import BasicButton from "../../../../components/common/BasicButton";
import "./Preferences.sass";

const Preferences = () => {
  const isMoble = useMediaQuery({ maxWidth: 590 });
  return (
    <div className="Preferences">
      <Typography
        className="mb-3"
        firstText={"Look and Layout"}
        secondText={"Preferences"}
      />
      <InfoNote
        text={
          "This section allows you to customize the look and layout of the forum."
        }
      />
      <Paper className={"account-settings__paper"}>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <InputField
              label="Time Format:"
              value="Month Day, Year, HH:MM:SS a/pm"
              subLabel="The format here will be used to show dates throughout this forum"
              subLabelIcon={
                <i
                  className="fa fa-question-circle mr-2"
                  aria-hidden="true"
                ></i>
              }
            />
            <InputField value="%B %d, %Y, %l:%M:%S %P" nolabelPadding={20} />
          </Col>
          <Col lg={6} className="mt-3 mt-sm-3 mt-md-0">
            <InputField
              label="Time Offset:"
              value="0"
              subLabel="Number of hours to +/- to make displayed time equal to your local time."
            />
            <h6 className="Preferences__special mt-4">[auto detect]</h6>
            <h6 className="mt-2">
              Current forum time: February 25, 2020, 12:29:05 pm
            </h6>
          </Col>
        </Row>
        <hr />
        <Row className="pt-3">
          <Col
            xl={4}
            lg={6}
            sm={isMoble ? 12 : 6}
            className="mb-3 mb-sm-3 mb-md-0"
          >
            <Select
              options={[
                {
                  value: "Sunday",
                  label: "Sunday",
                },
                {
                  value: "Manday",
                  label: "Manday",
                },
              ]}
              label="First day of the week on the calendar:"
            />
          </Col>
          <Col
            xl={4}
            lg={6}
            sm={isMoble ? 12 : 6}
            className="mb-3 mb-sm-3 mb-lg-3"
          >
            <Select
              options={[
                {
                  value: "don't show at all",
                  label: "don't show at all",
                },
                {
                  value: "don't show at all",
                  label: "don't show at all",
                },
              ]}
              label="Use quick reply on topic display:"
            />
          </Col>
          <Col xl={4} lg={12} sm={12}>
            <Select
              options={[
                {
                  value: "don't show",
                  label: "don't show",
                },
                {
                  value: "don't show",
                  label: "don't show",
                },
              ]}
              label="Quick-moderation on message index as:"
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Checkbox
              label={"Show board descriptions inside boards."}
              className="ForumSearch__checkbox mt-2"
              checked
            />
            <Checkbox
              label={
                "Show child boards on every page inside boards, not just the first."
              }
              className="ForumSearch__checkbox mt-2"
              checked
            />
            <Checkbox
              label={"Don't show users' avatars."}
              className="ForumSearch__checkbox mt-2"
            />
            <Checkbox
              label={"Don't show users' signatures."}
              className="ForumSearch__checkbox mt-2"
            />
            <Checkbox
              label={"Return to topics after posting by default."}
              className="ForumSearch__checkbox mt-2"
              checked
            />
            <Checkbox
              label={"Don't warn on new replies made while posting."}
              className="ForumSearch__checkbox mt-2"
            />
            <Checkbox
              label={"Show most recent posts at the top."}
              className="ForumSearch__checkbox mt-2"
            />
            <Checkbox
              label={"Show most recent personal messages at top."}
              className="ForumSearch__checkbox mt-2"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <BasicButton text="Change profile" color="primary" outline={true} />
          </Col>
        </Row>
      </Paper>
    </div>
  );
};

export default Preferences;
