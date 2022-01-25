import React, { Component } from "react";
import './CreateAndManage.css'

import { ColorPicker } from "../../other/ColorPicker/ColorPicker";
import { ColorPickerList } from "../../other/ColorPicker/ColorPickerList";
import { SearchComponent } from "../../other/component/SearchComponent";
import { TableComponent } from "../../other/table/TableComponent";
import DropDown from "../List/DropDown";
import { CAManagList } from "../../other/table/tableList";
import { CreateAndManageList } from "./CreateAndManageList";
import { LastDays } from "../List/DropDownList";
import { InputFile } from "../../other/component/InputFile";
import { InputShowHide } from "../../other/component/InputShowHide";
import { CustomButton } from "../../other/component/CustomButton";
import { Modal } from "../../other/Modal/Modal"

class CreateAndManage extends Component {
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
        const ColorPickerItem = ColorPickerList.map((item)=>(
            <ColorPicker key={item.id} colors={item}  />
        ))
        return (
                <div className="CreateAndManage-container">
                    <Modal active={modalActive} setActive={this.changeModalActive.bind(this)} />
                        <div className="CreateAndManage-contant-block1">
                            <div className="Section1">
                                <div>{ColorPickerItem}</div>
                                <div className="SearchComponent"><SearchComponent /></div>
                            </div>
                            <div className="Section2">
                                <DropDown nameDropDown="" listDropDown={LastDays} />
                                <DropDown nameDropDown="" listDropDown={LastDays} />
                                <DropDown nameDropDown="" listDropDown={LastDays} />
                            </div>
                            <div className="Section3">
                                <TableComponent 
                                contentList={CreateAndManageList} 
                                headerList={CAManagList} 
                                CustomVariant = "CreateAndManage" 
                                setActive={this.changeModalActive.bind(this)}
                                />
                            </div>
                        </div>
                        <div className="CreateAndManage-contant-block2">
                            <InputFile />
                            <InputShowHide  placeholder="Beginning meditation"  title="Create name for Category*" />
                            <InputShowHide  placeholder="Beginning meditation"  title="Create Subtitle name" />
                            <DropDown nameDropDown="Choose Category place*" listDropDown={LastDays} />
                            <div className="PostTitleName">Post Discription</div>
                            <textarea className="PostDiscriptionView" placeholder='Sleep meditation for your relax ' />
                            <CustomButton setActive={this.changeModalActive.bind(this)} NameButton="Save and publish" />
                    </div>
                </div>
        );
    }
}

export default CreateAndManage;