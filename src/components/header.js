import React from "react";
import "./header.css";
import { Logo, SecondLogo } from "../pages/svgs";
import { Row, Col } from "antd";
import CustomDropdown from "./Dropdown";

export default function Header({ detail, whiteBackground, isDetails }) {
  const isDetail = detail ? "55px" : "100px";

  return (
    <Row
      className="headerRoot"
      justify="center"
      style={{ paddingTop: isDetail }}
    >
      {/* gutter={{xs: 8, sm: 16, md: 24, lg: 32 }} */}
      <Col span={4} className="logoContainer">
        {whiteBackground ? <SecondLogo /> : <Logo />}
      </Col>
      {!isDetails && (
        <Col offset={16} className="headerDropdown">
          <CustomDropdown />
        </Col>
      )}
    </Row>
  );
}
