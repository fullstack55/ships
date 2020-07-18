import React from "react";
import { Row, Col } from "reactstrap";
import Paper from "../../../../../../components/common/paper/paper";
import Select from "../../../../../../components/common/select-with-label/select-with-label";
import Checkbox from "../../../../../../components/common/checkbox/checkbox";
import BasicButton from "../../../../../../components/common/BasicButton";
const General = () => {
  return (
    <Paper className={"account-settings__paper"}>
      <Row>
        <Col>
          <Select
            options={[
              {
                value: "Moderation only if I started the topic",
                label: "Moderation only if I started the topic",
              },
              {
                value: "Moderation only if I started the topic",
                label: "Moderation only if I started the topic",
              },
            ]}
            label="For topics and boards I've requested notification on, notify me of:"
          />
          <Checkbox
            label={
              "Receive forum announcements and important notifications by email."
            }
            className="ForumSearch__checkbox mt-4"
            checked
          />
          <Checkbox
            label={"Receive reply notification only for the first unread reply"}
            className="ForumSearch__checkbox mt-2"
            checked
          />
          <Checkbox
            label={"Turn notification on when you post or reply to a topic."}
            className="ForumSearch__checkbox mt-2"
          />
          <Checkbox
            label={
              "When sending notification of a reply to a topic, send the post in the email(but please don't reply to these emails)."
            }
            className="ForumSearch__checkbox mt-2"
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <BasicButton text="Save settings" color="primary" outline={true} />
        </Col>
      </Row>
    </Paper>
  );
};

export default General;
