import React from "react";

import { InputFile } from "../component/InputFile";
import CheckBoxBlock from "../component/CheckBoxBlock";
import { InputShowHide } from "../component/InputShowHide";
import DropDown from "../../adminTools/List/DropDown";
import { CustomButton } from "../component/CustomButton";

import { SelectAPage } from "../../adminTools/List/DropDownList";
import { PostsList } from "../../adminTools/List/DropDownList";

export const InformationConteiner1 = (props) => {
    const {SHStatus,setActive} = props
// <div className={`Information-conteiner showhide`}>
    return(
        <div className={`Information-conteiner ${!SHStatus && 'showhide'} `}>
                <div className="Information-conteiner-block1">
                    <div className="Information-conteiner-photo">Photo</div>
                    <InputFile />
                    <CheckBoxBlock />
                </div>
                <div className="Information-conteiner-block2">

                    <InputShowHide  placeholder="Before Bed Routines" />
                        <div className="PostTitleName">Post Discription</div>
                        <textarea className="PostDiscriptionView" placeholder='Learn the fundamental technuques of meditation' />

                </div>
                <div className="Information-conteiner-block3">
                    <DropDown nameDropDown="Select a page" listDropDown={SelectAPage} />
                    <DropDown nameDropDown="Select a page" listDropDown={SelectAPage} />
                    <DropDown nameDropDown="Category Choise" listDropDown={PostsList} />
                    <CustomButton NameButton="Save changes" setActive={setActive} />
                </div>
            </div>
    )
}
export const InformationConteiner2 = (props) => {
    const {SHStatus, setActive} = props
// <div className={`Information-conteiner showhide`}>
    return(
        <div className={`Information-conteiner ${!SHStatus && 'showhide'} `}>
                <div className="Information-conteiner-block1">
                    <div className="Information-conteiner-photo">Photo</div>
                    <InputFile />
                    <CheckBoxBlock />
                </div>
                <div className="Information-conteiner-block2">

                    <InputShowHide placeholder="Beginning meditation" />
                        <div className="PostTitleName">Post Discription</div>
                        <textarea className="PostDiscriptionView" placeholder='Learn the fundamental technuques of meditation' />
                        <DropDown nameDropDown="Select a page" listDropDown={SelectAPage} />
                        <DropDown nameDropDown="Category Choise" listDropDown={PostsList} />
                        <div className="InformationConteiner2-CustomButton">
                            <CustomButton NameButton="Save changes" setActive={setActive} />
                        </div>
                        
                </div>
            </div>
    )
}