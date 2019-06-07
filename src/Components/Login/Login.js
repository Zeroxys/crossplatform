import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import './Login.css';



export default function LoginForm(props) {

  let [show, setShow] = useState('false')

  let eyeIcon = props.showPassword ?  <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>

  console.log(props)

  return <div className="loginForm">
    <form>
        <label htmlFor="username">Username / Email</label>
        <input id="username" type="text"/>


          <label htmlFor="password">
            Password 
            <span className="passwordEye" onClick={(e) => props.setPassword(e)}>
              {eyeIcon}
            </span>
          </label>
          <input id="password" type={props.showPassword ? "text" : "password"}/>

        <div className="checkContent">
          <input id="checkRemember" type="checkbox" name="Remember" value="Remember"/>
          <span className="checkmark"></span>
          <label htmlFor="checkRemember">Remember</label>
        </div>

        <input type="submit" value="Sign In"></input>


    </form>   
    
    {/*<div className="newAccountContent">
      <span className="line"></span>
      <span>Forgot Your Password?</span>
      <span>New to gigaaa? Create New Account</span>
    </div>*/}

  </div>
}
