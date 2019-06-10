import React from 'react';
import Hogar from '../../../public/images/hogar.png';
import './Tips.css'

export default function Tips () {
    return (
        <div className="Tips3MainContent">
            <div className="infoContainer">
                <h2>Manage Your Entire Smart Home</h2>
                <p className="subtitle">Simplify the control of your devices in one.</p>

                <img src={Hogar} className="Musica"></img>

                <p className="infoTips">"Set volume to 6 on smart TV."</p>
                <p className="infoTips">"Switch on the kitchen heater."</p>
                <p className="infoTips"> "Turn off the lights in my bedroom."</p>
            </div>
        </div>
    )
}
