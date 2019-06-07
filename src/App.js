import React, {Component} from 'react';
import {} from 'react-router-dom'
import background from '../public/images/LifeIsGigaaa.png';
import LoginForm from './Components/Login/Login';
import iconGigaaa from '../public/images/gigaaalogo-kit_big_android_app_icon.png'
import './App.css';
//import Helpers from './Helpers/Helpers';

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
      montForm :  true,
      showPassword : false
    }
    this.pharasesTimer = this.pharasesTimer.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setPassword(e) {

    let el = document.getElementById('password')

    console.log(el)

    this.setState( (prevState) => {
      return {
        showPassword : !prevState.showPassword
      }
    })
  }

  pharasesTimer(id) {
    //let phrasesWrapper = document.getElementById(id);
    //let phrasesContent = phrasesWrapper.innerHTML;
    let counter = 0;


    setInterval( () => {
      
      if(!this.state.addPhrase) {
        this.state.phrases.map(el => {
        })
      }else{
        this.state.phrases.map(el => {
        })
      }

    }, 1200)

    /*setInterval(() => {
      
      if(phrasesContent.length > 0 && !this.state.addPhrase) {
        phrasesWrapper.innerHTML =  ''
        phrasesContent = phrasesWrapper.innerHTML
      }else {
        this.setState({
          addPhrase : true
        })
      }

      if(this.state.addPhrase) {

        if(phrasesContent.length < this.state.phrases.length) {

          phrasesWrapper.innerHTML = this.state.phrases[counter]
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
    }, 1200);*/

  }

  componentDidMount() {
    //if(navigator.userAgent.match(/Android/i)) console.log('android')
    //if(navigator.userAgent.match(/Windows/i)) console.log('Windows')

    this.pharasesTimer("word")
  }

  render() {

    //console.log(Helpers)

    let loginForm = this.state.montForm ? <LoginForm showPassword={this.state.showPassword} setPassword={this.setPassword}/> : null
    return (
      <div className="mainContent">
        <img src={background} className="logoGigaaa" alt=""></img>
        {/*<p>Tap anywhere on the screen if you're not available to listen</p>*/}

        {loginForm}

        <div className="iconContent">
          <img src={iconGigaaa} className="iconGigaaa" alt=""></img>
        </div>

      </div>
    );
  }

}


