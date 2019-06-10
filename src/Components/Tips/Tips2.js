import React from 'react';
import After from '../../../public/images/after.png';
import './Tips.css'

export default function Tips () {
    return (
        <div className="Tips2MainContent">
            <div className="infoContainer">
                <h2>Ask About Anything</h2>
                <p className="subtitle">Access information easily, get instant advice and tips</p>

                <img src={After} className="Musica"></img>

                <p className="infoTips">"Different ways to tie a tie."</p>
                <p className="infoTips">"How do I prepare a Bloody Mary?</p>
                <p className="infoTips"> "What should I watch on Netflix?"</p>
            </div>
        </div>
    )
}
