import React, { useState } from "react";
import classnames from "classnames";
import { TabContent, TabPane, Row, Col } from "reactstrap";
import FilterContainer from "../FilterContainer";
import Checkbox from "../../../../components/common/checkbox/checkbox";
import icon1 from "../../../../assets/images/desktop/ais/icon1.png";
import icon2 from "../../../../assets/images/desktop/ais/icon2.png";
import icon3 from "../../../../assets/images/desktop/ais/icon3.png";
import icon4 from "../../../../assets/images/desktop/ais/icon4.png";
import icon5 from "../../../../assets/images/desktop/ais/icon5.png";
import icon6 from "../../../../assets/images/desktop/ais/icon6.png";
import icon7 from "../../../../assets/images/desktop/ais/icon7.png";
import icon8 from "../../../../assets/images/desktop/ais/icon8.png";
import icon9 from "../../../../assets/images/desktop/ais/icon9.png";
import icon10 from "../../../../assets/images/desktop/ais/icon10.png";

import "./FilterTab.sass";

const FilterTab = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="FilterTab m-3">
      <Row className="text-center">
        <Col>
          <h6
            className={classnames([
              { FilterTab__Nav__active: activeTab === "1" },
              "FilterTab__Nav",
            ])}
            onClick={() => {
              toggle("1");
            }}
          >
            LEGEND
          </h6>
        </Col>
        <Col>
          <h6
            className={classnames([
              { FilterTab__Nav__active: activeTab === "2" },
              "FilterTab__Nav",
            ])}
            onClick={() => {
              toggle("2");
            }}
          >
            SHIPS
          </h6>
        </Col>
        <Col>
          <h6
            className={classnames([
              { FilterTab__Nav__active: activeTab === "3" },
              "FilterTab__Nav",
            ])}
            onClick={() => {
              toggle("3");
            }}
          >
            PORTS
          </h6>
        </Col>
      </Row>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <FilterContainer headerText="DISPLAY VESSEL TYPE">
                <Checkbox
                  label={"Select All"}
                  className="FilterTab__checkbox--italic"
                />
                <Checkbox
                  label={"Cargo"}
                  icon={icon5}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Pleasure"}
                  icon={icon1}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Tanker"}
                  icon={icon6}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"High Speed"}
                  icon={icon2}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Tug"}
                  icon={icon4}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Passenger"}
                  icon={icon7}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Other"}
                  icon={icon3}
                  className="FilterTab__checkbox"
                />
              </FilterContainer>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FilterContainer headerText="FILTER BY STATUS">
                <Checkbox
                  label={"Moving"}
                  icon={icon8}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Moored / Anchored"}
                  icon={icon9}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Unknown"}
                  icon={icon10}
                  className="FilterTab__checkbox"
                />
              </FilterContainer>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FilterContainer headerText="LABEL SETTINGS">
                <Checkbox
                  label={"Display labels"}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Transparent"}
                  className="FilterTab__checkbox"
                />
              </FilterContainer>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FilterContainer headerText="DISPLAY IN LABEL">
                <Checkbox label={"Ship name"} className="FilterTab__checkbox" />
                <Checkbox
                  label={"Speed/course"}
                  className="FilterTab__checkbox"
                />
                <Checkbox label={"IMO"} className="FilterTab__checkbox" />
                <Checkbox
                  label={"Vessel type"}
                  className="FilterTab__checkbox"
                />
                <Checkbox label={"Status"} className="FilterTab__checkbox" />
                <Checkbox label={"Flag"} className="FilterTab__checkbox" />
              </FilterContainer>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <FilterContainer headerText="DISPLAY VESSEL TYPE">
                <Checkbox
                  label={"Select All"}
                  className="FilterTab__checkbox--italic"
                />
                <Checkbox
                  label={"Cargo"}
                  icon={icon5}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Pleasure"}
                  icon={icon1}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Tanker"}
                  icon={icon6}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"High Speed"}
                  icon={icon2}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Tug"}
                  icon={icon4}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Passenger"}
                  icon={icon7}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Other"}
                  icon={icon3}
                  className="FilterTab__checkbox"
                />
              </FilterContainer>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FilterContainer headerText="FILTER BY STATUS">
                <Checkbox
                  label={"Moving"}
                  icon={icon8}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Moored / Anchored"}
                  icon={icon9}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Unknown"}
                  icon={icon10}
                  className="FilterTab__checkbox"
                />
              </FilterContainer>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FilterContainer headerText="LABEL SETTINGS">
                <Checkbox
                  label={"Display labels"}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Transparent"}
                  className="FilterTab__checkbox"
                />
              </FilterContainer>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FilterContainer headerText="DISPLAY IN LABEL">
                <Checkbox label={"Ship name"} className="FilterTab__checkbox" />
                <Checkbox
                  label={"Speed/course"}
                  className="FilterTab__checkbox"
                />
                <Checkbox label={"IMO"} className="FilterTab__checkbox" />
                <Checkbox
                  label={"Vessel type"}
                  className="FilterTab__checkbox"
                />
                <Checkbox label={"Status"} className="FilterTab__checkbox" />
                <Checkbox label={"Flag"} className="FilterTab__checkbox" />
              </FilterContainer>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <FilterContainer headerText="DISPLAY VESSEL TYPE">
                <Checkbox
                  label={"Select All"}
                  className="FilterTab__checkbox--italic"
                />
                <Checkbox
                  label={"Cargo"}
                  icon={icon5}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Pleasure"}
                  icon={icon1}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Tanker"}
                  icon={icon6}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"High Speed"}
                  icon={icon2}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Tug"}
                  icon={icon4}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Passenger"}
                  icon={icon7}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Other"}
                  icon={icon3}
                  className="FilterTab__checkbox"
                />
              </FilterContainer>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FilterContainer headerText="FILTER BY STATUS">
                <Checkbox
                  label={"Moving"}
                  icon={icon8}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Moored / Anchored"}
                  icon={icon9}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Unknown"}
                  icon={icon10}
                  className="FilterTab__checkbox"
                />
              </FilterContainer>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FilterContainer headerText="LABEL SETTINGS">
                <Checkbox
                  label={"Display labels"}
                  className="FilterTab__checkbox"
                />
                <Checkbox
                  label={"Transparent"}
                  className="FilterTab__checkbox"
                />
              </FilterContainer>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FilterContainer headerText="DISPLAY IN LABEL">
                <Checkbox label={"Ship name"} className="FilterTab__checkbox" />
                <Checkbox
                  label={"Speed/course"}
                  className="FilterTab__checkbox"
                />
                <Checkbox label={"IMO"} className="FilterTab__checkbox" />
                <Checkbox
                  label={"Vessel type"}
                  className="FilterTab__checkbox"
                />
                <Checkbox label={"Status"} className="FilterTab__checkbox" />
                <Checkbox label={"Flag"} className="FilterTab__checkbox" />
              </FilterContainer>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default FilterTab;
