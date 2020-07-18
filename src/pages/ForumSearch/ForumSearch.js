/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import Title from "../../components/common/title/title";
import InputField from "../../components/common/input-field/input-field";
import Select from "../../components/common/select-with-label/select-with-label";
import Checkbox from "../../components/common/checkbox/checkbox";
import Button from "../../components/common/button/button";

import bg from "../../assets/images/desktop/photos/bg.png";
import "./ForumSearch.sass";

const ForumSearch = () => {
  return (
    <div className="ForumSearch mb-5">
      <Title boldText="FORUM" regularText="SEARCH" />
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card>
            <CardHeader>
              <Row>
                <Col lg={12}>
                  <h4
                    className="text-center"
                    style={{ fontFamily: `"Montserrat Semibold", sans-serif` }}
                  >
                    <strong>SET SEARCH</strong> PARAMETERS
                  </h4>
                  <img src={bg} alt="bg" />
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={4}>
                  <InputField label="Search for:" />
                  <h6 className="mt-2">e.g. Orwell "Animal Farm" -movie </h6>
                </Col>
                <Col md={4}>
                  <Select
                    options={[
                      {
                        value: "Match all words",
                        label: "Match all words",
                      },
                    ]}
                    nolabelPadding={27}
                  />
                </Col>
                <Col md={4} className="mt-3 mt-sm-3 mt-md-0">
                  <InputField label="By user:" value="*" />
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <div className="ForumSearch__category mt-3">
                    <h5 className="text-center text-white">OPTIONS:</h5>
                  </div>
                  <Checkbox
                    label={"Show results as messages"}
                    className="ForumSearch__checkbox mt-4"
                  />
                  <Checkbox
                    label={"Show results as messages"}
                    className="ForumSearch__checkbox mt-2"
                  />
                </Col>
                <Col md={4}>
                  <div className="ForumSearch__category mt-3">
                    <h5 className="text-center text-white">MESSAGE AGE:</h5>
                  </div>
                  <Row className="mb-4" noGutters>
                    <Col xs={12} sm={6}>
                      <div className="ForumSearch__age d-flex align-items-center mt-4">
                        <h6>Between |</h6>
                        <input type="number" defaultValue={0} />
                      </div>
                    </Col>
                    <Col xs={12} sm={6}>
                      <div className="ForumSearch__age d-flex align-items-center justify-content-between mt-4">
                        <h6>and |</h6>
                        <input type="number" defaultValue={999} />
                        <h6 className="text-right">| days</h6>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                  <div className="ForumSearch__category mt-3">
                    <h5 className="text-center text-white">SEARCH ORDER:</h5>
                  </div>
                  <Select
                    options={[
                      {
                        value: "Most relevant results forst",
                        label: "Most relevant results forst",
                      },
                    ]}
                    nolabelPadding={20}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <div className="d-flex align-items-center ForumSearch__special mt-5 mt-md-0">
                    <h6 className="mt-2">
                      Choose a board to search in, or search all
                    </h6>
                    <i className="fa fa-sort-desc ml-2" aria-hidden="true"></i>
                  </div>
                  <Checkbox
                    label={"Shipping News and information"}
                    className="ForumSearch__checkbox mt-4"
                  />
                  <Checkbox
                    label={"Trip reports"}
                    className="ForumSearch__checkbox mt-2"
                  />
                  <Checkbox
                    label={"check all"}
                    className="ForumSearch__checkbox mt-2"
                  />
                </Col>
                <Col md={4}>
                  <Row>
                    <Col>
                      <Checkbox
                        label={"Site related news, functions and modules"}
                        className="ForumSearch__checkbox mt-md-5"
                      />
                      <Checkbox
                        label={"Scale Models"}
                        className="ForumSearch__checkbox mt-md-2"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                  <Row className="mt-md-3">
                    <Col>
                      <Checkbox
                        label={"Consultations and review of site standards"}
                        className="ForumSearch__checkbox mt-md-4"
                      />
                      <Checkbox
                        label={"Help and Advice"}
                        className="ForumSearch__checkbox mt-md-2"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="text-center">
                  <Button
                    variant="secondary"
                    className="mr-sm-2 ForumSearch__btn"
                  >
                    Clear Form
                  </Button>
                  <Button variant="outlined" className="mt-2 mt-sm-0 ml-sm-2">
                    Search Now!
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ForumSearch;
