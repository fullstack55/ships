import React from "react";

import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import BasicButton from "../../../../components/common/BasicButton";

import BasicSelect from "../../../../components/common/BasicSelect";
import FilterTab from "../FilterTab";

import map from "../../../../assets/images/desktop/ais/map.png";
import "./AISBody.sass";
const options = [
  { value: "Satellite", label: "Satellite" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const AISBody = () => {
  return (
    <Row className="AISBody mt-4 mx-4 justify-content-center" noGutters>
      <Col xl={12}>
        <Card>
          <CardHeader>
            {/* <div className="header-control"> */}
            <Row className="header-width">
              <Col md={3} sm={6} xm={12} className="AISBody__header">
                <h6>Main control: </h6>
                <div className="AISBody__header__btnBox">
                  <BasicButton
                    text="World view"
                    color="primary"
                    outline={true}
                    className="AISBody__outlineBtn"
                  />
                  <BasicButton
                    text="Refresh"
                    color="primary"
                    outline={false}
                    className="AISBody__fillBtn"
                  />
                </div>
              </Col>
              <Col md={3} sm={6} xm={12} className="AISBody__header">
                <h6>Ship markers: </h6>
                <div className="AISBody__header__btnBox">
                  <BasicButton
                    text="Icons"
                    color="primary"
                    outline={true}
                    className="AISBody__outlineBtn"
                  />
                  <BasicButton
                    text="Flags"
                    color="primary"
                    outline={true}
                    className="AISBody__outlineBtn"
                  />
                </div>
              </Col>
            {/* </div> */}
            {/* <div className="header-control"> */}
              <Col md={3} sm={6} xm={12} className="AISBody__header">
                <h6>Flags: </h6>
                <div>
                  <div className="AISBody__header__btnBox AISBody__header__btnBox__flags flags-left">
                    <BasicButton
                      text="S"
                      color="primary"
                      outline={true}
                      className="AISBody__fillBtn--circle AISBody__outlineBtn"
                    />
                    <BasicButton
                      text="M"
                      color="primary"
                      outline={true}
                      className="AISBody__fillBtn--circle AISBody__outlineBtn"
                    />
                  </div>
                  <div className="AISBody__header__btnBox AISBody__header__btnBox__flags flags-right">
                    <BasicButton
                      text="L"
                      color="primary"
                      outline={true}
                      className="AISBody__fillBtn--circle AISBody__outlineBtn"
                    />
                    <BasicButton
                      text="XL"
                      color="primary"
                      outline={true}
                      className="AISBody__fillBtn--circle AISBody__outlineBtn"
                    />
                  </div>
                </div>
              </Col>
              <Col md={3} sm={6} xm={12} className="AISBody__header">
                <h6>Map style: </h6>

                <div className="AISBody__header__btnBox">
                  <BasicSelect
                    options={options}
                    defaultValue={options[0]}
                    className="AISBody__select"
                  />
                </div>
              </Col>
            {/* </div> */}
            </Row>
          </CardHeader>
          <CardBody>
            <div noGutters className="AISBody__noGutters-body">
              <div className="filter-tab">
                <FilterTab />
              </div>
              <div
                className="AISBody__map"
                style={{ backgroundImage: `url(${map})` }}
              ></div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default AISBody;
