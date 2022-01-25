import React, { Component } from "react";
import DropDown from "../List/DropDown";
import CheckBoxBlock from "../../other/component/CheckBoxBlock";
import { DataTimeBlock } from "../../other/component/DataTimeBlock";
import { PostsList } from "../List/DropDownList";
import { SelectAPage } from "../List/DropDownList";
import { CategoryFor } from "../List/DropDownList";
import { Modal } from "../../other/Modal/Modal";
import { CustomButton } from "../../other/component/CustomButton";
import { PostForm } from "../../other/component/PostForm";

import './CreateAPost.css'
class CreateAPost extends Component {
    state = {
        modalActive: false
    }
    changeModalActive(toogle){
        this.setState({
            modalActive : toogle
        })
    }
//
    render() {
        const { modalActive } = this.state
        return (
                <div className="CreateAPost-content-container">
                    <Modal active={modalActive} setActive={this.changeModalActive.bind(this)} />
                    <div className="CreateAPost-content1">
                        <div className="CreateAPost-content1-block1">
                            <DropDown nameDropDown="Select a page" listDropDown={SelectAPage} />
                            <DropDown nameDropDown="Category Choise" listDropDown={PostsList} />
                                <CheckBoxBlock />
                                <CustomButton NameButton='Save post' setActive={this.changeModalActive.bind(this)}  />
                        </div>
                        <div className="CreateAPost-content1-block2">
                            <DropDown nameDropDown="Category " listDropDown={CategoryFor} />
                            <DropDown nameDropDown="Category " listDropDown={PostsList} />
                            <DataTimeBlock customVariant="CreateAPost" />
                        </div>
                    </div>
                    <div className="CreateAPost-content2">
                        <PostForm  setActive={ this.changeModalActive.bind(this) } />
                    </div>
                </div>
                

        );
    }
}

export default CreateAPost;