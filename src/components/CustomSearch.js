import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./CustomSearch.css";
import { CustomSearchIcon } from "./svgs";
import { DebounceInput } from "react-debounce-input";
import { fetchSearch } from "../api/index";
import { toast } from "react-toastify";

export default function CustomSearch({ setLoading, setDetails }) {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm) {
      async function fetchSearchRes() {
        setLoading(true);
        try {
          const { data } = await fetchSearch(searchTerm);
          if (data) {
            setLoading(false);
            toast.success("fetched successfully");
            setDetails(data);
            history.push(`/${searchTerm}/details`);
          }
        } catch (e) {
          console.log(e);
          setLoading(false);
          toast.error("Invalid Search input");
        }
      }
      fetchSearchRes();
    }
    return () => {
      setSearchTerm("");
    };
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="overlaySearchButtonContainer">
      <DebounceInput
        placeholder={"Enter a Keyword"}
        className="btnSearch"
        minLength={2}
        debounceTimeout={500}
        onChange={handleSearch}
      />
      <CustomSearchIcon />
    </div>
  );
}
