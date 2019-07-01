import React, {useState} from 'react';
import logoGigaaa from '../../../public/images/LifeIsGigaaa.png'
import volumeOff from '../../../public/images/volume_off.png'
import volumeUp from '../../../public/images/volume_up.png'
import './Welcome.css'



export default function Welcome() {

    let phrases = [
        'I have something to tell you.',
        'Hi, I am gigaaa Assistant.',
        'I will be happy to become your new life companion and assist you with all kinds of tasks.',
        "All you have to do is speak to me. First, let's see what I can do for you."
      ];

    let [volume, volumeSet] = useState(false)
    let volumeIcon = volume ? <img src={volumeOff}/> : <img src={volumeUp}/>


    function timer() {
        if(i <= _self.state.words.length) {
          ++i
          console.log(_self.state.words[i])
  
          _self.setState({word : _self.state.words[i]})
  
          setTimeout(timer, 3000);
        }
    }

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