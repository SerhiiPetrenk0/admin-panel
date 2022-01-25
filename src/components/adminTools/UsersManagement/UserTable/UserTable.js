import React from "react";
import { UserList } from "./UsersManagementList";

export const UserTable = () => {

    const tableBody = UserList.map((item)=>(
    <tr key={item.id}>
        <td>{item.Name.value}</td>
        <td>{item.Username.value}</td>
        <td>{item.Phone.value}</td>
        <td className="AccountStatus">{item.AccountStatus.value}</td>
        <td className="RegistrationDate">{item.RegistrationDate.value}</td>                   
    </tr>
        
    ))

    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <td>{UserList[0].Name.title}</td>
                    <td>{UserList[0].Username.title}</td>
                    <td>{UserList[0].Phone.title}</td>
                    <td>{UserList[0].AccountStatus.title}</td>
                    <td>{UserList[0].RegistrationDate.title}</td>
                    </tr>
                </thead>
                <tbody>
                        {tableBody}
                </tbody>
            </table>
        </div>
    )
}