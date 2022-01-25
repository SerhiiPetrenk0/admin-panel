import React, { Component } from "react";
import "./Notifications.css"
import { DataTimeBlock } from "../../other/component/DataTimeBlock";
import {CustomButton} from "../../other/component/CustomButton"
import {InputShowHide} from "../../other/component/InputShowHide"
import { NotificationSendItem } from "./NotificationSend/NotificationSendItem";
import { NotificationsList } from "./NotificationSend/NotificationSendList"

class Notifications extends Component {

    render() {
        return (
                <div className="Notifications-container">
                        <div className="Notifications-Section">
                            <div className="Create-Section-title">
                            Create Notification  
                            </div>
                            <InputShowHide  placeholder="Before Bed Routines"  title="Create subtitle name" />
                            <div className="PostTitleName">Post Discription</div>
                            <textarea className="PostDiscriptionView" placeholder='Sleep meditation for your relax ' />
                            <DataTimeBlock customVariant="Notifications" />
                            <CustomButton NameButton="Save and publish" />
                        </div>
                        <div className="View-Section">
                            <div className="Create-Section-title">
                                Notification send
                            </div>
                            <div className="View-Section-content">
                            {NotificationsList.map((item)=>(
                                <NotificationSendItem key={item.id} items={item} />
                            ))}
                            </div>
                        </div>
                    </div>
        );
    }
}

export default Notifications;