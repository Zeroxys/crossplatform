import React, {Component} from 'react';
import {} from 'react-router-dom'
import logoLifeIsGigaaa from '../public/images/gigaaalogo_white.png';
import LoginForm from './Components/Login/Login';
import Footer from './Components/Footer/Footer.js'
import './App.css';

import Helpers from './Helpers/Helpers';

//https://github.com/kidjp85/react-id-swiper <------ check swiper


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
      montCreateUser : false, // change true for show createUserform
      montForgotPassword : false, // change true for show createUserform
      showPassword : false,
      showArrowLogin: false,


      //When the user login
      name : [],

    }
    

    // =====Methods===== //
    this.pharasesTimer = this.pharasesTimer.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.showArrow = this.showArrow.bind(this);
    this.showLoginForm = this.showLoginForm.bind(this);
    this.mountNewAcount = this.mountNewAcount.bind(this);
    this.setForgotPassword = this.setForgotPassword.bind(this);

    // === Form === //
    this.userSetLogIn = this.userSetLogIn.bind(this);

    //Helpers
    this.helpers = new Helpers()

  }

  userSetLogIn(e) {
    e.persist()
    e.preventDefault();
    this.setState( prevState => {
      return {
        name : prevState.name = e.target.value
      }
    });
  }

  setForgotPassword() {
    this.setState( (prevState) => {
      return {
        montForgotPassword : prevState.montForgotPassword = true
      }
    })
    console.log(this.state.montForgotPassword);
  }

  mountNewAcount() {
    this.setState( (prevState) => {
      return {
        montCreateUser : prevState.montCreateUser = true
      }
    })
    console.log(this.state.montCreateUser);
  }

  showLoginForm() {
    console.log('Regresas al logeo')
    console.log('must show the loginForm', this.state.montForm)
    this.setState( (prevState) => {
      return {
        montForm : !prevState.montForm
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

    console.log(this.state.name)

    this.helpers.apiFetch('api/v1/auth/login', 'POST', {
      email: 'miguelzavalac@gmail.com' || this.state.email,
      password: 'password' || this.state.password  
    })
      .then( (responseJson) => {

        console.log('response ------->', responseJson)

          if (responseJson.success === true) {
              //TODO perform server-side login after registration
              console.log('funciona --->',responseJson)

          } else {

              this.setState({
                  isLoading: false,
                  validationErrors: responseJson.errors
              });
          }

      })
      .catch((error) => {
          console.error('Error ---> ',error);
      });

  }

  render() {
    let loginForm = this.state.montForm ? <LoginForm 
                                              user={this.state.user}
                                              userSetLogIn = {this.userSetLogIn}
                                              showLoginForm = {this.showLoginForm}
                                              montForgotPassword = {this.state.montForgotPassword}
                                              setForgotPassword = {this.setForgotPassword}
                                              montCreateUser = {this.state.montCreateUser}
                                              mountNewAcount={this.mountNewAcount} 
                                              showPassword = {this.state.showPassword} 
                                              setPassword={this.setPassword}/> : 
                                              
                                              <Footer 
                                                showArrow={this.showArrow} 
                                                showArrowLogin={this.state.showArrowLogin}
                                                showLoginForm={this.showLoginForm}/>;

    return (
      <div className="mainContent">
        <img src={logoLifeIsGigaaa} className="logoGigaaa" alt=""></img>
        {loginForm}
      </div>
    );
  }

}


