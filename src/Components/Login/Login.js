import React from 'react';
import './Login.css';

export default function LoginForm() {
  return <div className="loginForm">
    <form>
        <label for="username">Username / Email</label>
        <input id="username" type="text"/>

        <label for="password">Password</label>
        <input id="password" type="text"/>

        <div className="checkContent">
          <input id="checkRemember" type="checkbox" name="Remember" value="Remember"/>
          <label for="checkRemember">Remember</label>
        </div>
      <input type="button" value="Sign In"/>

    </form>    
  </div>
}
