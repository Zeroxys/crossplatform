import React from 'react';
import NewUserForm from './NewUser';
import LogInUser from './LogInUser'
import ResetPasswordForm from './ResetPasswordForm'
import './Login.css';


export default function LoginForm(props) {
  
  var formType = ''

  if(props.montCreateUser) {
    formType = <NewUserForm 
                  showPassword={props.showPassword} 
                  setPassword={props.setPassword}/>
  } else if(props.montForgotPassword) {  
      formType = <ResetPasswordForm
                    showLoginForm = {props.showLoginForm}/>
  }else{  
      formType = <LogInUser
                    user = {props.user}
                    password = {props.password}
                    sendFormLogIn = {props.sendFormLogIn}
                    userSetPassword = {props.userSetPassword}
                    userSetLogIn = {props.userSetLogIn}
                    setForgotPassword = {props.setForgotPassword}
                    showPassword={props.showPassword} 
                    setPassword={props.setPassword}  
                    mountNewAcount = {props.mountNewAcount} />
  }

  return (
    <div className="loginForm">
      {formType}
    </div>
  )
}
