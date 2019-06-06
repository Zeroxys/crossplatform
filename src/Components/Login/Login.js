import React from 'react';
import './Login.css';

export default function LoginForm() {
  return <div className="loginForm">
    <form>
        <label htmlFor="username">Username / Email</label>
        <input id="username" type="text"/>

        <label htmlFor="password">Password</label>
        <input id="password" type="text"/>

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
