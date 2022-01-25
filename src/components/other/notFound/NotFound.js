import React from "react";
import './NotFound.css'
import NotFound404 from "../../../img/error-404-not-found.png"

export const NotFound = () => {

    return(
        <img className="NotFound" src={NotFound404} alt="NotFound404" />
    )
}