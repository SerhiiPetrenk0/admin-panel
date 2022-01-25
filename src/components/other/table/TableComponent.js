import React, { useState } from "react";
import './TableComponent.css'
import { Checker } from "../component/Checker";
import {ReactComponent as EditIcon1} from '../../../icon/edit.svg'
import {ReactComponent as EditIcon2} from '../../../icon/trash.svg'
import TitleLogo from '../../../img/imgtitle.png'
import iconArrow from "../../../icon/Icon_arrow.png"

import { InformationConteiner1, InformationConteiner2} from "./InformationConteiner";
export const TableComponent = (props) => {
    const { headerList, contentList, CustomVariant, setActive } = props

    const headList = headerList.map((item)=>(
        <td key={item.id}>{item.title}</td>
    ))

    const bodyList = contentList.map((item)=>(
        <BodyTableItem key={item.id} item={item} CustomVariant={CustomVariant} setActive={setActive} />
        
    ))
    return(
        <table className="Custom-table">
        <thead>
            <tr>
                <td> 
                    <Checker />
                </td>
                {headList}
            </tr>
        </thead>
        <tbody>
                {bodyList}
        </tbody>
    </table>
    )
}


export const BodyTableItem = (props) => {
    const [showhide, setShowhide] = useState(false)
const { item, CustomVariant, setActive } = props
    return(
        <>
        <tr className="contentList">
        <td><Checker /></td>
        <td><img className="TitleLogo" src={TitleLogo} alt="TitleLogo" /></td>
        <td className="PageCategory">
            <div>
                <div className="TitleName">{item.TitleName}</div>
                <div className="Subtitle">{item.Subtitle}</div>
                <div className="ViewAll" onClick={()=> setShowhide(!showhide)}>View all information<img className={!showhide && "ViewAll-img"} src={iconArrow} alt="iconArrow" /></div>
            </div>
        </td>
        {item.PostTitle && <td className="PostTitle">{item.PostTitle}</td>}
        <td className="CategoryChoise">
            <div className="CategoryChoise-position">
                <div className="CategoryChoise-pointer"></div>
                {item.CategoryChoise}
            </div>
        </td>
        {item.DateOfPublication && <td className="DateOfPublication">{item.DateOfPublication}</td>}
        {item.Category &&
         <td>
             <div className="Category">
                {item.Category}
                <div className="EditOrDelete">
                    <div className="EditIcon1"><EditIcon1 /></div>
                    <div className="EditIcon2" ><EditIcon2 /></div>
                </div>
            </div>
         </td>}
        {!item.Category &&<td>
            <div className="EditOrDelete">
                <div className="EditIcon1"><EditIcon1 /></div>
                <div className="EditIcon2" ><EditIcon2 /></div>
            </div>
        </td>}
    </tr>
    <tr>
        <td colSpan="7" className="Information">
            {CustomVariant === "PostManagement" ? <InformationConteiner1 setActive={setActive} SHStatus={showhide} /> : ''}
            {CustomVariant === "CreateAndManage" ? <InformationConteiner2 setActive={setActive} SHStatus={showhide} /> : ''}
            
        </td>
    </tr>
    </>
    )
}