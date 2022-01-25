import React from "react";
import { NavLink } from "react-router-dom";
import { LinksNavPanel } from "./LinksNavPanel";
import './NavPanel.css'
import logoAvatar from "../../../img/tranmautritam.png"

export const NavPanel = () => {
  
        return (
            <div className="NavPanel-container">
               <div className="NavPanel-logo">Wild Minds</div>

               <div className="NavPanel-List">
               <p className="Admin_tools">Admin tools</p>
               {
                  LinksNavPanel.map(item => (
                      <NavLink key={item.id} className="NavPanel-Link" to={`${item.link}`}>
                      <div className="NavPanel-item">
                          {item.icon}{item.name}
                          {item.name === "Notifications" ? <div className="Notifications">{item.Notifications}</div> : ''}
                      </div>
                      </NavLink>
                  )) 
               }
               </div>
               <div className="footer-avatar">
                   <img src={logoAvatar} alt="logo" />
                   <div className="footer-avatar-content">
                       <h3>Admin</h3>
                       <p>Log out</p>
                   </div>
               </div>
            </div>
        );
    
}