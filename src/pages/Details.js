import React from "react";
// import { Tabs } from "antd";
import Footer from "../components/Footer";
import Header from "../components/header";
import DetailsContent from "../components/DetailsContent";
import "./styles/details.css";

export default function Details({ details }) {
  //   const { TabPane } = Tabs;
  return (
    <div id="DetailsRoot">
      <Header whiteBackground={true} detail={true} isDetails={true} />
      <DetailsContent details={details} />
      <Footer dark={true} />
    </div>
  );
}
