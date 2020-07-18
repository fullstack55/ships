import React from "react";
import { Row, Col } from "reactstrap";
import SearchField from "../../../../components/common/search-field/search-field";
import BasicButton from "../../../../components/common/BasicButton";
import BasicSelect from "../../../../components/common/BasicSelect";

import "./AISHeader.sass";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const AISHeader = () => {
  return (
    <Row className="AISHeader mx-4">
      <Col
        xl={5}
        sm={12}
        className="d-flex justify-content-xl-start justify-content-sm-center justify-content-start mt-2"
      >
        <SearchField
          label={"Search for ships currently online:"}
          placeholder={"Name, imo, callsign or mmsi"}
          className="AISHeader__searchField"
        />
      </Col>
      <Col xl={7} sm={12}>
        <Row>
          <Col
            xl={6}
            lg={5}
            sm={12}
            className="d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-center mt-lg-3 mt-sm-4 mt-3"
          >
            <BasicButton text="Set New Home" color="primary" outline={true} />
            <BasicButton
              text="Go Home"
              color="primary"
              outline={true}
              className="ml-2"
            />
          </Col>
          <Col
            xl={6}
            lg={7}
            sm={12}
            className="d-sm-flex align-items-center justify-content-xl-end justify-content-lg-start justify-content-center mt-lg-3 mt-sm-4 mt-3 text-center"
          >
            <BasicSelect
              className="AISHeader__select"
              placeholder="No favourites locations"
              options={options}
            />
            <BasicButton
              text="Add to favourites"
              color="primary"
              className="ml-2 mt-3 mt-sm-0"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AISHeader;
