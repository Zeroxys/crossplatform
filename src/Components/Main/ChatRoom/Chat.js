import React from 'react';
import iconGigaaa from '../../../../public/images/gigaaalogoIcon.png'

export default function Chat (props) {


    let isUser = props.isUser ? '' : <img style={{width:'15%'}} src={iconGigaaa}></img>

    return (
        <div className="speech">
            {isUser}
            <div className="speech-bubble">
                <p>is equal to 6</p>
            </div>
        </div>
    )
}
