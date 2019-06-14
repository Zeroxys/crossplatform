import React from 'react';
import iconGigaaa from '../../../../public/images/gigaaalogoIcon.png'

export default function Chat (props) {


    let isUser = props.isUser ? '' : <img style={{width:'15%'}} src={iconGigaaa}></img>

    return (
        <div className="speech">
            {isUser}
            <div className="speech-bubble">
                <p>It is equal to 627.</p>
            </div>
        </div>
    )
}
