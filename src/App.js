import React, {Component} from 'react';
//import logoLifeIsGigaaa from '../public/images/gigaaalogo_white.png';
import logoLifeIsGigaaa from '../public/images/LifeIsGigaaa.png';
import LoginForm from './Components/Login/Login';
import Footer from './Components/Footer/Footer.js';
import {Redirect} from "react-router-dom";

// Tips and tutorials must be show the first time

import './App.css';
import Helpers from './Helpers/Helpers';

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
      montForm :  true, // change true for show loginForm
      montCreateUser : false, // change true for show createUserform
      montForgotPassword : false, // change true for show createUserform
      showPassword : false,
      showArrowLogin: false,

      welcomeComponent : false,

      isLogin : false,

      //When the user login
      name : '',
      password : '',

      errorMessage : '',

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
    this.userSetPassword = this.userSetPassword.bind(this);
    this.sendFormLogIn = this.sendFormLogIn.bind(this);

    //Helpers
    this.helpers = new Helpers()

  }

  userSetLogIn(e) {
    e.persist()
    let value = e.target.value
    this.setState( prevState => {
      return {
        name : prevState.name = value
      }
    });
  }

  userSetPassword(e) {
    e.persist()
    let value = e.target.value
    this.setState( prevState => {
      return {
        password : prevState.password = value
      }
    })
  }


  sendFormLogIn(e){
    e.preventDefault();

    this.helpers.apiFetch('api/v1/auth/login', 'POST', {
      email: this.state.name,
      password: this.state.password
    })
      .then( (responseJson) => {
           if(!responseJson.message) {
            //console.log('api response --->', responseJson)

            //Set localStorage
            window.localStorage.setItem('user', JSON.stringify(responseJson))

            this.setState(prevState => {
              return {
                isLogin : prevState.isLogin = true
              }
            })
          }else {
            console.log('api error --->', responseJson)
            this.setState( prevState => {
              return {
                errorMessage : prevState.errorMessage = responseJson.message
              }
            })
          }

          console.log(this.state.isLogin)
      })

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

  }

  componentWillMount() {

    //If user set LocalStorage
    if(window.localStorage.getItem('user')) {
      window.location.href= '/user'
      return <Redirect to={'/user'}></Redirect>
    }

    console.log(window.localStorage.getItem('user'))
  }

  componentDidMount() {
    window.localStorage.getItem('welcome')
  }

  componentWillUnmount() {
    console.log('adios welcome')
  }

  render() {

    let loginForm = this.state.montForm ? <LoginForm
                                              isLogin = {this.state.isLogin}
                                              user = {this.state.user}
                                              password = {this.state.password}
                                              sendFormLogIn = {this.sendFormLogIn}
                                              userSetPassword={this.userSetPassword}
                                              userSetLogIn = {this.userSetLogIn}
                                              errorMessage = {this.state.errorMessage}


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
                                          
    return this.state.isLogin ? <Redirect to={'/user'}></Redirect> : (
      <div className="mainContent">
        <img src={logoLifeIsGigaaa} className="logoGigaaa" alt=""/>
        {loginForm}
      </div>
    );

  }

}


