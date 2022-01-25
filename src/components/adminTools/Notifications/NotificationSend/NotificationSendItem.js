import React from "react";
import Icon_arrow from '../../../../icon/Icon_arrow.png'

export const NotificationSendItem = (props) => {
    const { items } = props
    return(
        <div className="NSI-container">

            <div className="NSI-header">
                <div className="NSI-circle"><div></div></div>
                <div className="NSI-ApplicationName">{items.ApplicationName}</div>
                <div className="NSI-point"></div>
                <div className="NSI-time">{items.time}</div>
                <div className="NSI-data">{items.data}</div>
                <img className="NSI-Icon-arrow" src={Icon_arrow} alt="Icon_arrow" />
            </div>

            <div className="NSI-content">
                <div className="NSI-title">{items.title}</div>
                <div className="NSI-subTitle">{items.subTitle}</div>
            </div>
        </div>
    )
}