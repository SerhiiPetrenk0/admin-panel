import React from "react"
import './InputFile.css'

export const InputFile = () => {

    return(
        <label  htmlFor="fileUpload" className="InputFile-inner">
            <div className="fileUploadButton">Press to load cover</div>
            <input id="fileUpload" type='file' accept="image/*" placeholder="Press to load cover" />
        </label>
    )
}