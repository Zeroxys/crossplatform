import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewUserForm from './NewUser';
import { faEyeSlash, faEye, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Login.css';


export default function LoginForm(props) {

  let eyeIcon = props.showPassword ?  <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>
  
  let formType = props.montCreateUser ? <NewUserForm /> : (<form>
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
</form>   )

  return <div className="loginForm">
    {formType}

    <div className="newAccountContent">
      <span className="line"></span>
      <p>Forgot Your Password?</p>
      <p>New to gigaaa? Create New Account <span onClick={() => props.mountNewAcount()}><FontAwesomeIcon icon={faChevronRight}/> </span> </p>
    </div>

  </div>
}
