import React from "react"
import { CustomButton } from "./CustomButton"
import { InputFile } from "./InputFile"
import { InputShowHide } from "./InputShowHide"
import './PostForm.css'

export const PostForm = (props) => {
    const { setActive } = props

    return(
        <div className="CreateAPost-content2-inner">
            <InputFile />

            <div className="Post-Title">
                <InputShowHide placeholder="Example@gmail.com" />
            </div>

            <div className="Post-Title">
                <div className="PostTitleName">Post Discription</div>
                <textarea className="PostDiscriptionView" placeholder='Sleep meditation for your relax ' />
            </div>
            <CustomButton NameButton="Save post" setActive={setActive} />

        </div>
    )
}