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
                    json.map( (item, i) => <div key={i} className="speech_image_book_container">
                        <img src= { item.image } className = "speech_image_book" />
                        <div className="speech_image_book_text">
                            <h3> { item.type_title } </h3>
                            <h4> { item.author } - { item.title } </h4> 
                             <h4> { item.text } </h4> 
                        </div>
                  </div>)
                }
                {/* {
                    // For sports
                    json.map( item => <div class="speech_image_sport_container">
                        <img src= { item.image } className = "speech_image_sport" />
                        <div class="speech_image_sport_text">
                            <p> { item.title_sport } </p>
                            <p> { item.date } </p>
                            <p> { item.place } </p>
                        </div>
                  </div>) } */}
                  {/* {
                    // For sports
                    json.map( item => <div class="speech_image_video_container">
                        <img src= { item.video_image } className = "speech_image_video" />
                        <div class="speech_image_video_text">
                            <p> <h3> { item.video_provider } </h3> </p>
                            <p> <h5> { item.video_author } - { item.video_title } </h5> </p>
                            <p> <i style = { { color: '#A6A8BA', fontSize: '25' } } > { item.video_date } </i> </p>
                        </div>
                  </div>) } */}
            </div>
        </div>
    )
}
