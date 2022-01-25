import React, { Component } from "react";
import './Settings.css'
import { InputShowHide } from "../../other/component/InputShowHide";
import { AdminList } from "./AdminList/AdminList";
import { AdminItem } from "./AdminList/AdminItem";
import { CustomButton } from "../../other/component/CustomButton";
class Settings extends Component {

    render() {
        return (
                <div className="Settings-container">
                        <div className="Create-Section">
                            <div className="Create-Section-title">
                                Create new admin  
                            </div>
                            <InputShowHide placeholder="Example@gmail.com" title="Email" />
                            <InputShowHide placeholder="*********"  title="Password" />
                            <InputShowHide placeholder="*********"  title="Continue password" />
                            <CustomButton NameButton="Confirm" />
                        </div>
                        <div className="View-Section">
                            {AdminList.map((item)=>(
                                <AdminItem key={item.id} items={item} />
                            ))}
                        </div>
                    </div>
        );
    }
}

export default Settings;