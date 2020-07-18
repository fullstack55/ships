import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Row, Col } from "reactstrap";
import classnames from "classnames";
import "./HeaderTabs.sass";

import bg from "../../../../assets/images/desktop/photos/bg.png";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const isDefault = useMediaQuery({ minWidth: 591 });
  return (
    <Row className="HeaderTabs text-center">
      <Col lg={6} md={6} sm={6} xs={6}>
        <h4
          className={classnames([
            { HeaderTabs__Nav__active: activeTab === "1" },
            "HeaderTabs__Nav",
          ])}
          onClick={() => {
            toggle("1");
          }}
        >
          <strong>VIEW ALL</strong> {isDefault && "MEMBERS"}
        </h4>
        {activeTab === "1" && <img src={bg} alt="bg" />}
      </Col>
      <Col lg={6} md={6} sm={6} xs={6}>
        <h4
          className={classnames([
            { HeaderTabs__Nav__active: activeTab === "2" },
            "HeaderTabs__Nav",
          ])}
          onClick={() => {
            toggle("2");
          }}
        >
          <strong>SEARCH</strong> {isDefault && "for MEMBERS"}
        </h4>
        {activeTab === "2" && <img src={bg} alt="bg" />}
      </Col>
    </Row>
  );
};

export default HeaderTabs;
