import React from "react";
import { useQuery } from "react-query";
import "./styles/landing.css";
import Header from "../components/header";
import Overlay from "../components/Overlay";
import Footer from "../components/Footer";
import { getDictionaryMeaning } from "../Api";
import { useHistory } from "react-router";

export default function Landing({ searchTerm, setSearchTerm, setDetails }) {
  const history = useHistory();
  const { data, error, status } = useQuery("dictionaryMeaning", () =>
    getDictionaryMeaning(searchTerm)
  );
  if (status === "error") {
    console.log(error.message);
  }
  if (status === "loading") {
    console.log("loading");
  }
  if (data) {
    setDetails(data);
    history.push(`/${searchTerm}/details`);
  }

  return (
    <div id="landingRoot">
      <Header />
      <Overlay setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}
