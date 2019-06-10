import React, {useState, Fragment} from 'react';
import Musica from '../../../public/images/musica.png';
import {CSSTransition} from 'react-transition-group'
import './Tips.css'

export default function Tips () {

    const [inProp, setInProp] = useState(false)

    return (
        
<Fragment>

        <CSSTransition>
            <div className="TipsMainContent">
                <div className="infoContainer">
                    <h2>Get it Done Right Away</h2>
                    <p className="subtitle">Helpful services to go through your daily tasks</p>

                    <img src={Musica} className="Musica"></img>

                    <p className="infoTips">"Do I need an umbrella?"</p>
                    <p className="infoTips">"Find a parking spot nearby."</p>
                    <p className="infoTips"> "Play my Reading playlist on Sportify."</p>
                </div>
            </div>
        </CSSTransition>
</Fragment>
    )
}