import React, { useState } from "react"
import './DataTimeBlock.css'

export const DataTimeBlock = (props) => {
    const [dataValue, setDataValue] = useState('')
    const [timeValue, setTimeValue] = useState('')
    const [fullValue, setFullValue] = useState('')
    const {customVariant} = props

    return(
        <div className="DataTimeBlock-container">

                <div className="DataTime-containers">
                    <div className="DataTimeBlock-Name">Send notification</div>
                    <input type="date"  className="datepicker-input" value={dataValue} onChange={(event)=>setDataValue(event.currentTarget.value) }/>
                </div>
                
                <div className="DataTime-containers">
                    <div className="DataTimeBlock-Name">Send notification</div>
                    <input type="time" className="datepicker-input"  value={timeValue} onChange={(event)=>setTimeValue(event.currentTarget.value) } />
                </div>
{customVariant === "CreateAPost" ?
                <div className="DataTime-containers">
                    <div className="DataTimeBlock-Name">Send notification</div>
                    <input type="datetime-local" className="datepicker-input"  value={fullValue ? fullValue : `${dataValue}T${timeValue}`} onChange={(event)=>setFullValue(event.currentTarget.value) } / >
                </div>
                :
                ''
}
        </div>
    )
}
