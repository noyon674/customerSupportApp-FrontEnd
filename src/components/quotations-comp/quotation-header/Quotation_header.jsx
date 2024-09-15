import React from "react";
import "./quotation_header.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaArrowLeft } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Quotation_header() {
  return (
    <div className="quotation-header">
      <Col>
        <Row>
          <Link to="">
            <FaArrowLeft />
          </Link>
        </Row>
        <Row sx={6}>
          <h2>Quotation List</h2>
        </Row>
        <Row>
          <Link to="">
            <FaFilter />
          </Link>
        </Row>
      </Col>
    </div>
  );
}

export default Quotation_header;
