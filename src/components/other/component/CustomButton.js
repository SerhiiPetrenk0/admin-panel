import React from "react"
import './CustomButton.css'


export const CustomButton = (props) => {
    const { NameButton, setActive } = props
    return(
        <div className="CustomButton-container CustomButton-position" onClick={() => setActive(true)}>
            {NameButton}
        </div>

    )
}