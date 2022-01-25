import React, {useState} from "react";
import {ReactComponent as EyeOff} from '../../../icon/eye_off.svg'
import {ReactComponent as EyeOn} from '../../../icon/eye_on.svg'

export const InputShowHide = (props) => {
    const [ postTitleShow, setPostTitleShow ] = useState(true)
    const [ postTitleValue, setPostTitleValue ] = useState('')
    const { title, placeholder } = props
    const PostTitleValue = (event) => {
        setPostTitleValue(event.target.value)
    }

    return(<>
        { title ? <div className="PostTitleName">{title}</div> : <div className="PostTitleName">Post title</div>}
        <div className="input-pass">
            <input
            type={postTitleShow ? 'password' : 'text'}
            onChange={(event) => PostTitleValue(event)} 
            value={postTitleValue} 
            id='Password' 
            placeholder={placeholder}
            className="PostTitleView"
            />
            {postTitleShow ? <EyeOff className="eyeOff" onClick={() => setPostTitleShow(!postTitleShow)} /> : <EyeOn className="eyeOff" onClick={() => setPostTitleShow(!postTitleShow)} />}
     </div>
     </>
    )
}