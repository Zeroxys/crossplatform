import React from 'react';
import NewUserForm from './NewUser';
import LogInUser from './LogInUser'
import ResetPasswordForm from './ResetPasswordForm'
import './Login.css';


export default function LoginForm(props) {
  
  console.log(props.montForgotPassword)
  var formType = ''

  if(props.montCreateUser) {
    formType = <NewUserForm 
              showPassword={props.showPassword} 
              setPassword={props.setPassword}/>
  } else if(props.montForgotPassword) {
    formType = <ResetPasswordForm/>
  }else{
      formType = <LogInUser 
                    setForgotPassword = {props.setForgotPassword}
                    showPassword={props.showPassword} 
                    setPassword={props.setPassword}  
                    mountNewAcount = {props.mountNewAcount} />
  }

  /*let formType = props.montCreateUser ? <NewUserForm 
                                            showPassword={props.showPassword} 
                                            setPassword={props.setPassword}/> : 
                                            
                                            <LogInUser 
                                                setForgotPassword = {props.setForgotPassword}
                                                showPassword={props.showPassword} 
                                                setPassword={props.setPassword}  
                                                mountNewAcount = {props.mountNewAcount} />*/

  return (
    <div className="loginForm">
      {formType}
    </div>
  )
}
