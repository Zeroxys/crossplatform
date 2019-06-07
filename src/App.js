import React, {Component} from 'react';
import {} from 'react-router-dom'
import logoLifeIsGigaaa from '../public/images/gigaaalogo_white.png';
import LoginForm from './Components/Login/Login';
import Footer from './Components/Login/Footer/Footer.js'
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
      montForm :  false, // change true for show loginForm
      showPassword : false,
      showArrowLogin: false
    }
    this.pharasesTimer = this.pharasesTimer.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.showArrow = this.showArrow.bind(this);
    this.showLoginForm = this.showLoginForm.bind(this);
    this.mountNewAcount = this.mountNewAcount.bind(this);
  }

  mountNewAcount() {
    console.log('mount create new acount component ! ');
  }

  showLoginForm() {
    this.setState( (prevState) => {
      return {
        montForm : prevState.montForm = true
      }
    })
  }

  showArrow() {
    this.setState( (prevState) => {
      return {
        showArrowLogin : prevState.showArrowLogin = true
      }
    })
  }

  setPassword(e) {
    let el = document.getElementById('password')
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

    let loginForm = this.state.montForm ? <LoginForm mountNewAcount={this.mountNewAcount} showPassword = {this.state.showPassword} setPassword={this.setPassword}/> : null;

    return (
      <div className="mainContent">
        <img src={logoLifeIsGigaaa} className="logoGigaaa" alt=""></img>
        {loginForm}
        <Footer 
            showArrow={this.showArrow} 
            showArrowLogin={this.state.showArrowLogin}
            showLoginForm={this.showLoginForm}/>

      </div>
    );
  }

}


