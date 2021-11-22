import React from "react";
import "./Overlay.css";
import { Row, Col, Form } from "antd";
import { ArrowForward } from "./svgs";
import CustomSearch from "./CustomSearch";
import { Link } from "react-router-dom";

export default function Overlay({ setSearchTerm, searchTerm }) {
  return (
    <div className="overlayContainer">
      <OverHeader setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <FrequentlySearched />
    </div>
  );
}

const OverHeader = ({ setSearchTerm, searchTerm }) => {
  return (
    <Row className="overlayTitleContainer" justify="space-between">
      <Col className="overlayTitle">What do you want to Learn Today?</Col>
      <Col className="overSearch">
        <Form>
          <CustomSearch setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        </Form>
      </Col>
    </Row>
  );
};

const FrequentlySearched = () => {
  return (
    <div className="frequentlySearchedContainer">
      <Row className="frequentHeaderContainer" justify="space-between">
        <Col className="frequentHeader">MOST SEARCHED KEYWORDS</Col>
        <Col className="frequentActionBtn">see more</Col>
      </Row>
      <FrequentlySearchedBody />
    </div>
  );
};

const SampleSearch = [
  {
    id: 0,
    searchTerm: "Gorilla",
  },
  {
    id: 1,
    searchTerm: "Snail",
  },
  {
    id: 2,
    searchTerm: "Reptile",
  },
  {
    id: 3,
    searchTerm: "Monkey",
  },
  {
    id: 4,
    searchTerm: "Snake",
  },
  {
    id: 5,
    searchTerm: "Cow",
  },
];

const FrequentlySearchedBody = () => {
  return (
    <Row>
      {/*gutter={[48, 32]} className="frequentBodyContainer" */}
      {SampleSearch.map((term, index) => (
        <Col
          span={12}
          key={term.id}
          className={`eachSearchTerm ${
            index % 2 !== 0 ? "oddSearchTerm" : "evenSearchTerm"
          }`}
        >
          <Link to={`/${term.searchTerm}/details`} className="termLink">
            <ArrowForward className="forwardArrow" />
            {term.searchTerm}
          </Link>
        </Col>
      ))}
    </Row>
  );
};
