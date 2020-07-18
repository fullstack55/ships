import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import PageTitle from "../../components/common/page-title/page-title";
import HeaderTabs from "./components/HeaderTabs";
import Pagination from "./components/Pagination";
import MemberTable from "./components/MemberTable";
import "./MemberList.sass";

const MemberList = () => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle main={"MEMBER"} secondary={"LIST"} />
        </Col>
      </Row>
      <Row
        className="MemberList justify-content-center mb-5 mt-2 mx-1"
        noGutters
      >
        <Col lg={10} md={12}>
          <Card>
            <CardHeader>
              <HeaderTabs />
            </CardHeader>
            <CardBody>
              <Pagination />
              <MemberTable />
              <Pagination right={false} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default MemberList;
