import React from "react";

export const AdminItem = (props) => {
    const { items } = props

    return(
        <div className="AdminItem-container">
            <div className="AdminItem-Name">{items.name}</div>
            <div className="AdminItem-btn">Delete</div>
        </div>

    )
}