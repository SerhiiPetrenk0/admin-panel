import React from "react";
import '../../src/components/adminTools/adminToolsGlobal.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
  } from "react-router-dom";
import '../components/adminTools/adminToolsGlobal.css'
import Login from "../components/login/Login";
import { NotFound } from "../components/other/notFound/NotFound";
import { NavPanel } from "../components/adminTools/navPanel/NavPanel";
import CreateAPost from "../components/adminTools/CreateAPost/CreateAPost";
import PostManagement from "../components/adminTools/PostManagement/PostManagement";
import Settings from "../components/adminTools/Settings/Settings";
import Notifications from "../components/adminTools/Notifications/Notifications";
import CreateAndManage from "../components/adminTools/CreateAndManage/CreateAndManage"
import UsersManagement from "../components/adminTools/UsersManagement/UsersManagement"


const AdminRouter = () => {

        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Login />} />

                    <Route path='/Content/*' element={<ContentRouter />} > 
                        <Route index path='Create_a_post' element={<CreateAPost />} />
                        <Route path='Post_management' element={<PostManagement />} />
                        <Route path='Create_and_manage' element={<CreateAndManage />} />
                        <Route path='Users_management' element={<UsersManagement />} />
                        <Route path='Settings' element={<Settings />} />
                        <Route path='Notifications' element={<Notifications />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
            
        );

}
const ContentRouter = () => {

    return(
        <div className="adminToolsGlobal">
        <NavPanel />
            <Outlet />
        </div>
    )
}

export default AdminRouter;

