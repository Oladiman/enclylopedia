import React, { useState } from "react";
import "./styles/landing.css";
import Header from "../components/header";
import Overlay from "../components/Overlay";
import Footer from "../components/Footer";

export default function Landing({ setDetails }) {
  const [loading, setLoading] = useState(false);
  return loading ? (
    "Loading..."
  ) : (
    <>
      <div id="landingRoot">
        <Header />
        <Overlay
          loading={loading}
          setLoading={setLoading}
          setDetails={setDetails}
        />
        <Footer />
      </div>
    </>
  );
}
