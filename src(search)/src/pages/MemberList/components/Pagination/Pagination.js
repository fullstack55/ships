import React from "react";
import { Row, Col } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import "./Pagination.sass";

const Pagination = ({ right = true }) => {
  const isDefault = useMediaQuery({ minWidth: 591 });
  const isMobile = useMediaQuery({ minWidth: 321, maxWidth: 590 });
  const isTinyMobile = useMediaQuery({ maxWidth: 320 });
  return (
    <Row className="Pagination my-3">
      <Col>
        <div className="d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center align-items-center">
          <h6>1</h6>
          <h6 className="Pagination__active">2</h6>
          <h6>3</h6>
          <h6>4</h6>
          <h6>...</h6>
          <h6>11 797</h6>
        </div>
      </Col>
      {right && (
        <Col lg={8} md={12}>
          {isDefault && (
            <div className="d-flex justify-content-lg-end justify-content-md-center align-items-center mt-lg-0 mt-md-2">
              <h6>A</h6>
              <h6 className="Pagination__active">B</h6>
              <h6>C</h6>
              <h6>D</h6>
              <h6>E</h6>
              <h6>F</h6>
              <h6>G</h6>
              <h6>H</h6>
              <h6>I</h6>
              <h6>J</h6>
              <h6>K</h6>
              <h6>L</h6>
              <h6>M</h6>
              <h6>N</h6>
              <h6>O</h6>
              <h6>P</h6>
              <h6>Q</h6>
              <h6>R</h6>
              <h6>S</h6>
              <h6>T</h6>
              <h6>U</h6>
              <h6>V</h6>
              <h6>W</h6>
              <h6>X</h6>
              <h6>Y</h6>
              <h6>Z</h6>
            </div>
          )}
          {isMobile && (
            <div className="d-flex justify-content-lg-end justify-content-md-center justify-content-between align-items-center mt-lg-0 mt-md-2 mt-2">
              <h6>A</h6>
              <h6 className="Pagination__active">B</h6>
              <h6>C</h6>
              <h6>D</h6>
              <h6>E</h6>
              <h6>F</h6>
              <h6>G</h6>
              <h6>H</h6>
              <h6>I</h6>
              <h6>J</h6>
              <h6>K</h6>
              <h6>L</h6>
              <h6>M</h6>
              <h6>N</h6>
              <h6>O</h6>
              <h6>&gt;</h6>
              <h6>&gt;&gt;</h6>
            </div>
          )}
          {isTinyMobile && (
            <div className="d-flex justify-content-lg-end justify-content-md-center justify-content-between align-items-center mt-lg-0 mt-md-2 mt-2">
              <h6>A</h6>
              <h6 className="Pagination__active">B</h6>
              <h6>C</h6>
              <h6>D</h6>
              <h6>E</h6>
              <h6>F</h6>
              <h6>G</h6>
              <h6>H</h6>
              <h6>&gt;</h6>
              <h6>&gt;&gt;</h6>
            </div>
          )}
        </Col>
      )}
    </Row>
  );
};

export default Pagination;
