import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import DetailsContent from "../components/DetailsContent";
import "./styles/details.css";

export default function Details({ details }) {
  return (
    <div id="DetailsRoot">
      <Header whiteBackground={true} detail={true} />
      <DetailsContent data={details} />
      <Footer dark={true} />
    </div>
  );
}
