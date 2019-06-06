import React, {Component} from 'react';
import {} from 'react-router-dom'
import background from '../public/images/LifeIsGigaaa.png';
import './App.css';
import LoginForm from './Components/Login/Login';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      phrases : [
        'I have something to tell you.',
        'Hi, I am gigaaa Assistant.',
        'I will be happy to become your new life companion and assist you with all kinds of tasks.',
        "All you have to do is speak to me. First, let's see what I can do for you."
      ],
      addPhrase : false,
      montForm :  false
    }
    this.pharasesTimer = this.pharasesTimer.bind(this);
  }



  pharasesTimer(id) {
    let phrasesWrapper = document.getElementById(id);
    let phrasesContent = phrasesWrapper.innerHTML;
    let counter = 0;
    
    setInterval(() => {
      
      if(phrasesContent.length > 0 && !this.state.addPhrase) {
        phrasesWrapper.innerHTML =  ''
        phrasesContent = phrasesWrapper.innerHTML
        console.log(phrasesContent)
      }else {
        this.setState({
          addPhrase : true
        })
      }

      if(this.state.addPhrase) {
        //console.log('agregar una frase')

        if(phrasesContent.length < this.state.phrases.length) {

          phrasesWrapper.innerHTML = this.state.phrases[counter]
          //console.log('valor --> ', phrasesWrapper.length)
          phrasesContent = phrasesWrapper.innerHTML

        }else {
          if(counter < this.state.phrases.length) {
            counter++
          }

          this.setState({
            addPhrase : false
          })
        }

        if(counter === this.state.phrases.length) {
          counter = 0

          this.setState({
            montForm : true
          })
        }
      }
    }, 1200);

  }

  componentDidMount() {
    if(navigator.userAgent.match(/Android/i)) console.log('android')
    if(navigator.userAgent.match(/Windows/i)) console.log('Windows')
    this.pharasesTimer("word")
  }

  render() {  

    let loginForm = this.state.montForm ? <LoginForm/> : null

    return (
      <div className="mainContent">
        <span >
          <p id="word"></p>
        </span>
        <img src={background} className="logoGigaaa" alt=""></img>
        {loginForm} 
        <p>Tap anywhere on the screen if you're not available to listen</p>
      </div>
    );
  }

}


