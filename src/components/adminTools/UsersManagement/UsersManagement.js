import React, { Component } from "react";
import "./UsersManagement.css"
import { UserTable } from "./UserTable/UserTable";
import { CustomButton } from "../../other/component/CustomButton";
class UsersManagement extends Component {

    render() {
        return (
                <div className="UsersManagement-conteiner">
                    <div className="UsersManagement-conteiner-inner">
                        <div className="header">
                            <div>
                                Users managment
                            </div>
                            <CustomButton NameButton="Download" />
                        </div>
                        <UserTable />
                        <div className="VievMore">
                            <CustomButton NameButton="Viev More" />
                        </div>
                    </div>
                </div>
                
        );
    }
}

export default UsersManagement;