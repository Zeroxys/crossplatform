import React, {useState} from 'react';
import logoGigaaa from '../../../public/images/LifeIsGigaaa.png'
import volumeOff from '../../../public/images/volume_off.png'
import volumeUp from '../../../public/images/volume_up.png'
import './Welcome.css'

export default function Welcome() {

    let [volume, volumeSet] = useState(false)

    let volumeIcon = volume ? <img src={volumeOff}/> : <img src={volumeUp}/>

    return (
        <div className="welcomeContent" onClick={ () => volumeSet(!volume) }>
            <h1>words</h1>
            <img src={logoGigaaa} className="welcomeLogo"/>


            <div className="volumeSettings">
                {volumeIcon} 
                
                <div className="textContent">
                    <p>Tap to Unmute </p> 
                    <p>or</p>
                    <p>Tap anywhere on the screen if you're not available to listen</p>
                </div>
            </div>

        </div>
    )
}