import React from 'react';
import iconGigaaa from '../../../../public/images/gigaaalogoIcon.png'

export default function Chat () {
    return (
        <div className="speech">
            <img style={{width:'15%'}} src={iconGigaaa}></img>
            <div className="speech-bubble">
                <p>It is equal to 627.</p>
            </div>
        </div>
    )
}
