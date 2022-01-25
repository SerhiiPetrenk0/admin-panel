import React, { useState, useEffect, useRef  } from "react";
import Icon_arrow from '../../../icon/Icon_arrow.png'
import './DropDown.css'

const DropDown = (props) => {
    const { nameDropDown, listDropDown } = props

    const [ dropDownToggle, setDropDownToggle ] = useState(false)
    const [ selectItem, setSelectItem ] = useState('')
    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setDropDownToggle (false);
        }
    };
    const openDropDown = (event) => {
         setDropDownToggle(!dropDownToggle)


    }


    const item = listDropDown.map(item => (
        <div key={item.id} className="DropDown-item" onClick={()=> {setSelectItem(item.name); setDropDownToggle(!dropDownToggle)}}>{item.name}</div>
    ))




    return(
        <div className="DropDown-continer"  ref={ref} >
            <div className="DropDown-name">
            {nameDropDown}
            </div>
            <div className="DropDown-view" onClick={(event)=> openDropDown(event)}>
                {selectItem ? selectItem : listDropDown[0].name}
                <img className={`${!dropDownToggle && 'Icon_arrow'}`} src={Icon_arrow} alt='arrow' />
            </div>
            <div  className={`DropDown-list ${(!dropDownToggle) && 'DropDown-list-toggle'}`}>
                   {item}
                </div>
        </div>
    );
}


export default DropDown;