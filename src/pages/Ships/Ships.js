import React from "react";
import { Row, Col } from "reactstrap";
import Header from "../../components/header/header";
import Footer from "../../components/common/footer/footer";
import PageTitle from "../../components/common/page-title/page-title";
import Typography from "../../components/common/typography/typography";
import ShipItem from "./components/ShipItem";
import { ships } from "../../config/constants";

import "./Ships.sass";

const Ships = () => {
  return (
    <div className="Ships">
      <Header info={false} />
      <PageTitle main={"SHIPS INDEX"} secondary={"(BETA)"} />
      <Row noGutters className="m-3">
        <Col xs={12} className="pl-5 mb-3">
          <Typography firstText="Most photographed" secondText="ships" before />
        </Col>
        {ships.map((item, index) => {
          if (index < 9) {
            return (
              <Col key={index} lg={4} md={6} sm={12} className="p-1">
                <ShipItem
                  key={index}
                  url={item.url}
                  firstTitle={"QUEEN VICTORIA"}
                  secondTitle={"785 photos"}
                  thirdTitle={"@Edson de Lima Lucas"}
                  withLike={false}
                />
              </Col>
            );
          }
        })}
      </Row>
      <Row noGutters className="m-3 mt-5">
        <Col xs={12} className="pl-5 mb-3">
          <Typography
            firstText="Ships captured"
            secondText="by most photographers"
            before
          />
        </Col>
        {ships.map((item, index) => {
          if (index < 8) {
            return (
              <Col key={index} lg={3} md={4} xs={12} className="p-1">
                <ShipItem
                  key={index}
                  url={item.url}
                  firstTitle={"Saga Ruby"}
                  secondTitle={"Shown 288 486 times"}
                  thirdTitle={"@simonwp"}
                  withLike={false}
                />
              </Col>
            );
          }
        })}
      </Row>
      <Row noGutters className="m-3 mt-5">
        <Col xs={12} className="pl-5 mb-3">
          <Typography
            firstText="Ships captured"
            secondText="by most photographers"
            before
          />
        </Col>
        {ships.map((item, index) => {
          if (index < 9) {
            return (
              <Col key={index} lg={4} md={6} sm={12} className="p-1">
                <ShipItem
                  key={index}
                  url={item.url}
                  firstTitle={"Saga Ruby"}
                  secondTitle={"Shown 288 486 times"}
                  thirdTitle={"@simonwp"}
                  withLike={false}
                />
              </Col>
            );
          }
        })}
      </Row>
      <Row noGutters className="m-3 mt-5">
        <Col xs={12} className="pl-5 mb-3">
          <Typography firstText="Most photographed" secondText="ships" before />
        </Col>
        {ships.map((item, index) => {
          if (index < 8) {
            return (
              <Col key={index} lg={3} md={4} xs={12} className="p-1">
                <ShipItem
                  key={index}
                  url={item.url}
                  firstTitle={"Saga Ruby"}
                  secondTitle={"Shown 288 486 times"}
                  thirdTitle={"@simonwp"}
                  withLike={false}
                />
              </Col>
            );
          }
        })}
      </Row>
      <Footer />
    </div>
  );
};

export default Ships;
