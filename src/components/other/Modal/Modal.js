import React from "react";
import { useLocation } from "react-router-dom";
import logo from '../../../img/logo.png'
import './Modal.css'

export const Modal = (props) => {
    const location = useLocation()
    const {active, setActive} = props
    return(
        <div className={active ? 'modal modal-active' : 'modal'} onClick={()=>setActive(false)}>
            <div className={active ? 'modal-content modal-content-active' : 'modal-content'} onClick={e => e.stopPropagation()}>
                <img src={logo} alt="logo" />
                {location.pathname === "/Content/Create_a_post" ? <div className="modal-title">Are you sure you want to save this post?</div> : <></>}
                {location.pathname === "/Content/Post_management" || location.pathname === "/Content/Create_and_manage" ? <div className="modal-title">are you sure you want to save the settings?</div> : <></>}
                <div className="modal-btn-container">
                    <div className="modal-btn cancel" onClick={()=>setActive(false)}>Cancel</div>
                    <div className="modal-btn save" onClick={()=>setActive(false)}>Save</div>
                </div>
            </div>
        </div>
    )
}