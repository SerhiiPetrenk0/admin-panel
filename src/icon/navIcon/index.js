import React from "react";
import { useLocation, useParams } from "react-router-dom";
import CreatePostActiveIcon from "./CreatePostActive.png"
import CreatePostDefaultIcon from "./CreatePostDefault.png"
import PostManagmentSelectedIcon from "./PostManagmentSelected.png"
import PostManagmentDefaultIcon from "./PostManagmentDefault.png"
import CreateAndManageDefaultIcon from "./CreateAndManageDefault.png"
import CreateAndManageSelectedIcon from "./CreateAndManageSelected.png"
import UserDefaultIcon from "./UserDefault.png"
import UserSelectedIcon from "./UserSelected.png"
import SettingActiveIcon from "./SettingActive.png"
import SettingDefaultIcon from "./SettingDefault.png"
import NotificationDefaultIcon from "./NotificationDefault.png"
import NotificationSelectedIcon from "./NotificationSelected.png"


export const CreatePostIcon = () => {
    const location = useLocation();
    return(<>
        {
        location.pathname === "/Content/Create_a_post" 
        ? 
        <img src={CreatePostActiveIcon} alt="CreatePostActiveIcon" /> 
        : 
        <img src={CreatePostDefaultIcon} alt="CreatePostActiveIcon" />
        }
        </>
    )
}
export const PostManagmentIcon = () => {
    const location = useLocation();
    return(<>
        {
        location.pathname === "/Content/Post_management" 
        ? 
        <img src={PostManagmentSelectedIcon} alt="PostManagmentSelectedIcon" /> 
        : 
        <img src={PostManagmentDefaultIcon} alt="PostManagmentDefaultIcon" />
        }
        </>
    )
}
export const CreateAndManageIcon = () => {
    const location = useLocation();
    return(<>
        {
        location.pathname === "/Content/Create_and_manage" 
        ? 
        <img src={CreateAndManageSelectedIcon} alt="CreateAndManageSelectedIcon" /> 
        : 
        <img src={CreateAndManageDefaultIcon} alt="CreateAndManageDefaultIcon" />
        }
        </>
    )
}
export const UserIcon = () => {
    const location = useLocation();
    return(<>
        {
        location.pathname === "/Content/Users_management" 
        ? 
        <img src={UserSelectedIcon} alt="UserSelectedIcon" /> 
        : 
        <img src={UserDefaultIcon} alt="UserDefaultIcon" />
        }
        </>
    )
}
export const SettingIcon = () => {
    const location = useLocation();
    return(<>
        {
        location.pathname === "/Content/Settings" 
        ? 
        <img src={SettingActiveIcon} alt="SettingActiveIcon" /> 
        : 
        <img src={SettingDefaultIcon} alt="SettingDefaultIcon" />
        }
        </>
    )
}
export const NotificationIcon = () => {
    const location = useLocation();
    return(<>
        {
        location.pathname === "/Content/Notifications" 
        ? 
        <img src={NotificationSelectedIcon} alt="NotificationSelectedIcon" /> 
        : 
        <img src={NotificationDefaultIcon} alt="NotificationDefaultIcon" />
        }
        </>
    )
}