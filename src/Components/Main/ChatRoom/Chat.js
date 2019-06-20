import React, { useState } from 'react';
import iconGigaaa from '../../../../public/images/gigaaalogoIcon.png'
import like_coment from '../../../../public/images/like_coment.png'
import dislike_coment from '../../../../public/images/dislike_coment.png'
import './chat.css'

export default function Chat (props) {


    let isUser = props.isUser ? '' : <img style={{width:'10%', marginLeft: '5%'}} src={iconGigaaa}></img>

    const { json } = props
    const [show_likes, setShow_likes] = useState(false)
    const [like, setLike] = useState('#52FFEC')
    const [dislike, setDislike] = useState('#FF155A')

    const dar_like = () => {
        setLike('#52FFEC')
        setDislike('#A6A8BA')
    }

    const dar_dislike = () => {
        setLike('#A6A8BA')
        setDislike('#FF155A')
    }

    return (
        <div className="speech">
            {isUser}
            <div className="speech-bubble" onClick = { () => setShow_likes( !show_likes) } >
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
                  {
                      show_likes ? (
                        <div>
                            <div className = "like_coment" onClick = { () => dar_like() } > <img src = { like_coment } style = { { width: '100%', height: '100%', border: `2px solid ${like}`, borderRadius: '100%' } } /> </div>
                            <div className = "dislike_coment" onClick = { () => dar_dislike() } > <img src = { dislike_coment } style = { { width: '100%', height: '100%', border: `2px solid ${dislike}`, borderRadius: '100%' } } /> </div>
                        </div>
                      ): null
                  }
            </div>
        </div>
    )
}
