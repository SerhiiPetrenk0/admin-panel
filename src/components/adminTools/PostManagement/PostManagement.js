import React, { Component } from "react";
import DropDown from "../List/DropDown"
import { LastDays, SelectAPage, PostsList } from "../List/DropDownList";
import { SearchComponent } from "../../other/component/SearchComponent";
import { TableComponent } from "../../other/table/TableComponent";
import { PMHeadrList } from "../../other/table/tableList";
import { PostManagementList } from "./PostManagementList";
import { Modal } from "../../other/Modal/Modal";

import './PostManagment.css'
class PostManagement extends Component {
    state = {
        modalActive: false
    }
    changeModalActive(toogle){
        this.setState({
            modalActive : toogle
        })
    }

    render() {
        const { modalActive } = this.state
        return (
                <div className="PostManagement-content-container">
                    <Modal active={modalActive} setActive={this.changeModalActive.bind(this)} />
                    <div className="PostManagement-content-container-inner">
                        <div  className="Header-filter">
                            <DropDown nameDropDown="" listDropDown={LastDays} />
                            <DropDown nameDropDown="" listDropDown={SelectAPage} />
                            <DropDown nameDropDown="" listDropDown={PostsList} />
                            <SearchComponent />
                        </div>

                        
                            <TableComponent 
                            contentList={PostManagementList} 
                            headerList={PMHeadrList} 
                            CustomVariant="PostManagement" 
                            setActive={this.changeModalActive.bind(this)}  
                            />
                        

                    </div>
                </div>
        );
    }
}

export default PostManagement;