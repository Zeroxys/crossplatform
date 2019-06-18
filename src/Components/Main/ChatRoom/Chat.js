import React from 'react';
import iconGigaaa from '../../../../public/images/gigaaalogoIcon.png'
import './chat.css'

export default function Chat (props) {


    let isUser = props.isUser ? '' : <img style={{width:'15%'}} src={iconGigaaa}></img>

    const { json } = props

    return (
        <div className="speech">
            {isUser}
            <div className="speech-bubble">
                {
                    // For books
                    json.map( item => <p>
                        <img key = { item.id } src = { item.image } className = "speech_image" />
                        <p className = "text_left">
                            <p> <strong> { item.type_title } - { item.id } </strong> </p>
                            <p> { item.author } - { item.title } - { item.text } </p>
                        </p>
                        <br/>
                        <p>&nbsp;</p>
                    </p>)
                }
                {/* {
                    // For sports
                    json.map( item => <p className = "speech_image_sport_container" >
                        <img key = { item.id } src = { item.image } className = "speech_image_sport" />
                        <div className = "speech_image_sport_text">
                            <h3> { item.title_sport } </h3>
                            <div> { item.date } </div>
                            <div> { item.place } </div>
                            <p>&nbsp;</p>
                        </div>
                    </p> )
                } */}
            </div>
        </div>
    )
}
