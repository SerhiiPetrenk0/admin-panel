import * as All  from '../../../icon/navIcon';

import { NotificationsList } from "../Notifications/NotificationSend/NotificationSendList"

export const LinksNavPanel = [
    {
        "id"   : "1",
        "name" : "Create a post",
        "link" : "/Content/Create_a_post",
        "icon"  : <All.CreatePostIcon />,
    },
    {
        "id"   : "2",
        "name" : "Post management",
        "link" : "/Content/Post_management",
        "icon" :  <All.PostManagmentIcon />,
    },
    {
        "id"   : "3",
        "name" : "Create and manage",
        "link" : "/Content/Create_and_manage",
        "icon" :  <All.CreateAndManageIcon />,
    },
    {
        "id"   : "4",
        "name" : "Users management",
        "link" : "/Content/Users_management",
        "icon"  : <All.UserIcon />,
    },
    {
        "id"   : "5",
        "name" : "Settings",
        "link" : "/Content/Settings",
        "icon" :  <All.SettingIcon />,
    },
    {
        "id"   : "6",
        "name" : "Notifications",
        "link" : "/Content/Notifications",
        "icon" :  <All.NotificationIcon />,
        "Notifications": NotificationsList.length
    },

]