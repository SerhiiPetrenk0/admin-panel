import React, { useState } from "react"
import './CheckBoxBlock.css'



const CheckBoxBlock = () => {
const [featured , setFeatured] = useState(true)
const [sendNotification , setSendNotification] = useState(true)
    return(<div className="CheckBoxBlock-container">
                <div className="Check-containers">
                    <label className="container">
                        <input type="checkbox" defaultChecked={sendNotification} onClick={()=>setSendNotification(!sendNotification)}  />
                        <span className="checkmark"></span>
                    </label>
                    <div>Featured</div>
                </div>
                <div className="Check-containers">
                    <label className="switch">
                        <input type="checkbox" defaultChecked={featured} onClick={()=>setFeatured(!featured)} />
                        <span className="slider"></span>
                    </label>
                    <div>Send notification</div>
                </div>
        </div>
    )
}
export default CheckBoxBlock