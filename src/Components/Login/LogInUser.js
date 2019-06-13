import React, {Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye, faChevronRight, faSpinner } from '@fortawesome/free-solid-svg-icons';


import {
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

export default function LogInUser(props) {
    let eyeIcon = props.showPassword ?  <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>
    let isLogin = props.isLogin ?  <FontAwesomeIcon icon={faSpinner} spin/> : <input type="submit" value="Sign In" onClick={props.sendFormLogIn}></input>

    return (
        <Fragment>
            <form>
                
                <label htmlFor="username">Username / Email</label>

                <input id="username" type="text" value={props.user} onChange={props.userSetLogIn}/>

                <label htmlFor="password">
                    Password 
                    <span className="passwordEye" onClick={(e) => props.setPassword(e)}>
                    {eyeIcon}
                    </span>
                </label>

                <input id="password" type={props.showPassword ? "text" : "password"} value={props.password}  onChange={props.userSetPassword}/>
                <div className="checkContent">
                <input id="checkRemember" type="checkbox" name="Remember" value="Remember"/>
                <span className="checkmark"></span>
                <label >{props.errorMessage}</label>                
                <label htmlFor="checkRemember">Remember</label>
                </div>

                {isLogin}
            </form>

            <div className="newAccountContent">
            <span className="line"></span>
            <p onClick={ () => props.setForgotPassword() }>Forgot Your Password?</p>
            <p>New to gigaaa? Create New Account <span onClick={() => props.mountNewAcount()}><FontAwesomeIcon icon={faChevronRight}/> </span> </p>
            </div>

            
        </Fragment>
    )
}

