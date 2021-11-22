import React from "react";
import "./CustomSearch.css";
import { CustomSearchIcon } from "./svgs";

export default function CustomSearch({ setSearchTerm, searchTerm }) {
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if ((e.key = "Enter")) {
      setSearchTerm(e.target.value);
    }
  };

  return (
    <div className="overlaySearchButtonContainer">
      <input
        placeholder={"Enter a Keyword"}
        className="btnSearch"
        onChange={handleOnChange}
        onKeyDown={handleKeyPress}
      />
      <CustomSearchIcon onClick={handleSearch} style={{ cursor: "pointer" }} />
    </div>
  );
}
