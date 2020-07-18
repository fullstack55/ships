import React from "react";

import { Row, Col } from "reactstrap";
import "./FilterContainer.sass";

const FilterContainer = ({ headerText, children }) => {
  return (
    <Row className="FilterContainer mt-3" noGutters>
      <Col
        className="FilterContainer__header text-center text-white text-bold"
        xs={12}
      >
        {headerText}
      </Col>
      <Col xs={12} className="mt-3 text-left">
        {children}
      </Col>
    </Row>
  );
};

export default FilterContainer;
