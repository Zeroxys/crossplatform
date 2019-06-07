import React from 'react';
import NewUserForm from './NewUser';
import LogInUser from './LogInUser'
import './Login.css';


export default function LoginForm(props) {

  let formType = props.montCreateUser ? <NewUserForm showPassword={props.showPassword} setPassword={props.setPassword}/> : <LogInUser showPassword={props.showPassword} setPassword={props.setPassword}  mountNewAcount = {props.mountNewAcount} />

  return (
    <div className="loginForm">
      {formType}
    </div>
  )
}
