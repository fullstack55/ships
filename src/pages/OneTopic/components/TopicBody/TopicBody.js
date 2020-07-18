import React from "react";

import { Row, Col } from "reactstrap";
import ContentHeader from "./ContentHeader";

import "./TopicBody.sass";
const TopicBody = ({ contentHeader, createdDate, content }) => {
  return (
    <Row className="TopicBody">
      <Col>
        <ContentHeader
          contentHeader={contentHeader}
          createdDate={createdDate}
        />
        <div className="TopicBody__content mt-4">{content}</div>
      </Col>
    </Row>
  );
};

export default TopicBody;
