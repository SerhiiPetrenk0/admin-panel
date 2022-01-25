import React, { useState } from "react";
import './ColorPicker.css'

import EditIcon from "../../../img/VectorPencil.png"

export const ColorPicker = (props) => {
    const [ColorPicker, setColorPicker] = useState('')
    const { colors } = props
    const CustomStyle = [ 
        {
            boxShadow: `0px 0px 8px 2px ${ColorPicker ? `${ColorPicker}99` : `${colors.color}99`}`,
        },
        {
            background: `${ColorPicker ? `${ColorPicker}33` : `${colors.color}33`}`,
        },
        {
            background: `${ColorPicker ? `${ColorPicker}60` : `${colors.color}60`}`,
        },
        {
            background: `${ColorPicker ? `${ColorPicker}99` : `${colors.color}99`}`,
        },
 ]
    return(
    <div className="ColorPicker">
    <div style={CustomStyle[0]} className="ColorPicker-container">
        <label style={CustomStyle[1]} className="ColorPicker-View">
            <input type="color" value={ColorPicker} onChange={(event)=> setColorPicker(event.currentTarget.value)} />
            <div style={CustomStyle[2]}>
                <div style={CustomStyle[3]}></div>
            </div>   
        </label>
    </div>
    <div className="ColorPicker-title">{colors.title}</div>
    <div className="ColorPicker-subtitle">Edit<img src={EditIcon} alt="EditIcon" /></div>
    </div>
    )
}