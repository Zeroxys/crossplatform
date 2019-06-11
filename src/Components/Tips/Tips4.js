import React from 'react';
import Fiesta from '../../../public/images/fiesta.png';
import './Tips.css'

export default function Tips () {
    return (
        <div className="Tips4MainContent">
            <div className="infoContainer">
                <h2>Boost Your Social Life</h2>
                <p className="subtitle">Explore activities nearby, meet people and chat safely</p>

                <img src={Fiesta} className="Musica" alt=""></img>

                <p className="infoTips">"Create a GIG called Salsa Night for May 20 in Madrid"</p>
                <p className="infoTips">"Search for GIG's about basketball on June 8th"</p>

            </div>
        </div>
    )
}
