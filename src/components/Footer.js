import React from "react";
import { Logo } from "../pages/svgs";
import {Row, Col} from "antd";
import "./footer.css";

export default function Footer({ dark }) {
  return (
    <>
      {dark ? (
        <DarkFooter />
      ) : (
        <div className="landingFooter">Built by CSC510 Group 5</div>
      )}
    </>
  );
}

const DarkFooter = () => {
  return (<Row className="darkFooter" justify="space-between center">
      <Col  className="footerLogoContainer">
          <Logo />
      </Col>
      <Col  className="madeByText">
      Built by CSC510 Group 5
      </Col>

  </Row>);
};
