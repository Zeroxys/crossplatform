import React, {Component} from 'react';
import logoGigaaa from '../../../public/images/LifeIsGigaaa.png'
import volumeOff from '../../../public/images/volume_off.png'
import volumeUp from '../../../public/images/volume_up.png'
import './Welcome.css'

export default class Welcome extends Component {

    constructor(){
        super()
        this.state = {
            volume : true,
            phrases : [
                'I have something to tell you', 
                'Hi, I am gigaaa Assistant.',
                'I will be happy to become your new life companion and assist you with all kinds of tasks', 
                "All you have to do is speak to me. First, let's see what I can do for you."
                
            ],
            phrase : '',
        };

        this.count = 0
        this.volumeSet = this.volumeSet.bind(this);
        this.timer = this.timer.bind(this);
    }

    volumeSet(){
        this.setState(prevState => {
            return {
                volume : !prevState.volume
            }
        })
    }

    timer() {

        if(this.count < this.state.phrases.length) {
            console.log(this.state.phrases[this.count])

            this.setState({phrase : this.state.phrases[this.count]})

            this.count++   
        }

        setTimeout( this.timer, 3000)
    }

    componentDidMount() {
        this.timer()
    }

    render() {

        let volumeIcon = this.state.volume ? <img src={volumeOff}/> : <img src={volumeUp}/>

        return (
            <div className="welcomeContent" onClick={ () => this.volumeSet() }>
                <h1>{this.state.phrase}</h1>
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




    /*function timer() {
        if(i < words.length) {
            ++i
            console.log(words[i])
            setWords(word = words[i])
            setTimeout(timer, 3000);
        }
    }

    timer()*/


    /*var ary = ['kevin', 'mike', 'sally'];

    var offset = 0;

    ary.forEach(function(person){

      setWords(word = person)

      setTimeout(function(){
        console.log(person);
      }, 5000 + offset);

     offset += 5000;
    });*/

}