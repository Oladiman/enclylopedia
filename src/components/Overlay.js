import React from "react";
import "./Overlay.css";
import { Row, Col } from "antd";
import { ArrowForward } from "./svgs";
import CustomSearch from "./CustomSearch";
import { Link } from "react-router-dom";


export default function Overlay() {
  return (
    <div className="overlayContainer">
      <OverHeader />
      <FrequentlySearched />
    </div>
  );
}

const OverHeader = () => {
  return (
    <Row className="overlayTitleContainer" justify="space-between">
      <Col className="overlayTitle">What do you want to Learn Today?</Col>
      <Col className="overSearch">
        <CustomSearch />
      </Col>
    </Row>
  );
};



const FrequentlySearched = () => {
  return (
    <>
    <Row className="frequentHeaderContainer" justify="space-around">
      <Col className="frequentHeader">MOST SEARCHED KEYWORDS</Col>
      <Col className="frequentActionBtn" span={4}>
        see more
      </Col>
    </Row>
    <FrequentlySearchedBody />
    </>
  );
};

const SampleSearch = [
  {
    id: 0,
    searchTerm: "African Mammal",
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
    searchTerm: "Test",
  },
];

const FrequentlySearchedBody = () => {
  return (
    <Row  gutter={[48, 32]}  className="frequentBodyContainer">
      {SampleSearch.map((term) => (
        <Col span={12} key={term.id} className="eachSearchTerm">
          <Link to={`/${term.searchTerm}/details`} className="termLink">
          <ArrowForward className="forwardArrow" />
          {term.searchTerm}
          </Link>
        </Col>
      ))}
    </Row>
  );
};
