import React from 'react'
import "./CustomSearch.css"
import {CustomSearchIcon} from "./svgs"



export default function CustomSearch() {
    
    return (
        <div className="overlaySearchButtonContainer">
        <input  placeholder={"Enter a Keyword"} className="btnSearch"/>
        <CustomSearchIcon />
        </div>

    )
}
