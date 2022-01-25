import React from "react"
import { ReactComponent as SerchIcon } from "../../../icon/Search.svg"
import './SearchComponent.css'

export const SearchComponent = () => {

    return(
        <div className="SearchComponent-container">
            <SerchIcon className="SerchIcon" />
            <input type="text"  placeholder='Search' />
            <div className="Search-btn">Search</div>
        </div>
    )
}